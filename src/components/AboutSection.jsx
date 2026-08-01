import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { aboutData } from "../data/siteData";
import { getYearsExperienceLabel } from "../utils/experience";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-neutral-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <p className="text-amber-500 font-medium mb-2 tracking-wide">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50 mb-6">
              Turning ideas into{" "}
              <span className="text-amber-500">reliable systems</span>
            </h2>

            <div className="space-y-4">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i} className="text-neutral-400 text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              <p className="text-neutral-400 text-lg leading-relaxed">
                I care about writing code that works in production, not just in development. That means performance, security, and real user impact, not just features that look good in demos.
              </p>
            </div>
          </div>

          {/* Right — stats */}
          <div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { value: getYearsExperienceLabel(), label: "Years Experience" },
                  { value: "2", label: "US Remote Roles" },
                  { value: "Top 2", label: "Wema Bank Hackathon" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="text-center p-4 bg-neutral-800/50 rounded-xl"
                  >
                    <p className="text-3xl font-bold text-amber-500">{stat.value}</p>
                    <p className="text-neutral-500 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
