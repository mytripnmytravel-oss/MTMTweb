"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MapPin, Users, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { Vehicle } from "@/data/fleet";
import type { Destination } from "@/data/destinations";
import type { FleetCityContent } from "@/data/fleetCities";

export default function FleetCityView({
    vehicle,
    dest,
    content,
    otherCities,
    otherVehicles,
}: {
    vehicle: Vehicle;
    dest: Destination;
    content: FleetCityContent;
    otherCities: { slug: string; name: string }[];
    otherVehicles: Vehicle[];
}) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[56vh] min-h-[440px] items-end overflow-hidden">
                <Image src={vehicle.img} alt={`${vehicle.name} chauffeur hire in ${dest.name}`} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/fleet" className="hover:text-clay-soft">Elite Fleet</Link>
                        <ChevronRight size={12} />
                        <Link href={`/fleet/${vehicle.id}`} className="hover:text-clay-soft">{vehicle.name}</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">in {dest.name}</span>
                    </nav>
                    <p className="eyebrow text-paper/70">{vehicle.category} {vehicle.type} · {dest.state}</p>
                    <h1 className="display-1 mt-4 font-medium text-paper">{vehicle.name} in {dest.name}</h1>
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
                    <div className="mt-10 flex flex-wrap gap-3">
                        <div className="card flex items-center gap-3 px-6 py-4">
                            <Users className="text-clay" size={18} />
                            <span className="text-[14px] font-medium text-ink">{vehicle.passengers} passengers</span>
                        </div>
                        <div className="card flex items-center gap-3 px-6 py-4">
                            <Briefcase className="text-clay" size={18} />
                            <span className="text-[14px] font-medium text-ink">{vehicle.luggage}</span>
                        </div>
                        <Link href={`/destinations/${dest.slug}`} className="btn-outline btn-sm"><MapPin size={14} /> Explore {dest.name}</Link>
                    </div>
                </div>
            </section>

            {content.faqs.length > 0 && (
                <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Intelligence</p>
                        <h2 className="display-3 mt-3 text-ink">{vehicle.name} · {dest.name}</h2>
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

            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">{vehicle.name} in Other Cities</p>
                    <div className="mb-12 mt-6 flex flex-wrap gap-3">
                        {otherCities.map((c) => (
                            <Link key={c.slug} href={`/fleet/${vehicle.id}/in/${c.slug}`} className="btn-outline btn-sm">{c.name}</Link>
                        ))}
                    </div>
                    <p className="eyebrow eyebrow-accent">Other Vehicles in {dest.name}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {otherVehicles.map((v) => (
                            <Link key={v.id} href={`/fleet/${v.id}/in/${dest.slug}`} className="btn-outline btn-sm">{v.name}</Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`Fleet city: ${vehicle.name} in ${dest.name}`}
                context={{ "Inquiry Type": "Car rental", Vehicle: vehicle.name, City: dest.name }}
                heading={`Hire the ${vehicle.name} in ${dest.name}`}
                pitch={`Private, GPS-tracked, chauffeur-driven ${vehicle.name} in ${dest.name}, with fuel, tolls and permits pre calculated. Tell us your route and dates and we reply with a transparent quote.`}
                waMessage={`Hi MyTripMyTravel, I would like to hire the ${vehicle.name} in ${dest.name}.`}
                faqs={content.faqs}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Fleet", item: "https://www.mytripmytravel.com/fleet" },
                    { name: vehicle.name, item: `https://www.mytripmytravel.com/fleet/${vehicle.id}` },
                    { name: `${vehicle.name} in ${dest.name}` },
                ]}
            />

            <Footer />
        </main>
    );
}
