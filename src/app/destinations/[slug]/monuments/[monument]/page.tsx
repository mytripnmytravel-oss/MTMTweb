import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDestination } from "@/data/destinations";
import {
    getMonument,
    getMonumentsByCity,
    getAllMonumentParams,
} from "@/data/monuments";
import MonumentView from "@/components/destinations/MonumentView";

const SITE = "https://www.mytripmytravel.com";

export function generateStaticParams() {
    return getAllMonumentParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; monument: string }>;
}): Promise<Metadata> {
    const { slug, monument } = await params;
    const dest = getDestination(slug);
    const m = getMonument(slug, monument);
    if (!dest || !m) return { title: "Not Found | MyTripMyTravel" };
    const title = `${m.name}, ${dest.name} — Guide, History & Visitor Info | MyTripMyTravel`;
    const description = m.answer.slice(0, 300);
    const url = `${SITE}/destinations/${dest.slug}/monuments/${m.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: m.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [m.heroImg] },
    };
}

export default async function MonumentPage({
    params,
}: {
    params: Promise<{ slug: string; monument: string }>;
}) {
    const { slug, monument } = await params;
    const dest = getDestination(slug);
    const m = getMonument(slug, monument);
    if (!dest || !m) notFound();

    const siblings = getMonumentsByCity(slug).filter((s) => s.slug !== m.slug);
    const url = `${SITE}/destinations/${dest.slug}/monuments/${m.slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["TouristAttraction", "LandmarksOrHistoricalBuildings"],
                name: m.name,
                description: m.answer,
                image: m.heroImg,
                url,
                isAccessibleForFree: false,
                touristType: "Luxury inbound travellers",
                containedInPlace: {
                    "@type": "City",
                    name: dest.name,
                    address: {
                        "@type": "PostalAddress",
                        addressRegion: dest.state,
                        addressCountry: "IN",
                    },
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                    { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE}/destinations` },
                    { "@type": "ListItem", position: 3, name: dest.region, item: `${SITE}/destinations/region/${dest.regionSlug}` },
                    { "@type": "ListItem", position: 4, name: dest.name, item: `${SITE}/destinations/${dest.slug}` },
                    { "@type": "ListItem", position: 5, name: "Monuments", item: `${SITE}/destinations/${dest.slug}/monuments` },
                    { "@type": "ListItem", position: 6, name: m.name, item: url },
                ],
            },
            ...(m.faqs.length
                ? [
                      {
                          "@type": "FAQPage",
                          mainEntity: m.faqs.map((f) => ({
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <MonumentView dest={dest} monument={m} siblings={siblings} />
        </>
    );
}
