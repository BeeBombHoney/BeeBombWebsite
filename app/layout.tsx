import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Bee Bomb Honey | Steamboat Springs, CO",
  description:
    "Pure, raw mountain wildflower honey from the Yampa Valley. Honey, honeycomb, jams & butters crafted by Bee Bomb Honey in Steamboat Springs, Colorado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen font-[family-name:var(--font-dm-sans)] antialiased">
        {children}
      </body>
    </html>
  );
}
