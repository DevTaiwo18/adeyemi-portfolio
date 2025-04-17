import React from 'react'
import AboutHero from '../components/AboutHero'
import Numbers from '../components/Numbers'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* AboutHero Section */}
      <AboutHero />

      {/* Experience Section */}
      <Experience />
      
      {/* Education Section */}
      <Education />

      {/* Skills Section - Moved before Numbers */}
      <Skills />

      {/* Numbers Section */}
      <Numbers />
    </div>
  )
}

export default AboutPage