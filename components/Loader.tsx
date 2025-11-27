import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center pointer-events-none"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
            {/* Draw House Outline */}
            <motion.path
                d="M 10 50 L 50 10 L 90 50 L 80 50 L 80 90 L 20 90 L 20 50 Z"
                fill="transparent"
                stroke="#D4AF37"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
             {/* Morph/Draw Diamond Shape on top or after */}
             <motion.path
                d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
                fill="transparent"
                stroke="#FCF6BA"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            />
        </motion.svg>
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-[-40px] text-gold-400 font-serif text-xs tracking-[0.3em] uppercase whitespace-nowrap"
        >
            WM Bustamante
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;