"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, HelpCircle, Landmark, Compass, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { Destination } from "@/data/destinations";
import type { Monument } from "@/data/monuments";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
        {children}
    </h4>
);

export default function MonumentView({
    dest,
    monument,
    siblings,
}: {
    dest: Destination;
    monument: Monument;
    siblings: Monument[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Hero */}
                <section className="relative h-[68vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={monument.heroImg} alt={`${monument.name}, ${dest.name}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/35 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-16">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-black uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/destinations" className="hover:text-sunset-orange transition-colors">Destinations</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/region/${dest.regionSlug}`} className="hover:text-sunset-orange transition-colors">{dest.region}</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/${dest.slug}`} className="hover:text-sunset-orange transition-colors">{dest.name}</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/${dest.slug}/monuments`} className="hover:text-sunset-orange transition-colors">Monuments</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{monument.name}</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
                            {monument.type} &middot; {monument.era}
                        </motion.h4>
                        <CharBlurIn text={monument.name.toUpperCase()} className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] block mb-5" />
                        <p className="text-white/70 font-bold italic text-lg md:text-2xl max-w-2xl">{monument.tagline}</p>
                    </div>
                </section>

                {/* Answer + intro */}
                <section className="py-24 md:py-32 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <SectionLabel>The Brief</SectionLabel>
                        <p className="text-2xl md:text-4xl font-black text-royal-blue leading-snug tracking-tight mb-14">
                            {monument.answer}
                        </p>
                        <div className="space-y-7 max-w-3xl">
                            {monument.intro.map((para, i) => (
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

                {/* Quick facts */}
                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <SectionLabel>Quick Facts</SectionLabel>
                        <h2 className="text-3xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-12">
                            {monument.name} at a glance
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {monument.quickFacts.map((f, i) => (
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

                {/* Highlights */}
                <section className="py-28 bg-royal-blue text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-sunset-orange/10 blur-[150px] -translate-y-1/2 translate-x-1/2" />
                    <div className="container mx-auto px-6 relative z-10">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">What to See</h4>
                        <CharBlurIn text="THE HIGHLIGHTS" className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter block leading-none mb-16" />
                        <div className="grid md:grid-cols-2 gap-6">
                            {monument.highlights.map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="glass-card rounded-[2.5rem] p-9 border-white/5 bg-white/5"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <Landmark className="text-sunset-orange" size={20} />
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">{h.name}</h3>
                                    </div>
                                    <p className="text-white/60 font-bold italic text-sm leading-relaxed">{h.detail}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visitor info + tips */}
                <section className="py-28 container mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    <div>
                        <SectionLabel>Visitor Protocol</SectionLabel>
                        <div className="space-y-px">
                            {monument.visitorInfo.map((v, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-royal-blue/10">
                                    <span className="sm:w-40 shrink-0 text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange">{v.label}</span>
                                    <span className="text-base md:text-lg text-dark-slate/70 font-bold italic leading-relaxed">{v.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <SectionLabel>How We Run It</SectionLabel>
                        <div className="space-y-5">
                            {monument.tips.map((t, i) => (
                                <div key={i} className="glass-card rounded-3xl p-7 border-royal-blue/5 flex gap-4">
                                    <Lightbulb className="text-sunset-orange shrink-0 mt-1" size={20} />
                                    <p className="text-base md:text-lg text-dark-slate/70 font-bold italic leading-relaxed">{t}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                {monument.faqs.length > 0 && (
                    <section className="py-28 bg-royal-blue/5">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <SectionLabel>Intelligence</SectionLabel>
                                <CharBlurIn text={`${monument.name.toUpperCase()} FAQ`} className="text-3xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter block leading-none" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {monument.faqs.map((f, i) => (
                                    <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                        <div className="flex items-start gap-4 mb-4">
                                            <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                            <h3 className="font-black text-royal-blue uppercase tracking-tight text-lg leading-tight">{f.q}</h3>
                                        </div>
                                        <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Sibling monuments + CTA */}
                <section className="py-28 container mx-auto px-6">
                    {siblings.length > 0 && (
                        <div className="mb-20">
                            <SectionLabel>More in {dest.name}</SectionLabel>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                <Link
                                    href={`/destinations/${dest.slug}`}
                                    className="glass-card rounded-3xl p-7 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all flex items-center justify-between"
                                >
                                    <span className="font-black uppercase text-sm tracking-tight text-royal-blue group-hover:text-sunset-orange transition-colors">{dest.name} — Full Brief</span>
                                    <ArrowRight size={16} className="text-sunset-orange" />
                                </Link>
                                {siblings.map((s) => (
                                    <Link
                                        key={s.slug}
                                        href={`/destinations/${dest.slug}/monuments/${s.slug}`}
                                        className="glass-card rounded-3xl p-7 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all flex items-center justify-between"
                                    >
                                        <span className="font-black uppercase text-sm tracking-tight text-royal-blue group-hover:text-sunset-orange transition-colors">{s.name}</span>
                                        <ArrowRight size={16} className="text-sunset-orange shrink-0" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-sunset-orange text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <Compass className="mx-auto mb-8 opacity-30" size={56} />
                        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">
                            See <span className="text-royal-blue">{monument.name}</span> properly
                        </h2>
                        <Magnetic>
                            <Link href="/booking" className="inline-block relative z-10 bg-royal-blue text-white py-6 px-12 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">
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
