import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getVariant } from "@/data/wellness";
import WellnessVariantView from "@/components/wellness/WellnessVariantView";

export async function wellnessMetadata(
    programmeSlug: string,
    variantSlug: string
): Promise<Metadata> {
    const resolved = getVariant(programmeSlug, variantSlug);
    if (!resolved) return { title: "Not Found | MyTripMyTravel" };
    const { programme, variant } = resolved;
    const title = `${variant.name} — ${programme.name} | MyTripMyTravel`;
    const description = variant.answer.slice(0, 300);
    const url = `${SITE_URL}/wellness/${programme.slug}/${variant.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images: [{ url: programme.heroImg }] },
        twitter: { card: "summary_large_image", title, description, images: [programme.heroImg] },
    };
}

export function WellnessVariantRoute({
    programmeSlug,
    variantSlug,
}: {
    programmeSlug: string;
    variantSlug: string;
}) {
    const resolved = getVariant(programmeSlug, variantSlug);
    if (!resolved) notFound();
    const { programme, variant } = resolved;
    const url = `${SITE_URL}/wellness/${programme.slug}/${variant.slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalTherapy",
                name: variant.name,
                description: variant.answer,
                url,
                howPerformed: variant.protocol.map((p) => `${p.phase}: ${p.detail}`).join(" "),
                provider: { "@type": "TravelAgency", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Wellness", item: `${SITE_URL}/wellness` },
                    { "@type": "ListItem", position: 3, name: programme.name, item: `${SITE_URL}/wellness/${programme.slug}` },
                    { "@type": "ListItem", position: 4, name: variant.name, item: url },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: variant.faqs.map((f) => ({
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
            <WellnessVariantView programme={programme} variant={variant} />
        </>
    );
}
