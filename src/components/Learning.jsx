import React from 'react';
import alarm from "./../assets/Alarm.webp";
import game from "./../assets/game.webp";
import Monopoly from "./../assets/monopoly.webp";
import Recharge from "./../assets/recharge.webp";
import Quiz from "./../assets/quiz.webp";
import Currency from "./../assets/curreny.webp";

const Learning = () => {
    // Rearranged practice projects data
    const learningProjects = [
        {
            id: 4,
            title: "Quiz App",
            description: "A simple and responsive quiz app built with HTML, CSS, and JavaScript to test knowledge with score tracking and dynamic questions.",
            tags: ["HTML", "CSS", "JavaScript", "Responsive"],
            image: Quiz,
            demoLink: "https://quiz-app-rust-tau.vercel.app/",
            codeLink: "https://github.com/DevTaiwo18/quiz-app"
        },
        {
            id: 5,
            title: "Recharge Card Generator",
            description: "A card app that generates recharge pins based on selected network and amount. Uses Local Storage for saving history and prevents reusing cards.",
            tags: ["HTML", "CSS", "JavaScript", "Responsive", "LocalStorage", "CRUD"],
            image: Recharge,
            demoLink: "https://card-alpha-one.vercel.app/",
            codeLink: "https://github.com/DevTaiwo18/card"
        },
        {
            id: 3,
            title: "Card Catcher Game",
            description: "A simple and engaging game built with JavaScript to enhance interactive UI skills. Focuses on timing, logic, and responsive controls.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: game,
            demoLink: "https://devtaiwo18.github.io/game/",
            codeLink: "https://github.com/DevTaiwo18/game"
        },
        {
            id: 6,
            title: "Currency Converter",
            description: "A basic currency converter that formats large figures with commas and displays the amount in words.",
            tags: ["HTML", "CSS", "JavaScript", "Responsive"],
            image: Currency,
            demoLink: "https://devtaiwo18.github.io/currency-converter/",
            codeLink: "https://github.com/DevTaiwo18/currency-converter"
        },
        {
            id: 1,
            title: "Alarm",
            description: "A functional alarm clock built using HTML, CSS, and JavaScript. Designed to help practice DOM manipulation and time-based logic.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: alarm,
            demoLink: "https://devtaiwo18.github.io/Alarm/",
            codeLink: "https://github.com/DevTaiwo18/Alarm"
        },
        {
            id: 2,
            title: "Monopoly Diagram",
            description: "A Monopoly board recreated from scratch using HTML tables and CSS. Showcases layout precision and attention to detail in recreating real-world designs.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: Monopoly,
            demoLink: "https://devtaiwo18.github.io/Examination/",
            codeLink: "https://github.com/DevTaiwo18/Examination"
        }
    ];

    return (
        <div className="space-y-12 px-2 sm:px-0">
            {/* Introduction text */}
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-600 text-lg mb-6">
                    A collection of hands-on projects I've built to strengthen my coding skills, explore new technologies, and apply web development concepts in practical ways.
                </p>
            </div>
            {/* Learning projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {learningProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                        {/* Project image with overlay on hover */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://via.placeholder.com/400x225?text=Learning+Project";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Project content */}
                        <div className="p-6 pb-5">
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-500 transition-colors duration-300">{project.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-5">{project.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links with fancy buttons */}
                            <div className="flex justify-between items-center mt-auto">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors duration-300 flex items-center gap-1 shadow-sm"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Live Demo
                                </a>
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center gap-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    View Code
                                </a>
                            </div>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-500/20 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Explore more projects button with GitHub icon */}
            <div className="text-center mt-12">
                <a
                    href="https://github.com/DevTaiwo18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Explore More Projects
                </a>
            </div>
        </div>
    );
};

export default Learning;