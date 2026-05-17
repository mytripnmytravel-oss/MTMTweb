import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import {
    resolveVariant,
    getAllVariantParams,
    variantHref,
    GT_THEMES,
    GT_DURATIONS,
    MONTHS,
    ORIGINS,
} from "@/data/tourVariants";
import { packageSlug, slugify } from "@/data/tours";
import TourVariantView from "@/components/tours/TourVariantView";

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

export function generateStaticParams() {
    return getAllVariantParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ dimension: string; value: string }>;
}): Promise<Metadata> {
    const { dimension, value } = await params;
    const content = resolveVariant(dimension, value);
    if (!content) return { title: "Not Found | MyTripMyTravel" };
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}${variantHref(dimension, value)}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "website" },
    };
}

function siblingsFor(dimension: string): { label: string; href: string }[] {
    if (dimension === "by-theme") {
        return GT_THEMES.map((t) => ({ label: t, href: variantHref("by-theme", slugify(t)) }));
    }
    if (dimension === "by-duration") {
        return GT_DURATIONS.map((d) => ({ label: d.replace("-day", "-Day"), href: variantHref("by-duration", d) }));
    }
    if (dimension === "from-origin") {
        return ORIGINS.map((o) => ({ label: o.city, href: variantHref("from-origin", o.slug) }));
    }
    return MONTHS.map((m) => ({ label: titleCase(m), href: variantHref("in-month", m) }));
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
            <TourVariantView content={content} siblings={siblingsFor(dimension)} />
        </>
    );
}
