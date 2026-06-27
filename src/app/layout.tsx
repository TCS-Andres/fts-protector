import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const SITE_TITLE =
  "FrancktheSolution — Protection, Training & Self-Defense Tools by Franck Pala";
const SITE_DESCRIPTION =
  "Franck Pala — 20+ years in executive protection, former professional boxer, defensive-tactics innovator, inventor of the patented SelfDefenderTool, and active fugitive apprehension agent. Hire protection, train at his workshops and online courses, and get the tools. Protect. Train. Be the Solution.";
const SITE_OG_IMAGE_ALT =
  "Franck Pala — FrancktheSolution: executive protection, training, and self-defense tools";

export const metadata: Metadata = {
  metadataBase: new URL("https://fts-protector.vercel.app"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Franck Pala",
    "FrancktheSolution",
    "executive protection",
    "security and investigations",
    "self defense workshop",
    "self defender tool",
    "defensive tactics training",
    "personal safety training",
    "Miami executive protection",
    "fugitive apprehension agent",
  ],
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "FrancktheSolution",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: SITE_OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/twitter-image.png",
        alt: SITE_OG_IMAGE_ALT,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
