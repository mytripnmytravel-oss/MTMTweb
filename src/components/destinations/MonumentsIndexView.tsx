"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Destination } from "@/data/destinations";
import type { Monument } from "@/data/monuments";

export default function MonumentsIndexView({
    dest,
    monuments,
}: {
    dest: Destination;
    monuments: Monument[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="relative flex h-[52vh] min-h-[420px] items-end overflow-hidden">
                <Image src={dest.heroImg} alt={`Monuments of ${dest.name}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/destinations" className="hover:text-clay-soft">Destinations</Link>
                        <ChevronRight size={12} />
                        <Link href={`/destinations/${dest.slug}`} className="hover:text-clay-soft">{dest.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">Monuments</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">{dest.name} · Heritage sites</p>
                    <h1 className="display-1 mt-4 font-semibold text-paper">Monuments of {dest.name}</h1>
                </div>
            </section>

            <section className="section">
                <div className="container-x">
                    <p className="mb-16 max-w-3xl text-[16px] leading-relaxed text-muted">
                        Each {dest.name} monument has its own guide, history, what to see,
                        visitor protocol, and exactly how MyTripMyTravel sequences escorted access for it.
                    </p>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {monuments.map((m, idx) => (
                            <motion.div
                                key={m.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.07 }}
                            >
                                <Link
                                    href={`/destinations/${dest.slug}/monuments/${m.slug}`}
                                    className="group relative block h-[440px] overflow-hidden rounded-2xl"
                                >
                                    <Image src={m.heroImg} alt={`${m.name}, ${dest.name}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-9">
                                        <div className="mb-3 flex items-center gap-3">
                                            <Landmark className="text-clay-soft" size={18} />
                                            <span className="eyebrow eyebrow-accent">{m.type}</span>
                                        </div>
                                        <h3 className="mb-3 text-2xl font-semibold leading-tight text-paper">{m.name}</h3>
                                        <p className="mb-7 text-[15px] leading-relaxed text-paper/70">{m.tagline}</p>
                                        <span className="inline-flex items-center gap-3 text-[13px] font-semibold text-clay-soft transition-colors group-hover:text-paper">
                                            Open guide <ArrowRight size={14} />
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
                source={`Monuments index: ${dest.name}`}
                context={{ "Inquiry Type": "Destination", Subject: `Monuments of ${dest.name}` }}
                heading={`See the monuments of ${dest.name} with a private guide`}
                subheading="Tell us your dates and we sequence escorted, skip-the-queue access with a chauffeured plan and a transparent quote."
                waMessage={`Hi MyTripMyTravel, I would like to visit the monuments of ${dest.name}.`}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                    { name: dest.name, item: `https://www.mytripmytravel.com/destinations/${dest.slug}` },
                    { name: "Monuments" },
                ]}
            />

            <Footer />
        </main>
    );
}
