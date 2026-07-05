import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import CorporateView from "./CorporateView";

const TITLE = "Corporate & MICE Travel in India | MyTripMyTravel";
const DESCRIPTION =
    "Corporate and MICE travel in India — executive offsites, incentives and delegations, run on GPS-tracked convoys with a single accountable mission lead.";
const URL = `${SITE_URL}/corporate`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "website",
        images: [{ url: `${SITE_URL}/logo.png` }],
    },
};

const FAQS = [
    {
        q: "Do you handle small corporate groups?",
        a: "Yes — under-15 teams are run as compact, fully-private missions with one or two premium vehicles, an accountable mission lead, and concierge-level attention rather than scaled convoy logistics.",
    },
    {
        q: "Can you run a mid-size company offsite?",
        a: "Yes — a 15–50 mission uses a small GPS-tracked convoy with coordinated room blocks and choreographed session-to-offsite-to-dining flow, run with a named on-ground coordinator and single-point accountability.",
    },
    {
        q: "Can you run a large corporate trip of 150 people?",
        a: "Yes — large missions (50–200) are full managed operations with a large GPS-tracked convoy, dedicated on-ground command, multi-property block management, and wave-sequenced movement.",
    },
    {
        q: "Do you plan MICE events and conferences?",
        a: "Yes — MyTripMyTravel coordinates meetings, incentives, conferences and offsite events in India, handling fleet, accommodation, dining and on-ground event flow under one accountable mission lead.",
    },
    {
        q: "Is there a single point of accountability?",
        a: "Yes — the company receives one accountable mission owner over the whole operation, not a set of vendors to coordinate.",
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Corporate & MICE Travel in India",
            serviceType: "Corporate & MICE Travel",
            description:
                "Corporate and MICE travel across India — executive offsites, incentives, conferences and delegations from small teams to 200, run on GPS-tracked convoys with coordinated accommodation, dining and on-ground command under one accountable mission lead.",
            url: URL,
            image: `${SITE_URL}/logo.png`,
            areaServed: { "@type": "Country", name: "India" },
            provider: {
                "@type": "TravelAgency",
                name: "MyTripMyTravel",
                url: SITE_URL,
            },
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Corporate", item: URL },
            ],
        },
        {
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        },
    ],
};

export default function CorporatePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CorporateView />
        </>
    );
}
