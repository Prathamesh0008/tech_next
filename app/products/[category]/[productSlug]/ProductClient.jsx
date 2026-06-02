"use client";

// APP/PRODUCTS/[CATEGORY]/[PRODUCT]
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { useLanguage } from "../../../../contexts/LanguageContext";

import Breadcrumbs from "../../../../components/Breadcrumbs";
import ProductCard from "../../../../components/ProductCard";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import { getOptimizedImageUrl } from "../../../../lib/image-utils";

const catalogue = "/assets/catalogue/Catalogue.pdf";

/* ================= IMAGE HELPER ================= */
const getProductImages = (product) => {
  if (Array.isArray(product?.images) && product.images.length > 0) {
    return product.images;
  }

  if (!product?.category || !product?.imageKey) return [];

  const category = product.category.toLowerCase();

  return [
    `/products/${category}/${product.imageKey}_1.jpg`,
    `/products/${category}/${product.imageKey}_2.jpg`,
    `/products/${category}/${product.imageKey}_3.jpg`,
  ];
};

const getMainImage = (src) =>
  getOptimizedImageUrl(src, { width: 1200 });

const getThumbImage = (src) =>
  getOptimizedImageUrl(src, { width: 280 });

const INTERNAL_PRODUCT_LINKS = [
  {
    terms: ["Letrozole 2.5 mg", "Letrozole"],
    href: "/compounds/letrozole",
  },
  {
    terms: ["Tamoxifen Citrate 20 mg", "Tamoxifen Citrate"],
    href: "/compounds/tamonova",
  },
  {
    terms: ["Exemestane 25 mg", "Exemestane"],
    href: "/compounds/aromanova",
  },
  {
    terms: ["Enclomiphene Citrate 25 mg", "Enclomiphene Citrate"],
    href: "/compounds/enclominova",
  },
  {
    terms: ["Clomiphene Citrate 50 mg", "Clomiphene Citrate"],
    href: "/compounds/clominova",
  },
  {
    terms: ["multi-steroid blend injection"],
    href: "/compounds/nova-gain-c",
  },
  {
    terms: ["Testosterone Phenylpropionate"],
    href: "/compounds/testosterone-phenylpropionate",
  },
  {
    terms: ["Testosterone Propionate"],
    href: "/compounds/testova-p",
  },
  {
    terms: ["Testosterone Enanthate"],
    href: "/compounds/testova-e",
  },
  {
    terms: ["Testosterone Suspension"],
    href: "/compounds/testova-base",
  },
  {
    terms: ["Boldenone Undecylenate", "Boldenone"],
    href: "/compounds/boldenova",
  },
  {
    terms: ["strength support."],
    href: "/compounds/methenolone-enanthate",
  },
  {
    terms: ["Drostanolone Propionate"],
    href: "/compounds/drostanolone-propionate",
  },
  {
    terms: ["Trenbolone Hexa"],
    href: "/compounds/trenbolone-hexa-hydrobenzylcarbonate",
  },
  {
    terms: ["Trenbolone Enanthate"],
    href: "/compounds/trenbolone-enanthate",
  },
  {
    terms: ["Trenbolone Acetate"],
    href: "/compounds/trenbolone-acetate",
  },
  {
    terms: ["Nandrolone Phenylpropionate", "muscle recovery"],
    href: "/compounds/nandrolone-phenylpropionate",
  },
  {
    terms: ["TESTOVA C", "Testosterone Cypionate"],
    href: "/compounds/testosterone-cypionate",
  },
  {
    terms: ["Nandrolone Decanoate"],
    href: "/compounds/nandrolone-decanoate",
  },
  {
    terms: ["supporting balanced hormone levels"],
    href: "/compounds/testosterone-blend",
  },
  {
    terms: ["STANOVA 10"],
    href: "/compounds/stanozolol-usp",
  },
  {
    terms: ["Clenbuterol 40 mcg"],
    href: "/compounds/clenbuterol-hydrochloride",
  },
  {
    terms: ["Oxymetholone USP 50 mg"],
    href: "/compounds/oxymetholone",
  },
  {
    terms: ["Liothyronine Sodium T3 50 mcg"],
    href: "/compounds/liothyronine-sodium-t3",
  },
  {
    terms: ["Fluoxymesterone 5 mg"],
    href: "/compounds/fluoxymesterone",
  },
  {
    terms: ["Cabergoline 0.5 mg"],
    href: "/compounds/cabergoline",
  },
  {
    terms: ["Levothyroxine Sodium T4 50 mcg"],
    href: "/compounds/levothyroxine-sodium-t4",
  },
  {
    terms: [
      "Chlorodehydromethyltestosterone 10 mg",
      "Chlorodehydromethyltestosterone",
    ],
    href: "/compounds/chlorodehydromethyltestosterone",
  },
  {
    terms: ["Anastrozole 1 mg"],
    href: "/compounds/anastrozole",
  },
  {
    terms: ["Metenolone Acetate"],
    href: "/compounds/metenolone-acetate",
  },
  {
    terms: ["Methyldrostanolone"],
    href: "/compounds/methyldrostanolone",
  },
  {
    terms: ["Telmisartan"],
    href: "/compounds/telmisartan",
  },
  {
    terms: ["Oxandrolone USP"],
    href: "/compounds/oxandrolone",
  },
  {
    terms: ["Mesterolone USP"],
    href: "/compounds/mesterolone",
  },
  {
    terms: ["Methandienone"],
    href: "/compounds/methandienone",
  },
  {
    terms: ["Stanozolol"],
    href: "/compounds/stanozolol-roxonova",
  },
].flatMap(({ terms, href }) =>
  terms.map((term) => ({
    term,
    href,
    regex: new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
  }))
);

