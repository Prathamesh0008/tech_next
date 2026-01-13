import React, { useState } from "react";
import {
  ChevronRight,
  Globe,
  Heart,
  Shield,
  Users,
  MapPin,
  Navigation,
} from "lucide-react";
import WaveBackground from "./WaveBackground";

const HealthAccordBanner = () => {
  const [isMapHovered, setIsMapHovered] = useState(false);
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
      id: 1,
      name: "New York, USA",
      type: "Global Headquarters",
      x: 20,
      y: 36,
    },
    {
      id: 2,
      name: "London, UK",
      type: "European Operations",
      x: 50,
      y: 30,
    },
    {
      id: 3,
      name: "Dubai, UAE",
      type: "Middle East Center",
      x: 52,
      y: 42,
    },
    {
      id: 4,
      name: "Nairobi, Kenya",
      type: "African Regional Office",
      x: 48,
      y: 50,
    },
    {
      id: 5,
      name: "Singapore",
      type: "Asia-Pacific Hub",
      x: 63,
      y: 48,
    },
    {
      id: 6,
      name: "Sydney, Australia",
      type: "Oceania Facility",
      x: 90,
      y: 68,
    },
    {
      id: 7,
      name: "São Paulo, Brazil",
      type: "South American Center",
      x: 32,
      y: 64,
    },
  ];

  return (
    <section
  className="text-white relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `
       
      url("/bannernova.svg")
    `,
  }}
>

      {/* <WaveBackground></WaveBackground> */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-800/30 px-4 py-2 rounded-full border border-blue-500/30">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-blue-200">
              The Global Health Initiative
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              An Accord for
            </span>
            <br />a Healthier World
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Where people live shouldn't impact healthcare quality, and income
            shouldn't define health outcomes.
          </p>

          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            Learn More
            <ChevronRight />
          </button>

          <div className="grid grid-cols-2 gap-4 pt-8">
            {accordPrinciples.map((p, i) => (
              <div
                key={i}
                className="flex gap-3 bg-white/50 p-4 rounded-xl border border-white/10"
              >
                <div className="text-black">{p.icon}</div>
                <div>
                  <h4 className="font-semibold text-black">{p.title}</h4>
                  <p className="text-sm text-black">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – MAP */}
        <div className="relative cursor-pointer">
          <div
            className="relative h-[480px] rounded-xl overflow-hidden bg-white/50"
            onMouseEnter={() => setIsMapHovered(true)}
            onMouseLeave={() => setIsMapHovered(false)}
          >
            <img
              src="/world-map-blue.png"
              alt="World Map"
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />

            <div className="absolute inset-0 " />

            {/* ALL OFFICE PINS */}
            {officeLocations.map((loc) => {
              const showLabel =
                isMapHovered || selectedLocation?.id === loc.id;

              return (
                <div
                  key={loc.id}
                  className="absolute"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  onClick={() => setSelectedLocation(loc)}
                >
                  <span className="absolute -inset-4 rounded-full blur-xl  animate-pulse" />

                  <MapPin className="w-5 h-5 text-black-400 drop-shadow-lg" />

                  {/* NAME */}
                  <span
                    className={`absolute mt-3 left-1/2 -translate-x-1/2 text-xs bg-black/80 px-3 py-1 rounded-full whitespace-nowrap transition 
                      ${
                        showLabel
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-95"
                      }`}
                  >
                    {loc.name}
                  </span>
                </div>
              );
            })}

            {/* SELECTED LOCATION CARD */}
            {selectedLocation && (
              <div className="absolute top-4 right-4 w-64 bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-cyan-400" />
                  <h4 className="font-semibold">
                    {selectedLocation.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  {selectedLocation.type}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Navigation className="w-4 h-4" />
                  Global Network Hub
                </div>
              </div>
            )}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {globalImpactStats.map((s, i) => (
              <div key={i} className="bg-white/50 p-3 rounded-lg text-center">
                <div className="text-2xl font-bold text-black">
                  {s.value}
                </div>
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
