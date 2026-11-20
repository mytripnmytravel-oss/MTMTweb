import type { Metadata } from "next";
import { focusRobotsRegion } from "@/lib/seoFocus";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import {
    resolveRegionVariant,
    getRegionVariantParams,
    regionVariantHref,
    packageSlug,
    ORIGINS,
} from "@/data/regionVariants";
import RegionVariantView from "@/components/tours/RegionVariantView";
import { variantLinkGroups } from "@/lib/variantLinks";
import { metaDescription, pageTitle } from "@/lib/meta";

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
    const title = pageTitle(`${content.h1}`);
    const description = metaDescription(content.answer);
    const url = `${SITE_URL}${regionVariantHref(regionSlug, dimension, value)}`;
    return {
        ...focusRobotsRegion(regionSlug),
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "website" },
    };
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
    // Filtered from the region's own built param list, so every facet link
    // resolves to a page the static export produced.
    const linkGroups = variantLinkGroups(
        getRegionVariantParams(regionSlug),
        dimension,
        value,
        (d, v) => regionVariantHref(regionSlug, d, v),
        (slug) => ORIGINS.find((o) => o.slug === slug)?.city ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    );

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
            <RegionVariantView content={content} linkGroups={linkGroups} />
        </>
    );
}
