import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { personalInfo, experiences, education, techStack, achievements } from "../data/siteData";
import { getYearsExperienceLabel } from "../utils/experience";

const FORMATS = {
  nigeria: {
    label: "🇳🇬 Nigeria",
    docTitle: "Curriculum Vitae",
    countryCode: null,
    sectionOrder: ["summary", "experience", "skills", "education", "achievements"],
    headings: { experience: "Experience" },
    skillsStyle: "chips",
    includeSecondarySchool: true,
    compact: false,
  },
  us: {
    label: "🇺🇸 United States",
    docTitle: "Resume",
    countryCode: "US",
    sectionOrder: ["summary", "skills", "experience", "education"],
    headings: { experience: "Experience" },
    skillsStyle: "plain",
    includeSecondarySchool: false,
    compact: true,
  },
  canada: {
    label: "🇨🇦 Canada",
    docTitle: "Resume",
    countryCode: "CA",
    sectionOrder: ["summary", "skills", "experience", "education", "achievements"],
    headings: { experience: "Work Experience" },
    skillsStyle: "plain",
    includeSecondarySchool: false,
    compact: false,
  },
};

const CVPage = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState("nigeria");
  const format = FORMATS[country];

  // US and Canada CVs pick up your current city and state/province automatically
  // (IP-based lookup). If you are not in that country, the default location is used.
  const [detected, setDetected] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.city && data.region_code && data.country_code) {
          setDetected({ city: data.city, region: data.region_code, country: data.country_code });
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  const location =
    format.countryCode && detected && detected.country === format.countryCode
      ? `${detected.city}, ${detected.region}`
      : personalInfo.location;

  const summaryText = useMemo(
    () =>
      `Full-Stack Engineer with ${getYearsExperienceLabel()} years building production systems. Currently at Obai (U.S.-based), having delivered 20+ features for 50+ daily active appraisers while reducing UI bugs by 90%. Built and launched a 250-user estate sales platform at Kept House with 92/100 PageSpeed and OWASP-compliant security. 2nd Place at Wema Bank Hackaholics 6.0 (100+ teams).`,
    []
  );

  const sections = {
    summary: (
      <div className="mb-5" key="summary">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">Summary</h2>
        <hr className="border-[#b45309] mb-3" />
        <p className="text-neutral-700">{summaryText}</p>
      </div>
    ),
    experience: (
      <div className="mb-5" key="experience">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">{format.headings.experience}</h2>
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
    ),
    skills: (
      <div className="mb-5" key="skills">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">Skills</h2>
        <hr className="border-[#b45309] mb-3" />
        {format.skillsStyle === "chips" ? (
          <div className="flex flex-wrap gap-1.5">
            {techStack.flatMap((cat) => cat.skills).map((skill, i) => (
              <span key={i} className="px-2 py-0.5 border border-[#b45309] rounded text-[11px] text-neutral-700">
                {skill.name}
              </span>
            ))}
          </div>
        ) : (
          <div className="space-y-0.5">
            {techStack.map((cat, i) => (
              <p key={i} className="text-neutral-700">
                <span className="font-semibold text-neutral-900">{cat.category}:</span>{" "}
                {cat.skills.map((skill) => skill.name).join(", ")}
              </p>
            ))}
          </div>
        )}
      </div>
    ),
    education: (
      <div className="mb-5" key="education">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">Education</h2>
        <hr className="border-[#b45309] mb-3" />
        <div className="space-y-3">
          {education.filter((edu) => format.includeSecondarySchool || !/School/.test(edu.institution)).map((edu, i) => (
            <div key={i} className="flex justify-between items-start">
              <div>
                <p className="font-bold text-neutral-900">{edu.institution}</p>
                <p className="text-neutral-600">{edu.degree}{edu.grade && ` (Grade: ${edu.grade})`}</p>
              </div>
              <span className="text-neutral-500 text-xs whitespace-nowrap ml-4">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    achievements: (
      <div key="achievements">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#b45309] mb-2">Achievements</h2>
        <hr className="border-[#b45309] mb-3" />
        {achievements.map((ach, i) => (
          <p key={i} className="text-neutral-700">
            <span className="font-bold text-neutral-900">{ach.title}</span> - {ach.description}
          </p>
        ))}
      </div>
    ),
  };

  return (
    <>
      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .print-page { box-shadow: none !important; margin: 0 !important; padding: 24px !important; max-width: 100% !important; }
          a { color: inherit !important; text-decoration: none !important; }
          @page { margin: 0.6in; }
          .cv-compact { font-size: 11px !important; line-height: 1.35 !important; }
          .cv-compact .mb-5 { margin-bottom: 0.6rem !important; }
          .cv-compact .space-y-5 > * + * { margin-top: 0.6rem !important; }
        }
      `}</style>

      {/* Actions bar - hidden when printing */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 max-w-[780px] mx-auto px-4 pt-6 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-amber-500 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="flex items-center gap-3">
          <label htmlFor="cv-format" className="sr-only">CV format</label>
          <select
            id="cv-format"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-neutral-900 text-neutral-200 text-sm font-medium rounded-lg px-3 py-2.5 border border-neutral-700 focus:outline-none focus:border-amber-500 cursor-pointer"
          >
            {Object.entries(FORMATS).map(([key, f]) => (
              <option key={key} value={key}>{f.label}</option>
            ))}
          </select>

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
      </div>

      {/* CV Document */}
      <div className={`print-page max-w-[780px] mx-auto my-6 bg-white text-neutral-900 p-10 shadow-xl font-sans leading-relaxed ${format.compact ? "text-[12px] cv-compact" : "text-[13px]"}`}>

        {/* Header */}
        <div className="mb-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">{format.docTitle}</p>
          <h1 className="text-3xl font-bold text-neutral-900">{personalInfo.name}</h1>
          <p className="text-[#b45309] font-semibold mt-0.5 text-base">
            Full-Stack Engineer | React, Node.js, TypeScript | Building Scalable Web Platforms
          </p>

          {/* Contact */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-neutral-600 text-xs">
            <span>{location}</span>
            <span>{personalInfo.phone}</span>
            <a href={`mailto:${personalInfo.email}`} className="text-[#b45309]">{personalInfo.email}</a>
            <a href={personalInfo.github} className="text-[#b45309]">github.com/DevTaiwo18</a>
            <a href={personalInfo.linkedin} className="text-[#b45309]">LinkedIn</a>
            <a href="https://adeyemi-portfolio.vercel.app/" className="text-[#b45309]">Portfolio</a>
          </div>
        </div>

        <hr className="border-[#b45309] mb-5" />

        {format.sectionOrder.map((key) => sections[key])}

      </div>
    </>
  );
};

export default CVPage;
