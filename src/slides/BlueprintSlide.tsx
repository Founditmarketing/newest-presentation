import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Map, TrendingUp, Users } from 'lucide-react';

export const BlueprintSlide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-8 border-b border-gray-800 pb-4">
                    <div className="text-brand-orange text-xs font-mono mb-1 tracking-widest uppercase">The Blueprint</div>
                    <h2 className="font-serif text-4xl text-white">Andrew Davis Clothiers</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl text-white font-light mb-2">The Goal</h3>
                            <p className="text-gray-400 leading-relaxed text-base">
                                Expanding from a local shop to a <strong className="text-white">Regional Destination</strong>.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl text-white font-light mb-2">The Strategy</h3>
                            <p className="text-gray-400 leading-relaxed text-base">
                                Capturing <strong className="text-brand-orange">"Drive-In Wealth"</strong> from Indianapolis using a digital concierge approach.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid gap-4">
                        <motion.div variants={itemVariants} className="flex items-center justify-between p-5 bg-white/5 rounded-xl border border-white/10">
                            <div className="flex items-center gap-3">
                                <Map size={20} className="text-gray-500" />
                                <span className="text-gray-300 text-sm uppercase tracking-wider">Reach</span>
                            </div>
                            <div className="text-white font-bold text-xl">Regional</div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center justify-between p-5 bg-brand-orange/10 rounded-xl border border-brand-orange/30">
                            <div className="flex items-center gap-3">
                                <TrendingUp size={20} className="text-brand-orange" />
                                <span className="text-gray-200 text-sm uppercase tracking-wider">Growth</span>
                            </div>
                            <div className="text-brand-orange font-bold text-xl">Exponential</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
};
