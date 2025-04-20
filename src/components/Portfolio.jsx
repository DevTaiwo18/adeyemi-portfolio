import React from 'react';
import Reid from "./../assets/reid.webp"
import Event from "./../assets/event.webp"
import Acess from "./../assets/acesss.webp"
import Chat from "./../assets/chat.webp"
import Quick from "./../assets/quick.webp"
import Travel from "./../assets/travel.webp"

const Portfolio = () => {
    const portfolioProjects = [
        {
            id: 2,
            title: "Event Management System",
            description: "A full-stack JavaScript event management platform with ticket sales, user authentication, Paystack payment, and admin control, built using the MERN stack, Tailwind CSS, and Context API.",
            tags: ["JavaScript", "MongoDB", "Express", "React", "Node.js", "Context API", "Paystack", "Tailwind CSS"],
            image: Event,
            demoLink: "https://event-management-system-frontend.vercel.app/",
            codeLink: "https://github.com/DevTaiwo18/Event-Management-System-frontend"
        },
        {
            id: 6,
            title: "Real-time Chat Application (Dating App)",
            description: "A dating app with private messaging, user matching, and email verification. Built with the MERN stack, Redux, Tailwind CSS, and TypeScript.",
            tags: ["React", "Socket.io", "Node.js", "MongoDB", "Redux", "TypeScript", "Nodemailer", "Tailwind CSS"],
            image: Chat,
            demoLink: "https://chat-app-h1l6.vercel.app/",
            codeLink: "https://github.com/DevTaiwo18/Chat-App"
        },
        {
            id: 1,
            title: "Reid E-Commerce Platform",
            description: "A fully functional and responsive e-commerce site with product listings, cart, user auth, and Paystack payment integration. Built using HTML, CSS, JavaScript, Bootstrap, and Firebase.",
            tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase", "Paystack"],
            image: Reid,
            demoLink: "https://reid-eight.vercel.app/",
            codeLink: "https://github.com/DevTaiwo18/Reid"
        },
        {
            id: 5,
            title: "QuickPay VTU Platform",
            description: "A Virtual Top-Up platform for mobile recharge, data bundles, and utility payments. Includes user accounts and transaction history. Built with MERN stack, Context API, and JavaScript.",
            tags: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS"],
            image: Quick,
            demoLink: "https://quick-pay-liard.vercel.app/",
            codeLink: "https://github.com/DevTaiwo18/QuickPay"
        },
        {
            id: 4,
            title: "Travefy - Travel Agency Template",
            description: "A modern, responsive travel agency template with booking features, destination showcases, and reviews, built with HTML, CSS, JavaScript, SCSS, and Bootstrap.",
            tags: ["HTML5", "CSS3", "JavaScript", "SCSS", "Bootstrap"],
            image: Travel,
            demoLink: "https://travefy.vercel.app/",
            codeLink: "https://github.com/DevTaiwo18/Travefy"
        },
        {
            id: 3,
            title: "Access Bank Website Clone",
            description: "A pixel-perfect recreation of the Access Bank website focusing on responsive design, accessibility, and user experience. Built to demonstrate attention to detail.",
            tags: ["HTML", "CSS", "SCSS", "JavaScript", "Bootstrap", "Responsive", "Animation"],
            image: Acess,
            demoLink: "https://access-project-beta.vercel.app/",
            codeLink: "https://github.com/DevTaiwo18/Access-project"
        }
    ];

    return (
        <div className="space-y-12 px-2 sm:px-0">
            {/* Introduction text */}
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-600 text-lg mb-6">
                    Showcasing my professional and real-world projects that demonstrate my skills in web development, from responsive design to full-stack applications.
                </p>
            </div>

            {/* Portfolio projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {portfolioProjects.map((project) => (
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
                                    e.target.src = "https://via.placeholder.com/400x225?text=Portfolio+Project";
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

            {/* Contact or hire me button */}
            <div className="text-center mt-12">
                <a
                    href="mailto:adeyemitaiwo24434@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get In Touch About A Project
                </a>
            </div>
        </div>
    );
};

export default Portfolio;