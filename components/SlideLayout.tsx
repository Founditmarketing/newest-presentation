import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.8,
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
      stiffness: 70, // Softer spring
      damping: 20,   // More drag/weight
      mass: 1.5      // Heavier feel
    }
  },
  exit: { opacity: 0, y: -20, filter: "blur(5px)" }
};

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`w-full max-w-5xl mx-auto px-6 h-full flex flex-col justify-center relative z-10 ${className}`}
    >
      {/* 
         We could add a subtle parallax parallax layer here if we wanted deeper depth 
         but we'll keep it clean for now as requested.
      */}
      {children}
    </motion.div>
  );
};