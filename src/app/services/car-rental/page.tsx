"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Users,
    Briefcase,
    MessageCircle,
    ShieldCheck,
    CheckCircle2,
    ChevronRight
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import { CountingStat } from "@/components/ClientComponents";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
} as const;

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 20 }
    }
} as const;

const FleetCard = ({
    title,
    image,
    capacity,
    luggage,
    description
}: {
    title: string;
    image: string;
    capacity: string;
    luggage: string;
    description: string;
}) => (
    <motion.div
        variants={itemVariants}
        className="glass-card rounded-[2rem] overflow-hidden group border-white/10"
    >
        <div className="relative h-80 w-full bg-royal-blue/10 overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-1000"
            />
            <div className="absolute top-8 left-8 bg-sunset-orange text-white text-[10px] font-black uppercase tracking-[0.4em] px-8 py-3 rounded-full shadow-2xl backdrop-blur-md">
                Elite Verified
            </div>
        </div>
        <div className="p-12">
            <h3 className="text-4xl font-black text-royal-blue mb-6 uppercase tracking-tighter">{title}</h3>
            <p className="text-dark-slate font-bold text-xl mb-12 leading-relaxed opacity-60 italic">{description}</p>

            <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="glass-card p-6 rounded-2xl flex items-center gap-6 border-white/5">
                    <div className="w-16 h-16 bg-royal-blue/5 rounded-2xl flex items-center justify-center text-sunset-orange group-hover:bg-sunset-orange group-hover:text-white transition-all duration-500">
                        <Users size={28} />
                    </div>
                    <div>
                        <span className="block text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Capacity</span>
                        <span className="text-xl font-black text-royal-blue">{capacity}</span>
                    </div>
                </div>
                <div className="glass-card p-6 rounded-2xl flex items-center gap-6 border-white/5">
                    <div className="w-16 h-16 bg-royal-blue/5 rounded-2xl flex items-center justify-center text-sunset-orange group-hover:bg-sunset-orange group-hover:text-white transition-all duration-500">
                        <Briefcase size={28} />
                    </div>
                    <div>
                        <span className="block text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Luggage</span>
                        <span className="text-xl font-black text-royal-blue">{luggage}</span>
                    </div>
                </div>
            </div>

            <a
                href={`https://wa.me/919999999999?text=I'm interested in booking the ${title}`}
                target="_blank"
                className="w-full bg-sunset-orange text-white flex items-center justify-center gap-6 py-8 font-black text-md uppercase tracking-[0.3em] hover:bg-royal-blue transition-all duration-500 rounded-2xl shadow-2xl shadow-sunset-orange/20 overflow-hidden relative"
            >
                <span className="relative z-10 flex items-center gap-4">
                    <MessageCircle size={28} /> Book Chauffeur
                </span>
            </a>
        </div>
    </motion.div>
);

