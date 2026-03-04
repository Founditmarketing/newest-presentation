import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Brain, XCircle, CheckCircle } from 'lucide-react';

export const Tactic2Slide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-12">
                    <div className="flex items-center gap-3 mb-3 text-brand-gold font-sans uppercase tracking-[0.2em] text-xs md:text-sm">
                        <span>IV. Monday Morning</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white">The AI-Powered CRM</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-gold/10 p-[1px] mb-8">
                    {/* The Re-engagement */}
                    <motion.div variants={itemVariants} className="bg-brand-black p-8 md:p-10 flex flex-col relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <h3 className="text-2xl font-serif text-gray-400">The Re-engagement</h3>
                        </div>
                        <ul className="space-y-5 text-gray-500 font-sans mt-auto relative z-10 text-sm md:text-base">
                            <li className="flex items-start gap-3 border-l-2 border-red-900/50 pl-4">"Mr. Smith hasn't bought a suit in 18 months..."</li>
                            <li className="flex items-start gap-3 border-l-2 border-red-900/50 pl-4">"...but he just spent 5 minutes looking at Navy Blazers."</li>
                            <li className="flex items-start gap-3 border-l-2 border-brand-gold/50 pl-4 text-gray-300">Action: Drafted SMS inviting him for a private fitting.</li>
                        </ul>
                    </motion.div>

                    {/* The Predictive Strike */}
                    <motion.div variants={itemVariants} className="bg-brand-charcoal p-8 md:p-10 flex flex-col relative overflow-hidden border border-brand-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.05)]">
                        <div className="absolute -top-10 -right-10 p-4 opacity-5 pointer-events-none">
                            <Brain size={160} className="text-brand-gold" />
                        </div>

                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div>
                                <h3 className="text-2xl font-serif text-white mb-2">The Predictive Strike</h3>
                                <p className="text-brand-gold text-xs font-sans tracking-widest uppercase">Clienteling at Scale</p>
                            </div>
                        </div>

                        <div className="space-y-6 relative z-10 mt-auto">
                            <div className="bg-black/30 p-4 border-l-2 border-brand-gold">
                                <strong className="text-brand-gold block text-lg font-serif mb-2">"Passing the Torch"</strong>
                                <p className="text-gray-400 font-sans leading-relaxed text-sm">Graduation is 60 days away. Identified 40 fathers with 18-year-old sons. Drafted custom emails suggesting a fitting for their son based on their past purchase history.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
};
