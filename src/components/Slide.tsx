import React from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
    children: React.ReactNode;
    className?: string;
}

export const Slide: React.FC<SlideProps> = ({ children, className = '' }) => {
    return (
        <motion.div
            className={`w-full max-w-6xl mx-auto h-full flex flex-col justify-center ${className}`}
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};
