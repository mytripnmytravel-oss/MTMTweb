import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import PrivacyView from "./PrivacyView";

const url = `${SITE_URL}/legal/privacy`;

export const metadata: Metadata = {
    title: "Privacy Policy | MyTripMyTravel",
    description:
        "How MyTripMyTravel collects, uses and protects your personal information when you enquire about or book luxury travel in India, and how to exercise your data rights.",
    alternates: { canonical: url },
    openGraph: { title: "Privacy Policy | MyTripMyTravel", description: "How we collect, use and protect your data.", url, type: "website" },
};

export default function PrivacyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "WebPage", name: "Privacy Policy", url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: url },
                ],
            },
        ],
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <PrivacyView />
        </>
    );
}
