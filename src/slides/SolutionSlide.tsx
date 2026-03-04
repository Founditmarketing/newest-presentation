import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Castle, TrendingUp } from 'lucide-react';

export const SolutionSlide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="font-sans text-xs md:text-sm tracking-[0.3em] text-brand-gold uppercase mb-4">
                        II. The Fear
                    </h2>
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
                        AI as your "JARVIS"
                    </h3>
                </motion.div>

                <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-300 font-sans font-light mb-16 max-w-4xl border-l-2 border-brand-gold pl-6 leading-relaxed">
                    You're worried AI makes your business cold. It's the exact opposite. AI is the most <strong className="text-white font-medium">"High-Touch"</strong> tool ever invented because it never forgets, never sleeps, and has no ego.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div variants={itemVariants} className="p-8 rounded-none border border-brand-gold/10 bg-brand-charcoal hover:bg-brand-charcoal/80 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-black border border-brand-gold/20 text-brand-gold">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-2xl font-serif text-white">The Hero</h3>
                        </div>
                        <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
                            Think of Tony Stark. He is the hero, the genius, the craftsman. But he has JARVIS. JARVIS doesn't replace the hero.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="p-8 rounded-none border border-brand-gold/30 bg-brand-gold/5 shadow-[0_0_50px_rgba(212,175,55,0.05)] hover:bg-brand-gold/10 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-brand-gold text-black">
                                <Castle size={24} />
                            </div>
                            <h3 className="text-2xl font-serif text-brand-gold">The Scale</h3>
                        </div>
                        <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
                            JARVIS allows the hero to scale. We take your 'Rules of the House' and inject them into the machine so you can provide 'Silver-Level' service to 500 people as easily as you do for one.
                        </p>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
};
