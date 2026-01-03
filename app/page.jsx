"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DiseaseFeaturedSection from "../components/DiseaseFeaturedSection";
import BannerSlider from "../components/BannerSlider";

// export const metadata = {
//   title: "Best Steroids for Muscle Growth in 2025 | Nova Techsciences",
//   description:
//     "Explore the best testosterone supplements, legal steroids, and natural muscle builders for strength and lean muscle growth.",

//   alternates: {
//     canonical: "https://www.novatechsciences.com/",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   keywords: [
//     "Best Steroids for Muscle Growth in 2025",
//     "Best Testosterone Supplements for Men",
//     "Best Legal Steroids",
//     "Natural Muscle Builders",
//     "Pharmaceutical Grade Steroids",
//   ],
// };


// ✅ Animated Count Component
function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const duration = 1500;
  const frame = useRef(0);

  useEffect(() => {
    const start = performance.now();
    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [target]);

  return (
    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#3386bc] mb-1">
      {count}
      {suffix}
    </h3>
  );
}

// ✅ Stats Section (Animated)
function StatsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  const stats = [
    { num: 40, text: "Countries Served", suffix: "+" },
    { num: 200, text: "Products Formulated", suffix: "+" },
    { num: 15, text: "Therapeutic Segments", suffix: "+" },
    { num: 100, text: "Quality Commitment", suffix: "%" },
  ];

  return (
    <section
      ref={ref}
      className="relative my-16 md:my-20 bg-[#f5fafb] rounded-xl p-6 sm:p-8 lg:p-10 grid grid-cols-2 md:grid-cols-4 text-center shadow-sm overflow-hidden"
      data-aos="fade-up"
    >
      <div className="absolute top-0 left-0 w-full h-1 " />
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="p-3 sm:p-6"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <CountUp target={stat.num} suffix={stat.suffix} />
          <p className="text-gray-700 font-medium mt-2 text-sm sm:text-base">
            {stat.text}
          </p>
        </motion.div>
      ))}
    </section>
  );
}

