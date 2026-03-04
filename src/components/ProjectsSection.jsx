import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { projects, personalInfo } from "../data/siteData";

const ProjectsSection = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/400x225?text=Project";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-50 mb-2 group-hover:text-amber-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-neutral-800 text-neutral-400 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-neutral-500 text-xs">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-500 text-neutral-950 text-sm font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-neutral-700 text-neutral-300 text-sm font-medium rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                  >
                    Code
                  </a>
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
