"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EnquiryForm, WhatsAppFab } from "@/components/lead/Lead";
import Link from "next/link";
import { Briefcase, Plane, Building, Target, ArrowRight, Users, ShieldCheck, CalendarClock, Headset } from "lucide-react";

const PILLARS = [
    { title: "GPS-tracked fleet", icon: Building, desc: "Chauffeured sedans, SUVs and coaches for teams of any size, tracked in real time." },
    { title: "Private aviation", icon: Plane, desc: "Charter and scheduled arrangements, airport meet-and-greet and fast transfers." },
    { title: "Delegation logistics", icon: Briefcase, desc: "Multi-city movement, accommodation and dedicated on-ground coordinators." },
    { title: "MICE and events", icon: Target, desc: "Meetings, incentives, conferences and offsites, planned end to end." },
];

const USE_CASES = [
    { title: "Executive travel", desc: "Board members and leadership moved securely and comfortably across cities, on schedule." },
    { title: "Team offsites", desc: "Curated destinations, transfers, stays and activities for a team retreat that actually lands." },
    { title: "Incentive trips", desc: "Reward journeys that feel premium, from the Golden Triangle to Kerala and the hills." },
    { title: "Conferences and MICE", desc: "Delegate logistics, venue coordination and airport handling under one accountable desk." },
];

const ASSURANCE = [
    { icon: ShieldCheck, title: "Accountable single point", desc: "One coordinator owns your account from brief to debrief." },
    { icon: CalendarClock, title: "On-time, every time", desc: "Buffered scheduling and tracked vehicles keep the plan on rails." },
    { icon: Headset, title: "24/7 support", desc: "A human on call throughout the programme." },
    { icon: Users, title: "Any group size", desc: "From a two person board trip to a five hundred delegate conference." },
];

export default function CorporateView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="section pt-36 sm:pt-40">
                <div className="container-x grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Corporate travel</p>
                        <h1 className="display-1 mt-4 font-medium text-ink">Executive journeys, seamlessly run.</h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                            Zero-friction logistics for executive teams and delegations across India. GPS-tracked ground fleets, private aviation, accommodation and MICE events, all under a single accountable lead.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/booking" className="btn-primary">Brief the corporate desk <ArrowRight size={16} /></Link>
                            <a href="/corporate/events" className="btn-outline">Corporate events</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        {PILLARS.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div key={p.title} className="card p-6">
                                    <Icon className="text-clay" size={26} />
                                    <h5 className="mt-4 text-[15px] font-medium text-ink">{p.title}</h5>
                                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{p.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Use cases */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">What we run</p>
                    <h2 className="display-2 mt-3 text-ink">Programmes we handle</h2>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {USE_CASES.map((u) => (
                            <div key={u.title} className="card p-7">
                                <h3 className="text-xl font-medium text-ink">{u.title}</h3>
                                <p className="mt-3 text-[14px] leading-relaxed text-muted">{u.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Assurance */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Why teams choose us</p>
                    <h2 className="display-2 mt-3 text-ink">Dependable, from brief to debrief</h2>
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {ASSURANCE.map((a) => {
                            const Icon = a.icon;
                            return (
                                <div key={a.title}>
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-dim text-clay"><Icon size={20} /></span>
                                    <h3 className="mt-4 text-[15px] font-medium text-ink">{a.title}</h3>
                                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{a.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Enquiry */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x grid items-start gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Talk to the corporate desk</p>
                        <h2 className="display-2 mt-3 text-ink">Let us plan your programme.</h2>
                        <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
                            Share the outline, dates, cities and group size. We reply with a proposed plan and a clear, itemised quote. One coordinator owns your account throughout.
                        </p>
                    </div>
                    <EnquiryForm
                        source="Corporate hub"
                        context={{ "Inquiry Type": "Corporate" }}
                        heading="Enquire about corporate travel"
                        subheading="We reply fast with a plan and a transparent quote."
                    />
                </div>
            </section>

            <Footer />
            <WhatsAppFab message="Hi MyTripMyTravel, I would like to plan corporate travel or an offsite in India." />
        </main>
    );
}
