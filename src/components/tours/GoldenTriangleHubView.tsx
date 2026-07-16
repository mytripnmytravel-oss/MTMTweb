"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";

export default function GoldenTriangleHubView({
    byTheme,
    byDuration,
    byMonth,
    byOrigin,
    byCombo,
}: {
    byTheme: { label: string; href: string }[];
    byDuration: { label: string; href: string }[];
    byMonth: { label: string; href: string }[];
    byOrigin: { label: string; href: string }[];
    byCombo?: { label: string; href: string }[];
}) {
    const Block = ({
        title,
        items,
    }: {
        title: string;
        items: { label: string; href: string }[];
    }) => (
        <div className="mb-16">
            <div className="mb-8 flex items-center gap-5">
                <h2 className="display-3 text-ink">{title}</h2>
                <div className="h-px flex-1 bg-line" />
            </div>
            <div className="flex flex-wrap gap-3">
                {items.map((i) => (
                    <Link key={i.href} href={i.href} className="btn-outline btn-sm">
                        {i.label} <ArrowRight size={14} />
                    </Link>
                ))}
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x">
                    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[12px] text-muted">
                        <Link href="/" className="hover:text-clay">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/tours" className="hover:text-clay">Tours</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay">Golden Triangle</span>
                    </nav>
                    <p className="eyebrow eyebrow-accent">The definitive circuit</p>
                    <h1 className="display-1 mt-4 font-semibold text-ink">Golden Triangle</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                        Delhi, Agra, and Jaipur, sliced every way travellers actually search. Pick the
                        angle that matches your trip: by theme, by duration, or by the month you travel.
                    </p>
                    <div className="mt-8">
                        <Link href="/tours/golden-triangle-all" className="btn-outline btn-sm">
                            Browse all variations <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-x">
                    <Block title="By theme" items={byTheme} />
                    <Block title="By duration" items={byDuration} />
                    <Block title="By month of travel" items={byMonth} />
                    <Block title="By departure city" items={byOrigin} />
                    {byCombo && byCombo.length > 0 && <Block title="By duration and theme" items={byCombo} />}
                </div>
            </section>

            <LeadBlock
                variant="cta"
                source="Golden Triangle tours hub"
                context={{ "Inquiry Type": "Tour", Subject: "Golden Triangle" }}
                heading="Plan your Golden Triangle tour"
                subheading="Delhi, Agra, and Jaipur, tailored to your dates, pace, and budget. Tell us what you want and we send a private, chauffeured plan with a transparent quote."
                waMessage="Hi MyTripMyTravel, I am interested in a Golden Triangle tour."
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Tours", item: "https://www.mytripmytravel.com/tours" },
                    { name: "Golden Triangle" },
                ]}
            />

            <Footer />
        </main>
    );
}
