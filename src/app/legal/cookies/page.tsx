"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn } from "@/components/ClientComponents";

export default function CookiesPage() {
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
                        text="COOKIE REGISTRY"
                        className="text-5xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                    />

                    <div className="space-y-12 text-dark-slate/80 font-medium leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">1. Digital Tracking Tokens</h2>
                            <p>MyTripMyTravel deploys high-efficiency tracking tokens (cookies) to ensure seamless navigation across our service portfolios. These tokens memorize your mission parameters, allowing for rapid deployment upon your return to our platform.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">2. Core Analytics</h2>
                            <p>We utilize encrypted cookies to monitor the performance of our digital infrastructure. This intelligence allows us to optimize load times for our 3D architectures and high-resolution venue imagery.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-royal-blue uppercase tracking-tighter mb-4">3. Command Control</h2>
                            <p>You possess total authority over our tracking tokens. You may purge them via your browser's security settings at any time without compromising the core functionality of the MyTripMyTravel platform.</p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
