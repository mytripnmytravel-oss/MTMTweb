"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Car, ShieldCheck, Users, Briefcase, ChevronRight,
    Filter, Zap, Info, ArrowRight, Star,
    CheckCircle2, MapPin, Gauge, X, Send, Mail, Phone, Calendar as CalendarIcon, Clock, MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    Magnetic, CharBlurIn, SmoothScroll,
    GlassyProgressBar, Tilt3D
} from "@/components/ClientComponents";
import { fleet, Vehicle } from "@/data/fleet";

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 12
        }
    }
};

const FilterButton = ({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) => (
    <button
        onClick={onClick}
        className={`px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest transition-all duration-500 border ${active
            ? "bg-sunset-orange text-white border-sunset-orange shadow-[0_10px_30px_rgba(249,115,22,0.3)] scale-110"
            : "bg-white/50 text-royal-blue border-royal-blue/10 hover:border-sunset-orange/30"
            }`}
    >
        {children}
    </button>
);

const FleetInquiryModal = ({ vehicle, isOpen, onClose }: { vehicle: Vehicle | null, isOpen: boolean, onClose: () => void }) => {
    const [formState, setFormState] = useState("idle"); // idle, submitting, success

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate email submission
        setTimeout(() => {
            setFormState("success");
        }, 2000);
    };

    if (!isOpen || !vehicle) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[3000] flex items-center justify-center p-4 md:p-8 bg-royal-blue/90 backdrop-blur-xl"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                    className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-[3100] w-12 h-12 bg-royal-blue/5 rounded-full flex items-center justify-center text-royal-blue hover:bg-sunset-orange hover:text-white transition-all shadow-lg"
                    >
                        <X size={24} />
                    </button>

                    {/* Left Side: Vehicle Info */}
                    <div className="md:w-1/3 bg-royal-blue p-12 text-white relative flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-orange/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
                        <div className="relative z-10">
                            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-sunset-orange mb-6">Selected Asset</h4>
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl border border-white/10">
                                <Image src={vehicle.img} alt={vehicle.name} fill className="object-cover" />
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">{vehicle.name}</h3>
                            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-8">{vehicle.type} • {vehicle.category} Class</p>
                            
                            <div className="space-y-4 pt-8 border-t border-white/10">
                                <div className="flex items-center gap-3">
                                    <Users size={16} className="text-sunset-orange" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{vehicle.passengers} Max Passengers</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase size={16} className="text-sunset-orange" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{vehicle.luggage} Luggage Space</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-2/3 p-12 md:p-16 bg-white max-h-[90vh] overflow-y-auto">
                        <AnimatePresence mode="wait">
                            {formState === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-20"
                                >
                                    <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                                        <Send className="text-white" size={40} />
                                    </div>
                                    <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mb-4">Inquiry Transmitted</h3>
                                    <p className="text-dark-slate/60 font-bold italic mb-6">
                                        Your availability request for the {vehicle.name} has been sent to our dispatch center.
                                    </p>
                                    <div className="p-6 bg-royal-blue/5 rounded-2xl border border-royal-blue/10 mb-10 w-full">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-royal-blue/40 mb-2">Notifications sent to:</p>
                                        <p className="text-sm font-black text-royal-blue">info@mytripmytravel.com</p>
                                        <p className="text-sm font-black text-royal-blue">mytripmytravel@gmail.com</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="bg-royal-blue text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-sunset-orange transition-all shadow-xl"
                                    >
                                        Close Terminal
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form">
                                    <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mb-4">Availability Protocol</h3>
                                    <p className="text-dark-slate/40 text-sm font-bold italic mb-12">Complete the transmission to secure your fleet reservation.</p>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Full Name</label>
                                                <input required type="text" placeholder="ALEXANDER VANCE" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Email Address</label>
                                                <input required type="email" placeholder="VANCE@MISSION.COM" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Pickup Date</label>
                                                <div className="relative">
                                                    <input required type="date" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all appearance-none" />
                                                    <CalendarIcon className="absolute right-6 top-1/2 -translate-y-1/2 text-royal-blue/20 pointer-events-none" size={20} />
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Duration (Days)</label>
                                                <select className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all appearance-none cursor-pointer">
                                                    <option>Single Day Master</option>
                                                    <option>2-4 Day Mission</option>
                                                    <option>5-7 Day Deployment</option>
                                                    <option>Extended Strategic Tour</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Specific Directives</label>
                                            <textarea rows={3} placeholder="ENTER EXTRA REQUIREMENTS OR MISSION DETAILS..." className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-3xl p-8 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all resize-none"></textarea>
                                        </div>

                                        <div className="flex items-center gap-4 p-6 bg-sunset-orange/5 rounded-2xl border border-sunset-orange/10">
                                            <ShieldCheck className="text-sunset-orange" size={20} />
                                            <p className="text-[9px] font-bold text-royal-blue/60 uppercase tracking-widest italic leading-relaxed">
                                                By submitting, you authorize MyTripMyTravel HQ to proceed with fleet allocation.
                                            </p>
                                        </div>

                                        <Magnetic>
                                            <button
                                                type="submit"
                                                disabled={formState === "submitting"}
                                                className="bg-royal-blue text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-royal-blue/20 flex items-center gap-6 hover:bg-sunset-orange transition-all duration-500 disabled:opacity-50"
                                            >
                                                {formState === "submitting" ? "TRANSMITTING DATA..." : "AUTHORIZE AVAILABILITY CHECK"}
                                                <ArrowRight />
                                            </button>
                                        </Magnetic>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default function FleetPage() {
    const [activeType, setActiveType] = useState<string>("All");
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCheckAvailability = (v: Vehicle) => {
        setSelectedVehicle(v);
        setIsModalOpen(true);
    };

    const handleWhatsApp = (v: Vehicle) => {
        const msg = `MISSION PROTOCOL: I would like to reserve the ${v.name} (${v.type}) for a Golden Triangle journey. Please initiate planning.`;
        window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, '_blank');
    };

    const filteredFleet = useMemo(() => {
        return fleet.filter(v => {
            const matchesType = activeType === "All" || v.type === activeType;
            const matchesCategory = activeCategory === "All" || v.category === activeCategory;
            return matchesType && matchesCategory;
        });
    }, [activeType, activeCategory]);

    const vehicleTypes = ["All", ...Array.from(new Set(fleet.map(v => v.type)))];
    const categories = ["All", "Elite", "Premium", "Standard"];

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white pb-40">
                <GlassyProgressBar />
                <Navbar />

                {/* Inquiry Modal */}
                <FleetInquiryModal 
                    vehicle={selectedVehicle} 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                />

                {/* --- Hero Section --- */}
                <section className="relative pt-60 pb-40 bg-royal-blue overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                    <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-sunset-orange/10 blur-[200px] -translate-y-1/2 translate-x-1/2 rounded-full" />

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                            <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-8">The Garage</motion.h4>
                            <CharBlurIn text="ELITE FLEET" className="text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-none block mb-12" />
                            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-bold italic leading-relaxed">
                                Curated high-performance vehicle archetypes. From executive mobility to royal convoy logistics.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* --- Performance Filter Bar --- */}
                <section className="sticky top-[120px] z-[100] py-8 glass-card border-none rounded-none shadow-2xl">
                    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <div className="flex items-center gap-4 mr-4">
                                <Filter size={16} className="text-sunset-orange" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue/30">Vehicle Type:</span>
                            </div>
                            {vehicleTypes.map(t => (
                                <FilterButton key={t} active={activeType === t} onClick={() => setActiveType(t)}>{t}</FilterButton>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <div className="flex items-center gap-4 mr-4">
                                <Zap size={16} className="text-sunset-orange" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue/30">Class:</span>
                            </div>
                            {categories.map(c => (
                                <FilterButton key={c} active={activeCategory === c} onClick={() => setActiveCategory(c)}>{c}</FilterButton>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Fleet Grid --- */}
                <section className="py-40 container mx-auto px-6 relative z-10">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            layout
                            className="grid md:grid-cols-2 gap-12"
                        >
                            {filteredFleet.map((vehicle) => (
                                <motion.div
                                    layout
                                    key={vehicle.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="glass-card rounded-[4rem] overflow-hidden group hover:border-sunset-orange/30 transition-all duration-700"
                                >
                                    <div className="grid lg:grid-cols-2 h-full">
                                        <div className="relative h-[400px] lg:h-full overflow-hidden bg-royal-blue/5">
                                            <Image
                                                src={vehicle.img}
                                                alt={vehicle.name}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute top-8 left-8">
                                                <div className={`px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl border border-white/20 ${vehicle.category === "Elite" ? "bg-sunset-orange text-white" : "bg-white/90 text-royal-blue"
                                                    }`}>
                                                    {vehicle.category} Protocol
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-12 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-[10px] font-black text-sunset-orange uppercase tracking-[0.4em]">{vehicle.type}</span>
                                                    <div className="w-1 h-1 rounded-full bg-royal-blue/20" />
                                                    <span className="text-[10px] font-black text-royal-blue/40 uppercase tracking-[0.2em]">{vehicle.priceRange}</span>
                                                </div>
                                                <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mb-6 leading-none group-hover:text-sunset-orange transition-colors">
                                                    {vehicle.name}
                                                </h3>
                                                <p className="text-dark-slate/60 text-sm font-bold italic mb-10 leading-relaxed">
                                                    {vehicle.description}
                                                </p>

                                                <div className="grid grid-cols-2 gap-6 mb-10">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-royal-blue/5 flex items-center justify-center text-royal-blue">
                                                            <Users size={18} />
                                                        </div>
                                                        <span className="text-xs font-black text-royal-blue uppercase tracking-widest">{vehicle.passengers} Seats</span>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-royal-blue/5 flex items-center justify-center text-royal-blue">
                                                            <Briefcase size={18} />
                                                        </div>
                                                        <span className="text-xs font-black text-royal-blue uppercase tracking-widest">{vehicle.luggage}</span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-12">
                                                    {vehicle.features.map((feat, i) => (
                                                        <span key={i} className="px-4 py-2 bg-royal-blue/[0.03] rounded-lg text-[9px] font-black uppercase tracking-widest text-royal-blue/40">
                                                            {feat}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-4">
                                                <Magnetic>
                                                    <button
                                                        onClick={() => handleCheckAvailability(vehicle)}
                                                        className="bg-royal-blue text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-sunset-orange transition-colors shadow-lg"
                                                    >
                                                        Check Availability
                                                    </button>
                                                </Magnetic>
                                                <Magnetic>
                                                    <button 
                                                        onClick={() => handleWhatsApp(vehicle)}
                                                        className="w-14 h-14 bg-white border border-royal-blue/10 rounded-2xl flex items-center justify-center text-royal-blue hover:text-sunset-orange transition-colors"
                                                    >
                                                        <MessageCircle size={20} />
                                                    </button>
                                                </Magnetic>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredFleet.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-60 text-center"
                        >
                            <div className="w-24 h-24 bg-royal-blue/5 rounded-full flex items-center justify-center mx-auto mb-10" />
                            <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mb-4">No assets match your filter</h3>
                            <button
                                onClick={() => { setActiveType("All"); setActiveCategory("All"); }}
                                className="text-sunset-orange font-black uppercase tracking-widest text-xs underline decoration-2 underline-offset-8"
                            >
                                Reset Elite Parameters
                            </button>
                        </motion.div>
                    )}
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </SmoothScroll>
    );
}
