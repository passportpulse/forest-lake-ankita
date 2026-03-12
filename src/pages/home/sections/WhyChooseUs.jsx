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
            src="https://cdn.pixabay.com/photo/2016/11/29/03/53/pool-1867285_1280.jpg"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Why Choose Us
            </h2>

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
