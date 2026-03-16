import { useState } from "react";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { portfolioData } from "../../data/portfolioData";
import PortfolioModal from "../../components/modals/PortfolioModal";
import { PlayCircle } from "lucide-react";
import CommonHeader from "../../components/Header";
import header3 from "../../../public/header3.webp";

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
      <CommonHeader
        title="Our Portfolio"
        subtitle="Explore our completed projects including Swimming Pools, Water Parks, Fountains, Landscapes, Resort Developments, Rain Dance installations, Kids Play Areas, and Theme Parks."
        category="Our Work"
        image={header3}
      />

      {/* FILTER + PORTFOLIO */}
      <Section className="py-10 md:py-16">
        <Container>
          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition cursor-pointer
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
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group bg-white rounded-lg overflow-hidden shadow-md md:shadow-lg hover:shadow-xl transition cursor-pointer"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt="portfolio work"
                    className="w-full h-36 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="relative">
                    <video
                      src={item.src}
                      className="w-full h-36 md:h-56 lg:h-64 object-cover"
                    />

                    <PlayCircle
                      size={36}
                      className="absolute text-white top-2 right-2 md:top-3 md:right-3"
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
