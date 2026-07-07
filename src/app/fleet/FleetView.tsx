"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, MessageCircle, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FleetInquiryModal } from "@/components/FleetInquiryModal";
import { LeadCTA, WhatsAppFab } from "@/components/lead/Lead";
import { fleet, Vehicle } from "@/data/fleet";

const Pill = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
        onClick={onClick}
        className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
            active ? "bg-ink text-paper" : "border border-line bg-white text-muted hover:border-ink hover:text-ink"
        }`}
    >
        {children}
    </button>
);

export default function FleetView() {
    const [activeType, setActiveType] = useState("All");
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (v: Vehicle) => { setSelectedVehicle(v); setIsModalOpen(true); };
    const whatsapp = (v: Vehicle) => {
        const msg = `I'd like to reserve the ${v.name} (${v.type}) for a chauffeured journey. Please help me plan.`;
        window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, "_blank");
    };

    const filtered = useMemo(
        () => fleet.filter((v) => (activeType === "All" || v.type === activeType) && (activeCategory === "All" || v.category === activeCategory)),
        [activeType, activeCategory]
    );

    const vehicleTypes = ["All", ...Array.from(new Set(fleet.map((v) => v.type)))];
    const categories = ["All", "Elite", "Premium", "Standard"];

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            <FleetInquiryModal vehicle={selectedVehicle} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Hero */}
            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">The fleet</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-medium text-ink">Chauffeured, immaculate, GPS-tracked.</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                        From executive sedans to royal-convoy SUVs, every vehicle with a vetted performance-chauffeur, pre-calculated fuel, tolls and permits, and transparent pricing.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="sticky top-[60px] z-40 border-b border-line bg-paper/90 py-4 backdrop-blur-md">
                <div className="container-x flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-[12px] font-medium uppercase tracking-[0.16em] text-stone">Type</span>
                        {vehicleTypes.map((t) => <Pill key={t} active={activeType === t} onClick={() => setActiveType(t)}>{t}</Pill>)}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-[12px] font-medium uppercase tracking-[0.16em] text-stone">Class</span>
                        {categories.map((c) => <Pill key={c} active={activeCategory === c} onClick={() => setActiveCategory(c)}>{c}</Pill>)}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="section">
                <div className="container-x">
                    <AnimatePresence mode="popLayout">
                        <motion.div layout className="grid gap-8 lg:grid-cols-2">
                            {filtered.map((v) => (
                                <motion.div
                                    layout key={v.id}
                                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="card overflow-hidden"
                                >
                                    <div className="grid h-full sm:grid-cols-2">
                                        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
                                            <Image src={v.img} alt={`${v.name}, chauffeured ${v.category.toLowerCase()} ${v.type.toLowerCase()} for hire`} fill className="object-cover" />
                                            <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-medium ${v.category === "Elite" ? "bg-clay text-white" : "bg-paper/90 text-ink"}`}>
                                                {v.category}
                                            </span>
                                        </div>
                                        <div className="flex flex-col justify-between p-7">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="eyebrow">{v.type}</span>
                                                    <span className="text-stone">·</span>
                                                    <span className="text-[12px] text-muted">{v.priceRange}</span>
                                                </div>
                                                <h3 className="mt-2 text-2xl font-medium text-ink">{v.name}</h3>
                                                <p className="mt-3 text-sm leading-relaxed text-muted">{v.description}</p>
                                                <div className="mt-6 flex gap-6">
                                                    <div className="flex items-center gap-2 text-sm text-ink-soft"><Users size={16} className="text-clay" /> {v.passengers} seats</div>
                                                    <div className="flex items-center gap-2 text-sm text-ink-soft"><Briefcase size={16} className="text-clay" /> {v.luggage}</div>
                                                </div>
                                                <div className="mt-5 flex flex-wrap gap-2">
                                                    {v.features.slice(0, 4).map((f, i) => <span key={i} className="pill">{f}</span>)}
                                                </div>
                                            </div>
                                            <div className="mt-8 flex gap-3">
                                                <button onClick={() => openModal(v)} className="btn-primary flex-1">Check availability</button>
                                                <button onClick={() => whatsapp(v)} aria-label="WhatsApp" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition hover:border-ink hover:text-clay">
                                                    <MessageCircle size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filtered.length === 0 && (
                        <div className="py-24 text-center">
                            <h3 className="display-3 text-ink">No vehicles match those filters</h3>
                            <button onClick={() => { setActiveType("All"); setActiveCategory("All"); }} className="link-line mt-5 text-sm">Reset filters <ChevronRight size={15} /></button>
                        </div>
                    )}
                </div>
            </section>

            <LeadCTA
                title="Need the right vehicle for your journey?"
                subtitle="Tell us your route, dates and group size. We match the ideal chauffeured vehicle and quote it transparently, usually within a few hours."
                waMessage="Hi MyTripMyTravel, I would like to hire a chauffeured vehicle in India."
            />

            <Footer />
            <WhatsAppFab message="Hi MyTripMyTravel, I would like to hire a chauffeured vehicle in India." />
        </main>
    );
}
