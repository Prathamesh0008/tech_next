"use client";

// src/pages/ProductDetails.jsx
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Head from "next/head";

import { products } from "../../../../data/products";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import ProductCard from "../../../../components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
const catalogue = "/assets/catalogue/Catalogue.pdf";
const getProductImages = (product) => {
  if (!product) return [];

  const slug = product.name
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/[^A-Z0-9]/g, "");

  const category = product.category?.toLowerCase();

  const basePath = `/products/${category}`;

  const images = [
    `${basePath}/${slug}_1.jpg`,
    `${basePath}/${slug}_2.jpg`,
    `${basePath}/${slug}_3.jpg`,
  ];

  return images;
};


import { handleCtrlClick } from "../../../../utils/openInNewTab";
// import { Title, Meta, Link as LinkTag } from "react-head";

// === Zoom effect (no popup) ===
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

// === Import all images recursively ===
// const allImages = import.meta.glob(
//   "/src/assets/products/**/*.{jpg,jpeg,png,webp}",
//   { eager: true }
// );

// // === Helper to get images by name & category ===
// const getProductImages = (name, category) => {
//   if (!name) return [];

//   const normalizedName = name
//     .toLowerCase()
//     .replace(/\s+/g, "_")
//     .replace(/[^a-z0-9_]/g, "");

//   const normalizedCat = (category || "").toLowerCase();

//   const matched = Object.keys(allImages)
//     .filter((key) => {
//       const cleanKey = key.toLowerCase().replace(/[^a-z0-9_/]/g, "");
//       return cleanKey.includes(normalizedCat) && cleanKey.includes(normalizedName);
//     })
//     .map((k) => allImages[k].default);

//   return matched.length > 0
//     ? matched
//     : [
//         "https://via.placeholder.com/600x600?text=Image+Coming+Soon",
//         "https://via.placeholder.com/600x600?text=Image+Coming+Soon",
//       ];
// };

export default function ProductDetails() {
  const { category, productSlug } = useParams();

  const slugify = (name) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

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
        <h2 className="text-xl text-gray-600">Product not found.</h2>
      </div>
    );
  }

  const related = products
    .filter(
      (p) =>
        p.category?.toLowerCase() === product.category?.toLowerCase() &&
        p.name !== product.name
    )
    .slice(0, 4);

  const faqs = product.faq || [
    {
      question: "How should I use this medicine?",
      answer: "Use as directed by your healthcare provider.",
    },
  ];

  const canonicalUrl =
    product.seoCanonical ||
    `https://novatechsciences.com/products/${category}/${productSlug}`;

  const description =
    product.seoDescription || product.shortDescription || product.description;

  const renderMultiline = (text) => {
    if (!text) return null;
    const lines = text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length <= 1) return <p>{lines[0]}</p>;

    return (
      <ul className="list-disc pl-6 space-y-1">
        {lines.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    );
  };

  const renderBulletLines = (text) => {
    if (!text) return null;
    const lines = text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    return (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {lines.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8]">
      {/* ===== SEO META TAGS ===== */}
   <Head>
  <title>{product.seoTitle || product.name}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />
</Head>


      {/* Product JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          image: product.images,
          description:
            product.seoDescription ||
            product.shortDescription ||
            product.description,
          brand: {
            "@type": "Brand",
            name: product.schemaBrand || "NovaTech Sciences",
          },
          category: product.schemaCategory || product.category,
          sku: product.id,
          mpn: product.cas,
        })}
      </script>

      {/* FAQ JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question || f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer || f.a,
            },
          })),
        })}
      </script>

      {/* ===== Header ===== */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs />
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12 pb-20">
        {/* Product Info */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:flex gap-10">
          {/* LEFT - Image Gallery */}
          <div className="md:w-1/2">
            <ZoomImage src={selectedImage} alt={product.name} />
            <div className="flex gap-3 mt-4 justify-center flex-wrap">
              {productImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-34 h-28 border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedImage === img
                      ? "border-[#3386bc] ring-2 ring-[#3386bc]/40"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Product Info */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* Use SEO title and description here so UI matches SEO */}
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              {product.name}
            </h1>
            <p className="text-gray-600 leading-relaxed">{description}</p>

            <p className="mt-3">
              <strong>CAS Number:</strong> {product.cas}
            </p>

            {/* Tabs */}
            <div className="flex gap-4 mt-8 border-b border-gray-300">
              {["indication", "presentation"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 font-semibold capitalize ${
                    activeTab === tab
                      ? "text-[#314977] border-b-2 border-[#314977]"
                      : "text-gray-500 hover:text-[#314977]"
                  } transition-all duration-200`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 text-gray-700 leading-relaxed min-h-[120px]">
              {activeTab === "indication" &&
                (product.indication ? (
                  renderMultiline(product.indication)
                ) : (
                  <p>No indication available.</p>
                ))}

              {activeTab === "presentation" &&
                (product.presentation ? (
                  renderMultiline(product.presentation)
                ) : (
                  <p>No presentation info.</p>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
           <Link
  href="/contact"
  className="bg-[#3386bc] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#4bb2e5] hover:scale-105 transition-all"
>
  Enquire Now
</Link>

              <a
                href={catalogue}
                download
                className="flex items-center gap-2 bg-white border border-[#3386bc] text-[#3386bc] px-6 py-3 rounded-lg shadow-sm hover:bg-[#e6f4fa]"
              >
                <Download className="w-5 h-5" /> Download Catalogue
              </a>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Important Information & FAQs
          </h2>
          <div className="flex flex-wrap gap-6 items-start">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-5 hover:shadow-lg transition-all duration-300 w-full md:w-[48%]"
              >
                <button
                  className="w-full flex justify-between items-center font-semibold text-lg text-gray-800"
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                >
                  {faq.question || faq.q}
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFAQ === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 text-gray-600 leading-relaxed overflow-hidden"
                    >
                      {faq.answer || faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Precautions */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:flex items-center gap-10">
  <div className="md:w-2/3 space-y-4">
    <h2 className="text-2xl font-bold text-gray-800">
      Precautions & Contraindications
    </h2>

    {/* Precautions */}
    {product.precautions && (
      <>
        <h3 className="text-lg font-semibold text-gray-800">Precautions</h3>
        {renderBulletLines(product.precautions)}
      </>
    )}

    {/* Contraindications */}
    {product.contraindications && (
      <>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          Contraindications
        </h3>
        {renderBulletLines(product.contraindications)}
      </>
    )}
  </div>

  <div className="md:w-1/3 flex justify-center  mt-8 md:mt-0">
    <img
      src={productImages[0]}
      alt={product.name}
      className="w-72 h-72 object-contain  rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
    />
  </div>
</div>



        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-14 pb-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {related.map((p) => (
              <Link
  key={p.id}
  href={`/products/${category}/${slugify(p.name)}`}
>
  <ProductCard product={p} />
</Link>

              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
