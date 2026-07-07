"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ChevronRight,
    ArrowRight,
    HelpCircle,
    CloudRain,
    Sun,
    Users,
    Sparkles,
    Calendar,
    Check,
    X,
    MapPin,
    Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { MonthContent, Verdict } from "@/data/destinationMonths";
import { VERDICT_TAG } from "@/data/destinationMonths";

function toneClass(tone: MonthContent["verdictTone"]): string {
    switch (tone) {
        case "go": return "bg-emerald-500 text-white";
        case "ok": return "bg-sunset-orange text-white";
        case "caution": return "bg-amber-500 text-white";
        case "specific": return "bg-royal-blue text-white";
    }
}

function siblingChipClass(verdict: Verdict, isCurrent: boolean): string {
    if (isCurrent) return "bg-royal-blue text-white pointer-events-none";
    switch (verdict) {
        case "peak": case "ideal": return "border-emerald-300 text-emerald-700 hover:bg-emerald-50";
        case "good": return "border-sunset-orange/40 text-royal-blue hover:bg-sunset-orange hover:text-white";
        case "shoulder": return "border-amber-300 text-amber-700 hover:bg-amber-50";
        case "dawn-only": case "monsoon": case "cyclone-risk": return "border-amber-400 text-amber-800 hover:bg-amber-50";
        case "winter-snow": case "ladakh-peak": case "wellness": return "border-royal-blue/30 text-royal-blue hover:bg-royal-blue hover:text-white";
        default: return "border-royal-blue/20 text-royal-blue";
    }
}

