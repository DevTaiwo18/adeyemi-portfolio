import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { techStack } from "../data/siteData";

const TechStackSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.03 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <SectionWrapper id="tech-stack" className="bg-neutral-900/50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-medium mb-2 tracking-wide">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50">
            Technologies I work with
          </h2>
        </div>

        <div className="space-y-8">
          {techStack.map((group) => (
            <div key={group.category}>
              <h3 className="text-neutral-400 text-sm font-semibold uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/40 transition-all duration-300 cursor-default"
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="text-neutral-300 text-sm font-medium hover:text-neutral-50 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechStackSection;
