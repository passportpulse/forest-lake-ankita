import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function OurProcess() {
  const steps = [
    {
      title: "Consultation",
      desc: "Understanding your requirements and project goals.",
    },
    {
      title: "Design & Planning",
      desc: "Creating layouts and engineering plans.",
    },
    {
      title: "Construction",
      desc: "Executing the project with expert craftsmanship.",
    },
    {
      title: "Delivery",
      desc: "Final inspection and handover of the project.",
    },
  ];

  return (
    <Section className="py-12 md:py-24 bg-white overflow-hidden">
      <Container>
        {/* Centered Heading Style */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20 px-4">
          <span className="text-primary-dark font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-3">
            How We Work
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Process
          </h2>
          <div className="w-16 h-1 bg-primary-dark rounded-full mb-6" />
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A structured workflow to ensure quality, safety, and efficiency 
            in every luxury swimming pool and commercial installation.
          </p>
        </div>

        {/* Compact Grid: 2 columns mobile, 4 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Step Number with subtle hover effect */}
              <div className="relative mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary-dark text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-primary-dark transition-colors duration-300">
                  {i + 1}
                </div>
                {/* Visual Connector for Desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[120%] w-[80%] h-px bg-slate-200 -z-10" />
                )}
              </div>

              <h3 className="text-base md:text-xl font-bold text-secondary-dark mb-2">
                {step.title}
              </h3>
              
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed px-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}