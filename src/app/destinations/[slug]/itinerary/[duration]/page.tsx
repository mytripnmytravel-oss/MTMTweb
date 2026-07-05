import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import {
    getAllItineraryParams,
    getItineraryContent,
    itineraryExists,
    parseDurationSlug,
} from "@/data/destinationItineraries";
import { getPackagesForDestination, packageSlug } from "@/data/tours";
import { ItineraryView } from "@/components/destinations/DestinationItineraryView";

export function generateStaticParams() {
    return getAllItineraryParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; duration: string }>;
}): Promise<Metadata> {
    const { slug, duration } = await params;
    const dest = getDestination(slug);
    const d = parseDurationSlug(duration);
    if (!dest || !d || !itineraryExists(slug, d)) {
        return { title: "Not Found | MyTripMyTravel" };
    }
    const content = getItineraryContent(dest, d);
    const title = `${content.h1}, ${dest.state} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/destinations/${dest.slug}/itinerary/${duration}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: dest.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [dest.heroImg] },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string; duration: string }>;
}) {
    const { slug, duration } = await params;
    const dest = getDestination(slug);
    const d = parseDurationSlug(duration);
    if (!dest || !d || !itineraryExists(slug, d)) notFound();

    const content = getItineraryContent(dest, d);
    const cityTours = getPackagesForDestination(dest).map((p) => ({
        slug: packageSlug(p),
        title: p.title,
        duration: p.duration,
        price: p.price,
        theme: p.theme,
        img: p.img,
    }));
    const url = `${SITE_URL}/destinations/${dest.slug}/itinerary/${duration}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TouristTrip",
                name: content.h1,
                description: content.answer,
                touristType: `${d}-day itinerary`,
                url,
                image: dest.heroImg,
                itinerary: {
                    "@type": "ItemList",
                    numberOfItems: content.days.length,
                    itemListElement: content.days.map((day) => ({
                        "@type": "ListItem",
                        position: day.day,
                        name: `Day ${day.day}: ${day.title}`,
                        description: day.paragraphs.join(" "),
                    })),
                },
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.name, item: `${SITE_URL}/destinations/${dest.slug}` },
                    { "@type": "ListItem", position: 4, name: "Itineraries", item: `${SITE_URL}/destinations/${dest.slug}/itinerary` },
                    { "@type": "ListItem", position: 5, name: `${d}-Day`, item: url },
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
            <ItineraryView dest={dest} content={content} tours={cityTours} />
        </>
    );
}
