import Image from "next/image";

import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-honey font-medium tracking-[0.2em] uppercase text-sm mb-3">
            From the Field
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-brown mb-4">
            News & Stories
          </h2>
          <div className="honey-divider max-w-xs mx-auto">
            <span className="text-honey text-2xl">&#x2B21;</span>
          </div>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group bg-warm-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white/80 text-sm font-medium">
                  {post.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brown mb-3 group-hover:text-honey transition-colors">
                  {post.title}
                </h3>
                <p className="text-brown-light text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
