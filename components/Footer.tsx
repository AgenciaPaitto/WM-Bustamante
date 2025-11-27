import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl text-white mb-2">WM Bustamante</h3>
          <p className="text-neutral-500 text-xs tracking-widest uppercase">Investments</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-neutral-400 font-light text-sm">
            <a href="tel:+19549958274" className="hover:text-gold-400 transition-colors">+1 (954) 995-8274</a>
            <a href="tel:+5511992927262" className="hover:text-gold-400 transition-colors">+55 11 99292-7262</a>
            <a href="#" className="flex items-center gap-2 mt-2 hover:text-gold-400 transition-colors">
                <Instagram className="w-4 h-4" /> @wmbustamanteinvestments
            </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-neutral-600 text-xs">
        <p>© 2024. Handcrafted for High-End Living.</p>
      </div>
    </footer>
  );
};

export default Footer;