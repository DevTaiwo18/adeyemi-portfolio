import { personalInfo, experiences, education, techStack, achievements } from "../data/siteData";

const CVPage = () => {
  return (
    <>
      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .print-page { box-shadow: none !important; margin: 0 !important; padding: 24px !important; max-width: 100% !important; }
          a { color: inherit !important; text-decoration: none !important; }
          @page { margin: 0.6in; }
        }
      `}</style>

      {/* Print button - hidden when printing */}
      <div className="no-print flex justify-center pt-6 pb-2">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-neutral-950 font-semibold text-sm rounded-lg hover:bg-amber-400 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Save as PDF
        </button>
      </div>

      {/* CV Document */}
      <div className="print-page max-w-[780px] mx-auto my-6 bg-white text-neutral-900 p-10 shadow-xl font-sans text-[13px] leading-relaxed">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-neutral-900">{personalInfo.name}</h1>
          <p className="text-[#b45309] font-semibold mt-0.5 text-base">
            Full-Stack Engineer | React, Node.js, TypeScript | Building Scalable Web Platforms
          </p>

          {/* Contact */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-neutral-600 text-xs">
            <span>{personalInfo.location}</span>
            <span>{personalInfo.phone}</span>
            <a href={`mailto:${personalInfo.email}`} className="text-[#b45309]">{personalInfo.email}</a>
            <a href={personalInfo.github} className="text-[#b45309]">github.com/DevTaiwo18</a>
            <a href={personalInfo.linkedin} className="text-[#b45309]">LinkedIn</a>
            <a href="https://adeyemi-portfolio.vercel.app/" className="text-[#b45309]">Portfolio</a>
          </div>
        </div>

        <hr className="border-[#b45309] mb-5" />

        {/* Summary */}
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">Summary</h2>
          <hr className="border-[#b45309] mb-3" />
          <p className="text-neutral-700">
            Full-Stack Engineer with 2+ years of experience building scalable, production-ready web applications. Currently
            at Obai (U.S.-based), leading frontend development and collaborating on backend systems. Strong focus on
            performance, real-time systems, and fintech platforms. 2nd Place at Wema Bank Hackaholics 6.0 (100+ teams).
          </p>
        </div>

        {/* Experience */}
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">Experience</h2>
          <hr className="border-[#b45309] mb-3" />
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-bold text-neutral-900">{exp.role}</span>
                    <span className="text-neutral-500"> - </span>
                    <span className="text-[#b45309] font-semibold">{exp.company}</span>
                  </div>
                  <span className="text-neutral-500 text-xs whitespace-nowrap ml-4">{exp.period}</span>
                </div>
                <p className="text-neutral-500 text-xs mb-1">{exp.type.replace(" · ", ", ")}</p>
                <ul className="list-disc list-inside space-y-0.5 text-neutral-700 mb-1.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <p className="text-neutral-600"><span className="font-semibold">Tech:</span> {exp.technologies.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">Skills</h2>
          <hr className="border-[#b45309] mb-3" />
          <div className="flex flex-wrap gap-1.5">
            {techStack.flatMap(cat => cat.skills).map((skill, i) => (
              <span key={i} className="px-2 py-0.5 border border-[#b45309] rounded text-[11px] text-neutral-700">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">Education</h2>
          <hr className="border-[#b45309] mb-3" />
          <div className="space-y-3">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-neutral-900">{edu.institution}</p>
                  <p className="text-neutral-600">{edu.degree} (Grade: {edu.grade})</p>
                </div>
                <span className="text-neutral-500 text-xs whitespace-nowrap ml-4">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">Achievements</h2>
          <hr className="border-[#b45309] mb-3" />
          {achievements.map((ach, i) => (
            <p key={i} className="text-neutral-700">
              <span className="font-bold text-neutral-900">{ach.title}</span> - {ach.description}
            </p>
          ))}
        </div>

      </div>
    </>
  );
};

export default CVPage;
