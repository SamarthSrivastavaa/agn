import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('landing')}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300"
            >
              BuildMyDream
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('landing')}
                className="text-white hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Our Service
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-white hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Our Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold px-6 py-2 rounded-full hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-400 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/5 backdrop-blur-xl rounded-2xl mt-2 mx-4 border border-white/10">
          <button 
            onClick={() => scrollToSection('landing')}
            className="text-white hover:text-emerald-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-emerald-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-emerald-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
          >
            Our Service
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-white hover:text-emerald-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
          >
            Our Team
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-emerald-400 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
          >
            Contact
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold px-6 py-2 rounded-full hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 w-full mt-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;