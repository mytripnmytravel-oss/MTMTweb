import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import AndamanView from "./AndamanView";

const url = `${SITE_URL}/destinations/andaman`;
const description =
    "Andaman Islands luxury travel: a private, concierge-led 7-day itinerary through Port Blair, Havelock and Neil — pristine beaches, snorkelling and calm-sea inter-island cruises.";

export const metadata: Metadata = {
    title: "Andaman Islands Luxury Travel — Havelock & Neil Itinerary | MyTripMyTravel",
    description,
    alternates: { canonical: url },
    openGraph: {
        title: "Andaman Islands Luxury Travel — Havelock & Neil Itinerary | MyTripMyTravel",
        description,
        url,
        type: "article",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman%2C_India.jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Andaman Islands Luxury Travel — Havelock & Neil Itinerary | MyTripMyTravel",
        description,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TouristDestination",
            name: "Andaman Islands",
            description,
            url,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman%2C_India.jpg",
            touristType: "Luxury inbound travellers",
            areaServed: {
                "@type": "AdministrativeArea",
                name: "Andaman & Nicobar Islands",
            },
            address: {
                "@type": "PostalAddress",
                addressRegion: "Andaman & Nicobar Islands",
                addressCountry: "IN",
            },
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
                { "@type": "ListItem", position: 3, name: "Andaman", item: url },
            ],
        },
    ],
};

export default function AndamanPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AndamanView />
        </>
    );
}
