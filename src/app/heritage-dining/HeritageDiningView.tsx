"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";
import Link from "next/link";
import { Utensils, Crown, ChefHat, ArrowRight } from "lucide-react";

export default function HeritageDiningView() {
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
                            Culinary Archive
                        </motion.p>
                        <h1 className="display-1 mt-4 font-semibold text-ink">Heritage dining</h1>
                        <p className="mt-8 max-w-lg text-[16px] leading-relaxed text-muted">
                            We favour heritage settings over commercial restaurants, authentic, architecturally significant dining featuring colourful, balanced Indian thalis served in historic palace courtyards.
                        </p>
                        <div className="mt-8">
                            <Link href="/booking" className="btn-primary">
                                Reserve a Table <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="card flex aspect-square flex-col justify-between p-7">
                            <Crown className="text-clay" size={36} />
                            <div>
                                <h3 className="text-[15px] font-semibold text-ink">Palatial Settings</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-muted">Curated access to heritage dining rooms and courtyards.</p>
                            </div>
                        </div>
                        <div className="card mt-12 flex aspect-square flex-col justify-between p-7">
                            <ChefHat className="text-clay" size={36} />
                            <div>
                                <h3 className="text-[15px] font-semibold text-ink">Heritage Kitchens</h3>
                                <p className="mt-2 text-[13px] leading-relaxed text-muted">Regional royal-kitchen recipes cooked by vetted heritage kitchens.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-ink py-20 sm:py-24">
                <div className="container-x text-center">
                    <Utensils className="mx-auto mb-8 text-clay-soft" size={48} />
                    <h2 className="display-2 font-semibold text-paper">
                        The thali <span className="text-clay-soft">protocol.</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-paper/70">
                        The thali is a complete regional meal, a balanced circle of colourful, local dishes spanning textures and flavours, curated to the city you are dining in.
                    </p>
                </div>
            </section>

            <LeadBlock
                source="Heritage dining hub"
                variant="cta"
                heading="Reserve a heritage dining experience"
                subheading="Tell us your cities and dates, and our dining desk arranges thalis and royal-kitchen tables in historic palace settings."
                waMessage="Hi MyTripMyTravel, I would like to arrange heritage dining during my trip in India."
                breadcrumbs={[
                    { name: "Home", item: "https://www.mytripmytravel.com" },
                    { name: "Heritage dining" },
                ]}
            />

            <Footer />
        </main>
    );
}
