// Decides what the current visitor may watch. Runs on the server for every
// /my-videos request, so access is re-checked against Shopify each time.
import { cache } from "react";
import {
  CustomerAccountAuthError,
  getPurchases,
  isCustomerAccountConfigured,
  numericId,
  readCustomerSession,
} from "@/lib/customer-account";
import { getProduct, isShopifyConfigured } from "@/lib/shopify";
import { allProductHandles } from "@/lib/video-library";

export type VideoAccess =
  | { state: "unconfigured" }
  | { state: "signed-out" }
  | { state: "expired" }
  | { state: "session-ended" }
  | { state: "error" }
  | { state: "active"; email: string | null; ownedHandles: Set<string> };

// Maps each library product handle to its numeric Shopify product ID.
async function productIdsByHandle(): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  if (!isShopifyConfigured()) return map;
  await Promise.all(
    allProductHandles().map(async (handle) => {
      try {
        const product = await getProduct(handle);
        if (product) map.set(handle, numericId(product.id));
      } catch {
        // A missing or unreachable product simply unlocks nothing.
      }
    })
  );
  return map;
}

export const getVideoAccess = cache(async (): Promise<VideoAccess> => {
  if (!isCustomerAccountConfigured()) return { state: "unconfigured" };

  const session = await readCustomerSession();
  if (session.state !== "active") return { state: session.state };

  try {
    const [purchases, ids] = await Promise.all([
      getPurchases(session.accessToken),
      productIdsByHandle(),
    ]);
    const ownedHandles = new Set<string>();
    for (const [handle, id] of ids) {
      if (purchases.productIds.has(id)) ownedHandles.add(handle);
    }
    return { state: "active", email: purchases.email, ownedHandles };
  } catch (e) {
    if (e instanceof CustomerAccountAuthError) return { state: "session-ended" };
    console.error("[video-library] access check failed", e);
    return { state: "error" };
  }
});

export function loginHref(returnTo: string): string {
  return `/account/login?returnTo=${encodeURIComponent(returnTo)}`;
}

export function refreshHref(returnTo: string): string {
  return `/account/refresh?returnTo=${encodeURIComponent(returnTo)}`;
}
