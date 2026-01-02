"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const iso = "/assets/certificates/iso.png";
const gmp = "/assets/certificates/gmp.png";
const production = "/assets/certificates/production.jpg";
const recycle = "/assets/certificates/Recycle.png";

export default function AboutBackground() {
  const { translations } = useLanguage();
  if (!translations?.aboutBackground) return null;

  const t = translations.aboutBackground;

  const certs = [
    { key: "whoGmp", img: gmp },
    { key: "iso9001", img: iso },
    { key: "environmental", img: recycle },
    { key: "sustainable", img: production }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0b1e39] via-[#18487d] to-[#3386bc] overflow-hidden text-white">
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 md:py-28 text-center">
        
        {/* HERO */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t.hero.title}
        </h1>

        <p className="max-w-3xl text-gray-100 mb-10">
          {t.hero.description}
        </p>

        {/* WHO WE ARE */}
        <div className="bg-white/10 rounded-2xl p-8 max-w-5xl text-left">
          <h2 className="text-3xl font-semibold text-center mb-4">
            {t.who.title}
          </h2>

          <p className="mb-6">{t.who.p1}</p>

          <p>
            {t.who.p2.before}
            <span className="font-semibold text-[#b2e3e1]">
              {t.who.p2.products}
            </span>
            {t.who.p2.middle}
            <span className="font-semibold text-[#4bb2e5]">
              {t.who.p2.values}
            </span>
            {t.who.p2.after}
          </p>
        </div>

        {/* MISSION / VISION / VALUES */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl w-full text-left">
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">{t.mission.title}</h3>
            <p>{t.mission.text}</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">{t.vision.title}</h3>
            <p>{t.vision.text}</p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">{t.values.title}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {t.values.list.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* GLOBAL */}
        <div className="mt-16 max-w-5xl">
          <h2 className="text-3xl font-semibold mb-4">
            {t.global.title}
          </h2>
          <p>{t.global.text}</p>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mt-16 max-w-6xl w-full">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {t.certifications.title}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {certs.map((c) => (
              <div key={c.key} className="bg-white/10 p-4 rounded-xl text-center">
                <img src={c.img} className="h-32 mx-auto mb-3" />
                <h3 className="font-semibold text-[#0b1e39]">
                  {t.certifications[c.key].title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
