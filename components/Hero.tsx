import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/photos/frame-held-wide.jpg"
          alt="Beekeeper holding a frame of honeycomb at a Colorado mountain apiary"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 38%" }}
        />
      </div>
      {/* Dark overlay with warm tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown/75 via-brown/55 to-brown/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="animate-fade-in mb-6">
          <Image
            src="/bee_bomb_logo.jpg"
            alt="Bee Bomb Honey"
            width={110}
            height={110}
            className="mx-auto rounded-full"
          />
        </div>

        <p className="animate-fade-in-up delay-100 text-honey font-medium tracking-[0.3em] uppercase text-sm mb-4">
          Steamboat Springs, Colorado
        </p>

        <h1 className="animate-fade-in-up delay-200 font-[family-name:var(--font-playfair)] text-6xl sm:text-7xl md:text-8xl font-bold text-white leading-tight mb-6">
          Bee Bomb
          <br />
          <span className="text-honey">Honey</span>
        </h1>

        <p className="animate-fade-in-up delay-300 text-xl sm:text-2xl text-white/80 font-[family-name:var(--font-playfair)] italic mb-10">
          Our bees are the bomb.
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="inline-block bg-honey text-brown font-semibold px-8 py-4 rounded-full hover:bg-honey-light transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Honey
          </a>
          <a
            href="#about"
            className="inline-block border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-honey hover:text-honey transition-colors duration-300"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-600">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/50 hover:text-honey transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
