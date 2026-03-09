"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { getCompounds } from "../../data/compounds";
import Breadcrumbs from "../../components/Breadcrumbs";
import CompoundCard from "../../components/CompoundCard";

export default function CompoundsPage() {
  const compounds = useMemo(() => getCompounds(), []);

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(
    () => ["all", ...Array.from(new Set(compounds.map((c) => c.category.toLowerCase())))],
    [compounds]
  );

  const filteredCompounds = useMemo(() => {
    return compounds.filter((compound) => {
      const matchCategory =
        activeCategory === "all" || compound.category.toLowerCase() === activeCategory;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        compound.displayName?.toLowerCase().includes(q) ||
        compound.name?.toLowerCase().includes(q) ||
        compound.id?.toLowerCase().includes(q) ||
        compound.cas?.toLowerCase().includes(q);

      return matchCategory && matchQuery;
    });
  }, [compounds, query, activeCategory]);

  return (
    <div className="min-h-screen bg-[#f3f8fc] pt-20">
      <Breadcrumbs />

      <section className="relative overflow-hidden py-12 text-white">
        <img
          src="/bannernova.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#072043]/60 via-[#123a6d]/60 to-[#2b78b8]/60"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold md:text-4xl">Compounds Directory</h1>
          <p className="mt-3 max-w-2xl text-white/85">
            Browse all compounds with quick access to composition, indications, presentation, and
            detailed safety information.
          </p>

          <div className="relative mt-6 max-w-2xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4f79a5]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, id, or CAS number"
              className="w-full rounded-xl border-0 bg-white py-3 pl-11 pr-4 text-[#123a6d] outline-none ring-2 ring-transparent transition focus:ring-[#8bc4ff]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => {
            const selected = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? "bg-[#123a6d] text-white"
                    : "bg-white text-[#1a4f86] hover:bg-[#e6f2fc]"
                }`}
              >
                {category === "all" ? "All" : category}
              </button>
            );
          })}
        </div>

        {filteredCompounds.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center text-[#3f6289] shadow-sm">
            No compounds found for this filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCompounds.map((compound) => (
              <CompoundCard key={compound.id} compound={compound} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
