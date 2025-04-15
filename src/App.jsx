import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import CVPage from './pages/CVPage';
import NotFoundPage from './pages/NotFoundPage';
import Sucess from './components/Sucess';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 font-poppins">
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
      </div>
    </Router>
  );
}

export default App;