/**
 * Internal link graph for the tour-variant engines (Golden Triangle + regions).
 *
 * ## Why this exists
 *
 * A crawl audit of the static export (2026-11-20) found that only 1,289 of the
 * 8,140 indexable pages were reachable by following links from the homepage.
 * The variant combinator dimensions -- `month-from`, `duration-from`,
 * `theme-from`, `duration-month`, `theme-month` -- were **islands**: they linked
 * richly to each other (a `month-from` page rendered all 696 of its siblings)
 * but nothing on the reachable site linked *into* them, and they linked to no
 * parent. Google could only find them through the XML sitemap, which is how
 * pages end up "Discovered -- currently not indexed".
 *
 * Two problems, one fix:
 *
 *  1. **Descent.** The reachable hub dimensions (`by-theme`, `by-duration`,
 *     `in-month`, `from-origin`) now link *down* into the combinators that
 *     refine them.
 *  2. **Ascent + scope.** Each combinator page links *up* to both of its
 *     parents, and its sibling list is scoped to its own two axes instead of
 *     dumping the entire dimension. A `month-from` page drops from 696 links to
 *     roughly 70 -- less link dilution, less HTML, same coverage, because every
 *     target is still reachable from some page's scoped list.
 *
 * ## Safety invariant
 *
 * Every href is derived by filtering the **same `{dimension, value}` param list
 * that `generateStaticParams` and the XML sitemap are built from**, so a link
 * can never point at a URL the static export did not build. (With
 * `output: "export"`, a link to an unbuilt route is a hard 404.) Nothing here
 * constructs a value string by hand.
 */

export type VariantParam = { dimension: string; value: string };

export type VariantLinkGroup = {
    heading: string;
    links: { label: string; href: string }[];
};

type Href = (dimension: string, value: string) => string;

const titleCase = (s: string) =>
    s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

/** "5-day" -> "5-Day" */
const durationLabel = (d: string) => d.replace(/-day$/, "-Day");

/**
 * Split a compound variant value on its literal separator.
 * Values are `<a>-from-<b>` or `<a>-in-<b>`; neither separator occurs inside a
 * theme, month, duration or origin slug, so the split is unambiguous.
 */
function split(value: string, sep: "-from-" | "-in-"): [string, string] | null {
    const i = value.indexOf(sep);
    if (i < 0) return null;
    return [value.slice(0, i), value.slice(i + sep.length)];
}

/**
 * Build the grouped internal links for one variant page.
 *
 * @param all   every built param for this engine (GT or one region)
 * @param href  the engine's href builder (`variantHref` / region equivalent)
 * @param originLabel optional slug -> city-name lookup; falls back to title case
 */
