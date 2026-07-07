"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Heart, Shield, Stethoscope, Wind, Droplets, MapPin, ArrowRight, ArrowUpRight, Clock, Star, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const fade = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } } as const;

const PROGRAMMES = [
    { title: "Yoga & Soul", desc: "Master-led yoga and meditation with vetted teachers in Rishikesh and Himalayan sanctuaries — calibrated to every level.", icon: Wind, tags: ["Hatha", "Vinyasa", "Meditation"], image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Yoga_Meditation%2C_Rishikesh.jpg", alt: "Yoga on the banks of the Ganges at Rishikesh", href: "/wellness/yoga-soul" },
    { title: "Orthopedic Restoration", desc: "Recovery travel and gentle-paced logistics arranged around treatment you undertake with accredited providers — a travel architect, not a medical provider.", icon: Stethoscope, tags: ["Joint Care", "Spine Health", "Post-Op Transit"], image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Hospital_Room_Interior.jpg", alt: "A calm private recovery suite", href: "/wellness/orthopedic" },
    { title: "Ayurvedic Care", desc: "AYUSH-certified, physician-led Ayurveda in its Keralan home — authentic recuperative therapy, framed honestly rather than as a cure.", icon: Droplets, tags: ["Panchakarma", "Abhyanga", "Rasayana"], image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ayurvedic_Oil_Massage.jpg", alt: "Ayurvedic oil therapy at a certified Kerala centre", href: "/wellness/ayurvedic" },
    { title: "Therapeutic Massage", desc: "Master-therapist bodywork for relaxation and physical recovery, across Indian and global modalities.", icon: Activity, tags: ["Deep Tissue", "Marma", "Hot Stone"], image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Massage_in_India.jpg", alt: "Therapeutic bodywork at an Indian wellness sanctuary", href: "/wellness/massage" },
];

const CONCIERGE = [
    "A pre-arrival consultation to understand your goals and any health considerations.",
    "Seamless private transit from the airport directly to your retreat or centre.",
    "A dedicated facilitator on call throughout your stay.",
    "Honest, take-home guidance on diet and daily practice after the programme.",
];

const ASSURANCES = [
    { icon: Shield, title: "Discreet & confidential", desc: "Your details and health notes handled privately." },
    { icon: Star, title: "Vetted partners", desc: "AYUSH-certified centres and accredited facilities." },
    { icon: Clock, title: "Priority response", desc: "A fast reply from the wellness desk on enquiry." },
    { icon: Heart, title: "Honest care", desc: "Genuine therapy, never an overstated cure." },
];

export default function WellnessHubView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* Hero */}
            <section className="border-b border-line pb-14 pt-36 sm:pt-40">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Wellness & sanctuary</p>
                    <h1 className="display-1 mt-4 max-w-3xl font-medium text-ink">Recovery, quietly held.</h1>
                    <div className="mt-6 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <p className="max-w-2xl text-lg leading-relaxed text-muted">
                            India is the world's wellness heartland — authentic Ayurveda, master-led yoga, therapeutic bodywork and carefully arranged recovery travel, delivered with vetted practitioners and honest guidance.
                        </p>
                        <Link href="/booking" className="btn-primary shrink-0">Consult the wellness desk <ArrowRight size={16} /></Link>
                    </div>
                </div>
            </section>

            {/* Programmes */}
            <section className="section">
                <div className="container-x grid gap-6 md:grid-cols-2">
                    {PROGRAMMES.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
                                <Link href={p.href} className="card card-hover group flex h-full flex-col overflow-hidden">
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image src={p.image} alt={p.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                    </div>
                                    <div className="flex flex-1 flex-col p-7">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper-dim text-clay"><Icon size={22} /></span>
                                        <h3 className="mt-5 text-2xl font-medium text-ink">{p.title}</h3>
                                        <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.desc}</p>
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {p.tags.map((t) => <span key={t} className="pill">{t}</span>)}
                                        </div>
                                        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-clay">Explore programme <ArrowUpRight size={15} /></span>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Concierge */}
            <section className="bg-ink py-20 sm:py-28">
                <div className="container-x grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow text-clay-soft">Wellness concierge</p>
                        <h2 className="display-2 mt-4 text-paper">Zero-surprise logistics.</h2>
                        <div className="mt-8 space-y-5">
                            {CONCIERGE.map((s, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-clay-soft" />
                                    <p className="text-[15px] leading-relaxed text-paper/70">{s}</p>
                                </div>
                            ))}
                        </div>
                        <Link href="/booking" className="btn mt-9 rounded-full bg-paper px-7 py-3.5 text-ink hover:bg-clay hover:text-paper">Plan a programme</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {ASSURANCES.map((a, i) => {
                            const Icon = a.icon;
                            return (
                                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                                    <Icon className="text-clay-soft" size={26} />
                                    <h5 className="mt-5 text-base font-medium text-paper">{a.title}</h5>
                                    <p className="mt-1 text-[13px] leading-relaxed text-paper/50">{a.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Retreat */}
            <section className="section">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Where you'll stay</p>
                    <h2 className="display-3 mt-3 text-ink">Restored heritage retreats, far from the noise</h2>
                    <div className="relative mt-10 overflow-hidden rounded-3xl">
                        <div className="relative aspect-[16/10] sm:aspect-[21/9]">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/d/de/Rawla_Narlai_Fort_Entrance.jpg" alt="A restored heritage fort-haveli retreat in the Aravalli hills of Rajasthan" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
                            <div className="flex items-center gap-2 text-paper/80">
                                <MapPin className="text-clay-soft" size={16} />
                                <span className="text-[12px] font-medium uppercase tracking-[0.18em]">Aravalli ranges, Rajasthan</span>
                            </div>
                            <h3 className="display-3 mt-3 max-w-xl text-paper">A retreat of real quiet.</h3>
                            <p className="mt-3 max-w-xl text-paper/75">Remote, unhurried settings chosen for genuine rest and an unplugged, digital-light stay.</p>
                            <Link href="/booking" className="btn mt-6 rounded-full bg-paper px-6 py-3 text-ink hover:bg-clay hover:text-paper">Enquire about a retreat</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
