// Shopify Customer Account API (headless), public client + PKCE.
// No client secret: token requests prove themselves with the PKCE verifier and
// an Origin header that must match a JavaScript origin registered in Shopify.
// Customers sign in on Shopify's hosted login page; this site only ever holds
// their tokens in encrypted, httpOnly cookies. Server-only module.
//
// Env (set in Vercel and .env.local):
//   SHOPIFY_SHOP_ID                          e.g. 66083127381
//   SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID       Headless channel > Customer Account API
//   SESSION_SECRET                           32+ random characters
//   SHOPIFY_CUSTOMER_ACCOUNT_API_VERSION     optional, defaults to 2026-10
//
// Endpoints match the shop's discovery documents:
//   https://franckthesolution.myshopify.com/.well-known/openid-configuration
//   https://franckthesolution.myshopify.com/.well-known/customer-account-api
import { cookies } from "next/headers";
import type { NextRequest, NextResponse } from "next/server";
import { decryptJson, encryptJson, hasSessionSecret } from "@/lib/session-crypto";

const SHOP_ID = process.env.SHOPIFY_SHOP_ID;
const CLIENT_ID = process.env.SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID;
const API_VERSION = process.env.SHOPIFY_CUSTOMER_ACCOUNT_API_VERSION || "2026-10";

// Shopify's edge rejects requests without a User-Agent (HTTP 403).
const USER_AGENT = "FrancktheSolution-Site/1.0";

export const SCOPES = "openid email customer-account-api:full";
export const SESSION_COOKIE = "fts_ca";
export const ID_TOKEN_COOKIE = "fts_ca_id";
export const OAUTH_COOKIE = "fts_ca_oauth";
export const CALLBACK_PATH = "/account/callback";
export const DEFAULT_RETURN_TO = "/my-videos";

// Refresh tokens outlive access tokens; keep the cookie for 30 days and let
// Shopify decide when the refresh token itself is no longer valid.
const SESSION_MAX_AGE = 60 * 60 * 24 * 30;

export function isCustomerAccountConfigured(): boolean {
  return Boolean(SHOP_ID && CLIENT_ID && hasSessionSecret());
}

function authBase(): string {
  return `https://shopify.com/authentication/${SHOP_ID}`;
}

export const endpoints = {
  authorize: () => `${authBase()}/oauth/authorize`,
  token: () => `${authBase()}/oauth/token`,
  logout: () => `${authBase()}/logout`,
  graphql: () => `https://shopify.com/${SHOP_ID}/account/customer/api/${API_VERSION}/graphql`,
};

// ---------------------------------------------------------------------------
// Request helpers
// ---------------------------------------------------------------------------

// The public origin the visitor is on (www.franckthesolution.com, or a Vercel
// preview URL). Vercel sets x-forwarded-host / x-forwarded-proto.
export function requestOrigin(req: NextRequest): string {
  const first = (v: string | null) => (v ? v.split(",")[0].trim() : "");
  const host = first(req.headers.get("x-forwarded-host")) || first(req.headers.get("host"));
  const proto =
    first(req.headers.get("x-forwarded-proto")) || req.nextUrl.protocol.replace(":", "");
  return host ? `${proto}://${host}` : req.nextUrl.origin;
}

// Only allow same-site relative paths, so returnTo can never bounce a visitor
// to another domain.
export function safeReturnTo(value: string | null | undefined): string {
  if (!value) return DEFAULT_RETURN_TO;
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("\\")) {
    return DEFAULT_RETURN_TO;
  }
  if ([...value].some((c) => c.charCodeAt(0) < 32)) return DEFAULT_RETURN_TO;
  return value;
}

export function cookieOptions(origin: string, maxAge: number, path = "/") {
  return {
    httpOnly: true,
    secure: origin.startsWith("https://"),
    sameSite: "lax" as const,
    path,
    maxAge,
  };
}

// ---------------------------------------------------------------------------
// Tokens and session cookies
// ---------------------------------------------------------------------------

export type OAuthState = {
  verifier: string;
  state: string;
  nonce: string;
  returnTo: string;
  redirectUri: string;
};

type SessionTokens = {
  at: string; // access token
  rt: string; // refresh token
  exp: number; // access token expiry, unix seconds (with a safety margin)
};

type TokenResponse = {
  access_token: string;
  expires_in: number;
  id_token?: string;
  refresh_token?: string;
};

export class CustomerAccountAuthError extends Error {}

function nowSeconds(): number {
  return Math.floor(Date.now() / 1000);
}

// Public client: Shopify checks the Origin header against the JavaScript
// origins registered for this client (live site and the preview branch).
async function postToken(body: URLSearchParams, origin: string): Promise<TokenResponse> {
  const res = await fetch(endpoints.token(), {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: origin,
      "User-Agent": USER_AGENT,
    },
    body,
    cache: "no-store",
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new CustomerAccountAuthError(
      `Shopify token request failed (HTTP ${res.status}) ${detail.slice(0, 200)}`
    );
  }
  return (await res.json()) as TokenResponse;
}

export function exchangeCode(code: string, oauth: OAuthState): Promise<TokenResponse> {
  return postToken(
    new URLSearchParams({
      grant_type: "authorization_code",
      client_id: CLIENT_ID as string,
      redirect_uri: oauth.redirectUri,
      code,
      code_verifier: oauth.verifier,
    }),
    new URL(oauth.redirectUri).origin
  );
}

export function refreshTokens(refreshToken: string, origin: string): Promise<TokenResponse> {
  return postToken(
    new URLSearchParams({
      grant_type: "refresh_token",
      client_id: CLIENT_ID as string,
      refresh_token: refreshToken,
    }),
    origin
  );
}

