import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getProgramme } from "@/data/wellness";
import {
    getAllWellnessOriginParams,
    getWellnessOriginContent,
    wellnessOriginExists,
    findOrigin,
} from "@/data/wellnessOrigins";
import type { WellnessFacetContent } from "@/data/wellnessFacets";
import WellnessFacetView from "@/components/wellness/WellnessFacetView";

export function getWellnessOriginStaticParams() {
    return getAllWellnessOriginParams();
}

export async function wellnessOriginMetadata(
    programmeSlug: string,
    originSlug: string
): Promise<Metadata> {
    const programme = getProgramme(programmeSlug);
    const origin = findOrigin(originSlug);
    if (!programme || !origin) return { title: "Not Found | MyTripMyTravel" };
    const content = getWellnessOriginContent(programme, origin);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/wellness/${programmeSlug}/from/${originSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: programme.heroImg }] },
    };
}

export function WellnessOriginRoute({
    programmeSlug,
    originSlug,
}: {
    programmeSlug: string;
    originSlug: string;
}) {
    const programme = getProgramme(programmeSlug);
    const origin = findOrigin(originSlug);
    if (!programme || !origin || !wellnessOriginExists(programmeSlug, originSlug)) notFound();

    const content = getWellnessOriginContent(programme, origin);
    const url = `${SITE_URL}/wellness/${programmeSlug}/from/${originSlug}`;

    // Adapt WellnessOriginContent → WellnessFacetContent for the shared view.
    const adapted: WellnessFacetContent = {
        h1: content.h1,
        answer: content.answer,
        intro: content.intro,
        points: content.facets.map((f) => ({ label: f.heading, detail: f.body })),
        faqs: content.faqs,
        crossLinks: content.crossLinks,
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: `${programme.name}, travellers from ${origin.city}`,
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
                    { "@type": "ListItem", position: 4, name: `From ${origin.city}`, item: url },
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
                breadcrumbSegment={`From ${origin.city}`}
                siblingsTitle="Other origins"
                siblings={[]}
            />
        </>
    );
}
