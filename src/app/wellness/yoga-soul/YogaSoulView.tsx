"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wind, ArrowRight, Sun, Moon, Zap, UserCheck, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import WellnessProgrammeDetail from "@/components/wellness/WellnessProgrammeDetail";
import type { WellnessProgramme } from "@/data/wellness";
import Link from "next/link";
import Image from "next/image";

export default function YogaSoulView({ programme }: { programme: WellnessProgramme }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="container-x pb-20 pt-36 sm:pt-40">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Yoga & meditation</p>
                        <h1 className="display-1 mt-4 font-semibold text-ink">Yoga at the source</h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                            A master-led practice of movement, breath and meditation, grounded in the Indian places where these traditions took shape. Suited to every level, from first-timers finding their footing to seasoned practitioners deepening their discipline.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-6">
                            <Link href="/booking" className="btn-primary">Plan your retreat <ArrowRight size={16} /></Link>
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-dim text-clay">
                                    <UserCheck size={20} />
                                </span>
                                <span className="text-[13px] font-semibold text-ink">Master led</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[520px] w-full overflow-hidden rounded-2xl">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Yoga_Meditation%2C_Rishikesh.jpg"
                            alt="Yoga and meditation session by the Ganges in Rishikesh, India"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                    </div>
                </div>
            </section>

            {/* --- Practice Modules --- */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">The discipline</p>
                    <h2 className="display-2 mt-3 font-semibold text-ink">Four pillars of a complete practice</h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-4">
                        {[
                            { title: "Dhyana", desc: "Meditation and focused attention", icon: Sun },
                            { title: "Pranayama", desc: "Breath-work and conscious breathing", icon: Wind },
                            { title: "Asana", desc: "Postures and physical alignment", icon: Zap },
                            { title: "Nidra", desc: "Guided deep relaxation", icon: Moon }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="card p-7"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper-dim text-clay">
                                    <pillar.icon size={22} />
                                </span>
                                <h3 className="mt-5 text-xl font-semibold text-ink">{pillar.title}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-muted">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Sanctuary Archive --- */}
            <section className="section">
                <div className="container-x grid items-center gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <p className="eyebrow eyebrow-accent">Vetted geography</p>
                        <h2 className="display-2 mt-3 font-semibold text-ink">Where the soul meets.</h2>
                        <div className="mt-8 space-y-1">
                            {[
                                { place: "Rishikesh", tag: "Yoga capital of the world" },
                                { place: "Varanasi", tag: "Ancient spiritual heart" },
                                { place: "Jaipur", tag: "Palace courtyard practice" }
                            ].map((loc, i) => (
                                <div key={i} className="flex items-center justify-between gap-4 border-b border-line py-5">
                                    <span className="text-lg font-semibold text-ink">{loc.place}</span>
                                    <span className="text-[12px] font-semibold text-clay">{loc.tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 lg:col-span-8">
                        <div className="group relative h-[400px] overflow-hidden rounded-2xl">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Rishikesh_Ganga_View.jpg" alt="View of the Ganges river at Rishikesh in the Himalayan foothills" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 to-transparent p-8">
                                <p className="text-[13px] font-semibold text-paper">Himalayan foothills retreat</p>
                            </div>
                        </div>
                        <div className="group relative mt-12 h-[400px] overflow-hidden rounded-2xl">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Rambagh_Palace_hotel_Jaipur_lobby_courtyard.jpg" alt="Courtyard of Rambagh Palace in Jaipur, Rajasthan" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 to-transparent p-8">
                                <p className="text-[13px] font-semibold text-paper">Royal courtyard yoga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Authority Summary --- */}
            <section className="bg-ink py-20 sm:py-28">
                <div className="container-x text-center">
                    <div className="mx-auto max-w-3xl">
                        <Shield className="mx-auto mb-8 text-clay-soft" size={44} />
                        <h2 className="display-2 font-semibold leading-tight text-paper">
                            Authentic <span className="text-clay-soft">practice.</span>
                        </h2>
                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
                            Every yoga retreat arranged by MyTripMyTravel is led by qualified teachers with a genuine lineage, in settings chosen for their authenticity. We don't sell generic tours, we design considered, master-led practice for every level.
                        </p>
                        <Link href="/booking" className="btn mt-9 rounded-full bg-paper px-7 py-3.5 text-ink hover:bg-clay hover:text-paper">
                            Plan your retreat
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Shared programme detail: quick facts, variants, FAQ, CTA --- */}
            <WellnessProgrammeDetail programme={programme} />

            <LeadBlock
                source={`Wellness: ${programme.name}`}
                context={{ "Inquiry Type": "Wellness", Programme: programme.name }}
                heading={`Plan your ${programme.name} journey`}
                pitch={`Master-led yoga and meditation with qualified teachers of genuine lineage, private transfers and handpicked stays, arranged with honest guidance for every level. Tell us what you are looking for and we reply within a few hours with a tailored plan.`}
                waMessage={`Hi MyTripMyTravel, I am interested in ${programme.name} in India.`}
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
