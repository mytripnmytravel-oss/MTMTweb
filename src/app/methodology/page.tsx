"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Zap, ShieldCheck, Search, Activity, Terminal, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CharBlurIn, Magnetic } from "@/components/ClientComponents";

const StatItem = ({ label, value, desc }: { label: string; value: string; desc: string }) => (
    <div className="glass-card p-8 border-royal-blue/5 hover:border-sunset-orange/20 transition-all group">
        <div className="text-sunset-orange font-black text-3xl mb-2 tracking-tighter uppercase">{value}</div>
        <div className="text-royal-blue font-black uppercase tracking-widest text-xs mb-4">{label}</div>
        <p className="text-dark-slate/60 text-[11px] leading-relaxed font-medium">{desc}</p>
    </div>
);

const ProtocolBlock = ({ step, title, desc, icon: Icon, features }: { step: string; title: string; desc: string; icon: any; features: string[] }) => (
    <div className="relative pl-12 pb-20 border-l border-royal-blue/10 last:pb-0">
        <div className="absolute left-[-20px] top-0 w-10 h-10 bg-royal-blue rounded-xl flex items-center justify-center text-white shadow-xl shadow-royal-blue/20">
            <Icon size={20} />
        </div>
        <div className="absolute left-[-60px] top-4 text-[10px] font-black text-royal-blue/20 rotate-[-90deg] uppercase tracking-widest">Phase {step}</div>
        
        <h3 className="text-3xl md:text-5xl font-black text-royal-blue uppercase tracking-tighter mb-6">{title}</h3>
        <p className="text-dark-slate/70 text-lg font-medium leading-relaxed max-w-2xl mb-10">{desc}</p>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-royal-blue/5 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-sunset-orange rounded-full" />
                    <span className="text-[10px] font-black text-royal-blue uppercase tracking-widest">{feature}</span>
                </div>
            ))}
        </div>
    </div>
);

