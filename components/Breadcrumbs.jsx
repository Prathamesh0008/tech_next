"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

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

  const crumbs = [{ label: "Home", to: "/", icon: Home }];

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
    <div className="relative z-40 w-full bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] shadow-lg">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-3 sm:py-4">
          <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              const Icon = c.icon;

              return (
                <li key={i} className="flex items-center">
                  {i > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50 mx-1.5 sm:mx-2 flex-shrink-0" />
                  )}

                  {isLast ? (
                    <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm">
                      {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />}
                      <span className="text-sm sm:text-base font-semibold text-white truncate max-w-[150px] sm:max-w-xs">
                        {c.label}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={c.to}
                      className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                    >
                      {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />}
                      <span className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white truncate max-w-[120px] sm:max-w-xs">
                        {c.label}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
          
          {/* Current Page Title (Desktop) */}
          {/* <div className="mt-2 hidden sm:block">
            <h1 className="text-lg md:text-xl font-bold text-white/90 truncate">
              {crumbs[crumbs.length - 1]?.label}
            </h1>
          </div> */}
        </nav>
      </div>
      
      {/* Decorative Bottom Border */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
}