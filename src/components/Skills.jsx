import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaJs } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiNextdotjs, SiRedux, SiSocketdotio, SiJest, SiVite } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: 'React.js', icon: <FaReact size={28} />, color: '#61DAFB', delay: 0 },
        { name: 'JavaScript', icon: <FaJs size={28} />, color: '#F7DF1E', delay: 0.1 },
        { name: 'TypeScript', icon: <SiTypescript size={28} />, color: '#3178C6', delay: 0.2 },
        { name: 'Next.js', icon: <SiNextdotjs size={28} />, color: '#FFFFFF', delay: 0.3 },
        { name: 'Redux', icon: <SiRedux size={28} />, color: '#764ABC', delay: 0.4 },
      ]
    },
    {
      name: "UI & Styling",
      skills: [
        { name: 'HTML5', icon: <FaHtml5 size={28} />, color: '#E34F26', delay: 0.2 },
        { name: 'CSS3', icon: <FaCss3Alt size={28} />, color: '#1572B6', delay: 0.3 },
        { name: 'TailwindCSS', icon: <SiTailwindcss size={28} />, color: '#38B2AC', delay: 0.4 },
        { name: 'Bootstrap', icon: <FaBootstrap size={28} />, color: '#7952B3', delay: 0.5 },
        { name: 'SASS', icon: <FaSass size={28} />, color: '#CC6699', delay: 0.6 },
      ]
    },
    {
      name: "Backend & Infrastructure",
      skills: [
        { name: 'Node.js', icon: <FaNodeJs size={28} />, color: '#339933', delay: 0.3 },
        { name: 'Express', icon: <SiExpress size={28} />, color: '#FFFFFF', delay: 0.4 },
        { name: 'MongoDB', icon: <SiMongodb size={28} />, color: '#47A248', delay: 0.5 },
        { name: 'Firebase', icon: <SiFirebase size={28} />, color: '#FFCA28', delay: 0.6 },
        { name: 'Socket.io', icon: <SiSocketdotio size={28} />, color: '#FFFFFF', delay: 0.7 },
      ]
    },
    {
      name: "Tools & Utilities",
      skills: [
        { name: 'Context API', icon: <AiOutlineApi size={28} />, color: '#61DAFB', delay: 0.4 },
        { name: 'Vite', icon: <SiVite size={28} />, color: '#646CFF', delay: 0.5 },
        { name: 'Jest', icon: <SiJest size={28} />, color: '#C21325', delay: 0.6 },
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Skills Matrix</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
        </div>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <div key={`category-${catIndex}`} className="mb-10">
              <h3 className="text-2xl font-bold mb-6 text-amber-500 flex items-center">
                <span className="w-8 h-1 bg-amber-500 mr-3"></span>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={`skill-${catIndex}-${skillIndex}`}
                    className="transform transition-all duration-500"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: `${skill.delay + (catIndex * 0.1)}s`
                    }}
                  >
                    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 h-full flex flex-col items-center justify-center text-center border border-gray-700 hover:border-amber-500 group cursor-pointer">
                      <div 
                        className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;