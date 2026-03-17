import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Layout Components
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import CommonHeader from "../../components/Header";
import PortfolioModal from "../../components/modals/PortfolioModal";

// Data & Assets
import { portfolioData } from "../../data/portfolioData";
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

  // OPTIMIZATION: Memoize filtered items to prevent heavy re-calculation on 80+ items
  const filteredItems = useMemo(() => {
    return portfolioData.filter((item) => {
      if (activeCategory === "all") return true;
      if (activeCategory === "video") return item.type === "video";
      return item.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <CommonHeader
        title="Our Portfolio"
        subtitle="Explore our completed projects including Swimming Pools, Water Parks, Fountains, Landscapes, and Theme Parks—crafted with expert engineering."
        category="Our Work"
        image={header3}
      />

      <Section className="py-10 md:py-16">
        <Container>
          {/* CATEGORY FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mb-8 md:mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer border
                ${
                  activeCategory === cat.value
                    ? "bg-secondary-dark text-white border-secondary-dark shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-primary-dark hover:text-primary-dark"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* PORTFOLIO GRID */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.src} // Using src as key for reliable animation tracking
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  onClick={() => setCurrentIndex(index)}
                  className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-4/3 md:aspect-video"
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`${item.category} project`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-slate-200">
                      {/* Using metadata preload to save data while showing a preview */}
                      <video
                        src={item.src}
                        preload="metadata"
                        muted
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all duration-300">
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40 group-hover:scale-110 transition-transform">
                          <PlayCircle size={40} className="text-white fill-white/20" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                         <span className="bg-primary-dark/90 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md uppercase font-bold tracking-widest shadow-lg">
                           Video
                         </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Subtle Sober Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                     <p className="text-white text-xs md:text-sm font-medium capitalize">
                       {item.category.replace("-", " ")}
                     </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 font-medium">No items found in this category.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* LIGHTBOX MODAL */}
      <PortfolioModal
        items={filteredItems}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        onClose={() => setCurrentIndex(null)}
      />
    </div>
  );
}