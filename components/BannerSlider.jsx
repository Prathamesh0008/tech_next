"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function BannerSlider({ banners = [] }) {
  const [imageLoaded, setImageLoaded] = useState({});
  const handleImageLoad = (index) =>
    setImageLoaded((p) => ({ ...p, [index]: true }));

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      effect="fade"
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      className="
          w-full relative overflow-hidden
          mt-10 xl:mt-20
          aspect-[16/9] md:aspect-[21/9]
          min-h-[clamp(220px,35svh,820px)]
        "
    >
      <style>{`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            opacity: 0;
            animation: fadeInUp 1s ease forwards;
          }

          /* small-height laptops */
          @media (min-width: 1024px) and (max-height: 700px) {
            .swiper {
              min-height: 72vh !important;
            }
          }
        `}</style>

      {banners.map((banner, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-full">
            {!imageLoaded[idx] && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse z-10" />
            )}

            <Image
              src={banner.image}
              alt={banner.alt || `Banner ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="(max-width: 768px) 100vw, 100vw"
              onLoad={() => handleImageLoad(idx)}
              className={`
  w-full h-full
  object-contain md:object-cover
  bg-white
  transition-all duration-[1500ms]
  ${imageLoaded[idx] ? "opacity-100 scale-100" : "opacity-0 scale-105"}
`}
            />

            <div
              className={`
                  absolute inset-0 flex flex-col text-white
                  px-3 sm:px-4 md:px-8
                  ${
                    banner.position === "left"
                      ? "justify-center items-start text-left"
                      : ""
                  }
                  ${
                    banner.position === "right"
                      ? "justify-center items-end text-right"
                      : ""
                  }
                  ${
                    banner.position === "top"
                      ? "justify-start items-center text-center pt-4 md:pt-12"
                      : ""
                  }
                  ${
                    banner.position === "bottom"
                      ? "justify-end items-center text-center pb-4 md:pb-12"
                      : ""
                  }
                  ${
                    !banner.position
                      ? "justify-center items-center text-center"
                      : ""
                  }
                `}
            >
              <div className="p-2 rounded-md md:bg-transparent md:backdrop-blur-0">
                <h2
                  className="
                      text-base sm:text-xl md:text-4xl lg:text-6xl
                      drop-shadow-lg mb-2 md:mb-4 animate-fadeInUp leading-tight
                    "
                >
                  {Array.isArray(banner.title)
                    ? banner.title.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                    : banner.title}
                </h2>

                {banner.subtitle && (
                  <p
                    className="
                        text-[11px] sm:text-sm md:text-xl
                        text-white/90 animate-fadeInUp
                        max-w-[92%] md:max-w-2xl
                      "
                    style={{ animationDelay: "0.6s" }}
                  >
                    {banner.subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
