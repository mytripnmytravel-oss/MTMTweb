import type { Metadata } from "next";
import { SITE_URL, ORGANIZATION } from "@/lib/site";
import BookingView from "./BookingView";

const url = `${SITE_URL}/booking`;
const title = "Plan Your India Trip — Enquire | MyTripMyTravel";
const description =
    "Tell us your dates, group and interests and our concierge will craft a bespoke India itinerary — Golden Triangle, Rajasthan, Kerala and beyond. Enquire now.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
        title,
        description,
        url,
        type: "website",
        images: [{ url: "/hero-taj.png" }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ContactPage",
            "@id": `${url}/#contactpage`,
            url,
            name: title,
            description,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            primaryImageOfPage: `${SITE_URL}/hero-taj.png`,
            provider: {
                "@type": "TravelAgency",
                name: ORGANIZATION.name,
                url: SITE_URL,
                telephone: ORGANIZATION.telephone,
                email: ORGANIZATION.email,
            },
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Enquire", item: url },
            ],
        },
    ],
};

export default function BookingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BookingView />
        </>
    );
}
