import { SITE_URL } from "@/lib/site";
import { regions, destinations } from "@/data/destinations";
import { getAllFacetParams } from "@/data/destinationFacets";
import { getAllMonumentParams, citiesWithMonuments } from "@/data/monuments";
import { getAllPackageSlugs } from "@/data/tours";
import { getAllVariantParams, variantHref } from "@/data/tourVariants";
import { getAllVariantRegions, getRegionVariantParams, regionVariantHref } from "@/data/regionVariants";
import { getAllWellnessPaths } from "@/data/wellness";
import { WELLNESS_DURATIONS, PROGRAMME_LOCATIONS } from "@/data/wellnessFacets";
import { WELLNESS_MONTHS } from "@/data/wellnessMonths";
import { getAllWellnessOriginParams } from "@/data/wellnessOrigins";
import { getAllSubVariantLocationParams } from "@/data/wellnessSubVariantLocations";
import { getAllSubVariantOriginParams } from "@/data/wellnessSubVariantOrigins";
import { getAllSubVariantMonthParams } from "@/data/wellnessSubVariantMonths";
import { getAllSubVariantDurationParams } from "@/data/wellnessSubVariantDurations";
import { getAllVehicleIds } from "@/data/fleet";
import { getAllFleetCityParams } from "@/data/fleetCities";
import { getAllFaqTopicParams, getAllFaqAtomParams } from "@/data/faq";
import { SERVICE_LINES, getAllServiceCityParams } from "@/data/services";
import { getAllServiceItemSlugs } from "@/data/serviceItems";
import { weddingCategories } from "@/data/weddings";
import { corporateCategories } from "@/data/corporate";
import { getAllCorporateRouteParams } from "@/data/corporateRoutes";
import { diningCategories } from "@/data/heritageDining";
import { getAllMethodologyParams } from "@/data/methodology";
import { getAllBlogSlugs } from "@/data/blog";
import { getAllItineraryParams, getCityItineraryIndexParams } from "@/data/destinationItineraries";
import { getAllCityMonthParams } from "@/data/destinationMonths";
import { getAllCityOriginParams } from "@/data/destinationOrigins";
import { getAllMonumentOriginParams } from "@/data/monumentOrigins";
import { getAllMonumentMonthParams } from "@/data/monumentMonths";
import { getAllRouteParams } from "@/data/transferRoutes";
import { getAllGuideCityParams, getAllGuideParams } from "@/data/expertGuides";

export const CHUNK_SIZE = 10000;

export type SitemapItem = {
    url: string;
    lastModified: string;
    changeFrequency: string;
    priority: number;
};

const now = new Date().toISOString();

function entry(path: string, priority: number, changeFrequency: string): SitemapItem {
    return { url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority };
}

const STATIC_ROUTES: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/destinations", priority: 0.9 },
    { path: "/destinations/andaman", priority: 0.7 },
    { path: "/tours", priority: 0.9 },
    { path: "/tours/golden-triangle-all", priority: 0.9 },
    { path: "/wellness", priority: 0.8 },
    { path: "/fleet", priority: 0.8 },
    { path: "/weddings", priority: 0.7 },
    { path: "/corporate", priority: 0.7 },
    { path: "/heritage-dining", priority: 0.7 },
    { path: "/expert-guides", priority: 0.7 },
    { path: "/services/car-rental", priority: 0.7 },
    { path: "/methodology", priority: 0.6 },
    { path: "/about", priority: 0.6 },
    { path: "/careers", priority: 0.4 },
    { path: "/blog", priority: 0.6 },
    { path: "/booking", priority: 0.6 },
    { path: "/telemetry", priority: 0.4 },
    { path: "/wellness/yoga-soul", priority: 0.6 },
    { path: "/wellness/ayurvedic", priority: 0.6 },
    { path: "/wellness/orthopedic", priority: 0.6 },
    { path: "/wellness/massage", priority: 0.6 },
    { path: "/legal/privacy", priority: 0.2 },
    { path: "/legal/terms", priority: 0.2 },
    { path: "/legal/cookies", priority: 0.2 },
];

let _cache: SitemapItem[] | null = null;

