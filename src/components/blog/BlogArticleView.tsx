"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadCTA, WhatsAppFab } from "@/components/lead/Lead";
import type { BlogPost } from "@/data/blog";

export default function BlogArticleView({ post, related }: { post: BlogPost; related: BlogPost[] }) {
    const jsonLd = [
        {
            "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt,
            image: post.heroImg, datePublished: post.datePublished, dateModified: post.dateModified,
            author: { "@type": "Organization", name: "MyTripMyTravel Editorial Desk" },
            publisher: { "@type": "Organization", name: "MyTripMyTravel", logo: { "@type": "ImageObject", url: "https://www.mytripmytravel.com/logo-full.png" } },
            mainEntityOfPage: `https://www.mytripmytravel.com/blog/${post.slug}`,
        },
        ...(post.faqs.length ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: post.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] : []),
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mytripmytravel.com" },
            { "@type": "ListItem", position: 2, name: "Journal", item: "https://www.mytripmytravel.com/blog" },
            { "@type": "ListItem", position: 3, name: post.title },
        ] },
    ];

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero */}
            <section className="relative flex h-[58vh] min-h-[420px] items-end overflow-hidden">
                <Image src={post.heroImg} alt={post.title} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/15" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/blog" className="hover:text-clay-soft">Journal</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{post.category}</span>
                    </nav>
                    <span className="eyebrow text-paper/70">{post.category}</span>
                    <h1 className="display-2 mt-4 max-w-4xl font-semibold text-paper">{post.title}</h1>
                </div>
            </section>

            {/* Body */}
            <article className="section">
                <div className="container-narrow">
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted">
                        <span className="flex items-center gap-1.5"><Calendar size={14} className="text-clay" /> <time dateTime={post.datePublished}>{post.datePublished}</time></span>
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-clay" /> {post.readingMinutes} min read</span>
                        <span>By the MyTripMyTravel Editorial Desk</span>
                    </div>

                    <p className="mt-10 font-display text-[22px] font-semibold leading-snug text-ink sm:text-[26px]">{post.answer}</p>

                    <div className="mt-12 space-y-12">
                        {post.sections.map((s, i) => (
                            <motion.section key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="text-2xl font-semibold text-ink sm:text-[28px]">{s.heading}</h2>
                                <div className="mt-4 space-y-4">
                                    {s.paragraphs.map((p, j) => (
                                        <p key={j} className="text-[17px] leading-relaxed text-ink-soft">{p}</p>
                                    ))}
                                </div>
                            </motion.section>
                        ))}
                    </div>

                    {post.related.length > 0 && (
                        <div className="mt-14 rounded-2xl border border-line bg-white p-7">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-stone">Explore further</p>
                            <div className="mt-4 flex flex-wrap gap-2.5">
                                {post.related.map((l, i) => (
                                    <Link key={i} href={l.href} className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-dim px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink hover:text-clay">
                                        {l.label} <ArrowRight size={14} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {post.faqs.length > 0 && (
                        <div className="mt-14">
                            <h2 className="text-2xl font-semibold text-ink sm:text-[28px]">Frequently asked</h2>
                            <div className="mt-6 divide-y divide-line">
                                {post.faqs.map((f, i) => (
                                    <details key={i} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-4 text-[17px] font-semibold text-ink">
                                            {f.q}
                                            <ChevronRight size={18} className="shrink-0 text-stone transition-transform group-open:rotate-90 group-open:text-clay" />
                                        </summary>
                                        <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            {/* Related reads */}
            {related.length > 0 && (
                <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Related reads</p>
                        <h2 className="display-3 mt-3 text-ink">More from the journal</h2>
                        <div className="mt-10 grid gap-6 md:grid-cols-3">
                            {related.map((p) => (
                                <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-hover group overflow-hidden">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image src={p.heroImg} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                                        <span className="absolute bottom-4 left-5 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold text-ink">{p.category}</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-ink group-hover:text-clay">{p.title}</h3>
                                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <LeadCTA
                title="Ready to turn reading into travelling?"
                subtitle="Our travel desk builds a private, chauffeured itinerary around everything you have just read. Free quote, no obligation."
                waMessage="Hi MyTripMyTravel, I read your journal and would like to plan a trip."
            />

            <Footer />
            <WhatsAppFab message="Hi MyTripMyTravel, I would like to plan a trip in India." />
        </main>
    );
}
