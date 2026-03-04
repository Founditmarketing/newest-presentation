import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Castle, TrendingUp } from 'lucide-react';

export const SolutionSlide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-3">Assets vs. Expenses</h2>
                    <p className="text-2xl text-brand-gold font-serif italic">
                        The Business Impact
                    </p>
                </motion.div>

                <motion.p variants={itemVariants} className="text-2xl text-gray-300 font-sans font-light mb-16 max-w-4xl border-l border-brand-gold pl-6 leading-relaxed">
                    You aren't paying for "Clicks" (Expenses). We are building an <strong className="text-brand-gold font-medium">"Estate" (Asset)</strong> that appreciates in value.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div variants={itemVariants} className="p-8 rounded-none border border-brand-gold/10 bg-brand-charcoal hover:bg-brand-charcoal/80 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-black border border-brand-gold/20 text-brand-gold">
                                <TrendingUp size={24} />
                            </div>
                            <h3 className="text-2xl font-serif text-white">The Legacy Multiplier</h3>
                        </div>
                        <p className="text-gray-400 font-sans text-sm leading-relaxed">
                            A highly-trained digital concierge doesn't just cut costs—it re-captures lost revenue daily by extending your store's hours infinitely without adding headcount.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="p-8 rounded-none border border-brand-gold/30 bg-brand-gold/5 shadow-[0_0_50px_rgba(212,175,55,0.05)] hover:bg-brand-gold/10 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-brand-gold text-black">
                                <Castle size={24} />
                            </div>
                            <h3 className="text-2xl font-serif text-brand-gold">Capital Investment</h3>
                        </div>
                        <p className="text-gray-300 font-sans text-sm leading-relaxed">
                            Reframing marketing from a leaky bucket into a compounding asset. Your digital estate works tirelessly, ensuring your sartorial excellence scales effortlessly across the region.
                        </p>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
};
