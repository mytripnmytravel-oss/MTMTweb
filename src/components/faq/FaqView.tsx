"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { FaqTopic, FaqAtom } from "@/data/faq";

function Shell({ children }: { children: React.ReactNode }) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />
                {children}
                <Footer />
            </main>
        </SmoothScroll>
    );
}

const Crumbs = ({ trail }: { trail: { label: string; href?: string }[] }) => (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-royal-blue/50 font-black uppercase text-[10px] tracking-[0.3em]">
        {trail.map((t, i) => (
            <React.Fragment key={i}>
                {t.href ? (
                    <Link href={t.href} className="hover:text-sunset-orange transition-colors">{t.label}</Link>
                ) : (
                    <span className="text-sunset-orange">{t.label}</span>
                )}
                {i < trail.length - 1 && <ChevronRight size={12} />}
            </React.Fragment>
        ))}
    </nav>
);

export function FaqHubView({ topics }: { topics: FaqTopic[] }) {
    return (
        <Shell>
            <section className="pt-60 pb-20 container mx-auto px-6">
                <Crumbs trail={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
                <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">Intelligence</h4>
                <CharBlurIn text="FREQUENTLY ASKED" className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] block mb-8" />
                <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed max-w-2xl">
                    Direct answers to what travellers actually ask &mdash; the Golden Triangle, planning,
                    seasons, safety, wellness, fleet, weddings, and booking.
                </p>
            </section>
            <section className="pb-32 container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topics.map((t, idx) => (
                        <motion.div key={t.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.06 }}>
                            <Link href={`/faq/${t.slug}`} className="block glass-card rounded-[2.5rem] p-9 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all duration-500 h-full">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-3">{t.questions.length} questions</div>
                                <h3 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4 leading-tight group-hover:text-sunset-orange transition-colors">{t.name}</h3>
                                <p className="text-dark-slate/60 font-bold italic text-sm mb-6 leading-relaxed">{t.blurb}</p>
                                <span className="font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 text-royal-blue group-hover:text-sunset-orange transition-colors">Open <ArrowRight size={14} /></span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Shell>
    );
}

export function FaqTopicView({ topic, others }: { topic: FaqTopic; others: FaqTopic[] }) {
    return (
        <Shell>
            <section className="pt-60 pb-16 container mx-auto px-6">
                <Crumbs trail={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }, { label: topic.name }]} />
                <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">FAQ</h4>
                <CharBlurIn text={topic.name.toUpperCase()} className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-[0.9] block mb-6" />
                <p className="text-dark-slate font-bold italic text-lg opacity-60 max-w-2xl">{topic.blurb}</p>
            </section>
            <section className="pb-24 container mx-auto px-6">
                <div className="space-y-5 max-w-4xl">
                    {topic.questions.map((x, i) => (
                        <motion.div key={x.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                            <Link href={`/faq/${topic.slug}/${x.slug}`} className="block glass-card rounded-3xl p-8 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all">
                                <div className="flex items-start gap-4 mb-3">
                                    <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                    <h3 className="font-black text-royal-blue uppercase tracking-tight text-lg leading-tight group-hover:text-sunset-orange transition-colors">{x.q}</h3>
                                </div>
                                <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9 line-clamp-2">{x.a}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-16">
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Other Topics</h4>
                    <div className="flex flex-wrap gap-3">
                        {others.map((o) => (
                            <Link key={o.slug} href={`/faq/${o.slug}`} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500">{o.name}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </Shell>
    );
}

export function FaqAtomView({
    topic,
    atom,
    siblings,
}: {
    topic: FaqTopic;
    atom: FaqAtom;
    siblings: FaqAtom[];
}) {
    return (
        <Shell>
            <section className="pt-60 pb-16 container mx-auto px-6">
                <Crumbs trail={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }, { label: topic.name, href: `/faq/${topic.slug}` }, { label: atom.q }]} />
                <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">{topic.name}</h4>
                <h1 className="text-3xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter leading-[0.95] mb-10">{atom.q}</h1>
                <p className="text-2xl md:text-3xl font-black text-royal-blue leading-snug tracking-tight max-w-4xl mb-8">{atom.a}</p>
                <p className="text-base md:text-lg text-dark-slate/60 font-bold italic max-w-3xl mb-12 leading-relaxed">
                    This answer is part of MyTripMyTravel&apos;s {topic.name} guidance — {topic.blurb} Every itinerary it
                    references is private, chauffeured, escorted, and built bespoke; the answers below cover the rest of
                    what travellers ask on this topic.
                </p>
                {atom.links && atom.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                        {atom.links.map((l, i) => (
                            <Link key={i} href={l.href} className="px-6 py-4 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                {l.label} <ArrowRight size={14} />
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <section className="py-20 bg-royal-blue/5">
                <div className="container mx-auto px-6">
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-3">More in {topic.name}</h4>
                    <p className="text-dark-slate/50 font-bold italic text-sm mb-10 max-w-2xl">The other answers in this topic, in full — so this page resolves the whole question, not just one.</p>
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
                        {siblings.map((s) => (
                            <Link key={s.slug} href={`/faq/${topic.slug}/${s.slug}`} className="block glass-card rounded-3xl p-8 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all">
                                <div className="flex items-start gap-4 mb-4">
                                    <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={18} />
                                    <h3 className="font-black text-royal-blue uppercase tracking-tight text-base leading-tight group-hover:text-sunset-orange transition-colors">{s.q}</h3>
                                </div>
                                <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{s.a}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-28 container mx-auto px-6">
                <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-royal-blue text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">Still have a question?</h2>
                    <Magnetic>
                        <Link href="/booking" className="inline-block relative z-10 bg-sunset-orange text-white py-6 px-12 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">
                            Ask a Master Planner
                        </Link>
                    </Magnetic>
                </div>
            </section>
        </Shell>
    );
}
