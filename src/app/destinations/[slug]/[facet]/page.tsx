import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRelatedCities } from "@/data/destinations";
import { getAllFacetParams, resolveFacet } from "@/data/destinationFacets";
import DestinationFacetView from "@/components/destinations/DestinationFacetView";

const SITE = "https://www.mytripmytravel.com";

export function generateStaticParams() {
    return getAllFacetParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; facet: string }>;
}): Promise<Metadata> {
    const { slug, facet } = await params;
    const resolved = resolveFacet(slug, facet);
    if (!resolved) return { title: "Not Found | MyTripMyTravel" };
    const { dest, content } = resolved;
    const title = `${content.h1} — ${dest.state} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE}/destinations/${dest.slug}/${content.facet}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            images: [{ url: dest.heroImg }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [dest.heroImg],
        },
    };
}

export default async function FacetPage({
    params,
}: {
    params: Promise<{ slug: string; facet: string }>;
}) {
    const { slug, facet } = await params;
    const resolved = resolveFacet(slug, facet);
    if (!resolved) notFound();

    const { dest, content } = resolved;
    const related = getRelatedCities(slug);
    const url = `${SITE}/destinations/${dest.slug}/${content.facet}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                headline: content.h1,
                description: content.answer,
                about: `${dest.name}, ${dest.state}`,
                image: dest.heroImg,
                url,
                isPartOf: `${SITE}/destinations/${dest.slug}`,
                publisher: {
                    "@type": "Organization",
                    name: "MyTripMyTravel",
                    url: SITE,
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.region, item: `${SITE}/destinations/region/${dest.regionSlug}` },
                    { "@type": "ListItem", position: 4, name: dest.name, item: `${SITE}/destinations/${dest.slug}` },
                    { "@type": "ListItem", position: 5, name: content.label, item: url },
                ],
            },
            ...(content.faqs.length
                ? [
                      {
                          "@type": "FAQPage",
                          mainEntity: content.faqs.map((f) => ({
                              "@type": "Question",
                              name: f.q,
                              acceptedAnswer: { "@type": "Answer", text: f.a },
                          })),
                      },
                  ]
                : []),
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <DestinationFacetView dest={dest} content={content} related={related} />
        </>
    );
}
