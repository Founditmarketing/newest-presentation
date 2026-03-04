import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Network, ShieldCheck } from 'lucide-react';

export const BlueprintSlide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-12 border-b border-white/10 pb-6 relative">
                    <div className="text-brand-gold text-xs md:text-sm font-sans mb-2 tracking-[0.2em] uppercase">VI. The ROI</div>
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white">Measuring Clicks vs. Fittings</h2>
                    {/* Subtle bleed image effect placeholder */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-10">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl text-white font-serif mb-3">Clicks vs. Fittings</h3>
                            <p className="text-gray-400 font-sans leading-relaxed text-base md:text-lg font-light">
                                Most agencies show you "Click-Through Rates." We don't care about clicks. <strong className="text-brand-gold font-medium">Ted Silver cares about Fittings.</strong>
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl text-white font-serif mb-3">Closed-Loop ROAS</h3>
                            <p className="text-gray-400 font-sans leading-relaxed text-base md:text-lg font-light">
                                Connecting the AI Concierge to your CRM lets us track a guest from their Midnight question to the moment they swipe their card at the register. We know exactly which $1 turned into a $4,000 Castangia sale.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center gap-6">
                        <motion.div variants={itemVariants} className="flex items-center justify-between p-6 bg-brand-charcoal rounded-none border border-brand-gold/20">
                            <div className="flex items-center gap-4">
                                <ShieldCheck size={24} className="text-brand-gold" />
                                <span className="text-gray-300 text-sm font-sans uppercase tracking-[0.15em]">Legacy</span>
                            </div>
                            <div className="text-white font-serif italic text-2xl">Preserved</div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center justify-between p-6 bg-brand-gold/10 rounded-none border border-brand-gold/40">
                            <div className="flex items-center gap-4">
                                <Network size={24} className="text-brand-gold" />
                                <span className="text-gray-200 text-sm font-sans uppercase tracking-[0.15em]">Expertise</span>
                            </div>
                            <div className="text-brand-gold font-serif text-2xl">Scaled</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
};
