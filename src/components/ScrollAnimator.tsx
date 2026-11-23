"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    // Links that point at a real section (e.g. /hire-us?service=Bodyguard#book,
    // /training#where-we-train) land on that section. Anything else, such as
    // the old #register anchor, opens at the top of the page.
    const { hash, pathname, search } = window.location;
    if (hash && hash !== "#register") {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView());
        return;
      }
    }
    if (hash) history.replaceState(null, "", pathname + search);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll, .red-line").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
