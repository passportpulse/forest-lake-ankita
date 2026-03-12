import { servicesData } from "../../data/serviceData";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <Section className="bg-secondary-dark text-center">
        <Container>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-light leading-tight mb-6">
            Our Services
          </h1>

          <p className="text-primary-light/70 max-w-2xl mx-auto">
            We specialize in designing and executing world-class water
            attractions, pools, and recreational environments for resorts,
            parks, and commercial spaces.
          </p>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {servicesData.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  {/* IMAGE */}
                  <div className="h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-primary-dark" size={24} />
                      <h3 className="text-lg font-bold text-secondary-dark">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle
                            size={16}
                            className="text-primary-dark mt-0.5"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

          </div>
        </Container>
      </Section>

    </div>
  );
}
