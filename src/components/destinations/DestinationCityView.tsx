"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin, Navigation2, BedDouble, Utensils,
    ChevronRight, ArrowRight, ArrowUpRight, Calendar, Clock, Plane, Train, Car,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EnquiryForm, WhatsAppFab } from "@/components/lead/Lead";
import type { Destination } from "@/data/destinations";
import type { Monument } from "@/data/monuments";
import { FACET_SLUGS, FACET_LABELS } from "@/data/destinationFacets";

const fade = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
} as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <p className="eyebrow eyebrow-accent">{children}</p>
);

const modeIcon = (mode: string) => {
    const m = mode.toLowerCase();
    if (m.includes("air")) return Plane;
    if (m.includes("rail")) return Train;
    return Car;
};

export interface CityTour {
    slug: string; title: string; duration: string; price: string; theme: string; img: string;
}

export default function DestinationCityView({
    dest, related, monuments = [], tours = [],
}: {
    dest: Destination; related: Destination[]; monuments?: Monument[]; tours?: CityTour[];
}) {
    const waMsg = `Hi MyTripMyTravel, I would like to plan a journey through ${dest.name}, ${dest.state}.`;
    const waHref = `https://wa.me/919997812237?text=${encodeURIComponent(waMsg)}`;

    const jsonLd = [
        { "@context": "https://schema.org", "@type": "TouristDestination", name: dest.name, description: dest.answer, address: { "@type": "PostalAddress", addressRegion: dest.state, addressCountry: "IN" } },
        ...(dest.faqs?.length ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: dest.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] : []),
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mytripmytravel.com" },
            { "@type": "ListItem", position: 2, name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
            { "@type": "ListItem", position: 3, name: dest.region, item: `https://www.mytripmytravel.com/destinations/region/${dest.regionSlug}` },
            { "@type": "ListItem", position: 4, name: dest.name },
        ] },
    ];

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero */}
            <section className="relative flex h-[70vh] min-h-[520px] items-end overflow-hidden">
                <Image src={dest.heroImg} alt={`${dest.name}, ${dest.state}, ${dest.tagline}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/destinations" className="hover:text-clay-soft">Destinations</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/region/${dest.regionSlug}`} className="hover:text-clay-soft">{dest.region}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{dest.name}</span>
                    </nav>
                    <motion.div initial="hidden" animate="visible" variants={fade}>
                        <span className="eyebrow text-paper/70">{dest.state}</span>
                        <h1 className="display-1 mt-4 font-medium text-paper">{dest.name}</h1>
                        <p className="mt-4 max-w-2xl text-lg text-paper/80">{dest.tagline}</p>
                    </motion.div>
                </div>
            </section>

            {/* Answer + intro */}
            <section className="section">
                <div className="container-x max-w-4xl">
                    <Eyebrow>Overview</Eyebrow>
                    <p className="mt-5 font-display text-[26px] font-medium leading-snug text-ink sm:text-[32px]">{dest.answer}</p>
                    <div className="mt-10 space-y-5">
                        {dest.intro.map((para, i) => (
                            <p key={i} className="text-[17px] leading-relaxed text-muted">{para}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick facts */}
            <section className="border-y border-line bg-paper-dim/60 py-16 sm:py-20">
                <div className="container-x">
                    <Eyebrow>At a glance</Eyebrow>
                    <h2 className="display-3 mt-3 text-ink">{dest.name} in brief</h2>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {dest.quickFacts.map((f, i) => (
                            <div key={i} className="card p-6">
                                <div className="eyebrow">{f.label}</div>
                                <div className="mt-2 text-lg font-medium text-ink">{f.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best time */}
            <section className="section">
                <div className="container-x grid items-start gap-10 lg:grid-cols-[1fr_1.6fr]">
                    <div>
                        <Eyebrow>When to visit</Eyebrow>
                        <div className="mt-4 flex items-center gap-3">
                            <Calendar className="text-clay" size={26} />
                            <h2 className="display-3 text-ink">{dest.bestTime.window}</h2>
                        </div>
                    </div>
                    <p className="text-[17px] leading-relaxed text-muted">{dest.bestTime.narrative}</p>
                </div>
            </section>

            {/* Things to do */}
            <section className="bg-ink py-20 sm:py-28">
                <div className="container-x">
                    <p className="eyebrow text-clay-soft">Things to do</p>
                    <h2 className="display-2 mt-3 text-paper">Experiences in {dest.name}</h2>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {dest.thingsToDo.map((t, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}
                                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:bg-white/[0.07]">
                                <div className="eyebrow text-clay-soft">{t.category}</div>
                                <h3 className="mt-3 text-xl font-medium text-paper">{t.name}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-paper/60">{t.blurb}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to reach */}
            <section className="section">
                <div className="container-x">
                    <Eyebrow>Getting there</Eyebrow>
                    <h2 className="display-3 mt-3 text-ink">How to reach {dest.name}</h2>
                    <div className="mt-10 divide-y divide-line">
                        {dest.howToReach.map((m, i) => {
                            const Icon = modeIcon(m.mode);
                            return (
                                <div key={i} className="flex flex-col gap-3 py-7 md:flex-row md:items-center md:gap-10">
                                    <div className="flex shrink-0 items-center gap-4 md:w-60">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-dim text-clay"><Icon size={19} /></span>
                                        <span className="text-lg font-medium text-ink">{m.mode}</span>
                                    </div>
                                    <p className="text-[16px] leading-relaxed text-muted">{m.detail}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stay + eat */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x grid gap-14 lg:grid-cols-2">
                    <div>
                        <div className="mb-8 flex items-center gap-3">
                            <BedDouble className="text-clay" size={24} />
                            <h2 className="display-3 text-ink">Where to stay</h2>
                        </div>
                        <div className="space-y-4">
                            {dest.whereToStay.map((s, i) => (
                                <div key={i} className="card p-6">
                                    <div className="eyebrow">{s.tier}</div>
                                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="mb-8 flex items-center gap-3">
                            <Utensils className="text-clay" size={24} />
                            <h2 className="display-3 text-ink">Where to eat</h2>
                        </div>
                        <div className="space-y-4">
                            {dest.whereToEat.map((e, i) => (
                                <div key={i} className="card p-6">
                                    <div className="eyebrow">{e.name}</div>
                                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{e.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Monuments */}
            {monuments.length > 0 && (
                <section className="section">
                    <div className="container-x">
                        <Eyebrow>Landmarks</Eyebrow>
                        <h2 className="display-3 mt-3 text-ink">Monuments in {dest.name}</h2>
                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {monuments.map((m) => (
                                <Link key={m.slug} href={`/destinations/${dest.slug}/monuments/${m.slug}`}
                                    className="card card-hover group flex items-center justify-between p-6">
                                    <div>
                                        <div className="eyebrow">{m.type}</div>
                                        <span className="mt-1 block text-lg font-medium text-ink group-hover:text-clay">{m.name}</span>
                                    </div>
                                    <ArrowRight size={17} className="shrink-0 text-stone group-hover:text-clay" />
                                </Link>
                            ))}
                            <Link href={`/destinations/${dest.slug}/monuments`}
                                className="card card-hover group flex items-center justify-between border-clay/30 bg-clay/[0.06] p-6">
                                <span className="text-lg font-medium text-ink">All {dest.name} monuments</span>
                                <ArrowRight size={17} className="shrink-0 text-clay" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Deep briefs */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <Eyebrow>Go deeper</Eyebrow>
                    <h2 className="display-3 mt-3 text-ink">More on {dest.name}</h2>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {FACET_SLUGS.map((f) => (
                            <Link key={f} href={`/destinations/${dest.slug}/${f}`} className="card card-hover group flex items-center justify-between p-6">
                                <span className="text-[15px] font-medium text-ink group-hover:text-clay">{FACET_LABELS[f]}</span>
                                <ArrowRight size={16} className="shrink-0 text-stone group-hover:text-clay" />
                            </Link>
                        ))}
                        <Link href={`/destinations/${dest.slug}/itinerary`} className="card card-hover group flex items-center justify-between p-6">
                            <span className="text-[15px] font-medium text-ink group-hover:text-clay">Itineraries (3 to 14 days)</span>
                            <ArrowRight size={16} className="shrink-0 text-stone group-hover:text-clay" />
                        </Link>
                        <Link href={`/destinations/${dest.slug}/in/january`} className="card card-hover group flex items-center justify-between p-6">
                            <span className="text-[15px] font-medium text-ink group-hover:text-clay">Month-by-month guide</span>
                            <ArrowRight size={16} className="shrink-0 text-stone group-hover:text-clay" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tours */}
            {tours.length > 0 && (
                <section className="section">
                    <div className="container-x">
                        <Eyebrow>Ready to book</Eyebrow>
                        <h2 className="display-3 mt-3 text-ink">Itineraries featuring {dest.name}</h2>
                        <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-muted">
                            Private, chauffeured, day-by-day journeys that feature {dest.name} or explore the wider {dest.region}, each fully customisable, or built around your dates.
                        </p>
                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {tours.map((t) => (
                                <Link key={t.slug} href={`/tours/${t.slug}`} className="card card-hover group overflow-hidden">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image src={t.img} alt={`${t.title}, itinerary including ${dest.name}`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                                        <div className="absolute bottom-4 left-5 flex items-center gap-2 text-[11px] font-medium text-paper">
                                            <Clock size={12} className="text-clay-soft" />{t.duration} · {t.theme}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-medium text-ink group-hover:text-clay">{t.title}</h3>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-base font-medium text-ink">from {t.price}</span>
                                            <span className="inline-flex items-center gap-1 text-sm font-medium text-clay">View <ArrowRight size={14} /></span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href="/tours" className="link-line mt-10 text-sm">All tour itineraries <ArrowRight size={15} /></Link>
                    </div>
                </section>
            )}

            {/* FAQ */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <Eyebrow>Good to know</Eyebrow>
                    <h2 className="display-3 mt-3 text-ink">{dest.name}, your questions</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {dest.faqs.map((f, i) => (
                            <div key={i} className="card p-7">
                                <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related cities */}
            {related.length > 0 && (
                <section className="section">
                    <div className="container-x">
                        <Eyebrow>Continue exploring</Eyebrow>
                        <h2 className="display-3 mt-3 text-ink">Pairs well with {dest.name}</h2>
                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((c) => (
                                <Link key={c.slug} href={`/destinations/${c.slug}`} className="card card-hover group overflow-hidden">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image src={c.heroImg} alt={`${c.name}, ${c.state}`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                                        <div className="absolute bottom-5 left-5">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="text-clay-soft" size={15} />
                                                <h3 className="text-xl font-medium text-paper">{c.name}</h3>
                                            </div>
                                            <p className="mt-0.5 text-xs text-paper/70">{c.tagline}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-5">
                                        <span className="eyebrow">{c.region}</span>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium text-clay">Open <ArrowRight size={14} /></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Lead + CTA */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x grid items-start gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Plan with us</p>
                        <h2 className="display-2 mt-3 text-ink">Design a private journey through {dest.name}.</h2>
                        <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
                            Tell us your dates and what you love. Our travel desk builds a private, chauffeured itinerary around {dest.name} and the wider {dest.region}, with handpicked hotels and a transparent quote, usually within a few hours.
                        </p>
                        {dest.relatedTours.length > 0 && (
                            <div className="mt-8">
                                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">Related journeys</p>
                                <div className="mt-3 flex flex-wrap gap-2.5">
                                    {dest.relatedTours.map((r, i) => (
                                        <Link key={i} href={r.href} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-ink hover:text-clay">
                                            {r.label} <ArrowUpRight size={14} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn rounded-full bg-[#25D366] px-6 py-3 text-white hover:opacity-90">WhatsApp the desk</a>
                            <a href="tel:+919997812237" className="btn-outline btn-sm">Call us</a>
                            <a href="mailto:info@mytripmytravel.com" className="btn-outline btn-sm">Email us</a>
                        </div>
                    </div>
                    <EnquiryForm
                        source={`Destination: ${dest.name}`}
                        context={{ "Inquiry Type": "Destination", Destination: dest.name, Region: dest.region, State: dest.state }}
                        heading={`Plan your ${dest.name} trip`}
                        subheading="Free, no obligation quote. Your details stay private."
                    />
                </div>
            </section>

            <Footer />
            <WhatsAppFab message={waMsg} />
        </main>
    );
}
