"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavItem = ({ title, items, href }: { title: string; items?: { label: string; href: string }[]; href?: string }) => (
    <div className="relative group px-1">
        <Link
            href={href ?? "#"}
            className="flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold text-ink/80 transition-colors hover:text-clay whitespace-nowrap"
        >
            {title}
            {items && <ChevronDown size={13} className="text-stone transition-transform duration-300 group-hover:rotate-180" />}
        </Link>
        {items && (
            <div className="invisible absolute left-1/2 top-full z-[3000] mt-2 w-64 -translate-x-1/2 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-[0_24px_60px_-30px_rgba(26,23,18,0.35)] transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {items.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}
                        className="block rounded-xl px-4 py-2.5 text-[13px] font-semibold text-ink-soft transition-colors hover:bg-paper-dim hover:text-clay whitespace-nowrap"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        )}
    </div>
);

export const Logo3D = ({ light = false }: { light?: boolean; isScrolled?: boolean }) => (
    <Link href="/" className="flex items-center gap-3 group">
        <div className="relative h-11 w-11 shrink-0 sm:h-12 sm:w-12">
            <Image src="/logo.png" alt="MyTripMyTravel logo" width={52} height={52} className="h-full w-full object-contain drop-shadow-[0_3px_6px_rgba(0,0,0,0.12)]" />
        </div>
        <div className="flex flex-col leading-none">
            <span className={`font-display text-xl font-black uppercase leading-none tracking-tight whitespace-nowrap sm:text-2xl ${light ? "text-paper" : "text-ink"}`}>
                MYTRIP<span className="text-clay">MYTRAVEL</span>
            </span>
            <span className="mt-1.5 flex items-center gap-1.5">
                <span className="h-px w-4 bg-clay" />
                <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-clay whitespace-nowrap">Journeys That Inspire</span>
                <span className="h-px w-4 bg-clay" />
            </span>
        </div>
    </Link>
);

const NAV = [
    { title: "Destinations", href: "/destinations", items: [
        { label: "Golden Triangle", href: "/destinations/region/golden-triangle" },
        { label: "Rajasthan", href: "/destinations/region/rajasthan" },
        { label: "Kerala", href: "/destinations/region/kerala" },
        { label: "Himalayas", href: "/destinations/region/himalayas" },
        { label: "Sikkim", href: "/destinations/region/sikkim" },
        { label: "Andaman", href: "/destinations/region/andaman" },
    ]},
    { title: "Tours", href: "/tours", items: [
        { label: "All Tours", href: "/tours" },
        { label: "Master Packages", href: "/tours/golden-triangle-all" },
        { label: "Golden Triangle", href: "/tours/golden-triangle" },
        { label: "Rajasthan", href: "/tours/rajasthan" },
        { label: "Kerala", href: "/tours/kerala" },
        { label: "Himalayas", href: "/tours/himalayas" },
    ]},
    { title: "Experiences", href: "/wellness", items: [
        { label: "Wellness & Sanctuary", href: "/wellness" },
        { label: "Heritage Dining", href: "/heritage-dining" },
        { label: "Expert Guides", href: "/expert-guides" },
    ]},
    { title: "Occasions", href: "/weddings", items: [
        { label: "Weddings", href: "/weddings" },
        { label: "Corporate Offsites", href: "/corporate" },
    ]},
    { title: "Fleet & Services", href: "/fleet", items: [
        { label: "Elite Fleet", href: "/fleet" },
        { label: "Ground Services", href: "/services" },
        { label: "Chauffeured Car Rental", href: "/services/car-rental" },
        { label: "Inter-City Transfers", href: "/services/inter-city" },
    ]},
    { title: "Journal", href: "/blog", items: [
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
    ]},
];

const MOBILE = [
    { label: "Destinations", href: "/destinations" },
    { label: "Tours", href: "/tours" },
    { label: "Wellness & Sanctuary", href: "/wellness" },
    { label: "Heritage Dining", href: "/heritage-dining" },
    { label: "Expert Guides", href: "/expert-guides" },
    { label: "Weddings", href: "/weddings" },
    { label: "Corporate", href: "/corporate" },
    { label: "Elite Fleet", href: "/fleet" },
    { label: "Services", href: "/services" },
    { label: "Journal", href: "/blog" },
    { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 z-[2000] w-full border-b transition-all duration-500 ${
                    isScrolled
                        ? "border-line bg-paper/90 backdrop-blur-md"
                        : "border-transparent bg-paper/60 backdrop-blur-sm"
                }`}
            >
                <div className="container-x flex items-center justify-between py-3">
                    <Logo3D isScrolled={isScrolled} />

                    <nav className="hidden items-center lg:flex">
                        {NAV.map((n) => (
                            <NavItem key={n.title} {...n} />
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <Link href="/booking" className="hidden md:inline-flex btn-primary btn-sm">
                            Plan your trip
                        </Link>
                        <button
                            aria-label="Open menu"
                            className="text-ink lg:hidden"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[3000] flex flex-col bg-paper lg:hidden"
                    >
                        <div className="container-x flex items-center justify-between py-3">
                            <Logo3D />
                            <button aria-label="Close menu" className="text-ink" onClick={() => setIsMobileMenuOpen(false)}>
                                <X size={26} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-16 pt-6">
                            <div className="flex flex-col divide-y divide-line">
                                {MOBILE.map((m) => (
                                    <Link
                                        key={m.href}
                                        href={m.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-between py-4 font-display text-2xl font-semibold text-ink hover:text-clay"
                                    >
                                        {m.label}
                                        <ChevronDown size={18} className="-rotate-90 text-stone" />
                                    </Link>
                                ))}
                            </div>
                            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary mt-8 w-full py-4">
                                Plan your trip
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
