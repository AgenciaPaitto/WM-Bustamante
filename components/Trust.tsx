import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { TRUST_POINTS } from '../constants';

const Trust: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
                <div className="absolute -inset-4 bg-gold-400/5 blur-xl rounded-full"></div>
                <h3 className="relative font-serif text-3xl md:text-4xl text-white leading-tight">
                    Segurança de Investimento <br/>
                    <span className="text-gold-400 italic">Sem Fronteiras.</span>
                </h3>
            </div>

            <div className="space-y-6">
                {TRUST_POINTS.map((point, index) => (
                    <motion.div 
                        key={point.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4"
                    >
                        <div className="mt-1 w-5 h-5 rounded-full border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-400">
                            <Check className="w-3 h-3" />
                        </div>
                        <p className="text-neutral-300 font-light text-sm md:text-base">{point.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;