"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
import { packageSlug } from "@/data/tours";
import type { RegionalTourHubContent } from "@/data/tourHubs";
import {
    regionThemeLinks,
    regionDurationLinks,
    regionMonthLinks,
    regionOriginLinks,
    regionComboLinks,
    regionHasVariants,
} from "@/data/regionVariants";

export default function RegionalTourHubView({
    content,
}: {
    content: RegionalTourHubContent;
}) {
    const { hub, packages, h1, answer, faqs } = content;
    const hasVariants = regionHasVariants(hub.slug);
    const themeLinks = hasVariants ? regionThemeLinks(hub.slug) : [];
    const durationLinks = hasVariants ? regionDurationLinks(hub.slug) : [];
    const monthLinks = hasVariants ? regionMonthLinks(hub.slug) : [];
    const originLinks = hasVariants ? regionOriginLinks(hub.slug) : [];
    const comboLinks = hasVariants ? regionComboLinks(hub.slug) : [];
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[58vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={hub.heroImg} alt={`${hub.name} tours`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-16">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-semibold uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/tours" className="hover:text-sunset-orange transition-colors">Tours</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{hub.name}</span>
                        </nav>
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">{hub.tagline}</h4>
                        <CharBlurIn text={h1.toUpperCase()} className="text-4xl md:text-7xl font-semibold text-white uppercase tracking-tight leading-[0.9] block" />
                    </div>
                </section>

                <section className="py-24 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">The Brief</h4>
                        <p className="text-2xl md:text-4xl font-semibold text-royal-blue leading-snug tracking-tight mb-12">{answer}</p>
                        <div className="space-y-7 max-w-3xl">
                            {hub.intro.map((p, i) => (
                                <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed">{p}</motion.p>
                            ))}
                        </div>

                        {hub.quickFacts && hub.quickFacts.length > 0 && (
                            <dl className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-5 rounded-2xl border border-royal-blue/10 p-8 md:p-10 bg-royal-blue/[0.02] max-w-3xl">
                                {hub.quickFacts.map((f, i) => (
                                    <div key={i} className="flex justify-between gap-6 border-b border-royal-blue/5 pb-4 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                                        <dt className="font-semibold uppercase tracking-widest text-[10px] text-royal-blue/40 pt-1 shrink-0">{f.label}</dt>
                                        <dd className="font-bold text-royal-blue text-right text-sm md:text-base">{f.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}

                        {hub.durationGuide && (
                            <div className="mt-10 max-w-3xl rounded-2xl border border-sunset-orange/20 bg-sunset-orange/[0.04] p-8 md:p-10">
                                <h3 className="flex items-center gap-3 font-semibold uppercase tracking-widest text-xs text-sunset-orange mb-4">
                                    <Clock size={16} /> How many days do you need?
                                </h3>
                                <p className="text-base md:text-lg text-dark-slate/75 font-bold leading-relaxed">{hub.durationGuide}</p>
                            </div>
                        )}
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center gap-5 mb-10">
                            <h2 className="text-3xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight">{hub.name} packages</h2>
                            <div className="h-px flex-1 bg-royal-blue/10" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-royal-blue/40">{packages.length} listed</span>
                        </div>
                        {packages.length > 0 ? (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {packages.map((p, idx) => (
                                    <motion.div key={p.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.05 }}>
                                        <Link href={`/tours/${packageSlug(p)}`} className="block glass-card rounded-2xl overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/30 transition-all duration-700 h-full">
                                            <div className="relative h-56">
                                                <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                                                    <Clock size={12} className="text-sunset-orange" />
                                                    <span className="text-[10px] font-semibold uppercase text-royal-blue tracking-widest">{p.duration}</span>
                                                </div>
                                            </div>
                                            <div className="p-7">
                                                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sunset-orange mb-3">{p.theme}</div>
                                                <h3 className="text-xl font-semibold text-royal-blue uppercase tracking-tight mb-3 leading-tight group-hover:text-sunset-orange transition-colors">{p.title}</h3>
                                                <p className="text-dark-slate/60 font-bold italic text-sm mb-6 leading-relaxed line-clamp-2">{p.highlight}</p>
                                                <div className="flex items-center justify-between pt-5 border-t border-royal-blue/5">
                                                    <span className="text-xl font-semibold text-royal-blue">{p.price}</span>
                                                    <span className="font-semibold uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 text-royal-blue group-hover:text-sunset-orange transition-colors">Open <ArrowRight size={14} /></span>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="glass-card rounded-3xl p-12 border-royal-blue/5 max-w-3xl">
                                <p className="text-base md:text-lg text-dark-slate/70 font-bold italic leading-relaxed mb-6">
                                    {hub.name} tours are currently designed bespoke through the planning desk rather than picked from a fixed package shelf. The architecture, hotels, stops, and pace are tailored to your party.
                                </p>
                                <Link href="/booking" className="inline-block px-7 py-4 bg-sunset-orange text-white rounded-2xl font-semibold uppercase text-[11px] tracking-widest hover:bg-royal-blue transition-all duration-500">Brief the Planning Desk</Link>
                            </div>
                        )}
                    </div>
                </section>

                {hasVariants && (
                    <section className="py-20 container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-10">Slice the {hub.name} circuit</h4>
                        {themeLinks.length > 0 && (
                            <div className="mb-10">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-royal-blue/40 mb-4">By Theme</p>
                                <div className="flex flex-wrap gap-3">
                                    {themeLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="px-5 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {durationLinks.length > 0 && (
                            <div className="mb-10">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-royal-blue/40 mb-4">By Duration</p>
                                <div className="flex flex-wrap gap-3">
                                    {durationLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="px-5 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {monthLinks.length > 0 && (
                            <div className="mb-10">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-royal-blue/40 mb-4">By Month</p>
                                <div className="flex flex-wrap gap-3">
                                    {monthLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="px-5 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {originLinks.length > 0 && (
                            <div className="mb-10">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-royal-blue/40 mb-4">From Your Origin City</p>
                                <div className="flex flex-wrap gap-3">
                                    {originLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="px-5 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {comboLinks.length > 0 && (
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-royal-blue/40 mb-4">By Duration × Theme</p>
                                <div className="flex flex-wrap gap-3">
                                    {comboLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="px-5 py-3 glass-card rounded-2xl border-sunset-orange/40 bg-sunset-orange/5 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>
                )}

                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                        <CharBlurIn text={`${hub.name.toUpperCase()} TOURS FAQ`} className="text-2xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight block leading-none" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {faqs.map((f, i) => (
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
                            <Link href={`/destinations/region/${hub.destinationsRegionSlug}`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{hub.name} destinations</Link>
                            <Link href="/tours" className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">All tour packages</Link>
                            <Link href="/fleet" className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">Elite Fleet</Link>
                            <Link href="/services/inter-city" className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-2">Inter-city transfers <ArrowRight size={14} /></Link>
                        </div>
                    </div>
                </section>

                <LeadBlock
                    variant="cta"
                    source={`Regional tour hub: ${hub.name}`}
                    context={{ "Inquiry Type": "Tour", Subject: hub.name }}
                    heading={`Plan your ${hub.name} tour`}
                    subheading="Tell us your dates and travel style and we craft a private, chauffeured itinerary with handpicked hotels and a transparent quote."
                    waMessage={`Hi MyTripMyTravel, I am interested in a ${hub.name} tour.`}
                    faqs={faqs}
                    breadcrumbs={[
                        { name: "Home", item: "https://www.mytripmytravel.com" },
                        { name: "Tours", item: "https://www.mytripmytravel.com/tours" },
                        { name: hub.name },
                    ]}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
