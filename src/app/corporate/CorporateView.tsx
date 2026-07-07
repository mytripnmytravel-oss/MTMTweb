"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Briefcase, Plane, Building, Target, ArrowRight } from "lucide-react";

const PILLARS = [
    { title: "GPS-tracked fleet", icon: Building },
    { title: "Private aviation", icon: Plane },
    { title: "Delegation logistics", icon: Briefcase },
    { title: "MICE & events", icon: Target },
];

export default function CorporateView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="section pt-36 sm:pt-40">
                <div className="container-x grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Corporate travel</p>
                        <h1 className="display-1 mt-4 font-medium text-ink">Executive journeys, seamlessly run.</h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                            Zero-friction logistics for executive teams and delegations across India, GPS-tracked ground fleets, private aviation, accommodation and MICE events, all under a single accountable lead.
                        </p>
                        <Link href="/booking" className="btn-primary mt-8">Brief the corporate desk <ArrowRight size={16} /></Link>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        {PILLARS.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div key={p.title} className="card flex aspect-square flex-col items-center justify-center p-8 text-center">
                                    <Icon className="text-clay" size={30} />
                                    <h5 className="mt-4 text-[15px] font-medium text-ink">{p.title}</h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
