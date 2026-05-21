import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getBlogPost, getAllBlogSlugs, getRelatedBlogPosts } from "@/data/blog";
import BlogArticleView from "@/components/blog/BlogArticleView";

export function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) return { title: "Not Found | MyTripMyTravel" };
    const title = `${post.title} | ${SITE_NAME}`;
    const description = post.excerpt;
    const url = `${SITE_URL}/blog/${post.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            images: [{ url: post.heroImg }],
            publishedTime: post.datePublished,
            modifiedTime: post.dateModified,
            authors: [`${SITE_NAME} Editorial Desk`],
        },
        twitter: { card: "summary_large_image", title, description, images: [post.heroImg] },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getBlogPost(slug);
    if (!post) notFound();

    const related = getRelatedBlogPosts(slug);
    const url = `${SITE_URL}/blog/${post.slug}`;

    const articleBody = post.sections
        .map((s) => `${s.heading}. ${s.paragraphs.join(" ")}`)
        .join(" ");

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                image: post.heroImg,
                datePublished: post.datePublished,
                dateModified: post.dateModified,
                articleSection: post.category,
                wordCount: articleBody.split(/\s+/).length,
                url,
                mainEntityOfPage: url,
                author: { "@type": "Organization", name: `${SITE_NAME} Editorial Desk`, url: SITE_URL },
                publisher: {
                    "@type": "Organization",
                    name: SITE_NAME,
                    url: SITE_URL,
                    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
                },
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE_URL}/blog` },
                    { "@type": "ListItem", position: 3, name: post.title, item: url },
                ],
            },
            ...(post.faqs.length
                ? [
                      {
                          "@type": "FAQPage",
                          mainEntity: post.faqs.map((f) => ({
                              "@type": "Question",
                              name: f.q,
                              acceptedAnswer: { "@type": "Answer", text: f.a },
                          })),
                      },
                  ]
                : []),
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <BlogArticleView post={post} related={related} />
        </>
    );
}
