"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle2, Clock, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { WellnessProgramme, WellnessVariant } from "@/data/wellness";

export default function WellnessVariantView({
    programme,
    variant,
}: {
    programme: WellnessProgramme;
    variant: WellnessVariant;
}) {
    const siblings = programme.variants.filter((v) => v.slug !== variant.slug);

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[60vh] min-h-[460px] items-end overflow-hidden">
                <Image src={programme.heroImg} alt={`${variant.name}, ${programme.name}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-16 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/wellness" className="hover:text-clay-soft">Wellness</Link>
                        <ChevronRight size={12} />
                        <Link href={`/wellness/${programme.slug}`} className="hover:text-clay-soft">{programme.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{variant.name}</span>
                    </nav>
                    <p className="eyebrow text-clay-soft">{programme.label}</p>
                    <h1 className="display-1 mt-4 font-medium text-paper">{variant.name}</h1>
                </div>
            </section>

            {/* Brief */}
            <section className="section">
                <div className="container-x max-w-4xl">
                    <p className="eyebrow eyebrow-accent">The brief</p>
                    <p className="mt-5 font-display text-[26px] font-medium leading-snug text-ink sm:text-[32px]">{variant.answer}</p>
                    <div className="mt-10 space-y-5 max-w-3xl">
                        {variant.intro.map((para, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] leading-relaxed text-muted">
                                {para}
                            </motion.p>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <div className="flex items-center gap-3 rounded-xl border border-line bg-paper-dim/60 px-5 py-3">
                            <Clock className="text-clay" size={18} />
                            <span className="text-[13px] font-medium text-ink">{variant.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-line bg-paper-dim/60 px-5 py-3">
                            <UserCheck className="text-clay" size={18} />
                            <span className="text-[13px] font-medium text-ink">{variant.idealFor}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes + protocol */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x grid gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Outcomes</p>
                        <div className="mt-8 space-y-4">
                            {variant.benefits.map((b, i) => (
                                <div key={i} className="card flex gap-4 p-6">
                                    <CheckCircle2 className="mt-0.5 shrink-0 text-clay" size={20} />
                                    <span className="text-[15px] leading-relaxed text-muted">{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="eyebrow eyebrow-accent">The protocol</p>
                        <div className="mt-8">
                            {variant.protocol.map((p, i) => (
                                <div key={i} className="border-b border-line py-6">
                                    <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-stone">{p.phase}</div>
                                    <p className="text-[15px] leading-relaxed text-muted">{p.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {variant.faqs.length > 0 && (
                <section className="section">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Good to know</p>
                        <h2 className="display-3 mt-3 text-ink">{variant.name} FAQ</h2>
                        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-6xl">
                            {variant.faqs.map((f, i) => (
                                <div key={i} className="card p-7">
                                    <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">More {programme.label}</p>
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <Link href={`/wellness/${programme.slug}`} className="card card-hover group flex items-center justify-between p-7">
                            <span className="text-[15px] font-medium text-ink transition-colors group-hover:text-clay">{programme.name}, overview</span>
                            <ArrowRight size={16} className="shrink-0 text-clay" />
                        </Link>
                        {siblings.map((s) => (
                            <Link key={s.slug} href={`/wellness/${programme.slug}/${s.slug}`} className="card card-hover group flex items-center justify-between p-7">
                                <span className="text-[15px] font-medium text-ink transition-colors group-hover:text-clay">{s.name}</span>
                                <ArrowRight size={16} className="shrink-0 text-clay" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Wellness: ${programme.name} (${variant.name})`}
                context={{ "Inquiry Type": "Wellness", Programme: programme.name, Variant: variant.name }}
                heading={`Plan your ${variant.name} journey`}
                subheading={`Free, no obligation plan for ${variant.name}. Your details stay private.`}
                pitch={`Physician-led where relevant, AYUSH-certified partners and private transfers, arranged with honest guidance as recuperative care, never an overstated cure. Tell us what you are looking for and we reply within a few hours with a tailored plan.`}
                waMessage={`Hi MyTripMyTravel, I am interested in ${variant.name} (${programme.name}) in India.`}
                faqs={variant.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Wellness", item: "https://www.mytripmytravel.com/wellness" },
                    { name: programme.name, item: `https://www.mytripmytravel.com/wellness/${programme.slug}` },
                    { name: variant.name },
                ]}
            />

            <Footer />
        </main>
    );
}
