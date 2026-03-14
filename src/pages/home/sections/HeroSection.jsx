import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Waves } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../../../components/layout/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [
    "/hero5.jpg",
     "/hero6.jpg",
    // "/hero.jpg",
    // "/hero2.jpg",
    // "/hero3.jpg",
    "/hero4.jpg",
  ];

  return (
    // Height: 80vh on mobile, 95vh on laptop
    <div className="relative h-[80vh] md:h-[95vh] w-full overflow-hidden bg-white">

      {/* 1. Background Slider Container */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          backgroundColor: "#050c1a",
          clipPath: "url(#wave-clip)",
        }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={2000}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full w-full"
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <img
                  src={img}
                  className="h-full w-full object-cover"
                  alt="Slide"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#050c1a]/80 via-transparent to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-20 h-full flex items-center pb-10 md:pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            {/* Enhanced Badge - Smaller on Mobile */}
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-5 md:py-2 mb-6 md:mb-10 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-xl">
              <Waves size={14} className="text-blue-400 animate-pulse md:size-4" />
              <span className="text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-blue-50/90 font-bold">
                Established Excellence
              </span>
            </div>

            {/* Typography - Scaled for Mobile */}
            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-8xl font-black text-white mb-4 md:mb-8 leading-[1.1] md:leading-[1.05] tracking-tight drop-shadow-lg"
            >
              Pioneering <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-200 to-white">
                Water
              </span>{" "}
              Architecture
            </h1>

            {/* Description - More compact on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative mb-8 md:mb-12 group"
            >
              <div className="absolute -inset-y-3 -inset-x-4 md:-inset-y-6 md:-inset-x-8 bg-blue-500/5 backdrop-blur-[1px] rounded-2xl md:rounded-3xl"></div>

              <p className="relative z-10 text-base md:text-3xl text-white font-light max-w-3xl leading-snug tracking-wide">
                <span className="text-blue-400 font-serif text-2xl md:text-5xl opacity-80 mr-1 select-none">“</span>
                Building world-class swimming pools and aquatic experiences with engineering precision
                <span className="text-blue-400 font-serif text-2xl md:text-5xl opacity-80 ml-1 select-none">”</span>
              </p>
            </motion.div>

            {/* Button - More compact on Mobile */}
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/free-quote"
                className="group bg-secondary-dark px-7 py-3.5 md:px-10 md:py-5 rounded-full text-sm md:text-base text-white font-bold hover:bg-blue-500 transition-all flex items-center gap-2 md:gap-3 shadow-xl hover:-translate-y-1"
              >
                Get Free Quote
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:size-5" />
              </Link>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* 3. The Animated Wave Mask Definition (No changes needed) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
            <path d="M1,0 L0,0 L0,0.85 C0.2,0.95 0.4,0.75 0.6,0.85 C0.8,0.95 0.9,0.85 1,0.75 L1,0 Z">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                  M1,0 L0,0 L0,0.85 C0.2,0.95 0.4,0.75 0.6,0.85 C0.8,0.95 0.9,0.85 1,0.75 L1,0 Z;
                  M1,0 L0,0 L0,0.80 C0.2,0.70 0.5,0.95 0.7,0.80 C0.9,0.65 0.95,0.90 1,0.80 L1,0 Z;
                  M1,0 L0,0 L0,0.85 C0.2,0.95 0.4,0.75 0.6,0.85 C0.8,0.95 0.9,0.85 1,0.75 L1,0 Z
                "
              />
            </path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}