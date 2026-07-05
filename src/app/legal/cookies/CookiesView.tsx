"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn } from "@/components/ClientComponents";

export default function CookiesView() {
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
                        Legal
                    </motion.h4>
                    <CharBlurIn
                        text="COOKIE POLICY"
                        className="text-5xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                    />

                    <div className="space-y-12 text-dark-slate/80 font-medium leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">1. What cookies we use</h2>
                            <p>MyTripMyTravel uses cookies — small text files stored by your browser — to help the website work and to remember your preferences as you browse, so your experience is smooth when you return.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">2. Analytics</h2>
                            <p>We use privacy-respecting analytics cookies to understand how the site is used — which pages are popular and where loading can be improved — so we can make the site faster and more useful. This data is aggregated and does not identify you personally.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">3. Managing cookies</h2>
                            <p>You are in full control. You can accept, block or delete cookies through your browser's settings at any time. Disabling some cookies may affect how parts of the site function, but core content will remain available.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">4. Contact us</h2>
                            <p>For any questions about our use of cookies, contact MyTripMyTravel at info@mytripmytravel.com.</p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
