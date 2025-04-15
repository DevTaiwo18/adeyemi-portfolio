import React from 'react';
import { Link } from 'react-router-dom';
import WebDevImage from '../assets/Is-Web-Development-Oversaturated.jpg'; 
import BackendImage from '../assets/Artboard-–-1-1.webp'; 
import UiUxImage from '../assets/ui ux 01.webp'; 

const WhatIDo = () => {
  const services = [
    {
      id: 1,
      title: 'I Build Scalable Websites',
      description: 'Crafting responsive and performance-focused websites using modern JavaScript frameworks. I focus on delivering clean, functional, and scalable solutions.',
      techStack: 'React • Node.js • MongoDB • Express',
      image: WebDevImage,
      alt: 'Web Development'
    },
    {
      id: 2,
      title: 'I Create Backend Systems',
      description: 'Creating and maintaining efficient server-side logic, secure databases, and RESTful APIs to power full-featured applications.',
      techStack: 'Node.js • MongoDB • Express • REST APIs',
      image: BackendImage,
      alt: 'Backend Development'
    },
    {
      id: 3,
      title: 'I Enhance UI/UX',
      description: 'Applying strong design principles to enhance user experience and interface functionality. I solve design challenges to create intuitive, engaging digital experiences.',
      techStack: 'Figma • Tailwind CSS',
      image: UiUxImage,
      alt: 'UI/UX Design'
    }
  ];

  return (
    <section className="py-16 bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header - now left aligned */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white">
              What <span className="text-amber-500">I Do</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 my-4"></div>
            <p className="text-gray-300 max-w-2xl">Specialized services I offer to bring your digital ideas to life. Each area represents my professional focus and expertise.</p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 border border-gray-700 hover:border-amber-500/50 cursor-pointer group"
              >
                {/* Title above image */}
                <div className="p-6 pb-3">
                  <h3 className="text-xl font-medium text-amber-500 group-hover:translate-x-1 transition-transform duration-300">{service.title}</h3>
                </div>
                
                {/* Image with padding */}
                <div className="px-6 group">
                  <div className="relative w-full h-48 overflow-hidden rounded-lg cursor-pointer">
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/720x400?text=${service.title}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4">
                  <p className="text-gray-300 mb-5 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-5">
                    <p className="text-sm font-medium text-amber-500 mb-2">TECH STACK</p>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.split('•').map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/portfolio" 
                    className="inline-block px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium rounded-md transition-all duration-300 cursor-pointer shadow-lg shadow-amber-600/10 hover:shadow-amber-600/20 hover:translate-y-[-2px]"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;