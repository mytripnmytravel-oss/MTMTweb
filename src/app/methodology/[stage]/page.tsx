import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import {
    getMethodologyStage,
    getAllMethodologyParams,
    methodologyStages,
} from "@/data/methodology";
import MethodologyStageView from "@/components/methodology/MethodologyStageView";

export function generateStaticParams() {
    return getAllMethodologyParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ stage: string }>;
}): Promise<Metadata> {
    const { stage: slug } = await params;
    const stage = getMethodologyStage(slug);
    if (!stage) return { title: "Not Found | MyTripMyTravel" };
    const title = `${stage.name} — The Mission Protocol | MyTripMyTravel`;
    const description = stage.answer.slice(0, 300);
    const url = `${SITE_URL}/methodology/${stage.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article" },
    };
}

export default async function MethodologyStagePage({
    params,
}: {
    params: Promise<{ stage: string }>;
}) {
    const { stage: slug } = await params;
    const stage = getMethodologyStage(slug);
    if (!stage) notFound();

    const others = methodologyStages.filter((s) => s.slug !== stage.slug);
    const url = `${SITE_URL}/methodology/${stage.slug}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                headline: `${stage.name} — The Mission Protocol`,
                description: stage.answer,
                about: "MyTripMyTravel Mission Protocol",
                url,
                isPartOf: `${SITE_URL}/methodology`,
                publisher: { "@type": "Organization", name: "MyTripMyTravel", url: SITE_URL },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Methodology", item: `${SITE_URL}/methodology` },
                    { "@type": "ListItem", position: 3, name: stage.name, item: url },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: stage.faqs.map((f) => ({
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
            <MethodologyStageView stage={stage} others={others} />
        </>
    );
}
