"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Compass } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ROLE_AREAS = [
    { name: "Mission Architects", detail: "Bespoke itinerary design across the Golden Triangle, Rajasthan, and beyond, the people who turn an enquiry into a sequenced private mission." },
    { name: "Performance Chauffeurs", detail: "Vetted, defensively-trained drivers operating the GPS-tracked Elite Fleet to a hospitality and security standard, not a taxi standard." },
    { name: "Heritage & Experience Curators", detail: "Specialists who build the dining, guiding, and access layers, and hold the relationships that make escorted entry possible." },
    { name: "Organic Growth & Content", detail: "Editorial, SEO, and AI-surface specialists building the page and citation engine that drives qualified inquiries." },
    { name: "Guest Operations", detail: "The 24/7 desk and on-ground coordination that makes large missions and weddings run invisibly." },
];

const PRINCIPLES = [
    "Architect, don't sell, every traveller is a mission, not a transaction.",
    "Discretion and reliability over volume.",
    "Organic and earned, we don't buy attention, we deserve it.",
    "The standard is invisible logistics and a remembered experience.",
];

export default function CareersView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="container-x pt-36 pb-16 sm:pt-40">
                <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[12px] text-muted">
                    <Link href="/" className="hover:text-clay">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-clay">Careers</span>
                </nav>
                <p className="eyebrow eyebrow-accent">Join the Mission</p>
                <h1 className="display-1 font-semibold text-ink mt-5">Careers at MyTripMyTravel</h1>
                <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted">
                    We are a luxury inbound-India travel architect, building the most precise private-travel
                    operation in the country. We hire for judgement, discretion, and craft, and we
                    grow deliberately.
                </p>
            </section>

            <section className="container-x pb-8">
                <p className="eyebrow eyebrow-accent">Where We Hire</p>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {ROLE_AREAS.map((r, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.06 }} className="card p-8">
                            <h3 className="text-xl font-semibold leading-snug text-ink">{r.name}</h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-muted">{r.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="border-y border-line bg-paper-dim/60 section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">How We Work</p>
                    <div className="mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
                        {PRINCIPLES.map((p, i) => (
                            <div key={i} className="card flex gap-4 p-7">
                                <span className="shrink-0 font-display text-2xl font-semibold text-clay">0{i + 1}</span>
                                <span className="text-[16px] leading-relaxed text-muted">{p}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container-x section">
                <div className="rounded-2xl bg-ink p-12 text-center sm:p-16">
                    <Compass className="mx-auto mb-8 text-clay-soft" size={44} />
                    <h2 className="display-2 font-semibold text-paper">
                        No open posting that fits? Tell us anyway.
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-paper/70">
                        We do not run a rolling job board. We meet exceptional people before we have the role,
                        and build the role around them. Introduce yourself via the contact desk.
                    </p>
                    <div className="mt-10">
                        <Link href="/booking" className="btn-primary">
                            Introduce Yourself
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
