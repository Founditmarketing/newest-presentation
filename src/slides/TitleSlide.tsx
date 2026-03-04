import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';

export const TitleSlide: React.FC = () => {
    return (
        <SlideLayout className="text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594938298596-f308feefe293?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-multiply filter-editorial scale-105 pointer-events-none"></div>
                <div className="absolute inset-0 bg-brand-black/80 z-[1] backdrop-blur-[2px]"></div> {/* High-fidelity wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50 z-[2]"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-center items-center gap-8">
                <motion.div variants={itemVariants} className="mb-4">
                    <Logo className="text-4xl md:text-6xl text-brand-gold" />
                </motion.div>

                <div className="space-y-6">
                    <motion.div variants={itemVariants}>
                        <h1 className="font-serif text-[11vw] md:text-[8vw] lg:text-[7.2vw] text-white leading-none tracking-tighter uppercase px-4 whitespace-nowrap flex-nowrap">
                            The Living Legacy<br />
                            <span className="text-brand-gold italic lowercase tracking-normal px-4">Masterclass.</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h2 className="text-lg md:text-2xl text-gray-400 font-sans font-light tracking-widest uppercase mt-4 px-4 pb-12">
                            The Ghost in the Machine
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
