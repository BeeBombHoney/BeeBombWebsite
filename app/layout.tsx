import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

// Update this when a custom domain is set up.
const SITE_URL = "https://bee-bomb-website.vercel.app";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bee Bomb Honey | Steamboat Springs, CO",
  description:
    "Pure, raw mountain wildflower honey from the Yampa Valley. Honey, honeycomb, jams & butters crafted by Bee Bomb Honey in Steamboat Springs, Colorado.",
  keywords: [
    "raw honey",
    "wildflower honey",
    "Steamboat Springs honey",
    "Yampa Valley honey",
    "Colorado honey",
    "honeycomb",
    "local honey",
    "beekeeper",
    "unfiltered honey",
    "mountain honey",
    "Bee Bomb Honey",
  ],
  authors: [{ name: "Bee Bomb Honey" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Bee Bomb Honey",
    title: "Bee Bomb Honey | Steamboat Springs, CO",
    description:
      "Pure, raw mountain wildflower honey from the Yampa Valley. Honey, honeycomb, jams & butters crafted in Steamboat Springs, Colorado.",
    locale: "en_US",
    images: [
      {
        url: "/photos/frame-held-wide.jpg",
        width: 1200,
        height: 630,
        alt: "Beekeeper holding a frame of honeycomb at a Colorado mountain apiary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bee Bomb Honey | Steamboat Springs, CO",
    description:
      "Pure, raw mountain wildflower honey from the Yampa Valley. Crafted in Steamboat Springs, Colorado.",
    images: ["/photos/frame-held-wide.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen font-[family-name:var(--font-dm-sans)] antialiased">
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
