"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function DiseaseFeaturedSection() {
  const router = useRouter();

  // ✅ Actual NovaTech categories
  const categories = [
    {
      key: "Tablets",
      name: "Tablets Division",
      description: "High-precision oral formulations designed for strength, stability, and purity.",
      image: "/assets/divisions/tabletdiv.png",
    },
    {
      key: "Injectables",
      name: "Injectables Division",
      description: "Sterile and controlled injectables ensuring rapid bioavailability and efficacy.",
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
    <section className="my-20" data-aos="fade-up">
      {/* ===== Title Section ===== */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Featured Product Divisions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Explore NovaTech's specialized divisions built to meet the highest
          standards in pharmaceutical excellence from solid formulations to sterile injectables.
        </p>
      </div>

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
          View All
        </button>
      </div>

      {/* ===== Banner Preview (Tablets / Injectables) ===== */}
      <div className="relative max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={
            categories.find((c) => c.key === selected)?.image ||
            "/assets/banners/default.jpg"
          }
          alt={selected}
          className="w-full  object-cover md:h-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
          {/* Content commented out in original */}
        </div>
      </div>

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
            No products available for this division yet.
          </p>
        )}
      </div>

      {/* ===== View All Button ===== */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={(e) => handleCtrlClick(e, `/products?category=${encodeURIComponent(selected)}`)}
          className="px-8 py-3 bg-[#314977] text-white rounded-lg font-medium shadow-md hover:bg-[#0d1b4b] hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          View All {selected} Products
        </button>
      </div>
    </section>
  );
}
