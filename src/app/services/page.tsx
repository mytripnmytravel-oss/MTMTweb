import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICE_LINES, serviceCitiesResolved } from "@/data/services";
import ServicesHubView from "@/components/services/ServicesHubView";

export const metadata: Metadata = {
    title: "Ground Services — Chauffeured Car Rental & Airport Transfer | MyTripMyTravel",
    description:
        "Private, GPS-tracked chauffeured car rental and airport transfers across MyTripMyTravel's hub cities — pre-priced and continuous into any itinerary.",
    alternates: { canonical: `${SITE_URL}/services` },
    openGraph: {
        title: "Ground Services | MyTripMyTravel",
        description: "Chauffeured car rental and airport transfer across India hub cities.",
        url: `${SITE_URL}/services`,
        type: "website",
    },
};

export default function ServicesPage() {
    const cities = serviceCitiesResolved();
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: "Ground Services", url: `${SITE_URL}/services` },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                ],
            },
        ],
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ServicesHubView lines={SERVICE_LINES} cities={cities} />
        </>
    );
}
