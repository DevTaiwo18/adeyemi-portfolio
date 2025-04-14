import React from 'react';
import { Link } from 'react-router-dom';
import IntroImage from "/src/assets/Profile two.jpg";

const Intro = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Introduction <span className="text-amber-500">and</span> Expertise
                        </h1>

                        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                            Hi, I'm a <strong>Full Stack Developer</strong> with <strong>2 years of hands-on experience</strong> building modern, responsive, and scalable <strong>web applications</strong>. I specialize in creating seamless frontend experiences with <strong>React</strong> and robust backend systems using <strong>Node.js</strong> and <strong>MongoDB</strong>.
                            <br /><br />
                            Whether it's a website, dashboard, or web application, I bring ideas to life through <strong>clean code</strong> and <strong>thoughtful design</strong>. Let's build something impactful together.
                        </p>

                        <Link
                            to="/cv"
                            className="animate-bounce inline-flex items-center justify-center px-10 py-4 font-medium text-white bg-amber-500 hover:bg-amber-600 rounded-md shadow-md transition-colors duration-300"
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

                    {/* Right Side - Image */}
                    <div className="relative">
                        {/* Background decorative element */}
                        <div className="absolute -z-10 top-8 -left-8 w-64 h-64 bg-amber-400 rounded-full opacity-20"></div>

                        {/* Profile image */}
                        <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
                            <img
                                src={IntroImage}
                                alt="Adeyemi Taiwo"
                                className="w-full object-cover"
                                style={{ maxHeight: '550px' }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/500x600?text=Adeyemi+Taiwo';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;