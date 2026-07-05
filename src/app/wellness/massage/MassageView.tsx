"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Wind, Fingerprint, Waves, BrainCircuit, ArrowRight, BedDouble } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";
import WellnessProgrammeDetail from "@/components/wellness/WellnessProgrammeDetail";
import type { WellnessProgramme } from "@/data/wellness";
import Link from "next/link";
import Image from "next/image";

export default function MassageView({ programme }: { programme: WellnessProgramme }) {
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
                                Restorative bodywork drawing on classical Indian massage traditions (Abhyanga, Marma therapy). Skilled therapists work the muscles and soft tissue to ease tension and support physical recovery and relaxation.
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
                                    <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue/40">Tension Release</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Tilt3D>
                                <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-purple-50">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/4/48/Massage_in_India.jpg"
                                        alt="Traditional Indian therapeutic massage with warm herbal oil"
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
                                { title: "Abhyanga", desc: "Warm herbal-oil full-body massage in the classical Ayurvedic style, valued for deep relaxation.", icon: Waves },
                                { title: "Marma Point", desc: "Gentle pressure applied to the body's traditional vital points to ease tension and encourage calm.", icon: Fingerprint },
                                { title: "Shirodhara", desc: "A continuous, warm stream of oil poured slowly over the forehead — a deeply soothing signature therapy.", icon: BrainCircuit },
                                { title: "Udwarthana", desc: "Invigorating dry herbal-powder massage traditionally used to stimulate circulation and refresh the skin.", icon: Wind }
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
                                Delivered in serene 5-star havelis and premium wellness wings by experienced, professionally trained therapists — so every session is as safe and considered as it is restful.
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

                {/* --- Shared programme detail: quick facts, variants, FAQ, CTA --- */}
                <WellnessProgrammeDetail programme={programme} />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
