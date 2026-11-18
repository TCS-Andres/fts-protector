import { NextResponse, type NextRequest } from "next/server";
import {
  SESSION_COOKIE,
  clearSessionCookies,
  isCustomerAccountConfigured,
  readSessionTokens,
  refreshTokens,
  requestOrigin,
  safeReturnTo,
  setSessionCookies,
} from "@/lib/customer-account";

export const dynamic = "force-dynamic";

// Pages can't write cookies while rendering, so when the access token has
// expired they send the visitor through here. We swap the refresh token for
// a new access token and bounce straight back. If that fails, sign in again.
export async function GET(req: NextRequest) {
  const origin = requestOrigin(req);
  const returnTo = safeReturnTo(req.nextUrl.searchParams.get("returnTo"));
  const tokens = readSessionTokens(req.cookies.get(SESSION_COOKIE)?.value);

  const signInAgain = () => {
    const url = new URL("/account/login", origin);
    url.searchParams.set("returnTo", returnTo);
    const res = NextResponse.redirect(url);
    clearSessionCookies(res, origin);
    return res;
  };

  if (!isCustomerAccountConfigured() || !tokens?.rt) return signInAgain();

  try {
    const fresh = await refreshTokens(tokens.rt, origin);
    const res = NextResponse.redirect(new URL(returnTo, origin));
    setSessionCookies(res, origin, fresh, tokens.rt);
    return res;
  } catch (e) {
    console.error("[account] token refresh failed", e);
    return signInAgain();
  }
}
