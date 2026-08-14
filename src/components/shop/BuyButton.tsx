"use client";

import { useState } from "react";

type Props = {
  variantId: string;
  available: boolean;
  label?: string;
};

// Creates a Shopify cart via our /api/cart route, then sends the browser to
// Shopify's secure hosted checkout. Payment never touches this site.
export default function BuyButton({ variantId, available, label = "Buy Now" }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!available) {
    return (
      <span className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 border border-white/15 text-text-muted text-sm sm:text-base font-bold uppercase tracking-[2px] rounded cursor-not-allowed min-h-[52px]">
        Sold Out
      </span>
    );
  }

  async function buy() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity: 1 }),
      });
      const json = (await res.json()) as { checkoutUrl?: string; error?: string };
      if (json.checkoutUrl) {
        window.location.href = json.checkoutUrl;
        return;
      }
      setError(json.error || "Something went wrong. Please try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div className="w-full sm:w-auto">
      <button
        onClick={buy}
        disabled={loading}
        className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.02] transition-all duration-300 min-h-[52px] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {loading ? "Taking you to checkout…" : `${label} →`}
      </button>
      {error && (
        <p className="text-accent-red text-sm font-body mt-3" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
