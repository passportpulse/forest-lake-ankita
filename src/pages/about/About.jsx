import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Trees, Leaf, Building2, Globe, CheckCircle } from "lucide-react";
import { credentials } from "../../data/credentialsData";

export default function About() {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <Section className="bg-secondary-dark text-center">
        <Container>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-light mb-6">
            About Us
          </h1>

          <p className="text-primary-light/70 max-w-2xl mx-auto">
            We specialize in landscape and horticulture services, creating
            sustainable green environments for resorts, commercial projects, and
            residential developments. Our goal is to integrate nature with
            modern infrastructure to build healthier and more beautiful spaces.
          </p>
        </Container>
      </Section>

      {/* WHO WE ARE */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://www.mh3designgroup.com/portals/0/ConcretePool%20InnerBottom1.jpg"
              alt="Pool & Landscape Work"
              className="rounded-2xl shadow-lg object-cover w-full h-87.5"
            />

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-4">
                Landscape & Horticulture Experts
              </h2>

              <p className="text-slate-600 mb-4">
                Our company provides professional landscape development and
                horticulture solutions for resorts, commercial spaces, and
                residential projects. We focus on creating eco-friendly outdoor
                environments that improve both aesthetics and environmental
                sustainability.
              </p>

              <p className="text-slate-600">
                With extensive experience working with leading organizations and
                hospitality projects across India, we have built a strong
                reputation for quality, creativity, and environmentally
                responsible planning.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* OUR EXPERTISE */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark text-center mb-12">
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-slate-50 rounded-xl">
              <Trees className="mx-auto text-primary-dark mb-3" size={36} />
              <h3 className="font-semibold text-secondary-dark">
                Landscape Design
              </h3>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <Leaf className="mx-auto text-primary-dark mb-3" size={36} />
              <h3 className="font-semibold text-secondary-dark">
                Horticulture Planning
              </h3>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <Building2 className="mx-auto text-primary-dark mb-3" size={36} />
              <h3 className="font-semibold text-secondary-dark">
                Resort Development
              </h3>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl">
              <Globe className="mx-auto text-primary-dark mb-3" size={36} />
              <h3 className="font-semibold text-secondary-dark">
                Eco-friendly Planning
              </h3>
            </div>
          </div>
        </Container>
      </Section>

      {/* CREDENTIALS */}
      <Section>
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark text-center mb-12">
            Our Credentials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle size={18} className="text-primary-dark mt-1" />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ENVIRONMENT VISION */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark text-center mb-10">
            Our Environmental Vision
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-slate-600">
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
