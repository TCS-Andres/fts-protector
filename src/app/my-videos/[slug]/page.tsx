import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { WatchLessonList } from "@/components/video-library/LessonList";
import LibraryShell, {
  Panel,
  SignedInBar,
  primaryButton,
  secondaryButton,
} from "@/components/video-library/LibraryShell";
import { signEmbedUrl } from "@/lib/bunny-stream";
import { routes } from "@/lib/links";
import { getVideoAccess, loginHref, refreshHref } from "@/lib/video-access";
import { getVideo, salesAnchor, videoNumber, videosUnlockedBy } from "@/lib/video-library";

// Ownership is re-checked and a fresh, short-lived player link is signed on
// every request. Nothing here is cached.
export const dynamic = "force-dynamic";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideo(slug);
  return { title: `${video?.title ?? "Video"} | My Videos | FrancktheSolution` };
}

export default async function WatchPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const video = getVideo(slug);
  if (!video) notFound();

  const path = `${routes.myVideos}/${video.slug}`;
  const access = await getVideoAccess();

  if (access.state === "expired") redirect(refreshHref(path));
  if (access.state === "signed-out" || access.state === "session-ended") {
    redirect(loginHref(path));
  }
  if (access.state !== "active") redirect(routes.myVideos);

  const owned = videosUnlockedBy(access.ownedHandles);
  const index = owned.findIndex((v) => v.slug === video.slug);

  // Signed in, but they haven't bought this video.
  if (index === -1) {
    return (
      <LibraryShell>
        <Panel>
          <p className="text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-4 font-body">
            Locked Video
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold uppercase leading-[1.02] text-white mb-5">
            {video.title}
          </h1>
          <p className="text-text-secondary text-base leading-relaxed font-body mb-8">
            This video isn&apos;t on your account yet. Buy it to unlock it, or
            sign in with the email you used at checkout.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <a href={`${routes.videoLibrary}#${salesAnchor(video)}`} className={primaryButton}>
              Get This Video &rarr;
            </a>
            <a href={routes.myVideos} className={secondaryButton}>
              My Videos
            </a>
          </div>
          <SignedInBar email={access.email} />
        </Panel>
      </LibraryShell>
    );
  }

  const src = signEmbedUrl(video.bunnyVideoId);
  const prev = index > 0 ? owned[index - 1] : null;
  const next = index < owned.length - 1 ? owned[index + 1] : null;

  return (
    <LibraryShell>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <a
          href={routes.myVideos}
          className="inline-flex items-center gap-2 text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body hover:text-white transition-colors"
        >
          &larr; All My Videos
        </a>
        <SignedInBar email={access.email} />
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-10 items-start">
        <div>
          {/* Player */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-accent-blue/25 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
            {src ? (
              <iframe
                src={src}
                title={video.title}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <p className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
                  This Video Is Being Prepared
                </p>
                <p className="text-text-muted text-sm font-body max-w-sm">
                  It will be ready to stream shortly. Check back soon.
                </p>
              </div>
            )}
          </div>

          {/* Details */}
          <p className="text-accent-blue-light text-xs uppercase tracking-[4px] font-bold font-body mt-7 mb-3">
            Video {String(videoNumber(video)).padStart(2, "0")}
            {video.duration ? ` / ${video.duration}` : ""}
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold uppercase leading-[1.02] text-white mb-4">
            {video.title}
          </h1>
          {video.description ? (
            <p className="text-text-secondary text-base leading-relaxed font-body max-w-3xl">
              {video.description}
            </p>
          ) : null}
          {video.gear ? (
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-lg border border-accent-blue/30 bg-accent-blue/5 px-5 py-4 max-w-3xl">
              <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold font-body">
                Gear in this video
              </p>
              <a
                href={video.gear.href}
                className="text-white text-sm font-bold font-body hover:text-accent-blue-light transition-colors"
              >
                {video.gear.label} &rarr;
              </a>
            </div>
          ) : null}

          {/* Prev / next */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
            {prev ? (
              <a href={`${routes.myVideos}/${prev.slug}`} className={secondaryButton}>
                &larr; Previous
              </a>
            ) : null}
            {next ? (
              <a href={`${routes.myVideos}/${next.slug}`} className={primaryButton}>
                Next Video &rarr;
              </a>
            ) : null}
          </div>
        </div>

        {/* Lessons */}
        <aside className="lg:sticky lg:top-[136px]">
          <p className="text-accent-blue-light text-xs uppercase tracking-[3px] font-bold font-body mb-4">
            Your Videos
          </p>
          <WatchLessonList videos={owned} currentSlug={video.slug} />
        </aside>
      </div>
    </LibraryShell>
  );
}
