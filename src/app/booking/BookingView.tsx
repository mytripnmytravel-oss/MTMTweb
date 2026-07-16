"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin, Phone, Mail, MessageCircle,
    ShieldCheck, Send, ArrowRight, Clock, Star
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function BookingView() {
    const [state, handleSubmit] = useForm("maqaanvz");

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="container-x pt-40 pb-16">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="eyebrow eyebrow-accent"
                    >
                        Plan Your Journey
                    </motion.p>
                    <h1 className="display-1 mt-4 font-semibold text-ink">Secure your journey</h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-muted"
                    >
                        Share your travel plans below and our concierge will personally respond to your enquiry, usually within a day, to shape your itinerary.
                    </motion.p>
                </div>
            </section>

            {/* --- Main Booking Grid --- */}
            <section className="container-x pb-28">
                <div className="grid items-start gap-10 lg:grid-cols-12">

                    {/* Left Column: Form */}
                    <div className="card relative overflow-hidden p-7 sm:p-9 lg:col-span-7">
                        {/* Form Success Overlay */}
                        <AnimatePresence>
                            {state.succeeded && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-ink p-10 text-center"
                                >
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-clay text-paper">
                                        <Send size={30} />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-paper">Enquiry received</h3>
                                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-paper/70">Your enquiry has been received. Our travel desk will contact you shortly.</p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="mt-8 text-[13px] font-semibold text-clay-soft underline underline-offset-4"
                                    >
                                        Return to form
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <p className="eyebrow eyebrow-accent">Request a quote</p>
                        <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-[26px]">Tell us about your trip</h2>

                        <form
                            onSubmit={handleSubmit}
                            action="https://formspree.io/f/maqaanvz"
                            method="POST"
                            className="mt-7 space-y-4"
                        >
                            <input type="hidden" name="Inquiry Type" value="General Booking" />
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Full Name</label>
                                    <input required name="Full Name" type="text" placeholder="Your name" className="field" />
                                    <ValidationError prefix="Name" field="Full Name" errors={state.errors} className="mt-1 text-xs text-red-500" />
                                </div>
                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Email Address</label>
                                    <input required name="Email" type="email" placeholder="Email address" className="field" />
                                    <ValidationError prefix="Email" field="Email" errors={state.errors} className="mt-1 text-xs text-red-500" />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Contact Number</label>
                                    <input required name="Phone" type="tel" placeholder="Phone or WhatsApp" className="field" />
                                    <ValidationError prefix="Phone" field="Phone" errors={state.errors} className="mt-1 text-xs text-red-500" />
                                </div>
                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Service Required</label>
                                    <select name="Service Required" className="field appearance-none">
                                        <option>Tour Master Packages</option>
                                        <option>Elite Fleet Rental</option>
                                        <option>Medical Sanctuary</option>
                                        <option>Royal Wedding Logistics</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Trip Details</label>
                                <textarea required name="Directives" rows={4} placeholder="Describe your specific requirements." className="field resize-none"></textarea>
                                <ValidationError prefix="Message" field="Directives" errors={state.errors} className="mt-1 text-xs text-red-500" />
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-line bg-paper-dim/60 p-4">
                                <ShieldCheck className="shrink-0 text-clay" size={18} />
                                <p className="text-[13px] leading-relaxed text-muted">
                                    Your details stay private and are used only to plan your trip.
                                </p>
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="btn-primary w-full py-4 disabled:opacity-50"
                            >
                                {state.submitting ? "Sending your enquiry" : "Send enquiry"}
                                <ArrowRight size={17} />
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Authority & Proof */}
                    <div className="space-y-8 lg:col-span-5">
                        <div className="rounded-3xl bg-ink p-8 text-paper">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-clay-soft">The Authority Standard</p>
                            <div className="mt-8 space-y-8">
                                {[
                                    { icon: Star, title: "Bespoke Experience", desc: "Years of crafting tailored India journeys." },
                                    { icon: Clock, title: "Prompt Replies", desc: "We respond to every enquiry, usually within a day." },
                                    { icon: MessageCircle, title: "24/7 Support", desc: "On-call concierge support throughout your journey." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper/10">
                                            <item.icon size={18} className="text-paper" />
                                        </div>
                                        <div>
                                            <h3 className="text-[15px] font-semibold text-paper">{item.title}</h3>
                                            <p className="mt-1.5 text-[13px] leading-relaxed text-paper/70">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="eyebrow eyebrow-accent">Global Contact Grid</p>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <a href="tel:+919997812237" className="card flex flex-col gap-3 p-7">
                                    <Phone className="text-clay" size={22} />
                                    <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Voice Command</span>
                                    <span className="text-[15px] font-semibold text-ink">+91 99978 12237</span>
                                </a>
                                <a href="mailto:info@mytripmytravel.com" className="card flex flex-col gap-3 break-all p-7">
                                    <Mail className="text-clay" size={22} />
                                    <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Intel Dispatch</span>
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-semibold text-ink">info@mytripmytravel.com</span>
                                        <span className="text-[13px] font-semibold text-muted">mytripmytravel@gmail.com</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 rounded-3xl bg-ink p-8 text-paper">
                            <div className="flex items-center gap-3">
                                <MapPin className="text-clay-soft" size={22} />
                                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-paper/60">Headquarters</p>
                            </div>
                            <p className="text-[14px] leading-relaxed text-paper/80">
                                House Number 80, Ansal Town,<br />Block C, Agra, Uttar Pradesh 283125
                            </p>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl border border-dashed border-line bg-paper-dim/40 p-5">
                            <div className="flex items-center gap-3">
                                <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500" />
                                <span className="text-[13px] font-semibold text-ink">Direct WhatsApp access</span>
                            </div>
                            <a href="https://wa.me/919997812237" target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">Connect now</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
