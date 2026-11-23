import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import {
    resolveVariant,
    getAllVariantParams,
    variantHref,
    ORIGINS,
} from "@/data/tourVariants";
import { packageSlug } from "@/data/tours";
import TourVariantView from "@/components/tours/TourVariantView";
import { variantLinkGroups } from "@/lib/variantLinks";
import { metaDescription, pageTitle } from "@/lib/meta";

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

/**
 * Every built variant param, evaluated once per render worker. The internal
 * link graph is filtered from this exact list, so a facet link can never point
 * at a URL `generateStaticParams` did not build (a hard 404 under `output: "export"`).
 */
const ALL_VARIANTS = getAllVariantParams();

/** Pretty departure-city name for an origin slug ("abu-dhabi" -> "Abu Dhabi"). */
const originCity = (slug: string) =>
    ORIGINS.find((o) => o.slug === slug)?.city ?? titleCase(slug.replace(/-/g, " "));

export function generateStaticParams() {
    return getAllVariantParams();
}

export const dynamicParams = false;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ dimension: string; value: string }>;
}): Promise<Metadata> {
    const { dimension, value } = await params;
    const content = resolveVariant(dimension, value);
    if (!content) return { title: "Not Found | MyTripMyTravel" };
    const title = pageTitle(`${content.h1}`);
    const description = metaDescription(content.seoDesc);
    const url = `${SITE_URL}${variantHref(dimension, value)}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "website" },
    };
}

export default async function TourVariantPage({
    params,
}: {
    params: Promise<{ dimension: string; value: string }>;
}) {
    const { dimension, value } = await params;
    const content = resolveVariant(dimension, value);
    if (!content) notFound();

    const url = `${SITE_URL}${variantHref(dimension, value)}`;
    const linkGroups = variantLinkGroups(ALL_VARIANTS, dimension, value, variantHref, originCity);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: content.h1, description: content.answer, url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tours` },
                    { "@type": "ListItem", position: 3, name: "Golden Triangle", item: `${SITE_URL}/tours/golden-triangle` },
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
            <TourVariantView content={content} linkGroups={linkGroups} />
        </>
    );
}
