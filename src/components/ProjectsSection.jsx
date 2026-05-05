import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { projects, personalInfo } from "../data/siteData";

const featured = projects.slice(0, 2);
const rest = projects.slice(2);

const FeaturedCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all duration-300"
    >
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2 relative h-56 md:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/50 hidden md:block" />
        </div>

        <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-50 mb-3 group-hover:text-amber-500 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-neutral-400 leading-relaxed mb-4">{project.description}</p>

          {project.caseStudy && (
            <div className="mb-5">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 text-amber-500 text-xs font-medium tracking-wider uppercase mb-2 hover:text-amber-400 transition-colors"
              >
                Technical Decisions
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open && (
                <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg p-4">
                  <p className="text-neutral-300 text-sm leading-relaxed">{project.caseStudy}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 bg-neutral-800 text-neutral-400 text-xs font-medium rounded-md">
                {tag}
              </span>
            ))}
          </div>

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
  );
};

const CompactCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-neutral-50 mb-2 group-hover:text-amber-500 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-3 flex-1">{project.description}</p>

        {project.caseStudy && (
          <div className="mb-3">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 text-amber-500 text-xs font-medium tracking-wider uppercase hover:text-amber-400 transition-colors"
            >
              Technical Decisions
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open && (
              <div className="mt-2 bg-neutral-800/50 border border-neutral-700/50 rounded-lg p-3">
                <p className="text-neutral-300 text-xs leading-relaxed">{project.caseStudy}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span key={i} className="px-2 py-0.5 bg-neutral-800 text-neutral-400 text-xs font-medium rounded-md">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 bg-neutral-800 text-neutral-500 text-xs rounded-md">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-500 text-neutral-950 text-xs font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-neutral-700 text-neutral-300 text-xs font-medium rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="bg-neutral-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-medium mb-2 tracking-wide">Projects</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50">
            Things I've built
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-neutral-800" />
          <span className="text-neutral-500 text-sm font-medium whitespace-nowrap">More Projects</span>
          <div className="flex-1 h-px bg-neutral-800" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((project, i) => (
            <CompactCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-amber-500 transition-colors duration-300 font-medium"
          >
            View more on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
