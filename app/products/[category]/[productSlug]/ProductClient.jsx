"use client";

// ================== IMPORTS ==================
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Head from "next/head";

import { products } from "../../../../data/products";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import ProductCard from "../../../../components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

import { useLanguage } from "../../../../contexts/LanguageContext";
import { handleCtrlClick } from "../../../../utils/openInNewTab";

// ================== CONSTANTS ==================
const catalogue = "/assets/catalogue/Catalogue.pdf";

// ================== HELPERS ==================
const slugify = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const getProductImages = (product) => {
  if (!product) return [];
  const slug = product.name
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[^A-Z0-9]/g, "");
  const category = product.category?.toLowerCase();
  const basePath = `/products/${category}`;
  return [
    `${basePath}/${slug}_1.jpg`,
    `${basePath}/${slug}_2.jpg`,
    `${basePath}/${slug}_3.jpg`,
  ];
};

// ================== ZOOM IMAGE ==================
function ZoomImage({ src, alt }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [zoom, setZoom] = useState(false);

  const handleMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-gray-100 bg-white"
      onMouseMove={handleMove}
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
    >
      <img
        src={src}
        alt={alt}
        style={{
          transformOrigin: `${pos.x}% ${pos.y}%`,
          transform: zoom ? "scale(2)" : "scale(1)",
          transition: "transform 0.3s ease-out",
        }}
        className="w-full h-[420px] object-contain select-none"
      />
    </div>
  );
}

// ================== PAGE ==================
export default function ProductDetails() {
  const { category, productSlug } = useParams();
  const { translations } = useLanguage();

  const tProducts = translations?.products || {};
  const tUI = translations?.ui || {};

  const product = products.find(
    (p) =>
      p.category?.toLowerCase() === category?.toLowerCase() &&
      slugify(p.name) === productSlug
  );

  const productImages = useMemo(
    () => getProductImages(product),
    [product]
  );

  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [activeTab, setActiveTab] = useState("indication");
  const [openFAQ, setOpenFAQ] = useState(null);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <Breadcrumbs />
        <h2 className="text-xl text-gray-600">
          {tUI.productNotFound || "Product not found"}
        </h2>
      </div>
    );
  }

  // ===== TRANSLATED FIELDS =====
  const name = tProducts.titles?.[productSlug] || product.name;
  const description =
    tProducts.description?.[productSlug] ||
    product.seoDescription ||
    product.shortDescription ||
    product.description;

  const indication =
    tProducts.indication?.[productSlug] || product.indication;

  const presentation =
    tProducts.presentation?.[productSlug] || product.presentation;

  const precautions =
    tProducts.precautions?.[productSlug] || product.precautions;

  const contraindications =
    tProducts.contraindications?.[productSlug] || product.contraindications;

  const faqs =
    tProducts.faqs?.[productSlug] ||
    product.faq || [
      {
        question: "How should I use this medicine?",
        answer: "Use as directed by your healthcare provider.",
      },
    ];

  const canonicalUrl = `https://www.novatechsciences.com/products/${category}/${productSlug}`;

  // ===== HELPERS =====
  const renderMultiline = (text) => {
    if (!text) return null;
    const lines = text.split(/\r?\n/).filter(Boolean);
    return lines.length === 1 ? (
      <p>{lines[0]}</p>
    ) : (
      <ul className="list-disc pl-6 space-y-1">
        {lines.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    );
  };

  // ================== RENDER ==================
  return (
    <div className="min-h-screen pt-10 bg-gradient-to-b from-[#f5f9fb] to-[#e8f3f8]">

      {/* ===== SEO ===== */}
      <Head>
        <title>{tProducts.seoTitle?.[productSlug] || name}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* ===== HEADER ===== */}
      <div className="bg-gradient-to-r from-[#0b1e39] mt-10 to-[#3386bc] text-white py-10 mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs />
        </div>
      </div>

      {/* ===== MAIN ===== */}
      <div className="max-w-7xl mx-auto px-6 pb-20 space-y-12">

        {/* PRODUCT INFO */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:flex gap-10">
          <div className="md:w-1/2">
            <ZoomImage src={selectedImage} alt={name} />
            <div className="flex gap-3 mt-4 justify-center flex-wrap">
              {productImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`w-28 h-24 border rounded-lg cursor-pointer ${
                    selectedImage === img
                      ? "border-[#3386bc] ring-2 ring-[#3386bc]/40"
                      : "border-gray-300"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{name}</h1>
            <p className="text-gray-600">{description}</p>

            <div className="flex gap-4 mt-8 border-b">
              {["indication", "presentation"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 font-semibold capitalize ${
                    activeTab === tab
                      ? "text-[#314977] border-b-2 border-[#314977]"
                      : "text-gray-500"
                  }`}
                >
                  {tUI[tab] || tab}
                </button>
              ))}
            </div>

            <div className="mt-6">
              {activeTab === "indication" && renderMultiline(indication)}
              {activeTab === "presentation" && renderMultiline(presentation)}
            </div>

            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="bg-[#3386bc] text-white px-8 py-3 rounded-lg"
              >
                {tUI.enquireNow || "Enquire Now"}
              </Link>

              <a
                href={catalogue}
                download
                className="flex items-center gap-2 border px-6 py-3 rounded-lg"
              >
                <Download className="w-5 h-5" />
                {tUI.downloadCatalogue || "Download Catalogue"}
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            {tUI.faqs || "Important Information & FAQs"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-lg">
                <button
                  className="w-full flex justify-between font-semibold"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`transition ${
                      openFAQ === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openFAQ === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
