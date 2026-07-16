"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Region, Destination } from "@/data/destinations";

export default function RegionView({
    region,
    cities,
}: {
    region: Region;
    cities: Destination[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[64vh] min-h-[480px] items-end overflow-hidden">
                <Image src={region.heroImg} alt={`${region.name}, ${region.tagline}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />
                <div className="container-x relative z-10 pb-16 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/destinations" className="hover:text-clay-soft">Destinations</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{region.name}</span>
                    </nav>
                    <p className="eyebrow text-paper/70 mb-4">{region.tagline}</p>
                    <h1 className="display-1 font-semibold text-paper">{region.name}</h1>
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-paper/80">{region.blurb}</p>
                </div>
            </section>

            {/* Cities */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">City briefs</p>
                    <h2 className="display-2 mt-3 font-semibold text-ink">Places in {region.name}</h2>

                    {cities.length > 0 ? (
                        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {cities.map((c, idx) => (
                                <motion.div
                                    key={c.slug}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                >
                                    <Link
                                        href={`/destinations/${c.slug}`}
                                        className="group relative block h-[460px] overflow-hidden rounded-2xl"
                                    >
                                        <Image src={c.heroImg} alt={`${c.name}, ${c.state}`} fill className="object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-8">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="text-clay-soft" size={18} />
                                                <h3 className="text-2xl font-semibold text-paper">{c.name}</h3>
                                            </div>
                                            <p className="mt-2 text-[14px] leading-relaxed text-paper/70">{c.tagline}</p>
                                            <span className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-clay-soft transition-colors group-hover:text-paper">
                                                Open brief <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="card mt-12 py-24 text-center">
                            <Compass className="mx-auto mb-8 text-clay opacity-40" size={56} />
                            <h3 className="text-2xl font-semibold text-ink">Briefs in progress</h3>
                            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
                                Detailed city guides for the {region.name} corridor are being authored. Contact us
                                for a bespoke journey through this region in the meantime.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <LeadBlock
                variant="cta"
                source={`Region: ${region.name}`}
                context={{ "Inquiry Type": "Destination", Subject: region.name }}
                heading={`Plan your journey through ${region.name}`}
                subheading="Tell us your dates and travel style and we craft a private, chauffeured route through the region with a transparent quote."
                waMessage={`Hi MyTripMyTravel, I would like to plan a trip through ${region.name}.`}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                    { name: region.name },
                ]}
            />

            <Footer />
        </main>
    );
}
