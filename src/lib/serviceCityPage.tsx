import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import {
    getServiceCityContent,
    serviceCityExists,
    serviceCitiesResolved,
    SERVICE_LINES,
    type ServiceLine,
} from "@/data/services";
import ServiceCityView from "@/components/services/ServiceCityView";

function lineName(line: ServiceLine): string {
    return SERVICE_LINES.find((s) => s.slug === line)?.name ?? line;
}

export async function serviceCityMetadata(
    line: ServiceLine,
    citySlug: string
): Promise<Metadata> {
    const dest = getDestination(citySlug);
    if (!dest || !serviceCityExists(line, citySlug)) {
        return { title: "Not Found | MyTripMyTravel" };
    }
    const content = getServiceCityContent(line, dest);
    const title = `${content.h1}, ${dest.state} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/services/${line}/${dest.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: dest.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [dest.heroImg] },
    };
}

export function ServiceCityRoute({
    line,
    citySlug,
}: {
    line: ServiceLine;
    citySlug: string;
}) {
    const dest = getDestination(citySlug);
    if (!dest || !serviceCityExists(line, citySlug)) notFound();

    const content = getServiceCityContent(line, dest);
    const name = lineName(line);
    const url = `${SITE_URL}/services/${line}/${dest.slug}`;
    const otherCities = serviceCitiesResolved().filter((c) => c.slug !== dest.slug);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: name,
                name: content.h1,
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
                    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                    { "@type": "ListItem", position: 3, name, item: `${SITE_URL}/services` },
                    { "@type": "ListItem", position: 4, name: dest.name, item: url },
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
            <ServiceCityView
                lineName={name}
                lineSlug={line}
                dest={dest}
                content={content}
                otherCities={otherCities}
            />
        </>
    );
}