// ✅ Main Home Component
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  function handleCtrlClick(e, path) {
    if (e.ctrlKey || e.metaKey || e.button === 1) {
      window.open(path, "_blank");
      return;
    }
    router.push(path);
  }

  const categories = [
    { name: "Asthma", image: "/images/asthma.jpg", link: "/products" },
    { name: "Thyrocare", image: "/images/thyrocare.jpg", link: "/products" },
    { name: "Weight Loss", image: "/images/weightloss.jpg", link: "/products" },
    { name: "High Sugar", image: "/images/highsugar.jpg", link: "/products" },
    { name: "BP", image: "/images/bp.jpg", link: "/products" },
  ];

  const banners = [
    {
      image: "/assets/banners/1.jpg",
      alt: "",
      subtitle: "",
      position: "left",
    },
    {
      image: "/assets/banners/2.jpg",
      alt: "Medicine Banner",
      position: "right",
    },
    {
      image: "/assets/banners/3.jpg",
      alt: "Medical Banner",
      position: "bottom",
    },
    {
      image: "/assets/banners/4.jpg",
      alt: "Medical Banner",
      position: "right",
    },
  ];

  return (
    <>
    
      {/* ✅ Banner Section */}
      <BannerSlider banners={banners} />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-12 overflow-x-hidden">
        {/* ✅ Hero */}
        <section
          className="relative py-14 sm:py-16 md:py-24 lg:py-28 overflow-hidden"
          data-aos="fade-up"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-10 w-56 h-56 sm:w-72 sm:h-72 bg-[#3386bc]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-[#18487d]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#3386bc]/10 to-[#18487d]/10 rounded-full blur-3xl"></div>
          </div>

          {/* Simplified background pattern */}
          <div className="absolute inset-0 -z-5 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233386bc' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          <div className="max-w-6xl mx-auto px-0 sm:px-4">
            {/* Pre-header */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-[#3386bc] to-transparent"></div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#18487d] animate-pulse">
                Welcome to NovaTech
              </span>
              <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-l from-transparent via-[#18487d] to-transparent"></div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#18487d] via-[#3386bc] to-[#4bb2e5]">
                Innovative Healthcare Solutions
              </span>
            </h1>

            {/* Subtitle */}
            <div className="relative inline-block mb-8 sm:mb-10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light px-1">
                NovaTech Sciences brings you trusted medicines, diagnostics, and
                health solutions to help you live healthier and stronger every
                day.
              </p>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-gradient-to-r from-[#18487d] to-[#3386bc] rounded-full"></div>
            </div>

            {/* Stats showcase */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 max-w-4xl mx-auto">
              <div className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18487d] mb-1">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Products
                </div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3386bc] mb-1">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Countries
                </div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18487d] mb-1">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3386bc] mb-1">
                  GMP
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Certified
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-semibold text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden w-full sm:w-auto sm:min-w-[200px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#18487d] via-[#2a5c9c] to-[#3386bc] group-hover:from-[#3386bc] group-hover:via-[#18487d] group-hover:to-[#2a5c9c] transition-all duration-500"></div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
                <div className="relative flex items-center gap-3">
                  {/* <svg
                    className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg> */}
                  <span>Explore Products</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-semibold rounded-2xl border-2 border-[#3386bc] bg-white text-[#3386bc] shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-[#3386bc] hover:text-white w-full sm:w-auto sm:min-w-[200px]"
              >
                <span className="relative flex items-center gap-3">
                  <svg
                    className="w-5 h-5 group-hover:animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Us
                </span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-100">
              <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-5 sm:mb-6">
                Trusted By
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-12 opacity-70">
                <div className="text-base sm:text-xl font-bold text-[#18487d]">
                  Hospitals
                </div>
                <div className="text-base sm:text-xl font-bold text-[#3386bc]">
                  Clinics
                </div>
                <div className="text-base sm:text-xl font-bold text-[#18487d]">
                  Pharmacies
                </div>
                <div className="text-base sm:text-xl font-bold text-[#3386bc]">
                  Healthcare Providers
                </div>
                <div className="text-base sm:text-xl font-bold text-[#18487d]">
                  Research Centers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Why Choose Us */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 bg-gradient-to-r from-[#e9f7fc] to-[#e6f9f5] rounded-2xl p-6 sm:p-8 lg:p-10 my-12 md:my-16 text-center"
          data-aos="fade-up"
        >
          {[
            {
              title: "✔ WHO-GMP Certified",
              text: "Our manufacturing facilities follow WHO-GMP, ISO, and stringent quality standards.",
            },
            {
              title: "🌍 Global Reach",
              text: "Trusted by healthcare professionals across multiple countries with continuous expansion.",
            },
            {
              title: "🔬 Research-Driven",
              text: "We focus on science, innovation, and clinical efficacy for every product we deliver.",
            },
          ].map((item, i) => (
            <div key={i} className="p-2">
              <h3 className="text-lg sm:text-xl font-semibold text-[#314977] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </section>

        {/* ✅ Categories / Divisions */}
        <section className="my-16 md:my-24 lg:my-32" data-aos="fade-up">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-transparent to-[#18487d]"></div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3386bc]">
                Our Expertise
              </span>
              <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-l from-transparent to-[#3386bc]"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 px-2">
              Our Therapeutic Divisions
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#18487d] to-[#3386bc] mx-auto mb-5 sm:mb-6 rounded-full"></div>

            <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4">
              NovaTech Sciences specializes in two core pharmaceutical divisions
              — precision-formulated{" "}
              <span className="font-bold text-[#18487d] relative px-1">
                <span className="relative z-10">Tablets</span>
                <span className="absolute inset-0 bg-[#18487d]/10 -skew-x-6 rounded"></span>
              </span>{" "}
              and{" "}
              <span className="font-bold text-[#3386bc] relative px-1">
                <span className="relative z-10">Injectables</span>
                <span className="absolute inset-0 bg-[#3386bc]/10 -skew-x-6 rounded"></span>
              </span>
              , designed to meet the highest standards of global healthcare and
              manufacturing excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto px-0 sm:px-4">
            {/* Tablets */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#18487d] via-transparent to-[#4bb2e5] rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-500 group-hover:duration-300"></div>

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer">
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-[#18487d]/90 text-white text-xs font-semibold tracking-wide backdrop-blur-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      Tablets
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-[#18487d] text-xs font-semibold backdrop-blur-sm">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GMP Certified
                    </span>
                  </div>

                  <img
                    src="/assets/smallBanners/Tablets-box.png"
                    alt="Tablets Division"
                    className="w-full h-56 sm:h-72 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#18487d]/90 via-[#18487d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 sm:p-6 md:p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        Explore Our Tablets
                      </h3>
                      <ul className="space-y-2 text-white/90 text-sm">
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Hormone Therapies
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Anabolic Formulations
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Therapeutic Solutions
                        </li>
                      </ul>

                      <button
                        onClick={(e) => handleCtrlClick(e, "/products/tablets")}
                        className="mt-5 sm:mt-6 inline-flex items-center bg-white text-[#18487d] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-[#e6f3fa] transition-all duration-300 group/btn"
                      >
                        <span>Explore Tablets</span>
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-8 bg-gradient-to-b from-[#18487d] to-[#4bb2e5] rounded-full mr-3"></div>
                    Tablets Division
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    Advanced oral solid dosage forms featuring hormone therapies,
                    anabolic compounds, and specialized therapeutic formulations.
                    Each tablet is engineered with precision coating technology
                    and bioavailability optimization for consistent therapeutic
                    outcomes.
                  </p>

                  <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        Key Features
                      </span>
                      <span className="text-xs text-[#18487d] font-semibold">
                        ✓ Quality Assured
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Injectables */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#3386bc] via-transparent to-[#67c1f5] rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-500 group-hover:duration-300"></div>

              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-3 cursor-pointer">
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-[#3386bc]/90 text-white text-xs font-semibold tracking-wide backdrop-blur-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      Injectables
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-[#3386bc] text-xs font-semibold backdrop-blur-sm">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Sterile Facility
                    </span>
                  </div>

                  <img
                    src="/assets/smallBanners/Injectable-box.png"
                    alt="Injectables Division"
                    className="w-full h-56 sm:h-72 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3386bc]/90 via-[#3386bc]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 sm:p-6 md:p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        Explore Our Injectables
                      </h3>
                      <ul className="space-y-2 text-white/90 text-sm">
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Testosterone Blends
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Anabolic Esters
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Therapeutic Injectables
                        </li>
                      </ul>

                      <button
                        onClick={(e) =>
                          handleCtrlClick(e, "/products/injectables")
                        }
                        className="mt-5 sm:mt-6 inline-flex items-center bg-white text-[#3386bc] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-[#e6f4fa] transition-all duration-300 group/btn"
                      >
                        <span>Explore Injectables</span>
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-8 bg-gradient-to-b from-[#3386bc] to-[#67c1f5] rounded-full mr-3"></div>
                    Injectables Division
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    Premium sterile injectable formulations including testosterone
                    blends, anabolic esters, and specialized therapeutic solutions.
                    Manufactured in ISO-certified sterile facilities ensuring
                    maximum purity, safety, and precise dosage accuracy.
                  </p>

                  <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        Key Features
                      </span>
                      <span className="text-xs text-[#3386bc] font-semibold">
                        ✓ Sterility Guaranteed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-10 sm:mt-16 md:mt-20 px-0 sm:px-4"
          >
            <div className="bg-gradient-to-r from-[#18487d]/5 via-[#3386bc]/5 to-[#18487d]/5 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Need Help Choosing?
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Consult with our pharmaceutical experts for personalized
                    guidance.
                  </p>
                </div>
                <button
                  onClick={(e) => handleCtrlClick(e, "/contact")}
                  className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#18487d] to-[#3386bc] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Contact Our Experts
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ✅ Disease Highlight */}
        <DiseaseFeaturedSection />

        {/* ✅ Stats Section (Animated) */}
        <StatsSection />

        {/* ✅ About */}
        <section
          className="bg-gray-100 rounded-xl p-6 sm:p-8 mb-12 md:mb-16 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            About NovaTech
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
            NovaTech Sciences is dedicated to providing innovative healthcare
            solutions and trusted medicines. Our mission is to improve the
            quality of life with advanced, affordable, and reliable healthcare
            products.
          </p>
        </section>

        {/* ✅ Blog Section */}
        <section className="mb-16 md:mb-20" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
            Health Tips & Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "Managing Diabetes Naturally",
                text: "Lifestyle tips and precautions to manage your blood sugar effectively.",
              },
              {
                title: "Asthma Care Tips",
                text: "Guidelines to control asthma and prevent attacks.",
              },
              {
                title: "Safe Weight Loss",
                text: "Achieve your health goals through safe and sustainable practices.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#314977] mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Call to Action */}
        <section
          className="text-center py-12 sm:py-16 bg-gradient-to-r from-[#3386bc] to-[#4bb2e5] text-white rounded-2xl mb-12 md:mb-16 px-4"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Partner with NovaTech Sciences
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-sm sm:text-base">
            Collaborate with us to bring cutting-edge pharmaceutical and
            nutraceutical solutions to global markets.
          </p>
          <a
            href="/contact"
            onClick={(e) => handleCtrlClick(e, "/contact")}
            className="bg-white text-[#314977] font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 inline-block"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </>
  );
}
