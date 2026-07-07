"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Clock, MapPin } from "lucide-react";
import { EnquiryForm } from "./lead/Lead";

interface TourInquiryModalProps {
    tour: any;
    isOpen: boolean;
    onClose: () => void;
}

export const TourInquiryModal = ({ tour, isOpen, onClose }: TourInquiryModalProps) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[3001] flex items-start justify-center overflow-y-auto bg-ink/60 px-4 py-8 backdrop-blur-sm sm:py-16"
                >
                    <motion.div
                        initial={{ scale: 0.96, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.96, y: 20, opacity: 0 }}
                        className="relative flex w-full max-w-4xl shrink-0 flex-col overflow-hidden rounded-3xl bg-paper shadow-2xl md:flex-row"
                    >
                        <button onClick={onClose} aria-label="Close" className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition hover:bg-clay hover:text-paper">
                            <X size={20} />
                        </button>

                        {/* Summary */}
                        <div className="bg-ink p-8 text-paper md:w-2/5">
                            <p className="eyebrow text-clay-soft">Your selected tour</p>
                            <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                                <Image src={tour?.img || "/hero-taj.png"} alt={tour?.title || "MyTripMyTravel tour"} fill className="object-cover" />
                            </div>
                            <h3 className="mt-5 text-2xl font-medium text-paper">{tour?.title}</h3>
                            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-paper/70">
                                {tour?.location && <span className="flex items-center gap-1.5"><MapPin size={14} className="text-clay-soft" /> {tour.location}</span>}
                                {tour?.duration && <span className="flex items-center gap-1.5"><Clock size={14} className="text-clay-soft" /> {tour.duration}</span>}
                            </div>
                            <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-[13px] text-paper/70">
                                <div className="flex items-center gap-2.5"><ShieldCheck size={16} className="text-clay-soft" /> Private and fully tailored to you</div>
                                <div className="flex items-center gap-2.5"><Clock size={16} className="text-clay-soft" /> Free quote, no obligation</div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-6 sm:p-8 md:w-3/5">
                            <EnquiryForm
                                source={`Tour modal: ${tour?.title || "unknown"}`}
                                context={{ "Inquiry Type": "Tour Package", "Selected Tour": tour?.title || "", "Tour ID": String(tour?.id ?? ""), Location: tour?.location || "", Duration: tour?.duration || "" }}
                                heading="Enquire about this tour"
                                subheading="Tell us a little about your trip and we will tailor it to you, with a free, no obligation quote."
                                compact
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
