"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Search, MapPin, Car, Map, Calendar, ChevronDown,
  MessageCircle, X, ChevronRight, ShieldCheck, Star,
  Clock, Quote, Phone, Mail, Award, Heart, Utensils, Camera, Zap, Plus,
  Stethoscope, Users, Building, HelpCircle, Wind, Droplets, Activity
} from "lucide-react";
import Navbar, { Logo3D } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CountingStat, GoldenPathLoader, RouteVisualizer,
  ItineraryPreviewer, Magnetic, CharBlurIn, SmoothScroll,
  GlassyProgressBar, Tilt3D
} from "@/components/ClientComponents";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { fleet } from "@/data/fleet";

// --- Framer Motion Variants (Staggered Children) ---

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren",
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 80, damping: 12 }
  }
} as const;

// --- Sub-Components ---

const BentoCard = ({ title, city, desc, duration, theme, img, size }: any) => (
  <motion.div
    variants={itemVariants}
    className={`relative group rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 h-full min-h-[350px] ${size}`}
  >
    <Image src={img} alt={title} fill className="object-cover transition-transform duration-1000" />
    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/95 via-royal-blue/30 to-transparent" />

    {/* Floating Badges */}
    <div className="absolute top-8 left-8 flex gap-2">
      <span className="glass-card px-4 py-2 rounded-full text-[10px] font-black uppercase text-white tracking-widest border-white/10 group-hover:border-sunset-orange/40 transition-colors">
        {duration}
      </span>
      <span className="bg-sunset-orange/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase text-white tracking-widest">
        {theme}
      </span>
    </div>

    <div className="absolute bottom-0 left-0 p-10 w-full">
      <div className="flex items-center gap-2 text-sunset-orange font-black uppercase text-[10px] tracking-widest mb-4">
        <MapPin size={12} /> {city}
      </div>
      <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">{title}</h3>
      <p className="text-white/60 text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 line-clamp-2">
        {desc}
      </p>
    </div>
  </motion.div>
);

const FleetCard = ({ name, type, img, features }: any) => (
  <motion.div variants={itemVariants} className="glass-card rounded-[3rem] p-10 group overflow-hidden h-full">
    <div className="relative h-64 mb-10 overflow-hidden rounded-2xl">
      <Image src={img} alt={name} fill className="object-cover transition-transform duration-700" />
    </div>
    <div className="flex justify-between items-start mb-6">
      <div>
        <h4 className="text-sm font-black text-sunset-orange tracking-[0.3em] uppercase mb-2">{type}</h4>
        <h3 className="text-3xl font-black text-royal-blue uppercase tracking-tighter">{name}</h3>
      </div>
      <div className="bg-royal-blue/5 p-4 rounded-xl">
        <Car className="text-royal-blue" size={24} />
      </div>
    </div>
    <div className="flex flex-wrap gap-4 mb-10">
      {features.map((f: string, i: number) => (
        <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-royal-blue/5 text-royal-blue px-4 py-2 rounded-full">{f}</span>
      ))}
    </div>
    <Magnetic>
      <button className="w-full bg-royal-blue text-white py-6 px-12 rounded-2xl font-black uppercase tracking-widest hover:bg-sunset-orange transition-colors">
        Check Availability
      </button>
    </Magnetic>
  </motion.div>
);

// --- Main Page ---

