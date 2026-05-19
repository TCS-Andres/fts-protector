"use client";

import { useState } from "react";
import CountdownTimer from "./CountdownTimer";

export default function MobileCTA() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 mobile-cta-enter">
      <div className="bg-accent-red/95 backdrop-blur-sm shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex items-stretch">
        <a
          href="https://buy.stripe.com/9B65kF3sl0W96yQ1TS57W04"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-3 py-3 flex flex-col items-center justify-center gap-1 text-white"
        >
          <span className="font-bold uppercase tracking-[1.5px] text-xs">
            $147 Early Bird, Ends in
          </span>
          <span className="text-sm">
            <CountdownTimer variant="compact" />
          </span>
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/80 hover:text-white text-lg px-3 self-stretch flex items-center"
          aria-label="Dismiss"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
