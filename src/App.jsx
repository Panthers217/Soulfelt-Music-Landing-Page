import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedTracks from './components/FeaturedTracks';
import Support from './components/Support';
import EmailSignup from './components/EmailSignup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedTracks />
        <Support />
        <EmailSignup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
