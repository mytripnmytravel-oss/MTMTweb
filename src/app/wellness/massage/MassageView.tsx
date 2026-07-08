"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Wind, Fingerprint, Waves, BrainCircuit, ArrowRight, BedDouble } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import WellnessProgrammeDetail from "@/components/wellness/WellnessProgrammeDetail";
import type { WellnessProgramme } from "@/data/wellness";
import Link from "next/link";
import Image from "next/image";

export default function MassageView({ programme }: { programme: WellnessProgramme }) {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="container-x pb-20 pt-36 sm:pt-40">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Deep reset</p>
                        <h1 className="display-1 mt-4 font-medium text-ink">Kinetic recovery</h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                            Restorative bodywork drawing on classical Indian massage traditions (Abhyanga, Marma therapy). Skilled therapists work the muscles and soft tissue to ease tension and support physical recovery and relaxation.
                        </p>
                        <div className="mt-9 flex flex-wrap items-center gap-6">
                            <Link href="/booking" className="btn-primary">Schedule reset <ArrowRight size={16} /></Link>
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-paper-dim text-clay">
                                    <Activity size={20} />
                                </span>
                                <span className="text-[13px] font-medium text-ink">Tension release</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[520px] w-full overflow-hidden rounded-2xl">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Massage_in_India.jpg"
                            alt="Traditional Indian therapeutic massage with warm herbal oil"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                    </div>
                </div>
            </section>

            {/* --- The Modalities --- */}
            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x">
                    <p className="eyebrow eyebrow-accent">The modalities</p>
                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { title: "Abhyanga", desc: "Warm herbal-oil full-body massage in the classical Ayurvedic style, valued for deep relaxation.", icon: Waves },
                            { title: "Marma Point", desc: "Gentle pressure applied to the body's traditional vital points to ease tension and encourage calm.", icon: Fingerprint },
                            { title: "Shirodhara", desc: "A continuous, warm stream of oil poured slowly over the forehead, a deeply soothing signature therapy.", icon: BrainCircuit },
                            { title: "Udwarthana", desc: "Invigorating dry herbal-powder massage traditionally used to stimulate circulation and refresh the skin.", icon: Wind }
                        ].map((modality, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="card p-7"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper-dim text-clay">
                                    <modality.icon size={22} />
                                </span>
                                <h3 className="mt-5 text-xl font-medium text-ink">{modality.title}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-muted">{modality.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Authority Summary --- */}
            <section className="bg-ink py-20 sm:py-28">
                <div className="container-x text-center">
                    <div className="mx-auto max-w-3xl">
                        <BedDouble className="mx-auto mb-8 text-clay-soft" size={44} />
                        <h2 className="display-2 font-medium leading-tight text-paper">
                            Uncompromising <span className="text-clay-soft">relaxation.</span>
                        </h2>
                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
                            Delivered in serene 5-star havelis and premium wellness wings by experienced, professionally trained therapists, so every session is as safe and considered as it is restful.
                        </p>
                        <Link href="/booking" className="btn mt-9 rounded-full bg-paper px-7 py-3.5 text-ink hover:bg-clay hover:text-paper">
                            Book sanctuary therapy
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Shared programme detail: quick facts, variants, FAQ, CTA --- */}
            <WellnessProgrammeDetail programme={programme} />

            <LeadBlock
                source={`Wellness: ${programme.name}`}
                context={{ "Inquiry Type": "Wellness", Programme: programme.name }}
                heading={`Plan your ${programme.name} journey`}
                pitch={`Restorative bodywork from professionally trained therapists in serene wellness settings, with private transfers and handpicked stays, arranged with honest guidance for relaxation and recovery. Tell us what you are looking for and we reply within a few hours with a tailored plan.`}
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