// Reads the claims of the id_token we just received straight from Shopify's
// token endpoint over TLS (OIDC code flow), so no signature check is needed.
export function idTokenClaims(idToken: string): Record<string, unknown> | null {
  try {
    const payload = idToken.split(".")[1];
    return JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  } catch {
    return null;
  }
}

export function isIdTokenValidFor(idToken: string, nonce: string): boolean {
  const claims = idTokenClaims(idToken);
  if (!claims) return false;
  const audOk = Array.isArray(claims.aud)
    ? claims.aud.includes(CLIENT_ID)
    : claims.aud === CLIENT_ID;
  return claims.nonce === nonce && audOk;
}

// Writes the session cookies onto a route handler response.
export function setSessionCookies(
  res: NextResponse,
  origin: string,
  tokens: TokenResponse,
  previousRefreshToken?: string
): void {
  const refresh = tokens.refresh_token || previousRefreshToken || "";
  const session: SessionTokens = {
    at: tokens.access_token,
    rt: refresh,
    // Treat the token as expired a minute early so a page never renders with
    // a token that dies mid-request.
    exp: nowSeconds() + Math.max(60, tokens.expires_in - 60),
  };
  res.cookies.set(SESSION_COOKIE, encryptJson(session), cookieOptions(origin, SESSION_MAX_AGE));
  if (tokens.id_token) {
    res.cookies.set(
      ID_TOKEN_COOKIE,
      encryptJson({ idt: tokens.id_token }),
      cookieOptions(origin, SESSION_MAX_AGE)
    );
  }
}

export function clearSessionCookies(res: NextResponse, origin: string): void {
  res.cookies.set(SESSION_COOKIE, "", cookieOptions(origin, 0));
  res.cookies.set(ID_TOKEN_COOKIE, "", cookieOptions(origin, 0));
}

export function readSessionTokens(raw: string | undefined): SessionTokens | null {
  return decryptJson<SessionTokens>(raw);
}

export function readIdToken(raw: string | undefined): string | null {
  return decryptJson<{ idt: string }>(raw)?.idt ?? null;
}

// For Server Components. Cookies can't be written while a page renders, so an
// expired token is reported back and the page redirects to /account/refresh.
export type CustomerSession =
  | { state: "signed-out" }
  | { state: "expired" }
  | { state: "active"; accessToken: string };

export async function readCustomerSession(): Promise<CustomerSession> {
  const store = await cookies();
  const tokens = readSessionTokens(store.get(SESSION_COOKIE)?.value);
  if (!tokens?.at) return { state: "signed-out" };
  if (tokens.exp <= nowSeconds()) {
    return tokens.rt ? { state: "expired" } : { state: "signed-out" };
  }
  return { state: "active", accessToken: tokens.at };
}

// ---------------------------------------------------------------------------
// GraphQL
// ---------------------------------------------------------------------------

export async function customerAccountQuery<T>(
  accessToken: string,
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const res = await fetch(endpoints.graphql(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
      "User-Agent": USER_AGENT,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  if (res.status === 401) {
    throw new CustomerAccountAuthError("Customer session is no longer valid");
  }
  if (!res.ok) {
    throw new Error(`Customer Account API request failed with HTTP ${res.status}`);
  }
  const json = (await res.json()) as { data?: T; errors?: { message: string }[] };
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }
  if (!json.data) throw new Error("Customer Account API returned no data");
  return json.data;
}

// Orders that still grant access. Refunded, voided, expired and pending
// (unpaid) orders do not. Cancelled orders are excluded separately.
const OWNING_STATUSES = new Set(["PAID", "PARTIALLY_PAID", "PARTIALLY_REFUNDED", "AUTHORIZED"]);

const OWNED_PRODUCTS_QUERY = /* GraphQL */ `
  query OwnedProducts($first: Int!, $after: String) {
    customer {
      emailAddress {
        emailAddress
      }
      orders(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          cancelledAt
          financialStatus
          lineItems(first: 25) {
            nodes {
              productId
              refundableQuantity
            }
          }
        }
      }
    }
  }
`;

type OwnedProductsData = {
  customer: {
    emailAddress: { emailAddress: string | null } | null;
    orders: {
      pageInfo: { hasNextPage: boolean; endCursor: string | null };
      nodes: {
        id: string;
        cancelledAt: string | null;
        financialStatus: string | null;
        lineItems: { nodes: { productId: string | null; refundableQuantity: number }[] };
      }[];
    };
  };
};

// "gid://shopify/Product/123" and "123" both normalize to "123".
export function numericId(id: string): string {
  return id.split("/").pop() ?? id;
}

export type Purchases = { email: string | null; productIds: Set<string> };

export async function getPurchases(accessToken: string): Promise<Purchases> {
  const productIds = new Set<string>();
  let email: string | null = null;
  let after: string | null = null;

  // 20 orders per page, up to 200 orders. Plenty for one customer.
  for (let page = 0; page < 10; page++) {
    const data: OwnedProductsData = await customerAccountQuery<OwnedProductsData>(
      accessToken,
      OWNED_PRODUCTS_QUERY,
      { first: 20, after }
    );
    email = data.customer.emailAddress?.emailAddress ?? email;
    for (const order of data.customer.orders.nodes) {
      if (order.cancelledAt) continue;
      if (!order.financialStatus || !OWNING_STATUSES.has(order.financialStatus)) continue;
      for (const line of order.lineItems.nodes) {
        if (line.productId && line.refundableQuantity > 0) {
          productIds.add(numericId(line.productId));
        }
      }
    }
    const { hasNextPage, endCursor } = data.customer.orders.pageInfo;
    if (!hasNextPage || !endCursor) break;
    after = endCursor;
  }

  return { email, productIds };
}
