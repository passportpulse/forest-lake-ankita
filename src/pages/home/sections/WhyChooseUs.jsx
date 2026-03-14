import { ShieldCheck, Wrench, Users, Award } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award size={26} />,
      title: "Experienced Team",
      desc: "Skilled professionals delivering high-quality aquatic projects.",
    },
    {
      icon: <Wrench size={26} />,
      title: "Modern Technology",
      desc: "Advanced filtration systems and construction methods.",
    },
    {
      icon: <Users size={26} />,
      title: "Customer Focused",
      desc: "We work closely with clients from planning to delivery.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Quality Materials",
      desc: "Premium materials ensuring long-lasting durability.",
    },
  ];

  return (
    <Section className="py-16 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src="/choose.avif"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Why Choose Us
            </h2>

            {/* Paragraph Added */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              We combine experience, innovation, and customer-focused service to
              deliver exceptional aquatic solutions. From design and planning to
              installation and maintenance, our team ensures every project is
              completed with precision, quality materials, and modern
              technology to provide long-lasting and reliable results.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="text-primary-dark">{item.icon}</div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}