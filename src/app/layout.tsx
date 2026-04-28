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

export const metadata: Metadata = {
  title: "Everyone Is a Protector | FrancktheSolution",
  description:
    "A 2-hour hands-on personal safety workshop by Franck Pala. 25+ years of executive protection experience. Train like an elite. No martial arts background needed.",
  keywords: [
    "self defense workshop",
    "personal safety training",
    "family protection",
    "everyone is a protector",
    "executive protection",
    "Franck Pala",
    "FrancktheSolution",
    "South Florida self defense",
  ],
  openGraph: {
    title: "Everyone Is a Protector | FrancktheSolution",
    description:
      "A 2-hour hands-on personal safety workshop built on 25 years of real-world executive protection experience.",
    type: "website",
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
