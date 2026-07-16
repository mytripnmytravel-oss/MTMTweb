"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplets, Leaf, Flame, Sparkles, Sprout, ArrowRight, ShieldCheck, Wind } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import WellnessProgrammeDetail from "@/components/wellness/WellnessProgrammeDetail";
import type { WellnessProgramme } from "@/data/wellness";
import Link from "next/link";
import Image from "next/image";

export default function AyurvedicView({ programme }: { programme: WellnessProgramme }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="container-x pb-20 pt-36 sm:pt-40">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Ancient science</p>
                        <h1 className="display-1 mt-4 font-semibold text-ink">Ayurvedic restoration</h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                            Practitioner-led classical Ayurveda in its Keralan home, authentic Panchakarma and herbal therapies delivered at AYUSH-certified centres, framed honestly as recuperative care rather than a medical cure.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-6">
                            <Link href="/booking" className="btn-primary">Plan a programme <ArrowRight size={16} /></Link>
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-dim text-clay">
                                    <Leaf size={20} />
                                </span>
                                <span className="text-[13px] font-semibold text-ink">AYUSH-certified partners</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[520px] w-full overflow-hidden rounded-2xl">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Ayurvedic_Oil_Massage.jpg"
                            alt="Ayurvedic oil therapy at a certified Kerala centre"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                    </div>
                </div>
            </section>

            {/* --- Panchakarma pillars --- */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">Panchakarma</p>
                    <h2 className="display-2 mt-3 font-semibold text-ink">The five classical cleansing therapies</h2>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {[
                            { title: "Vamana", desc: "Therapeutic emesis, traditionally used to clear the upper respiratory and digestive channels.", icon: Wind },
                            { title: "Virechana", desc: "Purgation therapy directed at the liver and gallbladder in classical practice.", icon: Flame },
                            { title: "Basti", desc: "Medicated enema therapy, considered the cornerstone of Panchakarma.", icon: Sprout },
                            { title: "Nasya", desc: "Nasal administration of herbal oils for the head and sinuses.", icon: Sparkles },
                            { title: "Raktamokshana", desc: "Traditional blood-letting therapy, used selectively for specific conditions.", icon: Droplets }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="card p-7"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper-dim text-clay">
                                    <pillar.icon size={22} />
                                </span>
                                <h3 className="mt-5 text-xl font-semibold text-ink">{pillar.title}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-muted">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Authority Summary --- */}
            <section className="bg-ink py-20 sm:py-28">
                <div className="container-x text-center">
                    <div className="mx-auto max-w-3xl">
                        <ShieldCheck className="mx-auto mb-8 text-clay-soft" size={44} />
                        <h2 className="display-2 font-semibold leading-tight text-paper">
                            Certified <span className="text-clay-soft">care.</span>
                        </h2>
                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
                            MyTripMyTravel partners with Ministry of AYUSH-certified facilities and qualified physicians. Every programme is overseen by a doctor and framed honestly, genuine recuperative therapy, never an overstated cure.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- Shared programme detail: quick facts, variants, FAQ, CTA --- */}
            <WellnessProgrammeDetail programme={programme} />

            <LeadBlock
                source={`Wellness: ${programme.name}`}
                context={{ "Inquiry Type": "Wellness", Programme: programme.name }}
                heading={`Plan your ${programme.name} journey`}
                pitch={`Physician-led classical Ayurveda at AYUSH-certified partners, private transfers and handpicked stays, arranged with honest guidance as recuperative care, never an overstated cure. Tell us what you are looking for and we reply within a few hours with a tailored plan.`}
                waMessage={`Hi MyTripMyTravel, I am interested in ${programme.name} in India.`}
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Wellness", item: "https://www.mytripmytravel.com/wellness" },
                    { name: programme.name },
                ]}
            />

            <Footer />
        </main>
    );
}
