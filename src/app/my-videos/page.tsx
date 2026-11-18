import type { Metadata } from "next";
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import LibraryShell, {
  Panel,
  SignedInBar,
  primaryButton,
  secondaryButton,
} from "@/components/video-library/LibraryShell";
import { routes } from "@/lib/links";
import { getVideoAccess, loginHref, refreshHref } from "@/lib/video-access";
import { videosUnlockedBy } from "@/lib/video-library";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "My Videos | FrancktheSolution",
};

const CONTACT_EMAIL = "info@franckthesolution.com";

const SIGNIN_MESSAGES: Record<string, string> = {
  cancelled: "Sign-in was cancelled. Try again whenever you're ready.",
  expired: "That sign-in link expired. Please sign in again.",
  failed: "We couldn't finish signing you in. Please try again.",
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-accent-blue-light text-xs sm:text-sm uppercase tracking-[5px] font-bold mb-4 font-body">
      {children}
    </p>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.0] text-white mb-5">
      {children}
    </h1>
  );
}

export default async function MyVideosPage({
  searchParams,
}: {
  searchParams: Promise<{ signin?: string }>;
}) {
  const { signin } = await searchParams;
  const access = await getVideoAccess();

  if (access.state === "expired") redirect(refreshHref(routes.myVideos));

  // Sign-in isn't wired up on this deployment yet.
  if (access.state === "unconfigured" || signin === "unavailable") {
    return (
      <LibraryShell>
        <Panel>
          <Eyebrow>Video Library</Eyebrow>
          <Title>My Videos</Title>
          <p className="text-text-secondary text-base leading-relaxed font-body mb-8">
            Sign-in for the video library is almost ready. If you already
            bought it, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-blue-light hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            and we will get you watching.
          </p>
          <a href={routes.videoLibrary} className={secondaryButton}>
            About the Video Library
          </a>
        </Panel>
      </LibraryShell>
    );
  }

  if (access.state === "signed-out" || access.state === "session-ended") {
    const notice =
      access.state === "session-ended"
        ? "Your session ended. Please sign in again."
        : signin
          ? SIGNIN_MESSAGES[signin]
          : undefined;
    return (
      <LibraryShell>
        <Panel>
          <Eyebrow>Video Library</Eyebrow>
          <Title>
            Sign In To <span className="text-accent-blue-light">Watch.</span>
          </Title>
          <p className="text-text-secondary text-base leading-relaxed font-body mb-8">
            Use the same email you used at checkout. Shopify will email you a
            one-time code, so there is no password to remember.
          </p>
          {notice ? (
            <p className="text-accent-red text-sm font-body mb-6" role="alert">
              {notice}
            </p>
          ) : null}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href={loginHref(routes.myVideos)} className={primaryButton}>
              Sign In &rarr;
            </a>
            <a href={routes.videoLibrary} className={secondaryButton}>
              Get the Library
            </a>
          </div>
        </Panel>
      </LibraryShell>
    );
  }

  if (access.state === "error") {
    return (
      <LibraryShell>
        <Panel>
          <Eyebrow>Video Library</Eyebrow>
          <Title>My Videos</Title>
          <p className="text-text-secondary text-base leading-relaxed font-body mb-8">
            We couldn&apos;t load your videos right now. Please refresh the
            page in a moment. If it keeps happening, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-blue-light hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <a href={routes.myVideos} className={primaryButton}>
            Try Again
          </a>
        </Panel>
      </LibraryShell>
    );
  }

  const videos = videosUnlockedBy(access.ownedHandles);

  if (videos.length === 0) {
    return (
      <LibraryShell>
        <Panel>
          <Eyebrow>Video Library</Eyebrow>
          <Title>No Videos Yet</Title>
          <p className="text-text-secondary text-base leading-relaxed font-body mb-3">
            We couldn&apos;t find a video library purchase on this account.
          </p>
          <p className="text-text-muted text-sm leading-relaxed font-body mb-8">
            Bought it with a different email? Sign out, then sign in with that
            email instead. Just checked out? It can take a minute for your
            order to show up, so refresh this page shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <a href={routes.videoLibrary} className={primaryButton}>
              Get the Library &rarr;
            </a>
            <a href={routes.myVideos} className={secondaryButton}>
              Refresh
            </a>
          </div>
          <SignedInBar email={access.email} />
        </Panel>
      </LibraryShell>
    );
  }

  return (
    <LibraryShell>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-12">
        <div>
          <Eyebrow>Video Library</Eyebrow>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.0] text-white">
            My <span className="text-accent-blue-light">Videos.</span>
          </h1>
        </div>
        <SignedInBar email={access.email} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((v, i) => (
          <a
            key={v.slug}
            href={`${routes.myVideos}/${v.slug}`}
            className="group flex flex-col bg-bg-card border border-white/10 rounded-xl p-6 hover:border-accent-blue/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="w-10 h-10 rounded-md bg-accent-blue/15 border border-accent-blue/40 flex items-center justify-center font-heading text-sm font-bold text-accent-blue-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              {v.duration ? (
                <span className="text-text-muted text-xs font-body tabular-nums">
                  {v.duration}
                </span>
              ) : null}
            </div>
            <h2 className="font-heading text-xl font-bold uppercase text-white leading-tight mb-2">
              {v.title}
            </h2>
            {v.description ? (
              <p className="text-text-secondary text-sm leading-relaxed font-body line-clamp-3 mb-5">
                {v.description}
              </p>
            ) : null}
            <span className="mt-auto text-accent-blue-light text-xs uppercase tracking-[2px] font-bold font-body group-hover:text-white transition-colors">
              Watch &rarr;
            </span>
          </a>
        ))}
      </div>
    </LibraryShell>
  );
}
