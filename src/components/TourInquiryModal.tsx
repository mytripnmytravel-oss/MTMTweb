"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
    Users, ShieldCheck, X, CheckCircle2,
    Mail, Phone, Calendar as CalendarIcon, Zap, MapPin, Info, ArrowRight, ChevronDown, FileText
} from "lucide-react";
import { Magnetic } from "./ClientComponents";

interface TourInquiryModalProps {
    tour: any;
    isOpen: boolean;
    onClose: () => void;
}

export const TourInquiryModal = ({ tour, isOpen, onClose }: TourInquiryModalProps) => {
    const [formState, setFormState] = useState("idle"); // idle, submitting, success
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Form data states
    const [personnel, setPersonnel] = useState("2-4 Personnel");
    const [theme, setTheme] = useState(tour?.theme || "Luxury Heritage");

    // Body Scroll Lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const [state, handleSubmit] = useForm("maqaanvz");

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[3001] flex flex-col items-center bg-royal-blue/95 backdrop-blur-2xl overflow-y-auto py-8 md:py-20 px-4 md:px-8"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 30, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 30, opacity: 0 }}
                    className="relative w-full max-w-5xl bg-white shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row shrink-0 rounded-[4rem] overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 z-[3100] w-12 h-12 bg-royal-blue/5 rounded-full flex items-center justify-center text-royal-blue hover:bg-sunset-orange hover:text-white transition-all shadow-lg"
                    >
                        <X size={24} />
                    </button>
                    
                    {/* Left Side: Mission Brief Summary */}
                    <div className="md:w-1/3 bg-royal-blue p-8 md:p-16 text-white relative flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sunset-orange/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                        
                        <div className="relative z-10">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-sunset-orange mb-8">Selected Protocol</h4>
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-10 shadow-3xl border border-white/10">
                                <Image src={tour?.img || "/hero-taj.png"} alt={tour?.title} fill className="object-cover" />
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">{tour?.title}</h3>
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-10">{tour?.location} • {tour?.duration}</p>
                            
                            <div className="space-y-6 pt-10 border-t border-white/10">
                                <div className="flex items-center gap-4">
                                    <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Security Clearance Active</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Zap size={18} className="text-sunset-orange shrink-0" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Instant HQ Notification</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Directive Form */}
                    <div className="md:w-2/3 p-8 md:p-20 bg-white">
                        <AnimatePresence mode="wait">
                            {state.succeeded ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center"
                                >
                                    <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-10 shadow-2xl">
                                        <CheckCircle2 className="text-white" size={40} />
                                    </div>
                                    <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mb-4">Protocol Logged</h3>
                                    <p className="text-royal-blue/60 font-bold italic mb-10 max-w-sm">
                                        Your custom directives for the {tour?.title} have been transmitted to the Master Architect. We will contact you within 15 minutes.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="bg-royal-blue text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-sunset-orange transition-all shadow-xl"
                                    >
                                        Return to Briefing
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form">
                                    <div className="mb-12">
                                        <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mb-4">Custom Directives</h3>
                                        <p className="text-royal-blue/40 text-sm font-bold italic">Architect your specific requirements for this mission.</p>
                                    </div>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        {/* Hidden fields for context */}
                                        <input type="hidden" name="Inquiry Type" value="Tour Package" />
                                        <input type="hidden" name="Selected Tour" value={tour?.title} />
                                        <input type="hidden" name="Tour ID" value={tour?.id} />

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Full Name</label>
                                                <input required name="Full Name" type="text" placeholder="ALEXANDER VANCE" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all" />
                                                <ValidationError prefix="Name" field="Full Name" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Deployment Date</label>
                                                <div className="relative">
                                                    <input required name="Deployment Date" type="date" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black focus:ring-2 focus:ring-sunset-orange transition-all appearance-none" />
                                                    <CalendarIcon className="absolute right-6 top-1/2 -translate-y-1/2 text-royal-blue/20 pointer-events-none" size={18} />
                                                </div>
                                                <ValidationError prefix="Date" field="Deployment Date" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Contact Intelligence (Phone/WhatsApp)</label>
                                                <input required name="Phone" type="tel" placeholder="+91 999 000 0000" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black focus:ring-2 focus:ring-sunset-orange transition-all" />
                                                <ValidationError prefix="Phone" field="Phone" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Personnel Count</label>
                                                <div className="relative">
                                                    <select 
                                                        name="Personnel Count"
                                                        value={personnel} 
                                                        onChange={(e) => setPersonnel(e.target.value)}
                                                        className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all appearance-none"
                                                    >
                                                        <option>1 Personnel</option>
                                                        <option>2-4 Personnel</option>
                                                        <option>5-8 Personnel</option>
                                                        <option>Elite Group (9+)</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-royal-blue/20 pointer-events-none" size={18} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Specific Mission Objectives</label>
                                            <textarea required name="Objectives" rows={4} placeholder="ENTER LUXURY PREFERENCES, DIETARY DIRECTIVES, OR SPECIAL STOP-OVERS..." className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-3xl p-8 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all resize-none"></textarea>
                                            <ValidationError prefix="Message" field="Objectives" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                        </div>

                                        <div className="flex items-center gap-4 p-6 bg-sunset-orange/5 rounded-2xl border border-sunset-orange/10">
                                            <Info className="text-sunset-orange" size={20} />
                                            <p className="text-[9px] font-bold text-royal-blue/60 uppercase tracking-widest italic leading-relaxed">
                                                Custom architecture involves dedicated logistics and hotel synchronization. Our HQ team will provide a finalized cost estimate within 15 minutes of authorization.
                                            </p>
                                        </div>

                                        <Magnetic>
                                            <button
                                                type="submit"
                                                disabled={state.submitting}
                                                className="w-full bg-royal-blue text-white py-8 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-2xl flex items-center justify-center gap-4 hover:bg-sunset-orange transition-all duration-500 disabled:opacity-50"
                                            >
                                                {state.submitting ? "Transmitting..." : "Authorize Custom Briefing"}
                                                <ArrowRight size={18} />
                                            </button>
                                        </Magnetic>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
