import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import LawTypes from './pages/LawTypes';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/law-types" element={<LawTypes />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add routes for other pages as you create them */}
            <Route path="/about" element={<div className="p-16 text-center">About Page Coming Soon</div>} />
            <Route path="/team" element={<div className="p-16 text-center">Team Page Coming Soon</div>} />
            <Route path="/case-studies" element={<div className="p-16 text-center">Case Studies Coming Soon</div>} />
            <Route path="/resources" element={<div className="p-16 text-center">Resources Coming Soon</div>} />
            <Route path="/careers" element={<div className="p-16 text-center">Careers Page Coming Soon</div>} />
            <Route path="/privacy" element={<div className="p-16 text-center">Privacy Policy Coming Soon</div>} />
            <Route path="/terms" element={<div className="p-16 text-center">Terms of Service Coming Soon</div>} />
            <Route path="/disclaimer" element={<div className="p-16 text-center">Disclaimer Coming Soon</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;