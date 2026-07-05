import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { programmes } from "@/data/wellness";
import WellnessHubView from "./WellnessHubView";

const url = `${SITE_URL}/wellness`;

export const metadata: Metadata = {
    title: "Wellness Retreats in India — Ayurveda, Yoga & Recovery | MyTripMyTravel",
    description:
        "Private wellness travel in India — AYUSH-certified Ayurveda, master-led yoga & meditation, therapeutic massage and gentle-paced recovery, arranged with vetted practitioners. Enquire now.",
    alternates: { canonical: url },
    openGraph: {
        title: "Wellness Retreats in India | MyTripMyTravel",
        description: "Ayurveda, yoga, therapeutic massage and recovery travel — honest, vetted, private.",
        url,
        type: "website",
    },
};

export default function WellnessPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                name: "Wellness & Sanctuary",
                description:
                    "India's wellness heartland — Ayurveda, yoga & meditation, therapeutic massage and recovery travel, delivered with vetted practitioners and honest guidance.",
                url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Wellness", item: url },
                ],
            },
            {
                "@type": "ItemList",
                itemListElement: programmes.map((p, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: p.name,
                    url: `${url}/${p.slug}`,
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <WellnessHubView />
        </>
    );
}
