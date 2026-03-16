import HeroSection from "./sections/HeroSection";
import ServicesHighlights from "./sections/ServicesHighlights";
import WhyChooseUs from "./sections/WhyChooseUs";
import FeaturedProjects from "./sections/FeaturedProjects";
import SpecializedPools from "./sections/SpecializedPools";
import OurProcess from "./sections/OurProcess";
import FAQ from "./sections/FAQ";
import Testimonials from "./sections/Testimonials";
import FinalCTA from "./sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesHighlights />
      <WhyChooseUs />
      <FeaturedProjects />
      <SpecializedPools /> 
      <OurProcess />
      <FAQ />
      <Testimonials />
      <FinalCTA />
    </>
  );
}