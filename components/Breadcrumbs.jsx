"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();
  const { translations } = useLanguage();

  const cleanLabel = (text = "") => {
    if (!text) return "";
    return decodeURIComponent(String(text))
      .replace(/-/g, " ")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  };

  // Early returns
  if (!pathname) return null;
  
  const path = pathname.toLowerCase();
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  // Use translations or fallbacks
  const t = translations?.breadcrumbs || {
    home: "Home",
    about: "About",
    contact: "Contact",
    products: "Products",
    blog: "Blog",
    antiCounterfeit: "Anti-Counterfeit",
    compounds: "Compounds",
    productAuthentication: "Product Authentication",
    portfolio: "Portfolio"
  };

  // Build breadcrumbs
  const crumbs = [{ label: t.home, to: "/", icon: Home }];

  // Handle specific routes
  if (path === "/about") {
    crumbs.push({ label: t.about, to: "/about" });
  } else if (path === "/contact") {
    crumbs.push({ label: t.contact, to: "/contact" });
  } else if (path === "/anti-counterfeit") {
    crumbs.push({ label: t.antiCounterfeit, to: "/anti-counterfeit" });
  } else if (path === "/product-authentication" || path === "/autenticacao-produto") {
    // Product authentication page
    crumbs.push({ 
      label: t.productAuthentication, 
      to: "/product-authentication",
      icon: ShieldCheck 
    });
  } else if (path.startsWith("/products")) {
    // Products portfolio page
    crumbs.push({ 
      label: t.products || t.portfolio, 
      to: "/products" 
    });
    
    if (params?.category) {
      crumbs.push({ 
        label: cleanLabel(params.category), 
        to: `/products/${params.category}` 
      });
    }
    
    if (params?.productSlug) {
      crumbs.push({ 
        label: cleanLabel(params.productSlug), 
        to: `/products/${params.category}/${params.productSlug}` 
      });
    }
  } else if (path.startsWith("/compounds")) {
    crumbs.push({
      label: t.compounds || "Compounds",
      to: "/compounds",
    });

    if (params?.compoundSlug) {
      crumbs.push({
        label: cleanLabel(params.compoundSlug),
        to: `/compounds/${params.compoundSlug}`,
      });
    }
  } else if (path.startsWith("/blog")) {
    crumbs.push({ label: t.blog, to: "/blog" });
    if (params?.id) {
      crumbs.push({ 
        label: cleanLabel(params.id), 
        to: `/blog/${params.id}` 
      });
    }
  } else if (parts.length > 0) {
    // Generic fallback for other pages
    const lastPart = parts[parts.length - 1];
    if (lastPart !== "home") {
      crumbs.push({ label: cleanLabel(lastPart), to: pathname });
    }
  }

  // Generate structured data
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.novatechsciences.com";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${siteUrl}${crumb.to}`
    }))
  };

  return (
    <div className="relative z-40 w-full bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] shadow-lg">
      <div className="h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className="py-3 sm:py-4"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              const Icon = crumb.icon;
              
              return (
                <li 
                  key={index} 
                  className="flex items-center flex-shrink-0"
                  aria-current={isLast ? "page" : undefined}
                >
                  {index > 0 && (
                    <ChevronRight 
                      className="w-3.5 h-3.5 text-white/50 mx-1 sm:mx-2 flex-shrink-0" 
                      aria-hidden="true"
                    />
                  )}
                  
                  {isLast ? (
                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm flex-shrink-0">
                      {Icon && <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />}
                      <span className="text-sm sm:text-base font-semibold text-white truncate max-w-[150px] sm:max-w-xs">
                        {crumb.label}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={crumb.to}
                      className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/10 transition-all flex-shrink-0"
                    >
                      {Icon && <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />}
                      <span className="text-sm sm:text-base text-white/90 group-hover:text-white truncate max-w-[120px] sm:max-w-xs">
                        {crumb.label}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  );
}
