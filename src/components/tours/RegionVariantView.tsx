"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import { packageSlug } from "@/data/tours";
import type { RegionVariantContent } from "@/data/regionVariants";

export default function RegionVariantView({
    content,
    siblings,
}: {
    content: RegionVariantContent;
    siblings: { label: string; href: string }[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-muted">
                        <Link href="/" className="hover:text-clay">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/tours" className="hover:text-clay">Tours</Link>
                        <ChevronRight size={12} />
                        <Link href={`/tours/${content.regionSlug}`} className="hover:text-clay">{content.regionName}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay">{content.label}</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">{content.regionName}</p>
                    <h1 className="display-1 mt-4 max-w-4xl font-semibold text-ink">{content.h1}</h1>
                    <p className="mt-6 max-w-5xl font-display text-[24px] font-semibold leading-snug text-ink sm:text-[30px]">{content.answer}</p>
                    <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-muted">{content.intro}</p>
                </div>
            </section>

            {/* Packages */}
            <section className="section">
                <div className="container-x">
                    {content.packages.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {content.packages.map((p, idx) => (
                                <motion.div key={p.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.05 }}>
                                    <Link href={`/tours/${packageSlug(p)}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold text-ink"><Clock size={12} className="text-clay" /> {p.duration}</span>
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="eyebrow">{p.theme}</div>
                                            <h3 className="mt-2 text-lg font-semibold text-ink group-hover:text-clay">{p.title}</h3>
                                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{p.highlight}</p>
                                            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                                                <span className="text-lg font-semibold text-ink">from {p.price}</span>
                                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-clay">Open <ArrowRight size={14} /></span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="card max-w-3xl p-8 sm:p-10">
                            <p className="text-[16px] leading-relaxed text-muted">No fixed packages match this slice yet, the planning desk builds it bespoke for your party.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* FAQ */}
            {content.faqs.length > 0 && (
                <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Good to know</p>
                        <h2 className="display-3 mt-3 text-ink">{content.label} FAQ</h2>
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
            )}

            {/* Siblings */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Other slices of {content.regionName}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {siblings.map((s) => (
                            <Link key={s.href} href={s.href} className="btn-outline btn-sm">{s.label}</Link>
                        ))}
                        <Link href={`/destinations/region/${content.regionSlug}`} className="btn-outline btn-sm">{content.regionName} destinations <ArrowRight size={14} /></Link>
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Region variant: ${content.label}`}
                context={{ "Inquiry Type": "Tour", Region: content.regionName, Subject: content.label }}
                heading={`Plan your ${content.label}`}
                waMessage={`Hi MyTripMyTravel, I am interested in ${content.label}.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Tours", item: "https://www.mytripmytravel.com/tours" },
                    { name: content.regionName, item: `https://www.mytripmytravel.com/tours/${content.regionSlug}` },
                    { name: content.label },
                ]}
            />

            <Footer />
        </main>
    );
}
