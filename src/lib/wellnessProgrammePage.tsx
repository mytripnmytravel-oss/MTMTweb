import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { getProgramme, programmeFaqs } from "@/data/wellness";

/** Hand-crafted, keyword-front-loaded metadata per wellness programme. */
const META: Record<string, { title: string; description: string }> = {
    "yoga-soul": {
        title: "Yoga Retreats in India, Rishikesh & Himalayan Immersions | MyTripMyTravel",
        description:
            "Private, master-led yoga & meditation retreats in Rishikesh and Himalayan sanctuaries, Hatha, Vinyasa, meditation, pranayama and yin, calibrated to every level. Enquire now.",
    },
    ayurvedic: {
        title: "Ayurveda Retreats in Kerala, Panchakarma & Therapies | MyTripMyTravel",
        description:
            "AYUSH-certified Ayurveda programmes in Kerala, physician-led Panchakarma, Abhyanga, Shirodhara and Rasayana. Honest recuperative care, not a cure. Enquire now.",
    },
    orthopedic: {
        title: "Orthopaedic Recovery Travel in India, Rehab Logistics | MyTripMyTravel",
        description:
            "Gentle-paced orthopaedic recovery travel, knee, spine, joint and sports rehab logistics around accredited providers, with luxury transit and concierge. Enquire now.",
    },
    massage: {
        title: "Therapeutic Massage in India, Deep-Tissue, Marma & Hot-Stone | MyTripMyTravel",
        description:
            "Master-therapist bodywork across India, deep-tissue, Swedish, Thai, marma-point and hot-stone therapy at Kerala, Rajasthan palaces and city sanctuaries. Enquire now.",
    },
};

export function wellnessProgrammeMetadata(slug: string): Metadata {
    const programme = getProgramme(slug);
    const meta = META[slug];
    if (!programme || !meta) return { title: "Wellness | MyTripMyTravel" };
    const url = `${SITE_URL}/wellness/${slug}`;
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: url },
        openGraph: {
            title: meta.title,
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
