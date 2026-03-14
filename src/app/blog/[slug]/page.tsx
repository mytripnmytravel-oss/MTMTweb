import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll, CharBlurIn } from "@/components/ClientComponents";
import Image from "next/image";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [
        { slug: 'golden-triangle-protocol' },
        { slug: 'silent-havelis-reset' },
        { slug: 'architecting-royal-wedding' },
        { slug: 'panthera-safari-mission' }
    ];
}

const blogData: Record<string, any> = {
    'golden-triangle-protocol': {
        title: "THE GOLDEN TRIANGLE PROTOCOL: EXECUTING THE PERFECT ROUTE",
        img: "/taj-golden.png",
        category: "Strategic Routes",
        date: "March 10, 2026",
        intro: "A tactical breakdown of navigating the subcontinent with absolute luxury and zero operational friction. Our elite perspective.",
        content: (
            <>
                <p className="text-2xl font-bold italic text-royal-blue mb-12"><span className="text-sunset-orange text-5xl font-black mr-2 bg-royal-blue/5 p-4 rounded-xl float-left mt-[-10px] leading-none">T</span>he subcontinent is arguably the most complex travel zone on earth. However, traversing it and <em>mastering</em> it are two entirely different operational paradigms. For the high-net-worth traveler, standard routes are riddled with friction points: crowded monuments, chaotic logistics, and generic hotel experiences. Our objective is to dismantle these issues and architect a flawless deployment.</p>

                <h2 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mt-20 mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-orange inline-block"></span> Phase 1: The Insertion
                </h2>
                <p>A mission begins at the tarmac. We bypass the standard arrival chaos using priority VIP customs clearance. Our Elite Fleet—typically an armored-level luxury SUV—waits airside. The environment is divided into operational zones, and we secure movement corridors that avoid massive congestion.</p>

                <div className="my-20 rounded-[3rem] overflow-hidden shadow-2xl relative border border-royal-blue/10">
                    <Image src="/innova.png" alt="Elite Fleet" width={1200} height={600} className="w-full object-cover h-[500px]" />
                    <div className="absolute bottom-0 w-full text-center p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white bg-royal-blue/90 backdrop-blur-md">
                        Asset 01: Secure Surface Transport Active
                    </div>
                </div>

                <h2 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mt-20 mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-orange inline-block"></span> Phase 2: The Tactical Engagement
                </h2>
                <p>Transit transforms a grueling drive into a high-speed, smooth transfer. Our architectural focus is singular. However, we do not engage targets during standard operational hours. We deploy our clients at the first light of dawn, securing perimeters before the masses converge. A Ministry-certified Attaché provides narrative context, elevating the experience from a simple viewing to a deep intellectual immersion.</p>

                <blockquote className="my-16 p-10 bg-royal-blue/5 border-l-[8px] border-sunset-orange rounded-r-3xl text-2xl font-black text-royal-blue italic leading-relaxed">
                    “We do not view architecture; we experience its absolute geometry without the static of the crowd.”
                    <span className="block mt-6 text-sm font-black uppercase text-dark-slate/40 tracking-[0.2em] not-italic">&mdash; Lead Architect, MyTripMyTravel</span>
                </blockquote>

                <h2 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mt-20 mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-orange inline-block"></span> Phase 3: Extraction & Reset
                </h2>
                <p>Moving into the final sector, the itinerary shifts towards pure restorative isolation. We eschew typical tourist traps, instead securing reservations at Heritage Dining venues within palace walls. It is here that the mission concludes, allowing our clients to decompress in a Silent Haveli, fully insulated from kinetic energy.</p>
            </>
        )
    },
    'silent-havelis-reset': {
        title: "SILENT HAVELIS: THE NEW STANDARD IN NEUROLOGICAL RESET",
        img: "/wellness.png",
        category: "Medical Sanctuary",
        date: "February 28, 2026",
        intro: "Why our high-net-worth clients are abandoning massive resorts for secluded, acoustically optimized heritage properties.",
        content: (
            <>
                <p className="text-2xl font-bold italic text-royal-blue mb-12"><span className="text-sunset-orange text-5xl font-black mr-2 bg-royal-blue/5 p-4 rounded-xl float-left mt-[-10px] leading-none">A</span>coustic pollution is the silent destroyer of the modern nervous system. As our Tier-1 clients increasingly seek total down-regulation from high-pressure corporate environments, the traditional 'luxury super-resort' model is failing them due to ambient noise and sheer volume of human traffic.</p>

                <h2 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mt-20 mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-orange inline-block"></span> The Acoustic Armor
                </h2>
                <p>A Haveli is a traditional, historic Indian manor, distinguished by thick stone walls and inward-facing courtyards. These properties were originally engineered centuries ago to naturally block both heat and street noise. Our 'Silent Haveli' protocol identifies and verifies these specific properties that maintain absolute acoustic integrity.</p>

                <blockquote className="my-16 p-10 bg-royal-blue/5 border-l-[8px] border-sunset-orange rounded-r-3xl text-2xl font-black text-royal-blue italic leading-relaxed">
                    “We do not offer vacations; we engineer environmental resets. Silence is the ultimate luxury.”
                    <span className="block mt-6 text-sm font-black uppercase text-dark-slate/40 tracking-[0.2em] not-italic">&mdash; Wellness Director, MyTripMyTravel</span>
                </blockquote>

                <h2 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mt-20 mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-orange inline-block"></span> Synergistic Medical Integration
                </h2>
                <p>These silent zones are not merely for passive rest. They serve as the foundational architecture for our 'Medical Sanctuary' integrations. Whether a client is recovering from a specialized Orthopedic Joint Reconstruction in Delhi or undergoing a strict Ayurvedic Panchakarma detox, the Haveli provides the necessary sterile, silent, and vibration-free environment required for deep cellular recovery.</p>
            </>
        )
    },
    'architecting-royal-wedding': {
        title: "ARCHITECTING A ROYAL WEDDING: THE 6-MONTH LEAD TIME",
        img: "/wedding.png",
        category: "Matrimonial Logistics",
        date: "February 15, 2026",
        intro: "An inside look at the military-precision logistics required to coordinate a 500-guest event at a 16th-century fortress.",
        content: (
            <>
                <p className="text-2xl font-bold italic text-royal-blue mb-12"><span className="text-sunset-orange text-5xl font-black mr-2 bg-royal-blue/5 p-4 rounded-xl float-left mt-[-10px] leading-none">C</span>oordinating a destination wedding in Rajasthan is not event planning; it is a full-scale logistical deployment. When a client requests a complete buyout of an Imperial Fort for 500 ultra-high-net-worth guests, standard hospitality protocols instantly shatter under the weight of the operational requirements.</p>

                <h2 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mt-20 mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-orange inline-block"></span> Total Air & Surface Control
                </h2>
                <p>The operation begins six months out. Guests arriving via chartered planes or commercial first-class into Jaipur or Udaipur require immediate, seamless extraction. We establish a forward operating base at the tarmac. A dedicated fleet of over 100 luxury vehicles (Toyota Innova Crystas, Mercedes V-Class) must be sequentially tagged, GPS monitored, and dispatched within a 48-hour window to move guests to the fortress without a single baggage error.</p>

                <blockquote className="my-16 p-10 bg-royal-blue/5 border-l-[8px] border-sunset-orange rounded-r-3xl text-2xl font-black text-royal-blue italic leading-relaxed">
                    “The margin for error on a 500-VIP convoy is mathematically zero. We run this like a military extraction.”
                    <span className="block mt-6 text-sm font-black uppercase text-dark-slate/40 tracking-[0.2em] not-italic">&mdash; Head of Logistics, MyTripMyTravel</span>
                </blockquote>

                <h2 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mt-20 mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-orange inline-block"></span> The Glass-Card Vendor Matrix
                </h2>
                <p>Inside the fortress, up to 12 different Tier-1 vendor teams (Sonic Architects, Cinematic Capture Teams, Heritage Culinary Staff, Floral Engineers, and Private Security) must operate simultaneously. They are managed through our proprietary command structure. No vendor communicates directly with the client; our agents absorb all friction, presenting only binary decisions to the families. The result is a flawless execution of the matrimonial protocol.</p>
            </>
        )
    },
    'panthera-safari-mission': {
        title: "THE PANTHERA MISSION: ELITE SAFARI DEPLOYMENTS",
        img: "/jaipur-mahal.png",
        category: "Wildlife Tactics",
        date: "January 30, 2026",
        intro: "Securing exclusive access to Ranthambore's core zones with vetted naturalists and custom-modified 4x4 interceptors.",
        content: (
            <>
                <p className="text-2xl font-bold italic text-royal-blue mb-12"><span className="text-sunset-orange text-5xl font-black mr-2 bg-royal-blue/5 p-4 rounded-xl float-left mt-[-10px] leading-none">T</span>he pursuit of the apex predator—the Bengal Tiger—requires patience, precision, and elite access. Placing a high-value client in a standard, crowded tourist jeep is an unacceptable operational failure. The Panthera Mission is designed to execute a surgical strike into the core zones of India's premier tiger reserves.</p>

                <h2 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mt-20 mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-orange inline-block"></span> Zone Authority & Intelligence
                </h2>
                <p>Ranthambore National Park is divided into hyper-specific zones. Success relies on predictive intelligence. Our tracking teams monitor predator movement data up to 72 hours before client insertion. We secure multi-zone access permits (often notoriously difficult to acquire) to ensure our interceptors can fluidly tail a target across invisible borders without bureaucratic delays.</p>

                <h2 className="text-4xl font-black text-royal-blue uppercase tracking-tighter mt-20 mb-10 flex items-center gap-4">
                    <span className="w-12 h-1 bg-sunset-orange inline-block"></span> The 4x4 Interceptor Fleet
                </h2>
                <p>We deploy custom-modified, open-top 4x4 gypsies engineered for silent running and rough terrain extraction. Accompanying the driver is a Tier-1 certified Naturalist—an expert trained not just to spot wildlife, but to read alarm calls from Langur monkeys and Sambar deer, effectively predicting where the tiger will emerge before it happens.</p>

                <blockquote className="my-16 p-10 bg-royal-blue/5 border-l-[8px] border-sunset-orange rounded-r-3xl text-2xl font-black text-royal-blue italic leading-relaxed">
                    “A successful tiger intercept is not luck. It is applied intelligence and superior surface assets.”
                    <span className="block mt-6 text-sm font-black uppercase text-dark-slate/40 tracking-[0.2em] not-italic">&mdash; Field Operations Director, MyTripMyTravel</span>
                </blockquote>
            </>
        )
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = blogData[resolvedParams.slug];

    if (!post) {
        notFound();
    }

    return (
        <SmoothScroll>
            <main className="bg-white min-h-screen relative overflow-hidden">
                <Navbar />

                {/* Hero / Header */}
                <section className="pt-52 pb-32 bg-royal-blue relative z-10">
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <Image src={post.img} alt="Hero" fill className="object-cover opacity-20 mix-blend-overlay" />
                    </div>
                    <div className="container mx-auto px-6 relative z-20">
                        <Link href="/blog" className="inline-flex items-center gap-3 text-white/50 hover:text-sunset-orange transition-colors font-black uppercase tracking-widest text-[10px] mb-12">
                            <ArrowLeft size={14} /> Return to Blogs
                        </Link>

                        <div className="max-w-5xl">
                            <div className="flex flex-wrap items-center gap-6 mb-8 text-xs font-black uppercase tracking-widest text-white/40">
                                <div className="flex items-center gap-2 text-sunset-orange">
                                    <Tag size={16} /> {post.category}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} /> {post.date}
                                </div>
                            </div>

                            <CharBlurIn
                                text={post.title}
                                className="text-4xl md:text-[5rem] font-black text-white uppercase tracking-tighter leading-[0.9] mb-8"
                            />

                            <p className="text-xl md:text-3xl text-white/60 font-bold italic border-l-4 border-sunset-orange pl-8 my-16 leading-relaxed max-w-3xl">
                                {post.intro}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Body */}
                <section className="py-32 container mx-auto px-6 relative z-10 w-full">
                    <div className="max-w-3xl mx-auto space-y-10 text-dark-slate/80 font-medium leading-[2] text-lg">

                        {post.content}

                        <div className="mt-32 p-12 rounded-[3rem] bg-royal-blue text-center shadow-2xl">
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Initiate Your Protocol</h3>
                            <p className="text-white/60 font-bold italic mb-10 max-w-lg mx-auto">This intelligence briefing is merely the foundation. Contact Command to engineer a custom deployment.</p>
                            <Link href="/booking" className="inline-block bg-sunset-orange text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-sunset-orange transition-all duration-500 shadow-xl">
                                Request Briefing
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </SmoothScroll>
    );
}
