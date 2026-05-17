import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site";
import { getFaqAtom, getAllFaqAtomParams } from "@/data/faq";
import { FaqAtomView } from "@/components/faq/FaqView";

export function generateStaticParams() {
    return getAllFaqAtomParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ topic: string; question: string }>;
}): Promise<Metadata> {
    const { topic, question } = await params;
    const resolved = getFaqAtom(topic, question);
    if (!resolved) return { title: "Not Found | MyTripMyTravel" };
    const { topic: t, atom } = resolved;
    const title = `${atom.q} | MyTripMyTravel`;
    const description = atom.a.slice(0, 300);
    const url = `${SITE_URL}/faq/${t.slug}/${atom.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article" },
    };
}

export default async function FaqAtomPage({
    params,
}: {
    params: Promise<{ topic: string; question: string }>;
}) {
    const { topic, question } = await params;
    const resolved = getFaqAtom(topic, question);
    if (!resolved) notFound();

    const { topic: t, atom } = resolved;
    const url = `${SITE_URL}/faq/${t.slug}/${atom.slug}`;
    const siblings = t.questions.filter((x) => x.slug !== atom.slug);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "QAPage",
                mainEntity: {
                    "@type": "Question",
                    name: atom.q,
                    text: atom.q,
                    answerCount: 1,
                    acceptedAnswer: { "@type": "Answer", text: atom.a, url },
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
                    { "@type": "ListItem", position: 3, name: t.name, item: `${SITE_URL}/faq/${t.slug}` },
                    { "@type": "ListItem", position: 4, name: atom.q, item: url },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <FaqAtomView topic={t} atom={atom} siblings={siblings} />
        </>
    );
}
