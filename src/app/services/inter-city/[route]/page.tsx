import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import {
    getRoute,
    getAllRouteParams,
    getRouteContent,
    routeExists,
} from "@/data/transferRoutes";
import TransferRouteView from "@/components/services/TransferRouteView";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ route: string }>;
}): Promise<Metadata> {
    const { route: slug } = await params;
    const route = getRoute(slug);
    if (!route || !routeExists(slug)) return { title: "Not Found | MyTripMyTravel" };
    const origin = getDestination(route.originSlug);
    const destination = getDestination(route.destinationSlug);
    if (!origin || !destination) return { title: "Not Found | MyTripMyTravel" };
    const content = getRouteContent(route, origin, destination);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/services/inter-city/${slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: destination.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [destination.heroImg] },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ route: string }>;
}) {
    const { route: slug } = await params;
    const route = getRoute(slug);
    if (!route || !routeExists(slug)) notFound();
    const origin = getDestination(route.originSlug);
    const destination = getDestination(route.destinationSlug);
    if (!origin || !destination) notFound();

    const content = getRouteContent(route, origin, destination);
    const url = `${SITE_URL}/services/inter-city/${slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: "Inter-city chauffeur transfer",
                name: content.h1,
                description: content.answer,
                url,
                areaServed: [
                    { "@type": "City", name: origin.name, address: { "@type": "PostalAddress", addressRegion: origin.state, addressCountry: "IN" } },
                    { "@type": "City", name: destination.name, address: { "@type": "PostalAddress", addressRegion: destination.state, addressCountry: "IN" } },
                ],
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                    { "@type": "ListItem", position: 3, name: "Inter-City Transfers", item: `${SITE_URL}/services/inter-city` },
                    { "@type": "ListItem", position: 4, name: `${origin.name} → ${destination.name}`, item: url },
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
            <TransferRouteView route={route} origin={origin} destination={destination} content={content} />
        </>
    );
}
