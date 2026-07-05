// Tour variant engine — programmatic Golden Triangle pages built from
// the existing packages data, sliced by theme / duration / month.
// Each variant gets a unique, sensible answer block (no thin templating).

import { packages, packageSlug, slugify, type Package } from "./tours";

export type VariantDimension =
    | "by-theme" | "by-duration" | "in-month" | "from-origin"
    | "combo" | "theme-from" | "duration-from" | "month-from"
    | "theme-month" | "duration-month";

/**
 * Parse a combo value like "7-day-luxury" → { days: 7, theme: "Luxury" }.
 * Returns null on malformed input or unknown theme.
 */
export function parseComboValue(value: string, themes: string[]): { days: number; theme: string } | null {
    const m = value.match(/^(\d+)-day-(.+)$/);
    if (!m) return null;
    const days = Number.parseInt(m[1], 10);
    if (!days) return null;
    const themeSlug = m[2];
    const theme = themes.find((t) => slugify(t) === themeSlug);
    if (!theme) return null;
    return { days, theme };
}

export function comboValue(days: number, theme: string): string {
    return `${days}-day-${slugify(theme)}`;
}

/**
 * Parse a theme-from value like "luxury-from-london" → { theme: "Luxury", origin: <Origin> }.
 * Themes and origins can both contain hyphens (e.g., "short-tours", "new-york"), so we
 * split on the literal substring `-from-` which appears in neither.
 */
export function parseThemeFromValue(value: string, themes: string[]): { theme: string; origin: Origin } | null {
    const idx = value.indexOf("-from-");
    if (idx < 0) return null;
    const themeSlug = value.slice(0, idx);
    const originSlug = value.slice(idx + "-from-".length);
    const theme = themes.find((t) => slugify(t) === themeSlug);
    if (!theme) return null;
    const origin = ORIGINS.find((o) => o.slug === originSlug);
    if (!origin) return null;
    return { theme, origin };
}

export function themeFromValue(theme: string, originSlug: string): string {
    return `${slugify(theme)}-from-${originSlug}`;
}

/**
 * Parse a duration-from value like "7-day-from-london" → { days: 7, origin: <Origin> }.
 * Returns null on malformed input or unknown origin.
 */
export function parseDurationFromValue(value: string): { days: number; origin: Origin } | null {
    const m = value.match(/^(\d+)-day-from-(.+)$/);
    if (!m) return null;
    const days = Number.parseInt(m[1], 10);
    if (!days) return null;
    const origin = ORIGINS.find((o) => o.slug === m[2]);
    if (!origin) return null;
    return { days, origin };
}

export function durationFromValue(days: number, originSlug: string): string {
    return `${days}-day-from-${originSlug}`;
}

/**
 * Parse a month-from value like "january-from-london" → { month, origin: <Origin> }.
 */
export function parseMonthFromValue(value: string, months: readonly string[]): { month: string; origin: Origin } | null {
    const idx = value.indexOf("-from-");
    if (idx < 0) return null;
    const month = value.slice(0, idx);
    if (!months.includes(month)) return null;
    const originSlug = value.slice(idx + "-from-".length);
    const origin = ORIGINS.find((o) => o.slug === originSlug);
    if (!origin) return null;
    return { month, origin };
}

export function monthFromValue(month: string, originSlug: string): string {
    return `${month}-from-${originSlug}`;
}

/** Parse a theme-month value like "luxury-in-november" → { theme, month }. */
export function parseThemeMonthValue(value: string, themes: string[], months: readonly string[]): { theme: string; month: string } | null {
    const idx = value.indexOf("-in-");
    if (idx < 0) return null;
    const themeSlug = value.slice(0, idx);
    const month = value.slice(idx + "-in-".length);
    const theme = themes.find((t) => slugify(t) === themeSlug);
    if (!theme || !months.includes(month)) return null;
    return { theme, month };
}

export function themeMonthValue(theme: string, month: string): string {
    return `${slugify(theme)}-in-${month}`;
}

/** Parse a duration-month value like "7-day-in-november" → { days, month }. */
export function parseDurationMonthValue(value: string, months: readonly string[]): { days: number; month: string } | null {
    const m = value.match(/^(\d+)-day-in-(.+)$/);
    if (!m) return null;
    const days = Number.parseInt(m[1], 10);
    if (!days || !months.includes(m[2])) return null;
    return { days, month: m[2] };
}

