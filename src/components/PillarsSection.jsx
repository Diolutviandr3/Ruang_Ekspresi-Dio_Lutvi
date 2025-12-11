import React from 'react';
import clockIcon from '../assets/icon-clock.png';

const PillarsSection = () => {
  const pillars = [
    { title: "Ideation", desc: "Mengembangkan ide-ide kreatif dari inovasi melalui brainstorming.", color: "bg-accent-yellow" },
    { title: "Creation", desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools.", color: "bg-accent-green" },
    { title: "Collaboration", desc: "Bekerja sama dalam tim multidisiplin untuk solusi komprehensif.", color: "bg-accent-blue" },
    { title: "Guidance & Support", desc: "Mendapat bimbingan dari mentor berpengalaman.", color: "bg-accent-pink" },
  ];

  const activities = [
    { title: "Career Talks", desc: "Sharing alumni sukses.", color: "bg-accent-yellow" },
    { title: "Extra Classes", desc: "Kelas tambahan skill.", color: "bg-accent-green" },
    { title: "Project Work", desc: "Mengerjakan project nyata.", color: "bg-accent-blue" },
    { title: "Mentoring", desc: "Sesi konsul personal.", color: "bg-accent-pink" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* 4 Pilar Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Empat Pilar <span className="text-primary">Ruang Ekspresi</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Kompetensi yang dirancang untuk mengembangkan potensi secara holistik.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        {pillars.map((item, idx) => (
          <div key={idx} className={`${item.color} p-6 rounded-xl text-center hover:shadow-lg transition`}>
            {/* Icon Placeholder - Replace with SVG if available */}
            <div className="w-10 h-10 mx-auto mb-4 bg-white/50 rounded-full flex items-center justify-center">
              <span className="text-xl">💡</span> 
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Schedule Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-800">Jadwal & <span className="text-primary">Program Kegiatan</span></h2>
      </div>

      {/* Schedule Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-accent-yellow/50 border border-accent-yellow p-6 rounded-xl flex items-start space-x-4">
            <img src={clockIcon} className="w-8 h-8 opacity-70" alt="clock"/>
            <div>
                <h3 className="font-bold mb-1">Sesi Pagi</h3>
                <p className="text-primary font-mono text-sm mb-1">09.00 - 12.00 WIB</p>
                <p className="text-xs text-gray-600">Workshop, Career Talks, Creative Classes</p>
            </div>
        </div>
        <div className="bg-accent-green/50 border border-accent-green p-6 rounded-xl flex items-start space-x-4">
            <img src={clockIcon} className="w-8 h-8 opacity-70" alt="clock"/>
            <div>
                <h3 className="font-bold mb-1">Sesi Sore</h3>
                <p className="text-primary font-mono text-sm mb-1">13.00 - 15.00 WIB</p>
                <p className="text-xs text-gray-600">Project Work, Mentoring, Collaboration</p>
            </div>
        </div>
      </div>

       {/* Activities Grid */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {activities.map((act, idx) => (
             <div key={idx} className={`${act.color} p-6 rounded-xl border border-black/5`}>
                 <div className="mb-4">
                    <span className="text-2xl">📘</span>
                 </div>
                 <h4 className="font-bold text-gray-900">{act.title}</h4>
                 <p className="text-xs mt-2 text-gray-700">{act.desc}</p>
             </div>
        ))}
       </div>
    </section>
  );
};

export default PillarsSection;