import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { regions, destinations } from "@/data/destinations";
import { getAllFacetParams } from "@/data/destinationFacets";
import { getAllMonumentParams, citiesWithMonuments } from "@/data/monuments";
import { getAllPackageSlugs } from "@/data/tours";
import { getAllVariantParams, variantHref } from "@/data/tourVariants";
import { getAllWellnessPaths } from "@/data/wellness";
import { getAllVehicleIds } from "@/data/fleet";
import { getAllFleetCityParams } from "@/data/fleetCities";
import { getAllFaqTopicParams, getAllFaqAtomParams } from "@/data/faq";
import { SERVICE_LINES, getAllServiceCityParams } from "@/data/services";
import { weddingCategories } from "@/data/weddings";
import { corporateCategories } from "@/data/corporate";
import { getAllGuideCityParams, getAllGuideParams } from "@/data/expertGuides";

const now = new Date();

function entry(
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap[number] {
    return {
        url: `${SITE_URL}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
    };
}

// Curated static routes that exist as real pages on the live site.
const STATIC_ROUTES: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/destinations", priority: 0.9 },
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

export default function sitemap(): MetadataRoute.Sitemap {
    const urls: MetadataRoute.Sitemap = [];

    // Static
    for (const r of STATIC_ROUTES) {
        urls.push(entry(r.path, r.priority, r.path === "/" ? "daily" : "weekly"));
    }

    // Region hubs
    for (const region of regions) {
        urls.push(entry(`/destinations/region/${region.slug}`, 0.8, "weekly"));
    }

    // City briefs
    for (const d of destinations) {
        urls.push(entry(`/destinations/${d.slug}`, 0.8, "weekly"));
    }

    // City spokes (best-time / things-to-do / how-to-reach / stay / eat)
    for (const { slug, facet } of getAllFacetParams()) {
        urls.push(entry(`/destinations/${slug}/${facet}`, 0.6, "monthly"));
    }

    // Monument indexes
    for (const citySlug of citiesWithMonuments()) {
        urls.push(entry(`/destinations/${citySlug}/monuments`, 0.6, "monthly"));
    }

    // Monument atoms (high commercial intent)
    for (const { slug, monument } of getAllMonumentParams()) {
        urls.push(entry(`/destinations/${slug}/monuments/${monument}`, 0.7, "monthly"));
    }

    // Tour master packages
    for (const slug of getAllPackageSlugs()) {
        urls.push(entry(`/tours/${slug}`, 0.8, "weekly"));
    }

    // Golden Triangle variant hub + slices
    urls.push(entry("/tours/golden-triangle", 0.8, "weekly"));
    for (const { dimension, value } of getAllVariantParams()) {
        urls.push(entry(variantHref(dimension, value), 0.6, "monthly"));
    }

    // Wellness sub-variants
    for (const { programme, variant } of getAllWellnessPaths()) {
        urls.push(entry(`/wellness/${programme}/${variant}`, 0.7, "monthly"));
    }

    // Fleet vehicles
    for (const id of getAllVehicleIds()) {
        urls.push(entry(`/fleet/${id}`, 0.7, "monthly"));
    }

    // Fleet × city (local-SEO matrix)
    for (const { vehicle, city } of getAllFleetCityParams()) {
        urls.push(entry(`/fleet/${vehicle}/in/${city}`, 0.5, "monthly"));
    }

    // FAQ hub + topics + atoms (AIO-targeted)
    urls.push(entry("/faq", 0.7, "monthly"));
    for (const { topic } of getAllFaqTopicParams()) {
        urls.push(entry(`/faq/${topic}`, 0.6, "monthly"));
    }
    for (const { topic, question } of getAllFaqAtomParams()) {
        urls.push(entry(`/faq/${topic}/${question}`, 0.6, "monthly"));
    }

    // Services hub + line × city (local-SEO)
    urls.push(entry("/services", 0.7, "monthly"));
    for (const line of SERVICE_LINES) {
        for (const { city } of getAllServiceCityParams()) {
            urls.push(entry(`/services/${line.slug}/${city}`, 0.6, "monthly"));
        }
    }

    // Weddings sub-cluster (category indexes + items)
    for (const c of weddingCategories) {
        urls.push(entry(`/weddings/${c.slug}`, 0.7, "monthly"));
        for (const it of c.items) {
            urls.push(entry(`/weddings/${c.slug}/${it.slug}`, 0.6, "monthly"));
        }
    }

    // Corporate sub-cluster (category indexes + items)
    for (const c of corporateCategories) {
        urls.push(entry(`/corporate/${c.slug}`, 0.7, "monthly"));
        for (const it of c.items) {
            urls.push(entry(`/corporate/${c.slug}/${it.slug}`, 0.6, "monthly"));
        }
    }

    // Expert Guides (city index + city × language)
    for (const { city } of getAllGuideCityParams()) {
        urls.push(entry(`/expert-guides/${city}`, 0.6, "monthly"));
    }
    for (const { city, language } of getAllGuideParams()) {
        urls.push(entry(`/expert-guides/${city}/${language}`, 0.6, "monthly"));
    }

    return urls;
}
