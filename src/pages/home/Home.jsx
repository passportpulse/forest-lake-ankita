import HeroSection from "./sections/HeroSection";
import ServicesHighlights from "./sections//ServicesHighlights";
import WhyChooseUs from "./sections//WhyChooseUs";
import FeaturedProjects from "./sections//FeaturedProjects";
import OurProcess from "./sections//OurProcess";
import FinalCTA from "./sections//FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesHighlights />
      <WhyChooseUs />
      <FeaturedProjects />
      <OurProcess />
      <FinalCTA />
    </>
  );
}
