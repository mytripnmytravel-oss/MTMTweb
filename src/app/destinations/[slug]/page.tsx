import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    getDestination,
    getAllDestinationSlugs,
    getRelatedCities,
} from "@/data/destinations";
import { getMonumentsByCity } from "@/data/monuments";
import DestinationCityView from "@/components/destinations/DestinationCityView";

const SITE = "https://www.mytripmytravel.com";

export function generateStaticParams() {
    return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const dest = getDestination(slug);
    if (!dest) {
        return { title: "Destination Not Found | MyTripMyTravel" };
    }
    const title = `${dest.name}, ${dest.state} — Luxury Travel Guide | MyTripMyTravel`;
    const description = dest.answer.slice(0, 300);
    const url = `${SITE}/destinations/${dest.slug}`;
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

export default async function DestinationCityPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const dest = getDestination(slug);
    if (!dest) notFound();

    const related = getRelatedCities(slug);
    const cityMonuments = getMonumentsByCity(slug);
    const url = `${SITE}/destinations/${dest.slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TouristDestination",
                name: dest.name,
                description: dest.answer,
                url,
                image: dest.heroImg,
                touristType: "Luxury inbound travellers",
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
                includesAttraction: dest.thingsToDo.map((t) => ({
                    "@type": "TouristAttraction",
                    name: t.name,
                    description: t.blurb,
                })),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.region, item: `${SITE}/destinations/region/${dest.regionSlug}` },
                    { "@type": "ListItem", position: 4, name: dest.name, item: url },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: dest.faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DestinationCityView dest={dest} related={related} monuments={cityMonuments} />
        </>
    );
}
