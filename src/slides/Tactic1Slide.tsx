import React from 'react';
import { Slide } from '../components/Slide';
import { Heading, Text } from '../components/Typography';
import { motion } from 'framer-motion';
import { Target, MapPin } from 'lucide-react';

export const Tactic1Slide: React.FC = () => {
    return (
        <Slide className="text-center">
            <motion.div
                className="inline-flex items-center justify-center gap-2 mb-8 text-gold-500 border border-gold-500/30 px-4 py-1 rounded-full text-sm font-serif tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Target size={14} />
                <span>Tactic 1</span>
            </motion.div>

            <Heading level="h2" className="mb-4">
                Geo-Fencing
            </Heading>

            <Heading level="h3" className="mb-12 text-cream-200 font-light max-w-2xl mx-auto">
                "We don't wait for them to search; <br />we go where they live."
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                    { label: "Country Clubs", delay: 0.4 },
                    { label: "Alumni Events", delay: 0.6 },
                    { label: "Charity Galas", delay: 0.8 },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.delay }}
                        className="p-6 bg-charcoal-800 border border-charcoal-700 hover:border-gold-500/50 transition-colors group rounded-xl flex flex-col items-center gap-4"
                    >
                        <div className="w-12 h-12 bg-charcoal-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="text-gold-500" size={20} />
                        </div>
                        <span className="text-cream-100 font-serif tracking-wide">{item.label}</span>
                    </motion.div>
                ))}
            </div>

            <Text subtle className="mt-12 max-w-2xl mx-auto text-sm">
                Digitally fencing high-net-worth locations ensures we are speaking directly to your peer group, before they even realize they need you.
            </Text>
        </Slide>
    );
};
