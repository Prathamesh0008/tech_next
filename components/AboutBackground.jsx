"use client"

import React from "react";
import iso from "../public/assets/certificates/iso.png"
import gmp from "../public/assets/certificates/gmp.png"
import production from "../public/assets/certificates/production.jpg"
import recycle from "../public/assets/certificates/Recycle.png"



export default function AboutBackground() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0b1e39] via-[#18487d] to-[#3386bc] overflow-hidden text-white">
      {/* ===== Animated Wave Layers ===== */}
      <div className="absolute bottom-0 left-0 w-full h-[250px]">
        {[10, 13, 16, 19, 22, 25].map((t, i) => (
          <svg
            key={i}
            className={`absolute bottom-0 left-0 w-[300%] ${
              i % 2 === 0
                ? `animate-[wave_${t}s_linear_infinite]`
                : `animate-[wave_${t}s_linear_infinite_reverse]`
            }`}
            viewBox="0 0 1200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={`M0,${100 + i * 10} C${150 + i * 50},${200 + i * 10} ${
                350 + i * 50
              },${i * 10} ${600 + i * 20},${100 + i * 10} C${
                850 + i * 30
              },${200 + i * 10} ${1050 + i * 20},${i * 10} 1200,${
                100 + i * 10
              } L1200,200 L0,200 Z`}
              fill={`rgba(255,255,255,${0.1 + i * 0.1})`}
            />
          </svg>
        ))}
      </div>

      {/* ===== Content Section ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          About NovaTech Sciences
        </h1>
        <p className="max-w-3xl text-gray-100 text-base md:text-lg leading-relaxed mb-10">
          NovaTech Sciences is a forward-thinking pharmaceutical and nutraceutical
          organization committed to innovation, purity, and progress in healthcare.
          Our mission is to deliver world-class quality medicines and wellness products
          that enhance lives across the globe. With a presence in multiple therapeutic
          segments and strong international partnerships, we are driven by a deep
          commitment to science, safety, and sustainability.
        </p>

        {/* ===== Company Overview ===== */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-5xl text-left shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white text-center">
            Who We Are
          </h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            Founded with a vision to redefine pharmaceutical standards, NovaTech Sciences
            specializes in developing, manufacturing, and exporting high-quality formulations
            that meet stringent international compliance benchmarks. Our facilities operate
            under WHO-GMP and ISO standards, ensuring consistency and precision in every batch.
          </p>
          <p className="text-gray-200 leading-relaxed">
            With over <span className="font-semibold text-[#b2e3e1]">80+ pharmaceutical and nutraceutical products</span>,
            NovaTech Sciences serves a broad spectrum of healthcare needs including general
            therapeutics, hormonal preparations, nutraceuticals, and wellness solutions.
            Our team of professionals ensures that every product reflects our core values —
            <span className="font-semibold text-[#4bb2e5]"> Quality, Integrity, and Innovation.</span>
          </p>
        </div>

        {/* ===== Mission, Vision, and Values ===== */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl w-full text-left">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              To advance global health through innovative pharmaceutical and nutraceutical
              products that deliver proven efficacy, safety, and affordability.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              To be recognized as a global healthcare partner of choice — combining
              research, innovation, and sustainable practices to serve humanity.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-white mb-3">Core Values</h3>
            <ul className="text-gray-200 text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>Quality and Compliance First</li>
              <li>Innovation through Science</li>
              <li>Ethics and Transparency</li>
              <li>Commitment to Sustainability</li>
              <li>Patient-Centric Approach</li>
            </ul>
          </div>
        </div>

        {/* ===== Global Presence Section ===== */}
        <div className="mt-16 max-w-5xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Global Reach and Future Expansion
          </h2>
          <p className="text-gray-200 leading-relaxed">
            With a rapidly expanding presence in Asia, Europe, and the Middle East,
            NovaTech Sciences is building a strong foundation of trust and excellence.
            Our focus on strategic partnerships, advanced R&D, and sustainable
            manufacturing ensures we continue to meet the evolving demands of the
            global healthcare landscape.
          </p>
        </div>

        {/* ===== Certifications ===== */}
        {/* ===== Certifications with Images ===== */}
<div className="mt-16 max-w-6xl w-full">
  <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white">
    Our Certifications
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
    {[
      {
        title: "WHO-GMP Certified",
        img: gmp,
      },
      {
        title: "ISO 9001:2015",
        img: iso,
      },
      {
        title: "Environmental Compliance",
        img: recycle,
      },
      {
        title: "Sustainable Manufacturing",
        img: production,
      },
    ].map((cert, i) => (
      <div
        key={i}
        className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg hover:bg-white/20 transition text-center"
      >
        <img
          src={cert.img}
          alt={cert.title}
          className="w-full h-32 object-contain mb-3 drop-shadow-lg"
        />
        <h3 className="text-lg font-semibold text-[#0b1e39]">{cert.title}</h3>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}
