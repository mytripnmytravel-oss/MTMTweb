"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, CheckCircle2, Plane } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Destination } from "@/data/destinations";
import type { CorporateRoute, CorporateRouteContent } from "@/data/corporateRoutes";

export default function CorporateRouteView({
    route,
    destination,
    content,
}: {
    route: CorporateRoute;
    destination: Destination;
    content: CorporateRouteContent;
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[56vh] min-h-[440px] items-end overflow-hidden">
                <Image src={destination.heroImg} alt={content.h1} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/corporate" className="hover:text-clay-soft">Corporate</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{route.originLabel} → {destination.name}</span>
                    </nav>
                    <p className="eyebrow text-paper/70">Corporate Offsite Route</p>
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
                            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] leading-relaxed text-muted">{p}</motion.p>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <div className="card flex items-center gap-3 px-6 py-4">
                            <Plane className="text-clay" size={18} />
                            <span className="text-[14px] font-semibold text-ink">Fly: {route.originGateway} → {destination.name}</span>
                        </div>
                        <div className="card flex items-center gap-3 px-6 py-4">
                            <span className="text-[14px] font-semibold text-ink">Ground operation: MyTripMyTravel</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inclusions */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">On-Ground Inclusions in {destination.name}</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {content.inclusions.map((inc, i) => (
                            <div key={i} className="card flex gap-4 p-7">
                                <CheckCircle2 className="mt-0.5 shrink-0 text-clay" size={20} />
                                <span className="text-[15px] leading-relaxed text-muted">{inc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Intelligence</p>
                    <h2 className="display-3 mt-3 text-ink">{route.originLabel} → {destination.name} FAQ</h2>
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
                    <p className="eyebrow eyebrow-accent">Continue planning</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link href="/corporate" className="btn-outline btn-sm">Corporate hub</Link>
                        <Link href="/corporate/by-team-size" className="btn-outline btn-sm">By team size</Link>
                        <Link href="/corporate/events" className="btn-outline btn-sm">Event types</Link>
                        <Link href={`/destinations/${destination.slug}`} className="btn-outline btn-sm">{destination.name} brief</Link>
                        <Link href="/services/group-transport" className="btn-outline btn-sm">Group transport <ArrowRight size={14} /></Link>
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Corporate route: ${route.originLabel} to ${destination.name}`}
                context={{ "Inquiry Type": "Corporate offsite", From: route.originLabel, To: destination.name }}
                heading={`Plan your ${route.originLabel} to ${destination.name} offsite`}
                pitch={`Fully managed ground operation in ${destination.name} for teams flying from ${route.originLabel}, with transfers, hotels and on-ground logistics handled end to end. Tell us your team size and dates and our corporate desk replies within a few hours.`}
                waMessage={`Hi MyTripMyTravel, I would like to plan a corporate offsite from ${route.originLabel} to ${destination.name}.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Corporate", item: "https://www.mytripmytravel.com/corporate" },
                    { name: `${route.originLabel} to ${destination.name}` },
                ]}
            />

            <Footer />
        </main>
    );
}
