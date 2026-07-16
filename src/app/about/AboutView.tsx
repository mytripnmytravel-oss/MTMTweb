"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { ShieldCheck, Compass, Heart, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";

const TEAM = [
    {
        name: "Nitesh Jain", role: "Founder", img: "/team-1.jpg",
        bio: "I started MyTripMyTravel with a simple belief, travel should be meaningful, seamless, and built on trust. After my MBA I explored different paths, from recruitment consulting to eventually finding my passion in travel, and that journey shaped how I see the world today. Travel has been my greatest teacher. With MyTripMyTravel I wanted to create more than packages, journeys people remember for a lifetime. We are a close-knit team working across several countries, and I personally oversee operations so every experience meets our standards. We don't sell the cheapest option; we deliver the right experience, with honesty, quality and attention to detail. My vision is simple: to build one of India's most trusted travel companies, chosen not just for where we take people, but for how we make them feel along the way.",
    },
    {
        name: "Sarah Sahai", role: "Market Expansion & Partnerships", img: "/team-2.jpg",
        bio: "Sarah supports MyTripMyTravel across international market expansion, strategic partnerships and business development. With a background in client relations, branding and cross-cultural engagement, she brings a people-centric approach to building lasting relationships. Having travelled widely, she has a nuanced feel for global markets, cultural dynamics and evolving traveller expectations, and helps strengthen the company's presence beyond India.",
    },
    {
        name: "Ajsal Abbas", role: "Technology Lead", img: "/team-3.jpg",
        bio: "Ajsal looks after the website and the digital enquiry experience, keeping the online side of MyTripMyTravel clear, fast and easy to use.",
    },
];

const VALUES = [
    { icon: ShieldCheck, title: "Integrity", desc: "Transparency in every quote, route and stay, no hidden fees, no surprises." },
    { icon: Compass, title: "Precision", desc: "Itineraries engineered to the detail for a frictionless, well-paced journey." },
    { icon: Heart, title: "Hospitality", desc: "Bespoke care that treats every guest as the only guest." },
    { icon: Landmark, title: "Heritage", desc: "Preserving the soul of India alongside genuinely modern comfort." },
];

const PROCESS = [
    { step: "01", title: "Plan", desc: "We translate your intent into a considered, day-by-day plan." },
    { step: "02", title: "Prepare", desc: "The fleet, chauffeurs, stays and guides are booked and briefed." },
    { step: "03", title: "Accompany", desc: "Constant coordination and a point of contact throughout the journey." },
    { step: "04", title: "Follow up", desc: "We check in afterwards, the memory should be effortless." },
];

export default function AboutView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex min-h-[70vh] items-end overflow-hidden">
                <Image src="/about-hero-1.png" alt="Luxury travel across India" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />
                <div className="container-x relative z-10 pb-16 pt-40">
                    <span className="eyebrow text-paper/70">About us</span>
                    <h1 className="display-1 mt-4 max-w-3xl font-semibold text-paper">We architect journeys, not tours.</h1>
                    <p className="mt-5 max-w-xl text-lg text-paper/80">
                        Translating chauffeured intent into calm, considered travel across India, one traveller at a time.
                    </p>
                </div>
            </section>

            {/* Genesis */}
            <section className="section">
                <div className="container-x grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Our story</p>
                        <h2 className="display-2 mt-4 text-ink">The beginning.</h2>
                        <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-muted">
                            <p>India is not a country you simply look at; it is an environment you absorb, navigate and respect, and that takes a master key. MyTripMyTravel was born from an obsession with getting the execution right: the luxury the market was missing was predictability, wrapped in absolute comfort.</p>
                            <p>We didn't just want to provide cars, we wanted to build a fleet. We didn't want to hand over an itinerary, we wanted to craft a journey.</p>
                            <p className="font-semibold text-ink">Every part of what we do, the Golden Triangle, the elite fleet, the wellness journeys, is built for one thing: your peace of mind.</p>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                        <Image src="/hero-taj.png" alt="The Taj Mahal, where our journeys begin" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="bg-ink py-20 sm:py-28">
                <div className="container-x">
                    <p className="eyebrow text-clay-soft">The team</p>
                    <h2 className="display-2 mt-3 text-paper">The people behind the journeys</h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {TEAM.map((m) => (
                            <div key={m.name} className="flex flex-col">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                                    <Image src={m.img} alt={`${m.name}, ${m.role} at MyTripMyTravel`} fill className="object-cover" />
                                </div>
                                <div className="mt-5 border-l-2 border-clay pl-4">
                                    <h3 className="text-xl font-semibold text-paper">{m.name}</h3>
                                    <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-clay-soft">{m.role}</p>
                                </div>
                                <p className="mt-4 text-[14px] leading-relaxed text-paper/60">{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">What we stand for</p>
                    <h2 className="display-2 mt-3 text-ink">Our standards</h2>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {VALUES.map((v) => {
                            const Icon = v.icon;
                            return (
                                <div key={v.title} className="card p-7">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper-dim text-clay"><Icon size={22} /></span>
                                    <h3 className="mt-5 text-xl font-semibold text-ink">{v.title}</h3>
                                    <p className="mt-2 text-[14px] leading-relaxed text-muted">{v.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">How we work</p>
                    <h2 className="display-2 mt-3 text-ink">From first note to last mile</h2>
                    <div className="mt-12 grid gap-8 md:grid-cols-4">
                        {PROCESS.map((p) => (
                            <div key={p.step} className="border-l border-line pl-6">
                                <div className="font-display text-3xl font-semibold text-line-strong">{p.step}</div>
                                <h3 className="mt-4 text-xl font-semibold text-ink">{p.title}</h3>
                                <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container-x">
                    <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-ink px-8 py-14 sm:flex-row sm:items-center sm:px-16">
                        <h2 className="display-3 max-w-md text-paper">Ready to plan your journey?</h2>
                        <Link href="/booking" className="btn rounded-full bg-paper px-7 py-3.5 text-ink hover:bg-clay hover:text-paper">Start planning <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
