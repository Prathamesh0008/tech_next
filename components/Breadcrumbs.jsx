"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { ChevronRight } from "lucide-react";

function cleanLabel(text = "") {
  return decodeURIComponent(text)
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();

  const path = pathname.toLowerCase(); // normalize
  const { category, productSlug, id } = params || {};

  // Split path
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const crumbs = [{ label: "Home", to: "/" }];

  // ------------------------------
  // MATCH EXACT ROUTES
  // ------------------------------

  // ABOUT
  if (path.startsWith("/about")) {
    crumbs.push({
      label: "About Us",
      to: "/about",
    });
  }

  // CONTACT
  else if (path.startsWith("/contact")) {
    crumbs.push({
      label: "Contact Us",
      to: "/contact",
    });
  }

  // ANTI COUNTERFEIT
  else if (path.startsWith("/anti-counterfeit")) {
    crumbs.push({
      label: "Anti-Counterfeit",
      to: "/anti-counterfeit",
    });
  }

  // PRODUCTS
  else if (path.startsWith("/products")) {
    crumbs.push({ label: "Products", to: "/products" });

    if (category) {
      crumbs.push({
        label: cleanLabel(category),
        to: `/products/${category}`,
      });
    }

    if (productSlug) {
      crumbs.push({
        label: cleanLabel(productSlug),
        to: `/products/${category}/${productSlug}`,
      });
    }
  }

  // BLOG
  else if (path.startsWith("/blog")) {
    crumbs.push({ label: "Blog", to: "/blog" });

    if (id) {
      crumbs.push({
        label: `Article ${id}`,
        to: `/blog/${id}`,
      });
    }
  }

  // FALLBACK
  else {
    crumbs.push({
      label: cleanLabel(parts[0]),
      to: pathname,
    });
  }

  return (
    <div className="relative z-50 pointer-events-auto w-full bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] shadow-md py-3 sm:py-4 px-3 sm:px-6">
      <nav className="max-w-7xl mx-auto">
        <ol className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base text-white">
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;

            return (
              <li key={i} className="flex items-center">
                {i > 0 && (
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/70 mx-1 sm:mx-2" />
                )}

                {isLast ? (
                  <span className="px-2 sm:px-4 py-1 sm:py-2 bg-white/30 text-white font-semibold rounded-lg backdrop-blur-md">
                    {c.label}
                  </span>
                ) : (
                  <Link
                    href={c.to}
                    className="px-2 sm:px-4 py-1 sm:py-2 bg-white/15 hover:bg-white/25 rounded-lg font-medium backdrop-blur-md"
                  >
                    {c.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
