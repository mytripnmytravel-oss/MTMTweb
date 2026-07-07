"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
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
                        <Image src={region.heroImg} alt={`${region.name}, ${region.tagline}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/30 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-20">
                        <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-8 text-white/70 font-semibold uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/destinations" className="hover:text-sunset-orange transition-colors">Destinations</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{region.name}</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">
                            {region.tagline}
                        </motion.h4>
                        <CharBlurIn text={region.name.toUpperCase()} className="text-5xl md:text-8xl font-semibold text-white uppercase tracking-tight leading-[0.85] block mb-6" />
                        <p className="text-white/70 font-bold italic text-lg md:text-xl max-w-3xl leading-relaxed">{region.blurb}</p>
                    </div>
                </section>

                {/* Cities */}
                <section className="py-28 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">City Briefs</h4>
                    <CharBlurIn text="DEPLOYMENT NODES" className="text-4xl md:text-7xl font-semibold text-royal-blue uppercase tracking-tight block leading-none mb-16" />

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
                                        className="block group relative h-[480px] rounded-2xl overflow-hidden"
                                    >
                                        <Image src={c.heroImg} alt={`${c.name}, ${c.state}`} fill className="object-cover scale-110 group-hover:scale-100 transition-all duration-[2s]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-transparent p-10 flex flex-col justify-end">
                                            <div className="flex items-center gap-3 mb-3">
                                                <MapPin className="text-sunset-orange" size={20} />
                                                <h3 className="text-3xl font-semibold text-white uppercase tracking-tight">{c.name}</h3>
                                            </div>
                                            <p className="text-white/60 font-bold italic text-sm mb-8 leading-relaxed">{c.tagline}</p>
                                            <span className="font-semibold uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 text-sunset-orange group-hover:text-white transition-colors">
                                                Open Brief <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card rounded-2xl py-28 text-center border-royal-blue/5">
                            <Compass className="mx-auto text-sunset-orange opacity-20 mb-8" size={72} />
                            <h3 className="text-3xl font-semibold text-royal-blue uppercase tracking-tight mb-4">Briefs in architecture</h3>
                            <p className="text-dark-slate/50 font-bold italic max-w-xl mx-auto">
                                Detailed city intelligence for the {region.name} corridor is being authored. Contact HQ
                                for a bespoke mission through this region in the meantime.
                            </p>
                        </div>
                    )}
                </section>

                <LeadBlock
                    variant="cta"
                    source={`Region: ${region.name}`}
                    context={{ "Inquiry Type": "Destination", Subject: region.name }}
                    heading={`Plan your journey through ${region.name}`}
                    subheading="Tell us your dates and travel style and we craft a private, chauffeured route through the region with a transparent quote."
                    waMessage={`Hi MyTripMyTravel, I would like to plan a trip through ${region.name}.`}
                    breadcrumbs={[
                        { name: "Home", item: "https://www.mytripmytravel.com" },
                        { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                        { name: region.name },
                    ]}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
