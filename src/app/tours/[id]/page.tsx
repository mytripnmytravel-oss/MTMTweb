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
import { TourInquiryModal } from "@/components/TourInquiryModal";
import { FileText, Plus } from "lucide-react";

export default function IndividualTourPage() {
    const params = useParams();
    const id = parseInt(params.id as string);
    const tour = packages.find(p => p.id === id) || packages[0];
    const [isInquiryModalOpen, setIsInquiryModalOpen] = React.useState(false);
    
    // Fallback if ID is weird (e.g. from a text-based slug match)
    const isError = !packages.find(p => p.id === id);

    return (
        <SmoothScroll>
                <main className="min-h-screen bg-white text-royal-blue overflow-clip">
                <GlassyProgressBar />
                <Navbar />
                
                <TourInquiryModal 
                    tour={tour} 
                    isOpen={isInquiryModalOpen} 
                    onClose={() => setIsInquiryModalOpen(false)} 
                />

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
                                <div className="bg-white/90 backdrop-blur-3xl px-8 py-4 rounded-2xl text-royal-blue flex items-center gap-3 shadow-xl">
                                    <Clock className="text-sunset-orange" size={18} />
                                    <span className="font-black uppercase text-xs tracking-widest">{tour.duration}</span>
                                </div>
                                <div className="bg-white/90 backdrop-blur-3xl px-8 py-4 rounded-2xl text-royal-blue flex items-center gap-3 shadow-xl">
                                    <MapPin className="text-sunset-orange" size={18} />
                                    <span className="font-black uppercase text-xs tracking-widest">{tour.location}</span>
                                </div>
                                <div className="bg-white/90 backdrop-blur-3xl px-8 py-4 rounded-2xl text-royal-blue flex items-center gap-3 shadow-xl">
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
                             <div>
                                <div className="sticky top-48 bg-royal-blue backdrop-blur-3xl p-10 md:p-12 rounded-[3.5rem] border border-white/10 text-white shadow-4xl overflow-hidden">
                                    {/* Ambient Glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-orange/20 blur-[60px] -translate-y-1/2 translate-x-1/2" />

                                    <div className="mb-12">
                                        <h4 className="text-white font-black uppercase tracking-[0.4em] text-xs mb-4">Fiscal Transparency</h4>
                                        <div className="text-5xl font-black tracking-tighter mb-2">{tour.price}</div>
                                        <p className="text-white font-bold italic text-base">Starting Investment / Per Person</p>
                                    </div>

                                    <div className="space-y-6 mb-12">
                                        <div className="flex items-center gap-4 py-4 border-b border-white/10">
                                            <ShieldCheck className="text-sunset-orange shrink-0" size={20} />
                                            <span className="font-black uppercase text-xs tracking-widest">Elite Security Protocol</span>
                                        </div>
                                        <div className="flex items-center gap-4 py-4 border-b border-white/10">
                                            <Calendar className="text-sunset-orange shrink-0" size={20} />
                                            <span className="font-black uppercase text-xs tracking-widest">Flexible Deployment Dates</span>
                                        </div>
                                        <div className="flex items-center gap-4 py-4">
                                            <User className="text-sunset-orange shrink-0" size={20} />
                                            <span className="font-black uppercase text-xs tracking-widest">Private Chauffeur Included</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 items-stretch">
                                        <button 
                                            onClick={() => window.print()}
                                            className="w-full h-[72px] bg-white text-royal-blue rounded-[2.5rem] font-black uppercase tracking-widest text-[11px] hover:bg-sunset-orange hover:text-white transition-all duration-500 shadow-xl flex items-center justify-center gap-4 group border border-royal-blue/10"
                                        >
                                            Download PDF Briefing <FileText size={18} />
                                        </button>
                                        
                                        <button 
                                            onClick={() => setIsInquiryModalOpen(true)}
                                            className="w-full h-[72px] bg-sunset-orange text-white rounded-[2.5rem] font-black uppercase tracking-widest text-[11px] hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 group hover:scale-[1.01]"
                                        >
                                            Submit Mission Enquiry <Plus size={18} />
                                        </button>

                                        <button 
                                            onClick={() => {
                                                const msg = `MISSION PROTOCOL INQUIRY: I am ready to initiate the booking for ${tour.title} (ID: ${tour.id}).`;
                                                window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, '_blank');
                                            }}
                                            className="w-full text-white/40 hover:text-sunset-orange py-4 font-black uppercase tracking-[0.3em] text-[8px] transition-all flex items-center justify-center gap-2"
                                        >
                                            Inquire via WhatsApp <ChevronRight size={12} />
                                        </button>
                                    </div>
                                    
                                    <p className="text-center mt-10 text-[10px] font-black uppercase tracking-widest text-white italic">Priority response guaranteed within 60 minutes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
                
                {/* 📄 Hidden Printable Context for Branded PDF Protocol */}
                <div id="printable-brief" className="hidden print:block fixed inset-0 bg-white p-20 text-royal-blue z-[9999]">
                    <div className="border-b-[10px] border-sunset-orange pb-12 mb-16 flex justify-between items-end">
                        <div>
                            <h1 className="text-6xl font-black uppercase tracking-tighter mb-2">MY TRIP MY TRAVEL</h1>
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.4em] text-xs">OFFICIAL MISSION BRIEF</h4>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Protocol ID: MTMT-{tour.id}</div>
                            <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Classification: {tour.theme}</div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-8xl font-black uppercase tracking-tighter mb-8 leading-none">{tour.title}</h2>
                        <p className="text-2xl font-bold italic opacity-60 leading-relaxed max-w-4xl">{tour.highlight}</p>
                    </div>

                    <div className="space-y-12 mb-24">
                        <h3 className="text-2xl font-black uppercase tracking-[0.4em] mb-12 border-b border-royal-blue/10 pb-4">Operational Architecture</h3>
                        {tour.itinerary.map((day : any, idx : number) => (
                            <div key={idx} className="flex gap-12">
                                <div className="w-16 h-16 shrink-0 bg-royal-blue text-white rounded-full flex items-center justify-center font-black">
                                    {day.day}
                                </div>
                                <div>
                                    <h4 className="text-sunset-orange font-black uppercase tracking-widest text-[10px] mb-2">Day {day.day}</h4>
                                    <p className="text-xl font-bold italic">{day.plan}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-40 pt-20 border-t border-royal-blue/10 grid grid-cols-2 gap-20">
                        <div className="space-y-12">
                            <div className="border-b border-royal-blue/20 pb-4">
                                <p className="text-[10px] font-black text-royal-blue/40 uppercase tracking-[0.3em] mb-12">AUTHORIZED BY:</p>
                                <div className="italic font-bold text-2xl h-12">MyTripMyTravel HQ</div>
                            </div>
                            <div className="border-b border-royal-blue/20 pb-4">
                                <p className="text-[10px] font-black text-royal-blue/40 uppercase tracking-[0.3em] mb-12">MASTER ARCHITECT SIGNATURE:</p>
                                <div className="h-12"></div>
                            </div>
                        </div>
                        <div className="bg-royal-blue/5 p-12 rounded-[2.5rem] flex flex-col justify-center">
                            <p className="text-[10px] font-black text-royal-blue/40 uppercase tracking-[0.3em] mb-4">STATUS CHECK:</p>
                            <div className="text-emerald-500 font-black uppercase text-xl flex items-center gap-3">
                                <ShieldCheck size={24} /> VERIFIED PROTOCOL
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </SmoothScroll>
    );
}
