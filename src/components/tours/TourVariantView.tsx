"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Clock, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
import { packageSlug } from "@/data/tours";
import type { VariantContent } from "@/data/tourVariants";

export default function TourVariantView({
    content,
    siblings,
}: {
    content: VariantContent;
    siblings: { label: string; href: string }[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white relative overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="pt-60 pb-16 container mx-auto px-6 relative z-10">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 mb-8 text-royal-blue/50 font-black uppercase text-[10px] tracking-[0.3em]">
                        <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/tours" className="hover:text-sunset-orange transition-colors">Tours</Link>
                        <ChevronRight size={12} />
                        <Link href="/tours/golden-triangle" className="hover:text-sunset-orange transition-colors">Golden Triangle</Link>
                        <ChevronRight size={12} />
                        <span className="text-sunset-orange">{content.label}</span>
                    </nav>
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">Golden Triangle</h4>
                    <CharBlurIn text={content.h1.toUpperCase()} className="text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-[0.88] block mb-10" />
                    <p className="text-2xl md:text-3xl font-black text-royal-blue leading-snug tracking-tight max-w-5xl mb-10">
                        {content.answer}
                    </p>
                    <p className="text-lg md:text-xl text-dark-slate/70 font-bold leading-relaxed max-w-3xl">
                        {content.intro}
                    </p>
                </section>

                <section className="pb-24 container mx-auto px-6 relative z-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.packages.map((p, idx) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 3) * 0.06 }}
                            >
                                <Link
                                    href={`/tours/${packageSlug(p)}`}
                                    className="block glass-card rounded-[2.5rem] overflow-hidden group border-royal-blue/5 hover:border-sunset-orange/30 transition-all duration-700 h-full"
                                >
                                    <div className="relative h-56">
                                        <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                                            <Clock size={12} className="text-sunset-orange" />
                                            <span className="text-[10px] font-black uppercase text-royal-blue tracking-widest">{p.duration}</span>
                                        </div>
                                    </div>
                                    <div className="p-7">
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-sunset-orange mb-3">{p.theme}</div>
                                        <h3 className="text-xl font-black text-royal-blue uppercase tracking-tighter mb-3 leading-tight group-hover:text-sunset-orange transition-colors">{p.title}</h3>
                                        <p className="text-dark-slate/60 font-bold italic text-sm mb-6 leading-relaxed line-clamp-2">{p.highlight}</p>
                                        <div className="flex items-center justify-between pt-5 border-t border-royal-blue/5">
                                            <span className="text-xl font-black text-royal-blue">{p.price}</span>
                                            <span className="font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 text-royal-blue group-hover:text-sunset-orange transition-colors">
                                                Open <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {content.faqs.length > 0 && (
                    <section className="py-24 bg-royal-blue/5">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-14">
                                <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Intelligence</h4>
                                <CharBlurIn text={`${content.label.toUpperCase()} FAQ`} className="text-3xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter block leading-none" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                {content.faqs.map((f, i) => (
                                    <div key={i} className="glass-card p-10 rounded-3xl border-royal-blue/5">
                                        <div className="flex items-start gap-4 mb-4">
                                            <HelpCircle className="text-sunset-orange shrink-0 mt-1" size={20} />
                                            <h3 className="font-black text-royal-blue uppercase tracking-tight text-lg leading-tight">{f.q}</h3>
                                        </div>
                                        <p className="text-dark-slate/60 font-bold italic text-sm leading-relaxed pl-9">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <section className="py-24 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-5">Explore Other Slices</h4>
                    <div className="flex flex-wrap gap-3">
                        {siblings.map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500"
                            >
                                {s.label}
                            </Link>
                        ))}
                        <Link href="/destinations/region/golden-triangle" className="px-6 py-3 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-2">
                            Golden Triangle destinations <ArrowRight size={14} />
                        </Link>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
