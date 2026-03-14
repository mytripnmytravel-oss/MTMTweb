"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn } from "@/components/ClientComponents";

export default function TermsPage() {
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
                        text="TERMS OF MISSION"
                        className="text-5xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                    />

                    <div className="space-y-12 text-dark-slate/80 font-medium leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">1. Mission Parameters</h2>
                            <p>By engaging MyTripMyTravel, you authorize our agents to act as your central command for luxury transit, medical facilitation, and event logistics across the Indian subcontinent.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">2. Financial Protocols</h2>
                            <p>All high-end deployments require front-loaded capital to secure architectural buyouts and fleet reservations. Non-refundable retainers apply to all Royal Wedding and Medical Sanctuary missions.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">3. Operational Liabilities</h2>
                            <p>While we execute with absolute precision, MyTripMyTravel operates within the dynamic environment of the Indian subcontinent. We reserve the right to alter fleet choices or venue allocations based on immediate ground intelligence to ensure mission success and safety.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">4. Conduct Regulations</h2>
                            <p>Clients are expected to maintain the decorum befitting the exclusive environments (Palaces, Haveli, Medical Wings) they are deployed to. We reserve the right to extract our assets if operational integrity is compromised.</p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
