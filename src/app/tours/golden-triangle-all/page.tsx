"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Filter, Search, Clock, MapPin, Star, ShieldCheck,
    ChevronRight, Calendar, Zap, MessageCircle, HelpCircle,
    Camera, Heart, Stethoscope, Compass, CheckCircle2,
    ArrowRight, Shield, Award, Sparkles, Map, Users, X
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    SmoothScroll, Magnetic, CharBlurIn,
    GlassyProgressBar, Tilt3D
} from "@/components/ClientComponents";
import { packages, type Package } from "@/data/tours";

const FilterButton = ({ active, label, onClick }: any) => (
    <button
        onClick={onClick}
        className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 whitespace-nowrap border-2 ${active
            ? "bg-sunset-orange border-sunset-orange text-white shadow-xl scale-105"
            : "bg-white border-royal-blue/10 text-royal-blue hover:border-sunset-orange"
            }`}
    >
        {label}
    </button>
);

const FeatureItem = ({ icon: Icon, title, desc }: any) => (
    <div className="flex gap-6 items-start">
        <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center shrink-0 border-royal-blue/5">
            <Icon size={24} className="text-sunset-orange" />
        </div>
        <div>
            <h5 className="font-black text-royal-blue uppercase text-sm mb-2">{title}</h5>
            <p className="text-dark-slate/60 text-xs font-bold italic leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default function TourDirectory() {
    const [activeTheme, setActiveTheme] = useState("All");
    const [activeDuration, setActiveDuration] = useState("All");
    const [activeLocation, setActiveLocation] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

    const itemsPerPage = 10;

    const themes = ["All", "Luxury", "Short Tours", "Spiritual", "Wildlife", "Medical", "Adventure", "Nature"];
    const locations = ["All", "Golden Triangle", "Rajasthan", "South India", "Himalayas", "North East", "Goa", "Islands", "West India", "North India", "Central India"];
    const durations = ["All", "3-5 Days", "6-9 Days", "10+ Days"];

    const filteredPackages = useMemo(() => {
        const filtered = packages.filter(pkg => {
            const themeMatch = activeTheme === "All" || pkg.theme === activeTheme;
            const locationMatch = activeLocation === "All" || pkg.location === activeLocation;
            const days = parseInt(pkg.duration);
            let durationMatch = true;
            if (activeDuration === "3-5 Days") durationMatch = days >= 3 && days <= 5;
            else if (activeDuration === "6-9 Days") durationMatch = days >= 6 && days <= 9;
            else if (activeDuration === "10+ Days") durationMatch = days >= 10;
            return themeMatch && locationMatch && durationMatch;
        });
        setCurrentPage(1); // Reset page on filter change
        return filtered;
    }, [activeTheme, activeLocation, activeDuration]);

    const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
    const paginatedPackages = filteredPackages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white relative overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Structured Data: TouristTrip */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(packages.map(pkg => ({
                            "@context": "https://schema.org",
                            "@type": "TouristTrip",
                            "name": pkg.title,
                            "description": pkg.highlight,
                            "touristType": pkg.theme,
                            "duration": pkg.duration,
                            "offers": {
                                "@type": "Offer",
                                "price": pkg.price.replace('$', ''),
                                "priceCurrency": "USD"
                            }
                        })))
                    }}
                />

                {/* Liquid Background */}
                <div className="liquid-bg opacity-30">
                    <div className="liquid-blob-1" />
                    <div className="liquid-blob-2" />
                </div>

                {/* --- Hero Section --- */}
                <section className="pt-80 pb-32 container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">Master Variations 2026</h4>
                        <CharBlurIn text="GOLDEN TRIANGLE" className="text-5xl md:text-9xl font-black text-royal-blue uppercase tracking-tighter block leading-[0.85]" />
                        <div className="h-4" /> {/* Spacer */}
                        <CharBlurIn text="ULTIMATE ARCHIVE" className="text-5xl md:text-9xl font-black text-royal-blue uppercase tracking-tighter block leading-[0.85] opacity-20" />
                        <p className="mt-12 text-xl font-bold text-royal-blue/60 max-w-2xl italic leading-relaxed">
                            Explore all 30+ precise variations of India&apos;s most iconic routes and regional escapes. Every itinerary here is a foundation—ready for your bespoke modification.
                        </p>

                        <div className="mt-16 flex items-center gap-12 grayscale opacity-40">
                            <div className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest"><Shield size={14} /> Verified Luxury</div>
                            <div className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest"><Award size={14} /> 15+ Yrs Authority</div>
                            <div className="flex items-center gap-3 font-black uppercase text-[10px] tracking-widest"><Users size={14} /> 25k+ Travelers</div>
                        </div>
                    </div>
                </section>

                {/* --- Sticky Filter Bar --- */}
                <section className="sticky top-[120px] z-[1500] bg-white border-y border-royal-blue/10 py-10 mb-20 shadow-xl">
                    <div className="container mx-auto px-6 flex flex-col gap-10">
                        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                            <div className="flex flex-wrap gap-4 items-center">
                                <span className="text-[10px] font-black uppercase text-royal-blue tracking-widest flex items-center gap-2 shrink-0"><Map size={14} /> Region:</span>
                                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                    {locations.map(loc => (
                                        <FilterButton key={loc} label={loc} active={activeLocation === loc} onClick={() => setActiveLocation(loc)} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                            <div className="flex flex-wrap gap-4 items-center">
                                <span className="text-[10px] font-black uppercase text-royal-blue tracking-widest flex items-center gap-2 shrink-0"><Filter size={14} /> Theme:</span>
                                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                    {themes.map(t => (
                                        <FilterButton key={t} label={t} active={activeTheme === t} onClick={() => setActiveTheme(t)} />
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 items-center">
                                <span className="text-[10px] font-black uppercase text-royal-blue tracking-widest flex items-center gap-2 shrink-0"><Clock size={14} /> Duration:</span>
                                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                    {durations.map(d => (
                                        <FilterButton key={d} label={d} active={activeDuration === d} onClick={() => setActiveDuration(d)} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Main Content Grid --- */}
                <section className="container mx-auto px-6 pb-40 grid lg:grid-cols-4 gap-16 relative z-[500]">
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                layout
                                className="grid md:grid-cols-2 gap-12"
                            >
                                {paginatedPackages.map((pkg) => (
                                    <motion.div
                                        key={pkg.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                        className="glass-card rounded-[3rem] overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/20 transition-all duration-700"
                                    >
                                        <div className="relative h-72">
                                            <Image src={pkg.img} alt={pkg.title} fill className="object-cover transition-transform duration-1000" />
                                            <div className="absolute top-6 left-6 flex gap-2">
                                                <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-xl">
                                                    <span className="text-[10px] font-black uppercase text-royal-blue tracking-widest">{pkg.duration}</span>
                                                </div>
                                                {pkg.theme === "Luxury" && (
                                                    <div className="bg-sunset-orange px-5 py-2 rounded-full shadow-xl flex items-center gap-2">
                                                        <Sparkles size={12} className="text-white" />
                                                        <span className="text-[10px] font-black uppercase text-white tracking-widest">Elite</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="absolute top-6 right-6">
                                                <div className="bg-royal-blue/80 backdrop-blur-md px-5 py-2 rounded-full shadow-xl border border-white/10">
                                                    <span className="text-[10px] font-black uppercase text-white tracking-widest">{pkg.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-10">
                                            <h4 className="text-[10px] font-black text-sunset-orange uppercase tracking-[0.4em] mb-4">{pkg.theme}</h4>
                                            <h3 className="text-3xl font-black text-royal-blue uppercase tracking-tighter mb-4 leading-none underline decoration-royal-blue/5 underline-offset-8 group-hover:decoration-sunset-orange transition-all">{pkg.title}</h3>
                                            <p className="text-dark-slate/60 font-bold italic text-sm mb-12 leading-relaxed">{pkg.highlight}</p>
                                            <div className="flex items-center justify-between pt-8 border-t border-royal-blue/5">
                                                <div>
                                                    <span className="text-[10px] uppercase font-black text-royal-blue/40 block mb-1">Starting At</span>
                                                    <span className="text-3xl font-black text-royal-blue">{pkg.price}</span>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Magnetic>
                                                        <button
                                                            onClick={() => setSelectedPackage(pkg)}
                                                            className="bg-royal-blue text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-sunset-orange transition-colors shadow-lg"
                                                        >
                                                            View Itinerary
                                                        </button>
                                                    </Magnetic>
                                                    <Magnetic>
                                                        <button className="bg-sunset-orange text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-royal-blue transition-colors shadow-lg">
                                                            Reserve
                                                        </button>
                                                    </Magnetic>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* --- Pagination --- */}
                        {totalPages > 1 && (
                            <div className="mt-20 flex justify-center items-center gap-6">
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => {
                                        setCurrentPage(prev => prev - 1);
                                        window.scrollTo({ top: 800, behavior: 'smooth' });
                                    }}
                                    className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-royal-blue disabled:opacity-20 disabled:cursor-not-allowed hover:bg-royal-blue hover:text-white transition-all duration-500"
                                >
                                    <ArrowRight size={24} className="rotate-180" />
                                </button>

                                <div className="flex gap-3">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setCurrentPage(i + 1);
                                                window.scrollTo({ top: 800, behavior: 'smooth' });
                                            }}
                                            className={`w-14 h-14 rounded-2xl font-black text-xs transition-all duration-500 ${currentPage === i + 1
                                                ? "bg-sunset-orange text-white shadow-xl scale-110"
                                                : "glass-card text-royal-blue hover:bg-royal-blue/5"
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => {
                                        setCurrentPage(prev => prev + 1);
                                        window.scrollTo({ top: 800, behavior: 'smooth' });
                                    }}
                                    className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-royal-blue disabled:opacity-20 disabled:cursor-not-allowed hover:bg-royal-blue hover:text-white transition-all duration-500"
                                >
                                    <ArrowRight size={24} />
                                </button>
                            </div>
                        )}

                        {filteredPackages.length === 0 && (
                            <div className="text-center py-40 glass-card rounded-[3rem]">
                                <Compass className="mx-auto text-sunset-orange mb-8 opacity-20" size={80} />
                                <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter">No exact matches found</h3>
                                <p className="text-dark-slate/60 font-bold italic mt-4">Try adjusting your filters or let our AI architect build a custom path for you.</p>
                                <button onClick={() => { setActiveTheme("All"); setActiveDuration("All"); setActiveLocation("All"); }} className="mt-10 btn-primary px-10">Reset Filters</button>
                            </div>
                        )}
                    </div>

                    {/* --- Sidebar Lead Gen & Features --- */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-60 space-y-12">
                            {/* The Hook Card */}
                            <div className="p-12 rounded-[3.5rem] !bg-royal-blue !text-white border-none relative overflow-hidden group shadow-3xl">
                                <div className="absolute top-0 right-0 p-8">
                                    <Zap className="text-sunset-orange animate-pulse" size={40} fill="currentColor" />
                                </div>
                                <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-[0.9] !text-white">Architect Your Own Path.</h3>
                                <p className="text-white/70 font-bold italic mb-12">Don&apos;t settle for a template. Our AI engine can merge any variations in under 60 seconds.</p>

                                <div className="space-y-6 mb-12">
                                    {["Custom Stop-Overs", "Specific Hotel Vibe", "Dietary Ready", "24/7 Human Backup"].map((f, i) => (
                                        <div key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/80">
                                            <CheckCircle2 size={16} className="text-sunset-orange" /> {f}
                                        </div>
                                    ))}
                                </div>

                                <Magnetic>
                                    <button className="w-full bg-sunset-orange text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-sunset-orange transition-all duration-500 shadow-xl text-xs">
                                        Build Custom Itinerary
                                    </button>
                                </Magnetic>
                            </div>

                            {/* Authority Points */}
                            <div className="glass-card p-10 rounded-[3rem] space-y-10 !bg-white border-royal-blue/10 shadow-2xl">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-royal-blue mb-8">The MyTripMyTravel Standard</h4>
                                <FeatureItem
                                    icon={Map}
                                    title="Live Telemetry"
                                    desc="Every car is GPS tracked with the 'Golden Prism' network status."
                                />
                                <FeatureItem
                                    icon={ShieldCheck}
                                    title="Zero-Surprise Pricing"
                                    desc="Fuel, permits, and tolls pre-calculated. No hidden 'gate-fees'."
                                />
                                <FeatureItem
                                    icon={Calendar}
                                    title="Flexible Voids"
                                    desc="Need a 'Slow Day' in Jaipur? We adjust your itinerary on the fly."
                                />
                            </div>

                            {/* Support Card */}
                            <div className="glass-card p-10 rounded-[2.5rem] flex items-center gap-6 group hover:border-sunset-orange/20 transition-all cursor-pointer">
                                <div className="w-16 h-16 bg-soft-white rounded-full flex items-center justify-center shrink-0 group-hover:bg-sunset-orange transition-all">
                                    <HelpCircle className="text-royal-blue group-hover:text-white" size={28} />
                                </div>
                                <div>
                                    <h5 className="font-black text-royal-blue uppercase text-xs tracking-widest mb-1">Human Desk</h5>
                                    <p className="text-[10px] font-bold text-dark-slate opacity-40 uppercase tracking-widest">Chat with an Architect</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </section>

                {/* --- Trust & Authority Section --- */}
                <section className="py-40 bg-royal-blue/5 relative z-10 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <h2 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-8">Why Thousands Trust Us</h2>
                                <CharBlurIn text="THE AUTHORITY" className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter block leading-none mb-12" />
                                <div className="space-y-10">
                                    {[
                                        { t: "Verified Pilots", d: "Our chauffeurs are 'Performance-Drivers' trained in defensive driving and elite hospitality." },
                                        { t: "Heritage Access", d: "Skip-the-line privileges at Taj Mahal, Amer Fort, and Jantar Mantar." },
                                        { t: "Orthopedic Comfort", d: "Every vehicle features custom-tiered comfort for medical recovery and long-haul ease." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-8 group">
                                            <div className="text-sunset-orange font-black text-5xl opacity-10 group-hover:opacity-100 transition-all">0{i + 1}</div>
                                            <div>
                                                <h4 className="font-black text-royal-blue uppercase text-xl mb-4 italic">{item.t}</h4>
                                                <p className="text-dark-slate/60 font-bold italic leading-relaxed">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-[700px] rounded-[4rem] overflow-hidden shadow-3xl">
                                <Image src="/taj-golden.png" alt="Authority India Travel" fill className="object-cover" />
                                <div className="absolute inset-0 bg-royal-blue/20 backdrop-blur-[2px]" />
                                <div className="absolute bottom-12 left-12 glass-card p-10 rounded-3xl w-full max-w-sm">
                                    <Star className="text-sunset-orange mb-6" fill="currentColor" />
                                    <p className="text-white font-black italic text-xl mb-6">"Not just a car rental. They architected a 12-day spiritual journey that changed our perception of India."</p>
                                    <span className="text-sunset-orange font-black uppercase text-xs tracking-widest">— Sarah Jenkins, Travel Photographer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-40 container mx-auto px-6 z-10 relative">
                    <div className="text-center mb-32">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">Execution Protocol</h4>
                        <CharBlurIn text="BOOKING FLOW" className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter" />
                        <p className="mt-8 text-xl font-bold text-royal-blue/40 italic">From archetype selection to VIP mission execution.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { i: Map, t: "Variation Scout", d: "Browse our 30+ precise master itineraries and choose your foundation." },
                            { i: Zap, t: "AI Architect", d: "Inject your personal 'Vibe'—hotel tiers, dietary needs, and pace." },
                            { i: Award, t: "Protocol Lock", d: "Receive your bespoke 12-page PDF protocol and chauffeur telemetry." },
                            { i: Sparkles, t: "VIP Launch", d: "Your performance convoy is ready at the gate. Experience the path." }
                        ].map((step, idx) => (
                            <div key={idx} className="glass-card p-12 rounded-[3rem] text-center group hover:bg-royal-blue hover:!bg-royal-blue transition-all duration-700 cursor-pointer border-royal-blue/5">
                                <div className="w-24 h-24 mx-auto rounded-3xl bg-royal-blue/5 flex items-center justify-center mb-10 group-hover:bg-sunset-orange transition-all duration-500 group-hover:rotate-12">
                                    <step.i className="text-royal-blue group-hover:!text-white transition-colors" size={32} />
                                </div>
                                <h4 className="text-xl font-black text-royal-blue group-hover:!text-white uppercase mb-4 tracking-tighter italic">Phase 0{idx + 1}</h4>
                                <h5 className="font-black text-royal-blue group-hover:!text-white uppercase text-xs tracking-widest mb-6 underline decoration-sunset-orange underline-offset-8 group-hover:decoration-white transition-all">{step.t}</h5>
                                <p className="text-dark-slate/60 group-hover:!text-white font-bold text-xs italic leading-relaxed">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FAQ Section --- */}
                <section className="py-40 bg-royal-blue container mx-auto px-6 z-10 relative rounded-[5rem] mb-40 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-orange/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
                    <div className="text-center mb-24">
                        <h2 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-4">Intelligence</h2>
                        <CharBlurIn text="TOUR ARCHIVE FAQ" className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter block" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="glass-card p-10 rounded-3xl border-white/5 bg-white/5">
                            <h4 className="font-black text-white uppercase mb-4 tracking-tight">Can I swap Agra for Varanasi?</h4>
                            <p className="text-white/60 font-bold italic text-sm leading-relaxed">Absolutely. These are 'Variations' but not rigid rules. Every city in India is on our menu—we can architect a loop starting anywhere.</p>
                        </div>
                        <div className="glass-card p-10 rounded-3xl border-white/5 bg-white/5">
                            <h4 className="font-black text-white uppercase mb-4 tracking-tight">What defines a 'Medical Tour'?</h4>
                            <p className="text-white/60 font-bold italic text-sm leading-relaxed">These tours feature our 'Silent Havelis' and vehicles with orthopedic modified seating. They run at 50% speed for post-op rest and physical therapy ease.</p>
                        </div>
                        <div className="glass-card p-10 rounded-3xl border-white/5 bg-white/5">
                            <h4 className="font-black text-white uppercase mb-4 tracking-tight">Are drivers trained for large events?</h4>
                            <p className="text-white/60 font-bold italic text-sm leading-relaxed">Our wedding wing pilots have handled 100+ guest convoys for palace weddings in Jaipur. They use encrypted comms for logistics sync.</p>
                        </div>
                        <div className="glass-card p-10 rounded-3xl border-white/5 bg-white/5">
                            <h4 className="font-black text-white uppercase mb-4 tracking-tight">How is 'Golden Hour' photography handled?</h4>
                            <p className="text-white/60 font-bold italic text-sm leading-relaxed">Our photographers coordinate with local ASI authorities to secure specific spots before the general public crowd arrives, ensuring elite bokeh and light.</p>
                        </div>
                    </div>
                </section>

                {/* --- Footer CTA --- */}
                <footer className="bg-royal-blue pb-20 relative overflow-hidden z-20">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <CharBlurIn text="READY TO" className="text-white/20 text-4xl font-black uppercase tracking-widest" />
                        <CharBlurIn text="START THE ENGINE?" className="text-white text-5xl md:text-[8rem] font-black uppercase tracking-tighter block mt-4 mb-20" />
                        <Magnetic>
                            <button className="bg-sunset-orange text-white px-24 py-10 rounded-full font-black uppercase tracking-widest hover:scale-110 hover:shadow-[0_0_80px_rgba(249,115,22,0.6)] transition-all shadow-2xl">
                                Consult an Architect
                            </button>
                        </Magnetic>
                        <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                            <span className="text-2xl font-black text-white uppercase tracking-tighter italic">MYTRIP<span className="text-sunset-orange">MYTRAVEL</span></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">© 2026 Ultimate Authority Archive. Deep Delta Performance.</span>
                        </div>
                    </div>
                </footer>

                {/* Floating WhatsApp */}
                <div className="fixed bottom-12 right-12 z-[500]">
                    <Magnetic>
                        <button className="w-24 h-24 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,211,102,0.4)] group overflow-hidden">
                            <MessageCircle size={40} fill="white" className="relative z-10 group-hover:rotate-12 transition-transform" />
                            <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform opacity-10" />
                        </button>
                    </Magnetic>
                </div>
                {/* --- Itinerary Modal --- */}
                <AnimatePresence>
                    {selectedPackage && (
                        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-6 md:p-12">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedPackage(null)}
                                className="absolute inset-0 bg-royal-blue/60 backdrop-blur-2xl"
                            />

                            <motion.div
                                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                                className="bg-white rounded-[4rem] w-full max-w-5xl max-h-[85vh] overflow-hidden relative shadow-4xl flex flex-col md:flex-row"
                            >
                                <button
                                    onClick={() => setSelectedPackage(null)}
                                    className="absolute top-8 right-8 z-50 w-12 h-12 bg-royal-blue text-white rounded-full flex items-center justify-center hover:bg-sunset-orange transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                <div className="md:w-2/5 relative h-64 md:h-auto">
                                    <Image src={selectedPackage.img} alt={selectedPackage.title} fill className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue to-transparent md:bg-gradient-to-r" />
                                    <div className="absolute bottom-12 left-12 right-12 text-white">
                                        <h4 className="text-xs font-black uppercase text-sunset-orange tracking-[0.4em] mb-4">{selectedPackage.theme}</h4>
                                        <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6">{selectedPackage.title}</h3>
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"><Clock size={14} className="text-sunset-orange" /> {selectedPackage.duration}</div>
                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-sunset-orange"><Sparkles size={14} /> Master Class</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 p-12 md:p-20 overflow-y-auto no-scrollbar" data-lenis-prevent>
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-royal-blue/20 mb-12">Target Itinerary Playback</h5>

                                    <div className="space-y-16 relative">
                                        <div className="absolute left-[1.35rem] top-4 bottom-4 w-[2px] bg-royal-blue/5" />

                                        {selectedPackage.itinerary.map((step) => (
                                            <div key={step.day} className="relative pl-16">
                                                <div className="absolute left-0 top-1 w-12 h-12 rounded-2xl bg-white border-2 border-royal-blue/10 flex items-center justify-center font-black text-royal-blue group-hover:border-sunset-orange transition-colors">
                                                    {step.day}
                                                </div>
                                                <h6 className="text-lg font-black text-royal-blue uppercase tracking-tight mb-3">Day {step.day} Protocol</h6>
                                                <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed">{step.plan}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-20 pt-12 border-t border-royal-blue/5 flex flex-col md:flex-row items-center justify-between gap-12">
                                        <div>
                                            <span className="text-[10px] uppercase font-black text-royal-blue/40 block mb-1">Architecture Base Price</span>
                                            <span className="text-4xl font-black text-royal-blue">{selectedPackage.price}</span>
                                        </div>
                                        <button className="btn-primary w-full md:w-auto px-16 py-6 text-xs">
                                            Lock This Variation
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
                <Footer />
            </main>
        </SmoothScroll>
    );
}
