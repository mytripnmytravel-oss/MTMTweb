"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn } from "@/components/ClientComponents";

export default function PrivacyPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10 max-w-4xl">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6"
                    >
                        Legal Directive
                    </motion.h4>
                    <CharBlurIn
                        text="PRIVACY PROTOCOL"
                        className="text-5xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                    />

                    <div className="space-y-12 text-dark-slate/80 font-medium leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">1. Data Architecture</h2>
                            <p>MyTripMyTravel employs military-grade encryption for all client data. We collect only what is strictly necessary to execute your high-end travel missions, medical sanctuaries, and royal wedding logistics. Your data remains completely sequestered from public domains.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">2. Execution Analytics</h2>
                            <p>To optimize our fleet routing and sanctuary placements, anonymous telemetry data may be tracked. This ensures your vehicles arrive precisely on time and your hotel protocols are securely arranged.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">3. Third-Party Deployment</h2>
                            <p>Your intelligence is never sold. We only share operational data with vetted Tier-1 vendors (aviation partners, hospital administrators, palace managers) required to complete your mission.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">4. Client Rights</h2>
                            <p>You retain absolute command over your data. A full purge of your historical mission records can be initiated upon request to our command center via info@mytripmytravel.com.</p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
