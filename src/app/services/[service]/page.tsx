import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import {
    getServiceItem,
    getAllServiceItemSlugs,
    SERVICE_ITEMS,
} from "@/data/serviceItems";
import ServiceItemView from "@/components/services/ServiceItemView";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ service: string }>;
}): Promise<Metadata> {
    const { service: slug } = await params;
    const item = getServiceItem(slug);
    if (!item) return { title: "Not Found | MyTripMyTravel" };
    const title = `${item.name} | MyTripMyTravel`;
    const description = item.answer.slice(0, 300);
    const url = `${SITE_URL}/services/${slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article" },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ service: string }>;
}) {
    const { service: slug } = await params;
    const item = getServiceItem(slug);
    if (!item) notFound();
    const siblings = SERVICE_ITEMS.filter((s) => s.slug !== item.slug);
    const url = `${SITE_URL}/services/${slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: item.category,
                name: item.name,
                description: item.answer,
                url,
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                    { "@type": "ListItem", position: 3, name: item.name, item: url },
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
            <ServiceItemView item={item} siblings={siblings} />
        </>
    );
}
