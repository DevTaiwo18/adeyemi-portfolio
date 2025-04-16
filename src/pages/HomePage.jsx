// In HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import WhatIDo from '../components/WhatIDo';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <Hero />
      
      {/* Introduction Section */}
      <Intro />
      
      {/* What I Do Section */}
      <WhatIDo />
      
      {/* Testimonials Section */}
      <Testimonial />
      
      {/* Contact/Hire Me Section */}
      <Contact />
    </div>
  );
};

export default HomePage;