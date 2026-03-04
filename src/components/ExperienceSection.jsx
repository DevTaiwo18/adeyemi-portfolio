import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experiences, education, achievements } from "../data/siteData";

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      className="bg-neutral-900/50 py-20 md:py-28"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-medium mb-2 tracking-wide">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50">
            Where I've worked
          </h2>
        </div>

        {/* Work Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-neutral-800" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="flex items-start relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="hidden md:block absolute left-8 transform -translate-x-1/2 mt-6">
                  <div className="w-4 h-4 bg-neutral-950 border-2 border-amber-500 rounded-full" />
                </div>

                <div className="ml-0 md:ml-16 w-full bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-xl font-bold text-neutral-50 group-hover:text-amber-500 transition-colors">
                      {exp.company}
                    </h3>
                    <span className="text-neutral-500 text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-amber-500 font-medium">{exp.role}</p>
                  {exp.type && (
                    <p className="text-neutral-500 text-sm mb-3">{exp.type}</p>
                  )}
                  <p className="text-neutral-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  {exp.highlights && (
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-neutral-400 text-sm"
                        >
                          <span className="text-amber-500 mt-1 shrink-0">
                            &#8250;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 bg-neutral-800 text-neutral-400 text-xs font-medium rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="mt-16">
            <h3 className="text-neutral-50 font-semibold text-xl mb-6 text-center">
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  className="bg-neutral-900 border border-amber-500/20 rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="text-amber-500 text-2xl">&#127942;</span>
                    <h4 className="text-lg font-bold text-amber-500">
                      {ach.title}
                    </h4>
                  </div>
                  <p className="text-neutral-400">{ach.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-neutral-50 font-semibold text-xl mb-6 text-center">
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h4 className="text-lg font-bold text-neutral-50">
                    {edu.institution}
                  </h4>
                  <span className="text-neutral-500 text-sm">{edu.period}</span>
                </div>
                <p className="text-amber-500 font-medium text-sm mb-1">
                  {edu.degree}
                </p>
                {edu.grade && (
                  <p className="text-neutral-500 text-sm mb-3">
                    Grade: {edu.grade}
                  </p>
                )}
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
