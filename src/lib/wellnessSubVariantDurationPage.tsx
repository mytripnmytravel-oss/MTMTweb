import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getVariant } from "@/data/wellness";
import {
    getSubVariantDurationContent,
    subVariantDurationExists,
    parseSubVariantDurationSlug,
} from "@/data/wellnessSubVariantDurations";
import type { WellnessFacetContent } from "@/data/wellnessFacets";
import WellnessFacetView from "@/components/wellness/WellnessFacetView";

export async function subVariantDurationMetadata(
    programmeSlug: string,
    variantSlug: string,
    durationSlug: string
): Promise<Metadata> {
    const found = getVariant(programmeSlug, variantSlug);
    const duration = parseSubVariantDurationSlug(durationSlug);
    if (!found || !duration) return { title: "Not Found | MyTripMyTravel" };
    const content = getSubVariantDurationContent(found.programme, found.variant, duration);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}/duration/${durationSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: found.programme.heroImg }] },
    };
}

export function SubVariantDurationRoute({
    programmeSlug,
    variantSlug,
    durationSlug,
}: {
    programmeSlug: string;
    variantSlug: string;
    durationSlug: string;
}) {
    const found = getVariant(programmeSlug, variantSlug);
    const duration = parseSubVariantDurationSlug(durationSlug);
    if (!found || !duration || !subVariantDurationExists(programmeSlug, variantSlug, durationSlug)) notFound();

    const { programme, variant } = found;
    const content = getSubVariantDurationContent(programme, variant, duration);
    const url = `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}/duration/${durationSlug}`;

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
                serviceType: `${duration}-Day ${variant.name}`,
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
                    { "@type": "ListItem", position: 5, name: `${duration}-Day`, item: url },
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
                breadcrumbSegment={`${variant.name} · ${duration}-Day`}
                siblingsTitle="Other durations"
                siblings={[]}
            />
        </>
    );
}
