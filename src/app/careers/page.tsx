import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import CareersView from "@/components/careers/CareersView";

export const metadata: Metadata = {
    title: "Careers — Join the Mission | MyTripMyTravel",
    description:
        "Careers at MyTripMyTravel, a luxury inbound-India travel architect. We hire mission architects, performance chauffeurs, heritage curators, growth, and guest-operations talent — for judgement, discretion, and craft.",
    alternates: { canonical: `${SITE_URL}/careers` },
    openGraph: {
        title: "Careers | MyTripMyTravel",
        description: "Join a deliberately-grown luxury private-travel operation.",
        url: `${SITE_URL}/careers`,
        type: "website",
    },
};

export default function CareersPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "WebPage", name: "Careers at MyTripMyTravel", url: `${SITE_URL}/careers` },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Careers", item: `${SITE_URL}/careers` },
                ],
            },
        ],
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <CareersView />
        </>
    );
}
