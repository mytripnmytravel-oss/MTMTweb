"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUpRight, Check } from "lucide-react";
import { useForm } from "@formspree/react";
import { Logo3D } from "./Navbar";
import { FORMSPREE_FORM_ID } from "./lead/Lead";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
    {
        title: "Company",
        links: [
            { label: "Our Story & Team", href: "/about" },
            { label: "The Methodology", href: "/methodology" },
            { label: "Careers", href: "/careers" },
            { label: "Journal", href: "/blog" },
            { label: "FAQ", href: "/faq" },
        ],
    },
    {
        title: "Destinations",
        links: [
            { label: "Golden Triangle", href: "/destinations/region/golden-triangle" },
            { label: "Rajasthan", href: "/destinations/region/rajasthan" },
            { label: "Kerala", href: "/destinations/region/kerala" },
            { label: "Himalayas", href: "/destinations/region/himalayas" },
            { label: "Sikkim", href: "/destinations/region/sikkim" },
            { label: "Andaman", href: "/destinations/region/andaman" },
        ],
    },
    {
        title: "Experiences",
        links: [
            { label: "Ground Services", href: "/services" },
            { label: "Chauffeured Car Rental", href: "/services/car-rental" },
            { label: "Master Tour Packages", href: "/tours/golden-triangle-all" },
            { label: "Wellness & Sanctuary", href: "/wellness" },
            { label: "Weddings", href: "/weddings" },
            { label: "Corporate Offsites", href: "/corporate" },
        ],
    },
];

export const Footer = () => {
    const [nlState, nlSubmit] = useForm(FORMSPREE_FORM_ID);
    return (
        <footer className="relative z-20 bg-ink text-paper">
            <div className="container-x pb-12 pt-20 sm:pt-24">
                {/* Newsletter */}
                <div className="grid items-end gap-10 border-b border-white/10 pb-16 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow text-clay-soft">Stay in the know</p>
                        <h3 className="display-3 mt-4 text-paper">
                            Quiet notes on new journeys, seasons, and openings.
                        </h3>
                    </div>
                    {nlState.succeeded ? (
                        <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-paper lg:justify-self-end">
                            <Check size={18} className="text-clay-soft" /> Thank you, you are subscribed.
                        </div>
                    ) : (
                        <form onSubmit={nlSubmit} action={`https://formspree.io/f/${FORMSPREE_FORM_ID}`} method="POST" className="flex w-full max-w-md gap-3 lg:justify-self-end">
                            <input type="hidden" name="Inquiry Type" value="Newsletter" />
                            <input
                                required
                                type="email"
                                name="Email"
                                placeholder="Your email"
                                className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-paper placeholder:text-paper/40 outline-none transition focus:border-clay-soft"
                            />
                            <button type="submit" disabled={nlState.submitting} className="btn rounded-full bg-paper px-6 py-3 text-ink hover:bg-clay hover:text-paper disabled:opacity-50">
                                {nlState.submitting ? "…" : "Subscribe"}
                            </button>
                        </form>
                    )}
                </div>

                {/* Directory */}
                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Logo3D light />
                        <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/55">
                            Private, chauffeured journeys across India, the Golden Triangle, Rajasthan,
                            Kerala, the Himalayas and beyond, designed one traveller at a time.
                        </p>
                        <div className="mt-8 flex gap-3">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/mytripmytravel/" },
                                { Icon: Facebook, href: "https://www.facebook.com/mytripmytravel.worldtouradvisor" },
                                { Icon: MapPin, href: "https://www.tripadvisor.in/Attraction_Review-g297683-d6456397-Reviews-MyTripMyTravel_Same_Day_Tour_Taj_Mahal-Agra_Agra_District_Uttar_Pradesh.html" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/70 transition-all hover:border-clay-soft hover:text-clay-soft"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {COLUMNS.map((col) => (
                        <div key={col.title}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/40">{col.title}</p>
                            <ul className="mt-5 space-y-3">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-sm text-paper/60 transition-colors hover:text-clay-soft">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact strip */}
                <div className="grid gap-6 border-t border-white/10 py-10 sm:grid-cols-3">
                    <a href="tel:+919997812237" className="group flex items-center gap-3 text-sm text-paper/70 hover:text-paper">
                        <Phone size={16} className="text-clay-soft" /> +91 99978 12237
                    </a>
                    <a href="mailto:info@mytripmytravel.com" className="group flex items-center gap-3 text-sm text-paper/70 hover:text-paper">
                        <Mail size={16} className="text-clay-soft" /> info@mytripmytravel.com
                    </a>
                    <div className="flex items-start gap-3 text-sm text-paper/70">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-clay-soft" />
                        <span>House No. 80, Ansal Town, Block C, Agra, UP 283125</span>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
                    <p className="text-xs text-paper/40">&copy; 2026 MyTripMyTravel. All rights reserved.</p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link href="/legal/privacy" className="text-xs text-paper/40 hover:text-clay-soft">Privacy</Link>
                        <Link href="/legal/terms" className="text-xs text-paper/40 hover:text-clay-soft">Terms</Link>
                        <Link href="/legal/cookies" className="text-xs text-paper/40 hover:text-clay-soft">Cookies</Link>
                        <Link href="/site-map" className="text-xs text-paper/40 hover:text-clay-soft">Sitemap</Link>
                        <a href="https://www.frameleads.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-paper/40 hover:text-clay-soft">
                            FrameLeads <ArrowUpRight size={12} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
