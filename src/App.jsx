import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PillarsSection from './components/PillarsSection';
import ShowcaseSection from './components/ShowcaseSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <PillarsSection />
        <ShowcaseSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;