import { servicesData } from "../../data/serviceData";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { CheckCircle } from "lucide-react";
import CommonHeader from "../../components/Header";

export default function Services() {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <CommonHeader
        title="Our Services"
        subtitle="From Swimming Pools and Water Parks to Fountains, Landscapes, Resort Developments, Rain Dance systems, Kids Play Areas, and Theme Parks — we design and deliver complete aquatic and leisure solutions."
        category="Our Expertise"
        image="https://cdn.wallpapersafari.com/82/10/dnR1Ht.jpg"
      />

      {/* SERVICES */}
      <Section className="py-10 md:py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {servicesData.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  {/* IMAGE */}
                  <div className="h-40 md:h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <Icon className="text-primary-dark" size={20} />

                      <h3 className="text-base md:text-lg font-bold text-secondary-dark">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4">
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
