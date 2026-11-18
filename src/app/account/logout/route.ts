import { NextResponse, type NextRequest } from "next/server";
import {
  ID_TOKEN_COOKIE,
  clearSessionCookies,
  endpoints,
  isCustomerAccountConfigured,
  readIdToken,
  requestOrigin,
} from "@/lib/customer-account";

export const dynamic = "force-dynamic";

// Clears our cookies and ends the Shopify customer session too, then Shopify
// returns the visitor to the site's home page.
export async function GET(req: NextRequest) {
  const origin = requestOrigin(req);
  const idToken = readIdToken(req.cookies.get(ID_TOKEN_COOKIE)?.value);

  let target: URL;
  if (isCustomerAccountConfigured() && idToken) {
    target = new URL(endpoints.logout());
    target.searchParams.set("id_token_hint", idToken);
    target.searchParams.set("post_logout_redirect_uri", origin);
  } else {
    target = new URL("/", origin);
  }

  const res = NextResponse.redirect(target);
  clearSessionCookies(res, origin);
  return res;
}
