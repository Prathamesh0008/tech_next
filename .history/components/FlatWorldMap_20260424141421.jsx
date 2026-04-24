"use client";

import { useMemo } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import countries110m from "world-atlas/countries-110m.json";

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 740;
const PROJECTION_ZOOM = 1.22;
const NETWORK_POINTS = [
  { id: "na-west", lat: 52, lng: -145 },
  { id: "na-east", lat: 42, lng: -75 },
  { id: "sa-north", lat: 5, lng: -78 },
  { id: "sa-south", lat: -15, lng: -58 },
  { id: "eu-west", lat: 50, lng: 2 },
  { id: "eu-east", lat: 54, lng: 40 },
  { id: "africa", lat: 8, lng: 20 },
  { id: "middle-east", lat: 22, lng: 46 },
  { id: "india", lat: 21, lng: 78 },
  { id: "east-asia", lat: 35, lng: 122 },
  { id: "australia", lat: -25, lng: 134 },
];

const NETWORK_CONNECTIONS = [
  ["na-west", "na-east"],
  ["na-east", "eu-west"],
  ["eu-west", "eu-east"],
  ["eu-east", "east-asia"],
  ["east-asia", "australia"],
  ["na-east", "sa-north"],
  ["sa-north", "sa-south"],
  ["sa-north", "africa"],
  ["africa", "middle-east"],
  ["middle-east", "india"],
  ["india", "east-asia"],
  ["eu-east", "india"],
  ["eu-west", "africa"],
  ["na-west", "sa-north"],
];

const ANTARCTICA_NUMERIC_ID = 10;

export default function FlatWorldMap({
  locations,
  selectedLocation,
  onSelectLocation,
}) {
  const { countries, pathGen, projectedLocations, projectedNetworkPoints } = useMemo(() => {
    const geoJson = feature(countries110m, countries110m.objects.countries);
    const visibleCountries = geoJson.features.filter(
      (country) => Number(country.id) !== ANTARCTICA_NUMERIC_ID
    );

    const projection = geoNaturalEarth1().fitExtent(
      [
        [6, 6],
        [MAP_WIDTH - 6, MAP_HEIGHT - 6],
      ],
      {
        type: "FeatureCollection",
        features: visibleCountries,
      }
    );
    const [translateX, translateY] = projection.translate();
    projection
      .scale(projection.scale() * PROJECTION_ZOOM)
      .translate([translateX, translateY + 10]);
    const pathGen = geoPath(projection);

    const projectedLocations = (locations || [])
      .map((loc) => {
        const point = projection([loc.lng, loc.lat]);
        if (!point) return null;
        return {
          ...loc,
          x: point[0],
          y: point[1],
        };
      })
      .filter(Boolean);

    const projectedNetworkPoints = NETWORK_POINTS.map((point) => {
      const [x, y] = projection([point.lng, point.lat]);
      return { ...point, x, y };
    });

    return {
      countries: visibleCountries,
      pathGen,
      projectedLocations,
      projectedNetworkPoints,
    };
  }, [locations]);

  const connections = useMemo(() => {
    if (!projectedNetworkPoints.length) return [];
    const byId = Object.fromEntries(
      projectedNetworkPoints.map((point) => [point.id, point])
    );

    return NETWORK_CONNECTIONS.map(([startId, endId]) => {
      const start = byId[startId];
      const end = byId[endId];
      if (!start || !end) return null;

      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2 - Math.abs(start.x - end.x) * 0.15;
      return {
        id: `${startId}-${endId}`,
        d: `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`,
      };
    }).filter(Boolean);
  }, [projectedNetworkPoints]);

  return (
    <div className="w-full rounded-[22px] overflow-hidden bg-transparent">
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="w-full h-auto block"
        role="img"
        aria-label="Flat world map with country markers"
      >
        <defs>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {countries.map((country, index) => (
          <path
            key={country.id || index}
            d={pathGen(country) || ""}
            fill="rgba(103, 232, 249, 1.0)"
            stroke="rgba(186, 230, 253, 0.2)"
            strokeWidth={0.6}
          />
        ))}

        {connections.map((arc) => (
          <path
            key={arc.id}
            d={arc.d}
            fill="none"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth={2.2}
            strokeLinecap="round"
            filter="url(#nodeGlow)"
          />
        ))}

        {projectedNetworkPoints.map((point) => (
          <g key={point.id}>
            <circle
              cx={point.x}
              cy={point.y}
              r={16}
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth={2}
              filter="url(#nodeGlow)"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r={10}
              fill="none"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth={2}
            />
            <circle cx={point.x} cy={point.y} r={4.6} fill="#ffffff" />
          </g>
        ))}

        {projectedLocations.map((loc) => {
          const active = selectedLocation?.id === loc.id;
          return (
            <g
              key={loc.id}
              onClick={() => onSelectLocation?.(loc)}
              className="cursor-pointer"
            >
              <circle
                cx={loc.x}
                cy={loc.y}
                r={active ? 10 : 7}
                fill="none"
                stroke="rgba(255,255,255,0.92)"
                strokeWidth={active ? 2.4 : 1.8}
                opacity={active ? 0.8 : 0.35}
                filter="url(#nodeGlow)"
              />
              <circle cx={loc.x} cy={loc.y} r={3.5} fill="#ffffff" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
