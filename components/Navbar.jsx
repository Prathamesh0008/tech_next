"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const logoDark = "/assets/nova_new-removebg-preview.png";
const logoLight = "/assets/footer.png";

export default function Navbar() {
  const { translations } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: translations.nav.home, path: "/" },
    { name: translations.nav.about, path: "/about" },
    { name: translations.nav.products, path: "/products" },
    { name: translations.nav.antiCounterfeit, path: "/anti-counterfeit" },
    { name: translations.nav.blog, path: "/blog" },
    { name: translations.nav.contact, path: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const index = links.findIndex((l) => l.path === pathname);
    setActiveIndex(index >= 0 ? index : 0);
  }, [pathname]);

  const navigate = (e, path) => {
    if (e?.ctrlKey || e?.metaKey || e?.button === 1) {
      window.open(path, "_blank");
      return;
    }
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled || menuOpen ? "bg-[#0b1e39]" : "bg-white"
        } ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button onClick={(e) => navigate(e, "/")} aria-label="Home">
            <Image
              src={scrolled || menuOpen ? logoLight : logoDark}
              alt="NovaTech"
              width={140}
              height={60}
              priority
            />
          </button>

          {/* Desktop nav */}
        
<div className="hidden md:flex items-center gap-8">
  {/* NAV LINKS WITH BORDER BOTTOM */}
  <div className="relative flex gap-8">
    {links.map((l, i) => (
      <button
        key={l.path}
        onClick={(e) => navigate(e, l.path)}
        className="relative pb-2"
      >
        <span
          className={`font-medium transition-colors ${
            scrolled ? "text-white" : "text-[#3386bc]"
          } ${
            i === activeIndex
              ? scrolled
                ? "text-[#4bb2e5]"
                : "text-[#18487d]"
              : ""
          }`}
        >
          {l.name}
        </span>
        
        {/* Animated border bottom */}
        {i === activeIndex && (
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-0.5 ${
              scrolled ? "bg-[#4bb2e5]" : "bg-[#18487d]"
            }`}
            layoutId="nav-border"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        
        {/* Hover effect for all links */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-0.5 opacity-0 hover:opacity-30 transition-opacity ${
            scrolled ? "bg-[#4bb2e5]" : "bg-[#18487d]"
          }`}
        />
      </button>
    ))}
  </div>

  <LanguageSwitcher variant={scrolled || menuOpen ? "dark" : "light"} />
</div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className={`p-2 rounded ${
                menuOpen || scrolled ? "text-white" : "text-[#3386bc]"
              }`}
            >
              {menuOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0b1e39] z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-16 px-4 flex items-center justify-between">
              <button onClick={(e) => navigate(e, "/")} aria-label="Home">
                <Image src={logoLight} alt="NovaTech" width={120} height={50} />
              </button>

              <div className="flex items-center gap-2">
                <LanguageSwitcher variant="dark" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-white"
                >
                  <HiX className="w-8 h-8" />
                </button>
              </div>
            </div>

            <div className="pt-6 flex flex-col items-center">
              {links.map((l, i) => (
                <button
                  key={l.path}
                  onClick={(e) => navigate(e, l.path)}
                  className={`py-4 text-2xl transition-colors ${
                    i === activeIndex ? "text-[#4bb2e5]" : "text-white"
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}