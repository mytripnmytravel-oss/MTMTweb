"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Activity, Heart, Sparkles, Brain, Shield,
    Stethoscope, Wind, Droplets, MapPin,
    ArrowRight, Star, Clock, CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";
import Link from "next/link";
import Image from "next/image";

const wellnessServices = [
    {
        title: "Yoga & Soul Calibration",
        desc: "Master-led sessions designed to synchronize your frequency with the spiritual meridians of India.",
        icon: Wind,
        tags: ["Hatha", "Vinyasa", "Meditation"],
        theme: "from-blue-50 to-emerald-50",
        accent: "text-emerald-600",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Yoga_Meditation%2C_Rishikesh.jpg",
        href: "/wellness/yoga-soul"
    },
    {
        title: "Orthopedic Restoration",
        desc: "High-precision structural recovery and alignment utilizing world-class Indian medical facilities.",
        icon: Stethoscope,
        tags: ["Joint Care", "Spine Health", "Post-Op"],
        theme: "from-blue-50 to-slate-100",
        accent: "text-royal-blue",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Hospital_Room_Interior.jpg",
        href: "/wellness/orthopedic"
    },
    {
        title: "Ayurvedic Alchemy",
        desc: "Ancient biological optimization protocols using 5000-year-old traditional healing science.",
        icon: Droplets,
        tags: ["Panchakarma", "Detox", "Herbal"],
        theme: "from-orange-50 to-sunset-orange/5",
        accent: "text-sunset-orange",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ayurvedic_Oil_Massage.jpg",
        href: "/wellness/ayurvedic"
    },
    {
        title: "Massage & Recovery",
        desc: "Elite recovery protocols focused on deep muscular reset and neural pathway relaxation.",
        icon: Activity,
        tags: ["Deep Tissue", "Trigger Point", "Neural"],
        theme: "from-purple-50 to-royal-blue/5",
        accent: "text-purple-600",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Massage_in_India.jpg",
        href: "/wellness/massage"
    }
];

