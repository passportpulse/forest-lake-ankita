import { Link } from "react-router-dom";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function FinalCTA() {
  return (
    <Section className="py-16">
      <Container>

        <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Ready to Build Your Dream Water Project?
          </h2>

          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us today to start planning your swimming pool,
            water park, or resort project.
          </p>

          <Link
            to="/quote"
            className="bg-primary-dark text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Get Free Quote
          </Link>

        </div>

      </Container>
    </Section>
  );
}
