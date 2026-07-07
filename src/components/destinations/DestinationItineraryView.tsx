"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
import type { Destination } from "@/data/destinations";
import type { ItineraryContent, ItineraryDuration } from "@/data/destinationItineraries";
import { ITINERARY_DURATIONS } from "@/data/destinationItineraries";
import type { CityTour } from "@/components/destinations/DestinationCityView";

export function ItineraryIndexView({ dest }: { dest: Destination }) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[52vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={dest.heroImg} alt={`${dest.name} itineraries`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-14">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-semibold uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/destinations" className="hover:text-sunset-orange transition-colors">Destinations</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/${dest.slug}`} className="hover:text-sunset-orange transition-colors">{dest.name}</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">Itineraries</span>
                        </nav>
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">{dest.name} &middot; Itinerary by length</h4>
                        <CharBlurIn text={`${dest.name.toUpperCase()} ITINERARIES`} className="text-3xl md:text-7xl font-semibold text-white uppercase tracking-tight leading-[0.9] block" />
                    </div>
                </section>

                <section className="py-24 container mx-auto px-6">
                    <p className="max-w-3xl text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed mb-12">
                        Pick the length that matches your trip. Each plan is a starting architecture for
                        {' '}{dest.name}, sequenced from real city data, refined to your party in planning.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {ITINERARY_DURATIONS.map((n) => (
                            <Link key={n} href={`/destinations/${dest.slug}/itinerary/${n}-day`} className="block glass-card rounded-3xl p-8 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all">
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="text-sunset-orange" size={20} />
                                    <span className="text-xl font-semibold uppercase tracking-tight text-royal-blue group-hover:text-sunset-orange transition-colors">{n}-Day {dest.name}</span>
                                </div>
                                <p className="text-dark-slate/60 font-bold italic text-sm">{n <= 3 ? "Headlines-only sprint" : n <= 5 ? "Balanced classic" : n <= 7 ? "Unhurried deep dive" : n <= 10 ? "Deep dive + regional extension" : "Comprehensive regional mission"}.</p>
                            </Link>
                        ))}
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
        </SmoothScroll>
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
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[60vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={dest.heroImg} alt={`${content.duration}-day ${dest.name} itinerary`} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-16">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-semibold uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/destinations" className="hover:text-sunset-orange transition-colors">Destinations</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/${dest.slug}`} className="hover:text-sunset-orange transition-colors">{dest.name}</Link>
                            <ChevronRight size={12} />
                            <Link href={`/destinations/${dest.slug}/itinerary`} className="hover:text-sunset-orange transition-colors">Itineraries</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{content.duration}-Day</span>
                        </nav>
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">{dest.name} &middot; {content.duration}-day plan</h4>
                        <CharBlurIn text={content.h1.toUpperCase()} className="text-3xl md:text-7xl font-semibold text-white uppercase tracking-tight leading-[0.9] block" />
                    </div>
                </section>

                <section className="py-24 md:py-28 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">The Brief</h4>
                        <p className="text-2xl md:text-4xl font-semibold text-royal-blue leading-snug tracking-tight mb-12">{content.answer}</p>
                        <div className="space-y-7 max-w-3xl">
                            {content.intro.map((p, i) => (
                                <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed">{p}</motion.p>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-10">Day-by-day</h4>
                        <div className="space-y-px max-w-5xl">
                            {content.days.map((d) => (
                                <motion.div key={d.day} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8 border-royal-blue/5 mb-5">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-2xl bg-sunset-orange text-white flex items-center justify-center font-semibold shrink-0">{d.day}</div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-royal-blue uppercase tracking-tight">{d.title}</h3>
                                    </div>
                                    <div className="space-y-4 pl-14">
                                        {d.paragraphs.map((p, i) => (
                                            <p key={i} className="text-base md:text-lg text-dark-slate/70 font-bold italic leading-relaxed">{p}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-10">Trip context</h4>
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
                        {content.closing.map((c, i) => (
                            <div key={i} className="glass-card rounded-3xl p-8 border-royal-blue/5">
                                <h3 className="text-xl font-semibold text-royal-blue uppercase tracking-tight mb-4">{c.heading}</h3>
                                <div className="space-y-3">
                                    {c.paragraphs.map((p, j) => (
                                        <p key={j} className="text-base text-dark-slate/70 font-bold italic leading-relaxed">{p}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-14">
                            <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                            <CharBlurIn text={`${content.duration}-DAY ${dest.name.toUpperCase()} FAQ`} className="text-2xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight block leading-none" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {content.faqs.map((f, i) => (
                                <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                    <div className="flex items-start gap-4 mb-4">
                                        <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                        <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-base leading-tight">{f.q}</h3>
                                    </div>
                                    <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Other lengths</h4>
                    <div className="flex flex-wrap gap-3">
                        {otherDurations.map((d) => (
                            <Link key={d} href={`/destinations/${dest.slug}/itinerary/${d}-day`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-2">
                                <Clock size={12} className="text-sunset-orange" /> {d}-Day {dest.name}
                            </Link>
                        ))}
                        <Link href={`/destinations/${dest.slug}`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-2">
                            {dest.name} full brief <ArrowRight size={12} />
                        </Link>
                    </div>
                </section>

                {/* Ready-to-book tours featuring this city */}
                {tours.length > 0 && (
                    <section className="py-24 bg-royal-blue/5">
                        <div className="container mx-auto px-6">
                            <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Ready-to-Book</h4>
                            <h2 className="text-3xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight leading-none mb-6">Itineraries featuring {dest.name}</h2>
                            <p className="text-lg font-bold italic text-royal-blue/50 max-w-3xl mb-12 leading-relaxed">
                                Prefer a fully planned, day-by-day tour? These private, chauffeured itineraries feature {dest.name} or the wider {dest.region}, each customisable to this {content.duration}-day plan.
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tours.slice(0, 3).map((t) => (
                                    <Link key={t.slug} href={`/tours/${t.slug}`} className="block glass-card rounded-2xl overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/30 transition-all duration-700 bg-white">
                                        <div className="relative h-44">
                                            <Image src={t.img} alt={`${t.title}, itinerary featuring ${dest.name}`} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/70 to-transparent" />
                                            <div className="absolute bottom-5 left-6 right-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                                                <Clock size={13} className="text-sunset-orange" />{t.duration}<span className="text-sunset-orange">·</span>{t.theme}
                                            </div>
                                        </div>
                                        <div className="p-7">
                                            <h3 className="text-xl font-semibold text-royal-blue uppercase tracking-tight leading-tight mb-4 group-hover:text-sunset-orange transition-colors">{t.title}</h3>
                                            <div className="flex items-center justify-between">
                                                <span className="text-lg font-semibold text-royal-blue">from {t.price}</span>
                                                <span className="font-semibold uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 text-royal-blue group-hover:text-sunset-orange transition-colors">View itinerary <ArrowRight size={14} /></span>
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
        </SmoothScroll>
    );
}
