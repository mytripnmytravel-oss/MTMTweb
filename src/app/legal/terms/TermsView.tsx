"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="container-narrow pt-36 pb-20 sm:pt-40 sm:pb-28">
                <p className="eyebrow eyebrow-accent">Legal</p>
                <h1 className="display-1 font-semibold text-ink mt-5">Terms of Service</h1>

                <div className="mt-12 space-y-10 text-ink-soft">
                    <div>
                        <h2 className="text-xl font-semibold text-ink">1. About these terms</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">By using this website and engaging MyTripMyTravel, you agree to these terms. MyTripMyTravel is a travel planning and concierge agency that arranges private, chauffeured trips, wellness travel and events across India.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">2. Bookings and payments</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">Quotes are confirmed once accepted in writing. A deposit is usually required to secure hotels, transport and other services, with the balance due before travel. Some services carry non-refundable supplier terms; these will be made clear at the time of booking.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">3. Changes and cancellations</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">Itineraries may need to change due to weather, availability, permits or safety. Where a change is needed we will offer the closest suitable alternative. Cancellation terms depend on the specific hotels, transport and activities booked and are shared with your confirmation.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">4. Our responsibilities and liability</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">We take reasonable care in selecting and coordinating trusted partners. However, hotels, transport operators and activity providers are independent third parties, and we are not liable for their acts or for events beyond our reasonable control. We strongly recommend comprehensive travel and, where relevant, medical insurance.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">5. Contact us</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">For any questions about these terms, contact MyTripMyTravel at info@mytripmytravel.com.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
