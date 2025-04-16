import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import CVPage from './pages/CVPage';
import NotFoundPage from './pages/NotFoundPage';
import Sucess from './components/Sucess';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return null;
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-amber-500 text-white shadow-lg hover:bg-amber-600 transition-all duration-300 z-50 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-poppins relative">
      <ScrollToTop />
      
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-500"></div>
        </div>
      )}
      
      <Header />
      
      <main className="flex-grow pt-24 md:pt-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
      <Footer />
      
      <ScrollToTopButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;



// Portfolio Basic Color Palette

// Primary colors (Amber)
const amber = {
  500: '#F59E0B', // Main amber accent
  600: '#D97706', // Darker amber for hover states
};

// Grayscale
const gray = {
  50: '#F9FAFB',  // Light background
  100: '#F3F4F6', // Alternative light background
  600: '#4B5563', // Body text
  800: '#1F2937', // Dark text & dark backgrounds
  900: '#111827', // Darkest - for dark sections
};

// Basic color system
const colors = {
  primary: amber[500],        // Main accent color
  primaryHover: amber[600],   // Hover state
  background: gray[50],       // Main background
  darkBackground: gray[900],  // Dark sections background
  text: gray[800],            // Main text color
  lightText: '#FFFFFF',       // Text on dark backgrounds
  secondaryText: gray[600],   // Less important text
};