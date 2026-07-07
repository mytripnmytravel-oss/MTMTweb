"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Landmark, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Destination } from "@/data/destinations";
import type { Monument } from "@/data/monuments";

const fade = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
} as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <p className="eyebrow eyebrow-accent">{children}</p>
);

export default function MonumentView({
    dest, monument, siblings,
}: {
    dest: Destination; monument: Monument; siblings: Monument[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[66vh] min-h-[500px] items-end overflow-hidden">
                <Image src={monument.heroImg} alt={`${monument.name}, ${dest.name}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/region/${dest.regionSlug}`} className="hover:text-clay-soft">{dest.region}</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}`} className="hover:text-clay-soft">{dest.name}</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}/monuments`} className="hover:text-clay-soft">Monuments</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{monument.name}</span>
                    </nav>
                    <motion.div initial="hidden" animate="visible" variants={fade}>
                        <span className="eyebrow text-paper/70">{monument.type} · {monument.era}</span>
                        <h1 className="display-1 mt-4 font-medium text-paper">{monument.name}</h1>
                        <p className="mt-4 max-w-2xl text-lg text-paper/80">{monument.tagline}</p>
                    </motion.div>
                </div>
            </section>

            {/* Answer + intro */}
            <section className="section">
                <div className="container-x max-w-4xl">
                    <Eyebrow>Overview</Eyebrow>
                    <p className="mt-5 font-display text-[26px] font-medium leading-snug text-ink sm:text-[32px]">{monument.answer}</p>
                    <div className="mt-10 space-y-5">
                        {monument.intro.map((para, i) => (
                            <p key={i} className="text-[17px] leading-relaxed text-muted">{para}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick facts */}
            <section className="border-y border-line bg-paper-dim/60 py-16 sm:py-20">
                <div className="container-x">
                    <Eyebrow>At a glance</Eyebrow>
                    <h2 className="display-3 mt-3 text-ink">{monument.name} in brief</h2>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {monument.quickFacts.map((f, i) => (
                            <div key={i} className="card p-6">
                                <div className="eyebrow">{f.label}</div>
                                <div className="mt-2 text-lg font-medium text-ink">{f.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="bg-ink py-20 sm:py-28">
                <div className="container-x">
                    <p className="eyebrow text-clay-soft">What to see</p>
                    <h2 className="display-2 mt-3 text-paper">Highlights</h2>
                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        {monument.highlights.map((h, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                                <div className="flex items-center gap-3">
                                    <Landmark className="text-clay-soft" size={18} />
                                    <h3 className="text-xl font-medium text-paper">{h.name}</h3>
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-paper/60">{h.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visitor info + tips */}
            <section className="section">
                <div className="container-x grid gap-14 lg:grid-cols-2">
                    <div>
                        <Eyebrow>Visitor information</Eyebrow>
                        <div className="mt-8 divide-y divide-line">
                            {monument.visitorInfo.map((v, i) => (
                                <div key={i} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                                    <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.18em] text-stone sm:w-40">{v.label}</span>
                                    <span className="text-[16px] leading-relaxed text-ink-soft">{v.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Eyebrow>Our tips</Eyebrow>
                        <div className="mt-8 space-y-4">
                            {monument.tips.map((t, i) => (
                                <div key={i} className="card flex gap-4 p-6">
                                    <Lightbulb className="mt-0.5 shrink-0 text-clay" size={19} />
                                    <p className="text-[15px] leading-relaxed text-muted">{t}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {monument.faqs.length > 0 && (
                <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                    <div className="container-x">
                        <Eyebrow>Good to know</Eyebrow>
                        <h2 className="display-3 mt-3 text-ink">{monument.name} — your questions</h2>
                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            {monument.faqs.map((f, i) => (
                                <div key={i} className="card p-7">
                                    <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Siblings + CTA */}
            <section className="section">
                <div className="container-x">
                    {siblings.length > 0 && (
                        <div className="mb-16">
                            <Eyebrow>More in {dest.name}</Eyebrow>
                            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <Link href={`/destinations/${dest.slug}`} className="card card-hover group flex items-center justify-between p-6">
                                    <span className="text-[15px] font-medium text-ink group-hover:text-clay">{dest.name} — full guide</span>
                                    <ArrowRight size={16} className="shrink-0 text-stone group-hover:text-clay" />
                                </Link>
                                {siblings.map((s) => (
                                    <Link key={s.slug} href={`/destinations/${dest.slug}/monuments/${s.slug}`} className="card card-hover group flex items-center justify-between p-6">
                                        <span className="text-[15px] font-medium text-ink group-hover:text-clay">{s.name}</span>
                                        <ArrowRight size={16} className="shrink-0 text-stone group-hover:text-clay" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center sm:px-16 sm:py-20">
                        <h2 className="display-2 mx-auto max-w-2xl text-paper">See {monument.name}, properly.</h2>
                        <p className="mx-auto mt-4 max-w-xl text-paper/70">A private, chauffeured visit with an expert guide — timed for the light and the crowds.</p>
                        <Link href="/booking" className="btn mt-8 rounded-full bg-paper px-7 py-3.5 text-ink hover:bg-clay hover:text-paper">Consult a planner</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
