import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { projects, personalInfo } from "../data/siteData";

const ProjectsSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionWrapper id="projects" className="bg-neutral-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-medium mb-2 tracking-wide">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50">
            Things I've built
          </h2>
        </div>

        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative h-56 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/50 hidden md:block" />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-50 mb-3 group-hover:text-amber-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Case Study - always visible */}
                  {project.caseStudy && (
                    <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg p-5 mb-5">
                      <p className="text-amber-500 text-xs font-medium tracking-wider uppercase mb-2">
                        Technical Decisions
                      </p>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {project.caseStudy}
                      </p>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-neutral-800 text-neutral-400 text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-amber-500 text-neutral-950 text-sm font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-neutral-700 text-neutral-300 text-sm font-medium rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more */}
        <div className="text-center mt-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-amber-500 transition-colors duration-300 font-medium"
          >
            View more on GitHub
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
