import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TechStackSection";
import ExperienceSection from "../components/ExperienceSection";

const AboutPage = () => {
  return (
    <div className="bg-neutral-950">
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
    </div>
  );
};

export default AboutPage;
