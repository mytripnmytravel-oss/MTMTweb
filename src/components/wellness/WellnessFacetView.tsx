"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
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
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[56vh] min-h-[440px] items-end overflow-hidden">
                <Image src={programme.heroImg} alt={content.h1} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/wellness" className="hover:text-clay-soft">Wellness</Link>
                        <ChevronRight size={12} />
                        <Link href={`/wellness/${programme.slug}`} className="hover:text-clay-soft">{programme.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{breadcrumbSegment}</span>
                    </nav>
                    <p className="eyebrow text-clay-soft">{programme.label}</p>
                    <h1 className="display-1 mt-4 font-semibold text-paper">{content.h1}</h1>
                </div>
            </section>

            {/* Brief */}
            <section className="section">
                <div className="container-x max-w-4xl">
                    <p className="eyebrow eyebrow-accent">The brief</p>
                    <p className="mt-5 font-display text-[26px] font-semibold leading-snug text-ink sm:text-[32px]">{content.answer}</p>
                    <div className="mt-10 space-y-5 max-w-3xl">
                        {content.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] leading-relaxed text-muted">{p}</motion.p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key points */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Key points</p>
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 max-w-5xl">
                        {content.points.map((pt, i) => (
                            <div key={i} className="card p-7">
                                <div className="mb-3 flex items-center gap-3">
                                    <CheckCircle2 className="shrink-0 text-clay" size={18} />
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone">{pt.label}</span>
                                </div>
                                <p className="text-[15px] leading-relaxed text-muted">{pt.detail}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {content.crossLinks.map((l, i) => (
                            <Link key={i} href={l.href} className="btn-outline btn-sm">{l.label} <ArrowRight size={14} /></Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Good to know</p>
                    <h2 className="display-3 mt-3 text-ink">{content.h1} FAQ</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-6xl">
                        {content.faqs.map((f, i) => (
                            <div key={i} className="card p-7">
                                <h3 className="text-[17px] font-semibold text-ink">{f.q}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {siblings.length > 0 && (
                <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">{siblingsTitle}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {siblings.map((s, i) => (
                                <Link key={i} href={s.href} className="btn-outline btn-sm">{s.label}</Link>
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
    );
}
