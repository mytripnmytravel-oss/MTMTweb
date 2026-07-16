"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Clock, Car, BadgeIndianRupee, CalendarClock, Headset, Star, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadCTA, WhatsAppFab, waLink } from "@/components/lead/Lead";
import { packageSlug, type Package } from "@/data/tours";

const fade = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } } as const;

const WHY = [
    { icon: Car, title: "Private and chauffeured", desc: "Your own vehicle and vetted driver, never shared, on every journey." },
    { icon: BadgeIndianRupee, title: "Transparent pricing", desc: "Fuel, tolls, permits and the driver, pre calculated. No hidden gate fees." },
    { icon: CalendarClock, title: "Fully tailor made", desc: "Every itinerary is a starting point. We shape the pace, hotels and stops to you." },
    { icon: Headset, title: "Real people, on call", desc: "One point of contact and 24/7 support for the whole trip." },
];

const STEPS = [
    { n: "01", t: "Tell us your dates", d: "Share a rough plan, group size and the kind of trip you want." },
    { n: "02", t: "Get a tailored plan", d: "We reply within a few hours with an itinerary and a transparent quote." },
    { n: "03", t: "Travel with ease", d: "Chauffeur, hotels, guides and support all handled. You just enjoy it." },
];

const FAQS = [
    { q: "Are these fixed packages?", a: "No. Every itinerary is a starting point. We change the pace, swap cities, pick your hotels and start on any date you like." },
    { q: "What is included in the price?", a: "Private air conditioned car with a chauffeur, fuel, tolls, parking and permits are covered. Hotels, monument tickets, guides and meals are tailored to your plan and quoted transparently." },
    { q: "How do I book?", a: "Send an enquiry from any tour page or message us on WhatsApp. We confirm the plan and quote, then a small advance secures your dates." },
    { q: "Do you offer airport pickup?", a: "Yes. Meet and greet arrival transfers and chauffeured travel throughout are part of every private tour." },
];

export default function ToursHubView({ grouped }: { grouped: { location: string; items: Package[] }[] }) {
    const all = grouped.flatMap((g) => g.items);
    const featured = grouped.map((g) => g.items[0]).filter(Boolean).slice(0, 3);
    const totalCount = all.length;

    const jsonLd = [
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mytripmytravel.com" },
            { "@type": "ListItem", position: 2, name: "Tours" },
        ] },
        { "@context": "https://schema.org", "@type": "ItemList", name: "India tour packages", numberOfItems: totalCount,
          itemListElement: all.slice(0, 25).map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, url: `https://www.mytripmytravel.com/tours/${packageSlug(p)}` })) },
    ];

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero */}
            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x">
                    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] text-muted">
                        <Link href="/" className="hover:text-clay">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay">Tours</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">India tour packages</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-semibold text-ink">Private, chauffeured journeys across India</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                        {totalCount}+ handcrafted itineraries across the Golden Triangle, Rajasthan, Kerala, the Himalayas and beyond. Each one is private, fully tailored, and ready to shape around how you actually want to travel.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/booking" className="btn-primary">Get a free quote <ArrowRight size={16} /></Link>
                        <a href={waLink("Hi MyTripMyTravel, I would like help choosing a tour.")} target="_blank" rel="noopener noreferrer" className="btn rounded-full bg-[#25D366] px-6 py-3 text-white hover:opacity-90"><MessageCircle size={16} /> Ask on WhatsApp</a>
                    </div>
                </div>
            </section>

            {/* Why book */}
            <section className="border-b border-line bg-white">
                <div className="container-x grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
                    {WHY.map((w) => {
                        const Icon = w.icon;
                        return (
                            <div key={w.title}>
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-dim text-clay"><Icon size={20} /></span>
                                <h3 className="mt-4 text-[15px] font-semibold text-ink">{w.title}</h3>
                                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{w.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Featured */}
            {featured.length > 0 && (
                <section className="section">
                    <div className="container-x">
                        <div className="flex items-end justify-between gap-6">
                            <div>
                                <p className="eyebrow eyebrow-accent">Most popular</p>
                                <h2 className="display-2 mt-3 text-ink">Traveller favourites</h2>
                            </div>
                        </div>
                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {featured.map((p) => (
                                <Link key={p.id} href={`/tours/${packageSlug(p)}`} className="card card-hover group overflow-hidden">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-clay px-3 py-1 text-[11px] font-semibold text-paper"><Star size={11} fill="currentColor" /> Popular</span>
                                        <span className="absolute right-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold text-ink">{p.duration}</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="eyebrow">{p.location} · {p.theme}</div>
                                        <h3 className="mt-2 text-xl font-semibold text-ink group-hover:text-clay">{p.title}</h3>
                                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{p.highlight}</p>
                                        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                                            <span className="text-lg font-semibold text-ink">from {p.price}</span>
                                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-clay">View itinerary <ArrowRight size={14} /></span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Full grouped listing */}
            {grouped.map((group) => (
                <section key={group.location} className="section pt-0">
                    <div className="container-x">
                        <div className="mb-8 flex items-center gap-5">
                            <h2 className="display-3 text-ink">{group.location}</h2>
                            <div className="h-px flex-1 bg-line" />
                            <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-stone">{group.items.length} itineraries</span>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {group.items.map((p, idx) => (
                                <motion.div key={p.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: (idx % 3) * 0.05 }}>
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
                                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-clay">Details <ArrowRight size={14} /></span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* How it works */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">How it works</p>
                    <h2 className="display-2 mt-3 text-ink">Booking is simple</h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {STEPS.map((s) => (
                            <div key={s.n} className="border-l border-line pl-6">
                                <div className="font-display text-3xl font-semibold text-line-strong">{s.n}</div>
                                <h3 className="mt-4 text-xl font-semibold text-ink">{s.t}</h3>
                                <p className="mt-2 leading-relaxed text-muted">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="eyebrow eyebrow-accent">Good to know</p>
                        <h2 className="display-2 mt-3 text-ink">Common questions</h2>
                        <p className="mt-4 leading-relaxed text-muted">Anything else, just ask. Our travel desk is happy to help.</p>
                    </div>
                    <div className="divide-y divide-line">
                        {FAQS.map((f, i) => (
                            <details key={i} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[17px] font-semibold text-ink">
                                    {f.q}
                                    <ChevronRight size={18} className="shrink-0 text-stone transition-transform group-open:rotate-90 group-open:text-clay" />
                                </summary>
                                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <LeadCTA
                title="Not sure which tour is right?"
                subtitle="Tell us what you love and how long you have. We will suggest the perfect itinerary and quote it transparently."
                waMessage="Hi MyTripMyTravel, I would like help choosing the right tour."
            />

            <Footer />
            <WhatsAppFab message="Hi MyTripMyTravel, I would like help choosing a tour." />
        </main>
    );
}
