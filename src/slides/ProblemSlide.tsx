import React from 'react';
import { Slide } from '../components/Slide';
import { Heading, Text } from '../components/Typography';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';

export const ProblemSlide: React.FC = () => {
    return (
        <Slide className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
                <Heading level="h2" className="mb-6">
                    The Problem
                </Heading>
                <Heading level="h3" className="mb-8 text-gold-500">
                    "Vending Machine" Websites
                </Heading>

                <Text className="mb-6">
                    Most luxury businesses have websites that are cold, transactional, and impersonal.
                </Text>

                <Text subtle>
                    We are losing the handshake the moment a client goes online.
                    The digital experience fails to match the premium, white-glove service
                    you provide in person.
                </Text>
            </div>

            <div className="flex-1 order-1 md:order-2 flex justify-center">
                <motion.div
                    className="relative w-64 h-64 md:w-80 md:h-80 bg-charcoal-800 rounded-full flex items-center justify-center border border-charcoal-700"
                    initial={{ opacity: 0, rotate: -20 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="absolute inset-0 rounded-full border border-gold-500/20 animate-pulse"></div>
                    <Store size={80} className="text-charcoal-600" />

                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        <div className="w-full h-[1px] bg-red-500/50 rotate-45 absolute scale-110"></div>
                    </motion.div>
                </motion.div>
            </div>
        </Slide>
    );
};
