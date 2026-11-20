/**
 * Internal link graph for the destination and monument engines.
 *
 * The 2026-11-20 crawl audit found these sub-engines completely orphaned --
 * zero internal inbound links, discoverable only through the XML sitemap:
 *
 *   /destinations/<city>/monuments/<monument>/from/<origin>   2,142 pages
 *   /destinations/<city>/monuments/<monument>/in/<month>        504 pages
 *   /destinations/<city>/from/<origin>                        1,071 pages
 *
 * The parent city and monument pages are well linked (the Agra city page had
 * 449 inbound links) but they linked *down* to almost nothing, so none of that
 * authority reached the children.
 *
 * Each helper filters the very param list the child route's
 * `generateStaticParams` is built from, applying the same `isCoreDestination`
 * gate, so every href resolves to a page the export actually produced.
 */

import { getAllMonumentOriginParams, findOrigin } from "@/data/monumentOrigins";
import { getAllMonumentMonthParams } from "@/data/monumentMonths";
import { getAllCityOriginParams } from "@/data/destinationOrigins";
import { getAllCityMonthParams } from "@/data/destinationMonths";
import { isCoreDestination } from "@/lib/seoFocus";
import type { VariantLinkGroup } from "@/lib/variantLinks";

const titleCase = (s: string) =>
    s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const originLabel = (slug: string) => findOrigin(slug)?.city ?? titleCase(slug);

function group(heading: string, links: { label: string; href: string }[]): VariantLinkGroup[] {
    return links.length ? [{ heading, links }] : [];
}

/**
 * "Visiting from…" and "…month by month" links for a monument page.
 *
 * @param citySlug     the monument's city, e.g. "agra"
 * @param monumentSlug e.g. "taj-mahal"
 * @param monumentName display name, e.g. "Taj Mahal"
 */
export function monumentChildLinkGroups(
    citySlug: string,
    monumentSlug: string,
    monumentName: string,
): VariantLinkGroup[] {
    if (!isCoreDestination(citySlug)) return [];

    const origins = getAllMonumentOriginParams()
        .filter((p) => p.slug === citySlug && p.monument === monumentSlug)
        .map((p) => ({
            label: originLabel(p.origin),
            href: `/destinations/${citySlug}/monuments/${monumentSlug}/from/${p.origin}`,
        }));

    const months = getAllMonumentMonthParams()
        .filter((p) => p.slug === citySlug && p.monument === monumentSlug)
        .map((p) => ({
            label: titleCase(p.month),
            href: `/destinations/${citySlug}/monuments/${monumentSlug}/in/${p.month}`,
        }));

    return [
        ...group(`Planning a ${monumentName} visit from`, origins),
        ...group(`${monumentName}, month by month`, months),
    ];
}

/**
 * "Travelling from…" and "…month by month" links for a city page.
 *
 * The month links already had a path in (one link on the city page plus
 * month-to-month siblings), but listing them in full gives every month a direct
 * parent link instead of a chain that depends on one entry point.
 */
export function destinationChildLinkGroups(
    citySlug: string,
    cityName: string,
): VariantLinkGroup[] {
    if (!isCoreDestination(citySlug)) return [];

    const origins = getAllCityOriginParams()
        .filter((p) => p.slug === citySlug)
        .map((p) => ({
            label: originLabel(p.origin),
            href: `/destinations/${citySlug}/from/${p.origin}`,
        }));

    const months = getAllCityMonthParams()
        .filter((p) => p.slug === citySlug)
        .map((p) => ({
            label: titleCase(p.month),
            href: `/destinations/${citySlug}/in/${p.month}`,
        }));

    return [
        ...group(`Travelling to ${cityName} from`, origins),
        ...group(`${cityName}, month by month`, months),
    ];
}
