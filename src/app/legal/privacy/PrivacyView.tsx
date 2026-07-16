"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyView() {
    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            <section className="container-narrow pt-36 pb-20 sm:pt-40 sm:pb-28">
                <p className="eyebrow eyebrow-accent">Legal</p>
                <h1 className="display-1 font-semibold text-ink mt-5">Privacy Policy</h1>

                <div className="mt-12 space-y-10 text-ink-soft">
                    <div>
                        <h2 className="text-xl font-semibold text-ink">1. Information we collect</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">When you make an enquiry or booking, we collect the details you provide, such as your name, email address, phone number, travel dates and trip preferences. We also collect limited, anonymised analytics about how the site is used. We only collect what is needed to respond to you and plan your trip.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">2. How we use your information</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">We use your information to respond to your enquiry, prepare quotes, plan and operate your trip, keep you updated, and improve our website and services. We do not use it for anything you have not asked us to do.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">3. Sharing with third parties</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">We never sell your data. We share it only with the service providers needed to deliver your trip, for example hotels, transport operators, guides and activity partners, and where we are required to by law. These partners receive only the information necessary to fulfil your arrangements.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">4. Data security</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">We use industry-standard security measures to protect your information. No method of transmission or storage is completely secure, but we take reasonable steps to keep your data safe and limit access to it.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">5. Your rights</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">You can ask to access, correct or delete the personal information we hold about you at any time. To make a request, email us at info@mytripmytravel.com and we will action it in line with applicable law.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-ink">6. Contact us</h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted">For any questions about this policy or your data, contact MyTripMyTravel at info@mytripmytravel.com.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
