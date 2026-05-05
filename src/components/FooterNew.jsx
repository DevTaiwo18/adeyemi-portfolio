import { Link } from "react-router-dom";
import { personalInfo } from "../data/siteData";

const FooterNew = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="text-neutral-50 font-bold text-lg mb-1">{personalInfo.name}</p>
            <p className="text-amber-500 text-sm font-medium mb-3">Full-Stack Engineer</p>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Building production-ready systems with real users.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-4">Navigation</p>
            <div className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "CV", to: "/cv" },
              ].map(({ label, to }) => (
                <Link key={to} to={to} className="block text-neutral-500 hover:text-amber-500 transition-colors text-sm">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-4">Get In Touch</p>
            <p className="text-neutral-500 text-sm mb-4">Open to new opportunities and collaborations.</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-neutral-950 text-sm font-semibold rounded-lg hover:bg-amber-400 transition-colors duration-300"
            >
              Email Me
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-amber-500 transition-colors text-sm">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-amber-500 transition-colors text-sm">GitHub</a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-amber-500 transition-colors text-sm">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
