"use client";

import { motion } from "framer-motion";

const headline = "Innovative Healthcare Solutions".split(" ");

const pillPositions = [
  { top: "5%", left: "10%", size: "w-8 h-8 md:w-10 md:h-10" },
  { top: "25%", left: "60%", size: "w-10 h-10 md:w-12 md:h-12" },
  { top: "55%", left: "15%", size: "w-12 h-12 md:w-14 md:h-14" },
  { top: "75%", left: "55%", size: "w-14 h-14 md:w-16 md:h-16" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-200 to-blue-400 overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between p-4 sm:p-6 md:p-10 min-h-[80vh]">
      {/* Floating pills */}
      {pillPositions.map((pill, i) => (
        <motion.img
          key={i}
          src="/assets/capsule.png"
          alt={`pill${i}`}
          className={`absolute ${pill.size} sm:block`}
          style={{ top: pill.top, left: pill.left }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            y: [0, i % 2 === 0 ? -20 : 20, 0],
            rotate: [0, 15 * (i + 1), 0],
            opacity: [0, 1, 1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Floating background circles */}
      <motion.div
        className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 bg-white opacity-10 rounded-full top-10 sm:top-20 left-10 sm:left-1/4"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-white opacity-10 rounded-full bottom-10 right-10 sm:right-1/3"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Hero Image */}
      <motion.img
        src="/images/hero-medicine.png"
        alt="Medicine"
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover mb-6 lg:mb-0 z-10 mx-auto lg:mx-0"
        initial={{ x: -200, opacity: 0, rotate: -10 }}
        animate={{ x: 0, opacity: 1, rotate: [-2, 2, 0], y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Text Section */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-xl z-20 text-center lg:text-left px-4 w-full lg:w-auto lg:max-w-lg"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 flex flex-wrap justify-center lg:justify-start leading-tight">
          {headline.map((word, idx) => (
            <motion.span
              key={idx}
              className="mr-2 inline-block"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 120 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-gray-800 mb-6 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          NovaTech Sciences brings you trusted medicines and health solutions
          for a healthier life.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="/products"
            className="bg-[#314977] text-white px-6 py-3 text-center rounded-lg shadow-lg w-full sm:w-auto"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
          >
            Explore Products
          </motion.a>
          <motion.a
            href="/contact"
            className="bg-[#3386bc] text-white px-6 py-3 text-center rounded-lg shadow-lg w-full sm:w-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -3, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              repeatType: "mirror",
            }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
