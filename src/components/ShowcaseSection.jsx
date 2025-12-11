import React, { useState } from 'react';
import avatar from '../assets/avatar.png';

// --- UPDATE PENTING: Sesuai nama file baru kamu (.png) ---
import project1Img from '../assets/showcase-1.png';
import project2Img from '../assets/showcase-2.png';
import project3Img from '../assets/showcase-3.png';
// ---------------------------------------------------------

const ShowcaseSection = () => {
  // 1. STATE: Melacak slide aktif
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. DATA PROJECT
  const projects = [
    {
      id: 1,
      category: "UI/UX Design",
      title: "Creative Portfolio Platform",
      desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas. Fokus pada pengalaman pengguna yang intuitif.",
      image: project1Img, // Mengarah ke showcase-1.png
      author: "Budi Santoso",
      role: "Frontend Developer"
    },
    {
      id: 2,
      category: "Mobile Development",
      title: "Health Tracker App",
      desc: "Aplikasi pemantau kesehatan harian dengan fitur notifikasi minum air, penghitung kalori, dan jadwal olahraga terintegrasi.",
      image: project2Img, // Mengarah ke showcase-2.png
      author: "Siti Aminah",
      role: "Mobile Developer"
    },
    {
      id: 3,
      category: "Web Development",
      title: "Smart Campus Dashboard",
      desc: "Sistem informasi manajemen akademik kampus untuk monitoring jadwal kuliah, nilai, dan presensi mahasiswa secara real-time.",
      image: project3Img, // Mengarah ke showcase-3.png
      author: "Andi Pratama",
      role: "Backend Developer"
    }
  ];

  // 3. LOGIC TOMBOL
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const activeProject = projects[currentIndex];

  return (
    <section className="bg-gray-50 py-16" id="project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800">Showcase <span className="text-primary">Student Projects</span></h2>
          <p className="text-gray-500">Karya inovatif mahasiswa dalam program Ruang Ekspresi.</p>
        </div>

        <div className="relative bg-[#FFF5F7] rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100">
          
          {/* Tombol Kiri */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:-left-8 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-blue-50 hover:scale-110 transition z-20 border border-gray-100 group"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-primary transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          </button>

          {/* Tombol Kanan */}
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:-right-8 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-blue-50 hover:scale-110 transition z-20 border border-gray-100 group"
          >
             <svg className="w-6 h-6 text-gray-600 group-hover:text-primary transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>

          {/* Content Grid */}
          <div key={activeProject.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-opacity duration-500 animate-fade-in">
            
            {/* Kiri: Teks */}
            <div className="space-y-6">
              <span className="bg-blue-100 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                {activeProject.category}
              </span>
              
              <h3 className="text-3xl font-bold text-gray-900">
                {activeProject.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed min-h-[80px]">
                {activeProject.desc}
              </p>

              <div className="space-y-3">
                <p className="text-xs font-bold text-gray-800">Tim Pembuat :</p>
                <div className="flex items-center space-x-3">
                  <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{activeProject.author}</p>
                    <p className="text-xs text-gray-500">{activeProject.role}</p>
                  </div>
                </div>
              </div>

              <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-800 transition flex items-center gap-2 shadow-lg shadow-blue-500/30">
                View Project
              </button>
            </div>

            {/* Kanan: Gambar */}
            <div className="relative h-full flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white/70 w-full max-h-[450px] transform transition duration-500 hover:scale-[1.02]">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;