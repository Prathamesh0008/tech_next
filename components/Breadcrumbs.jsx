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

  const path = pathname.toLowerCase();
  const parts = path.split("/").filter(Boolean);

  if (parts.length === 0) return null;

  const crumbs = [{ label: "Home", to: "/", icon: Home }];

  /* =========================
     STATIC ROUTES
  ========================== */

  if (path === "/about") {
    crumbs.push({ label: "About Us", to: "/about" });
  }

  else if (path === "/contact") {
    crumbs.push({ label: "Contact Us", to: "/contact" });
  }

  else if (path === "/anti-counterfeit") {
    crumbs.push({ label: "Anti-Counterfeit", to: "/anti-counterfeit" });
  }

  /* =========================
     PRODUCTS
     /products
     /products/[category]
     /products/[category]/[productSlug]
  ========================== */

  else if (path.startsWith("/products")) {
    crumbs.push({ label: "Products", to: "/products" });

    if (params?.category) {
      crumbs.push({
        label: cleanLabel(params.category),
        to: `/products/${params.category}`,
      });
    }

    if (params?.productSlug) {
      crumbs.push({
        label: cleanLabel(params.productSlug),
        to: `/products/${params.category}/${params.productSlug}`,
      });
    }
  }

  /* =========================
     BLOG
     /blog
     /blog/[slug]
  ========================== */

  else if (path.startsWith("/blog")) {
    crumbs.push({ label: "Blog", to: "/blog" });

    if (params?.id) {
      crumbs.push({
        label: cleanLabel(params.id),
        to: `/blog/${params.id}`,
      });
    }
  }

  /* =========================
     FALLBACK
  ========================== */

  else {
    crumbs.push({
      label: cleanLabel(parts[0]),
      to: pathname,
    });
  }

  return (
    <div className="relative z-40 w-full bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] shadow-lg">
      <div className="h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-3 sm:py-4">
          <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              const Icon = c.icon;

              return (
                <li key={i} className="flex items-center">
                  {i > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-white/50 mx-2" />
                  )}

                  {isLast ? (
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm">
                      {Icon && <Icon className="w-4 h-4" />}
                      <span className="text-sm sm:text-base font-semibold text-white truncate max-w-xs">
                        {c.label}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={c.to}
                      className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/10 transition-all"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span className="text-sm sm:text-base text-white/90 group-hover:text-white truncate max-w-xs">
                        {c.label}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      <div className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
