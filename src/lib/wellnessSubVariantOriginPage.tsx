import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getVariant } from "@/data/wellness";
import {
    getSubVariantOriginContent,
    subVariantOriginExists,
    findOrigin,
} from "@/data/wellnessSubVariantOrigins";
import type { WellnessFacetContent } from "@/data/wellnessFacets";
import WellnessFacetView from "@/components/wellness/WellnessFacetView";

export async function subVariantOriginMetadata(
    programmeSlug: string,
    variantSlug: string,
    originSlug: string
): Promise<Metadata> {
    const found = getVariant(programmeSlug, variantSlug);
    const origin = findOrigin(originSlug);
    if (!found || !origin) return { title: "Not Found | MyTripMyTravel" };
    const content = getSubVariantOriginContent(found.programme, found.variant, origin);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}/from/${originSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: found.programme.heroImg }] },
    };
}

export function SubVariantOriginRoute({
    programmeSlug,
    variantSlug,
    originSlug,
}: {
    programmeSlug: string;
    variantSlug: string;
    originSlug: string;
}) {
    const found = getVariant(programmeSlug, variantSlug);
    const origin = findOrigin(originSlug);
    if (!found || !origin || !subVariantOriginExists(programmeSlug, variantSlug, originSlug)) notFound();

    const { programme, variant } = found;
    const content = getSubVariantOriginContent(programme, variant, origin);
    const url = `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}/from/${originSlug}`;

    const adapted: WellnessFacetContent = {
        h1: content.h1,
        answer: content.answer,
        intro: content.intro,
        points: content.points,
        faqs: content.faqs,
        crossLinks: content.crossLinks,
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: `${variant.name} from ${origin.city}`,
                name: content.h1,
                description: content.answer,
                url,
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Wellness", item: `${SITE_URL}/wellness` },
                    { "@type": "ListItem", position: 3, name: programme.name, item: `${SITE_URL}/wellness/${programmeSlug}` },
                    { "@type": "ListItem", position: 4, name: variant.name, item: `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}` },
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
            <WellnessFacetView
                programme={programme}
                content={adapted}
                breadcrumbSegment={`${variant.name} · ${origin.city}`}
                siblingsTitle="Other origins"
                siblings={[]}
            />
        </>
    );
}
