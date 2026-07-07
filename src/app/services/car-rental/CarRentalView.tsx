"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fade = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } } as const;

const FLEET = [
    { title: "Executive sedan", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop", capacity: "4 guests", luggage: "2 to 3 bags", description: "Premium Maruti Dzire or Toyota Etios for swift city transfers and business arrivals." },
    { title: "Premium SUV", image: "https://images.unsplash.com/photo-1627927141576-0256f4c21ab1?q=80&w=1200&auto=format&fit=crop", capacity: "6 guests", luggage: "4 to 5 bags", description: "The Toyota Innova Crysta, excellent AC and legroom for long highway hauls." },
    { title: "Luxury SUV", image: "https://images.unsplash.com/photo-1574701427742-acc058398496?q=80&w=1200&auto=format&fit=crop", capacity: "6 guests", luggage: "4 bags", description: "The Toyota Fortuner, commanding presence for VIP arrivals and state visits." },
    { title: "Large group", image: "https://images.unsplash.com/photo-1758292109543-a5c7f0c4cb9b?q=80&w=1200&auto=format&fit=crop", capacity: "12 to 20 guests", luggage: "15+ bags", description: "Force Tempo Traveller with dedicated luggage racks and reclining pilot seats." },
];

export default function CarRentalView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="relative flex h-[64vh] min-h-[440px] items-end overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1627927141576-0256f4c21ab1?q=80&w=1600&auto=format&fit=crop" alt="Chauffeur-driven SUV for a Golden Triangle road journey" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/15" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <p className="eyebrow text-paper/70">Chauffeured car rental</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-medium text-paper">A private fleet, always chauffeured.</h1>
                    <p className="mt-5 max-w-xl text-lg text-paper/80">Performance and comfort with a vetted driver, never self-drive.</p>
                    <div className="mt-6 flex flex-wrap gap-5">
                        {["GPS tracking", "Onboard WiFi", "Vetted crew"].map((t) => (
                            <span key={t} className="flex items-center gap-2 text-[13px] font-medium text-paper/85"><CheckCircle2 size={16} className="text-clay-soft" /> {t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet grid */}
            <section className="section">
                <div className="container-x">
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                        <div>
                            <p className="eyebrow eyebrow-accent">The fleet</p>
                            <h2 className="display-2 mt-3 text-ink">Choose your vehicle</h2>
                        </div>
                        <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
                            <ShieldCheck className="shrink-0 text-clay" size={32} />
                            <span className="max-w-[240px] text-[13px] leading-relaxed text-muted">Every rental is GPS-tracked, with a vetted professional chauffeur.</span>
                        </div>
                    </div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="mt-12 grid gap-6 md:grid-cols-2">
                        {FLEET.map((car, idx) => (
                            <motion.div key={idx} variants={fade} className="card overflow-hidden">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image src={car.image} alt={`${car.title}, chauffeur-driven ${car.capacity} rental in India`} fill className="object-cover" />
                                    <span className="absolute left-4 top-4 rounded-full bg-clay px-3 py-1 text-[11px] font-medium text-paper">Chauffeured</span>
                                </div>
                                <div className="p-7">
                                    <h3 className="text-2xl font-medium text-ink">{car.title}</h3>
                                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{car.description}</p>
                                    <div className="mt-6 flex gap-8">
                                        <div className="flex items-center gap-2 text-sm text-ink-soft"><Users size={17} className="text-clay" /> {car.capacity}</div>
                                        <div className="flex items-center gap-2 text-sm text-ink-soft"><Briefcase size={17} className="text-clay" /> {car.luggage}</div>
                                    </div>
                                    <a href={`https://wa.me/919997812237?text=${encodeURIComponent(`I'm interested in booking the ${car.title}.`)}`} target="_blank" rel="noopener noreferrer"
                                        className="btn-primary mt-6 w-full"><MessageCircle size={17} /> Book a chauffeur</a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section pt-0">
                <div className="container-x">
                    <div className="flex flex-col items-center gap-8 rounded-3xl bg-ink px-8 py-16 text-center sm:px-16">
                        <h2 className="display-2 max-w-2xl text-paper">Ready for the road?</h2>
                        <p className="max-w-xl text-paper/75">Secure your chauffeur-driven vehicle for complete peace of mind.</p>
                        <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                            <Link href="/booking" className="btn flex-1 rounded-full bg-paper px-7 py-3.5 text-ink hover:bg-clay hover:text-paper">Get pricing</Link>
                            <a href="https://wa.me/919997812237" target="_blank" rel="noopener noreferrer" className="btn flex-1 rounded-full border border-white/25 px-7 py-3.5 text-paper hover:bg-paper hover:text-ink">Contact the desk <ArrowRight size={15} /></a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
