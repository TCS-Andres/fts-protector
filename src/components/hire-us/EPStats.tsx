"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 1600,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
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
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
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
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 25, suffix: "+", label: "Years of Operational Experience" },
  { value: 1000, suffix: "+", label: "Protective Movements Executed" },
  { value: 0, suffix: "", label: "Client Incidents on Record" },
  { value: 24, suffix: "/7", label: "Availability for Active Clients" },
];

export default function EPStats() {
  return (
    <section className="bg-bg-secondary py-12 sm:py-16 lg:py-20 relative border-y border-accent-blue/20">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-blue/5" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:divide-x lg:divide-white/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${i > 0 ? "lg:pl-6" : ""}`}
            >
              <CountUp target={s.value} suffix={s.suffix} />
              <p className="text-text-secondary text-[11px] sm:text-xs uppercase tracking-[2px] mt-3 font-body leading-tight max-w-[180px] mx-auto">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
