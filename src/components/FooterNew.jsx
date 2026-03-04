import { personalInfo } from "../data/siteData";

const FooterNew = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-amber-500 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-amber-500 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-amber-500 transition-colors text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
