import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">MORGAN & ASSOCIATES</Link>
          </div>
          
          {/* Back to Portfolio Button */}
          <a 
            href="https://umbralys.github.io/projects/" 
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-300 transition duration-300">Home</Link>
            <Link to="/law-types" className="text-white hover:text-blue-300 transition duration-300">Law Types</Link>
            <Link to="/services" className="text-white hover:text-blue-300 transition duration-300">Services</Link>
            <Link to="/contact" className="text-white hover:text-blue-300 transition duration-300">Contact</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-blue-300 transition duration-300">Home</Link>
              <Link to="/law-types" className="text-white hover:text-blue-300 transition duration-300">Law Types</Link>
              <Link to="/services" className="text-white hover:text-blue-300 transition duration-300">Services</Link>
              <Link to="/contact" className="text-white hover:text-blue-300 transition duration-300">Contact</Link>
              {/* Add back to portfolio link for mobile */}
              <a 
                href="https://umbralys.github.io/projects/" 
                className="text-white hover:text-blue-300 transition duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Portfolio
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
