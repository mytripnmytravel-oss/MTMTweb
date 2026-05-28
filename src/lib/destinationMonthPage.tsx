import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import {
    getAllCityMonthParams,
    getMonthContent,
    parseMonthSlug,
    monthExists,
} from "@/data/destinationMonths";
import DestinationMonthView from "@/components/destinations/DestinationMonthView";

export function getDestinationMonthStaticParams() {
    return getAllCityMonthParams();
}

export async function destinationMonthMetadata(
    citySlug: string,
    monthSlug: string
): Promise<Metadata> {
    const dest = getDestination(citySlug);
    const month = parseMonthSlug(monthSlug);
    if (!dest || !month) return { title: "Not Found | MyTripMyTravel" };
    const content = getMonthContent(dest, month);
    const title = `${content.h1} — ${dest.state} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/destinations/${citySlug}/in/${monthSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            images: [{ url: dest.heroImg }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [dest.heroImg],
        },
    };
}

export function DestinationMonthRoute({
    citySlug,
    monthSlug,
}: {
    citySlug: string;
    monthSlug: string;
}) {
    const dest = getDestination(citySlug);
    const month = parseMonthSlug(monthSlug);
    if (!dest || !month || !monthExists(citySlug, monthSlug)) notFound();

    const content = getMonthContent(dest, month);
    const url = `${SITE_URL}/destinations/${citySlug}/in/${monthSlug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TouristDestination",
                name: dest.name,
                description: content.answer,
                url,
                image: dest.heroImg,
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: dest.coordinates.lat,
                    longitude: dest.coordinates.lng,
                },
                address: {
                    "@type": "PostalAddress",
                    addressRegion: dest.state,
                    addressCountry: "IN",
                },
                touristType: `Travellers visiting ${dest.name} in ${content.monthLabel}`,
            },
            {
                "@type": "Article",
                headline: content.h1,
                description: content.answer,
                image: dest.heroImg,
                datePublished: "2026-05-28",
                dateModified: "2026-05-28",
                author: {
                    "@type": "Organization",
                    name: "MyTripMyTravel Editorial Desk",
                    url: SITE_URL,
                },
                publisher: {
                    "@type": "Organization",
                    name: "MyTripMyTravel",
                    url: SITE_URL,
                    logo: {
                        "@type": "ImageObject",
                        url: `${SITE_URL}/logo.png`,
                    },
                },
                mainEntityOfPage: url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.region, item: `${SITE_URL}/destinations/region/${dest.regionSlug}` },
                    { "@type": "ListItem", position: 4, name: dest.name, item: `${SITE_URL}/destinations/${dest.slug}` },
                    { "@type": "ListItem", position: 5, name: content.monthLabel, item: url },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: content.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <DestinationMonthView content={content} />
        </>
    );
}
