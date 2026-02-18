import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { SlideLayout, itemVariants } from './SlideLayout';
import { motion } from 'framer-motion';
import Logo from './Logo';

export const LobbySlide: React.FC = () => {
    const joinUrl = window.location.href;

    return (
        <SlideLayout className="text-center">
            <div className="flex flex-col h-full justify-center items-center gap-8">
                <motion.div variants={itemVariants}>
                    <Logo className="text-3xl md:text-5xl mb-4" />
                    <h2 className="font-serif text-xl md:text-2xl text-white mb-2">Join the Session</h2>
                    <p className="text-gray-400">Scan to sync your device.</p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="p-4 bg-white rounded-xl shadow-[0_0_40px_rgba(255,102,0,0.3)] animate-pulse"
                >
                    <QRCodeSVG value={joinUrl} size={200} />
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-2 text-xs text-gray-500 font-mono uppercase tracking-widest">
                    <span>Room: Global</span>
                    <span>•</span>
                    <span>Latency: 20ms</span>
                </motion.div>
            </div>
        </SlideLayout>
    );
};
