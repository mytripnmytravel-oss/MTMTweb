import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import TermsView from "./TermsView";

const url = `${SITE_URL}/legal/terms`;

export const metadata: Metadata = {
    title: "Terms of Service | MyTripMyTravel",
    description:
        "The terms for engaging MyTripMyTravel, bookings and payments, changes and cancellations, our responsibilities and liability, and how to contact us.",
    alternates: { canonical: url },
    openGraph: { title: "Terms of Service | MyTripMyTravel", description: "Booking, payment, cancellation and liability terms.", url, type: "website" },
};

export default function TermsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "WebPage", name: "Terms of Service", url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Terms of Service", item: url },
                ],
            },
        ],
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <TermsView />
        </>
    );
}
