import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Globe,
  Heart,
  Shield,
  Users,
  MapPin,
  Navigation,
} from "lucide-react";

const FlatWorldMap = dynamic(() => import("./FlatWorldMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse bg-white/10" aria-hidden="true" />
  ),
});

const HealthAccordBanner = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

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
    <section className="text-white relative overflow-x-clip overflow-y-hidden">
      <div className="absolute inset-0 -z-9">
        <Image
          src="/bannernova.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* <WaveBackground></WaveBackground> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-20 grid lg:grid-cols-2 gap-8 sm:gap-14 items-center">
        {/* LEFT */}
        <div className="space-y-6 sm:space-y-8 z-10 min-w-0">
          <div className="inline-flex items-center gap-2 bg-blue-800/30 px-4 py-2 rounded-full border border-blue-500/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-blue-200">
              The Global Health Initiative
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              An Accord for
            </span>
            <br />a Healthier World
          </h1>

          <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-xl">
            Where people live shouldn't impact healthcare quality, and income
            shouldn't define health outcomes.
          </p>

          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4 pt-4 sm:pt-8 min-w-0">
            {accordPrinciples.map((p, i) => (
              <div
                key={i}
                className="flex gap-3 bg-white/50 p-4 rounded-xl border border-white/10 min-w-0"
              >
                <div className="text-black shrink-0">{p.icon}</div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-black break-words">{p.title}</h4>
                  <p className="text-sm text-black break-words">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - MAP */}
        <div className="relative cursor-pointer min-w-0">
          <div className="relative h-[320px] sm:h-[480px] rounded-xl overflow-hidden bg-transparent">
            <FlatWorldMap
              locations={officeLocations}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8">
            {globalImpactStats.map((s, i) => (
              <div key={i} className="bg-white/50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-black">{s.value}</div>
                <div className="text-sm text-black">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthAccordBanner;
