import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import { getCityItineraryIndexParams, ITINERARY_DURATIONS } from "@/data/destinationItineraries";
import { ItineraryIndexView } from "@/components/destinations/DestinationItineraryView";

export function generateStaticParams() {
    return getCityItineraryIndexParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const dest = getDestination(slug);
    if (!dest) return { title: "Not Found | MyTripMyTravel" };
    const title = `${dest.name} Itineraries, by length | MyTripMyTravel`;
    const description = `Plan a ${dest.name}, ${dest.state} trip, itinerary architectures by length (3, 5, 7, 10, 14 days) from MyTripMyTravel.`;
    const url = `${SITE_URL}/destinations/${dest.slug}/itinerary`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "website", images: [{ url: dest.heroImg }] },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const dest = getDestination(slug);
    if (!dest) notFound();

    const url = `${SITE_URL}/destinations/${dest.slug}/itinerary`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: `${dest.name} Itineraries`, url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.name, item: `${SITE_URL}/destinations/${dest.slug}` },
                    { "@type": "ListItem", position: 4, name: "Itineraries", item: url },
                ],
            },
            {
                "@type": "ItemList",
                itemListElement: ITINERARY_DURATIONS.map((n, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: `${n}-Day ${dest.name} Itinerary`,
                    url: `${url}/${n}-day`,
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ItineraryIndexView dest={dest} />
        </>
    );
}
