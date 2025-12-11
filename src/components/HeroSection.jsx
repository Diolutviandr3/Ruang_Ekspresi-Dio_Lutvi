import React from 'react';
import heroImg from '../assets/hero-img.png';

const HeroSection = () => {
  const tags = [
    { text: "Ideation", color: "bg-accent-yellow" },
    { text: "Creation", color: "bg-accent-green" },
    { text: "Collaboration", color: "bg-accent-blue" },
    { text: "Guidance & Support", color: "bg-accent-pink" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-secondary">
            <span className="text-primary">RUANG EKSPRESI :</span> Wadah kreatif & Kompetitif Mahasiswa
          </h1>
          
          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag, idx) => (
              <span key={idx} className={`${tag.color} text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm`}>
                {tag.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img 
            src={heroImg} 
            alt="Team Meeting" 
            className="rounded-3xl shadow-xl w-full h-auto object-cover transform md:rotate-1 hover:rotate-0 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;