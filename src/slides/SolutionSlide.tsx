import React from 'react';
import { Slide } from '../components/Slide';
import { Heading, Text, AccentText } from '../components/Typography';
import { motion } from 'framer-motion';
import { Bot, Castle } from 'lucide-react';

export const SolutionSlide: React.FC = () => {
    return (
        <Slide className="text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 inline-flex p-4 rounded-full bg-charcoal-800 border border-gold-500/30"
            >
                <Castle size={32} className="text-gold-500" />
            </motion.div>

            <Heading level="h2" className="mb-4">
                The Solution
            </Heading>

            <Heading level="h1" className="mb-12">
                We Don't Build Websites. <br />
                We Build <span className="text-gold-400">Digital Estates</span>.
            </Heading>

            <div className="max-w-3xl mx-auto space-y-6">
                <Text>
                    A system that uses <AccentText>Data and AI</AccentText> to mirror the white-glove service you provide in person.
                </Text>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
                    <motion.div
                        className="p-6 bg-charcoal-800/50 border border-charcoal-700 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h4 className="text-gold-400 font-serif text-xl mb-2">Hospitality First</h4>
                        <p className="text-cream-200 text-sm leading-relaxed">
                            It welcomes, guides, and remembers. It's not just a brochure; it's a concierge.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-charcoal-800/50 border border-charcoal-700 rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h4 className="text-gold-400 font-serif text-xl mb-2">Intelligent Automation</h4>
                        <p className="text-cream-200 text-sm leading-relaxed">
                            Leveraging AI to handle the mundane, so you can focus on the meaningful.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
};
