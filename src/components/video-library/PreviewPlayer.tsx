"use client";

import { useState } from "react";

// Free preview clip on the sales page. Shows the poster with a play button and
// only loads the clip once the visitor presses play, so the page stays light.
export default function PreviewPlayer({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-black">
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          controlsList="nodownload"
          className="absolute inset-0 w-full h-full object-cover"
        >
          Your browser can&apos;t play this preview.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play the free preview of ${title}`}
          className="group absolute inset-0 w-full h-full"
        >
          <img
            src={poster}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-accent-blue/90 group-hover:bg-accent-blue group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <svg viewBox="0 0 20 20" aria-hidden className="w-6 h-6 ml-0.5 text-white">
                <path d="M6.5 4.5v11l9-5.5-9-5.5Z" fill="currentColor" />
              </svg>
            </span>
          </span>
          <span className="absolute left-2.5 bottom-2.5 px-2 py-1 rounded bg-black/70 text-white text-[10px] uppercase tracking-[1.5px] font-bold font-body">
            Free Preview
          </span>
        </button>
      )}
    </div>
  );
}
