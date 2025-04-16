import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-bold text-amber-500 mb-4">404</h1>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h2>
      
      <p className="text-gray-600 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Link 
        to="/" 
        className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;