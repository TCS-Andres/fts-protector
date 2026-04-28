"use client";

import { useEffect, useState } from "react";

const DEADLINE_ISO = "2026-05-06T03:59:00Z";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function getRemaining(): { d: number; h: number; m: number; s: number; expired: boolean } {
  const ms = new Date(DEADLINE_ISO).getTime() - Date.now();
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0, expired: true };
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
    expired: false,
  };
}

type Variant = "compact" | "card";

export default function CountdownTimer({ variant = "compact" }: { variant?: Variant }) {
  const [t, setT] = useState(() => getRemaining());

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (t.expired) return null;

  if (variant === "compact") {
    return (
      <span
        className="inline-flex items-center gap-1 font-mono tabular-nums tracking-tight"
        suppressHydrationWarning
      >
        <span className="font-bold text-white">{t.d}d</span>
        <span className="text-white/60">·</span>
        <span className="font-bold text-white">{pad(t.h)}h</span>
        <span className="text-white/60">·</span>
        <span className="font-bold text-white">{pad(t.m)}m</span>
        <span className="text-white/60">·</span>
        <span className="font-bold text-white">{pad(t.s)}s</span>
      </span>
    );
  }

  const items: Array<[number | string, string]> = [
    [t.d, "Days"],
    [pad(t.h), "Hours"],
    [pad(t.m), "Min"],
    [pad(t.s), "Sec"],
  ];

  return (
    <div
      className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto"
      suppressHydrationWarning
    >
      {items.map(([value, label]) => (
        <div
          key={label}
          className="bg-bg-primary/60 border border-accent-red/40 rounded px-2 py-3 text-center"
        >
          <div className="font-heading text-2xl sm:text-3xl font-bold text-white tabular-nums">
            {value}
          </div>
          <div className="text-text-muted text-[10px] uppercase tracking-[2px] font-body mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
