import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import ExpertGuidesView from "./ExpertGuidesView";

const TITLE =
    "Expert Local Guides in India — Multilingual Heritage Specialists | MyTripMyTravel";
const DESCRIPTION =
    "Vetted, licensed local guides across India's heritage cities — Delhi, Agra, Jaipur, Udaipur and Kerala — leading private escorted visits in your own language.";
const URL = `${SITE_URL}/expert-guides`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            name: "Expert Local Guides in India",
            description: DESCRIPTION,
            url: URL,
            isPartOf: {
                "@type": "WebSite",
                name: "MyTripMyTravel",
                url: SITE_URL,
            },
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Expert Guides", item: URL },
            ],
        },
    ],
};

export default function ExpertGuidesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ExpertGuidesView />
        </>
    );
}
