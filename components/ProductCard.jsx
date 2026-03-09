"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { handleCtrlClick } from "../utils/openInNewTab";

export default function ProductCard({ product, priority = false }) {
  const router = useRouter();
  const imgRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(
    `/products/${product.category.toLowerCase()}/${(product?.imageKey || product?._baseName || "")}_1.jpg`
  );

  const displayName = product?.name || "";
  const displayDesc =
    product?.shortDescription || product?.description?.slice(0, 80) + "...";
  const imageKey = product?.imageKey || product?._baseName || "";

  const productURL = `/products/${product.category.toLowerCase()}/${product.id}`;

  const handleClick = (e) => {
    if (handleCtrlClick(e, productURL)) return;
    router.push(productURL);
  };

  useEffect(() => {
    const nextSrc = `/products/${product.category.toLowerCase()}/${imageKey}_1.jpg`;
    setImageSrc(nextSrc);
    setLoading(true);
  }, [product.category, imageKey]);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoading(false);
    }
  }, [imageSrc]);

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer flex-col border border-gray-100 bg-white p-4 shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="relative mb-3 h-44 w-full">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-4 border-[#18487d] border-t-[#3386bc]" />
          </div>
        )}

        <img
          ref={imgRef}
          src={imageSrc}
          alt={displayName}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setLoading(false)}
          onError={(e) => {
            if (imageSrc !== "/products/placeholder.jpg") {
              setImageSrc("/products/placeholder.jpg");
            }
            setLoading(false);
          }}
          className={`h-full w-full object-contain transition-opacity ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{displayName}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-gray-600">{displayDesc}</p>
      <div className="mt-3 text-sm font-semibold text-[#3386bc]">
        CAS: {product?.cas || "N/A"}
      </div>
    </div>
  );
}
