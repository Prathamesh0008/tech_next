"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";
import ProductCard from "./ProductCard";

export default function DiseaseFeaturedSection() {
  const { translations, currentLanguage } = useLanguage();
  const router = useRouter();

  const [products, setProducts] = useState([]);

  if (!translations?.featuredSection) return null;

  const t = translations.featuredSection;

  const categories = [
    {
      key: "Tablets",
      name: t.categories.tablets.name || "Tablets Division",
      description:
        t.categories.tablets.description ||
        "High-precision oral formulations designed for strength, stability, and purity.",
      image: "/assets/divisions/tabletdiv.png",
    },
    {
      key: "Injectables",
      name: t.categories.injectables.name || "Injectables Division",
      description:
        t.categories.injectables.description ||
        "Sterile and controlled injectables ensuring rapid bioavailability and efficacy.",
      image: "/assets/divisions/injectdiv.png",
    },
  ];

  const [selected, setSelected] = useState(categories[0].key);

  useEffect(() => {
    let ignore = false;

    const loadProducts = async () => {
      try {
        const res = await fetch(`/api/products?lang=${currentLanguage}`, {
          cache: "force-cache",
        });
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        if (!ignore) setProducts(Array.isArray(data.products) ? data.products : []);
      } catch (_) {
        if (!ignore) setProducts([]);
      }
    };

    loadProducts();

    return () => {
      ignore = true;
    };
  }, [currentLanguage]);

  const toShow = useMemo(() => {
    return products
      .filter((p) => p.category?.toLowerCase() === selected.toLowerCase())
      .slice(0, 4);
  }, [products, selected]);

  const handleCtrlClick = (e, path) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) {
      window.open(path, "_blank");
      return;
    }
    router.push(path);
  };

  return (
    <section
      className="my-20"
      data-aos="fade-up"
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
    >
      {/* ===== Title Section ===== */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          {t.title || "Featured Product Divisions"}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          {t.description ||
            "Explore NovaTech's specialized divisions built to meet the highest standards in pharmaceutical excellence from solid formulations to sterile injectables."}
        </p>
      </div>

      {/* ===== Category Buttons ===== */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 overflow-x-auto px-10 py-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelected(cat.key)}
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

      {/* ===== Product Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {toShow.length > 0 ? (
          toShow.map((p, idx) => (
            <div key={p.slug || p.id} className="h-full">
              <ProductCard
                priority={idx < 4}
                product={{
                  ...p,
                  id: p.slug || p.id,
                  category: p.category,
                  image: p.image,
                  images: p.images,
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

      {/* ===== View All Button ===== */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={(e) =>
            handleCtrlClick(e, `/products?category=${encodeURIComponent(selected)}`)
          }
          className="px-8 py-3 bg-[#314977] text-white rounded-lg font-medium shadow-md hover:bg-[#0d1b4b] hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          {t.viewAllProducts?.replace("{category}", selected) ||
            `View All ${selected} Products`}
        </button>
      </div>
    </section>
  );
}
