"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    Palmtree, Waves, Wind, Compass, 
    Calendar, MapPin, ChevronRight, 
    ShieldCheck, Star, Clock, ArrowLeft,
    Anchor, Droplets, Sunset
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Magnetic, CharBlurIn, SmoothScroll, 
    GlassyProgressBar 
} from "@/components/ClientComponents";
import { packages } from "@/data/tours";

export default function AndamanPage() {
    const andamanTour = packages.find(p => p.id === 28) || packages[0];

    const stats = [
        { icon: <Waves size={20} />, label: "7 Days", detail: "Island Hopping" },
        { icon: <Droplets size={20} />, label: "5 Islands", detail: "Elite Access" },
        { icon: <Compass size={20} />, label: "Private", detail: "Concierge Led" },
        { icon: <Sunset size={20} />, label: "Premium", detail: "Beachside Stay" }
    ];

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <motion.div 
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image 
                            src="https://images.unsplash.com/photo-1589136777351-fdc9c9c85f95?q=80&w=2670&auto=format&fit=crop" 
                            alt="Andaman Islands" 
                            fill 
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-royal-blue/90" />
                    </motion.div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs md:text-sm mb-6">Island Sanctuary</h4>
                            <CharBlurIn 
                                text="ANDAMAN EXPEDITION" 
                                className="text-4xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-tighter leading-none mb-8"
                            />
                            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
                                {stats.map((stat, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + (i * 0.1) }}
                                        className="bg-white/90 backdrop-blur-3xl px-6 py-4 md:px-8 md:py-6 rounded-3xl border-white/20 text-royal-blue flex items-center gap-4 shadow-xl"
                                    >
                                        <div className="text-sunset-orange">{stat.icon}</div>
                                        <div className="text-left">
                                            <div className="text-[10px] uppercase font-black tracking-widest opacity-40">{stat.detail}</div>
                                            <div className="text-sm md:text-lg font-black uppercase tracking-tight">{stat.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    >
                        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-sunset-orange">Scroll to Explore</span>
                    </motion.div>
                </section>

                {/* Itinerary Section */}
                <section className="py-24 md:py-40 bg-white relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="sticky top-32">
                                <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-4">Strategic Deployment</h4>
                                <h2 className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-12">The Master Itinerary</h2>
                                <p className="text-lg md:text-2xl font-bold text-royal-blue/60 mb-12 italic leading-relaxed">
                                    Our Andaman protocol is designed for those who demand pristine environments and zero-friction logistics in the heart of the Bay of Bengal.
                                </p>
                                
                                <div className="space-y-8 mb-16">
                                    <div className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-royal-blue/5 border border-royal-blue/5">
                                        <div className="w-16 h-16 rounded-2xl bg-royal-blue text-white flex items-center justify-center shrink-0 shadow-lg">
                                            <ShieldCheck size={32} />
                                        </div>
                                        <div>
                                            <h5 className="font-black uppercase tracking-tighter text-xl text-royal-blue">Elite Logistics</h5>
                                            <p className="font-bold text-royal-blue/40 text-sm italic uppercase tracking-widest">Private Cruise & Island Shuttles</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-sunset-orange/5 border border-sunset-orange/5">
                                        <div className="w-16 h-16 rounded-2xl bg-sunset-orange text-white flex items-center justify-center shrink-0 shadow-lg">
                                            <Star size={32} />
                                        </div>
                                        <div>
                                            <h5 className="font-black uppercase tracking-tighter text-xl text-royal-blue">Premium Stays</h5>
                                            <p className="font-bold text-royal-blue/40 text-sm italic uppercase tracking-widest">Luxury Eco-Retreats</p>
                                        </div>
                                    </div>
                                </div>

                                <Magnetic>
                                    <button 
                                        onClick={() => {
                                            const msg = "ANDAMAN EXPEDITION: I am inquiring about the 7-Day Island Adventure protocol.";
                                            window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, '_blank');
                                        }}
                                        className="w-full bg-royal-blue text-white py-8 px-12 rounded-[2rem] font-black uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-sunset-orange transition-all duration-500 shadow-2xl group"
                                    >
                                        Initiate Mission Inquiry <Anchor className="group-hover:rotate-12 transition-transform" />
                                    </button>
                                </Magnetic>
                            </div>

                            <div className="space-y-12">
                                {andamanTour.itinerary.map((day, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="relative pl-12 md:pl-20 pb-12 border-l border-royal-blue/10 last:border-0"
                                    >
                                        <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-royal-blue flex items-center justify-center z-10 text-[10px] font-black">
                                            {day.day}
                                        </div>
                                        <h4 className="text-sunset-orange font-black uppercase tracking-widest text-[10px] mb-4">Operational Day {day.day}</h4>
                                        <h3 className="text-2xl md:text-3xl font-black text-royal-blue uppercase tracking-tighter mb-4">
                                            {idx === 0 ? "Strategic Arrival" : 
                                             idx === 1 ? "Island Deployment" : 
                                             idx === 2 ? "Marine Operations" : 
                                             idx === 3 ? "Secondary Base Shift" : 
                                             idx === 4 ? "HQ Retreat" : 
                                             idx === 5 ? "Environmental Recon" : "Final Extraction"}
                                        </h3>
                                        <p className="text-royal-blue/70 text-base md:text-lg font-bold italic leading-relaxed">
                                            {day.plan}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Marine Fleet Selection */}
                <section className="py-24 md:py-40 bg-royal-blue text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sunset-orange/10 blur-[150px] rounded-full" />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="mb-20 text-center">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-4">Tactical Sea Assets</h4>
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">Marine Fleet Selection</h2>
                            <p className="text-white/40 font-bold italic text-lg max-w-2xl mx-auto italic">
                                From private catamarans to high-speed luxury shuttles, our marine wing ensures your inter-island transition is as refined as our land-based deployments.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                { title: "Elite Catamaran", desc: "Private charter for multi-island luxury voyages. Includes on-board chef and marine concierge.", img: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=2670&auto=format&fit=crop" },
                                { title: "Vector Speedboat", desc: "Tactical high-speed transit for prioritized inter-island missions. Zero-friction logistics.", img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2670&auto=format&fit=crop" }
                            ].map((asset, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10"
                                >
                                    <Image src={asset.img} alt={asset.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/60 to-transparent p-12 flex flex-col justify-end">
                                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{asset.title}</h3>
                                        <p className="text-white/60 font-bold italic text-sm">{asset.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Operational FAQ Section */}
                <section className="py-24 md:py-40 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-20">
                                <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-4">Mission Intelligence</h4>
                                <h2 className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-8">Operational FAQs</h2>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { q: "Is mobile connectivity available across all islands?", a: "While Port Blair and Havelock offer stable LTE, some remote exploration zones are intended for 'Deep Disconnect' protocols. We provide satellite backups for emergency mission coordination." },
                                    { q: "What is the best timeline for an Andaman Expedition?", a: "The optimal operating window is between October and May, characterized by calm Andaman Sea conditions and maximum visibility for diving operations." },
                                    { q: "Can we customize the inter-island transfer timing?", a: "Absolutely. Our elite logistics wing coordinates around your preferred rhythm, though certain marine transits are subject to local harbor authority schedules." }
                                ].map((faq, idx) => (
                                    <div key={idx} className="p-8 md:p-12 rounded-[2.5rem] bg-royal-blue/5 border border-royal-blue/5 group hover:bg-royal-blue hover:text-white transition-all duration-500">
                                        <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4">{faq.q}</h4>
                                        <p className="font-bold italic opacity-60 leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Bridge */}
                <section className="pb-40 container mx-auto px-6">
                    <div className="relative rounded-[4rem] overflow-hidden bg-royal-blue p-12 md:p-32 text-center border-t border-white/10">
                        <div className="absolute inset-0 z-0">
                            <Image 
                                src="https://images.unsplash.com/photo-1544735745-b89b57c7eb8f?q=80&w=2670&auto=format&fit=crop" 
                                alt="Andaman Shore" 
                                fill 
                                className="object-cover opacity-20" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/80 to-transparent" />
                        </div>
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                                Ready to <span className="text-sunset-orange">Deploy?</span>
                            </h2>
                            <p className="text-white/60 text-lg md:text-2xl font-bold italic mb-16 max-w-2xl mx-auto">
                                The islands are waiting for the few who know how to navigate them. Initiate your protocol today.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-8">
                                <Magnetic>
                                    <button 
                                        onClick={() => {
                                            const msg = "ANDAMAN EXPEDITION: I am ready to begin the booking protocol.";
                                            window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, '_blank');
                                        }}
                                        className="bg-sunset-orange text-white py-8 px-16 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-2xl"
                                    >
                                        Execute Booking
                                    </button>
                                </Magnetic>
                                <Magnetic>
                                    <Link 
                                        href="/destinations"
                                        className="bg-white/10 backdrop-blur-xl text-white py-8 px-16 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all duration-500 border border-white/10"
                                    >
                                        Explore Other Zones
                                    </Link>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
