// Franck's on-demand video library: what is for sale and which purchase
// unlocks which video.
//
// How access works: every video is its own Shopify product, so a customer
// only gets the videos they paid for. A customer can watch a video when one
// of their paid orders contains that video's product, or when the video is
// part of the bundle (inBundle: true) and they bought the bundle.
//
// The bundle is a fixed set: only videos marked inBundle are unlocked by it.
// Videos added later are sold separately, so leave inBundle false on them
// (marking a video true later would also give it to everyone who already
// bought the bundle).
//
// Only videos with a bunnyVideoId are listed, sold, or playable. Add a new
// entry with an empty bunnyVideoId while it uploads and it stays hidden until
// the ID is filled in.
//
// Adding a video:
//   1. Upload it to Bunny Stream (library 812911) and copy its Video ID.
//   2. In Shopify, create a product like the training courses: product type
//      "Training", status Unlisted, not a physical product, inventory not
//      tracked, published to the Headless channel. Give it the handle
//      "franck-video-library-<slug>" (the Shopify storefront redirect sends
//      any handle containing "video-library" to the sales page).
//   3. Add an entry below with the same slug, handle, and Bunny ID, and
//      inBundle: false unless it belongs to the original bundle.

// Optional bundle product that unlocks the videos marked inBundle. It only
// shows on the sales page when a Shopify product with this handle exists and
// is available.
export const VIDEO_BUNDLE_HANDLE = "franck-video-library";

export type LibraryVideo = {
  slug: string;
  title: string;
  description: string;
  /** Display length, e.g. "12:45". Leave empty to hide it. */
  duration: string;
  /** Bunny Stream video GUID. Empty hides the video until it is uploaded. */
  bunnyVideoId: string;
  /** Shopify product handle that sells this one video. */
  productHandle: string;
  /** Part of the fixed bundle. Videos added after launch stay false. */
  inBundle: boolean;
};

// TODO: real titles, descriptions and lengths, in the order they should be
// watched. Lesson 1 is the test upload used to check playback end to end.
export const libraryVideos: LibraryVideo[] = [
  {
    slug: "lesson-1",
    title: "Video 1 (title coming soon)",
    description: "The real title and summary go here.",
    duration: "",
    bunnyVideoId: "b2b87b9f-da3f-435e-a4a8-4c33b0fddab6",
    productHandle: "franck-video-library-lesson-1",
    inBundle: true,
  },
];

/** Videos that are uploaded and ready: the only ones listed or sold. */
export function publishedVideos(): LibraryVideo[] {
  return libraryVideos.filter((v) => v.bunnyVideoId);
}

export function getVideo(slug: string): LibraryVideo | undefined {
  return publishedVideos().find((v) => v.slug === slug);
}

/** 1-based position in the full catalog, so numbering never shifts per buyer. */
export function videoNumber(video: LibraryVideo): number {
  return publishedVideos().findIndex((v) => v.slug === video.slug) + 1;
}

export function ownsVideo(video: LibraryVideo, ownedHandles: ReadonlySet<string>): boolean {
  return (
    ownedHandles.has(video.productHandle) ||
    (video.inBundle && ownedHandles.has(VIDEO_BUNDLE_HANDLE))
  );
}

/** The published videos the bundle unlocks. */
export function bundleVideos(): LibraryVideo[] {
  return publishedVideos().filter((v) => v.inBundle);
}

export function videosUnlockedBy(ownedHandles: ReadonlySet<string>): LibraryVideo[] {
  return publishedVideos().filter((v) => ownsVideo(v, ownedHandles));
}

export function allProductHandles(): string[] {
  return [VIDEO_BUNDLE_HANDLE, ...publishedVideos().map((v) => v.productHandle)];
}

export function salesAnchor(video: LibraryVideo): string {
  return `video-${video.slug}`;
}
