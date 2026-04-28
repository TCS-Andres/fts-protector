// Centralized video URL config.
// Local files are kept as fallback; once uploaded to Vercel Blob,
// the upload script (`scripts/upload-videos.mjs`) replaces these
// values with permanent Blob URLs.
export const videos = {
  pitch: "/videos/pitch.mp4",
  testimonial1: "/videos/testimonial_1.mp4",
  testimonial2: "/videos/testimonial_2.mp4",
  testimonial3: "/videos/testimonial_3.mp4",
  testimonial4: "/videos/testimonial_4.mp4",
  testimonial5: "/videos/testimonial_5.mp4",
} as const;
