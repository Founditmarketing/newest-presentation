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
                        <span>V. Content</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white">The Virtual Lookbook</h2>
                </motion.div>

                <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-300 font-serif italic mb-16 text-center md:text-left leading-relaxed">
                    You spend thousands on photography. <strong className="text-brand-gold font-medium not-italic">AI makes it work 10x harder in your 'House Voice'.</strong>
                </motion.p>

                <div className="relative mt-8">
                    {/* Timeline Line */}
                    <div className="absolute top-8 left-0 w-full h-px bg-brand-gold/20 -z-10 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, label: "LinkedIn", sub: "For Professional Clients" },
                            { icon: Heart, label: "Instagram", sub: "Visual, Luxury Caption" },
                            { icon: CalendarHeart, label: "Private SMS", sub: "Insiders-Only for Top 10%" },
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
