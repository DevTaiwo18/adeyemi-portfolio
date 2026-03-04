import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/siteData";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import Profile1 from "../assets/Profile one.jpg";
import Profile2 from "../assets/Profile two.jpg";
import Profile3 from "../assets/Profile three.jpg";
import Profile4 from "../assets/Profile four.jpg";
import Profile5 from "../assets/Profile five.jpg";
import Profile6 from "../assets/Profile six.jpg";
import Profile7 from "../assets/Profile seven.jpg";
import Profile8 from "../assets/Profile eight.jpg";

const profileImages = [Profile3, Profile1, Profile7, Profile5, Profile2, Profile4, Profile6, Profile8];

const roles = [
  "Full-Stack Engineer",
  "Backend Developer",
  "React Developer",
  "Systems Builder",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentRole.substring(0, text.length - 1)
              : currentRole.substring(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  // Image cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % profileImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-neutral-950">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-amber-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="text-amber-500 font-medium text-lg mb-4 tracking-wide"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-50 mb-4 tracking-tight"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div variants={item} className="mb-5">
              <span className="text-xl md:text-2xl lg:text-3xl text-neutral-400 font-light">
                {text}
              </span>
              <span className="text-amber-500 animate-pulse text-xl md:text-2xl lg:text-3xl">
                |
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="text-neutral-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/portfolio"
                className="px-8 py-3 bg-amber-500 text-neutral-950 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
              >
                View Projects
              </Link>
              <a
                href="mailto:adeyemitaiwo24434@gmail.com"
                className="px-8 py-3 border border-neutral-700 text-neutral-300 font-medium rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-neutral-700 text-neutral-400 rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — cycling profile pictures */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-amber-500/10 rounded-3xl blur-2xl scale-110 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={profileImages[imgIndex]}
                  alt="Adeyemi Taiwo"
                  className="absolute inset-0 w-full h-full rounded-3xl object-cover border-2 border-neutral-800 shadow-2xl shadow-neutral-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-amber-500/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-amber-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
