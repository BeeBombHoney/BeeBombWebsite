import Image from "next/image";

const galleryImages = [
  { src: "/photos/award-patio-wide.jpg", alt: "Award-winning Bee Bomb comb honey and ribbons displayed on a patio overlooking Steamboat Springs" },
  { src: "/photos/product-jars-lineup.jpg", alt: "Four Bee Bomb honey jars lined up outdoors in different sizes and shades of gold" },
  { src: "/photos/product-awards-display.jpg", alt: "Honey jar, honeycomb, and competition ribbons arranged in a wooden crate" },
  { src: "/photos/comb-closeup-a.jpg", alt: "Close-up of raw honey gleaming inside open comb cells" },
  { src: "/photos/bees-on-frame-landscape.jpg", alt: "Bees clustered across a honeycomb frame with Colorado mountains in the background" },
  { src: "/photos/frame-held-vertical.jpg", alt: "A honey-filled frame lifted above an open hive during inspection" },
  { src: "/photos/beekeeper-hillside.jpg", alt: "Beekeeper holding a frame on a dry Colorado hillside under blue sky" },
  { src: "/photos/award-portrait.jpg", alt: "Bee Bomb award display with comb honey and ribbons on a sunny deck" },
  { src: "/photos/jars-kitchen-clean.jpg", alt: "Freshly filled honey jars lined across a kitchen counter" },
  { src: "/photos/product-honey-and-comb.jpg", alt: "Tall honey jar beside stacked trays of comb honey in warm afternoon light" },
  { src: "/photos/packaged-honeycomb.jpg", alt: "Packaged squares of raw honeycomb ready for sale" },
  { src: "/photos/honeycomb-awards-table.jpg", alt: "Competition ribbons spread around a frame of capped honeycomb on a table" },
];

export default function Gallery() {
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
        </div>

        {/* Symmetrical 3-column grid, no captions, no lightbox */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
