/**
 * Child links for the editorial hubs.
 *
 * The 2026-11-20 crawl audit found five hubs that rendered **no internal link
 * to any of their own children** in the static HTML:
 *
 *   /fleet            -> vehicle cards opened a modal, never linked to /fleet/<id>
 *   /expert-guides    -> no link to /expert-guides/<city>
 *   /methodology      -> no link to /methodology/<stage>
 *   /heritage-dining  -> no link to its cuisine / experience pages
 *   /weddings         -> no link to its venue / service / guest-count pages
 *
 * Those hubs are all linked from the global nav, so they carry real authority;
 * their children were reachable only through the XML sitemap. These helpers
 * build the child link sets from the same data modules the child routes'
 * `generateStaticParams` use, so each href resolves to a built page.
 */

import { guideCitiesResolved } from "@/data/expertGuides";
import { methodologyStages } from "@/data/methodology";
import { diningCategories } from "@/data/heritageDining";
import { weddingCategories } from "@/data/weddings";
import { corporateCategories } from "@/data/corporate";
import { isCoreDestination } from "@/lib/seoFocus";
import type { VariantLinkGroup } from "@/lib/variantLinks";

/** Expert-guide city pages (gated to the core destinations, like the routes). */
export function expertGuideHubGroups(): VariantLinkGroup[] {
    const links = guideCitiesResolved()
        .filter((c) => isCoreDestination(c.slug))
        .map((c) => ({ label: c.name, href: `/expert-guides/${c.slug}` }));
    return links.length ? [{ heading: "Guides by city", links }] : [];
}

/** The four Mission Protocol stage pages. */
export function methodologyHubGroups(): VariantLinkGroup[] {
    const links = methodologyStages.map((s) => ({
        label: s.name,
        href: `/methodology/${s.slug}`,
    }));
    return links.length ? [{ heading: "The protocol, stage by stage", links }] : [];
}

/**
 * Category index + every item, for a hub built on the
 * `{ slug, name, items: [{ slug, name }] }` category shape.
 */
function categoryGroups(
    base: string,
    categories: { slug: string; name: string; items: { slug: string; name: string }[] }[],
): VariantLinkGroup[] {
    return categories
        .map((c) => ({
            heading: c.name,
            links: [
                { label: `All ${c.name.toLowerCase()}`, href: `${base}/${c.slug}` },
                ...c.items.map((i) => ({ label: i.name, href: `${base}/${c.slug}/${i.slug}` })),
            ],
        }))
        .filter((g) => g.links.length > 1);
}

export function heritageDiningHubGroups(): VariantLinkGroup[] {
    return categoryGroups("/heritage-dining", diningCategories);
}

export function weddingsHubGroups(): VariantLinkGroup[] {
    return categoryGroups("/weddings", weddingCategories);
}

export function corporateHubGroups(): VariantLinkGroup[] {
    return categoryGroups("/corporate", corporateCategories);
}
