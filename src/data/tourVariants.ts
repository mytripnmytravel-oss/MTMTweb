// Tour variant engine — programmatic Golden Triangle pages built from
// the existing packages data, sliced by theme / duration / month.
// Each variant gets a unique, sensible answer block (no thin templating).

import { packages, packageSlug, slugify, type Package } from "./tours";

export type VariantDimension = "by-theme" | "by-duration" | "in-month" | "from-origin";

export interface VariantContent {
    dimension: VariantDimension;
    value: string;
    label: string;
    h1: string;
    answer: string;
    intro: string;
    packages: Package[];
    faqs: { q: string; a: string }[];
}

/** Golden Triangle core + GT-anchored extensions. */
export function gtPackages(): Package[] {
    return packages.filter(
        (p) => p.location === "Golden Triangle" || p.title.startsWith("GT")
    );
}

function dayCount(p: Package): number {
    return Number.parseInt(p.duration, 10) || 0;
}

// ---- Dimension dictionaries ----

export const GT_THEMES = Array.from(
    new Set(gtPackages().map((p) => p.theme))
);

export const GT_DURATIONS = Array.from(
    new Set(gtPackages().map((p) => `${dayCount(p)}-day`))
).filter((d) => !d.startsWith("0"));

export const MONTHS = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
];

const SEASON: Record<string, { season: string; verdict: string }> = {
    october: { season: "the prime winter window", verdict: "ideal" },
    november: { season: "peak season", verdict: "ideal" },
    december: { season: "peak season (book early)", verdict: "ideal" },
    january: { season: "peak season (cool, possible morning fog)", verdict: "ideal" },
    february: { season: "the prime winter window", verdict: "ideal" },
    march: { season: "the warm shoulder", verdict: "good" },
    april: { season: "the pre-summer heat", verdict: "dawn-only" },
    may: { season: "high summer heat", verdict: "dawn-only" },
    june: { season: "extreme heat into early monsoon", verdict: "dawn-only" },
    july: { season: "the monsoon", verdict: "quiet/private" },
    august: { season: "the monsoon", verdict: "quiet/private" },
    september: { season: "the late monsoon easing into season", verdict: "good" },
};

