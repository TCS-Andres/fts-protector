import { NextResponse } from "next/server";
import { createCartCheckoutUrl, isShopifyConfigured } from "@/lib/shopify";

// Creates a Shopify cart for a variant and returns the hosted checkout URL.
// The client redirects the browser to that URL so payment happens on Shopify.
export async function POST(req: Request) {
  if (!isShopifyConfigured()) {
    return NextResponse.json(
      { error: "The store is not connected yet." },
      { status: 503 }
    );
  }
  try {
    const body = (await req.json()) as { variantId?: string; quantity?: number };
    if (!body.variantId || typeof body.variantId !== "string") {
      return NextResponse.json({ error: "Missing product variant." }, { status: 400 });
    }
    const quantity =
      typeof body.quantity === "number" && body.quantity > 0 ? body.quantity : 1;
    const checkoutUrl = await createCartCheckoutUrl(body.variantId, quantity);
    return NextResponse.json({ checkoutUrl });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Could not start checkout." },
      { status: 500 }
    );
  }
}