export default function WellnessPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                {/* --- Hero Section --- */}
                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6"
                        >
                            Biological Optimization
                        </motion.h4>
                        <CharBlurIn
                            text="MEDICAL SANCTUARY"
                            className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                        />
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-dark-slate font-bold italic text-xl max-w-2xl opacity-60 leading-relaxed"
                            >
                                Architecture for the human soul. We integrate advanced orthopedic precision with ancient Ayurvedic alchemy to restore your primary frequency.
                            </motion.p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-royal-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-sunset-orange transition-all duration-500">
                                        Commence Recovery <ArrowRight size={16} />
                                    </button>
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </section>

                {/* --- Main Services Grid --- */}
                <section className="py-20 container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        {wellnessServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group relative h-[600px] rounded-[3rem] overflow-hidden bg-gradient-to-br ${service.theme} border border-royal-blue/5`}
                            >
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent p-12 flex flex-col justify-end">
                                    <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 ${service.accent}`}>
                                        <service.icon size={32} />
                                    </div>
                                    <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mb-4">{service.title}</h3>
                                    <p className="text-dark-slate/60 font-bold italic text-lg mb-8 max-w-sm">{service.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="px-4 py-2 rounded-full bg-royal-blue/5 text-royal-blue font-black uppercase text-[10px] tracking-widest">{tag}</span>
                                        ))}
                                    </div>
                                    <Link href={service.href} className={`font-black uppercase text-xs tracking-[0.3em] flex items-center gap-4 ${service.accent} group/link`}>
                                        Inquire for Protocol <ArrowRight size={16} className="group-hover/link:translate-x-3 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- The Concierge Protocol --- */}
                <section className="py-40 bg-royal-blue relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sunset-orange/10 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-8">Medical Concierge</h4>
                                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                                    Zero Surprise <br /> <span className="text-white/30 text-4xl">Health Logistics.</span>
                                </h2>
                                <div className="space-y-8 mb-16">
                                    {[
                                        "Pre-arrival biological assessment by elite consultants.",
                                        "Seamless private transit from airport directly to sanctuary.",
                                        "24/7 dedicated medical facilitator for every mission phase.",
                                        "Post-recovery integration protocols and dietary calibration."
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="w-8 h-8 rounded-lg bg-sunset-orange flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={16} className="text-white" />
                                            </div>
                                            <p className="text-white/60 font-bold italic text-lg">{step}</p>
                                        </div>
                                    ))}
                                </div>
                                <Magnetic>
                                    <Link href="/booking">
                                        <button className="bg-white text-royal-blue px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-sunset-orange hover:text-white transition-all duration-500">
                                            Authorize Medical Mission
                                        </button>
                                    </Link>
                                </Magnetic>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <Tilt3D>
                                    <div className="glass-card p-10 rounded-[3rem] aspect-square flex flex-col justify-between border-white/10">
                                        <Shield className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-black uppercase tracking-widest text-sm mb-4">Secured Recovery</h5>
                                            <p className="text-white/40 text-[11px] font-bold italic">HIPAA-compliant protocol management.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-10 rounded-[3rem] aspect-square flex flex-col justify-between border-white/10 mt-12">
                                        <Star className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-black uppercase tracking-widest text-sm mb-4">Elite Vetted</h5>
                                            <p className="text-white/40 text-[11px] font-bold italic">Top 1% of Indian medical facilitators.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-10 rounded-[3rem] aspect-square flex flex-col justify-between border-white/10">
                                        <Clock className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-black uppercase tracking-widest text-sm mb-4">Rapid Response</h5>
                                            <p className="text-white/40 text-[11px] font-bold italic">Average assessment time: 120 minutes.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-10 rounded-[3rem] aspect-square flex flex-col justify-between border-white/10 mt-12">
                                        <Heart className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-black uppercase tracking-widest text-sm mb-4">Holistic DNA</h5>
                                            <p className="text-white/40 text-[11px] font-bold italic">Balanced spiritual and medical care.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Physical Locations: Silent Havelis --- */}
                <section className="py-40 container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">Restorative Geography</h4>
                        <h2 className="text-5xl md:text-8xl font-black text-royal-blue uppercase tracking-tighter leading-none">SILENT HAVELIS</h2>
                    </div>

                    <div className="relative h-[800px] rounded-[4rem] overflow-hidden group">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Rawla_Narlai_Fort_Entrance.jpg"
                            alt="Silent Haveli"
                            fill
                            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-transparent to-transparent flex items-end p-12 md:p-24">
                            <div className="grid md:grid-cols-2 gap-20 items-end">
                                <div className="max-w-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <MapPin className="text-sunset-orange" size={24} />
                                        <span className="text-white font-black uppercase tracking-widest text-xs">Aravalli Ranges, Rajasthan</span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-8">
                                        The Palace of <br /> <span className="text-sunset-orange">Absolute Silence.</span>
                                    </h3>
                                    <p className="text-white/60 font-bold italic text-xl leading-relaxed">
                                        A decommissioned royal outpost transformed into a high-frequency meditation sanctuary. Zero satellite noise. Zero digital intrusion. Total soul reset.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="glass-card p-12 rounded-[3rem] border-white/10">
                                        <div className="flex justify-between items-center mb-8">
                                            <span className="text-white/40 font-black uppercase text-[10px] tracking-widest">Protocol Stats</span>
                                            <div className="flex gap-2">
                                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-sunset-orange" />)}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-12">
                                            <div>
                                                <h6 className="text-white font-black text-2xl uppercase mb-1">0 db</h6>
                                                <p className="text-white/30 text-[9px] font-black uppercase tracking-widest">Ambient Noise</p>
                                            </div>
                                            <div>
                                                <h6 className="text-white font-black text-2xl uppercase mb-1">100%</h6>
                                                <p className="text-white/30 text-[9px] font-black uppercase tracking-widest">Digital Dark</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Magnetic>
                                        <Link href="/booking">
                                            <button className="bg-sunset-orange text-white w-full py-8 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-white hover:text-sunset-orange transition-all duration-500">
                                                Secure This Sanctuary
                                            </button>
                                        </Link>
                                    </Magnetic>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
