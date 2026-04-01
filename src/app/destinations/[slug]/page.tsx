"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
    MapPin, ShieldCheck, Star, 
    Anchor, Compass, Clock, 
    ArrowLeft, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Magnetic, CharBlurIn, SmoothScroll, 
    GlassyProgressBar 
} from "@/components/ClientComponents";
import { packages } from "@/data/tours";
import Link from "next/link";

export default function DynamicDestinationPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Mapping slugs to locations, themes, or titles
    const locationPackages = packages.filter(p => 
        p.location.toLowerCase().includes(slug.replace("-", " ").toLowerCase()) ||
        p.theme.toLowerCase().includes(slug.replace("-", " ").toLowerCase()) ||
        p.title.toLowerCase().includes(slug.replace("-", " ").toLowerCase())
    );

    const tour = locationPackages[0] || packages[0];

    return (
        <SmoothScroll>
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <GlassyProgressBar />
                <Navbar />

                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image 
                            src={tour.img || "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop"} 
                            alt={tour.title} 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-royal-blue/70 via-transparent to-white" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-6">Strategic Zone</h4>
                            <CharBlurIn 
                                text={slug.replace("-", " ").toUpperCase()} 
                                className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Available Missions Section */}
                <section className="py-24 md:py-40 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="mb-20 text-center max-w-3xl mx-auto">
                            <h4 className="text-sunset-orange font-black uppercase tracking-[0.6em] text-xs mb-4">Available Protocols</h4>
                            <h2 className="text-4xl md:text-6xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-8">
                                Curated {slug.replace("-", " ")} Itineraries
                            </h2>
                            <p className="text-royal-blue/60 font-bold italic text-lg leading-relaxed">
                                Our vetted deployment architectures for this region. Every mission is scalable and customizable to your elite requirements.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {locationPackages.length > 0 ? (
                                locationPackages.map((pkg, i) => (
                                    <motion.div 
                                        key={pkg.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="glass-card group p-8 rounded-[3rem] border-royal-blue/5 bg-royal-blue/5 hover:bg-royal-blue hover:text-white transition-all duration-500 flex flex-col h-full"
                                    >
                                        <div className="mb-8">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-sunset-orange">{pkg.duration} Protocol</div>
                                                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">{pkg.theme}</div>
                                            </div>
                                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{pkg.title}</h3>
                                            <p className="font-bold italic text-sm opacity-60 leading-relaxed mb-8">{pkg.highlight}</p>
                                        </div>
                                        
                                        <div className="mt-auto space-y-4">
                                            <div className="h-px bg-current opacity-10 w-full mb-6" />
                                            <div className="flex items-center justify-between">
                                                <div className="text-2xl font-black tracking-tighter">{pkg.price} <span className="text-[10px] opacity-40 uppercase">/ starting</span></div>
                                                <Magnetic>
                                                    <button 
                                                        onClick={() => {
                                                            const msg = `EXPLORATION INQUIRY: I am interested in ${pkg.title} (${pkg.id}).`;
                                                            window.open(`https://wa.me/919997812237?text=${encodeURIComponent(msg)}`, '_blank');
                                                        }}
                                                        className="w-12 h-12 rounded-2xl bg-sunset-orange text-white flex items-center justify-center hover:bg-white hover:text-royal-blue transition-all"
                                                    >
                                                        <ChevronRight size={20} />
                                                    </button>
                                                </Magnetic>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <p className="text-royal-blue/40 font-bold italic">No specific missions archived for this sector yet. Contact HQ for a custom architecture.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="pb-40 container mx-auto px-6">
                    <div className="glass-card p-12 md:p-32 rounded-[4rem] bg-sunset-orange text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12 relative z-10">
                            Custom <span className="text-royal-blue">Architecture.</span>
                        </h2>
                        <button 
                            onClick={() => window.open('https://wa.me/919997812237', '_blank')}
                            className="relative z-10 bg-royal-blue text-white py-8 px-16 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white hover:text-royal-blue transition-all duration-500 shadow-xl"
                        >
                            Contact Master Planner
                        </button>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
