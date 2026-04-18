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
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <Link href="/" className="flex items-center gap-4 group">
            <Magnetic>
                <motion.div
                    onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        x.set(e.clientX - (rect.left + rect.width / 2));
                        y.set(e.clientY - (rect.top + rect.height / 2));
                    }}
                    onMouseLeave={() => { x.set(0); y.set(0); }}
                    style={{ perspective: 1000, rotateX, rotateY }}
                    className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0"
                >
                    <div className="absolute inset-0 bg-sunset-orange/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div
                        className="relative z-10 w-full h-full p-0 flex items-center justify-center transition-all duration-500"
                        whileHover={{ scale: 1.15 }}
                    >
                        <Image
                            src="/logo.png"
                            alt="MyTripMyTravel Logo"
                            width={56}
                            height={56}
                            className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] mix-blend-normal"
                        />
                    </motion.div>
                </motion.div>
            </Magnetic>

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

                        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
                            <NavItem title="Destinations" href="/destinations" items={[
                                { label: "Rajasthan", href: "/destinations/rajasthan" },
                                { label: "Kerala", href: "/destinations/kerala" },
                                { label: "Himalayas", href: "/destinations/himalayas" },
                                { label: "Sikkim", href: "/destinations/sikkim" },
                                { label: "Andaman", href: "/destinations/andaman" }
                            ]} />
                            <NavItem title="Tour Master Packages" href="/tours/golden-triangle-all" />
                            <NavItem title="Elite Fleet" href="/fleet" />
                            <NavItem title="Medical Sanctuary" href="/wellness" items={[
                                { label: "Yoga & Soul", href: "/wellness/yoga-soul" },
                                { label: "Orthopedic Restoration", href: "/wellness/orthopedic" },
                                { label: "Ayurvedic Alchemy", href: "/wellness/ayurvedic" },
                                { label: "Massage Therapy", href: "/wellness/massage" }
                            ]} />
                            <NavItem title="Weddings" href="/weddings" />
                            <NavItem title="Blogs" href="/blog" />
                            <NavItem title="Car Rental" href="/services/car-rental" />
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
                        className="fixed inset-0 z-[200] bg-royal-blue p-12 flex flex-col items-center justify-center text-center gap-8"
                    >
                        <button
                            className="absolute top-8 right-8 text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={40} />
                        </button>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/destinations" className="text-4xl font-black text-white hover:text-sunset-orange whitespace-nowrap">DESTINATIONS</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/tours/golden-triangle-all" className="text-4xl font-black text-white hover:text-sunset-orange whitespace-nowrap">TOUR MASTER PACKAGES</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/fleet" className="text-4xl font-black text-white hover:text-sunset-orange whitespace-nowrap">ELITE FLEET</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/wellness" className="text-4xl font-black text-white hover:text-sunset-orange whitespace-nowrap">MEDICAL SANCTUARY</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/blog" className="text-4xl font-black text-white hover:text-sunset-orange whitespace-nowrap">BLOGS</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/car-rental" className="text-4xl font-black text-white hover:text-sunset-orange whitespace-nowrap">CAR RENTAL</Link>
                        <div className="text-4xl font-black text-white hover:text-sunset-orange">WEDDINGS</div>
                        <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="bg-sunset-orange text-white px-12 py-5 font-black text-xl rounded-full mt-12">GET A QUOTE</button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
