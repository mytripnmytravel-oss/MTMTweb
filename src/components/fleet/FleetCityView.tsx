"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, MapPin, Users, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { Vehicle } from "@/data/fleet";
import type { Destination } from "@/data/destinations";
import type { FleetCityContent } from "@/data/fleetCities";

export default function FleetCityView({
    vehicle,
    dest,
    content,
    otherCities,
    otherVehicles,
}: {
    vehicle: Vehicle;
    dest: Destination;
    content: FleetCityContent;
    otherCities: { slug: string; name: string }[];
    otherVehicles: Vehicle[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[56vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={vehicle.img} alt={`${vehicle.name} chauffeur hire in ${dest.name}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-14">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-black uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/fleet" className="hover:text-sunset-orange transition-colors">Elite Fleet</Link>
                            <ChevronRight size={12} />
                            <Link href={`/fleet/${vehicle.id}`} className="hover:text-sunset-orange transition-colors">{vehicle.name}</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">in {dest.name}</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">
                            {vehicle.category} {vehicle.type} · {dest.state}
                        </motion.h4>
                        <CharBlurIn text={`${vehicle.name} IN ${dest.name}`.toUpperCase()} className="text-3xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] block" />
                    </div>
                </section>

                <section className="py-24 md:py-28 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">The Brief</h4>
                        <p className="text-2xl md:text-4xl font-black text-royal-blue leading-snug tracking-tight mb-12">{content.answer}</p>
                        <div className="space-y-7 max-w-3xl">
                            {content.intro.map((para, i) => (
                                <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed">
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-4 mt-12">
                            <div className="glass-card rounded-2xl px-7 py-4 border-royal-blue/5 flex items-center gap-3">
                                <Users className="text-sunset-orange" size={18} />
                                <span className="font-black uppercase text-xs tracking-widest text-royal-blue">{vehicle.passengers} passengers</span>
                            </div>
                            <div className="glass-card rounded-2xl px-7 py-4 border-royal-blue/5 flex items-center gap-3">
                                <Briefcase className="text-sunset-orange" size={18} />
                                <span className="font-black uppercase text-xs tracking-widest text-royal-blue">{vehicle.luggage}</span>
                            </div>
                            <Link href={`/destinations/${dest.slug}`} className="glass-card rounded-2xl px-7 py-4 border-royal-blue/5 flex items-center gap-3 hover:bg-sunset-orange hover:text-white transition-all duration-500 group">
                                <MapPin className="text-sunset-orange group-hover:text-white" size={18} />
                                <span className="font-black uppercase text-xs tracking-widest">Explore {dest.name}</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {content.faqs.length > 0 && (
                    <section className="py-24 bg-royal-blue/5">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-14">
                                <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                                <CharBlurIn text={`${vehicle.name} · ${dest.name}`.toUpperCase()} className="text-2xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter block leading-none" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                {content.faqs.map((f, i) => (
                                    <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                        <div className="flex items-start gap-4 mb-4">
                                            <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                            <h3 className="font-black text-royal-blue uppercase tracking-tight text-base leading-tight">{f.q}</h3>
                                        </div>
                                        <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section className="py-24 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">{vehicle.name} in Other Cities</h4>
                    <div className="flex flex-wrap gap-3 mb-14">
                        {otherCities.map((c) => (
                            <Link key={c.slug} href={`/fleet/${vehicle.id}/in/${c.slug}`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">
                                {c.name}
                            </Link>
                        ))}
                    </div>
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Other Vehicles in {dest.name}</h4>
                    <div className="flex flex-wrap gap-3">
                        {otherVehicles.map((v) => (
                            <Link key={v.id} href={`/fleet/${v.id}/in/${dest.slug}`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">
                                {v.name}
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="py-24 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-royal-blue text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">
                            {vehicle.name} chauffeur in <span className="text-sunset-orange">{dest.name}</span>
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
