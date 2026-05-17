import type { Metadata } from "next";
import { regions, destinations } from "@/data/destinations";
import DestinationsHubView from "@/components/destinations/DestinationsHubView";

export const metadata: Metadata = {
    title: "Destination Archive | Curated Luxury India by MyTripMyTravel",
    description:
        "Explore MyTripMyTravel's vetted deployment zones across India — the Golden Triangle, Rajasthan, Kerala, the Himalayas, Sikkim and the Andamans. Chauffeured, escorted, sequenced for the light.",
    alternates: { canonical: "https://www.mytripmytravel.com/destinations" },
    openGraph: {
        title: "Destination Archive | MyTripMyTravel",
        description:
            "Vetted luxury deployment zones across India — every region a curated mission architecture.",
        url: "https://www.mytripmytravel.com/destinations",
        type: "website",
    },
};

export default function DestinationsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Destination Archive",
        description:
            "MyTripMyTravel's curated luxury destinations across the Indian subcontinent.",
        url: "https://www.mytripmytravel.com/destinations",
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mytripmytravel.com" },
                { "@type": "ListItem", position: 2, name: "Destinations", item: "https://www.mytripmytravel.com/destinations" },
            ],
        },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: destinations.map((d, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: d.name,
                url: `https://www.mytripmytravel.com/destinations/${d.slug}`,
            })),
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DestinationsHubView regions={regions} featured={destinations} />
        </>
    );
}
