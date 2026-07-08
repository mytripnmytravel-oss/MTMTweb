"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Plane, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { MonumentOriginContent } from "@/data/monumentOrigins";

export default function MonumentOriginView({ content }: { content: MonumentOriginContent }) {
    const { monument, dest, origin } = content;
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[62vh] min-h-[460px] items-end overflow-hidden">
                <Image src={monument.heroImg} alt={`${monument.name} from ${origin.city}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/destinations" className="hover:text-clay-soft">Destinations</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}`} className="hover:text-clay-soft">{dest.name}</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}/monuments/${monument.slug}`} className="hover:text-clay-soft">{monument.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">From {origin.city}</span>
                    </nav>
                    <div className="mb-4 flex items-center gap-2">
                        <Plane size={16} className="text-clay-soft" />
                        <p className="eyebrow text-paper/70">{origin.city} to {monument.name}</p>
                    </div>
                    <h1 className="display-1 font-medium text-paper">{content.h1}</h1>
                </div>
            </section>

            {/* Answer block */}
            <section className="section">
                <div className="container-x max-w-4xl">
                    <p className="eyebrow eyebrow-accent">The brief</p>
                    <p className="mt-5 font-display text-[26px] font-medium leading-snug text-ink sm:text-[32px]">{content.answer}</p>
                    <div className="mt-8 space-y-5">
                        {content.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl text-[17px] leading-relaxed text-muted">
                                {p}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flight + Gateway card */}
            <section className="section pt-0">
                <div className="container-x">
                    <div className="card p-8 sm:p-10">
                        <p className="eyebrow eyebrow-accent">{origin.city} to {monument.name}</p>
                        <div className="mt-8 grid gap-5 md:grid-cols-3">
                            <div className="rounded-2xl border border-line bg-paper-dim/60 p-6">
                                <Plane className="text-clay" size={20} />
                                <h3 className="mt-3 text-[13px] font-medium uppercase tracking-[0.12em] text-stone">Flight</h3>
                                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{content.flightBand}</p>
                            </div>
                            <div className="rounded-2xl border border-line bg-paper-dim/60 p-6">
                                <MapPin className="text-clay" size={20} />
                                <h3 className="mt-3 text-[13px] font-medium uppercase tracking-[0.12em] text-stone">Gateway</h3>
                                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{content.gateway.label}</p>
                            </div>
                            <div className="rounded-2xl border border-line bg-paper-dim/60 p-6">
                                <Clock className="text-clay" size={20} />
                                <h3 className="mt-3 text-[13px] font-medium uppercase tracking-[0.12em] text-stone">Access</h3>
                                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{content.accessNote}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facet blocks */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">How we run the route</p>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {content.facets.map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card p-8">
                                <h3 className="text-xl font-medium text-ink">{f.heading}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Good to know</p>
                    <h2 className="display-3 mt-3 text-ink">{monument.name} from {origin.city}, your questions</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {content.faqs.map((f, i) => (
                            <div key={i} className="card p-7">
                                <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-links */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Continue planning</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {content.crossLinks.map((c) => (
                            <Link key={c.href} href={c.href} className="btn-outline btn-sm">{c.label} <ArrowRight size={14} /></Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Monument from origin: ${monument.name} from ${origin.city}`}
                context={{ "Inquiry Type": "Monument", Monument: monument.name, Destination: dest.name, Origin: origin.city }}
                heading={`Plan your ${monument.name} visit from ${origin.city}`}
                pitch={`Private, chauffeured visits to the ${monument.name} with flights and gateway timing worked out from ${origin.city}. Tell us your dates and party size, and we reply with a tailored plan and a transparent quote.`}
                waMessage={`Hi MyTripMyTravel, I would like to visit the ${monument.name} from ${origin.city}.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                    { name: dest.name, item: `https://www.mytripmytravel.com/destinations/${dest.slug}` },
                    { name: monument.name, item: `https://www.mytripmytravel.com/destinations/${dest.slug}/monuments/${monument.slug}` },
                    { name: `From ${origin.city}` },
                ]}
            />

            <Footer />
        </main>
    );
}
