import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { faqTopics } from "@/data/faq";
import { FaqHubView } from "@/components/faq/FaqView";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | MyTripMyTravel",
    description:
        "Direct answers on the Golden Triangle, planning & visas, best time to travel, safety, wellness, fleet, weddings, and booking with MyTripMyTravel.",
    alternates: { canonical: `${SITE_URL}/faq` },
    openGraph: {
        title: "FAQ | MyTripMyTravel",
        description: "Direct answers for luxury India travel planning.",
        url: `${SITE_URL}/faq`,
        type: "website",
    },
};

export default function FaqPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: "FAQ", url: `${SITE_URL}/faq` },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
                ],
            },
        ],
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <FaqHubView topics={faqTopics} />
        </>
    );
}
