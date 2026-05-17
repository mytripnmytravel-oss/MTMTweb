"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, Users, Briefcase, CheckCircle2, Gauge } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { Vehicle, VehicleContent } from "@/data/fleet";

export default function FleetDetailView({
    vehicle,
    content,
    related,
    cities = [],
}: {
    vehicle: Vehicle;
    content: VehicleContent;
    related: Vehicle[];
    cities?: { slug: string; name: string }[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[64vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={vehicle.img} alt={`${vehicle.name} — chauffeured ${vehicle.type}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-16">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-black uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/fleet" className="hover:text-sunset-orange transition-colors">Elite Fleet</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{vehicle.name}</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
                            {vehicle.category} · {vehicle.type}
                        </motion.h4>
                        <CharBlurIn text={vehicle.name.toUpperCase()} className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] block" />
                    </div>
                </section>

                <section className="py-24 md:py-32 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">The Brief</h4>
                        <p className="text-2xl md:text-4xl font-black text-royal-blue leading-snug tracking-tight mb-14">{content.answer}</p>
                        <div className="space-y-7 max-w-3xl">
                            {content.intro.map((para, i) => (
                                <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed">
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                            <div className="glass-card rounded-3xl p-7 border-royal-blue/5">
                                <Users className="text-sunset-orange mb-3" size={22} />
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-1">Capacity</div>
                                <div className="text-lg font-black text-royal-blue">{vehicle.passengers} passengers</div>
                            </div>
                            <div className="glass-card rounded-3xl p-7 border-royal-blue/5">
                                <Briefcase className="text-sunset-orange mb-3" size={22} />
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-1">Luggage</div>
                                <div className="text-lg font-black text-royal-blue">{vehicle.luggage}</div>
                            </div>
                            <div className="glass-card rounded-3xl p-7 border-royal-blue/5">
                                <Gauge className="text-sunset-orange mb-3" size={22} />
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-1">Class</div>
                                <div className="text-lg font-black text-royal-blue">{vehicle.category} {vehicle.type}</div>
                            </div>
                            <div className="glass-card rounded-3xl p-7 border-royal-blue/5">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-1 mt-9">Pricing band</div>
                                <div className="text-lg font-black text-royal-blue">{vehicle.priceRange}</div>
                            </div>
                        </div>
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-6">Configuration</h4>
                        <div className="flex flex-wrap gap-3">
                            {vehicle.features.map((f, i) => (
                                <span key={i} className="glass-card rounded-2xl px-6 py-4 border-royal-blue/5 font-black uppercase text-xs tracking-widest text-royal-blue flex items-center gap-3">
                                    <CheckCircle2 size={16} className="text-sunset-orange" /> {f}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {content.faqs.length > 0 && (
                    <section className="py-28 container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                            <CharBlurIn text={`${vehicle.name.toUpperCase()} FAQ`} className="text-3xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter block leading-none" />
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
                    </section>
                )}

                {cities.length > 0 && (
                    <section className="py-24 container mx-auto px-6">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">{vehicle.name} — Local Chauffeur Hire</h4>
                        <CharBlurIn text="BY CITY" className="text-3xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter block leading-none mb-10" />
                        <div className="flex flex-wrap gap-3">
                            {cities.map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/fleet/${vehicle.id}/in/${c.slug}`}
                                    className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500"
                                >
                                    {vehicle.name} in {c.name}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <section className="py-28 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">More of the Fleet</h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {related.map((r) => (
                                <Link
                                    key={r.id}
                                    href={`/fleet/${r.id}`}
                                    className="block glass-card rounded-[2.5rem] overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/30 transition-all duration-700"
                                >
                                    <div className="relative h-48">
                                        <Image src={r.img} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/70 to-transparent" />
                                        <div className="absolute bottom-5 left-6">
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-1">{r.category}</div>
                                            <h3 className="text-xl font-black text-white uppercase tracking-tighter">{r.name}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6 flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-royal-blue/40">{r.type}</span>
                                        <ArrowRight size={16} className="text-sunset-orange" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-12">
                            <Link href="/fleet" className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                Full Elite Fleet <ArrowRight size={14} />
                            </Link>
                            <Link href="/tours/golden-triangle" className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                Golden Triangle tours <ArrowRight size={14} />
                            </Link>
                            <Link href="/destinations" className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                Destination archive <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-28 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-royal-blue text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">
                            Deploy the <span className="text-sunset-orange">{vehicle.name}</span>
                        </h2>
                        <Magnetic>
                            <Link href="/booking" className="inline-block relative z-10 bg-sunset-orange text-white py-6 px-12 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">
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
