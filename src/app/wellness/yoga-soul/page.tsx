"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wind, MapPin, ArrowRight, Sun, Moon, Zap, UserCheck, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";
import Link from "next/link";
import Image from "next/image";

export default function YogaSoulPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                {/* --- Hero Section --- */}
                <section className="pt-60 pb-20 container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.h4
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-emerald-600 font-black uppercase tracking-[0.8em] text-sm mb-6"
                            >
                                Soul Calibration
                            </motion.h4>
                            <CharBlurIn
                                text="YOGA AT THE SOURCE"
                                className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                            />
                            <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed mb-12">
                                Not just movement, but a geometric realignment of your biological and spiritual architecture. Led by master practitioners in India's most resonant power spots.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Magnetic>
                                    <Link href="/booking">
                                        <button className="bg-royal-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-sunset-orange transition-all duration-500">
                                            Reserve This Mission <ArrowRight size={16} />
                                        </button>
                                    </Link>
                                </Magnetic>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <UserCheck className="text-emerald-600" size={20} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue/40">Master Led</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Tilt3D>
                                <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src="/wellness.png"
                                        alt="Yoga Sanctuary"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/40 to-transparent" />
                                </div>
                            </Tilt3D>
                        </div>
                    </div>
                </section>

                {/* --- Precision Modules --- */}
                <section className="py-40 bg-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter mb-8">THE DISCIPLINE</h2>
                            <p className="text-dark-slate/40 font-black uppercase tracking-widest text-xs">Four Pillars of Neural Synchronization</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { title: "Dhyana", desc: "Absolute focus protocols", icon: Sun, color: "emerald-600" },
                                { title: "Pranayama", desc: "Oxygen calibration", icon: Wind, color: "blue-600" },
                                { title: "Asana", desc: "Structural alignment", icon: Zap, color: "orange-600" },
                                { title: "Nidra", desc: "Neural reset state", icon: Moon, color: "purple-600" }
                            ].map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all group"
                                >
                                    <pillar.icon className={`text-${pillar.color} mb-8 mb-8 transition-transform group-hover:scale-125 duration-500`} size={40} />
                                    <h4 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">{pillar.title}</h4>
                                    <p className="text-dark-slate/60 font-bold italic text-sm">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Sanctuary Archive --- */}
                <section className="py-40 container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-xs mb-8">Vetted Geography</h4>
                            <h3 className="text-4xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-12">
                                WHERE THE <br /> <span className="text-white bg-royal-blue px-4">SOUL MEETS.</span>
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { place: "RISHIKESH", tag: "The Himalayan Threshold" },
                                    { place: "VARANASI", tag: "The Eternal Frequency" },
                                    { place: "JAIPUR", tag: "The Palace Meridian" }
                                ].map((loc, i) => (
                                    <div key={i} className="flex justify-between items-center py-6 border-b border-royal-blue/10">
                                        <span className="text-xl font-black text-royal-blue tracking-tighter uppercase">{loc.place}</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-sunset-orange opacity-60">{loc.tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-8 grid grid-cols-2 gap-8">
                            <div className="h-[400px] rounded-[3rem] overflow-hidden relative group">
                                <Image src="/hero-taj.png" alt="Rishikesh" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-stone-900/40 flex items-end p-10">
                                    <p className="text-white font-black uppercase tracking-widest text-xs">High Altitude Recovery</p>
                                </div>
                            </div>
                            <div className="h-[400px] rounded-[3rem] overflow-hidden relative group mt-12">
                                <Image src="/jaipur-mahal.png" alt="Jaipur" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-stone-900/40 flex items-end p-10">
                                    <p className="text-white font-black uppercase tracking-widest text-xs">Royal Courtyard Yoga</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Authority Summary --- */}
                <section className="py-40 bg-royal-blue">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <Shield className="text-sunset-orange mx-auto mb-12" size={60} />
                            <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-16">
                                PROTOCOL <br /> <span className="text-sunset-orange">ABSOLUTE.</span>
                            </h2>
                            <p className="text-white/60 font-bold italic text-2xl mb-16 px-12">
                                Every yoga mission initiated by MyTripMyTravel is vetted for authenticity, lineage, and environmental resonance. We do not offer generic tours; we architect spiritual transitions.
                            </p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-white text-royal-blue px-20 py-8 rounded-full font-black uppercase tracking-[0.3em] text-sm hover:bg-sunset-orange hover:text-white transition-all duration-500">
                                        Secure This Mission
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
