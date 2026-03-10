import React from 'react';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';

const TED_URL = 'https://weiss-goldring-vercel.vercel.app/';

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
                        Pull out your phone. Scan the code. Try to stump him.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="p-4 bg-white rounded-xl shadow-[0_0_60px_rgba(193,163,98,0.25)]"
                >
                    <QRCodeSVG value={TED_URL} size={220} />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2 text-sm text-gray-500 font-mono">
                    <p className="text-brand-gold text-xs tracking-widest uppercase">Ask him anything:</p>
                    <p className="text-gray-400 italic">"Can I wear brown shoes with a black suit?"</p>
                    <p className="text-gray-400 italic">"Why spend $4,000 on a Castangia suit?"</p>
                    <p className="text-gray-400 italic">"What is the rule of the Green Stamp?"</p>
                </motion.div>
            </div>
        </SlideLayout>
    );
};
