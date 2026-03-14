"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplets, Leaf, Flame, Sparkles, Sprout, ArrowRight, ShieldCheck, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";
import Link from "next/link";
import Image from "next/image";

export default function AyurvedicPage() {
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
                                className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6"
                            >
                                Ancient Science
                            </motion.h4>
                            <CharBlurIn
                                text="AYURVEDIC ALCHEMY"
                                className="text-5xl md:text-[7rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                            />
                            <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed mb-12">
                                Access 5000-year-old biological optimization protocols. We deploy authentic Panchakarma detoxification and herbal cellular regeneration in India's most pristine environments.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Magnetic>
                                    <Link href="/booking">
                                        <button className="bg-royal-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-sunset-orange transition-all duration-500">
                                            Initiate Detox <ArrowRight size={16} />
                                        </button>
                                    </Link>
                                </Magnetic>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sunset-orange/10 flex items-center justify-center">
                                        <Leaf className="text-sunset-orange" size={20} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue/40">100% Organic</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Tilt3D>
                                <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-orange-50 border border-sunset-orange/10">
                                    <Image
                                        src="/taj-golden.png" // Placeholder
                                        alt="Ayurvedic Treatment"
                                        fill
                                        className="object-cover opacity-80 mix-blend-multiply filter contrast-125"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-sunset-orange/40 to-royal-blue/20" />
                                </div>
                            </Tilt3D>
                        </div>
                    </div>
                </section>

                {/* --- Core Protocols --- */}
                <section className="py-40 bg-orange-50/50 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter mb-8">PANCHAKARMA</h2>
                            <p className="text-sunset-orange font-black uppercase tracking-widest text-xs">The 5 Tier Detoxification Matrix</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Vamana", desc: "Respiratory and upper gastrointestinal tract clearing.", icon: Wind },
                                { title: "Virechana", desc: "Hepatic and gallbladder toxin elimination protocol.", icon: Flame },
                                { title: "Basti", desc: "Lower gut restoration and microbiome recalibration.", icon: Sprout },
                                { title: "Nasya", desc: "Cranial cavity clearing and neural pathway opening.", icon: Sparkles },
                                { title: "Raktamokshana", desc: "Deep blood purification and dermatological reset.", icon: Droplets }
                            ].map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-12 rounded-[2.5rem] shadow-lg border border-sunset-orange/5 hover:border-sunset-orange/30 transition-all group"
                                >
                                    <pillar.icon className="text-sunset-orange mb-8 transition-transform group-hover:scale-125 duration-500" size={40} />
                                    <h4 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">{pillar.title}</h4>
                                    <p className="text-dark-slate/60 font-bold italic text-sm">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Authority Summary --- */}
                <section className="py-40 bg-royal-blue">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <ShieldCheck className="text-sunset-orange mx-auto mb-12" size={60} />
                            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-16">
                                CERTIFIED <br /> <span className="text-sunset-orange">NATURE.</span>
                            </h2>
                            <p className="text-white/60 font-bold italic text-2xl mb-16 px-12">
                                MyTripMyTravel partners exclusively with Ministry of AYUSH certified facilities. No compromises, no shortcuts, just the purest form of ancient medicine.
                            </p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-sunset-orange text-white px-20 py-8 rounded-full font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-sunset-orange/20 hover:bg-white hover:text-sunset-orange transition-all duration-500">
                                        Commence Therapy
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
