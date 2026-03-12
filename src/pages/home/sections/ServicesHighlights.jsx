import { Link } from "react-router-dom";
import {
  Waves,
  Droplets,
  Sparkles,
  Trees,
  Building2,
  Music,
  Baby,
  FerrisWheel,
  ArrowRight,
} from "lucide-react";

import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function ServicesHighlights() {
  const services = [
    {
      title: "Swimming Pools",
      icon: <Waves size={30} />,
      desc: "Custom-designed residential and commercial swimming pools built with modern technology.",
    },
    {
      title: "Water Parks",
      icon: <Droplets size={30} />,
      desc: "Complete planning and execution of thrilling water parks with safety standards.",
    },
    {
      title: "Fountains",
      icon: <Sparkles size={30} />,
      desc: "Beautiful fountains combining water movement, lights, and architectural design.",
    },
    {
      title: "Landscape",
      icon: <Trees size={30} />,
      desc: "Creative landscaping solutions to enhance outdoor environments and resort spaces.",
    },
    {
      title: "Resort Projects",
      icon: <Building2 size={30} />,
      desc: "End-to-end resort water feature development including pools and attractions.",
    },
    {
      title: "Rain Dance",
      icon: <Music size={30} />,
      desc: "Interactive rain dance systems with music and lighting effects.",
    },
    {
      title: "Kids Play Area",
      icon: <Baby size={30} />,
      desc: "Safe and fun water play zones designed especially for children.",
    },
    {
      title: "Theme Parks",
      icon: <FerrisWheel size={30} />,
      desc: "Complete water-based attractions and installations for theme parks.",
    },
  ];

  return (
    <Section className="bg-slate-50 py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>

          <p className="text-gray-600">
            We provide complete water architecture solutions from design
            to execution for residential, commercial and resort projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 text-primary-dark mb-4 group-hover:bg-primary-dark group-hover:text-black transition">
                {service.icon}
              </div>

              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/services"
            className="flex items-center gap-2 bg-primary-dark text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Show All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
