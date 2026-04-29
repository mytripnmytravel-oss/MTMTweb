"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";
import { CharBlurIn, Magnetic } from "@/components/ClientComponents";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] selection:bg-sunset-orange selection:text-white font-sans overflow-hidden">
            <Navbar />

            {/* Hero Section: The Mosaic Protocol */}
            <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-royal-blue">
                {/* Background Image Marquee (Repeated Effect) */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="flex w-[200%] h-full animate-marquee pointer-events-none">
                        {[1, 2, 3, 1, 2, 3].map((num, i) => (
                            <div key={i} className="relative w-1/6 h-full border-r border-white/5">
                                <Image 
                                    src={`/about-hero-${num}.png`} 
                                    alt="Luxury Protcol" 
                                    fill 
                                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-royal-blue/60" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/90 via-transparent to-royal-blue/90 z-[1]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            className="inline-block px-6 py-2 rounded-full border border-sunset-orange/30 bg-sunset-orange/5 backdrop-blur-md mb-8"
                        >
                            <span className="text-sunset-orange font-black uppercase tracking-[0.6em] text-[10px]">The Archive 001</span>
                        </motion.div>
                        
                        <CharBlurIn 
                            text="BEYOND" 
                            className="text-7xl md:text-[8rem] font-black text-white leading-none tracking-tighter uppercase mb-4 drop-shadow-2xl"
                        />
                        <CharBlurIn 
                            text="CONVENTIONAL" 
                            className="text-7xl md:text-[8rem] font-black text-white leading-none tracking-tighter uppercase filter drop-shadow-[0_10px_30px_rgba(249,115,22,0.4)]"
                        />

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16"
                        >
                            <div className="flex -space-x-4 mb-4 md:mb-0">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-16 h-16 rounded-full border-4 border-royal-blue overflow-hidden relative shadow-2xl skew-x-12 hover:skew-x-0 transition-transform">
                                        <Image src={`/about-hero-${i}.png`} alt="Elite Archive" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-white/80 font-bold text-lg md:text-xl max-w-xl leading-relaxed italic text-center md:text-left">
                                "We don't sell tours. We architect uncompromising journeys. Translating high-speed chauffeured intent into a 3D geometric sanctuary of travel."
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Vertical Scroll Indicator Protocol */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-sunset-orange to-transparent animate-pulse" />
                    <span className="text-[8px] font-black text-sunset-orange uppercase tracking-[0.5em] vertical-text">Scroll to Briefing</span>
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
                                    alt="The Majestic Taj Mahal - The Genesis of Our Luxury Journeys" 
                                    fill 
                                    className="object-cover rounded-2xl"
                                 />
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
                                <Image src="/team-1.jpg" alt="Nitesh Jain" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-transparent to-transparent opacity-80" />
                            </div>
                            <div className="pl-4 border-l-2 border-sunset-orange">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Nitesh Jain</h3>
                                <p className="text-sunset-orange text-[10px] font-black uppercase tracking-[0.4em] mb-3">Founder</p>
                                <p className="text-white/60 font-medium text-sm leading-relaxed">
                                    I started MyTripMyTravel with a simple belief, travel should be meaningful, seamless, and built on trust. After completing my MBA, I explored different paths, from recruitment consulting to eventually finding my passion in travel. That journey shaped how I see the world today. Travel has been my greatest teacher. It opened my eyes to cultures, people, and experiences that go far beyond destinations. With MyTripMyTravel, I wanted to create more than just packages, I wanted to create journeys that people remember for a lifetime. We are a close-knit team working across multiple countries, ensuring every trip is handled with care and precision. I personally oversee operations to make sure every experience meets our standards. We don’t believe in selling the cheapest options. We believe in delivering the right experience, with honesty, quality, and attention to detail. My vision is simple: to build one of India’s most trusted travel companies, where people choose us not just for where we take them, but for how we make them feel along the way.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="group md:mt-16">
                            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-white/5 border border-white/10">
                                <Image src="/team-2.jpg" alt="Sarah Sahai" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-transparent to-transparent opacity-80" />
                            </div>
                            <div className="pl-4 border-l-2 border-sunset-orange">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Sarah Sahai</h3>
                                <p className="text-sunset-orange text-[10px] font-black uppercase tracking-[0.4em] mb-3">Market Expansion & Partnerships</p>
                                <p className="text-white/60 font-medium text-sm leading-relaxed">
                                    Ms. Sarah Sahai is associated with MyTripMyTravel, where she contributes to international market expansion, strategic partnerships, and global business development initiatives. With a strong foundation in client relations, branding, and cross-cultural engagement, she brings a refined, people-centric approach to building sustainable business relationships. Having travelled to over 25 countries, she possesses a nuanced understanding of global markets, cultural dynamics, and evolving traveler expectations. Operating across the UK and UAE, she plays a pivotal role in strengthening the company’s international presence and fostering high-value collaborations.
                                    <br /><br />
                                    She is also the Founder of MindWave, a wellness and mental health platform dedicated to emotional well-being and personal growth.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="group md:-mt-8">
                            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-white/5 border border-white/10">
                                <Image src="/team-3.jpg" alt="Ajsal Abbas" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-transparent to-transparent opacity-80" />
                            </div>
                            <div className="pl-4 border-l-2 border-sunset-orange">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Ajsal Abbas</h3>
                                <p className="text-sunset-orange text-[10px] font-black uppercase tracking-[0.4em] mb-3">Technology Lead</p>
                                <p className="text-white/60 font-medium text-sm leading-relaxed">
                                    Mastering the digital kinetic layer. Ajsal takes care of the entire tech stack, from real-time fleet telemetry to our seamless digital inquiry interface.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section: Core Directives */}
            <section className="py-20 md:py-40 bg-[#F8FAFC] relative z-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-8">Directives</h4>
                            <h2 className="text-5xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-12">
                                Our Sacred <br /> <span className="text-sunset-orange">Standards.</span>
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="glass-card p-8 border-royal-blue/5">
                                    <div className="w-12 h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center text-royal-blue mb-6">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-royal-blue uppercase tracking-tighter mb-4">Integrity</h3>
                                    <p className="text-dark-slate/60 text-sm font-medium">Absolute transparency in every transaction, route, and palatial accommodation.</p>
                                </div>
                                <div className="glass-card p-8 border-royal-blue/5">
                                    <div className="w-12 h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center text-royal-blue mb-6">
                                        <Compass size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-royal-blue uppercase tracking-tighter mb-4">Precision</h3>
                                    <p className="text-dark-slate/60 text-sm font-medium">Engineering itineraries down to the second for a frictionless travel experience.</p>
                                </div>
                                <div className="glass-card p-8 border-royal-blue/5">
                                    <div className="w-12 h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center text-royal-blue mb-6">
                                        <Heart size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-royal-blue uppercase tracking-tighter mb-4">Humanity</h3>
                                    <p className="text-dark-slate/60 text-sm font-medium">Bespoke hospitality that treats every guest as a priority protocol.</p>
                                </div>
                                <div className="glass-card p-8 border-royal-blue/5">
                                    <div className="w-12 h-12 bg-royal-blue/10 rounded-xl flex items-center justify-center text-royal-blue mb-6">
                                        <Compass size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-royal-blue uppercase tracking-tighter mb-4">Heritage</h3>
                                    <p className="text-dark-slate/60 text-sm font-medium">Preserving the soul of India while providing 5-star modern sanctuaries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group perspective-1000 hidden lg:block">
                            <div className="relative aspect-square glass-card p-4 rounded-[3rem] overflow-hidden transform transition-all duration-700 group-hover:rotate-y-12">
                                <Image src="/about-standards.png" alt="The Protocol Foundation" fill className="object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-sunset-orange/40 to-royal-blue/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: The Protocol (Operations) */}
            <section className="py-20 md:py-40 bg-white relative z-20 border-t border-royal-blue/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-8">The Execution</h4>
                        <h2 className="text-5xl md:text-[8rem] font-black text-royal-blue leading-none tracking-tighter uppercase mb-12">How we <br /> Architecture.</h2>
                        <p className="text-dark-slate font-medium text-lg leading-relaxed opacity-60">
                            Our operational cycle is a high-velocity feedback loop of logistics, tech, and hospitality. Every mission briefing includes:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-12">
                        {[
                            { step: "01", title: "Curation", desc: "Translating your intent into a geometric master plan." },
                            { step: "02", title: "Activation", desc: "Deploying the elite fleet and assigned Attachés." },
                            { step: "03", title: "Execution", desc: "24/7 command center monitoring every kinetic movement." },
                            { step: "04", title: "Debrief", desc: "Ensuring the memory remains a zero-friction masterpiece." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative p-8 border-l border-royal-blue/10 group hover:border-sunset-orange transition-colors">
                                <div className="text-4xl font-black text-royal-blue/5 mb-6 transition-colors group-hover:text-sunset-orange/10">{item.step}</div>
                                <h3 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">{item.title}</h3>
                                <p className="text-dark-slate/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-20 bg-sunset-orange relative z-20 overflow-hidden">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                        Ready to Begin <br /> Your Protocol?
                    </h2>
                    <Magnetic>
                        <Link href="/contact" className="px-12 py-6 bg-royal-blue text-white rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
                            Initiate Contact
                        </Link>
                    </Magnetic>
                </div>
            </section>

            
            <Footer />
        </div>
    );
}
