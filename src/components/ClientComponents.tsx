"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
    Utensils, Camera, Heart, Sparkles, MapPin,
    Clock, Navigation2, ChevronRight, Zap, ChevronLeft, Car
} from "lucide-react";
import Lenis from "lenis";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Smooth Scroll Wrapper (Lenis)
 */
export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
};

/**
 * Character-by-Character Blur-In Headline
 */
export const CharBlurIn = ({ text, className }: { text: string, className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const sentence = text.split("");

    return (
        <motion.span
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {sentence.map((char, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: { filter: "blur(20px)", opacity: 0, y: 10 },
                        visible: { filter: "blur(0px)", opacity: 1, y: 0 }
                    }}
                    transition={{
                        duration: 1.2,
                        delay: i * 0.03,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

/**
 * Glassy Scroll Progress Bar
 */
export const GlassyProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-sunset-orange z-[1000] origin-left backdrop-blur-3xl shadow-[0_0_20px_rgba(249,115,22,0.5)]"
            style={{ scaleX }}
        />
    );
};

/**
 * Magnetic Wrapper (Refined for CTAs)
 */
export const Magnetic = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const target = ref.current?.getBoundingClientRect();
        if (!target) return;

        const centerX = target.left + target.width / 2;
        const centerY = target.top + target.height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
};

/**
 * 3D Tilt Wrapper
 */
export const Tilt3D = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 150, damping: 20 });

    function handleMouse(event: React.MouseEvent) {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    }

    function handleMouseLeave() {
        x.set(0); y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ... existing CountingStat, GoldenPathLoader, RouteVisualizer, ItineraryPreviewer (I'll keep them)
export const CountingStat = ({ value, label }: { value: number; label: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center group">
            <div className="text-4xl md:text-6xl font-black text-royal-blue mb-2 group-hover:text-sunset-orange transition-colors">{count}+</div>
            <div className="text-[8px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-dark-slate opacity-60 px-2">{label}</div>
        </div>
    );
};

export const GoldenPathLoader = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <AnimatePresence>
            {loading && (
                <motion.div key="loader" exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[1000] bg-royal-blue flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-full max-w-sm relative aspect-square mb-12">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <defs>
                                <linearGradient id="loaderPyramidGradient" x1="0" y1="0" x2="100" y2="100">
                                    <stop offset="0%" stopColor="#FBBC05" />
                                    <stop offset="100%" stopColor="#EA4335" />
                                </linearGradient>
                            </defs>
                            {/* Static Ghost Outline */}
                            <path d="M 50 20 L 80 70 L 20 70 Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                            
                            {/* Animated Pyramid Path */}
                            <motion.path 
                                d="M 50 20 L 80 70 L 20 70 Z" 
                                fill="none" 
                                stroke="url(#loaderPyramidGradient)" 
                                strokeWidth="3" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }} 
                                animate={{ pathLength: 1 }} 
                                transition={{ duration: 2, ease: "easeInOut" }} 
                            />

                            <motion.circle initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0 }} cx="20" cy="70" r="3" fill="white" />
                            <motion.circle initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} cx="50" cy="20" r="3" fill="white" />
                            <motion.circle initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6 }} cx="80" cy="70" r="3" fill="white" />
                        </svg>
                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white tracking-[0.6em] font-black uppercase text-xl">Mapping Your <span className="text-sunset-orange">Journey</span></motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const RouteVisualizer = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    
    // Calculate precise car coordinates tied to scroll percentage
    // Journey points: Delhi (50,20) -> Agra (80,70) -> Jaipur (20,70) -> Delhi (50,20)
    const carLeft = useTransform(scrollYProgress, [0.1, 0.36, 0.63, 0.9], ["50%", "80%", "20%", "50%"]);
    const carTop = useTransform(scrollYProgress, [0.1, 0.36, 0.63, 0.9], ["20%", "70%", "70%", "20%"]);
    
    // Rotate car depending on which segment of the journey is active
    const carRotate = useTransform(
        scrollYProgress,
        [0.1, 0.359, 0.36, 0.629, 0.63, 0.9],
        [59, 59, 180, 180, -59, -59]
    );

    const cities = [{ name: "Delhi", x: 50, y: 20, best: "Heritage & Street Food", dist: "Start" }, { name: "Agra", x: 80, y: 70, best: "The Eternal Taj", dist: "233 KM" }, { name: "Jaipur", x: 20, y: 70, best: "Royal Grandeur", dist: "240 KM" }];
    return (
        <div ref={ref} className="relative w-full h-[500px] md:h-[650px] glass-card rounded-[2rem] md:rounded-[4rem] overflow-hidden border-royal-blue/5 bg-royal-blue/[0.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/[0.05] to-sunset-orange/[0.05] backdrop-blur-3xl" />
            <motion.div style={{ rotateX: rotate, perspective: "1000px" }} className="absolute inset-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="prismVisualizerGradient" x1="0" y1="0" x2="100" y2="100">
                            <stop offset="0%" stopColor="#FBBC05" />
                            <stop offset="100%" stopColor="#EA4335" />
                        </linearGradient>
                    </defs>
                    {/* Ghost Fill */}
                    <path d="M 50 20 L 80 70 L 20 70 Z" fill="rgba(30,64,175,0.02)" stroke="rgba(30,64,175,0.05)" strokeWidth="0.1" />
                    
                    {/* Facets */}
                    {["M50,20 L50,55", "M80,70 L50,55", "M20,70 L50,55"].map((d, i) => (
                        <motion.path key={`facet-${i}`} d={d} fill="none" stroke="rgba(249,115,22,0.1)" strokeWidth="0.1" style={{ pathLength }} />
                    ))}
                    
                    {/* Main Pyramid Outline */}
                    <motion.path 
                        d="M 50 20 L 80 70 L 20 70 Z" 
                        fill="none" 
                        stroke="url(#prismVisualizerGradient)" 
                        strokeWidth="1.2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        style={{ pathLength }} 
                        className="drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]" 
                    />
                </svg>
                
                {/* Scroll Driven Car */}
                <motion.div 
                    className="absolute w-8 h-4 -ml-4 -mt-2 z-30"
                    style={{ left: carLeft, top: carTop, rotate: carRotate }}
                >
                    <div className="relative w-full h-full bg-sunset-orange rounded-[4px] border-[1.5px] border-white shadow-[0_0_15px_#f97316] overflow-hidden">
                        <div className="absolute top-[2px] bottom-[2px] right-1 w-2 bg-royal-blue/90 rounded-[1px]" />
                        <div className="absolute top-1 bottom-1 left-2 w-1.5 bg-white/40" />
                    </div>
                </motion.div>
                {cities.map((city, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + idx * 0.3 }} style={{ left: `${city.x}%`, top: `${city.y}%`, position: 'absolute', transform: 'translate(-50%, -50%)' }} className="z-20 group">
                        <div className="relative">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <div className="absolute inset-0 bg-sunset-orange/20 rounded-full animate-ping" />
                                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white] z-10" />
                                <div className="w-5 h-5 border-2 border-sunset-orange rounded-full z-0" />
                            </div>
                            <div className={`absolute left-1/2 -translate-x-1/2 glass-card p-4 md:p-6 rounded-2xl border-white/20 w-44 md:w-56 opacity-100 transition-all duration-500 scale-100 pointer-events-none ${city.name === "Delhi" ? "bottom-full mb-4 md:mb-6" : "top-full mt-4 md:mt-6"}`}>
                                <div className="text-sunset-orange font-black text-[7px] md:text-[9px] uppercase tracking-[0.4em] mb-2">{city.dist}</div>
                                <h4 className="font-black text-royal-blue uppercase tracking-tighter text-lg md:text-xl mb-1">{city.name}</h4>
                                <p className="text-[8px] md:text-[10px] font-bold text-dark-slate opacity-40 italic leading-tight">{city.best}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <div className="absolute top-8 left-8 md:top-12 md:left-12 max-w-[240px] md:max-w-sm z-30 pointer-events-none">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"><div className="w-8 md:w-12 h-[1px] bg-sunset-orange" /><span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-sunset-orange">Live Refraction</span></div>
                <h3 className="text-2xl md:text-4xl font-black text-royal-blue uppercase mb-3 md:mb-4 tracking-tighter leading-none">The Golden Prism</h3>
                <p className="text-dark-slate font-bold opacity-50 leading-relaxed italic text-xs md:text-sm">Translating high-speed chauffeured intent into a 3D geometric sanctuary of travel.</p>
            </div>
        </div>
    );
};

