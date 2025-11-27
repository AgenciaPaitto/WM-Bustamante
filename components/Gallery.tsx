import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HOUSES } from '../constants';
import { ArrowRight } from 'lucide-react';

const GalleryCard: React.FC<{ house: typeof HOUSES[0], index: number }> = ({ house, index }) => {
    return (
        <div 
            className="group relative flex-none w-[85vw] md:w-[600px] h-[60vh] md:h-[70vh] bg-neutral-850 overflow-hidden border border-white/5 hover:border-gold-400/30 transition-colors duration-500"
        >
            {/* Image Container */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={house.image} 
                    alt={house.model} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90" />
            </div>

            {/* Blueprint Overlay on Hover */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint-grid.png')] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
                <div className="overflow-hidden mb-2">
                    <p className="text-gold-400 font-serif italic text-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        {house.tagline}
                    </p>
                </div>
                
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">{house.model}</h3>
                
                <div className="h-[1px] w-12 bg-gold-400 mb-6 group-hover:w-full transition-all duration-700 ease-in-out" />
                
                <div className="space-y-1 mb-6">
                    <p className="font-sans text-sm text-neutral-300 tracking-wider">{house.specs}</p>
                    <p className="font-serif text-xl text-gold-200">{house.price}</p>
                </div>

                <div className="flex gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {house.features.map((feature, i) => (
                        <span key={i} className="px-3 py-1 border border-white/10 text-xs uppercase tracking-wide text-neutral-400 rounded-full bg-black/20 backdrop-blur-sm">
                            {feature}
                        </span>
                    ))}
                </div>

                <button className="flex items-center gap-2 text-white text-xs uppercase tracking-[0.2em] group/btn">
                    Ver Detalhes <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
            </div>

            {/* Top Right Index */}
            <div className="absolute top-8 right-8 font-serif text-6xl text-white/5 group-hover:text-gold-400/10 transition-colors">
                0{index + 1}
            </div>
        </div>
    );
};

const Gallery: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [xRange, setXRange] = useState(["0px", "0px"]);

    useEffect(() => {
        // Measure the scrollable width and calculate the translation distance dynamically
        const updateWidth = () => {
            if (contentRef.current) {
                const scrollWidth = contentRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                
                // We want to translate such that the end of the list aligns with the end of the screen
                // Distance = Total Content Width - Viewport Width
                const distance = scrollWidth - viewportWidth; 
                
                // If content is smaller than viewport, don't scroll
                const finalDistance = distance > 0 ? -distance : 0;
                
                setXRange(["0px", `${finalDistance}px`]);
            }
        };

        // Delay slightly to ensure layout is computed
        const timer = setTimeout(updateWidth, 100);
        window.addEventListener('resize', updateWidth);
        
        return () => {
            window.removeEventListener('resize', updateWidth);
            clearTimeout(timer);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        // "start start": animation begins when the top of the section hits the top of the viewport (sticky starts)
        // "end end": animation ends when the bottom of the section hits the bottom of the viewport (sticky ends)
        offset: ["start start", "end end"] 
    });

    const x = useTransform(scrollYProgress, [0, 1], xRange);

    return (
        // Increased height to 400vh for a smoother, longer scroll experience
        <section ref={targetRef} id="collection" className="relative h-[400vh] bg-neutral-900 border-t border-white/5">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                
                {/* Header Section */}
                <div className="container mx-auto px-6 mb-8 md:mb-12 relative z-20 flex-shrink-0">
                    <div className="max-w-2xl">
                        <h4 className="text-gold-400 uppercase tracking-widest text-sm font-bold mb-2">A Coleção Privada</h4>
                        <h2 className="font-serif text-4xl md:text-5xl text-white">Spring Lake, Florida.</h2>
                        <p className="font-sans text-neutral-500 mt-4">Unidades limitadas esculpidas para quem exige excelência.</p>
                    </div>
                </div>

                {/* Horizontal Scroll Track */}
                <motion.div 
                    ref={contentRef}
                    style={{ x }} 
                    className="flex gap-8 px-6 md:px-24 w-max"
                >
                    {HOUSES.map((house, index) => (
                        <GalleryCard key={house.id} house={house} index={index} />
                    ))}
                    {/* Spacer to ensure last card is fully visible with some breathing room */}
                    <div className="w-[5vw] flex-none" />
                </motion.div>
                
                {/* Scroll Progress Bar */}
                <div className="absolute bottom-10 left-6 md:left-24 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        style={{ scaleX: scrollYProgress }} 
                        className="h-full bg-gold-400 origin-left"
                    />
                </div>
            </div>
        </section>
    );
};

export default Gallery;