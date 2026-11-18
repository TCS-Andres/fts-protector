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
//      tracked, published to the Headless channel. Title it "Video Library Lesson N: Topic"
//      so its handle contains "video-library" (the Shopify storefront
//      redirect sends any such handle to the sales page). Easiest: duplicate
//      an existing lesson product as Unlisted and rename it.
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
  /**
   * Free public preview shown on the sales page: a short clip in
   * public/videos/previews and a poster frame in public/images/previews.
   * Leave it out to show no preview.
   */
  preview?: { src: string; poster: string };
  /** Optional link to shop gear used in the video. */
  gear?: { label: string; href: string };
};

// The launch set (2026-11-18). All 7 are in the bundle. Titles and
// descriptions are based on Franck's own notes for each video.
// Previews are the first 30 seconds of each video (720p, cut with ffmpeg).
export const libraryVideos: LibraryVideo[] = [
  {
    slug: "lesson-1",
    title: "The Appendix Draw: From Hidden to Ready, No Fumbles",
    description:
      "Carrying appendix is easy. Drawing from it under pressure is where people get caught on the cover garment, the holster, or their own hands. Franck breaks down the inside-the-waistband appendix draw step by step so your gun comes out clean every time.",
    duration: "4:16",
    bunnyVideoId: "b2b87b9f-da3f-435e-a4a8-4c33b0fddab6",
    productHandle: "franck-video-library-lesson-1",
    inBundle: true,
    preview: { src: "/videos/previews/lesson-1.mp4", poster: "/images/previews/lesson-1.jpg" },
  },
  {
    slug: "lesson-2",
    title: "Jacket On, Gun Out: The Draw Most People Botch",
    description:
      "A jacket hides your firearm, and it can also trap it. Franck shows how to clear a jacket and draw from an outside-the-waistband holster in one smooth motion, using your support hand so the jacket never fights you.",
    duration: "5:25",
    bunnyVideoId: "83ec1cc1-cfc2-48b5-8cad-8bb05202a970",
    productHandle: "video-library-lesson-2-blazer",
    inBundle: true,
    preview: { src: "/videos/previews/lesson-2.mp4", poster: "/images/previews/lesson-2.jpg" },
  },
  {
    slug: "lesson-3",
    title: "The \"Man Purse\" Draw: Fast Access From a Crossbody Bag",
    description:
      "Laugh at the bag all you want; it's one of the smartest ways to carry. Franck opens up the crossbody bag, shows how it's set up, and teaches how to get your firearm out fast without fighting the zipper or the strap.",
    duration: "8:16",
    bunnyVideoId: "ef66b13f-a7b0-47a6-be5e-07e339c6b4e7",
    productHandle: "video-library-lesson-3-bag",
    inBundle: true,
    preview: { src: "/videos/previews/lesson-3.mp4", poster: "/images/previews/lesson-3.jpg" },
  },
  {
    slug: "lesson-4",
    title: "The Fork: The Disengagement Tool Nobody Sees Coming",
    description:
      "It looks like a fork. It's built to get you out of trouble. Franck shows how to carry and deploy The Fork as a disengagement tool, explains why it's no joke, and where it fits in your everyday carry.",
    duration: "8:42",
    bunnyVideoId: "57a54e80-f8bc-4b6b-815e-95e0dc17a993",
    productHandle: "video-library-lesson-4-fork",
    inBundle: true,
    preview: { src: "/videos/previews/lesson-4.mp4", poster: "/images/previews/lesson-4.jpg" },
  },
  {
    slug: "lesson-5",
    title: "Shock Collar Training: Fight Through Fear and Freeze",
    description:
      "When things go wrong, your body freezes, your hands shake, and your plan disappears. Franck uses a dog shock collar to train for exactly that: fear, anxiety and incapacitation, so you learn to keep moving and keep fighting when it hurts.",
    duration: "6:08",
    bunnyVideoId: "53f70b01-2142-42e4-bb3c-46e53e28ba56",
    productHandle: "video-library-lesson-5-collar",
    inBundle: true,
    preview: { src: "/videos/previews/lesson-5.mp4", poster: "/images/previews/lesson-5.jpg" },
  },
  {
    slug: "lesson-6",
    title: "The Extraction Belt: Get Someone Out, Fast",
    description:
      "When someone goes down, every second counts. Franck breaks down the extraction belt: how it works, how to deploy it, and why your legs do the pulling while your hands stay free. Built for executive protection, bodyguards, operators, contractors, law enforcement, federal agents and military.",
    duration: "3:17",
    bunnyVideoId: "df8b73d0-68e9-407c-8ba1-db1c9c220388",
    productHandle: "video-library-lesson-6-belt",
    gear: {
      label: "Shop the R-O System strap from this video",
      href: "/shop/products/r-o-systeme",
    },
    inBundle: true,
    preview: { src: "/videos/previews/lesson-6.mp4", poster: "/images/previews/lesson-6.jpg" },
  },
  {
    slug: "lesson-7",
    title: "Trapped in Your Car? Free Yourself Before the Fight",
    description:
      "Your car is where you're most stuck: belted in, door half open, hands full. Franck shows how to approach, get in and get out of your vehicle the right way. Bonus: how to unbuckle and buckle up so you're never trapped when you need to defend yourself.",
    duration: "9:06",
    bunnyVideoId: "00341f07-c837-4f8c-bf7d-f8a884bf8bd7",
    productHandle: "video-library-lesson-7-extraction",
    inBundle: true,
    preview: { src: "/videos/previews/lesson-7.mp4", poster: "/images/previews/lesson-7.jpg" },
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
