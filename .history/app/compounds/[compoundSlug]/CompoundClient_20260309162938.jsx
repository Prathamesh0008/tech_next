"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, ShieldCheck, FlaskConical, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCompounds } from "../../../data/compounds";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CompoundCard from "../../../components/CompoundCard";

const parseLines = (value) =>
  (value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

const getHighlightPoints = (lines = []) =>
  lines
    .filter((line) => {
      const words = line.split(/\s+/).length;
      return words >= 2 && words <= 8 && line.length <= 72 && !line.endsWith(":");
    })
    .slice(0, 6);

const isIndicationHeading = (line = "") => {
  const normalized = line.trim();
  if (!normalized) return false;

  const endsWithColon = normalized.endsWith(":");
  const looksLikeTitle =
    normalized.length <= 95 &&
    /^(what is|mechanism|key benefits|why choose|quality|conclusion|pharmaceutical|consistent|tamoxifen citrate vs|through effective|for those seeking|nova techsciences)/i.test(
      normalized
    );

  return endsWithColon || looksLikeTitle;
};

const splitIndicationSections = (lines = []) => {
  const sections = [];
  let current = { heading: "", content: [] };

  lines.forEach((line, idx) => {
    if (idx === 0 && !isIndicationHeading(line)) {
      current.content.push(line);
      return;
    }

    if (isIndicationHeading(line)) {
      if (current.heading || current.content.length) {
        sections.push(current);
      }
      current = { heading: line.replace(/:$/, ""), content: [] };
      return;
    }

    current.content.push(line);
  });

  if (current.heading || current.content.length) {
    sections.push(current);
  }

  return sections;
};

const parseKeyValueLines = (value) =>
  parseLines(value)
    .map((line) => {
      const index = line.indexOf(":");
      if (index === -1) return null;
      return {
        label: line.slice(0, index).trim(),
        value: line.slice(index + 1).trim(),
      };
    })
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
  const facts = parseKeyValueLines(compound.presentation).slice(0, 6);
  const indicationLines = parseLines(compound.indication);
  const indicationSections = splitIndicationSections(indicationLines);
  const indicationHighlights = getHighlightPoints(indicationLines);
  const precautionLines = parseLines(compound.precautions);
  const contraindicationLines = parseLines(compound.contraindications);

  return (
    <div className="min-h-screen bg-[#f3f8fc] pt-20">
      <Breadcrumbs />

      <section className="relative overflow-hidden py-10 text-white">
        <img
          src="/bannernova.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0c2b52]/60 via-[#18487d]/60 to-[#2f74ad]/60"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Compound Details
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-5xl">{compound.name}</h1>
          <p className="mt-3 max-w-3xl text-sm text-white/90 md:text-base">
            {compound.shortDescription || compound.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              CAS: {compound.cas || "N/A"}
            </span>
            <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              {compound.category}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-[#d5e5f2] bg-white p-4 shadow-sm lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl bg-[#f8fcff]">
              <img
                src={images[activeImage]}
                alt={compound.name}
                onError={(e) => {
                  e.currentTarget.src = "/products/placeholder.jpg";
                }}
                className="h-[min(56vh,420px)] w-full object-contain"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(idx)}
                  className={`overflow-hidden rounded-xl border transition ${
                    activeImage === idx
                      ? "border-[#1f5f99] ring-2 ring-[#d9ecfb]"
                      : "border-[#d5e5f2]"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${compound.name} ${idx + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = "/products/placeholder.jpg";
                    }}
                    className="h-20 w-full object-contain bg-[#f9fcff]"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#123a6d]">Quick Facts</h2>
              {facts.length > 0 ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-xl border border-[#e2edf7] bg-[#f9fcff] px-4 py-3"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#4f739b]">
                        {fact.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#123a6d]">{fact.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-[#48698e]">{compound.presentation}</p>
              )}
            </article>

            <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-bold text-[#123a6d]">
                <FlaskConical className="h-5 w-5" />
                Indication
              </h2>
              {indicationHighlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {indicationHighlights.map((point, idx) => (
                    <span
                      key={`${point}-${idx}`}
                      className="rounded-full border border-[#c9dff2] bg-[#edf6fd] px-3 py-1 text-xs font-semibold text-[#18487d]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4 space-y-5 text-sm text-[#3f6289]">
                {indicationSections.map((section, idx) => (
                  <div key={idx}>
                    {section.heading ? (
                      <h3 className="mb-2 text-base font-bold text-[#123a6d]">
                        {section.heading}
                      </h3>
                    ) : null}
                    <ul className="list-disc space-y-2 pl-5">
                      {section.content.map((line, lineIdx) => (
                        <li key={`${idx}-${lineIdx}`}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-bold text-[#123a6d]">
                <ShieldCheck className="h-5 w-5" />
                Safety Information
              </h2>
              <p className="mt-4 text-sm font-semibold text-[#123a6d]">Precautions</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-[#3f6289]">
                {precautionLines.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-semibold text-[#123a6d]">Contraindications</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-[#3f6289]">
                {contraindicationLines.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </article>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-[#1f5f99] px-6 py-3 font-semibold text-white transition hover:bg-[#174d7d]"
              >
                Enquire This Compound
              </Link>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-8">
          <div className="rounded-3xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-[#123a6d]">
              <FileText className="h-6 w-6" />
              FAQs
            </h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-[#d9e7f3]">
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-[#18487d]"
                  >
                    <span>{faq.q || faq.question}</span>
                    <motion.span animate={{ rotate: activeFAQ === idx ? 200 : 0 }}>
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
