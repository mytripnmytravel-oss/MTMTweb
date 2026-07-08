"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, Info } from "lucide-react";
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
            <section className="section">
                <div className="container-x max-w-4xl">
                    <p className="eyebrow eyebrow-accent">The programme</p>
                    <h2 className="display-2 mt-3 font-medium text-ink">{programme.name}</h2>
                    <p className="mt-6 text-[18px] leading-relaxed text-muted">{programme.blurb}</p>
                    {meta && (
                        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-line bg-paper-dim/60 p-7">
                            <Info className="mt-0.5 shrink-0 text-clay" size={20} />
                            <p className="text-[15px] leading-relaxed text-ink-soft">{meta.framing}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Quick Facts */}
            {meta && (
                <section className="container-x pb-8">
                    <dl className="grid max-w-4xl gap-x-10 gap-y-5 rounded-2xl border border-line bg-paper-dim/60 p-8 sm:grid-cols-2 md:p-10">
                        {[
                            { label: "Therapies", value: `${programme.variants.length} tailored programmes` },
                            { label: "Typical length", value: meta.typicalLength },
                            { label: "Setting", value: meta.setting },
                            { label: "Best time", value: meta.bestTime },
                        ].map((f, i) => (
                            <div key={i} className="flex justify-between gap-6 border-b border-line pb-4 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                                <dt className="shrink-0 pt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-stone">{f.label}</dt>
                                <dd className="text-right text-sm font-medium text-ink md:text-base">{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            )}

            {/* Variants, the itinerary menu (each links to its deep brief) */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <div className="mb-12 flex items-center gap-5">
                        <h2 className="display-3 font-medium text-ink">Choose your programme</h2>
                        <div className="h-px flex-1 bg-line" />
                        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-stone">{programme.variants.length} options</span>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {programme.variants.map((v, idx) => (
                            <motion.div key={v.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.05 }}>
                                <Link
                                    href={`/wellness/${programme.slug}/${v.slug}`}
                                    className="card card-hover group flex h-full flex-col p-7"
                                >
                                    <div className="mb-4 flex items-center gap-2 text-[12px] font-medium text-clay">
                                        <Clock size={13} />{v.duration}
                                    </div>
                                    <h3 className="mb-4 text-xl font-medium leading-tight text-ink transition-colors group-hover:text-clay">{v.name}</h3>
                                    <p className="mb-6 line-clamp-3 text-[15px] leading-relaxed text-muted">{v.idealFor}</p>
                                    <span className="mt-auto flex items-center gap-2 text-sm font-medium text-clay">
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
                <section className="section">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Good to know</p>
                        <h2 className="display-3 mt-3 text-ink">Frequently asked</h2>
                        <div className="mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
                            {faqs.map((f, i) => (
                                <div key={i} className="card p-7">
                                    <h3 className="text-[17px] font-medium text-ink">{f.q}</h3>
                                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section pt-0">
                <div className="container-x">
                    <div className="rounded-3xl bg-ink p-12 md:p-16">
                        <div className="max-w-3xl">
                            <ShieldCheck className="mb-8 text-clay-soft" size={44} />
                            <h2 className="display-2 font-medium leading-tight text-paper">
                                Plan your <span className="text-clay-soft">{programme.label}</span>
                            </h2>
                            <p className="mt-6 text-[17px] leading-relaxed text-paper/70">
                                Tell the wellness desk your goals, dates and any health considerations, and we will build an honest, tailored programme with vetted practitioners.
                            </p>
                            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                <Link href="/booking" className="btn rounded-full bg-paper px-7 py-3.5 text-ink hover:bg-clay hover:text-paper">
                                    Consult the wellness desk
                                </Link>
                                <Link href="/wellness" className="btn rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-paper hover:bg-white/10">
                                    All wellness programmes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
