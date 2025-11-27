import React from 'react';
import { motion } from 'framer-motion';
import { GoldButton } from './ui/GoldButton';

const Contact: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                Uma oportunidade rara <span className="text-gold-400">não espera.</span>
            </h2>
            <p className="font-sans text-neutral-400 font-light">
                Agende uma consultoria privada com a equipe Bustamante.
            </p>
        </div>

        <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto space-y-8 bg-white/5 p-8 md:p-12 backdrop-blur-md border border-white/5 rounded-sm"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="space-y-6">
                <div className="group">
                    <input 
                        type="text" 
                        placeholder="Nome Completo" 
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                </div>
                <div className="group">
                    <input 
                        type="text" 
                        placeholder="WhatsApp" 
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                </div>
                <div className="group">
                    <input 
                        type="email" 
                        placeholder="Email Corporativo" 
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                </div>
            </div>

            <div className="pt-4">
                <GoldButton fullWidth type="submit">
                    Solicitar Consultoria
                </GoldButton>
                <p className="text-center text-gold-400/60 text-xs mt-4 tracking-wider">
                    * Apenas 3 unidades disponíveis nesta fase
                </p>
            </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;