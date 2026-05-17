import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { packages, packageSlug } from "@/data/tours";
import ToursHubView from "@/components/tours/ToursHubView";

export const metadata: Metadata = {
    title: "Tour Master Packages — Luxury India Itineraries | MyTripMyTravel",
    description:
        "Every MyTripMyTravel itinerary is a precise mission architecture, not a fixed package — Golden Triangle, Rajasthan, Kerala, the Himalayas and beyond, chauffeured and escorted.",
    alternates: { canonical: `${SITE_URL}/tours` },
    openGraph: {
        title: "Tour Master Packages | MyTripMyTravel",
        description: "Luxury, bespoke, chauffeured India itineraries.",
        url: `${SITE_URL}/tours`,
        type: "website",
    },
};

export default function ToursPage() {
    const order = [
        "Golden Triangle",
        "Rajasthan",
        "Himalayas",
        "North India",
        "Central India",
        "South India",
    ];
    const locations = Array.from(new Set(packages.map((p) => p.location)));
    locations.sort((a, b) => {
        const ia = order.indexOf(a);
        const ib = order.indexOf(b);
        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
    const grouped = locations.map((location) => ({
        location,
        items: packages.filter((p) => p.location === location),
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                name: "Tour Master Packages",
                url: `${SITE_URL}/tours`,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tours` },
                ],
            },
            {
                "@type": "ItemList",
                itemListElement: packages.map((p, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: p.title,
                    url: `${SITE_URL}/tours/${packageSlug(p)}`,
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ToursHubView grouped={grouped} />
        </>
    );
}
