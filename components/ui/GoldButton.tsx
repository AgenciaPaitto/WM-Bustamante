import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GoldButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  fullWidth?: boolean;
}

export const GoldButton: React.FC<GoldButtonProps> = ({ 
  children, 
  variant = 'solid', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 uppercase tracking-[0.2em] text-sm font-sans font-semibold transition-all duration-300 relative overflow-hidden group";
  const widthStyles = fullWidth ? "w-full" : "w-auto";
  
  const solidStyles = "bg-gold-400 text-neutral-900 hover:bg-gold-300";
  const outlineStyles = "bg-transparent border border-gold-400/30 text-gold-100 hover:border-gold-400";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${widthStyles} ${variant === 'solid' ? solidStyles : outlineStyles} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Shine effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
    </motion.button>
  );
};