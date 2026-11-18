import type { Metadata } from "next";
import type { ReactNode } from "react";

// Buyer-only pages: keep them out of search results.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function MyVideosLayout({ children }: { children: ReactNode }) {
  return children;
}
