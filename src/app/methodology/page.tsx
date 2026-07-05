import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import MethodologyView from "./MethodologyView";

const TITLE = "Our Methodology — How MyTripMyTravel Plans Private India Journeys | MyTripMyTravel";
const DESCRIPTION =
    "How MyTripMyTravel plans private luxury India journeys — a three-phase Mission Protocol of intelligent curation, kinetic activation and memory archiving.";
const URL = `${SITE_URL}/methodology`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "article",
        images: ["/hero-taj.png"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${URL}/#webpage`,
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
                { "@type": "ListItem", position: 2, name: "Methodology", item: URL },
            ],
        },
    ],
};

export default function MethodologyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <MethodologyView />
        </>
    );
}
