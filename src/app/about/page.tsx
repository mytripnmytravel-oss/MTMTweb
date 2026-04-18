"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";
import { CharBlurIn } from "@/components/ClientComponents";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] selection:bg-sunset-orange selection:text-white font-sans overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 right-[-10%] w-[800px] h-[800px] bg-sunset-orange/10 blur-[120px] rounded-full mix-blend-multiply" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-royal-blue/10 blur-[100px] rounded-full mix-blend-multiply" />
                    <div className="absolute inset-0 bg-grid-royal-blue/[0.03] bg-[size:3vw_3vw]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h4 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-8"
                        >
                            Our Protocol
                        </motion.h4>
                        
                        <CharBlurIn 
                            text="BEYOND" 
                            className="text-6xl md:text-[8rem] font-black text-royal-blue leading-none tracking-tighter uppercase mb-4"
                        />
                        <CharBlurIn 
                            text="CONVENTIONAL" 
                            className="text-6xl md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-royal-blue leading-none tracking-tighter uppercase"
                        />

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-dark-slate font-bold text-lg md:text-xl mt-12 max-w-2xl mx-auto leading-relaxed italic opacity-80"
                        >
                            "We don't sell tours. We architect uncompromising journeys. Translating high-speed chauffeured intent into a 3D geometric sanctuary of travel."
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Editorial Story Section */}
            <section className="py-20 md:py-40 bg-white relative z-20 border-t border-royal-blue/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-4xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-8">
                                The Genesis <br /> of Luxury.
                            </h2>
                            <div className="space-y-6 text-dark-slate font-medium text-lg leading-relaxed opacity-80">
                                <p>
                                    India is not a country you simply look at; it is an environment you must absorb, navigate, and respect. It requires a master key. MyTripMyTravel was born from an obsession with perfect execution. We realized that true luxury travel missing from the modern market was predictability clothed in absolute comfort.
                                </p>
                                <p>
                                    We didn’t just want to provide cars. We wanted to build a fleet. We didn’t want to hand you an itinerary; we wanted to provide a master-crafted protocol.
                                </p>
                                <p className="font-black italic text-royal-blue opacity-100">
                                    Every component of our Golden Triangle operations, our elite fleet rentals, and our wellness sanctuary expeditions is engineered to ensure one thing: absolute peace of mind.
                                </p>
                            </div>
                        </div>
                        
                        <div className="order-1 md:order-2 relative perspective-1000">
                             <div className="relative aspect-[4/5] glass-card p-4 rounded-3xl overflow-hidden transform md:rotate-y-[-10deg] md:rotate-x-[5deg]">
                                 <Image 
                                    src="/hero-taj.png" 
                                    alt="The Eternal Taj Archive" 
                                    fill 
                                    className="object-cover rounded-2xl filter contrast-125"
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent" />
                                 <div className="absolute bottom-10 left-10 text-white">
                                     <div className="font-black uppercase tracking-[0.5em] text-[10px] text-sunset-orange mb-2">Archive 01</div>
                                     <div className="text-3xl font-black uppercase tracking-tighter">The Standard</div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Architects (Team) Section */}
            <section className="py-32 relative bg-royal-blue z-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:3vw_3vw]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-4">The Council</h4>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">The Architects</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        
                        {/* Team Member 1 */}
                        <div className="group">
                            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-white/5 border border-white/10">
                                <Image src="/team-1.jpg" alt="Founder & Director" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-transparent to-transparent opacity-80" />
                            </div>
                            <div className="pl-4 border-l-2 border-sunset-orange">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Director of Vision</h3>
                                <p className="text-sunset-orange text-[10px] font-black uppercase tracking-[0.4em] mb-3">Executive Operations</p>
                                <p className="text-white/60 font-medium text-sm leading-relaxed">
                                    The strategic mind behind our strict operational protocols. Ensures every vehicle, itinerary, and engagement meets the absolute standard.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="group md:mt-16">
                            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-white/5 border border-white/10">
                                <Image src="/team-2.jpg" alt="Head of Experience" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-transparent to-transparent opacity-80" />
                            </div>
                            <div className="pl-4 border-l-2 border-sunset-orange">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Head of Experience</h3>
                                <p className="text-sunset-orange text-[10px] font-black uppercase tracking-[0.4em] mb-3">Client Relations & Curation</p>
                                <p className="text-white/60 font-medium text-sm leading-relaxed">
                                    Curating the soul of the journey. Obsessed with translating standard holidays into unforgettable, culturally rich cinematic memories.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="group md:-mt-8">
                            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-white/5 border border-white/10">
                                <Image src="/team-3.jpg" alt="Head of Logistics" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-transparent to-transparent opacity-80" />
                            </div>
                            <div className="pl-4 border-l-2 border-sunset-orange">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Head of Kinetics</h3>
                                <p className="text-sunset-orange text-[10px] font-black uppercase tracking-[0.4em] mb-3">Fleet & Transport Logistics</p>
                                <p className="text-white/60 font-medium text-sm leading-relaxed">
                                    Pilots the moving parts. Enforces our zero-compromise maintenance and routing protocols for our elite fleet network.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}