export default function CarRental() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    const fleet = [
        {
            title: "Executive Sedan",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop",
            capacity: "4 Pax",
            luggage: "2-3 Bags",
            description: "Premium Maruti Dzire or Toyota Etios for swift city transfers and business arrivals."
        },
        {
            title: "Premium SUV",
            image: "https://images.unsplash.com/photo-1627927141576-0256f4c21ab1?q=80&w=1200&auto=format&fit=crop",
            capacity: "6 Pax",
            luggage: "4-5 Bags",
            description: "The Toyota Innova Crysta. Unmatched AC performance and legroom for long highway hauls."
        },
        {
            title: "Luxury SUV",
            image: "https://images.unsplash.com/photo-1574701427742-acc058398496?q=80&w=1200&auto=format&fit=crop",
            capacity: "6 Pax",
            luggage: "4 Bags",
            description: "Elite status on the road. The Toyota Fortuner command presence for VIP state visits."
        },
        {
            title: "Large Group",
            image: "https://images.unsplash.com/photo-1758292109543-a5c7f0c4cb9b?q=80&w=1200&auto=format&fit=crop",
            capacity: "12-20 Pax",
            luggage: "15+ Bags",
            description: "Custom Force Tempo Traveller with specialized luggage racks and pilot seats."
        }
    ];

    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            <Navbar />

            {/* Liquid Background */}
            <div className="liquid-bg pointer-events-none">
                <div className="liquid-blob-1 opacity-10" />
                <div className="liquid-blob-2 opacity-5" />
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] w-full flex items-center overflow-hidden bg-royal-blue pt-20 z-10">
                <motion.div style={{ y }} className="absolute inset-0 opacity-40">
                    <Image src="https://images.unsplash.com/photo-1627927141576-0256f4c21ab1?q=80&w=1200&auto=format&fit=crop" alt="Luxury Car Rental" fill className="object-cover scale-110" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-royal-blue via-royal-blue/60 to-transparent" />

                <div className="relative z-10 container mx-auto px-6">
                    <div className="max-w-5xl">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-6xl md:text-9xl font-black text-white mb-10 leading-none uppercase tracking-tighter"
                        >
                            ELITE FLEET. <br /><span className="text-sunset-orange italic">PURE PRIVILEGE.</span>
                        </motion.h1>
                        <p className="text-white/80 text-3xl mb-16 max-w-2xl leading-relaxed font-black tracking-tight">
                            A private fleet for those who demand uncompromising performance and comfort.
                        </p>
                        <div className="flex flex-wrap gap-12">
                            {[
                                { icon: CheckCircle2, text: "GPS Tracking" },
                                { icon: CheckCircle2, text: "WiFi Hubs" },
                                { icon: CheckCircle2, text: "Verified Crew" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-sunset-orange font-black uppercase text-xs tracking-[0.4em]">
                                    <item.icon size={28} /> {item.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Grid */}
            <section className="py-40 container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-black text-sunset-orange tracking-[0.8em] uppercase mb-6">Our Garage</h2>
                        <p className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-none">Vehicle Select</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-3xl border-royal-blue/5 shadow-2xl flex items-center gap-10"
                    >
                        <ShieldCheck className="text-sunset-orange" size={60} />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-royal-blue max-w-[240px] leading-relaxed">Each asset undergoes a tactical safety audit every 48 hours.</span>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-16 lg:gap-24"
                >
                    {fleet.map((car, idx) => (
                        <FleetCard key={idx} {...car} />
                    ))}
                </motion.div>
            </section>

            {/* Trust Stats */}
            <section className="py-32 glass-card border-none rounded-none z-10 relative">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-20">
                    <CountingStat value={500} label="Elite Assets" />
                    <CountingStat value={25000} label="Client Miles" />
                    <CountingStat value={4.9} label="Google Rating" />
                    <CountingStat value={24} label="Hour Support" />
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="gradient-accent py-40 text-white relative">
                <div className="container mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none">Ready for the Golden Path?</h2>
                    <p className="text-2xl font-black mb-16 max-w-2xl opacity-80 decoration-white/20 underline underline-offset-[20px]">Secure your chauffeur-driven experience now for the ultimate peace of mind.</p>
                    <div className="flex flex-col md:flex-row gap-8 w-full max-w-xl">
                        <button className="flex-1 bg-royal-blue text-white py-8 px-12 font-black uppercase tracking-[0.4em] rounded-full shadow-[0_40px_80px_rgba(30,64,175,0.4)] hover:bg-slate-900 transition-all text-xl">
                            Get Pricing
                        </button>
                        <button className="flex-1 bg-white text-sunset-orange py-8 px-12 font-black uppercase tracking-[0.4em] rounded-full shadow-2xl hover:bg-gray-50 transition-all text-xl">
                            Contact VIP
                        </button>
                    </div>
                </div>
            </section>

            {/* Brand Footer */}
            <footer className="bg-royal-blue py-20 text-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
                    <span className="text-3xl font-black tracking-tighter uppercase whitespace-nowrap">
                        MYTRIP<span className="text-sunset-orange">MYTRAVEL</span>
                    </span>
                    <div className="flex gap-16 text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
                        <Link href="/" className="hover:text-sunset-orange transition-colors">Home</Link>
                        <span className="cursor-pointer hover:text-sunset-orange">Privacy</span>
                        <span className="cursor-pointer hover:text-sunset-orange">Terms</span>
                        <span className="cursor-pointer hover:text-sunset-orange">Chauffeur Login</span>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20 whitespace-nowrap">© 2026 PURE BRAND PERFORMANCE.</p>
                </div>
            </footer>
        </main>
    );
}
