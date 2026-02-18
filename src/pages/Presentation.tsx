import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ChevronRight,
    ChevronLeft,
    FileText,
    X,
    Brain,
    Target,
    Mail,
    Globe,
    Search,
    Sparkles,
    MapPin,
    ScanLine,
    CheckCircle2,
    Loader2,
    Zap,
    Users,
    Radio,
} from 'lucide-react';
import Logo from '@/components/Logo';
import { SlideLayout, itemVariants } from '@/components/SlideLayout';
import { SlideData } from '@/types';
import { useSync } from '@/components/SyncProvider';
import { LobbySlide } from '@/components/LobbySlide';
import { TitleSlide } from '@/src/slides/TitleSlide';
import { ProblemSlide } from '@/src/slides/ProblemSlide';
import { SolutionSlide } from '@/src/slides/SolutionSlide';
import { BlueprintSlide } from '@/src/slides/BlueprintSlide';
import { Tactic1Slide } from '@/src/slides/Tactic1Slide';
import { Tactic2Slide } from '@/src/slides/Tactic2Slide';
import { Tactic3Slide } from '@/src/slides/Tactic3Slide';
import { ConclusionSlide } from '@/src/slides/ConclusionSlide';

// Line 27: import Logo ...
// Line 39: ...
// I need to check App.tsx imports again carefully.
// App.tsx line 99 uses <Magnetic>. 
// But where is it imported?
// Looking at App.tsx file content from Step 6...
// Line 27: import Logo from './components/Logo';
// Line 28: import { SlideLayout, itemVariants } from './components/SlideLayout';
// ...
// I don't see `import Magnetic` in the top imports in the snippet I saw?
// Ah, `import { Magnetic } from './components/Magnetic';` might have been missed or I missed it.
// Let me double check the file content of App.tsx in Step 6.
// I see imports lines 1-36.
// I see `import { Magnetic }` is NOT there! 
// Wait, line 16 has `MapPin, S`. Typo in my view or file? 
// And line 99 uses `<Magnetic>`.
// If it's not imported, `App.tsx` would fail to compile?
// Maybe it was imported and I missed it in the block?
// Or maybe it is `import Magnetic from './components/Magnetic'`?
// ADDITIONAL_METADATA says: `components/Magnetic.tsx`.
// I should make sure to import it. I'll add `import Magnetic from '@/components/Magnetic';`
// or `import { Magnetic }` depending on export.
// I'll assume default export or named. I'll check `Magnetic.tsx` content if I can, or just guess based on usage.
// Usage: `<Magnetic>...</Magnetic>` implies it's a component.
// I'll add the import.

// --- HELPER COMPONENTS ---

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;
        let i = 0;
        setDisplayedText(""); // Ensure clean start
        const interval = setInterval(() => {
            i++;
            setDisplayedText(text.substring(0, i));
            if (i >= text.length) clearInterval(interval);
        }, 25);
        return () => clearInterval(interval);
    }, [text, started]);

    return (
        <span className="font-mono text-gray-300">
            {displayedText}
            <span className="animate-pulse inline-block w-1.5 h-4 bg-brand-orange ml-0.5 align-middle"></span>
        </span>
    );
};

// --- SLIDE COMPONENTS ---

// --- SLIDE COMPONENTS ---

const FoundItStatsSlide: React.FC = () => (
    <SlideLayout>
        <div className="flex flex-col h-full justify-center">
            <motion.div variants={itemVariants} className="mb-8 border-b border-brand-orange/30 pb-6">
                <Logo className="text-4xl md:text-6xl mb-4" />
                <h2 className="font-serif text-2xl md:text-3xl text-gray-300 italic">
                    "We don't do campaigns. <br /><span className="text-white font-bold not-italic">We build empires.</span>"
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div variants={itemVariants}>
                    <div className="flex flex-col">
                        <span className="text-3xl md:text-4xl font-bold text-white">280,000+</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Leads & Interactions</span>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <div className="flex flex-col">
                        <span className="text-3xl md:text-4xl font-bold text-white">$2.3B+</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Client Revenue</span>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <div className="flex flex-col">
                        <span className="text-3xl md:text-4xl font-bold text-white">$560M+</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Organic Revenue</span>
                    </div>
                </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-8 flex items-center justify-between text-[10px] text-gray-600 font-mono uppercase tracking-widest px-2">
                <span>Sync Delta: 0.02ms</span>
                <span>Architected by Data</span>
            </motion.div>
        </div>
    </SlideLayout>
);



