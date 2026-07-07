"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Clock, MapPin, ShieldCheck, ChevronRight,
    Calendar, User, Sparkles, ArrowRight, FileText, Plus,
    Check, Minus, Car, Moon, Utensils, HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CharBlurIn, SmoothScroll, GlassyProgressBar } from "@/components/ClientComponents";
import { TourInquiryModal } from "@/components/TourInquiryModal";
import { packageSlug, type Package } from "@/data/tours";

const REGION_BY_LOCATION: Record<string, { label: string; href: string }> = {
    "Golden Triangle": { label: "Golden Triangle", href: "/destinations/region/golden-triangle" },
    Rajasthan: { label: "Rajasthan", href: "/destinations/region/rajasthan" },
    Himalayas: { label: "Himalayas", href: "/destinations/region/himalayas" },
};

export default function TourDetailView({
    tour,
    related,
}: {
    tour: Package;
    related: Package[];
}) {
    const [isInquiryModalOpen, setIsInquiryModalOpen] = React.useState(false);
    const region = REGION_BY_LOCATION[tour.location];

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-clip">
                <GlassyProgressBar />
                <Navbar />

                <TourInquiryModal
                    tour={tour}
                    isOpen={isInquiryModalOpen}
                    onClose={() => setIsInquiryModalOpen(false)}
                />

                {/* Hero */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={tour.img} alt={tour.title} fill className="object-cover scale-105" priority />
                        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/80 via-transparent to-white" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap justify-center items-center gap-3 mb-8 text-white/70 font-semibold uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/tours" className="hover:text-sunset-orange transition-colors">Tours</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{tour.title}</span>
                        </nav>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                            <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-6">{tour.theme} · Master Package</h4>
                            <CharBlurIn text={tour.title.toUpperCase()} className="text-4xl md:text-8xl font-semibold text-white uppercase tracking-tight leading-none mb-8 block" />
                            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
                                <div className="bg-white/90 backdrop-blur-3xl px-8 py-4 rounded-2xl text-royal-blue flex items-center gap-3 shadow-xl">
                                    <Clock className="text-sunset-orange" size={18} />
                                    <span className="font-semibold uppercase text-xs tracking-widest">{tour.duration}</span>
                                </div>
                                <div className="bg-white/90 backdrop-blur-3xl px-8 py-4 rounded-2xl text-royal-blue flex items-center gap-3 shadow-xl">
                                    <MapPin className="text-sunset-orange" size={18} />
                                    <span className="font-semibold uppercase text-xs tracking-widest">{tour.location}</span>
                                </div>
                                <div className="bg-white/90 backdrop-blur-3xl px-8 py-4 rounded-2xl text-royal-blue flex items-center gap-3 shadow-xl">
                                    <Sparkles className="text-sunset-orange" size={18} />
                                    <span className="font-semibold uppercase text-xs tracking-widest">{tour.theme}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Detail */}
                <section className="py-24 md:py-40 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-20">
                            <div className="lg:col-span-2">
                                <div className="mb-20">
                                    <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.4em] text-xs mb-4">Overview</h4>
                                    <h2 className="text-4xl md:text-6xl font-semibold text-royal-blue uppercase tracking-tight leading-none mb-10">{tour.title}</h2>
                                    <p className="text-xl md:text-2xl font-bold italic text-royal-blue/60 leading-relaxed max-w-3xl">
                                        {tour.highlight}
                                    </p>
                                    {tour.answer && (
                                        <p className="mt-8 text-base md:text-lg font-semibold text-royal-blue/80 leading-relaxed max-w-3xl not-italic">
                                            {tour.answer}
                                        </p>
                                    )}
                                </div>

                                {/* Quick Facts */}
                                {tour.quickFacts && tour.quickFacts.length > 0 && (
                                    <div className="mb-20">
                                        <h3 className="text-sunset-orange font-semibold uppercase tracking-[0.4em] text-xs mb-6">Quick Facts</h3>
                                        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-5 rounded-2xl border border-royal-blue/10 p-8 md:p-10 bg-royal-blue/[0.02]">
                                            {tour.quickFacts.map((f, i) => (
                                                <div key={i} className="flex justify-between gap-6 border-b border-royal-blue/5 pb-4 last:border-0">
                                                    <dt className="font-semibold uppercase tracking-widest text-[10px] text-royal-blue/40 pt-1">{f.label}</dt>
                                                    <dd className="font-bold text-royal-blue text-right text-sm md:text-base">{f.value}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                )}

                                <div className="space-y-12">
                                    <h3 className="text-2xl font-semibold uppercase tracking-[0.3em] text-royal-blue/20">Day-by-Day Itinerary</h3>
                                    {tour.itinerary.map((day, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="relative pl-12 md:pl-20 pb-16 border-l border-royal-blue/10 last:border-0 last:pb-0"
                                        >
                                            <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-royal-blue text-white flex items-center justify-center font-semibold text-xs shadow-lg">
                                                {day.day}
                                            </div>
                                            <h4 className="font-semibold text-royal-blue uppercase tracking-tight text-lg md:text-2xl mb-4 leading-tight">
                                                Day {day.day}{day.title ? ` — ${day.title}` : ""}
                                            </h4>
                                            {day.detail && day.detail.length > 0 ? (
                                                <div className="space-y-4 max-w-3xl">
                                                    {day.detail.map((p, i) => (
                                                        <p key={i} className="text-base md:text-lg font-semibold text-royal-blue/75 leading-relaxed">{p}</p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-lg md:text-xl font-bold italic text-royal-blue/70 leading-relaxed max-w-3xl">
                                                    {day.plan}
                                                </p>
                                            )}
                                            {(day.drive || day.overnight || day.meals) && (
                                                <div className="flex flex-wrap gap-x-8 gap-y-2 mt-6 text-[11px] font-semibold uppercase tracking-widest text-royal-blue/50">
                                                    {day.drive && <span className="flex items-center gap-2"><Car size={14} className="text-sunset-orange" />{day.drive}</span>}
                                                    {day.overnight && <span className="flex items-center gap-2"><Moon size={14} className="text-sunset-orange" />Overnight · {day.overnight}</span>}
                                                    {day.meals && <span className="flex items-center gap-2"><Utensils size={14} className="text-sunset-orange" />{day.meals}</span>}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Inclusions / Exclusions */}
                                {(tour.inclusions?.length || tour.exclusions?.length) ? (
                                    <div className="mt-20 grid md:grid-cols-2 gap-8">
                                        {tour.inclusions && tour.inclusions.length > 0 && (
                                            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8">
                                                <h3 className="font-semibold uppercase tracking-widest text-xs text-emerald-600 mb-6">What's Included</h3>
                                                <ul className="space-y-4">
                                                    {tour.inclusions.map((item, i) => (
                                                        <li key={i} className="flex gap-3 text-sm md:text-base font-semibold text-royal-blue/80 leading-snug">
                                                            <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />{item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {tour.exclusions && tour.exclusions.length > 0 && (
                                            <div className="rounded-2xl border border-royal-blue/10 bg-royal-blue/[0.02] p-8">
                                                <h3 className="font-semibold uppercase tracking-widest text-xs text-royal-blue/50 mb-6">Not Included</h3>
                                                <ul className="space-y-4">
                                                    {tour.exclusions.map((item, i) => (
                                                        <li key={i} className="flex gap-3 text-sm md:text-base font-semibold text-royal-blue/60 leading-snug">
                                                            <Minus size={18} className="text-royal-blue/30 shrink-0 mt-0.5" />{item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ) : null}

                                {/* FAQ */}
                                {tour.faqs && tour.faqs.length > 0 && (
                                    <div className="mt-20">
                                        <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-semibold text-royal-blue uppercase tracking-tight mb-10">
                                            <HelpCircle className="text-sunset-orange" size={24} />Frequently Asked
                                        </h3>
                                        <div className="space-y-5">
                                            {tour.faqs.map((f, i) => (
                                                <details key={i} className="group rounded-[1.5rem] border border-royal-blue/10 bg-white p-6 md:p-8 [&_summary::-webkit-details-marker]:hidden">
                                                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-royal-blue text-base md:text-lg leading-snug">
                                                        {f.q}
                                                        <Plus size={18} className="text-sunset-orange shrink-0 transition-transform group-open:rotate-45" />
                                                    </summary>
                                                    <p className="mt-4 text-sm md:text-base font-semibold text-royal-blue/70 leading-relaxed">{f.a}</p>
                                                </details>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className="sticky top-48 bg-royal-blue backdrop-blur-3xl p-10 md:p-12 rounded-2xl border border-white/10 text-white shadow-4xl overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-orange/20 blur-[60px] -translate-y-1/2 translate-x-1/2" />
                                    <div className="mb-12">
                                        <h4 className="text-white font-semibold uppercase tracking-[0.4em] text-xs mb-4">Price</h4>
                                        <div className="text-5xl font-semibold tracking-tight mb-2">{tour.price}</div>
                                        <p className="text-white font-bold italic text-base">Starting price / per person</p>
                                    </div>
                                    <div className="space-y-6 mb-12">
                                        <div className="flex items-center gap-4 py-4 border-b border-white/10">
                                            <ShieldCheck className="text-sunset-orange shrink-0" size={20} />
                                            <span className="font-semibold uppercase text-xs tracking-widest">Safe, private travel</span>
                                        </div>
                                        <div className="flex items-center gap-4 py-4 border-b border-white/10">
                                            <Calendar className="text-sunset-orange shrink-0" size={20} />
                                            <span className="font-semibold uppercase text-xs tracking-widest">Flexible travel dates</span>
                                        </div>
                                        <div className="flex items-center gap-4 py-4">
                                            <User className="text-sunset-orange shrink-0" size={20} />
                                            <span className="font-semibold uppercase text-xs tracking-widest">Private Chauffeur Included</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 items-stretch">
                                        <button
                                            onClick={() => window.print()}
                                            className="w-full h-[72px] bg-white text-royal-blue rounded-2xl font-semibold uppercase tracking-widest text-[11px] hover:bg-sunset-orange hover:text-white transition-all duration-500 shadow-xl flex items-center justify-center gap-4 border border-royal-blue/10"
                                        >
                                            Download PDF itinerary <FileText size={18} />
                                        </button>
                                        <button
                                            onClick={() => setIsInquiryModalOpen(true)}
                                            className="w-full h-[72px] bg-sunset-orange text-white rounded-2xl font-semibold uppercase tracking-widest text-[11px] hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-md flex items-center justify-center gap-4 hover:scale-[1.01]"
                                        >
                                            Enquire — get a free quote <Plus size={18} />
                                        </button>
                                        <button
                                            onClick={() => {
                                                const msg = `Hi MyTripMyTravel, I'm interested in the ${tour.title}. Could you share details and a quote?`;
                                                window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, "_blank");
                                            }}
                                            className="w-full text-white/40 hover:text-sunset-orange py-4 font-semibold uppercase tracking-[0.3em] text-[8px] transition-all flex items-center justify-center gap-2"
                                        >
                                            Inquire via WhatsApp <ChevronRight size={12} />
                                        </button>
                                    </div>
                                    <p className="text-center mt-10 text-[10px] font-semibold uppercase tracking-widest text-white italic">Free quote · no obligation · we usually reply within a few hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interlinking: related tours + cross-cluster */}
                <section className="py-28 bg-royal-blue/5">
                    <div className="container mx-auto px-6">
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-5">Continue the Mission</h4>
                        <CharBlurIn text="RELATED ARCHITECTURES" className="text-3xl md:text-6xl font-semibold text-royal-blue uppercase tracking-tight block leading-none mb-14" />
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {related.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/tours/${packageSlug(p)}`}
                                    className="block glass-card rounded-2xl overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/30 transition-all duration-700"
                                >
                                    <div className="relative h-52">
                                        <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/70 to-transparent" />
                                        <div className="absolute bottom-5 left-6 right-6">
                                            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sunset-orange mb-1">{p.duration} · {p.theme}</div>
                                            <h3 className="text-xl font-semibold text-white uppercase tracking-tight leading-tight">{p.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6 flex items-center justify-between">
                                        <span className="text-lg font-semibold text-royal-blue">{p.price}</span>
                                        <span className="font-semibold uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 text-royal-blue group-hover:text-sunset-orange transition-colors">
                                            Open <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-14">
                            {region && (
                                <Link href={region.href} className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                    Explore {region.label} destinations <ArrowRight size={14} />
                                </Link>
                            )}
                            <Link href="/fleet" className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                Elite chauffeured fleet <ArrowRight size={14} />
                            </Link>
                            <Link href="/tours" className="px-7 py-4 glass-card rounded-2xl border-royal-blue/10 font-semibold uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                All Master Packages <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />

                {/* Printable brief */}
                <div id="printable-brief" className="hidden print:block fixed inset-0 bg-white p-20 text-royal-blue z-[9999]">
                    <div className="border-b-[10px] border-sunset-orange pb-12 mb-16 flex justify-between items-end">
                        <div>
                            <h1 className="text-6xl font-semibold uppercase tracking-tight mb-2">MY TRIP MY TRAVEL</h1>
                            <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.4em] text-xs">OFFICIAL MISSION BRIEF</h4>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Protocol: MTMT-{packageSlug(tour)}</div>
                            <div className="text-[10px] font-semibold uppercase tracking-widest opacity-40">Classification: {tour.theme}</div>
                        </div>
                    </div>
                    <div className="mb-20">
                        <h2 className="text-8xl font-semibold uppercase tracking-tight mb-8 leading-none">{tour.title}</h2>
                        <p className="text-2xl font-bold italic opacity-60 leading-relaxed max-w-4xl">{tour.highlight}</p>
                    </div>
                    <div className="space-y-12 mb-24">
                        <h3 className="text-2xl font-semibold uppercase tracking-[0.4em] mb-12 border-b border-royal-blue/10 pb-4">Operational Architecture</h3>
                        {tour.itinerary.map((day, idx) => (
                            <div key={idx} className="flex gap-12">
                                <div className="w-16 h-16 shrink-0 bg-royal-blue text-white rounded-full flex items-center justify-center font-semibold">{day.day}</div>
                                <div>
                                    <h4 className="text-sunset-orange font-semibold uppercase tracking-widest text-[10px] mb-2">Day {day.day}</h4>
                                    <p className="text-xl font-bold italic">{day.plan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </SmoothScroll>
    );
}
