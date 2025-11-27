import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Palmtree } from 'lucide-react';
import { AMENITIES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Palmtree: <Palmtree className="w-8 h-8" />
};

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">O Cenário: Sebring & Spring Lake</h2>
          <div className="w-24 h-[1px] bg-gold-400 mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AMENITIES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 border border-white/5 bg-neutral-900/50 backdrop-blur-sm hover:border-gold-400/30 transition-all duration-300 group text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gold-400 group-hover:text-black">
                {iconMap[item.icon]}
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
              <p className="font-sans text-neutral-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;