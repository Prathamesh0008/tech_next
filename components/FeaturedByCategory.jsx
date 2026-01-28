"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function DiseaseFeaturedSection() {
  const { translations, currentLanguage } = useLanguage();
  const router = useRouter();

  // Safety check for translations
  if (!translations?.featuredSection) return null;

  const t = translations.featuredSection;

  // ✅ Actual NovaTech categories
  const categories = [
    {
      key: "Tablets",
      name: t.categories.tablets.name || "Tablets Division",
      description: t.categories.tablets.description || "High-precision oral formulations designed for strength, stability, and purity.",
      image: "/assets/divisions/tabletdiv.png",
    },
    {
      key: "Injectables",
      name: t.categories.injectables.name || "Injectables Division",
      description: t.categories.injectables.description || "Sterile and controlled injectables ensuring rapid bioavailability and efficacy.",
      image: "/assets/divisions/injectdiv.png",
    },
  ];

  const [selected, setSelected] = useState(categories[0].key);

  const onSelect = (catKey) => setSelected(catKey);

  const filteredProducts = products.filter(
    (p) => p.category?.toLowerCase() === selected.toLowerCase()
  );

  const toShow = filteredProducts.slice(0, 4);

  const onViewAllProducts = () => {
    router.push(`/products?category=${encodeURIComponent(selected)}`);
  };

  const onViewAllCategories = () => {
    router.push(`/products`);
  };

  const slugify = (name) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleCtrlClick = (e, path) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) {
      window.open(path, '_blank');
      return;
    }
    router.push(path);
  };

  return (
    <section 
      className="my-20" 
      data-aos="fade-up"
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
    >
    
      {/* ===== Category Buttons ===== */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 overflow-x-auto px-10 py-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => onSelect(cat.key)}
            className={`px-6 py-3 whitespace-nowrap rounded-full font-medium border transition-all duration-300 shadow-sm
              ${
                selected === cat.key
                  ? "bg-[#3386bc] text-white border-[#3386bc] scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-[#3386bc]"
              }`}
          >
            {cat.name}
          </button>
        ))}

        <button
          onClick={(e) => handleCtrlClick(e, "/products")}
          className="px-6 py-3 whitespace-nowrap rounded-full font-medium border bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-[#3386bc] transition-all duration-300 shadow-sm"
        >
          {t.viewAllCategories || "View All"}
        </button>
      </div>

      {/* ===== Banner Preview (Tablets / Injectables) ===== */}
     

      {/* ===== Product Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {toShow.length > 0 ? (
          toShow.map((p) => (
            <div key={p.id} className="h-full">
              <ProductCard
                product={{
                  ...p,
                  slug: slugify(p.name),       // 👈 REQUIRED
                  category: p.category,         // 👈 REQUIRED
                  images: p.images,             // 👈 REQUIRED
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            {t.noProducts || "No products available for this division yet."}
          </p>
        )}
      </div>
    </section>
  );
}