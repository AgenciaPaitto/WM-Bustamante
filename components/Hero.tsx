import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Diamond3D from './Diamond3D';
import { GoldButton } from './ui/GoldButton';

const ScrollMouse: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
  >
    <div className="w-6 h-10 border-2 border-gold-400/50 rounded-full flex justify-center p-1">
      <motion.div 
        animate={{ 
          y: [0, 12, 0],
          opacity: [1, 0, 0]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-1 h-2 bg-gold-400 rounded-full"
      />
    </div>
  </motion.div>
);

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={targetRef} className="relative h-screen w-full overflow-hidden bg-neutral-950 flex items-center">
      {/* Background Video Mockup */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        {/* Updated Gradient Overlay: Darker on Left for text, Darker on Right per request */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-neutral-950/90 z-10" />
        
        {/* Using a high quality dark abstract loop as placeholder for the jeweler/construction video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
        >
             <source src="https://assets.mixkit.co/videos/preview/mixkit-black-and-white-abstract-pattern-1250-large.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* 3D Element Layer */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 z-10 hidden md:block">
        <Diamond3D />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-4xl"
        >
            <h2 className="font-serif text-xl md:text-2xl text-gold-400 mb-4 tracking-widest uppercase">
                WM Bustamante
            </h2>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
                A PRECISÃO DO <span className="text-transparent bg-clip-text bg-gold-gradient italic pr-2">JOALHEIRO.</span><br />
                A SOLIDEZ DO <span className="text-transparent bg-clip-text bg-gold-gradient italic">IMOBILIÁRIO.</span>
            </h1>
            <p className="font-sans text-neutral-400 text-lg md:text-xl max-w-xl mb-10 font-light border-l border-gold-400/30 pl-6 shadow-black drop-shadow-md">
                Invista nos EUA com o olhar artístico de Wesley Bustamante. Onde a exclusividade encontra a engenharia.
            </p>
            
            <GoldButton onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore a Coleção
            </GoldButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollMouse />
    </section>
  );
};

export default Hero;