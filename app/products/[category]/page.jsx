"use client";

import React, { useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "../../../data/products";
import ProductCard from "../../../components/ProductCard";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X } from "lucide-react";

/* ---------------- HELPERS ---------------- */

const getProductImage = (product) => {
  if (!product?.name || !product?.category) {
    return "/products/placeholder.jpg";
  }

  const fileName = product.name
    .toUpperCase()
    .replace(/\s+/g, "_")
    .replace(/[^A-Z0-9_]/g, "");

  return `/products/${product.category.toLowerCase()}/${fileName}_1.jpg`;
};

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/* ---------------- PAGE ---------------- */

export default function ProductsPage() {
  const router = useRouter();
  const params = useParams();
  const { category } = params || {};

  const categoryOptions = ["Tablets", "Injectables"];

  const initialCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedMg, setSelectedMg] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  /* ---------------- FILTER OPTIONS ---------------- */

  const productOptions = useMemo(() => {
    if (!selectedCategory) return [];
    return Array.from(
      new Set(
        products
          .filter(
            (p) =>
              p.category?.toLowerCase() === selectedCategory.toLowerCase()
          )
          .map((p) => p.name)
      )
    ).sort();
  }, [selectedCategory]);

  const mgOptions = useMemo(() => {
    const strengths = new Set();
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(
        (p) =>
          p.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedProduct) {
      filtered = filtered.filter(
        (p) => p.name.toLowerCase() === selectedProduct.toLowerCase()
      );
    }

    filtered.forEach((p) => {
      const match = p.description?.match(/(\d+(\.\d+)?\s?(mg|mcg))/gi);
      if (match) match.forEach((m) => strengths.add(m.toLowerCase()));
    });

    return Array.from(strengths).sort(
      (a, b) => parseFloat(a) - parseFloat(b)
    );
  }, [selectedCategory, selectedProduct]);

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      !selectedCategory ||
      p.category?.toLowerCase() === selectedCategory.toLowerCase();

    const matchProduct =
      !selectedProduct ||
      p.name.toLowerCase() === selectedProduct.toLowerCase();

    const matchMg =
      !selectedMg ||
      p.description?.toLowerCase().includes(selectedMg.toLowerCase());

    return matchCategory && matchProduct && matchMg;
  });

  /* ---------------- FILTER UI (REUSED) ---------------- */

  const FiltersUI = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <label className="block text-sm font-semibold text-[#18487d] mb-2">
          Category
        </label>
        <select
          className="w-full rounded-md border p-2 focus:ring-2 focus:ring-[#3386bc]"
          value={selectedCategory}
          onChange={(e) => {
            const newCat = e.target.value;
            setSelectedCategory(newCat);
            setSelectedProduct("");
            setSelectedMg("");

            if (newCat) router.push(`/products/${newCat.toLowerCase()}`);
            else router.push(`/products`);
          }}
        >
          <option value="">All</option>
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product */}
      <div>
        <label className="block text-sm font-semibold text-[#18487d] mb-2">
          Product
        </label>
        <select
          className="w-full rounded-md border p-2 focus:ring-2 focus:ring-[#3386bc]"
          value={selectedProduct}
          onChange={(e) => {
            setSelectedProduct(e.target.value);
            setSelectedMg("");
          }}
          disabled={!selectedCategory}
        >
          <option value="">All</option>
          {productOptions.map((prod) => (
            <option key={prod} value={prod}>
              {prod}
            </option>
          ))}
        </select>
      </div>

      {/* Strength */}
      <div>
        <label className="block text-sm font-semibold text-[#18487d] mb-2">
          Dosage Strength
        </label>
        <select
          className="w-full rounded-md border p-2 focus:ring-2 focus:ring-[#3386bc]"
          value={selectedMg}
          onChange={(e) => setSelectedMg(e.target.value)}
          disabled={!selectedProduct}
        >
          <option value="">All</option>
          {mgOptions.map((mg) => (
            <option key={mg} value={mg}>
              {mg.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  /* ---------------- RENDER ---------------- */

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9fb] to-[#e8f3f8] mt-20">
      <Breadcrumbs />

      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Our Product Portfolio
          </h1>
          <p className="text-white/80 mt-2 max-w-2xl">
            Browse by category, product name, or dosage strength.
          </p>
        </div>
      </div>

      {/* MOBILE FILTER BUTTON */}
      <div className="md:hidden sticky top-16 z-30 bg-white border-b px-4 py-3 flex justify-between items-center">
        <span className="text-sm font-semibold text-[#18487d]">
          Filters
        </span>
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="flex items-center gap-2 text-sm bg-[#18487d] text-white px-4 py-2 rounded-md"
        >
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 pb-20 flex gap-8">
        {/* DESKTOP SIDEBAR */}
        <aside className="hidden md:block w-1/4 bg-white p-6 shadow-lg sticky top-24 h-fit">
          <FiltersUI />
        </aside>

        {/* PRODUCTS */}
        <main className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-500 py-16">
              No products found.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <motion.div
                  key={`${p.id}-${p.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProductCard
                    product={{
                      ...p,
                      slug: slugify(p.name),
                      image: getProductImage(p),
                    }}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* MOBILE FILTER DRAWER */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)}>
                  <X />
                </button>
              </div>

              <FiltersUI />

              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full mt-8 bg-[#18487d] text-white py-3 rounded-lg"
              >
                Apply Filters
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
