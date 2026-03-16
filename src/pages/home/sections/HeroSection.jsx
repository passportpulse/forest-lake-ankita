import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Waves } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../../../components/layout/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import img1 from "../../../../public/hero1.jpg";
import img2 from "../../../../public/hero2.jpg";
import img3 from "../../../../public/hero3.jpg";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [img1, img2, img3];

  return (
    <div className="relative h-[65vh] md:h-[95vh] w-full overflow-hidden bg-secondary-dark">
      {/* 1. Background Slider - Kept 100% Clear and HD */}
      <div className="absolute inset-0 z-0">
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
                  alt="Forest Lakes Premium Pools HD"
                />
                {/* No overlay used here as per client request */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-20 h-full flex items-center justify-center md:justify-start pt-6 md:pt-10">
        <Container>
          <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center md:items-start md:text-left space-y-4 md:space-y-6"
            >
              {/* 1. Badge - Kept Independent & Glassy */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] shadow-lg">
                <Waves size={14} className="animate-pulse text-cyan-200" />
                <span className="drop-shadow-sm">Premium Engineering</span>
              </div>

              {/* 2. MAIN GLASS CONTAINER (Heading + Slogan Only) 
      - bg-white/[0.03]: Ultra transparent (3% opacity)
      - backdrop-blur-md: Subtle frost to keep images HD
  */}
              <div className="p-5 md:p-10 rounded-xl md:rounded-2xl bg-white/1 backdrop-blur-sm border border-white/10 shadow-xl max-w-[95%] md:max-w-4xl">
                <h1
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight whitespace-nowrap mb-3 md:mb-4 drop-shadow-lg"
                >
                  Pioneering <span className="italic text-cyan-200">Water</span>{" "}
                  Architecture
                </h1>

                <p className="text-white/90 md:text-slate-100 text-[11px] md:text-xl font-medium md:font-light max-w-sm md:max-w-2xl leading-relaxed drop-shadow-md">
                  Crafting luxury swimming pools and commercial aquatic
                  landscapes with unparalleled engineering precision.
                </p>
              </div>

              {/* 3. Action Button - Kept Independent */}
              <div className="flex justify-center md:justify-start pt-2">
                <Link
                  to="/free-quote"
                  className="group relative overflow-hidden bg-white/20 backdrop-blur-lg text-white px-8 py-3.5 md:px-12 md:py-5 rounded-full font-bold text-xs md:text-base transition-all active:scale-95 flex items-center gap-2 border border-white/30 hover:bg-white/40 shadow-2xl"
                >
                  <span className="relative z-10">Get Free Quote</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Link>
              </div>
            </motion.div>
          </div>
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
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
