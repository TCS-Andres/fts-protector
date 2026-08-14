"use client";

import { useState } from "react";
import type { ProductMedia } from "@/lib/shopify";

// Interactive product gallery: a large main viewer plus a clickable thumbnail
// strip. Cycles through images and plays Shopify-hosted or embedded videos.
export default function ProductGallery({
  media,
  title,
}: {
  media: ProductMedia[];
  title: string;
}) {
  const [active, setActive] = useState(0);

  if (media.length === 0) {
    return (
      <div className="rounded-xl overflow-hidden border border-accent-blue/30 bg-black aspect-square flex items-center justify-center text-text-muted font-body">
        No image
      </div>
    );
  }

  const current = media[active] ?? media[0];

  return (
    <div>
      {/* Main viewer */}
      <div className="rounded-xl overflow-hidden border border-accent-blue/30 shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-black">
        {current.kind === "image" && (
          <img
            src={current.url}
            alt={current.alt || title}
            className="w-full h-auto"
          />
        )}
        {current.kind === "video" && (
          <video
            key={current.id}
            controls
            playsInline
            preload="metadata"
            poster={current.poster ?? undefined}
            className="w-full h-auto bg-black"
          >
            {current.sources.map((s) => (
              <source key={s.url} src={s.url} type={s.type} />
            ))}
          </video>
        )}
        {current.kind === "external_video" && (
          <div className="aspect-video">
            <iframe
              src={current.embedUrl}
              title={current.alt || title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {media.length > 1 && (
        <div className="grid grid-cols-5 sm:grid-cols-6 gap-2.5 mt-3">
          {media.map((m, i) => {
            const isActive = i === active;
            const isVideo = m.kind !== "image";
            const thumbUrl = m.kind === "image" ? m.url : m.poster;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={isVideo ? `Play video ${i + 1}` : `View image ${i + 1}`}
                aria-pressed={isActive}
                className={`relative rounded-lg overflow-hidden border bg-black aspect-square transition-all ${
                  isActive
                    ? "border-accent-blue-light ring-2 ring-accent-blue-light/60"
                    : "border-white/10 hover:border-accent-blue/50 opacity-80 hover:opacity-100"
                }`}
              >
                {thumbUrl ? (
                  <img
                    src={thumbUrl}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="w-full h-full flex items-center justify-center text-text-muted text-lg">
                    ▶
                  </span>
                )}
                {isVideo && (
                  <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="w-8 h-8 rounded-full bg-black/60 border border-white/50 flex items-center justify-center text-white text-[11px] backdrop-blur-sm">
                      ▶
                    </span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
