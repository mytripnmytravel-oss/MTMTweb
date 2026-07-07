"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, CheckCircle2, Plane } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
import type { Destination } from "@/data/destinations";
import type { CorporateRoute, CorporateRouteContent } from "@/data/corporateRoutes";

export default function CorporateRouteView({
    route,
    destination,
    content,
}: {
    route: CorporateRoute;
    destination: Destination;
    content: CorporateRouteContent;
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[56vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={destination.heroImg} alt={content.h1} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-14">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-semibold uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/corporate" className="hover:text-sunset-orange transition-colors">Corporate</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{route.originLabel} → {destination.name}</span>
                        </nav>
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Corporate Offsite Route</h4>
                        <CharBlurIn text={content.h1.toUpperCase()} className="text-3xl md:text-6xl font-semibold text-white uppercase tracking-tight leading-[0.92] block" />
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
                                <Plane className="text-sunset-orange" size={18} />
                                <span className="font-semibold uppercase text-xs tracking-widest text-royal-blue">Fly: {route.originGateway} → {destination.name}</span>
                            </div>
                            <div className="glass-card rounded-2xl px-7 py-4 border-royal-blue/5">
                                <span className="font-semibold uppercase text-xs tracking-widest text-royal-blue">Ground operation: MyTripMyTravel</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-8">On-Ground Inclusions in {destination.name}</h4>
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

                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                        <CharBlurIn text={`${route.originLabel} → ${destination.name} FAQ`.toUpperCase()} className="text-2xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight block leading-none" />
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
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Continue planning</h4>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/corporate" className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">Corporate hub</Link>
                            <Link href="/corporate/by-team-size" className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">By team size</Link>
                            <Link href="/corporate/events" className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">Event types</Link>
                            <Link href={`/destinations/${destination.slug}`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{destination.name} brief</Link>
                            <Link href="/services/group-transport" className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-2">Group transport <ArrowRight size={14} /></Link>
                        </div>
                    </div>
                </section>

                <LeadBlock
                    source={`Corporate route: ${route.originLabel} to ${destination.name}`}
                    context={{ "Inquiry Type": "Corporate offsite", From: route.originLabel, To: destination.name }}
                    heading={`Plan your ${route.originLabel} to ${destination.name} offsite`}
                    pitch={`Fully managed ground operation in ${destination.name} for teams flying from ${route.originLabel}, with transfers, hotels and on-ground logistics handled end to end. Tell us your team size and dates and our corporate desk replies within a few hours.`}
                    waMessage={`Hi MyTripMyTravel, I would like to plan a corporate offsite from ${route.originLabel} to ${destination.name}.`}
                    faqs={content.faqs}
                    breadcrumbs={[
                        { name: "Home", item: "https://www.mytripmytravel.com" },
                        { name: "Corporate", item: "https://www.mytripmytravel.com/corporate" },
                        { name: `${route.originLabel} to ${destination.name}` },
                    ]}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
