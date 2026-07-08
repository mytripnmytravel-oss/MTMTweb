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
import type { RegionalTourHubContent } from "@/data/tourHubs";
import {
    regionThemeLinks,
    regionDurationLinks,
    regionMonthLinks,
    regionOriginLinks,
    regionComboLinks,
    regionHasVariants,
} from "@/data/regionVariants";

export default function RegionalTourHubView({
    content,
}: {
    content: RegionalTourHubContent;
}) {
    const { hub, packages, h1, answer, faqs } = content;
    const hasVariants = regionHasVariants(hub.slug);
    const themeLinks = hasVariants ? regionThemeLinks(hub.slug) : [];
    const durationLinks = hasVariants ? regionDurationLinks(hub.slug) : [];
    const monthLinks = hasVariants ? regionMonthLinks(hub.slug) : [];
    const originLinks = hasVariants ? regionOriginLinks(hub.slug) : [];
    const comboLinks = hasVariants ? regionComboLinks(hub.slug) : [];
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[58vh] min-h-[440px] items-end overflow-hidden">
                <Image src={hub.heroImg} alt={`${hub.name} tours`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/tours" className="hover:text-clay-soft">Tours</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{hub.name}</span>
                    </nav>
                    <p className="eyebrow text-paper/70">{hub.tagline}</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-medium text-paper">{h1}</h1>
                </div>
            </section>

            {/* Answer + intro */}
            <section className="section">
                <div className="container-x max-w-5xl">
                    <p className="eyebrow eyebrow-accent">The brief</p>
                    <p className="mt-5 font-display text-[26px] font-medium leading-snug text-ink sm:text-[32px]">{answer}</p>
                    <div className="mt-10 max-w-3xl space-y-5">
                        {hub.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[16px] leading-relaxed text-muted">{p}</motion.p>
                        ))}
                    </div>

                    {hub.quickFacts && hub.quickFacts.length > 0 && (
                        <dl className="mt-12 grid max-w-3xl gap-x-10 gap-y-4 rounded-2xl border border-line bg-white p-8 sm:grid-cols-2">
                            {hub.quickFacts.map((f, i) => (
                                <div key={i} className="flex justify-between gap-6 border-b border-line pb-3 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                                    <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-stone">{f.label}</dt>
                                    <dd className="text-right text-[15px] font-medium text-ink">{f.value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}

                    {hub.durationGuide && (
                        <div className="mt-10 max-w-3xl rounded-2xl border border-line bg-paper-dim/60 p-8">
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-clay" />
                                <h3 className="text-lg font-medium text-ink">How many days do you need?</h3>
                            </div>
                            <p className="mt-3 text-[16px] leading-relaxed text-muted">{hub.durationGuide}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Packages */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <div className="mb-8 flex items-center gap-5">
                        <h2 className="display-3 text-ink">{hub.name} packages</h2>
                        <div className="h-px flex-1 bg-line" />
                        <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">{packages.length} listed</span>
                    </div>
                    {packages.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {packages.map((p, idx) => (
                                <motion.div key={p.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.05 }}>
                                    <Link href={`/tours/${packageSlug(p)}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium text-ink"><Clock size={12} className="text-clay" /> {p.duration}</span>
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="eyebrow">{p.theme}</div>
                                            <h3 className="mt-2 text-lg font-medium text-ink group-hover:text-clay">{p.title}</h3>
                                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{p.highlight}</p>
                                            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                                                <span className="text-lg font-medium text-ink">from {p.price}</span>
                                                <span className="inline-flex items-center gap-1 text-sm font-medium text-clay">Open <ArrowRight size={14} /></span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="card max-w-3xl p-8 sm:p-10">
                            <p className="text-[16px] leading-relaxed text-muted">
                                {hub.name} tours are currently designed bespoke through the planning desk rather than picked from a fixed package shelf. The architecture, hotels, stops, and pace are tailored to your party.
                            </p>
                            <Link href="/booking" className="btn-primary mt-6">Brief the planning desk <ArrowRight size={16} /></Link>
                        </div>
                    )}
                </div>
            </section>

            {hasVariants && (
                <section className="section">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Slice the {hub.name} circuit</p>
                        {themeLinks.length > 0 && (
                            <div className="mt-10">
                                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">By theme</p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {themeLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="btn-outline btn-sm">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {durationLinks.length > 0 && (
                            <div className="mt-10">
                                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">By duration</p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {durationLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="btn-outline btn-sm">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {monthLinks.length > 0 && (
                            <div className="mt-10">
                                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">By month</p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {monthLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="btn-outline btn-sm">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {originLinks.length > 0 && (
                            <div className="mt-10">
                                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">From your origin city</p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {originLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="btn-outline btn-sm">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {comboLinks.length > 0 && (
                            <div className="mt-10">
                                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">By duration and theme</p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {comboLinks.map((l) => (
                                        <Link key={l.href} href={l.href} className="btn-outline btn-sm">{l.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* FAQ */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Good to know</p>
                    <h2 className="display-3 mt-3 text-ink">{hub.name} tours FAQ</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {faqs.map((f, i) => (
                            <div key={i} className="card p-7">
                                <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-links */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Continue planning</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link href={`/destinations/region/${hub.destinationsRegionSlug}`} className="btn-outline btn-sm">{hub.name} destinations</Link>
                        <Link href="/tours" className="btn-outline btn-sm">All tour packages</Link>
                        <Link href="/fleet" className="btn-outline btn-sm">Elite fleet</Link>
                        <Link href="/services/inter-city" className="btn-outline btn-sm">Inter-city transfers <ArrowRight size={14} /></Link>
                    </div>
                </div>
            </section>

            <LeadBlock
                variant="cta"
                source={`Regional tour hub: ${hub.name}`}
                context={{ "Inquiry Type": "Tour", Subject: hub.name }}
                heading={`Plan your ${hub.name} tour`}
                subheading="Tell us your dates and travel style and we craft a private, chauffeured itinerary with handpicked hotels and a transparent quote."
                waMessage={`Hi MyTripMyTravel, I am interested in a ${hub.name} tour.`}
                faqs={faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Tours", item: "https://www.mytripmytravel.com/tours" },
                    { name: hub.name },
                ]}
            />

            <Footer />
        </main>
    );
}
