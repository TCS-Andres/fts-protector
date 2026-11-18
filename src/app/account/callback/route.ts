import { NextResponse, type NextRequest } from "next/server";
import {
  OAUTH_COOKIE,
  cookieOptions,
  exchangeCode,
  isCustomerAccountConfigured,
  isIdTokenValidFor,
  requestOrigin,
  setSessionCookies,
  type OAuthState,
} from "@/lib/customer-account";
import { decryptJson } from "@/lib/session-crypto";

export const dynamic = "force-dynamic";

// Shopify sends the visitor back here with ?code=&state= after sign-in.
export async function GET(req: NextRequest) {
  const origin = requestOrigin(req);
  const params = req.nextUrl.searchParams;
  const oauth = decryptJson<OAuthState>(req.cookies.get(OAUTH_COOKIE)?.value);

  const fail = (reason: string) => {
    const res = NextResponse.redirect(new URL(`/my-videos?signin=${reason}`, origin));
    res.cookies.set(OAUTH_COOKIE, "", cookieOptions(origin, 0, "/account"));
    return res;
  };

  if (!isCustomerAccountConfigured()) return fail("unavailable");
  if (params.get("error")) return fail("cancelled");

  const code = params.get("code");
  const state = params.get("state");
  if (!oauth || !code || !state || state !== oauth.state) return fail("expired");

  try {
    const tokens = await exchangeCode(code, oauth);
    if (tokens.id_token && !isIdTokenValidFor(tokens.id_token, oauth.nonce)) {
      return fail("failed");
    }
    const res = NextResponse.redirect(new URL(oauth.returnTo, origin));
    setSessionCookies(res, origin, tokens);
    res.cookies.set(OAUTH_COOKIE, "", cookieOptions(origin, 0, "/account"));
    return res;
  } catch (e) {
    console.error("[account] code exchange failed", e);
    return fail("failed");
  }
}
