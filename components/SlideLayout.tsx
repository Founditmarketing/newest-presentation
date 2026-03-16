import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const NoiseOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-30 h-full w-full opacity-[0.03]">
    <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] // "Expo Out" - Heavy start, smooth heavy stop
    }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    filter: "blur(10px)",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100, // Adjusted for Harmonious Cascade
      damping: 25,    // Smoother stop
      mass: 1.2       // Slightly lighter but still authoritative
    }
  },
  exit: { opacity: 0, y: -20, filter: "blur(5px)" }
};

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = "" }) => {
  return (
    <>
      <NoiseOverlay />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`w-full max-w-5xl mx-auto px-6 min-h-full flex flex-col justify-center relative z-10 ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
};