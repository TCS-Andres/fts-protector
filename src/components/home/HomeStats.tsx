"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({
  target,
  suffix = "",
  duration = 1600,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span
      ref={ref}
      className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-none"
    >
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 20, suffix: "+", label: "Years on the Front Line" },
  { value: 3, suffix: "", label: "Patents — TheSelfDefender" },
  { value: 100, suffix: "%", label: "Mission-First Mindset" },
  { value: 24, suffix: "/7", label: "Availability for Clients" },
];

export default function HomeStats() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 relative border-y border-accent-blue/20"
      style={{ background: "linear-gradient(90deg, #0A0E14 0%, #101A28 50%, #0A0E14 100%)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:divide-x lg:divide-white/10">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? "lg:pl-6" : ""}`}>
              <CountUp target={s.value} suffix={s.suffix} />
              <p className="text-text-secondary text-[11px] sm:text-xs uppercase tracking-[2px] mt-3 font-body leading-tight max-w-[170px] mx-auto">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