export default function MethodologyPage() {
    return (
        <div className="min-h-screen bg-soft-white selection:bg-sunset-orange selection:text-white font-sans overflow-hidden">
            <Navbar />

            {/* --- BRIEFING HEADER (The Brief) --- */}
            <section className="relative pt-40 pb-20 bg-royal-blue overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:3vw_3vw]" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sunset-orange/10 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8"
                        >
                            <Terminal size={12} className="text-sunset-orange" />
                            <span className="text-white font-black uppercase tracking-[0.4em] text-[10px]">Mission Protocol briefing.v04</span>
                        </motion.div>
                        
                        <CharBlurIn 
                            text="THE" 
                            className="text-6xl md:text-[8rem] font-black text-white leading-none tracking-tighter uppercase mb-2"
                        />
                        <CharBlurIn 
                            text="METHODOLOGY" 
                            className="text-6xl md:text-[8rem] font-black text-white leading-none tracking-tighter uppercase drop-shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
                        />
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-white/70 font-bold text-xl md:text-2xl mt-12 max-w-2xl leading-relaxed italic"
                        >
                            "Luxury is not a commodity. It is an operational standard. Our methodology is the blueprint for translating high-intent travel into absolute cinematic reality."
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mt-20">
                        <StatItem label="Response Time" value="< 120s" desc="Real-time kinetic activation for any inquiry within the Indian territory." />
                        < StatItem label="Cleanliness" value="100%" desc="Zero-compromise fleet sanitization and maintenance protocols." />
                        <StatItem label="Precision" value="99.9%" desc="GPS-locked itinerary execution with a specialized command center." />
                        <StatItem label="Satisfaction" value="4.9/5" desc="Verified elite client feedback across all Golden Triangle circuits." />
                    </div>
                </div>
            </section>

            {/* --- FULL DOSSIER (The Full) --- */}
            <section className="py-20 md:py-40 bg-white relative z-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Sidebar Labeling */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-40">
                                <h4 className="text-royal-blue font-black uppercase tracking-[0.8em] text-xs mb-6">Master Protocol</h4>
                                <h2 className="text-5xl font-black text-royal-blue leading-none tracking-tighter uppercase mb-8">The Full <br /> Dossier.</h2>
                                <p className="text-dark-slate/60 text-lg font-medium leading-relaxed max-w-sm">
                                    Our operational cycle is a systematic loop designed to eliminate friction. It is the invisible layer between you and the environment.
                                </p>
                                
                                <div className="mt-12 space-y-4">
                                    {['01 Curation', '02 Activation', '03 Execution', '04 Retention'].map((p) => (
                                        <div key={p} className="flex items-center gap-4 text-royal-blue/20 font-black uppercase tracking-widest text-[10px]">
                                            <div className="w-8 h-[1px] bg-royal-blue/10" /> {p}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Methodology Steps */}
                        <div className="lg:w-2/3">
                            <ProtocolBlock 
                                step="01"
                                icon={Search}
                                title="INTELLIGENT CURATION"
                                desc="We analyze client intent before architecting the route. This is not booking; this is translation. We convert your cultural desires into a 3D geometric movement protocol across Northern India."
                                features={['Intent Analysis', 'Route Optimization', 'Hospitality Mapping', 'Briefing Generation']}
                            />
                            
                            <ProtocolBlock 
                                step="02"
                                icon={Zap}
                                title="KINETIC ACTIVATION"
                                desc="The moment a protocol is greenlit, our fleet telemetry activates. Chauffeurs are briefed on route specifics, vehicle diagnostics are verified, and the concierge network is put on high alert."
                                features={['Fleet Diagnostics', 'Attaché Briefing', 'Sanitization Protocol', 'Tech Sync']}
                            />
                            
                            <ProtocolBlock 
                                step="03"
                                icon={ShieldCheck}
                                title="ZERO-FRICTION EXECUTION"
                                desc="The journey is monitored by our 24/7 Command Center. We predict traffic bottlenecks, adjust timings in real-time, and maintain a constant secure link with both the chauffeur and the guest."
                                features={['Live Telemetry', 'Dynamic Routing', 'Concierge Support', 'Secure Linkage']}
                            />
                            
                            <ProtocolBlock 
                                step="04"
                                icon={Target}
                                title="MEMORY ARCHIVING"
                                desc="Every mission concludes with a full debrief. We verify the success of the experience, archive client preferences for future protocols, and recycle performance data back into our curation engine."
                                features={['Post-Mission Debrief', 'Preference Logging', 'Feedback Loop', 'Network Cleanup']}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORE VALUES STRIP --- */}
            <section className="py-32 bg-royal-blue relative z-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h4 className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-4">Directives</h4>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">THE CORE VALUES</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="bg-white/5 border border-white/10 p-12 rounded-[2rem] text-center group hover:bg-white/10 transition-all">
                            <Shield className="text-sunset-orange mx-auto mb-8" size={48} />
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">UNCOMPROMISING SAFETY</h3>
                            <p className="text-white/60 text-sm leading-relaxed">Our vehicles undergo 40-point diagnostics before every deployment. Zero exceptions.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-12 rounded-[2rem] text-center group hover:bg-white/10 transition-all">
                            <Activity className="text-sunset-orange mx-auto mb-8" size={48} />
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">REAL-TIME AGILITY</h3>
                            <p className="text-white/60 text-sm leading-relaxed">We adapt to environmental shifts in seconds. Traffic, weather, or preference changes.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-12 rounded-[2rem] text-center group hover:bg-white/10 transition-all">
                            <Target className="text-sunset-orange mx-auto mb-8" size={48} />
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">ABSOLUTE PRECISION</h3>
                            <p className="text-white/60 text-sm leading-relaxed">We measure success by the second. On-time performance is our fundamental protocol.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-40 bg-white relative z-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-[6rem] font-black text-royal-blue uppercase tracking-tighter leading-none mb-12">
                        Experience The <br /> <span className="text-sunset-orange">Absolute Protocol.</span>
                    </h2>
                    <Magnetic>
                        <Link href="/contact" className="inline-flex items-center gap-6 px-12 py-8 bg-royal-blue text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-sunset-orange transition-all shadow-2xl">
                           Execute Destination <ArrowRight size={20} />
                        </Link>
                    </Magnetic>
                </div>
            </section>

            <Footer />
        </div>
    );
}
