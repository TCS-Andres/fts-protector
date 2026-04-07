"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl lg:text-[40px] font-bold text-white font-heading">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 25, suffix: "+", label: "Years of Protection Experience" },
  { value: 20, suffix: "K+", label: "Instagram Followers" },
  { value: 500, suffix: "+", label: "Professionals Trained" },
  { value: 3, suffix: "", label: "Hour Hands-On Workshop" },
];

export default function TrustBar() {
  return (
    <section className="bg-bg-secondary py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-text-secondary text-xs uppercase tracking-[2px] mt-2 font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