// --- MAIN DATA ---

const slides: SlideData[] = [
    {
        id: 'lobby',
        component: LobbySlide,
        notes: [
            "Welcome: 'Scan the QR code to join the session. I will be controlling your screens from here.'",
            "Setup: 'Wait for audience to join.'"
        ]
    },
    {
        id: 'intro',
        component: FoundItStatsSlide,
        notes: [
            "Philosophy: 'We don't view ourselves as a vendor. A vendor sells you a service. We build empires.'",
            "Stats: 'We have generated over $500 Million in revenue for our clients. We serve businesses in 48 states.'",
            "Retention: 'The average agency keeps a client for 8 months. Our partners stay for over 5 years. Why? Because we make them money.'"
        ]
    },

    // --- The Digital Concierge Model ---
    {
        id: 'concierge-title',
        component: TitleSlide,
        notes: [
            "Intro: 'The Digital Concierge. Scaling High-Touch Relationships in an Automating World.'",
            "Context: 'Presented by Trevor Ruby.'"
        ]
    },
    {
        id: 'concierge-problem',
        component: ProblemSlide,
        notes: [
            "Problem: 'Most luxury businesses have vending machine websites. Cold. Transactional.'",
            "Pain: 'We are losing the handshake the moment a client goes online.'"
        ]
    },
    {
        id: 'concierge-solution',
        component: SolutionSlide,
        notes: [
            "Solution: 'We don't build websites. We build Digital Estates.'",
            "Concept: 'Using Data and AI to mirror your white-glove service.'"
        ]
    },
    {
        id: 'concierge-blueprint',
        component: BlueprintSlide,
        notes: [
            "Case Study: 'Andrew Davis Clothiers.'",
            "Goal: 'Expanding from local shop to Regional Destination. Capturing Drive-In Wealth.'"
        ]
    },
    {
        id: 'concierge-tactic1',
        component: Tactic1Slide,
        notes: [
            "Geo-Fencing: 'Digitally fencing high-net-worth locations like Country Clubs.'",
            "Quote: 'We don't wait for them to search; we go where they live.'"
        ]
    },
    {
        id: 'concierge-tactic2',
        component: Tactic2Slide,
        notes: [
            "AI Expert: 'Contrast Chatbot vs AI Concierge.'",
            "Detail: 'Sartorial Advisor knowing every fabric vs generic support.'"
        ]
    },
    {
        id: 'concierge-tactic3',
        component: Tactic3Slide,
        notes: [
            "Lifecycle: 'Turning a one-time transaction into a lifetime relationship.'",
            "Method: 'Automated, personalized follow-up.'"
        ]
    },
    {
        id: 'concierge-conclusion',
        component: ConclusionSlide,
        notes: [
            "Conclusion: 'You have mastered the physical relationship.'",
            "Ask: 'Let me build your digital one.'"
        ]
    }
];

