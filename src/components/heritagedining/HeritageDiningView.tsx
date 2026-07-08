"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { DiningCategory, DiningItem } from "@/data/heritageDining";

function Shell({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}

export function DiningCategoryView({ category }: { category: DiningCategory }) {
    return (
        <Shell>
            <section className="container-x pt-40 pb-16">
                <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] text-muted">
                    <Link href="/" className="hover:text-clay">Home</Link>
                    <ChevronRight size={12} />
                    <Link href="/heritage-dining" className="hover:text-clay">Heritage Dining</Link>
                    <ChevronRight size={12} />
                    <span className="text-clay">{category.segment}</span>
                </nav>
                <p className="eyebrow eyebrow-accent">Heritage Dining</p>
                <h1 className="display-1 mt-4 font-medium text-ink">{category.name}</h1>
                <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">{category.blurb}</p>
            </section>
            <section className="container-x pb-28">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((it, idx) => (
                        <motion.div key={it.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.06 }}>
                            <Link href={`/heritage-dining/${category.slug}/${it.slug}`} className="card group block h-full p-7">
                                <h3 className="text-xl font-medium leading-snug text-ink">{it.name}</h3>
                                <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted">{it.answer}</p>
                                <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-clay">Open <ArrowRight size={14} /></span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Shell>
    );
}

export function DiningItemView({
    category,
    item,
}: {
    category: DiningCategory;
    item: DiningItem;
}) {
    const siblings = category.items.filter((i) => i.slug !== item.slug);
    return (
        <Shell>
            <section className="container-x pt-40 pb-16">
                <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-muted">
                    <Link href="/" className="hover:text-clay">Home</Link>
                    <ChevronRight size={12} />
                    <Link href="/heritage-dining" className="hover:text-clay">Heritage Dining</Link>
                    <ChevronRight size={12} />
                    <Link href={`/heritage-dining/${category.slug}`} className="hover:text-clay">{category.segment}</Link>
                    <ChevronRight size={12} />
                    <span className="text-clay">{item.name}</span>
                </nav>
                <p className="eyebrow eyebrow-accent">{category.name}</p>
                <h1 className="display-1 mt-4 font-medium text-ink">{item.name}</h1>
                <p className="mt-6 max-w-4xl font-display text-[26px] font-medium leading-snug text-ink sm:text-[32px]">{item.answer}</p>
                <div className="mt-10 max-w-3xl space-y-5">
                    {item.intro.map((p, i) => (
                        <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[16px] leading-relaxed text-muted">{p}</motion.p>
                    ))}
                </div>
            </section>

            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">The Detail</p>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {item.points.map((pt, i) => (
                            <div key={i} className="card p-7">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="shrink-0 text-clay" size={18} />
                                    <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-stone">{pt.label}</span>
                                </div>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{pt.detail}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {item.links.map((l, i) => (
                            <Link key={i} href={l.href} className="btn-outline btn-sm">
                                {l.label} <ArrowRight size={14} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-x">
                    <div className="mb-12 text-center">
                        <p className="eyebrow eyebrow-accent">Intelligence</p>
                        <h2 className="display-3 mt-3 text-ink">{item.name} FAQ</h2>
                    </div>
                    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                        {item.faqs.map((f, i) => (
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
                    <p className="eyebrow eyebrow-accent">More {category.segment}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        {siblings.map((s) => (
                            <Link key={s.slug} href={`/heritage-dining/${category.slug}/${s.slug}`} className="btn-outline btn-sm">{s.name}</Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Heritage dining: ${item.name}`}
                context={{ "Inquiry Type": "Heritage dining", Category: category.name, Subject: item.name }}
                heading={`Reserve ${item.name}`}
                waMessage={`Hi MyTripMyTravel, I would like to arrange ${item.name} during my trip.`}
                faqs={item.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Heritage dining", item: "https://www.mytripmytravel.com/heritage-dining" },
                    { name: category.segment, item: `https://www.mytripmytravel.com/heritage-dining/${category.slug}` },
                    { name: item.name },
                ]}
            />
        </Shell>
    );
}
