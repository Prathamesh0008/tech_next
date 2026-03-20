"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { slugifyCompound } from "../lib/compounds";

export default function CompoundCard({ compound, priority = false }) {
  const imgRef = useRef(null);
  const loadStartRef = useRef(Date.now());
  const hideLoaderTimerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const compoundTitle = compound.displayName || compound.name;

  const [imageSrc, setImageSrc] = useState(
    `/products/${compound.category.toLowerCase()}/${compound.imageKey}_1.jpg`
  );

  useEffect(() => {
    const nextSrc = `/products/${compound.category.toLowerCase()}/${compound.imageKey}_1.jpg`;
    setImageSrc(nextSrc);
    setLoading(true);
    setImageUnavailable(false);
    loadStartRef.current = Date.now();
  }, [compound.category, compound.imageKey]);

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

  const compoundURL = `/compounds/${compound.slug || slugifyCompound(compound.id)}`;

  return (
    <Link href={compoundURL} className="block">
      <article className="group cursor-pointer rounded-2xl border border-[#dbe8f3] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex rounded-full bg-[#eaf4fb] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#18487d]">
            {compound.category}
          </span>
          <span className="text-xs text-[#4b6b8f]">CAS {compound.cas || "N/A"}</span>
        </div>

        <div className="relative mt-4 h-44 w-full overflow-hidden rounded-xl b]">
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center ">
              <div className="h-6 w-6 animate-spin rounded-full border-4 border-[#18487d] border-t-transparent" />
            </div>
          )}
          {imageUnavailable && !loading && (
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
          <img
            ref={imgRef}
            src={imageSrc}
            alt={compoundTitle}
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
            className={`h-full w-full object-contain transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <h3 className="mt-4 text-xl font-bold text-[#0f2f57]">{compoundTitle}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-[#405d7f]">
          {compound.shortDescription || compound.description}
        </p>
      </article>
    </Link>
  );
}

