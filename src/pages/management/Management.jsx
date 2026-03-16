import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Users, Target, Award, TrendingUp, Shield, Clock } from "lucide-react";
import CommonHeader from "../../components/Header";

export default function Management() {
  // const managementTeam = [
  //   {
  //     name: "John Anderson",
  //     role: "Chief Executive Officer",
  //     experience: "20+ years",
  //     expertise: "Strategic Planning & Business Development",
  //     image: "/team1.jpg"
  //   },
  //   {
  //     name: "Sarah Mitchell",
  //     role: "Chief Operations Officer", 
  //     experience: "15+ years",
  //     expertise: "Project Management & Operations",
  //     image: "/team2.jpg"
  //   },
  //   {
  //     name: "Michael Chen",
  //     role: "Technical Director",
  //     experience: "18+ years", 
  //     expertise: "Engineering & Design Solutions",
  //     image: "/team3.jpg"
  //   },
  //   {
  //     name: "Emily Rodriguez",
  //     role: "Creative Director",
  //     experience: "12+ years",
  //     expertise: "Landscape Design & Architecture",
  //     image: "/team4.jpg"
  //   }
  // ];

  const managementValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Vision-Driven",
      description: "We lead with clear vision and strategic foresight to deliver exceptional aquatic solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity First",
      description: "Our business is built on trust, transparency, and unwavering commitment to ethical practices."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continuous Growth",
      description: "We embrace innovation and continuously improve our processes and technologies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Excellence",
      description: "Our success is driven by talented professionals dedicated to exceeding client expectations."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Commitment",
      description: "We maintain the highest standards in every project, from design to execution."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure projects are completed on schedule without compromising quality."
    }
  ];

  return (
    <div className="bg-slate-50">

      {/* HERO */}
      <CommonHeader
        title="Management Team"
        subtitle="Meet the visionary leaders behind Forest Lakes - experienced professionals dedicated to excellence in aquatic solutions, landscape design, and project management."
        category="Leadership"
        image="https://img.staticmb.com/mbcontent/images/crop/uploads/2024/8/Swimming-Pool-Designs_0_1200.jpg.webp"
      />

      {/* MANAGEMENT PHILOSOPHY */}
      <Section className="py-10 md:py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-4">
              Our Management Philosophy
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm md:text-base">
              At Forest Lakes, our management team combines decades of industry experience with innovative thinking 
              to deliver world-class aquatic and landscape solutions. We believe in leading by example, fostering 
              creativity, and maintaining uncompromising quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary-dark mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* LEADERSHIP TEAM */}
      {/* <Section className="py-10 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-4">
              Leadership Team
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-sm md:text-base">
              Our diverse team brings together expertise from engineering, design, business management, 
              and creative arts to provide comprehensive solutions for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-secondary-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-dark font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-slate-500 text-xs mb-2">
                  {member.experience} experience
                </p>
                <p className="text-slate-600 text-xs">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section> */}

      {/* MANAGEMENT APPROACH */}
      <Section className="py-10 md:py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-dark mb-6">
                Our Approach to Excellence
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-dark mb-2">
                    Strategic Planning
                  </h3>
                  <p className="text-slate-600 text-sm">
                    We develop comprehensive project strategies that align with client goals, 
                    budget constraints, and timeline requirements while ensuring quality outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-dark mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Our management team implements rigorous quality control measures at every 
                    project stage, from initial design to final delivery and maintenance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-dark mb-2">
                    Client-Centric Focus
                  </h3>
                  <p className="text-slate-600 text-sm">
                    We prioritize client communication and collaboration, ensuring transparency 
                    throughout the project lifecycle and delivering solutions that exceed expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-primary-light to-primary-dark rounded-xl p-8 text-secondary-dark">
              <h3 className="text-xl font-bold mb-6">Leadership Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-dark rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm">100% project delivery success rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-dark rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm">ISO certified quality management systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-dark rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm">24/7 project oversight and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-dark rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm">Continuous team training and development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-dark rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm">Sustainable and environmentally responsible practices</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
