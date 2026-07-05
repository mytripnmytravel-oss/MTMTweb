import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import CarRentalView from "./CarRentalView";

const TITLE = "Luxury Car Rental with Driver in India | MyTripMyTravel";
const DESCRIPTION =
    "Chauffeured car rental across India — sedans, premium SUVs and coaches with a vetted driver, GPS tracking, and fuel, tolls and permits included. No self-drive.";
const URL = `${SITE_URL}/services/car-rental`;
const OG_IMAGE =
    "https://images.unsplash.com/photo-1627927141576-0256f4c21ab1?q=80&w=1200&auto=format&fit=crop";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "website",
        images: [{ url: OG_IMAGE }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Chauffeured Car Rental in India",
            serviceType: "Chauffeured car rental",
            description: DESCRIPTION,
            url: URL,
            image: OG_IMAGE,
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
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                { "@type": "ListItem", position: 3, name: "Car Rental", item: URL },
            ],
        },
    ],
};

export default function CarRentalPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CarRentalView />
        </>
    );
}
