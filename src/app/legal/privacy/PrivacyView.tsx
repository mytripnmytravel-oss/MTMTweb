"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn } from "@/components/ClientComponents";

export default function PrivacyView() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10 max-w-4xl">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-6"
                    >
                        Legal
                    </motion.h4>
                    <CharBlurIn
                        text="PRIVACY POLICY"
                        className="text-5xl md:text-7xl font-semibold text-royal-blue uppercase tracking-tight leading-[0.85] mb-12"
                    />

                    <div className="space-y-12 text-dark-slate/80 font-medium leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">1. Information we collect</h2>
                            <p>When you make an enquiry or booking, we collect the details you provide, such as your name, email address, phone number, travel dates and trip preferences. We also collect limited, anonymised analytics about how the site is used. We only collect what is needed to respond to you and plan your trip.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">2. How we use your information</h2>
                            <p>We use your information to respond to your enquiry, prepare quotes, plan and operate your trip, keep you updated, and improve our website and services. We do not use it for anything you have not asked us to do.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">3. Sharing with third parties</h2>
                            <p>We never sell your data. We share it only with the service providers needed to deliver your trip, for example hotels, transport operators, guides and activity partners, and where we are required to by law. These partners receive only the information necessary to fulfil your arrangements.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">4. Data security</h2>
                            <p>We use industry-standard security measures to protect your information. No method of transmission or storage is completely secure, but we take reasonable steps to keep your data safe and limit access to it.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">5. Your rights</h2>
                            <p>You can ask to access, correct or delete the personal information we hold about you at any time. To make a request, email us at info@mytripmytravel.com and we will action it in line with applicable law.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">6. Contact us</h2>
                            <p>For any questions about this policy or your data, contact MyTripMyTravel at info@mytripmytravel.com.</p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
