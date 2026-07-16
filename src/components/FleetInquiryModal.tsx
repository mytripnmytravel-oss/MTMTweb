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
        <div className="relative space-y-2">
            <input type="hidden" name={name} value={typeof value === 'string' ? value : (value?.name || "")} />
            <label className="ml-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">{label}</label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setActiveDropdown(isActive ? null : id)}
                    className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left text-ink transition-all ${isActive ? "border-clay bg-white ring-2 ring-clay/40" : "border-line bg-paper-dim/60 hover:border-ink/30"}`}
                >
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                        <Icon className={`shrink-0 transition-colors ${isActive ? "text-clay" : "text-stone"}`} size={18} />
                        <span className="truncate text-[14px]">
                            {typeof value === 'string' ? value : (value?.name || "Select option")}
                        </span>
                    </div>
                    <ChevronDown className={`shrink-0 transition-transform duration-300 ${isActive ? "rotate-180 text-clay" : "text-stone"}`} size={18} />
                </button>

                <AnimatePresence>
                    {isActive && (
                        <React.Fragment key={id}>
                            <div className="fixed inset-0 z-[3200]" onClick={() => setActiveDropdown(null)} />
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 5, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                className="absolute left-0 right-0 top-full z-[3300] overflow-hidden rounded-2xl border border-line bg-white shadow-xl"
                            >
                                <div className="max-h-[300px] overflow-y-auto py-2 scrollbar-hide">
                                    {options.map((opt: any, idx: number) => {
                                        const isSelected = typeof opt === 'string'
                                            ? opt === value
                                            : (value && opt.id === value.id);

                                        return (
                                            <motion.button
                                                key={idx}
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.02 }}
                                                type="button"
                                                onClick={() => {
                                                    onSelect(opt);
                                                    setActiveDropdown(null);
                                                }}
                                                className={`flex w-full items-center justify-between gap-4 px-5 py-3 text-left text-[14px] transition-colors ${
                                                    isSelected
                                                        ? "bg-ink text-paper"
                                                        : "text-muted hover:bg-paper-dim hover:text-ink"
                                                }`}
                                            >
                                                <div className="flex min-w-0 flex-1 flex-col">
                                                    <span className="truncate">
                                                        {typeof opt === 'string' ? opt : opt.name}
                                                    </span>
                                                    {opt.type && <span className={`truncate text-[11px] ${isSelected ? "text-paper/60" : "text-stone"}`}>{opt.type}</span>}
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
                className="fixed inset-0 z-[3001] flex flex-col items-center overflow-y-auto bg-ink/80 px-4 py-8 backdrop-blur-md md:px-8 md:py-20 scrollbar-hide"
            >
                <motion.div
                    initial={{ scale: 0.96, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.96, y: 20, opacity: 0 }}
                    data-lenis-prevent
                    className="relative flex w-full max-w-5xl shrink-0 flex-col overflow-hidden rounded-2xl bg-paper shadow-xl md:flex-row"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 z-[3100] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-paper backdrop-blur-md transition-all hover:bg-clay hover:text-paper md:right-8 md:top-8 md:h-11 md:w-11 md:border-line md:bg-paper-dim md:text-ink"
                    >
                        <X size={20} />
                    </button>

                    {/* Left Side: Vehicle Info */}
                    <div className="relative flex shrink-0 flex-col justify-center bg-ink p-8 text-paper md:w-1/3 md:p-12">
                        <div className="text-center md:text-left">
                            <p className="mb-5 eyebrow text-paper/70">Selected vehicle</p>
                            <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-white/10">
                                <Image src={currentVehicle.img} alt={currentVehicle.name} fill className="object-cover" />
                            </div>
                            <h3 className="mb-3 text-2xl font-semibold leading-tight text-paper md:text-3xl">{currentVehicle.name}</h3>
                            <p className="mb-8 text-[13px] text-paper/60">{currentVehicle.type} • {currentVehicle.category} Class</p>

                            <div className="space-y-4 border-t border-white/10 pt-6 text-left">
                                <div className="flex items-center gap-3">
                                    <Users size={16} className="shrink-0 text-clay-soft" />
                                    <span className="text-[13px] text-paper/85">{currentVehicle.passengers} max passengers</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase size={16} className="shrink-0 text-clay-soft" />
                                    <span className="text-[13px] text-paper/85">{currentVehicle.luggage} luggage space</span>
                                </div>
                                <div className="flex items-center gap-3 pt-2">
                                    <ShieldCheck size={16} className="shrink-0 text-emerald-400" />
                                    <span className="text-[13px] text-emerald-400">Instant verification active</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-paper p-8 md:w-2/3 md:p-14">
                        <AnimatePresence mode="wait">
                            {state.succeeded ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex h-full flex-col items-center justify-center py-20 text-center"
                                >
                                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500">
                                        <CheckCircle2 className="text-white" size={38} />
                                    </div>
                                    <h3 className="mb-4 text-3xl font-semibold text-ink">Transmission successful</h3>
                                    <p className="mb-6 text-[15px] leading-relaxed text-muted">
                                        Your availability request for the {currentVehicle.name} has been logged. Our fleet manager will contact you within 15 minutes.
                                    </p>
                                    <div className="mb-10 w-full rounded-2xl border border-line bg-paper-dim/60 p-6">
                                        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Priority support</p>
                                        <p className="text-[15px] font-semibold text-ink">+91 99978 12237</p>
                                        <p className="text-[15px] font-semibold text-ink">info@mytripmytravel.com</p>
                                    </div>
                                    <button onClick={onClose} className="btn-primary">
                                        Return to platform
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div key="form">
                                    <div className="mb-10">
                                        <h3 className="mb-3 text-3xl font-semibold text-ink">Availability request</h3>
                                        <p className="text-[15px] text-muted">Send your logistics request for the Golden Triangle.</p>
                                    </div>

                                    <form
                                        onSubmit={handleSubmit}
                                        action="https://formspree.io/f/maqaanvz"
                                        method="POST"
                                        className="space-y-7"
                                    >
                                        {/* Hidden fields for context */}
                                        <input type="hidden" name="Inquiry Type" value="Fleet Rental" />

                                        {/* Custom Fleet Dropdown */}
                                        <CustomDropdown
                                            id="fleet"
                                            name="Selected Vehicle"
                                            label="Selected fleet vehicle"
                                            icon={Car}
                                            value={currentVehicle}
                                            options={fleet}
                                            onSelect={setSelectedVehicle}
                                            activeDropdown={activeDropdown}
                                            setActiveDropdown={setActiveDropdown}
                                        />

                                        {/* Row 1: Contact Info */}
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <label className="ml-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Full name</label>
                                                <div className="relative">
                                                    <input required name="Full Name" type="text" placeholder="Alexander Vance" className="w-full rounded-2xl border border-line bg-paper-dim/60 p-4 pl-12 text-ink transition-all placeholder:text-stone focus:border-clay focus:ring-2 focus:ring-clay/40" />
                                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-stone" size={18} />
                                                </div>
                                                <ValidationError prefix="Name" field="Full Name" errors={state.errors} className="ml-1 text-[12px] text-red-500" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="ml-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Phone</label>
                                                <div className="relative">
                                                    <input required name="Phone" type="tel" placeholder="+91 999 000 0000" className="w-full rounded-2xl border border-line bg-paper-dim/60 p-4 pl-12 text-ink transition-all placeholder:text-stone focus:border-clay focus:ring-2 focus:ring-clay/40" />
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone" size={18} />
                                                </div>
                                                <ValidationError prefix="Phone" field="Phone" errors={state.errors} className="ml-1 text-[12px] text-red-500" />
                                            </div>
                                        </div>

                                        {/* Row 2: Email & Passengers */}
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <label className="ml-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Email</label>
                                                <div className="relative">
                                                    <input required name="Email" type="email" placeholder="vance@mission.com" className="w-full rounded-2xl border border-line bg-paper-dim/60 p-4 pl-12 text-ink transition-all placeholder:text-stone focus:border-clay focus:ring-2 focus:ring-clay/40" />
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone" size={18} />
                                                </div>
                                                <ValidationError prefix="Email" field="Email" errors={state.errors} className="ml-1 text-[12px] text-red-500" />
                                            </div>

                                            <CustomDropdown
                                                id="passengers"
                                                name="Personnel Count"
                                                label="Passenger manifest"
                                                icon={Users}
                                                value={passengers}
                                                options={[1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 20, 30, 45].filter(n => n <= currentVehicle.passengers).map(n => `${n} Personnel`).concat("Large Group (Custom)")}
                                                onSelect={setPassengers}
                                                activeDropdown={activeDropdown}
                                                setActiveDropdown={setActiveDropdown}
                                            />
                                        </div>

                                        {/* Row 3: Pickup Details */}
                                        <div className="grid gap-6 md:grid-cols-3">
                                            <div className="space-y-2 md:col-span-2">
                                                <label className="ml-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Pickup location</label>
                                                <div className="relative">
                                                    <input required name="Pickup Location" type="text" placeholder="IGIA Terminal 3, New Delhi" className="w-full rounded-2xl border border-line bg-paper-dim/60 p-4 pl-12 text-ink transition-all placeholder:text-stone focus:border-clay focus:ring-2 focus:ring-clay/40" />
                                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-stone" size={18} />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="ml-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Pickup time</label>
                                                <div className="relative">
                                                    <input required name="Pickup Time" type="time" className="w-full appearance-none rounded-2xl border border-line bg-paper-dim/60 p-4 pl-12 text-ink transition-all focus:border-clay focus:ring-2 focus:ring-clay/40" />
                                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone" size={18} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 4: Date & Duration */}
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <label className="ml-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Start date</label>
                                                <div className="relative">
                                                    <input required name="Start Date" type="date" className="w-full appearance-none rounded-2xl border border-line bg-paper-dim/60 p-4 pl-12 text-ink transition-all focus:border-clay focus:ring-2 focus:ring-clay/40" />
                                                    <CalendarIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone" size={18} />
                                                </div>
                                            </div>

                                            <CustomDropdown
                                                id="duration"
                                                name="Mission Duration"
                                                label="Trip duration"
                                                icon={Zap}
                                                value={duration}
                                                options={["Airport Transfer Protocol", "8H / 80KM Local Mission", "Multi-Day Outstation Tour", "One-Way Intercity Deployment"]}
                                                onSelect={setDuration}
                                                activeDropdown={activeDropdown}
                                                setActiveDropdown={setActiveDropdown}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="ml-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">Specific directives / itinerary</label>
                                            <div className="relative">
                                                <textarea required name="Directives" rows={3} placeholder="Enter extra requirements or trip details..." className="w-full resize-none rounded-2xl border border-line bg-paper-dim/60 p-4 pl-12 text-ink transition-all placeholder:text-stone focus:border-clay focus:ring-2 focus:ring-clay/40"></textarea>
                                                <Info className="absolute left-4 top-4 text-stone" size={18} />
                                            </div>
                                            <ValidationError prefix="Message" field="Directives" errors={state.errors} className="ml-1 text-[12px] text-red-500" />
                                        </div>

                                        <div className="flex items-center gap-4 rounded-2xl border border-line bg-paper-dim/60 p-5">
                                            <ShieldCheck className="shrink-0 text-clay" size={20} />
                                            <p className="text-[13px] leading-relaxed text-muted">
                                                By sending this request, you confirm that all personnel and logistics details are accurate. Our desk will respond with fleet availability and pricing.
                                            </p>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={state.submitting}
                                            className="btn-primary w-full disabled:opacity-50 md:w-auto"
                                        >
                                            {state.submitting ? "Sending request..." : "Check availability"}
                                            <ArrowRight size={16} />
                                        </button>
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
