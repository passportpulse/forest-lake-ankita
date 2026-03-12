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
    <Section className="py-16 bg-white">
      <Container>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Our Process
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            A structured workflow to ensure quality and efficiency in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          {steps.map((step, i) => (
            <div key={i}>

              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-dark text-black flex items-center justify-center font-bold">
                {i + 1}
              </div>

              <h3 className="font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </Section>
  );
}
