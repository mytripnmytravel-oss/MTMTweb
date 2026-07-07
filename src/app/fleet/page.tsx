import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { fleet } from "@/data/fleet";
import FleetView from "./FleetView";

const TITLE = "Luxury Chauffeured Fleet in India | MyTripMyTravel";
const DESCRIPTION =
    "Browse our chauffeured fleet for hire across India, luxury sedans, premium SUVs and coaches, from the Innova Crysta to Mercedes, Vellfire and Rolls-Royce.";
const URL = `${SITE_URL}/fleet`;
const OG_IMAGE = fleet[0]?.img ?? `${SITE_URL}/logo.png`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "website",
        images: [{ url: OG_IMAGE }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            name: "Luxury Chauffeured Fleet in India",
            description: DESCRIPTION,
            url: URL,
            isPartOf: { "@type": "WebSite", name: "MyTripMyTravel", url: SITE_URL },
            about: {
                "@type": "TravelAgency",
                name: "MyTripMyTravel",
                url: SITE_URL,
            },
        },
        {
            "@type": "ItemList",
            name: "MyTripMyTravel Chauffeured Fleet",
            numberOfItems: fleet.length,
            itemListElement: fleet.map((v, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: v.name,
                url: `${SITE_URL}/fleet/${v.id}`,
            })),
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Fleet", item: URL },
            ],
        },
    ],
};

export default function FleetPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <FleetView />
        </>
    );
}
