import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 honeycomb-bg">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-honey font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Our Story
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-brown mb-4">
            Born in the Rockies
          </h2>
          <div className="honey-divider max-w-xs mx-auto">
            <span className="text-honey text-2xl">&#x2B21;</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/photos/about-hives.jpg"
                alt="Two beekeepers working beside bright yellow hives in a mountain meadow"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-honey/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-honey/20 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-lg text-brown-light leading-relaxed mb-6">
              Bee Bomb Honey was born out of a deep love for bees and the wild,
              rugged beauty of Steamboat Springs, Colorado. Nestled in the Yampa
              Valley at over 6,000 feet, our hives sit among mountain meadows
              bursting with wildflowers — clover, lupine, fireweed, and more.
            </p>
            <p className="text-lg text-brown-light leading-relaxed mb-6">
              We practice natural, sustainable beekeeping. No chemicals, no
              shortcuts. Just happy bees doing what they do best — turning
              Colorado wildflowers into liquid gold.
            </p>
            <p className="text-lg text-brown-light leading-relaxed mb-8">
              Every jar of Bee Bomb Honey is raw, unfiltered, and packed with the
              natural enzymes and pollen that make real honey so special. From
              our hives to your table, we keep it pure — because our bees are
              the bomb.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "100%", label: "Raw & Unfiltered" },
                { number: "6,800ft", label: "Elevation" },
                { number: "Local", label: "Yampa Valley" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-honey">
                    {stat.number}
                  </div>
                  <div className="text-sm text-brown-light mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
