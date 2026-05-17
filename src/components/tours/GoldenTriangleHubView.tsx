"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, GlassyProgressBar } from "@/components/ClientComponents";

export default function GoldenTriangleHubView({
    byTheme,
    byDuration,
    byMonth,
    byOrigin,
}: {
    byTheme: { label: string; href: string }[];
    byDuration: { label: string; href: string }[];
    byMonth: { label: string; href: string }[];
    byOrigin: { label: string; href: string }[];
}) {
    const Block = ({
        title,
        items,
    }: {
        title: string;
        items: { label: string; href: string }[];
    }) => (
        <div className="mb-20">
            <div className="flex items-center gap-5 mb-8">
                <h2 className="text-2xl md:text-4xl font-black text-royal-blue uppercase tracking-tighter">{title}</h2>
                <div className="h-px flex-1 bg-royal-blue/10" />
            </div>
            <div className="flex flex-wrap gap-3">
                {items.map((i) => (
                    <Link
                        key={i.href}
                        href={i.href}
                        className="px-6 py-4 glass-card rounded-2xl border-royal-blue/10 font-black uppercase text-[11px] tracking-widest text-royal-blue hover:bg-sunset-orange hover:text-white transition-all duration-500 flex items-center gap-3"
                    >
                        {i.label} <ArrowRight size={14} />
                    </Link>
                ))}
            </div>
        </div>
    );

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white relative overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                <section className="pt-60 pb-20 container mx-auto px-6 relative z-10">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-8 text-royal-blue/50 font-black uppercase text-[10px] tracking-[0.3em]">
                        <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/tours" className="hover:text-sunset-orange transition-colors">Tours</Link>
                        <ChevronRight size={12} />
                        <span className="text-sunset-orange">Golden Triangle</span>
                    </nav>
                    <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">The Definitive Circuit</h4>
                    <CharBlurIn text="GOLDEN TRIANGLE" className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] block mb-8" />
                    <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed max-w-2xl mb-6">
                        Delhi, Agra, and Jaipur &mdash; sliced every way travellers actually search. Pick the
                        angle that matches your trip: by theme, by duration, or by the month you travel.
                    </p>
                    <Link href="/tours/golden-triangle-all" className="inline-flex items-center gap-3 text-sunset-orange font-black uppercase text-xs tracking-[0.3em] hover:text-royal-blue transition-colors">
                        Browse all variations <ArrowRight size={14} />
                    </Link>
                </section>

                <section className="pb-24 container mx-auto px-6 relative z-10">
                    <Block title="By Theme" items={byTheme} />
                    <Block title="By Duration" items={byDuration} />
                    <Block title="By Month of Travel" items={byMonth} />
                    <Block title="By Departure City" items={byOrigin} />
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
