"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Wind, Fingerprint, Waves, BrainCircuit, ArrowRight, BedDouble } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";
import Link from "next/link";
import Image from "next/image";

export default function MassagePage() {
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
                                className="text-purple-600 font-black uppercase tracking-[0.8em] text-sm mb-6"
                            >
                                Deep Reset
                            </motion.h4>
                            <CharBlurIn
                                text="KINETIC RECOVERY"
                                className="text-5xl md:text-[7.5rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                            />
                            <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed mb-12">
                                Elite performance recovery based on ancient Indian massage therapies (Abhyanga, Marma Therapy). We manipulate structural fascia to reset neural fatigue and muscular tension.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Magnetic>
                                    <Link href="/booking">
                                        <button className="bg-purple-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-royal-blue transition-all duration-500">
                                            Schedule Reset <ArrowRight size={16} />
                                        </button>
                                    </Link>
                                </Magnetic>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                        <Activity className="text-purple-600" size={20} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue/40">Fascial Release</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Tilt3D>
                                <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-purple-50">
                                    <Image
                                        src="/wellness.png" // Placeholder
                                        alt="Deep Tissue Massage"
                                        fill
                                        className="object-cover mix-blend-multiply opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
                                </div>
                            </Tilt3D>
                        </div>
                    </div>
                </section>

                {/* --- The Modalities --- */}
                <section className="py-40 bg-purple-50/30 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Abhyanga", desc: "Warm herbal oil saturation for deep cellular nourishment and Vata dosha balancing.", icon: Waves },
                                { title: "Marma Point", desc: "Precision stimulation of 107 vital energy nodes to clear pranic blocks.", icon: Fingerprint },
                                { title: "Shirodhara", desc: "Continuous oil stream over the Ajna chakra for extreme central nervous system sedation.", icon: BrainCircuit },
                                { title: "Udwarthana", desc: "Dry herbal powder friction therapy to accelerate lipid metabolism.", icon: Wind }
                            ].map((modality, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-12 rounded-[2.5rem] shadow-lg border border-purple-100 hover:border-purple-300 transition-all group"
                                >
                                    <modality.icon className="text-purple-600 mb-8 transition-transform group-hover:scale-125 duration-500" size={40} />
                                    <h4 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">{modality.title}</h4>
                                    <p className="text-dark-slate/60 font-bold italic text-sm">{modality.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Authority Summary --- */}
                <section className="py-40 bg-royal-blue">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <BedDouble className="text-sunset-orange mx-auto mb-12" size={60} />
                            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-16">
                                UNCOMPROMISING <br /> <span className="text-purple-400">RELAXATION.</span>
                            </h2>
                            <p className="text-white/60 font-bold italic text-2xl mb-16 px-12">
                                Executed exclusively in our 5-star Silent Havelis and premium medical luxury wings. Our kinetic therapists undergo rigorous anatomical and energy-center training before touching a single client.
                            </p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-purple-600 text-white px-20 py-8 rounded-full font-black uppercase tracking-[0.3em] text-sm shadow-2xl hover:bg-white hover:text-purple-600 transition-all duration-500">
                                        Book Sanctuary Therapy
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
