"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Activity, Heart, Shield,
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
        desc: "Master-led yoga and meditation with vetted teachers in Rishikesh and Himalayan sanctuaries — calibrated to every level.",
        icon: Wind,
        tags: ["Hatha", "Vinyasa", "Meditation"],
        theme: "from-blue-50 to-emerald-50",
        accent: "text-emerald-600",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Yoga_Meditation%2C_Rishikesh.jpg",
        alt: "Yoga and meditation practice on the banks of the Ganges at Rishikesh",
        href: "/wellness/yoga-soul"
    },
    {
        title: "Orthopedic Restoration",
        desc: "Recovery travel and gentle-paced logistics arranged around treatment you undertake with accredited providers — we are a travel architect, not a medical provider.",
        icon: Stethoscope,
        tags: ["Joint Care", "Spine Health", "Post-Op Transit"],
        theme: "from-blue-50 to-slate-100",
        accent: "text-royal-blue",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Hospital_Room_Interior.jpg",
        alt: "Calm private recovery suite for post-operative rest",
        href: "/wellness/orthopedic"
    },
    {
        title: "Ayurvedic Restoration",
        desc: "AYUSH-certified, physician-led Ayurveda in its Keralan home — authentic recuperative therapy, framed honestly rather than as a cure.",
        icon: Droplets,
        tags: ["Panchakarma", "Abhyanga", "Rasayana"],
        theme: "from-orange-50 to-sunset-orange/5",
        accent: "text-sunset-orange",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ayurvedic_Oil_Massage.jpg",
        alt: "Ayurvedic oil therapy at a certified Kerala centre",
        href: "/wellness/ayurvedic"
    },
    {
        title: "Therapeutic Massage",
        desc: "Master-therapist bodywork for relaxation and physical recovery, across Indian and global modalities.",
        icon: Activity,
        tags: ["Deep Tissue", "Marma Point", "Hot Stone"],
        theme: "from-purple-50 to-royal-blue/5",
        accent: "text-purple-600",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Massage_in_India.jpg",
        alt: "Therapeutic massage bodywork at an Indian wellness sanctuary",
        href: "/wellness/massage"
    }
];

