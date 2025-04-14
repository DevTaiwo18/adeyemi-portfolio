import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "/src/assets/Black Simple Personal Logo.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 font-poppins ${scrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-gray-900/90 py-4'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <NavLink to="/" className="flex items-center group">
                        <img
                            src={Logo}
                            alt="Adeyemi Taiwo Logo"
                            className="h-10 w-auto mr-3 transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="text-2xl font-bold text-white tracking-tight">
                            Adeyemi <span className="text-amber-500">Taiwo</span>
                        </span>
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-400 font-medium px-4 py-2 rounded-md"
                                : "text-gray-300 hover:text-amber-400 px-4 py-2 rounded-md transition-colors duration-300"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-400 font-medium px-4 py-2 rounded-md"
                                : "text-gray-300 hover:text-amber-400 px-4 py-2 rounded-md transition-colors duration-300"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-400 font-medium px-4 py-2 rounded-md"
                                : "text-gray-300 hover:text-amber-400 px-4 py-2 rounded-md transition-colors duration-300"
                        }
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        to="/cv"
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-400 font-medium px-4 py-2 rounded-md"
                                : "text-gray-300 hover:text-amber-400 px-4 py-2 rounded-md transition-colors duration-300"
                        }
                    >
                        CV
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="ml-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium px-5 py-2 rounded-md transition-colors duration-300"
                    >
                        Contact Me
                    </NavLink>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-amber-400 focus:outline-none transition-colors duration-300"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 absolute w-full shadow-xl border-t border-gray-700">
                    <div className="px-6 py-4 space-y-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "block text-amber-400 font-medium py-2"
                                    : "block text-gray-300 hover:text-amber-400 py-2 transition-colors duration-300"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "block text-amber-400 font-medium py-2"
                                    : "block text-gray-300 hover:text-amber-400 py-2 transition-colors duration-300"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className={({ isActive }) =>
                                isActive
                                    ? "block text-amber-400 font-medium py-2"
                                    : "block text-gray-300 hover:text-amber-400 py-2 transition-colors duration-300"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Portfolio
                        </NavLink>
                        <NavLink
                            to="/cv"
                            className={({ isActive }) =>
                                isActive
                                    ? "block text-amber-400 font-medium py-2"
                                    : "block text-gray-300 hover:text-amber-400 py-2 transition-colors duration-300"
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            CV
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="block bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium px-4 py-2 rounded-md transition-colors duration-300 mt-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Me
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;