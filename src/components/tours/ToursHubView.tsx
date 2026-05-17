"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";
import { packageSlug, type Package } from "@/data/tours";

export default function ToursHubView({
    grouped,
}: {
    grouped: { location: string; items: Package[] }[];
}) {
    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white relative overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="pt-60 pb-20 container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-8 text-royal-blue/50 font-black uppercase text-[10px] tracking-[0.3em]">
                            <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <span className="text-sunset-orange">Tours</span>
                        </nav>
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">Master Packages</h4>
                        <CharBlurIn text="THE TOUR ARCHIVE" className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] block mb-8" />
                        <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed max-w-2xl">
                            Every itinerary here is a foundation, not a fixed package &mdash; a precise mission
                            architecture ready for your bespoke modification, chauffeured and escorted end to end.
                        </p>
                    </div>
                </section>

                {grouped.map((group) => (
                    <section key={group.location} className="pb-24 container mx-auto px-6 relative z-10">
                        <div className="flex items-center gap-5 mb-10">
                            <h2 className="text-3xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter">{group.location}</h2>
                            <div className="h-px flex-1 bg-royal-blue/10" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-royal-blue/40">{group.items.length} missions</span>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.items.map((p, idx) => (
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
                ))}

                <Footer />
            </main>
        </SmoothScroll>
    );
}
