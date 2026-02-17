import React from 'react';
import { Slide } from '../components/Slide';
import { Heading, Text, AccentText } from '../components/Typography';
import { motion } from 'framer-motion';
import { Infinity as InfinityIcon, UserCheck, Calendar, Heart } from 'lucide-react';

export const Tactic3Slide: React.FC = () => {
    return (
        <Slide className="flex flex-col items-center text-center">
            <motion.div
                className="inline-flex items-center justify-center gap-2 mb-6 text-gold-500 border border-gold-500/30 px-4 py-1 rounded-full text-sm font-serif tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <InfinityIcon size={14} />
                <span>Tactic 3</span>
            </motion.div>

            <Heading level="h2" className="mb-4">
                The Infinite Handshake
            </Heading>

            <Heading level="h3" className="mb-12 text-cream-200 font-light max-w-2xl">
                Turning a transaction into a <AccentText>Lifetime Relationship</AccentText>.
            </Heading>

            <div className="relative w-full max-w-3xl h-[300px] flex items-center justify-between px-12">
                {/* Timeline Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-charcoal-700 -z-10"></div>

                {/* Steps */}
                {[
                    { icon: UserCheck, label: "The Transaction", sub: "Suit, Verdict, Closing" },
                    { icon: Calendar, label: "Automated Follow-up", sub: "30-60-90 Days" },
                    { icon: Heart, label: "Lifetime Value", sub: "Referrals & Loyalty" },
                ].map((step, index) => (
                    <motion.div
                        key={index}
                        className="relative flex flex-col items-center gap-4 bg-charcoal-900 p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (index * 0.2) }}
                    >
                        <div className="w-16 h-16 rounded-full bg-charcoal-800 border-2 border-gold-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                            <step.icon size={28} className="text-gold-500" />
                        </div>
                        <div className="text-center">
                            <h4 className="text-cream-100 font-serif text-lg">{step.label}</h4>
                            <span className="text-charcoal-400 text-sm block mt-1">{step.sub}</span>
                        </div>

                        {/* Connecting line animation */}
                        {index < 2 && (
                            <motion.div
                                className="absolute top-[2rem] left-[50%] h-0.5 bg-gold-500 z-0 origin-left"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                style={{ width: '200px' }} // Approximate distance
                                transition={{ delay: 0.8 + (index * 0.2), duration: 0.5 }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
};
