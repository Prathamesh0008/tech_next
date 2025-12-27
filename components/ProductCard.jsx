"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { handleCtrlClick } from "../utils/openInNewTab";

export default function ProductCard({ product }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const productURL = `/products/${product.category.toLowerCase()}/${product.slug}`;

  const handleClick = (e) => {
    if (handleCtrlClick(e, productURL)) return;
    router.push(productURL);
  };

  // ✅ USE IMAGE PASSED FROM PRODUCTS PAGE
  const image = product.image || "/products/placeholder.jpg";

  return (
    <div
      onClick={handleClick}
      className="flex flex-col bg-white shadow-sm hover:shadow-lg transition-all p-4 text-center h-full cursor-pointer overflow-hidden hover:scale-[1.02] duration-300 border border-gray-100"
    >
      {/* === Image Area === */}
      <div className="w-full h-44 pr-1.5 overflow-hidden mb-3 flex-shrink-0 relative bg-white">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm">
            <div className="w-6 h-6 border-4 border-[#18487d] border-t-[#3386bc] rounded-full animate-spin"></div>
          </div>
        )}

        <img
          src={image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={(e) => {
            e.currentTarget.src = "/products/placeholder.jpg";
          }}
          className={`w-full h-full object-contain transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      {/* === Text Area === */}
      <div className="flex-1 flex flex-col justify-between">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">
          {product.name}
        </h3>
      </div>
    </div>
  );
}
