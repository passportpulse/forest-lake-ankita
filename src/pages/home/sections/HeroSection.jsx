import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Waves } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../../components/layout/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Assuming you converted these to .webp for faster loading
import img1 from "../../../../public/hero1.webp";
import img2 from "../../../../public/hero2.webp";
import img3 from "../../../../public/hero3.webp";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [img1, img2, img3];
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure the browser has parsed the critical CSS
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[65vh] md:h-[95vh] w-full overflow-hidden bg-slate-900">
      {/* 1. Optimized Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop
          className="h-full w-full"
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <img
                  src={img}
                  /* Performance Hack: 
                     - Eager load the 1st image for instant visibility.
                     - Lazy load the rest to save bandwidth.
                  */
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchpriority={i === 0 ? "high" : "low"}
                  className="h-full w-full object-cover"
                  alt={`Forest Lakes Premium Pool View ${i + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-20 h-full flex items-center justify-center md:justify-start pt-6 md:pt-10">
        <Container>
          <AnimatePresence>
            {isReady && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 md:space-y-6"
              >
                {/* 1. Badge - Independent & Glassy */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] shadow-lg">
                  <Waves size={14} className="animate-pulse text-cyan-200" />
                  <span className="drop-shadow-sm">Premium Engineering</span>
                </div>

                {/* 2. MAIN GLASS CONTAINER (Heading + Slogan Only) 
                    - Reduced bg opacity to white/1 (1%) for ultra transparency
                    - Kept blur-sm for subtle frosting without distorting HD image
                */}
                <div className="p-5 md:p-10 rounded-2xl md:rounded-[3rem] bg-white/1 backdrop-blur-sm border border-white/10 shadow-xl max-w-[95%] md:max-w-4xl transition-all">
                  <h1
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight whitespace-nowrap mb-3 md:mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                  >
                    Pioneering <span className="italic text-cyan-100">Water</span> Architecture
                  </h1>

                  <p className="text-white/90 md:text-slate-100 text-[11px] md:text-xl font-medium md:font-light max-w-sm md:max-w-2xl leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                    Crafting luxury swimming pools and commercial aquatic landscapes
                    with unparalleled engineering precision.
                  </p>
                </div>

                {/* 3. Action Button - Independent */}
                <div className="flex justify-center md:justify-start pt-2">
                  <Link
                    to="/free-quote"
                    className="group relative overflow-hidden bg-white/20 backdrop-blur-lg text-white px-8 py-3.5 md:px-12 md:py-5 rounded-full font-medium text-xs md:text-base transition-all active:scale-95 flex items-center gap-2 border border-white/30 hover:bg-white/40 shadow-2xl"
                  >
                    <span className="relative z-10">Get Free Quote</span>
                    <ArrowRight
                      size={18}
                      className="relative z-10 group-hover:translate-x-1 transition-transform"
                    />
                    {/* Compact shimmer animation */}
                    <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </div>

      {/* 3. Wave Animation */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 md:h-36 z-30 pointer-events-none"
        style={{ clipPath: "url(#wave-clip-hero)" }}
      >
        <div className="w-full h-full bg-linear-to-t from-cyan-600 via-blue-400 to-cyan-500 opacity-95" />
      </div>

      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="wave-clip-hero" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L1,1 L1,0.2 C0.8,0.4 0.6,0.1 0.4,0.3 C0.2,0.5 0.1,0.3 0,0.5 L0,1 Z">
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="
                  M0,1 L1,1 L1,0.2 C0.8,0.4 0.6,0.1 0.4,0.3 C0.2,0.5 0.1,0.3 0,0.5 L0,1 Z;
                  M0,1 L1,1 L1,0.4 C0.8,0.2 0.5,0.5 0.3,0.3 C0.1,0.1 0.05,0.4 0,0.3 L0,1 Z;
                  M0,1 L1,1 L1,0.2 C0.8,0.4 0.6,0.1 0.4,0.3 C0.2,0.5 0.1,0.3 0,0.5 L0,1 Z
                "
              />
            </path>
          </clipPath>
        </defs>
      </svg>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}