import { renderIndex } from "@/lib/sitemapData";

// Sitemap index at /sitemap.xml, referencing the chunked child sitemaps at
// /sitemaps/0.xml ... /sitemaps/N.xml (each under Google's 50,000-URL cap).
export const revalidate = 86400;

export async function GET() {
    return new Response(renderIndex(), {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400",
        },
    });
}
