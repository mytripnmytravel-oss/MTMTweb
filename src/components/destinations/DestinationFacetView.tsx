"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Destination } from "@/data/destinations";
import type { FacetContent, FacetSlug } from "@/data/destinationFacets";
import { FACET_SLUGS, FACET_LABELS } from "@/data/destinationFacets";

export default function DestinationFacetView({
    dest,
    content,
    related,
}: {
    dest: Destination;
    content: FacetContent;
    related: Destination[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[58vh] min-h-[440px] items-end overflow-hidden">
                <Image src={dest.heroImg} alt={`${content.h1}, ${dest.state}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/destinations" className="hover:text-clay-soft">Destinations</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/region/${dest.regionSlug}`} className="hover:text-clay-soft">{dest.region}</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}`} className="hover:text-clay-soft">{dest.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{content.label}</span>
                    </nav>
                    <p className="eyebrow text-paper/70 mb-4">{dest.name} &middot; {content.label}</p>
                    <h1 className="display-1 font-semibold text-paper">{content.h1}</h1>
                </div>
            </section>

            {/* Answer block */}
            <section className="section">
                <div className="container-x max-w-4xl">
                    <p className="eyebrow eyebrow-accent">The brief</p>
                    <p className="mt-5 font-display text-[26px] font-semibold leading-snug text-ink sm:text-[32px]">
                        {content.answer}
                    </p>
                    <p className="mt-8 max-w-3xl text-[17px] leading-relaxed text-muted">
                        {content.intro}
                    </p>
                </div>
            </section>

            {/* Blocks */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <div className="grid gap-6 md:grid-cols-2">
                        {content.blocks.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="card p-8"
                            >
                                {b.sub && (
                                    <p className="eyebrow eyebrow-accent mb-3">{b.sub}</p>
                                )}
                                <h3 className="text-xl font-semibold text-ink">{b.heading}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{b.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sibling facets, interlinking */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">More on {dest.name}</p>
                    <h2 className="display-3 mt-3 text-ink">Deep briefs</h2>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Link
                            href={`/destinations/${dest.slug}`}
                            className="card group flex items-center justify-between p-7 transition-colors hover:border-clay/40"
                        >
                            <span className="text-[15px] font-semibold text-ink group-hover:text-clay">{dest.name}, full brief</span>
                            <ArrowRight size={16} className="text-clay" />
                        </Link>
                        {FACET_SLUGS.filter((f) => f !== content.facet).map((f: FacetSlug) => (
                            <Link
                                key={f}
                                href={`/destinations/${dest.slug}/${f}`}
                                className="card group flex items-center justify-between p-7 transition-colors hover:border-clay/40"
                            >
                                <span className="text-[15px] font-semibold text-ink group-hover:text-clay">{FACET_LABELS[f]}</span>
                                <ArrowRight size={16} className="text-clay" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {content.faqs.length > 0 && (
                <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Good to know</p>
                        <h2 className="display-3 mt-3 text-ink">{content.label} questions</h2>
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

            {/* Related cities */}
            {related.length > 0 && (
                <section className="section">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Continue planning</p>
                        <div className="mt-10 grid gap-5 sm:grid-cols-3">
                            {related.map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/destinations/${c.slug}/${content.facet}`}
                                    className="card group p-7 transition-colors hover:border-clay/40"
                                >
                                    <div className="flex items-center gap-2">
                                        <MapPin className="text-clay" size={16} />
                                        <span className="text-lg font-semibold text-ink group-hover:text-clay">{c.name}</span>
                                    </div>
                                    <span className="eyebrow mt-2 block text-stone">{content.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <LeadBlock
                source={`Destination facet: ${dest.name} ${content.label}`}
                context={{ "Inquiry Type": "Destination", Destination: dest.name, Facet: content.label, Region: dest.region }}
                heading={`Plan your ${dest.name} ${content.label} trip`}
                pitch={`Private, chauffeured travel across ${dest.name} with a focus on ${content.label.toLowerCase()}. Tell us your dates and party size, and we reply with a tailored plan and a transparent quote.`}
                waMessage={`Hi MyTripMyTravel, I would like to plan a ${dest.name} trip focused on ${content.label}.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                    { name: dest.region, item: `https://www.mytripmytravel.com/destinations/region/${dest.regionSlug}` },
                    { name: dest.name, item: `https://www.mytripmytravel.com/destinations/${dest.slug}` },
                    { name: content.label },
                ]}
            />

            <Footer />
        </main>
    );
}
