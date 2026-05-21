"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, HelpCircle, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, GlassyProgressBar } from "@/components/ClientComponents";
import type { BlogPost } from "@/data/blog";

export default function BlogArticleView({
    post,
    related,
}: {
    post: BlogPost;
    related: BlogPost[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="relative h-[60vh] flex items-end overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image src={post.heroImg} alt={post.title} fill priority className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-royal-blue/10" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 pb-16">
                        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-white/70 font-black uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/blog" className="hover:text-sunset-orange transition-colors">Journal</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">{post.category}</span>
                        </nav>
                        <motion.h4 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">{post.category}</motion.h4>
                        <CharBlurIn text={post.title} className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] block" />
                    </div>
                </section>

                <section className="py-24 md:py-28 container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-6 mb-12 text-[10px] font-black uppercase tracking-[0.3em] text-royal-blue/50">
                            <span className="flex items-center gap-2"><Calendar size={14} className="text-sunset-orange" /> Published <time dateTime={post.datePublished}>{post.datePublished}</time></span>
                            <span className="flex items-center gap-2"><Clock size={14} className="text-sunset-orange" /> {post.readingMinutes} min read</span>
                            <span>By MyTripMyTravel Editorial Desk</span>
                        </div>

                        <p className="text-2xl md:text-3xl font-black text-royal-blue leading-snug tracking-tight mb-16">{post.answer}</p>

                        <div className="space-y-12">
                            {post.sections.map((s, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                    <h2 className="text-2xl md:text-4xl font-black text-royal-blue uppercase tracking-tighter leading-tight mb-6">{s.heading}</h2>
                                    <div className="space-y-5">
                                        {s.paragraphs.map((p, j) => (
                                            <p key={j} className="text-lg md:text-xl text-dark-slate/75 font-bold leading-relaxed">{p}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {post.related.length > 0 && (
                    <section className="py-16 bg-royal-blue/5">
                        <div className="container mx-auto px-6">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-6">Explore further</h4>
                            <div className="flex flex-wrap gap-3">
                                {post.related.map((l, i) => (
                                    <Link key={i} href={l.href} className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3">
                                        {l.label} <ArrowRight size={14} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {post.faqs.length > 0 && (
                    <section className="py-24 container mx-auto px-6">
                        <div className="text-center mb-14">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                            <CharBlurIn text="FAQ" className="text-2xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter block leading-none" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {post.faqs.map((f, i) => (
                                <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                    <div className="flex items-start gap-4 mb-4">
                                        <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                        <h3 className="font-black text-royal-blue uppercase tracking-tight text-base leading-tight">{f.q}</h3>
                                    </div>
                                    <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {related.length > 0 && (
                    <section className="py-24 bg-royal-blue/5">
                        <div className="container mx-auto px-6">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-8">Related reads</h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {related.map((p) => (
                                    <Link key={p.slug} href={`/blog/${p.slug}`} className="block glass-card rounded-[2.5rem] overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/30 transition-all duration-700">
                                        <div className="relative h-48">
                                            <Image src={p.heroImg} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/70 to-transparent" />
                                            <div className="absolute bottom-5 left-6 right-6">
                                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-1">{p.category}</div>
                                                <h3 className="text-lg font-black text-white leading-tight">{p.title}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed line-clamp-3">{p.excerpt}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section className="py-28 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-20 rounded-[4rem] bg-royal-blue text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-sunset-orange/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-10 relative z-10">Plan it with a <span className="text-sunset-orange">master planner</span></h2>
                        <Magnetic>
                            <Link href="/booking" className="inline-block relative z-10 bg-sunset-orange text-white py-6 px-12 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl">Begin a Mission Brief</Link>
                        </Magnetic>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
