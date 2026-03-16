import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Waves,
  Droplets,
  Sparkles,
  Trees,
  Building2,
  Baby,
  ArrowRight,
} from "lucide-react";

import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

// Optimized WebP Imports
import img1 from "../../../../public/1pool.webp";
import img2 from "../../../../public/2rooftop-pool.webp";
import img4 from "../../../../public/4water-park.webp";
import img5 from "../../../../public/5fountain.webp";
import img7 from "../../../../public/7plan.webp";
import img8 from "../../../../public/8rain-dance.webp";

// Moved outside component to prevent unnecessary re-renders
const services = [
  {
    title: "Swimming Pools",
    icon: Waves,
    desc: "Custom-designed residential and commercial pools.",
    image: img1,
  },
  {
    title: "Water Parks",
    icon: Droplets,
    desc: "Complete planning and execution of thrilling parks.",
    image: img4,
  },
  {
    title: "Fountains",
    icon: Sparkles,
    desc: "Architectural water movement and light design.",
    image: img5,
  },
  {
    title: "Landscape",
    icon: Trees,
    desc: "Creative landscaping for resort environments.",
    image: img7,
  },
  {
    title: "Resort Projects",
    icon: Building2,
    desc: "End-to-end water feature development.",
    image: img2,
  },
  {
    title: "Kids Play Area",
    icon: Baby,
    desc: "Safe and fun water play zones for children.",
    image: img8,
  },
];

export default function ServicesHighlights() {
  return (
    <Section className="bg-white py-12 md:py-20">
      <Container>
        {/* Header */}
        <div className="mb-8 px-2 md:px-0 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-2">
              Expert Services
            </h2>
            <div className="w-10 h-1 bg-primary-light rounded-full" />
          </div>

          <Link
            to="/services"
            className="hidden md:flex items-center gap-2 text-secondary-dark font-bold border-b-2 border-primary-light pb-1 hover:text-primary-dark transition-colors"
          >
            All Services <ArrowRight size={18} />
          </Link>
        </div>

        {/* Swipe Container for Mobile / Grid for Desktop */}
        <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-6 scrollbar-hide">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-70 md:min-w-full snap-center"
              >
                <div className="group relative h-50 md:h-65 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Glassmorphism subtle overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-secondary-dark/90 via-secondary-dark/10 to-transparent" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-light/90 backdrop-blur-md text-secondary-dark rounded-lg">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-bold text-base md:text-lg drop-shadow-md">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/services"
            className="flex items-center gap-2 bg-secondary-dark text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg active:scale-95 transition-transform"
          >
            Show All <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}