import React, { useState } from 'react';
import logoBlue from '../assets/logo-blue.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Program", "Project", "Testimonials", "Contact"];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-10 w-auto" src={logoBlue} alt="Ruang Ekspresi" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-primary text-sm font-medium transition">
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;