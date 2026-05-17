"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";

export default function ServicesHubView({
    lines,
    cities,
}: {
    lines: { slug: string; name: string; blurb: string }[];
    cities: { slug: string; name: string }[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="pt-60 pb-20 container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-8 text-royal-blue/50 font-black uppercase text-[10px] tracking-[0.3em]">
                        <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-sunset-orange">Services</span>
                    </nav>
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">Operational Protocols</h4>
                    <CharBlurIn text="GROUND SERVICES" className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] block mb-8" />
                    <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed max-w-2xl">
                        Chauffeured ground operations across our hub cities &mdash; private, GPS-tracked,
                        pre-priced, and continuous into any itinerary.
                    </p>
                </section>

                <section className="pb-12 container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {lines.map((l, idx) => (
                            <motion.div key={l.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} className="glass-card rounded-[2.5rem] p-10 border-royal-blue/5">
                                <h3 className="text-3xl font-black text-royal-blue uppercase tracking-tighter mb-4">{l.name}</h3>
                                <p className="text-dark-slate/60 font-bold italic text-base mb-8 leading-relaxed">{l.blurb}</p>
                                <div className="flex flex-wrap gap-3">
                                    {cities.map((c) => (
                                        <Link key={c.slug} href={`/services/${l.slug}/${c.slug}`} className="px-5 py-3 bg-royal-blue/5 rounded-2xl font-black uppercase text-[10px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">
                                            {c.name}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-24 container mx-auto px-6">
                    <div className="flex flex-wrap gap-4">
                        <Link href="/fleet" className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">The Elite Fleet <ArrowRight size={14} /></Link>
                        <Link href="/tours" className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">Tour Master Packages <ArrowRight size={14} /></Link>
                        <Link href="/destinations" className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">Destination Archive <ArrowRight size={14} /></Link>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
