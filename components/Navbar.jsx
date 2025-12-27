"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

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

  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const linkRefs = useRef([]);
  useEffect(() => {
  const activeIndex = links.findIndex((link) => link.path === pathname);
  const el = linkRefs.current[activeIndex];
  if (el) {
    const { offsetLeft, offsetWidth } = el;
    setUnderlineProps({ left: offsetLeft, width: offsetWidth });
  }
}, [pathname, links.length]);



  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeIndex = links.findIndex((link) => link.path === pathname);
    if (linkRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = linkRefs.current[activeIndex];
      setUnderlineProps({ left: offsetLeft, width: offsetWidth });
    }
  }, [pathname]);

  const handleNavClick = (e, path) => {
    // support Ctrl/Cmd/middle click to open in new tab
    if (e.ctrlKey || e.metaKey || e.button === 1) {
      e.preventDefault();
      window.open(path, "_blank");
      return;
    }
    setMenuOpen(false);
    router.push(path);
  };

  const isActive = (path) => path === pathname;

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 shadow-md transition-colors duration-500 ${
        scrolled || menuOpen ? "bg-[#0b1e39]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* LOGO */}
        <button
          type="button"
          className="flex items-center cursor-pointer"
          onClick={(e) => handleNavClick(e, "/")}
        >
          <div className="relative w-[170px] h-[48px] flex items-center justify-center">
            <img
              src={logoDark.src ?? logoDark}
              alt="NovaTech dark logo"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                scrolled || menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={logoLight.src ?? logoLight}
              alt="NovaTech light logo"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                scrolled || menuOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </button>

        {/* DESKTOP LINKS */}
              {/* Desktop links */}
        <div className="hidden md:flex flex-1 justify-center relative">
          <div className="flex space-x-6 relative ">
            {links.map((link, idx) => (
              <button
                key={link.name}
                ref={(el) => (linkRefs.current[idx] = el)}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`relative whitespace-nowrap  font-medium transition-transform duration-300 transform hover:scale-105 ${
                  scrolled
                    ? "text-white hover:text-[#4bb2e5]"
                    : "text-[#3386bc] hover:text-[#18487d]"
                } ${isActive(link.path) ? "font-semibold" : ""}`}
              >
                {link.name}
              </button>
            ))}

            {underlineProps.width > 0 && (
              <motion.div
                className={`absolute bottom-0 h-0.5 rounded-full  ${
                  scrolled ? "bg-[#4bb2e5]" : "bg-[#314977]"
                }`}
                initial={{ opacity: 0, scaleX: 0.5 }}
                animate={{
                  left: underlineProps.left,
                  width: underlineProps.width,
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{ duration: 0.25 }}
              />
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="transition-colors duration-300"
          >
            {menuOpen ? (
              <HiX
                className={`w-7 h-7 ${
                  scrolled || menuOpen ? "text-white" : "text-gray-800"
                }`}
              />
            ) : (
              <HiMenu
                className={`w-7 h-7 ${
                  scrolled ? "text-white" : "text-gray-800"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className={`overflow-hidden md:hidden shadow-lg border-t ${
          scrolled || menuOpen
            ? "bg-[#0b1e39] border-[#18487d]"
            : "bg-white border-gray-100"
        }`}
      >
        <div className="flex flex-col items-center py-5 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`w-full text-center font-medium transition-all duration-300 py-2 ${
                scrolled || menuOpen
                  ? "text-white hover:text-[#4bb2e5]"
                  : "text-gray-800 hover:text-[#3386bc]"
              } ${
                isActive(link.path)
                  ? "font-semibold underline underline-offset-4"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
