"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Destination } from "@/data/destinations";
import type { ServiceCityContent } from "@/data/services";

export default function ServiceCityView({
    lineName,
    lineSlug,
    dest,
    content,
    otherCities,
}: {
    lineName: string;
    lineSlug: string;
    dest: Destination;
    content: ServiceCityContent;
    otherCities: { slug: string; name: string }[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[56vh] min-h-[440px] items-end overflow-hidden">
                <Image src={dest.heroImg} alt={`${content.h1}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/services" className="hover:text-clay-soft">Services</Link>
                        <ChevronRight size={12} />
                        <span className="text-paper/70">{lineName}</span>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{dest.name}</span>
                    </nav>
                    <p className="eyebrow text-paper/70">{lineName} · {dest.state}</p>
                    <h1 className="display-1 mt-4 font-semibold text-paper">{content.h1}</h1>
                </div>
            </section>

            {/* Brief */}
            <section className="section">
                <div className="container-x max-w-5xl">
                    <p className="eyebrow eyebrow-accent">The Brief</p>
                    <p className="mt-5 font-display text-[26px] font-semibold leading-snug text-ink sm:text-[32px]">{content.answer}</p>
                    <div className="mt-10 max-w-3xl space-y-5">
                        {content.intro.map((p, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] leading-relaxed text-muted">{p}</motion.p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inclusions */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">What's Included</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {content.inclusions.map((inc, i) => (
                            <div key={i} className="card flex gap-4 p-7">
                                <CheckCircle2 className="mt-0.5 shrink-0 text-clay" size={20} />
                                <span className="text-[15px] leading-relaxed text-muted">{inc}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href={`/destinations/${dest.slug}`} className="btn-outline btn-sm"><MapPin size={14} /> Explore {dest.name}</Link>
                        <Link href="/fleet" className="btn-outline btn-sm">The Elite Fleet <ArrowRight size={14} /></Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Intelligence</p>
                    <h2 className="display-3 mt-3 text-ink">{dest.name} {lineName}</h2>
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

            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">{lineName}, Other Cities</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {otherCities.map((c) => (
                            <Link key={c.slug} href={`/services/${lineSlug}/${c.slug}`} className="btn-outline btn-sm">{c.name}</Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Service city: ${lineName} in ${dest.name}`}
                context={{ "Inquiry Type": lineName, City: dest.name, State: dest.state }}
                heading={`${lineName} in ${dest.name}`}
                pitch={`Private, chauffeured ${lineName.toLowerCase()} in ${dest.name}, planned around your dates and pace, with a transparent quote and no surprise fees. Tell us what you need and our travel desk replies within a few hours.`}
                waMessage={`Hi MyTripMyTravel, I would like ${lineName.toLowerCase()} in ${dest.name}.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Services", item: "https://www.mytripmytravel.com/services" },
                    { name: lineName, item: `https://www.mytripmytravel.com/services/${lineSlug}` },
                    { name: `${lineName} in ${dest.name}` },
                ]}
            />

            <Footer />
        </main>
    );
}
