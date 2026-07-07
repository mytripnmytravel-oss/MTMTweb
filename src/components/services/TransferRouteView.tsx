"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, CheckCircle2, Clock, Navigation2, Users, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { Destination } from "@/data/destinations";
import type { TransferRoute, RouteContent } from "@/data/transferRoutes";

export default function TransferRouteView({
    route,
    origin,
    destination,
    content,
}: {
    route: TransferRoute;
    origin: Destination;
    destination: Destination;
    content: RouteContent;
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[58vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={destination.heroImg} alt={content.h1} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-16">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-semibold uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/services" className="hover:text-sunset-orange transition-colors">Services</Link>
                            <ChevronRight size={12} />
                            <Link href="/services/inter-city" className="hover:text-sunset-orange transition-colors">Inter-City Transfers</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{origin.name} → {destination.name}</span>
                        </nav>
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Inter-City Transfer</h4>
                        <CharBlurIn text={content.h1.toUpperCase()} className="text-3xl md:text-7xl font-semibold text-white uppercase tracking-tight leading-[0.9] block" />
                    </div>
                </section>

                <section className="py-24 md:py-28 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">The Brief</h4>
                        <p className="text-2xl md:text-4xl font-semibold text-royal-blue leading-snug tracking-tight mb-12">{content.answer}</p>
                        <div className="space-y-7 max-w-3xl">
                            {content.intro.map((p, i) => (
                                <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed">{p}</motion.p>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-12">
                            <div className="glass-card rounded-2xl px-7 py-4 border-royal-blue/5 flex items-center gap-3">
                                <Navigation2 className="text-sunset-orange" size={18} />
                                <span className="font-semibold uppercase text-xs tracking-widest text-royal-blue">~{route.distanceKm} km</span>
                            </div>
                            <div className="glass-card rounded-2xl px-7 py-4 border-royal-blue/5 flex items-center gap-3">
                                <Clock className="text-sunset-orange" size={18} />
                                <span className="font-semibold uppercase text-xs tracking-widest text-royal-blue">~{route.driveHrs} hrs</span>
                            </div>
                            {route.via && (
                                <div className="glass-card rounded-2xl px-7 py-4 border-royal-blue/5 flex items-center gap-3">
                                    <span className="font-semibold uppercase text-xs tracking-widest text-royal-blue">via {route.via}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-8">What&apos;s Included</h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {content.inclusions.map((inc, i) => (
                                <div key={i} className="glass-card rounded-3xl p-7 border-royal-blue/5 flex gap-4">
                                    <CheckCircle2 className="text-sunset-orange shrink-0 mt-0.5" size={20} />
                                    <span className="text-base text-dark-slate/70 font-bold italic leading-relaxed">{inc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-8">Vehicle Classes</h4>
                    <div className="grid sm:grid-cols-3 gap-5">
                        {content.vehicleClasses.map((v, i) => (
                            <div key={i} className="glass-card rounded-3xl p-7 border-royal-blue/5">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sunset-orange mb-2">{v.tier} tier</div>
                                <div className="text-xl font-semibold text-royal-blue uppercase tracking-tight mb-4">{v.name}</div>
                                <div className="space-y-2 text-[11px] font-semibold uppercase tracking-widest text-royal-blue/60">
                                    <div className="flex items-center gap-2"><Users size={12} className="text-sunset-orange" /> {v.passengers} passengers</div>
                                    <div className="flex items-center gap-2"><Briefcase size={12} className="text-sunset-orange" /> {v.luggage}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Link href="/fleet" className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 inline-flex items-center gap-3">Full Elite Fleet <ArrowRight size={14} /></Link>
                    </div>
                </section>

                <section className="py-24 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-14">
                            <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                            <CharBlurIn text={`${origin.name} → ${destination.name} FAQ`.toUpperCase()} className="text-2xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight block leading-none" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {content.faqs.map((f, i) => (
                                <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                    <div className="flex items-start gap-4 mb-4">
                                        <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                        <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-base leading-tight">{f.q}</h3>
                                    </div>
                                    <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Continue planning</h4>
                    <div className="flex flex-wrap gap-3">
                        <Link href={`/destinations/${origin.slug}`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">Explore {origin.name}</Link>
                        <Link href={`/destinations/${destination.slug}`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">Explore {destination.name}</Link>
                        <Link href={`/destinations/${destination.slug}/itinerary`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{destination.name} itineraries</Link>
                        <Link href="/services/inter-city" className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-2">All inter-city routes <ArrowRight size={14} /></Link>
                    </div>
                </section>

                <section className="py-28 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-20 rounded-3xl bg-royal-blue text-white text-center shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight leading-none mb-10 relative z-10">{origin.name} → <span className="text-sunset-orange">{destination.name}</span></h2>
                        <Magnetic>
                            <Link href="/booking" className="inline-block relative z-10 bg-sunset-orange text-white py-6 px-12 rounded-2xl font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">Book this Transfer</Link>
                        </Magnetic>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
