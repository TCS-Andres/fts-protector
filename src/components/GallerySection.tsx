"use client";

import { useEffect, useRef, useState } from "react";

const photos = Array.from({ length: 20 }, (_, i) => ({
  src: `/gallery/workshop_${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Everyone Is A Protector workshop, KO Zone Miami, May 2026, scene ${i + 1}`,
}));

export default function GallerySection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Track which slide is centered for the dots indicator
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handler = () => {
      const slideWidth = el.clientWidth;
      if (slideWidth === 0) return;
      setActiveIndex(Math.round(el.scrollLeft / slideWidth));
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-bg-secondary py-14 sm:py-20 lg:py-28 relative noise-bg overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-accent-gold text-sm uppercase tracking-[4px] font-bold mb-4 font-body">
            From the last workshop
          </p>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
            Real Training. Real People. Real Skills.
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto font-body">
            Scenes from the May 2026 seminar at KO Zone, Miami. This is what 2 hours of hands-on protection training looks like.
          </p>
        </div>

        {/* Mobile/tablet: snap carousel */}
        <div className="lg:hidden relative animate-on-scroll">
          <div
            ref={scrollerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6"
            style={{ scrollbarWidth: "none" }}
          >
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setLightbox(i)}
                className="snap-center shrink-0 w-full pr-3 last:pr-0 focus:outline-none"
              >
                <div className="aspect-[3/2] rounded-lg overflow-hidden bg-bg-card border border-white/5">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white text-xl flex items-center justify-center hover:bg-accent-red/80 transition-colors"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white text-xl flex items-center justify-center hover:bg-accent-red/80 transition-colors"
          >
            &#8250;
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-accent-red" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: masonry-style 4-column grid showing all photos */}
        <div className="hidden lg:grid grid-cols-4 gap-3 animate-on-scroll">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setLightbox(i)}
              className={`aspect-[3/2] rounded-lg overflow-hidden bg-bg-card border border-white/5 group focus:outline-none focus:ring-2 focus:ring-accent-red ${
                i === 0 || i === 7 ? "col-span-2 row-span-2 aspect-square" : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
            </button>
          ))}
        </div>

        <p className="text-center text-text-muted text-sm mt-10 font-body animate-on-scroll">
          Click any photo to view full size. The June 13 seminar runs the same format with new drills.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            aria-label="Close"
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
          >
            &times;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
          >
            &#8249;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i === null ? null : (i + 1) % photos.length));
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
          >
            &#8250;
          </button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
