"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Waves, Compass, ShieldCheck, Star,
    Anchor, Droplets, Sunset
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import { packages } from "@/data/tours";

export default function AndamanView() {
    const andamanTour = packages.find(p => p.id === 28) || packages[0];

    const stats = [
        { icon: <Waves size={20} />, label: "7 Days", detail: "Island Itinerary" },
        { icon: <Droplets size={20} />, label: "3 Islands", detail: "Port Blair, Havelock, Neil" },
        { icon: <Compass size={20} />, label: "Private", detail: "Concierge Led" },
        { icon: <Sunset size={20} />, label: "Beachside", detail: "Curated Stays" }
    ];

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/7/71/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman%2C_India.jpg"
                        alt="Radhanagar Beach, Havelock Island, Andaman"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/25 to-ink/85" />
                </motion.div>

                <div className="container-x relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="eyebrow eyebrow-accent justify-center">Island Sanctuary</p>
                        <h1 className="display-1 mt-5 font-medium text-paper">Andaman Expedition</h1>
                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + (i * 0.1) }}
                                    className="flex items-center gap-4 rounded-2xl border border-line bg-paper/90 px-6 py-4 text-ink backdrop-blur-md md:px-8 md:py-6"
                                >
                                    <div className="text-clay">{stat.icon}</div>
                                    <div className="text-left">
                                        <div className="text-[12px] text-muted">{stat.detail}</div>
                                        <div className="text-sm font-medium text-ink md:text-lg">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
                >
                    <div className="h-12 w-px bg-gradient-to-b from-paper/60 to-transparent" />
                    <span className="text-[11px] font-medium tracking-[0.22em] text-clay-soft">Scroll to explore</span>
                </motion.div>
            </section>

            {/* Itinerary Section */}
            <section className="section">
                <div className="container-x">
                    <div className="grid items-start gap-20 lg:grid-cols-2">
                        <div className="lg:sticky lg:top-32">
                            <p className="eyebrow eyebrow-accent">Strategic Deployment</p>
                            <h2 className="display-2 mt-4 font-medium text-ink">The Master Itinerary</h2>
                            <p className="mt-6 text-[17px] leading-relaxed text-muted md:text-[19px]">
                                Our Andaman plan is designed for those who demand pristine environments and zero-friction logistics in the heart of the Bay of Bengal.
                            </p>

                            <div className="my-12 space-y-6">
                                <div className="flex items-center gap-6 rounded-2xl border border-line bg-paper-dim/60 p-7">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ink text-paper">
                                        <ShieldCheck size={30} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-ink">Elite Logistics</h3>
                                        <p className="mt-1 text-[14px] leading-relaxed text-muted">Private cruise and island shuttles</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 rounded-2xl border border-line bg-paper-dim/60 p-7">
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-clay text-paper">
                                        <Star size={30} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-ink">Premium Stays</h3>
                                        <p className="mt-1 text-[14px] leading-relaxed text-muted">Luxury eco-retreats</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    const msg = "ANDAMAN EXPEDITION: I am inquiring about the 7-Day Island Adventure protocol.";
                                    window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, '_blank');
                                }}
                                className="btn-primary group w-full py-4"
                            >
                                Start your inquiry <Anchor size={18} className="transition-transform group-hover:rotate-12" />
                            </button>
                        </div>

                        <div className="space-y-12">
                            {andamanTour.itinerary.map((day, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative border-l border-line pb-12 pl-12 last:border-0 md:pl-20"
                                >
                                    <div className="absolute left-0 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-ink bg-paper text-[11px] font-medium">
                                        {day.day}
                                    </div>
                                    <p className="eyebrow eyebrow-accent">Day {day.day}</p>
                                    <h3 className="mt-3 text-2xl font-medium text-ink md:text-3xl">
                                        {idx === 0 ? "Strategic Arrival" :
                                         idx === 1 ? "Island Deployment" :
                                         idx === 2 ? "Marine Operations" :
                                         idx === 3 ? "Secondary Base Shift" :
                                         idx === 4 ? "HQ Retreat" :
                                         idx === 5 ? "Environmental Recon" : "Final Extraction"}
                                    </h3>
                                    <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-[16px]">
                                        {day.plan}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Marine Fleet Selection */}
            <section className="bg-ink py-20 text-paper sm:py-28">
                <div className="container-x">
                    <div className="mb-16 text-center">
                        <p className="eyebrow eyebrow-accent justify-center">Sea Assets</p>
                        <h2 className="display-2 mt-4 font-medium text-paper">Marine Fleet Selection</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-paper/70">
                            From private catamarans to high-speed luxury shuttles, our marine wing ensures your inter-island transition is as refined as our land-based journeys.
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2">
                        {[
                            { title: "Elite Catamaran", desc: "Private charter for multi-island luxury voyages. Includes on-board chef and marine concierge.", img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Catamaran_Cruising.jpg" },
                            { title: "Vector Speedboat", desc: "Fast, direct transit for prioritized inter-island journeys. Zero-friction logistics.", img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Speedboat_in_the_ocean.jpg" }
                        ].map((asset, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative h-[500px] overflow-hidden rounded-2xl border border-white/10"
                            >
                                <Image src={asset.img} alt={`${asset.title}, private inter-island transfer, Andaman`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/50 to-transparent p-10">
                                    <h3 className="mb-3 text-2xl font-medium text-paper">{asset.title}</h3>
                                    <p className="text-[15px] leading-relaxed text-paper/70">{asset.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational FAQ Section */}
            <section className="section">
                <div className="container-x">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-12">
                            <p className="eyebrow eyebrow-accent">Good to know</p>
                            <h2 className="display-2 mt-4 font-medium text-ink">Frequently asked questions</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { q: "Is mobile connectivity available across all islands?", a: "Port Blair and Havelock generally offer stable mobile data, while some remote areas have limited coverage. We plan around this and keep backup communication for coordination." },
                                { q: "What is the best timeline for an Andaman Expedition?", a: "The optimal window is between October and May, characterized by calmer Andaman Sea conditions and good visibility for diving and snorkelling." },
                                { q: "Can we customize the inter-island transfer timing?", a: "Yes. We coordinate around your preferred rhythm, though certain marine transfers are subject to local harbour authority schedules." }
                            ].map((faq, idx) => (
                                <div key={idx} className="card p-7">
                                    <h3 className="text-[17px] font-medium text-ink">{faq.q}</h3>
                                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <LeadBlock
                source="Destination: Andaman Islands expedition"
                context={{ "Inquiry Type": "Destination", Destination: "Andaman Islands", Region: "Andaman and Nicobar" }}
                heading="Plan your Andaman Islands trip"
                pitch="Private, concierge-led island travel across Port Blair, Havelock, and Neil, with premium stays and smooth inter-island transfers. Tell us your dates and party size, and we reply with a tailored plan and a transparent quote."
                waMessage="Hi MyTripMyTravel, I would like to plan an Andaman Islands trip."
                faqs={[
                    { q: "Is mobile connectivity available across all islands?", a: "Port Blair and Havelock generally offer stable mobile data, while some remote areas have limited coverage. We plan around this and keep backup communication for coordination." },
                    { q: "What is the best timeline for an Andaman Expedition?", a: "The optimal window is between October and May, characterized by calmer Andaman Sea conditions and good visibility for diving and snorkelling." },
                    { q: "Can we customize the inter-island transfer timing?", a: "Yes. We coordinate around your preferred rhythm, though certain marine transfers are subject to local harbour authority schedules." },
                ]}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
                    { name: "Andaman Islands" },
                ]}
            />

            <Footer />
        </main>
    );
}
