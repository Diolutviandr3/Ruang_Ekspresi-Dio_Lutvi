import React from 'react';
import logoWhite from '../assets/logo-white.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <img src={logoWhite} alt="Ruang Ekspresi White" className="h-8 mb-4 brightness-200" />
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan potensi melalui ideation, creation, dan collaboration.
            </p>
          </div>

          {/* Spacer */}
          <div></div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Program</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white">Career Talks</a></li>
              <li><a href="#" className="hover:text-white">Extra Classes</a></li>
              <li><a href="#" className="hover:text-white">Project Work</a></li>
              <li><a href="#" className="hover:text-white">Mentoring</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400 pt-8 text-center text-xs text-blue-200">
          &copy; 2025 Ruang Ekspresi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;