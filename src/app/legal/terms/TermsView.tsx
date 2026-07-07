"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn } from "@/components/ClientComponents";

export default function TermsView() {
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
                        text="TERMS OF SERVICE"
                        className="text-5xl md:text-7xl font-semibold text-royal-blue uppercase tracking-tight leading-[0.85] mb-12"
                    />

                    <div className="space-y-12 text-dark-slate/80 font-medium leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">1. About these terms</h2>
                            <p>By using this website and engaging MyTripMyTravel, you agree to these terms. MyTripMyTravel is a travel planning and concierge agency that arranges private, chauffeured trips, wellness travel and events across India.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">2. Bookings and payments</h2>
                            <p>Quotes are confirmed once accepted in writing. A deposit is usually required to secure hotels, transport and other services, with the balance due before travel. Some services carry non-refundable supplier terms; these will be made clear at the time of booking.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">3. Changes and cancellations</h2>
                            <p>Itineraries may need to change due to weather, availability, permits or safety. Where a change is needed we will offer the closest suitable alternative. Cancellation terms depend on the specific hotels, transport and activities booked and are shared with your confirmation.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">4. Our responsibilities and liability</h2>
                            <p>We take reasonable care in selecting and coordinating trusted partners. However, hotels, transport operators and activity providers are independent third parties, and we are not liable for their acts or for events beyond our reasonable control. We strongly recommend comprehensive travel and, where relevant, medical insurance.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-royal-blue uppercase tracking-tight mb-4">5. Contact us</h2>
                            <p>For any questions about these terms, contact MyTripMyTravel at info@mytripmytravel.com.</p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
