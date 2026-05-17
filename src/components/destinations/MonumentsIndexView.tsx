"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
import type { Destination } from "@/data/destinations";
import type { Monument } from "@/data/monuments";

export default function MonumentsIndexView({
    dest,
    monuments,
}: {
    dest: Destination;
    monuments: Monument[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[52vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={dest.heroImg} alt={`Monuments of ${dest.name}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-14">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-black uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/destinations" className="hover:text-sunset-orange transition-colors">Destinations</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/${dest.slug}`} className="hover:text-sunset-orange transition-colors">{dest.name}</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">Monuments</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
                            {dest.name} &middot; Heritage Atoms
                        </motion.h4>
                        <CharBlurIn text={`MONUMENTS OF ${dest.name.toUpperCase()}`} className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] block" />
                    </div>
                </section>

                <section className="py-24 container mx-auto px-6">
                    <p className="max-w-3xl text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed mb-16">
                        Each {dest.name} monument has its own intelligence brief — history, what to see,
                        visitor protocol, and exactly how MyTripMyTravel sequences escorted access for it.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {monuments.map((m, idx) => (
                            <motion.div
                                key={m.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.07 }}
                            >
                                <Link
                                    href={`/destinations/${dest.slug}/monuments/${m.slug}`}
                                    className="block group relative h-[440px] rounded-[3rem] overflow-hidden"
                                >
                                    <Image src={m.heroImg} alt={`${m.name}, ${dest.name}`} fill className="object-cover scale-110 group-hover:scale-100 transition-all duration-[2s]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-transparent p-9 flex flex-col justify-end">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Landmark className="text-sunset-orange" size={18} />
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange">{m.type}</span>
                                        </div>
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-3 leading-none">{m.name}</h3>
                                        <p className="text-white/60 font-bold italic text-sm mb-7 leading-relaxed">{m.tagline}</p>
                                        <span className="font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 text-sunset-orange group-hover:text-white transition-colors">
                                            Open Brief <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
