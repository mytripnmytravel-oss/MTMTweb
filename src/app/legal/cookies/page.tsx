import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import CookiesView from "./CookiesView";

const url = `${SITE_URL}/legal/cookies`;

export const metadata: Metadata = {
    title: "Cookie Policy | MyTripMyTravel",
    description:
        "How MyTripMyTravel uses cookies — essential and privacy-respecting analytics cookies — and how you can manage or disable them in your browser at any time.",
    alternates: { canonical: url },
    openGraph: { title: "Cookie Policy | MyTripMyTravel", description: "How we use cookies and how to manage them.", url, type: "website" },
};

export default function CookiesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "WebPage", name: "Cookie Policy", url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Cookie Policy", item: url },
                ],
            },
        ],
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <CookiesView />
        </>
    );
}
