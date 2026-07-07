"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Calendar, HelpCircle, ShieldCheck, Plus, Info } from "lucide-react";
import { programmeFaqs, type WellnessProgramme } from "@/data/wellness";

/** Per-programme planning facts + honest framing (no fabricated medical claims). */
export const PROGRAMME_META: Record<
    string,
    { setting: string; bestTime: string; typicalLength: string; framing: string }
> = {
    "yoga-soul": {
        setting: "Rishikesh & private Himalayan sanctuaries",
        bestTime: "September to April",
        typicalLength: "3 to 14 days",
        framing:
            "A genuine, teacher-led practice for every level, from complete beginner to advanced practitioner, held with vetted master teachers at the source. This is an immersion in an authentic tradition, not a fitness class.",
    },
    ayurvedic: {
        setting: "Kerala & the Kovalam coast",
        bestTime: "September to March (the monsoon is traditionally prized for treatment)",
        typicalLength: "7 to 21 days",
        framing:
            "Authentic, AYUSH-certified recuperative Ayurveda, traditional therapy for rest and rejuvenation, overseen by a qualified physician. We frame it honestly: this is not a medical cure, and it does not replace conventional care. If you have a health condition, please consult your own doctor.",
    },
    orthopedic: {
        setting: "Accredited hospitals + gentle-paced luxury recovery transit",
        bestTime: "Year-round (climate-controlled)",
        typicalLength: "10 to 28 days",
        framing:
            "We arrange the travel, accommodation and slow-paced recovery logistics around treatment you arrange with accredited providers. MyTripMyTravel is a travel architect and concierge, not a medical provider, and does not deliver clinical care or outcomes.",
    },
    massage: {
        setting: "Across India, Kerala, Rajasthan palaces & city sanctuaries",
        bestTime: "Year-round",
        typicalLength: "1 to 7 days",
        framing:
            "Master-therapist bodywork for relaxation and physical recovery, tailored to you across Indian and global modalities. Therapies are same-gender and professionally conducted.",
    },
};

export default function WellnessProgrammeDetail({
    programme,
}: {
    programme: WellnessProgramme;
}) {
    const meta = PROGRAMME_META[programme.slug];
    const faqs = programmeFaqs(programme);

    return (
        <>
            {/* Answer-first summary + honest framing */}
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-4xl">
                    <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.6em] text-xs mb-6">The Programme</h4>
                    <h2 className="text-3xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight leading-none mb-8">
                        {programme.name}
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-royal-blue/70 leading-relaxed mb-8">{programme.blurb}</p>
                    {meta && (
                        <div className="flex items-start gap-4 rounded-[1.75rem] border border-sunset-orange/20 bg-sunset-orange/[0.04] p-7">
                            <Info className="text-sunset-orange shrink-0 mt-1" size={20} />
                            <p className="text-base md:text-lg font-semibold text-royal-blue/75 leading-relaxed">{meta.framing}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Quick Facts */}
            {meta && (
                <section className="pb-8 container mx-auto px-6">
                    <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-5 rounded-2xl border border-royal-blue/10 p-8 md:p-10 bg-royal-blue/[0.02] max-w-4xl">
                        {[
                            { label: "Therapies", value: `${programme.variants.length} tailored programmes` },
                            { label: "Typical length", value: meta.typicalLength },
                            { label: "Setting", value: meta.setting },
                            { label: "Best time", value: meta.bestTime },
                        ].map((f, i) => (
                            <div key={i} className="flex justify-between gap-6 border-b border-royal-blue/5 pb-4 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                                <dt className="font-semibold uppercase tracking-widest text-[10px] text-royal-blue/40 pt-1 shrink-0">{f.label}</dt>
                                <dd className="font-bold text-royal-blue text-right text-sm md:text-base">{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            )}

            {/* Variants, the itinerary menu (each links to its deep brief) */}
            <section className="py-20 bg-royal-blue/5">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-5 mb-12">
                        <h2 className="text-3xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight">Choose your programme</h2>
                        <div className="h-px flex-1 bg-royal-blue/10" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-royal-blue/40">{programme.variants.length} options</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programme.variants.map((v, idx) => (
                            <motion.div key={v.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.05 }}>
                                <Link
                                    href={`/wellness/${programme.slug}/${v.slug}`}
                                    className="flex flex-col h-full glass-card rounded-2xl p-8 border-royal-blue/5 bg-white hover:border-sunset-orange/30 transition-all duration-500 group"
                                >
                                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-sunset-orange mb-4">
                                        <Clock size={12} />{v.duration}
                                    </div>
                                    <h3 className="text-xl font-semibold text-royal-blue uppercase tracking-tight leading-tight mb-4 group-hover:text-sunset-orange transition-colors">{v.name}</h3>
                                    <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed mb-6 line-clamp-3">{v.idealFor}</p>
                                    <span className="mt-auto font-semibold uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 text-royal-blue group-hover:text-sunset-orange transition-colors">
                                        View programme <ArrowRight size={14} />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {faqs.length > 0 && (
                <section className="py-24 container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <HelpCircle className="text-sunset-orange" size={26} />
                        <h2 className="text-3xl md:text-5xl font-semibold text-royal-blue uppercase tracking-tight">Frequently asked</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
                        {faqs.map((f, i) => (
                            <div key={i} className="glass-card p-8 rounded-3xl border-royal-blue/5 bg-white">
                                <h3 className="font-semibold text-royal-blue uppercase tracking-tight text-base leading-tight mb-3">{f.q}</h3>
                                <p className="text-dark-slate/65 font-semibold text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-24 container mx-auto px-6">
                <div className="glass-card p-12 md:p-20 rounded-2xl bg-royal-blue text-white relative overflow-hidden shadow-md">
                    <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-sunset-orange/15 blur-[110px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 max-w-3xl">
                        <ShieldCheck className="mb-8 text-sunset-orange opacity-50" size={48} />
                        <h2 className="text-3xl md:text-6xl font-semibold uppercase tracking-tight leading-none mb-8">
                            Plan your <span className="text-sunset-orange">{programme.label}</span>
                        </h2>
                        <p className="text-white/60 font-bold italic text-lg mb-10 leading-relaxed">
                            Tell the wellness desk your goals, dates and any health considerations, and we will build an honest, tailored programme with vetted practitioners.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/booking" className="inline-block bg-sunset-orange text-white py-5 px-11 rounded-2xl font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">
                                Consult the Wellness Desk
                            </Link>
                            <Link href="/wellness" className="inline-block bg-white/10 text-white py-5 px-11 rounded-2xl font-semibold uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 border border-white/10">
                                All wellness programmes
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