const getNonSelfHref = (href, currentHref) =>
  href === currentHref ? "/compounds" : href;

/* ================= ZOOM IMAGE ================= */
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
        className="w-full h-[420px] object-contain select-none transition-transform duration-200"
      />
    </div>
  );
}

/* ================= PAGE ================= */
export default function ProductDetails({
  initialProduct,
  initialRelated,
  category,
  productSlug,
  initialLang = "en",
}) {
  const { language } = useLanguage();

  const [product, setProduct] = useState(initialProduct || null);
  const [related, setRelated] = useState(initialRelated || []);
  const [activeTab, setActiveTab] = useState("indication");
  const [openFAQ, setOpenFAQ] = useState(null);

  const productImages = useMemo(() => getProductImages(product), [product]);
  const [selectedImage, setSelectedImage] = useState(
    getMainImage(productImages[0]) || "/products/placeholder.jpg"
  );

  useEffect(() => {
    setSelectedImage(getMainImage(productImages[0]) || "/products/placeholder.jpg");
  }, [productImages]);

  useEffect(() => {
    if (language === initialLang) {
      setProduct(initialProduct || null);
      setRelated(initialRelated || []);
      return;
    }

    let ignore = false;

    const loadLocalizedProduct = async () => {
      try {
        const res = await fetch(
          `/api/products?slug=${productSlug}&category=${category}&lang=${language}`,
          { cache: "force-cache" }
        );
        if (!res.ok) return;

        const data = await res.json();
        if (!ignore) {
          setProduct(data.product || null);
          setRelated(Array.isArray(data.related) ? data.related : []);
        }
      } catch (_) {
        // keep initial server data if request fails
      }
    };

    loadLocalizedProduct();

    return () => {
      ignore = true;
    };
  }, [language, category, productSlug, initialLang, initialProduct, initialRelated]);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <Breadcrumbs />
        <h2 className="text-xl text-gray-600">Product not found.</h2>
      </div>
    );
  }

  const faqs = product.faq || [];
  const faqMidpoint = Math.ceil(faqs.length / 2);
  const faqColumns = [faqs.slice(0, faqMidpoint), faqs.slice(faqMidpoint)];

  const canonicalUrl =
    product.seoCanonical ||
    `https://www.novatechsciences.com/products/${category}/${productSlug}`;

  const description =
    product.seoDescription || product.shortDescription || product.description;

  const currentProductHref = `/products/${String(category).toLowerCase()}/${productSlug}`;
  const linkedProductHrefs = new Set();

  const renderInternalLinks = (text, keyPrefix = "text") => {
    if (!text) return text;

    const parts = [];
    let remaining = text;
    let partIndex = 0;

    while (remaining) {
      const match = INTERNAL_PRODUCT_LINKS.reduce((best, link) => {
        const href = getNonSelfHref(link.href, currentProductHref);
        if (linkedProductHrefs.has(href)) return best;

        const result = link.regex.exec(remaining);
        if (!result) return best;

        if (!best || result.index < best.index) {
          return { ...link, href, index: result.index, text: result[0] };
        }

        if (result.index === best.index && result[0].length > best.text.length) {
          return { ...link, href, index: result.index, text: result[0] };
        }

        return best;
      }, null);

      if (!match) {
        parts.push(remaining);
        break;
      }

      if (match.index > 0) {
        parts.push(remaining.slice(0, match.index));
      }

      linkedProductHrefs.add(match.href);
      parts.push(
        <Link
          key={`${keyPrefix}-${partIndex}`}
          href={match.href}
          className="font-semibold text-[#1f5f99] underline underline-offset-2"
        >
          {match.text}
        </Link>
      );

      remaining = remaining.slice(match.index + match.text.length);
      partIndex += 1;
    }

    return parts;
  };

  const renderMultiline = (text) => {
    if (!text) return null;
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

    if (lines.length <= 1) return <p>{renderInternalLinks(lines[0], "single-line")}</p>;

    return (
      <ul className="list-disc pl-6 space-y-1">
        {lines.map((line, idx) => (
          <li key={idx}>{renderInternalLinks(line, `multiline-${idx}`)}</li>
        ))}
      </ul>
    );
  };

  const renderBulletLines = (text) => {
    if (!text) return null;
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

    return (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {lines.map((line, idx) => (
          <li key={idx}>{renderInternalLinks(line, `bullet-${idx}`)}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen pt-14 sm:pt-16 md:pt-20 bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8]">
      {/* ===== SEO ===== */}
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
          image: productImages,
          description: description,
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
      {faqs.length > 0 && (
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
      )}

      {/* ===== HEADER ===== */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10">
        <Breadcrumbs />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12 pb-20">
        {/* PRODUCT CARD */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:flex gap-10">
          <div className="md:w-1/2">
            <ZoomImage src={selectedImage} alt={product.name} />
            <div className="flex gap-3 mt-4 justify-center flex-wrap">
              {productImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(getMainImage(img))}
                  className="w-28 h-24 border rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={getThumbImage(img)}
                    alt={`${product.name} ${idx + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
            <p className="text-gray-600">{renderInternalLinks(description, "description")}</p>

            <p className="mt-3">
              <strong>CAS Number:</strong> {product.cas}
            </p>

            {/* TABS */}
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
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 min-h-[120px]">
              {activeTab === "indication" && renderMultiline(product.indication)}
              {activeTab === "presentation" && renderMultiline(product.presentation)}
            </div>

            <div className="mt-6 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-[#3386bc] text-white px-8 py-3 rounded-lg hover:bg-[#4bb2e5]"
              >
                Enquire Now
              </Link>

              <a
                href={catalogue}
                download
                className="flex items-center gap-2 border border-[#3386bc] text-[#3386bc] px-6 py-3 rounded-lg"
              >
                <Download className="w-5 h-5" /> Download Catalogue
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        {faqs.length > 0 && (
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Important Information & FAQs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqColumns.map((column, colIdx) => (
                <div key={`faq-col-${colIdx}`} className="space-y-6">
                  {column.map((faq, idx) => {
                    const globalIdx = colIdx === 0 ? idx : idx + faqMidpoint;
                    const faqId = `faq-${globalIdx}`;
                    const isOpen = openFAQ === faqId;

                    return (
                      <div key={faqId} className="bg-gray-50 p-4 sm:p-5 rounded-lg">
                        <button
                          className="w-full flex items-start justify-between gap-3 text-left font-semibold"
                          onClick={() => setOpenFAQ(isOpen ? null : faqId)}
                        >
                          <span className="flex-1 text-[18px] leading-snug sm:text-xl">
                            {faq.question || faq.q}
                          </span>
                          <motion.div
                            className="shrink-0 mt-0.5"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                          >
                            <ChevronDown />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 text-gray-600"
                            >
                              {renderInternalLinks(
                                faq.answer || faq.a,
                                `faq-answer-${globalIdx}`
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Precautions */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:flex items-center gap-10">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Precautions & Contraindications</h2>

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

          <div className="md:w-1/3 relative flex justify-center mt-8 md:mt-0">
            <img
              src={getMainImage(productImages[0])}
              alt={product.name}
              loading="lazy"
              className="w-72 h-72 object-contain  rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* RELATED */}
        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link key={p.slug || p.id} href={`/products/${category}/${p.slug || p.id}`}>
                  <ProductCard product={{ ...p, id: p.slug || p.id }} />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
