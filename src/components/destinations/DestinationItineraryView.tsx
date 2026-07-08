"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Destination } from "@/data/destinations";
import type { ItineraryContent, ItineraryDuration } from "@/data/destinationItineraries";
import { ITINERARY_DURATIONS } from "@/data/destinationItineraries";
import type { CityTour } from "@/components/destinations/DestinationCityView";

export function ItineraryIndexView({ dest }: { dest: Destination }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="relative flex h-[52vh] min-h-[420px] items-end overflow-hidden">
                <Image src={dest.heroImg} alt={`${dest.name} itineraries`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/destinations" className="hover:text-clay-soft">Destinations</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}`} className="hover:text-clay-soft">{dest.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">Itineraries</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">{dest.name} · Itinerary by length</p>
                    <h1 className="display-1 mt-4 font-medium text-paper">{dest.name} Itineraries</h1>
                </div>
            </section>

            <section className="section">
                <div className="container-x">
                    <p className="mb-12 max-w-3xl text-[16px] leading-relaxed text-muted">
                        Pick the length that matches your trip. Each plan is a starting architecture for
                        {' '}{dest.name}, sequenced from real city data, refined to your party in planning.
                    </p>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {ITINERARY_DURATIONS.map((n) => (
                            <Link key={n} href={`/destinations/${dest.slug}/itinerary/${n}-day`} className="card card-hover p-7">
                                <div className="mb-3 flex items-center gap-3">
                                    <Calendar className="text-clay" size={20} />
                                    <span className="text-xl font-medium text-ink">{n}-Day {dest.name}</span>
                                </div>
                                <p className="text-[15px] leading-relaxed text-muted">{n <= 3 ? "Headlines-only sprint" : n <= 5 ? "Balanced classic" : n <= 7 ? "Unhurried deep dive" : n <= 10 ? "Deep dive + regional extension" : "Comprehensive regional mission"}.</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Destination itineraries index: ${dest.name}`}
                context={{ "Inquiry Type": "Itinerary", Destination: dest.name, Region: dest.region }}
                heading={`Plan your ${dest.name} itinerary`}
                pitch={`Not sure how many days ${dest.name} needs? Tell us your dates and party size, and our travel desk shapes a private, chauffeured plan around you with a transparent quote.`}
                waMessage={`Hi MyTripMyTravel, I would like help planning a ${dest.name} itinerary.`}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                    { name: dest.name, item: `https://www.mytripmytravel.com/destinations/${dest.slug}` },
                    { name: "Itineraries" },
                ]}
            />

            <Footer />
        </main>
    );
}

export function ItineraryView({
    dest,
    content,
    tours = [],
}: {
    dest: Destination;
    content: ItineraryContent;
    tours?: CityTour[];
}) {
    const otherDurations = ITINERARY_DURATIONS.filter((d) => d !== content.duration);
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="relative flex h-[60vh] min-h-[460px] items-end overflow-hidden">
                <Image src={dest.heroImg} alt={`${content.duration}-day ${dest.name} itinerary`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-16 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/destinations" className="hover:text-clay-soft">Destinations</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}`} className="hover:text-clay-soft">{dest.name}</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}/itinerary`} className="hover:text-clay-soft">Itineraries</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{content.duration}-Day</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">{dest.name} · {content.duration}-day plan</p>
                    <h1 className="display-1 mt-4 font-medium text-paper">{content.h1}</h1>
                </div>
            </section>

            <section className="section">
                <div className="container-x max-w-5xl">
                    <p className="eyebrow eyebrow-accent">The brief</p>
                    <p className="mt-5 font-display text-[26px] font-medium leading-snug text-ink sm:text-[32px]">{content.answer}</p>
                    <div className="mt-10 max-w-3xl space-y-5">
                        {content.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] leading-relaxed text-muted">{p}</motion.p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Day by day</p>
                    <div className="mt-10 max-w-5xl space-y-5">
                        {content.days.map((d) => (
                            <motion.div key={d.day} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card p-8">
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-medium text-paper">{d.day}</div>
                                    <h3 className="text-xl font-medium text-ink md:text-2xl">{d.title}</h3>
                                </div>
                                <div className="space-y-4 pl-14">
                                    {d.paragraphs.map((p, i) => (
                                        <p key={i} className="text-[15px] leading-relaxed text-muted md:text-[16px]">{p}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Trip context</p>
                    <div className="mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
                        {content.closing.map((c, i) => (
                            <div key={i} className="card p-8">
                                <h3 className="mb-4 text-xl font-medium text-ink">{c.heading}</h3>
                                <div className="space-y-3">
                                    {c.paragraphs.map((p, j) => (
                                        <p key={j} className="text-[15px] leading-relaxed text-muted">{p}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Good to know</p>
                    <h2 className="display-3 mt-3 font-medium text-ink">{content.duration}-day {dest.name} FAQ</h2>
                    <div className="mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
                        {content.faqs.map((f, i) => (
                            <div key={i} className="card p-7">
                                <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Other lengths</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {otherDurations.map((d) => (
                            <Link key={d} href={`/destinations/${dest.slug}/itinerary/${d}-day`} className="btn-outline btn-sm">
                                <Clock size={14} /> {d}-Day {dest.name}
                            </Link>
                        ))}
                        <Link href={`/destinations/${dest.slug}`} className="btn-outline btn-sm">
                            {dest.name} full brief <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Ready-to-book tours featuring this city */}
            {tours.length > 0 && (
                <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Ready to book</p>
                        <h2 className="display-3 mt-3 font-medium text-ink">Itineraries featuring {dest.name}</h2>
                        <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-muted">
                            Prefer a fully planned, day-by-day tour? These private, chauffeured itineraries feature {dest.name} or the wider {dest.region}, each customisable to this {content.duration}-day plan.
                        </p>
                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {tours.slice(0, 3).map((t) => (
                                <Link key={t.slug} href={`/tours/${t.slug}`} className="card card-hover block overflow-hidden">
                                    <div className="relative h-44">
                                        <Image src={t.img} alt={`${t.title}, itinerary featuring ${dest.name}`} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                                        <div className="absolute bottom-5 left-6 right-6 flex items-center gap-3 text-[11px] font-medium text-paper">
                                            <Clock size={13} className="text-clay-soft" />{t.duration}<span className="text-clay-soft">·</span>{t.theme}
                                        </div>
                                    </div>
                                    <div className="p-7">
                                        <h3 className="mb-4 text-xl font-medium leading-tight text-ink">{t.title}</h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-medium text-ink">from {t.price}</span>
                                            <span className="flex items-center gap-2 text-[13px] font-medium text-muted">View itinerary <ArrowRight size={14} /></span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <LeadBlock
                source={`Destination itinerary: ${content.duration}-day ${dest.name}`}
                context={{ "Inquiry Type": "Itinerary", Destination: dest.name, Duration: `${content.duration}-day`, Region: dest.region }}
                heading={`Plan your ${content.duration}-day ${dest.name} trip`}
                pitch={`Private, chauffeured travel with this ${content.duration}-day ${dest.name} plan tuned to your pace. Tell us your dates and party size, and we reply with a tailored itinerary and a transparent quote.`}
                waMessage={`Hi MyTripMyTravel, I would like a ${content.duration}-day ${dest.name} itinerary.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                    { name: dest.name, item: `https://www.mytripmytravel.com/destinations/${dest.slug}` },
                    { name: "Itineraries", item: `https://www.mytripmytravel.com/destinations/${dest.slug}/itinerary` },
                    { name: `${content.duration}-Day` },
                ]}
            />

            <Footer />
        </main>
    );
}
