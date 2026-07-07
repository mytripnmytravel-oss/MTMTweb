"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Activity, ShieldCheck, HeartPulse, Building2, MapPin, ArrowRight, Tablets, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";
import WellnessProgrammeDetail from "@/components/wellness/WellnessProgrammeDetail";
import type { WellnessProgramme } from "@/data/wellness";
import Link from "next/link";
import Image from "next/image";

export default function OrthopedicView({ programme }: { programme: WellnessProgramme }) {
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
                                className="text-royal-blue font-semibold uppercase tracking-[0.8em] text-sm mb-6"
                            >
                                Travel & Recovery Logistics
                            </motion.h4>
                            <CharBlurIn
                                text="ORTHOPEDIC RECOVERY"
                                className="text-5xl md:text-[7rem] font-semibold text-royal-blue uppercase tracking-tight leading-[0.85] mb-12"
                            />
                            <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed mb-12">
                                We are travel architects, not a medical provider. Around orthopedic treatment you arrange with accredited hospitals and surgeons of your choice, we design the luxury transit, accommodation and gentle-paced recovery logistics that make the journey comfortable.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <Magnetic>
                                    <Link href="/booking">
                                        <button className="bg-sunset-orange text-white px-10 py-5 rounded-full font-semibold uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-royal-blue transition-all duration-500 shadow-xl shadow-sunset-orange/20">
                                            Plan a Programme <ArrowRight size={16} />
                                        </button>
                                    </Link>
                                </Magnetic>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-royal-blue/10 flex items-center justify-center">
                                        <Building2 className="text-royal-blue" size={20} />
                                    </div>
                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-royal-blue/40">Near accredited hospitals</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Tilt3D>
                                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-md bg-royal-blue/5">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Hospital_Room_Interior.jpg"
                                        alt="Interior of a modern private hospital room in India"
                                        fill
                                        className="object-cover opacity-20"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center p-12">
                                        <div className="text-center">
                                            <HeartPulse className="text-sunset-orange mx-auto mb-8 animate-pulse" size={80} />
                                            <h5 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">RECOVERY, ORCHESTRATED</h5>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-royal-blue/40">Logistics You Can Trust</p>
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
                            <h3 className="text-5xl font-semibold text-royal-blue uppercase tracking-tight leading-none mb-12">
                                HOW WE <br /> <span className="text-sunset-orange">HELP.</span>
                            </h3>
                            <p className="text-dark-slate/60 font-bold italic text-lg mb-12">
                                A dedicated travel coordinator manages your itinerary from arrival to departure, flights, transfers, stays and paced rest days, so the non-medical side of recovery runs smoothly while your clinical care stays entirely with your chosen providers.
                            </p>
                            <div className="p-8 rounded-3xl bg-royal-blue/5 border-2 border-dashed border-royal-blue/10">
                                <h6 className="text-royal-blue font-semibold uppercase tracking-widest text-xs mb-4 flex items-center gap-3">
                                    <Award size={16} /> Accredited Partners
                                </h6>
                                <p className="text-[10px] font-bold text-royal-blue/40 uppercase tracking-widest leading-relaxed">
                                    We help you stay near JCI and NABH accredited facilities. All treatment decisions and outcomes rest with the hospitals and surgeons you engage directly.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            {[
                                { title: "Joint Care Journeys", desc: "Comfortable stays and transfers around hip, knee and shoulder procedures your surgeons perform.", icon: Activity },
                                { title: "Spinal Care Journeys", desc: "Gentle-paced itineraries and accessible accommodation for those travelling for spinal treatment.", icon: ShieldCheck },
                                { title: "Concierge Coordination", desc: "A single point of contact for appointments logistics, documents and on-ground support.", icon: Stethoscope },
                                { title: "Recovery Retreats", desc: "Restful, well-appointed accommodation and slow travel for the recuperation period.", icon: Tablets }
                            ].map((spec, i) => (
                                <div key={i} className="bg-white p-12 rounded-2xl border border-royal-blue/10 shadow-lg hover:shadow-md transition-all group">
                                    <spec.icon className="text-royal-blue mb-8 group-hover:text-sunset-orange transition-colors" size={40} />
                                    <h4 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">{spec.title}</h4>
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
                                <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-xs mb-6">Where We Base You</h4>
                                <h2 className="text-5xl md:text-8xl font-semibold text-white uppercase tracking-tight leading-none">PRIMARY GATEWAYS</h2>
                            </div>
                            <div className="max-w-md text-right">
                                <p className="text-white/40 font-bold italic text-lg mb-8">Cities chosen for their international connectivity and their concentration of accredited hospitals.</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { city: "NEW DELHI", desc: "Well-connected gateway with many accredited hospitals nearby.", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Humayun%27s_tomb_at_sunset.jpg" },
                                { city: "AGRA", desc: "A restful Golden Triangle base for recovery stays.", img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg" },
                                { city: "BENGALURU", desc: "A major hub home to leading accredited medical facilities.", img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Vidhana_Soudha_Bengaluru.jpg" }
                            ].map((loc, i) => (
                                <div key={i} className="relative h-[400px] rounded-2xl overflow-hidden group">
                                    <Image src={loc.img} alt={`Landmark view of ${loc.city}, India`} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue p-10 flex flex-col justify-end">
                                        <h4 className="text-white font-semibold text-3xl uppercase tracking-tight mb-2">{loc.city}</h4>
                                        <p className="text-white/40 font-bold italic text-xs uppercase tracking-widest">{loc.desc}</p>
                                    </div>
                                </div>
                            ))}
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
