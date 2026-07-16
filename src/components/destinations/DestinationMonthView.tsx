"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ChevronRight, ArrowRight, CloudRain, Sun, Users, Sparkles, Calendar, Check, X, MapPin, Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { MonthContent, Verdict } from "@/data/destinationMonths";
import { VERDICT_TAG } from "@/data/destinationMonths";

function toneClass(tone: MonthContent["verdictTone"]): string {
    switch (tone) {
        case "go": return "bg-emerald-600 text-white";
        case "ok": return "bg-clay text-white";
        case "caution": return "bg-amber-500 text-white";
        case "specific": return "bg-ink text-paper";
    }
}

function siblingChipClass(verdict: Verdict, isCurrent: boolean): string {
    if (isCurrent) return "bg-ink text-paper pointer-events-none";
    switch (verdict) {
        case "peak": case "ideal": return "border border-emerald-300 text-emerald-700 hover:bg-emerald-50";
        case "good": return "border border-clay/40 text-ink hover:border-clay hover:text-clay";
        case "shoulder": return "border border-amber-300 text-amber-700 hover:bg-amber-50";
        case "dawn-only": case "monsoon": case "cyclone-risk": return "border border-amber-400 text-amber-800 hover:bg-amber-50";
        case "winter-snow": case "ladakh-peak": case "wellness": return "border border-line text-ink hover:border-ink";
        default: return "border border-line text-ink";
    }
}

const fade = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } } as const;

