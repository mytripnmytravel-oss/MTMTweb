"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { CheckCircle2, ArrowRight, Phone, Mail, MessageCircle, ShieldCheck, Clock } from "lucide-react";

export const WA_NUMBER = "919997812237";
export const PHONE_DISPLAY = "+91 99978 12237";
export const EMAIL = "info@mytripmytravel.com";

/**
 * Single source of truth for the Formspree form that receives every enquiry.
 * To route leads to a different inbox, create a form at formspree.io (set its
 * notification email to info@mytripmytravel.com and confirm it), then change
 * ONLY this value — every form on the site updates.
 */
export const FORMSPREE_FORM_ID = "maqaanvz";
export const FORMSPREE_ACTION = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

/** Build a WhatsApp deep link with a pre-filled, dash-free message. */
export function waLink(message: string) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Reusable enquiry form. Posts to Formspree (emails the MyTripMyTravel inbox)
 * and tags every lead with its page source and any preset context so the team
 * knows exactly what the traveller wants.
 */
export function EnquiryForm({
    source,
    context,
    heading = "Request a free, tailored quote",
    subheading = "Tell us about your trip and our travel desk replies within a few hours with a personalised plan and price. No obligation, and your details stay private.",
    compact = false,
}: {
    source: string;
    context?: Record<string, string>;
    heading?: string;
    subheading?: string;
    compact?: boolean;
}) {
    const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

    if (state.succeeded) {
        return (
            <div className="card flex flex-col items-center p-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <CheckCircle2 size={30} />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-ink">Thank you, your enquiry is in.</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                    Our travel desk will reach out shortly with a personalised plan and quote. Prefer to talk now? Message us on WhatsApp.
                </p>
                <a href={waLink("Hi MyTripMyTravel, I just sent an enquiry and would like to chat.")} target="_blank" rel="noopener noreferrer" className="btn mt-6 rounded-full bg-[#25D366] px-6 py-3 text-white hover:opacity-90">
                    <MessageCircle size={17} /> Continue on WhatsApp
                </a>
            </div>
        );
    }

    return (
        <div className="card p-7 sm:p-9">
            <p className="eyebrow eyebrow-accent">Plan your trip</p>
            <h3 className="mt-3 text-2xl font-semibold text-ink sm:text-[26px]">{heading}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{subheading}</p>

            <form onSubmit={handleSubmit} action={FORMSPREE_ACTION} method="POST" className="mt-7 space-y-4">
                <input type="hidden" name="Enquiry Source" value={source} />
                {context && Object.entries(context).map(([k, v]) => <input key={k} type="hidden" name={k} value={v} />)}

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <input required name="Full Name" type="text" placeholder="Your name" className="field" />
                        <ValidationError prefix="Name" field="Full Name" errors={state.errors} className="mt-1 text-xs text-red-500" />
                    </div>
                    <div>
                        <input required name="Email" type="email" placeholder="Email address" className="field" />
                        <ValidationError prefix="Email" field="Email" errors={state.errors} className="mt-1 text-xs text-red-500" />
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <input required name="Phone" type="tel" placeholder="Phone or WhatsApp" className="field" />
                        <ValidationError prefix="Phone" field="Phone" errors={state.errors} className="mt-1 text-xs text-red-500" />
                    </div>
                    <select name="Travellers" defaultValue="2 to 4 travellers" className="field appearance-none">
                        <option>1 traveller</option>
                        <option>2 to 4 travellers</option>
                        <option>5 to 8 travellers</option>
                        <option>9 or more (group)</option>
                    </select>
                </div>

                {!compact && (
                    <div className="grid gap-4 sm:grid-cols-2">
                        <input name="Travel Month" type="text" placeholder="Rough travel dates (optional)" className="field" />
                        <input name="Budget" type="text" placeholder="Budget per person (optional)" className="field" />
                    </div>
                )}

                <textarea name="Message" rows={compact ? 3 : 4} placeholder="Anything else? Hotel preferences, must see places, dietary needs, questions." className="field resize-none" />

                <button type="submit" disabled={state.submitting} className="btn-primary w-full py-4 disabled:opacity-50">
                    {state.submitting ? "Sending your enquiry" : "Send my enquiry"} <ArrowRight size={17} />
                </button>

                {state.errors && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-[13px] text-red-700">
                        Something went wrong sending your enquiry. Please email{" "}
                        <a href={`mailto:${EMAIL}`} className="font-semibold underline">{EMAIL}</a> or{" "}
                        <a href={waLink("Hi MyTripMyTravel, my enquiry form did not go through. I would like to plan a trip.")} target="_blank" rel="noopener noreferrer" className="font-semibold underline">message us on WhatsApp</a>.
                    </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-1 text-[12px] text-stone">
                    <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-clay" /> Private and confidential</span>
                    <span className="flex items-center gap-1.5"><Clock size={13} className="text-clay" /> Reply within a few hours</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-clay" /> No obligation</span>
                </div>
            </form>
        </div>
    );
}

/** Dark, high-conversion call to action band with direct contact channels. */
export function LeadCTA({
    title = "Ready to start planning?",
    subtitle = "Talk to a real travel planner today. We reply fast, quote transparently, and tailor every journey to you.",
    waMessage = "Hi MyTripMyTravel, I would like to plan a trip across India.",
}: {
    title?: string;
    subtitle?: string;
    waMessage?: string;
}) {
    return (
        <section className="section">
            <div className="container-x">
                <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 sm:px-16 sm:py-16">
                    <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-xl">
                            <h2 className="display-3 text-paper">{title}</h2>
                            <p className="mt-4 leading-relaxed text-paper/70">{subtitle}</p>
                        </div>
                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
                            <Link href="/booking" className="btn rounded-full bg-paper px-7 py-3.5 text-ink hover:bg-clay hover:text-paper">Plan your trip <ArrowRight size={16} /></Link>
                            <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn rounded-full bg-[#25D366] px-7 py-3.5 text-white hover:opacity-90"><MessageCircle size={16} /> WhatsApp us</a>
                            <a href={`tel:+${WA_NUMBER}`} className="btn rounded-full border border-white/25 px-7 py-3.5 text-paper hover:bg-paper hover:text-ink"><Phone size={15} /> Call</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/** Floating WhatsApp button for lead-heavy pages. */
export function WhatsAppFab({ message = "Hi MyTripMyTravel, I am interested in a private tour or car rental in India." }: { message?: string }) {
    return (
        <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-[500] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        >
            <MessageCircle fill="white" size={26} />
        </a>
    );
}

/** Inline row of direct contact chips (WhatsApp, call, email). */
export function ContactChips({ waMessage = "Hi MyTripMyTravel, I have a question about a trip." }: { waMessage?: string }) {
    return (
        <div className="flex flex-wrap gap-3">
            <a href={waLink(waMessage)} target="_blank" rel="noopener noreferrer" className="btn rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] text-white hover:opacity-90"><MessageCircle size={15} /> WhatsApp</a>
            <a href={`tel:+${WA_NUMBER}`} className="btn-outline btn-sm"><Phone size={14} /> {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="btn-outline btn-sm"><Mail size={14} /> {EMAIL}</a>
        </div>
    );
}

export type Crumb = { name: string; item?: string };

/**
 * One drop-in lead block for programmatic/long-tail pages. Renders contextual
 * JSON-LD (optional primary type + FAQPage + BreadcrumbList), a lead section
 * (inline EnquiryForm or a CTA band), and the floating WhatsApp button.
 * Insert once, immediately before <Footer />.
 */
export function LeadBlock({
    source,
    context,
    heading,
    subheading,
    pitch,
    waMessage = "Hi MyTripMyTravel, I would like to plan a trip in India.",
    variant = "form",
    faqs,
    breadcrumbs,
    primarySchema,
}: {
    source: string;
    context?: Record<string, string>;
    heading: string;
    subheading?: string;
    pitch?: string;
    waMessage?: string;
    variant?: "form" | "cta";
    faqs?: { q: string; a: string }[];
    breadcrumbs?: Crumb[];
    primarySchema?: Record<string, unknown>;
}) {
    const graph: Record<string, unknown>[] = [];
    if (primarySchema) graph.push({ "@context": "https://schema.org", ...primarySchema });
    if (faqs && faqs.length) graph.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
    if (breadcrumbs && breadcrumbs.length) graph.push({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, ...(b.item ? { item: b.item } : {}) })) });

    return (
        <>
            {graph.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />}
            {variant === "cta" ? (
                <LeadCTA title={heading} subtitle={subheading} waMessage={waMessage} />
            ) : (
                <section className="border-t border-line bg-paper-dim/60 py-20 sm:py-24">
                    <div className="container-x grid items-start gap-14 lg:grid-cols-2">
                        <div>
                            <p className="eyebrow eyebrow-accent">Plan with us</p>
                            <h2 className="display-2 mt-3 text-ink">{heading}</h2>
                            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted">
                                {pitch || "Tell us your dates and what you love. Our travel desk builds a private, chauffeured plan around you, with handpicked hotels and a transparent quote, usually within a few hours."}
                            </p>
                            <div className="mt-7">
                                <ContactChips waMessage={waMessage} />
                            </div>
                        </div>
                        <EnquiryForm source={source} context={context} heading={heading} subheading={subheading || "Free, no obligation quote. Your details stay private."} />
                    </div>
                </section>
            )}
            <WhatsAppFab message={waMessage} />
        </>
    );
}
