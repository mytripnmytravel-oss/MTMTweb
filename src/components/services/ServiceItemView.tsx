"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { ServiceItem } from "@/data/serviceItems";

export default function ServiceItemView({
    item,
    siblings,
}: {
    item: ServiceItem;
    siblings: ServiceItem[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="pb-16 pt-36 sm:pt-40">
                <div className="container-x">
                    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[12px] text-muted">
                        <Link href="/" className="hover:text-clay">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/services" className="hover:text-clay">Services</Link>
                        <ChevronRight size={12} />
                        <span className="text-ink">{item.name}</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">{item.category}</p>
                    <h1 className="display-1 mt-4 font-semibold text-ink">{item.name}</h1>
                    <p className="mt-8 max-w-4xl font-display text-[26px] font-semibold leading-snug text-ink sm:text-[32px]">{item.answer}</p>
                    <div className="mt-10 max-w-3xl space-y-5">
                        {item.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] leading-relaxed text-muted">{p}</motion.p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational detail */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Operational Detail</p>
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {item.points.map((pt, i) => (
                            <div key={i} className="card p-6">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="shrink-0 text-clay" size={18} />
                                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">{pt.label}</p>
                                </div>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{pt.detail}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {item.links.map((l, i) => (
                            <Link key={i} href={l.href} className="btn-outline btn-sm">{l.label} <ArrowRight size={14} /></Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Intelligence</p>
                    <h2 className="display-3 mt-3 text-ink">{item.name} FAQ</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {item.faqs.map((f, i) => (
                            <div key={i} className="card p-7">
                                <h3 className="text-[17px] font-semibold text-ink">{f.q}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Other Services</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {siblings.map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="btn-outline btn-sm">{s.name}</Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Service: ${item.name}`}
                context={{ "Inquiry Type": item.name, Category: item.category }}
                heading={`Plan your ${item.name}`}
                pitch={`${item.answer} Tell us your dates and preferences and our travel desk replies within a few hours with a tailored plan and a transparent quote.`}
                waMessage={`Hi MyTripMyTravel, I am interested in ${item.name}.`}
                faqs={item.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Services", item: "https://www.mytripmytravel.com/services" },
                    { name: item.name },
                ]}
            />

            <Footer />
        </main>
    );
}
