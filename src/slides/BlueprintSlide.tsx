import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const TED_URL = 'https://www.weissgoldring.com/';

export const BlueprintSlide: React.FC = () => {
    return (
        <SlideLayout className="text-center">
            <div className="flex flex-col h-full justify-center items-center gap-8">
                <motion.div variants={itemVariants} className="mb-2">
                    <div className="text-brand-gold text-xs font-sans mb-3 tracking-[0.2em] uppercase">III. The Reveal</div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                        Talk to <span className="text-brand-gold italic">Ted.</span>
                    </h2>
                    <p className="mt-4 text-gray-400 font-sans text-base md:text-lg font-light max-w-lg mx-auto">
                        Pull out your phone. Open the link. Try to stump him.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <a
                        href={TED_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 px-12 py-5 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black hover:shadow-[0_0_40px_rgba(193,163,98,0.4)] transition-all duration-500 uppercase tracking-[0.2em] font-sans text-sm font-bold"
                    >
                        <ExternalLink size={18} />
                        <span>Talk to Ted</span>
                    </a>
                    <p className="mt-3 text-gray-600 font-mono text-xs">weissgoldring.com</p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                    <p className="text-brand-gold text-xs tracking-widest uppercase">Ask him anything:</p>
                    <p className="text-gray-400 font-sans italic text-sm">"Can I wear brown shoes with a black suit?"</p>
                    <p className="text-gray-400 font-sans italic text-sm">"Why spend $4,000 on a Castangia suit?"</p>
                    <p className="text-gray-400 font-sans italic text-sm">"What is the rule of the Green Stamp?"</p>
                </motion.div>
            </div>
        </SlideLayout>
    );
};
