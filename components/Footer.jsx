"use client";

// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import logo from "@/assets/logo_footer.png";
import { handleCtrlClick } from "../utils/openInNewTab";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white pt-12 pb-6 overflow-hidden"
    >
      {/* Glowing Border Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4bb2e5] via-[#b2e3e1] to-[#3386bc] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-10">
        {/* Column 1 - Logo + Intro */}
        <div className="space-y-4">
          <img
            src="/assets/footer.png"
            alt="NovaTech Logo"
            className="h-20 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
          <p className="text-sm text-gray-200 leading-relaxed max-w-xs">
            NovaTech Sciences is committed to advancing healthcare through precision,
            innovation, and trust — empowering healthier lives worldwide.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#b2e3e1]">
            Quick Links
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
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#b2e3e1] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#b2e3e1]">
            Subscribe to Updates
          </h3>
          <p className="text-sm text-gray-200 mb-3">
            Get the latest news, research insights, and new product launches directly in your inbox.
          </p>
        </div>

        {/* Column 4 - Social Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#b2e3e1]">
            Connect With Us
          </h3>
          <p className="text-sm text-gray-200 mb-4">
            Follow NovaTech Sciences on social media for latest updates.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-[#b2e3e1] font-medium">
            NovaTech Sciences
          </span>
          . All rights reserved.
        </p>
        <p className="text-xs mt-1 text-gray-400">
          Designed & Developed with 💙 for healthcare innovation.
        </p>
      </div>
    </motion.footer>
  );
}
