import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getVariant } from "@/data/wellness";
import { parseMonthSlug } from "@/data/wellnessMonths";
import {
    getSubVariantMonthContent,
    subVariantMonthExists,
} from "@/data/wellnessSubVariantMonths";
import type { WellnessFacetContent } from "@/data/wellnessFacets";
import WellnessFacetView from "@/components/wellness/WellnessFacetView";

export async function subVariantMonthMetadata(
    programmeSlug: string,
    variantSlug: string,
    monthSlug: string
): Promise<Metadata> {
    const found = getVariant(programmeSlug, variantSlug);
    const month = parseMonthSlug(monthSlug);
    if (!found || !month) return { title: "Not Found | MyTripMyTravel" };
    const content = getSubVariantMonthContent(found.programme, found.variant, month);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}/month/${monthSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: found.programme.heroImg }] },
    };
}

export function SubVariantMonthRoute({
    programmeSlug,
    variantSlug,
    monthSlug,
}: {
    programmeSlug: string;
    variantSlug: string;
    monthSlug: string;
}) {
    const found = getVariant(programmeSlug, variantSlug);
    const month = parseMonthSlug(monthSlug);
    if (!found || !month || !subVariantMonthExists(programmeSlug, variantSlug, monthSlug)) notFound();

    const { programme, variant } = found;
    const content = getSubVariantMonthContent(programme, variant, month);
    const url = `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}/month/${monthSlug}`;

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
                serviceType: `${variant.name} in ${content.monthLabel}`,
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
            <WellnessFacetView
                programme={programme}
                content={adapted}
                breadcrumbSegment={`${variant.name} · ${content.monthLabel}`}
                siblingsTitle="Other months"
                siblings={[]}
            />
        </>
    );
}
