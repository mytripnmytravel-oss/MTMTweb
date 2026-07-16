"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { CorporateCategory, CorporateItem } from "@/data/corporate";

function Shell({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}

export function CorporateCategoryView({ category }: { category: CorporateCategory }) {
    return (
        <Shell>
            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x">
                    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] text-muted">
                        <Link href="/" className="hover:text-clay">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/corporate" className="hover:text-clay">Corporate</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay">{category.segment}</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">Corporate travel</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-semibold text-ink">{category.name}</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{category.blurb}</p>
                </div>
            </section>
            <section className="section">
                <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((it, idx) => (
                        <motion.div key={it.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.05 }}>
                            <Link href={`/corporate/${category.slug}/${it.slug}`} className="card card-hover group flex h-full flex-col p-7">
                                <h3 className="text-xl font-semibold text-ink group-hover:text-clay">{it.name}</h3>
                                <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-muted">{it.answer}</p>
                                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-clay">Open <ArrowRight size={14} /></span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Shell>
    );
}

export function CorporateItemView({ category, item }: { category: CorporateCategory; item: CorporateItem }) {
    const siblings = category.items.filter((i) => i.slug !== item.slug);
    return (
        <Shell>
            <section className="section pt-36 sm:pt-40">
                <div className="container-x">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-muted">
                        <Link href="/" className="hover:text-clay">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/corporate" className="hover:text-clay">Corporate</Link>
                        <ChevronRight size={12} />
                        <Link href={`/corporate/${category.slug}`} className="hover:text-clay">{category.segment}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay">{item.name}</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">{category.name}</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-semibold text-ink">{item.name}</h1>
                    <p className="mt-6 max-w-4xl font-display text-[24px] font-semibold leading-snug text-ink sm:text-[30px]">{item.answer}</p>
                    <div className="mt-8 max-w-3xl space-y-5">
                        {item.intro.map((p, i) => (
                            <p key={i} className="text-[17px] leading-relaxed text-muted">{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">The detail</p>
                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                        {item.points.map((pt, i) => (
                            <div key={i} className="card p-7">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="shrink-0 text-clay" size={17} />
                                    <span className="eyebrow">{pt.label}</span>
                                </div>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{pt.detail}</p>
                            </div>
                        ))}
                    </div>
                    {item.links.length > 0 && (
                        <div className="mt-10 flex flex-wrap gap-3">
                            {item.links.map((l, i) => (
                                <Link key={i} href={l.href} className="btn-outline btn-sm">{l.label} <ArrowRight size={14} /></Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Good to know</p>
                    <h2 className="display-3 mt-3 text-ink">{item.name}, your questions</h2>
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

            {siblings.length > 0 && (
                <section className="section pt-0">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">More {category.segment}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {siblings.map((s) => (
                                <Link key={s.slug} href={`/corporate/${category.slug}/${s.slug}`} className="btn-outline btn-sm">{s.name}</Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <LeadBlock
                source={`Corporate: ${item.name}`}
                context={{ "Inquiry Type": "Corporate", Category: category.name, Item: item.name }}
                heading={`Plan ${item.name}`}
                pitch={`Zero friction corporate logistics, handled end to end by one accountable desk. Tell us your dates, cities and group size and we reply with a plan and a transparent quote.`}
                waMessage={`Hi MyTripMyTravel, I would like to plan ${item.name} for my team.`}
                faqs={item.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Corporate", item: "https://www.mytripmytravel.com/corporate" },
                    { name: category.segment, item: `https://www.mytripmytravel.com/corporate/${category.slug}` },
                    { name: item.name },
                ]}
            />
        </Shell>
    );
}
