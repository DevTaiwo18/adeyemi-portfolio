import { personalInfo, experiences, education, techStack, achievements } from "../data/siteData";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <div className="flex items-center gap-3 mb-5">
      <h2 className="text-base font-semibold uppercase tracking-widest text-amber-500">{title}</h2>
      <div className="flex-1 h-px bg-neutral-800" />
    </div>
    {children}
  </section>
);

const CVPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-neutral-50">{personalInfo.name}</h1>
          <p className="text-amber-500 font-medium mt-1 text-lg">{personalInfo.role}</p>
          <p className="text-neutral-400 mt-3 text-sm leading-relaxed max-w-2xl">
            Building scalable web platforms and real-time systems across the full stack — from responsive frontends with React and Next.js to robust backend services with Node.js and PostgreSQL.
          </p>

          {/* Contact row */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-neutral-400">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-amber-500 transition-colors">
              {personalInfo.email}
            </a>
            <span>{personalInfo.phone}</span>
            <span>{personalInfo.location}</span>
          </div>

          {/* Profile links */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://adeyemi-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-neutral-300 hover:border-amber-500 hover:text-amber-500 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Portfolio
            </a>
          </div>

          {/* Download CTA */}
          <div className="mt-5">
            <a
              href="/Adeyemi_Taiwo_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-neutral-950 font-semibold text-sm rounded-lg hover:bg-amber-400 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF Resume
            </a>
          </div>
        </div>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-neutral-100">{exp.role}</h3>
                    <p className="text-amber-500 text-sm">{exp.company} · <span className="text-neutral-400">{exp.type}</span></p>
                  </div>
                  <span className="text-xs text-neutral-500 whitespace-nowrap mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-neutral-400 text-sm mb-2">{exp.description}</p>
                <ul className="space-y-1 mb-3">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-neutral-300 flex gap-2">
                      <span className="text-amber-500 mt-0.5 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, j) => (
                    <span key={j} className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-xs text-neutral-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <div>
                    <h3 className="font-semibold text-neutral-100">{edu.institution}</h3>
                    <p className="text-amber-500 text-sm">{edu.degree} · <span className="text-neutral-400">Grade: {edu.grade}</span></p>
                  </div>
                  <span className="text-xs text-neutral-500 whitespace-nowrap mt-1 sm:mt-0">{edu.period}</span>
                </div>
                <p className="text-neutral-400 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="space-y-3">
            {techStack.map((cat, i) => (
              <div key={i} className="flex flex-wrap gap-x-4 gap-y-1 items-baseline">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 w-20 shrink-0">{cat.category}</span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-xs text-neutral-300">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          <div className="space-y-3">
            {achievements.map((ach, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-500 mt-0.5 shrink-0">▸</span>
                <div>
                  <p className="font-semibold text-neutral-100 text-sm">{ach.title}</p>
                  <p className="text-neutral-400 text-sm">{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
};

export default CVPage;
