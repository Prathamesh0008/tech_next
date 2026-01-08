"use client";

import { FiGlobe, FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

/* ================= LANGUAGES ================= */
const languages = [
  { code: "en", label: "English", country: "gb" },
  { code: "es", label: "Spanish", country: "es" },
  { code: "fr", label: "French", country: "fr" },
  { code: "de", label: "German", country: "de" },
  { code: "it", label: "Italian", country: "it" },
  { code: "pt", label: "Portuguese", country: "pt" },
  { code: "ar", label: "Arabic", country: "sa" },
  { code: "ru", label: "Russian", country: "ru" },
  { code: "zh", label: "Chinese", country: "cn" },
  { code: "ro", label: "Romanian", country: "ro" },
  { code: "sq", label: "Albanian", country: "al" },
  { code: "el", label: "Greek", country: "gr" },
  { code: "bg", label: "Bulgarian", country: "bg" },
  { code: "mk", label: "Macedonian", country: "mk" },
  { code: "sr", label: "Serbian", country: "rs" },
  { code: "hr", label: "Croatian", country: "hr" },
  { code: "bs", label: "Bosnian", country: "ba" },
  { code: "nl", label: "dutch", country: "nl" },
];


/* ================= FLAG COMPONENT ================= */
const Flag = ({ country }) => (
  <span
    className={`fi fi-${country} w-6 h-4 rounded-sm`}
    style={{ backgroundSize: "cover" }}
  />
);

/* ================= MAIN COMPONENT ================= */
export default function LanguageSwitcher({ variant = "dark" }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = languages.find(l => l.code === language) || languages[0];

  /* Close on outside click */
  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const styles = {
    dark: {
      text: "text-white",
      border: "border-white/30",
      hover: "hover:bg-white/10",
      dropdown: "bg-gray-900",
    },
    light: {
      text: "text-[#3386bc]",
      border: "border-[#3386bc]/30",
      hover: "hover:bg-[#3386bc]/10",
      dropdown: "bg-white",
    },
  };

  const s = styles[variant];

  return (
    <div className="relative" ref={ref}>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center gap-2 px-3 py-2 border rounded ${s.text} ${s.border} ${s.hover}`}
        >
          {/* <FiGlobe /> */}
          <Flag country={current.country} />
          <span className="text-sm">{current.label}</span>
          <FiChevronDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div
            className={`absolute right-0 mt-1 w-56 rounded-md shadow-lg z-50 ${s.dropdown} border ${s.border}`}
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-2 text-sm
                  ${
                    variant === "dark"
                      ? "text-white hover:bg-white/10"
                      : "text-gray-800 hover:bg-gray-100"
                  }
                  ${language === lang.code ? "font-semibold" : ""}
                `}
              >
                <Flag country={lang.country} />
                <span>{lang.label}</span>
                {language === lang.code && <span className="ml-auto">✓</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ================= MOBILE ================= */}
     {/* ================= MOBILE ================= */}
<div className="md:hidden relative">
  {/* Trigger */}
  <button
    onClick={() => setOpen(!open)}
    className={`w-full flex items-center justify-between px-3 py-2 border rounded ${s.text} ${s.border}`}
  >
    <div className="flex items-center gap-2">
      <Flag country={current.country} />
      <span className="text-sm">{current.label}</span>
    </div>
    <FiChevronDown
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    />
  </button>

  {/* Dropdown */}
  {open && (
    <div
      className={`absolute left-0 right-0 mt-1 rounded-md shadow-lg z-50 ${s.dropdown} border ${s.border}`}
    >
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => {
            setLanguage(lang.code);
            setOpen(false);
          }}
          className={`flex items-center gap-3 w-full px-4 py-3 text-sm
            ${
              variant === "dark"
                ? "text-white hover:bg-white/10"
                : "text-gray-800 hover:bg-gray-100"
            }
            ${language === lang.code ? "font-semibold" : ""}
          `}
        >
          <Flag country={lang.country} />
          <span>{lang.label}</span>
          {language === lang.code && <span className="ml-auto">✓</span>}
        </button>
      ))}
    </div>
  )}
</div>


    </div>
  );
}
