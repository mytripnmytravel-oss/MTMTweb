"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import Link from "next/link";
import { Landmark, Award, ArrowRight, Languages } from "lucide-react";

export default function ExpertGuidesView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="container-x pt-40 pb-24">
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="eyebrow eyebrow-accent"
                        >
                            The Storytellers
                        </motion.p>
                        <h1 className="display-1 mt-4 font-medium text-ink">Expert guardians</h1>
                        <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-muted">
                            We do not use generic tour guides. Our guides are vetted, licensed heritage specialists and multi-lingual storytellers who frame the true narrative of the subcontinent.
                        </p>
                        <div className="mt-8">
                            <Link href="/booking" className="btn-primary">
                                Request an Attaché <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="card flex aspect-square flex-col justify-between p-7">
                            <Award className="text-clay" size={36} />
                            <div>
                                <h3 className="text-[15px] font-medium text-ink">Vetted Guides</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-muted">Licensed heritage professionals, matched to your party.</p>
                            </div>
                        </div>
                        <div className="card mt-12 flex aspect-square flex-col justify-between p-7">
                            <Languages className="text-clay" size={36} />
                            <div>
                                <h3 className="text-[15px] font-medium text-ink">Multi-Lingual</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-muted">Guiding in your own language, not translated tours.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x text-center">
                    <Landmark className="mx-auto mb-8 text-clay" size={48} />
                    <h2 className="display-2 font-medium text-ink">
                        Skip the <span className="text-clay">noise.</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
                        Our guides provide more than history; they smooth your access. Expect priority monument entry, careful scheduling, and the removal of friction from your journey.
                    </p>
                </div>
            </section>

            <LeadBlock
                source="Expert guides hub"
                variant="cta"
                heading="Request a licensed expert guide"
                subheading="Tell us your cities and languages, and we will match you with a vetted, licensed heritage specialist who guides in your own language."
                waMessage="Hi MyTripMyTravel, I would like to arrange a licensed expert guide in India."
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Expert guides" },
                ]}
            />

            <Footer />
        </main>
    );
}
