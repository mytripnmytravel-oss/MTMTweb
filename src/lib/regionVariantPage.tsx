import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import {
    resolveRegionVariant,
    getRegionVariantParams,
    regionVariantHref,
    regionThemeLinks,
    regionDurationLinks,
    regionMonthLinks,
    regionOriginLinks,
    regionComboLinks,
    regionThemeFromLinks,
    packageSlug,
} from "@/data/regionVariants";
import RegionVariantView from "@/components/tours/RegionVariantView";

export function getRegionVariantStaticParams(regionSlug: string) {
    return getRegionVariantParams(regionSlug);
}

export async function regionVariantMetadata(
    regionSlug: string,
    dimension: string,
    value: string
): Promise<Metadata> {
    const content = resolveRegionVariant(regionSlug, dimension, value);
    if (!content) return { title: "Not Found | MyTripMyTravel" };
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}${regionVariantHref(regionSlug, dimension, value)}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "website" },
    };
}

function siblingsFor(regionSlug: string, dimension: string): { label: string; href: string }[] {
    if (dimension === "by-theme") return regionThemeLinks(regionSlug);
    if (dimension === "by-duration") return regionDurationLinks(regionSlug);
    if (dimension === "from-origin") return regionOriginLinks(regionSlug);
    if (dimension === "combo") return regionComboLinks(regionSlug);
    if (dimension === "theme-from") return regionThemeFromLinks(regionSlug);
    return regionMonthLinks(regionSlug);
}

export function RegionVariantRoute({
    regionSlug,
    dimension,
    value,
}: {
    regionSlug: string;
    dimension: string;
    value: string;
}) {
    const content = resolveRegionVariant(regionSlug, dimension, value);
    if (!content) notFound();

    const url = `${SITE_URL}${regionVariantHref(regionSlug, dimension, value)}`;
    const siblings = siblingsFor(regionSlug, dimension);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: content.h1, description: content.answer, url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tours` },
                    { "@type": "ListItem", position: 3, name: content.regionName, item: `${SITE_URL}/tours/${regionSlug}` },
                    { "@type": "ListItem", position: 4, name: content.label, item: url },
                ],
            },
            {
                "@type": "ItemList",
                itemListElement: content.packages.map((p, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: p.title,
                    url: `${SITE_URL}/tours/${packageSlug(p)}`,
                })),
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
            <RegionVariantView content={content} siblings={siblings} />
        </>
    );
}
