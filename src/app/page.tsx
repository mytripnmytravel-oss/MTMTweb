"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { packages as allPackages } from "@/data/tours";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Search, MapPin, Car, Map, Calendar, ChevronDown,
  MessageCircle, X, ChevronRight, ShieldCheck, Star,
  Clock, Quote, Phone, Mail, Award, Heart, Utensils, Camera, Zap, Plus,
  Stethoscope, Users, Building, HelpCircle, Wind, Droplets, Activity, ArrowRight
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

import { fleet, Vehicle } from "@/data/fleet";
import { FleetInquiryModal } from "@/components/FleetInquiryModal";

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

const BentoCard = ({ id, title, city, desc, duration, theme, img, size }: any) => (
  <Link 
    href={`/tours/${id}`}
    className={`relative group rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 h-full min-h-[350px] ${size} block overflow-hidden`}
  >
    <Image src={img} alt={title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/95 via-royal-blue/30 to-transparent" />

    {/* Floating Badges */}
    <div className="absolute top-4 left-4 md:top-8 md:left-8 flex gap-2">
      <span className="bg-white/90 backdrop-blur-3xl px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase text-royal-blue tracking-widest border border-white/20 group-hover:border-sunset-orange/40 transition-all shadow-xl">
        {duration}
      </span>
      <span className="bg-sunset-orange backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase text-white tracking-widest shadow-xl">
        {theme}
      </span>
    </div>

    <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
      <div className="flex items-center gap-2 text-sunset-orange font-black uppercase text-[8px] md:text-[10px] tracking-widest mb-1 md:mb-2">
        <MapPin size={10} /> {city}
      </div>
      <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter mb-2 md:mb-3 drop-shadow-lg">{title}</h3>
      <p className="text-white/60 text-[10px] md:text-xs font-bold transition-all duration-500 line-clamp-2 md:line-clamp-none group-hover:text-white group-hover:opacity-100">
        {desc}
      </p>
    </div>
  </Link>
);

const FleetCard = ({ name, type, img, features, onClick }: any) => (
  <motion.div variants={itemVariants} className="glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 group overflow-hidden h-full">
    <div className="relative h-48 md:h-64 mb-6 md:mb-10 overflow-hidden rounded-2xl">
      <Image src={img} alt={name} fill className="object-cover transition-transform duration-700" />
    </div>
    <div className="flex justify-between items-start mb-4 md:mb-6">
      <div>
        <h4 className="text-[10px] md:text-sm font-black text-sunset-orange tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1 md:mb-2">{type}</h4>
        <h3 className="text-xl md:text-3xl font-black text-royal-blue uppercase tracking-tighter">{name}</h3>
      </div>
      <div className="bg-royal-blue/5 p-3 md:p-4 rounded-xl">
        <Car className="text-royal-blue" size={20} />
      </div>
    </div>
    <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-10">
      {features.map((f: string, i: number) => (
        <span key={i} className="text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-royal-blue/5 text-royal-blue px-3 py-1.5 md:px-4 md:py-2 rounded-full">{f}</span>
      ))}
    </div>
    <Magnetic>
      <button 
        onClick={onClick}
        className="w-full bg-royal-blue text-white py-6 px-12 rounded-2xl font-black uppercase tracking-widest hover:bg-sunset-orange transition-colors"
      >
        Check Availability
      </button>
    </Magnetic>
  </motion.div>
);

export default function Home() {
  const heroImageRef = useRef(null);
  const weddingImageRef = useRef(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const itinerarySuggestions = useMemo(() => 
    allPackages.map((p: any) => p.title).slice(0, 10), 
  []);

  const filteredSuggestions = allPackages.filter((p: any) => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.location.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handlePursuit = () => {
    if (searchQuery) {
      window.location.href = `/tours/golden-triangle-all?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    window.location.href = `/tours/golden-triangle-all?search=${encodeURIComponent(suggestion)}`;
  };

  const handleCheckAvailability = (v: Vehicle | null) => {
    setSelectedVehicle(v || fleet[0]);
    setIsModalOpen(true);
  };

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
    { id: 11, city: "Heritage & Culture", title: "The Classic Triangle", desc: "Taj Mahal Sunrise + Jaipur Forts. Private chauffeured tour with skip-the-line palace entry.", duration: "5 Days", theme: "Royal Heritage", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-2 md:row-span-2" },
    { id: 10, city: "Jungle & Forts", title: "Wildlife & Wonders", desc: "Golden Triangle + Ranthambore Safari. Amer Fort & City Palace guided heritage walk.", duration: "8 Days", theme: "Wildlife", img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
    { id: 19, city: "Ganges & Spirits", title: "Spiritual Soul", desc: "Golden Triangle + Varanasi Aarti. Exploring Old Delhi's hidden culinary gems.", duration: "10 Days", theme: "Spiritual", img: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
    { id: 12, city: "Ultra Luxury", title: "Luxury Weekend Protocol", desc: "Helicopter transfers & palatial stays. The absolute gold standard of Golden Triangle travel.", duration: "5 Days", theme: "Elite", img: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
    { id: 28, city: "Island Sanctuary", title: "Andaman Adventure", desc: "Private island sanctuaries and ultra-luxury marine operations in the heart of the ocean.", duration: "7 Days", theme: "Luxury", img: "https://images.unsplash.com/photo-1589366444820-2c701721f579?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
    { id: 3, city: "Lakes & Romance", title: "Udaipur Extension", desc: "The Venice of the East meets the Golden Triangle. Sunset boat rides and palace dining.", duration: "9 Days", theme: "Heritage", img: "https://images.unsplash.com/photo-1552033999-70bd63d41fe0?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
    { id: 22, city: "Tropical Backwaters", title: "Kerala Backwater Bliss", desc: "Private houseboats and spice garden retreats in the heart of God's Own Country.", duration: "7 Days", theme: "Nature", img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
    { id: 26, city: "High Passes", title: "Ladakh Leh Expedition", desc: "The land of high passes. Pangong Lake and Nubra Valley camel treks with elite support.", duration: "10 Days", theme: "Adventure", img: "https://images.unsplash.com/photo-1581791538302-03537b0c0f4f?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
    { id: 29, city: "Mountain Mist", title: "Meghalaya Monsoon", desc: "Living root bridges and the wettest places on earth. Professional guided trekking.", duration: "6 Days", theme: "Nature", img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2670&auto=format&fit=crop", size: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen relative overflow-hidden bg-white">
        <GlassyProgressBar />
        <GoldenPathLoader />
        <Navbar />

        <FleetInquiryModal 
          vehicle={selectedVehicle} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />

        {/* --- Structured Data --- */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{ "@context": "https://schema.org", "@type": "TravelAgency", "name": "MyTripMyTravel", "description": "Premiere private tours and luxury car rentals in India's Golden Triangle.", "url": "https://mytripmytravel.com", "areaServed": "Delhi, Agra, Jaipur, Rajasthan" }, { "@context": "https://schema.org", "@type": "MedicalBusiness", "name": "MyTripMyTravel Wellness Concierge", "medicalSpecialty": ["Orthopedic", "Wellness"], "description": "Luxury medical tourism and orthopedic recovery facilitation." }, { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }]) }} />

        {/* Liquid Background */}
        <div className="liquid-bg">
          <div className="liquid-blob-1" />
          <div className="liquid-blob-2" />
        </div>

        {/* Section A: Hero */}
        <section id="hero-section" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden z-20">
          <div ref={heroImageRef} className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop" alt="Luxury India Travel" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-royal-blue/90" />

          <div className="relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-[10rem] font-black text-white mb-6 md:mb-8 tracking-tighter leading-[0.85] uppercase">
                <CharBlurIn text="BEYOND" /> <br /> <span className="text-sunset-orange italic"><CharBlurIn text="TRAVEL." /></span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-2xl text-white mb-10 md:mb-16 max-w-4xl mx-auto font-black italic tracking-tight underline decoration-sunset-orange underline-offset-8 drop-shadow-xl">
                <CharBlurIn text="Specializing in Golden Triangle tours, airport transfers, and bespoke northern India itineraries." />
              </motion.p>
              
              {/* Re-engineered Itinerary Search with Suggestions */}
              <motion.div variants={itemVariants} className="max-w-4xl mx-auto relative group">
                <div className="glass-card p-2 md:p-4 rounded-3xl md:rounded-full flex flex-col md:flex-row items-center border border-white/20 shadow-2xl overflow-visible mb-8">
                  <div className="flex-1 flex items-center gap-4 md:gap-6 px-6 md:px-10 w-full mb-2 md:mb-0 relative">
                    <Map className="text-sunset-orange shrink-0 w-6 h-6 md:w-7 md:h-7" />
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSuggestions(true);
                      }}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                      placeholder="DESTINATION INTELLIGENCE (e.g. AGRA, JAIPUR)" 
                      className="bg-transparent border-none focus:ring-0 text-white placeholder:text-white/70 w-full text-lg md:text-xl py-4 font-black uppercase tracking-tight" 
                    />
                    
                    {/* Floating Suggestions List */}
                    <AnimatePresence>
                      {showSuggestions && filteredSuggestions.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 right-0 mt-4 bg-royal-blue/95 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden z-[100] text-left p-4"
                        >
                          <div className="text-[10px] font-black text-sunset-orange uppercase tracking-[0.2em] mb-4 px-4 opacity-60">Neural Suggestions</div>
                          <div className="space-y-1">
                            {filteredSuggestions.map((suggestion: any, idx: number) => (
                              <button
                                key={idx}
                                onClick={() => handleSuggestionClick(suggestion.title)}
                                className="w-full text-left px-6 py-4 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all font-bold uppercase tracking-tight text-xs flex items-center gap-4 group/item"
                              >
                                <Zap size={14} className="text-sunset-orange opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                {suggestion.title}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Magnetic>
                    <button 
                      onClick={handlePursuit}
                      className="w-full md:w-auto bg-sunset-orange text-white px-10 md:px-16 py-4 md:py-6 font-black uppercase tracking-widest text-xs md:text-sm rounded-2xl md:rounded-full hover:bg-white hover:text-sunset-orange transition-all duration-500 shadow-xl"
                    >
                      Execute Pursuit
                    </button>
                  </Magnetic>
                </div>

                {/* Quick Selection Protocols */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mr-2">Quick Protocols:</span>
                  {["Heritage", "Wildlife", "Metropolis", "Wellness"].map((tag) => (
                    <button 
                      key={tag}
                      onClick={() => {
                        setSearchQuery(tag);
                        const section = document.getElementById("itinerary-circuit");
                        if (section) section.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-black text-white uppercase tracking-widest hover:border-sunset-orange/50 hover:text-sunset-orange hover:bg-sunset-orange/5 transition-all duration-300"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section B: Trust Strip */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="py-12 md:py-24 glass-card border-none rounded-none z-20 relative">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <motion.div variants={itemVariants}><CountingStat value={15} label="Years Performance" /></motion.div>
            <motion.div variants={itemVariants}><CountingStat value={500} label="Elite Vehicles" /></motion.div>
            <motion.div variants={itemVariants}><CountingStat value={25000} label="Safe Journeys" /></motion.div>
            <motion.div variants={itemVariants}><CountingStat value={100} label="Verified Guides" /></motion.div>
          </div>
        </motion.section>
        {/* Section A.5: The Genesis (About Preview) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="py-20 md:py-32 bg-white container mx-auto px-6 z-20 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1 flex justify-center">
               <div className="relative aspect-[4/5] w-full max-w-md rounded-[2rem] overflow-hidden glass-card p-2 transform -rotate-2 hover:rotate-0 transition-all duration-700">
                  <Image src="/team-1.jpg" alt="Our Architects" fill className="object-cover rounded-xl filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-royal-blue/20 mix-blend-multiply rounded-xl" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 text-center">
                       <span className="text-xl font-black text-royal-blue uppercase tracking-tighter">The Visionaries</span>
                    </div>
                  </div>
               </div>
            </div>
            <div className="order-1 md:order-2">
              <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.6em] text-[10px] mb-4">Our Protocol</motion.h4>
              <h2 className="text-4xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-8">Architects of<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-royal-blue">Journey.</span></h2>
              <p className="text-dark-slate font-medium text-base md:text-lg opacity-80 leading-relaxed mb-10 max-w-lg">
                India is an environment you must absorb, navigate, and respect. MyTripMyTravel was born from an obsession with perfect execution, bridging the gap between absolute luxury and authentic cultural immersion. We don't just sell tours; we engineer uncompromising travel protocols.
              </p>
              <Magnetic>
                <Link href="/about" className="inline-flex items-center gap-4 bg-royal-blue text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-sunset-orange transition-colors">
                  Read Our Story <ArrowRight size={16} />
                </Link>
              </Magnetic>
            </div>
          </div>
        </motion.section>


        {/* Section C: Golden Triangle (Bento) */}
        <motion.section id="itinerary-circuit" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="py-20 md:py-40 container mx-auto px-6 z-20 relative">
          <div className="text-center mb-16 md:mb-24">
            <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-sm mb-4">Curated Journeys</motion.h4>
            <CharBlurIn text="GOLDEN CIRCUIT" className="text-4xl sm:text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter block mb-6 md:mb-12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {packages.map((pkg: any, i: number) => (<BentoCard key={i} {...pkg} />))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 md:mt-24 flex justify-center">
            <Magnetic>
              <Link 
                href="/tours/golden-triangle-all" 
                className="px-8 md:px-20 py-6 md:py-8 bg-sunset-orange text-white rounded-full font-black uppercase tracking-widest block text-center text-xs md:text-base transition-all duration-500 hover:bg-royal-blue hover:scale-105 shadow-[0_20px_50px_rgba(249,115,22,0.4)] hover:shadow-[0_20px_50px_rgba(30,64,175,0.3)]"
              >
                Explore All 20+ Golden Triangle Variations
              </Link>
            </Magnetic>
          </motion.div>
        </motion.section>

        {/* Section D: Fleet */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="py-40 bg-royal-blue/5 z-20 relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 gap-8">
              <motion.div variants={itemVariants}>
                <h4 className="text-sunset-orange font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-sm mb-4">The Garage</h4>
                <CharBlurIn text="ELITE FLEET" className="text-4xl sm:text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter" />
              </motion.div>
              <Link href="/fleet">
                <Magnetic>
                  <button className="btn-primary px-16 py-6">View Full Fleet</button>
                </Magnetic>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {fleet.slice(0, 3).map((v, i) => (
                <FleetCard 
                  key={i} 
                  name={v.name} 
                  type={v.type} 
                  img={v.img} 
                  features={v.features} 
                  onClick={() => handleCheckAvailability(v)}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section E: Medical/Wellness */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="py-40 container mx-auto px-6 z-20 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.6em] md:tracking-[0.8em] text-[10px] md:text-sm mb-4 md:mb-6">Concierge Sanctuary</motion.h4>
              <CharBlurIn text="ORTHOPEDIC WELLNESS" className="text-3xl sm:text-4xl md:text-7xl font-black text-royal-blue uppercase tracking-tighter leading-tight md:leading-none block mb-8 md:mb-12" />
              <motion.p variants={itemVariants} className="text-sm md:text-lg font-bold text-dark-slate/60 mb-8 md:mb-12 max-w-xl italic">Silence is the ultimate luxury. Our recovery extensions combine world-class orthodontic bedding with silent heritage retreats.</motion.p>
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
            <motion.div variants={itemVariants} className="relative h-[400px] md:h-[800px] rounded-[2rem] md:rounded-[4rem] overflow-hidden order-1 lg:order-2 shadow-2xl">
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
              <motion.div variants={itemVariants}><Heart className="text-sunset-orange mx-auto mb-6 md:mb-10 w-10 h-10 md:w-14 md:h-14" fill="currentColor" /></motion.div>
              <CharBlurIn text="ROYAL WEDDINGS" className="text-4xl sm:text-5xl md:text-[5rem] lg:text-[7rem] font-black text-white uppercase tracking-tighter leading-tight md:leading-none block mb-8 md:mb-12" />
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
                    className="bg-white text-royal-blue px-10 md:px-20 py-5 md:py-8 rounded-full font-black uppercase tracking-widest hover:bg-sunset-orange hover:text-white transition-all duration-500 shadow-2xl text-xs md:text-base"
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
          <div className="text-center mb-16 md:mb-32">
            <motion.h4 variants={itemVariants} className="text-sunset-orange font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-sm mb-4">The Human Element</motion.h4>
            <CharBlurIn text="PASSION & PALATE" className="text-4xl sm:text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter" />
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
        <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[500]">
          <Magnetic>
            <button
              onClick={() => {
                const msg = "I am inquiring about a luxury tour or car rental service in India.";
                window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, '_blank');
              }}
              className="w-16 h-16 md:w-24 md:h-24 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
            >
              <MessageCircle fill="white" className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform" />
            </button>
          </Magnetic>
        </div>
      </main>
    </SmoothScroll>
  );
}
