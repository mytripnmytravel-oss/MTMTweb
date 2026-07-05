import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { packages } from "@/data/tours";
import GoldenTriangleAllView from "./GoldenTriangleAllView";

const url = `${SITE_URL}/tours/golden-triangle-all`;
const description =
    "Browse every Golden Triangle tour variation and India itinerary in one archive — filter by region, theme and duration, then tailor any route into a bespoke, chauffeured trip.";

export const metadata: Metadata = {
    title: "Golden Triangle Tours — All Itinerary Variations & India Tour Archive | MyTripMyTravel",
    description,
    alternates: { canonical: url },
    openGraph: {
        title: "Golden Triangle Tours — All Itinerary Variations & India Tour Archive | MyTripMyTravel",
        description,
        url,
        type: "website",
        images: [
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Golden Triangle Tours — All Itinerary Variations & India Tour Archive | MyTripMyTravel",
        description,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            name: "Golden Triangle Tours — All Itinerary Variations",
            description,
            url,
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tours` },
                { "@type": "ListItem", position: 3, name: "Golden Triangle — All Variations", item: url },
            ],
        },
        {
            "@type": "ItemList",
            numberOfItems: packages.length,
            itemListElement: packages.map((pkg, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                    "@type": "TouristTrip",
                    name: pkg.title,
                    description: pkg.highlight,
                    touristType: pkg.theme,
                    duration: pkg.duration,
                    offers: {
                        "@type": "Offer",
                        price: pkg.price.replace(/[^0-9.]/g, ""),
                        priceCurrency: "INR",
                    },
                },
            })),
        },
    ],
};

export default function GoldenTriangleAllPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <GoldenTriangleAllView />
        </>
    );
}
