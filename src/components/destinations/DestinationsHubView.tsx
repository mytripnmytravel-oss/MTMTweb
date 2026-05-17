"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Compass, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { Region, Destination } from "@/data/destinations";

export default function DestinationsHubView({
    regions,
    featured,
}: {
    regions: Region[];
    featured: Destination[];
}) {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Hero */}
                <section className="pt-60 pb-24 container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl text-center mx-auto mb-20">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6"
                        >
                            Global Geographies
                        </motion.h4>
                        <CharBlurIn
                            text="DESTINATION ARCHIVE"
                            className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-8 block"
                        />
                        <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed">
                            Our vetted deployment zones across the Indian subcontinent. Every region is a curated
                            mission architecture &mdash; chauffeured, escorted, and sequenced for the light. We
                            operate only where we can guarantee absolute luxury and security.
                        </p>
                    </div>

                    {/* Region grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regions.map((region, idx) => (
                            <motion.div
                                key={region.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="group relative h-[500px] rounded-[3rem] overflow-hidden"
                            >
                                <Image
                                    src={region.heroImg}
                                    alt={`${region.name} — ${region.tagline}`}
                                    fill
                                    className="object-cover scale-110 group-hover:scale-100 transition-all duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-transparent p-10 flex flex-col justify-end">
                                    <div className="flex items-center gap-3 mb-3">
                                        <MapPin className="text-sunset-orange" size={20} />
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                                            {region.name}
                                        </h3>
                                    </div>
                                    <p className="text-sunset-orange font-black uppercase text-[10px] tracking-[0.3em] mb-3">
                                        {region.tagline}
                                    </p>
                                    <p className="text-white/60 font-bold italic text-sm mb-8 leading-relaxed">
                                        {region.blurb}
                                    </p>
                                    <Link
                                        href={`/destinations/region/${region.slug}`}
                                        className="font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 text-sunset-orange hover:text-white transition-colors"
                                    >
                                        Deploy to Zone <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Featured cities — interlinking surface */}
                <section className="py-32 bg-royal-blue/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">
                                Primary City Briefs
                            </h4>
                            <CharBlurIn
                                text="THE DEFINITIVE STOPS"
                                className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter block leading-none mb-8"
                            />
                            <p className="text-dark-slate font-bold italic text-lg opacity-60">
                                Each city below has a full intelligence brief &mdash; best time, how to reach,
                                what to do, where to stay and dine, and the missions that run through it.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featured.map((city, idx) => (
                                <motion.div
                                    key={city.slug}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.06 }}
                                >
                                    <Link
                                        href={`/destinations/${city.slug}`}
                                        className="block glass-card rounded-[2.5rem] overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/30 transition-all duration-700"
                                    >
                                        <div className="relative h-60">
                                            <Image
                                                src={city.heroImg}
                                                alt={`${city.name}, ${city.state}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                            />
                                            <div className="absolute top-5 right-5 bg-royal-blue/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
                                                <span className="text-[10px] font-black uppercase text-white tracking-widest">
                                                    {city.region}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <h4 className="text-[10px] font-black text-sunset-orange uppercase tracking-[0.4em] mb-3">
                                                {city.state}
                                            </h4>
                                            <h3 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-3 leading-tight group-hover:text-sunset-orange transition-colors">
                                                {city.name}
                                            </h3>
                                            <p className="text-dark-slate/60 font-bold italic text-sm mb-6 leading-relaxed line-clamp-2">
                                                {city.tagline}
                                            </p>
                                            <span className="font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 text-royal-blue group-hover:text-sunset-orange transition-colors">
                                                Open Brief <ChevronRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-40 container mx-auto px-6 relative z-10">
                    <div className="glass-card p-12 md:p-28 rounded-[4rem] bg-sunset-orange text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <Compass className="mx-auto mb-10 opacity-30" size={64} />
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">
                            Don&apos;t see your <span className="text-royal-blue">zone?</span>
                        </h2>
                        <p className="max-w-2xl mx-auto font-bold italic text-white/80 mb-12 relative z-10">
                            Every itinerary is bespoke. If the geography exists and we can guarantee the standard,
                            our master planners will architect the mission.
                        </p>
                        <Magnetic>
                            <Link
                                href="/booking"
                                className="inline-block relative z-10 bg-royal-blue text-white py-7 px-14 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl"
                            >
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
