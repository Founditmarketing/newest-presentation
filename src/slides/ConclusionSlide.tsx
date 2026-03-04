import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';
import Logo from '@/components/Logo';

export const ConclusionSlide: React.FC = () => {
    return (
        <SlideLayout className="text-center relative">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-brand-charcoal opacity-40 mix-blend-multiply filter-editorial bg-[url('https://images.unsplash.com/photo-1594938298596-f308feefe293?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center scale-105 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/90 to-transparent z-[1] backdrop-blur-[1px]"></div>
            </div>

            <div className="flex flex-col h-full justify-center items-center relative z-10">
                <motion.div variants={itemVariants} className="mb-8">
                    <Logo className="text-4xl md:text-6xl text-brand-gold mb-8 mx-auto" />
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight px-4">
                        The 90-Day Roadmap &<br />The Big Ask
                    </h2>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-16 flex justify-center text-left">
                    <ul className="text-lg md:text-xl text-gray-300 font-sans font-light max-w-xl space-y-4 px-4">
                        <li className="flex items-center gap-4"><strong className="text-brand-gold tracking-widest uppercase text-sm w-24 shrink-0">Day 1-30:</strong> <span>The Neural Backup (Voice Cloning)</span></li>
                        <li className="flex items-center gap-4"><strong className="text-brand-gold tracking-widest uppercase text-sm w-24 shrink-0">Day 31-60:</strong> <span>The Concierge (Live on site)</span></li>
                        <li className="flex items-center gap-4"><strong className="text-brand-gold tracking-widest uppercase text-sm w-24 shrink-0">Day 61-90:</strong> <span>The Strike (Predictive sales)</span></li>
                    </ul>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center gap-8"
                >
                    <a
                        href="https://api.leadconnectorhq.com/widget/form/mZfI93H8OaAh1tA6aV9P"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-4 px-12 py-5 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500 rounded-none uppercase tracking-[0.2em] font-sans text-sm font-bold"
                    >
                        <Lock size={18} />
                        <span>Initiate Strategy</span>
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>

                    <div className="flex flex-col items-center mt-12 space-y-3 opacity-80">
                        <p className="text-white font-serif text-xl tracking-wide">Trevor Ruby</p>
                        <p className="text-brand-gold text-xs tracking-[0.3em] uppercase font-sans">Architected by Data &mdash; We Build Empires</p>
                    </div>
                </motion.div>
            </div>
        </SlideLayout>
    );
};
