import React from 'react';
import { Slide } from '../components/Slide';
import { Heading, Text } from '../components/Typography';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ConclusionSlide: React.FC = () => {
    return (
        <Slide className="text-center flex flex-col justify-center h-full">
            <Heading level="h2" className="mb-8 leading-snug">
                You have mastered the <br />
                <span className="text-charcoal-400">physical relationship.</span>
            </Heading>

            <Heading level="h1" className="mb-16">
                Let me build your <br />
                <span className="text-gold-500">Digital One.</span>
            </Heading>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col items-center gap-6"
            >
                <div className="w-20 h-20 rounded-full bg-charcoal-800 border border-charcoal-600 flex items-center justify-center mb-2 overflow-hidden">
                    {/* Placeholder for Trevor's Headshot if available, otherwise Initials */}
                    <span className="font-serif text-2xl text-gold-500">TR</span>
                </div>

                <div className="space-y-1">
                    <p className="text-cream-100 font-serif text-xl tracking-wide">Trevor Ruby</p>
                    <p className="text-charcoal-500 text-sm tracking-widest uppercase">Found It Marketing</p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold tracking-wide rounded-sm flex items-center gap-3 hover:bg-gold-400 transition-colors"
                >
                    Start the Conversation <ArrowRight size={20} />
                </motion.button>
            </motion.div>
        </Slide>
    );
};
