"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar, Users, MapPin, Phone, Mail, MessageCircle,
    ShieldCheck, Sparkles, Send, ArrowRight, Clock, Star
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, Magnetic, CharBlurIn, Tilt3D } from "@/components/ClientComponents";

export default function BookingPage() {
    const [state, handleSubmit] = useForm("maqaanvz");

    return (
        <SmoothScroll>
            <main className="bg-[#f8fafc] min-h-screen relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(30,64,175,0.03),transparent)] pointer-events-none" />
                <Navbar />

                {/* --- Hero Section --- */}
                <section className="pt-60 pb-20 container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6"
                        >
                            Mission Deployment
                        </motion.h4>
                        <CharBlurIn
                            text="SECURE YOUR JOURNEY"
                            className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter leading-none mb-12"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-dark-slate font-bold italic text-xl max-w-2xl mx-auto opacity-60 leading-relaxed"
                        >
                            You are about to finalize a high-performance travel directive. Our concierge will calibrate the final metrics within 60 minutes.
                        </motion.p>
                    </div>
                </section>

                {/* --- Main Booking Grid --- */}
                <section className="pb-40 container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Column: Form Protocol */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-7 bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl border border-royal-blue/5 relative overflow-hidden"
                        >
                            {/* Form Success Overlay */}
                            <AnimatePresence>
                                {state.succeeded && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-royal-blue z-50 flex flex-col items-center justify-center p-12 text-center"
                                    >
                                        <div className="w-24 h-24 bg-sunset-orange rounded-full flex items-center justify-center mb-8 shadow-2xl">
                                            <Send className="text-white" size={40} />
                                        </div>
                                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Protocol Initiated</h3>
                                        <p className="text-white/60 font-bold italic mb-10">Your directive has been received. A Lead Curator will contact you shortly.</p>
                                        <button
                                            onClick={() => window.location.reload()}
                                            className="text-sunset-orange font-black uppercase tracking-widest text-xs underline decoration-2 underline-offset-8"
                                        >
                                            Return to Form
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form 
                                onSubmit={handleSubmit} 
                                action="https://formspree.io/f/maqaanvz"
                                method="POST"
                                className="space-y-10"
                            >
                                <input type="hidden" name="Inquiry Type" value="General Booking" />
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Full Name</label>
                                        <input required name="Full Name" type="text" placeholder="ALEXANDER VANCE" className="w-full bg-white border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase placeholder:text-royal-blue/40 focus:ring-2 focus:ring-sunset-orange transition-all shadow-sm" />
                                        <ValidationError prefix="Name" field="Full Name" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Email Address</label>
                                        <input required name="Email" type="email" placeholder="VANCE@MISSION.COM" className="w-full bg-white border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase placeholder:text-royal-blue/40 focus:ring-2 focus:ring-sunset-orange transition-all shadow-sm" />
                                        <ValidationError prefix="Email" field="Email" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Contact Number</label>
                                        <input required name="Phone" type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-white border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase placeholder:text-royal-blue/40 focus:ring-2 focus:ring-sunset-orange transition-all shadow-sm" />
                                        <ValidationError prefix="Phone" field="Phone" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Service Required</label>
                                        <select name="Service Required" className="w-full bg-white border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all appearance-none cursor-pointer shadow-sm">
                                            <option>Tour Master Packages</option>
                                            <option>Elite Fleet Rental</option>
                                            <option>Medical Sanctuary</option>
                                            <option>Royal Wedding Logistics</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Mission directives / Details</label>
                                    <textarea required name="Directives" rows={4} placeholder="DESCRIBE YOUR SPECIFIC REQUIREMENTS..." className="w-full bg-white border border-royal-blue/5 rounded-3xl p-8 text-royal-blue font-black uppercase placeholder:text-royal-blue/40 focus:ring-2 focus:ring-sunset-orange transition-all resize-none shadow-sm"></textarea>
                                    <ValidationError prefix="Message" field="Directives" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                </div>

                                <div className="flex items-center gap-4 p-6 bg-sunset-orange/5 rounded-2xl border border-sunset-orange/10">
                                    <ShieldCheck className="text-sunset-orange" />
                                    <p className="text-[10px] font-bold text-royal-blue/60 uppercase tracking-widest italic leading-relaxed">
                                        Encrypted Protocol: Your data is managed under our zero-breach travel directive.
                                    </p>
                                </div>

                                <Magnetic>
                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="bg-royal-blue text-white px-16 py-8 rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-2xl shadow-royal-blue/20 group flex items-center gap-6 hover:bg-sunset-orange transition-all duration-500 disabled:opacity-50"
                                    >
                                        {state.submitting ? "TRANSMITTING..." : "AUTHORIZE BOOKING"}
                                        <ArrowRight className="group-hover:translate-x-3 transition-transform" />
                                    </button>
                                </Magnetic>
                            </form>
                        </motion.div>

                        {/* Right Column: Authority & Proof */}
                        <div className="lg:col-span-5 space-y-12">
                            <Tilt3D>
                                <div className="p-12 rounded-[3rem] bg-royal-blue shadow-2xl text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-orange/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
                                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-sunset-orange mb-8 text-center sm:text-left">The Authority Standard</h4>
                                    <div className="space-y-10">
                                        {[
                                            { icon: Star, title: "Royal Experience", desc: "15+ years of high-profile mission success." },
                                            { icon: Clock, title: "Precision Timing", desc: "Average response time: 42 minutes." },
                                            { icon: MessageCircle, title: "24/7 Intel", desc: "Real-time satellite support for every active tour." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-6 items-start group">
                                                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-sunset-orange group-hover:border-sunset-orange transition-all duration-500">
                                                    <item.icon size={20} className="text-white" />
                                                </div>
                                                <div>
                                                    <h5 className="font-black uppercase tracking-widest text-sm mb-2">{item.title}</h5>
                                                    <p className="text-[11px] font-bold text-white/70 italic leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Tilt3D>

                            <div className="space-y-8">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-royal-blue/20 ml-6">Global Contact Grid</h4>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <a href="tel:+919997812237" className="bg-white border border-royal-blue/10 p-8 rounded-3xl shadow-xl flex flex-col gap-4 hover:border-sunset-orange transition-all duration-500 group">
                                        <Phone className="text-sunset-orange" size={24} />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60">Voice Command</span>
                                        <span className="text-sm font-black text-royal-blue">+91 99978 12237</span>
                                    </a>
                                    <a href="mailto:info@mytripmytravel.com" className="bg-white border border-royal-blue/10 p-8 rounded-3xl shadow-xl flex flex-col gap-4 hover:border-sunset-orange transition-all duration-500 group whitespace-normal break-all">
                                        <Mail className="text-sunset-orange" size={24} />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60">Intel Dispatch</span>
                                        <div className="flex flex-col">
                                            <span className="text-[11px] font-black text-royal-blue">info@mytripmytravel.com</span>
                                            <span className="text-[11px] font-black text-royal-blue opacity-80">mytripmytravel@gmail.com</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-royal-blue text-white flex flex-col gap-6 shadow-2xl relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2 rounded-full" />
                                <div className="flex items-center gap-4 relative z-10">
                                    <MapPin className="text-sunset-orange" size={24} />
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50 leading-none">Headquarters</h4>
                                </div>
                                <p className="text-xs font-black uppercase tracking-widest leading-relaxed relative z-10">
                                    House Number 80, Ansal Town,<br />Block C, Agra, Uttar Pradesh 283125
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl bg-royal-blue/[0.03] border-2 border-dashed border-royal-blue/10 flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-royal-blue">Direct WhatsApp Access</span>
                                </div>
                                <a href="https://wa.me/919997812237" target="_blank" rel="noopener noreferrer" className="bg-white border border-royal-blue/10 px-6 py-3 rounded-xl text-[10px] font-black text-emerald-600 hover:bg-emerald-50 hover:border-emerald-500/30 transition-all shadow-md">CONNECT NOW</a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
