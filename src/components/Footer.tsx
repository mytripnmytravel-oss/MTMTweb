"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, Mail, Phone, MapPin, Instagram, Facebook, Sparkles, ShieldCheck, Award, Users } from "lucide-react";
import { Logo3D } from "./Navbar";
import { Magnetic } from "./ClientComponents";

export const Footer = () => {
    return (
        <footer className="bg-royal-blue pt-20 md:pt-60 pb-20 relative overflow-hidden z-20">
            {/* Animated Background Element */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sunset-orange to-transparent opacity-30" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sunset-orange/5 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                {/* --- Footer Top: Newsletter Protocol --- */}
                <div className="grid lg:grid-cols-2 gap-20 items-center pb-32 border-b border-white/10 mb-32">
                    <div>
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                            Subscribe to <br /> <span className="text-sunset-orange">Priority Protocol.</span>
                        </h3>
                        <p className="text-white/40 font-bold italic text-lg max-w-md">Get 24-hour advance access to new master variations and elite fleet expansions.</p>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-sunset-orange to-royal-blue rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex flex-col md:flex-row gap-4 bg-royal-blue border border-white/10 p-4 rounded-2xl">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL FOR VIP ACCESS"
                                className="flex-1 bg-transparent border-none focus:ring-0 text-white font-black uppercase tracking-widest text-xs p-4"
                            />
                            <Magnetic>
                                <button className="bg-sunset-orange text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-royal-blue transition-all duration-500 whitespace-nowrap">
                                    Join Protocol
                                </button>
                            </Magnetic>
                        </div>
                    </div>
                </div>

                {/* --- Footer Middle: Link Directory --- */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 md:gap-16 mb-20 md:mb-40">
                    <div className="col-span-2">
                        <div className="mb-12">
                            <Logo3D isScrolled={true} />
                        </div>
                        <p className="text-white/60 text-lg font-bold max-w-sm italic leading-relaxed mb-12">
                            The absolute standard for private tours, luxury transport, and medical facilitator services in India. Architecting journeys beyond conventional travel.
                        </p>
                        <div className="flex gap-6">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/mytripmytravel/" },
                                { Icon: Facebook, href: "https://www.facebook.com/mytripmytravel.worldtouradvisor" },
                                { Icon: MapPin, href: "https://www.tripadvisor.in/Attraction_Review-g297683-d6456397-Reviews-MyTripMyTravel_Same_Day_Tour_Taj_Mahal-Agra_Agra_District_Uttar_Pradesh.html" },
                                { Icon: Sparkles, href: "https://www.google.com/search?q=mytripmytravel&rlz=1C5CHFA_enIN1099IN1099&oq=mytripmytravel+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIHCAIQABjvBTIKCAMQABiABBiiBDIKCAQQABiABBiiBDIHCAUQABjvBTIGCAYQRRg8MgYIBxBFGD3SAQgzNDYyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x397476fc8f281e49:0x5df41654f6755e44,1,,,," }
                            ].map(({ Icon, href }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-sunset-orange hover:border-sunset-orange transition-all duration-500 group">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-white/20 uppercase tracking-[0.5em] text-[10px] mb-10">Destinations</h4>
                        <ul className="space-y-6">
                            {[
                                { label: 'Golden Triangle', href: '/tours/golden-triangle-all' },
                                { label: 'Rajasthan Escapes', href: '/destinations' },
                                { label: 'Kerala Backwaters', href: '/destinations' },
                                { label: 'Himalayan Peaks', href: '/destinations' },
                                { label: 'Sikkim Silk Route', href: '/destinations' },
                                { label: 'Andaman Islands', href: '/destinations' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-white font-black uppercase text-[10px] tracking-widest opacity-60 hover:opacity-100 hover:text-sunset-orange transition-all flex items-center gap-3">
                                        <div className="w-1 h-1 bg-sunset-orange rounded-full" /> {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white/20 uppercase tracking-[0.5em] text-[10px] mb-10">The Ecosystem</h4>
                        <ul className="space-y-6">
                            {[
                                { label: 'Elite Car Rental', href: '/services/car-rental' },
                                { label: 'Tour Master Packages', href: '/tours/golden-triangle-all' },
                                { label: 'Medical Sanctuary', href: '/wellness' },
                                { label: 'Royal Weddings', href: '/weddings' },
                                { label: 'Corporate Mission', href: '/corporate' },
                                { label: 'Fleet Telemetry', href: '/telemetry' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-white font-black uppercase text-[10px] tracking-widest opacity-60 hover:opacity-100 hover:text-sunset-orange transition-all flex items-center gap-3">
                                        <div className="w-1 h-1 bg-sunset-orange rounded-full" /> {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white/20 uppercase tracking-[0.5em] text-[10px] mb-10">Contact HQ</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-3 text-white/60">
                                <MapPin size={16} className="text-sunset-orange shrink-0" />
                                <span className="text-[10px] font-black uppercase tracking-widest leading-relaxed">
                                    House Number 80, Ansal Town,<br />Block C, Agra, UP 283125
                                </span>
                            </li>
                            <li className="flex gap-3 text-white/60">
                                <Phone size={16} className="text-sunset-orange shrink-0" />
                                <a href="tel:+919997812237" className="text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">+91 99978 12237</a>
                            </li>
                            <li className="flex gap-3 text-white/60">
                                <Mail size={16} className="text-sunset-orange shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <a href="mailto:info@mytripmytravel.com" className="text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">info@mytripmytravel.com</a>
                                    <a href="mailto:mytripmytravel@gmail.com" className="text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">mytripmytravel@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- Footer Bottom: Authority Bar --- */}
                <div className="pt-20 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
                            <ShieldCheck size={16} className="text-sunset-orange" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white">Verified Luxury</span>
                        </div>
                        <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-crosshair">
                            <Award size={16} className="text-sunset-orange" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white">Top Rated Gateway</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {[
                            { label: 'Privacy Protocol', href: '/legal/privacy' },
                            { label: 'Terms of Mission', href: '/legal/terms' },
                            { label: 'Cookie Registry', href: '/legal/cookies' }
                        ].map((link) => (
                            <Link key={link.label} href={link.href} className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-sunset-orange transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-2 text-right">
                        <p className="text-[9px] font-black uppercase tracking-widest text-white/10">
                            &copy; 2026 MYTRIPMYTRAVEL ARCHIVE. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-[9px] font-black uppercase tracking-widest text-white/10">
                            Designed & Developed by <a href="https://www.frameleads.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-sunset-orange transition-colors">FrameLeads</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
