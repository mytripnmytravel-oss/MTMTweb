"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
import type { WellnessProgramme } from "@/data/wellness";
import type { WellnessFacetContent } from "@/data/wellnessFacets";

export default function WellnessFacetView({
    programme,
    content,
    breadcrumbSegment,
    siblingsTitle,
    siblings,
}: {
    programme: WellnessProgramme;
    content: WellnessFacetContent;
    breadcrumbSegment: string;
    siblingsTitle: string;
    siblings: { label: string; href: string }[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[56vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={programme.heroImg} alt={content.h1} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-14">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-semibold uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/wellness" className="hover:text-sunset-orange transition-colors">Wellness</Link>
                            <ChevronRight size={12} />
                            <Link href={`/wellness/${programme.slug}`} className="hover:text-sunset-orange transition-colors">{programme.name}</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{breadcrumbSegment}</span>
                        </nav>
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">{programme.label}</h4>
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
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-8">Key Points</h4>
                        <div className="grid sm:grid-cols-2 gap-5 max-w-5xl">
                            {content.points.map((pt, i) => (
                                <div key={i} className="glass-card rounded-3xl p-7 border-royal-blue/5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle2 className="text-sunset-orange shrink-0" size={18} />
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sunset-orange">{pt.label}</span>
                                    </div>
                                    <p className="text-base text-dark-slate/70 font-bold italic leading-relaxed">{pt.detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex flex-wrap gap-3">
                            {content.crossLinks.map((l, i) => (
                                <Link key={i} href={l.href} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                    {l.label} <ArrowRight size={14} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 container mx-auto px-6">
                    <div className="text-center mb-14">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                        <CharBlurIn text={`${content.h1.toUpperCase()} FAQ`} className="text-2xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight block leading-none" />
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

                {siblings.length > 0 && (
                    <section className="py-20 bg-royal-blue/5">
                        <div className="container mx-auto px-6">
                            <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">{siblingsTitle}</h4>
                            <div className="flex flex-wrap gap-3">
                                {siblings.map((s, i) => (
                                    <Link key={i} href={s.href} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{s.label}</Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <LeadBlock
                    source={`Wellness: ${programme.name} (${breadcrumbSegment})`}
                    context={{ "Inquiry Type": "Wellness", Programme: programme.name, Focus: breadcrumbSegment }}
                    heading={`Plan your ${programme.name} journey`}
                    pitch={`Physician-led where relevant, AYUSH-certified partners and private transfers, arranged with honest guidance as recuperative care, never an overstated cure. Tell us what you are looking for and we reply within a few hours with a tailored plan.`}
                    waMessage={`Hi MyTripMyTravel, I am interested in ${programme.name} (${breadcrumbSegment}) in India.`}
                    faqs={content.faqs}
                    breadcrumbs={[
                        { name: "Home", item: "https://www.mytripmytravel.com" },
                        { name: "Wellness", item: "https://www.mytripmytravel.com/wellness" },
                        { name: programme.name, item: `https://www.mytripmytravel.com/wellness/${programme.slug}` },
                        { name: breadcrumbSegment },
                    ]}
                />

                <Footer />
            </main>
        </SmoothScroll>
    );
}
