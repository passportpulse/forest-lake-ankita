import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section from "../../../components/layout/Section";
import Container from "../../../components/layout/Container";

export default function FeaturedProjects() {
  const projects = [
    "https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/18/15/07/swimming-pool-1835227_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/09/32/swimming-pool-1869797_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/27/14/56/water-2178579_1280.jpg",
  ];

  return (
    <Section className="py-16 bg-slate-50">
      <Container>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            Featured Projects
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Explore some of our recent swimming pool and water park projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {projects.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl group"
            >
              <img
                src={img}
                className="h-[230px] w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/portfolio"
            className="flex items-center gap-2 bg-primary-dark text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

      </Container>
    </Section>
  );
}