export default function DestinationMonthView({ content }: { content: MonthContent }) {
    const { dest } = content;
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[60vh] min-h-[460px] items-end overflow-hidden">
                <Image src={dest.heroImg} alt={`${dest.name} in ${content.monthLabel}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/destinations" className="hover:text-clay-soft">Destinations</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/region/${dest.regionSlug}`} className="hover:text-clay-soft">{dest.region}</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}`} className="hover:text-clay-soft">{dest.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{content.monthLabel}</span>
                    </nav>
                    <div className="mb-4 flex items-center gap-3">
                        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${toneClass(content.verdictTone)}`}>{content.verdictTag}</span>
                        <span className="eyebrow text-paper/70">{dest.name} in {content.monthLabel}</span>
                    </div>
                    <h1 className="display-1 font-semibold text-paper">{content.h1}</h1>
                    <p className="mt-4 max-w-3xl text-lg text-paper/80">{content.headline}</p>
                </div>
            </section>

            {/* Answer + intro */}
            <section className="section">
                <div className="container-x max-w-4xl">
                    <p className="eyebrow eyebrow-accent">Overview</p>
                    <p className="mt-5 font-display text-[26px] font-semibold leading-snug text-ink sm:text-[32px]">{content.answer}</p>
                    <div className="mt-10 space-y-5">
                        {content.intro.map((p, i) => (
                            <p key={i} className="text-[17px] leading-relaxed text-muted">{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Climate */}
            <section className="section pt-0">
                <div className="container-x">
                    <div className="card p-8 sm:p-10">
                        <p className="eyebrow eyebrow-accent">{content.monthLabel} climate and operations</p>
                        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: Sun, label: "Weather", value: content.climate.weather },
                                { icon: Sparkles, label: "Light", value: content.climate.light },
                                { icon: Users, label: "Crowd", value: content.climate.crowd },
                                { icon: CloudRain, label: "Rainfall", value: content.climate.rainfall },
                            ].map((c) => {
                                const Icon = c.icon;
                                return (
                                    <div key={c.label} className="rounded-2xl border border-line bg-paper-dim/60 p-6">
                                        <Icon className="text-clay" size={20} />
                                        <h3 className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-stone">{c.label}</h3>
                                        <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{c.value}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-8 flex items-start gap-3 border-t border-line pt-6">
                            <Calendar className="mt-0.5 shrink-0 text-clay" size={18} />
                            <p className="text-[15px] leading-relaxed text-muted">{content.operationalNote}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* For / Avoid */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x grid gap-6 md:grid-cols-2">
                    <div className="card p-8">
                        <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white"><Check size={16} /></span>
                            <h3 className="text-xl font-semibold text-ink">What {content.monthLabel} delivers</h3>
                        </div>
                        <ul className="mt-6 space-y-3">
                            {content.forThisMonth.map((f, i) => (
                                <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft"><ChevronRight className="mt-1 shrink-0 text-emerald-600" size={15} />{f}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="card p-8">
                        <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-white"><X size={16} /></span>
                            <h3 className="text-xl font-semibold text-ink">What {content.monthLabel} asks you to skip</h3>
                        </div>
                        <ul className="mt-6 space-y-3">
                            {content.avoidThisMonth.map((f, i) => (
                                <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft"><ChevronRight className="mt-1 shrink-0 text-amber-500" size={15} />{f}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Recommended duration */}
            <section className="section">
                <div className="container-x max-w-4xl">
                    <div className="flex items-center gap-2">
                        <Clock className="text-clay" size={18} />
                        <p className="eyebrow eyebrow-accent">Recommended length in {content.monthLabel}</p>
                    </div>
                    <p className="mt-4 font-display text-[22px] font-semibold leading-snug text-ink sm:text-[26px]">{content.recommendedDuration}</p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        {["3-day", "5-day", "7-day", "10-day"].map((d) => (
                            <Link key={d} href={`/destinations/${dest.slug}/itinerary/${d}`} className="btn-outline btn-sm">{d.replace("-day", "")} day itinerary <ArrowRight size={14} /></Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Editorial facets */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">{dest.name} in {content.monthLabel}, operating notes</p>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {content.facets.map((f, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: (i % 2) * 0.05 }} className="card p-8">
                                <h3 className="text-xl font-semibold text-ink">{f.heading}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Paired regions */}
            {content.pairedRegions.length > 0 && (
                <section className="section">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">{content.monthLabel} is also strong in</p>
                        <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-muted">Pair {dest.name} with, or pivot to, these regions where {content.monthLabel} is also in the recommended window.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {content.pairedRegions.map((r) => (
                                <Link key={r.href} href={r.href} className="btn-outline btn-sm"><MapPin size={14} /> {r.label}</Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Month navigation */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">{dest.name} month by month</p>
                    <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6">
                        {content.siblingMonths.map((m) => (
                            <Link key={m.href} href={m.href} className={`rounded-xl bg-white px-4 py-3 text-center text-[12px] font-semibold transition-colors ${siblingChipClass(m.verdict, false)}`}>
                                <span className="block">{m.label}</span>
                                <span className="mt-1 block text-[9px] opacity-70">{VERDICT_TAG[m.verdict]}</span>
                            </Link>
                        ))}
                        <div className={`rounded-xl px-4 py-3 text-center text-[12px] font-semibold ${siblingChipClass(content.verdict, true)}`}>
                            <span className="block">{content.monthLabel}</span>
                            <span className="mt-1 block text-[9px] opacity-70">Current</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Good to know</p>
                    <h2 className="display-3 mt-3 text-ink">{dest.name} in {content.monthLabel}, your questions</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {content.faqs.map((f, i) => (
                            <div key={i} className="card p-7">
                                <h3 className="text-[17px] font-semibold text-ink">{f.q}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-links */}
            <section className="section pt-0">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Continue planning</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {content.crossLinks.map((c) => (
                            <Link key={c.href} href={c.href} className="btn-outline btn-sm">{c.label} <ArrowRight size={14} /></Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Destination month: ${dest.name} in ${content.monthLabel}`}
                context={{ "Inquiry Type": "Destination", Destination: dest.name, Month: content.monthLabel, Region: dest.region }}
                heading={`Plan ${dest.name} in ${content.monthLabel}`}
                pitch={`Private, chauffeured travel with day pacing tuned to ${content.monthLabel} conditions in ${dest.name}. Tell us your dates and party size, and we reply with a tailored plan and a transparent quote.`}
                waMessage={`Hi MyTripMyTravel, I would like to visit ${dest.name} in ${content.monthLabel}.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                    { name: dest.region, item: `https://www.mytripmytravel.com/destinations/region/${dest.regionSlug}` },
                    { name: dest.name, item: `https://www.mytripmytravel.com/destinations/${dest.slug}` },
                    { name: `${dest.name} in ${content.monthLabel}` },
                ]}
            />

            <Footer />
        </main>
    );
}
