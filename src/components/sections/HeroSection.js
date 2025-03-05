import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-slate-900 bg-opacity-70">
        {/* You'll need to add your own image here */}
        <div className="bg-cover bg-center absolute inset-0 mix-blend-overlay" 
             style={{backgroundImage: "url('/images/hero.png')"}}></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Legal Excellence & <br />Innovative Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl">
          Specialized expertise in corporate law, contracts, and mergers & acquisitions to help your business succeed.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition duration-300"
          >
            Request a Consultation
          </Link>
          <Link 
            to="/services"
            className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white border border-white px-8 py-3 rounded-md font-medium transition duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;