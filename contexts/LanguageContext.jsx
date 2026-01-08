"use client";

import { createContext, useContext, useState, useMemo, useEffect } from "react";

// ✅ IMPORT ALL LANGUAGES (JSON ONLY)
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

// product translations
import enProducts from "../data/languages/products/en.json";
import arProducts from "../data/languages/products/ar.json";
import bgProducts from "../data/languages/products/bg.json";
import bsProducts from "../data/languages/products/bs.json";
import deProducts from "../data/languages/products/de.json";
import elProducts from "../data/languages/products/el.json";
import esProducts from "../data/languages/products/es.json";
import frProducts from "../data/languages/products/fr.json";
import hrProducts from "../data/languages/products/hr.json";
import itProducts from "../data/languages/products/it.json";
import mkProducts from "../data/languages/products/mk.json";
import nlProducts from "../data/languages/products/nl.json";
import ptProducts from "../data/languages/products/pt.json";
import roProducts from "../data/languages/products/ro.json";
import ruProducts from "../data/languages/products/ru.json";
import sqProducts from "../data/languages/products/sq.json";
import srProducts from "../data/languages/products/sr.json";
import zhProducts from "../data/languages/products/zh.json";
// import nlProducts from "../data/languages/products/nl.json";


// ✅ LANGUAGE MAP
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
const productLanguages = {
  en: enProducts,
  ar: arProducts,
  bg: bgProducts,
  bs: bsProducts,
  de: deProducts,
  el: elProducts,
  es: esProducts,
  fr: frProducts,
  hr: hrProducts,
  it: itProducts,
  mk: mkProducts,
  nl: nlProducts,
  pt: ptProducts,
  ro: roProducts,
  ru: ruProducts,
  sq: sqProducts,
  sr: srProducts,
  zh: zhProducts,
  // nl: nlProducts,
};


const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [hydrated, setHydrated] = useState(false);

  // ✅ LOAD SAVED LANGUAGE ON FIRST LOAD
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && languages[savedLang]) {
      setLanguage(savedLang);
    }
    setHydrated(true);
  }, []);

  // ✅ SAVE LANGUAGE ON CHANGE
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("lang", language);
  }, [language, hydrated]);

 const translations = useMemo(() => {
  const ui = languages[language] || languages.en;
  const productData =
    productLanguages[language]?.products ||
    productLanguages.en.products;

  return {
    ...ui,
    products: productData,
  };
}, [language]);


  const value = {
    language,
    setLanguage,
    translations,
  };

  // ⛔ Prevent hydration mismatch
  if (!hydrated) return null;

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
