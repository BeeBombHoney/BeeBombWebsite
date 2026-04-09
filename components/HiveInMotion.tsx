const videos = [
  {
    src: "/videos/swarm-cluster.mp4",
    poster: "/videos/swarm-cluster-poster.jpg",
    title: "Swarm Cluster",
    description:
      "A hanging swarm gathered in the aspens before being carefully relocated.",
    duration: "0:09",
  },
  {
    src: "/videos/swarm-closeup.mp4",
    poster: "/videos/swarm-closeup-poster.jpg",
    title: "Swarm Close-Up",
    description:
      "A closer look at the bees packed together as the cluster settles.",
    duration: "0:08",
  },
  {
    src: "/videos/hillside-apiary.mp4",
    poster: "/videos/hillside-apiary-poster.jpg",
    title: "Hillside Apiary",
    description:
      "One of the Bee Bomb setups out on a dry Colorado hillside.",
    duration: "0:07",
  },
];

export default function HiveInMotion() {
  return (
    <section id="videos" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-honey font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Hive In Motion
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-brown mb-4">
            See the Bees at Work
          </h2>
          <div className="honey-divider max-w-xs mx-auto">
            <span className="text-honey text-2xl">&#x2B21;</span>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-brown-light">
            Short clips from swarm season, hive checks, and the mountain apiary.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.src}
              className="overflow-hidden rounded-3xl bg-warm-white shadow-lg ring-1 ring-honey/10"
            >
              <div className="relative bg-brown">
                <span className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white">
                  {video.duration}
                </span>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                  className="aspect-[9/16] w-full object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support embedded videos.
                </video>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-brown mb-3">
                  {video.title}
                </h3>
                <p className="text-brown-light leading-relaxed">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
