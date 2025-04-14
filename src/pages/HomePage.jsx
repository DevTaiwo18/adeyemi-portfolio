import React from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <Hero />
      
      {/* You can add more sections below */}
      {/* 
      Examples:
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <Skills />
      <LatestBlog />
      */}
    </div>
  );
};

export default HomePage;