"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { handleCtrlClick } from "../utils/openInNewTab";

export default function ProductCard({ product, priority = false }) {
  const router = useRouter();
  const imgRef = useRef(null);
  const loadStartRef = useRef(Date.now());
  const hideLoaderTimerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [imageUnavailable, setImageUnavailable] = useState(false);
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

  const hideLoader = () => {
    const elapsed = Date.now() - loadStartRef.current;
    const delay = Math.max(0, 250 - elapsed);
    if (hideLoaderTimerRef.current) {
      clearTimeout(hideLoaderTimerRef.current);
    }
    hideLoaderTimerRef.current = window.setTimeout(() => {
      setLoading(false);
      hideLoaderTimerRef.current = null;
    }, delay);
  };

  useEffect(() => {
    const nextSrc = `/products/${product.category.toLowerCase()}/${imageKey}_1.jpg`;
    setImageSrc(nextSrc);
    setLoading(true);
    setImageUnavailable(false);
    loadStartRef.current = Date.now();
  }, [product.category, imageKey]);

  useEffect(() => {
    if (imgRef.current?.complete) {
      hideLoader();
    }
  }, [imageSrc, imageUnavailable]);

  useEffect(() => {
    return () => {
      if (hideLoaderTimerRef.current) {
        clearTimeout(hideLoaderTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer flex-col border border-gray-100 bg-white p-4 shadow-sm transition hover:scale-[1.02] hover:shadow-lg"
    >
      <div className="relative mb-3 h-44 w-full overflow-hidden rounded-md ">
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center ">
            <div className="h-6 w-6 animate-spin rounded-full border-4 border-[#18487d] border-t-[#3386bc]" />
          </div>
        )}
        {imageUnavailable && !loading && (
          <div className="absolute inset-0 z-10 flex fi lex-col items-center justify-center gap-2  text-[#6a88a8]">
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

        <img
          ref={imgRef}
          src={imageSrc}
          alt={displayName}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={hideLoader}
          onError={() => {
            if (imageSrc !== "/products/placeholder.jpg") {
              setImageSrc("/products/placeholder.jpg");
              return;
            }
            setImageUnavailable(true);
            hideLoader();
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
