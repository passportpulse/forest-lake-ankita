import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";
import pool1 from "../../../assets/pools/1.webp";
import pool2 from "../../../assets/pools/2.webp";
import pool3 from "../../../assets/pools/3.webp";
import pool4 from "../../../assets/pools/5.webp";

export default function FeaturedProjects() {
  const projects = [pool1, pool2, pool3, pool4];

  return (
    <Section className="py-12 md:py-24 bg-slate-50 overflow-hidden">
      <Container>
        {/* Header - Consistent with Why Choose Us */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 px-2 md:px-0 gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-2">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-primary-dark rounded-full" />
          </div>
          <p className="text-slate-600 text-sm md:text-base max-w-md">
            Explore some of our recent luxury swimming pool and 
            commercial water park installations.
          </p>
        </div>

        {/* Compact Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {projects.map((img, i) => (
            <div
              key={i}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-xl md:rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="h-40 sm:h-50 md:h-70 w-full object-cover group-hover:scale-110 transition duration-700"
              />
              
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-secondary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Compact Mobile Button */}
        <div className="flex justify-center mt-10 md:mt-16 px-4">
          <Link
            to="/portfolio"
            className="flex items-center gap-2 bg-secondary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md active:scale-95 transition-transform"
          >
            View All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}