// Region variant engine (grid B12). Generic — works for any of the
// regional tour hubs in tourHubs.ts. Mirrors the Golden Triangle
// variant engine but is parameterised on regionSlug. Provides
// by-theme / by-duration / in-month variant content.

import { packages, packageSlug, slugify, type Package } from "./tours";
import { REGIONAL_HUBS } from "./tourHubs";
import {
    ORIGINS,
    parseComboValue, comboValue,
    parseThemeFromValue, themeFromValue,
    parseDurationFromValue, durationFromValue,
    parseMonthFromValue, monthFromValue,
    parseThemeMonthValue, themeMonthValue,
    parseDurationMonthValue, durationMonthValue,
    type Origin,
} from "./tourVariants";

export type RegionVariantDimension =
    | "by-theme" | "by-duration" | "in-month" | "from-origin"
    | "combo" | "theme-from" | "duration-from" | "month-from"
    | "theme-month" | "duration-month";

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
    sikkim: {
        october: { season: "post-monsoon Kanchenjunga clarity — peak views", verdict: "ideal" },
        november: { season: "clear cold; sharpest mountain photography", verdict: "ideal" },
        december: { season: "early winter; quiet, atmospheric", verdict: "winter" },
        january: { season: "deep winter; north Sikkim largely closed", verdict: "winter" },
        february: { season: "late winter; clearing weather", verdict: "winter" },
        march: { season: "spring opening; rhododendron buds appearing", verdict: "good" },
        april: { season: "peak rhododendron bloom in Yumthang", verdict: "ideal" },
        june: { season: "monsoon arrives; landslide risk on Sikkim roads", verdict: "quiet" },
        may: { season: "late spring; clear pre-monsoon mountain views", verdict: "ideal" },
        july: { season: "peak monsoon; south Sikkim only", verdict: "quiet" },
        august: { season: "monsoon tail; Gangtok / Pelling operable", verdict: "quiet" },
        september: { season: "post-monsoon season returning", verdict: "good" },
    },
    andaman: {
        october: { season: "season opening; ferries return after monsoon", verdict: "good" },
        november: { season: "excellent — high season sets in", verdict: "ideal" },
        december: { season: "peak; Christmas / NYE on Havelock", verdict: "ideal" },
        january: { season: "peak island season; calm seas, dry", verdict: "ideal" },
        february: { season: "prime diving + sailing window", verdict: "ideal" },
        march: { season: "late peak; warmer seas, long beach days", verdict: "ideal" },
        april: { season: "pre-summer; quieter, excellent diving", verdict: "good" },
        may: { season: "pre-monsoon; calm before the rains", verdict: "good" },
        june: { season: "monsoon begins; limited ferry operations", verdict: "quiet" },
        july: { season: "peak monsoon; limited inter-island travel", verdict: "quiet" },
        august: { season: "monsoon; interior stays only", verdict: "quiet" },
        september: { season: "monsoon tail; ferry resumption from late month", verdict: "quiet" },
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
const VARIANT_REGIONS = new Set(["rajasthan", "kerala", "himalayas", "sikkim", "andaman"]);

// Per-region arrival gateway logic. Honest about routing reality:
// Rajasthan and Himalayas both come through Delhi (DEL); Kerala has
// direct Gulf and Singapore connections to Kochi (COK), with European
// and North American origins via Delhi or Mumbai.
function regionGateway(regionSlug: string, origin: Origin): { code: string; gateway: string; routingNote: string } {
    if (regionSlug === "kerala") {
        const directKochiOrigins = new Set([
            "dubai", "abu-dhabi", "doha", "singapore",
        ]);
        if (directKochiOrigins.has(origin.slug)) {
            return {
                code: "COK",
                gateway: "Kochi (COK)",
                routingNote: `${origin.city} has direct non-stop service into Kochi (COK), Kerala's primary international gateway — the Kerala circuit can begin almost immediately.`,
            };
        }
        return {
            code: "COK",
            gateway: "Kochi (COK)",
            routingNote: `From ${origin.city}, travellers typically route via Delhi (DEL) or Mumbai (BOM) onwards to Kochi (COK) by a short domestic flight, or arrive into Bangalore (BLR) with an onward road or air leg. We pre-arrange the connection so it is one continuous controlled operation.`,
        };
    }
    if (regionSlug === "himalayas") {
        return {
            code: "DEL",
            gateway: "Delhi (DEL)",
            routingNote: `Delhi (DEL) is the gateway for the Himalayan circuit. Onward to Leh (IXL) by domestic flight, or by escorted road to Shimla / Manali / Dharamshala. Altitude pacing is built into the first 24 hours from arrival.`,
        };
    }
    // Rajasthan default
    return {
        code: "DEL",
        gateway: "Delhi (DEL)",
        routingNote: `Delhi (DEL) is the primary gateway into Rajasthan, with a short chauffeured leg or domestic flight onward into Jaipur — the natural northern entry into the Rajasthan circuit. Travellers can also arrive into Mumbai (BOM) for an Udaipur-first routing.`,
    };
}

function isShortHop(flightBand: string): boolean {
    const m = flightBand.match(/([\d.]+)/);
    return m ? parseFloat(m[1]) <= 7 : false;
}

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
    const themes = regionThemes(regionSlug);
    const durations = regionDurations(regionSlug);
    const all = regionPackages(regionSlug);
    for (const t of themes) params.push({ dimension: "by-theme", value: slugify(t) });
    for (const d of durations) params.push({ dimension: "by-duration", value: d });
    for (const m of MONTHS) params.push({ dimension: "in-month", value: m });
    for (const o of ORIGINS.filter((o) => !o.domestic)) params.push({ dimension: "from-origin", value: o.slug });
    // Combo intersections — only where a real package exists.
    for (const t of themes) {
        for (const d of durations) {
            const days = Number.parseInt(d, 10);
            if (all.some((p) => dayCount(p) === days && p.theme === t)) {
                params.push({ dimension: "combo", value: comboValue(days, t) });
            }
        }
    }
    // Theme × from-origin — only where the theme has packages in the region.
    for (const t of themes) {
        if (all.some((p) => p.theme === t)) {
            for (const o of ORIGINS.filter((o) => !o.domestic)) {
                params.push({ dimension: "theme-from", value: themeFromValue(t, o.slug) });
            }
        }
    }
    // Duration × from-origin — only where the duration has packages in the region.
    for (const d of durations) {
        const days = Number.parseInt(d, 10);
        if (all.some((p) => dayCount(p) === days)) {
            for (const o of ORIGINS.filter((o) => !o.domestic)) {
                params.push({ dimension: "duration-from", value: durationFromValue(days, o.slug) });
            }
        }
    }
    // Month × from-origin — all months × all origins (regions operate year-round).
    for (const m of MONTHS) {
        for (const o of ORIGINS.filter((o) => !o.domestic)) {
            params.push({ dimension: "month-from", value: monthFromValue(m, o.slug) });
        }
    }
    // Theme × month
    for (const t of themes) {
        if (!all.some((p) => p.theme === t)) continue;
        for (const m of MONTHS) {
            params.push({ dimension: "theme-month", value: themeMonthValue(t, m) });
        }
    }
    // Duration × month
    for (const d of durations) {
        const days = Number.parseInt(d, 10);
        if (!all.some((p) => dayCount(p) === days)) continue;
        for (const m of MONTHS) {
            params.push({ dimension: "duration-month", value: durationMonthValue(days, m) });
        }
    }
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

    if (dimension === "combo") {
        const themes = regionThemes(regionSlug);
        const parsed = parseComboValue(value, themes);
        if (!parsed) return null;
        const { days, theme } = parsed;
        const list = all.filter((p) => dayCount(p) === days && p.theme === theme);
        if (!list.length) return null;
        return {
            regionSlug,
            regionName,
            dimension: "combo",
            value,
            label: `${days}-Day ${theme}`,
            h1: `${days}-Day ${theme} ${regionName} Tours`,
            answer: `A ${days}-day ${theme.toLowerCase()} ${regionName} tour by MyTripMyTravel is a private, chauffeured, escorted circuit operated over ${days} days with the pacing, stays, and inclusions tuned to a ${theme.toLowerCase()} register. ${list.length} architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, each fully customisable. The combination — a specific length sequenced for a specific character — is the starting frame, not a fixed product.`,
            intro: `The ${days}-day ${theme.toLowerCase()} ${regionName} is the intersection of two decisions: how long the trip lasts and what it is about. ${days <= 5 ? `Compressed but workable — the ${theme.toLowerCase()} signature moments land if sequenced carefully.` : days <= 7 ? `Balanced — full regional coverage with deliberate slower days, the ${theme.toLowerCase()} character intact.` : `Deep — unhurried, extension-ready, the slower texture the ${theme.toLowerCase()} register actually rewards.`} The ${theme.toLowerCase()} reading of ${regionName} is not a different circuit; it is a different set of priorities laid over the same regional core. ${hub.blurb}`,
            packages: list,
            faqs: [
                { q: `What does a ${days}-day ${theme} ${regionName} look like?`, a: `${regionName} sequenced over ${days} days with pacing, stays, and inclusions tuned to a ${theme.toLowerCase()} register — different priorities, same regional core.` },
                { q: `Is ${days} days enough for a ${theme} ${regionName} tour?`, a: days <= 5 ? `Compressed but workable — the headline ${theme.toLowerCase()} moments land. More days allow a less compressed pace.` : `Yes — a ${days}-day length covers the ${regionName} core comfortably with the ${theme.toLowerCase()} signature moments unhurried.` },
                { q: `Can the ${days}-day ${theme} tour be customised?`, a: `Yes — every architecture is a starting frame, customisable while holding both the ${days}-day rhythm and the ${theme.toLowerCase()} character.` },
                { q: `Is it private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access.` },
            ],
        };
    }

    if (dimension === "theme-month") {
        const themes = regionThemes(regionSlug);
        const parsed = parseThemeMonthValue(value, themes, MONTHS);
        if (!parsed) return null;
        const { theme, month } = parsed;
        const list = all.filter((p) => p.theme === theme);
        if (!list.length) return null;
        const n = monthNarrative(regionSlug, month);
        const m = titleCase(month);
        return {
            regionSlug,
            regionName,
            dimension: "theme-month",
            value,
            label: `${theme} in ${m}`,
            h1: `${theme} ${regionName} Tours in ${m}`,
            answer: `A ${theme.toLowerCase()} ${regionName} tour in ${m} combines a specific experiential register with the regional season's character. ${n.answer.split(".").slice(0, 2).join(".")}. ${list.length} ${theme.toLowerCase()} architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, customisable while holding the ${theme.toLowerCase()} character through ${m}'s pacing.`,
            intro: `${n.intro} The ${theme.toLowerCase()} register holds; ${m}'s climate and crowd profile shape the day-pacing, the stays, and the access strategy. ${hub.blurb}`,
            packages: list,
            faqs: [
                { q: `Is ${m} a good time for a ${theme} ${regionName} tour?`, a: n.answer },
                { q: `What makes a ${theme} ${regionName} different in ${m}?`, a: `The ${theme.toLowerCase()} register holds; ${m}'s climate shapes the day-pacing, stays, and access strategy.` },
                { q: `Can the ${theme} ${m} tour be customised?`, a: `Yes — every architecture is a starting frame.` },
                { q: `Is it private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet.` },
            ],
        };
    }

    if (dimension === "duration-month") {
        const parsed = parseDurationMonthValue(value, MONTHS);
        if (!parsed) return null;
        const { days, month } = parsed;
        const list = all.filter((p) => dayCount(p) === days);
        if (!list.length) return null;
        const n = monthNarrative(regionSlug, month);
        const m = titleCase(month);
        return {
            regionSlug,
            regionName,
            dimension: "duration-month",
            value,
            label: `${days}-Day in ${m}`,
            h1: `${days}-Day ${regionName} Tours in ${m}`,
            answer: `A ${days}-day ${regionName} tour in ${m} pairs a specific length with the regional season's character. ${n.answer.split(".").slice(0, 2).join(".")}. ${list.length} ${days}-day architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, paced for ${m}'s conditions.`,
            intro: `${n.intro} A ${days}-day window in ${m} is ${days <= 5 ? "compressed — headline experiences sequenced for the conditions" : "the balanced reading paced for the season"}. ${hub.blurb}`,
            packages: list,
            faqs: [
                { q: `Is ${days} days enough for ${regionName} in ${m}?`, a: days <= 5 ? `Compressed but workable in ${m}; longer is more comfortable.` : `Yes — ${days} days covers ${regionName} comfortably in ${m}.` },
                { q: `What's ${m} like for a ${days}-day ${regionName} tour?`, a: n.answer },
                { q: `Is it private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet.` },
            ],
        };
    }

    if (dimension === "duration-from") {
        const parsed = parseDurationFromValue(value);
        if (!parsed) return null;
        const { days, origin } = parsed;
        if (origin.domestic) return null; // India origins are scoped to the Golden Triangle
        const list = all.filter((p) => dayCount(p) === days);
        if (!list.length) return null;
        const gw = regionGateway(regionSlug, origin);
        const shortHop = isShortHop(origin.flightBand);
        return {
            regionSlug,
            regionName,
            dimension: "duration-from",
            value,
            label: `${days}-Day from ${origin.city}`,
            h1: `${days}-Day ${regionName} Tours from ${origin.city}`,
            answer: `A ${days}-day ${regionName} tour from ${origin.city}, ${origin.country} with MyTripMyTravel is a private, chauffeured, escorted circuit run over ${days} days, beginning at ${gw.gateway}. Flight context: ${origin.flightBand}. ${origin.note} ${list.length} ${days}-day architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, each jet-lag-paced and fully customisable.`,
            intro: `Travelling ${regionName} for ${days} days from ${origin.city} is the intersection of two decisions — the trip's length on the ground and how the ${origin.city} crossing is absorbed. ${gw.routingNote} The first day is sequenced around the ${shortHop ? "short crossing, with the circuit beginning almost immediately" : "long crossing, with a deliberate recovery buffer before the first major site"}. ${hub.blurb}`,
            packages: list,
            faqs: [
                { q: `How long is the flight from ${origin.city} to ${regionName}?`, a: `${origin.flightBand}. The circuit begins at ${gw.gateway}; ${origin.note}` },
                { q: `Is ${days} days enough for ${regionName} from ${origin.city}?`, a: days <= 5 ? `Compressed but workable. Factoring the ${origin.flightBand} crossing both ways, a longer arc is usually more comfortable.` : `Yes — ${days} days covers the ${regionName} core comfortably with the ${origin.flightBand} crossing factored in.` },
                { q: `Do I need a visa from ${origin.country}?`, a: `India offers an e-Visa to travellers of many nationalities; our concierge advises on the current process for ${origin.country} passport holders as part of planning.` },
                { q: `Is the tour private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access.` },
            ],
        };
    }

    if (dimension === "month-from") {
        const parsed = parseMonthFromValue(value, MONTHS);
        if (!parsed) return null;
        const { month, origin } = parsed;
        if (origin.domestic) return null; // India origins are scoped to the Golden Triangle
        const n = monthNarrative(regionSlug, month);
        const m = titleCase(month);
        const gw = regionGateway(regionSlug, origin);
        const shortHop = isShortHop(origin.flightBand);
        return {
            regionSlug,
            regionName,
            dimension: "month-from",
            value,
            label: `${m} from ${origin.city}`,
            h1: `${regionName} Tours in ${m} from ${origin.city}`,
            answer: `Travelling ${regionName} in ${m} from ${origin.city}, ${origin.country} combines the regional season's character with the ${origin.city} arrival window. ${n.answer} Flight context: ${origin.flightBand}. ${origin.note}`,
            intro: `${n.intro} For ${origin.city} departures, ${origin.note} ${gw.routingNote} The first day is sequenced around the ${shortHop ? "short crossing — the circuit can begin almost immediately" : "long crossing — with a deliberate recovery buffer at the gateway stay"}.`,
            packages: all,
            faqs: [
                { q: `Is ${m} a good time for ${regionName} from ${origin.city}?`, a: n.answer },
                { q: `How long is the flight from ${origin.city}?`, a: `${origin.flightBand}. ${origin.note}` },
                { q: `Do I need a visa from ${origin.country}?`, a: `India offers an e-Visa to travellers of many nationalities; our concierge advises on the current process for ${origin.country} passport holders as part of planning.` },
                { q: `Is the tour private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access.` },
            ],
        };
    }

    if (dimension === "theme-from") {
        const themes = regionThemes(regionSlug);
        const parsed = parseThemeFromValue(value, themes);
        if (!parsed) return null;
        const { theme, origin } = parsed;
        if (origin.domestic) return null; // India origins are scoped to the Golden Triangle
        const list = all.filter((p) => p.theme === theme);
        if (!list.length) return null;
        const gw = regionGateway(regionSlug, origin);
        const shortHop = isShortHop(origin.flightBand);
        return {
            regionSlug,
            regionName,
            dimension: "theme-from",
            value,
            label: `${theme} from ${origin.city}`,
            h1: `${theme} ${regionName} Tours from ${origin.city}`,
            answer: `A ${theme.toLowerCase()} ${regionName} tour from ${origin.city}, ${origin.country} with MyTripMyTravel is a private, chauffeured, escorted circuit reweighted to a ${theme.toLowerCase()} register, beginning at ${gw.gateway}. Flight context: ${origin.flightBand}. ${origin.note} ${list.length} ${theme.toLowerCase()} architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, each jet-lag-paced, customisable, and operated on the GPS-tracked Elite Fleet protocol.`,
            intro: `The intersection of a ${theme.toLowerCase()} reading of ${regionName} with a ${origin.city} departure is both a routing and an experience decision. ${gw.routingNote} The first day is sequenced around the ${shortHop ? "short crossing — the circuit can begin almost immediately" : "long crossing — with a deliberate recovery buffer before the first major site"}, with the ${theme.toLowerCase()} register held from the welcome onward. ${hub.blurb} The ${theme.toLowerCase()} character is preserved through the regional core, then optionally extended into adjacent circuits — Golden Triangle, Rajasthan, Kerala, Himalayas — without losing the weighting.`,
            packages: list,
            faqs: [
                { q: `How long is the flight from ${origin.city} to ${regionName}?`, a: `${origin.flightBand}. The circuit begins at ${gw.gateway}; ${origin.note}` },
                { q: `What makes a ${theme} ${regionName} from ${origin.city} different?`, a: `The regional core stays the same; pacing, stays, dining, and access are reweighted toward a ${theme.toLowerCase()} experience. The ${origin.city} arrival window drives the first-day sequencing.` },
                { q: `Do I need a visa to travel from ${origin.country} to India?`, a: `India offers an e-Visa to travellers of many nationalities; requirements vary by passport. Our concierge advises on the current process for ${origin.country} passport holders as part of planning.` },
                { q: `Can the ${theme} ${regionName} tour be customised?`, a: `Yes — every architecture is a starting frame, customisable while holding the ${theme.toLowerCase()} character and adjusted to your arrival window from ${origin.city}.` },
                { q: `Is the tour private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access. Never a shared group departure.` },
            ],
        };
    }

    if (dimension === "from-origin") {
        const origin = ORIGINS.find((o) => o.slug === value);
        if (!origin || origin.domestic) return null; // India origins are scoped to the Golden Triangle
        const gw = regionGateway(regionSlug, origin);
        const shortHop = isShortHop(origin.flightBand);
        return {
            regionSlug,
            regionName,
            dimension: "from-origin",
            value,
            label: `From ${origin.city}`,
            h1: `${regionName} Tours from ${origin.city}`,
            answer: `A ${regionName} tour from ${origin.city}, ${origin.country} with MyTripMyTravel is a private, chauffeured, escorted circuit beginning at ${gw.gateway}. Flight context: ${origin.flightBand}. ${origin.note} ${all.length > 0 ? `${all.length} mission architectures are available, each jet-lag-paced, fully customisable, and operated on the GPS-tracked Elite Fleet protocol.` : `The ${regionName} circuit is run bespoke through the planning desk — there is no fixed package shelf for this region.`}`,
            intro: `Travelling from ${origin.city} to ${regionName} is a logistics question we solve end to end. ${gw.routingNote} We sequence the first day around the ${shortHop ? "short crossing — the circuit can begin almost immediately with a fresh arrival" : "long crossing — with a deliberate recovery buffer before the first major site"}. Every itinerary below is a foundation, ready for bespoke modification.`,
            packages: all,
            faqs: [
                { q: `How long is the flight from ${origin.city} to ${regionName}?`, a: `${origin.flightBand}. The circuit begins at ${gw.gateway}; ${origin.note}` },
                { q: `Do I need a visa to travel from ${origin.country} to India?`, a: `India offers an e-Visa to travellers of many nationalities; requirements vary by passport. Our concierge advises on the current process for ${origin.country} passport holders as part of planning.` },
                { q: `How many days should I plan from ${origin.city}?`, a: `Factor the ${origin.flightBand} crossing into the trip length. For ${regionName} specifically, ${regionSlug === "himalayas" ? "we add a 24-hour low-altitude acclimatisation buffer before any high-altitude leg." : regionSlug === "kerala" ? "the recommended length is 7–10 days for the core Kochi–Munnar–Alleppey arc; longer for an integrated Ayurveda stay." : "the recommended length is 7–10 days for the core Jaipur–Udaipur–Jodhpur arc; longer to include Jaisalmer or Ranthambore."}` },
                { q: `Is the ${regionName} tour from ${origin.city} private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access. Never a shared group departure.` },
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

export function regionOriginLinks(regionSlug: string): { label: string; href: string }[] {
    return ORIGINS.map((o) => ({
        label: o.city,
        href: regionVariantHref(regionSlug, "from-origin", o.slug),
    }));
}

export function regionComboLinks(regionSlug: string): { label: string; href: string }[] {
    const themes = regionThemes(regionSlug);
    const durations = regionDurations(regionSlug);
    const all = regionPackages(regionSlug);
    const out: { label: string; href: string }[] = [];
    for (const t of themes) {
        for (const d of durations) {
            const days = Number.parseInt(d, 10);
            if (all.some((p) => dayCount(p) === days && p.theme === t)) {
                out.push({
                    label: `${days}-Day ${t}`,
                    href: regionVariantHref(regionSlug, "combo", comboValue(days, t)),
                });
            }
        }
    }
    return out;
}

export function regionThemeFromLinks(regionSlug: string): { label: string; href: string }[] {
    const themes = regionThemes(regionSlug);
    const all = regionPackages(regionSlug);
    const out: { label: string; href: string }[] = [];
    for (const t of themes) {
        if (!all.some((p) => p.theme === t)) continue;
        for (const o of ORIGINS) {
            out.push({
                label: `${t} · ${o.city}`,
                href: regionVariantHref(regionSlug, "theme-from", themeFromValue(t, o.slug)),
            });
        }
    }
    return out;
}

export function regionDurationFromLinks(regionSlug: string): { label: string; href: string }[] {
    const durations = regionDurations(regionSlug);
    const all = regionPackages(regionSlug);
    const out: { label: string; href: string }[] = [];
    for (const d of durations) {
        const days = Number.parseInt(d, 10);
        if (!all.some((p) => dayCount(p) === days)) continue;
        for (const o of ORIGINS) {
            out.push({
                label: `${days}-Day · ${o.city}`,
                href: regionVariantHref(regionSlug, "duration-from", durationFromValue(days, o.slug)),
            });
        }
    }
    return out;
}

export function regionMonthFromLinks(regionSlug: string): { label: string; href: string }[] {
    const out: { label: string; href: string }[] = [];
    for (const m of MONTHS) {
        for (const o of ORIGINS) {
            out.push({
                label: `${titleCase(m)} · ${o.city}`,
                href: regionVariantHref(regionSlug, "month-from", monthFromValue(m, o.slug)),
            });
        }
    }
    return out;
}

export { packageSlug, ORIGINS };
