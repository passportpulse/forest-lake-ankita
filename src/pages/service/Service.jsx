import React, { useMemo } from "react";
import { servicesData } from "../../data/serviceData";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { CheckCircle } from "lucide-react";
import CommonHeader from "../../components/Header";
import header2 from "../../../public/header2.webp";

export default function Services() {
  // 1. Memoize data mapping to prevent unnecessary re-calculations on re-renders
  const renderedServices = useMemo(() => {
    return servicesData.map((service, index) => {
      const Icon = service.icon;

      return (
        <div
          key={index}
          className="group bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          {/* IMAGE OPTIMIZATION:
              - Aspect-ratio container prevents Layout Shift (CLS)
              - loading="lazy" for all cards except the first 2 or 3
              - decoding="async" for smoother browser painting
          */}
          <div className="aspect-16/10 md:aspect-video overflow-hidden bg-slate-200">
            <img
              src={service.image}
              alt={service.title}
              loading={index < 3 ? "eager" : "lazy"} // Eager load top 3, lazy load the rest
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* CONTENT */}
          <div className="p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Icon className="text-primary-dark shrink-0" size={20} />
              <h3 className="text-base md:text-lg font-bold text-secondary-dark">
                {service.title}
              </h3>
            </div>

            <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4 line-clamp-3">
              {service.description}
            </p>

            <ul className="space-y-1.5 md:space-y-2">
              {service.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs md:text-sm text-slate-700"
                >
                  <CheckCircle
                    size={14}
                    className="text-primary-dark mt-0.5 shrink-0"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    });
  }, []);

  return (
    <div className="bg-slate-50">
      {/* HERO: Ensure the header image also uses loading="eager" internally */}
      <CommonHeader
        title="Our Services"
        subtitle="From Swimming Pools and Water Parks to Fountains, Landscapes, Resort Developments, Rain Dance systems, Kids Play Areas, and Theme Parks — we design and deliver complete aquatic and leisure solutions."
        category="Our Expertise"
        image={header2}
      />

      <Section className="py-10 md:py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {renderedServices}
          </div>
        </Container>
      </Section>
    </div>
  );
}