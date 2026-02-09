import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Logo from '@/components/Logo';

const Home: React.FC = () => {
    return (
        <div className="relative w-full h-[100dvh] bg-black overflow-hidden font-sans text-slate-200 flex flex-col items-center justify-center">
            {/* Background System */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>

            <div className="relative z-10 text-center p-8 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Logo className="text-6xl md:text-8xl mb-6 mx-auto" />
                    <h1 className="font-serif text-3xl md:text-4xl text-gray-300 italic">
                        Found It Marketing
                    </h1>
                </motion.div>

                <div className="flex flex-col gap-6 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Link
                            to="/presentation"
                            className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                        >
                            <div className="p-2 bg-brand-orange/20 rounded-full text-brand-orange shadow-[0_0_15px_rgba(255,102,0,0.3)]">
                                <Sparkles size={20} />
                            </div>
                            <span className="text-xl font-serif text-white tracking-wide">Enter Presentation</span>
                            <ArrowRight className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                        </Link>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-500 text-sm font-mono mt-8 tracking-widest uppercase"
                    >
                        Restricted Access • Authorized Personnel Only
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default Home;
