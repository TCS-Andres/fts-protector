"use client";

import { useState, useEffect } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setVisible(window.scrollY > window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 mobile-cta-enter">
      <div className="bg-accent-red px-4 py-3 flex items-center gap-2">
        <a
          href="#register"
          className="flex-1 text-center text-white font-bold uppercase tracking-[2px] text-sm py-2"
        >
          Secure Your Spot
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/80 hover:text-white text-lg px-2"
          aria-label="Dismiss"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
