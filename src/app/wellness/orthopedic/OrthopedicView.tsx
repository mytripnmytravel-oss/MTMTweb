"use client";

import React from "react";
import { Stethoscope, Activity, ShieldCheck, HeartPulse, Building2, ArrowRight, Tablets, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import WellnessProgrammeDetail from "@/components/wellness/WellnessProgrammeDetail";
import type { WellnessProgramme } from "@/data/wellness";
import Link from "next/link";
import Image from "next/image";

export default function OrthopedicView({ programme }: { programme: WellnessProgramme }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="container-x pb-20 pt-36 sm:pt-40">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Travel & recovery logistics</p>
                        <h1 className="display-1 mt-4 font-medium text-ink">Orthopedic recovery</h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                            We are travel architects, not a medical provider. Around orthopedic treatment you arrange with accredited hospitals and surgeons of your choice, we design the luxury transit, accommodation and gentle-paced recovery logistics that make the journey comfortable.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-6">
                            <Link href="/booking" className="btn-primary">Plan a programme <ArrowRight size={16} /></Link>
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-dim text-clay">
                                    <Building2 size={20} />
                                </span>
                                <span className="text-[13px] font-medium text-ink">Near accredited hospitals</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-line bg-paper-dim/60">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/3/30/Hospital_Room_Interior.jpg"
                            alt="Interior of a modern private hospital room in India"
                            fill
                            className="object-cover opacity-15"
                        />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="text-center">
                                <HeartPulse className="mx-auto mb-6 text-clay" size={64} />
                                <h3 className="text-2xl font-medium text-ink">Recovery, orchestrated</h3>
                                <p className="mt-2 text-[13px] font-medium text-muted">Logistics you can trust</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Clinical Pillars --- */}
            <section className="section">
                <div className="container-x grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <h2 className="display-2 font-medium text-ink">How we help.</h2>
                        <p className="mt-6 text-[16px] leading-relaxed text-muted">
                            A dedicated travel coordinator manages your itinerary from arrival to departure, flights, transfers, stays and paced rest days, so the non-medical side of recovery runs smoothly while your clinical care stays entirely with your chosen providers.
                        </p>
                        <div className="mt-8 rounded-2xl border border-line bg-paper-dim/60 p-7">
                            <h3 className="flex items-center gap-2 text-[13px] font-medium text-ink">
                                <Award size={16} className="text-clay" /> Accredited partners
                            </h3>
                            <p className="mt-3 text-[13px] leading-relaxed text-muted">
                                We help you stay near JCI and NABH accredited facilities. All treatment decisions and outcomes rest with the hospitals and surgeons you engage directly.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:col-span-2">
                        {[
                            { title: "Joint Care Journeys", desc: "Comfortable stays and transfers around hip, knee and shoulder procedures your surgeons perform.", icon: Activity },
                            { title: "Spinal Care Journeys", desc: "Gentle-paced itineraries and accessible accommodation for those travelling for spinal treatment.", icon: ShieldCheck },
                            { title: "Concierge Coordination", desc: "A single point of contact for appointments logistics, documents and on-ground support.", icon: Stethoscope },
                            { title: "Recovery Retreats", desc: "Restful, well-appointed accommodation and slow travel for the recuperation period.", icon: Tablets }
                        ].map((spec, i) => (
                            <div key={i} className="card p-7">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper-dim text-clay">
                                    <spec.icon size={22} />
                                </span>
                                <h3 className="mt-5 text-xl font-medium text-ink">{spec.title}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-muted">{spec.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Location Grid --- */}
            <section className="bg-ink py-20 sm:py-28">
                <div className="container-x">
                    <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
                        <div>
                            <p className="eyebrow text-clay-soft">Where we base you</p>
                            <h2 className="display-2 mt-4 font-medium text-paper">Primary gateways</h2>
                        </div>
                        <p className="max-w-md text-[16px] leading-relaxed text-paper/70 md:text-right">
                            Cities chosen for their international connectivity and their concentration of accredited hospitals.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { city: "New Delhi", desc: "Well-connected gateway with many accredited hospitals nearby.", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Humayun%27s_tomb_at_sunset.jpg" },
                            { city: "Agra", desc: "A restful Golden Triangle base for recovery stays.", img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg" },
                            { city: "Bengaluru", desc: "A major hub home to leading accredited medical facilities.", img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Vidhana_Soudha_Bengaluru.jpg" }
                        ].map((loc, i) => (
                            <div key={i} className="group relative h-[400px] overflow-hidden rounded-2xl">
                                <Image src={loc.img} alt={`Landmark view of ${loc.city}, India`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/20 to-transparent p-8">
                                    <h3 className="text-2xl font-medium text-paper">{loc.city}</h3>
                                    <p className="mt-2 text-[13px] text-paper/70">{loc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Shared programme detail: quick facts, variants, FAQ, CTA --- */}
            <WellnessProgrammeDetail programme={programme} />

            <LeadBlock
                source={`Wellness: ${programme.name}`}
                context={{ "Inquiry Type": "Wellness", Programme: programme.name }}
                heading={`Plan your ${programme.name} journey`}
                pitch={`We are travel architects, not a medical provider. Around treatment you arrange with JCI and NABH accredited hospitals and surgeons of your choice, we design private transfers, accessible stays and gentle-paced recovery logistics, with honest guidance throughout. Tell us what you are looking for and we reply within a few hours with a tailored plan.`}
                waMessage={`Hi MyTripMyTravel, I am interested in ${programme.name} logistics in India.`}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Wellness", item: "https://www.mytripmytravel.com/wellness" },
                    { name: programme.name },
                ]}
            />

            <Footer />
        </main>
    );
}
