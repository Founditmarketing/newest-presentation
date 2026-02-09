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

const HeroSlide: React.FC = () => (
    <SlideLayout className="text-center">
        <div className="flex flex-col h-full justify-center items-center gap-8 md:gap-10">
            <motion.div variants={itemVariants} className="bg-brand-black/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <Logo className="text-5xl md:text-6xl relative z-10" />
                <div className="mt-4 flex items-center justify-center gap-3 text-brand-orange/80 font-mono tracking-[0.4em] uppercase text-[9px] relative z-10">
                    Marketing Architecture
                </div>
            </motion.div>

            <div className="space-y-2 px-2">
                <h1 className="font-serif text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter">
                    <span className="block">The AI</span>
                    <span className="text-brand-orange block">
                        Advantage
                    </span>
                </h1>
                <div className="mt-6">
                    <p className="text-xl text-gray-400 font-light tracking-wide italic font-serif">
                        For the Modern Men's Store
                    </p>
                </div>
            </div>

            <motion.div variants={itemVariants} className="mt-8">
                <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                    <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest">Presented by Trevor Ruby</p>
                </div>
            </motion.div>
        </div>
    </SlideLayout>
);

const FoundItStatsSlide: React.FC = () => (
    <SlideLayout>
        <div className="flex flex-col h-full justify-center">
            <motion.div variants={itemVariants} className="mb-8 border-b border-brand-orange/30 pb-6">
                <Logo className="text-5xl md:text-6xl mb-4" />
                <h2 className="font-serif text-3xl text-gray-300 italic">
                    "We don't do campaigns. <br /><span className="text-white font-bold not-italic">We build empires.</span>"
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div variants={itemVariants}>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-white">280,000+</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest">Leads & Interactions</span>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-white">$2.3B+</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest">Client Revenue</span>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-white">$560M+</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest">Organic Revenue</span>
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

const ShiftSlide: React.FC = () => (
    <SlideLayout className="text-center">
        <div className="flex flex-col h-full justify-center gap-6">
            <motion.div variants={itemVariants}>
                <h2 className="font-serif text-5xl text-white mb-2 tracking-tight">
                    The Shift
                </h2>
                <div className="text-xl text-gray-400 font-light flex items-center justify-center gap-3">
                    <span className="line-through decoration-brand-orange/50 decoration-2 opacity-50">Search</span>
                    <span className="text-brand-orange text-xs font-mono uppercase tracking-widest">Evolution</span>
                    <span className="text-white font-bold">Answer</span>
                </div>
            </motion.div>

            <div className="flex flex-col gap-4">
                {/* Old Way - Faded */}
                <motion.div variants={itemVariants} className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col opacity-30 grayscale blur-[1px]">
                    <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                        <Search size={14} className="text-gray-400" />
                        <span className="text-xs text-gray-400">mens suits alexandria</span>
                    </div>
                    <div className="space-y-2 opacity-50">
                        <div className="h-2 bg-blue-900/40 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-800 rounded w-full"></div>
                        <div className="h-2 bg-gray-800 rounded w-5/6"></div>
                    </div>
                </motion.div>

                {/* New Way (Static Card) */}
                <motion.div variants={itemVariants} className="flex-1 min-h-[160px]">
                    <div className="h-full p-6 text-left border border-brand-orange/30 shadow-[0_0_30px_rgba(255,102,0,0.1)] bg-white/5 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50"></div>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-1.5 bg-brand-orange/10 rounded-full text-brand-orange">
                                <Sparkles size={14} />
                            </div>
                            <span className="text-xs text-gray-300 font-mono tracking-wide">AI GENERATED RESPONSE</span>
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm text-gray-400 italic">"Where can I get a fitted suit?"</p>
                            <div className="text-base text-white leading-relaxed font-serif">
                                Weiss & Goldring is the definitive choice. They offer master tailoring and a curated selection of luxury menswear.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.p variants={itemVariants} className="text-lg text-gray-400 font-light mt-4">
                If you aren't the <span className="text-brand-orange font-bold border-b border-brand-orange/50 pb-0.5">Answer</span>, you are invisible.
            </motion.p>
        </div>
    </SlideLayout>
);

const StrategySlide: React.FC = () => (
    <SlideLayout>
        <div className="flex flex-col h-full justify-center">
            <motion.div variants={itemVariants} className="mb-6">
                <h2 className="font-serif text-5xl text-white">Strategy</h2>
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white font-bold italic">"Antigravity"</p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 font-light mb-8">
                Lift your brand into the premium tier while others fight on the ground.
            </motion.p>

            <div className="space-y-4">
                {[
                    { title: "AI Websites", icon: Globe, text: "Dynamic adaptation." },
                    { title: "AI Geo", icon: MapPin, text: "Map pack dominance." },
                    { title: "AI Ads", icon: Target, text: "Intent-based bidding." }
                ].map((item, i) => (
                    <motion.div variants={itemVariants} key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                            <item.icon size={20} />
                        </div>
                        <div>
                            <div className="font-serif text-xl text-white">{item.title}</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wide">{item.text}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </SlideLayout>
);

const CaseStudySlide: React.FC = () => (
    <SlideLayout>
        <div className="flex flex-col h-full justify-center">
            <motion.div variants={itemVariants} className="mb-8 border-b border-gray-800 pb-4">
                <div className="text-brand-orange text-xs font-mono mb-1">CASE STUDY 001</div>
                <h2 className="font-serif text-4xl text-white">Weiss & Goldring</h2>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-xl text-white font-light mb-2">The Gold Standard</h3>
                <p className="text-gray-400 leading-relaxed text-base">
                    We built the digital house for Ted's expertise. By using <strong className="text-white">GEO</strong>, they became the definitive answer.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-3">
                {[
                    { label: "Chat GPT", val: "#1", icon: Sparkles },
                    { label: "Gemini", val: "#1", icon: Sparkles },
                    { label: "Local Mindshare", val: "Top", icon: Brain }
                ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center gap-3">
                            <stat.icon size={18} className="text-gray-500" />
                            <span className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</span>
                        </div>
                        <div className="text-brand-orange font-bold text-2xl">{stat.val}</div>
                    </div>
                ))}
            </motion.div>
        </div>
    </SlideLayout>
);

const GoogleAdsSlide: React.FC = () => (
    <SlideLayout>
        <div className="flex flex-col h-full justify-center">
            <motion.div variants={itemVariants} className="mb-6 text-center">
                <div className="p-3 bg-white/5 rounded-full inline-block mb-4">
                    <Zap size={32} className="text-brand-orange" />
                </div>
                <h2 className="font-serif text-4xl text-white mb-2">Google Ads 2.0</h2>
                <p className="text-gray-400 text-sm uppercase tracking-widest">AI Smart Bidding</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                    <motion.div variants={itemVariants}>
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold text-white">98%</span>
                            <span className="text-sm text-gray-400 uppercase tracking-widest">Buyer Intent Accuracy</span>
                        </div>
                    </motion.div>
                </div>
                <motion.div variants={itemVariants} className="h-full">
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-white">24/7</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest">AI Monitoring</span>
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="h-full">
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-white">40%</span>
                        <span className="text-sm text-gray-400 uppercase tracking-widest">Cost Reduction</span>
                    </div>
                </motion.div>
            </div>

            <motion.p variants={itemVariants} className="mt-8 text-center text-gray-300 font-light">
                We pay for <span className="text-white font-bold">customers</span>, not just clickers.
            </motion.p>
        </div>
    </SlideLayout>
);

const FacebookAdsSlide: React.FC = () => (
    <SlideLayout>
        <div className="flex flex-col h-full justify-center">
            <motion.div variants={itemVariants} className="mb-8">
                <h2 className="font-serif text-5xl text-white mb-2">Facebook</h2>
                <div className="text-brand-orange text-lg font-bold uppercase tracking-wide">Interaction Bidding</div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-xl text-gray-300 font-light mb-8">
                Don't pay for views. Pay for <span className="text-white border-b-2 border-brand-orange">conversations</span>.
            </motion.p>

            <div className="space-y-3">
                {[
                    { text: "Comments & Replies", icon: FileText },
                    { text: "Direct Messages", icon: Mail },
                    { text: "Social Shares", icon: Users }
                ].map((item, i) => (
                    <motion.div variants={itemVariants} key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                        <item.icon className="text-brand-orange" size={24} />
                        <span className="text-lg text-white">{item.text}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </SlideLayout>
);


const FutureAppsSlide: React.FC = () => (
    <SlideLayout>
        <div className="flex flex-col h-full justify-center">
            <motion.div variants={itemVariants} className="mb-8">
                <h2 className="font-serif text-5xl text-white mb-2">The Future</h2>
                <h3 className="text-xl text-brand-orange font-bold uppercase tracking-wide">
                    Your Store. In Their Pocket.
                </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-10 font-light">
                We are prototyping luxury apps that keep your customers locked in.
            </motion.p>

            <div className="grid gap-6">
                {[
                    { title: "AI Stylist", desc: "Matches ties to shirts.", icon: Sparkles },
                    { title: "VIP Alerts", desc: "Notify when size arrives.", icon: Zap },
                    { title: "Booking", desc: "No phone tag. One tap.", icon: CheckCircle2 }
                ].map((item, i) => (
                    <motion.div variants={itemVariants} key={i}>
                        <div className="p-5 flex items-center gap-5 bg-gradient-to-r from-gray-900/50 to-black/50 border border-brand-orange/20 hover:border-brand-orange/60 transition-colors rounded-xl">
                            <div className="p-3 bg-brand-orange/10 rounded-full text-brand-orange shrink-0 shadow-[0_0_15px_rgba(255,102,0,0.2)]">
                                <item.icon size={22} />
                            </div>
                            <div>
                                <strong className="text-white block text-xl font-serif mb-1">{item.title}</strong>
                                <span className="text-sm text-gray-400 font-light">{item.desc}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </SlideLayout>
);

const CloseSlide: React.FC = () => {
    const [scanning, setScanning] = useState(false);
    const [scanComplete, setScanComplete] = useState(false);

    const startScan = () => {
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
            setScanComplete(true);
        }, 3000);
    };

    return (
        <SlideLayout className="text-center">
            <div className="flex flex-col h-full justify-center items-center w-full">
                <motion.div variants={itemVariants} className="mb-8 md:mb-10 transform scale-110">
                    <Logo className="text-4xl" />
                </motion.div>

                {!scanComplete ? (
                    <div className="w-full flex flex-col items-center">
                        {!scanning ? (
                            <>
                                <motion.h2 variants={itemVariants} className="font-serif text-5xl text-white mb-6 leading-tight">
                                    Ready To <br /><span className="text-brand-orange">Serve</span>
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-lg text-gray-300 font-light mb-12 max-w-xs mx-auto">
                                    Let's start right here, with you.
                                </motion.p>
                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={startScan}
                                    className="w-full max-w-xs group relative inline-flex justify-center items-center gap-3 px-8 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                    <ScanLine className="w-5 h-5" />
                                    <span>Scan Digital Footprint</span>
                                </motion.button>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full max-w-xs flex flex-col items-center gap-6 p-8 bg-white/5 border border-brand-orange/50 rounded-2xl backdrop-blur-xl"
                            >
                                <div className="relative">
                                    <Loader2 className="w-12 h-12 text-brand-orange animate-spin" />
                                </div>
                                <div className="text-brand-orange font-mono text-sm animate-pulse tracking-widest">ANALYZING...</div>

                                <div className="w-full space-y-2">
                                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-brand-orange"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 2.5, ease: "circOut" }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="w-full max-w-sm bg-black/60 backdrop-blur-xl border border-brand-orange rounded-3xl p-8 flex flex-col gap-6"
                    >
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 border border-green-500/50">
                                <CheckCircle2 size={32} />
                            </div>
                            <span className="text-2xl font-serif text-white">Scan Complete</span>
                        </div>

                        <div className="text-gray-300 text-center border-t border-white/10 pt-4">
                            Opportunity detected in <br /><strong className="text-white">AI Search Positioning</strong>.
                        </div>

                        <div className="flex flex-col gap-3 w-full">
                            <a href="mailto:Trevor@founditmarketing.com" className="flex items-center justify-center gap-3 px-6 py-4 bg-brand-orange rounded-xl text-lg text-black font-bold">
                                <Mail size={20} />
                                Email Results
                            </a>
                        </div>

                        <button
                            onClick={() => setScanComplete(false)}
                            className="mt-2 text-sm text-gray-600 hover:text-white"
                        >
                            Reset
                        </button>
                    </motion.div>
                )}
            </div>
        </SlideLayout>
    );
};

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
        id: 'hero',
        component: HeroSlide,
        notes: [
            "Intro: 'Good evening, gentlemen. My name is Trevor Ruby.'",
            "The Hook: 'You run stores that are built on tradition. On handshakes. On quality. I'm not here to change that. I'm here to show you how to protect that tradition using the most advanced technology on earth.'",
            "Context: 'I'm 39, from Alexandria. I've been doing this since the internet was just getting started.'"
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
    {
        id: 'shift',
        component: ShiftSlide,
        notes: [
            "The Change: 'For 20 years, people typed 'mens suits' into Google and got 10 blue links. That is over.'",
            "The Now: 'Now, people talk to their phones. They ask Gemini, they ask ChatGPT.'",
            "The Stakes: 'If you aren't optimized for these AI conversations, you don't just lose a click. You simply don't exist.'"
        ]
    },
    {
        id: 'strategy',
        component: StrategySlide,
        notes: [
            "Antigravity: 'It's about using AI to spot trends before they happen. We position you so that when gravity pulls everyone else down into price wars, your brand stays elevated.'",
            "Analogy: 'It's not magic, it's math. But to the customer, it feels like magic.'"
        ]
    },
    {
        id: 'case-study',
        component: CaseStudySlide,
        notes: [
            "Proof: 'Look at Ted. Look at Weiss & Goldring. You know their reputation. We helped translate that reputation to the digital world.'",
            "Demo: 'If you pull out your phone right now and ask Gemini for the best menswear, watch whose name pops up. That isn't an accident. We engineered that.'"
        ]
    },
    {
        id: 'google-ads',
        component: GoogleAdsSlide,
        notes: [
            "Tech Detail: 'In the old days, I'd set a bid for $2.00 a click. Now? I feed the AI your sales data.'",
            "Benefit: 'This saves you money because we aren't advertising to teenagers. We are advertising to men with wallets.'"
        ]
    },
    {
        id: 'facebook-ads',
        component: FacebookAdsSlide,
        notes: [
            "Strategy: 'I don't care if 10,000 people see your ad if nobody cares. I'd rather 100 people see it, and 20 of them send you a message asking 'Do you have this in size 42?'"
        ]
    },
    {
        id: 'future',
        component: FutureAppsSlide,
        notes: [
            "Innovation: 'This is the next frontier. We are building these prototypes right now.'",
            "Loyalty: 'This keeps them loyal. Why go to a big box store when the app on their phone is telling them you have exactly what they need?'"
        ]
    },
    {
        id: 'close',
        component: CloseSlide,
        notes: [
            "Closing: 'I'm not asking you to understand all the code. That's my job. I'm asking you to trust the results.'",
            "Call to Action: 'Let us run a scan on your current digital footprint. Thank you for your time.'"
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
