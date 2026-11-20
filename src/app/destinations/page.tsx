import type { Metadata } from "next";
import { regions, destinations } from "@/data/destinations";
import { isCoreDestination, isCoreRegion } from "@/lib/seoFocus";
import DestinationsHubView from "@/components/destinations/DestinationsHubView";

export const metadata: Metadata = {
    title: "India Destination Guides | MyTripMyTravel",
    description:
        "City and region guides across India: the Golden Triangle, Rajasthan, Kerala, the Himalayas, Sikkim and the Andamans. Chauffeured and escorted.",
    alternates: { canonical: "https://www.mytripmytravel.com/destinations" },
    openGraph: {
        title: "Destination Archive | MyTripMyTravel",
        description:
            "Vetted luxury deployment zones across India, every region a curated mission architecture.",
        url: "https://www.mytripmytravel.com/destinations",
        type: "website",
    },
};

export default function DestinationsPage() {
    // Only focus pages exist in the static build, so only link to those.
    const coreRegions = regions.filter((r) => isCoreRegion(r.slug));
    const coreDestinations = destinations.filter((d) => isCoreDestination(d.slug));

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
            itemListElement: coreDestinations.map((d, i) => ({
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
            <DestinationsHubView regions={coreRegions} featured={coreDestinations} />
        </>
    );
}
