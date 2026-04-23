import Image from "next/image";

import { products } from "@/data/products";

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-honey font-medium tracking-[0.2em] uppercase text-sm mb-3">
            What We Make
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-brown mb-4">
            Our Products
          </h2>
          <div className="honey-divider max-w-xs mx-auto">
            <span className="text-honey text-2xl">&#x2B21;</span>
          </div>
          <p className="mt-6 text-brown-light max-w-2xl mx-auto text-lg">
            From pure mountain honey to hand-crafted spreads, everything we make
            starts with our bees and the wildflowers of the Yampa Valley.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-warm-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={product.image}
                  alt={product.imageAlt ?? product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Tag */}
                <span className="absolute top-4 right-4 bg-honey text-brown text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow">
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-brown mb-3">
                  {product.name}
                </h3>
                <p className="text-brown-light text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-honey text-brown font-semibold px-8 py-4 rounded-full hover:bg-honey-light transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Inquire About Orders
          </a>
        </div>
      </div>
    </section>
  );
}
