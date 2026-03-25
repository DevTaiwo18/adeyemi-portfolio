import { personalInfo, experiences, education, techStack, achievements } from "../data/siteData";

const ResumePrint = () => {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f3f4f6; }
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          @page { margin: 0.55in; size: A4; }
        }
      `}</style>

      {/* Print button */}
      <div className="no-print flex justify-center py-6 bg-neutral-950">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-neutral-950 font-semibold text-sm rounded-lg hover:bg-amber-400 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Save as PDF — then replace public/Adeyemi_Taiwo_Resume.pdf
        </button>
      </div>

      {/* Resume document */}
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto 40px",
          background: "white",
          padding: "36px 44px",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "12px",
          lineHeight: "1.5",
          color: "#1a1a1a",
        }}
      >
        {/* Name & title */}
        <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "2px" }}>{personalInfo.name}</h1>
        <p style={{ fontSize: "13px", color: "#92400e", fontWeight: "600", marginBottom: "6px" }}>
          Full-Stack Engineer | React, Node.js, TypeScript | Building Scalable Web Platforms
        </p>

        {/* Contact row */}
        <p style={{ fontSize: "11px", color: "#555", marginBottom: "14px" }}>
          {personalInfo.location}&nbsp;&nbsp;
          {personalInfo.phone}&nbsp;&nbsp;
          <a href={`mailto:${personalInfo.email}`} style={{ color: "#92400e" }}>{personalInfo.email}</a>&nbsp;&nbsp;
          <a href={personalInfo.github} style={{ color: "#92400e" }}>github.com/DevTaiwo18</a>&nbsp;&nbsp;
          <a href={personalInfo.linkedin} style={{ color: "#92400e" }}>LinkedIn</a>&nbsp;&nbsp;
          <a href="https://adeyemi-portfolio.vercel.app/" style={{ color: "#92400e" }}>Portfolio</a>
        </p>

        <hr style={{ borderColor: "#92400e", marginBottom: "12px" }} />

        {/* Summary */}
        <Section title="Summary">
          <p>
            Full-Stack Engineer with 2+ years of experience building scalable, production-ready web applications. Currently
            at Obai (U.S.-based), leading frontend development and collaborating on backend systems. Strong focus on
            performance, real-time systems, and fintech platforms. 2nd Place at Wema Bank Hackaholics 6.0 (100+ teams).
          </p>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          {experiences.map((exp, i) => (
            <div key={i} style={{ marginBottom: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <span style={{ fontWeight: "bold" }}>{exp.role}</span>
                  <span style={{ color: "#555" }}> - </span>
                  <span style={{ color: "#92400e", fontWeight: "600" }}>{exp.company}</span>
                </div>
                <span style={{ color: "#777", fontSize: "11px", whiteSpace: "nowrap", marginLeft: "12px" }}>{exp.period}</span>
              </div>
              <p style={{ color: "#666", fontSize: "11px", marginBottom: "4px" }}>{exp.type.replace(" · ", ", ")}</p>
              <ul style={{ paddingLeft: "16px", marginBottom: "4px" }}>
                {exp.highlights.map((h, j) => (
                  <li key={j} style={{ marginBottom: "1px" }}>{h}</li>
                ))}
              </ul>
              <p style={{ color: "#444" }}><strong>Tech:</strong> {exp.technologies.join(", ")}</p>
            </div>
          ))}
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {techStack.flatMap(cat => cat.skills).map((skill, i) => (
              <span
                key={i}
                style={{
                  border: "1px solid #b45309",
                  borderRadius: "3px",
                  padding: "1px 6px",
                  fontSize: "11px",
                  color: "#444",
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          {education.map((edu, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <div>
                <p style={{ fontWeight: "bold" }}>{edu.institution}</p>
                <p style={{ color: "#555" }}>{edu.degree} (Grade: {edu.grade})</p>
              </div>
              <span style={{ color: "#777", fontSize: "11px", whiteSpace: "nowrap", marginLeft: "12px" }}>{edu.period}</span>
            </div>
          ))}
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          {achievements.map((ach, i) => (
            <p key={i}>
              <strong>{ach.title}</strong> - {ach.description}
            </p>
          ))}
        </Section>
      </div>
    </>
  );
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "14px" }}>
    <h2 style={{ fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", color: "#92400e", marginBottom: "4px" }}>
      {title}
    </h2>
    <hr style={{ borderColor: "#92400e", marginBottom: "8px" }} />
    {children}
  </div>
);

export default ResumePrint;
