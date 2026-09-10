"use client";

import { useState } from "react";

type Props = {
  variantId: string;
  available: boolean;
  label?: string;
};

const MAX_QTY = 20;

// Quantity picker + checkout. Creates a Shopify cart via our /api/cart route,
// then sends the browser to Shopify's secure hosted checkout. Payment never
// touches this site.
export default function BuyButton({ variantId, available, label = "Buy Now" }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [qty, setQty] = useState(1);

  if (!available) {
    return (
      <span className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 border border-white/15 text-text-muted text-sm sm:text-base font-bold uppercase tracking-[2px] rounded cursor-not-allowed min-h-[52px]">
        Sold Out
      </span>
    );
  }

  function clamp(n: number) {
    if (Number.isNaN(n)) return 1;
    return Math.min(MAX_QTY, Math.max(1, Math.floor(n)));
  }

  async function buy() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity: qty }),
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

  const stepBtn =
    "w-11 h-12 flex items-center justify-center text-white text-xl leading-none hover:bg-accent-blue/20 hover:text-accent-blue-light transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-white";

  return (
    <div className="w-full sm:w-auto">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Quantity stepper */}
        <div>
          <label
            htmlFor="qty"
            className="block text-accent-blue-light text-xs uppercase tracking-[2px] font-bold mb-2 font-body"
          >
            Quantity
          </label>
          <div className="inline-flex items-center rounded border border-white/20 bg-bg-steel-card/60 overflow-hidden">
            <button
              type="button"
              onClick={() => setQty((q) => clamp(q - 1))}
              disabled={qty <= 1}
              aria-label="Decrease quantity"
              className={stepBtn}
            >
              &minus;
            </button>
            <input
              id="qty"
              type="number"
              inputMode="numeric"
              min={1}
              max={MAX_QTY}
              value={qty}
              onChange={(e) => setQty(clamp(parseInt(e.target.value, 10)))}
              aria-label="Quantity"
              className="w-14 h-12 bg-transparent text-center text-white font-heading text-lg font-bold border-x border-white/15 focus:outline-none focus:bg-accent-blue/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
              type="button"
              onClick={() => setQty((q) => clamp(q + 1))}
              disabled={qty >= MAX_QTY}
              aria-label="Increase quantity"
              className={stepBtn}
            >
              +
            </button>
          </div>
        </div>

        {/* Checkout */}
        <button
          onClick={buy}
          disabled={loading}
          className="inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 bg-accent-blue text-white text-sm sm:text-base font-bold uppercase tracking-[2px] rounded hover:bg-accent-blue-dark hover:shadow-[0_0_24px_rgba(46,114,184,0.5)] hover:scale-[1.02] transition-all duration-300 min-h-[52px] sm:mt-7 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? "Taking you to checkout…" : `${label} →`}
        </button>
      </div>

      {error && (
        <p className="text-accent-red text-sm font-body mt-3" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
