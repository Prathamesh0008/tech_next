"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";
import { useLanguage } from "../contexts/LanguageContext";
import { handleCtrlClick } from "../utils/openInNewTab";

export default function Footer() {
  const { translations } = useLanguage();
  if (!translations?.footer) return null;

  const t = translations.footer;

  const links = [
    { name: translations.nav.home, path: "/" },
    { name: translations.nav.about, path: "/about" },
    { name: translations.nav.products, path: "/products" },
    { name: translations.nav.antiCounterfeit, path: "/anti-counterfeit" },
    { name: translations.nav.blog, path: "/blog" },
    { name: translations.nav.contact, path: "/contact" }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white pt-12 pb-6 overflow-hidden"
    >
      {/* Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4bb2e5] via-[#b2e3e1] to-[#3386bc] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-10">
        {/* Logo + Intro */}
        <div className="space-y-4">
          <img
            src="/assets/footer.png"
            alt="NovaTech Sciences Logo"
            className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
          <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
            {t.intro ||
              "NovaTech Sciences advances healthcare through precision, innovation, and trust."}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#b2e3e1]">
            {t.quickLinks}
          </h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={(e) => handleCtrlClick(e, link.path)}
                  className="relative text-gray-200 hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#b2e3e1] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#b2e3e1]">
            {t.newsletter.title}
          </h3>
          <p className="text-sm text-gray-200 mb-3">
            {t.newsletter.description}
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#b2e3e1]">
            {t.social.title}
          </h3>
          <p className="text-sm text-gray-200 mb-4">
            {t.social.description}
          </p>

          <div className="flex gap-5">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61583956722731"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NovaTech Facebook"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300"
            >
              <FaFacebook size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/novatechsciences/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NovaTech Instagram"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/NovaTechScience"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NovaTech X"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-gray-300">
        <p
          dangerouslySetInnerHTML={{
            __html: t.copyright.line1.replace(
              "{year}",
              new Date().getFullYear()
            )
          }}
        />
        <p className="text-xs mt-1 text-gray-400">
          {t.copyright.line2}
        </p>
      </div>
    </motion.footer>
  );
}
