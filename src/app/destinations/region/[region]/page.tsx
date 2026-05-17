import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    getRegion,
    getDestinationsByRegion,
    regions,
} from "@/data/destinations";
import RegionView from "@/components/destinations/RegionView";

const SITE = "https://www.mytripmytravel.com";

export function generateStaticParams() {
    return regions.map((r) => ({ region: r.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ region: string }>;
}): Promise<Metadata> {
    const { region: regionSlug } = await params;
    const region = getRegion(regionSlug);
    if (!region) return { title: "Region Not Found | MyTripMyTravel" };
    const title = `${region.name} — Luxury Travel | MyTripMyTravel`;
    const url = `${SITE}/destinations/region/${region.slug}`;
    return {
        title,
        description: region.blurb,
        alternates: { canonical: url },
        openGraph: {
            title,
            description: region.blurb,
            url,
            type: "website",
            images: [{ url: region.heroImg }],
        },
    };
}

export default async function RegionPage({
    params,
}: {
    params: Promise<{ region: string }>;
}) {
    const { region: regionSlug } = await params;
    const region = getRegion(regionSlug);
    if (!region) notFound();

    const cities = getDestinationsByRegion(regionSlug);
    const url = `${SITE}/destinations/region/${region.slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                name: region.name,
                description: region.blurb,
                url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE}/destinations` },
                    { "@type": "ListItem", position: 3, name: region.name, item: url },
                ],
            },
            {
                "@type": "ItemList",
                itemListElement: cities.map((c, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: c.name,
                    url: `${SITE}/destinations/${c.slug}`,
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
            <RegionView region={region} cities={cities} />
        </>
    );
}
