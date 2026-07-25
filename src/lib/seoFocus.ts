import type { Metadata } from "next";

/**
 * SEO focus policy.
 *
 * MyTripMyTravel is a Golden Triangle specialist. The programmatic build spans
 * all of India (260+ destinations), but a new site should NOT spend its crawl
 * budget or topical authority on peripheral hill-station "city in <month>" type
 * pages (Chikmagalur, Ooty, Vagamon, Igatpuri, ...). Those pull junk,
 * zero-commercial-intent queries and dilute the Golden Triangle relevance.
 *
 * So we keep indexable ONLY:
 *  - the Golden Triangle circuit and its sub-pages,
 *  - core Rajasthan (the natural GT extension),
 *  - all money/hub pages (tours, GT variants, fleet, wellness hubs, etc.).
 *
 * Everything else stays live (users can reach it, internal links still flow via
 * follow) but is noindex, and is dropped from the XML sitemap. As Google
 * recrawls, authority reconcentrates on Golden Triangle.
 */

// Golden Triangle circuit + core Rajasthan (the destinations we want to rank for).
export const CORE_DESTINATIONS = new Set<string>([
    // Golden Triangle
    "delhi", "agra", "jaipur", "fatehpur-sikri", "mathura", "vrindavan", "neemrana", "alwar", "sariska",
    // Core Rajasthan (headline cities that pair with the Golden Triangle)
    "udaipur", "jodhpur", "jaisalmer", "pushkar", "ranthambore", "bikaner",
    "chittorgarh", "mount-abu", "bundi", "mandawa", "ajmer", "bharatpur",
]);

// Regions kept fully indexable.
export const CORE_REGIONS = new Set<string>(["golden-triangle", "rajasthan"]);

export function isCoreDestination(slug: string | undefined | null): boolean {
    return !!slug && CORE_DESTINATIONS.has(slug);
}

export function isCoreRegion(slug: string | undefined | null): boolean {
    return !!slug && CORE_REGIONS.has(slug);
}

/** Metadata.robots fragment that keeps a page out of the index but link-followable. */
export const NOINDEX_ROBOTS: Metadata["robots"] = {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
};

/** Returns a `{ robots }` object to spread into Metadata: noindex unless the destination is core. */
export function focusRobots(slug: string | undefined | null): Pick<Metadata, "robots"> {
    return isCoreDestination(slug) ? {} : { robots: NOINDEX_ROBOTS };
}

/** Same, but keyed on region slug. */
export function focusRobotsRegion(slug: string | undefined | null): Pick<Metadata, "robots"> {
    return isCoreRegion(slug) ? {} : { robots: NOINDEX_ROBOTS };
}