export const ItineraryPreviewer = () => {
    const [step, setStep] = useState(1);
    const [isGenerating, setIsGenerating] = useState(false);
    const [config, setConfig] = useState({
        destination: "Golden Triangle",
        duration: "5 Days",
        vibe: "Relaxed"
    });

    const destinations = ["Golden Triangle", "Rajasthan Master", "Kerala Backwaters", "Himalayan Mission"];
    const durations = ["3 Days", "5 Days", "7 Days", "10 Days"];
    const vibes = ["Adventurous", "Relaxed", "Cultural", "Medical"];

    const itineraryResults: Record<string, { title: string, highlights: string[], stats: string[] }> = {
        "Adventurous": {
            title: "The Desert Dash",
            highlights: ["Sunrise Ballooning in Jaipur", "Step-well Rappelling", "Night Bazaars", "Late-night Fleet Mission"],
            stats: ["1200+ KM", "10 High-Speed Transfers", "4 Cities"]
        },
        "Relaxed": {
            title: "Royal Hush Protocol",
            highlights: ["Silent Havelis in Mandawa", "Private Yoga at Taj", "Ayurvedic Dining", "Orthopedic Fleet Comfort"],
            stats: ["Orthopedic Fleet", "Zero Noise Policy", "5+ Star Suites"]
        },
        "Cultural": {
            title: "Heritage Master Class",
            highlights: ["Culinary Residency", "Private Museum Access", "Artisan Walks", "Royal Lineage Briefing"],
            stats: ["Expert Curators", "Bespoke Entry", "Heritage Stays"]
        },
        "Medical": {
            title: "Wellness Sanctuary",
            highlights: ["Sanitized Transit", "Concierge Recovery", "Specialized Care", "Sattvic Nutrition Plan"],
            stats: ["24/7 Support", "Sattvic Meals", "Post-Op Luxury"]
        }
    };

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
        else generateItinerary();
    };

    const generateItinerary = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setStep(4);
        }, 3000);
    };

    const reset = () => {
        setStep(1);
        setIsGenerating(false);
    };

    return (
        <div className="glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border-royal-blue/5 overflow-hidden relative min-h-[500px] md:min-h-[600px] flex flex-col justify-center">
            {/* Generative Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/[0.02] to-sunset-orange/[0.02] pointer-events-none" />

            <AnimatePresence mode="wait">
                {isGenerating ? (
                    <motion.div
                        key="generating"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center text-center py-20"
                    >
                        <div className="relative w-32 h-32 mb-12">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-t-4 border-sunset-orange rounded-full"
                            />
                            <div className="absolute inset-4 border-b-4 border-royal-blue/20 rounded-full animate-reverse-spin" />
                            <Zap className="absolute inset-0 m-auto text-sunset-orange" size={40} fill="currentColor" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-royal-blue uppercase tracking-tighter mb-4">Architecting Your Mission</h3>
                        <p className="text-xs md:text-sm font-bold italic opacity-50">Prism AI is calculating geometric routes and elite asset availability...</p>
                    </motion.div>
                ) : step === 1 ? (
                    <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                        <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-sunset-orange mb-6 md:mb-8 text-center md:text-left">Target Environment</h4>
                        <h3 className="text-2xl sm:text-4xl md:text-6xl font-black text-royal-blue uppercase mb-8 md:mb-16 tracking-tighter text-center md:text-left">SELECT YOUR DESTINATION</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-16">
                            {destinations.map((d) => (
                                <button key={d} onClick={() => setConfig({ ...config, destination: d })} className={`p-4 md:p-8 rounded-2xl md:rounded-3xl text-left border-2 transition-all duration-500 font-black uppercase tracking-widest text-[10px] md:text-base ${config.destination === d ? "bg-royal-blue text-white border-royal-blue shadow-2xl scale-[1.02]" : "glass-card border-royal-blue/5 hover:bg-royal-blue/5 text-royal-blue/60"}`}>
                                    {d}
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <button onClick={nextStep} className="btn-primary group">
                                Next Protocol <ChevronRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ) : step === 2 ? (
                    <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-sunset-orange mb-8 text-center md:text-left">Temporal Calibration</h4>
                        <h3 className="text-4xl md:text-6xl font-black text-royal-blue uppercase mb-16 tracking-tighter text-center md:text-left">DURATION OF MISSION</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-16">
                            {durations.map((d) => (
                                <button key={d} onClick={() => setConfig({ ...config, duration: d })} className={`p-4 md:p-8 rounded-2xl md:rounded-3xl text-left border-2 transition-all duration-500 font-black uppercase tracking-widest text-[10px] md:text-base ${config.duration === d ? "bg-royal-blue text-white border-royal-blue shadow-2xl scale-[1.02]" : "glass-card border-royal-blue/5 hover:bg-royal-blue/5 text-royal-blue/60"}`}>
                                    {d}
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <button onClick={() => setStep(1)} className="text-royal-blue/40 font-black uppercase tracking-widest text-xs hover:text-royal-blue transition-colors">Go Back</button>
                            <button onClick={nextStep} className="btn-primary group">
                                Calibrate Vibe <ChevronRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                ) : step === 3 ? (
                    <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-sunset-orange mb-8 text-center md:text-left">Soul Synchronization</h4>
                        <h3 className="text-4xl md:text-6xl font-black text-royal-blue uppercase mb-16 tracking-tighter text-center md:text-left">WHAT IS YOUR VIBE?</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-16">
                            {vibes.map((v) => (
                                <button key={v} onClick={() => setConfig({ ...config, vibe: v })} className={`p-4 md:p-8 rounded-2xl md:rounded-3xl text-left border-2 transition-all duration-500 font-black uppercase tracking-widest text-[10px] md:text-base ${config.vibe === v ? "bg-royal-blue text-white border-royal-blue shadow-2xl scale-[1.02]" : "glass-card border-royal-blue/5 hover:bg-royal-blue/5 text-royal-blue/60"}`}>
                                    {v}
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <button onClick={() => setStep(2)} className="text-royal-blue/40 font-black uppercase tracking-widest text-xs hover:text-royal-blue transition-colors">Go Back</button>
                            <Magnetic>
                                <button onClick={nextStep} className="bg-sunset-orange text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-sunset-orange/20 hover:scale-105 transition-all">
                                    INITIATE GENERATION
                                </button>
                            </Magnetic>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="grid md:grid-cols-2 gap-20">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-sunset-orange rounded-xl text-white"><Sparkles size={24} /></div>
                                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-sunset-orange">Prism AI Generated Manifest</h4>
                            </div>
                            <h3 className="text-3xl sm:text-5xl md:text-7xl font-black text-royal-blue uppercase mb-6 md:mb-10 tracking-tighter leading-none">{itineraryResults[config.vibe].title}</h3>
                            <div className="flex flex-wrap gap-4 mb-12">
                                <span className="px-5 py-2 glass-card rounded-full text-[10px] font-black uppercase text-royal-blue border-royal-blue/10">{config.destination}</span>
                                <span className="px-5 py-2 glass-card rounded-full text-[10px] font-black uppercase text-royal-blue border-royal-blue/10">{config.duration}</span>
                                <span className="px-5 py-2 glass-card rounded-full text-[10px] font-black uppercase text-sunset-orange border-sunset-orange/20 bg-sunset-orange/5">{config.vibe}</span>
                            </div>
                            <ul className="space-y-6 mb-12">
                                {itineraryResults[config.vibe].highlights.map((h, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-royal-blue/5 flex items-center justify-center text-sunset-orange group-hover:bg-sunset-orange group-hover:text-white transition-all">
                                            <ChevronRight size={16} />
                                        </div>
                                        <span className="text-base md:text-lg font-bold italic text-royal-blue/80">{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center gap-8 md:gap-12 border-t md:border-t-0 md:border-l border-royal-blue/5 pt-8 md:pt-0 md:pl-12">
                            {itineraryResults[config.vibe].stats.map((s, i) => (
                                <div key={i} className="group">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-royal-blue/20 mb-2">Metrics Layer {i + 1}</div>
                                    <div className="text-2xl font-black text-royal-blue uppercase tracking-widest flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-sunset-orange transition-all duration-500 group-hover:h-8" />
                                        {s}
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col gap-4 mt-8">
                                <Link href="/booking" className="w-full">
                                    <button className="btn-primary w-full py-6">Secure This Mission</button>
                                </Link>
                                <button onClick={reset} className="text-[10px] font-black uppercase tracking-widest text-royal-blue/40 hover:text-royal-blue transition-colors">Start New Simulation</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
