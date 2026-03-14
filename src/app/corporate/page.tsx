"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic } from "@/components/ClientComponents";
import Link from "next/link";
import { Briefcase, Plane, Building, Target } from "lucide-react";

export default function CorporatePage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10 max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.h4
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-royal-blue font-black uppercase tracking-[0.8em] text-sm mb-6"
                            >
                                Executive Transit
                            </motion.h4>
                            <CharBlurIn
                                text="CORPORATE MISSION"
                                className="text-5xl md:text-[6.5rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                            />
                            <p className="text-dark-slate font-bold italic text-lg opacity-60 leading-relaxed mb-12">
                                Absolute security and zero-friction logistics for C-suite operations across the subcontinent. We handle high-level delegations, private air-charter logistics, and secure boardroom environments.
                            </p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-royal-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-sunset-orange transition-all duration-500">
                                        Initialize Corporate Account
                                    </button>
                                </Link>
                            </Magnetic>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: "Secure Fleet", icon: Building },
                                { title: "Private Aviation", icon: Plane },
                                { title: "Delegation Logistics", icon: Briefcase },
                                { title: "Executive Protection", icon: Target }
                            ].map((pill, i) => (
                                <div key={i} className="bg-royal-blue/5 p-8 rounded-[2rem] border border-royal-blue/10 flex flex-col items-center justify-center text-center aspect-square">
                                    <pill.icon className="text-sunset-orange mb-4" size={32} />
                                    <h5 className="text-royal-blue font-black uppercase tracking-tighter text-sm">{pill.title}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
