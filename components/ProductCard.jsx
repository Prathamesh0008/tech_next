"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getOptimizedImageUrl } from "../lib/image-utils";

export default function ProductCard({ product, priority = false }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const fallbackLocal = `/products/${product.category.toLowerCase()}/${(product?.imageKey || product?._baseName || "")}_1.jpg`;
  const [imageSrc, setImageSrc] = useState(
    product?.image || fallbackLocal
  );

  const displayName = product?.name || "";
  const displayDesc =
    product?.shortDescription || product?.description?.slice(0, 80) + "...";
  const imageKey = product?.imageKey || product?._baseName || "";

  const productURL = `/products/${product.category.toLowerCase()}/${product.id}`;

  useEffect(() => {
    const nextSrc = product?.image || `/products/${product.category.toLowerCase()}/${imageKey}_1.jpg`;
    setImageSrc(getOptimizedImageUrl(nextSrc, { width: 640 }));
    setImageUnavailable(false);
  }, [product.category, imageKey, product.image]);

  return (
    <Link
      href={productURL}
      prefetch={true}
      className="flex h-full cursor-pointer flex-col border border-gray-100 bg-white p-4 shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
    >
        <div className="relative mb-3 h-44 w-full overflow-hidden rounded-md ">
        {imageUnavailable && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2  text-[#6a88a8]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M8 13l2.5-2.5L14 14l2-2 2 2" />
              <circle cx="9" cy="9" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-xs font-medium">Image unavailable</span>
          </div>
        )}

        <Image
          src={imageSrc}
          alt={displayName}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 25vw"
          priority={priority}
          quality={75}
          loading={priority ? "eager" : "lazy"}
          onError={() => {
            if (imageSrc !== "/products/placeholder.jpg") {
              setImageSrc("/products/placeholder.jpg");
              return;
            }
            setImageUnavailable(true);
          }}
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{displayName}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-gray-600">{displayDesc}</p>
      <div className="mt-3 text-sm font-semibold text-[#3386bc]">
        CAS: {product?.cas || "N/A"}
      </div>
    </Link>
  );
}
