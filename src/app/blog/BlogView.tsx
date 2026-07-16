"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadCTA, WhatsAppFab } from "@/components/lead/Lead";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

const fade = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } } as const;

export default function BlogView() {
    const posts = blogPosts;
    const [feature, ...rest] = posts;

    const jsonLd = {
        "@context": "https://schema.org", "@type": "Blog", name: "MyTripMyTravel Journal",
        description: "Planning guides, destination deep dives and honest field notes for travelling India well.",
        blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `https://www.mytripmytravel.com/blog/${p.slug}`, datePublished: p.datePublished })),
    };

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero */}
            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">The journal</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-semibold text-ink">Guides, deep dives and honest field notes</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                        Planning guides, destination deep dives and straight-talking advice from the people who plan India for a living. This is the planning hub of MyTripMyTravel.
                    </p>
                </div>
            </section>

            {/* Featured */}
            {feature && (
                <section className="section">
                    <div className="container-x">
                        <Link href={`/blog/${feature.slug}`} className="card card-hover group grid overflow-hidden lg:grid-cols-2">
                            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                                <Image src={feature.heroImg} alt={feature.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                            </div>
                            <div className="flex flex-col justify-center p-8 sm:p-12">
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] text-muted">
                                    <span className="eyebrow eyebrow-accent">{feature.category}</span>
                                    <span className="flex items-center gap-1.5"><Calendar size={13} className="text-clay" /> {feature.datePublished}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={13} className="text-clay" /> {feature.readingMinutes} min read</span>
                                </div>
                                <h2 className="display-3 mt-4 text-ink group-hover:text-clay">{feature.title}</h2>
                                <p className="mt-4 text-[16px] leading-relaxed text-muted">{feature.excerpt}</p>
                                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-clay">Read the guide <ArrowRight size={15} /></span>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Grid */}
            <section className="section pt-0">
                <div className="container-x">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {rest.map((post, idx) => (
                            <motion.article key={post.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} transition={{ delay: (idx % 3) * 0.05 }}>
                                <Link href={`/blog/${post.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image src={post.heroImg} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold text-ink">{post.category}</span>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex items-center gap-3 text-[12px] text-stone">
                                            <span className="flex items-center gap-1.5"><Calendar size={12} className="text-clay" /> {post.datePublished}</span>
                                            <span className="flex items-center gap-1.5"><Clock size={12} className="text-clay" /> {post.readingMinutes} min</span>
                                        </div>
                                        <h3 className="mt-3 text-lg font-semibold text-ink group-hover:text-clay">{post.title}</h3>
                                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay">Read more <ChevronRight size={15} /></span>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <LeadCTA
                title="Reading is the easy part. We will do the rest."
                subtitle="Tell us where you want to go and our travel desk turns it into a private, chauffeured itinerary with a transparent quote."
                waMessage="Hi MyTripMyTravel, I have been reading your journal and would like to plan a trip."
            />

            <Footer />
            <WhatsAppFab message="Hi MyTripMyTravel, I would like to plan a trip in India." />
        </main>
    );
}
