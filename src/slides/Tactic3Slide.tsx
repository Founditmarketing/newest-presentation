import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Infinity as InfinityIcon, Clock, CalendarHeart, Heart } from 'lucide-react';

export const Tactic3Slide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-12 text-center md:text-left">
                    <div className="flex items-center gap-3 mb-3 text-brand-gold font-sans uppercase tracking-[0.2em] text-xs justify-center md:justify-start">
                        <InfinityIcon size={14} className="text-brand-gold" />
                        <span>Pillar 3</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-white">The Infinite Handshake (Lifecycle)</h2>
                </motion.div>

                <motion.p variants={itemVariants} className="text-2xl text-gray-300 font-serif italic mb-16 text-center md:text-left leading-relaxed">
                    Automating the 12-month relationship. <strong className="text-brand-gold font-medium not-italic">Turning one-time grooms into lifetime clients.</strong>
                </motion.p>

                <div className="relative mt-8">
                    {/* Timeline Line */}
                    <div className="absolute top-8 left-0 w-full h-px bg-brand-gold/20 -z-10 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Clock, label: "The Wedding", sub: "Initial Fitting & Sale" },
                            { icon: CalendarHeart, label: "3 Months", sub: "Honeymoon Follow-up" },
                            { icon: CalendarHeart, label: "6 Months", sub: "Seasonal Wardrobe Update" },
                            { icon: Heart, label: "1 Year", sub: "Anniversary & Loyalty" },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center bg-brand-charcoal p-8 rounded-none border border-brand-gold/10"
                            >
                                <div className="w-16 h-16 rounded-full bg-brand-black border border-brand-gold/40 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)] z-10 transition-transform hover:scale-110">
                                    <step.icon size={24} className="text-brand-gold" />
                                </div>
                                <h4 className="text-white font-serif text-xl mb-3">{step.label}</h4>
                                <span className="text-gray-400 text-xs font-sans uppercase tracking-[0.15em]">{step.sub}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
};
