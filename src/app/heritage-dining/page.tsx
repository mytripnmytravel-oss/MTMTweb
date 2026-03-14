"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic, Tilt3D } from "@/components/ClientComponents";
import Link from "next/link";
import { Utensils, Crown, ChefHat, ArrowRight } from "lucide-react";

export default function HeritageDiningPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.h4
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6"
                            >
                                Culinary Archive
                            </motion.h4>
                            <CharBlurIn
                                text="HERITAGE DINING"
                                className="text-5xl md:text-[6.5rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-12"
                            />
                            <p className="text-dark-slate font-bold italic text-lg opacity-60 leading-relaxed mb-12">
                                We bypass commercial restaurants entirely. Experience authentic, architecturally significant dining deployments featuring colorful, healthy Indian Thalis served in 500-year-old palace courtyards.
                            </p>
                            <Magnetic>
                                <Link href="/booking">
                                    <button className="bg-sunset-orange text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-royal-blue transition-all duration-500 flex items-center gap-4 shadow-xl shadow-sunset-orange/20">
                                        Reserve a Table <ArrowRight size={16} />
                                    </button>
                                </Link>
                            </Magnetic>
                        </div>
                        <div className="grid grid-cols-2 gap-6 relative">
                            <Tilt3D>
                                <div className="glass-card p-8 rounded-[3rem] aspect-square flex flex-col justify-between border-royal-blue/10 bg-royal-blue/5">
                                    <Crown className="text-royal-blue" size={40} />
                                    <div>
                                        <h5 className="text-royal-blue font-black uppercase tracking-widest text-xs mb-2">Palatial Settings</h5>
                                        <p className="text-dark-slate/60 text-[10px] font-bold italic">Exclusive access to royal dining rooms and courtyards.</p>
                                    </div>
                                </div>
                            </Tilt3D>
                            <Tilt3D>
                                <div className="glass-card p-8 rounded-[3rem] aspect-square flex flex-col justify-between border-royal-blue/10 mt-12 bg-sunset-orange/5 border-sunset-orange/20 shadow-xl">
                                    <ChefHat className="text-sunset-orange" size={40} />
                                    <div>
                                        <h5 className="text-royal-blue font-black uppercase tracking-widest text-xs mb-2">Master Chefs</h5>
                                        <p className="text-dark-slate/60 text-[10px] font-bold italic">Centuries-old recipes guarded for multiple generations.</p>
                                    </div>
                                </div>
                            </Tilt3D>
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-royal-blue relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sunset-orange/5 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <Utensils className="text-sunset-orange mx-auto mb-10" size={60} />
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12">
                            THE THALI <br /> <span className="text-sunset-orange">PROTOCOL.</span>
                        </h2>
                        <p className="text-white/60 font-bold italic text-xl mb-16 max-w-2xl mx-auto">
                            The Thali is not just a meal; it is a perfectly engineered nutritional circle. We ensure colorful, hyper-local ingredients designed for digestion and sustained energy throughout your journey.
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