const PresentationContent = () => {
    const { currentSlide, isHost, setSlide, becomeHost, isConnected } = useSync();
    const [showNotes, setShowNotes] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const nextSlide = useCallback(() => {
        if (currentSlide + 1 < slides.length) {
            setSlide(currentSlide + 1);
        }
    }, [currentSlide, setSlide]);

    const prevSlide = useCallback(() => {
        if (currentSlide - 1 >= 0) {
            setSlide(currentSlide - 1);
        }
    }, [currentSlide, setSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Secret Host Toggle
            if (e.key === 'h' || e.key === 'H') {
                becomeHost();
                return;
            }

            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'n') {
                setShowNotes(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, becomeHost]);

    // Touch navigation
    const minSwipeDistance = 50;
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();
    };

    // Long press handler for Logo to toggle Host Mode
    const [pressTimer, setPressTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

    const handleLogoTouchStart = () => {
        const timer = setTimeout(() => {
            becomeHost();
        }, 2000);
        setPressTimer(timer);
    };

    const handleLogoTouchEnd = () => {
        if (pressTimer) clearTimeout(pressTimer);
    };

    const CurrentComponent = slides[currentSlide].component;
    const progress = ((currentSlide + 1) / slides.length) * 100;

    return (
        <div
            className="relative w-full h-[100dvh] bg-black overflow-hidden font-sans text-slate-200"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Background System */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>

            {/* Header */}
            <header className="absolute top-0 left-0 w-full p-4 z-30 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <div
                    className="pointer-events-auto select-none cursor-pointer active:scale-95 transition-transform"
                    onMouseDown={handleLogoTouchStart}
                    onMouseUp={handleLogoTouchEnd}
                    onTouchStart={handleLogoTouchStart}
                    onTouchEnd={handleLogoTouchEnd}
                >
                    <Logo className="text-xl opacity-90" />
                    {isHost && <div className="text-[9px] text-brand-orange font-mono uppercase tracking-widest mt-1 animate-pulse">Host Mode Active</div>}
                    {!isHost && isConnected && <div className="text-[9px] text-green-500 font-mono uppercase tracking-widest mt-1">Live Sync</div>}
                </div>
                <div className="flex gap-2 pointer-events-auto">
                    {isHost && (
                        <div className="p-2 rounded-full bg-brand-orange/20 border border-brand-orange text-brand-orange">
                            <Radio size={20} className="animate-pulse" />
                        </div>
                    )}

                    <button
                        onClick={() => setShowNotes(!showNotes)}
                        className={`p-2 rounded-full transition-colors backdrop-blur-md border border-white/5 ${showNotes ? 'bg-brand-orange text-black' : 'bg-black/40 text-gray-500 hover:text-white'}`}
                        title="Speaker Notes"
                    >
                        <FileText size={20} />
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="relative w-full h-full flex items-center justify-center z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="w-full h-full"
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(8px)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <CurrentComponent />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer / Controls */}
            <footer className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-900/50 backdrop-blur">
                    <motion.div
                        className="h-full bg-brand-orange shadow-[0_0_15px_#ff6600]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                {/* Navigation Bar */}
                <div className="p-4 flex justify-between items-center bg-black/80 backdrop-blur-xl border-t border-white/5 pointer-events-auto pb-8">
                    <div className="text-xs text-gray-500 font-mono flex items-center gap-2">
                        <span>{currentSlide + 1} <span className="text-gray-700">/</span> {slides.length}</span>
                        <span className="w-px h-3 bg-gray-800"></span>
                        <span className="text-gray-600 uppercase tracking-widest text-[10px]">Found It Marketing</span>
                    </div>

                    {/* Host Controls Only? No, anyone can click locally, but host overrides */}
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className={`p-3 rounded-full transition-all active:scale-95 border ${isHost
                                ? 'bg-white/10 text-white hover:bg-white/20 border-white/10'
                                : 'text-gray-600 hover:text-white border-transparent'
                                } disabled:opacity-30 disabled:cursor-not-allowed`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentSlide === slides.length - 1}
                            className={`p-3 rounded-full transition-all active:scale-95 border ${isHost
                                ? 'bg-brand-orange text-black hover:bg-white border-brand-orange shadow-[0_0_20px_rgba(255,102,0,0.4)]'
                                : 'bg-white/5 text-brand-orange hover:bg-brand-orange hover:text-black border-brand-orange/30'
                                } disabled:opacity-30 disabled:cursor-not-allowed`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </footer>

            {/* Speaker Notes Overlay */}
            <AnimatePresence>
                {showNotes && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute bottom-0 left-0 w-full h-[60vh] bg-zinc-900/95 backdrop-blur-xl border-t border-gray-700/50 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden z-40"
                    >
                        <div className="flex justify-between items-center p-4 border-b border-white/5 bg-black/20">
                            <span className="text-brand-orange font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                <Brain size={16} /> Speaker Notes
                            </span>
                            <button onClick={() => setShowNotes(false)} className="text-gray-400 hover:text-white p-2">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto h-full pb-24 space-y-4">
                            {slides[currentSlide].notes.map((note, idx) => (
                                <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/5">
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {note}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PresentationContent;
