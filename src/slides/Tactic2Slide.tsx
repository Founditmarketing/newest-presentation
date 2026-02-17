import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Cpu, XCircle, CheckCircle } from 'lucide-react';

export const Tactic2Slide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="flex items-center gap-2 mb-2 text-brand-orange font-mono uppercase tracking-widest text-xs">
                        <Cpu size={14} /> Tactic 2
                    </div>
                    <h2 className="font-serif text-5xl text-white">The AI Expert</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Old Way */}
                    <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 rounded-xl opacity-50 grayscale flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-serif text-gray-400">The Chatbot</h3>
                            <XCircle className="text-red-900" size={32} />
                        </div>
                        <ul className="space-y-4 text-gray-500 text-sm mt-auto">
                            <li className="flex items-center gap-2 border-l-2 border-red-900/50 pl-3">Generic responses</li>
                            <li className="flex items-center gap-2 border-l-2 border-red-900/50 pl-3">Frustrating loops</li>
                        </ul>
                    </motion.div>

                    {/* New Way */}
                    <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900 to-black border border-brand-orange/50 p-6 rounded-xl shadow-[0_0_30px_rgba(255,102,0,0.1)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Cpu size={100} className="text-brand-orange" />
                        </div>

                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <h3 className="text-2xl font-serif text-white">The AI Concierge</h3>
                            <CheckCircle className="text-brand-orange" size={32} />
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div>
                                <strong className="text-brand-orange block text-lg font-serif mb-1">Sartorial Advisor</strong>
                                <p className="text-gray-400 text-sm">Knows every fabric, cut, and style history.</p>
                            </div>
                            <div>
                                <strong className="text-brand-orange block text-lg font-serif mb-1">Intake Specialist</strong>
                                <p className="text-gray-400 text-sm">Qualifies cases 24/7 with legal precision.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SlideLayout>
    );
};
