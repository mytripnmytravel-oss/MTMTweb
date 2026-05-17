"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, HelpCircle, MapPin, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { Destination } from "@/data/destinations";
import type { FacetContent, FacetSlug } from "@/data/destinationFacets";
import { FACET_SLUGS, FACET_LABELS } from "@/data/destinationFacets";

export default function DestinationFacetView({
    dest,
    content,
    related,
}: {
    dest: Destination;
    content: FacetContent;
    related: Destination[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Hero */}
                <section className="relative h-[58vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={dest.heroImg} alt={`${content.h1} — ${dest.state}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
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
                            <span className="text-sunset-orange">{content.label}</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
                            {dest.name} &middot; {content.label}
                        </motion.h4>
                        <CharBlurIn text={content.h1.toUpperCase()} className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] block" />
                    </div>
                </section>

                {/* Answer block */}
                <section className="py-20 md:py-28 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">The Brief</h4>
                        <p className="text-2xl md:text-4xl font-black text-royal-blue leading-snug tracking-tight mb-12">
                            {content.answer}
                        </p>
                        <p className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed max-w-3xl">
                            {content.intro}
                        </p>
                    </div>
                </section>

                {/* Blocks */}
                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {content.blocks.map((b, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="glass-card rounded-[2.5rem] p-9 border-royal-blue/5"
                                >
                                    {b.sub && (
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-3">{b.sub}</div>
                                    )}
                                    <h3 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4 leading-tight">{b.heading}</h3>
                                    <p className="text-base md:text-lg text-dark-slate/70 font-bold italic leading-relaxed">{b.body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sibling facets — interlinking */}
                <section className="py-24 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">More on {dest.name}</h4>
                    <CharBlurIn text="DEEP BRIEFS" className="text-3xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter block leading-none mb-12" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link
                            href={`/destinations/${dest.slug}`}
                            className="glass-card rounded-3xl p-7 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all flex items-center justify-between"
                        >
                            <span className="font-black uppercase text-sm tracking-tight text-royal-blue group-hover:text-sunset-orange transition-colors">{dest.name} — Full Brief</span>
                            <ArrowRight size={16} className="text-sunset-orange" />
                        </Link>
                        {FACET_SLUGS.filter((f) => f !== content.facet).map((f: FacetSlug) => (
                            <Link
                                key={f}
                                href={`/destinations/${dest.slug}/${f}`}
                                className="glass-card rounded-3xl p-7 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all flex items-center justify-between"
                            >
                                <span className="font-black uppercase text-sm tracking-tight text-royal-blue group-hover:text-sunset-orange transition-colors">{FACET_LABELS[f]}</span>
                                <ArrowRight size={16} className="text-sunset-orange" />
                            </Link>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                {content.faqs.length > 0 && (
                    <section className="py-24 bg-royal-blue/5">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                                <CharBlurIn text={`${content.label.toUpperCase()} FAQ`} className="text-3xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter block leading-none" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {content.faqs.map((f, i) => (
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

                {/* Related cities + CTA */}
                <section className="py-28 container mx-auto px-6">
                    {related.length > 0 && (
                        <div className="mb-20">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Continue the Mission</h4>
                            <div className="grid sm:grid-cols-3 gap-5">
                                {related.map((c) => (
                                    <Link
                                        key={c.slug}
                                        href={`/destinations/${c.slug}/${content.facet}`}
                                        className="glass-card rounded-3xl p-7 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <MapPin className="text-sunset-orange" size={16} />
                                            <span className="font-black uppercase text-lg tracking-tight text-royal-blue group-hover:text-sunset-orange transition-colors">{c.name}</span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-royal-blue/40">{content.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-sunset-orange text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <Compass className="mx-auto mb-8 opacity-30" size={56} />
                        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">
                            Architect <span className="text-royal-blue">{dest.name}</span>
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
