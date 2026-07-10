import { renderChunk } from "@/lib/sitemapData";

// Child sitemap chunks served at /sitemaps/0.xml ... /sitemaps/N.xml.
export const revalidate = 86400;

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const n = parseInt(String(id).replace(/\.xml$/i, ""), 10);
    const xml = Number.isFinite(n) ? renderChunk(n) : null;
    if (!xml) return new Response("Not found", { status: 404 });
    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400",
        },
    });
}
