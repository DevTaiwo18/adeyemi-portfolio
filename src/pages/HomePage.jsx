import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TechStackSection";
import ContactNew from "../components/ContactNew";

const HomePage = () => {
  return (
    <div className="bg-neutral-950 -mt-24 md:-mt-28">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ContactNew />
    </div>
  );
};

export default HomePage;
