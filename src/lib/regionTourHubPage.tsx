import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getRegionalTourHubContent, type RegionTourHub } from "@/data/tourHubs";
import { packageSlug } from "@/data/tours";
import RegionalTourHubView from "@/components/tours/RegionalTourHubView";
import { metaDescription, pageTitle } from "@/lib/meta";

export async function regionalTourHubMetadata(
    slug: RegionTourHub["slug"]
): Promise<Metadata> {
    const content = getRegionalTourHubContent(slug);
    if (!content) return { title: "Not Found | MyTripMyTravel" };
    const title = pageTitle(`${content.h1}`);
    const description = metaDescription(content.answer);
    const url = `${SITE_URL}/tours/${slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "website", images: [{ url: content.hub.heroImg }] },
    };
}

export function RegionalTourHubRoute({ slug }: { slug: RegionTourHub["slug"] }) {
    const content = getRegionalTourHubContent(slug);
    if (!content) notFound();
    const url = `${SITE_URL}/tours/${slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: content.h1, description: content.answer, url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tours` },
                    { "@type": "ListItem", position: 3, name: content.hub.name, item: url },
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
            <RegionalTourHubView content={content} />
        </>
    );
}
