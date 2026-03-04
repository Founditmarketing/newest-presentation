import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Network, ShieldCheck } from 'lucide-react';

export const BlueprintSlide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-12 border-b border-white/10 pb-6 relative">
                    <div className="text-brand-gold text-xs font-sans mb-2 tracking-[0.2em] uppercase">The Case Study</div>
                    <h2 className="font-serif text-4xl md:text-5xl text-white">Weiss & Goldring</h2>
                    {/* Subtle bleed image effect placeholder */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-10">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl text-white font-serif mb-3">The "Neural Backup"</h3>
                            <p className="text-gray-400 font-sans leading-relaxed text-lg font-light">
                                We took a 126-year-old soul and gave it <strong className="text-brand-gold font-medium">Digital Immortality</strong>.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl text-white font-serif mb-3">The Blueprint</h3>
                            <p className="text-gray-400 font-sans leading-relaxed text-lg font-light">
                                Cloning Ted Silver’s expertise to create an always-on, personalized digital concierge that scales his high-touch relationship model without him having to answer the phone at 8 PM.
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
