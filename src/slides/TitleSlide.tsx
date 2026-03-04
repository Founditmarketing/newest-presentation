import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';

export const TitleSlide: React.FC = () => {
    return (
        <SlideLayout className="text-center relative overflow-hidden">
            {/* Background Texture/Image placeholder (can be swapped for an actual high-res image later) */}
            <div className="absolute inset-0 bg-brand-charcoal opacity-40 z-0 mix-blend-multiply filter-editorial"></div>

            <div className="relative z-10 flex flex-col h-full justify-center items-center gap-8">
                <motion.div variants={itemVariants} className="mb-4">
                    <Logo className="text-4xl md:text-6xl text-brand-gold" />
                </motion.div>

                <div className="space-y-6">
                    <motion.div variants={itemVariants}>
                        <h1 className="font-serif text-5xl md:text-8xl text-white leading-tight tracking-tight uppercase">
                            Sartorial Excellence,<br />
                            <span className="text-brand-gold italic lowercase tracking-normal">Digitally Delivered.</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h2 className="text-xl md:text-2xl text-gray-400 font-sans font-light tracking-widest uppercase mt-4">
                            The Strategic Legacy Asset
                        </h2>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mt-12">
                    <div className="inline-flex items-center gap-4 border border-brand-gold/20 bg-brand-charcoal/50 rounded-none px-8 py-4 backdrop-blur-md">
                        <div className="w-2 h-2 rounded-full bg-brand-gold shadow-[0_0_15px_#D4AF37]"></div>
                        <p className="text-brand-gold text-[11px] font-bold uppercase tracking-[0.2em] font-sans">
                            Presented by Found It Marketing &mdash; For High-End Menswear
                        </p>
                    </div>
                </motion.div>
            </div>
        </SlideLayout>
    );
};
