import Image from "next/image";

const galleryImages = [
  { src: "/photos/award-patio-wide.jpg", alt: "Award-winning Bee Bomb comb honey and ribbons displayed on a patio overlooking Steamboat Springs", span: "col-span-2 md:row-span-2" },
  { src: "/photos/honeycombpic.jpg", alt: "Honeycomb frame on a steel stand with jars of golden honey on a mountain deck at sunset", span: "col-span-2" },
  { src: "/photos/product-jars-lineup.jpg", alt: "Four Bee Bomb honey jars lined up outdoors in different sizes and shades of gold", span: "" },
  { src: "/photos/lavender_butter.jpg", alt: "Two glass jars of lavender honey butter with fresh lavender sprigs on a wooden deck", span: "" },
  { src: "/photos/beebomblipbalm.jpg", alt: "Five Bee Bomb Honey lip balm tins arranged in snow", span: "" },
  { src: "/photos/comb-closeup-a.jpg", alt: "Close-up of raw honey gleaming inside open comb cells", span: "md:row-span-2" },
  { src: "/photos/bees-on-frame-landscape.jpg", alt: "Bees clustered across a honeycomb frame with Colorado mountains in the background", span: "" },
  { src: "/photos/frame-held-vertical.jpg", alt: "A honey-filled frame lifted above an open hive during inspection", span: "md:row-span-2" },
  { src: "/photos/beekeeper-hillside.jpg", alt: "Beekeeper holding a frame on a dry Colorado hillside under blue sky", span: "" },
  { src: "/photos/award-portrait.jpg", alt: "Bee Bomb award display with comb honey and ribbons on a sunny deck", span: "" },
  { src: "/photos/jars-kitchen-clean.jpg", alt: "Freshly filled honey jars lined across a kitchen counter", span: "col-span-2" },
  { src: "/photos/product-honey-and-comb.jpg", alt: "Tall honey jar beside stacked trays of comb honey in warm afternoon light", span: "" },
  { src: "/photos/packaged-honeycomb.jpg", alt: "Packaged squares of raw honeycomb ready for sale", span: "" },
  { src: "/photos/honeycomb-awards-table.jpg", alt: "Competition ribbons spread around a frame of capped honeycomb on a table", span: "col-span-2" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 honeycomb-bg">
      <div className="mx-auto max-w-7xl px-6">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[220px] grid-flow-dense">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-xl shadow-md ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
