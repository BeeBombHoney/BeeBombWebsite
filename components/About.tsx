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
            A Family Operation
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
              Bee Bomb Honey is an LLC owned and operated by the Olson family,
              who work in and through Steamboat Springs, Colorado. They started
              the business at the peak of the COVID-19 pandemic and found
              early success as neighbors and local businesses began buying out
              their stock every season.
            </p>
            <p className="text-lg text-brown-light leading-relaxed mb-6">
              That community support pushed them to grow. Today they keep hives
              in Steamboat, Hayden, and Denver, each location producing honey
              with its own distinct character depending on what happens to be
              blooming nearby.
            </p>
            <p className="text-lg text-brown-light leading-relaxed mb-8">
              No chemicals, no shortcuts. Every jar is raw and unfiltered,
              the way honey is supposed to be.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "3", label: "Hive Locations" },
                { number: "100%", label: "Raw & Unfiltered" },
                { number: "Local", label: "Family Owned" },
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
