"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import en from "../data/languages/en.json";
import es from "../data/languages/es.json";
import fr from "../data/languages/fr.json";
import de from "../data/languages/de.json";
import it from "../data/languages/it.json";
import pt from "../data/languages/pt.json";
import ar from "../data/languages/ar.json";
import ru from "../data/languages/ru.json";
import zh from "../data/languages/zh.json";
import ro from "../data/languages/ro.json";
import sq from "../data/languages/sq.json";
import el from "../data/languages/el.json";
import bg from "../data/languages/bg.json";
import mk from "../data/languages/mk.json";
import sr from "../data/languages/sr.json";
import hr from "../data/languages/hr.json";
import bs from "../data/languages/bs.json";

const languages = {
  en,
  es,
  fr,
  de,
  it,
  pt,
  ar,
  ru,
  zh,
  ro,
  sq,
  el,
  bg,
  mk,
  sr,
  hr,
  bs,
};

const LanguageContext = createContext(null);

const isSupportedLanguage = (lang) => !!(lang && languages[lang]);

export function LanguageProvider({ children, initialLanguage = "en" }) {
  const [language, setLanguage] = useState(() =>
    isSupportedLanguage(initialLanguage) ? initialLanguage : "en"
  );

  useEffect(() => {
    window.localStorage.setItem("lang", language);
    document.cookie = `lang=${language}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const translations = useMemo(() => languages[language] || languages.en, [language]);

  const value = {
    language,
    currentLanguage: language,
    setLanguage,
    translations,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
