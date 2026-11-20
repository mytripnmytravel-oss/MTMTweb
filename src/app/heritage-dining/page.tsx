import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import HeritageDiningView from "./HeritageDiningView";
import { pageTitle } from "@/lib/meta";

const TITLE =
    "Heritage Dining in India: Palace Tables";
const DESCRIPTION =
    "Private heritage dining across India, royal thali tables, exclusive haveli dinners, chef's tables, escorted street-food trails and sundowner folk evenings.";
const URL = `${SITE_URL}/heritage-dining`;

export const metadata: Metadata = {
    title: pageTitle(TITLE),
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: pageTitle(TITLE),
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
            name: "Heritage Dining in India",
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
                { "@type": "ListItem", position: 2, name: "Heritage Dining", item: URL },
            ],
        },
    ],
};

export default function HeritageDiningPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeritageDiningView />
        </>
    );
}
