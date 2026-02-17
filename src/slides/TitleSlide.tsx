import React from 'react';
import { Slide } from '../components/Slide';
import { Heading, Text, AccentText } from '../components/Typography';
import { motion } from 'framer-motion';

export const TitleSlide: React.FC = () => {
    return (
        <Slide className="text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8"
            >
                <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
            </motion.div>

            <Heading level="h1" className="mb-6">
                The Digital <br />
                <span className="text-gold-400">Concierge</span>
            </Heading>

            <Heading level="h3" className="mb-12 text-cream-200 font-light" delay={0.2}>
                Scaling <AccentText>High-Touch Relationships</AccentText> <br />
                in an Automating World.
            </Heading>

            <Text delay={0.4} className="text-sm tracking-widest uppercase opacity-70">
                Presented by <span className="text-gold-500 font-bold">Trevor Ruby</span>
            </Text>
        </Slide>
    );
};
