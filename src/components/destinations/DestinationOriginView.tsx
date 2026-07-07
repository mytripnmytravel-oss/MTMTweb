"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, Plane, Clock, MapPin, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
import type { CityOriginContent } from "@/data/destinationOrigins";

export default function DestinationOriginView({ content }: { content: CityOriginContent }) {
    const { dest, origin } = content;
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[62vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={dest.heroImg} alt={`${dest.name} from ${origin.city}`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-16">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-semibold uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/destinations" className="hover:text-sunset-orange transition-colors">Destinations</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/region/${dest.regionSlug}`} className="hover:text-sunset-orange transition-colors">{dest.region}</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/${dest.slug}`} className="hover:text-sunset-orange transition-colors">{dest.name}</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">From {origin.city}</span>
                        </nav>
                        <div className="flex items-center gap-3 mb-5">
                            <Plane size={16} className="text-sunset-orange" />
                            <span className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs">{origin.city} → {dest.name}</span>
                        </div>
                        <CharBlurIn text={content.h1.toUpperCase()} className="text-4xl md:text-7xl font-semibold text-white uppercase tracking-tight leading-[0.9] block" />
                    </div>
                </section>

                <section className="py-20 md:py-28 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">The Brief</h4>
                        <p className="text-2xl md:text-4xl font-semibold text-royal-blue leading-snug tracking-tight mb-12">{content.answer}</p>
                        {content.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed max-w-3xl mb-7">
                                {p}
                            </motion.p>
                        ))}
                    </div>
                </section>

                {/* Flight + Gateway card */}
                <section className="pb-20 container mx-auto px-6">
                    <div className="glass-card rounded-2xl p-9 md:p-12 border-royal-blue/5 bg-royal-blue/5">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-8">{origin.city} → {dest.name}</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6 border border-royal-blue/5">
                                <Plane className="text-sunset-orange mb-3" size={22} />
                                <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-sm mb-2">Flight</h3>
                                <p className="text-dark-slate/70 font-bold text-sm leading-relaxed">{content.flightBand}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-royal-blue/5">
                                <MapPin className="text-sunset-orange mb-3" size={22} />
                                <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-sm mb-2">Gateway</h3>
                                <p className="text-dark-slate/70 font-bold text-sm leading-relaxed">{content.gateway.label}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-royal-blue/5">
                                <Clock className="text-sunset-orange mb-3" size={22} />
                                <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-sm mb-2">Arrival day</h3>
                                <p className="text-dark-slate/70 font-bold text-sm leading-relaxed">{content.arrivalNote.split(".")[0]}.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Facet blocks */}
                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-10">How we run the {origin.city} → {dest.name} mission</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            {content.facets.map((f, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card rounded-2xl p-9 border-royal-blue/5">
                                    <h3 className="text-xl md:text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4 leading-tight">{f.heading}</h3>
                                    <p className="text-dark-slate/70 font-bold text-base leading-relaxed">{f.body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                        <CharBlurIn text={`${dest.name.toUpperCase()} FROM ${origin.city.toUpperCase()}`} className="text-2xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight block leading-none" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {content.faqs.map((f, i) => (
                            <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                <div className="flex items-start gap-4 mb-4">
                                    <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                    <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-base leading-tight">{f.q}</h3>
                                </div>
                                <p className="text-dark-slate/65 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Cross-links */}
                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Continue planning</h4>
                        <div className="flex flex-wrap gap-3">
                            {content.crossLinks.map((c) => (
                                <Link key={c.href} href={c.href} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-2">{c.label} <ArrowRight size={14} /></Link>
                            ))}
                        </div>
                    </div>
                </section>

                <LeadBlock
                    source={`Destination from origin: ${dest.name} from ${origin.city}`}
                    context={{ "Inquiry Type": "Destination", Destination: dest.name, Origin: origin.city, Region: dest.region }}
                    heading={`Plan your ${dest.name} trip from ${origin.city}`}
                    pitch={`Private, chauffeured travel to ${dest.name} with flights and gateway timing worked out from ${origin.city}. Tell us your dates and party size, and we reply with a tailored plan and a transparent quote.`}
                    waMessage={`Hi MyTripMyTravel, I would like to travel to ${dest.name} from ${origin.city}.`}
                    faqs={content.faqs}
                    breadcrumbs={[
                        { name: "Home", item: "https://www.mytripmytravel.com" },
                        { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                        { name: dest.region, item: `https://www.mytripmytravel.com/destinations/region/${dest.regionSlug}` },
                        { name: dest.name, item: `https://www.mytripmytravel.com/destinations/${dest.slug}` },
                        { name: `From ${origin.city}` },
                    ]}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
