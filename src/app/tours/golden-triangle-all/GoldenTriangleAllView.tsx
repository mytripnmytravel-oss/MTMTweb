"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Filter, Clock, Star, ShieldCheck, Calendar, MessageCircle,
    Map, Sparkles, ArrowRight, ArrowLeft, CheckCircle2, X, Compass,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/lead/Lead";
import { packages, packageSlug, type Package } from "@/data/tours";

const Pill = ({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all duration-300 ${
            active ? "bg-ink text-paper" : "border border-line bg-white text-muted hover:border-ink hover:text-ink"
        }`}
    >
        {label}
    </button>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
    <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paper-dim text-clay"><Icon size={15} /></span>
        <div>
            <h5 className="text-[13px] font-medium text-ink">{title}</h5>
            <p className="mt-0.5 text-[12px] leading-relaxed text-muted">{desc}</p>
        </div>
    </div>
);

export default function GoldenTriangleAllView() {
    const [activeTheme, setActiveTheme] = useState("All");
    const [activeDuration, setActiveDuration] = useState("All");
    const [activeLocation, setActiveLocation] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState<Package | null>(null);
    const itemsPerPage = 10;

    const themes = ["All", "Luxury", "Short Tours", "Spiritual", "Wildlife", "Medical", "Adventure", "Nature"];
    const locations = ["All", "Golden Triangle", "Rajasthan", "South India", "Himalayas", "North East", "Goa", "Islands", "West India", "North India", "Central India"];
    const durations = ["All", "3-5 Days", "6-9 Days", "10+ Days"];

    const filtered = useMemo(() => {
        const f = packages.filter((pkg) => {
            const themeMatch = activeTheme === "All" || pkg.theme === activeTheme;
            const locationMatch = activeLocation === "All" || pkg.location === activeLocation;
            const days = parseInt(pkg.duration);
            let durationMatch = true;
            if (activeDuration === "3-5 Days") durationMatch = days >= 3 && days <= 5;
            else if (activeDuration === "6-9 Days") durationMatch = days >= 6 && days <= 9;
            else if (activeDuration === "10+ Days") durationMatch = days >= 10;
            return themeMatch && locationMatch && durationMatch;
        });
        setCurrentPage(1);
        return f;
    }, [activeTheme, activeLocation, activeDuration]);

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const goPage = (p: number) => { setCurrentPage(p); window.scrollTo({ top: 600, behavior: "smooth" }); };

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x max-w-4xl">
                    <p className="eyebrow eyebrow-accent">The full collection</p>
                    <h1 className="display-1 mt-4 font-medium text-ink">Golden Triangle & beyond</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                        Every variation of India's most iconic routes and regional escapes. Each itinerary is a starting point, ready to shape around how you actually want to travel.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-6 text-[12px] font-medium text-stone">
                        <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-clay" /> Transparent pricing</span>
                        <span className="flex items-center gap-2"><Sparkles size={14} className="text-clay" /> Bespoke itineraries</span>
                        <span className="flex items-center gap-2"><MessageCircle size={14} className="text-clay" /> Human concierge</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr_260px]">
                    {/* Filters */}
                    <aside className="lg:sticky lg:top-24 lg:self-start">
                        <div className="space-y-7 rounded-2xl border border-line bg-white p-6 lg:border-0 lg:bg-transparent lg:p-0">
                            <div>
                                <h4 className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-stone"><Map size={13} className="text-clay" /> Region</h4>
                                <div className="flex flex-wrap gap-2">{locations.map((l) => <Pill key={l} label={l} active={activeLocation === l} onClick={() => setActiveLocation(l)} />)}</div>
                            </div>
                            <div className="lg:border-t lg:border-line lg:pt-6">
                                <h4 className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-stone"><Filter size={13} className="text-clay" /> Theme</h4>
                                <div className="flex flex-wrap gap-2">{themes.map((t) => <Pill key={t} label={t} active={activeTheme === t} onClick={() => setActiveTheme(t)} />)}</div>
                            </div>
                            <div className="lg:border-t lg:border-line lg:pt-6">
                                <h4 className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-stone"><Clock size={13} className="text-clay" /> Duration</h4>
                                <div className="flex flex-wrap gap-2">{durations.map((d) => <Pill key={d} label={d} active={activeDuration === d} onClick={() => setActiveDuration(d)} />)}</div>
                            </div>
                        </div>
                    </aside>

                    {/* Cards */}
                    <div className="min-w-0">
                        <AnimatePresence mode="popLayout">
                            <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {paginated.map((pkg) => (
                                    <motion.div key={pkg.id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
                                        className="card card-hover group overflow-hidden">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image src={pkg.img} alt={`${pkg.title}, ${pkg.duration} ${pkg.location} tour`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                            <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-medium text-ink">{pkg.duration}</span>
                                            <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-medium text-paper backdrop-blur-sm">{pkg.location}</span>
                                        </div>
                                        <div className="p-6">
                                            <div className="eyebrow">{pkg.theme}</div>
                                            <h3 className="mt-2 text-lg font-medium text-ink group-hover:text-clay">{pkg.title}</h3>
                                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{pkg.highlight}</p>
                                            <div className="mt-5 flex items-end justify-between border-t border-line pt-5">
                                                <div>
                                                    <span className="block text-[11px] uppercase tracking-[0.14em] text-stone">from</span>
                                                    <span className="text-xl font-medium text-ink">{pkg.price}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button onClick={() => setSelected(pkg)} className="btn-outline btn-sm">Preview</button>
                                                    <Link href={`/tours/${packageSlug(pkg)}`} className="btn-primary btn-sm">View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {totalPages > 1 && (
                            <div className="mt-14 flex items-center justify-center gap-3">
                                <button disabled={currentPage === 1} onClick={() => goPage(currentPage - 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition hover:border-ink disabled:opacity-30"><ArrowLeft size={18} /></button>
                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button key={i} onClick={() => goPage(i + 1)} className={`h-11 w-11 rounded-full text-sm font-medium transition ${currentPage === i + 1 ? "bg-ink text-paper" : "border border-line text-ink hover:border-ink"}`}>{i + 1}</button>
                                    ))}
                                </div>
                                <button disabled={currentPage === totalPages} onClick={() => goPage(currentPage + 1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition hover:border-ink disabled:opacity-30"><ArrowRight size={18} /></button>
                            </div>
                        )}

                        {filtered.length === 0 && (
                            <div className="card py-20 text-center">
                                <Compass className="mx-auto text-stone" size={48} />
                                <h3 className="display-3 mt-6 text-ink">No exact matches</h3>
                                <p className="mt-3 text-muted">Adjust your filters, or let our team build a custom route.</p>
                                <button onClick={() => { setActiveTheme("All"); setActiveDuration("All"); setActiveLocation("All"); }} className="btn-primary mt-6">Reset filters</button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-5">
                            <div className="rounded-2xl bg-ink p-6 text-paper">
                                <h3 className="text-lg font-medium text-paper">Design your own route</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-paper/70">Don't settle for a template, our team can merge any of these into one bespoke journey.</p>
                                <div className="my-5 space-y-2.5">
                                    {["Custom stop-overs", "Your kind of hotels", "Dietary-ready", "24/7 human backup"].map((f) => (
                                        <div key={f} className="flex items-center gap-2.5 text-[13px] text-paper/80"><CheckCircle2 size={14} className="shrink-0 text-clay-soft" /> {f}</div>
                                    ))}
                                </div>
                                <Link href="/booking" className="btn w-full rounded-full bg-paper px-5 py-3 text-ink hover:bg-clay hover:text-paper">Build a custom itinerary</Link>
                            </div>
                            <div className="card space-y-5 p-6">
                                <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-stone">The MyTripMyTravel standard</h4>
                                <Feature icon={Map} title="Tracked chauffeurs" desc="Every car is GPS-tracked so you always know where your driver is." />
                                <Feature icon={ShieldCheck} title="Transparent pricing" desc="Fuel, permits and tolls pre-calculated. No hidden gate fees." />
                                <Feature icon={Calendar} title="Flexible days" desc="Want a slow day in Jaipur? We adjust the pace on the fly." />
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Trust */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Why travellers trust us</p>
                        <h2 className="display-2 mt-3 text-ink">Considered, every mile.</h2>
                        <div className="mt-10 space-y-8">
                            {[
                                { t: "Professional chauffeurs", d: "Trained in defensive driving and attentive, unobtrusive hospitality." },
                                { t: "Heritage access", d: "Guided visits to the Taj Mahal, Amber Fort and Jantar Mantar with local expertise." },
                                { t: "Comfort-first vehicles", d: "Chosen for comfort on long routes and easy recovery days." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="font-display text-4xl font-semibold text-line-strong">0{i + 1}</div>
                                    <div>
                                        <h4 className="text-xl font-medium text-ink">{item.t}</h4>
                                        <p className="mt-2 leading-relaxed text-muted">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl">
                        <div className="relative aspect-[4/5]">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg" alt="Taj Mahal at sunrise, Agra" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                        </div>
                        <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-ink/70 p-7 backdrop-blur-sm">
                            <Star className="text-clay-soft" fill="currentColor" size={20} />
                            <p className="mt-4 text-lg leading-relaxed text-paper">"Every route here is a starting point, we tailor the pace, hotels and stops to how you want to travel."</p>
                            <span className="mt-4 block text-[12px] font-medium uppercase tracking-[0.16em] text-clay-soft">, The MyTripMyTravel team</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Good to know</p>
                    <h2 className="display-2 mt-3 text-ink">Questions about the collection</h2>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {[
                            { q: "Can I swap Agra for Varanasi?", a: "Absolutely. These are variations, not rigid rules, almost any city in India is on the menu, and we can build a loop starting anywhere." },
                            { q: "What defines a 'medical' tour?", a: "These pair calmer stays with comfortable vehicles and run at an easier pace, suited to post-op rest and physical therapy." },
                            { q: "Are drivers experienced with large groups?", a: "Yes, our chauffeurs have run multi-car convoys for palace weddings in Jaipur and coordinate closely across the group." },
                            { q: "How is golden-hour photography handled?", a: "We plan visits around the best light, arriving early where possible to enjoy monuments before the busiest crowds." },
                        ].map((f, i) => (
                            <div key={i} className="card p-7">
                                <h4 className="text-[17px] font-medium text-ink">{f.q}</h4>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section pt-0">
                <div className="container-x">
                    <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-ink px-8 py-14 sm:flex-row sm:items-center sm:px-16">
                        <h2 className="display-3 max-w-md text-paper">Ready to start planning?</h2>
                        <Link href="/booking" className="btn rounded-full bg-paper px-7 py-3.5 text-ink hover:bg-clay hover:text-paper">Consult a planner <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Preview modal */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 sm:p-8">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="absolute inset-0 bg-ink/50 backdrop-blur-sm" />
                        <motion.div initial={{ scale: 0.96, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.96, y: 20, opacity: 0 }}
                            className="relative flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white sm:flex-row">
                            <button onClick={() => setSelected(null)} className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition hover:bg-clay"><X size={20} /></button>
                            <div className="relative h-56 sm:h-auto sm:w-2/5">
                                <Image src={selected.img} alt={`${selected.title}, ${selected.duration} itinerary`} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent sm:bg-gradient-to-r" />
                                <div className="absolute bottom-8 left-8 right-8 text-paper">
                                    <div className="eyebrow text-clay-soft">{selected.theme}</div>
                                    <h3 className="mt-2 text-2xl font-medium text-paper">{selected.title}</h3>
                                    <div className="mt-3 flex items-center gap-2 text-[12px] font-medium text-paper/80"><Clock size={14} className="text-clay-soft" /> {selected.duration}</div>
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto p-8 sm:p-10" data-lenis-prevent>
                                <p className="eyebrow eyebrow-accent">Day by day</p>
                                <div className="relative mt-6 space-y-8">
                                    {selected.itinerary.map((step) => (
                                        <div key={step.day} className="relative border-l border-line pl-8 last:border-0">
                                            <div className="absolute left-0 top-0 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-ink text-[12px] font-medium text-paper">{step.day}</div>
                                            <h6 className="text-[15px] font-medium text-ink">Day {step.day}</h6>
                                            <p className="mt-1 text-sm leading-relaxed text-muted">{step.plan}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-line pt-8 sm:flex-row sm:items-center">
                                    <div>
                                        <span className="block text-[11px] uppercase tracking-[0.14em] text-stone">from</span>
                                        <span className="text-3xl font-medium text-ink">{selected.price}</span>
                                    </div>
                                    <Link href={`/tours/${packageSlug(selected)}`} className="btn-primary w-full sm:w-auto">View full itinerary <ArrowRight size={16} /></Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <WhatsAppFab message="Hi MyTripMyTravel, I would like help choosing a tour." />
        </main>
    );
}
