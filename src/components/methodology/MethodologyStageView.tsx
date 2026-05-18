"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { MethodologyStage } from "@/data/methodology";

export default function MethodologyStageView({
    stage,
    others,
}: {
    stage: MethodologyStage;
    others: MethodologyStage[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="pt-60 pb-16 container mx-auto px-6">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-royal-blue/50 font-black uppercase text-[10px] tracking-[0.3em]">
                        <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/methodology" className="hover:text-sunset-orange transition-colors">Methodology</Link>
                        <ChevronRight size={12} />
                        <span className="text-sunset-orange">{stage.name}</span>
                    </nav>
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">The Mission Protocol &middot; {stage.phase}</h4>
                    <CharBlurIn text={stage.name.toUpperCase()} className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] block mb-10" />
                    <p className="text-2xl md:text-3xl font-black text-royal-blue leading-snug tracking-tight max-w-4xl mb-10">{stage.answer}</p>
                    <div className="space-y-6 max-w-3xl">
                        {stage.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed">{p}</motion.p>
                        ))}
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-10">What This Phase Covers</h4>
                        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl">
                            {stage.features.map((f, i) => (
                                <div key={i} className="glass-card rounded-3xl p-8 border-royal-blue/5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle2 className="text-sunset-orange shrink-0" size={18} />
                                        <span className="text-lg font-black uppercase tracking-tight text-royal-blue">{f.name}</span>
                                    </div>
                                    <p className="text-base text-dark-slate/70 font-bold italic leading-relaxed">{f.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                        <CharBlurIn text={`${stage.name} FAQ`.toUpperCase()} className="text-2xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter block leading-none" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {stage.faqs.map((f, i) => (
                            <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                <div className="flex items-start gap-4 mb-4">
                                    <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                    <h3 className="font-black text-royal-blue uppercase tracking-tight text-base leading-tight">{f.q}</h3>
                                </div>
                                <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-8">The Full Protocol</h4>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {others.map((s) => (
                                <Link key={s.slug} href={`/methodology/${s.slug}`} className="glass-card rounded-3xl p-7 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all">
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-2">{s.phase}</div>
                                    <span className="text-xl font-black uppercase tracking-tighter text-royal-blue group-hover:text-sunset-orange transition-colors">{s.name}</span>
                                </Link>
                            ))}
                            <Link href="/methodology" className="glass-card rounded-3xl p-7 border-sunset-orange/30 bg-sunset-orange/10 group hover:bg-sunset-orange/20 transition-all flex items-center justify-between">
                                <span className="text-xl font-black uppercase tracking-tighter text-royal-blue">Methodology Overview</span>
                                <ArrowRight size={18} className="text-sunset-orange shrink-0" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-28 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-royal-blue text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">Run the <span className="text-sunset-orange">Protocol</span></h2>
                        <Magnetic>
                            <Link href="/booking" className="inline-block relative z-10 bg-sunset-orange text-white py-6 px-12 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">Begin a Mission Brief</Link>
                        </Magnetic>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
