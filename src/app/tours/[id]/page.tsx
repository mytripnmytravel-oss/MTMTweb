import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import {
    getPackageByIdOrSlug,
    getAllPackageSlugs,
    getRelatedPackages,
    packageSlug,
} from "@/data/tours";
import TourDetailView from "@/components/tours/TourDetailView";

export function generateStaticParams() {
    return getAllPackageSlugs().map((id) => ({ id }));
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const tour = getPackageByIdOrSlug(id);
    if (!tour) return { title: "Tour Not Found | MyTripMyTravel" };
    const slug = packageSlug(tour);
    const title = `${tour.title} — ${tour.duration} ${tour.theme} Tour | MyTripMyTravel`;
    const description = `${tour.highlight} ${tour.duration}, ${tour.location}. From ${tour.price}. Private, chauffeured, escorted by MyTripMyTravel.`;
    // Canonical always points at the slug URL, even when reached by legacy numeric id.
    const url = `${SITE_URL}/tours/${slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: tour.img }] },
        twitter: { card: "summary_large_image", title, description, images: [tour.img] },
    };
}

export default async function TourPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const tour = getPackageByIdOrSlug(id);
    if (!tour) notFound();

    const slug = packageSlug(tour);
    const related = getRelatedPackages(tour);
    const url = `${SITE_URL}/tours/${slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TouristTrip",
                name: tour.title,
                description: tour.highlight,
                url,
                image: tour.img,
                touristType: tour.theme,
                itinerary: {
                    "@type": "ItemList",
                    numberOfItems: tour.itinerary.length,
                    itemListElement: tour.itinerary.map((d) => ({
                        "@type": "ListItem",
                        position: d.day,
                        name: `Day ${d.day}`,
                        description: d.plan,
                    })),
                },
                offers: {
                    "@type": "Offer",
                    price: tour.price.replace(/[^0-9]/g, ""),
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    url,
                },
                provider: {
                    "@type": "TravelAgency",
                    name: "MyTripMyTravel",
                    url: SITE_URL,
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tours` },
                    { "@type": "ListItem", position: 3, name: tour.title, item: url },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <TourDetailView tour={tour} related={related} />
        </>
    );
}
