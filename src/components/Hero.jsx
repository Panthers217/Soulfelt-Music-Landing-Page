import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-soul-50 to-orange-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          SoulFelt Music
        </h2>
        <p className="text-xl sm:text-2xl text-soul-600 font-semibold mb-6">
          Music with feeling. Music with purpose.
        </p>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8 px-4">
          Experience independent soul, gospel, and feel-good music that touches 
          the heart and lifts the spirit. Every track is crafted with intention 
          and delivered with passion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('tracks')}
            className="w-full sm:w-auto bg-soul-500 hover:bg-soul-600 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            aria-label="Listen to featured tracks"
          >
            Listen Now
          </button>
          <button
            onClick={() => scrollToSection('support')}
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-soul-600 font-semibold py-3 px-8 rounded-full border-2 border-soul-500 transition-all transform hover:scale-105 shadow-lg"
            aria-label="Support SoulFelt Music"
          >
            Support the Music
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
