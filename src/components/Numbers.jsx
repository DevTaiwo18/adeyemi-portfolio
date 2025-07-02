import React, { useState, useEffect, useRef } from 'react';
import { BiCodeAlt, BiCalendar, BiUserCheck } from 'react-icons/bi';

const Numbers = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    years: 0,
    clients: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const finalValues = {
    projects: 45,
    years: 2,
    clients: 10
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const interval = 16;
    let startTime = null;

    const timer = setInterval(() => {
      if (!startTime) startTime = Date.now();

      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);

      setCounters({
        projects: Math.floor(eased * finalValues.projects),
        years: Math.floor(eased * finalValues.years),
        clients: Math.floor(eased * finalValues.clients)
      });

      if (progress === 1) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      id: 1,
      icon: <BiCodeAlt className="text-5xl text-amber-500" />,
      label: 'Projects Completed',
      value: counters.projects
    },
    {
      id: 2,
      icon: <BiCalendar className="text-5xl text-amber-500" />,
      label: 'Years of Experience',
      value: counters.years
    },
    {
      id: 3,
      icon: <BiUserCheck className="text-5xl text-amber-500" />,
      label: 'Satisfied Clients',
      value: counters.clients
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 shadow-lg border border-gray-100 cursor-pointer"
            >
              <div className="mb-6 bg-amber-100 rounded-full p-5 shadow-inner">
                {stat.icon}
              </div>
              <h3 className="text-6xl font-bold text-gray-800 mb-3 flex items-center">
                {stat.value}<span className="text-amber-500 ml-1">+</span>
              </h3>
              <p className="text-xl font-semibold text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
