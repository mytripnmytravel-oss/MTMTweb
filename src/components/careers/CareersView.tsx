"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";

const ROLE_AREAS = [
    { name: "Mission Architects", detail: "Bespoke itinerary design across the Golden Triangle, Rajasthan, and beyond — the people who turn an enquiry into a sequenced private mission." },
    { name: "Performance Chauffeurs", detail: "Vetted, defensively-trained drivers operating the GPS-tracked Elite Fleet to a hospitality and security standard, not a taxi standard." },
    { name: "Heritage & Experience Curators", detail: "Specialists who build the dining, guiding, and access layers — and hold the relationships that make escorted entry possible." },
    { name: "Organic Growth & Content", detail: "Editorial, SEO, and AI-surface specialists building the page and citation engine that drives qualified inquiries." },
    { name: "Guest Operations", detail: "The 24/7 desk and on-ground coordination that makes large missions and weddings run invisibly." },
];

const PRINCIPLES = [
    "Architect, don't sell — every traveller is a mission, not a transaction.",
    "Discretion and reliability over volume.",
    "Organic and earned — we don't buy attention, we deserve it.",
    "The standard is invisible logistics and a remembered experience.",
];

export default function CareersView() {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="pt-60 pb-20 container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-8 text-royal-blue/50 font-black uppercase text-[10px] tracking-[0.3em]">
                        <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-sunset-orange">Careers</span>
                    </nav>
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">Join the Mission</h4>
                    <CharBlurIn text="CAREERS AT MYTRIPMYTRAVEL" className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] block mb-8" />
                    <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed max-w-2xl">
                        We are a luxury inbound-India travel architect, building the most precise private-travel
                        operation in the country. We hire for judgement, discretion, and craft &mdash; and we
                        grow deliberately.
                    </p>
                </section>

                <section className="pb-8 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-10">Where We Hire</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ROLE_AREAS.map((r, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.06 }} className="glass-card rounded-[2.5rem] p-9 border-royal-blue/5">
                                <h3 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4 leading-tight">{r.name}</h3>
                                <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed">{r.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-24 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-10">How We Work</h4>
                        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl">
                            {PRINCIPLES.map((p, i) => (
                                <div key={i} className="glass-card rounded-3xl p-7 border-royal-blue/5 flex gap-4">
                                    <span className="text-sunset-orange font-black text-2xl shrink-0">0{i + 1}</span>
                                    <span className="text-base md:text-lg text-dark-slate/70 font-bold italic leading-relaxed">{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-28 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-royal-blue text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <Compass className="mx-auto mb-8 text-sunset-orange opacity-40" size={52} />
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8 relative z-10">
                            No open posting that fits? <span className="text-sunset-orange">Tell us anyway.</span>
                        </h2>
                        <p className="max-w-2xl mx-auto font-bold italic text-white/70 mb-10 relative z-10">
                            We do not run a rolling job board. We meet exceptional people before we have the role,
                            and build the role around them. Introduce yourself via the contact desk.
                        </p>
                        <Magnetic>
                            <Link href="/booking" className="inline-block relative z-10 bg-sunset-orange text-white py-6 px-12 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">
                                Introduce Yourself
                            </Link>
                        </Magnetic>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
