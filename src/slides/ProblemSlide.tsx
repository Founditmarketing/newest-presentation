import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';

export const ProblemSlide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center gap-16 relative z-10">
                <motion.div variants={itemVariants} className="text-center">
                    <h2 className="font-sans text-xs md:text-sm tracking-[0.3em] text-brand-gold uppercase mb-4 md:mb-6">
                        I. The Hook: The Ghost in the Machine
                    </h2>
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight px-4">
                        What happens to your wisdom<br />
                        <span className="italic text-gray-400">at 2:00 AM?</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-gold/10 p-[1px]">
                    {/* The Handshake */}
                    <motion.div variants={itemVariants} className="bg-brand-charcoal p-8 md:p-12 flex flex-col items-center justify-center text-center h-full">
                        <h4 className="font-serif text-2xl md:text-3xl text-white mb-4">The Master Craftsman</h4>
                        <p className="font-sans text-brand-gold tracking-widest text-xs uppercase mb-6">In-store</p>
                        <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
                            500 years of combined taste, intuition, and 'Old World' wisdom. You know a man's jacket size from 20 feet away.
                        </p>
                    </motion.div>

                    {/* The Vending Machine */}
                    <motion.div variants={itemVariants} className="bg-brand-black p-8 md:p-12 flex flex-col items-center justify-center text-center h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-900/5 z-0"></div>
                        <h4 className="font-serif text-2xl md:text-3xl text-gray-500 mb-4 relative z-10">The Digital Graveyard</h4>
                        <p className="font-sans text-red-700 tracking-widest text-xs uppercase mb-6 relative z-10">Online</p>
                        <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base relative z-10">
                            Your wisdom is locked in your head. Your CRM is a digital Rolodex collecting dust.
                        </p>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
};
