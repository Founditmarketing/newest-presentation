import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Infinity as InfinityIcon, UserCheck, Calendar, Heart } from 'lucide-react';

export const Tactic3Slide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="flex items-center gap-2 mb-2 text-brand-orange font-mono uppercase tracking-widest text-xs">
                        <InfinityIcon size={14} /> Tactic 3
                    </div>
                    <h2 className="font-serif text-5xl text-white">The Infinite Handshake</h2>
                </motion.div>

                <motion.p variants={itemVariants} className="text-xl text-gray-300 font-light mb-12">
                    Turning a transaction into a <span className="text-white font-bold border-b border-brand-orange">Lifetime Relationship</span>.
                </motion.p>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-8 left-0 w-full h-0.5 bg-gray-800 -z-10 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: UserCheck, label: "The Transaction", sub: "Suit, Verdict, Closing" },
                            { icon: Calendar, label: "Automated Follow-up", sub: "30-60-90 Days" },
                            { icon: Heart, label: "Lifetime Value", sub: "Referrals & Loyalty" },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center bg-black/40 p-6 rounded-xl border border-white/5 backdrop-blur-sm"
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-900 border border-brand-orange/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,102,0,0.15)] z-10">
                                    <step.icon size={28} className="text-brand-orange" />
                                </div>
                                <h4 className="text-white font-serif text-lg mb-2">{step.label}</h4>
                                <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">{step.sub}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
};
