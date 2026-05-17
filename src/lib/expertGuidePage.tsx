import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getDestination } from "@/data/destinations";
import {
    GUIDE_LANGUAGES,
    getGuideLanguage,
    getGuideContent,
    guideExists,
} from "@/data/expertGuides";
import { GuideCityView, GuideDetailView } from "@/components/expertguides/ExpertGuideView";

export async function guideCityMetadata(citySlug: string): Promise<Metadata> {
    const dest = getDestination(citySlug);
    if (!dest) return { title: "Not Found | MyTripMyTravel" };
    const title = `Expert Guides in ${dest.name}, ${dest.state} | MyTripMyTravel`;
    const description = `Vetted, licensed multilingual heritage guides in ${dest.name} — guiding directly in English, Hindi, French, German, Spanish, Italian, and Japanese.`;
    const url = `${SITE_URL}/expert-guides/${dest.slug}`;
    return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "website" } };
}

export function GuideCityRoute({ citySlug }: { citySlug: string }) {
    const dest = getDestination(citySlug);
    if (!dest) notFound();
    const url = `${SITE_URL}/expert-guides/${dest.slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: `Expert Guides in ${dest.name}`, url },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Expert Guides", item: `${SITE_URL}/expert-guides` },
                    { "@type": "ListItem", position: 3, name: dest.name, item: url },
                ],
            },
        ],
    };
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <GuideCityView dest={dest} languages={GUIDE_LANGUAGES} />
        </>
    );
}

export async function guideMetadata(
    citySlug: string,
    langSlug: string
): Promise<Metadata> {
    const dest = getDestination(citySlug);
    const lang = getGuideLanguage(langSlug);
    if (!dest || !lang || !guideExists(citySlug, langSlug)) {
        return { title: "Not Found | MyTripMyTravel" };
    }
    const content = getGuideContent(lang, dest);
    const title = `${content.h1} | MyTripMyTravel`;
    const description = content.answer.slice(0, 300);
    const url = `${SITE_URL}/expert-guides/${dest.slug}/${lang.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: dest.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [dest.heroImg] },
    };
}

export function GuideRoute({
    citySlug,
    langSlug,
}: {
    citySlug: string;
    langSlug: string;
}) {
    const dest = getDestination(citySlug);
    const lang = getGuideLanguage(langSlug);
    if (!dest || !lang || !guideExists(citySlug, langSlug)) notFound();

    const content = getGuideContent(lang, dest);
    const url = `${SITE_URL}/expert-guides/${dest.slug}/${lang.slug}`;
    const otherLangs = GUIDE_LANGUAGES.filter((l) => l.slug !== lang.slug);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                serviceType: `${lang.name}-speaking tour guide`,
                name: content.h1,
                description: content.answer,
                url,
                areaServed: {
                    "@type": "City",
                    name: dest.name,
                    address: { "@type": "PostalAddress", addressRegion: dest.state, addressCountry: "IN" },
                },
                availableLanguage: lang.name,
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Expert Guides", item: `${SITE_URL}/expert-guides` },
                    { "@type": "ListItem", position: 3, name: dest.name, item: `${SITE_URL}/expert-guides/${dest.slug}` },
                    { "@type": "ListItem", position: 4, name: lang.name, item: url },
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
            <GuideDetailView dest={dest} lang={lang} content={content} otherLangs={otherLangs} />
        </>
    );
}
