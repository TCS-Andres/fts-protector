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

const SITE_TITLE = "Everyone Is a Protector — Self-Defense Workshops";
const SITE_DESCRIPTION =
  "Everyone is a protector. Whether it's your spouse, your kids, or your parents — someone in your life is counting on you. Join FrancktheSolution's 2-hour hands-on self-defense workshop in Miami, built on 25 years of real-world executive protection experience. May 9, 2026 at KO Zone Miami. $97 early bird through May 5.";
const SITE_OG_IMAGE_ALT =
  "Franck Pala protecting a client on the red carpet — FrancktheSolution self-defense workshops";

export const metadata: Metadata = {
  metadataBase: new URL("https://fts-protector.vercel.app"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "self defense workshop",
    "personal safety training",
    "family protection",
    "everyone is a protector",
    "executive protection",
    "Franck Pala",
    "FrancktheSolution",
    "Miami self defense",
    "South Florida self defense",
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
