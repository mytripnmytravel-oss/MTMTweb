import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import WeddingsView from "./WeddingsView";

const TITLE = "Destination Weddings in India — Palace & Fort Venues | MyTripMyTravel";
const DESCRIPTION =
    "Destination weddings in India — lake palaces, Rajput forts, heritage havelis and desert camps. MyTripMyTravel runs venue, fleet, decor and dining together.";
const URL = `${SITE_URL}/weddings`;
const HERO_IMG = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Umaid_Bhawan_Palace%2C_Jodhpur.JPG";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "website",
        images: [{ url: HERO_IMG }],
    },
};

const FAQS = [
    {
        q: "Where can I have a lake palace wedding in India?",
        a: "Primarily Udaipur, the City of Lakes, with limited island and lakefront palace venues. MyTripMyTravel secures the property first and then coordinates the full production.",
    },
    {
        q: "Can I get married inside a Rajasthan fort?",
        a: "Select heritage forts permit private events in courtyards or defined rampart areas. Access windows, permissible zones, and capacities vary by venue and are confirmed before design.",
    },
    {
        q: "Are havelis good for small weddings?",
        a: "Yes — restored heritage havelis suit intimate-to-classic counts (up to roughly 150) where atmosphere and design matter more than scale.",
    },
    {
        q: "Can I have a desert wedding in Rajasthan?",
        a: "Yes — luxury tented camps on the Thar dunes near Jaisalmer or Jodhpur, where the camp build and remote logistics are handled end to end.",
    },
    {
        q: "Who manages the whole wedding production?",
        a: "A single accountable mission lead owns venue, fleet, decor, dining, and contingency, so the family experiences the wedding rather than the logistics. MyTripMyTravel plans and coordinates the production; specifics are confirmed by the weddings wing.",
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Destination Wedding Planning in India",
            serviceType: "Destination Wedding Planning",
            description:
                "Planning and coordination of destination weddings in India across lake palaces, Rajput forts, heritage havelis and desert camps — venue, fleet, decor, dining and logistics under one accountable lead.",
            url: URL,
            image: HERO_IMG,
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
                { "@type": "ListItem", position: 2, name: "Weddings", item: URL },
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

export default function WeddingsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <WeddingsView />
        </>
    );
}
