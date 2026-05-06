import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Globe,
  Heart,
  Shield,
  Users
} from "lucide-react";

const FlatWorldMap = dynamic(() => import("./FlatWorldMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse bg-white/10" aria-hidden="true" />
  ),
});

const HealthAccordBanner = () => {
  const accordPrinciples = [
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

  const globalImpactStats = [
    { value: "150+", label: "Countries Reached" },
    { value: "10M+", label: "Lives Impacted" },
    { value: "95%", label: "Patient Satisfaction" },
    { value: "24/7", label: "Global Support" },
  ];

  const officeLocations = [
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

  return (
    <section className="text-white relative overflow-hidden bg-[#18487d]">
      <div className="hero-banner-bg absolute inset-0 z-0" />
      <div className="absolute inset-0 z-0 bg-[#0f2d55]/35 sm:bg-[#0f2d55]/20" />

      {/* <WaveBackground></WaveBackground> */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start lg:items-center">
        {/* LEFT */}
        <div className="space-y-5 sm:space-y-8 z-10 min-w-0">
          <div className="inline-flex items-center gap-2 bg-blue-800/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-blue-500/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-blue-200">
              The Global Health Initiative
            </span>
          </div>

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
        </div>

        {/* RIGHT - MAP */}
        <div className="relative z-10 cursor-pointer min-w-0">
          <div className="relative h-[220px] min-[420px]:h-[260px] sm:h-[360px] lg:h-[480px] rounded-xl overflow-hidden bg-transparent">
            <FlatWorldMap
              locations={officeLocations}
              selectedLocation={null}
              onSelectLocation={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthAccordBanner;
