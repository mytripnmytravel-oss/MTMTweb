"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, CheckCircle2, Clock, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { WellnessProgramme, WellnessVariant } from "@/data/wellness";

export default function WellnessVariantView({
    programme,
    variant,
}: {
    programme: WellnessProgramme;
    variant: WellnessVariant;
}) {
    const siblings = programme.variants.filter((v) => v.slug !== variant.slug);

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[60vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={programme.heroImg} alt={`${variant.name} — ${programme.name}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-16">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-black uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/wellness" className="hover:text-sunset-orange transition-colors">Wellness</Link>
                            <ChevronRight size={12} />
                            <Link href={`/wellness/${programme.slug}`} className="hover:text-sunset-orange transition-colors">{programme.name}</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{variant.name}</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
                            {programme.label}
                        </motion.h4>
                        <CharBlurIn text={variant.name.toUpperCase()} className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] block" />
                    </div>
                </section>

                <section className="py-24 md:py-32 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">The Brief</h4>
                        <p className="text-2xl md:text-4xl font-black text-royal-blue leading-snug tracking-tight mb-14">
                            {variant.answer}
                        </p>
                        <div className="space-y-7 max-w-3xl">
                            {variant.intro.map((para, i) => (
                                <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed">
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-12">
                            <div className="glass-card rounded-2xl px-7 py-4 border-royal-blue/5 flex items-center gap-3">
                                <Clock className="text-sunset-orange" size={18} />
                                <span className="font-black uppercase text-xs tracking-widest text-royal-blue">{variant.duration}</span>
                            </div>
                            <div className="glass-card rounded-2xl px-7 py-4 border-royal-blue/5 flex items-center gap-3">
                                <UserCheck className="text-sunset-orange" size={18} />
                                <span className="font-black uppercase text-xs tracking-widest text-royal-blue">{variant.idealFor}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
                        <div>
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-8">Outcomes</h4>
                            <div className="space-y-4">
                                {variant.benefits.map((b, i) => (
                                    <div key={i} className="glass-card rounded-2xl p-6 border-royal-blue/5 flex gap-4">
                                        <CheckCircle2 className="text-sunset-orange shrink-0 mt-0.5" size={20} />
                                        <span className="text-base md:text-lg text-dark-slate/70 font-bold italic leading-relaxed">{b}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-8">The Protocol</h4>
                            <div className="space-y-px">
                                {variant.protocol.map((p, i) => (
                                    <div key={i} className="py-6 border-b border-royal-blue/10">
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-2">{p.phase}</div>
                                        <p className="text-base md:text-lg text-dark-slate/70 font-bold italic leading-relaxed">{p.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {variant.faqs.length > 0 && (
                    <section className="py-28 container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                            <CharBlurIn text={`${variant.name.toUpperCase()} FAQ`} className="text-3xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter block leading-none" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {variant.faqs.map((f, i) => (
                                <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                    <div className="flex items-start gap-4 mb-4">
                                        <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                        <h3 className="font-black text-royal-blue uppercase tracking-tight text-lg leading-tight">{f.q}</h3>
                                    </div>
                                    <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section className="py-28 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">More {programme.label}</h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            <Link href={`/wellness/${programme.slug}`} className="glass-card rounded-3xl p-7 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all flex items-center justify-between">
                                <span className="font-black uppercase text-sm tracking-tight text-royal-blue group-hover:text-sunset-orange transition-colors">{programme.name} — Overview</span>
                                <ArrowRight size={16} className="text-sunset-orange" />
                            </Link>
                            {siblings.map((s) => (
                                <Link key={s.slug} href={`/wellness/${programme.slug}/${s.slug}`} className="glass-card rounded-3xl p-7 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all flex items-center justify-between">
                                    <span className="font-black uppercase text-sm tracking-tight text-royal-blue group-hover:text-sunset-orange transition-colors">{s.name}</span>
                                    <ArrowRight size={16} className="text-sunset-orange shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-28 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-sunset-orange text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8 relative z-10">
                            Architect a <span className="text-royal-blue">{variant.name}</span> programme
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3 mb-10 relative z-10">
                            {variant.relatedDestinations.map((r, i) => (
                                <Link key={i} href={r.href} className="px-6 py-3 bg-white/10 rounded-2xl border border-white/20 font-black uppercase text-[11px] tracking-widest text-white hover:bg-white hover:text-royal-blue transition-all duration-500">
                                    {r.label}
                                </Link>
                            ))}
                        </div>
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
