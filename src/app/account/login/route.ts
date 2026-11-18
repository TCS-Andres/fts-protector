import { NextResponse, type NextRequest } from "next/server";
import {
  CALLBACK_PATH,
  OAUTH_COOKIE,
  SCOPES,
  cookieOptions,
  endpoints,
  isCustomerAccountConfigured,
  requestOrigin,
  safeReturnTo,
  type OAuthState,
} from "@/lib/customer-account";
import { encryptJson, randomToken, sha256Base64Url } from "@/lib/session-crypto";

export const dynamic = "force-dynamic";

// Starts sign-in: stores PKCE verifier, state and nonce in a short-lived
// encrypted cookie, then sends the visitor to Shopify's hosted login page.
export async function GET(req: NextRequest) {
  const origin = requestOrigin(req);
  const returnTo = safeReturnTo(req.nextUrl.searchParams.get("returnTo"));

  if (!isCustomerAccountConfigured()) {
    return NextResponse.redirect(new URL("/my-videos?signin=unavailable", origin));
  }

  const oauth: OAuthState = {
    verifier: randomToken(48),
    state: randomToken(24),
    nonce: randomToken(24),
    returnTo,
    redirectUri: `${origin}${CALLBACK_PATH}`,
  };

  const url = new URL(endpoints.authorize());
  url.searchParams.set("scope", SCOPES);
  url.searchParams.set("client_id", process.env.SHOPIFY_CUSTOMER_ACCOUNT_CLIENT_ID as string);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", oauth.redirectUri);
  url.searchParams.set("state", oauth.state);
  url.searchParams.set("nonce", oauth.nonce);
  url.searchParams.set("code_challenge", sha256Base64Url(oauth.verifier));
  url.searchParams.set("code_challenge_method", "S256");

  const res = NextResponse.redirect(url);
  res.cookies.set(OAUTH_COOKIE, encryptJson(oauth), cookieOptions(origin, 600, "/account"));
  return res;
}
