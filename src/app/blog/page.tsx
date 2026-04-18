"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn, Magnetic } from "@/components/ClientComponents";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Tag } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "The Golden Triangle Protocol: Executing the Perfect Route",
        excerpt: "A tactical breakdown of navigating Delhi, Agra, and Jaipur with absolute luxury and zero friction.",
        date: "March 10, 2026",
        category: "Strategic Routes",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg",
        slug: "golden-triangle-protocol"
    },
    {
        id: 2,
        title: "Silent Havelis: The New Standard in Neurological Reset",
        excerpt: "Why our high-net-worth clients are abandoning massive resorts for secluded, acoustically optimized heritage properties.",
        date: "February 28, 2026",
        category: "Medical Sanctuary",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Rambagh_Palace_hotel_Jaipur_lobby_courtyard.jpg",
        slug: "silent-havelis-reset"
    },
    {
        id: 3,
        title: "Architecting a Royal Wedding: The 6-Month Lead Time",
        excerpt: "An inside look at the military-precision logistics required to coordinate a 500-guest event at a 16th-century fortress.",
        date: "February 15, 2026",
        category: "Matrimonial Logistics",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Umaid_Bhawan_Palace%2C_Jodhpur.JPG",
        slug: "architecting-royal-wedding"
    },
    {
        id: 4,
        title: "The Panthera Mission: Elite Safari Deployments",
        excerpt: "Securing exclusive access to Ranthambore's core zones with vetted naturalists and custom-modified 4x4 interceptors.",
        date: "January 30, 2026",
        category: "Wildlife Tactics",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/079_Bengal_tiger_in_Ranthambore_National_Park_Photo_by_Giles_Laurent.jpg",
        slug: "panthera-safari-mission"
    }
];

export default function BlogListingPage() {
    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-60 pb-32 container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <motion.h4
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sunset-orange font-black uppercase tracking-[0.8em] text-sm mb-6"
                        >
                            Field Intelligence
                        </motion.h4>
                        <CharBlurIn
                            text="BLOGS"
                            className="text-5xl md:text-[8rem] font-black text-royal-blue uppercase tracking-tighter leading-[0.85] mb-8"
                        />
                        <p className="text-dark-slate font-bold italic text-xl md:text-2xl opacity-60 leading-relaxed max-w-3xl">
                            Declassified protocols, destination deep-dives, and tactical insights from our elite travel architects. Welcome to the intelligence hub of MyTripMyTravel.
                        </p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-20 container mx-auto px-6 relative z-10 mb-20">
                    <div className="grid md:grid-cols-2 gap-12">
                        {blogPosts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative rounded-[3rem] overflow-hidden bg-slate-50 border border-royal-blue/5 flex flex-col h-full"
                            >
                                <div className="relative h-[450px] w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-12 flex flex-col flex-1 justify-between bg-white relative z-10 -mt-10 rounded-t-[3rem] border-t border-royal-blue/5 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)]">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-6 mb-8 text-xs font-black uppercase tracking-widest text-dark-slate/40">
                                            <div className="flex items-center gap-2 text-sunset-orange">
                                                <Tag size={16} /> {post.category}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} /> {post.date}
                                            </div>
                                        </div>

                                        <h2 className="text-3xl font-black text-royal-blue uppercase tracking-tighter mb-6 group-hover:text-sunset-orange transition-colors">
                                            <Link href={"/blog/" + post.slug} className="before:absolute before:inset-0">
                                                {post.title}
                                            </Link>
                                        </h2>

                                        <p className="text-dark-slate/60 font-bold italic mb-12 line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <Magnetic>
                                        <div className="mt-auto inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-royal-blue hover:text-white transition-colors bg-royal-blue/5 group-hover:bg-sunset-orange px-6 py-4 rounded-full w-max z-20 relative cursor-pointer">
                                            Read Dispatch <ArrowRight size={14} />
                                        </div>
                                    </Magnetic>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
