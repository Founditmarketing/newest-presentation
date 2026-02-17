import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Store, AlertTriangle } from 'lucide-react';

export const ProblemSlide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center gap-12">
                <motion.div variants={itemVariants} className="text-center md:text-left">
                    <div className="inline-block p-2 rounded-lg bg-red-900/20 text-red-500 mb-4 border border-red-900/30">
                        <AlertTriangle size={24} />
                    </div>
                    <h2 className="font-serif text-5xl text-white mb-4">
                        The Problem
                    </h2>
                    <p className="text-2xl text-gray-400 font-light">
                        Most luxury businesses have <span className="text-white font-bold">"Vending Machine"</span> websites.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* The Void */}
                    <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-2xl opacity-50 grayscale">
                        <div className="flex flex-col items-center text-center gap-4">
                            <Store size={48} className="text-gray-600" />
                            <div>
                                <h3 className="text-xl text-gray-400 font-serif mb-2">Cold & Transactional</h3>
                                <p className="text-sm text-gray-600 font-mono uppercase tracking-widest">
                                    No Handshake. No Guidance.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Statement */}
                    <motion.div variants={itemVariants} className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-orange to-transparent"></div>
                        <p className="text-xl md:text-2xl text-white leading-relaxed font-serif pl-6">
                            "We are losing the handshake the moment a client goes online."
                        </p>
                        <p className="text-sm text-gray-500 font-mono uppercase tracking-widest pl-6 mt-4">
                            System Failure
                        </p>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
};
