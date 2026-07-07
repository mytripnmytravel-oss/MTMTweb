"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ServicesHubView({
    lines, cities,
}: {
    lines: { slug: string; name: string; blurb: string }[];
    cities: { slug: string; name: string }[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x">
                    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] text-muted">
                        <Link href="/" className="hover:text-clay">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay">Services</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">Ground services</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-medium text-ink">Chauffeured ground operations</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                        Private, GPS-tracked, pre-priced transport across our hub cities, and continuous into any itinerary.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container-x grid gap-6 md:grid-cols-2">
                    {lines.map((l, idx) => (
                        <motion.div key={l.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="card p-8">
                            <h3 className="text-2xl font-medium text-ink">{l.name}</h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-muted">{l.blurb}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {cities.map((c) => (
                                    <Link key={c.slug} href={`/services/${l.slug}/${c.slug}`} className="rounded-full border border-line bg-paper-dim px-4 py-2 text-[12px] font-medium text-muted transition hover:border-ink hover:text-ink">
                                        {c.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="section pt-0">
                <div className="container-x flex flex-wrap gap-3">
                    <Link href="/fleet" className="btn-outline btn-sm">The elite fleet <ArrowRight size={14} /></Link>
                    <Link href="/tours" className="btn-outline btn-sm">Tour packages <ArrowRight size={14} /></Link>
                    <Link href="/destinations" className="btn-outline btn-sm">Destinations <ArrowRight size={14} /></Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
