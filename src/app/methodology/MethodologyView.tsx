"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Zap, ShieldCheck, Search, Activity, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const StatItem = ({ label, value, desc }: { label: string; value: string; desc: string }) => (
    <div className="card p-7">
        <div className="text-clay font-display text-3xl font-semibold">{value}</div>
        <div className="mt-2 text-[13px] font-semibold text-ink">{label}</div>
        <p className="mt-4 text-[13px] leading-relaxed text-muted">{desc}</p>
    </div>
);

const ProtocolBlock = ({ step, title, desc, icon: Icon, features }: { step: string; title: string; desc: string; icon: any; features: string[] }) => (
    <div className="relative pl-12 pb-16 border-l border-line last:pb-0">
        <div className="absolute left-[-20px] top-0 flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-paper">
            <Icon size={20} />
        </div>
        <p className="eyebrow eyebrow-accent">Phase {step}</p>
        <h3 className="display-3 font-semibold text-ink mt-3">{title}</h3>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">{desc}</p>

        <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-line bg-paper-dim/60 p-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-clay" />
                    <span className="text-[13px] font-semibold text-ink">{feature}</span>
                </div>
            ))}
        </div>
    </div>
);

export default function MethodologyView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Briefing header */}
            <section className="bg-ink pt-36 pb-20 sm:pt-40">
                <div className="container-x">
                    <div className="max-w-4xl">
                        <p className="eyebrow text-clay-soft">Mission protocol briefing</p>
                        <h1 className="display-1 font-semibold text-paper mt-5">The Methodology</h1>
                        <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-paper/70">
                            Luxury is not a commodity. It is an operational standard. Our methodology is the blueprint for translating high-intent travel into absolute cinematic reality.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-4">
                        <StatItem label="Every Journey" value="Private" desc="Each itinerary is built for one party, never a shared coach tour." />
                        <StatItem label="On-Ground" value="Escorted" desc="Chauffeured, sequenced and accompanied across the route." />
                        <StatItem label="Wellness Framing" value="Honest" desc="Recuperative care described as care, never an overstated cure." />
                        <StatItem label="Your Contact" value="Personal" desc="You deal directly with the people planning your trip." />
                    </div>
                </div>
            </section>

            {/* Full dossier */}
            <section className="section">
                <div className="container-x">
                    <div className="flex flex-col gap-16 lg:flex-row">
                        <div className="lg:w-1/3">
                            <div className="sticky top-40">
                                <p className="eyebrow eyebrow-accent">Master Protocol</p>
                                <h2 className="display-2 font-semibold text-ink mt-4">The Full Dossier</h2>
                                <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-muted">
                                    Our operational cycle is a systematic loop designed to eliminate friction. It is the invisible layer between you and the environment.
                                </p>

                                <div className="mt-10 space-y-4">
                                    {['01 Curation', '02 Activation', '03 Execution', '04 Retention'].map((p) => (
                                        <div key={p} className="flex items-center gap-4 text-[12px] font-semibold text-stone">
                                            <div className="h-px w-8 bg-line" /> {p}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <ProtocolBlock
                                step="01"
                                icon={Search}
                                title="Intelligent Curation"
                                desc="We analyze client intent before architecting the route. This is not booking; this is translation. We convert your cultural desires into a 3D geometric movement protocol across Northern India."
                                features={['Intent Analysis', 'Route Optimization', 'Hospitality Mapping', 'Briefing Generation']}
                            />
                            <ProtocolBlock
                                step="02"
                                icon={Zap}
                                title="Kinetic Activation"
                                desc="The moment a protocol is greenlit, our fleet is prepared. Chauffeurs are briefed on route specifics, vehicles are checked, and the concierge network is put on alert."
                                features={['Fleet Diagnostics', 'Attaché Briefing', 'Sanitization Protocol', 'Tech Sync']}
                            />
                            <ProtocolBlock
                                step="03"
                                icon={ShieldCheck}
                                title="Zero-Friction Execution"
                                desc="The journey is kept in constant coordination on the ground. We watch for traffic bottlenecks, adjust timings in real-time, and maintain a constant, secure link with both the chauffeur and the guest."
                                features={['Live Coordination', 'Dynamic Routing', 'Concierge Support', 'Secure Linkage']}
                            />
                            <ProtocolBlock
                                step="04"
                                icon={Target}
                                title="Memory Archiving"
                                desc="Every mission concludes with a full debrief. We verify the success of the experience, archive client preferences for future protocols, and feed performance learnings back into our curation."
                                features={['Post-Mission Debrief', 'Preference Logging', 'Feedback Loop', 'Network Cleanup']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core values */}
            <section className="bg-ink section">
                <div className="container-x">
                    <div className="mb-16 text-center">
                        <p className="eyebrow text-clay-soft">Directives</p>
                        <h2 className="display-2 font-semibold text-paper mt-4">The Core Values</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-paper/10 bg-paper/5 p-10 text-center">
                            <Shield className="mx-auto mb-6 text-clay-soft" size={40} />
                            <h3 className="text-xl font-semibold text-paper">Uncompromising Safety</h3>
                            <p className="mt-3 text-[14px] leading-relaxed text-paper/60">Every vehicle is checked and prepared before it reaches you. No exceptions.</p>
                        </div>
                        <div className="rounded-2xl border border-paper/10 bg-paper/5 p-10 text-center">
                            <Activity className="mx-auto mb-6 text-clay-soft" size={40} />
                            <h3 className="text-xl font-semibold text-paper">Real-Time Agility</h3>
                            <p className="mt-3 text-[14px] leading-relaxed text-paper/60">We adapt to environmental shifts in seconds. Traffic, weather, or preference changes.</p>
                        </div>
                        <div className="rounded-2xl border border-paper/10 bg-paper/5 p-10 text-center">
                            <Target className="mx-auto mb-6 text-clay-soft" size={40} />
                            <h3 className="text-xl font-semibold text-paper">Absolute Precision</h3>
                            <p className="mt-3 text-[14px] leading-relaxed text-paper/60">We measure success by the second. On-time performance is our fundamental protocol.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section">
                <div className="container-x text-center">
                    <h2 className="display-2 font-semibold text-ink">Experience the Absolute Protocol</h2>
                    <div className="mt-10">
                        <Link href="/booking" className="btn-primary">
                            Execute Destination <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
