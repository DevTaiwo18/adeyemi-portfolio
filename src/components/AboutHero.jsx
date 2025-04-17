import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from "/src/assets/Profile seven.jpg";

const AboutHero = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-100">
            <div className="container mx-auto px-8">
                {/* Hero Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Unleashing <span className="text-amber-500">Creativity!</span>
                    </h1>
                    <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                </div>
                
                {/* Content - Side by side layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Profile Image */}
                    <div className="relative">
                        {/* Background decorative element */}
                        <div className="absolute -z-10 top-8 -left-8 w-64 h-64 bg-amber-400 rounded-full opacity-20"></div>
                        
                        {/* Profile image */}
                        <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
                            <img
                                src={ProfileImage} 
                                alt="Developer Profile"
                                className="w-full object-cover"
                                style={{ maxHeight: '500px' }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/400x450?text=Profile+Image';
                                }}
                            />
                        </div>
                    </div>
                    
                    {/* Right side - Brief Intro */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            About <span className="text-amber-500">My Journey</span>
                        </h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            I'm a <strong>passionate Full Stack Developer</strong> with a love for creating clean, efficient, and user-friendly 
                            web applications. My journey in tech is driven by a desire to <strong>solve real-world problems</strong> through code 
                            and bring creative ideas to life.
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            With expertise in both <strong>frontend</strong> and <strong>backend</strong> technologies, I build responsive, 
                            intuitive interfaces and robust server-side solutions. I believe in <strong>learning by doing</strong> 
                            and constantly pushing my boundaries to grow as a developer.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            My approach combines technical expertise with a strong focus on <strong>user experience</strong>. 
                            I'm dedicated to writing <strong>clean, maintainable code</strong> that not only works well but 
                            is also easy to understand and build upon. Each project is an opportunity to 
                            create something meaningful that makes a real difference.
                        </p>
                        <Link
                            to="#"
                            className="inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-md shadow-md transition-colors duration-300"
                        >
                            <span className="flex items-center">
                                View CV
                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    ></path>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;