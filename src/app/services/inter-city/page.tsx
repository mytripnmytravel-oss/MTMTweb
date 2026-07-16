import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { ROUTES } from "@/data/transferRoutes";
import { getDestination } from "@/data/destinations";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeadBlock } from "@/components/lead/Lead";

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
            <main className="min-h-screen bg-paper">
                <Navbar />
                <section className="pb-20 pt-36 sm:pt-40">
                    <div className="container-x">
                        <p className="eyebrow eyebrow-accent">Inter-City Transfers</p>
                        <h1 className="display-1 mt-4 max-w-3xl font-semibold text-ink">Curated routes</h1>
                        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted">
                            Private, GPS-tracked, pre-priced chauffeured transfers between the cities MyTripMyTravel operates, the same Elite Fleet protocol as the rest of every mission, no surprise fees on the road.
                        </p>
                    </div>
                </section>
                <section className="section pt-0">
                    <div className="container-x">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {items.map((r) => (
                                <Link key={r.slug} href={`/services/inter-city/${r.slug}`} className="card group p-7">
                                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-stone">~{r.distanceKm} km · ~{r.driveHrs} hrs{r.via ? ` · via ${r.via}` : ""}</p>
                                    <span className="mt-3 block text-xl font-semibold text-ink transition-colors group-hover:text-clay">{r.originName} → {r.destinationName}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                <LeadBlock
                    variant="cta"
                    source="Inter-city transfers hub"
                    context={{ "Inquiry Type": "Inter-city transfer" }}
                    heading="Need a chauffeured transfer?"
                    subheading="Tell us your route and dates. Our travel desk replies fast with a private, GPS-tracked car and a transparent, pre-priced quote."
                    waMessage="Hi MyTripMyTravel, I would like a chauffeured inter-city transfer in India."
                />
                <Footer />
            </main>
        </>
    );
}
