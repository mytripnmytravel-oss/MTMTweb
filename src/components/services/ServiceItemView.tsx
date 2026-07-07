"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { ServiceItem } from "@/data/serviceItems";

export default function ServiceItemView({
    item,
    siblings,
}: {
    item: ServiceItem;
    siblings: ServiceItem[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="pt-60 pb-16 container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-royal-blue/50 font-semibold uppercase text-[10px] tracking-[0.3em]">
                        <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/services" className="hover:text-sunset-orange transition-colors">Services</Link>
                        <ChevronRight size={12} />
                        <span className="text-sunset-orange">{item.name}</span>
                    </nav>
                    <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">{item.category}</h4>
                    <h1 className="text-4xl md:text-7xl font-semibold text-royal-blue uppercase tracking-tight leading-[0.92] mb-12">{item.name}</h1>
                    <p className="text-2xl md:text-3xl font-semibold text-royal-blue leading-snug tracking-tight max-w-4xl mb-12">{item.answer}</p>
                    <div className="space-y-6 max-w-3xl">
                        {item.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed">{p}</motion.p>
                        ))}
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-8">Operational Detail</h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {item.points.map((pt, i) => (
                                <div key={i} className="glass-card rounded-3xl p-7 border-royal-blue/5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle2 className="text-sunset-orange shrink-0" size={18} />
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sunset-orange">{pt.label}</span>
                                    </div>
                                    <p className="text-base text-dark-slate/70 font-bold italic leading-relaxed">{pt.detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex flex-wrap gap-3">
                            {item.links.map((l, i) => (
                                <Link key={i} href={l.href} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                    {l.label} <ArrowRight size={14} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                        <CharBlurIn text={`${item.name} FAQ`.toUpperCase()} className="text-2xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight block leading-none" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {item.faqs.map((f, i) => (
                            <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                <div className="flex items-start gap-4 mb-4">
                                    <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                    <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-base leading-tight">{f.q}</h3>
                                </div>
                                <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Other Services</h4>
                        <div className="flex flex-wrap gap-3">
                            {siblings.map((s) => (
                                <Link key={s.slug} href={`/services/${s.slug}`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{s.name}</Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-28 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-20 rounded-3xl bg-royal-blue text-white text-center shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight leading-none mb-10 relative z-10">Brief the <span className="text-sunset-orange">operations desk</span></h2>
                        <Magnetic>
                            <Link href="/booking" className="inline-block relative z-10 bg-sunset-orange text-white py-6 px-12 rounded-2xl font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">Begin a Mission Brief</Link>
                        </Magnetic>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
