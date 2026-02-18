import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Logo from '@/components/Logo';

export const ConclusionSlide: React.FC = () => {
    return (
        <SlideLayout className="text-center">
            <div className="flex flex-col h-full justify-center items-center">
                <motion.div variants={itemVariants} className="mb-8">
                    <Logo className="text-4xl md:text-6xl text-brand-orange mb-6" />
                    <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
                        You have mastered the <br />
                        <span className="text-gray-500">physical relationship.</span>
                    </h2>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-12">
                    <p className="text-xl md:text-2xl text-white font-light">
                        Let me build your <span className="text-brand-orange font-bold border-b-2 border-brand-orange">Digital One.</span>
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center gap-6"
                >
                    <a
                        href="mailto:Trevor@founditmarketing.com"
                        className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    >
                        <Mail size={24} className="text-brand-orange" />
                        <span>Start the Conversation</span>
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex flex-col items-center mt-8 space-y-2 opacity-60">
                        <p className="text-white font-serif text-lg tracking-wide">Trevor Ruby</p>
                        <p className="text-brand-orange text-xs tracking-widest uppercase font-mono">Found It Marketing</p>
                    </div>
                </motion.div>
            </div>
        </SlideLayout>
    );
};