export function durationMonthValue(days: number, month: string): string {
    return `${days}-day-in-${month}`;
}

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
    /** Realistic approximate non-stop/one-stop band into Delhi (DEL). For domestic
     *  origins this reads as a domestic flight/train band instead. */
    flightBand: string;
    /** Honest, general advisory — no fabricated specifics. */
    note: string;
    /** True for Indian departure cities — switches content to domestic framing
     *  (no visa, no jet-lag, rail/short-flight, same-day start). */
    domestic?: boolean;
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

    // ── India departure cities (domestic market) ──
    { slug: "mumbai", city: "Mumbai", country: "India", domestic: true, flightBand: "~2 hr 15 min flight to Delhi (or an overnight Rajdhani train)", note: "A quick domestic hop from Mumbai — no visa and no jet lag, so many travellers begin the circuit the same day they land." },
    { slug: "bengaluru", city: "Bengaluru", country: "India", domestic: true, flightBand: "~2 hr 45 min flight to Delhi", note: "An easy, frequent domestic flight from Bengaluru; the Golden Triangle starts fresh with no international formalities." },
    { slug: "hyderabad", city: "Hyderabad", country: "India", domestic: true, flightBand: "~2 hr flight to Delhi", note: "A short domestic hop from Hyderabad — same-day start, no visa or paperwork needed." },
    { slug: "chennai", city: "Chennai", country: "India", domestic: true, flightBand: "~2 hr 45 min flight to Delhi", note: "A direct domestic flight from Chennai; the circuit can begin the same day you arrive." },
    { slug: "kolkata", city: "Kolkata", country: "India", domestic: true, flightBand: "~2 hr flight to Delhi", note: "A quick, frequent domestic hop from Kolkata with no international formalities." },
    { slug: "pune", city: "Pune", country: "India", domestic: true, flightBand: "~2 hr flight to Delhi", note: "An easy domestic flight from Pune; no visa or jet lag to factor into the plan." },
    { slug: "ahmedabad", city: "Ahmedabad", country: "India", domestic: true, flightBand: "~1 hr 30 min flight to Delhi (or an overnight train)", note: "One of the shortest hops — Ahmedabad to Delhi is quick, and the circuit starts the same day." },
];

