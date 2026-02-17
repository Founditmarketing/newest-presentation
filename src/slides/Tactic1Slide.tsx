import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Target, MapPin, Building2, GraduationCap, Wine } from 'lucide-react';

export const Tactic1Slide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="flex items-center gap-2 mb-2 text-brand-orange font-mono uppercase tracking-widest text-xs">
                        <Target size={14} /> Tactic 1
                    </div>
                    <h2 className="font-serif text-5xl text-white">Geo-Fencing</h2>
                </motion.div>

                <motion.p variants={itemVariants} className="text-xl text-gray-300 font-light mb-10 max-w-3xl">
                    "We don't wait for them to search; <span className="text-white font-bold">we go where they live.</span>"
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "Country Clubs", icon: Wine },
                        { label: "Alumni Events", icon: GraduationCap },
                        { label: "Charity Galas", icon: Building2 },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-4 hover:bg-white/10 hover:border-brand-orange/30 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black transition-colors text-gray-400">
                                <item.icon size={24} />
                            </div>
                            <span className="text-white font-serif tracking-wide text-lg">{item.label}</span>
                            <div className="text-xs text-gray-500 font-mono flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <MapPin size={10} /> TARGET ACTIVE
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
};
