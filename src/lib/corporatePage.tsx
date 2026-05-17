import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getCorporateCategory, getCorporateItem } from "@/data/corporate";
import { CorporateCategoryView, CorporateItemView } from "@/components/corporate/CorporateView";

export async function corporateCategoryMetadata(slug: string): Promise<Metadata> {
    const c = getCorporateCategory(slug);
    if (!c) return { title: "Not Found | MyTripMyTravel" };
    const title = `Corporate ${c.name} | MyTripMyTravel`;
    const url = `${SITE_URL}/corporate/${c.slug}`;
    return {
        title,
        description: c.blurb,
        alternates: { canonical: url },
        openGraph: { title, description: c.blurb, url, type: "website" },
    };
}

export function CorporateCategoryRoute({ slug }: { slug: string }) {
    const c = getCorporateCategory(slug);
    if (!c) notFound();
    const url = `${SITE_URL}/corporate/${c.slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: `Corporate ${c.name}`, url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Corporate", item: `${SITE_URL}/corporate` },
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
            <CorporateCategoryView category={c} />
        </>
    );
}

export async function corporateItemMetadata(
    categorySlug: string,
    itemSlug: string
): Promise<Metadata> {
    const resolved = getCorporateItem(categorySlug, itemSlug);
    if (!resolved) return { title: "Not Found | MyTripMyTravel" };
    const { item } = resolved;
    const title = `${item.name} | MyTripMyTravel`;
    const description = item.answer.slice(0, 300);
    const url = `${SITE_URL}/corporate/${categorySlug}/${itemSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article" },
    };
}

export function CorporateItemRoute({
    categorySlug,
    itemSlug,
}: {
    categorySlug: string;
    itemSlug: string;
}) {
    const resolved = getCorporateItem(categorySlug, itemSlug);
    if (!resolved) notFound();
    const { category, item } = resolved;
    const url = `${SITE_URL}/corporate/${category.slug}/${item.slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: "Corporate travel & events",
                name: item.name,
                description: item.answer,
                url,
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Corporate", item: `${SITE_URL}/corporate` },
                    { "@type": "ListItem", position: 3, name: category.segment, item: `${SITE_URL}/corporate/${category.slug}` },
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
            <CorporateItemView category={category} item={item} />
        </>
    );
}
