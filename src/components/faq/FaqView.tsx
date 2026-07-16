"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import type { FaqTopic, FaqAtom } from "@/data/faq";

function Shell({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}

const Crumbs = ({ trail }: { trail: { label: string; href?: string }[] }) => (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-muted">
        {trail.map((t, i) => (
            <React.Fragment key={i}>
                {t.href ? (
                    <Link href={t.href} className="hover:text-clay">{t.label}</Link>
                ) : (
                    <span className="text-clay">{t.label}</span>
                )}
                {i < trail.length - 1 && <ChevronRight size={12} />}
            </React.Fragment>
        ))}
    </nav>
);

export function FaqHubView({ topics }: { topics: FaqTopic[] }) {
    return (
        <Shell>
            <section className="container-x pt-40 pb-16">
                <Crumbs trail={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
                <p className="eyebrow eyebrow-accent">Intelligence</p>
                <h1 className="display-1 mt-4 font-semibold text-ink">Frequently asked</h1>
                <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
                    Direct answers to what travellers actually ask, the Golden Triangle, planning,
                    seasons, safety, wellness, fleet, weddings, and booking.
                </p>
            </section>
            <section className="container-x pb-28">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {topics.map((t, idx) => (
                        <motion.div key={t.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.06 }}>
                            <Link href={`/faq/${t.slug}`} className="card group block h-full p-7">
                                <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">{t.questions.length} questions</div>
                                <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">{t.name}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{t.blurb}</p>
                                <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-clay">Open <ArrowRight size={14} /></span>
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
            <section className="container-x pt-40 pb-16">
                <Crumbs trail={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }, { label: topic.name }]} />
                <p className="eyebrow eyebrow-accent">FAQ</p>
                <h1 className="display-1 mt-4 font-semibold text-ink">{topic.name}</h1>
                <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">{topic.blurb}</p>
            </section>
            <section className="container-x pb-24">
                <div className="max-w-4xl space-y-5">
                    {topic.questions.map((x, i) => (
                        <motion.div key={x.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                            <Link href={`/faq/${topic.slug}/${x.slug}`} className="card block p-7">
                                <h3 className="text-[17px] font-semibold text-ink">{x.q}</h3>
                                <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-muted">{x.a}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-16">
                    <p className="eyebrow eyebrow-accent">Other Topics</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {others.map((o) => (
                            <Link key={o.slug} href={`/faq/${o.slug}`} className="btn-outline btn-sm">{o.name}</Link>
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
            <section className="container-x pt-40 pb-16">
                <Crumbs trail={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }, { label: topic.name, href: `/faq/${topic.slug}` }, { label: atom.q }]} />
                <p className="eyebrow eyebrow-accent">{topic.name}</p>
                <h1 className="display-1 mt-4 font-semibold text-ink">{atom.q}</h1>
                <p className="mt-6 max-w-4xl font-display text-[26px] font-semibold leading-snug text-ink sm:text-[32px]">{atom.a}</p>
                <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-muted">
                    This answer is part of MyTripMyTravel&apos;s {topic.name} guidance, {topic.blurb} Every itinerary it
                    references is private, chauffeured, escorted, and built bespoke; the answers below cover the rest of
                    what travellers ask on this topic.
                </p>
                {atom.links && atom.links.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-3">
                        {atom.links.map((l, i) => (
                            <Link key={i} href={l.href} className="btn-outline btn-sm">
                                {l.label} <ArrowRight size={14} />
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">More in {topic.name}</p>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">The other answers in this topic, in full, so this page resolves the whole question, not just one.</p>
                    <div className="mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
                        {siblings.map((s) => (
                            <Link key={s.slug} href={`/faq/${topic.slug}/${s.slug}`} className="card block p-7">
                                <h3 className="text-[17px] font-semibold text-ink">{s.q}</h3>
                                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.a}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <LeadBlock
                source={`FAQ: ${atom.q}`}
                context={{ "Inquiry Type": "Question", Topic: topic.name, Question: atom.q }}
                variant="cta"
                heading="Still have a question?"
                subheading="Talk to a master planner about your India trip. We reply fast, quote transparently, and tailor every journey to you."
                waMessage={`Hi MyTripMyTravel, I have a question about ${topic.name}.`}
                faqs={[{ q: atom.q, a: atom.a }, ...siblings.map((s) => ({ q: s.q, a: s.a }))]}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "FAQ", item: "https://www.mytripmytravel.com/faq" },
                    { name: topic.name, item: `https://www.mytripmytravel.com/faq/${topic.slug}` },
                    { name: atom.q },
                ]}
            />
        </Shell>
    );
}
