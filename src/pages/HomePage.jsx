import HeroSection from "../components/HeroSection";
import ContactNew from "../components/ContactNew";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getYearsExperienceLabel } from "../utils/experience";

const StatsStrip = () => (
  <section className="bg-neutral-900/50 border-y border-neutral-800 py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
        {[
          { value: getYearsExperienceLabel(), label: "Years Experience" },
          { value: "2", label: "US Remote Roles" },
          { value: "Top 2", label: "Wema Bank Hackathon" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-neutral-800/50 rounded-xl p-4"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-500">{stat.value}</p>
            <p className="text-neutral-500 text-xs sm:text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AboutTeaser = () => (
  <section className="bg-neutral-950 py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-2xl">
        <p className="text-amber-500 font-medium mb-2 tracking-wide">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 mb-6">
          Full-stack engineer building{" "}
          <span className="text-amber-500">things people actually use</span>
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed mb-8">
          I work across the full stack, React and Next.js on the frontend, Node.js and PostgreSQL on the backend, shipping production systems with real users. Currently building at Obai (U.S.-based) and Kept House Estate Sales.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-amber-500 font-medium hover:text-amber-400 transition-colors"
        >
          More about me
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <div className="bg-neutral-950 -mt-24 md:-mt-28">
      <HeroSection />
      <StatsStrip />
      <AboutTeaser />
      <ContactNew />
    </div>
  );
};

export default HomePage;
