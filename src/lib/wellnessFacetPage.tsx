import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getProgramme } from "@/data/wellness";
import { getDestination } from "@/data/destinations";
import {
    getDurationContent,
    getLocationContent,
    parseDurationSlug,
    locationExists,
    PROGRAMME_LOCATIONS,
    WELLNESS_DURATIONS,
} from "@/data/wellnessFacets";
import {
    getMonthContent,
    parseMonthSlug,
    WELLNESS_MONTHS,
} from "@/data/wellnessMonths";
import WellnessFacetView from "@/components/wellness/WellnessFacetView";

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

// ---------- Duration ----------

export async function wellnessDurationMetadata(
    programmeSlug: string,
    durationSlug: string
): Promise<Metadata> {
    const programme = getProgramme(programmeSlug);
    const d = parseDurationSlug(durationSlug);
    if (!programme || !d) return { title: "Not Found | MyTripMyTravel" };
    const content = getDurationContent(programme, d);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/wellness/${programmeSlug}/duration/${durationSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: programme.heroImg }] },
    };
}

export function WellnessDurationRoute({
    programmeSlug,
    durationSlug,
}: {
    programmeSlug: string;
    durationSlug: string;
}) {
    const programme = getProgramme(programmeSlug);
    const d = parseDurationSlug(durationSlug);
    if (!programme || !d) notFound();

    const content = getDurationContent(programme, d);
    const url = `${SITE_URL}/wellness/${programmeSlug}/duration/${durationSlug}`;

    const siblings = WELLNESS_DURATIONS.filter((n) => n !== d).map((n) => ({
        label: `${n}-Day`,
        href: `/wellness/${programmeSlug}/duration/${n}-day`,
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: `${programme.name} programme — ${d} day`,
                name: content.h1,
                description: content.answer,
                url,
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Wellness", item: `${SITE_URL}/wellness` },
                    { "@type": "ListItem", position: 3, name: programme.name, item: `${SITE_URL}/wellness/${programmeSlug}` },
                    { "@type": "ListItem", position: 4, name: `${d}-Day`, item: url },
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
            <WellnessFacetView
                programme={programme}
                content={content}
                breadcrumbSegment={`${d}-Day`}
                siblingsTitle="Other durations"
                siblings={siblings}
            />
        </>
    );
}

// ---------- Location ----------

export async function wellnessLocationMetadata(
    programmeSlug: string,
    citySlug: string
): Promise<Metadata> {
    const programme = getProgramme(programmeSlug);
    const dest = getDestination(citySlug);
    if (!programme || !dest || !locationExists(programmeSlug, citySlug)) {
        return { title: "Not Found | MyTripMyTravel" };
    }
    const content = getLocationContent(programme, dest);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/wellness/${programmeSlug}/in/${citySlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: dest.heroImg }] },
    };
}

export function WellnessLocationRoute({
    programmeSlug,
    citySlug,
}: {
    programmeSlug: string;
    citySlug: string;
}) {
    const programme = getProgramme(programmeSlug);
    const dest = getDestination(citySlug);
    if (!programme || !dest || !locationExists(programmeSlug, citySlug)) notFound();

    const content = getLocationContent(programme, dest);
    const url = `${SITE_URL}/wellness/${programmeSlug}/in/${citySlug}`;

    const siblings = (PROGRAMME_LOCATIONS[programmeSlug] ?? [])
        .filter((s) => s !== citySlug)
        .map((s) => ({
            label: getDestination(s)?.name ?? s,
            href: `/wellness/${programmeSlug}/in/${s}`,
        }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: `${programme.name} in ${dest.name}`,
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
                    { "@type": "ListItem", position: 2, name: "Wellness", item: `${SITE_URL}/wellness` },
                    { "@type": "ListItem", position: 3, name: programme.name, item: `${SITE_URL}/wellness/${programmeSlug}` },
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
            <WellnessFacetView
                programme={programme}
                content={content}
                breadcrumbSegment={`in ${dest.name}`}
                siblingsTitle="Other locations"
                siblings={siblings}
            />
        </>
    );
}

// ---------- Month ----------

export async function wellnessMonthMetadata(
    programmeSlug: string,
    monthSlug: string
): Promise<Metadata> {
    const programme = getProgramme(programmeSlug);
    const month = parseMonthSlug(monthSlug);
    if (!programme || !month) return { title: "Not Found | MyTripMyTravel" };
    const content = getMonthContent(programme, month);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/wellness/${programmeSlug}/month/${monthSlug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: programme.heroImg }] },
    };
}

export function WellnessMonthRoute({
    programmeSlug,
    monthSlug,
}: {
    programmeSlug: string;
    monthSlug: string;
}) {
    const programme = getProgramme(programmeSlug);
    const month = parseMonthSlug(monthSlug);
    if (!programme || !month) notFound();

    const content = getMonthContent(programme, month);
    const url = `${SITE_URL}/wellness/${programmeSlug}/month/${monthSlug}`;
    const monthLabel = titleCase(month);

    const siblings = WELLNESS_MONTHS.filter((m) => m !== month).map((m) => ({
        label: titleCase(m),
        href: `/wellness/${programmeSlug}/month/${m}`,
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: `${programme.name} — ${monthLabel}`,
                name: content.h1,
                description: content.answer,
                url,
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Wellness", item: `${SITE_URL}/wellness` },
                    { "@type": "ListItem", position: 3, name: programme.name, item: `${SITE_URL}/wellness/${programmeSlug}` },
                    { "@type": "ListItem", position: 4, name: monthLabel, item: url },
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
            <WellnessFacetView
                programme={programme}
                content={content}
                breadcrumbSegment={monthLabel}
                siblingsTitle="Other months"
                siblings={siblings}
            />
        </>
    );
}
