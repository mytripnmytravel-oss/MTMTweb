"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Users, Briefcase, CheckCircle2, Gauge } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Vehicle, VehicleContent } from "@/data/fleet";

export default function FleetDetailView({
    vehicle,
    content,
    related,
    cities = [],
}: {
    vehicle: Vehicle;
    content: VehicleContent;
    related: Vehicle[];
    cities?: { slug: string; name: string }[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[64vh] min-h-[460px] items-end overflow-hidden">
                <Image src={vehicle.img} alt={`${vehicle.name}, chauffeured ${vehicle.type}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
                <div className="container-x relative z-10 pb-16 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/fleet" className="hover:text-clay-soft">Elite Fleet</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{vehicle.name}</span>
                    </nav>
                    <p className="eyebrow text-paper/70">{vehicle.category} · {vehicle.type}</p>
                    <h1 className="display-1 mt-4 font-medium text-paper">{vehicle.name}</h1>
                </div>
            </section>

            {/* Brief */}
            <section className="section">
                <div className="container-x max-w-5xl">
                    <p className="eyebrow eyebrow-accent">The Brief</p>
                    <p className="mt-5 font-display text-[26px] font-medium leading-snug text-ink sm:text-[32px]">{content.answer}</p>
                    <div className="mt-10 max-w-3xl space-y-5">
                        {content.intro.map((para, i) => (
                            <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[17px] leading-relaxed text-muted">
                                {para}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specs */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="card p-6">
                            <Users className="text-clay" size={22} />
                            <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-stone">Capacity</p>
                            <p className="mt-1 text-[17px] font-medium text-ink">{vehicle.passengers} passengers</p>
                        </div>
                        <div className="card p-6">
                            <Briefcase className="text-clay" size={22} />
                            <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-stone">Luggage</p>
                            <p className="mt-1 text-[17px] font-medium text-ink">{vehicle.luggage}</p>
                        </div>
                        <div className="card p-6">
                            <Gauge className="text-clay" size={22} />
                            <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-stone">Class</p>
                            <p className="mt-1 text-[17px] font-medium text-ink">{vehicle.category} {vehicle.type}</p>
                        </div>
                        <div className="card p-6">
                            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-stone">Pricing band</p>
                            <p className="mt-1 text-[17px] font-medium text-ink">{vehicle.priceRange}</p>
                        </div>
                    </div>
                    <p className="eyebrow eyebrow-accent mt-12">Configuration</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {vehicle.features.map((f, i) => (
                            <span key={i} className="pill flex items-center gap-2"><CheckCircle2 size={14} className="text-clay" /> {f}</span>
                        ))}
                    </div>
                </div>
            </section>

            {content.faqs.length > 0 && (
                <section className="section">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Intelligence</p>
                        <h2 className="display-3 mt-3 text-ink">{vehicle.name} FAQ</h2>
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
            )}

            {cities.length > 0 && (
                <section className="section pt-0">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">{vehicle.name}, Local Chauffeur Hire</p>
                        <h2 className="display-3 mt-3 text-ink">By city</h2>
                        <div className="mt-8 flex flex-wrap gap-3">
                            {cities.map((c) => (
                                <Link key={c.slug} href={`/fleet/${vehicle.id}/in/${c.slug}`} className="btn-outline btn-sm">
                                    {vehicle.name} in {c.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Related */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">More of the Fleet</p>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {related.map((r) => (
                            <Link key={r.id} href={`/fleet/${r.id}`} className="card group overflow-hidden">
                                <div className="relative h-48">
                                    <Image src={r.img} alt={r.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                                    <div className="absolute bottom-5 left-6">
                                        <p className="eyebrow text-paper/80">{r.category}</p>
                                        <h3 className="mt-1 text-xl font-medium text-paper">{r.name}</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-6">
                                    <span className="text-[12px] text-muted">{r.type}</span>
                                    <ArrowRight size={16} className="text-clay" />
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <Link href="/fleet" className="btn-outline btn-sm">Full Elite Fleet <ArrowRight size={14} /></Link>
                        <Link href="/tours/golden-triangle" className="btn-outline btn-sm">Golden Triangle tours <ArrowRight size={14} /></Link>
                        <Link href="/destinations" className="btn-outline btn-sm">Destination archive <ArrowRight size={14} /></Link>
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Fleet vehicle: ${vehicle.name}`}
                context={{ "Inquiry Type": "Car rental", Vehicle: vehicle.name, Class: `${vehicle.category} ${vehicle.type}` }}
                heading={`Hire the ${vehicle.name}`}
                pitch={`Private, chauffeur-driven ${vehicle.name}, a ${vehicle.category} ${vehicle.type} for ${vehicle.passengers} passengers, with fuel, tolls and permits pre calculated. Tell us your route and dates and we reply with a transparent quote.`}
                waMessage={`Hi MyTripMyTravel, I would like to hire the ${vehicle.name}.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Fleet", item: "https://www.mytripmytravel.com/fleet" },
                    { name: vehicle.name },
                ]}
            />

            <Footer />
        </main>
    );
}
