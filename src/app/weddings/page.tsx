"use client";

import React from "react";
import { motion } from "framer-motion";
import { Castle, Gem, Shield, Crown, MapPin, Users, HeartHandshake, ArrowRight, Music, Camera, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";
import Link from "next/link";
import Image from "next/image";

const weddingVenues = [
    {
        title: "The Rajputana Palaces",
        desc: "Centuries-old royal courts in Jaipur, Udaipur, and Jodhpur. Maximum architectural grandeur and historical weight.",
        icon: Castle,
        features: ["Elephant Processions", "Royal Courtyards", "Fireworks"],
        theme: "from-orange-50 to-sunset-orange/10",
        accent: "text-sunset-orange",
        image: "/wedding.png"
    },
    {
        title: "The Taj Matrix",
        desc: "Ultra-luxury hotel buyouts overlooking the Taj Mahal. High-efficiency logistics meets the ultimate monument to love.",
        icon: Gem,
        features: ["Monument Views", "5-Star Global Catering", "VIP Air Transit"],
        theme: "from-blue-50 to-royal-blue/10",
        accent: "text-royal-blue",
        image: "/taj-golden.png"
    },
    {
        title: "The Imperial Forts",
        desc: "Elevated fortresses offering complete exclusivity, defensible privacy, and panoramic views of the Aravalli range.",
        icon: Crown,
        features: ["Absolute Privacy", "Historical Tapestry", "Drone Surveillance"],
        theme: "from-purple-50 to-purple-600/10",
        accent: "text-purple-600",
        image: "/jaipur-mahal.png"
    }
];

export default function RoyalWeddingsPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                {/* --- Hero Section --- */}
                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6"
                        >
                            Matrimonial Logistics
                        </motion.h4>
                        <CharBlurIn
                            text="ROYAL WEDDING PROTOCOL"
                            className="text-5xl md:text-[7.5rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                        />
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-dark-slate font-bold italic text-xl max-w-2xl opacity-60 leading-relaxed"
                            >
                                We do not plan events; we execute high-end matrimonial deployments. Complete architectural buyouts, private air transit, and military-grade security for the ultimate Indian royal wedding.
                            </motion.p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-royal-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-sunset-orange transition-all duration-500 shadow-xl">
                                        Initiate Protocol <ArrowRight size={16} />
                                    </button>
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </section>

                {/* --- Strategic Venues --- */}
                <section className="py-20 container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter mb-8">THE BATTLEGROUNDS</h2>
                        <p className="text-sunset-orange font-black uppercase tracking-widest text-xs">Tier-1 Architectural Sanctuaries</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {weddingVenues.map((venue, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group relative h-[650px] rounded-[3rem] overflow-hidden bg-gradient-to-br ${venue.theme} border border-royal-blue/5`}
                            >
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                                    <Image
                                        src={venue.image}
                                        alt={venue.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 mix-blend-multiply"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent p-10 flex flex-col justify-end">
                                    <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 ${venue.accent}`}>
                                        <venue.icon size={32} />
                                    </div>
                                    <h3 className="text-3xl font-black text-royal-blue uppercase tracking-tighter mb-4">{venue.title}</h3>
                                    <p className="text-dark-slate/60 font-bold italic text-sm mb-8">{venue.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {venue.features.map(feature => (
                                            <span key={feature} className="px-3 py-1.5 rounded-full bg-white border border-royal-blue/10 text-royal-blue font-black uppercase text-[9px] tracking-widest">{feature}</span>
                                        ))}
                                    </div>
                                    <Link href="/booking" className={`font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 ${venue.accent} hover:text-royal-blue transition-colors`}>
                                        Commandeer Venue <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- The Execution Matrix --- */}
                <section className="py-40 bg-royal-blue relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-sunset-orange/5 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-8">Tactical Execution</h4>
                                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                                    FLAWLESS <br /> <span className="text-white/30 text-4xl">LOGISTICS.</span>
                                </h2>
                                <p className="text-white/60 font-bold italic text-xl mb-12">
                                    Managing 500+ ultra-high-net-worth guests requires military precision. From tarmac to palace, we act as your central command.
                                </p>
                                <div className="space-y-6 mb-16">
                                    {[
                                        { title: "Elite Fleet Extraction", desc: "Coordinated luxury ground transport from 5 major Indian airports.", icon: MapPin },
                                        { title: "VIP Concierge", desc: "Dedicated attachés for every C-level executive and VIP guest.", icon: Users },
                                        { title: "Secure Perimeter", desc: "Invisible but absolute security rings, drone defense, and privacy shields.", icon: Shield },
                                        { title: "Culinary Orchestration", desc: "Synchronized global catering capable of handling complex dietary matrices.", icon: Utensils }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="w-10 h-10 rounded-xl bg-sunset-orange flex items-center justify-center shrink-0">
                                                <step.icon size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <h5 className="text-white font-black uppercase tracking-widest text-sm mb-2">{step.title}</h5>
                                                <p className="text-white/40 font-bold italic text-xs">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 relative">
                                <Tilt3D>
                                    <div className="glass-card p-8 rounded-[3rem] aspect-square flex flex-col justify-between border-white/10">
                                        <Music className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-black uppercase tracking-widest text-xs mb-2">Sonic Architecture</h5>
                                            <p className="text-white/40 text-[10px] font-bold italic">Global artist procurement and stadium-grade acoustics.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-8 rounded-[3rem] aspect-square flex flex-col justify-between border-white/10 mt-12 bg-sunset-orange/20 border-sunset-orange/30">
                                        <Camera className="text-white" size={40} />
                                        <div>
                                            <h5 className="text-white font-black uppercase tracking-widest text-xs mb-2">Cinematic Capture</h5>
                                            <p className="text-white/80 text-[10px] font-bold italic">Netflix-tier documentary crews for the ultimate wedding archive.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-8 rounded-[3rem] aspect-square flex flex-col justify-between border-white/10">
                                        <HeartHandshake className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-black uppercase tracking-widest text-xs mb-2">Vendor Command</h5>
                                            <p className="text-white/40 text-[10px] font-bold italic">Single point of contact managing 50+ tier-1 contractors.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-8 rounded-[3rem] aspect-square flex flex-col justify-between border-white/10 mt-12">
                                        <Crown className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-black uppercase tracking-widest text-xs mb-2">The Royal Mandate</h5>
                                            <p className="text-white/40 text-[10px] font-bold italic">Absolute perfection over multi-day ceremonial deployments.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Final CTA --- */}
                <section className="py-40 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto flex flex-col items-center">
                            <div className="w-24 h-24 rounded-full bg-royal-blue/5 flex items-center justify-center mb-12">
                                <Gem className="text-royal-blue" size={40} />
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-[0.9] mb-12">
                                AUTHORIZE <br /> <span className="text-sunset-orange">THE PROTOCOL.</span>
                            </h2>
                            <p className="text-dark-slate/60 font-bold italic text-xl mb-16 px-12">
                                Royal wedding deployments require a minimum 6-month lead time for architectural buyouts and security clearance.
                            </p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-royal-blue text-white px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-sm hover:bg-sunset-orange hover:text-white transition-all duration-500 shadow-2xl">
                                        Schedule Confidential Briefing
                                    </button>
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
