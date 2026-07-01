"use client";

import React, { useState } from "react";
import Image from "next/image";
import FlatWorldMap from "./FlatWorldMap";
import {
  Globe,
  Heart,
  Shield,
  Users,
  MapPin,
  Navigation,
} from "lucide-react";

const ACCORD_PRINCIPLES = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Healthcare access across borders",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Equitable Care",
    description: "Quality healthcare for all income levels",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Quality Standards",
    description: "Consistent excellence worldwide",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Focus",
    description: "Local needs, global expertise",
  },
];

const GLOBAL_IMPACT_STATS = [
  { value: "150+", label: "Countries Reached" },
  { value: "10M+", label: "Lives Impacted" },
  { value: "95%", label: "Patient Satisfaction" },
  { value: "24/7", label: "Global Support" },
];

const OFFICE_LOCATIONS = [
  {
    id: "new-york",
    name: "New York, USA",
    type: "Global Headquarters",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: "london",
    name: "London, UK",
    type: "European Operations",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "dubai",
    name: "Dubai, UAE",
    type: "Middle East Center",
    lat: 25.2048,
    lng: 55.2708,
  },
  {
    id: "nairobi",
    name: "Nairobi, Kenya",
    type: "African Regional Office",
    lat: -1.2864,
    lng: 36.8172,
  },
  {
    id: "singapore",
    name: "Singapore",
    type: "Asia-Pacific Hub",
    lat: 1.3521,
    lng: 103.8198,
  },
  {
    id: "sydney",
    name: "Sydney, Australia",
    type: "Oceania Facility",
    lat: -33.8688,
    lng: 151.2093,
  },
  {
    id: "sao-paulo",
    name: "Sao Paulo, Brazil",
    type: "South American Center",
    lat: -23.5505,
    lng: -46.6333,
  },
];

const HealthAccordBanner = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <section className="text-white relative overflow-hidden bg-[#18487d]">
      <Image
        src="/bannernova-force-v3.svg?v=1"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-bottom"
      />
      <div className="absolute inset-0 z-0 bg-[#0f2d55]/35 sm:bg-[#0f2d55]/20" />

      {/* <WaveBackground></WaveBackground> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start lg:items-center">
        {/* LEFT */}
        <div className="space-y-5 sm:space-y-8 z-10 min-w-0">
          

          <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] break-words">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              An Accord for
            </span>
            <br />a Healthier World
          </h1>

          <p className="text-sm min-[400px]:text-base sm:text-xl text-gray-200 leading-relaxed max-w-xl">
            Where people live shouldn't impact healthcare quality, and income
            shouldn't define health outcomes.
          </p>

          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-8 min-w-0">
            {ACCORD_PRINCIPLES.map((p, i) => (
              <div
                key={i}
                className="flex gap-3 bg-white/60 p-3 sm:p-4 rounded-xl border border-white/10 min-w-0"
              >
                <div className="text-black shrink-0">{p.icon}</div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-black break-words">{p.title}</h4>
                  <p className="text-xs sm:text-sm text-black break-words">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - MAP */}
        <div className="relative z-10 cursor-pointer min-w-0">
          <div className="relative h-[220px] min-[420px]:h-[260px] sm:h-[360px] lg:h-[480px] rounded-xl overflow-hidden bg-transparent">
            <FlatWorldMap
              locations={OFFICE_LOCATIONS}
              selectedLocation={selectedLocation}
              onSelectLocation={setSelectedLocation}
            />

            {/* SELECTED LOCATION CARD */}
            {selectedLocation && (
              <div className="hidden sm:block absolute top-4 right-4 w-64 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-cyan-400" />
                  <h4 className="font-semibold">{selectedLocation.name}</h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">{selectedLocation.type}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Navigation className="w-4 h-4" />
                  Global Network Hub
                </div>
              </div>
            )}
          </div>

          {/* STATS */}
          <div className="relative mt-4 sm:-mt-8 rounded-2xl p-2 sm:p-0 overflow-hidden isolate">
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
              {GLOBAL_IMPACT_STATS.map((s, i) => (
                <div key={i} className="relative z-10 bg-white/60 p-2.5 sm:p-3 rounded-lg text-center min-w-0">
                  <div className="text-lg min-[420px]:text-xl sm:text-2xl font-bold text-black">{s.value}</div>
                  <div className="text-[11px] min-[420px]:text-xs sm:text-sm text-black break-words">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthAccordBanner;
