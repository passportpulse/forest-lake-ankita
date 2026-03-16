import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { CheckCircle, Waves, Droplet, Sparkles, Umbrella } from "lucide-react";
import { credentials } from "../../data/credentialsData";
import CommonHeader from "../../components/Header";
import header2 from "../../../public/header2.webp";

export default function About() {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <CommonHeader
        title="About Forest Lakes"
        subtitle="Specialists in Swimming Pools, Water Parks, Fountains, Landscapes, Resort Projects, Rain Dance attractions, Kids Play Areas, and Theme Parks—crafted with innovative design and expert engineering."
        category="Our Story"
      />

      {/* WHO WE ARE */}
      <Section className="py-10 md:py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-secondary-dark mb-3 md:mb-4">
                Landscape & Horticulture Experts
              </h2>

              <p className="text-slate-600 mb-3 md:mb-4 text-sm md:text-base">
                Our company provides professional landscape development and
                horticulture solutions for resorts, commercial spaces, and
                residential projects. We focus on creating eco-friendly outdoor
                environments that improve both aesthetics and environmental
                sustainability.
              </p>

              <p className="text-slate-600 text-sm md:text-base">
                With extensive experience working with leading organizations and
                hospitality projects across India, we have built a strong
                reputation for quality, creativity, and environmentally
                responsible planning.
              </p>
            </div>

            <img
              src={header2}
              alt="Pool & Landscape Work"
              // 1. Loading & Priority
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="shadow-lg object-cover w-full h-60 md:h-87.5 rounded-lg"
            />
          </div>
        </Container>
      </Section>

      {/* OUR EXPERTISE */}
      <Section className="bg-white py-10 md:py-16">
        <Container>
          <h2 className="text-xl md:text-3xl font-bold text-secondary-dark text-center mb-8 md:mb-12">
            Our Expertise
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="p-4 md:p-6 bg-slate-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
              <Waves
                className="mx-auto text-primary-dark mb-2 md:mb-3"
                size={28}
              />
              <h3 className="font-semibold text-secondary-dark text-sm md:text-base">
                Swimming Pool Construction
              </h3>
            </div>

            <div className="p-4 md:p-6 bg-slate-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
              <Droplet
                className="mx-auto text-primary-dark mb-2 md:mb-3"
                size={28}
              />
              <h3 className="font-semibold text-secondary-dark text-sm md:text-base">
                Water Park Development
              </h3>
            </div>

            <div className="p-4 md:p-6 bg-slate-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
              <Sparkles
                className="mx-auto text-primary-dark mb-2 md:mb-3"
                size={28}
              />
              <h3 className="font-semibold text-secondary-dark text-sm md:text-base">
                Fountains & Musical Fountains
              </h3>
            </div>

            <div className="p-4 md:p-6 bg-slate-50 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
              <Umbrella
                className="mx-auto text-primary-dark mb-2 md:mb-3"
                size={28}
              />
              <h3 className="font-semibold text-secondary-dark text-sm md:text-base">
                Resort & Aqua Landscape Design
              </h3>
            </div>
          </div>
        </Container>
      </Section>

      {/* CREDENTIALS */}
      <Section className="py-10 md:py-16">
        <Container>
          <h2 className="text-xl md:text-3xl font-bold text-secondary-dark text-center mb-8 md:mb-12">
            Our Credentials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {credentials.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 md:gap-3 bg-white p-3 md:p-4 rounded-lg shadow-sm"
              >
                <CheckCircle size={18} className="text-primary-dark mt-1" />
                <span className="text-slate-700 text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ENVIRONMENT VISION */}
      <Section className="bg-white py-10 md:py-16">
        <Container>
          <h2 className="text-xl md:text-3xl font-bold text-secondary-dark text-center mb-6 md:mb-10">
            Our Environmental Vision
          </h2>

          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 text-slate-600 text-sm md:text-base">
            <p>
              Forests and green landscapes are essential for maintaining
              ecological balance. Modernization and industrial growth have
              significantly reduced natural green cover, making environmental
              restoration more important than ever.
            </p>

            <p>
              Trees play a crucial role in sustaining life on Earth. They absorb
              carbon dioxide, release oxygen, support biodiversity, and create
              healthier ecosystems for people and wildlife.
            </p>

            <p>
              Tree plantation and sustainable landscaping can help combat
              climate change, reduce carbon pollution, and restore natural
              balance. Green environments also enhance architectural beauty and
              improve the quality of urban living.
            </p>

            <p>
              By planting and preserving trees, we contribute to a greener
              planet and a healthier future for the next generation.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