export function buildAllUrls(): SitemapItem[] {
    if (_cache) return _cache;
    const urls: SitemapItem[] = [];

    for (const r of STATIC_ROUTES) urls.push(entry(r.path, r.priority, r.path === "/" ? "daily" : "weekly"));
    for (const region of regions) urls.push(entry(`/destinations/region/${region.slug}`, 0.8, "weekly"));
    for (const d of destinations) urls.push(entry(`/destinations/${d.slug}`, 0.8, "weekly"));
    for (const { slug, facet } of getAllFacetParams()) urls.push(entry(`/destinations/${slug}/${facet}`, 0.6, "monthly"));
    for (const citySlug of citiesWithMonuments()) urls.push(entry(`/destinations/${citySlug}/monuments`, 0.6, "monthly"));
    for (const { slug, monument } of getAllMonumentParams()) urls.push(entry(`/destinations/${slug}/monuments/${monument}`, 0.7, "monthly"));
    for (const slug of getAllPackageSlugs()) urls.push(entry(`/tours/${slug}`, 0.8, "weekly"));
    for (const r of ["rajasthan", "kerala", "himalayas", "sikkim", "andaman"]) urls.push(entry(`/tours/${r}`, 0.8, "weekly"));

    urls.push(entry("/tours/golden-triangle", 0.8, "weekly"));
    for (const { dimension, value } of getAllVariantParams()) urls.push(entry(variantHref(dimension, value), 0.6, "monthly"));
    for (const region of getAllVariantRegions()) {
        for (const { dimension, value } of getRegionVariantParams(region)) urls.push(entry(regionVariantHref(region, dimension, value), 0.6, "monthly"));
    }

    for (const { programme, variant } of getAllWellnessPaths()) urls.push(entry(`/wellness/${programme}/${variant}`, 0.7, "monthly"));
    for (const prog of Object.keys(PROGRAMME_LOCATIONS)) {
        for (const n of WELLNESS_DURATIONS) urls.push(entry(`/wellness/${prog}/duration/${n}-day`, 0.6, "monthly"));
        for (const loc of PROGRAMME_LOCATIONS[prog]) urls.push(entry(`/wellness/${prog}/in/${loc}`, 0.6, "monthly"));
        for (const m of WELLNESS_MONTHS) urls.push(entry(`/wellness/${prog}/month/${m}`, 0.6, "monthly"));
    }
    for (const { programme, origin } of getAllWellnessOriginParams()) urls.push(entry(`/wellness/${programme}/from/${origin}`, 0.5, "monthly"));
    for (const prog of Object.keys(PROGRAMME_LOCATIONS)) {
        for (const { variant, location } of getAllSubVariantLocationParams(prog)) urls.push(entry(`/wellness/${prog}/${variant}/in/${location}`, 0.5, "monthly"));
    }
    for (const prog of Object.keys(PROGRAMME_LOCATIONS)) {
        for (const { variant, origin } of getAllSubVariantOriginParams(prog)) urls.push(entry(`/wellness/${prog}/${variant}/from/${origin}`, 0.5, "monthly"));
    }
    for (const prog of Object.keys(PROGRAMME_LOCATIONS)) {
        for (const { variant, month } of getAllSubVariantMonthParams(prog)) urls.push(entry(`/wellness/${prog}/${variant}/month/${month}`, 0.5, "monthly"));
    }
    for (const prog of Object.keys(PROGRAMME_LOCATIONS)) {
        for (const { variant, duration } of getAllSubVariantDurationParams(prog)) urls.push(entry(`/wellness/${prog}/${variant}/duration/${duration}`, 0.5, "monthly"));
    }

    for (const id of getAllVehicleIds()) urls.push(entry(`/fleet/${id}`, 0.7, "monthly"));
    for (const { vehicle, city } of getAllFleetCityParams()) urls.push(entry(`/fleet/${vehicle}/in/${city}`, 0.5, "monthly"));

    urls.push(entry("/faq", 0.7, "monthly"));
    for (const { topic } of getAllFaqTopicParams()) urls.push(entry(`/faq/${topic}`, 0.6, "monthly"));
    for (const { topic, question } of getAllFaqAtomParams()) urls.push(entry(`/faq/${topic}/${question}`, 0.6, "monthly"));

    urls.push(entry("/services", 0.7, "monthly"));
    for (const line of SERVICE_LINES) {
        for (const { city } of getAllServiceCityParams()) urls.push(entry(`/services/${line.slug}/${city}`, 0.6, "monthly"));
    }

    for (const c of weddingCategories) {
        urls.push(entry(`/weddings/${c.slug}`, 0.7, "monthly"));
        for (const it of c.items) urls.push(entry(`/weddings/${c.slug}/${it.slug}`, 0.6, "monthly"));
    }
    for (const c of corporateCategories) {
        urls.push(entry(`/corporate/${c.slug}`, 0.7, "monthly"));
        for (const it of c.items) urls.push(entry(`/corporate/${c.slug}/${it.slug}`, 0.6, "monthly"));
    }
    for (const { route } of getAllCorporateRouteParams()) urls.push(entry(`/corporate/${route}`, 0.6, "monthly"));

    for (const { city } of getAllGuideCityParams()) urls.push(entry(`/expert-guides/${city}`, 0.6, "monthly"));
    for (const { city, language } of getAllGuideParams()) urls.push(entry(`/expert-guides/${city}/${language}`, 0.6, "monthly"));

    for (const { stage } of getAllMethodologyParams()) urls.push(entry(`/methodology/${stage}`, 0.6, "monthly"));
    for (const slug of getAllBlogSlugs()) urls.push(entry(`/blog/${slug}`, 0.7, "monthly"));
    for (const slug of getAllServiceItemSlugs()) urls.push(entry(`/services/${slug}`, 0.6, "monthly"));

    urls.push(entry("/services/inter-city", 0.7, "monthly"));
    for (const { route } of getAllRouteParams()) urls.push(entry(`/services/inter-city/${route}`, 0.7, "monthly"));

    for (const { slug } of getCityItineraryIndexParams()) urls.push(entry(`/destinations/${slug}/itinerary`, 0.6, "monthly"));
    for (const { slug, duration } of getAllItineraryParams()) urls.push(entry(`/destinations/${slug}/itinerary/${duration}`, 0.6, "monthly"));
    for (const { slug, month } of getAllCityMonthParams()) urls.push(entry(`/destinations/${slug}/in/${month}`, 0.6, "monthly"));
    for (const { slug, origin } of getAllCityOriginParams()) urls.push(entry(`/destinations/${slug}/from/${origin}`, 0.5, "monthly"));
    for (const { slug, monument, origin } of getAllMonumentOriginParams()) urls.push(entry(`/destinations/${slug}/monuments/${monument}/from/${origin}`, 0.5, "monthly"));
    for (const { slug, monument, month } of getAllMonumentMonthParams()) urls.push(entry(`/destinations/${slug}/monuments/${monument}/in/${month}`, 0.5, "monthly"));

    for (const c of diningCategories) {
        urls.push(entry(`/heritage-dining/${c.slug}`, 0.7, "monthly"));
        for (const it of c.items) urls.push(entry(`/heritage-dining/${c.slug}/${it.slug}`, 0.6, "monthly"));
    }

    _cache = urls;
    return urls;
}

export function chunkCount(): number {
    return Math.max(1, Math.ceil(buildAllUrls().length / CHUNK_SIZE));
}

function xmlEscape(s: string): string {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Render one chunk (0-based) as a <urlset> XML string, or null if out of range. */
export function renderChunk(id: number): string | null {
    const all = buildAllUrls();
    const items = all.slice(id * CHUNK_SIZE, (id + 1) * CHUNK_SIZE);
    if (!items.length) return null;
    return (
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        items
            .map((it) => `  <url><loc>${xmlEscape(it.url)}</loc><lastmod>${it.lastModified}</lastmod><changefreq>${it.changeFrequency}</changefreq><priority>${it.priority}</priority></url>`)
            .join("\n") +
        `\n</urlset>\n`
    );
}

/** Render the sitemap index referencing every chunk. */
export function renderIndex(): string {
    const count = chunkCount();
    const lastmod = new Date().toISOString();
    return (
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        Array.from({ length: count }, (_, i) => `  <sitemap><loc>${SITE_URL}/sitemaps/${i}.xml</loc><lastmod>${lastmod}</lastmod></sitemap>`).join("\n") +
        `\n</sitemapindex>\n`
    );
}
