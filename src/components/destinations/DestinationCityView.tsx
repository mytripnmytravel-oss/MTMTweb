"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Navigation2, BedDouble, Utensils,
    ChevronRight, ArrowRight, HelpCircle, Compass, Calendar,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
    SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar,
} from "@/components/ClientComponents";
import type { Destination } from "@/data/destinations";
import type { Monument } from "@/data/monuments";
import { FACET_SLUGS, FACET_LABELS } from "@/data/destinationFacets";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
        {children}
    </h4>
);

export default function DestinationCityView({
    dest,
    related,
    monuments = [],
}: {
    dest: Destination;
    related: Destination[];
    monuments?: Monument[];
}) {
    const waMsg = `EXPLORATION INQUIRY: I want to architect a mission through ${dest.name}, ${dest.state}.`;
    const waHref = `https://wa.me/919997812237?text=${encodeURIComponent(waMsg)}`;

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Hero */}
                <section className="relative h-[72vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={dest.heroImg} alt={`${dest.name}, ${dest.state} — ${dest.tagline}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/30 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-20">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-8 text-white/70 font-black uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/destinations" className="hover:text-sunset-orange transition-colors">Destinations</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/region/${dest.regionSlug}`} className="hover:text-sunset-orange transition-colors">{dest.region}</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{dest.name}</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
                            {dest.state} &middot; Strategic Zone
                        </motion.h4>
                        <CharBlurIn text={dest.name.toUpperCase()} className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] block mb-6" />
                        <p className="text-white/70 font-bold italic text-xl md:text-2xl max-w-2xl">{dest.tagline}</p>
                    </div>
                </section>

                {/* Answer Block — citation-ready, first screen */}
                <section className="py-24 md:py-32 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <SectionLabel>The Brief</SectionLabel>
                        <p className="text-2xl md:text-4xl font-black text-royal-blue leading-snug tracking-tight mb-16">
                            {dest.answer}
                        </p>
                        <div className="space-y-7 max-w-3xl">
                            {dest.intro.map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quick Facts */}
                <section className="py-24 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <SectionLabel>Quick Facts</SectionLabel>
                        <h2 className="text-3xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-14">
                            {dest.name} at a glance
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {dest.quickFacts.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    className="glass-card rounded-3xl p-7 border-royal-blue/5"
                                >
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-3">{f.label}</div>
                                    <div className="text-lg font-black text-royal-blue leading-tight">{f.value}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Best time */}
                <section className="py-28 container mx-auto px-6">
                    <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
                        <div>
                            <SectionLabel>When to Deploy</SectionLabel>
                            <div className="flex items-center gap-4 mb-6">
                                <Calendar className="text-sunset-orange" size={32} />
                                <h2 className="text-4xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter leading-none">
                                    {dest.bestTime.window}
                                </h2>
                            </div>
                        </div>
                        <p className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed lg:pt-16">
                            {dest.bestTime.narrative}
                        </p>
                    </div>
                </section>

                {/* Things to do */}
                <section className="py-28 bg-royal-blue text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-orange/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
                    <div className="container mx-auto px-6 relative z-10">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">The Itinerary Atoms</h4>
                        <CharBlurIn text="WHAT WE OPERATE HERE" className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter block leading-none mb-16" />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {dest.thingsToDo.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="glass-card rounded-[2.5rem] p-9 border-white/5 bg-white/5 group hover:bg-white/10 transition-all duration-500 h-full"
                                >
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-5">{t.category}</div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">{t.name}</h3>
                                    <p className="text-white/60 font-bold italic text-sm leading-relaxed">{t.blurb}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to reach */}
                <section className="py-28 container mx-auto px-6">
                    <SectionLabel>How to Reach</SectionLabel>
                    <CharBlurIn text="ACCESS PROTOCOL" className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter block leading-none mb-16" />
                    <div className="space-y-px">
                        {dest.howToReach.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-b border-royal-blue/10 group"
                            >
                                <div className="flex items-center gap-5 md:w-72 shrink-0">
                                    <div className="w-12 h-12 rounded-2xl bg-royal-blue/5 flex items-center justify-center text-sunset-orange group-hover:bg-sunset-orange group-hover:text-white transition-all">
                                        <Navigation2 size={20} />
                                    </div>
                                    <span className="text-xl font-black text-royal-blue uppercase tracking-tighter">{m.mode}</span>
                                </div>
                                <p className="text-base md:text-lg text-dark-slate/70 font-bold italic leading-relaxed">{m.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Where to stay + eat */}
                <section className="py-28 bg-royal-blue/5">
                    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <BedDouble className="text-sunset-orange" size={28} />
                                <h2 className="text-3xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter leading-none">Where to Stay</h2>
                            </div>
                            <div className="space-y-5">
                                {dest.whereToStay.map((s, i) => (
                                    <div key={i} className="glass-card rounded-3xl p-7 border-royal-blue/5">
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-2">{s.tier}</div>
                                        <p className="text-base text-dark-slate/70 font-bold italic leading-relaxed">{s.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <Utensils className="text-sunset-orange" size={28} />
                                <h2 className="text-3xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter leading-none">Where to Eat</h2>
                            </div>
                            <div className="space-y-5">
                                {dest.whereToEat.map((e, i) => (
                                    <div key={i} className="glass-card rounded-3xl p-7 border-royal-blue/5">
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-2">{e.name}</div>
                                        <p className="text-base text-dark-slate/70 font-bold italic leading-relaxed">{e.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Monuments — atom interlinking */}
                {monuments.length > 0 && (
                    <section className="py-28 bg-royal-blue text-white relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sunset-orange/10 blur-[150px] translate-y-1/2 -translate-x-1/2" />
                        <div className="container mx-auto px-6 relative z-10">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Heritage Atoms</h4>
                            <CharBlurIn text={`${dest.name.toUpperCase()} MONUMENTS`} className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter block leading-none mb-14" />
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {monuments.map((m) => (
                                    <Link
                                        key={m.slug}
                                        href={`/destinations/${dest.slug}/monuments/${m.slug}`}
                                        className="glass-card rounded-3xl p-8 border-white/5 bg-white/5 group hover:bg-white/10 transition-all duration-500 flex items-center justify-between"
                                    >
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-2">{m.type}</div>
                                            <span className="text-xl font-black uppercase tracking-tighter text-white group-hover:text-sunset-orange transition-colors">
                                                {m.name}
                                            </span>
                                        </div>
                                        <ArrowRight size={18} className="text-sunset-orange shrink-0" />
                                    </Link>
                                ))}
                                <Link
                                    href={`/destinations/${dest.slug}/monuments`}
                                    className="glass-card rounded-3xl p-8 border-sunset-orange/30 bg-sunset-orange/10 group hover:bg-sunset-orange/20 transition-all duration-500 flex items-center justify-between"
                                >
                                    <span className="text-xl font-black uppercase tracking-tighter text-white">All {dest.name} Monuments</span>
                                    <ArrowRight size={18} className="text-sunset-orange shrink-0" />
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Deep briefs — spoke interlinking */}
                <section className="py-28 container mx-auto px-6">
                    <SectionLabel>Go Deeper</SectionLabel>
                    <CharBlurIn text={`${dest.name.toUpperCase()} DEEP BRIEFS`} className="text-3xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter block leading-none mb-14" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {FACET_SLUGS.map((f) => (
                            <Link
                                key={f}
                                href={`/destinations/${dest.slug}/${f}`}
                                className="glass-card rounded-3xl p-8 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all duration-500 flex items-center justify-between"
                            >
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-2">{dest.name}</div>
                                    <span className="text-xl font-black uppercase tracking-tighter text-royal-blue group-hover:text-sunset-orange transition-colors">
                                        {FACET_LABELS[f]}
                                    </span>
                                </div>
                                <ArrowRight size={18} className="text-sunset-orange shrink-0" />
                            </Link>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-32 container mx-auto px-6">
                    <div className="text-center mb-20">
                        <SectionLabel>Intelligence</SectionLabel>
                        <CharBlurIn text={`${dest.name.toUpperCase()} FAQ`} className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter block leading-none" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {dest.faqs.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-card p-10 rounded-3xl border-royal-blue/5"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                    <h3 className="font-black text-royal-blue uppercase tracking-tight text-lg leading-tight">{f.q}</h3>
                                </div>
                                <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Interlinking — related cities */}
                {related.length > 0 && (
                    <section className="py-28 bg-royal-blue/5">
                        <div className="container mx-auto px-6">
                            <SectionLabel>Continue the Mission</SectionLabel>
                            <h2 className="text-3xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-14">
                                Pairs with {dest.name}
                            </h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {related.map((c) => (
                                    <Link
                                        key={c.slug}
                                        href={`/destinations/${c.slug}`}
                                        className="block glass-card rounded-[2.5rem] overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/30 transition-all duration-700"
                                    >
                                        <div className="relative h-56">
                                            <Image src={c.heroImg} alt={`${c.name}, ${c.state}`} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/70 to-transparent" />
                                            <div className="absolute bottom-6 left-7">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <MapPin className="text-sunset-orange" size={16} />
                                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{c.name}</h3>
                                                </div>
                                                <p className="text-white/60 font-bold italic text-xs">{c.tagline}</p>
                                            </div>
                                        </div>
                                        <div className="p-7 flex items-center justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-royal-blue/40">{c.region}</span>
                                            <span className="font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 text-royal-blue group-hover:text-sunset-orange transition-colors">
                                                Open Brief <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Cross-cluster links + CTA */}
                <section className="py-32 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-24 rounded-[4rem] bg-royal-blue text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <Compass className="mb-10 text-sunset-orange opacity-40" size={56} />
                            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
                                Architect a mission through <span className="text-sunset-orange">{dest.name}</span>
                            </h2>
                            <div className="flex flex-wrap gap-4 mb-12">
                                {dest.relatedTours.map((r, i) => (
                                    <Link
                                        key={i}
                                        href={r.href}
                                        className="px-7 py-4 glass-card rounded-2xl border-white/10 bg-white/5 text-white font-black uppercase text-[11px] tracking-widest hover:bg-sunset-orange transition-all duration-500 flex items-center gap-3"
                                    >
                                        {r.label} <ArrowRight size={14} />
                                    </Link>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <Magnetic>
                                    <Link href="/booking" className="inline-block bg-sunset-orange text-white py-6 px-12 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">
                                        Consult a Master Planner
                                    </Link>
                                </Magnetic>
                                <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-block bg-white/10 text-white py-6 px-12 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 border border-white/10">
                                    WhatsApp the Desk
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
