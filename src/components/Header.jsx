import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Black Simple Personal Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-amber-500 font-medium px-4 py-2 text-sm"
      : "text-neutral-400 hover:text-amber-500 px-4 py-2 text-sm font-medium transition-colors duration-300";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "block text-amber-500 font-medium py-3 text-sm"
      : "block text-neutral-400 hover:text-amber-500 py-3 text-sm font-medium transition-colors";

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-md shadow-lg shadow-neutral-900/50 py-3"
          : "bg-neutral-950/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center group">
          <img
            src={Logo}
            alt="Logo"
            className="h-9 w-auto mr-3 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-bold text-neutral-50 tracking-tight">
            Adeyemi <span className="text-amber-500">Taiwo</span>
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/cv" className={linkClass}>
            CV
          </NavLink>
          <a
            href="/Adeyemi_Taiwo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-5 py-2 bg-amber-500 text-neutral-950 text-sm font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-neutral-400 hover:text-amber-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800">
          <div className="px-6 py-4 space-y-1">
            <NavLink to="/" end className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/portfolio" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/cv" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
              CV
            </NavLink>
            <a
              href="/Adeyemi_Taiwo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-amber-500 font-medium py-3 text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
