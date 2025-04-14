import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroImage from "/src/assets/Profile three.jpg"

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const professions = [
    "MERN Stack Developer",
    "Flutter App Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Tech Solutions Expert"
  ];


  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % professions.length;
      const fullText = professions[current];

      setDisplayText(isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(50); // Faster when deleting
      } else {
        setTypingSpeed(150); // Normal speed when typing
      }

      // If completed writing the word
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before starting to delete
      }
      // If deleted the word
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before starting next word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Hello, I'm <span className="text-amber-500">Adeyemi Taiwo</span>
          </h1>
          <div className="text-2xl md:text-3xl font-medium text-gray-700 mb-2 h-10">
            <span className="inline-block">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed max-w-lg">
            I craft modern, responsive web and mobile applications using the MERN stack and Flutter.
            With a strong focus on both frontend and backend development, I deliver tailored digital
            solutions that drive real impact and solve business challenges.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/portfolio"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center"
            >
              View My Work
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
            <Link
              to="/contact"
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-amber-400 rounded-full opacity-20"></div>

            {/* Profile image */}
            <div className="relative z-10 h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border-4 border-amber-500 shadow-xl">
              <img
                src={HeroImage}
                alt="Adeyemi Taiwo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x400?text=Adeyemi+Taiwo';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;