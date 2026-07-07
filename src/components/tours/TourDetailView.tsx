"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Clock, MapPin, ShieldCheck, ChevronRight, Calendar, User, Sparkles,
    ArrowRight, FileText, Plus, Check, Minus, Car, Moon, Utensils,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TourInquiryModal } from "@/components/TourInquiryModal";
import { packageSlug, type Package } from "@/data/tours";

const REGION_BY_LOCATION: Record<string, { label: string; href: string }> = {
    "Golden Triangle": { label: "Golden Triangle", href: "/destinations/region/golden-triangle" },
    Rajasthan: { label: "Rajasthan", href: "/destinations/region/rajasthan" },
    Himalayas: { label: "Himalayas", href: "/destinations/region/himalayas" },
};

export default function TourDetailView({ tour, related }: { tour: Package; related: Package[] }) {
    const [isInquiryModalOpen, setIsInquiryModalOpen] = React.useState(false);
    const region = REGION_BY_LOCATION[tour.location];

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            <TourInquiryModal tour={tour} isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />

            {/* Hero */}
            <section className="relative flex h-[64vh] min-h-[460px] items-end overflow-hidden">
                <Image src={tour.img} alt={tour.title} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/tours" className="hover:text-clay-soft">Tours</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{tour.title}</span>
                    </nav>
                    <span className="eyebrow text-paper/70">{tour.theme}</span>
                    <h1 className="display-1 mt-4 max-w-3xl font-medium text-paper">{tour.title}</h1>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-[13px] font-medium text-ink"><Clock size={15} className="text-clay" /> {tour.duration}</span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-[13px] font-medium text-ink"><MapPin size={15} className="text-clay" /> {tour.location}</span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-[13px] font-medium text-ink"><Sparkles size={15} className="text-clay" /> {tour.theme}</span>
                    </div>
                </div>
            </section>

            {/* Detail */}
            <section className="section">
                <div className="container-x grid gap-14 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        {/* Overview */}
                        <p className="eyebrow eyebrow-accent">Overview</p>
                        <p className="mt-4 font-display text-[24px] font-medium leading-snug text-ink sm:text-[30px]">{tour.highlight}</p>
                        {tour.answer && <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-muted">{tour.answer}</p>}

                        {/* Quick facts */}
                        {tour.quickFacts && tour.quickFacts.length > 0 && (
                            <dl className="mt-12 grid gap-x-10 gap-y-4 rounded-2xl border border-line bg-white p-8 sm:grid-cols-2">
                                {tour.quickFacts.map((f, i) => (
                                    <div key={i} className="flex justify-between gap-6 border-b border-line pb-3 last:border-0">
                                        <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-stone">{f.label}</dt>
                                        <dd className="text-right text-[15px] font-medium text-ink">{f.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}

                        {/* Itinerary */}
                        <h2 className="display-3 mt-16 text-ink">Day-by-day itinerary</h2>
                        <div className="mt-10 space-y-10">
                            {tour.itinerary.map((day, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                    className="relative border-l border-line pb-2 pl-10 last:border-0">
                                    <div className="absolute left-0 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-ink text-[13px] font-medium text-paper">{day.day}</div>
                                    <h4 className="text-xl font-medium text-ink">Day {day.day}{day.title ? ` — ${day.title}` : ""}</h4>
                                    {day.detail && day.detail.length > 0 ? (
                                        <div className="mt-3 max-w-3xl space-y-3">
                                            {day.detail.map((p, i) => <p key={i} className="text-[16px] leading-relaxed text-muted">{p}</p>)}
                                        </div>
                                    ) : (
                                        <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-muted">{day.plan}</p>
                                    )}
                                    {(day.drive || day.overnight || day.meals) && (
                                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-medium text-stone">
                                            {day.drive && <span className="flex items-center gap-1.5"><Car size={13} className="text-clay" />{day.drive}</span>}
                                            {day.overnight && <span className="flex items-center gap-1.5"><Moon size={13} className="text-clay" />Overnight · {day.overnight}</span>}
                                            {day.meals && <span className="flex items-center gap-1.5"><Utensils size={13} className="text-clay" />{day.meals}</span>}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Inclusions / exclusions */}
                        {(tour.inclusions?.length || tour.exclusions?.length) ? (
                            <div className="mt-14 grid gap-6 md:grid-cols-2">
                                {tour.inclusions && tour.inclusions.length > 0 && (
                                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-7">
                                        <h3 className="text-[12px] font-medium uppercase tracking-[0.16em] text-emerald-700">What's included</h3>
                                        <ul className="mt-5 space-y-3">
                                            {tour.inclusions.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-[15px] leading-snug text-ink-soft"><Check size={17} className="mt-0.5 shrink-0 text-emerald-600" />{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {tour.exclusions && tour.exclusions.length > 0 && (
                                    <div className="rounded-2xl border border-line bg-white p-7">
                                        <h3 className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">Not included</h3>
                                        <ul className="mt-5 space-y-3">
                                            {tour.exclusions.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-[15px] leading-snug text-muted"><Minus size={17} className="mt-0.5 shrink-0 text-stone" />{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : null}

                        {/* FAQ */}
                        {tour.faqs && tour.faqs.length > 0 && (
                            <div className="mt-14">
                                <h3 className="display-3 text-ink">Frequently asked</h3>
                                <div className="mt-8 divide-y divide-line">
                                    {tour.faqs.map((f, i) => (
                                        <details key={i} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between gap-4 text-[17px] font-medium text-ink">
                                                {f.q}
                                                <Plus size={18} className="shrink-0 text-stone transition-transform group-open:rotate-45 group-open:text-clay" />
                                            </summary>
                                            <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sticky CTA */}
                    <div>
                        <div className="sticky top-24 overflow-hidden rounded-3xl bg-ink p-9 text-paper">
                            <p className="eyebrow text-clay-soft">From</p>
                            <div className="mt-2 font-display text-5xl font-semibold tracking-tight text-paper">{tour.price}</div>
                            <p className="mt-1 text-sm text-paper/60">per person, starting</p>
                            <div className="mt-8 space-y-3 border-y border-white/10 py-6">
                                {[[ShieldCheck, "Safe, private travel"], [Calendar, "Flexible travel dates"], [User, "Private chauffeur included"]].map(([Icon, label], i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-paper/80">
                                        {React.createElement(Icon as any, { size: 18, className: "shrink-0 text-clay-soft" })} {label as string}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-col gap-3">
                                <button onClick={() => setIsInquiryModalOpen(true)} className="btn rounded-full bg-clay px-6 py-3.5 text-paper hover:bg-clay-soft">Enquire — free quote <Plus size={16} /></button>
                                <button onClick={() => window.print()} className="btn rounded-full bg-paper px-6 py-3.5 text-ink hover:bg-white/90"><FileText size={16} /> Download PDF</button>
                                <button
                                    onClick={() => window.open(`https://wa.me/919997812237?text=${encodeURIComponent(`Hi MyTripMyTravel, I'm interested in the ${tour.title}. Could you share details and a quote?`)}`, "_blank")}
                                    className="btn py-2 text-[13px] text-paper/60 hover:text-clay-soft"
                                >WhatsApp the desk <ChevronRight size={13} /></button>
                            </div>
                            <p className="mt-6 text-center text-[12px] text-paper/50">Free quote · no obligation · we usually reply within a few hours.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Keep exploring</p>
                    <h2 className="display-3 mt-3 text-ink">Related itineraries</h2>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {related.map((p) => (
                            <Link key={p.id} href={`/tours/${packageSlug(p)}`} className="card card-hover group overflow-hidden">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                                    <div className="absolute bottom-4 left-5 right-5">
                                        <div className="text-[11px] font-medium text-paper/80">{p.duration} · {p.theme}</div>
                                        <h3 className="mt-0.5 text-lg font-medium text-paper">{p.title}</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-5">
                                    <span className="text-base font-medium text-ink">{p.price}</span>
                                    <span className="inline-flex items-center gap-1 text-sm font-medium text-clay">Open <ArrowRight size={14} /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap gap-3">
                        {region && <Link href={region.href} className="btn-outline btn-sm">Explore {region.label} <ArrowRight size={14} /></Link>}
                        <Link href="/fleet" className="btn-outline btn-sm">Elite chauffeured fleet <ArrowRight size={14} /></Link>
                        <Link href="/tours" className="btn-outline btn-sm">All itineraries <ArrowRight size={14} /></Link>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Printable brief */}
            <div id="printable-brief" className="hidden bg-white p-20 text-royal-blue print:block">
                <div className="mb-16 flex items-end justify-between border-b-4 border-sunset-orange pb-10">
                    <div>
                        <h1 className="text-5xl font-semibold tracking-tight">MyTripMyTravel</h1>
                        <h4 className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-sunset-orange">Itinerary brief</h4>
                    </div>
                    <div className="text-right text-[10px] uppercase tracking-widest opacity-50">
                        <div>Ref: MTMT-{packageSlug(tour)}</div>
                        <div>{tour.theme}</div>
                    </div>
                </div>
                <h2 className="mb-6 text-5xl font-semibold tracking-tight">{tour.title}</h2>
                <p className="mb-16 max-w-4xl text-xl italic opacity-70">{tour.highlight}</p>
                <h3 className="mb-8 border-b border-royal-blue/10 pb-3 text-lg font-medium uppercase tracking-[0.2em]">Itinerary</h3>
                <div className="space-y-8">
                    {tour.itinerary.map((day, idx) => (
                        <div key={idx} className="flex gap-8">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-royal-blue font-semibold text-white">{day.day}</div>
                            <div>
                                <h4 className="text-[10px] font-medium uppercase tracking-widest text-sunset-orange">Day {day.day}</h4>
                                <p className="mt-1 text-lg">{day.plan}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
