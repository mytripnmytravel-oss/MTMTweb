"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplets, Leaf, Flame, Sparkles, Sprout, ArrowRight, ShieldCheck, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";
import WellnessProgrammeDetail from "@/components/wellness/WellnessProgrammeDetail";
import type { WellnessProgramme } from "@/data/wellness";
import Link from "next/link";
import Image from "next/image";

export default function AyurvedicView({ programme }: { programme: WellnessProgramme }) {
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
                                className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-6"
                            >
                                Ancient Science
                            </motion.h4>
                            <CharBlurIn
                                text="AYURVEDIC RESTORATION"
                                className="text-5xl md:text-[7rem] font-semibold text-royal-blue uppercase tracking-tight leading-[0.85] mb-12"
                            />
                            <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed mb-12">
                                Practitioner-led classical Ayurveda in its Keralan home — authentic Panchakarma and herbal therapies delivered at AYUSH-certified centres, framed honestly as recuperative care rather than a medical cure.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Magnetic>
                                    <Link href="/booking">
                                        <button className="bg-royal-blue text-white px-10 py-5 rounded-full font-semibold uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-sunset-orange transition-all duration-500">
                                            Plan a Programme <ArrowRight size={16} />
                                        </button>
                                    </Link>
                                </Magnetic>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sunset-orange/10 flex items-center justify-center">
                                        <Leaf className="text-sunset-orange" size={20} />
                                    </div>
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-royal-blue/40">AYUSH-certified partners</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Tilt3D>
                                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-md bg-orange-50 border border-sunset-orange/10">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Ayurvedic_Oil_Massage.jpg"
                                        alt="Ayurvedic oil therapy at a certified Kerala centre"
                                        fill
                                        className="object-cover opacity-80 mix-blend-multiply filter contrast-125"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-sunset-orange/40 to-royal-blue/20" />
                                </div>
                            </Tilt3D>
                        </div>
                    </div>
                </section>

                {/* --- Panchakarma pillars --- */}
                <section className="py-40 bg-orange-50/50 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-semibold text-royal-blue uppercase tracking-tight mb-8">PANCHAKARMA</h2>
                            <p className="text-sunset-orange font-semibold uppercase tracking-widest text-xs">The five classical cleansing therapies</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Vamana", desc: "Therapeutic emesis, traditionally used to clear the upper respiratory and digestive channels.", icon: Wind },
                                { title: "Virechana", desc: "Purgation therapy directed at the liver and gallbladder in classical practice.", icon: Flame },
                                { title: "Basti", desc: "Medicated enema therapy — considered the cornerstone of Panchakarma.", icon: Sprout },
                                { title: "Nasya", desc: "Nasal administration of herbal oils for the head and sinuses.", icon: Sparkles },
                                { title: "Raktamokshana", desc: "Traditional blood-letting therapy, used selectively for specific conditions.", icon: Droplets }
                            ].map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-12 rounded-2xl shadow-lg border border-sunset-orange/5 hover:border-sunset-orange/30 transition-all group"
                                >
                                    <pillar.icon className="text-sunset-orange mb-8 transition-transform group-hover:scale-125 duration-500" size={40} />
                                    <h4 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">{pillar.title}</h4>
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
                            <h2 className="text-4xl md:text-7xl font-semibold text-white uppercase tracking-tight leading-[0.9] mb-16">
                                CERTIFIED <br /> <span className="text-sunset-orange">CARE.</span>
                            </h2>
                            <p className="text-white/60 font-bold italic text-2xl mb-16 px-12">
                                MyTripMyTravel partners with Ministry of AYUSH-certified facilities and qualified physicians. Every programme is overseen by a doctor and framed honestly — genuine recuperative therapy, never an overstated cure.
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- Shared programme detail: quick facts, variants, FAQ, CTA --- */}
                <WellnessProgrammeDetail programme={programme} />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
