"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Clock, MapPin, ShieldCheck, ChevronRight, Calendar, User, Sparkles,
    ArrowRight, FileText, Plus, Check, Minus, Car, Moon, Utensils,
    BadgeIndianRupee, Headset, CalendarClock, MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TourInquiryModal } from "@/components/TourInquiryModal";
import { EnquiryForm, WhatsAppFab, waLink } from "@/components/lead/Lead";
import { packageSlug, type Package } from "@/data/tours";

const REGION_BY_LOCATION: Record<string, { label: string; href: string }> = {
    "Golden Triangle": { label: "Golden Triangle", href: "/destinations/region/golden-triangle" },
    Rajasthan: { label: "Rajasthan", href: "/destinations/region/rajasthan" },
    Himalayas: { label: "the Himalayas", href: "/destinations/region/himalayas" },
    "South India": { label: "South India", href: "/destinations/region/kerala" },
    Kerala: { label: "Kerala", href: "/destinations/region/kerala" },
    "North East": { label: "the North East", href: "/destinations/region/sikkim" },
    Islands: { label: "the Andamans", href: "/destinations/region/andaman" },
};

const TRUST = [
    { icon: Car, title: "Private chauffeur", desc: "A dedicated, vetted driver for your group alone." },
    { icon: BadgeIndianRupee, title: "Transparent pricing", desc: "Fuel, tolls and permits pre calculated. No surprises." },
    { icon: CalendarClock, title: "Flexible dates", desc: "Travel when you like. Adjust the pace on the road." },
    { icon: Headset, title: "24/7 support", desc: "A human on call for the whole journey." },
];