function titleCase(s: string): string {
    return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

// ---- Origin dictionary (curated high-value departure markets) ----

export interface Origin {
    slug: string;
    city: string;
    country: string;
    /** Realistic approximate non-stop/one-stop band into Delhi (DEL). */
    flightBand: string;
    /** Honest, general advisory — no fabricated specifics. */
    note: string;
}

export const ORIGINS: Origin[] = [
    { slug: "new-york", city: "New York", country: "USA", flightBand: "~14–15 hrs (non-stop) to Delhi", note: "Most US e-Visa-eligible travellers arrive at Delhi (DEL) and begin the circuit after a recovery night." },
    { slug: "los-angeles", city: "Los Angeles", country: "USA", flightBand: "~16–18 hrs (one-stop) to Delhi", note: "A West Coast arrival usually routes one-stop; we build a generous first-day buffer for the long crossing." },
    { slug: "san-francisco", city: "San Francisco", country: "USA", flightBand: "~15–17 hrs to Delhi", note: "Non-stop and one-stop options exist; the itinerary absorbs jet lag before the first monument." },
    { slug: "chicago", city: "Chicago", country: "USA", flightBand: "~14–16 hrs to Delhi", note: "Typically one-stop via a European or Gulf hub into Delhi (DEL)." },
    { slug: "toronto", city: "Toronto", country: "Canada", flightBand: "~14–15 hrs (non-stop) to Delhi", note: "Non-stop service into Delhi makes Toronto one of the smoother North American origins." },
    { slug: "london", city: "London", country: "UK", flightBand: "~8.5–9 hrs (non-stop) to Delhi", note: "One of the easiest origins — frequent non-stops into Delhi (DEL) and a manageable time shift." },
    { slug: "manchester", city: "Manchester", country: "UK", flightBand: "~9–11 hrs to Delhi", note: "Direct and one-stop options; the circuit starts after a single arrival night." },
    { slug: "paris", city: "Paris", country: "France", flightBand: "~8.5–9.5 hrs (non-stop) to Delhi", note: "Frequent non-stops into Delhi; a comfortable European origin for the Golden Triangle." },
    { slug: "frankfurt", city: "Frankfurt", country: "Germany", flightBand: "~7.5–8.5 hrs (non-stop) to Delhi", note: "A major hub with strong non-stop frequency into Delhi (DEL)." },
    { slug: "zurich", city: "Zurich", country: "Switzerland", flightBand: "~8 hrs (non-stop) to Delhi", note: "Direct service into Delhi; a smooth, short-haul-feel origin for the circuit." },
    { slug: "amsterdam", city: "Amsterdam", country: "Netherlands", flightBand: "~8.5 hrs (non-stop) to Delhi", note: "Frequent non-stops via the Schiphol hub into Delhi (DEL)." },
    { slug: "dubai", city: "Dubai", country: "UAE", flightBand: "~3.5 hrs (non-stop) to Delhi", note: "A short hop — ideal for long-weekend Golden Triangle missions and GCC high-spenders." },
    { slug: "abu-dhabi", city: "Abu Dhabi", country: "UAE", flightBand: "~3.5–4 hrs (non-stop) to Delhi", note: "Very short crossing; the circuit can start the same day with a fresh arrival." },
    { slug: "doha", city: "Doha", country: "Qatar", flightBand: "~4 hrs (non-stop) to Delhi", note: "A short Gulf hop with strong frequency into Delhi (DEL)." },
    { slug: "singapore", city: "Singapore", country: "Singapore", flightBand: "~5.5–6 hrs (non-stop) to Delhi", note: "An easy Asia-Pacific origin with minimal time shift and frequent non-stops." },
    { slug: "sydney", city: "Sydney", country: "Australia", flightBand: "~13–16 hrs (one-stop) to Delhi", note: "Usually one-stop via a Gulf or Asian hub; we build in a firm recovery buffer." },
    { slug: "tokyo", city: "Tokyo", country: "Japan", flightBand: "~9–12 hrs to Delhi", note: "Non-stop and one-stop options; a strong Phase-2 market with a manageable shift." },
    { slug: "hong-kong", city: "Hong Kong", country: "Hong Kong", flightBand: "~6 hrs (non-stop) to Delhi", note: "A short, easy crossing into Delhi (DEL) for the Golden Triangle." },
];

function monthNarrative(month: string): { answer: string; intro: string } {
    const m = titleCase(month);
    const s = SEASON[month];
    if (s.verdict === "ideal") {
        return {
            answer: `${m} is one of the best months for the Golden Triangle — ${s.season}, with soft light, comfortable days, and the cleanest air for photography across Delhi, Agra, and Jaipur. MyTripMyTravel sequences a chauffeured, escorted circuit timed for sunrise at the Taj Mahal and early entry at the forts before the crowds.`,
            intro: `Travelling the Golden Triangle in ${m} means you are in the optimal window. Demand is high, so monuments, palace hotels, and Taj sunrise slots are pre-secured well ahead. Every itinerary below is operated with our orthopedic-grade fleet and escorted access.`,
        };
    }
    if (s.verdict === "good") {
        return {
            answer: `${m} is a good month for the Golden Triangle — ${s.season}. Days are warmer than peak season but the circuit runs comfortably with early starts, fewer crowds, and better availability across Delhi, Agra, and Jaipur. MyTripMyTravel adjusts the pacing and timing accordingly.`,
            intro: `The Golden Triangle in ${m} trades a little heat for noticeably lower crowds and stronger availability. We shift sightseeing earlier in the day and keep the fleet climate-controlled throughout.`,
        };
    }
    if (s.verdict === "dawn-only") {
        return {
            answer: `${m} brings ${s.season} to the Golden Triangle, with daytime temperatures often above 40°C. The circuit is still operable but only as a dawn-focused, air-conditioned mission — Taj at sunrise, indoor and shaded sites at midday. MyTripMyTravel runs ${m} itineraries with strict heat protocols.`,
            intro: `A ${m} Golden Triangle is for travellers fixed to summer dates. We compress sightseeing into the cool early hours, use a fully climate-controlled fleet, and build in midday rest — the monuments are still extraordinary, the logistics simply tighter.`,
        };
    }
    return {
        answer: `${m} is ${s.season} on the Golden Triangle — dramatic skies, emerald gardens, and the lowest visitor numbers of the year. Rain is intermittent rather than constant, and the Taj Mahal against monsoon cloud is exceptional. MyTripMyTravel runs ${m} as a quiet, private, weather-flexible circuit.`,
        intro: `Few travellers see the Golden Triangle in ${m}, which is precisely its appeal: near-empty monuments and a moodier, greener landscape. We keep the itinerary flexible against the weather and time the Taj for clear windows.`,
    };
}

// ---- Resolver ----

export function resolveVariant(
    dimension: string,
    value: string
): VariantContent | null {
    const gt = gtPackages();

    if (dimension === "by-theme") {
        const theme = GT_THEMES.find((t) => slugify(t) === value);
        if (!theme) return null;
        const list = gt.filter((p) => p.theme === theme);
        if (!list.length) return null;
        return {
            dimension: "by-theme",
            value,
            label: theme,
            h1: `${theme} Golden Triangle Tours`,
            answer: `${theme} Golden Triangle tours by MyTripMyTravel are private, chauffeured itineraries through Delhi, Agra, and Jaipur built around a ${theme.toLowerCase()} register. ${list.length} mission architecture${list.length > 1 ? "s" : ""} are available, from ${list[0].price}, each escorted and customisable.`,
            intro: `These are our ${theme.toLowerCase()} Golden Triangle architectures — the circuit reframed for travellers who want a ${theme.toLowerCase()} emphasis without losing the core Delhi–Agra–Jaipur arc. Every itinerary is a foundation, ready for bespoke modification.`,
            packages: list,
            faqs: [
                { q: `What makes a ${theme} Golden Triangle tour different?`, a: `The route core stays Delhi–Agra–Jaipur, but the pacing, stays, dining, and inclusions are reweighted toward a ${theme.toLowerCase()} experience. We tailor each to your party.` },
                { q: `Can a ${theme} tour be customised?`, a: `Yes — every package shown is a starting architecture. We adjust duration, hotels, and stops while keeping the ${theme.toLowerCase()} character.` },
            ],
        };
    }

    if (dimension === "by-duration") {
        const days = Number.parseInt(value, 10);
        if (!days) return null;
        const list = gt.filter((p) => dayCount(p) === days);
        if (!list.length) return null;
        return {
            dimension: "by-duration",
            value,
            label: `${days}-Day`,
            h1: `${days}-Day Golden Triangle Tours`,
            answer: `A ${days}-day Golden Triangle tour by MyTripMyTravel covers Delhi, Agra, and Jaipur over ${days} days as a private, chauffeured, escorted circuit. ${list.length} ${days}-day architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, sequenced for sunrise at the Taj and early fort access.`,
            intro: `The ${days}-day Golden Triangle is ${days <= 3 ? "a high-efficiency sprint for time-constrained travellers" : days <= 5 ? "the balanced classic — enough time for the big monuments without compression" : "an unhurried deep circuit with room for slower, layered exploration"}. Each itinerary below is a foundation for bespoke modification.`,
            packages: list,
            faqs: [
                { q: `Is ${days} days enough for the Golden Triangle?`, a: days <= 3 ? "Three days covers the essential Delhi, Agra, and Jaipur highlights at pace, with a sunrise Taj visit. More days allow a less compressed experience." : "Yes — this duration covers the core circuit comfortably; we tailor the depth to your interests." },
                { q: `Can the ${days}-day tour be extended?`, a: "Yes — every architecture is modular. We routinely extend the Golden Triangle into Rajasthan, the Himalayas, or Kerala." },
            ],
        };
    }

    if (dimension === "in-month") {
        const month = MONTHS.find((m) => m === value);
        if (!month) return null;
        const n = monthNarrative(month);
        return {
            dimension: "in-month",
            value,
            label: titleCase(month),
            h1: `Golden Triangle Tours in ${titleCase(month)}`,
            answer: n.answer,
            intro: n.intro,
            packages: gt,
            faqs: [
                { q: `Is ${titleCase(month)} a good time for the Golden Triangle?`, a: n.answer },
                { q: `What should I pack for ${titleCase(month)}?`, a: SEASON[month].verdict === "dawn-only" ? "Lightweight breathable clothing, sun protection, and hydration — sightseeing is dawn-focused with climate-controlled transit." : SEASON[month].verdict === "quiet/private" ? "A light rain layer and quick-dry clothing — showers are intermittent and the circuit stays flexible." : "Layered clothing for cool mornings and mild days, plus comfortable footwear for the forts." },
            ],
        };
    }

    if (dimension === "from-origin") {
        const origin = ORIGINS.find((o) => o.slug === value);
        if (!origin) return null;
        const list = gt;
        return {
            dimension: "from-origin",
            value,
            label: `From ${origin.city}`,
            h1: `Golden Triangle Tours from ${origin.city}`,
            answer: `A Golden Triangle tour from ${origin.city}, ${origin.country} with MyTripMyTravel is a private, chauffeured Delhi–Agra–Jaipur circuit beginning at Delhi (DEL), the arrival gateway. Flight context: ${origin.flightBand}. ${origin.note} ${list.length} mission architectures are available, each escorted, jet-lag-paced, and fully customisable.`,
            intro: `Travelling from ${origin.city} to the Golden Triangle is a logistics question we solve end to end. ${origin.note} We sequence the first day around the ${origin.flightBand.includes("3.5") || origin.flightBand.includes("4 hrs") || origin.flightBand.includes("5.5") || origin.flightBand.includes("6 hrs") ? "short crossing — the circuit can begin almost immediately" : "long crossing — with a deliberate recovery buffer before the first monument"}. Every itinerary below is a foundation, ready for bespoke modification.`,
            packages: list,
            faqs: [
                { q: `How long is the flight from ${origin.city} to the Golden Triangle?`, a: `${origin.flightBand}. The circuit begins at Delhi (DEL); ${origin.note}` },
                { q: `Do I need a visa to travel from ${origin.country}?`, a: `India offers an e-Visa to travellers of many nationalities; requirements vary by passport. Our concierge advises on the current process for ${origin.country} passport holders as part of planning.` },
                { q: `How many days should I plan coming from ${origin.city}?`, a: `We recommend factoring the ${origin.flightBand} crossing into the trip length — typically a 5–7 day Golden Triangle with an arrival buffer, extendable into Rajasthan or the Himalayas.` },
            ],
        };
    }

    return null;
}

export function getAllVariantParams(): { dimension: string; value: string }[] {
    const params: { dimension: string; value: string }[] = [];
    for (const t of GT_THEMES) params.push({ dimension: "by-theme", value: slugify(t) });
    for (const d of GT_DURATIONS) params.push({ dimension: "by-duration", value: d });
    for (const m of MONTHS) params.push({ dimension: "in-month", value: m });
    for (const o of ORIGINS) params.push({ dimension: "from-origin", value: o.slug });
    return params;
}

export function variantHref(dimension: string, value: string): string {
    return `/tours/golden-triangle/${dimension}/${value}`;
}

export { packageSlug };
