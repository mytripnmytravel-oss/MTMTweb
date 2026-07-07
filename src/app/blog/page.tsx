import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { blogPosts } from "@/data/blog";
import BlogView from "./BlogView";

const TITLE =
    "India Travel Blog, Golden Triangle, Rajasthan & Kerala Guides | MyTripMyTravel";
const DESCRIPTION =
    "Field notes and planning guides for luxury India travel, Golden Triangle routes, best time to visit, India e-Visa, Ayurveda and tiger-safari deep-dives.";
const URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: URL,
        type: "website",
        images: [{ url: blogPosts[0]?.heroImg ?? `${SITE_URL}/logo.png` }],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Blog",
            name: "MyTripMyTravel Blog",
            description: DESCRIPTION,
            url: URL,
            publisher: {
                "@type": "TravelAgency",
                name: "MyTripMyTravel",
                url: SITE_URL,
            },
            blogPost: blogPosts.map((p) => ({
                "@type": "BlogPosting",
                headline: p.title,
                url: `${SITE_URL}/blog/${p.slug}`,
                datePublished: p.datePublished,
                dateModified: p.dateModified,
                image: p.heroImg,
            })),
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Blog", item: URL },
            ],
        },
        {
            "@type": "ItemList",
            name: "MyTripMyTravel Blog Posts",
            itemListElement: blogPosts.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: p.title,
                url: `${SITE_URL}/blog/${p.slug}`,
            })),
        },
    ],
};

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogView />
        </>
    );
}
