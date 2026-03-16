import { Link } from "react-router-dom";
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

export default function ServicesHighlights() {
  const services = [
    {
      title: "Swimming Pools",
      icon: Waves,
      desc: "Custom-designed residential and commercial pools.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewvEfon0lO6Vp-ilvImVHFHzu-kSjE1AQLQ&s",
    },
    {
      title: "Water Parks",
      icon: Droplets,
      desc: "Complete planning and execution of thrilling parks.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQtPZhwbxZ7AOc7nSQcZ1t6gHHBZOxONG-Q&s",
    },
    {
      title: "Fountains",
      icon: Sparkles,
      desc: "Architectural water movement and light design.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Font_M%C3%A0gica_de_Montju%C3%AFc_10_%282009-05-24%29.JPG/330px-Font_M%C3%A0gica_de_Montju%C3%AFc_10_%282009-05-24%29.JPG",
    },
    {
      title: "Landscape",
      icon: Trees,
      desc: "Creative landscaping for resort environments.",
      image:
        "https://vandesign.asia/wp-content/uploads/2023/03/7-most-beautiful-resort-landscape-garden-design-models-in-2022-1.jpg",
    },
    {
      title: "Resort Projects",
      icon: Building2,
      desc: "End-to-end water feature development.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/656411102.jpg?k=7e1185b2b5cee354505b239d9266d7b4e14922dcc32f66404c06554bacdbac1a&o=",
    },
    {
      title: "Kids Play Area",
      icon: Baby,
      desc: "Safe and fun water play zones for children.",
      image:
        "https://img.freepik.com/free-photo/outdoors-colorful-children-playground-background_23-2149587761.jpg?semt=ais_rp_progressive&w=740&q=80",
    },
  ];
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

          {/* Desktop Only Button (Hidden on Mobile) */}
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
              <div key={index} className="min-w-65 md:min-w-full snap-center">
                <div
                  whileHover={{ y: -5 }}
                  className="group relative h-50 md:h-65 rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-secondary-dark/90 via-secondary-dark/20 to-transparent" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-primary-light text-secondary-dark rounded-lg">
                        <Icon size={16} />
                      </div>
                      <h3 className="font-bold text-base md:text-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Small Button (Visible only on Mobile) */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            to="/services"
            className="flex items-center gap-2 bg-secondary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md active:scale-95 transition-transform"
          >
            Show All <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
