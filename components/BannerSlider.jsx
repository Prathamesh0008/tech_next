"use client"

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function BannerSlider({ banners }) {
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

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
        w-full
        h-[28vh]
        sm:h-[26vh]
        md:h-[40vh]
        lg:h-[65vh]
        xl:h-[60vh]  
        laptop-small-height   
        relative
        overflow-hidden
      "
    >
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
        }

        /* Only for small-height laptops (1024×639, 1366×664, 1440×650, etc.) */
        @media (min-width: 1024px) and (max-height: 700px) {
          .laptop-small-height {
            height: 72vh !important;
          }
        }
      `}</style>

      {banners.map((banner, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-full">
            {/* Shimmer Loader */}
            {!imageLoaded[idx] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
            )}

            {/* Banner Image */}
            <img
              src={banner.image}
              alt={banner.alt || `Banner ${idx + 1}`}
              loading="lazy"
              onLoad={() => handleImageLoad(idx)}
              className={`
                w-full h-full
                object-contain           /* mobile: full image no cropping */
                sm:object-contain
                md:object-cover          /* desktop: hero look */
                lg:object-cover
                xl:object-cover
                transition-all duration-[1500ms]
                ${imageLoaded[idx] ? "opacity-100 scale-100" : "opacity-0 scale-105"}
              `}
            />

            {/* TEXT AREA – SAME AS YOUR ORIGINAL LAYOUT */}
            <div
              className={`
                absolute inset-0 flex flex-col text-white 
                px-2 sm:px-3 md:px-6
                /* LEFT */
                ${banner.position === "left" ? "justify-center items-start text-left" : ""}
                /* RIGHT */
                ${banner.position === "right" ? "justify-center items-end text-right" : ""}
                /* TOP */
                ${banner.position === "top" ? "justify-start items-center text-center pt-3 md:pt-10" : ""}
                /* BOTTOM */
                ${banner.position === "bottom" ? "justify-center items-center items-end text-right" : ""}
                /* DEFAULT CENTER */
                ${!banner.position ? "justify-center items-center text-center" : ""}
              `}
            >
              <div className="p-2 rounded-md md:bg-transparent md:backdrop-blur-0">
                {/* TITLE FIXED */}
                <h2
                  className="
                    text-base        
                    sm:text-lg       
                    md:text-4xl      
                    lg:text-6xl     
                     drop-shadow-lg 
                    mb-1 md:mb-4 animate-fadeInUp leading-tight
                  "
                >
                  {Array.isArray(banner.title)
                    ? banner.title.map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))
                    : banner.title}
                </h2>

                {/* SUBTITLE FIXED */}
                {banner.subtitle && (
                  <p
                    className="
                      text-[10px]     /* mobile */
                      sm:text-sm      /* small mobile */
                      md:text-xl      /* desktop */
                      text-white/90 animate-fadeInUp 
                      max-w-[90%] md:max-w-2xl
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
