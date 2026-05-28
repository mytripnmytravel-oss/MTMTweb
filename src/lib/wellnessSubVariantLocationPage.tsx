import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getProgramme, getVariant } from "@/data/wellness";
import { getDestination } from "@/data/destinations";
import {
    getSubVariantLocationContent,
    subVariantLocationExists,
} from "@/data/wellnessSubVariantLocations";
import { PROGRAMME_LOCATIONS } from "@/data/wellnessFacets";
import type { WellnessFacetContent } from "@/data/wellnessFacets";
import WellnessFacetView from "@/components/wellness/WellnessFacetView";

export async function subVariantLocationMetadata(
    programmeSlug: string,
    variantSlug: string,
    locationSlug: string
): Promise<Metadata> {
    const found = getVariant(programmeSlug, variantSlug);
    const dest = getDestination(locationSlug);
    if (!found || !dest) return { title: "Not Found | MyTripMyTravel" };
    const { programme, variant } = found;
    const content = getSubVariantLocationContent(programme, variant, dest);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}/in/${locationSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: dest.heroImg }] },
    };
}

export function SubVariantLocationRoute({
    programmeSlug,
    variantSlug,
    locationSlug,
}: {
    programmeSlug: string;
    variantSlug: string;
    locationSlug: string;
}) {
    const found = getVariant(programmeSlug, variantSlug);
    const dest = getDestination(locationSlug);
    if (!found || !dest || !subVariantLocationExists(programmeSlug, variantSlug, locationSlug)) notFound();

    const { programme, variant } = found;
    const content = getSubVariantLocationContent(programme, variant, dest);
    const url = `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}/in/${locationSlug}`;

    const adapted: WellnessFacetContent = {
        h1: content.h1,
        answer: content.answer,
        intro: content.intro,
        points: content.points,
        faqs: content.faqs,
        crossLinks: content.crossLinks,
    };

    const otherLocs = (PROGRAMME_LOCATIONS[programmeSlug] ?? [])
        .filter((s) => s !== locationSlug)
        .map((s) => ({
            label: getDestination(s)?.name ?? s,
            href: `/wellness/${programmeSlug}/${variantSlug}/in/${s}`,
        }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: `${variant.name} in ${dest.name}`,
                name: content.h1,
                description: content.answer,
                url,
                areaServed: { "@type": "City", name: dest.name, address: { "@type": "PostalAddress", addressRegion: dest.state, addressCountry: "IN" } },
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Wellness", item: `${SITE_URL}/wellness` },
                    { "@type": "ListItem", position: 3, name: programme.name, item: `${SITE_URL}/wellness/${programmeSlug}` },
                    { "@type": "ListItem", position: 4, name: variant.name, item: `${SITE_URL}/wellness/${programmeSlug}/${variantSlug}` },
                    { "@type": "ListItem", position: 5, name: dest.name, item: url },
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
                breadcrumbSegment={`${variant.name} in ${dest.name}`}
                siblingsTitle="Other locations for this programme"
                siblings={otherLocs}
            />
        </>
    );
}
