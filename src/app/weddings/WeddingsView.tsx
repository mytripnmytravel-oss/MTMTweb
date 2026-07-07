"use client";

import React from "react";
import { motion } from "framer-motion";
import { Castle, Gem, Shield, Crown, MapPin, Users, HeartHandshake, ArrowRight, Music, Camera, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } } as const;

const VENUES = [
    { title: "Rajputana palaces", desc: "Centuries-old royal courts in Jaipur, Udaipur and Jodhpur — maximum architectural grandeur and historical weight.", icon: Castle, features: ["Palace courtyards", "Baraat processions", "Heritage suites"], image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Umaid_Bhawan_Palace%2C_Jodhpur.JPG", alt: "Umaid Bhawan Palace, Jodhpur — a Rajput palace wedding venue" },
    { title: "Beside the Taj", desc: "Luxury hotel settings overlooking the Taj Mahal — considered logistics beside the ultimate monument to love.", icon: Gem, features: ["Monument views", "Curated catering", "Arrival transfers"], image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg", alt: "The Taj Mahal at sunrise, backdrop for an Agra wedding" },
    { title: "Imperial forts", desc: "Elevated fortresses offering complete exclusivity, privacy and panoramic views of the Aravalli range.", icon: Crown, features: ["Full exclusivity", "Historical setting", "Discreet security"], image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jodhpur-Mehrangarh_Fort-06-Blue_city-20131011.jpg", alt: "Mehrangarh Fort above Jodhpur, a heritage fort wedding setting" },
];

const LOGISTICS = [
    { title: "Coordinated fleet transfers", desc: "Luxury ground transport from every major Indian airport to venue.", icon: MapPin },
    { title: "VIP concierge", desc: "Dedicated attachés for key family members and honoured guests.", icon: Users },
    { title: "Discreet security", desc: "Professional, low-profile security coordination and guest privacy.", icon: Shield },
    { title: "Culinary orchestration", desc: "Catering that handles complex dietary requirements at scale.", icon: Utensils },
];

const EXTRAS = [
    { icon: Music, title: "Sound & artists", desc: "Artist procurement and professional-grade acoustics." },
    { icon: Camera, title: "Film & photography", desc: "Documentary film crews for the wedding archive." },
    { icon: HeartHandshake, title: "Vendor coordination", desc: "A single point of contact across every vendor." },
    { icon: Crown, title: "Multi-day ceremonies", desc: "Considered execution across the full production." },
];

export default function WeddingsView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="section pt-36 sm:pt-40">
                <div className="container-x max-w-4xl">
                    <p className="eyebrow eyebrow-accent">Weddings</p>
                    <h1 className="display-1 mt-4 font-medium text-ink">Royal weddings, orchestrated.</h1>
                    <div className="mt-6 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <p className="max-w-2xl text-lg leading-relaxed text-muted">
                            We don't simply plan events — we run complete productions. Venue buyouts, coordinated air and ground transit, and discreet professional security for a considered Indian royal wedding.
                        </p>
                        <Link href="/booking" className="btn-primary shrink-0">Start planning <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            {/* Venues */}
            <section className="section pt-0">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Venue types</p>
                    <h2 className="display-2 mt-3 text-ink">Heritage settings</h2>
                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {VENUES.map((v, idx) => {
                            const Icon = v.icon;
                            return (
                                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="card card-hover group overflow-hidden">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image src={v.image} alt={v.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                    </div>
                                    <div className="p-7">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper-dim text-clay"><Icon size={22} /></span>
                                        <h3 className="mt-5 text-2xl font-medium text-ink">{v.title}</h3>
                                        <p className="mt-3 text-[15px] leading-relaxed text-muted">{v.desc}</p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {v.features.map((f) => <span key={f} className="pill">{f}</span>)}
                                        </div>
                                        <Link href="/booking" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-clay">Enquire about this venue <ArrowRight size={15} /></Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Logistics */}
            <section className="bg-ink py-20 sm:py-28">
                <div className="container-x grid gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow text-clay-soft">How we run it</p>
                        <h2 className="display-2 mt-3 text-paper">One point of command.</h2>
                        <p className="mt-5 max-w-lg leading-relaxed text-paper/70">
                            Large, multi-day celebrations demand meticulous coordination. From arrival to the last farewell, we are your single accountable lead.
                        </p>
                        <div className="mt-8 space-y-4">
                            {LOGISTICS.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-clay text-paper"><Icon size={18} /></span>
                                        <div>
                                            <h5 className="text-base font-medium text-paper">{s.title}</h5>
                                            <p className="mt-1 text-[13px] leading-relaxed text-paper/50">{s.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 self-start">
                        {EXTRAS.map((e, i) => {
                            const Icon = e.icon;
                            return (
                                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                                    <Icon className="text-clay-soft" size={28} />
                                    <h5 className="mt-5 text-base font-medium text-paper">{e.title}</h5>
                                    <p className="mt-1 text-[13px] leading-relaxed text-paper/50">{e.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container-x">
                    <div className="rounded-3xl bg-paper-dim/70 px-8 py-16 text-center sm:px-16">
                        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-clay"><Gem size={28} /></span>
                        <h2 className="display-2 mx-auto mt-8 max-w-2xl text-ink">Let's begin the planning.</h2>
                        <p className="mx-auto mt-4 max-w-xl text-muted">Royal wedding productions typically need several months' lead time for venue buyouts and coordination.</p>
                        <Link href="/booking" className="btn-primary mt-8">Schedule a confidential briefing <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