export function variantLinkGroups(
    all: VariantParam[],
    dimension: string,
    value: string,
    href: Href,
    originLabel: (slug: string) => string = titleCase,
): VariantLinkGroup[] {
    const of = (d: string) => all.filter((p) => p.dimension === d);
    const exists = (d: string, v: string) =>
        all.some((p) => p.dimension === d && p.value === v);

    const groups: VariantLinkGroup[] = [];
    const push = (heading: string, links: { label: string; href: string }[]) => {
        if (links.length) groups.push({ heading, links });
    };

    // Links across a "-from-" dimension, holding one side fixed.
    const fromPairs = (d: string, fixed: string, side: "left" | "right") =>
        of(d)
            .map((p) => ({ p, parts: split(p.value, "-from-") }))
            .filter((x): x is { p: VariantParam; parts: [string, string] } => !!x.parts)
            .filter(({ parts }) => (side === "left" ? parts[0] === fixed : parts[1] === fixed))
            .map(({ p, parts }) => ({
                // When the left side is fixed we are listing origins, and vice versa.
                label: side === "left" ? originLabel(parts[1]) : labelFor(d, parts[0]),
                href: href(p.dimension, p.value),
            }));

    // Links across an "-in-<month>" dimension, holding one side fixed.
    const inPairs = (d: string, fixed: string, side: "left" | "right") =>
        of(d)
            .map((p) => ({ p, parts: split(p.value, "-in-") }))
            .filter((x): x is { p: VariantParam; parts: [string, string] } => !!x.parts)
            .filter(({ parts }) => (side === "left" ? parts[0] === fixed : parts[1] === fixed))
            .map(({ p, parts }) => ({
                label: side === "left" ? titleCase(parts[1]) : labelFor(d, parts[0]),
                href: href(p.dimension, p.value),
            }));

    /** Label for the non-fixed left side of a compound dimension. */
    function labelFor(d: string, left: string): string {
        if (d === "duration-from" || d === "duration-month") return durationLabel(left);
        return titleCase(left);
    }

    const siblingsOf = (d: string, label: (v: string) => string) =>
        of(d)
            .filter((p) => p.value !== value)
            .map((p) => ({ label: label(p.value), href: href(p.dimension, p.value) }));

    const parentLink = (d: string, v: string, label: string) =>
        exists(d, v) ? [{ label, href: href(d, v) }] : [];

    switch (dimension) {
        // ---- hub dimensions: link down into the combinators ----
        case "by-theme": {
            push("Other themes", siblingsOf("by-theme", titleCase));
            push(`${titleCase(value)} tours from your city`, fromPairs("theme-from", value, "left"));
            push(`${titleCase(value)} tours by month`, inPairs("theme-month", value, "left"));
            break;
        }
        case "by-duration": {
            push("Other durations", siblingsOf("by-duration", durationLabel));
            push(`${durationLabel(value)} tours from your city`, fromPairs("duration-from", value, "left"));
            push(`${durationLabel(value)} tours by month`, inPairs("duration-month", value, "left"));
            break;
        }
        case "in-month": {
            push("Other months", siblingsOf("in-month", titleCase));
            push(`Travelling in ${titleCase(value)}, from your city`, fromPairs("month-from", value, "left"));
            push(`${titleCase(value)} by duration`, inPairs("duration-month", value, "right"));
            push(`${titleCase(value)} by theme`, inPairs("theme-month", value, "right"));
            break;
        }
        case "from-origin": {
            push(`From ${originLabel(value)}, by month`, fromPairs("month-from", value, "right"));
            push(`From ${originLabel(value)}, by duration`, fromPairs("duration-from", value, "right"));
            push(`From ${originLabel(value)}, by theme`, fromPairs("theme-from", value, "right"));
            push("Other departure cities", siblingsOf("from-origin", originLabel));
            break;
        }

        // ---- combinator dimensions: link up to both parents, scope siblings ----
        case "theme-from": {
            const parts = split(value, "-from-");
            if (parts) {
                const [theme, origin] = parts;
                push("Step back", [
                    ...parentLink("by-theme", theme, `All ${titleCase(theme)} tours`),
                    ...parentLink("from-origin", origin, `All tours from ${originLabel(origin)}`),
                ]);
                push(`${titleCase(theme)} tours from other cities`, fromPairs("theme-from", theme, "left"));
                push(`Other themes from ${originLabel(origin)}`, fromPairs("theme-from", origin, "right"));
            }
            break;
        }
        case "duration-from": {
            const parts = split(value, "-from-");
            if (parts) {
                const [dur, origin] = parts;
                push("Step back", [
                    ...parentLink("by-duration", dur, `All ${durationLabel(dur)} tours`),
                    ...parentLink("from-origin", origin, `All tours from ${originLabel(origin)}`),
                ]);
                push(`${durationLabel(dur)} tours from other cities`, fromPairs("duration-from", dur, "left"));
                push(`Other durations from ${originLabel(origin)}`, fromPairs("duration-from", origin, "right"));
            }
            break;
        }
        case "month-from": {
            const parts = split(value, "-from-");
            if (parts) {
                const [month, origin] = parts;
                push("Step back", [
                    ...parentLink("in-month", month, `Travelling in ${titleCase(month)}`),
                    ...parentLink("from-origin", origin, `All tours from ${originLabel(origin)}`),
                ]);
                push(`${titleCase(month)} departures from other cities`, fromPairs("month-from", month, "left"));
                push(`Other months from ${originLabel(origin)}`, fromPairs("month-from", origin, "right"));
            }
            break;
        }
        case "theme-month": {
            const parts = split(value, "-in-");
            if (parts) {
                const [theme, month] = parts;
                push("Step back", [
                    ...parentLink("by-theme", theme, `All ${titleCase(theme)} tours`),
                    ...parentLink("in-month", month, `Travelling in ${titleCase(month)}`),
                ]);
                push(`${titleCase(theme)} tours in other months`, inPairs("theme-month", theme, "left"));
                push(`Other themes in ${titleCase(month)}`, inPairs("theme-month", month, "right"));
            }
            break;
        }
        case "duration-month": {
            const parts = split(value, "-in-");
            if (parts) {
                const [dur, month] = parts;
                push("Step back", [
                    ...parentLink("by-duration", dur, `All ${durationLabel(dur)} tours`),
                    ...parentLink("in-month", month, `Travelling in ${titleCase(month)}`),
                ]);
                push(`${durationLabel(dur)} tours in other months`, inPairs("duration-month", dur, "left"));
                push(`Other durations in ${titleCase(month)}`, inPairs("duration-month", month, "right"));
            }
            break;
        }
        case "combo": {
            const m = value.match(/^(\d+-day)-(.+)$/);
            if (m) {
                push("Step back", [
                    ...parentLink("by-duration", m[1], `All ${durationLabel(m[1])} tours`),
                    ...parentLink("by-theme", m[2], `All ${titleCase(m[2])} tours`),
                ]);
            }
            push("Other pairings", siblingsOf("combo", (v) => titleCase(v.replace(/^(\d+)-day-/, "$1-Day "))));
            break;
        }
        default:
            break;
    }

    return groups;
}

/** Total link count, for sanity assertions in tests/audits. */
export function countLinks(groups: VariantLinkGroup[]): number {
    return groups.reduce((n, g) => n + g.links.length, 0);
}
