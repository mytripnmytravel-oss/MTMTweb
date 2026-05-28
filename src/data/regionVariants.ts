// Region variant engine (grid B12). Generic — works for any of the
// regional tour hubs in tourHubs.ts. Mirrors the Golden Triangle
// variant engine but is parameterised on regionSlug. Provides
// by-theme / by-duration / in-month variant content.

import { packages, packageSlug, slugify, type Package } from "./tours";
import { REGIONAL_HUBS } from "./tourHubs";

export type RegionVariantDimension = "by-theme" | "by-duration" | "in-month";

export interface RegionVariantContent {
    regionSlug: string;
    regionName: string;
    dimension: RegionVariantDimension;
    value: string;
    label: string;
    h1: string;
    answer: string;
    intro: string;
    packages: Package[];
    faqs: { q: string; a: string }[];
}

const MONTHS = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
];

const SEASON_BY_REGION: Record<string, Record<string, { season: string; verdict: string }>> = {
    rajasthan: {
        october: { season: "the prime season", verdict: "ideal" },
        november: { season: "peak", verdict: "ideal" },
        december: { season: "peak (cool nights)", verdict: "ideal" },
        january: { season: "peak (cool, possible fog in places)", verdict: "ideal" },
        february: { season: "prime season", verdict: "ideal" },
        march: { season: "warm shoulder", verdict: "good" },
        april: { season: "pre-summer heat", verdict: "dawn-only" },
        may: { season: "high summer heat", verdict: "dawn-only" },
        june: { season: "extreme heat", verdict: "dawn-only" },
        july: { season: "monsoon (brief in west, greens the south)", verdict: "quiet" },
        august: { season: "monsoon tail", verdict: "quiet" },
        september: { season: "post-monsoon, season opens", verdict: "good" },
    },
    kerala: {
        october: { season: "post-monsoon, season opening", verdict: "good" },
        november: { season: "prime season", verdict: "ideal" },
        december: { season: "peak", verdict: "ideal" },
        january: { season: "peak (calm seas, cleanest air)", verdict: "ideal" },
        february: { season: "prime season", verdict: "ideal" },
        march: { season: "warm shoulder", verdict: "good" },
        april: { season: "hot and humid", verdict: "warm" },
        may: { season: "hot and humid; pre-monsoon", verdict: "warm" },
        june: { season: "southwest monsoon arrives (heavy)", verdict: "wellness" },
        july: { season: "peak monsoon — Karkidaka Ayurveda season", verdict: "wellness" },
        august: { season: "monsoon, deep Ayurveda window", verdict: "wellness" },
        september: { season: "monsoon tail, easing", verdict: "wellness" },
    },
    himalayas: {
        october: { season: "post-monsoon clarity — peak views", verdict: "ideal" },
        november: { season: "clear cold; high passes closing progressively", verdict: "ideal" },
        december: { season: "winter; many high routes sealed", verdict: "winter" },
        january: { season: "deep winter", verdict: "winter" },
        february: { season: "deep winter; lower stations skiing in Auli", verdict: "winter" },
        march: { season: "spring opening (lower stations)", verdict: "good" },
        april: { season: "spring; Ladakh inaccessible by road", verdict: "good" },
        may: { season: "summer opens (Leh accessible by air; passes opening)", verdict: "ideal" },
        june: { season: "summer peak (Leh accessible by road)", verdict: "ideal" },
        july: { season: "Ladakh peak; monsoon in Himachal lower stations", verdict: "ladakh-peak" },
        august: { season: "Ladakh peak; monsoon further south", verdict: "ladakh-peak" },
        september: { season: "post-monsoon clarity returning", verdict: "ideal" },
    },
};

