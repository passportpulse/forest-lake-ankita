import { useState } from "react";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { portfolioData } from "../../data/portfolioData";
import PortfolioModal from "../../components/modals/PortfolioModal";
import { PlayCircle } from "lucide-react";

const categories = [
  { label: "All", value: "all" },
  { label: "Swimming Pools", value: "pool" },
  { label: "Water Parks", value: "water-park" },
  { label: "Fountains", value: "fountain" },
  { label: "Landscape", value: "landscape" },
  { label: "Resort Projects", value: "resort" },
  { label: "Rain Dance", value: "rain-dance" },
  { label: "Kids Play Area", value: "play-area" },
  { label: "Theme Parks", value: "theme-park" },
  { label: "Construction", value: "construction" },
  { label: "Videos", value: "video" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(null);

  const filteredItems = portfolioData.filter((item) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "video") return item.type === "video";
    return item.category === activeCategory;
  });

  return (
    <div className="bg-slate-50">
      
      {/* HERO */}
      <Section className="bg-secondary-dark text-center">
        <Container>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary-light mb-6">
            Our Portfolio
          </h1>

          <p className="text-primary-light/70 max-w-2xl mx-auto">
            Explore our work in swimming pools, landscapes, construction,
            resorts, and water feature projects. We take pride in creating
            beautiful and sustainable environments.
          </p>
        </Container>
      </Section>

      {/* FILTER BUTTONS */}
      <Section>
        <Container>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer
                ${
                  activeCategory === cat.value
                    ? "bg-primary-dark text-white"
                    : "bg-white text-secondary-dark border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* PORTFOLIO GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt="portfolio work"
                    className="w-full h-64 object-cover hover:scale-105 transition"
                  />
                ) : (
                  <div className="relative">
                    <video
                      src={item.src}
                      className="w-full h-64 object-cover"
                    />

                    <PlayCircle
                      size={40}
                      className="absolute text-white top-3 right-3"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* MODAL */}
      <PortfolioModal
        items={filteredItems}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        onClose={() => setCurrentIndex(null)}
      />

    </div>
  );
}
