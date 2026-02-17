import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';

export const TitleSlide: React.FC = () => {
    return (
        <SlideLayout className="text-center">
            <div className="flex flex-col h-full justify-center items-center gap-8">
                <motion.div variants={itemVariants} className="mb-4">
                    <Logo className="text-5xl md:text-6xl text-brand-orange" />
                </motion.div>

                <div className="space-y-4">
                    <motion.div variants={itemVariants}>
                        <h1 className="font-serif text-6xl md:text-7xl text-white leading-tight">
                            The Digital <br />
                            <span className="text-brand-orange">Concierge</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-wide font-serif italic">
                            Scaling High-Touch Relationships in an Automating World
                        </h2>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mt-8">
                    <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_10px_#DD4600]"></div>
                        <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest font-mono">
                            Presented by Trevor Ruby
                        </p>
                    </div>
                </motion.div>
            </div>
        </SlideLayout>
    );
};
