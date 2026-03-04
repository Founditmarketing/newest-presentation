import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Brain, XCircle, CheckCircle } from 'lucide-react';

export const Tactic2Slide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-12">
                    <div className="flex items-center gap-3 mb-3 text-brand-gold font-sans uppercase tracking-[0.2em] text-xs">
                        <Brain size={14} className="text-brand-gold" />
                        <span>Pillar 2</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-white">The AI Partner (The Concierge)</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-gold/10 p-[1px] mb-8">
                    {/* Old Way */}
                    <motion.div variants={itemVariants} className="bg-brand-black p-10 flex flex-col relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <h3 className="text-2xl font-serif text-gray-400">The Chatbot</h3>
                            <XCircle className="text-red-900" size={32} />
                        </div>
                        <ul className="space-y-5 text-gray-500 font-sans mt-auto relative z-10">
                            <li className="flex items-center gap-3 border-l-2 border-red-900/50 pl-4">Generic, scripted responses.</li>
                            <li className="flex items-center gap-3 border-l-2 border-red-900/50 pl-4">Frustrating logic loops.</li>
                            <li className="flex items-center gap-3 border-l-2 border-red-900/50 pl-4">Devalues the brand experience.</li>
                        </ul>
                    </motion.div>

                    {/* New Way */}
                    <motion.div variants={itemVariants} className="bg-brand-charcoal p-10 flex flex-col relative overflow-hidden border border-brand-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.05)]">
                        <div className="absolute -top-10 -right-10 p-4 opacity-5 pointer-events-none">
                            <Brain size={160} className="text-brand-gold" />
                        </div>

                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div>
                                <h3 className="text-3xl font-serif text-white mb-2">The Expert</h3>
                                <p className="text-brand-gold text-xs font-sans tracking-widest uppercase">24/7 Wardrobe Assistance</p>
                            </div>
                            <CheckCircle className="text-brand-gold" size={32} />
                        </div>

                        <div className="space-y-6 relative z-10 mt-auto">
                            <div className="bg-black/30 p-4 border-l-2 border-brand-gold">
                                <strong className="text-brand-gold block text-lg font-serif mb-2">The "Silver Canon"</strong>
                                <p className="text-gray-400 font-sans leading-relaxed text-sm">Trained exclusively on 50 years of your specific in-house sartorial wisdom. Not a robot, but a Senior Associate.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
};
