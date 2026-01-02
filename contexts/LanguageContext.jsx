"use client";

import { createContext, useContext, useState, useMemo } from "react";

import en from "../data/languages/en.json";
import es from "../data/languages/es";
import fr from "../data/languages/fr";
import de from "../data/languages/de";
import it from "../data/languages/it";
import pt from "../data/languages/pt";
import ar from "../data/languages/ar";
import ru from "../data/languages/ru";
import zh from "../data/languages/zh";

import ro from "../data/languages/ro";
import sq from "../data/languages/sq";
import el from "../data/languages/el";
import bg from "../data/languages/bg";
import mk from "../data/languages/mk";
import sr from "../data/languages/sr";
import hr from "../data/languages/hr";
import bs from "../data/languages/bs";

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

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en"); // ✅ default

  const translations = useMemo(() => {
    return languages[language] || languages.en;
  }, [language]);

  const value = {
    language,
    setLanguage,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
