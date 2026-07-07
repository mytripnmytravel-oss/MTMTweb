"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { packageSlug, type Package } from "@/data/tours";

const fade = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } } as const;

export default function ToursHubView({ grouped }: { grouped: { location: string; items: Package[] }[] }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x">
                    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] text-muted">
                        <Link href="/" className="hover:text-clay">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay">Tours</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">Signature itineraries</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-medium text-ink">The tour collection</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                        Every itinerary here is a starting point, not a fixed package — private, chauffeured and escorted end to end, and ready to shape around you.
                    </p>
                </div>
            </section>

            {grouped.map((group) => (
                <section key={group.location} className="section">
                    <div className="container-x">
                        <div className="mb-8 flex items-center gap-5">
                            <h2 className="display-3 text-ink">{group.location}</h2>
                            <div className="h-px flex-1 bg-line" />
                            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">{group.items.length} itineraries</span>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {group.items.map((p, idx) => (
                                <motion.div key={p.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: (idx % 3) * 0.05 }}>
                                    <Link href={`/tours/${packageSlug(p)}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium text-ink">
                                                <Clock size={12} className="text-clay" /> {p.duration}
                                            </span>
                                        </div>
                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="eyebrow">{p.theme}</div>
                                            <h3 className="mt-2 text-lg font-medium text-ink group-hover:text-clay">{p.title}</h3>
                                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{p.highlight}</p>
                                            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                                                <span className="text-lg font-medium text-ink">{p.price}</span>
                                                <span className="inline-flex items-center gap-1 text-sm font-medium text-clay">Open <ArrowRight size={14} /></span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <Footer />
        </main>
    );
}
