"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

// Make sure these paths are correct
import logoDark from "/public/assets/nova_new-removebg-preview.png";
import logoLight from "/public/assets/logo_footer.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Anti-Counterfeit", path: "/anti-counterfeit" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });
  const linkRefs = useRef([]);
  const navRef = useRef(null);

  /* Scroll background change */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* Click outside to close mobile menu */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  /* Active underline */
  useEffect(() => {
    const index = links.findIndex((l) => l.path === pathname);
    const el = linkRefs.current[index];
    if (el) {
      setUnderline({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [pathname, scrolled]);

  const navigate = (e, path) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) {
      window.open(path, "_blank");
      return;
    }
    setMenuOpen(false);
    router.push(path);
  };

  const logoSize = {
    width: 180, // Adjust based on your logo aspect ratio
    height: 60,
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled || menuOpen ? "bg-[#0b1e39]" : "bg-white"
        } ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={(e) => navigate(e, "/")}
            className="relative z-50 focus:outline-none"
          >
            <div className="relative" style={{ width: logoSize.width, height: logoSize.height }}>
              <Image
                src={scrolled || menuOpen ? logoLight : logoDark}
                alt="NovaTech"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 180px, 180px"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex relative items-center gap-8">
            {links.map((l, i) => (
              <button
                key={l.name}
                ref={(el) => (linkRefs.current[i] = el)}
                onClick={(e) => navigate(e, l.path)}
                className={`font-medium text-sm lg:text-base transition-colors relative px-1 ${
                  scrolled
                    ? "text-white hover:text-[#4bb2e5]"
                    : "text-[#3386bc] hover:text-[#18487d]"
                } ${
                  pathname === l.path
                    ? scrolled
                      ? "text-[#4bb2e5]"
                      : "text-[#18487d]"
                    : ""
                }`}
              >
                {l.name}
              </button>
            ))}

            {/* Active Link Underline */}
            {underline.width > 0 && (
              <motion.div
                className={`absolute bottom-0 h-0.5 rounded ${
                  scrolled ? "bg-[#4bb2e5]" : "bg-[#18487d]"
                }`}
                animate={underline}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <HiX className="w-7 h-7 text-white" />
            ) : (
              <HiMenu
                className={`w-7 h-7 transition-colors ${
                  scrolled ? "text-white" : "text-[#3386bc]"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0b1e39] z-40 pt-20 md:hidden"
          >
            <div className="flex flex-col items-center justify-start h-full pt-10">
              {links.map((l, index) => (
                <button
                  key={l.name}
                  onClick={(e) => navigate(e, l.path)}
                  className="w-full max-w-xs text-center py-4"
                >
                  <span
                    className={`text-2xl font-medium transition-colors ${
                      pathname === l.path
                        ? "text-[#4bb2e5] border-b-2 border-[#4bb2e5]"
                        : "text-white hover:text-[#4bb2e5]"
                    }`}
                  >
                    {l.name}
                  </span>
                </button>
              ))}
              
              {/* Decorative element */}
              <div className="mt-12 w-20 h-1 bg-gradient-to-r from-transparent via-[#4bb2e5] to-transparent rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}