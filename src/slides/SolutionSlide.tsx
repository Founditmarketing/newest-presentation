import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Bot, Castle, Globe, Sparkles } from 'lucide-react';

export const SolutionSlide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-8">
                    <h2 className="font-serif text-5xl text-white mb-2">The Solution</h2>
                    <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white font-bold italic">
                        Digital Estates
                    </p>
                </motion.div>

                <motion.p variants={itemVariants} className="text-xl text-gray-300 font-light mb-10 max-w-3xl">
                    We don't build websites. We build <span className="text-white font-bold border-b-2 border-brand-orange/50">Intelligence Systems</span> that mirror your white-glove service.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants} className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-brand-orange/10 rounded-full text-brand-orange">
                                <Castle size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-white">Hospitality First</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            It welcomes, guides, and remembers. It's not just a digital brochure; it is a concierge that never sleeps.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-brand-orange/10 rounded-full text-brand-orange">
                                <Bot size={24} />
                            </div>
                            <h3 className="text-xl font-serif text-white">Intelligent Automation</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Leveraging AI data to handle the mundane, allowing you to focus on the high-value relationships.
                        </p>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
};
