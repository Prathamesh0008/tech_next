"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCompounds } from "../../../data/compounds";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CompoundCard from "../../../components/CompoundCard";

const parseLines = (value) =>
  (value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

export default function CompoundClient({ compoundId }) {
  const compounds = useMemo(() => getCompounds(), []);

  const compound = useMemo(
    () => compounds.find((item) => item.id.toLowerCase() === compoundId.toLowerCase()),
    [compounds, compoundId]
  );

  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  if (!compound) {
    return (
      <div className="min-h-screen bg-[#f3f8fc] pt-28 text-center text-[#36597f]">
        Compound not found.
      </div>
    );
  }

  const images = [1, 2, 3].map(
    (index) => `/products/${compound.category.toLowerCase()}/${compound.imageKey}_${index}.jpg`
  );

  const related = compounds
    .filter((item) => item.id !== compound.id && item.category === compound.category)
    .slice(0, 3);

  const faqs = compound.faq || [];

  return (
    <div className="min-h-screen bg-[#f3f8fc] pt-20">
      <Breadcrumbs />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-[#e8f3fb] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#18487d]">
              Compound Profile
            </p>
            <h1 className="text-3xl font-bold text-[#0f2f57] md:text-4xl">{compound.name}</h1>
            <p className="mt-3 text-[#3e628b]">{compound.shortDescription || compound.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-lg bg-[#0f2f57] px-4 py-2 text-sm font-semibold text-white">
                CAS: {compound.cas || "N/A"}
              </span>
              <span className="rounded-lg border border-[#c6d9eb] bg-[#f7fbff] px-4 py-2 text-sm font-semibold text-[#18487d]">
                {compound.category}
              </span>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-[#1f5f99] px-6 py-3 font-semibold text-white transition hover:bg-[#174d7d]"
            >
              Enquire This Compound
            </Link>
          </div>

          <div className="rounded-2xl border border-[#d5e5f2] bg-[#f8fcff] p-4">
            <div className="overflow-hidden rounded-xl bg-white">
              <img
                src={images[activeImage]}
                alt={compound.name}
                onError={(e) => {
                  e.currentTarget.src = "/products/placeholder.jpg";
                }}
                className="h-[340px] w-full object-contain"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(idx)}
                  className={`overflow-hidden rounded-lg border ${
                    activeImage === idx ? "border-[#1f5f99]" : "border-[#d5e5f2]"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${compound.name} ${idx + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = "/products/placeholder.jpg";
                    }}
                    className="h-20 w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#123a6d]">Indication</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#3f6289]">
            {parseLines(compound.indication).map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#123a6d]">Presentation</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#3f6289]">
            {parseLines(compound.presentation).map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#123a6d]">Precautions</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#3f6289]">
            {parseLines(compound.precautions).map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#123a6d]">Contraindications</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#3f6289]">
            {parseLines(compound.contraindications).map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </article>
      </section>

      {faqs.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-8">
          <div className="rounded-2xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#123a6d]">FAQs</h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-[#d9e7f3]">
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-[#18487d]"
                  >
                    <span>{faq.q || faq.question}</span>
                    <motion.span animate={{ rotate: activeFAQ === idx ? 180 : 0 }}>
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {activeFAQ === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-[#e5eff7] px-4 py-3 text-sm text-[#42658d]"
                      >
                        {faq.a || faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16">
          <h2 className="mb-5 text-2xl font-bold text-[#123a6d]">Related Compounds</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item) => (
              <CompoundCard key={item.id} compound={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
