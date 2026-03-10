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

const TED_LINK = 'https://weiss-goldring-vercel.vercel.app/';

const slides: SlideData[] = [
    {
        id: 'lobby',
        component: LobbySlide,
        notes: [
            "SETUP: Dim the lights. Stand center stage. Silently for 10 seconds, making eye contact with the veterans in the room.",
            "WELCOME: 'Scan the QR code to join the session. I will be controlling your screens from here. Hold tight.'"
        ]
    },
    {
        id: 'intro',
        component: FoundItStatsSlide,
        notes: [
            "THE HOOK — I. THE GHOST IN THE MACHINE (12 Min)",
            "'Gentlemen, look around this room. Between the 14 of you, we have over five centuries of taste, intuition, and Old World mastery. You know the exact moment a man's confidence changes when he puts on a full-canvas jacket. You can spot a machine-made buttonhole from across the street.'",
            "'But I want to talk about a tragedy that happens every single day in your cities. At 2:00 AM tonight, a high-net-worth individual in your town—maybe a young attorney who just made partner—is staring at his phone. He has questions that only you can answer. But you are asleep. Your doors are locked.'",
            "'Right now, your website is a digital graveyard. Your CRM is a digital Rolodex collecting dust. Today, I am going to show you how we took the soul of a 126-year-old institution—Weiss & Goldring—and gave it Digital Immortality. We aren't just building a chatbot. We are performing Neural Cloning.'"
        ]
    },

    // --- The Digital Concierge Model ---
    {
        id: 'concierge-title',
        component: TitleSlide,
        notes: [
            "TRANSITION: 'The Digital Concierge Model. Scaling High-Touch Relationships in an Automating World.'",
            "CONTEXT: Presented by Trevor Ruby, Found It Marketing. Venue: High-End Menswear Store Owner Retreat."
        ]
    },
    {
        id: 'concierge-problem',
        component: ProblemSlide,
        notes: [
            "THE PROBLEM — The Ghost in the Machine",
            "'Most luxury businesses have vending machine websites. Cold. Transactional. You put in a question, and a robot spits out a paragraph of cold text.'",
            "'We are losing the handshake the moment a client goes online. Your 40 years of wisdom are effectively invisible the moment your lights go out.'"
        ]
    },
    {
        id: 'concierge-solution',
        component: SolutionSlide,
        notes: [
            "II. THE PIVOT — CONCIERGE VS. BOT (8 Min)",
            "'I know the hesitation. You've seen chatbots before. They are digital vending machines. That is not the Silver Standard.'",
            "'We have pivoted from a chatbot to an Active Digital Concierge. A chatbot waits for you to talk. A Concierge leads.'",
            "'It doesn't just answer a question; it visualizes the look for the customer. It speaks with the specific authority of your house voice. It doesn't wait for a lead; it identifies intent.'",
            "'We are using the latest multimodal technology—Gemini 2.5—to ensure the digital experience is as high-touch as your showroom floor.'"
        ]
    },
    {
        id: 'concierge-blueprint',
        component: BlueprintSlide,
        notes: [
            "III. THE REVEAL — TALK TO TED (15 Min)",
            `ACTION: Project QR code for ${TED_LINK}`,
            "'I want you to pull out your phones. Right now. Scan this code. You are looking at the live Weiss & Goldring Active Concierge. This isn't a slide deck. This is a working prototype of Ted Silver's Digital Twin.'",
            "'Don't take my word for it. Try to stump him: Ask him — Ted, can I wear brown shoes with a black suit? Why should I spend $4,000 on a Castangia suit? What is the rule of the Green Stamp?'",
            "Allow 3-5 minutes of quiet for them to play. This is your strongest moment. Watch their faces.",
            "'Notice that he isn't just answering. He is advising. He is recommending Grey as a foundation. He is talking about the Continental Balance in a shoulder. He is inviting you to a fitting. This is capturing leads while we are sitting here in this room.'"
        ]
    },
    {
        id: 'concierge-tactic1',
        component: Tactic1Slide,
        notes: [
            "IV. MONDAY MORNING — THE ENGINE ROOM (10 Min)",
            "Show simulated GHL dashboard on screen.",
            "'It's 9:00 AM Monday. Your AI agent has already scanned your database. It gives you Moments of Opportunity.'",
            "Behavioral Re-engagement: 'Mr. Smith hasn't bought a suit in 18 months, but last night he spent 10 minutes on the site looking at Navy Blazers. Here is a drafted SMS inviting him for a private viewing.'",
            "Lifecycle Strike: 'Graduation is 60 days away. Here are the 40 fathers in your database with sons aged 18. Here is a drafted email for each, mentioning their own style history.'",
            "'This is Predictive Clienteling. You aren't chasing people; you are providing Neural Counsel exactly when they need it.'"
        ]
    },
    {
        id: 'concierge-tactic2',
        component: Tactic2Slide,
        notes: [
            "V. THE ROI — MEASURING FITTINGS (5 Min)",
            "'Most agencies will show you Click-Through Rates. I don't care about clicks. Clicks don't pay the light bill.'",
            "'We measure Fittings. Because we stitch the AI Concierge directly to the CRM, we can track a guest from the second they ask a question at midnight to the moment they swipe their card at your register.'",
            "'We measure ROAS in Dollars, not Engagement.'"
        ]
    },
    {
        id: 'concierge-tactic3',
        component: Tactic3Slide,
        notes: [
            "BRIDGE: The full lifecycle from digital touchpoint to in-store conversion.",
            "'Turning a one-time transaction into a lifetime relationship. Automated, personalized follow-up. The machine never forgets an anniversary. It never misses a birthday. It never drops a client.'"
        ]
    },
    {
        id: 'concierge-conclusion',
        component: ConclusionSlide,
        notes: [
            "VI. THE CLOSING — THE LEGACY BLUEPRINT (10 Min)",
            "'I'm not here to sell you a software subscription. I am here to build your Digital Estate.'",
            "Project the 14 store names: Norman Stockton, Khaki's, Malouf, Great Scott...",
            "'I have spent the last few weeks auditing each of your stores. I see the history. I see the 110-year legacies. But I also see the gaps. I see the 25-year-old tech entrepreneur in your town who should be your best client, but he's intimidated by your expertise.'",
            "'I'll be here through tomorrow evening. Pull me aside. Let's grab a drink and look at the audit for The Locker Room or M.S. McClellan.'",
            "'Let's ensure that 50 years from now, your store is still the undisputed standard of excellence in your city.'"
        ]
    }
];

const PresentationContent = () => {
    const { currentSlide, isHost, setSlide, becomeHost, isConnected } = useSync();
    const [showNotes, setShowNotes] = useState(false);
    const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
    const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);

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

    // Touch navigation — track both axes so vertical scroll isn't blocked
    const minSwipeDistance = 50;
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
    };
    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
    };
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        if (!isHost) return; // Only host can swipe to change slides
        const dx = touchStart.x - touchEnd.x;
        const dy = touchStart.y - touchEnd.y;
        // Only treat as horizontal swipe if clearly more horizontal than vertical
        if (Math.abs(dx) < Math.abs(dy)) return;
        const isLeftSwipe = dx > minSwipeDistance;
        const isRightSwipe = dx < -minSwipeDistance;
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
            className="relative w-full min-h-[100dvh] bg-black overflow-y-auto overflow-x-hidden font-sans text-slate-200"
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
