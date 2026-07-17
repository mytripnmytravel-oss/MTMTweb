import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import {
    getAllCityOriginParams,
    getCityOriginContent,
    cityOriginExists,
    findOrigin,
} from "@/data/destinationOrigins";
import DestinationOriginView from "@/components/destinations/DestinationOriginView";

export function getDestinationOriginStaticParams() {
    return getAllCityOriginParams();
}

export async function destinationOriginMetadata(
    citySlug: string,
    originSlug: string
): Promise<Metadata> {
    const dest = getDestination(citySlug);
    const origin = findOrigin(originSlug);
    if (!dest || !origin) return { title: "Not Found | MyTripMyTravel" };
    const content = getCityOriginContent(dest, origin);
    const title = `${content.h1}, ${dest.state} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/destinations/${citySlug}/from/${originSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: dest.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [dest.heroImg] },
    };
}

export function DestinationOriginRoute({
    citySlug,
    originSlug,
}: {
    citySlug: string;
    originSlug: string;
}) {
    const dest = getDestination(citySlug);
    const origin = findOrigin(originSlug);
    if (!dest || !origin || !cityOriginExists(citySlug, originSlug)) notFound();

    const content = getCityOriginContent(dest, origin);
    const url = `${SITE_URL}/destinations/${citySlug}/from/${originSlug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TouristDestination",
                name: dest.name,
                description: content.answer,
                url,
                image: dest.heroImg,
                geo: { "@type": "GeoCoordinates", latitude: dest.coordinates.lat, longitude: dest.coordinates.lng },
                address: { "@type": "PostalAddress", addressRegion: dest.state, addressCountry: "IN" },
                touristType: `Travellers from ${origin.city}, ${origin.country}`,
            },
            {
                "@type": "Article",
                headline: content.h1,
                description: content.answer,
                image: dest.heroImg,
                datePublished: "2026-05-28",
                dateModified: "2026-05-28",
                author: { "@type": "Organization", name: "MyTripMyTravel Editorial Desk", url: SITE_URL },
                publisher: { "@type": "Organization", name: "MyTripMyTravel", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-full.png` } },
                mainEntityOfPage: url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.region, item: `${SITE_URL}/destinations/region/${dest.regionSlug}` },
                    { "@type": "ListItem", position: 4, name: dest.name, item: `${SITE_URL}/destinations/${dest.slug}` },
                    { "@type": "ListItem", position: 5, name: `From ${origin.city}`, item: url },
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
            <DestinationOriginView content={content} />
        </>
    );
}
