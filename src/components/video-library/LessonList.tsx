import { routes } from "@/lib/links";
import type { LibraryVideo } from "@/lib/video-library";

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="w-4 h-4">
      <rect x="4" y="9" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 9V6.5a3 3 0 0 1 6 0V9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="w-4 h-4">
      <path d="M7 5.5v9l7.5-4.5L7 5.5Z" fill="currentColor" />
    </svg>
  );
}

function LessonNumber({ n, active }: { n: number; active?: boolean }) {
  return (
    <span
      className={`flex-shrink-0 w-9 h-9 rounded-md border flex items-center justify-center font-heading text-sm font-bold ${
        active
          ? "bg-accent-blue border-accent-blue text-white"
          : "bg-accent-blue/15 border-accent-blue/40 text-accent-blue-light"
      }`}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

// Sales page: every lesson, locked. Shows what the buyer gets without
// exposing the videos themselves.
export function LockedLessonList({ videos }: { videos: LibraryVideo[] }) {
  return (
    <ol className="space-y-3">
      {videos.map((v, i) => (
        <li
          key={v.slug}
          className="flex items-center gap-4 bg-bg-card border border-white/10 rounded-lg px-4 py-3.5 sm:px-5"
        >
          <LessonNumber n={i + 1} />
          <div className="min-w-0 flex-1">
            <p className="font-heading text-base sm:text-lg font-bold uppercase text-white leading-tight">
              {v.title}
            </p>
            {v.description ? (
              <p className="text-text-muted text-xs sm:text-sm font-body mt-1 leading-snug">
                {v.description}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 text-text-muted">
            {v.duration ? (
              <span className="text-xs font-body tabular-nums">{v.duration}</span>
            ) : null}
            <LockIcon />
          </div>
        </li>
      ))}
    </ol>
  );
}

// Watch page sidebar: the lessons this customer owns, current one highlighted.
export function WatchLessonList({
  videos,
  currentSlug,
}: {
  videos: LibraryVideo[];
  currentSlug?: string;
}) {
  return (
    <ol className="space-y-2">
      {videos.map((v, i) => {
        const active = v.slug === currentSlug;
        return (
          <li key={v.slug}>
            <a
              href={`${routes.myVideos}/${v.slug}`}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 border transition-colors ${
                active
                  ? "bg-accent-blue/10 border-accent-blue/50"
                  : "bg-bg-card/60 border-white/5 hover:border-accent-blue/40 hover:bg-white/5"
              }`}
            >
              <LessonNumber n={i + 1} active={active} />
              <span className="min-w-0 flex-1">
                <span
                  className={`block font-body text-sm font-semibold leading-snug ${
                    active ? "text-white" : "text-text-secondary"
                  }`}
                >
                  {v.title}
                </span>
                {v.duration ? (
                  <span className="block text-text-muted text-xs font-body tabular-nums mt-0.5">
                    {v.duration}
                  </span>
                ) : null}
              </span>
              <span className={active ? "text-accent-blue-light" : "text-text-muted"}>
                <PlayIcon />
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
