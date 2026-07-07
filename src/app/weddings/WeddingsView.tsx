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
        features: ["Palace Courtyards", "Baraat Processions", "Heritage Suites"],
        theme: "from-orange-50 to-sunset-orange/10",
        accent: "text-sunset-orange",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Umaid_Bhawan_Palace%2C_Jodhpur.JPG",
        alt: "Umaid Bhawan Palace in Jodhpur, a Rajput palace wedding venue"
    },
    {
        title: "The Taj Matrix",
        desc: "Luxury hotel settings overlooking the Taj Mahal. Considered logistics beside the ultimate monument to love.",
        icon: Gem,
        features: ["Monument Views", "Curated Catering", "Arrival Transfers"],
        theme: "from-blue-50 to-royal-blue/10",
        accent: "text-royal-blue",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg",
        alt: "The Taj Mahal at sunrise, backdrop for an Agra wedding"
    },
    {
        title: "The Imperial Forts",
        desc: "Elevated fortresses offering complete exclusivity, privacy, and panoramic views of the Aravalli range.",
        icon: Crown,
        features: ["Full Exclusivity", "Historical Setting", "Discreet Security"],
        theme: "from-purple-50 to-purple-600/10",
        accent: "text-purple-600",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jodhpur-Mehrangarh_Fort-06-Blue_city-20131011.jpg",
        alt: "Mehrangarh Fort above Jodhpur's blue city, a heritage fort wedding setting"
    }
];

export default function WeddingsView() {
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
                            className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-6"
                        >
                            Matrimonial Logistics
                        </motion.h4>
                        <CharBlurIn
                            text="ROYAL WEDDING PROTOCOL"
                            className="text-5xl md:text-[7.5rem] font-semibold text-royal-blue uppercase tracking-tight leading-[0.85] mb-12"
                        />
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-dark-slate font-bold italic text-xl max-w-2xl opacity-60 leading-relaxed"
                            >
                                We do not simply plan events; we engineer complete matrimonial productions. Architectural venue buyouts, coordinated air and ground transit, and discreet professional security for a considered Indian royal wedding.
                            </motion.p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-royal-blue text-white px-10 py-5 rounded-full font-semibold uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-sunset-orange transition-all duration-500 shadow-xl">
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
                        <h2 className="text-4xl md:text-6xl font-semibold text-royal-blue uppercase tracking-tight mb-8">THE VENUE ARCHETYPES</h2>
                        <p className="text-sunset-orange font-semibold uppercase tracking-widest text-xs">Heritage Architectural Sanctuaries</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {weddingVenues.map((venue, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group relative h-[650px] rounded-2xl overflow-hidden bg-gradient-to-br ${venue.theme} border border-royal-blue/5`}
                            >
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                                    <Image
                                        src={venue.image}
                                        alt={venue.alt}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100 mix-blend-multiply"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent p-10 flex flex-col justify-end">
                                    <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 ${venue.accent}`}>
                                        <venue.icon size={32} />
                                    </div>
                                    <h3 className="text-3xl font-semibold text-royal-blue uppercase tracking-tight mb-4">{venue.title}</h3>
                                    <p className="text-dark-slate/60 font-bold italic text-sm mb-8">{venue.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {venue.features.map(feature => (
                                            <span key={feature} className="px-3 py-1.5 rounded-full bg-white border border-royal-blue/10 text-royal-blue font-semibold uppercase text-[9px] tracking-widest">{feature}</span>
                                        ))}
                                    </div>
                                    <Link href="/booking" className={`font-semibold uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 ${venue.accent} hover:text-royal-blue transition-colors`}>
                                        Enquire About Venue <ArrowRight size={14} />
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
                                <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-8">Tactical Execution</h4>
                                <h2 className="text-5xl md:text-7xl font-semibold text-white uppercase tracking-tight leading-none mb-12">
                                    FLAWLESS <br /> <span className="text-white/30 text-4xl">LOGISTICS.</span>
                                </h2>
                                <p className="text-white/60 font-bold italic text-xl mb-12">
                                    Large, multi-day celebrations demand meticulous coordination. From arrival to palace, we act as your single accountable point of command.
                                </p>
                                <div className="space-y-6 mb-16">
                                    {[
                                        { title: "Coordinated Fleet Transfers", desc: "Coordinated luxury ground transport from major Indian airports.", icon: MapPin },
                                        { title: "VIP Concierge", desc: "Dedicated attachés for key family members and honoured guests.", icon: Users },
                                        { title: "Discreet Security", desc: "Professional, discreet security coordination and guest privacy.", icon: Shield },
                                        { title: "Culinary Orchestration", desc: "Coordinated catering capable of handling complex dietary requirements.", icon: Utensils }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="w-10 h-10 rounded-xl bg-sunset-orange flex items-center justify-center shrink-0">
                                                <step.icon size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <h5 className="text-white font-semibold uppercase tracking-widest text-sm mb-2">{step.title}</h5>
                                                <p className="text-white/40 font-bold italic text-xs">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 relative">
                                <Tilt3D>
                                    <div className="glass-card p-8 rounded-2xl aspect-square flex flex-col justify-between border-white/10">
                                        <Music className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Sonic Architecture</h5>
                                            <p className="text-white/40 text-[10px] font-bold italic">Artist procurement and professional-grade acoustics.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-8 rounded-2xl aspect-square flex flex-col justify-between border-white/10 mt-12 bg-sunset-orange/20 border-sunset-orange/30">
                                        <Camera className="text-white" size={40} />
                                        <div>
                                            <h5 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Cinematic Capture</h5>
                                            <p className="text-white/80 text-[10px] font-bold italic">Professional documentary film crews for the wedding archive.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-8 rounded-2xl aspect-square flex flex-col justify-between border-white/10">
                                        <HeartHandshake className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">Vendor Command</h5>
                                            <p className="text-white/40 text-[10px] font-bold italic">A single point of contact coordinating every vendor and contractor.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-8 rounded-2xl aspect-square flex flex-col justify-between border-white/10 mt-12">
                                        <Crown className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-semibold uppercase tracking-widest text-xs mb-2">The Royal Mandate</h5>
                                            <p className="text-white/40 text-[10px] font-bold italic">Considered execution across multi-day ceremonial productions.</p>
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
                            <h2 className="text-4xl md:text-7xl font-semibold text-royal-blue uppercase tracking-tight leading-[0.9] mb-12">
                                AUTHORIZE <br /> <span className="text-sunset-orange">THE PROTOCOL.</span>
                            </h2>
                            <p className="text-dark-slate/60 font-bold italic text-xl mb-16 px-12">
                                Royal wedding productions typically require several months&apos; lead time for venue buyouts and coordination.
                            </p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-royal-blue text-white px-16 py-8 rounded-full font-semibold uppercase tracking-[0.3em] text-sm hover:bg-sunset-orange hover:text-white transition-all duration-500 shadow-md">
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
