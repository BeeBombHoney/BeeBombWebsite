"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "/photos/award-patio-wide.jpg",
    alt: "Award-winning Bee Bomb comb honey and ribbons displayed on a patio overlooking Steamboat Springs",
    caption: "Award-winning harvest in Steamboat Springs",
    span: "col-span-2 md:row-span-2",
    width: 2048,
    height: 1536,
  },
  {
    src: "/photos/product-jars-lineup.jpg",
    alt: "Four Bee Bomb honey jars lined up outdoors in different sizes and shades of gold",
    caption: "A lineup of fresh Bee Bomb jars",
    span: "",
    width: 2048,
    height: 1536,
  },
  {
    src: "/photos/product-awards-display.jpg",
    alt: "Honey jar, honeycomb, and competition ribbons arranged in a wooden crate",
    caption: "Ribbons, raw comb, and liquid gold",
    span: "",
    width: 2048,
    height: 1536,
  },
  {
    src: "/photos/product-bags-and-jars.jpg",
    alt: "Bee Bomb branded gift bags with jars of honey on a table",
    caption: "Gift-ready jars and Bee Bomb packaging",
    span: "",
    width: 2048,
    height: 2052,
  },
  {
    src: "/photos/comb-closeup-a.jpg",
    alt: "Close-up of raw honey gleaming inside open comb cells",
    caption: "A close look at the comb",
    span: "md:row-span-2",
    width: 1536,
    height: 2048,
  },
  {
    src: "/photos/bees-on-frame-landscape.jpg",
    alt: "Bees clustered across a honeycomb frame with Colorado mountains in the background",
    caption: "Busy bees against a mountain backdrop",
    span: "",
    width: 1320,
    height: 986,
  },
  {
    src: "/photos/frame-held-vertical.jpg",
    alt: "A honey-filled frame lifted above an open hive during inspection",
    caption: "Fresh comb straight from the hive",
    span: "md:row-span-2",
    width: 1536,
    height: 2048,
  },
  {
    src: "/photos/beekeeper-hillside.jpg",
    alt: "Beekeeper holding a frame on a dry Colorado hillside under blue sky",
    caption: "Checking a frame out in the hills",
    span: "",
    width: 1536,
    height: 2048,
  },
  {
    src: "/photos/award-portrait.jpg",
    alt: "Bee Bomb award display with comb honey and ribbons on a sunny deck",
    caption: "Celebrating the latest fair ribbons",
    span: "",
    width: 1536,
    height: 2048,
  },
  {
    src: "/photos/jars-kitchen-clean.jpg",
    alt: "Freshly filled honey jars lined across a kitchen counter",
    caption: "Freshly filled jars from the harvest",
    span: "col-span-2",
    width: 2048,
    height: 1536,
  },
  {
    src: "/photos/product-honey-and-comb.jpg",
    alt: "Tall honey jar beside stacked trays of comb honey in warm afternoon light",
    caption: "Honey and comb ready for the table",
    span: "",
    width: 1536,
    height: 2048,
  },
  {
    src: "/photos/packaged-honeycomb.jpg",
    alt: "Packaged squares of raw honeycomb ready for sale",
    caption: "Packaged comb honey",
    span: "",
    width: 2048,
    height: 2000,
  },
  {
    src: "/photos/honeycomb-awards-table.jpg",
    alt: "Competition ribbons spread around a frame of capped honeycomb on a table",
    caption: "Award ribbons and capped comb",
    span: "col-span-2",
    width: 2048,
    height: 1536,
  },
];

export default function Gallery() {
  const [lightboxImage, setLightboxImage] =
    useState<(typeof galleryImages)[number] | null>(null);

  useEffect(() => {
    if (!lightboxImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 honeycomb-bg">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-honey font-medium tracking-[0.2em] uppercase text-sm mb-3">
            From the Hive
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-brown mb-4">
            Gallery
          </h2>
          <div className="honey-divider max-w-xs mx-auto">
            <span className="text-honey text-2xl">&#x2B21;</span>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-brown-light">
            A look at the hives, harvests, ribbons, and jars behind Bee Bomb Honey.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px] grid-flow-dense">
          {galleryImages.map((img) => (
            <button
              key={img.src}
              type="button"
              className={`group relative overflow-hidden rounded-xl cursor-pointer shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-honey/50 ${img.span}`}
              onClick={() => setLightboxImage(img)}
              aria-label={`Open photo: ${img.caption}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-brown/15 to-transparent group-hover:from-brown/80 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <p className="text-sm sm:text-base font-medium text-white drop-shadow-md">
                  {img.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.caption}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxImage(null);
            }}
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <div
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={lightboxImage.width}
              height={lightboxImage.height}
              sizes="100vw"
              className="w-auto h-auto max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="mt-4 text-center text-sm sm:text-base text-white/80">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