export default function TourDetailView({ tour, related }: { tour: Package; related: Package[] }) {
    const [isInquiryModalOpen, setIsInquiryModalOpen] = React.useState(false);
    const region = REGION_BY_LOCATION[tour.location];
    const waMsg = `Hi MyTripMyTravel, I am interested in the ${tour.title} (${tour.duration}). Could you share details and a quote?`;

    const jsonLd = [
        {
            "@context": "https://schema.org", "@type": "TouristTrip", name: tour.title,
            description: tour.answer || tour.highlight, touristType: tour.theme,
            offers: { "@type": "Offer", price: tour.price.replace(/[^0-9]/g, ""), priceCurrency: "INR", availability: "https://schema.org/InStock" },
            provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: "https://www.mytripmytravel.com" },
        },
        ...(tour.faqs && tour.faqs.length ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: tour.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] : []),
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mytripmytravel.com" },
            { "@type": "ListItem", position: 2, name: "Tours", item: "https://www.mytripmytravel.com/tours" },
            { "@type": "ListItem", position: 3, name: tour.title },
        ] },
    ];

    return (
        <main className="min-h-screen bg-paper">
            <Navbar />
            <TourInquiryModal tour={tour} isOpen={isInquiryModalOpen} onClose={() => setIsInquiryModalOpen(false)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero */}
            <section className="relative flex h-[64vh] min-h-[460px] items-end overflow-hidden">
                <Image src={tour.img} alt={tour.title} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
                <div className="container-x relative z-10 pb-14 pt-32">
                    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-paper/70">
                        <Link href="/" className="hover:text-clay-soft">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/tours" className="hover:text-clay-soft">Tours</Link>
                        <ChevronRight size={12} />
                        <span className="text-clay-soft">{tour.title}</span>
                    </nav>
                    <span className="eyebrow text-paper/70">{tour.theme}</span>
                    <h1 className="display-1 mt-4 max-w-3xl font-medium text-paper">{tour.title}</h1>
                    <div className="mt-6 flex flex-wrap gap-2.5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-[13px] font-medium text-ink"><Clock size={15} className="text-clay" /> {tour.duration}</span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-[13px] font-medium text-ink"><MapPin size={15} className="text-clay" /> {tour.location}</span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-[13px] font-medium text-ink"><BadgeIndianRupee size={15} className="text-clay" /> from {tour.price}</span>
                    </div>
                </div>
            </section>

            {/* Trust strip */}
            <section className="border-b border-line bg-white">
                <div className="container-x grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
                    {TRUST.map((t) => {
                        const Icon = t.icon;
                        return (
                            <div key={t.title} className="flex items-start gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper-dim text-clay"><Icon size={18} /></span>
                                <div>
                                    <h3 className="text-[14px] font-medium text-ink">{t.title}</h3>
                                    <p className="mt-0.5 text-[12px] leading-relaxed text-muted">{t.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Detail */}
            <section className="section">
                <div className="container-x grid gap-14 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <p className="eyebrow eyebrow-accent">Overview</p>
                        <p className="mt-4 font-display text-[24px] font-medium leading-snug text-ink sm:text-[30px]">{tour.highlight}</p>
                        {tour.answer && <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-muted">{tour.answer}</p>}

                        {tour.quickFacts && tour.quickFacts.length > 0 && (
                            <dl className="mt-12 grid gap-x-10 gap-y-4 rounded-2xl border border-line bg-white p-8 sm:grid-cols-2">
                                {tour.quickFacts.map((f, i) => (
                                    <div key={i} className="flex justify-between gap-6 border-b border-line pb-3 last:border-0">
                                        <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-stone">{f.label}</dt>
                                        <dd className="text-right text-[15px] font-medium text-ink">{f.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}

                        {tour.bestTime && (
                            <div className="mt-12 rounded-2xl border border-line bg-paper-dim/60 p-8">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-clay" />
                                    <h3 className="text-lg font-medium text-ink">Best time to travel</h3>
                                </div>
                                <p className="mt-3 text-[16px] leading-relaxed text-muted">{tour.bestTime}</p>
                            </div>
                        )}

                        <h2 className="display-3 mt-16 text-ink">Day by day itinerary</h2>
                        <div className="mt-10 space-y-10">
                            {tour.itinerary.map((day, idx) => (
                                <motion.div key={idx} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                    className="relative border-l border-line pb-2 pl-10 last:border-0">
                                    <div className="absolute left-0 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-ink text-[13px] font-medium text-paper">{day.day}</div>
                                    <h4 className="text-xl font-medium text-ink">Day {day.day}{day.title ? `. ${day.title}` : ""}</h4>
                                    {day.detail && day.detail.length > 0 ? (
                                        <div className="mt-3 max-w-3xl space-y-3">
                                            {day.detail.map((p, i) => <p key={i} className="text-[16px] leading-relaxed text-muted">{p}</p>)}
                                        </div>
                                    ) : (
                                        <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-muted">{day.plan}</p>
                                    )}
                                    {(day.drive || day.overnight || day.meals) && (
                                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-medium text-stone">
                                            {day.drive && <span className="flex items-center gap-1.5"><Car size={13} className="text-clay" />{day.drive}</span>}
                                            {day.overnight && day.overnight !== "Departure" && <span className="flex items-center gap-1.5"><Moon size={13} className="text-clay" />Overnight in {day.overnight}</span>}
                                            {day.meals && <span className="flex items-center gap-1.5"><Utensils size={13} className="text-clay" />{day.meals}</span>}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {(tour.inclusions?.length || tour.exclusions?.length) ? (
                            <div className="mt-14 grid gap-6 md:grid-cols-2">
                                {tour.inclusions && tour.inclusions.length > 0 && (
                                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-7">
                                        <h3 className="text-[12px] font-medium uppercase tracking-[0.16em] text-emerald-700">What is included</h3>
                                        <ul className="mt-5 space-y-3">
                                            {tour.inclusions.map((item, i) => <li key={i} className="flex gap-3 text-[15px] leading-snug text-ink-soft"><Check size={17} className="mt-0.5 shrink-0 text-emerald-600" />{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {tour.exclusions && tour.exclusions.length > 0 && (
                                    <div className="rounded-2xl border border-line bg-white p-7">
                                        <h3 className="text-[12px] font-medium uppercase tracking-[0.16em] text-stone">Not included</h3>
                                        <ul className="mt-5 space-y-3">
                                            {tour.exclusions.map((item, i) => <li key={i} className="flex gap-3 text-[15px] leading-snug text-muted"><Minus size={17} className="mt-0.5 shrink-0 text-stone" />{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : null}

                        {tour.faqs && tour.faqs.length > 0 && (
                            <div className="mt-14">
                                <h3 className="display-3 text-ink">Frequently asked</h3>
                                <div className="mt-8 divide-y divide-line">
                                    {tour.faqs.map((f, i) => (
                                        <details key={i} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between gap-4 text-[17px] font-medium text-ink">
                                                {f.q}
                                                <Plus size={18} className="shrink-0 text-stone transition-transform group-open:rotate-45 group-open:text-clay" />
                                            </summary>
                                            <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Internal links */}
                        <div className="mt-14 flex flex-wrap gap-3">
                            {region && <Link href={region.href} className="btn-outline btn-sm">Explore {region.label} <ArrowRight size={14} /></Link>}
                            <Link href="/fleet" className="btn-outline btn-sm">See the fleet <ArrowRight size={14} /></Link>
                            <Link href="/tours" className="btn-outline btn-sm">All itineraries <ArrowRight size={14} /></Link>
                            <Link href="/destinations" className="btn-outline btn-sm">Destinations <ArrowRight size={14} /></Link>
                        </div>
                    </div>

                    {/* Sticky CTA */}
                    <div>
                        <div className="sticky top-24 overflow-hidden rounded-3xl bg-ink p-9 text-paper">
                            <p className="eyebrow text-clay-soft">From</p>
                            <div className="mt-2 font-display text-5xl font-semibold tracking-tight text-paper">{tour.price}</div>
                            <p className="mt-1 text-sm text-paper/60">per person, starting</p>
                            <div className="mt-8 space-y-3 border-y border-white/10 py-6">
                                <div className="flex items-center gap-3 text-sm text-paper/80"><ShieldCheck size={18} className="shrink-0 text-clay-soft" /> Safe, private travel</div>
                                <div className="flex items-center gap-3 text-sm text-paper/80"><Calendar size={18} className="shrink-0 text-clay-soft" /> Flexible travel dates</div>
                                <div className="flex items-center gap-3 text-sm text-paper/80"><User size={18} className="shrink-0 text-clay-soft" /> Private chauffeur included</div>
                            </div>
                            <div className="mt-6 flex flex-col gap-3">
                                <button onClick={() => setIsInquiryModalOpen(true)} className="btn rounded-full bg-clay px-6 py-3.5 text-paper hover:bg-clay-soft">Enquire, free quote <Plus size={16} /></button>
                                <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer" className="btn rounded-full bg-[#25D366] px-6 py-3.5 text-white hover:opacity-90"><MessageCircle size={16} /> WhatsApp us</a>
                                <button onClick={() => window.print()} className="btn rounded-full bg-paper px-6 py-3.5 text-ink hover:bg-white/90"><FileText size={16} /> Download PDF</button>
                            </div>
                            <p className="mt-6 text-center text-[12px] text-paper/50">Free quote, no obligation. We usually reply within a few hours.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inline enquiry */}
            <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                <div className="container-x grid items-start gap-14 lg:grid-cols-2">
                    <div>
                        <p className="eyebrow eyebrow-accent">Make it yours</p>
                        <h2 className="display-2 mt-3 text-ink">Tailor the {tour.title} to you.</h2>
                        <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
                            Every journey is private and built around you. Change the pace, add a city, choose your hotels, or start on any date. Send us a few details and our travel desk replies with a personalised plan and price.
                        </p>
                        <ul className="mt-8 space-y-3">
                            {["Private, chauffeur driven end to end", "Handpicked hotels to your taste and budget", "Licensed local guides at every city", "One point of contact for the whole trip"].map((li) => (
                                <li key={li} className="flex items-center gap-3 text-[15px] text-ink-soft"><Check size={17} className="text-clay" /> {li}</li>
                            ))}
                        </ul>
                    </div>
                    <EnquiryForm
                        source={`Tour page: ${tour.title}`}
                        context={{ "Inquiry Type": "Tour Package", "Selected Tour": tour.title, "Tour ID": String(tour.id), Location: tour.location, Duration: tour.duration }}
                        heading={`Enquire about the ${tour.title}`}
                        subheading="Free, no obligation quote. Your details stay private."
                    />
                </div>
            </section>

            {/* Related */}
            {related.length > 0 && (
                <section className="section">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Keep exploring</p>
                        <h2 className="display-3 mt-3 text-ink">Related itineraries</h2>
                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((p) => (
                                <Link key={p.id} href={`/tours/${packageSlug(p)}`} className="card card-hover group overflow-hidden">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                                        <div className="absolute bottom-4 left-5 right-5">
                                            <div className="text-[11px] font-medium text-paper/80">{p.duration} · {p.theme}</div>
                                            <h3 className="mt-0.5 text-lg font-medium text-paper">{p.title}</h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-5">
                                        <span className="text-base font-medium text-ink">{p.price}</span>
                                        <span className="inline-flex items-center gap-1 text-sm font-medium text-clay">Open <ArrowRight size={14} /></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
            <WhatsAppFab message={waMsg} />

            {/* Printable brief */}
            <div id="printable-brief" className="hidden bg-white p-20 text-royal-blue print:block">
                <div className="mb-16 flex items-end justify-between border-b-4 border-sunset-orange pb-10">
                    <div>
                        <h1 className="text-5xl font-semibold tracking-tight">MyTripMyTravel</h1>
                        <h4 className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-sunset-orange">Itinerary brief</h4>
                    </div>
                    <div className="text-right text-[10px] uppercase tracking-widest opacity-50">
                        <div>Ref MTMT {packageSlug(tour)}</div>
                        <div>{tour.theme}</div>
                    </div>
                </div>
                <h2 className="mb-6 text-5xl font-semibold tracking-tight">{tour.title}</h2>
                <p className="mb-16 max-w-4xl text-xl italic opacity-70">{tour.highlight}</p>
                <h3 className="mb-8 border-b border-royal-blue/10 pb-3 text-lg font-medium uppercase tracking-[0.2em]">Itinerary</h3>
                <div className="space-y-8">
                    {tour.itinerary.map((day, idx) => (
                        <div key={idx} className="flex gap-8">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-royal-blue font-semibold text-white">{day.day}</div>
                            <div>
                                <h4 className="text-[10px] font-medium uppercase tracking-widest text-sunset-orange">Day {day.day}</h4>
                                <p className="mt-1 text-lg">{day.plan}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
