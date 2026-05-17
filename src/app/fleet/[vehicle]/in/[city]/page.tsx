import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getVehicle, fleet } from "@/data/fleet";
import { getDestination } from "@/data/destinations";
import {
    getFleetCityContent,
    getAllFleetCityParams,
    fleetCityExists,
    fleetCitiesForVehicle,
} from "@/data/fleetCities";
import FleetCityView from "@/components/fleet/FleetCityView";

export function generateStaticParams() {
    return getAllFleetCityParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ vehicle: string; city: string }>;
}): Promise<Metadata> {
    const { vehicle: vId, city } = await params;
    const v = getVehicle(vId);
    const dest = getDestination(city);
    if (!v || !dest || !fleetCityExists(vId, city)) {
        return { title: "Not Found | MyTripMyTravel" };
    }
    const title = `${v.name} Chauffeur Hire in ${dest.name}, ${dest.state} | MyTripMyTravel`;
    const content = getFleetCityContent(v, dest);
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/fleet/${v.id}/in/${dest.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: v.img }] },
        twitter: { card: "summary_large_image", title, description, images: [v.img] },
    };
}

export default async function FleetCityPage({
    params,
}: {
    params: Promise<{ vehicle: string; city: string }>;
}) {
    const { vehicle: vId, city } = await params;
    const v = getVehicle(vId);
    const dest = getDestination(city);
    if (!v || !dest || !fleetCityExists(vId, city)) notFound();

    const content = getFleetCityContent(v, dest);
    const url = `${SITE_URL}/fleet/${v.id}/in/${dest.slug}`;
    const otherCities = fleetCitiesForVehicle().filter((c) => c.slug !== dest.slug);
    const otherVehicles = fleet.filter((x) => x.id !== v.id).slice(0, 6);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: `${v.name} chauffeur hire`,
                name: `${v.name} Chauffeur Hire in ${dest.name}`,
                description: content.answer,
                url,
                areaServed: {
                    "@type": "City",
                    name: dest.name,
                    address: {
                        "@type": "PostalAddress",
                        addressRegion: dest.state,
                        addressCountry: "IN",
                    },
                },
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Elite Fleet", item: `${SITE_URL}/fleet` },
                    { "@type": "ListItem", position: 3, name: v.name, item: `${SITE_URL}/fleet/${v.id}` },
                    { "@type": "ListItem", position: 4, name: `in ${dest.name}`, item: url },
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
            <FleetCityView
                vehicle={v}
                dest={dest}
                content={content}
                otherCities={otherCities}
                otherVehicles={otherVehicles}
            />
        </>
    );
}
