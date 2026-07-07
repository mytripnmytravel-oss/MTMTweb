import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { ROUTES } from "@/data/transferRoutes";
import { getDestination } from "@/data/destinations";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Inter-City Chauffeur Transfers | MyTripMyTravel",
    description:
        "Curated chauffeured inter-city routes across India, Delhi to Agra, Agra to Jaipur, Jodhpur to Jaisalmer, Kochi to Munnar and more, private, GPS-tracked, pre-priced.",
    alternates: { canonical: `${SITE_URL}/services/inter-city` },
    openGraph: {
        title: "Inter-City Transfers | MyTripMyTravel",
        description: "Curated chauffeured inter-city routes across India.",
        url: `${SITE_URL}/services/inter-city`,
        type: "website",
    },
};

export default function Page() {
    const url = `${SITE_URL}/services/inter-city`;
    const items = ROUTES.map((r) => {
        const o = getDestination(r.originSlug);
        const d = getDestination(r.destinationSlug);
        return { ...r, originName: o?.name ?? r.originSlug, destinationName: d?.name ?? r.destinationSlug };
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: "Inter-City Chauffeur Transfers", url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                    { "@type": "ListItem", position: 3, name: "Inter-City Transfers", item: url },
                ],
            },
            {
                "@type": "ItemList",
                itemListElement: items.map((r, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: `${r.originName} → ${r.destinationName}`,
                    url: `${SITE_URL}/services/inter-city/${r.slug}`,
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="min-h-screen bg-white text-royal-blue overflow-hidden">
                <Navbar />
                <section className="pt-60 pb-20 container mx-auto px-6">
                    <h4 className="text-sunset-orange font-semibold uppercase tracking-[0.8em] text-sm mb-6">Inter-City Transfers</h4>
                    <h1 className="text-5xl md:text-8xl font-semibold text-royal-blue uppercase tracking-tight leading-[0.85] mb-8">CURATED ROUTES</h1>
                    <p className="text-dark-slate font-bold italic text-xl opacity-60 leading-relaxed max-w-2xl">
                        Private, GPS-tracked, pre-priced chauffeured transfers between the cities MyTripMyTravel operates &mdash; the same Elite Fleet protocol as the rest of every mission, no surprise fees on the road.
                    </p>
                </section>
                <section className="pb-32 container mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.map((r) => (
                            <Link key={r.slug} href={`/services/inter-city/${r.slug}`} className="block glass-card rounded-3xl p-7 border-royal-blue/5 group hover:border-sunset-orange/30 transition-all">
                                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sunset-orange mb-3">~{r.distanceKm} km · ~{r.driveHrs} hrs{r.via ? ` · via ${r.via}` : ""}</div>
                                <span className="text-xl font-semibold uppercase tracking-tight text-royal-blue group-hover:text-sunset-orange transition-colors">{r.originName} → {r.destinationName}</span>
                            </Link>
                        ))}
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
