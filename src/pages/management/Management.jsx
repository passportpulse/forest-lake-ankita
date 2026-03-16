import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Quote,
} from "lucide-react";
import CommonHeader from "../../components/Header";
import header4 from "../../../public/header4.webp";

export default function Management() {
  const managementTeam = [
    {
      name: "RIMI S CHOWDHURY",
      role: "MD / CEO",
      experience: "15+ years",
      expertise: "Strategic Leadership & Management",
    },
    {
      name: "RAKTIM ROY CHOWDHURY",
      role: "Director / COO",
      experience: "12+ years",
      expertise: "Operations & Project Execution",
    },
  ];

  const managementValues = [
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Vision-Driven",
      description:
        "We lead with clear vision and strategic foresight to deliver exceptional aquatic solutions.",
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Integrity First",
      description:
        "Our business is built on trust, transparency, and unwavering commitment to ethical practices.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Continuous Growth",
      description:
        "We embrace innovation and continuously improve our processes and technologies.",
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Team Excellence",
      description:
        "Our success is driven by talented professionals dedicated to exceeding client expectations.",
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Quality Commitment",
      description:
        "We maintain the highest standards in every project, from design to execution.",
    },
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Timely Delivery",
      description:
        "We respect deadlines and ensure projects are completed on schedule.",
    },
  ];

  return (
    <div className="bg-slate-50">
      <CommonHeader
        title="Management Team"
        subtitle="Meet the visionary leaders behind Forest Lakes - experienced professionals dedicated to excellence in aquatic solutions."
        category="Leadership"
        image={header4}
      />

      {/* MESSAGE FROM LEADERSHIP */}
      <Section className="py-10 bg-white border-b border-slate-100">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark">
              Management Insights
            </h2>
            <div className="h-1 w-12 bg-primary-light mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-2">
            {/* MD Message */}
            <div className="relative p-6 md:p-8 rounded-3xl bg-primary-light/10 border border-primary-light/20 flex flex-col justify-between shadow-sm">
              <Quote className="absolute top-4 left-4 w-5 h-5 text-primary-dark/20" />
              <div className="text-center">
                <p className="text-slate-700 italic text-sm md:text-base leading-relaxed mb-6">
                  "At Forest Lakes, we combine engineering precision with
                  aesthetic artistry. Our commitment is to create sustainable
                  aquatic environments that stand the test of time."
                </p>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-secondary-dark text-xs md:text-sm uppercase tracking-wider">
                    Rimi S Chowdhury
                  </span>
                  <span className="text-primary-dark font-semibold text-[10px] uppercase tracking-widest">
                    Managing Director
                  </span>
                </div>
              </div>
            </div>

            {/* COO Message */}
            <div className="relative p-6 md:p-8 rounded-3xl bg-primary-light/10 border border-primary-light/20 flex flex-col justify-between shadow-sm">
              <Quote className="absolute top-4 left-4 w-5 h-5 text-primary-dark/20" />
              <div className="text-center">
                <p className="text-secondary-dark italic text-sm md:text-base leading-relaxed mb-6">
                  "Operational excellence and safety are the pillars of our
                  success. We ensure that every project is executed with maximum
                  efficiency and zero compromise on quality."
                </p>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-secondary-dark text-xs md:text-sm uppercase tracking-wider">
                    Raktim Roy Chowdhury
                  </span>
                  <span className="text-primary-dark font-semibold text-[10px] uppercase tracking-widest">
                    Director & COO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MANAGEMENT PHILOSOPHY */}
      <Section className="py-10 md:py-16">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-4">
              Our Management Philosophy
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-xs md:text-base leading-relaxed">
              Our team combines industry experience with innovative thinking to
              deliver world-class aquatic and landscape solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {managementValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-50"
              >
                <div className="text-primary-dark mb-3">{value.icon}</div>
                <h3 className="text-sm md:text-lg font-semibold text-secondary-dark mb-1">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-[10px] md:text-sm leading-tight">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* LEADERSHIP TEAM */}
      <Section className="py-10 md:py-16 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-4">
              The Directors
            </h2>
            <div className="h-1 w-12 bg-primary-dark mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto px-4">
            {managementTeam.map((member, index) => {
              const nameArr = member.name.split(" ");
              const initials = `${nameArr[0][0]}${nameArr[nameArr.length - 1][0]}`;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group p-4 md:p-8 rounded-2xl hover:bg-slate-50 transition-all duration-300"
                >
                  <div className="mb-5 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary-light flex items-center justify-center border border-primary-dark/10 shadow-sm group-hover:bg-primary-dark transition-colors duration-500">
                    <span className="text-3xl md:text-4xl font-light text-primary-dark group-hover:text-white transition-colors">
                      {initials}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-secondary-dark/90 uppercase tracking-[0.2em] mb-1">
                    Board of Directors
                  </span>
                  <h3 className="text-lg md:text-2xl font-bold text-secondary-dark leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-slate-500 mt-1 mb-4 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <div className="pt-4 border-t border-slate-200 w-full max-w-62.5 space-y-1">
                    <p className="text-slate-500 text-[10px] md:text-xs font-medium">
                      Experience: {member.experience}
                    </p>
                    <p className="text-slate-600 text-[10px] md:text-xs leading-relaxed italic">
                      {member.expertise}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* APPROACH & COMMITMENT */}
      <Section className="py-10 md:py-16 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark">
                Approach to Excellence
              </h2>
              <div className="space-y-5">
                {[
                  {
                    t: "Strategic Planning",
                    d: "Comprehensive project strategies that align with client goals and budget constraints.",
                  },
                  {
                    t: "Quality Assurance",
                    d: "Rigorous quality control measures from initial design to final delivery.",
                  },
                  {
                    t: "Client-Centric Focus",
                    d: "Transparency throughout the project lifecycle to exceed expectations.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="text-base md:text-lg font-semibold text-secondary-dark mb-1">
                      {item.t}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-primary-light to-primary-dark rounded-xl p-8 text-secondary-dark">
              <h3 className="text-xl md:text-2xl font-bold mb-6 border-b border-white/10 pb-4 tracking-tight">
                Leadership Commitment
              </h3>
              <ul className="space-y-4">
                {[
                  "100% project delivery success rate",
                  "ISO certified quality management",
                  "24/7 project oversight and support",
                  "Continuous team development",
                  "Sustainable and eco-friendly practices",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs md:text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary-dark rounded-full mt-1.5 shrink-0" />
                    <span className="opacity-90">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
