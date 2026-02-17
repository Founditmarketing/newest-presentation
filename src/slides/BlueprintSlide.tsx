import React from 'react';
import { Slide } from '../components/Slide';
import { Heading, Text, AccentText } from '../components/Typography';
import { motion } from 'framer-motion';
import { Map, TrendingUp } from 'lucide-react';

export const BlueprintSlide: React.FC = () => {
    return (
        <Slide className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-4 text-gold-500 font-serif italic border-b border-gold-500/30 pb-1">
                    <Map size={18} />
                    <span>Case Study</span>
                </div>

                <Heading level="h2" className="mb-2">
                    The Blueprint
                </Heading>

                <Heading level="h3" className="mb-8 text-cream-200 opacity-80">
                    Andrew Davis Clothiers
                </Heading>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-gold-400 font-serif text-lg mb-1">The Goal</h4>
                        <Text className="text-sm">
                            Expanding from a local shop to a <AccentText>Regional Destination</AccentText>.
                        </Text>
                    </div>

                    <div>
                        <h4 className="text-gold-400 font-serif text-lg mb-1">The Strategy</h4>
                        <Text className="text-sm">
                            Capturing "Drive-In Wealth" from Indianapolis using a digital concierge approach.
                        </Text>
                    </div>
                </div>
            </div>

            <div className="flex-1 relative">
                {/* Abstract visual of growth/connection */}
                <div className="relative z-10 p-8 bg-charcoal-800/80 backdrop-blur-sm border border-charcoal-600 rounded-lg">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-500 border border-gold-500/20">
                            1
                        </div>
                        <div>
                            <h5 className="text-cream-100 font-bold mb-1">Local Reach</h5>
                            <div className="text-xs text-charcoal-400">Restricted by geography</div>
                        </div>
                    </div>

                    <div className="w-0.5 h-8 bg-charcoal-600 ml-6 -my-2"></div>

                    <div className="flex items-start gap-4 mt-6">
                        <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-charcoal-900 font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <h5 className="text-white font-bold mb-1">Regional Dominance</h5>
                            <div className="text-xs text-cream-200/70">Powered by Digital Estates</div>
                        </div>
                    </div>
                </div>

                {/* Decorative background elements */}
                <motion.div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-gold-600/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </Slide>
    );
};
