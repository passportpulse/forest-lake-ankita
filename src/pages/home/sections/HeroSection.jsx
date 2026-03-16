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
    "https://media.istockphoto.com/id/1825000760/photo/swimming-pool-underwater.jpg?s=612x612&w=0&k=20&c=dv0Rwh7oQmjUBmyWriv2lHLq03u_noDfr5nG8ydxJGU=",
    "https://thumbs.dreamstime.com/b/rooftop-swimming-pool-overlooking-modern-city-skyline-bright-daylight-high-resolution-photograph-top-tall-building-424680975.jpg",
    "https://wallup.net/wp-content/uploads/2017/11/22/408528-swimming_pool.jpg",
  ];

  return (
    <div className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden bg-white">
      {/* 1. Background Slider - Full Screen */}
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
                  alt="Slide"
                />
                {/* Light Whitish Overlay */}
                <div className="absolute inset-0 bg-white/20 " />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Centered Content Layer */}
      <div className="relative z-20 h-full flex items-center justify-center pt-10">
        <Container>
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-4xl bg-white/70 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] border border-white/50 shadow-2xl text-center"
            >
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary-light/10 text-secondary-dark font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-sm">
                <Waves size={14} className="animate-bounce" />
                Premium Aquatic Engineering
              </div>

              {/* Minimalist Heading */}
              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-4xl md:text-7xl font-medium text-secondary-dark mb-6 leading-[1.1] tracking-tight"
              >
                Pioneering{" "}
                <span className="italic text-primary-dark">Water</span>{" "}
                <br className="hidden md:block" />
                Architecture
              </h1>

              {/* Slogan with light text */}
              <p className="text-slate-600 text-sm md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
                Crafting luxury swimming pools and commercial aquatic landscapes
                with unparalleled engineering precision.
              </p>

              {/* Primary Action */}
              <div className="flex justify-center">
                <Link
                  to="/free-quote"
                  className="group relative overflow-hidden bg-secondary-dark text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-bold transition-all hover:shadow-[0_10px_30px_rgba(5,12,26,0.2)] active:scale-95 flex items-center gap-3"
                >
                  <span className="relative z-10">Get Free Quote</span>
                  <ArrowRight
                    size={20}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  {/* Shining Effect */}
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* 3. The Wave Nature - Sea Color Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-20 md:h-36 z-30 pointer-events-none"
        style={{ clipPath: "url(#wave-clip-bottom)" }}
      >
        {/* Gradient background to simulate water depth */}
        <div className="w-full h-full bg-linear-to-t from-cyan-600 via-blue-500 to-cyan-400 opacity-90" />

        {/* Optional: A second slightly offset wave for extra "shimmer" effect */}
        <div className="absolute inset-0 w-full h-full bg-white/20 blur-sm -translate-y-2" />
      </div>

      {/* Wave Mask Definition - Adjusted for Bottom Position */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="wave-clip-bottom" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L1,1 L1,0.2 C0.8,0.4 0.6,0.1 0.4,0.3 C0.2,0.5 0.1,0.3 0,0.5 L0,1 Z">
              <animate
                attributeName="d"
                dur="8s"
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
