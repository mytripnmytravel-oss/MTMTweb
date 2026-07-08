"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle2, Languages } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Destination } from "@/data/destinations";
import type { GuideLanguage, GuideContent } from "@/data/expertGuides";

function Shell({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}

export function GuideCityView({
    dest,
    languages,
}: {
    dest: Destination;
    languages: GuideLanguage[];
}) {
    return (
        <Shell>
            <section className="relative flex h-[52vh] min-h-[420px] items-end overflow-hidden">
                <Image src={dest.heroImg} alt={`Expert guides in ${dest.name}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/expert-guides" className="hover:text-clay-soft">Expert guides</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{dest.name}</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent text-paper/70">{dest.state}</p>
                    <h1 className="display-1 mt-4 font-medium text-paper">Expert guides in {dest.name}</h1>
                </div>
            </section>
            <section className="section">
                <div className="container-x">
                    <p className="mb-14 max-w-3xl text-[16px] leading-relaxed text-muted">
                        Vetted, licensed heritage specialists in {dest.name}, available in multiple languages, guiding directly in your language, not translating a script.
                    </p>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {languages.map((l, idx) => (
                            <motion.div key={l.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.05 }}>
                                <Link href={`/expert-guides/${dest.slug}/${l.slug}`} className="card group block p-7">
                                    <div className="flex items-center gap-3">
                                        <Languages className="text-clay" size={20} />
                                        <h3 className="text-xl font-medium text-ink">{l.name}</h3>
                                    </div>
                                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{l.name}-speaking expert guide in {dest.name}.</p>
                                    <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-clay">Open <ArrowRight size={14} /></span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Shell>
    );
}

export function GuideDetailView({
    dest,
    lang,
    content,
    otherLangs,
}: {
    dest: Destination;
    lang: GuideLanguage;
    content: GuideContent;
    otherLangs: GuideLanguage[];
}) {
    return (
        <Shell>
            <section className="relative flex h-[54vh] min-h-[440px] items-end overflow-hidden">
                <Image src={dest.heroImg} alt={content.h1} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/expert-guides" className="hover:text-clay-soft">Expert guides</Link>
                        <ChevronRight size={12} />
                        <Link href={`/expert-guides/${dest.slug}`} className="hover:text-clay-soft">{dest.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{lang.name}</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent text-paper/70">{lang.name} · {dest.state}</p>
                    <h1 className="display-1 mt-4 font-medium text-paper">{content.h1}</h1>
                </div>
            </section>

            <section className="section">
                <div className="container-x max-w-5xl">
                    <p className="eyebrow eyebrow-accent">The Brief</p>
                    <p className="mt-5 font-display text-[26px] font-medium leading-snug text-ink sm:text-[32px]">{content.answer}</p>
                    <div className="mt-10 max-w-3xl space-y-5">
                        {content.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[16px] leading-relaxed text-muted">{p}</motion.p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Covered in {lang.name}</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {content.covers.map((c, i) => (
                            <div key={i} className="card flex gap-4 p-7">
                                <CheckCircle2 className="mt-0.5 shrink-0 text-clay" size={20} />
                                <span className="text-[15px] leading-relaxed text-muted">{c}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <Link href={`/destinations/${dest.slug}`} className="btn-outline btn-sm">Explore {dest.name} <ArrowRight size={14} /></Link>
                        <Link href={`/destinations/${dest.slug}/monuments`} className="btn-outline btn-sm">{dest.name} monuments <ArrowRight size={14} /></Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-x">
                    <div className="mb-12 text-center">
                        <p className="eyebrow eyebrow-accent">Intelligence</p>
                        <h2 className="display-3 mt-3 text-ink">{dest.name} {lang.name} guide FAQ</h2>
                    </div>
                    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                        {content.faqs.map((f, i) => (
                            <div key={i} className="card p-7">
                                <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Other Languages in {dest.name}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {otherLangs.map((l) => (
                            <Link key={l.slug} href={`/expert-guides/${dest.slug}/${l.slug}`} className="btn-outline btn-sm">{l.name}</Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Expert guide: ${content.h1}`}
                context={{ "Inquiry Type": "Expert guide", City: dest.name, Language: lang.name }}
                heading={`Arrange a ${lang.name} guide in ${dest.name}`}
                waMessage={`Hi MyTripMyTravel, I would like a licensed ${lang.name}-speaking guide in ${dest.name}.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Expert guides", item: "https://www.mytripmytravel.com/expert-guides" },
                    { name: dest.name, item: `https://www.mytripmytravel.com/expert-guides/${dest.slug}` },
                    { name: lang.name },
                ]}
            />
        </Shell>
    );
}
