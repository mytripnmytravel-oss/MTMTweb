"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Region, Destination } from "@/data/destinations";

export default function DestinationsHubView({
    regions,
    featured,
}: {
    regions: Region[];
    featured: Destination[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="container-x pb-24 pt-40 sm:pt-48">
                <div className="mx-auto mb-20 max-w-4xl text-center">
                    <p className="eyebrow eyebrow-accent">Global geographies</p>
                    <h1 className="display-1 mt-5 font-medium text-ink">Destination Archive</h1>
                    <p className="mt-6 text-[17px] leading-relaxed text-muted">
                        Our vetted travel regions across the Indian subcontinent. Every region is a curated
                        journey, chauffeured, escorted, and sequenced for the light. We
                        operate only where we can guarantee absolute luxury and security.
                    </p>
                </div>

                {/* Region grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {regions.map((region, idx) => (
                        <motion.div
                            key={region.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="group relative h-[500px] overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={region.heroImg}
                                alt={`${region.name}, ${region.tagline}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-10">
                                <div className="mb-3 flex items-center gap-3">
                                    <MapPin className="text-clay-soft" size={20} />
                                    <h3 className="text-2xl font-medium text-paper">
                                        {region.name}
                                    </h3>
                                </div>
                                <p className="eyebrow eyebrow-accent mb-3">
                                    {region.tagline}
                                </p>
                                <p className="mb-8 text-[15px] leading-relaxed text-paper/70">
                                    {region.blurb}
                                </p>
                                <Link
                                    href={`/destinations/region/${region.slug}`}
                                    className="inline-flex items-center gap-3 text-[13px] font-medium text-clay-soft transition-colors hover:text-paper"
                                >
                                    Explore region <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured cities, interlinking surface */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-28">
                <div className="container-x">
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <p className="eyebrow eyebrow-accent">Primary city briefs</p>
                        <h2 className="display-2 mt-4 font-medium text-ink">The Definitive Stops</h2>
                        <p className="mt-5 text-[16px] leading-relaxed text-muted">
                            Each city below has a full guide, best time, how to reach,
                            what to do, where to stay and dine, and the journeys that run through it.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {featured.map((city, idx) => (
                            <motion.div
                                key={city.slug}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.06 }}
                            >
                                <Link
                                    href={`/destinations/${city.slug}`}
                                    className="card card-hover block overflow-hidden"
                                >
                                    <div className="relative h-60">
                                        <Image
                                            src={city.heroImg}
                                            alt={`${city.name}, ${city.state}`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute right-5 top-5 rounded-full bg-ink/80 px-4 py-1.5 backdrop-blur-md">
                                            <span className="text-[11px] font-medium text-paper">
                                                {city.region}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-7">
                                        <p className="eyebrow eyebrow-accent mb-2">
                                            {city.state}
                                        </p>
                                        <h3 className="mb-3 text-2xl font-medium leading-tight text-ink">
                                            {city.name}
                                        </h3>
                                        <p className="mb-6 line-clamp-2 text-[15px] leading-relaxed text-muted">
                                            {city.tagline}
                                        </p>
                                        <span className="flex items-center gap-2 text-[13px] font-medium text-muted">
                                            Open guide <ChevronRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                variant="cta"
                source="Destinations hub"
                heading="Ready to plan your India journey?"
                subheading="Tell us where you want to go and we craft a private, chauffeured itinerary with a transparent quote."
                waMessage="Hi MyTripMyTravel, I would like help planning a trip across India."
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Destinations" },
                ]}
            />

            <Footer />
        </main>
    );
}
