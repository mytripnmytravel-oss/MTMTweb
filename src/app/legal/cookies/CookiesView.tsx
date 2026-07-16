"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CookiesView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="container-narrow pt-36 pb-20 sm:pt-40 sm:pb-28">
                <p className="eyebrow eyebrow-accent">Legal</p>
                <h1 className="display-1 font-semibold text-ink mt-5">Cookie Policy</h1>

                <div className="mt-12 space-y-10 text-ink-soft">
                    <div>
                        <h2 className="text-xl font-semibold text-ink">1. What cookies we use</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">MyTripMyTravel uses cookies, small text files stored by your browser, to help the website work and to remember your preferences as you browse, so your experience is smooth when you return.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">2. Analytics</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">We use privacy-respecting analytics cookies to understand how the site is used, which pages are popular and where loading can be improved, so we can make the site faster and more useful. This data is aggregated and does not identify you personally.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">3. Managing cookies</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">You are in full control. You can accept, block or delete cookies through your browser's settings at any time. Disabling some cookies may affect how parts of the site function, but core content will remain available.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">4. Contact us</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">For any questions about our use of cookies, contact MyTripMyTravel at info@mytripmytravel.com.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
