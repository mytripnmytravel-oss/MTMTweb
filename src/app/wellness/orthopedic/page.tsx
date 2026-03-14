"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Activity, ShieldCheck, HeartPulse, Building2, MapPin, ArrowRight, Tablets, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";
import Link from "next/link";
import Image from "next/image";

export default function OrthopedicPage() {
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
                                className="text-royal-blue font-black uppercase tracking-[0.8em] text-sm mb-6"
                            >
                                Structural Precision
                            </motion.h4>
                            <CharBlurIn
                                text="ORTHOPEDIC RECOVERY"
                                className="text-5xl md:text-[7rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                            />
                            <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed mb-12">
                                World-class surgical and restorative orthopedic missions in India's most advanced clinical environments. We bridge the gap between complex pathology and precision recovery.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Magnetic>
                                    <Link href="/booking">
                                        <button className="bg-sunset-orange text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-royal-blue transition-all duration-500 shadow-xl shadow-sunset-orange/20">
                                            Authorize Mission <ArrowRight size={16} />
                                        </button>
                                    </Link>
                                </Magnetic>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-royal-blue/10 flex items-center justify-center">
                                        <Building2 className="text-royal-blue" size={20} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue/40">Tier-1 Facilities</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Tilt3D>
                                <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl bg-royal-blue/5">
                                    <Image
                                        src="/innova.png" // Using high-quality car image as placeholder for tech
                                        alt="Medical Technology"
                                        fill
                                        className="object-cover opacity-20"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center p-12">
                                        <div className="text-center">
                                            <HeartPulse className="text-sunset-orange mx-auto mb-8 animate-pulse" size={80} />
                                            <h5 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">RESTORATIVE MATRIX</h5>
                                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-royal-blue/40">Clinical Excellence Verified</p>
                                        </div>
                                    </div>
                                </div>
                            </Tilt3D>
                        </div>
                    </div>
                </section>

                {/* --- Clinical Pillars --- */}
                <section className="py-40 container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <h3 className="text-5xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-12">
                                CLINICAL <br /> <span className="text-sunset-orange">DIRECTIVES.</span>
                            </h3>
                            <p className="text-dark-slate/60 font-bold italic text-lg mb-12">
                                Every orthopedic mission is supervised by a senior medical facilitator, ensuring that every transition from pre-op to rehabilitation is managed with zero surprises.
                            </p>
                            <div className="p-8 rounded-3xl bg-royal-blue/5 border-2 border-dashed border-royal-blue/10">
                                <h6 className="text-royal-blue font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-3">
                                    <Award size={16} /> Accredited Excellence
                                </h6>
                                <p className="text-[10px] font-bold text-royal-blue/40 uppercase tracking-widest leading-relaxed">
                                    Our clinical grid includes only JCI and NABH accredited facilities with 99.8% success rates in complex reconstruction.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            {[
                                { title: "Joint Reconstruction", desc: "Advanced arthroplasty protocols for hip, knee, and shoulder restoration.", icon: Activity },
                                { title: "Spinal Correction", desc: "Precision neuro-orthopedic interventions for structural spinal health.", icon: ShieldCheck },
                                { title: "Robotic Precision", desc: "Utilization of the latest robotic surgical systems for absolute accuracy.", icon: Stethoscope },
                                { title: "Neural Recovery", desc: "Post-op neural pathway rehabilitation and biological optimization.", icon: Tablets }
                            ].map((spec, i) => (
                                <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-royal-blue/10 shadow-lg hover:shadow-2xl transition-all group">
                                    <spec.icon className="text-royal-blue mb-8 group-hover:text-sunset-orange transition-colors" size={40} />
                                    <h4 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">{spec.title}</h4>
                                    <p className="text-dark-slate/60 font-bold italic text-sm">{spec.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Location Grid --- */}
                <section className="py-20 bg-royal-blue relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                            <div>
                                <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-xs mb-6">Execution Gateways</h4>
                                <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">PRIMARY CLINICS</h2>
                            </div>
                            <div className="max-w-md text-right">
                                <p className="text-white/40 font-bold italic text-lg mb-8">Strategically selected for proximity to international gateways and absolute clinical authority.</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { city: "NEW DELHI", desc: "Central high-performance trauma & reconstruction hub.", img: "/hero-taj.png" },
                                { city: "AGRA", desc: "Home to specialized joint restoration sanctuaries.", img: "/taj-golden.png" },
                                { city: "BENGALURU", desc: "Technology-first robotic surgical core.", img: "/jaipur-mahal.png" }
                            ].map((loc, i) => (
                                <div key={i} className="relative h-[400px] rounded-[3rem] overflow-hidden group">
                                    <Image src={loc.img} alt={loc.city} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue p-10 flex flex-col justify-end">
                                        <h4 className="text-white font-black text-3xl uppercase tracking-tighter mb-2">{loc.city}</h4>
                                        <p className="text-white/40 font-bold italic text-xs uppercase tracking-widest">{loc.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
