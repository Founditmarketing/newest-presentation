import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { Crosshair, Map, User } from 'lucide-react';

export const Tactic1Slide: React.FC = () => {
    return (
        <SlideLayout>
            <div className="flex flex-col h-full justify-center">
                <motion.div variants={itemVariants} className="mb-12">
                    <div className="flex items-center gap-3 mb-3 text-brand-gold font-sans uppercase tracking-[0.2em] text-xs md:text-sm">
                        <span>III. The Interactive Demo</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white">Talk to Ted</h2>
                </motion.div>

                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 font-serif italic mb-12 border-l-2 border-brand-gold pl-6 max-w-4xl leading-relaxed">
                    "Notice the tone. That isn't a robot. <strong className="text-white font-medium not-italic">That’s Ted.</strong> It’s gracious. It’s authoritative. It’s capturing leads while we sit in this room."
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { label: "\"Can I wear an Ironman watch with a Canali suit?\"", desc: "Try to stump him on etiquette.", icon: User },
                        { label: "\"Why should I spend $4,000 on a Castangia shoulder?\"", desc: "Ask him to articulate value without being pushy.", icon: Crosshair },
                        { label: "\"I have a funeral at 2:00 PM and nothing fits.\"", desc: "Test the \"Plan B\" protocol.", icon: Map },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-brand-charcoal border border-brand-gold/10 p-8 flex flex-col items-start gap-6 hover:bg-brand-charcoal/80 hover:border-brand-gold/40 transition-all duration-300 group rounded-none"
                        >
                            <div className="w-12 h-12 bg-black border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors text-brand-gold group-hover:text-black">
                                <item.icon size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-brand-gold font-sans text-sm tracking-widest uppercase mb-2">{item.label}</h3>
                                <p className="text-gray-400 font-sans text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SlideLayout>
    );
};
