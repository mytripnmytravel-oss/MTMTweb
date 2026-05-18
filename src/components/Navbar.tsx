"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Magnetic } from "@/components/ClientComponents";

const NavItem = ({ title, items, href }: { title: string; items?: { label: string; href: string }[]; href?: string }) => (
    <div className="relative group px-2 xl:px-3 py-2 cursor-pointer transition-colors hover:text-sunset-orange">
        {href ? (
            <Link href={href} className="flex items-center gap-1 font-bold text-[10px] xl:text-xs tracking-wide uppercase whitespace-nowrap">
                {title} {items && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
            </Link>
        ) : (
            <div className="flex items-center gap-1 font-bold text-[10px] xl:text-xs tracking-wide uppercase whitespace-nowrap">
                {title} {items && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
            </div>
        )}
        {items && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl py-6 border border-royal-blue/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[3000] mt-4">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-royal-blue/10 rotate-45" />
                {items.map((item, idx) => (
                    <Link key={idx} href={item.href} className="block px-6 py-3 hover:bg-royal-blue/5 hover:text-sunset-orange text-royal-blue text-[10px] font-black transition-colors uppercase tracking-[0.2em] whitespace-nowrap">
                        {item.label}
                    </Link>
                ))}
            </div>
        )}
    </div>
);

export const Logo3D = ({ isScrolled }: { isScrolled: boolean }) => {
    return (
        <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                <Image
                    src="/logo.png"
                    alt="MyTripMyTravel Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
                />
            </div>

            <div className="flex flex-col">
                <span className={`text-xl sm:text-2xl font-black tracking-tighter uppercase leading-none transition-colors duration-500 whitespace-nowrap ${isScrolled ? "text-white" : "text-royal-blue"}`}>
                    MYTRIP<span className="text-sunset-orange">MYTRAVEL</span>
                </span>
                <div className="flex items-center gap-2 mt-1">
                    <div className="h-[1px] w-4 bg-sunset-orange" />
                    <span className="text-[7px] font-black tracking-[0.3em] text-sunset-orange uppercase whitespace-nowrap">Journeys That Inspire</span>
                    <div className="h-[1px] w-4 bg-sunset-orange" />
                </div>
            </div>
        </Link>
    );
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed top-0 w-full z-[2000] transition-all duration-700 ${isScrolled ? "py-2 md:py-4" : "py-4 md:py-8"}`}>
                <div className="container mx-auto px-4 transition-all duration-700 max-w-7xl">
                    <div className={`flex items-center justify-between px-6 py-4 transition-all duration-700 ${isScrolled
                        ? "glass-card border-royal-blue/10 rounded-full shadow-2xl !bg-royal-blue text-white"
                        : "bg-white/95 backdrop-blur-xl border border-royal-blue/5 rounded-3xl text-royal-blue shadow-lg"
                        }`}>

                        <Logo3D isScrolled={isScrolled} />

                        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                            <NavItem title="Destinations" href="/destinations" items={[
                                { label: "Golden Triangle", href: "/destinations/region/golden-triangle" },
                                { label: "Rajasthan", href: "/destinations/region/rajasthan" },
                                { label: "Kerala", href: "/destinations/region/kerala" },
                                { label: "Himalayas", href: "/destinations/region/himalayas" },
                                { label: "Sikkim", href: "/destinations/region/sikkim" },
                                { label: "Andaman", href: "/destinations/region/andaman" }
                            ]} />
                            <NavItem title="Tours" href="/tours" items={[
                                { label: "Tour Master Packages", href: "/tours/golden-triangle-all" },
                                { label: "Golden Triangle Hub", href: "/tours/golden-triangle" },
                                { label: "All Tours Archive", href: "/tours" }
                            ]} />
                            <NavItem title="Experiences" href="/wellness" items={[
                                { label: "Medical Sanctuary", href: "/wellness" },
                                { label: "Heritage Dining", href: "/heritage-dining" },
                                { label: "Expert Guides", href: "/expert-guides" }
                            ]} />
                            <NavItem title="Occasions" href="/weddings" items={[
                                { label: "Royal Weddings", href: "/weddings" },
                                { label: "Corporate Missions", href: "/corporate" }
                            ]} />
                            <NavItem title="Fleet & Services" href="/fleet" items={[
                                { label: "Elite Fleet", href: "/fleet" },
                                { label: "Ground Services", href: "/services" },
                                { label: "Chauffeured Car Rental", href: "/services/car-rental" }
                            ]} />
                            <NavItem title="Journal" href="/blog" items={[
                                { label: "Blog", href: "/blog" },
                                { label: "FAQ", href: "/faq" }
                            ]} />
                        </nav>

                        <div className="flex items-center gap-3 md:gap-6">
                            <Magnetic>
                                <Link href="/booking" className="hidden md:block">
                                    <button className="bg-sunset-orange text-white px-8 py-3 font-black text-sm tracking-widest uppercase hover:bg-white hover:text-sunset-orange transition-all duration-500 rounded-full shadow-lg shadow-sunset-orange/20">
                                        Book Now
                                    </button>
                                </Link>
                            </Magnetic>
                            <button
                                className="lg:hidden text-inherit"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} className="md:w-8 md:h-8" /> : <Menu size={24} className="md:w-8 md:h-8" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 z-[200] bg-royal-blue flex flex-col"
                    >
                        <button
                            className="absolute top-8 right-8 text-white z-10"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={36} />
                        </button>
                        <div className="flex-1 overflow-y-auto overscroll-contain px-10 pt-24 pb-16 flex flex-col items-center text-center gap-6">
                            {[
                                { label: "DESTINATIONS", href: "/destinations" },
                                { label: "TOURS", href: "/tours" },
                                { label: "MEDICAL SANCTUARY", href: "/wellness" },
                                { label: "HERITAGE DINING", href: "/heritage-dining" },
                                { label: "EXPERT GUIDES", href: "/expert-guides" },
                                { label: "WEDDINGS", href: "/weddings" },
                                { label: "CORPORATE", href: "/corporate" },
                                { label: "ELITE FLEET", href: "/fleet" },
                                { label: "SERVICES", href: "/services" },
                                { label: "BLOG", href: "/blog" },
                                { label: "FAQ", href: "/faq" },
                            ].map((m) => (
                                <Link
                                    key={m.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    href={m.href}
                                    className="text-3xl sm:text-4xl font-black text-white hover:text-sunset-orange whitespace-nowrap"
                                >
                                    {m.label}
                                </Link>
                            ))}
                            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="bg-sunset-orange text-white px-12 py-5 font-black text-xl rounded-full mt-8">GET A QUOTE</button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
