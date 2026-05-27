"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { slugifyCompound } from "../lib/compounds";

export default function CompoundCard({ compound, priority = false }) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const compoundTitle = compound.displayName || compound.name;

  const [imageSrc, setImageSrc] = useState(
    `/products/${compound.category.toLowerCase()}/${compound.imageKey}_1.jpg`
  );

  useEffect(() => {
    const nextSrc = `/products/${compound.category.toLowerCase()}/${compound.imageKey}_1.jpg`;
    setImageSrc(nextSrc);
    setImageUnavailable(false);
  }, [compound.category, compound.imageKey]);

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

        <div className="relative mt-4 h-44 w-full overflow-hidden rounded-xl ">
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
            alt={compoundTitle}
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

        <h3 className="mt-4 text-xl font-bold text-[#0f2f57]">{compoundTitle}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-[#405d7f]">
          {compound.shortDescription || compound.description}
        </p>
      </article>
    </Link>
  );
}
