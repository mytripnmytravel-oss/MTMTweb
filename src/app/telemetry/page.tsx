"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Radar, Satellite, Car } from "lucide-react";

export default function TelemetryPage() {
    return (
        <main className="min-h-screen bg-paper flex flex-col justify-between">
            <Navbar />

            <section className="container-x pt-36 pb-20 sm:pt-40 max-w-5xl text-center mx-auto">
                <Radar className="mx-auto mb-10 text-clay" size={64} />
                <p className="eyebrow eyebrow-accent">Active Command Center</p>
                <h1 className="display-1 font-semibold text-ink mt-5">Fleet Telemetry</h1>
                <p className="mx-auto mt-8 max-w-3xl text-[17px] leading-relaxed text-muted">
                    Real-time intelligence on our entire surface fleet. All vehicles in the elite Car Rental division are continually tracked for safety, routing efficiency, and driver biometrics to guarantee zero-fail missions.
                </p>

                <div className="mt-16 flex flex-wrap justify-center gap-6 text-left">
                    <div className="card flex items-center gap-4 p-6">
                        <Satellite className="shrink-0 text-clay" size={28} />
                        <div>
                            <h2 className="text-[15px] font-semibold text-ink">GPS Uplink</h2>
                            <p className="mt-1 text-[13px] text-muted">Active on all assets</p>
                        </div>
                    </div>
                    <div className="card flex items-center gap-4 p-6">
                        <Car className="shrink-0 text-clay" size={28} />
                        <div>
                            <h2 className="text-[15px] font-semibold text-ink">Chauffeur Status</h2>
                            <p className="mt-1 text-[13px] text-muted">Vetted and Monitored</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
