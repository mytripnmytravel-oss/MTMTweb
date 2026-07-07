// City × month engine (grid C12). Synthesises a per-city, per-month page
// for every Destination × every calendar month. Anchored to the existing
// hand-authored `bestTime.narrative` on each Destination, layered with
// region-level monthly climate framing, and rendered as a long-form,
// AIO-ready, schema-rich content brief, never an empty stub.
//
// Total surface: 43 cities × 12 months = 516 pages.

import { destinations, getDestination, type Destination } from "./destinations";

export const MONTHS = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
] as const;

export type Month = (typeof MONTHS)[number];

export function parseMonthSlug(slug: string): Month | null {
    return (MONTHS as readonly string[]).includes(slug) ? (slug as Month) : null;
}

export function titleCase(s: string): string {
    return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

// Verdict drives the page's framing tone, the CTA, and the "what this
// month is for / avoid" matrix. Tuned per region and month.
export type Verdict =
    | "peak"        // Marquee window, book ahead
    | "ideal"       // Excellent
    | "good"        // Comfortable, lower demand
    | "shoulder"    // Workable with adjustments
    | "dawn-only"   // Hot, pre-dawn / dusk ops only
    | "monsoon"     // Lush, atmospheric, rain-aware
    | "winter-snow" // High passes sealed; ski / view-clear
    | "ladakh-peak" // Specific to high-altitude open-pass weeks
    | "wellness"    // Karkidaka Ayurveda window
    | "cyclone-risk"; // Coastal SE / E India November storms

interface RegionMonth {
    verdict: Verdict;
    headline: string;
    weather: string;
    light: string;
    crowd: string;
    note: string;
}

// Per-region × month grid. Hand-authored verdict labels and short factual
// strings; the page renders them inside a designed card.
const REGION_GRID: Record<string, Record<Month, RegionMonth>> = {
    "golden-triangle": {
        january: { verdict: "peak", headline: "Peak Golden Triangle window", weather: "10 to 22°C, dry, possible morning fog (esp. Delhi)", light: "Soft, golden, low sun, best Taj sunrise window", crowd: "High, Taj slots fill weeks ahead", note: "Build a fog-buffer day for Delhi arrivals." },
        february: { verdict: "peak", headline: "Prime sightseeing month", weather: "12 to 25°C, dry, clear skies", light: "Crisp, photographer-grade", crowd: "Very high through mid-Feb", note: "The single best month for first-time visitors, book 60+ days ahead." },
        march: { verdict: "ideal", headline: "Warm shoulder closing the peak", weather: "18 to 32°C, dry, warming fast", light: "Strong by noon, push starts earlier", crowd: "High but easing", note: "Holi (typically Mar) is a worthwhile cultural anchor with private arrangements." },
        april: { verdict: "dawn-only", headline: "Pre-summer heat begins", weather: "24 to 38°C, dry, intense afternoon sun", light: "Harsh midday, schedule weighted to early/late", crowd: "Low, hotel rates soften", note: "Operable as a dawn / dusk mission with a climate-controlled fleet." },
        may: { verdict: "dawn-only", headline: "Hot, only with strict protocols", weather: "28 to 43°C, very hot, dry", light: "Glare hard from 9am to 5pm", crowd: "Very low, best access at marquee sites", note: "Strictly dawn-only sightseeing; midday rest in cooled stays." },
        june: { verdict: "dawn-only", headline: "Extreme heat into pre-monsoon", weather: "30 to 44°C, humid late in month", light: "Hazy as monsoon nears", crowd: "Low", note: "Workable only for travellers fixed to summer dates." },
        july: { verdict: "monsoon", headline: "Monsoon, atmospheric and private", weather: "27 to 35°C, humid, heavy rain bursts", light: "Moody, dramatic skies", crowd: "Very low, Taj sunrise is genuinely private", note: "The quietest month at the Taj. Operate with weather-flex day plans." },
        august: { verdict: "monsoon", headline: "Monsoon tail, emerald gardens", weather: "26 to 34°C, humid, regular rain", light: "Washed, post-rain clarity", crowd: "Low", note: "Mughal gardens at their lushest. Independence Day (15 Aug) adds cultural depth." },
        september: { verdict: "good", headline: "Post-monsoon, season opening", weather: "24 to 33°C, easing rain, warm", light: "Clean, post-monsoon clarity returning", crowd: "Rising", note: "An undervalued window, Premium stays still have availability." },
        october: { verdict: "ideal", headline: "Season opens, exceptional clarity", weather: "20 to 32°C, dry, clean air", light: "Beautifully clear", crowd: "Rising fast, book early", note: "Diwali (typically Oct/Nov) is a major cultural anchor with curated viewing." },
        november: { verdict: "peak", headline: "Peak, book 60+ days ahead", weather: "13 to 28°C, dry, cool nights", light: "Soft winter angle", crowd: "Very high", note: "Best month-overall balance of weather + clarity + cultural calendar." },
        december: { verdict: "peak", headline: "Peak, winter clarity, cool nights", weather: "8 to 22°C, dry, cool, fog possible late in month", light: "Soft golden", crowd: "Very high (Christmas / New Year)", note: "Holiday-week premium rates; we secure suites 90+ days ahead." },
    },
    rajasthan: {
        january: { verdict: "peak", headline: "Peak desert season", weather: "8 to 22°C, dry, cool desert nights", light: "Crisp, low-angle", crowd: "Very high, Jaipur Lit Fest in Jan", note: "Jodhpur RIFF, Jaipur Lit Fest, polo season, book 90+ days ahead." },
        february: { verdict: "peak", headline: "Prime fort-climb month", weather: "10 to 26°C, dry", light: "Photographer's month", crowd: "Very high", note: "The ideal Rajasthan window, pre-summer comfort with full availability of palace stays." },
        march: { verdict: "ideal", headline: "Warm shoulder closing the peak", weather: "16 to 32°C, dry, warming", light: "Strong by noon", crowd: "High but easing", note: "Holi at Pushkar / Mathura nearby is worth a private build." },
        april: { verdict: "dawn-only", headline: "Heat rises, protocol-only ops", weather: "22 to 38°C, dry, intense", light: "Harsh midday", crowd: "Low", note: "Operable as dawn-fort climbs + late-evening city walks." },
        may: { verdict: "dawn-only", headline: "Severe summer heat", weather: "28 to 45°C, very hot, dry", light: "Brutal afternoon sun", crowd: "Very low", note: "Only with strict heat protocol; palace pool stays are the trip." },
        june: { verdict: "dawn-only", headline: "Pre-monsoon furnace", weather: "30 to 45°C, dry, very hot", light: "Hazy late in month", crowd: "Very low", note: "Bookable only with a clear understanding of the heat reality." },
        july: { verdict: "monsoon", headline: "Brief monsoon, greens the Aravalli", weather: "26 to 36°C, humid, sporadic rain (heavier in south)", light: "Soft post-rain", crowd: "Low", note: "Western Rajasthan (Jaisalmer) sees little rain; southern (Udaipur, Mount Abu) gets the dramatic monsoon." },
        august: { verdict: "monsoon", headline: "Monsoon tail in the south", weather: "25 to 34°C, humid", light: "Washed clarity", crowd: "Low", note: "Teej festival in Jaipur adds cultural depth, private viewings can be arranged." },
        september: { verdict: "good", headline: "Post-monsoon, season opens", weather: "23 to 34°C, drying out", light: "Strong post-monsoon clarity", crowd: "Rising", note: "Premium stays open availability before peak rates set in." },
        october: { verdict: "ideal", headline: "Season opens, desert cool returns", weather: "18 to 32°C, dry, comfortable", light: "Beautifully clean", crowd: "Rising, book ahead", note: "Sharad Purnima / Marwar Festival in Jodhpur, atmospheric cultural windows." },
        november: { verdict: "peak", headline: "Peak, Pushkar Camel Fair window", weather: "13 to 28°C, dry, cool nights", light: "Soft golden", crowd: "Very high, Pushkar fair drives demand region-wide", note: "If Pushkar is on the itinerary, book 6+ months ahead." },
        december: { verdict: "peak", headline: "Peak, palace-stay holiday season", weather: "9 to 24°C, dry, cool", light: "Soft winter angle", crowd: "Very high, Christmas / NYE", note: "Holiday-week premium rates; suites at heritage palaces fill 90+ days out." },
    },
    kerala: {
        january: { verdict: "peak", headline: "Peak backwater season", weather: "22 to 32°C, dry, low humidity", light: "Calm, clean coastal light", crowd: "Very high", note: "The single best month for first-time Kerala, calm seas, dry days, full availability." },
        february: { verdict: "peak", headline: "Prime month, full circuit comfortable", weather: "23 to 33°C, dry", light: "Beautifully clear", crowd: "Very high", note: "Houseboats, beaches, and tea estates all at their best. Book 60+ days ahead." },
        march: { verdict: "ideal", headline: "Warm shoulder closing peak", weather: "25 to 34°C, dry, warming", light: "Strong, clean", crowd: "High but easing", note: "Hill stations (Munnar) at their loveliest." },
        april: { verdict: "shoulder", headline: "Hot and humid pre-monsoon", weather: "27 to 36°C, humid", light: "Hazy late afternoon", crowd: "Easing", note: "Backwaters still excellent in early morning; afternoon rest indoors." },
        may: { verdict: "shoulder", headline: "Pre-monsoon heat", weather: "27 to 37°C, very humid", light: "Pre-monsoon haze", crowd: "Low", note: "Wellness stays make sense; sightseeing-heavy itineraries less so." },
        june: { verdict: "wellness", headline: "Karkidaka opens, Ayurveda window", weather: "24 to 32°C, heavy rain, humid", light: "Diffuse, atmospheric", crowd: "Low", note: "Classical Ayurveda treatment month, Karkidaka. Sightseeing is secondary." },
        july: { verdict: "wellness", headline: "Peak Karkidaka, full Ayurveda season", weather: "23 to 30°C, heavy monsoon, very humid", light: "Soft, washed", crowd: "Low (wellness only)", note: "The textbook Panchakarma window. Heavy rain, programme-anchored stay only." },
        august: { verdict: "wellness", headline: "Karkidaka tail, deep wellness window", weather: "24 to 31°C, easing monsoon", light: "Improving", crowd: "Low", note: "Onam festival (Aug to Sep) is atmospheric and culturally rich." },
        september: { verdict: "monsoon", headline: "Monsoon tail, weather easing", weather: "24 to 31°C, intermittent rain", light: "Clean post-rain", crowd: "Rising", note: "Late September is a strong entry month for early-bird trips." },
        october: { verdict: "good", headline: "Post-monsoon, season opening", weather: "24 to 31°C, drying", light: "Beautifully clear", crowd: "Rising fast", note: "The season opens; rates still soft pre-peak." },
        november: { verdict: "ideal", headline: "Excellent, clean and calm", weather: "22 to 31°C, dry, calm seas", light: "Crisp clarity", crowd: "High", note: "Many travellers prefer Nov over peak Jan, same weather, slightly lower demand." },
        december: { verdict: "peak", headline: "Peak, holiday season", weather: "22 to 31°C, dry, perfect", light: "Soft, clean", crowd: "Very high", note: "Christmas / New Year is celebrated heavily in coastal Kerala. Premium rates." },
    },
    himalayas: {
        january: { verdict: "winter-snow", headline: "Deep winter, lower stations only", weather: "−5 to 10°C lower stations; sub-zero high", light: "Razor-clear, low sun", crowd: "Low (skiers in Auli)", note: "Auli skiing window. Higher passes (Leh, Spiti) sealed." },
        february: { verdict: "winter-snow", headline: "Late winter, Auli ski peak", weather: "−4 to 12°C, mostly clear", light: "Crisp winter Himalayan", crowd: "Low", note: "Lower stations open; high routes still closed." },
        march: { verdict: "good", headline: "Spring opening, lower stations", weather: "5 to 18°C, clear, warming", light: "Clean spring clarity", crowd: "Rising", note: "Snow recedes from mid-altitude routes; rhododendrons bloom." },
        april: { verdict: "good", headline: "Spring, Shimla / Manali season opens", weather: "8 to 22°C, mostly clear", light: "Comfortable, clear", crowd: "Rising", note: "Ladakh inaccessible by road; Manali and Shimla in prime spring form." },
        may: { verdict: "ideal", headline: "Summer opens, Leh accessible by air", weather: "12 to 25°C lower, 5 to 20°C high", light: "Strong mountain light", crowd: "High", note: "Leh fly-in possible; passes opening progressively." },
        june: { verdict: "ladakh-peak", headline: "Summer peak, Ladakh by road", weather: "15 to 28°C lower, 10 to 22°C high", light: "Sharp high-altitude clarity", crowd: "Very high", note: "Ladakh road peak. Lower stations comfortable." },
        july: { verdict: "ladakh-peak", headline: "Ladakh window, south Himalaya in monsoon", weather: "Leh 12 to 24°C dry; Shimla 18 to 26°C wet", light: "Ladakh: brilliant; lower: monsoon-soft", crowd: "Very high in Ladakh", note: "Ladakh is in textbook form; Manali / Shimla in monsoon weather-flex mode." },
        august: { verdict: "ladakh-peak", headline: "Ladakh peak continues; south wet", weather: "Leh 13 to 25°C; lower stations 18 to 26°C wet", light: "Ladakh sharp; lower stations soft", crowd: "Very high in Ladakh", note: "Independence Day adds cultural moments." },
        september: { verdict: "ideal", headline: "Post-monsoon clarity returning", weather: "10 to 22°C, clearing fast", light: "Cleanest post-monsoon clarity", crowd: "High", note: "Often the single best month, Ladakh still open, south Himalaya clearing." },
        october: { verdict: "peak", headline: "Peak views, post-monsoon golden", weather: "5 to 20°C lower; sub-zero high passes", light: "The classic Himalayan clarity", crowd: "Very high", note: "Last weeks of safe Ladakh road access. Lower stations at peak." },
        november: { verdict: "ideal", headline: "Clear cold; high passes closing", weather: "0 to 18°C, mostly dry", light: "Soft late-autumn", crowd: "Easing", note: "Ladakh land routes closing; lower stations beautifully clear." },
        december: { verdict: "winter-snow", headline: "Early winter, atmospheric, cold", weather: "−2 to 15°C lower, sub-zero high", light: "Crisp, short days", crowd: "Low", note: "Christmas-NYE in colonial hill stations, atmospheric heritage stay." },
    },
    sikkim: {
        january: { verdict: "winter-snow", headline: "Deep winter, lower belt only", weather: "0 to 12°C lower; sub-zero north", light: "Clear cold", crowd: "Low", note: "North Sikkim (Lachen, Yumthang) often closed." },
        february: { verdict: "winter-snow", headline: "Late winter, clearing", weather: "2 to 15°C, mostly dry", light: "Crisp", crowd: "Low", note: "Rhododendron buds, pre-bloom window." },
        march: { verdict: "ideal", headline: "Spring opens, rhododendron starts", weather: "6 to 20°C, clearing", light: "Mountain-spring clean", crowd: "Rising", note: "Yumthang Valley rhododendron bloom begins late month." },
        april: { verdict: "peak", headline: "Peak, full rhododendron bloom", weather: "8 to 22°C, mostly dry", light: "Pristine", crowd: "Very high", note: "Yumthang Valley of Flowers in full colour. Book 60+ days ahead." },
        may: { verdict: "peak", headline: "Late spring, clear views, blooms easing", weather: "10 to 24°C, clear", light: "Strong, clean", crowd: "Very high", note: "Pre-monsoon clarity, full bloom in upper valleys." },
        june: { verdict: "monsoon", headline: "Monsoon begins, landslide-aware", weather: "12 to 24°C, increasing rain", light: "Soft, wet", crowd: "Easing", note: "North Sikkim road access weather-dependent. Lower belt operable." },
        july: { verdict: "monsoon", headline: "Peak monsoon, south Sikkim only", weather: "14 to 24°C, heavy rain", light: "Diffuse", crowd: "Low", note: "North Sikkim typically closed for road safety." },
        august: { verdict: "monsoon", headline: "Monsoon tail, Gangtok / Pelling open", weather: "14 to 25°C, easing rain", light: "Improving clarity", crowd: "Low", note: "Tea-estate visits possible between rain windows." },
        september: { verdict: "good", headline: "Post-monsoon, season returning", weather: "12 to 22°C, clearing", light: "Clean", crowd: "Rising", note: "North routes reopening from mid-month; full clarity returning." },
        october: { verdict: "peak", headline: "Peak, Kanchenjunga clearest", weather: "8 to 20°C, dry, crystal", light: "The Kanchenjunga photography month", crowd: "Very high", note: "The single best month for high-mountain photography." },
        november: { verdict: "ideal", headline: "Clear cold, perfect mountain light", weather: "4 to 18°C, dry", light: "Razor-clear", crowd: "High", note: "Slightly quieter than October with similar clarity." },
        december: { verdict: "winter-snow", headline: "Early winter, clear, cold, low crowds", weather: "0 to 14°C, dry, cold", light: "Crisp", crowd: "Low", note: "North Sikkim begins closing; Gangtok / Pelling beautifully clear." },
    },
    andaman: {
        january: { verdict: "peak", headline: "Peak island season", weather: "23 to 30°C, dry, calm seas", light: "Tropical clarity", crowd: "Very high", note: "Diving visibility 25 to 30m. Book Havelock luxury 60+ days ahead." },
        february: { verdict: "peak", headline: "Prime diving + sailing window", weather: "23 to 31°C, dry, very calm seas", light: "Crystal", crowd: "Very high", note: "Mantas season tail; reef visibility at maximum." },
        march: { verdict: "ideal", headline: "Late peak, still excellent", weather: "24 to 32°C, dry, calm", light: "Strong tropical", crowd: "High but easing", note: "Sea temp warming, long beach days." },
        april: { verdict: "ideal", headline: "Pre-summer, quieter, excellent diving", weather: "26 to 33°C, mostly dry, warm seas", light: "Hot, clean", crowd: "Easing", note: "Premium stays open availability before summer slow-season rates." },
        may: { verdict: "shoulder", headline: "Pre-monsoon, calm before the rains", weather: "26 to 34°C, humid, occasional pre-monsoon showers", light: "Hazy late afternoon", crowd: "Low", note: "Operable but with weather-flex day plans." },
        june: { verdict: "monsoon", headline: "Monsoon begins, limited ferry ops", weather: "25 to 31°C, heavy rain, rough seas", light: "Soft, wet", crowd: "Very low", note: "Many island ferries weather-suspended. Port Blair stays operable." },
        july: { verdict: "monsoon", headline: "Peak monsoon, limited operations", weather: "24 to 30°C, heavy rain", light: "Diffuse", crowd: "Very low", note: "Recommend rescheduling unless on fixed wet-season trip." },
        august: { verdict: "monsoon", headline: "Monsoon, interior stays only", weather: "24 to 30°C, persistent rain", light: "Soft", crowd: "Very low", note: "Cellular Jail and Port Blair museums viable; islands weather-dependent." },
        september: { verdict: "monsoon", headline: "Monsoon tail, easing toward season", weather: "24 to 31°C, easing rain", light: "Clearing late month", crowd: "Low", note: "Inter-island ferry resumption is progressive from late month." },
        october: { verdict: "good", headline: "Season opening, ferries return", weather: "24 to 31°C, intermittent rain easing", light: "Clean post-rain", crowd: "Rising", note: "Diving resumes; reef visibility recovering." },
        november: { verdict: "ideal", headline: "Excellent, high-season weather sets in", weather: "23 to 31°C, mostly dry, calm seas", light: "Crystal returning", crowd: "High", note: "Early-November cyclone risk has historically lowered in recent years; we monitor live forecasts." },
        december: { verdict: "peak", headline: "Peak, Christmas / NYE on Havelock", weather: "23 to 30°C, dry, calm", light: "Tropical clarity", crowd: "Very high", note: "Holiday-week premium rates; Havelock luxury sells out months ahead." },
    },
};

// Stable handle on REGION_GRID slug list (regions covered by hard data).
const REGION_KEYS = Object.keys(REGION_GRID);

// Verdict → short tone-tag used in chips/badges.
export const VERDICT_TAG: Record<Verdict, string> = {
    peak: "PEAK",
    ideal: "IDEAL",
    good: "GOOD",
    shoulder: "SHOULDER",
    "dawn-only": "HEAT, DAWN-ONLY",
    monsoon: "MONSOON",
    "winter-snow": "WINTER",
    "ladakh-peak": "LADAKH PEAK",
    wellness: "WELLNESS WINDOW",
    "cyclone-risk": "STORM-AWARE",
};

export const VERDICT_TONE: Record<Verdict, "go" | "ok" | "caution" | "specific"> = {
    peak: "go",
    ideal: "go",
    good: "ok",
    shoulder: "ok",
    "dawn-only": "caution",
    monsoon: "caution",
    "winter-snow": "specific",
    "ladakh-peak": "specific",
    wellness: "specific",
    "cyclone-risk": "caution",
};

export interface MonthFacet {
    heading: string;
    body: string;
}

export interface MonthContent {
    dest: Destination;
    month: Month;
    monthLabel: string;
    verdict: Verdict;
    verdictTag: string;
    verdictTone: "go" | "ok" | "caution" | "specific";
    h1: string;
    /** AIO-ready answer, first screen */
    answer: string;
    intro: string[];
    climate: {
        weather: string;
        light: string;
        crowd: string;
        rainfall: string;
    };
    headline: string;
    forThisMonth: string[];
    avoidThisMonth: string[];
    operationalNote: string;
    recommendedDuration: string;
    pairedRegions: { label: string; href: string }[];
    facets: MonthFacet[];
    faqs: { q: string; a: string }[];
    crossLinks: { label: string; href: string }[];
    siblingMonths: { label: string; href: string; verdict: Verdict }[];
}

function rainfallFrom(weather: string): string {
    const w = weather.toLowerCase();
    if (w.includes("heavy rain") || w.includes("peak monsoon")) return "High rainfall, daily heavy bursts";
    if (w.includes("monsoon") || w.includes("intermittent rain") || w.includes("easing rain")) return "Moderate rainfall, variable by week";
    if (w.includes("humid") && (w.includes("occasional") || w.includes("sporadic"))) return "Occasional pre-monsoon showers";
    if (w.includes("dry") || w.includes("clear")) return "Negligible, dry month";
    return "Variable, schedule allows for weather-flex";
}

function forAndAvoid(verdict: Verdict, dest: Destination, m: Month): { for: string[]; avoid: string[] } {
    const cityRegion = dest.region;
    const monthName = titleCase(m);
    const baseFor: string[] = [];
    const baseAvoid: string[] = [];

    switch (verdict) {
        case "peak":
            baseFor.push(`First-time visits to ${dest.name}, the marquee experience window.`);
            baseFor.push("Photography, festivals, and the best stay availability, provided you book ahead.");
            baseFor.push("Travellers who prioritise weather and clarity over crowd avoidance.");
            baseAvoid.push("Last-minute bookings, premium stays fill 60 to 90 days ahead.");
            baseAvoid.push("Crowd-averse travellers, major sites are at their busiest.");
            baseAvoid.push("Budget-conscious trips, peak rates across stays, flights, and transfers.");
            break;
        case "ideal":
            baseFor.push(`${monthName} in ${dest.name} carries most of the peak-month advantage with slightly easier conditions.`);
            baseFor.push("Travellers wanting peak-quality weather with better availability than the highest-demand weeks.");
            baseAvoid.push("Travellers needing absolute peak hotel availability, sometimes still requires advance booking.");
            break;
        case "good":
            baseFor.push("Shoulder-season travellers wanting strong weather at lower demand.");
            baseFor.push("Photography (post-monsoon or pre-peak clarity, depending on month).");
            baseFor.push("Trips combining sightseeing with wellness or culture without crowd pressure.");
            baseAvoid.push("Travellers expecting absolute peak conditions, this is a step below the marquee months.");
            break;
        case "shoulder":
            baseFor.push("Travellers fixed to these dates, itineraries adjusted to the conditions.");
            baseFor.push("Wellness, culture, and cuisine-focused stays where weather is secondary.");
            baseAvoid.push("Sightseeing-heavy itineraries demanding cool, dry weather.");
            baseAvoid.push("Outdoor adventure programmes requiring optimal conditions.");
            break;
        case "dawn-only":
            baseFor.push("Travellers who can run a strict dawn-and-dusk schedule with climate-controlled days.");
            baseFor.push("Lowest crowds at marquee sites, Taj, Amber Fort, Mehrangarh, and softest premium rates.");
            baseAvoid.push("Mid-day sightseeing of any kind, heat exposure becomes a medical concern.");
            baseAvoid.push("Travellers without heat tolerance, especially children and elderly guests.");
            baseAvoid.push("Outdoor adventure programmes.");
            break;
        case "monsoon":
            baseFor.push("Travellers wanting atmospheric, low-crowd Mughal gardens / palace courtyards / coastal landscapes.");
            baseFor.push(`${cityRegion} photography, washed light, dramatic skies, no haze.`);
            baseFor.push("Lowest rates at premium stays.");
            baseAvoid.push("Trekking and mountain road journeys with landslide risk.");
            baseAvoid.push("Fixed-itinerary travellers needing day-to-day reliability, schedule flexes around the weather.");
            break;
        case "wellness":
            baseFor.push("Classical Ayurveda (Karkidaka window, practitioners specifically come for this month).");
            baseFor.push("Residential wellness stays, Panchakarma and deep treatment programmes.");
            baseFor.push("Travellers prioritising rest, treatment, and recovery over sightseeing.");
            baseAvoid.push("Trips primarily about sightseeing or backwater touring, heavy rain limits the surrounding programme.");
            baseAvoid.push("Coastal water-sports / beach holidays.");
            break;
        case "winter-snow":
            baseFor.push("Skiing (Auli), snow-photography, atmospheric heritage-station stays.");
            baseFor.push("Travellers wanting quiet, cold-weather mountain solitude.");
            baseAvoid.push("High-altitude routes, Leh and Spiti are sealed by road.");
            baseAvoid.push("Travellers without cold tolerance or proper gear.");
            break;
        case "ladakh-peak":
            baseFor.push("Ladakh, the open-pass road-access weeks. The textbook Leh window.");
            baseFor.push("High-altitude adventure with full road access and reliable weather.");
            baseAvoid.push("Lower Himalayan stations in monsoon (Manali, Shimla, heavier rain, landslide risk).");
            baseAvoid.push("Travellers with altitude or medical sensitivity without proper acclimatisation planning.");
            break;
        case "cyclone-risk":
            baseFor.push("Travellers monitoring live forecasts; we shift bookings if a storm is named.");
            baseAvoid.push("Inflexible bookings on coastal SE / E India during named-storm windows.");
            break;
    }

    // Programme-aware overlay, add one item drawn from the city's actual character.
    const tagline = (dest.tagline || "").toLowerCase();
    if (tagline.includes("wellness") || tagline.includes("ayurveda")) {
        if (verdict === "wellness") baseFor.push(`${dest.name}'s Ayurveda tradition is specifically aligned with this month.`);
    }
    if (tagline.includes("desert")) {
        if (verdict === "dawn-only") baseAvoid.push("Desert safari programmes, even with cooled vehicles, exposure is severe.");
    }
    if (tagline.includes("beach") || tagline.includes("island") || tagline.includes("coast")) {
        if (verdict === "monsoon") baseAvoid.push("Open-water and beach-anchored programmes, sea state is unsafe.");
    }
    return { for: baseFor, avoid: baseAvoid };
}

function recommendedDurationFor(verdict: Verdict, dest: Destination): string {
    const idealStay = dest.quickFacts.find((q) => /ideal stay/i.test(q.label))?.value;
    const base = idealStay ?? "the standard duration for this destination";
    if (verdict === "peak" || verdict === "ideal") return `${base}. Sequence it within a wider regional circuit to amortise long-haul travel.`;
    if (verdict === "good") return `${base}. Demand-soft month allows easier extensions at the same stay.`;
    if (verdict === "dawn-only" || verdict === "monsoon" || verdict === "shoulder") {
        return `${base}, but with a day-pacing adjustment, fewer outdoor hours, more cultural and culinary depth, longer rest windows.`;
    }
    if (verdict === "wellness") return `For Ayurveda specifically, 7 to 14+ days minimum, Karkidaka is a residential month, not a day-trip month.`;
    if (verdict === "ladakh-peak") return `For Ladakh, 7+ days with at least 2 acclimatisation days. The window is short, plan months ahead.`;
    return base;
}

function pairedRegionsFor(month: Month, sourceRegion: string): { label: string; href: string }[] {
    // For a given month, surface other regions where this month is "go" tone,     // so a traveller looking at "Agra in May" can immediately see "Munnar
    // in May" / "Leh in May" as smarter alternatives.
    const out: { label: string; href: string }[] = [];
    for (const r of REGION_KEYS) {
        if (r === sourceRegion) continue;
        const v = REGION_GRID[r]?.[month]?.verdict;
        if (!v) continue;
        if (v === "peak" || v === "ideal" || v === "good" || v === "ladakh-peak" || v === "wellness") {
            out.push({ label: regionLabelFor(r), href: `/destinations/region/${r}` });
        }
    }
    return out.slice(0, 4);
}

function regionLabelFor(slug: string): string {
    return {
        "golden-triangle": "Golden Triangle",
        rajasthan: "Rajasthan",
        kerala: "Kerala",
        himalayas: "Himalayas",
        sikkim: "Sikkim",
        andaman: "Andaman Islands",
    }[slug] ?? slug;
}

export function getMonthContent(dest: Destination, month: Month): MonthContent {
    const regionSlug = dest.regionSlug;
    const grid = REGION_GRID[regionSlug]?.[month];
    if (!grid) {
        // Fallback for unrecognised region, Golden Triangle climate proxy.
        return getMonthContent({ ...dest, regionSlug: "golden-triangle" } as Destination, month);
    }

    const monthLabel = titleCase(month);
    const fAndA = forAndAvoid(grid.verdict, dest, month);

    const answer = `${dest.name} in ${monthLabel} sits in the ${grid.headline.toLowerCase()}, ${grid.weather}, with ${grid.light.toLowerCase()}. ${grid.crowd}. MyTripMyTravel architects the ${monthLabel} ${dest.name} mission around it, private, chauffeured, escorted, with the day-pacing tuned to the season rather than fought against. ${grid.note}`;

    const intro: string[] = [
        `Timing changes everything in ${dest.name}. ${monthLabel} sits in the ${grid.headline.toLowerCase()} of the ${dest.region} calendar, the kind of month that defines what you get from the trip more than any other variable, including the stay choice. We've architected ${dest.name} missions in every month; here is exactly what ${monthLabel} delivers and how we work it.`,
        dest.bestTime.narrative,
        `For ${monthLabel} specifically: ${grid.note} The standard ${dest.name} architecture (${dest.tagline.toLowerCase()}) is preserved; the day-pacing is rebuilt around this month's conditions.`,
    ];

    const facets: MonthFacet[] = [
        { heading: `Why visit ${dest.name} in ${monthLabel}`, body: `${grid.headline}. ${grid.weather}. ${grid.light}. ${dest.answer.split(".").slice(0, 2).join(".")}` },
        { heading: "What this month asks of you", body: `${grid.crowd}. ${grid.note} Travellers committed to ${monthLabel} are matched with stays, drivers, and access slots built for the conditions, not retrofitted to them.` },
        { heading: `How ${dest.name} sits inside ${dest.region}`, body: `${dest.name} is one piece of the wider ${dest.region}. In ${monthLabel}, the regional rhythm is: ${grid.headline.toLowerCase()}. The chauffeured Elite Fleet handles ${dest.name} and the onward leg as a single controlled operation.` },
        { heading: `Booking lead time for ${monthLabel}`, body: grid.verdict === "peak" ? `60 to 90+ days ahead. Premium stays, Taj/Amber/Mehrangarh-equivalent access slots, and chauffeured fleet capacity all need to be secured well in advance for ${monthLabel}.` : grid.verdict === "ideal" ? `45 to 60 days ahead. Strong demand but better availability than the absolute peak weeks.` : grid.verdict === "monsoon" || grid.verdict === "dawn-only" || grid.verdict === "wellness" ? `21 to 30 days ahead is typically enough, demand is lower, though specific wellness centres (for ${monthLabel} programmes) book further out.` : `30 to 45 days ahead is comfortable.` },
    ];

    const baseFaqs: { q: string; a: string }[] = [
        { q: `Is ${monthLabel} a good time to visit ${dest.name}?`, a: answer },
        { q: `What's the weather in ${dest.name} in ${monthLabel}?`, a: `${grid.weather}. ${grid.light}. ${rainfallFrom(grid.weather)}.` },
        { q: `Is ${dest.name} crowded in ${monthLabel}?`, a: grid.crowd },
        { q: `What should I plan around in ${dest.name} in ${monthLabel}?`, a: grid.note },
        { q: `How does ${monthLabel} compare to peak season in ${dest.name}?`, a: grid.verdict === "peak" || grid.verdict === "ideal" ? `${monthLabel} is itself in the peak or near-peak window.` : `The peak ${dest.name} window is captured on the dedicated best-time page. ${monthLabel} trades some of that peak quality for lower crowds and softer rates, the trade is the point.` },
    ];

    const siblingMonths = (MONTHS as readonly Month[])
        .filter((m) => m !== month)
        .map((m) => ({
            label: titleCase(m),
            href: `/destinations/${dest.slug}/in/${m}`,
            verdict: REGION_GRID[regionSlug]?.[m]?.verdict ?? "good",
        }));

    return {
        dest,
        month,
        monthLabel,
        verdict: grid.verdict,
        verdictTag: VERDICT_TAG[grid.verdict],
        verdictTone: VERDICT_TONE[grid.verdict],
        h1: `${dest.name} in ${monthLabel}`,
        answer,
        intro,
        climate: {
            weather: grid.weather,
            light: grid.light,
            crowd: grid.crowd,
            rainfall: rainfallFrom(grid.weather),
        },
        headline: grid.headline,
        forThisMonth: fAndA.for,
        avoidThisMonth: fAndA.avoid,
        operationalNote: grid.note,
        recommendedDuration: recommendedDurationFor(grid.verdict, dest),
        pairedRegions: pairedRegionsFor(month, regionSlug),
        facets,
        faqs: baseFaqs,
        crossLinks: [
            { label: `Explore ${dest.name}`, href: `/destinations/${dest.slug}` },
            { label: `Best time to visit ${dest.name}`, href: `/destinations/${dest.slug}/best-time-to-visit` },
            { label: `${dest.name} itineraries`, href: `/destinations/${dest.slug}/itinerary` },
            { label: `${dest.region} destinations`, href: `/destinations/region/${dest.regionSlug}` },
        ],
        siblingMonths,
    };
}

export function getAllCityMonthParams(): { slug: string; month: string }[] {
    const out: { slug: string; month: string }[] = [];
    for (const d of destinations) {
        for (const m of MONTHS) out.push({ slug: d.slug, month: m });
    }
    return out;
}

export function monthExists(citySlug: string, monthSlug: string): boolean {
    return Boolean(getDestination(citySlug)) && parseMonthSlug(monthSlug) !== null;
}
