"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users, Briefcase, ShieldCheck, X, CheckCircle2,
    Mail, Phone, Calendar as CalendarIcon, Clock, Zap, MapPin, Info, ArrowRight, ChevronDown, Car
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { fleet, Vehicle } from "@/data/fleet";
import { Magnetic } from "./ClientComponents";

interface FleetInquiryModalProps {
    vehicle: Vehicle | null;
    isOpen: boolean;
    onClose: () => void;
}

interface CustomDropdownProps {
    label: string;
    name: string;
    icon: any;
    value: any;
    options: any[];
    onSelect: (val: any) => void;
    id: string;
    activeDropdown: string | null;
    setActiveDropdown: (id: string | null) => void;
}

const CustomDropdown = ({ label, name, icon: Icon, value, options, onSelect, id, activeDropdown, setActiveDropdown }: CustomDropdownProps) => {
    const isActive = activeDropdown === id;
    
    return (
        <div className="space-y-4 relative">
            <input type="hidden" name={name} value={typeof value === 'string' ? value : (value?.name || "")} />
            <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">{label}</label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setActiveDropdown(isActive ? null : id)}
                    className={`w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-left text-royal-blue font-black uppercase transition-all flex items-center justify-between gap-4 group ${isActive ? "ring-2 ring-sunset-orange bg-white shadow-xl" : "hover:bg-royal-blue/[0.04]"}`}
                >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                        <Icon className={`transition-colors shrink-0 ${isActive ? "text-sunset-orange" : "text-royal-blue/20"}`} size={18} />
                        <span className="truncate text-[10px] md:text-xs">
                            {typeof value === 'string' ? value : (value?.name || "Select Option")}
                        </span>
                    </div>
                    <ChevronDown className={`transition-transform duration-500 shrink-0 ${isActive ? "rotate-180 text-sunset-orange" : "text-royal-blue/20"}`} size={18} />
                </button>

                <AnimatePresence>
                    {isActive && (
                        <React.Fragment key={id}>
                            <div className="fixed inset-0 z-[3200]" onClick={() => setActiveDropdown(null)} />
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 5, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute left-0 right-0 top-full z-[3300] bg-white rounded-3xl shadow-[0_30px_90px_rgba(3,7,18,0.15)] border border-royal-blue/5 overflow-hidden backdrop-blur-3xl"
                            >
                                <div className="max-h-[300px] overflow-y-auto py-4 scrollbar-hide">
                                    {options.map((opt: any, idx: number) => {
                                        const isSelected = typeof opt === 'string' 
                                            ? opt === value 
                                            : (value && opt.id === value.id);
                                        
                                        return (
                                            <motion.button
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.03 }}
                                                type="button"
                                                onClick={() => {
                                                    onSelect(opt);
                                                    setActiveDropdown(null);
                                                }}
                                                className={`w-full px-8 py-5 text-left text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-between gap-4 group ${
                                                    isSelected
                                                        ? "bg-royal-blue text-white"
                                                        : "text-royal-blue/60 hover:bg-royal-blue/5 hover:text-royal-blue"
                                                }`}
                                            >
                                                <div className="flex flex-col min-w-0 flex-1">
                                                    <span className="truncate whitespace-nowrap overflow-hidden">
                                                        {typeof opt === 'string' ? opt : opt.name}
                                                    </span>
                                                    {opt.type && <span className={`text-[8px] font-bold truncate ${isSelected ? "text-white/50" : "text-royal-blue/30"}`}>{opt.type}</span>}
                                                </div>
                                                {isSelected && <CheckCircle2 className="shrink-0" size={14} />}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </React.Fragment>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export const FleetInquiryModal = ({ vehicle: initialVehicle, isOpen, onClose }: FleetInquiryModalProps) => {
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(initialVehicle);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Form data states for custom dropdowns
    const [passengers, setPassengers] = useState("1 Personnel");
    const [duration, setDuration] = useState("Airport Transfer Protocol");

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

    // Sync selected vehicle when initialVehicle changes (modal opens)
    React.useEffect(() => {
        if (initialVehicle) {
            setSelectedVehicle(initialVehicle);
        }
    }, [initialVehicle]);

    if (!isOpen) return null;

    const currentVehicle = selectedVehicle || fleet[0];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                data-lenis-prevent
                className="fixed inset-0 z-[3001] flex flex-col items-center bg-royal-blue/90 backdrop-blur-xl overflow-y-auto py-8 md:py-20 px-4 md:px-8 scrollbar-hide"
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                    data-lenis-prevent
                    className="relative w-full max-w-5xl bg-white shadow-2xl flex flex-col md:flex-row shrink-0 rounded-[3rem]"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-8 md:right-8 z-[3100] w-10 h-10 md:w-12 md:h-12 bg-white/10 md:bg-royal-blue/5 backdrop-blur-md rounded-full flex items-center justify-center text-white md:text-royal-blue hover:bg-sunset-orange hover:text-white transition-all shadow-lg border border-white/20 md:border-transparent"
                    >
                        <X size={20} className="md:w-6 md:h-6" />
                    </button>

                    {/* Left Side: Vehicle Info */}
                    <div className="md:w-1/3 bg-royal-blue p-8 md:p-12 text-white relative flex flex-col justify-center shrink-0 rounded-t-[3rem] md:rounded-t-none md:rounded-l-[3rem]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sunset-orange/10 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
                        <div className="relative z-10 text-center md:text-left">
                            <h4 className="text-[8px] md:text-xs font-black uppercase tracking-[0.4em] text-sunset-orange mb-4 md:mb-6">Selected Asset</h4>
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 md:mb-8 shadow-2xl border border-white/10">
                                <Image src={currentVehicle.img} alt={currentVehicle.name} fill className="object-cover" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-3 md:mb-4">{currentVehicle.name}</h3>
                            <p className="text-white/60 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8">{currentVehicle.type} • {currentVehicle.category} Class</p>
                            
                            <div className="space-y-4 pt-6 md:pt-8 border-t border-white/10 text-left">
                                <div className="flex items-center gap-3">
                                    <Users size={14} className="text-sunset-orange shrink-0" />
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{currentVehicle.passengers} Max Passengers</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase size={14} className="text-sunset-orange shrink-0" />
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{currentVehicle.luggage} Luggage Space</span>
                                </div>
                                <div className="flex items-center gap-3 pt-2 md:pt-4">
                                    <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-emerald-400">Instant Verification Active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="md:w-2/3 p-8 md:p-16 bg-white rounded-b-[3rem] md:rounded-b-none md:rounded-r-[3rem]">
                        <AnimatePresence mode="wait">
                            {state.succeeded ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-20"
                                >
                                    <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                                        <CheckCircle2 className="text-white" size={40} />
                                    </div>
                                    <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mb-4">Transmission Successful</h3>
                                    <p className="text-dark-slate/60 font-bold italic mb-6">
                                        Your availability request for the {currentVehicle.name} has been logged. Our fleet manager will contact you within 15 minutes.
                                    </p>
                                    <div className="p-6 bg-royal-blue/5 rounded-2xl border border-royal-blue/10 mb-10 w-full">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-royal-blue/40 mb-2">Priority Support:</p>
                                        <p className="text-sm font-black text-royal-blue">+91 99978 12237</p>
                                        <p className="text-sm font-black text-royal-blue">info@mytripmytravel.com</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="bg-royal-blue text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-sunset-orange transition-all shadow-xl"
                                    >
                                        Return to Platform
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form">
                                    <div className="mb-12">
                                        <h3 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mb-4">Availability Protocol</h3>
                                        <p className="text-dark-slate/40 text-sm font-bold italic">Deploy your logistics request for the Golden Triangle.</p>
                                    </div>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        {/* Hidden fields for context */}
                                        <input type="hidden" name="Inquiry Type" value="Fleet Rental" />

                                        {/* Custom Fleet Dropdown */}
                                        <CustomDropdown 
                                            id="fleet"
                                            name="Selected Vehicle"
                                            label="Selected Fleet Vehicle"
                                            icon={Car}
                                            value={currentVehicle}
                                            options={fleet}
                                            onSelect={setSelectedVehicle}
                                            activeDropdown={activeDropdown}
                                            setActiveDropdown={setActiveDropdown}
                                        />

                                        {/* Row 1: Contact Info */}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Full Name</label>
                                                <div className="relative">
                                                    <input required name="Full Name" type="text" placeholder="ALEXANDER VANCE" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all pl-14" />
                                                    <Users className="absolute left-6 top-1/2 -translate-y-1/2 text-royal-blue/20" size={18} />
                                                </div>
                                                <ValidationError prefix="Name" field="Full Name" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Contact Intelligence (Phone)</label>
                                                <div className="relative">
                                                    <input required name="Phone" type="tel" placeholder="+91 999 000 0000" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black focus:ring-2 focus:ring-sunset-orange transition-all pl-14" />
                                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-royal-blue/20" size={18} />
                                                </div>
                                                <ValidationError prefix="Phone" field="Phone" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                            </div>
                                        </div>

                                        {/* Row 2: Email & Passengers */}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Email Terminal</label>
                                                <div className="relative">
                                                    <input required name="Email" type="email" placeholder="VANCE@MISSION.COM" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all pl-14" />
                                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-royal-blue/20" size={18} />
                                                </div>
                                                <ValidationError prefix="Email" field="Email" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                            </div>
                                            
                                            <CustomDropdown 
                                                id="passengers"
                                                name="Personnel Count"
                                                label="Passenger Manifest"
                                                icon={Users}
                                                value={passengers}
                                                options={[1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 20, 30, 45].filter(n => n <= currentVehicle.passengers).map(n => `${n} Personnel`).concat("Large Group (Custom)")}
                                                onSelect={setPassengers}
                                                activeDropdown={activeDropdown}
                                                setActiveDropdown={setActiveDropdown}
                                            />
                                        </div>

                                        {/* Row 3: Pickup Details */}
                                        <div className="grid md:grid-cols-3 gap-8">
                                            <div className="space-y-4 md:col-span-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Deployment Vector (Pickup Location)</label>
                                                <div className="relative">
                                                    <input required name="Pickup Location" type="text" placeholder="IGIA TERMINAL 3, NEW DELHI" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all pl-14" />
                                                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-royal-blue/20" size={18} />
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Pickup Time</label>
                                                <div className="relative">
                                                    <input required name="Pickup Time" type="time" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black focus:ring-2 focus:ring-sunset-orange transition-all appearance-none pl-14" />
                                                    <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-royal-blue/20" size={18} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 4: Date & Duration */}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Commencement Date</label>
                                                <div className="relative">
                                                    <input required name="Start Date" type="date" className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-2xl p-6 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all appearance-none pl-14" />
                                                    <CalendarIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-royal-blue/20 pointer-events-none" size={18} />
                                                </div>
                                            </div>
                                            
                                            <CustomDropdown 
                                                id="duration"
                                                name="Mission Duration"
                                                label="Mission Duration"
                                                icon={Zap}
                                                value={duration}
                                                options={["Airport Transfer Protocol", "8H / 80KM Local Mission", "Multi-Day Outstation Tour", "One-Way Intercity Deployment"]}
                                                onSelect={setDuration}
                                                activeDropdown={activeDropdown}
                                                setActiveDropdown={setActiveDropdown}
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-royal-blue/60 ml-4">Specific Directives / Itinerary</label>
                                            <div className="relative">
                                                <textarea required name="Directives" rows={3} placeholder="ENTER EXTRA REQUIREMENTS OR MISSION DETAILS..." className="w-full bg-royal-blue/[0.02] border border-royal-blue/5 rounded-3xl p-8 text-royal-blue font-black uppercase focus:ring-2 focus:ring-sunset-orange transition-all resize-none pl-14"></textarea>
                                                <Info className="absolute left-6 top-8 text-royal-blue/20" size={18} />
                                            </div>
                                            <ValidationError prefix="Message" field="Directives" errors={state.errors} className="text-[10px] text-red-500 font-bold uppercase ml-4" />
                                        </div>

                                        <div className="flex items-center gap-4 p-6 bg-sunset-orange/5 rounded-2xl border border-sunset-orange/10">
                                            <ShieldCheck className="text-sunset-orange" size={20} />
                                            <p className="text-[9px] font-bold text-royal-blue/60 uppercase tracking-widest italic leading-relaxed">
                                                By authorizing this transmission, you confirm that all personnel and logistics parameters are accurate. MTMT HQ will respond with fleet availability and pricing.
                                            </p>
                                        </div>

                                        <Magnetic>
                                            <button
                                                type="submit"
                                                disabled={state.submitting}
                                                className="w-full md:w-auto bg-royal-blue text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-royal-blue/20 flex items-center justify-center gap-6 hover:bg-sunset-orange transition-all duration-500 disabled:opacity-50"
                                            >
                                                {state.submitting ? "TRANSMITTING TO HQ..." : "AUTHORIZE AVAILABILITY CHECK"}
                                                <ArrowRight />
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
