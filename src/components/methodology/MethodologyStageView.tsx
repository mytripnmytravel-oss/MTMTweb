"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { MethodologyStage } from "@/data/methodology";

export default function MethodologyStageView({
    stage,
    others,
}: {
    stage: MethodologyStage;
    others: MethodologyStage[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="container-x pt-36 pb-16 sm:pt-40">
                <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[12px] text-muted">
                    <Link href="/" className="hover:text-clay">Home</Link>
                    <ChevronRight size={12} />
                    <Link href="/methodology" className="hover:text-clay">Methodology</Link>
                    <ChevronRight size={12} />
                    <span className="text-clay">{stage.name}</span>
                </nav>
                <p className="eyebrow eyebrow-accent">The Mission Protocol &middot; {stage.phase}</p>
                <h1 className="display-1 font-medium text-ink mt-5">{stage.name}</h1>
                <p className="mt-8 max-w-4xl font-display text-[24px] font-medium leading-snug text-ink sm:text-[30px]">{stage.answer}</p>
                <div className="mt-10 max-w-3xl space-y-5">
                    {stage.intro.map((p, i) => (
                        <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] leading-relaxed text-muted">{p}</motion.p>
                    ))}
                </div>
            </section>

            <section className="border-y border-line bg-paper-dim/60 section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">What This Phase Covers</p>
                    <div className="mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
                        {stage.features.map((f, i) => (
                            <div key={i} className="card p-8">
                                <div className="mb-3 flex items-center gap-3">
                                    <CheckCircle2 className="shrink-0 text-clay" size={18} />
                                    <span className="text-lg font-medium text-ink">{f.name}</span>
                                </div>
                                <p className="text-[15px] leading-relaxed text-muted">{f.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container-x section">
                <div className="mb-12 text-center">
                    <p className="eyebrow eyebrow-accent">Intelligence</p>
                    <h2 className="display-2 font-medium text-ink mt-3">{stage.name} FAQ</h2>
                </div>
                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                    {stage.faqs.map((f, i) => (
                        <div key={i} className="card p-8">
                            <div className="mb-3 flex items-start gap-3">
                                <HelpCircle className="mt-0.5 shrink-0 text-clay" size={20} />
                                <h3 className="text-[17px] font-medium leading-snug text-ink">{f.q}</h3>
                            </div>
                            <p className="pl-8 text-[15px] leading-relaxed text-muted">{f.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-y border-line bg-paper-dim/60 section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">The Full Protocol</p>
                    <div className="mt-8 grid gap-5 sm:grid-cols-3">
                        {others.map((s) => (
                            <Link key={s.slug} href={`/methodology/${s.slug}`} className="card card-hover p-7">
                                <div className="eyebrow eyebrow-accent">{s.phase}</div>
                                <span className="mt-2 block text-xl font-medium text-ink">{s.name}</span>
                            </Link>
                        ))}
                        <Link href="/methodology" className="card card-hover flex items-center justify-between bg-paper-dim/60 p-7">
                            <span className="text-xl font-medium text-ink">Methodology Overview</span>
                            <ArrowRight size={18} className="shrink-0 text-clay" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container-x section">
                <div className="rounded-2xl bg-ink p-12 text-center sm:p-16">
                    <h2 className="display-2 font-medium text-paper">Run the Protocol</h2>
                    <div className="mt-10">
                        <Link href="/booking" className="btn-primary">Begin a Mission Brief</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