export default function DestinationMonthView({ content }: { content: MonthContent }) {
    const { dest } = content;
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Hero */}
                <section className="relative h-[62vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={dest.heroImg} alt={`${dest.name} in ${content.monthLabel}`} fill priority className="object-cover" />
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
                            <span className="text-sunset-orange">{content.monthLabel}</span>
                        </nav>
                        <div className="flex items-center gap-3 mb-5">
                            <span className={`px-4 py-2 rounded-full text-[10px] font-semibold tracking-[0.3em] uppercase ${toneClass(content.verdictTone)}`}>{content.verdictTag}</span>
                            <span className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs">{dest.name} &middot; {content.monthLabel}</span>
                        </div>
                        <CharBlurIn text={content.h1.toUpperCase()} className="text-4xl md:text-7xl font-semibold text-white uppercase tracking-tight leading-[0.9] block" />
                        <p className="text-white/85 text-base md:text-lg font-bold mt-6 max-w-3xl leading-relaxed">{content.headline}</p>
                    </div>
                </section>

                {/* Answer block — AIO citation surface */}
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

                {/* Climate card */}
                <section className="pb-20 container mx-auto px-6">
                    <div className="glass-card rounded-2xl p-9 md:p-12 border-royal-blue/5 bg-royal-blue/5">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-8">{content.monthLabel} Climate &amp; Operations</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-2xl p-6 border border-royal-blue/5">
                                <Sun className="text-sunset-orange mb-3" size={22} />
                                <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-sm mb-2">Weather</h3>
                                <p className="text-dark-slate/70 font-bold text-sm leading-relaxed">{content.climate.weather}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-royal-blue/5">
                                <Sparkles className="text-sunset-orange mb-3" size={22} />
                                <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-sm mb-2">Light</h3>
                                <p className="text-dark-slate/70 font-bold text-sm leading-relaxed">{content.climate.light}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-royal-blue/5">
                                <Users className="text-sunset-orange mb-3" size={22} />
                                <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-sm mb-2">Crowd</h3>
                                <p className="text-dark-slate/70 font-bold text-sm leading-relaxed">{content.climate.crowd}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-royal-blue/5">
                                <CloudRain className="text-sunset-orange mb-3" size={22} />
                                <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-sm mb-2">Rainfall</h3>
                                <p className="text-dark-slate/70 font-bold text-sm leading-relaxed">{content.climate.rainfall}</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-royal-blue/10 flex flex-col md:flex-row md:items-start gap-4">
                            <Calendar className="text-sunset-orange shrink-0 mt-1" size={20} />
                            <p className="text-dark-slate/70 font-bold italic text-sm md:text-base leading-relaxed">{content.operationalNote}</p>
                        </div>
                    </div>
                </section>

                {/* For / Avoid */}
                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="glass-card rounded-2xl p-9 md:p-11 border-royal-blue/5">
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center"><Check className="text-white" size={18} /></div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-royal-blue uppercase tracking-tight">What {content.monthLabel} delivers</h3>
                                </div>
                                <ul className="space-y-4">
                                    {content.forThisMonth.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <ChevronRight className="text-emerald-500 shrink-0 mt-1" size={16} />
                                            <p className="text-dark-slate/75 font-bold leading-relaxed">{f}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass-card rounded-2xl p-9 md:p-11 border-royal-blue/5">
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center"><X className="text-white" size={18} /></div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-royal-blue uppercase tracking-tight">What {content.monthLabel} asks you to skip</h3>
                                </div>
                                <ul className="space-y-4">
                                    {content.avoidThisMonth.map((f, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <ChevronRight className="text-amber-500 shrink-0 mt-1" size={16} />
                                            <p className="text-dark-slate/75 font-bold leading-relaxed">{f}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recommended duration */}
                <section className="py-20 container mx-auto px-6">
                    <div className="glass-card rounded-2xl p-9 md:p-12 border-royal-blue/5 max-w-4xl">
                        <div className="flex items-center gap-3 mb-5">
                            <Clock className="text-sunset-orange" size={22} />
                            <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs">Recommended length in {content.monthLabel}</h4>
                        </div>
                        <p className="text-xl md:text-2xl font-semibold text-royal-blue leading-snug tracking-tight">{content.recommendedDuration}</p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link href={`/destinations/${dest.slug}/itinerary/3-day`} className="px-5 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">3-Day Itinerary</Link>
                            <Link href={`/destinations/${dest.slug}/itinerary/5-day`} className="px-5 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">5-Day Itinerary</Link>
                            <Link href={`/destinations/${dest.slug}/itinerary/7-day`} className="px-5 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">7-Day Itinerary</Link>
                            <Link href={`/destinations/${dest.slug}/itinerary/10-day`} className="px-5 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">10-Day Itinerary</Link>
                        </div>
                    </div>
                </section>

                {/* Editorial blocks */}
                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-10">{dest.name} &middot; {content.monthLabel} — Operating Notes</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            {content.facets.map((f, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card rounded-2xl p-9 border-royal-blue/5">
                                    <h3 className="text-xl md:text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4 leading-tight">{f.heading}</h3>
                                    <p className="text-dark-slate/70 font-bold text-base leading-relaxed">{f.body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Paired regions where this month also works */}
                {content.pairedRegions.length > 0 && (
                    <section className="py-20 container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">{content.monthLabel} is also strong in</h4>
                        <p className="text-base md:text-lg text-dark-slate/65 font-bold italic mb-7 max-w-3xl">Pair {dest.name} with — or pivot to — these regions where {content.monthLabel} is also in the recommended window.</p>
                        <div className="flex flex-wrap gap-3">
                            {content.pairedRegions.map((r) => (
                                <Link key={r.href} href={r.href} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-2">
                                    <MapPin size={14} /> {r.label}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Month navigation */}
                <section className="py-20 bg-royal-blue text-white">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-10">{dest.name} month-by-month</h4>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {content.siblingMonths.map((m) => (
                                <Link key={m.href} href={m.href} className={`px-4 py-3 rounded-2xl text-center font-semibold uppercase text-[11px] tracking-widest border bg-white ${siblingChipClass(m.verdict, false)}`}>
                                    <span className="block">{m.label}</span>
                                    <span className="block text-[8px] mt-1 opacity-80">{VERDICT_TAG[m.verdict]}</span>
                                </Link>
                            ))}
                            <div className={`px-4 py-3 rounded-2xl text-center font-semibold uppercase text-[11px] tracking-widest ${siblingChipClass(content.verdict, true)}`}>
                                <span className="block">{content.monthLabel}</span>
                                <span className="block text-[8px] mt-1 opacity-80">CURRENT</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                        <CharBlurIn text={`${dest.name.toUpperCase()} · ${content.monthLabel.toUpperCase()} FAQ`} className="text-2xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight block leading-none" />
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

                {/* CTA */}
                <section className="py-28 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-20 rounded-3xl bg-royal-blue text-white text-center shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">The {content.monthLabel} Mission</h4>
                        <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight leading-none mb-10 relative z-10">Architect <span className="text-sunset-orange">{dest.name}</span> in {content.monthLabel}</h2>
                        <p className="text-white/80 text-base md:text-lg font-bold leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">Private, chauffeured, escorted — day-pacing tuned to {content.monthLabel}'s conditions in {dest.name}. We'll brief the architecture against your party and dates.</p>
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
