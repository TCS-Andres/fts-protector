// Franck's on-demand video library: what is for sale and which purchase
// unlocks which lesson.
//
// How access works: each lesson lists the Shopify product handle(s) that
// unlock it. Selling one bundle? Give every lesson the same handle. Selling
// lessons one by one, or several courses? Give each its own product handle.
// A customer can watch a lesson when one of their paid orders contains one of
// its products.
//
// bunnyVideoId is the Bunny Stream video GUID (Library > video > Video ID).
// Leave it empty until the upload finishes; the player then shows a
// "being prepared" message instead of breaking.

// TODO: replace with the real Shopify product handle once the product exists.
// Create it like the training courses: product type "Training", status
// Unlisted, not a physical product, inventory not tracked.
export const VIDEO_LIBRARY_PRODUCT_HANDLE = "franck-video-library";

// The product this sales page sells. Add more handles here if the library is
// later split into several products.
export const LIBRARY_PRODUCT_HANDLES: readonly string[] = [VIDEO_LIBRARY_PRODUCT_HANDLE];

export type LibraryVideo = {
  slug: string;
  title: string;
  description: string;
  /** Display length, e.g. "12:45". Leave empty to hide it. */
  duration: string;
  /** Bunny Stream video GUID. Empty until uploaded. */
  bunnyVideoId: string;
  /** Shopify product handles that unlock this lesson. */
  productHandles: readonly string[];
};

// TODO: PLACEHOLDER CATALOG. We don't have the real videos, titles, count or
// lengths yet. Replace these entries with the real lessons, in the order
// they should be watched.
export const PLACEHOLDER_CATALOG = true;

export const libraryVideos: LibraryVideo[] = [
  {
    slug: "lesson-1",
    title: "Lesson 1 (title coming soon)",
    description: "Placeholder lesson. The real title and summary go here.",
    duration: "",
    bunnyVideoId: "",
    productHandles: [VIDEO_LIBRARY_PRODUCT_HANDLE],
  },
  {
    slug: "lesson-2",
    title: "Lesson 2 (title coming soon)",
    description: "Placeholder lesson. The real title and summary go here.",
    duration: "",
    bunnyVideoId: "",
    productHandles: [VIDEO_LIBRARY_PRODUCT_HANDLE],
  },
  {
    slug: "lesson-3",
    title: "Lesson 3 (title coming soon)",
    description: "Placeholder lesson. The real title and summary go here.",
    duration: "",
    bunnyVideoId: "",
    productHandles: [VIDEO_LIBRARY_PRODUCT_HANDLE],
  },
];

export function getVideo(slug: string): LibraryVideo | undefined {
  return libraryVideos.find((v) => v.slug === slug);
}

export function videosUnlockedBy(ownedHandles: ReadonlySet<string>): LibraryVideo[] {
  return libraryVideos.filter((v) => v.productHandles.some((h) => ownedHandles.has(h)));
}

export function allProductHandles(): string[] {
  const handles = new Set<string>(LIBRARY_PRODUCT_HANDLES);
  for (const v of libraryVideos) v.productHandles.forEach((h) => handles.add(h));
  return [...handles];
}
