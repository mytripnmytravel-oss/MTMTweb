import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import { monuments } from "@/data/monuments";
import { parseMonthSlug } from "@/data/destinationMonths";
import {
    getAllMonumentMonthParams,
    getMonumentMonthContent,
    monumentMonthExists,
} from "@/data/monumentMonths";
import MonumentMonthView from "@/components/destinations/MonumentMonthView";

export function getMonumentMonthStaticParams() {
    return getAllMonumentMonthParams();
}

export async function monumentMonthMetadata(
    citySlug: string,
    monumentSlug: string,
    monthSlug: string
): Promise<Metadata> {
    const dest = getDestination(citySlug);
    const monument = monuments.find((m) => m.slug === monumentSlug && m.citySlug === citySlug);
    const month = parseMonthSlug(monthSlug);
    if (!dest || !monument || !month) return { title: "Not Found | MyTripMyTravel" };
    const content = getMonumentMonthContent(monument, dest, month);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/destinations/${citySlug}/monuments/${monumentSlug}/in/${monthSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: monument.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [monument.heroImg] },
    };
}

export function MonumentMonthRoute({
    citySlug,
    monumentSlug,
    monthSlug,
}: {
    citySlug: string;
    monumentSlug: string;
    monthSlug: string;
}) {
    const dest = getDestination(citySlug);
    const monument = monuments.find((m) => m.slug === monumentSlug && m.citySlug === citySlug);
    const month = parseMonthSlug(monthSlug);
    if (!dest || !monument || !month || !monumentMonthExists(citySlug, monumentSlug, monthSlug)) notFound();

    const content = getMonumentMonthContent(monument, dest, month);
    const url = `${SITE_URL}/destinations/${citySlug}/monuments/${monumentSlug}/in/${monthSlug}`;

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
                datePublished: "2026-05-31",
                dateModified: "2026-05-31",
                author: { "@type": "Organization", name: "MyTripMyTravel Editorial Desk", url: SITE_URL },
                publisher: { "@type": "Organization", name: "MyTripMyTravel", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-full.png` } },
                mainEntityOfPage: url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.name, item: `${SITE_URL}/destinations/${dest.slug}` },
                    { "@type": "ListItem", position: 4, name: monument.name, item: `${SITE_URL}/destinations/${dest.slug}/monuments/${monument.slug}` },
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
            <MonumentMonthView content={content} />
        </>
    );
}