export default function Home() {
  const heroImageRef = useRef(null);
  const weddingImageRef = useRef(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // GSAP Parallax Zoom for Hero Image
    gsap.to(heroImageRef.current, {
      scale: 1.3,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // GSAP Parallax Zoom for Wedding Section
    gsap.to(weddingImageRef.current, {
      scale: 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: "#wedding-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  const faqs = [
    { q: "Do you provide English-speaking drivers?", a: "Yes, all our elite chauffeurs are fluent in English and trained in white-glove hospitality protocols for international guests." },
    { q: "How do you handle medical emergencies?", a: "Our Medical Sanctuary segment provides 24/7 concierge support, including direct coordination with top-tier hospitals and private nursing." },
    { q: "Can you manage transport for 100+ wedding guests?", a: "Precisely. Our wedding logistics wing specializes in large fleet coordination, airport 'Meet & Greet' services, and multi-venue shuttles." },
    { q: "Can I customize my Golden Triangle itinerary?", a: "Absolutely. All our itineraries serve as foundational blueprints. We build fully custom, flexible deployments based on your exact preferences and pace." },
    { q: "What class of vehicles are in your Elite Fleet?", a: "We field top-tier luxury SUVs, executive sedans, and high-end sprinters. Every asset is equipped with Wi-Fi, refreshments, and monitored by active GPS telemetry." },
    { q: "Are your tour packages all-inclusive?", a: "We operate with total financial transparency. While base logistics (fleet, chauffeur, tolls) are covered, palatial accommodations and private architectural buyouts are tailored to your exact demands." },
    { q: "Is it safe to travel across India with your service?", a: "Security is our prime directive. We employ heavily vetted Attachés, real-time GPS tracking, and a 24/7 active command center to ensure a zero-friction, highly secure journey." },
    { q: "Do you accommodate specialized dietary requirements?", a: "Yes. Our culinary orchestration teams manage complex dietary matrices—including strict vegan, Sattvic, or allergen-free profiles—while maintaining a 5-star Heritage Dining experience." }
  ];

  const packages = [
    { city: "Heritage & Culture", title: "The Classic Triangle", desc: "Taj Mahal Sunrise + Jaipur Forts. Private chauffeured tour with skip-the-line palace entry.", duration: "5 Days", theme: "Royal Heritage", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-2 md:row-span-2" },
    { city: "Jungle & Forts", title: "Wildlife & Wonders", desc: "Golden Triangle + Ranthambore Safari. Amer Fort & City Palace guided heritage walk.", duration: "8 Days", theme: "Wildlife", img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
    { city: "Ganges & Spirits", title: "Spiritual Soul", desc: "Golden Triangle + Varanasi Aarti. Exploring Old Delhi's hidden culinary gems.", duration: "10 Days", theme: "Spiritual", img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen relative overflow-hidden bg-white">
        <GlassyProgressBar />
        <GoldenPathLoader />
        <Navbar />

        {/* --- Structured Data --- */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{ "@context": "https://schema.org", "@type": "TravelAgency", "name": "MyTripMyTravel", "description": "Premiere private tours and luxury car rentals in India's Golden Triangle.", "url": "https://mytripmytravel.com", "areaServed": "Delhi, Agra, Jaipur, Rajasthan" }, { "@context": "https://schema.org", "@type": "MedicalBusiness", "name": "MyTripMyTravel Wellness Concierge", "medicalSpecialty": ["Orthopedic", "Wellness"], "description": "Luxury medical tourism and orthopedic recovery facilitation." }, { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }]) }} />

        {/* Liquid Background */}
        <div className="liquid-bg">
          <div className="liquid-blob-1" />
          <div className="liquid-blob-2" />
        </div>

        {/* Section A: Hero */}
        <section id="hero-section" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden z-20">
          <div ref={heroImageRef} className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop" alt="Luxury India Travel" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/70 via-royal-blue/20 to-royal-blue/90" />

          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
              <motion.h1 variants={itemVariants} className="text-7xl md:text-[10rem] font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase">
                <CharBlurIn text="BEYOND" /> <br /> <span className="text-sunset-orange italic"><CharBlurIn text="TRAVEL." /></span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto font-black italic tracking-tight underline decoration-sunset-orange underline-offset-8">
                Specializing in Golden Triangle tours, airport transfers, and bespoke northern India itineraries.
              </motion.p>
              <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                <div className="glass-card p-4 rounded-full flex flex-col md:flex-row items-center border border-white/20 shadow-2xl">
                  <div className="flex-1 flex items-center gap-6 px-10 w-full mb-2 md:mb-0">
                    <Search className="text-sunset-orange" size={28} />
                    <input type="text" placeholder="Where do you want to travel?" className="bg-transparent border-none focus:ring-0 text-white placeholder:text-white/40 w-full text-xl py-4 font-black uppercase tracking-tight" />
                  </div>
                  <Magnetic>
                    <button className="w-full md:w-auto bg-sunset-orange text-white px-16 py-6 font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-sunset-orange transition-all duration-500 shadow-xl">
                      Search
                    </button>
                  </Magnetic>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section B: Trust Strip */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-24 glass-card border-none rounded-none z-20 relative">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            <motion.div variants={itemVariants}><CountingStat value={15} label="Years Performance" /></motion.div>
            <motion.div variants={itemVariants}><CountingStat value={500} label="Elite Vehicles" /></motion.div>
            <motion.div variants={itemVariants}><CountingStat value={25000} label="Safe Journeys" /></motion.div>
            <motion.div variants={itemVariants}><CountingStat value={100} label="Verified Guides" /></motion.div>
          </div>
        </motion.section>

        {/* Section C: Golden Triangle (Bento) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="py-40 container mx-auto px-6 z-20 relative">
          <div className="text-center mb-24">
            <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-sm mb-4">Curated Journeys</motion.h4>
            <CharBlurIn text="GOLDEN CIRCUIT" className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter block mb-12" />
          </div>
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8 min-h-[800px]">
            {packages.map((pkg, i) => (<BentoCard key={i} {...pkg} />))}
          </div>

          <motion.div variants={itemVariants} className="mt-24 flex justify-center">
            <Magnetic>
              <Link href="/tours/golden-triangle-all" className="relative px-20 py-8 bg-sunset-orange text-white rounded-full font-black uppercase tracking-widest group overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.4)] block text-center">
                <span className="relative z-10">Explore All 20+ Golden Triangle Variations</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-sunset-orange relative z-10 transition-colors duration-500">Explore All 20+ Golden Triangle Variations</span>
                </div>
              </Link>
            </Magnetic>
          </motion.div>
        </motion.section>

        {/* Section D: Fleet */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="py-40 bg-royal-blue/5 z-20 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
              <motion.div variants={itemVariants}>
                <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-sm mb-4">The Garage</h4>
                <CharBlurIn text="ELITE FLEET" className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter" />
              </motion.div>
              <Link href="/fleet">
                <Magnetic>
                  <button className="btn-primary px-16 py-6">View Full Fleet</button>
                </Magnetic>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {fleet.slice(0, 3).map((v, i) => (
                <FleetCard key={i} name={v.name} type={v.type} img={v.img} features={v.features} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section E: Medical/Wellness */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="py-40 container mx-auto px-6 z-20 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6">Concierge Sanctuary</motion.h4>
              <CharBlurIn text="ORTHOPEDIC WELLNESS" className="text-5xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-none block mb-12" />
              <motion.p variants={itemVariants} className="text-lg font-bold text-dark-slate/60 mb-12 max-w-xl italic">Silence is the ultimate luxury. Our recovery extensions combine world-class orthodontic bedding with silent heritage retreats.</motion.p>
              <ul className="space-y-6 mb-16">
                {["Surgeon Coordination", "Sattvic Nutrition Plans", "Post-Op Transit", "Zero-Noise Havelis"].map((item, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex items-center gap-4 text-xl font-black text-royal-blue italic">
                    <Plus size={20} className="text-sunset-orange" /> {item}
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={itemVariants} className="glass-card p-10 rounded-3xl border-royal-blue/10">
                <h4 className="font-black text-royal-blue uppercase mb-6">Medical Inquiry</h4>
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="Name" className="bg-white/50 border-none rounded-xl p-4 font-bold text-sm" />
                  <input type="email" placeholder="Email" className="bg-white/50 border-none rounded-xl p-4 font-bold text-sm" />
                  <textarea placeholder="Tell us your recovery needs..." className="col-span-2 bg-white/50 border-none rounded-xl p-4 font-bold text-sm h-32" />
                </div>
                <Magnetic><button className="btn-primary w-full mt-8">Submit Request</button></Magnetic>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="relative h-[800px] rounded-[4rem] overflow-hidden order-1 lg:order-2 shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2670&auto=format&fit=crop" alt="Medical Recovery Room" fill className="object-cover" />
              <div className="absolute inset-0 bg-royal-blue/10 backdrop-blur-[1px]" />
            </motion.div>
          </div>

          {/* Other Wellness Programs */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl border border-royal-blue/10 hover:border-sunset-orange/30 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-royal-blue flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Wind size={32} />
              </div>
              <h4 className="text-xl font-black text-royal-blue uppercase mb-3">Yoga & Soul</h4>
              <p className="text-dark-slate/60 font-bold italic text-sm mb-6">Master-led sessions designed to synchronize your frequency with spiritual meridians.</p>
              <Link href="/wellness/yoga-soul" className="text-sunset-orange font-black uppercase text-[10px] tracking-widest flex items-center gap-2">Explore Protocol <ChevronRight size={14} /></Link>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl border border-royal-blue/10 hover:border-sunset-orange/30 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-sunset-orange flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Droplets size={32} />
              </div>
              <h4 className="text-xl font-black text-royal-blue uppercase mb-3">Ayurvedic Alchemy</h4>
              <p className="text-dark-slate/60 font-bold italic text-sm mb-6">Ancient biological optimization protocols using 5000-year-old traditional healing science.</p>
              <Link href="/wellness/ayurvedic" className="text-sunset-orange font-black uppercase text-[10px] tracking-widest flex items-center gap-2">Explore Protocol <ChevronRight size={14} /></Link>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl border border-royal-blue/10 hover:border-sunset-orange/30 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Activity size={32} />
              </div>
              <h4 className="text-xl font-black text-royal-blue uppercase mb-3">Massage & Recovery</h4>
              <p className="text-dark-slate/60 font-bold italic text-sm mb-6">Elite recovery protocols focused on deep muscular reset and neural pathway relaxation.</p>
              <Link href="/wellness/massage" className="text-sunset-orange font-black uppercase text-[10px] tracking-widest flex items-center gap-2">Explore Protocol <ChevronRight size={14} /></Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Section F: Weddings */}
        <section id="wedding-section" className="relative h-screen flex items-center justify-center overflow-hidden z-20">
          <div ref={weddingImageRef} className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1583939003507-28d8b13c19e5?q=80&w=2670&auto=format&fit=crop" alt="Royal Wedding India" fill className="object-cover" />
            <div className="absolute inset-0 bg-royal-blue/50 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 w-full max-w-6xl px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
              <motion.div variants={itemVariants}><Heart className="text-sunset-orange mx-auto mb-10" size={60} fill="currentColor" /></motion.div>
              <CharBlurIn text="ROYAL WEDDINGS" className="text-4xl md:text-[5rem] lg:text-[7rem] whitespace-nowrap font-black text-white uppercase tracking-tighter leading-none block mb-12" />
              <motion.div variants={itemVariants} className="glass-card p-12 md:p-20 rounded-[3rem] border-white/20">
                <p className="text-2xl text-white font-bold mb-16 italic opacity-80 underline decoration-sunset-orange underline-offset-8">We orchestrate your union with a 48-hour guest logistics experience across the Golden Triangle.</p>
                <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
                  <div className="border-l-2 border-sunset-orange pl-6"><h5 className="text-[10px] font-black text-sunset-orange uppercase tracking-widest mb-2">Transfers</h5><p className="text-white font-black text-lg">Elite Fleet Convoy</p></div>
                  <div className="border-l-2 border-sunset-orange pl-6"><h5 className="text-[10px] font-black text-sunset-orange uppercase tracking-widest mb-2">Venues</h5><p className="text-white font-black text-lg">Palace Selection</p></div>
                  <div className="border-l-2 border-sunset-orange pl-6"><h5 className="text-[10px] font-black text-sunset-orange uppercase tracking-widest mb-2">Catering</h5><p className="text-white font-black text-lg">Heritage Planning</p></div>
                </div>
                <Magnetic>
                  <button
                    onClick={() => {
                      const msg = "ROYAL WEDDING PROTOCOL: I am inquiring about guest logistics and heritage fleet planning for an upcoming union in the Golden Triangle.";
                      window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, '_blank');
                    }}
                    className="bg-white text-royal-blue px-20 py-8 rounded-full font-black uppercase tracking-widest hover:bg-sunset-orange hover:text-white transition-all duration-500 shadow-2xl"
                  >
                    Inquire for Royal Wedding
                  </button>
                </Magnetic>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section G: Food/Guides */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="py-40 container mx-auto px-6 z-20 relative">
          <div className="text-center mb-32">
            <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-sm mb-4">The Human Element</motion.h4>
            <CharBlurIn text="PASSION & PALATE" className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="glass-card p-12 rounded-[3.5rem] flex flex-col items-center text-center group h-full cursor-pointer transition-all duration-500 hover:border-sunset-orange/20">
              <div className="w-24 h-24 bg-soft-white rounded-full flex items-center justify-center mb-10 shadow-xl group-hover:bg-sunset-orange transition-all duration-500"><Utensils size={48} className="text-sunset-orange group-hover:text-white transition-all" /></div>
              <h3 className="text-3xl font-black text-royal-blue uppercase mb-6">Heritage Dining</h3>
              <p className="text-dark-slate italic font-bold opacity-60 leading-relaxed mb-10">Healthy, colorful Indian Thali served in palace settings. Home-style meals prepared by heritage chefs.</p>
              <Magnetic>
                <Link href="/heritage-dining">
                  <button className="text-sunset-orange font-black uppercase tracking-widest flex items-center gap-3">Explore Menus <ChevronRight /></button>
                </Link>
              </Magnetic>
            </motion.div>
            <motion.div variants={itemVariants} className="glass-card p-12 rounded-[3.5rem] flex flex-col items-center text-center group h-full cursor-pointer transition-all duration-500 hover:border-royal-blue/20">
              <div className="w-24 h-24 bg-soft-white rounded-full flex items-center justify-center mb-10 shadow-xl group-hover:bg-royal-blue transition-all duration-500"><Users size={48} className="text-royal-blue group-hover:text-white transition-all" /></div>
              <h3 className="text-3xl font-black text-royal-blue uppercase mb-6">Expert Guardians</h3>
              <p className="text-dark-slate italic font-bold opacity-60 leading-relaxed mb-10">Our government-certified guides aren&apos;t just experts; they are storytellers holding the secrets of the Golden Path.</p>
              <Magnetic>
                <Link href="/expert-guides">
                  <button className="text-royal-blue font-black uppercase tracking-widest flex items-center gap-3">Meet Our Guides <ChevronRight /></button>
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </motion.section>

        {/* Section H: Prism Map */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-40 container mx-auto px-6 z-20 relative">
          <div className="text-center mb-24">
            <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-4">Network Graph</motion.h4>
            <CharBlurIn text="GOLDEN PRISM" className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter" />
          </div>
          <RouteVisualizer />
        </motion.section>

        {/* Section I: Itinerary Studio */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-40 container mx-auto px-6 z-20 relative">
          <div className="text-center mb-24">
            <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-4">Prism AI</motion.h4>
            <CharBlurIn text="ITINERARY ENGINE" className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter" />
          </div>
          <ItineraryPreviewer />
        </motion.section>

        {/* Section J: FAQ */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-40 container mx-auto px-6 z-20 relative">
          <div className="text-center mb-32">
            <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-sm mb-4">Intelligence</motion.h4>
            <CharBlurIn text="YOUR QUESTIONS" className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter" />
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants} className="glass-card p-10 rounded-3xl group cursor-pointer hover:border-sunset-orange/30 transition-all duration-500" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex justify-between items-center gap-8">
                  <div className="flex items-center gap-6">
                    <HelpCircle className="text-sunset-orange shrink-0" size={32} />
                    <h4 className="text-xl md:text-2xl font-black text-royal-blue uppercase tracking-tighter leading-none">{faq.q}</h4>
                  </div>
                  <div className={`transition-transform duration-500 ${openFaq === i ? "rotate-45 text-sunset-orange" : "text-royal-blue group-hover:scale-110"}`}>
                    <Plus size={24} />
                  </div>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-8 text-dark-slate/70 font-bold italic text-lg leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />

        {/* Floating Magnetic WhatsApp Button */}
        <div className="fixed bottom-12 right-12 z-[500]">
          <Magnetic>
            <button className="w-24 h-24 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group">
              <MessageCircle size={40} fill="white" className="group-hover:rotate-12 transition-transform" />
            </button>
          </Magnetic>
        </div>
      </main>
    </SmoothScroll>
  );
}
