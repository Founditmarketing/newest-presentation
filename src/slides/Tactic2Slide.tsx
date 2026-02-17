import React from 'react';
import { Slide } from '../components/Slide';
import { Heading, Text, AccentText } from '../components/Typography';
import { motion } from 'framer-motion';
import { Cpu, XCircle, CheckCircle } from 'lucide-react';

export const Tactic2Slide: React.FC = () => {
    return (
        <Slide className="flex flex-col items-center">
            <motion.div
                className="inline-flex items-center justify-center gap-2 mb-6 text-gold-500 border border-gold-500/30 px-4 py-1 rounded-full text-sm font-serif tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Cpu size={14} />
                <span>Tactic 2</span>
            </motion.div>

            <Heading level="h2" className="mb-8">
                The AI Expert
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
                {/* The Old Way */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-charcoal-800/30 border border-charcoal-700 p-8 rounded-2xl relative overflow-hidden"
                >
                    <div className="absolute top-4 right-4 text-red-900/40">
                        <XCircle size={100} />
                    </div>
                    <h3 className="text-2xl font-serif text-charcoal-400 mb-4 relative z-10">The Chatbot</h3>
                    <ul className="space-y-3 text-charcoal-400 text-sm relative z-10">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-900 rounded-full" /> Generic responses</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-900 rounded-full" /> Frustrating loop</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-900 rounded-full" /> "Please contact support"</li>
                    </ul>
                </motion.div>

                {/* The New Way */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-b from-charcoal-800 to-charcoal-900 border border-gold-500/30 p-8 rounded-2xl relative overflow-hidden"
                >
                    <div className="absolute top-4 right-4 text-gold-500/10">
                        <CheckCircle size={100} />
                    </div>
                    <h3 className="text-2xl font-serif text-gold-400 mb-4 relative z-10">The AI Concierge</h3>
                    <ul className="space-y-4 text-cream-100 relative z-10">
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-gold-500 mt-1 shrink-0" />
                            <span className="text-sm">
                                <strong>Sartorial Advisor:</strong> Knows every fabric, cut, and style history.
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-gold-500 mt-1 shrink-0" />
                            <span className="text-sm">
                                <strong>Intake Specialist:</strong> Qualifies cases 24/7 with legal precision.
                            </span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Slide>
    );
};
