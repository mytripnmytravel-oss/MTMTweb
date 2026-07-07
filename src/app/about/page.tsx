import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import AboutView from "./AboutView";

const TITLE = "About MyTripMyTravel, Luxury India Travel Architects | MyTripMyTravel";
const DESCRIPTION =
    "Meet the boutique team behind MyTripMyTravel, architecting private, chauffeured luxury journeys across India's Golden Triangle, Rajasthan, Kerala and beyond.";
const URL = `${SITE_URL}/about`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "website",
        images: ["/hero-taj.png"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "AboutPage",
            "@id": `${URL}/#aboutpage`,
            url: URL,
            name: TITLE,
            description: DESCRIPTION,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            primaryImageOfPage: `${SITE_URL}/hero-taj.png`,
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "About", item: URL },
            ],
        },
    ],
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutView />
        </>
    );
}
