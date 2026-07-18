"use client";

import React, { useState } from "react";
import { packages as allPackages } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, ChevronRight, Plus, ArrowRight, ArrowUpRight, MessageCircle,
  Wind, Droplets, Activity, Utensils, Users, Search, CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import { FORMSPREE_FORM_ID, FORMSPREE_ACTION } from "@/components/lead/Lead";
import { fleet, Vehicle } from "@/data/fleet";
import { FleetInquiryModal } from "@/components/FleetInquiryModal";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
} as const;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="eyebrow eyebrow-accent">{children}</span>
);

const SectionHead = ({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) => (
  <div className="max-w-2xl">
    <Eyebrow>{kicker}</Eyebrow>
    <h2 className="display-2 mt-4 text-ink">{title}</h2>
    {intro && <p className="mt-5 text-[17px] leading-relaxed text-muted">{intro}</p>}
  </div>
);

const JOURNEYS = [
  { id: 11, region: "Golden Triangle", title: "The Classic Triangle", desc: "Taj Mahal at sunrise, Amber Fort and the Pink City, chauffeured, with skip-the-line palace entry.", duration: "5 days", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop" },
  { id: 10, region: "Wildlife", title: "Triangle & Ranthambore", desc: "The heritage circuit paired with tiger safaris in Ranthambore's forts and forest.", duration: "8 days", img: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?q=80&w=1600&auto=format&fit=crop" },
  { id: 19, region: "Spiritual", title: "Triangle & Varanasi", desc: "The Ganges at dawn, the evening aarti, and Old Delhi's quiet culinary corners.", duration: "10 days", img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop" },
  { id: 3, region: "Lakes", title: "Udaipur Extension", desc: "The city of lakes added to the Triangle, sunset boat rides and palace dining.", duration: "9 days", img: "/tour_udaipur_lake.png" },
  { id: 22, region: "Backwaters", title: "Kerala Backwaters", desc: "Private houseboats and spice-garden retreats through God's Own Country.", duration: "7 days", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1600&auto=format&fit=crop" },
  { id: 26, region: "Himalaya", title: "Ladakh Expedition", desc: "High passes, Pangong Lake and the Nubra Valley, with acclimatised, expert support.", duration: "10 days", img: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1600&auto=format&fit=crop" },
];

const WELLNESS = [
  { icon: Wind, title: "Yoga & Soul", href: "/wellness/yoga-soul", desc: "Master-led Hatha, Vinyasa, meditation and pranayama in Rishikesh and Himalayan sanctuaries." },
  { icon: Droplets, title: "Ayurvedic Care", href: "/wellness/ayurvedic", desc: "Physician-led classical Ayurveda at AYUSH-certified centres in Kerala, honest recuperative care." },
  { icon: Activity, title: "Massage & Recovery", href: "/wellness/massage", desc: "Master-therapist bodywork, deep-tissue, marma and hot-stone therapy for a full reset." },
];

const FAQS = [
  { q: "Do you provide English-speaking drivers?", a: "Yes, every chauffeur is fluent in English and trained in hospitality protocols for international guests." },
  { q: "Can I customise my itinerary?", a: "Absolutely. Our itineraries are starting points; we build fully bespoke, flexible plans around your pace and interests." },
  { q: "What vehicles are in your fleet?", a: "Luxury SUVs, executive sedans and larger group vehicles, all well-maintained, GPS-tracked and chauffeur-driven." },
  { q: "Are your packages all-inclusive?", a: "We price transparently. Base logistics (vehicle, chauffeur, tolls, permits) are covered; stays and special experiences are tailored to you." },
  { q: "Is it safe to travel across India with you?", a: "Safety is central, vetted drivers, real-time GPS tracking and 24/7 support keep every journey secure and smooth." },
  { q: "Can you manage large wedding parties?", a: "Yes. Our logistics wing coordinates multi-vehicle fleets, airport meet-and-greet and multi-venue shuttles." },
];

const jsonLd = [
  { "@context": "https://schema.org", "@type": "TravelAgency", name: "MyTripMyTravel", description: "Private, chauffeured luxury tours across India, the Golden Triangle, Rajasthan, Kerala, the Himalayas and beyond.", url: "https://www.mytripmytravel.com", areaServed: "India" },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
];

export default function HomeView() {
  const [medicalFormState, handleMedicalSubmit] = useForm(FORMSPREE_FORM_ID);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allPackages
    .filter((p: any) => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 5);

  const openFleet = (v: Vehicle) => { setSelectedVehicle(v); setIsModalOpen(true); };
  const runSearch = () => { if (searchQuery) window.location.href = `/tours/golden-triangle-all?search=${encodeURIComponent(searchQuery)}`; };

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      <FleetInquiryModal vehicle={selectedVehicle} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2400&auto=format&fit=crop"
          alt="The Taj Mahal in Agra at sunrise"
          fill priority className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/20" />
        <div className="container-x relative z-10 pb-16 pt-40 sm:pb-24">
          <motion.div initial="hidden" animate="visible" variants={fade} className="max-w-3xl">
            <span className="eyebrow text-paper/70">Private, chauffeured travel across India</span>
            <h1 className="display-1 mt-5 font-semibold text-paper">
              The India you imagined,<br className="hidden sm:block" /> quietly arranged.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
              Golden Triangle journeys, bespoke northern-India itineraries, and elite chauffeured transfers, designed one traveller at a time.
            </p>

            {/* Search */}
            <div className="relative mt-9 max-w-xl">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1.5 backdrop-blur-md">
                <div className="flex flex-1 items-center gap-3 pl-5">
                  <Search size={18} className="shrink-0 text-paper/70" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && runSearch()}
                    placeholder="Where would you like to go?"
                    className="w-full bg-transparent py-3 text-[15px] text-paper placeholder:text-paper/55 outline-none"
                  />
                </div>
                <button onClick={runSearch} className="btn rounded-full bg-paper px-6 py-3 text-ink hover:bg-clay hover:text-paper">
                  Explore
                </button>
              </div>
              <AnimatePresence>
                {searchQuery && filtered.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                    className="absolute left-0 right-0 top-full z-30 mt-3 overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-xl">
                    {filtered.map((s: any, i: number) => (
                      <Link key={i} href={`/tours/golden-triangle-all?search=${encodeURIComponent(s.title)}`}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-ink-soft hover:bg-paper-dim hover:text-clay">
                        <MapPin size={15} className="text-stone" /> {s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-paper/50">Popular:</span>
              {["Golden Triangle", "Rajasthan", "Kerala", "Himalayas"].map((t) => (
                <Link key={t} href={`/destinations/region/${t.toLowerCase().replace(" ", "-")}`}
                  className="rounded-full border border-white/20 px-4 py-1.5 text-xs text-paper/80 transition hover:border-clay-soft hover:text-clay-soft">
                  {t}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-b border-line bg-paper">
        <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {[
            { n: "15", l: "Years of experience" },
            { n: "20+", l: "Golden Triangle routes" },
            { n: "24/7", l: "Concierge support" },
            { n: "300+", l: "Destinations covered" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl font-semibold text-ink">{s.n}</div>
              <div className="mt-1 text-sm text-muted">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Curated journeys */}
      <section className="section border-t border-line bg-paper-dim/60">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead kicker="Curated journeys" title="Signature itineraries" intro="A starting point for something entirely yours, every route is private, chauffeured and fully adaptable." />
            <Link href="/tours/golden-triangle-all" className="link-line text-sm">Browse all 20+ variations <ArrowRight size={15} /></Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {JOURNEYS.map((j) => (
              <Link key={j.id} href={`/tours/${j.id}`} className="card card-hover group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={j.img} alt={`${j.title}, ${j.region}, India`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold text-ink">{j.duration}</span>
                </div>
                <div className="p-6">
                  <div className="eyebrow">{j.region}</div>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{j.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay">View journey <ChevronRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead kicker="The fleet" title="Chauffeured, GPS-tracked, immaculate" intro="Executive sedans to luxury SUVs, each with a vetted performance-chauffeur and transparent pricing." />
            <Link href="/fleet" className="btn-outline">View full fleet</Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {fleet.slice(0, 3).map((v) => (
              <div key={v.id} className="card overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={v.img} alt={`${v.name}, chauffeured India travel`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="eyebrow">{v.type}</div>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{v.name}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {v.features.slice(0, 3).map((f: string, i: number) => <span key={i} className="pill">{f}</span>)}
                  </div>
                  <button onClick={() => openFleet(v)} className="btn-primary mt-6 w-full">Check availability</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness */}
      <section className="section border-t border-line bg-paper-dim/60">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Wellness & sanctuary"
              title="Recovery, quietly held."
              intro="Physician-coordinated recuperation, classical Ayurveda and master-led yoga in calm heritage settings, arranged with honesty, never overstated."
            />
            <div className="mt-8 grid gap-4">
              {WELLNESS.map((w) => {
                const Icon = w.icon;
                return (
                  <Link key={w.href} href={w.href} className="card card-hover flex items-start gap-4 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper-dim text-clay"><Icon size={20} /></span>
                    <div>
                      <h4 className="text-base font-semibold text-ink">{w.title}</h4>
                      <p className="mt-1 text-sm text-muted">{w.desc}</p>
                    </div>
                    <ChevronRight size={16} className="ml-auto mt-1 shrink-0 text-stone" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Medical enquiry, lead capture */}
          <div className="card p-8">
            <Eyebrow>Medical concierge</Eyebrow>
            <h3 className="mt-3 text-2xl font-semibold text-ink">Enquire about a recovery stay</h3>
            {medicalFormState.succeeded ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto mb-4 text-emerald-600" size={40} />
                <h4 className="text-lg font-semibold text-ink">Enquiry received</h4>
                <p className="mt-2 text-sm text-muted">Our medical concierge will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleMedicalSubmit} action={FORMSPREE_ACTION} method="POST" className="mt-6 space-y-4">
                <input type="hidden" name="Inquiry Type" value="Medical Sanctuary" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <input required name="Full Name" type="text" placeholder="Name" className="field" />
                    <ValidationError prefix="Name" field="Full Name" errors={medicalFormState.errors} className="mt-1 text-xs text-red-500" />
                  </div>
                  <div>
                    <input required name="Email" type="email" placeholder="Email" className="field" />
                    <ValidationError prefix="Email" field="Email" errors={medicalFormState.errors} className="mt-1 text-xs text-red-500" />
                  </div>
                </div>
                <textarea required name="Needs" placeholder="Tell us about your recovery needs…" className="field h-32 resize-none" />
                <ValidationError prefix="Message" field="Needs" errors={medicalFormState.errors} className="text-xs text-red-500" />
                <button type="submit" disabled={medicalFormState.submitting} className="btn-primary w-full disabled:opacity-50">
                  {medicalFormState.submitting ? "Sending…" : "Submit enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Weddings + Corporate band */}
      <section className="relative overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1583939003507-28d8b13c19e5?q=80&w=2400&auto=format&fit=crop" alt="A traditional Indian wedding" fill className="object-cover" />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="container-x relative z-10 py-24 text-center sm:py-32">
          <span className="eyebrow text-paper/70">Occasions</span>
          <h2 className="display-2 mx-auto mt-4 max-w-2xl text-paper">Weddings & corporate journeys, orchestrated.</h2>
          <p className="mx-auto mt-5 max-w-xl text-paper/75">Full guest-logistics across the Golden Triangle, elite fleet convoys, venue selection and heritage planning, handled end to end.</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/weddings" className="btn rounded-full bg-paper px-6 py-3 text-ink hover:bg-clay hover:text-paper">Weddings</Link>
            <Link href="/corporate" className="btn rounded-full border border-white/30 px-6 py-3 text-paper hover:bg-paper hover:text-ink">Corporate offsites</Link>
          </div>
        </div>
      </section>

      {/* Dining + Guides */}
      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { icon: Utensils, title: "Heritage dining", href: "/heritage-dining", desc: "Home-style Indian thalis and palace settings, prepared by heritage chefs, the table as a chapter of the journey." },
            { icon: Users, title: "Expert guides", href: "/expert-guides", desc: "Government-certified guides who are storytellers first, the context that turns sightseeing into understanding." },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <Link key={c.href} href={c.href} className="card card-hover group p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-paper-dim text-clay transition group-hover:bg-clay group-hover:text-paper"><Icon size={26} /></span>
                <h3 className="mt-6 text-2xl font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted">{c.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-clay">Explore <ArrowUpRight size={15} /></span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-line bg-paper-dim/60">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead kicker="Good to know" title="Questions, answered." intro="A few of the things travellers ask most. Anything else, just reach out." />
          <div className="divide-y divide-line">
            {FAQS.map((f, i) => (
              <div key={i} className="py-5">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-6 text-left">
                  <span className="text-lg font-semibold text-ink">{f.q}</span>
                  <Plus size={18} className={`shrink-0 text-stone transition-transform duration-300 ${openFaq === i ? "rotate-45 text-clay" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pt-3 leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp */}
      <a
        href={`https://wa.me/919997812237?text=${encodeURIComponent("I'm interested in a private tour or car rental in India.")}`}
        target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[500] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle fill="white" size={26} />
      </a>
    </main>
  );
}
