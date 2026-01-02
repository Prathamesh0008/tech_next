"use client";

import { FiGlobe } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "it", label: "IT" },
  { code: "pt", label: "PT" },
  { code: "ar", label: "AR" },
  { code: "ru", label: "RU" },
  { code: "zh", label: "ZH" },
  { code: "ro", label: "RO" },
  { code: "sq", label: "SQ" },
  { code: "el", label: "EL" },
  { code: "bg", label: "BG" },
  { code: "mk", label: "MK" },
  { code: "sr", label: "SR" },
  { code: "hr", label: "HR" },
  { code: "bs", label: "BS" },
];

export default function LanguageSwitcher({ variant = "dark" }) {
  const { language, setLanguage } = useLanguage();

  const baseSelect =
    "border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2";
  const dark = "border-white/40 text-white focus:ring-white/30";
  const light = "border-[#3386bc]/40 text-[#3386bc] focus:ring-[#3386bc]/20";

  return (
    <>
      {/* Desktop */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={`hidden md:block bg-transparent ${baseSelect} ${
          variant === "dark" ? dark : light
        }`}
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code} className="text-black">
            {l.label}
          </option>
        ))}
      </select>

      {/* Mobile: user taps the SELECT (not a button), so it opens */}
      <div className="md:hidden relative w-10 h-10">
        <FiGlobe
          className={`absolute inset-0 m-auto w-6 h-6 ${
            variant === "dark" ? "text-white" : "text-[#3386bc]"
          }`}
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Change language"
          className="absolute inset-0 w-full h-full opacity-0"
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