// ---- Origin-aware phrasing helpers (domestic vs international framing) ----
function isShortHop(o: Origin): boolean {
    if (o.domestic) return true; // domestic = same-day, no recovery needed
    return /\b(3\.5|4 hrs|5\.5|6 hrs)\b/.test(o.flightBand);
}
function travelContextLabel(o: Origin): string {
    return o.domestic ? "Getting there" : "Flight context";
}
function pacingAdj(o: Origin): string {
    return o.domestic ? "comfortably paced" : "jet-lag-paced";
}
/** The first-day sequencing clause, tuned to the arrival type. */
function firstDayClause(o: Origin): string {
    if (o.domestic) return "short domestic hop — the circuit can begin the same day with a fresh, rested start";
    return isShortHop(o)
        ? "short crossing, with the circuit beginning almost immediately"
        : "long crossing, with a deliberate recovery buffer before the first monument";
}
/** "How do I get there / how long is the flight" FAQ, tuned to origin type. */
function getThereFaq(o: Origin): { q: string; a: string } {
    if (o.domestic) {
        return {
            q: `How do I get to the Golden Triangle from ${o.city}?`,
            a: `${o.flightBand} The circuit begins in Delhi. ${o.note}`,
        };
    }
    return {
        q: `How long is the flight from ${o.city} to the Golden Triangle?`,
        a: `${o.flightBand}. The circuit begins at Delhi (DEL); ${o.note}`,
    };
}
/** Visa FAQ for international origins; a rail-vs-fly FAQ for domestic ones. */
function visaOrTravelFaq(o: Origin): { q: string; a: string } {
    if (o.domestic) {
        return {
            q: `Do I need to fly, or can I travel by train from ${o.city}?`,
            a: `Both work — a short domestic flight is quickest, and comfortable overnight/express trains are an option too. There's no visa or international paperwork for domestic travellers; just choose your dates and we handle the rest.`,
        };
    }
    return {
        q: `Do I need a visa to travel from ${o.country}?`,
        a: `India offers an e-Visa to travellers of many nationalities; requirements vary by passport. Our concierge advises on the current process for ${o.country} passport holders as part of planning.`,
    };
}

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
            answer: `${theme} Golden Triangle tours by MyTripMyTravel are private, chauffeured itineraries through Delhi, Agra, and Jaipur built around a ${theme.toLowerCase()} register. ${list.length} mission architecture${list.length > 1 ? "s are" : " is"} available, from ${list[0].price}, each escorted and fully customisable. The Delhi–Agra–Jaipur core is preserved; what changes is the weighting — the pace, the stays, the dining, the access, and the time given to each stop are all tuned to a ${theme.toLowerCase()} emphasis rather than a generic sightseeing run.`,
            intro: `These are our ${theme.toLowerCase()} Golden Triangle architectures — the classic circuit reframed for travellers who want a ${theme.toLowerCase()} emphasis without losing the canonical Delhi–Agra–Jaipur arc. A ${theme.toLowerCase()} reading of the Triangle is not a different route; it is a different set of priorities laid over the same three cities — which monuments get the unhurried treatment, which are seen at first light, where the nights are spent, and how the chauffeured legs are paced. Every itinerary below is a foundation, not a fixed product: it is the starting architecture from which the weddings-grade planning desk builds your exact trip, adjusting duration, hotels, and stops while holding the ${theme.toLowerCase()} character. All of it is run on the private GPS-tracked Elite Fleet protocol with escorted monument access and contingency handled end to end.`,
            packages: list,
            faqs: [
                { q: `What makes a ${theme} Golden Triangle tour different?`, a: `The route core stays Delhi–Agra–Jaipur, but the pacing, stays, dining, and inclusions are reweighted toward a ${theme.toLowerCase()} experience rather than a uniform sightseeing run. We tailor each one to your party during planning.` },
                { q: `Can a ${theme} tour be customised?`, a: `Yes — every package shown is a starting architecture, not a fixed product. We adjust duration, hotels, stops, and pace while keeping the ${theme.toLowerCase()} character intact.` },
                { q: `Can a ${theme} Golden Triangle be extended beyond the three cities?`, a: `Yes — the ${theme.toLowerCase()} circuit is modular and routinely extends into Rajasthan, the Himalayas, or Kerala while preserving the same ${theme.toLowerCase()} weighting throughout.` },
                { q: `Is the ${theme} tour private?`, a: `Always — a single party, dedicated chauffeur, GPS-tracked, with escorted monument access. Never a shared group departure.` },
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
            answer: `A ${days}-day Golden Triangle tour by MyTripMyTravel covers Delhi, Agra, and Jaipur over ${days} days as a private, chauffeured, escorted circuit. ${list.length} ${days}-day architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, each sequenced for a sunrise Taj Mahal entry and early fort access before the crowds. The number of days does not just change how much you see — it changes the entire character of the trip: what is unhurried, what is compressed, where the nights fall, and how much the chauffeured legs can double as part of the experience rather than pure transfer.`,
            intro: `The ${days}-day Golden Triangle is ${days <= 3 ? "a high-efficiency sprint for time-constrained travellers — the essential Delhi, Agra, and Jaipur with a sunrise Taj, run tight but never rushed past the point of enjoyment" : days <= 5 ? "the balanced classic — enough time for the big monuments at their best hours, Fatehpur Sikri en route, and a slower Jaipur, without compression" : "an unhurried deep circuit with room for layered exploration, second visits in better light, and the slower texture the three cities reward"}. Duration is the single biggest determinant of pace, and we sequence the ${days}-day plan around the prime hours — sunrise at the Taj, early fort entry, monument timing against the Friday Taj closure — so the available days are spent on experience, not queues or recovery. Each itinerary below is a foundation for bespoke modification: hotels, inclusions, and the exact day split are tuned to your party while the ${days}-day rhythm is held. It runs on the private GPS-tracked Elite Fleet protocol with contingency end to end.`,
            packages: list,
            faqs: [
                { q: `Is ${days} days enough for the Golden Triangle?`, a: days <= 3 ? "Three days covers the essential Delhi, Agra, and Jaipur highlights at pace, with a sunrise Taj visit. More days allow a less compressed experience and time for Fatehpur Sikri and a slower Jaipur." : "Yes — this duration covers the core circuit comfortably with the monuments seen at their best hours; we tailor the depth to your interests." },
                { q: `Can the ${days}-day tour be extended?`, a: "Yes — every architecture is modular. We routinely extend the Golden Triangle into Rajasthan, the Himalayas, or Kerala from this base." },
                { q: `How is the ${days}-day plan paced?`, a: `Sequenced around prime hours — sunrise at the Taj, early fort entry, and timing that respects the Friday Taj closure — so the ${days} days are spent on experience rather than queues or travel fatigue.` },
                { q: `Is the ${days}-day Golden Triangle private?`, a: "Always — a single party with a dedicated chauffeur on the GPS-tracked Elite Fleet protocol, with escorted monument access. Never a shared departure." },
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

    if (dimension === "combo") {
        const parsed = parseComboValue(value, GT_THEMES);
        if (!parsed) return null;
        const { days, theme } = parsed;
        const list = gt.filter((p) => dayCount(p) === days && p.theme === theme);
        if (!list.length) return null;
        return {
            dimension: "combo",
            value,
            label: `${days}-Day ${theme}`,
            h1: `${days}-Day ${theme} Golden Triangle Tours`,
            answer: `A ${days}-day ${theme.toLowerCase()} Golden Triangle tour by MyTripMyTravel is a private, chauffeured Delhi–Agra–Jaipur circuit operated over ${days} days with the pacing, stays, and inclusions tuned to a ${theme.toLowerCase()} register. ${list.length} architecture${list.length > 1 ? "s are" : " is"} available, from ${list[0].price}, each escorted and fully customisable. The combination — a specific length sequenced for a specific character — is what the planning desk uses as a starting frame rather than a generic tour brief.`,
            intro: `The ${days}-day ${theme.toLowerCase()} Golden Triangle is the intersection of two decisions: how long you want the trip to last and what you want it to be about. ${days <= 3 ? "Three days run tight by design — the ${theme.toLowerCase()} signature moments are sequenced for prime hours; everything else is deliberately left off." : days <= 5 ? "Five days carries the canonical Delhi–Agra–Jaipur arc with enough ${theme.toLowerCase()} depth to feel real, not garnished." : days <= 7 ? "A seven-day window is the balanced ${theme.toLowerCase()} reading — full coverage, the ${theme.toLowerCase()} signature moments unhurried, with slower days built in." : "Longer than seven days opens the ${theme.toLowerCase()} circuit to second visits in better light, an extension into Rajasthan or the Himalayas, and the slow texture the ${theme.toLowerCase()} register actually rewards."} The ${theme.toLowerCase()} reading of the Triangle is not a different route; it is a different set of priorities laid over Delhi–Agra–Jaipur. Each architecture below is a foundation, customisable while holding both the ${days}-day rhythm and the ${theme.toLowerCase()} character. Operated on the GPS-tracked Elite Fleet protocol with escorted monument access.`,
            packages: list,
            faqs: [
                { q: `What does a ${days}-day ${theme} Golden Triangle look like?`, a: `Delhi–Agra–Jaipur sequenced over ${days} days with the pacing, stays, and inclusions tuned to a ${theme.toLowerCase()} register — different priorities laid over the same three cities.` },
                { q: `Is ${days} days enough for a ${theme} Golden Triangle?`, a: days <= 3 ? `Compressed but workable — the headline ${theme.toLowerCase()} moments land. More days allow a less compressed reading and the slower texture this register rewards.` : `Yes — a ${days}-day length covers the regional core comfortably with the ${theme.toLowerCase()} signature moments unhurried.` },
                { q: `Can the ${days}-day ${theme} tour be customised?`, a: `Yes — every architecture is a starting frame, not a fixed product. Hotels, inclusions, and the exact day split are tuned to your party while the ${days}-day rhythm and the ${theme.toLowerCase()} character are held.` },
                { q: `Can it be extended?`, a: `Yes — the architecture is modular. We routinely extend ${theme.toLowerCase()} Golden Triangle missions into Rajasthan, the Himalayas, or Kerala while holding the same ${theme.toLowerCase()} weighting through the onward leg.` },
                { q: `Is the ${days}-day ${theme} tour private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted monument access. Never a shared group departure.` },
            ],
        };
    }

    if (dimension === "theme-month") {
        const parsed = parseThemeMonthValue(value, GT_THEMES, MONTHS);
        if (!parsed) return null;
        const { theme, month } = parsed;
        const list = gt.filter((p) => p.theme === theme);
        if (!list.length) return null;
        const n = monthNarrative(month);
        const m = titleCase(month);
        return {
            dimension: "theme-month",
            value,
            label: `${theme} in ${m}`,
            h1: `${theme} Golden Triangle Tours in ${m}`,
            answer: `A ${theme.toLowerCase()} Golden Triangle tour in ${m} combines a specific experiential register with the regional season's character. ${n.answer.split(".").slice(0, 2).join(".")}. ${list.length} ${theme.toLowerCase()} architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, each operated on the GPS-tracked Elite Fleet protocol.`,
            intro: `${n.intro} For the ${theme.toLowerCase()} reading specifically, the pacing, stays, dining, and access slots are reweighted to a ${theme.toLowerCase()} register. The Delhi–Agra–Jaipur core is preserved; what changes is the priority on each leg, refined to your party during planning.`,
            packages: list,
            faqs: [
                { q: `Is ${m} a good time for a ${theme} Golden Triangle?`, a: n.answer },
                { q: `What makes a ${theme} Golden Triangle different in ${m}?`, a: `The ${theme.toLowerCase()} register holds; ${m}'s climate and crowd profile shape the day-pacing, the stays, and the access strategy. Together: a coherent ${m} ${theme.toLowerCase()} reading rather than two separate variables.` },
                { q: `Can the ${theme} ${m} tour be customised?`, a: `Yes — every architecture is a starting frame, customisable while holding both the ${theme.toLowerCase()} character and the ${m} pacing requirements.` },
                { q: `Is it private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access.` },
            ],
        };
    }

    if (dimension === "duration-month") {
        const parsed = parseDurationMonthValue(value, MONTHS);
        if (!parsed) return null;
        const { days, month } = parsed;
        const list = gt.filter((p) => dayCount(p) === days);
        if (!list.length) return null;
        const n = monthNarrative(month);
        const m = titleCase(month);
        return {
            dimension: "duration-month",
            value,
            label: `${days}-Day in ${m}`,
            h1: `${days}-Day Golden Triangle Tours in ${m}`,
            answer: `A ${days}-day Golden Triangle tour in ${m} pairs a specific length with the regional season's character. ${n.answer.split(".").slice(0, 2).join(".")}. ${list.length} ${days}-day architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, paced for the ${m} conditions rather than against them.`,
            intro: `${n.intro} A ${days}-day window is ${days <= 3 ? "compressed — the headline experiences sequenced for prime hours within ${m}'s constraints" : days <= 5 ? "the balanced canonical arc, paced for ${m}" : "an unhurried reading with the slow days the ${m} pacing rewards"}. Every architecture below is a foundation, refined to your party.`,
            packages: list,
            faqs: [
                { q: `Is ${days} days enough for the Golden Triangle in ${m}?`, a: days <= 3 ? `Three days is compressed but workable in ${m}; longer is more comfortable.` : `Yes — ${days} days covers the Golden Triangle core comfortably in ${m}'s conditions.` },
                { q: `What's the weather in ${m} for a ${days}-day tour?`, a: n.answer },
                { q: `Can the ${days}-day ${m} tour be extended?`, a: `Yes — the architecture is modular. Extension into Rajasthan or the Himalayas is straightforward.` },
                { q: `Is it private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet.` },
            ],
        };
    }

    if (dimension === "duration-from") {
        const parsed = parseDurationFromValue(value);
        if (!parsed) return null;
        const { days, origin } = parsed;
        const list = gt.filter((p) => dayCount(p) === days);
        if (!list.length) return null;
        return {
            dimension: "duration-from",
            value,
            label: `${days}-Day from ${origin.city}`,
            h1: `${days}-Day Golden Triangle Tours from ${origin.city}`,
            answer: `A ${days}-day Golden Triangle tour from ${origin.city}, ${origin.country} with MyTripMyTravel is a private, chauffeured Delhi–Agra–Jaipur circuit run over ${days} days, beginning at Delhi (DEL). ${travelContextLabel(origin)}: ${origin.flightBand}. ${origin.note} ${list.length} ${days}-day architecture${list.length > 1 ? "s are" : " is"} available from ${list[0].price}, each escorted, ${pacingAdj(origin)}, and fully customisable.`,
            intro: `Travelling the ${days}-day Golden Triangle from ${origin.city} is the intersection of two decisions — how long the trip lasts on the ground, and how the journey from ${origin.city} is absorbed into it. ${origin.note} The first day is sequenced around the ${firstDayClause(origin)}. The Delhi–Agra–Jaipur core is paced for the ${days}-day rhythm — ${days <= 3 ? "compressed to the headline experiences" : days <= 5 ? "the balanced canonical arc with slower days built in" : "the unhurried deeper reading with optional extension"}. Each architecture below is a starting frame, customisable to your party.`,
            packages: list,
            faqs: [
                getThereFaq(origin),
                { q: `Is ${days} days enough coming from ${origin.city}?`, a: days <= 3 ? `Three days is compressed but workable — the headline experiences land. Factoring the ${origin.flightBand} in both directions, a longer arc is usually more comfortable.` : `Yes — ${days} days covers the Golden Triangle core comfortably with the ${origin.flightBand} factored in.` },
                visaOrTravelFaq(origin),
                { q: `Can the ${days}-day tour be customised?`, a: `Yes — every architecture is a starting frame. Hotels, inclusions, and the exact day split are tuned to your party while the ${days}-day rhythm is held.` },
                { q: `Is the tour private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted monument access.` },
            ],
        };
    }

    if (dimension === "month-from") {
        const parsed = parseMonthFromValue(value, MONTHS);
        if (!parsed) return null;
        const { month, origin } = parsed;
        const n = monthNarrative(month);
        const m = titleCase(month);
        return {
            dimension: "month-from",
            value,
            label: `${m} from ${origin.city}`,
            h1: `Golden Triangle Tours in ${m} from ${origin.city}`,
            answer: `Travelling the Golden Triangle in ${m} from ${origin.city}, ${origin.country} combines the regional season's character with the ${origin.city} arrival window. ${n.answer} ${travelContextLabel(origin)}: ${origin.flightBand}. ${origin.note}`,
            intro: `${n.intro} For ${origin.city} departures, ${origin.note} The first day is sequenced around the ${firstDayClause(origin)} before the Taj sunrise window opens on day two.`,
            packages: gt,
            faqs: [
                { q: `Is ${m} a good time for the Golden Triangle from ${origin.city}?`, a: n.answer },
                getThereFaq(origin),
                visaOrTravelFaq(origin),
                { q: `Is the ${m} Golden Triangle from ${origin.city} private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted monument access.` },
            ],
        };
    }

    if (dimension === "theme-from") {
        const parsed = parseThemeFromValue(value, GT_THEMES);
        if (!parsed) return null;
        const { theme, origin } = parsed;
        const list = gt.filter((p) => p.theme === theme);
        if (!list.length) return null;
        return {
            dimension: "theme-from",
            value,
            label: `${theme} from ${origin.city}`,
            h1: `${theme} Golden Triangle Tours from ${origin.city}`,
            answer: `A ${theme.toLowerCase()} Golden Triangle tour from ${origin.city}, ${origin.country} with MyTripMyTravel is a private, chauffeured Delhi–Agra–Jaipur circuit reweighted to a ${theme.toLowerCase()} register, beginning at Delhi (DEL). ${travelContextLabel(origin)}: ${origin.flightBand}. ${origin.note} ${list.length} ${theme.toLowerCase()} architecture${list.length > 1 ? "s are" : " is"} available, from ${list[0].price}, each escorted, ${pacingAdj(origin)}, and fully customisable.`,
            intro: `The intersection of a ${theme.toLowerCase()} reading of the Golden Triangle with a ${origin.city} departure is both a routing and an experience decision. ${origin.note} The first day is sequenced around the ${firstDayClause(origin)}, with the ${theme.toLowerCase()} register held from the welcome onward. The Delhi–Agra–Jaipur core is preserved; what changes is the weighting — the pace, the stays, the dining, and the access slots tuned to a ${theme.toLowerCase()} emphasis. Every architecture below is a starting frame, customisable while holding the ${theme.toLowerCase()} character and adjusted to your arrival window from ${origin.city}.`,
            packages: list,
            faqs: [
                getThereFaq(origin),
                { q: `What makes a ${theme} Golden Triangle from ${origin.city} different?`, a: `The route core stays Delhi–Agra–Jaipur, but the pacing, stays, dining, and inclusions are reweighted toward a ${theme.toLowerCase()} experience. The ${origin.city} arrival window — ${origin.flightBand} — drives the first-day sequencing.` },
                visaOrTravelFaq(origin),
                { q: `Can a ${theme} Golden Triangle tour be customised?`, a: `Yes — every architecture is a starting frame, not a fixed product. Hotels, inclusions, and the exact day split are tuned to your party while the ${theme.toLowerCase()} character is held.` },
                { q: `Is the tour private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access at the headlines.` },
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
            answer: `A Golden Triangle tour from ${origin.city}, ${origin.country} with MyTripMyTravel is a private, chauffeured Delhi–Agra–Jaipur circuit beginning at Delhi (DEL), the arrival gateway. ${travelContextLabel(origin)}: ${origin.flightBand}. ${origin.note} ${list.length} mission architectures are available, each escorted, ${pacingAdj(origin)}, and fully customisable.`,
            intro: `Travelling from ${origin.city} to the Golden Triangle is a logistics question we solve end to end. ${origin.note} We sequence the first day around the ${firstDayClause(origin)}. Every itinerary below is a foundation, ready for bespoke modification.`,
            packages: list,
            faqs: [
                getThereFaq(origin),
                visaOrTravelFaq(origin),
                { q: `How many days should I plan coming from ${origin.city}?`, a: `We recommend factoring the ${origin.flightBand} into the trip length — typically a 5–7 day Golden Triangle${origin.domestic ? "" : " with an arrival buffer"}, extendable into Rajasthan or the Himalayas.` },
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
    // Combo intersections — only where a real package exists.
    const gt = gtPackages();
    for (const t of GT_THEMES) {
        for (const d of GT_DURATIONS) {
            const days = Number.parseInt(d, 10);
            if (gt.some((p) => dayCount(p) === days && p.theme === t)) {
                params.push({ dimension: "combo", value: comboValue(days, t) });
            }
        }
    }
    // Theme × from-origin — only where the theme has packages in GT.
    for (const t of GT_THEMES) {
        if (gt.some((p) => p.theme === t)) {
            for (const o of ORIGINS) {
                params.push({ dimension: "theme-from", value: themeFromValue(t, o.slug) });
            }
        }
    }
    // Duration × from-origin — only where the duration has packages in GT.
    for (const d of GT_DURATIONS) {
        const days = Number.parseInt(d, 10);
        if (gt.some((p) => dayCount(p) === days)) {
            for (const o of ORIGINS) {
                params.push({ dimension: "duration-from", value: durationFromValue(days, o.slug) });
            }
        }
    }
    // Month × from-origin — every month combinator (GT runs year-round).
    for (const m of MONTHS) {
        for (const o of ORIGINS) {
            params.push({ dimension: "month-from", value: monthFromValue(m, o.slug) });
        }
    }
    // Theme × month — only where the theme has GT packages.
    for (const t of GT_THEMES) {
        if (gt.some((p) => p.theme === t)) {
            for (const m of MONTHS) {
                params.push({ dimension: "theme-month", value: themeMonthValue(t, m) });
            }
        }
    }
    // Duration × month — only where the duration has GT packages.
    for (const d of GT_DURATIONS) {
        const days = Number.parseInt(d, 10);
        if (gt.some((p) => dayCount(p) === days)) {
            for (const m of MONTHS) {
                params.push({ dimension: "duration-month", value: durationMonthValue(days, m) });
            }
        }
    }
    return params;
}

export function variantHref(dimension: string, value: string): string {
    return `/tours/golden-triangle/${dimension}/${value}`;
}

export { packageSlug };
