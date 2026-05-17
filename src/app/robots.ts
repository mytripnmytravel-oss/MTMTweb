import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Explicitly welcome search AND AI/LLM crawlers — MyTripMyTravel's
// strategy depends on AI Overview + LLM citation, not just classic search.
const AI_CRAWLERS = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "Amazonbot",
    "CCBot",
    "Bytespider",
    "Meta-ExternalAgent",
    "FacebookBot",
    "cohere-ai",
    "Diffbot",
    "DuckAssistBot",
    "Timpibot",
    "YouBot",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
            ...AI_CRAWLERS.map((ua) => ({
                userAgent: ua,
                allow: "/",
            })),
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
