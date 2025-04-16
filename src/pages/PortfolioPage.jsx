import React, { useState } from 'react';
import Portfolio from '../components/Portfolio';
import Learning from '../components/Learning';

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              My Projects
            </h1>
          </div>

          {/* Tab navigation - updated with transparent background and smaller margins */}
          <div className="flex justify-center mb-6 border-b border-gray-200">
            <button
              className={`px-5 py-2 font-medium text-lg relative transition-all duration-300 mx-1 ${
                activeTab === 'portfolio' 
                  ? 'text-amber-500 bg-amber-50 bg-opacity-40 rounded-t-lg' 
                  : 'text-gray-700 hover:text-amber-400 hover:bg-amber-50 hover:bg-opacity-20 rounded-t-lg'
              }`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
              {activeTab === 'portfolio' && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></div>
              )}
            </button>
            <button
              className={`px-5 py-2 font-medium text-lg relative transition-all duration-300 mx-1 ${
                activeTab === 'learning' 
                  ? 'text-amber-500 bg-amber-50 bg-opacity-40 rounded-t-lg' 
                  : 'text-gray-700 hover:text-amber-400 hover:bg-amber-50 hover:bg-opacity-20 rounded-t-lg'
              }`}
              onClick={() => setActiveTab('learning')}
            >
              Practice Projects
              {activeTab === 'learning' && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></div>
              )}
            </button>
          </div>

          {/* Content area */}
          <div className="min-h-[400px]">
            {activeTab === 'portfolio' ? (
              <Portfolio />
            ) : (
              <Learning />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;