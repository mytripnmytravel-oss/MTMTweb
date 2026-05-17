import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import {
    getVehicle,
    getAllVehicleIds,
    getRelatedVehicles,
    getVehicleContent,
} from "@/data/fleet";
import { fleetCitiesForVehicle } from "@/data/fleetCities";
import FleetDetailView from "@/components/fleet/FleetDetailView";

export function generateStaticParams() {
    return getAllVehicleIds().map((vehicle) => ({ vehicle }));
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ vehicle: string }>;
}): Promise<Metadata> {
    const { vehicle: id } = await params;
    const v = getVehicle(id);
    if (!v) return { title: "Vehicle Not Found | MyTripMyTravel" };
    const title = `${v.name} — Chauffeured ${v.type} Hire | MyTripMyTravel`;
    const description = `${v.description} Seats ${v.passengers}, ${v.luggage}. Chauffeured, GPS-tracked, ${v.priceRange}-band. Golden Triangle & all-India.`;
    const url = `${SITE_URL}/fleet/${v.id}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: v.img }] },
        twitter: { card: "summary_large_image", title, description, images: [v.img] },
    };
}

export default async function FleetVehiclePage({
    params,
}: {
    params: Promise<{ vehicle: string }>;
}) {
    const { vehicle: id } = await params;
    const v = getVehicle(id);
    if (!v) notFound();

    const content = getVehicleContent(v);
    const related = getRelatedVehicles(v);
    const url = `${SITE_URL}/fleet/${v.id}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["Product", "Car"],
                name: v.name,
                description: content.answer,
                image: v.img,
                url,
                category: `${v.category} ${v.type}`,
                vehicleSeatingCapacity: v.passengers,
                brand: { "@type": "Brand", name: "MyTripMyTravel Elite Fleet" },
                offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    url,
                    seller: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Elite Fleet", item: `${SITE_URL}/fleet` },
                    { "@type": "ListItem", position: 3, name: v.name, item: url },
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
            <FleetDetailView vehicle={v} content={content} related={related} cities={fleetCitiesForVehicle()} />
        </>
    );
}
