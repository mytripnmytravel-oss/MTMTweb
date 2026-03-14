"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, Tilt3D } from "@/components/ClientComponents";
import Link from "next/link";
import { Landmark, Award, ArrowRight, Languages } from "lucide-react";

export default function ExpertGuidesPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.h4
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-royal-blue font-black uppercase tracking-[0.8em] text-sm mb-6"
                            >
                                The Storytellers
                            </motion.h4>
                            <CharBlurIn
                                text="EXPERT GUARDIANS"
                                className="text-5xl md:text-[6.5rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                            />
                            <p className="text-dark-slate font-bold italic text-lg opacity-60 leading-relaxed mb-12">
                                We do not employ generic tour guides. Our intellectual assets are Ministry of Tourism certified historians, architectural savants, and multi-lingual storytellers framing the true narrative of the subcontinent.
                            </p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-royal-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-sunset-orange transition-all duration-500 flex items-center gap-4 shadow-xl">
                                        Request an Attaché <ArrowRight size={16} />
                                    </button>
                                </Link>
                            </Magnetic>
                        </div>
                        <div className="grid grid-cols-2 gap-6 relative">
                            <Tilt3D>
                                <div className="glass-card p-8 rounded-[3rem] aspect-square flex flex-col justify-between border-royal-blue/10 bg-royal-blue/5">
                                    <Award className="text-royal-blue" size={40} />
                                    <div>
                                        <h5 className="text-royal-blue font-black uppercase tracking-widest text-xs mb-2">Vetted Intelligence</h5>
                                        <p className="text-dark-slate/60 text-[10px] font-bold italic">Top 1% of government certified professionals.</p>
                                    </div>
                                </div>
                            </Tilt3D>
                            <Tilt3D>
                                <div className="glass-card p-8 rounded-[3rem] aspect-square flex flex-col justify-between border-royal-blue/10 mt-12 bg-sunset-orange/5 border-sunset-orange/20 shadow-xl">
                                    <Languages className="text-sunset-orange" size={40} />
                                    <div>
                                        <h5 className="text-royal-blue font-black uppercase tracking-widest text-xs mb-2">Multi-Lingual</h5>
                                        <p className="text-dark-slate/60 text-[10px] font-bold italic">Flawless execution in your native language.</p>
                                    </div>
                                </div>
                            </Tilt3D>
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-slate-50 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <Landmark className="text-royal-blue mx-auto mb-10" size={60} />
                        <h2 className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-[0.9] mb-12">
                            SKIP THE <br /> <span className="text-sunset-orange">NOISE.</span>
                        </h2>
                        <p className="text-dark-slate/60 font-bold italic text-xl mb-16 max-w-2xl mx-auto">
                            Our guardians provide more than history; they supply diplomatic immunity. Expect VIP monument entry, flawless scheduling, and complete removal of all friction from your journey.
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
