import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import { monuments } from "@/data/monuments";
import {
    getAllMonumentOriginParams,
    getMonumentOriginContent,
    monumentOriginExists,
    findOrigin,
} from "@/data/monumentOrigins";
import MonumentOriginView from "@/components/destinations/MonumentOriginView";

export function getMonumentOriginStaticParams() {
    return getAllMonumentOriginParams();
}

export async function monumentOriginMetadata(
    citySlug: string,
    monumentSlug: string,
    originSlug: string
): Promise<Metadata> {
    const dest = getDestination(citySlug);
    const monument = monuments.find((m) => m.slug === monumentSlug && m.citySlug === citySlug);
    const origin = findOrigin(originSlug);
    if (!dest || !monument || !origin) return { title: "Not Found | MyTripMyTravel" };
    const content = getMonumentOriginContent(monument, dest, origin);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/destinations/${citySlug}/monuments/${monumentSlug}/from/${originSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: monument.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [monument.heroImg] },
    };
}

export function MonumentOriginRoute({
    citySlug,
    monumentSlug,
    originSlug,
}: {
    citySlug: string;
    monumentSlug: string;
    originSlug: string;
}) {
    const dest = getDestination(citySlug);
    const monument = monuments.find((m) => m.slug === monumentSlug && m.citySlug === citySlug);
    const origin = findOrigin(originSlug);
    if (!dest || !monument || !origin || !monumentOriginExists(citySlug, monumentSlug, originSlug)) notFound();

    const content = getMonumentOriginContent(monument, dest, origin);
    const url = `${SITE_URL}/destinations/${citySlug}/monuments/${monumentSlug}/from/${originSlug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LandmarksOrHistoricalBuildings",
                name: monument.name,
                description: content.answer,
                url,
                image: monument.heroImg,
                address: { "@type": "PostalAddress", addressLocality: dest.name, addressRegion: dest.state, addressCountry: "IN" },
            },
            {
                "@type": "Article",
                headline: content.h1,
                description: content.answer,
                image: monument.heroImg,
                datePublished: "2026-05-28",
                dateModified: "2026-05-28",
                author: { "@type": "Organization", name: "MyTripMyTravel Editorial Desk", url: SITE_URL },
                publisher: { "@type": "Organization", name: "MyTripMyTravel", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` } },
                mainEntityOfPage: url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.name, item: `${SITE_URL}/destinations/${dest.slug}` },
                    { "@type": "ListItem", position: 4, name: monument.name, item: `${SITE_URL}/destinations/${dest.slug}/monuments/${monument.slug}` },
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
            <MonumentOriginView content={content} />
        </>
    );
}
