import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { getProgramme, programmeFaqs } from "@/data/wellness";
import { pageTitle } from "@/lib/meta";

/** Hand-crafted, keyword-front-loaded metadata per wellness programme. */
const META: Record<string, { title: string; description: string }> = {
    "yoga-soul": {
        title: "Yoga Retreats in India: Rishikesh & Himalaya",
        description:
            "Private, master-led yoga and meditation retreats in Rishikesh and Himalayan sanctuaries. Hatha, Vinyasa, pranayama and yin, at every level.",
    },
    ayurvedic: {
        title: "Ayurveda Retreats in Kerala: Panchakarma",
        description:
            "AYUSH-certified Ayurveda programmes in Kerala, physician-led Panchakarma, Abhyanga, Shirodhara and Rasayana. Honest recuperative care, not a cure. Enquire now.",
    },
    orthopedic: {
        title: "Orthopaedic Recovery Travel in India",
        description:
            "Gentle-paced recovery travel for knee, spine, joint and sports rehab, arranged around accredited providers with private transit and concierge.",
    },
    massage: {
        title: "Therapeutic Massage in India",
        description:
            "Master-therapist bodywork across India: deep-tissue, Swedish, Thai, marma-point and hot-stone therapy in Kerala and Rajasthan palaces.",
    },
};

export function wellnessProgrammeMetadata(slug: string): Metadata {
    const programme = getProgramme(slug);
    const meta = META[slug];
    if (!programme || !meta) return { title: pageTitle("Wellness") };
    const url = `${SITE_URL}/wellness/${slug}`;
    return {
        title: pageTitle(meta.title),
        description: meta.description,
        alternates: { canonical: url },
        openGraph: {
            title: pageTitle(meta.title),
            description: meta.description,
            url,
            type: "website",
            images: [{ url: programme.heroImg }],
        },
    };
}

export function wellnessProgrammeJsonLd(slug: string) {
    const programme = getProgramme(slug);
    if (!programme) return {};
    const url = `${SITE_URL}/wellness/${slug}`;
    const faqs = programmeFaqs(programme);
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                name: programme.name,
                serviceType: `Wellness, ${programme.label}`,
                description: programme.blurb,
                url,
                image: programme.heroImg,
                areaServed: { "@type": "Country", name: "India" },
                provider: {
                    "@type": "TravelAgency",
                    name: "MyTripMyTravel",
                    url: SITE_URL,
                },
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: `${programme.name} programmes`,
                    itemListElement: programme.variants.map((v) => ({
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: v.name,
                            url: `${url}/${v.slug}`,
                        },
                    })),
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Wellness", item: `${SITE_URL}/wellness` },
                    { "@type": "ListItem", position: 3, name: programme.name, item: url },
                ],
            },
            ...(faqs.length > 0
                ? [{
                    "@type": "FAQPage",
                    mainEntity: faqs.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: { "@type": "Answer", text: f.a },
                    })),
                }]
                : []),
        ],
    };
}
