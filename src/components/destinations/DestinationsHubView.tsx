"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
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
                            className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-6"
                        >
                            Global Geographies
                        </motion.h4>
                        <CharBlurIn
                            text="DESTINATION ARCHIVE"
                            className="text-5xl md:text-8xl font-semibold text-royal-blue uppercase tracking-tight leading-[0.85] mb-8 block"
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
                                className="group relative h-[500px] rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={region.heroImg}
                                    alt={`${region.name}, ${region.tagline}`}
                                    fill
                                    className="object-cover scale-110 group-hover:scale-100 transition-all duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-transparent p-10 flex flex-col justify-end">
                                    <div className="flex items-center gap-3 mb-3">
                                        <MapPin className="text-sunset-orange" size={20} />
                                        <h3 className="text-3xl font-semibold text-white uppercase tracking-tight">
                                            {region.name}
                                        </h3>
                                    </div>
                                    <p className="text-sunset-orange font-semibold uppercase text-[10px] tracking-[0.3em] mb-3">
                                        {region.tagline}
                                    </p>
                                    <p className="text-white/60 font-bold italic text-sm mb-8 leading-relaxed">
                                        {region.blurb}
                                    </p>
                                    <Link
                                        href={`/destinations/region/${region.slug}`}
                                        className="font-semibold uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 text-sunset-orange hover:text-white transition-colors"
                                    >
                                        Deploy to Zone <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Featured cities, interlinking surface */}
                <section className="py-32 bg-royal-blue/5 relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-6">
                                Primary City Briefs
                            </h4>
                            <CharBlurIn
                                text="THE DEFINITIVE STOPS"
                                className="text-4xl md:text-7xl font-semibold text-royal-blue uppercase tracking-tight block leading-none mb-8"
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
                                        className="block glass-card rounded-2xl overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/30 transition-all duration-700"
                                    >
                                        <div className="relative h-60">
                                            <Image
                                                src={city.heroImg}
                                                alt={`${city.name}, ${city.state}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                            />
                                            <div className="absolute top-5 right-5 bg-royal-blue/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
                                                <span className="text-[10px] font-semibold uppercase text-white tracking-widest">
                                                    {city.region}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <h4 className="text-[10px] font-semibold text-sunset-orange uppercase tracking-[0.4em] mb-3">
                                                {city.state}
                                            </h4>
                                            <h3 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-3 leading-tight group-hover:text-sunset-orange transition-colors">
                                                {city.name}
                                            </h3>
                                            <p className="text-dark-slate/60 font-bold italic text-sm mb-6 leading-relaxed line-clamp-2">
                                                {city.tagline}
                                            </p>
                                            <span className="font-semibold uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 text-royal-blue group-hover:text-sunset-orange transition-colors">
                                                Open Brief <ChevronRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <LeadBlock
                    variant="cta"
                    source="Destinations hub"
                    heading="Ready to plan your India journey?"
                    subheading="Tell us where you want to go and we craft a private, chauffeured itinerary with a transparent quote."
                    waMessage="Hi MyTripMyTravel, I would like help planning a trip across India."
                    breadcrumbs={[
                        { name: "Home", item: "https://www.mytripmytravel.com" },
                        { name: "Destinations" },
                    ]}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
