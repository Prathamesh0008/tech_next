"use client";

import Link from "next/link";
import { useState } from "react";
import { slugifyCompound } from "../lib/compounds";

export default function CompoundCard({ compound }) {
  const [loading, setLoading] = useState(true);

  const imagePath = `/products/${compound.category.toLowerCase()}/${compound.imageKey}_1.jpg`;
  const compoundURL = `/compounds/${slugifyCompound(compound.id)}`;

  return (
    <Link href={compoundURL} className="block">
      <article className="group cursor-pointer rounded-2xl border border-[#dbe8f3] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex rounded-full bg-[#eaf4fb] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#18487d]">
            {compound.category}
          </span>
          <span className="text-xs text-[#4b6b8f]">CAS {compound.cas || "N/A"}</span>
        </div>

        <div className="relative mt-4 h-44 w-full overflow-hidden rounded-xl bg-[#f6fbff]">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-4 border-[#18487d] border-t-transparent" />
            </div>
          )}
          <img
            src={imagePath}
            alt={compound.name}
            onLoad={() => setLoading(false)}
            onError={(e) => {
              e.currentTarget.src = "/products/placeholder.jpg";
              setLoading(false);
            }}
            className={`h-full w-full object-contain transition-opacity duration-300 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <h3 className="mt-4 text-xl font-bold text-[#0f2f57]">{compound.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-[#405d7f]">
          {compound.shortDescription || compound.description}
        </p>
      </article>
    </Link>
  );
}
