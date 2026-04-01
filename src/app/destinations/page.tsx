"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic } from "@/components/ClientComponents";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
    { title: "Golden Triangle", desc: "The definitive route covering Delhi, Agra, and Jaipur.", img: "/taj-golden.png", link: "/tours/golden-triangle-all" },
    { title: "Rajasthan Escapes", desc: "Deep immersions into the royal heartland of India.", img: "/jaipur-mahal.png", link: "/destinations/rajasthan" },
    { title: "Kerala Backwaters", desc: "Lush, tropical ecosystems for complete down-regulation.", img: "/wellness.png", link: "/destinations/kerala" },
    { title: "Himalayan Peaks", desc: "High-altitude missions for spiritual and physical clarity.", img: "/wedding.png", link: "/destinations/himalayas" },
    { title: "Sikkim Silk Route", desc: "Exclusive access to the ancient, high-frequency trade paths.", img: "/hero-taj.png", link: "/destinations/sikkim" },
    { title: "Andaman Islands", desc: "Private island sanctuaries and ultra-luxury marine operations.", img: "/wellness.png", link: "/destinations/andaman" }
];

export default function DestinationsPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl text-center mx-auto mb-20">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6"
                        >
                            Global Geographies
                        </motion.h4>
                        <CharBlurIn
                            text="DESTINATION ARCHIVE"
                            className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-8"
                        />
                        <p className="text-dark-slate font-bold italic text-xl opacity-60">
                            Our vetted deployment zones across the Indian subcontinent. We operate only in regions where we can guarantee absolute luxury and security.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((dest, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative h-[500px] rounded-[3rem] overflow-hidden"
                            >
                                <Image src={dest.img} alt={dest.title} fill className="object-cover scale-110 group-hover:scale-100 transition-all duration-[2s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/40 to-transparent p-10 flex flex-col justify-end">
                                    <div className="flex items-center gap-3 mb-4">
                                        <MapPin className="text-sunset-orange" size={20} />
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{dest.title}</h3>
                                    </div>
                                    <p className="text-white/60 font-bold italic text-sm mb-8">{dest.desc}</p>
                                    <Link href={dest.link} className="font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 text-sunset-orange hover:text-white transition-colors">
                                        Deploy to Zone <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
