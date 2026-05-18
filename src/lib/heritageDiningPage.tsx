import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDiningCategory, getDiningItem } from "@/data/heritageDining";
import { DiningCategoryView, DiningItemView } from "@/components/heritagedining/HeritageDiningView";

export async function diningCategoryMetadata(slug: string): Promise<Metadata> {
    const c = getDiningCategory(slug);
    if (!c) return { title: "Not Found | MyTripMyTravel" };
    const title = `Heritage Dining — ${c.name} | MyTripMyTravel`;
    const url = `${SITE_URL}/heritage-dining/${c.slug}`;
    return { title, description: c.blurb, alternates: { canonical: url }, openGraph: { title, description: c.blurb, url, type: "website" } };
}

export function DiningCategoryRoute({ slug }: { slug: string }) {
    const c = getDiningCategory(slug);
    if (!c) notFound();
    const url = `${SITE_URL}/heritage-dining/${c.slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: `Heritage Dining — ${c.name}`, url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Heritage Dining", item: `${SITE_URL}/heritage-dining` },
                    { "@type": "ListItem", position: 3, name: c.segment, item: url },
                ],
            },
            {
                "@type": "ItemList",
                itemListElement: c.items.map((i, idx) => ({
                    "@type": "ListItem",
                    position: idx + 1,
                    name: i.name,
                    url: `${url}/${i.slug}`,
                })),
            },
        ],
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <DiningCategoryView category={c} />
        </>
    );
}

export async function diningItemMetadata(
    categorySlug: string,
    itemSlug: string
): Promise<Metadata> {
    const resolved = getDiningItem(categorySlug, itemSlug);
    if (!resolved) return { title: "Not Found | MyTripMyTravel" };
    const { item } = resolved;
    const title = `${item.name} | MyTripMyTravel`;
    const description = item.answer.slice(0, 300);
    const url = `${SITE_URL}/heritage-dining/${categorySlug}/${itemSlug}`;
    return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "article" } };
}

export function DiningItemRoute({
    categorySlug,
    itemSlug,
}: {
    categorySlug: string;
    itemSlug: string;
}) {
    const resolved = getDiningItem(categorySlug, itemSlug);
    if (!resolved) notFound();
    const { category, item } = resolved;
    const url = `${SITE_URL}/heritage-dining/${category.slug}/${item.slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: "Heritage dining experience",
                name: item.name,
                description: item.answer,
                url,
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Heritage Dining", item: `${SITE_URL}/heritage-dining` },
                    { "@type": "ListItem", position: 3, name: category.segment, item: `${SITE_URL}/heritage-dining/${category.slug}` },
                    { "@type": "ListItem", position: 4, name: item.name, item: url },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: item.faqs.map((f) => ({
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
            <DiningItemView category={category} item={item} />
        </>
    );
}
