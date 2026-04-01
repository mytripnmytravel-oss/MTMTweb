"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
    Clock, MapPin, ShieldCheck, 
    Star, ArrowLeft, ChevronRight, 
    Calendar, User, CreditCard, Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Magnetic, CharBlurIn, SmoothScroll, 
    GlassyProgressBar 
} from "@/components/ClientComponents";
import { packages } from "@/data/tours";
import Link from "next/link";

export default function IndividualTourPage() {
    const params = useParams();
    const id = parseInt(params.id as string);
    const tour = packages.find(p => p.id === id) || packages[0];
    
    // Fallback if ID is weird (e.g. from a text-based slug match)
    const isError = !packages.find(p => p.id === id);

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Section A: Hero Narrative */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image 
                            src={tour.img} 
                            alt={tour.title} 
                            fill 
                            className="object-cover scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/80 via-transparent to-white" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-6">Master Variation {tour.id}</h4>
                            <CharBlurIn 
                                text={tour.title.toUpperCase()} 
                                className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8"
                            />
                            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
                                <div className="glass-card px-8 py-4 rounded-2xl text-white flex items-center gap-3">
                                    <Clock className="text-sunset-orange" size={18} />
                                    <span className="font-black uppercase text-xs tracking-widest">{tour.duration}</span>
                                </div>
                                <div className="glass-card px-8 py-4 rounded-2xl text-white flex items-center gap-3">
                                    <MapPin className="text-sunset-orange" size={18} />
                                    <span className="font-black uppercase text-xs tracking-widest">{tour.location}</span>
                                </div>
                                <div className="glass-card px-8 py-4 rounded-2xl text-white flex items-center gap-3">
                                    <Sparkles className="text-sunset-orange" size={18} />
                                    <span className="font-black uppercase text-xs tracking-widest">{tour.theme}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Section B: Tactical Detail */}
                <section className="py-24 md:py-40 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-20">
                            <div className="lg:col-span-2">
                                <div className="mb-20">
                                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.4em] text-xs mb-4">Strategic Overview</h4>
                                    <h2 className="text-4xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-10">The Architecture of Your Mission</h2>
                                    <p className="text-xl md:text-2xl font-bold italic text-royal-blue/60 leading-relaxed max-w-3xl">
                                        {tour.highlight}
                                    </p>
                                </div>

                                <div className="space-y-12">
                                    <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-royal-blue/20">Operational Itinerary</h3>
                                    {tour.itinerary.map((day, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="relative pl-12 md:pl-20 pb-16 border-l border-royal-blue/10 last:border-0 last:pb-0"
                                        >
                                            <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-royal-blue text-white flex items-center justify-center font-black text-xs shadow-lg">
                                                {day.day}
                                            </div>
                                            <h4 className="font-black text-sunset-orange uppercase tracking-widest text-[10px] mb-4">Tactical Phase {day.day}</h4>
                                            <p className="text-lg md:text-xl font-bold italic text-royal-blue/70 leading-relaxed">
                                                {day.plan}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar Booking Protocol */}
                            <div className="relative">
                                <div className="sticky top-32 glass-card p-10 md:p-12 rounded-[3.5rem] border-royal-blue/5 bg-royal-blue text-white shadow-2xl">
                                    <div className="mb-12">
                                        <h4 className="text-sunset-orange font-black uppercase tracking-widest text-[10px] mb-4">Fiscal Transparency</h4>
                                        <div className="text-5xl font-black tracking-tighter mb-2">{tour.price}</div>
                                        <p className="text-white/40 font-bold italic text-sm">Starting Investment / Per Person</p>
                                    </div>

                                    <div className="space-y-6 mb-12">
                                        <div className="flex items-center gap-4 py-4 border-b border-white/10">
                                            <ShieldCheck className="text-sunset-orange shrink-0" size={20} />
                                            <span className="font-black uppercase text-[10px] tracking-widest">Elite Security Protocol</span>
                                        </div>
                                        <div className="flex items-center gap-4 py-4 border-b border-white/10">
                                            <Calendar className="text-sunset-orange shrink-0" size={20} />
                                            <span className="font-black uppercase text-[10px] tracking-widest">Flexible Deployment Dates</span>
                                        </div>
                                        <div className="flex items-center gap-4 py-4">
                                            <User className="text-sunset-orange shrink-0" size={20} />
                                            <span className="font-black uppercase text-[10px] tracking-widest">Private Chauffeur Included</span>
                                        </div>
                                    </div>

                                    <Magnetic>
                                        <button 
                                            onClick={() => {
                                                const msg = `MISSION PROTOCOL INQUIRY: I am ready to initiate the booking for ${tour.title} (ID: ${tour.id}).`;
                                                window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, '_blank');
                                            }}
                                            className="w-full bg-white text-royal-blue py-8 rounded-3xl font-black uppercase tracking-widest hover:bg-sunset-orange hover:text-white transition-all duration-500 shadow-xl flex items-center justify-center gap-4 group"
                                        >
                                            Inquire via WhatsApp <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Magnetic>
                                    
                                    <p className="text-center mt-10 text-[9px] font-black uppercase tracking-widest opacity-30 italic">Priority response guaranteed within 60 minutes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
