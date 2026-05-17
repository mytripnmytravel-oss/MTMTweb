import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getFaqTopic, getAllFaqTopicParams, faqTopics } from "@/data/faq";
import { FaqTopicView } from "@/components/faq/FaqView";

export function generateStaticParams() {
    return getAllFaqTopicParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ topic: string }>;
}): Promise<Metadata> {
    const { topic: slug } = await params;
    const topic = getFaqTopic(slug);
    if (!topic) return { title: "Not Found | MyTripMyTravel" };
    const title = `${topic.name} — FAQ | MyTripMyTravel`;
    const url = `${SITE_URL}/faq/${topic.slug}`;
    return {
        title,
        description: topic.blurb,
        alternates: { canonical: url },
        openGraph: { title, description: topic.blurb, url, type: "website" },
    };
}

export default async function FaqTopicPage({
    params,
}: {
    params: Promise<{ topic: string }>;
}) {
    const { topic: slug } = await params;
    const topic = getFaqTopic(slug);
    if (!topic) notFound();

    const url = `${SITE_URL}/faq/${topic.slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FAQPage",
                mainEntity: topic.questions.map((x) => ({
                    "@type": "Question",
                    name: x.q,
                    acceptedAnswer: { "@type": "Answer", text: x.a },
                })),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
                    { "@type": "ListItem", position: 3, name: topic.name, item: url },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <FaqTopicView topic={topic} others={faqTopics.filter((t) => t.slug !== topic.slug)} />
        </>
    );
}
