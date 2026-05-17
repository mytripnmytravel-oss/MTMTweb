import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDestination } from "@/data/destinations";
import {
    getMonumentsByCity,
    citiesWithMonuments,
    cityHasMonuments,
} from "@/data/monuments";
import MonumentsIndexView from "@/components/destinations/MonumentsIndexView";

const SITE = "https://www.mytripmytravel.com";

export function generateStaticParams() {
    return citiesWithMonuments().map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const dest = getDestination(slug);
    if (!dest || !cityHasMonuments(slug)) {
        return { title: "Not Found | MyTripMyTravel" };
    }
    const title = `Monuments of ${dest.name}, ${dest.state} | MyTripMyTravel`;
    const description = `The definitive monument briefs for ${dest.name} — history, highlights, visitor protocol, and escorted access by MyTripMyTravel.`;
    const url = `${SITE}/destinations/${dest.slug}/monuments`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "website", images: [{ url: dest.heroImg }] },
    };
}

export default async function MonumentsIndexPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const dest = getDestination(slug);
    if (!dest || !cityHasMonuments(slug)) notFound();

    const list = getMonumentsByCity(slug);
    const url = `${SITE}/destinations/${dest.slug}/monuments`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                name: `Monuments of ${dest.name}`,
                url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.name, item: `${SITE}/destinations/${dest.slug}` },
                    { "@type": "ListItem", position: 4, name: "Monuments", item: url },
                ],
            },
            {
                "@type": "ItemList",
                itemListElement: list.map((m, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: m.name,
                    url: `${SITE}/destinations/${dest.slug}/monuments/${m.slug}`,
                })),
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <MonumentsIndexView dest={dest} monuments={list} />
        </>
    );
}