export default function WellnessHubView() {
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
                            className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-6"
                        >
                            Wellness & Recovery
                        </motion.h4>
                        <CharBlurIn
                            text="MEDICAL SANCTUARY"
                            className="text-5xl md:text-[8rem] font-semibold text-royal-blue uppercase tracking-tight leading-[0.85] mb-12"
                        />
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-dark-slate font-bold italic text-xl max-w-2xl opacity-60 leading-relaxed"
                            >
                                India is the world's wellness heartland — authentic Ayurveda, master-led yoga, therapeutic bodywork and carefully arranged recovery travel, delivered with vetted practitioners and honest guidance.
                            </motion.p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-royal-blue text-white px-10 py-5 rounded-full font-semibold uppercase tracking-widest text-xs flex items-center gap-4 hover:bg-sunset-orange transition-all duration-500">
                                        Consult the Wellness Desk <ArrowRight size={16} />
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
                                className={`group relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br ${service.theme} border border-royal-blue/5`}
                            >
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent p-12 flex flex-col justify-end">
                                    <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 ${service.accent}`}>
                                        <service.icon size={32} />
                                    </div>
                                    <h3 className="text-4xl font-semibold text-royal-blue uppercase tracking-tight mb-4">{service.title}</h3>
                                    <p className="text-dark-slate/60 font-bold italic text-lg mb-8 max-w-sm">{service.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="px-4 py-2 rounded-full bg-royal-blue/5 text-royal-blue font-semibold uppercase text-[10px] tracking-widest">{tag}</span>
                                        ))}
                                    </div>
                                    <Link href={service.href} className={`font-semibold uppercase text-xs tracking-[0.3em] flex items-center gap-4 ${service.accent} group/link`}>
                                        Explore programme <ArrowRight size={16} className="group-hover/link:translate-x-3 transition-transform" />
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
                                <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-8">Wellness Concierge</h4>
                                <h2 className="text-5xl md:text-7xl font-semibold text-white uppercase tracking-tight leading-none mb-12">
                                    Zero Surprise <br /> <span className="text-white/30 text-4xl">Wellness Logistics.</span>
                                </h2>
                                <div className="space-y-8 mb-16">
                                    {[
                                        "A pre-arrival wellness consultation to understand your goals and any health considerations.",
                                        "Seamless private transit from the airport directly to your retreat or centre.",
                                        "A dedicated facilitator on call throughout your stay.",
                                        "Honest, take-home guidance on diet and daily practice after the programme."
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
                                        <button className="bg-white text-royal-blue px-12 py-6 rounded-full font-semibold uppercase tracking-widest text-xs hover:bg-sunset-orange hover:text-white transition-all duration-500">
                                            Plan a Wellness Programme
                                        </button>
                                    </Link>
                                </Magnetic>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <Tilt3D>
                                    <div className="glass-card p-10 rounded-2xl aspect-square flex flex-col justify-between border-white/10">
                                        <Shield className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">Discreet & Confidential</h5>
                                            <p className="text-white/40 text-[11px] font-bold italic">Your details and health notes handled privately.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-10 rounded-2xl aspect-square flex flex-col justify-between border-white/10 mt-12">
                                        <Star className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">Vetted Partners</h5>
                                            <p className="text-white/40 text-[11px] font-bold italic">AYUSH-certified centres and accredited facilities.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-10 rounded-2xl aspect-square flex flex-col justify-between border-white/10">
                                        <Clock className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">Priority Response</h5>
                                            <p className="text-white/40 text-[11px] font-bold italic">A fast reply from the wellness desk on enquiry.</p>
                                        </div>
                                    </div>
                                </Tilt3D>
                                <Tilt3D>
                                    <div className="glass-card p-10 rounded-2xl aspect-square flex flex-col justify-between border-white/10 mt-12">
                                        <Heart className="text-sunset-orange" size={40} />
                                        <div>
                                            <h5 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">Honest Care</h5>
                                            <p className="text-white/40 text-[11px] font-bold italic">Genuine therapy, never an overstated cure.</p>
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
                        <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-6">Restorative Geography</h4>
                        <h2 className="text-5xl md:text-8xl font-semibold text-royal-blue uppercase tracking-tight leading-none">SILENT HAVELIS</h2>
                    </div>

                    <div className="relative h-[800px] rounded-3xl overflow-hidden group">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Rawla_Narlai_Fort_Entrance.jpg"
                            alt="A restored heritage fort-haveli retreat in the Aravalli hills of Rajasthan"
                            fill
                            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-transparent to-transparent flex items-end p-12 md:p-24">
                            <div className="grid md:grid-cols-2 gap-20 items-end">
                                <div className="max-w-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <MapPin className="text-sunset-orange" size={24} />
                                        <span className="text-white font-semibold uppercase tracking-widest text-xs">Aravalli Ranges, Rajasthan</span>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-semibold text-white uppercase tracking-tight leading-tight mb-8">
                                        A Retreat of <br /> <span className="text-sunset-orange">Real Quiet.</span>
                                    </h3>
                                    <p className="text-white/60 font-bold italic text-xl leading-relaxed">
                                        Restored heritage havelis and forts, far from the noise — remote, unhurried settings chosen for genuine rest and an unplugged, digital-light stay.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="glass-card p-12 rounded-2xl border-white/10">
                                        <div className="flex justify-between items-center mb-8">
                                            <span className="text-white/40 font-semibold uppercase text-[10px] tracking-widest">The Setting</span>
                                            <div className="flex gap-2">
                                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-sunset-orange" />)}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-12">
                                            <div>
                                                <h6 className="text-white font-semibold text-2xl uppercase mb-1">Quiet</h6>
                                                <p className="text-white/30 text-[9px] font-semibold uppercase tracking-widest">Low ambient noise</p>
                                            </div>
                                            <div>
                                                <h6 className="text-white font-semibold text-2xl uppercase mb-1">Off-grid</h6>
                                                <p className="text-white/30 text-[9px] font-semibold uppercase tracking-widest">Digital-light calm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Magnetic>
                                        <Link href="/booking">
                                            <button className="bg-sunset-orange text-white w-full py-8 rounded-2xl font-semibold uppercase tracking-widest text-xs shadow-md hover:bg-white hover:text-sunset-orange transition-all duration-500">
                                                Enquire About a Retreat
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
