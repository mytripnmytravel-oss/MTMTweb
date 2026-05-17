"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { Region, Destination } from "@/data/destinations";

export default function RegionView({
    region,
    cities,
}: {
    region: Region;
    cities: Destination[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Hero */}
                <section className="relative h-[64vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={region.heroImg} alt={`${region.name} — ${region.tagline}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/30 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-20">
                        <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-8 text-white/70 font-black uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/destinations" className="hover:text-sunset-orange transition-colors">Destinations</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{region.name}</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
                            {region.tagline}
                        </motion.h4>
                        <CharBlurIn text={region.name.toUpperCase()} className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] block mb-6" />
                        <p className="text-white/70 font-bold italic text-lg md:text-xl max-w-3xl leading-relaxed">{region.blurb}</p>
                    </div>
                </section>

                {/* Cities */}
                <section className="py-28 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">City Briefs</h4>
                    <CharBlurIn text="DEPLOYMENT NODES" className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter block leading-none mb-16" />

                    {cities.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cities.map((c, idx) => (
                                <motion.div
                                    key={c.slug}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                >
                                    <Link
                                        href={`/destinations/${c.slug}`}
                                        className="block group relative h-[480px] rounded-[3rem] overflow-hidden"
                                    >
                                        <Image src={c.heroImg} alt={`${c.name}, ${c.state}`} fill className="object-cover scale-110 group-hover:scale-100 transition-all duration-[2s]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-transparent p-10 flex flex-col justify-end">
                                            <div className="flex items-center gap-3 mb-3">
                                                <MapPin className="text-sunset-orange" size={20} />
                                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{c.name}</h3>
                                            </div>
                                            <p className="text-white/60 font-bold italic text-sm mb-8 leading-relaxed">{c.tagline}</p>
                                            <span className="font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 text-sunset-orange group-hover:text-white transition-colors">
                                                Open Brief <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card rounded-[3rem] py-28 text-center border-royal-blue/5">
                            <Compass className="mx-auto text-sunset-orange opacity-20 mb-8" size={72} />
                            <h3 className="text-3xl font-black text-royal-blue uppercase tracking-tighter mb-4">Briefs in architecture</h3>
                            <p className="text-dark-slate/50 font-bold italic max-w-xl mx-auto">
                                Detailed city intelligence for the {region.name} corridor is being authored. Contact HQ
                                for a bespoke mission through this region in the meantime.
                            </p>
                        </div>
                    )}
                </section>

                {/* CTA */}
                <section className="pb-32 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-24 rounded-[4rem] bg-sunset-orange text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">
                            Architect the <span className="text-royal-blue">{region.name}</span>
                        </h2>
                        <Magnetic>
                            <Link href="/booking" className="inline-block relative z-10 bg-royal-blue text-white py-7 px-14 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">
                                Consult a Master Planner
                            </Link>
                        </Magnetic>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
