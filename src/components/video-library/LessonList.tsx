import BuyButton from "@/components/shop/BuyButton";
import PreviewPlayer from "@/components/video-library/PreviewPlayer";
import { routes } from "@/lib/links";
import { formatMoney, type Product } from "@/lib/shopify";
import { salesAnchor, videoNumber, type LibraryVideo } from "@/lib/video-library";

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

export function LessonNumber({ n, active }: { n: number; active?: boolean }) {
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

export type VideoOffer = { video: LibraryVideo; product: Product | null };

// Sales page: every published video with its own price and Buy button. The
// video itself stays locked until it is bought.
export function VideoOfferList({
  offers,
  bundleOnSale = false,
}: {
  offers: VideoOffer[];
  /** Tag the videos the bundle includes, when a bundle is for sale. */
  bundleOnSale?: boolean;
}) {
  return (
    <ol className="space-y-4">
      {offers.map(({ video, product }) => {
        const variant = product?.variants[0];
        const onSale = Boolean(product?.availableForSale && variant?.availableForSale);
        return (
          <li
            key={video.slug}
            id={salesAnchor(video)}
            className="scroll-mt-36 bg-bg-card border border-white/10 rounded-xl p-4 sm:p-5"
          >
            <div
              className={
                video.preview
                  ? "grid sm:grid-cols-[240px_minmax(0,1fr)] gap-5 items-start"
                  : undefined
              }
            >
              {video.preview ? (
                <PreviewPlayer
                  src={video.preview.src}
                  poster={video.preview.poster}
                  title={video.title}
                />
              ) : null}
              <div className="flex items-start gap-4">
                <LessonNumber n={videoNumber(video)} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white leading-tight">
                      {video.title}
                    </h3>
                    <span className="flex items-center gap-2 flex-shrink-0 text-text-muted pt-1">
                      {video.duration ? (
                        <span className="text-xs font-body tabular-nums">{video.duration}</span>
                      ) : null}
                      <LockIcon />
                    </span>
                  </div>
                  {video.description ? (
                    <p className="text-text-secondary text-sm font-body mt-2 leading-relaxed">
                      {video.description}
                    </p>
                  ) : null}
                  {video.gear ? (
                    <a
                      href={video.gear.href}
                      className="inline-block mt-2 text-accent-blue-light text-xs uppercase tracking-[1.5px] font-bold font-body hover:text-white transition-colors"
                    >
                      {video.gear.label} &rarr;
                    </a>
                  ) : null}
                  {bundleOnSale && video.inBundle ? (
                    <p className="inline-block mt-3 px-2.5 py-1 rounded border border-accent-blue/40 bg-accent-blue/10 text-accent-blue-light text-[11px] uppercase tracking-[1.5px] font-bold font-body">
                      In the bundle
                    </p>
                  ) : null}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-5">
                    {variant && onSale ? (
                      <>
                        <p className="font-heading text-3xl font-bold text-white leading-none">
                          {formatMoney(variant.price).replace(/\.00$/, "")}
                        </p>
                        <BuyButton
                          variantId={variant.id}
                          available
                          label="Buy This Video"
                          showQuantity={false}
                        />
                      </>
                    ) : (
                      <p className="font-heading text-xl font-bold uppercase text-text-muted">
                        Coming Soon
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

// My Videos: published videos this customer doesn't own yet, linking to
// where they can buy each one.
export function MoreVideosList({ videos }: { videos: LibraryVideo[] }) {
  return (
    <ol className="space-y-3">
      {videos.map((v) => (
        <li key={v.slug}>
          <a
            href={`${routes.videoLibrary}#${salesAnchor(v)}`}
            className="flex items-center gap-4 bg-bg-card/60 border border-white/10 rounded-lg px-4 py-3.5 sm:px-5 hover:border-accent-blue/40 transition-colors"
          >
            <LessonNumber n={videoNumber(v)} />
            <span className="min-w-0 flex-1 font-heading text-base sm:text-lg font-bold uppercase text-text-secondary leading-tight">
              {v.title}
            </span>
            <span className="flex items-center gap-2 flex-shrink-0 text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body">
              <LockIcon />
              Get It
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}

// Watch page sidebar: the videos this customer owns, current one highlighted.
export function WatchLessonList({
  videos,
  currentSlug,
}: {
  videos: LibraryVideo[];
  currentSlug?: string;
}) {
  return (
    <ol className="space-y-2">
      {videos.map((v) => {
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
              <LessonNumber n={videoNumber(v)} active={active} />
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
