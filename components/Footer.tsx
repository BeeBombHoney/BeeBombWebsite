"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32 honeycomb-bg">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-honey font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Common Questions
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-brown mb-4">
            FAQ
          </h2>
          <div className="honey-divider max-w-xs mx-auto">
            <span className="text-honey text-2xl">&#x2B21;</span>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-warm-white rounded-xl shadow-md overflow-hidden border border-cream-dark/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream/50 transition-colors"
              >
                <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-brown pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-honey shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-brown-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