function titleCase(s: string): string {
    return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

function regionPackages(regionSlug: string): Package[] {
    const r = REGIONAL_HUBS.find((h) => h.slug === regionSlug);
    if (!r) return [];
    return packages.filter((p) => r.locationKeys.includes(p.location));
}

function regionThemes(regionSlug: string): string[] {
    return Array.from(new Set(regionPackages(regionSlug).map((p) => p.theme)));
}

function dayCount(p: Package): number {
    return Number.parseInt(p.duration, 10) || 0;
}

function regionDurations(regionSlug: string): string[] {
    return Array.from(new Set(regionPackages(regionSlug).map((p) => `${dayCount(p)}-day`))).filter(
        (d) => !d.startsWith("0")
    );
}

function monthNarrative(regionSlug: string, month: string): { answer: string; intro: string } {
    const regionName = REGIONAL_HUBS.find((h) => h.slug === regionSlug)?.name ?? regionSlug;
    const m = titleCase(month);
    const meta = SEASON_BY_REGION[regionSlug]?.[month];
    if (!meta) {
        return {
            answer: `${m} for ${regionName} — pacing and routing adjusted to the seasonal conditions. MyTripMyTravel sequences the circuit around the month's light, temperature, and access.`,
            intro: `Travelling ${regionName} in ${m} carries its own constraints and rewards; we plan the trip to them rather than against them.`,
        };
    }
    if (meta.verdict === "ideal") {
        return {
            answer: `${m} is one of the best months for ${regionName} — ${meta.season}, with soft light, comfortable days, and the cleanest air for photography. MyTripMyTravel runs the circuit on the chauffeured Elite Fleet protocol with escorted access at the marquee sites and pre-secured premium stays.`,
            intro: `${regionName} in ${m} is in the optimal window. Demand on the headline hotels is high; we secure them well ahead and time the day around the best hours.`,
        };
    }
    if (meta.verdict === "good") {
        return {
            answer: `${m} is a good month for ${regionName} — ${meta.season}. The circuit runs comfortably with early starts, generally lower crowds, and stronger availability. MyTripMyTravel adjusts pacing and timing to the season.`,
            intro: `${regionName} in ${m} trades a little heat or weather for noticeably lower crowds. We shift sightseeing earlier in the day and keep the fleet climate-controlled throughout.`,
        };
    }
    if (meta.verdict === "dawn-only") {
        return {
            answer: `${m} brings ${meta.season} to ${regionName}, with high daytime temperatures. The circuit is still operable but only as a dawn-focused, air-conditioned mission. MyTripMyTravel runs ${m} itineraries with strict heat protocols.`,
            intro: `A ${m} ${regionName} trip is for travellers fixed to summer dates. We compress sightseeing into the cool early hours, use a fully climate-controlled fleet, and build in midday rest.`,
        };
    }
    if (meta.verdict === "wellness") {
        return {
            answer: `${m} is ${meta.season} in ${regionName}. For Kerala specifically, July–September is the traditional Karkidaka Ayurveda treatment season — serious wellness travellers deliberately choose this window. Sightseeing is constrained by rainfall; wellness stays are the point.`,
            intro: `${regionName} in ${m} is the wellness window, not the sightseeing window. We anchor the trip to a vetted Ayurveda or wellness centre and time any sightseeing into clear breaks.`,
        };
    }
    if (meta.verdict === "quiet") {
        return {
            answer: `${m} is ${meta.season} for ${regionName}. The circuit runs but with weather flexibility and noticeably fewer travellers. MyTripMyTravel adjusts the routing day to day.`,
            intro: `Few travellers see ${regionName} in ${m}, which is precisely its appeal: lower visitor numbers, atmospheric light, and a moodier landscape.`,
        };
    }
    if (meta.verdict === "ladakh-peak") {
        return {
            answer: `${m} is the high-altitude peak in ${regionName} — Ladakh is fully accessible by road; lower Himalayan stations are in monsoon. MyTripMyTravel runs Ladakh missions on the medically-aware, permit-managed altitude protocol in this window.`,
            intro: `${regionName} in ${m} is the Ladakh window specifically — the open-pass, summer-clear weeks the rest of the year does not provide. Lower stations sit in monsoon.`,
        };
    }
    return {
        answer: `${m} is ${meta.season} in ${regionName} — most high routes sealed. The lower-altitude legs and ski / clear-view options (e.g. Auli) define the window.`,
        intro: `${regionName} in ${m} is a winter trip — lower altitudes, ski / view-clear options, and structured cold-weather pacing.`,
    };
}

// Regions with full variant routes built. Update this set when adding
// new region engines (each must have a SEASON_BY_REGION entry and a
// route folder at /tours/<region>/[dimension]/[value]).
const VARIANT_REGIONS = new Set(["rajasthan", "kerala", "himalayas"]);

export function regionHasVariants(regionSlug: string): boolean {
    return VARIANT_REGIONS.has(regionSlug);
}

export function getAllVariantRegions(): string[] {
    return Array.from(VARIANT_REGIONS);
}

export function getRegionVariantParams(
    regionSlug: string
): { dimension: string; value: string }[] {
    const params: { dimension: string; value: string }[] = [];
    for (const t of regionThemes(regionSlug)) params.push({ dimension: "by-theme", value: slugify(t) });
    for (const d of regionDurations(regionSlug)) params.push({ dimension: "by-duration", value: d });
    for (const m of MONTHS) params.push({ dimension: "in-month", value: m });
    return params;
}

export function resolveRegionVariant(
    regionSlug: string,
    dimension: string,
    value: string
): RegionVariantContent | null {
    const hub = REGIONAL_HUBS.find((h) => h.slug === regionSlug);
    if (!hub) return null;
    const regionName = hub.name;
    const all = regionPackages(regionSlug);

    if (dimension === "by-theme") {
        const theme = regionThemes(regionSlug).find((t) => slugify(t) === value);
        if (!theme) return null;
        const list = all.filter((p) => p.theme === theme);
        if (!list.length) return null;
        return {
            regionSlug,
            regionName,
            dimension: "by-theme",
            value,
            label: theme,
            h1: `${theme} ${regionName} Tours`,
            answer: `${theme} ${regionName} tours by MyTripMyTravel are private, chauffeured, escorted itineraries reweighted toward a ${theme.toLowerCase()} register without losing the regional core. ${list.length} ${theme.toLowerCase()} architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, each customisable.`,
            intro: `The ${theme.toLowerCase()} reading of ${regionName} — pacing, stays, dining, and access reweighted to the theme — without losing the canonical regional sequence. Every package below is a foundation, not a fixed product. ${hub.blurb}`,
            packages: list,
            faqs: [
                { q: `What makes a ${theme} ${regionName} tour different?`, a: `The regional core is preserved; the pacing, stays, dining, and access are reweighted toward a ${theme.toLowerCase()} experience. We tailor each to your party during planning.` },
                { q: `Can a ${theme} ${regionName} tour be customised?`, a: `Yes — every architecture above is a starting point, fully customisable while holding the ${theme.toLowerCase()} character.` },
                { q: `Is the ${theme} tour private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access. Never shared.` },
            ],
        };
    }

    if (dimension === "by-duration") {
        const days = Number.parseInt(value, 10);
        if (!days) return null;
        const list = all.filter((p) => dayCount(p) === days);
        if (!list.length) return null;
        return {
            regionSlug,
            regionName,
            dimension: "by-duration",
            value,
            label: `${days}-Day`,
            h1: `${days}-Day ${regionName} Tours`,
            answer: `A ${days}-day ${regionName} tour by MyTripMyTravel is a private, chauffeured, escorted circuit. ${list.length} ${days}-day architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, paced for the regional rhythm rather than compressed to fit a calendar.`,
            intro: `The ${days}-day ${regionName} length is ${days <= 5 ? "compressed — the headline experiences, sequenced tightly" : days <= 7 ? "balanced — full coverage with deliberate slower days" : "deep — unhurried, extension-ready"}. ${hub.blurb}`,
            packages: list,
            faqs: [
                { q: `Is ${days} days enough for ${regionName}?`, a: days <= 5 ? `Compressed but workable — the headline experiences land if sequenced carefully. More days allow a less compressed pace.` : `Yes — a ${days}-day length covers the regional core comfortably with deliberate slower days built in.` },
                { q: `Can the ${days}-day ${regionName} tour be extended?`, a: `Yes — the architecture is modular. We routinely extend into the Golden Triangle or other adjacent circuits.` },
                { q: `Is the ${days}-day tour private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access.` },
            ],
        };
    }

    if (dimension === "in-month") {
        const month = MONTHS.find((m) => m === value);
        if (!month) return null;
        const n = monthNarrative(regionSlug, month);
        return {
            regionSlug,
            regionName,
            dimension: "in-month",
            value,
            label: titleCase(month),
            h1: `${regionName} Tours in ${titleCase(month)}`,
            answer: n.answer,
            intro: n.intro,
            packages: all,
            faqs: [
                { q: `Is ${titleCase(month)} a good time for ${regionName}?`, a: n.answer },
                { q: `Can I travel ${regionName} in ${titleCase(month)}?`, a: `Yes — the architecture adapts to the month. ${n.intro}` },
                { q: `Is the ${titleCase(month)} ${regionName} tour private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access at the headlines.` },
            ],
        };
    }

    return null;
}

export function regionVariantHref(
    regionSlug: string,
    dimension: string,
    value: string
): string {
    return `/tours/${regionSlug}/${dimension}/${value}`;
}

// Surface-able lists for the regional hub page links.
export function regionThemeLinks(regionSlug: string): { label: string; href: string }[] {
    return regionThemes(regionSlug).map((t) => ({
        label: t,
        href: regionVariantHref(regionSlug, "by-theme", slugify(t)),
    }));
}

export function regionDurationLinks(regionSlug: string): { label: string; href: string }[] {
    return regionDurations(regionSlug).map((d) => ({
        label: d.replace("-day", "-Day"),
        href: regionVariantHref(regionSlug, "by-duration", d),
    }));
}

export function regionMonthLinks(regionSlug: string): { label: string; href: string }[] {
    return MONTHS.map((m) => ({
        label: titleCase(m),
        href: regionVariantHref(regionSlug, "in-month", m),
    }));
}

export { packageSlug };
