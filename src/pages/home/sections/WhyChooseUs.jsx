import logo from "../../../../public/logo.webp";
import { ShieldCheck, Wrench, Users, Award } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Experienced Team",
      desc: "High-quality aquatic projects.",
    },
    {
      icon: Wrench,
      title: "Modern Tech",
      desc: "Advanced filtration systems.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      desc: "Planning to delivery care.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Materials",
      desc: "Long-lasting durability.",
    },
  ];

  return (
    <Section className="py-10 md:py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image Side - Compact on Mobile */}
          <div className="relative px-2 md:px-0 order-2 lg:order-1">
            <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src={logo}
                alt="Luxury Pool Construction"
                className="w-full h-[200px] md:h-[500px] object-cover"
              />
              {/* Overlay Label - Smaller on mobile */}
              <div className="hidden lg:flex absolute  bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 rounded-xl  items-center gap-3 border border-slate-100 shadow-md">
                <div className="h-8 w-1 bg-primary-dark rounded-full" />
                <p className="text-secondary-dark font-bold text-xs md:text-base italic">
                  "Excellence in every drop."
                </p>
              </div>
            </div>
          </div>

          {/* Text Side - Compact on Mobile */}
          <div className="px-1 md:px-0 order-1 lg:order-2">
            <div className="mb-6 md:mb-10 text-center lg:text-left">
              <span className="text-primary-dark font-bold text-[10px] uppercase tracking-widest mb-2 block">
                Our Difference
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-2">
                Why Choose Us
              </h2>
              <div className="w-12 h-1 bg-primary-light rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Features - 2x2 Grid on Mobile */}
            <div className="grid grid-cols-2 gap-4 md:gap-x-8 md:gap-y-10">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-2 p-3 rounded-2xl bg-slate-50/50 border border-transparent hover:border-slate-100 transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-primary-dark shadow-sm">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary-dark text-xs md:text-base">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-[10px] md:text-sm leading-tight mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
