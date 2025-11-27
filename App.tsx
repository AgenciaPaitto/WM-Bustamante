import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Hero from './components/Hero';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading or minimum wait time for intro animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <AnimatePresence>
            {loading && <Loader />}
        </AnimatePresence>

        <main className="bg-neutral-950 min-h-screen text-neutral-100 selection:bg-gold-500/30 selection:text-white">
            <Hero />
            <Bio />
            <Gallery />
            <Features />
            <Trust />
            <Contact />
            <Footer />
        </main>
    </>
  );
};

export default App;