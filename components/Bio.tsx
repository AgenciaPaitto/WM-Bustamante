import React from 'react';
import { motion } from 'framer-motion';

const Bio: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="relative z-10 overflow-hidden border border-gold-400/20 grayscale group-hover:grayscale-0 transition-all duration-700">
               {/* Official Photo of Wesley Bustamante */}
              <img 
                src="http://wmbustamanteinvestments.com/wp-content/uploads/2025/11/Wesley-Bustamante.jpg" 
                alt="Wesley Bustamante" 
                className="w-full h-[600px] object-cover object-top"
              />
               {/* Overlay tint */}
              <div className="absolute inset-0 bg-gold-900/10 mix-blend-overlay"></div>
            </div>
            {/* Offset border effect */}
            <div className="absolute top-4 -left-4 w-full h-full border border-gold-400/30 -z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="text-gold-400 uppercase tracking-widest text-sm font-bold mb-4">O Visionário</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              Do Micro Detalhe ao <br/>
              <span className="italic text-gold-200">Macro Projeto.</span>
            </h2>
            
            <div className="space-y-6 text-neutral-400 font-sans font-light leading-relaxed">
              <p>
                Wesley Bustamante não apenas constrói; ele assina. Com uma carreira dedicada a criar joias exclusivas para a elite, Wesley aplica a mesma obsessão milimétrica na seleção e construção de imóveis de alto padrão nos EUA.
              </p>
              <p>
                Nossa filosofia é simples: uma casa deve ser tão perene e preciosa quanto um diamante. Cada fundação, cada acabamento, é escolhido com a precisão de quem conhece o valor da eternidade.
              </p>
            </div>

            <div className="mt-12 flex flex-col items-start gap-4">
              <span className="font-script text-6xl text-gold-400 rotate-[-5deg] block">
                Wesley Bustamante
              </span>
              <span className="text-xs uppercase tracking-widest text-neutral-500 ml-4">CEO & Founder</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Bio;