import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, Minimize2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface PresentationLayoutProps {
    children: React.ReactNode;
    currentSlide: number;
    totalSlides: number;
    nextSlide: () => void;
    prevSlide: () => void;
}

export const PresentationLayout: React.FC<PresentationLayoutProps> = ({
    children,
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
}) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <div className="relative w-full h-screen bg-charcoal-900 text-cream-100 overflow-hidden font-sans selection:bg-gold-500 selection:text-charcoal-900">
            {/* Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise mix-blend-overlay"></div>

            {/* Ambient Gradient */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-slate-800 blur-[150px] opacity-30 rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold-600 blur-[150px] opacity-10 rounded-full pointer-events-none"></div>

            {/* Main Content Area */}
            <main className="relative z-10 w-full h-full flex items-center justify-center p-8 md:p-16 lg:p-24">
                <AnimatePresence mode="wait">
                    {children}
                </AnimatePresence>
            </main>

            {/* Controls / Progress */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end z-50 pointer-events-none">

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-charcoal-700 w-full">
                    <motion.div
                        className="h-full bg-gold-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>

                {/* Slide Counter */}
                <div className="text-charcoal-500 font-serif italic text-sm pointer-events-auto">
                    {currentSlide + 1} <span className="text-gold-500">/</span> {totalSlides}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 pointer-events-auto text-cream-200">
                    <button
                        onClick={toggleFullscreen}
                        className="p-2 hover:text-gold-400 transition-colors"
                        aria-label="Toggle Fullscreen"
                    >
                        {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </button>
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="p-2 hover:text-gold-400 transition-colors disabled:opacity-30 disabled:hover:text-cream-200"
                        aria-label="Previous Slide"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides - 1}
                        className="p-2 hover:text-gold-400 transition-colors disabled:opacity-30 disabled:hover:text-cream-200"
                        aria-label="Next Slide"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>

            {/* Logo / Brand Watermark (Optional) */}
            <div className="absolute top-6 left-8 z-50 pointer-events-none">
                <div className="text-sm font-serif tracking-widest text-gold-500 uppercase opacity-80">
                    Trevor Ruby
                </div>
            </div>

        </div>
    );
};
