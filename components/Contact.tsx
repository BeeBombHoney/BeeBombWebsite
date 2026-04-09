"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-honey font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-brown mb-4">
            Contact Us
          </h2>
          <div className="honey-divider max-w-xs mx-auto">
            <span className="text-honey text-2xl">&#x2B21;</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-brown mb-6">
              We&apos;d love to hear from you
            </h3>
            <p className="text-brown-light text-lg leading-relaxed mb-8">
              Whether you want to place an order, ask about wholesale, or just
              say hi — we&apos;re always happy to chat about bees and honey.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-honey/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-honey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brown">Visit Us</p>
                  <p className="text-brown-light">2130 Resort Drive, Unit E</p>
                  <p className="text-brown-light">Steamboat Springs, CO</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-honey/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-honey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brown">Call Us</p>
                  <a href="tel:3036411659" className="text-brown-light hover:text-honey transition-colors">
                    (303) 641-1659
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-honey/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-honey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brown">Email Us</p>
                  <a href="mailto:beebombhoneyco@gmail.com" className="text-brown-light hover:text-honey transition-colors">
                    beebombhoneyco@gmail.com
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-honey/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-honey" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brown">Follow Us</p>
                  <a
                    href="https://www.facebook.com/people/Bee-Bomb-Honey/61552058123683/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown-light hover:text-honey transition-colors"
                  >
                    Bee Bomb Honey on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-warm-white rounded-2xl shadow-xl p-8 border border-cream-dark/30">
            {submitted ? (
              <div role="status" aria-live="polite" className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-brown mb-2">
                  Message Sent!
                </h3>
                <p className="text-brown-light">
                  Thanks for reaching out. We&apos;ll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brown mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-brown placeholder:text-brown-light/50 focus:outline-none focus:ring-2 focus:ring-honey/50 focus:border-honey transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brown mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-brown placeholder:text-brown-light/50 focus:outline-none focus:ring-2 focus:ring-honey/50 focus:border-honey transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brown mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-brown placeholder:text-brown-light/50 focus:outline-none focus:ring-2 focus:ring-honey/50 focus:border-honey transition-colors resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-honey text-brown font-semibold py-4 rounded-xl hover:bg-honey-light transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
