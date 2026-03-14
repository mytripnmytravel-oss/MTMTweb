"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn } from "@/components/ClientComponents";
import { Radar, Satellite, Car } from "lucide-react";

export default function TelemetryPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden flex flex-col justify-between">
                <Navbar />

                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10 max-w-5xl text-center">
                    <Radar className="text-sunset-orange mx-auto mb-10 animate-spin-slow" size={80} />
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-royal-blue font-black uppercase tracking-[0.8em] text-sm mb-6"
                    >
                        Active Command Center
                    </motion.h4>
                    <CharBlurIn
                        text="FLEET TELEMETRY"
                        className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                    />
                    <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed max-w-3xl mx-auto">
                        Real-time intelligence on our entire surface fleet. All vehicles in the elite Car Rental division are continually tracked for safety, routing efficiency, and driver biometrics to guarantee zero-fail missions.
                    </p>

                    <div className="mt-20 flex justify-center gap-12 text-left">
                        <div className="flex items-center gap-4 border border-royal-blue/10 p-6 rounded-2xl">
                            <Satellite className="text-sunset-orange" size={30} />
                            <div>
                                <h6 className="font-black text-royal-blue uppercase text-sm">GPS Uplink</h6>
                                <p className="text-xs font-bold italic text-dark-slate/50">Active on all assets</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border border-royal-blue/10 p-6 rounded-2xl">
                            <Car className="text-sunset-orange" size={30} />
                            <div>
                                <h6 className="font-black text-royal-blue uppercase text-sm">Chauffeur Status</h6>
                                <p className="text-xs font-bold italic text-dark-slate/50">Vetted & Monitored</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
