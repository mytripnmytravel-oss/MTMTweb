import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import {
    getCorporateRoute,
    getCorporateRouteContent,
    getAllCorporateRouteParams,
    corporateRouteExists,
} from "@/data/corporateRoutes";
import CorporateRouteView from "@/components/corporate/CorporateRouteView";

export function generateStaticParams() {
    return getAllCorporateRouteParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ route: string }>;
}): Promise<Metadata> {
    const { route: slug } = await params;
    const route = getCorporateRoute(slug);
    if (!route || !corporateRouteExists(slug)) return { title: "Not Found | MyTripMyTravel" };
    const dest = getDestination(route.destinationSlug);
    if (!dest) return { title: "Not Found | MyTripMyTravel" };
    const content = getCorporateRouteContent(route, dest);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/corporate/${slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: dest.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [dest.heroImg] },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ route: string }>;
}) {
    const { route: slug } = await params;
    const route = getCorporateRoute(slug);
    if (!route || !corporateRouteExists(slug)) notFound();
    const dest = getDestination(route.destinationSlug);
    if (!dest) notFound();

    const content = getCorporateRouteContent(route, dest);
    const url = `${SITE_URL}/corporate/${slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: "Corporate offsite & MICE",
                name: content.h1,
                description: content.answer,
                url,
                areaServed: {
                    "@type": "City",
                    name: dest.name,
                    address: { "@type": "PostalAddress", addressRegion: dest.state, addressCountry: "IN" },
                },
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Corporate", item: `${SITE_URL}/corporate` },
                    { "@type": "ListItem", position: 3, name: `${route.originLabel} → ${dest.name}`, item: url },
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
            <CorporateRouteView route={route} destination={dest} content={content} />
        </>
    );
}
