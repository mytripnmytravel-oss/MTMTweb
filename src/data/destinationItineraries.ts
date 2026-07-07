// Itinerary spoke (grid C11). Synthesises per-city N-day itineraries
// from existing destination data, categorical, no fabricated specifics.
// Each (city, duration) becomes a standalone indexable page.

import { destinations, getDestination, type Destination } from "./destinations";
import { getMonumentsByCity } from "./monuments";

export const ITINERARY_DURATIONS = [3, 5, 7, 10, 14] as const;
export type ItineraryDuration = (typeof ITINERARY_DURATIONS)[number];

export interface ItineraryDay {
    day: number;
    title: string;
    paragraphs: string[];
}

export interface ItineraryContent {
    duration: ItineraryDuration;
    h1: string;
    answer: string;
    intro: string[];
    days: ItineraryDay[];
    closing: { heading: string; paragraphs: string[] }[];
    faqs: { q: string; a: string }[];
}

function pickN<T>(arr: T[], n: number): T[] {
    return arr.slice(0, n);
}

function paceLabel(d: ItineraryDuration): string {
    switch (d) {
        case 3: return "high-efficiency sprint";
        case 5: return "balanced classic";
        case 7: return "unhurried deep dive";
        case 10: return "deep dive + regional extension";
        case 14: return "comprehensive regional mission";
    }
}

function paceDescription(d: ItineraryDuration, dest: Destination): string {
    switch (d) {
        case 3:
            return `A 3-day ${dest.name} itinerary is a tight, headlines-only plan, the essential heritage, one signature moment, and a careful sequence so the days are spent on experience rather than transitions. We use it when ${dest.name} is a single leg in a wider Indian trip.`;
        case 5:
            return `A 5-day ${dest.name} itinerary is the balanced classic, full sightseeing without the compression, a deliberate slower day, and room to absorb the place rather than tour it. This is the most commonly recommended ${dest.name} length.`;
        case 7:
            return `A 7-day ${dest.name} itinerary is an unhurried, deep stay, every headline experienced at its best hour, second visits in better light, and time for the secondary places that make ${dest.name} more than its postcard.`;
        case 10:
            return `A 10-day ${dest.name} itinerary covers the city deeply and extends naturally into the wider ${dest.region}, treating ${dest.name} as a base rather than a single stop. The pacing rewards travellers who prefer fewer cities, more time per city.`;
        case 14:
            return `A 14-day plan based around ${dest.name} is effectively a full ${dest.region} mission with ${dest.name} as the anchor, the kind of trip where the texture of the region matters more than the count of cities, with real rest built in.`;
    }
}

function relatedCitySummary(dest: Destination): string {
    const links = dest.relatedCities
        .map((s) => getDestination(s)?.name)
        .filter(Boolean) as string[];
    if (!links.length) return `the wider ${dest.region} circuit`;
    if (links.length === 1) return links[0];
    return `${links.slice(0, -1).join(", ")} and ${links.at(-1)}`;
}

function buildDays(dest: Destination, duration: ItineraryDuration): ItineraryDay[] {
    const monuments = getMonumentsByCity(dest.slug);
    const things = dest.thingsToDo;
    const region = dest.region;
    const days: ItineraryDay[] = [];

    // Day 1, arrival + orientation (always)
    days.push({
        day: 1,
        title: `Arrival & ${dest.name} orientation`,
        paragraphs: [
            `Chauffeured arrival into ${dest.name} via ${dest.howToReach[0]?.detail.split(".")[0] ?? "the primary gateway"}. After settling at the curated stay, an unhurried orientation walk or drive frames the city, ${dest.tagline.toLowerCase()}, and absorbs travel fatigue without losing daylight.`,
            `An early dinner at a vetted heritage table eases the time-shift; we keep day one deliberately light. The full sightseeing protocol begins day two, when the body is on local time.`,
        ],
    });

    // Helper to pull a name + one-line description from either type.
    type NamedItem = { name: string; descriptor: string };
    const fromMonument = (i: number): NamedItem | null => {
        const m = monuments[i];
        if (!m) return null;
        return { name: m.name, descriptor: m.answer.split(".")[0] };
    };
    const fromThing = (i: number): NamedItem | null => {
        const t = things[i];
        if (!t) return null;
        return { name: t.name, descriptor: t.blurb };
    };

    // Day 2, primary headline (monument 0 or things 0)
    const primary: NamedItem | null = fromMonument(0) ?? fromThing(0);
    days.push({
        day: 2,
        title: primary ? `${primary.name}, the headline` : `${dest.name}, the headline`,
        paragraphs: [
            primary
                ? `The first full day is reserved for ${primary.name}, with escorted access at the best hour. ${primary.descriptor}.`
                : `The first full day is reserved for ${dest.name}'s headline experience, with escorted access at the best hour.`,
            `A midday return to the stay for lunch and rest, then a softer afternoon, a curated walk, a viewpoint timed for the late light, and a vetted dinner. The day is structured around one signature moment rather than three rushed ones.`,
        ],
    });

    // Day 3, secondary heritage
    if (duration >= 3) {
        const secondary: NamedItem | null = fromMonument(1) ?? fromThing(1);
        days.push({
            day: 3,
            title: secondary ? `${secondary.name} & deeper ${dest.name}` : `Deeper ${dest.name}`,
            paragraphs: [
                secondary
                    ? `${secondary.name}: ${secondary.descriptor}.`
                    : `A second full day in ${dest.name} for the next layer of the city, heritage, neighbourhoods, or the cultural fabric.`,
                duration === 3
                    ? `For a 3-day stay, this is the final day, onward transit or departure tomorrow morning. We compress the must-sees into the morning so the afternoon has room for a second look at the favourite.`
                    : `Built around the morning hour for ${secondary?.name ?? "the headline secondary"}, with afternoon time for ${things[2]?.name ?? "an escorted local circuit"} and ${dest.whereToEat[0]?.name ?? "a curated heritage dinner"}.`,
            ],
        });
    }

    // Day 4-5, depth or pivot
    if (duration >= 5) {
        const day4Item: NamedItem | null = fromThing(2) ?? fromMonument(2);
        days.push({
            day: 4,
            title: `${day4Item?.name ?? "Depth day"} & a slower rhythm`,
            paragraphs: [
                day4Item
                    ? `${day4Item.name}: ${day4Item.descriptor}.`
                    : `A deliberately slower day, late breakfast, a single curated experience, and a long afternoon at the stay. Travel as recovery, not coverage.`,
                `The ${dest.bestTime.window} window is optimal for ${dest.name}; the pacing is built around the light and the heat / cold profile of the season.`,
            ],
        });
        const day5Item = things[3] ?? things[1];
        days.push({
            day: 5,
            title: `${day5Item?.name ?? "Reserve day"} & evening centrepiece`,
            paragraphs: [
                day5Item
                    ? `${day5Item.name}: ${day5Item.blurb}.`
                    : `A reserve day, used for the favourite repeat, a curated shopping or craft visit, or a slow morning followed by an unhurried afternoon.`,
                `Evening is held as a centrepiece, a private heritage dining table, a sunset vantage, or a curated performance, rather than dispersed across multiple stops.`,
            ],
        });
    }

    // Day 6-7
    if (duration >= 7) {
        days.push({
            day: 6,
            title: "Secondary sites & a curated walk",
            paragraphs: [
                `The seventh-day rhythm tilts to depth, ${things.slice(4).map((t) => t.name).join(", ") || "the secondary heritage layer of " + dest.name}, and a curated walk through the old quarter or a craft neighbourhood with an expert guide.`,
                `By this point in the stay the rhythm of the city is familiar; the day rewards lingering rather than queuing.`,
            ],
        });
        days.push({
            day: 7,
            title: "Reserve / regional pivot",
            paragraphs: [
                `Day seven is held either as a true reserve day (rest, repeat-favourite, spa time at the stay) or as the pivot into the wider ${region} circuit, a day trip to ${relatedCitySummary(dest)} returning the same evening.`,
                `Travellers staying longer than seven nights typically extend into the wider region from here, treating ${dest.name} as the base rather than the whole trip.`,
            ],
        });
    }

    // Day 8-10
    if (duration >= 10) {
        days.push({
            day: 8,
            title: `Extension into ${dest.region}`,
            paragraphs: [
                `From day eight the itinerary opens out into ${region}. The chauffeured fleet relocates to ${relatedCitySummary(dest).split(",")[0]} as a paired leg, a slower, region-deep counterpoint to the ${dest.name} days.`,
                `Sequencing is built so the transfer is a sightseeing leg in its own right, not a wasted travel day.`,
            ],
        });
        days.push({
            day: 9,
            title: "Deep regional stop",
            paragraphs: [
                `A full day in the paired city, its headline experience in the morning, an unhurried afternoon, and an evening shaped by the region's signature register (palace dining, lake sunset, fort viewpoint depending on the destination).`,
                `The pace is deliberately slower than the urban days; the second city should feel different from ${dest.name}, not repetitive.`,
            ],
        });
        days.push({
            day: 10,
            title: "Return / onward and recovery",
            paragraphs: [
                `Day ten closes the loop, return to ${dest.name} for departure, or onward by chauffeured fleet to the next regional anchor.`,
                `For 10-day travellers we leave a half-day cushion before the international flight, a recovery morning at the stay, then airport handover.`,
            ],
        });
    }

    // Day 11-14
    if (duration >= 14) {
        days.push({
            day: 11,
            title: "Second regional pivot",
            paragraphs: [
                `Day eleven extends further into ${region}, often to a less-trodden heritage stop, the quieter cities reward attention at this length of trip.`,
                `Logistics shifts to the regional fleet rhythm: longer chauffeured legs, multi-night blocks, a single-property pace within each city.`,
            ],
        });
        days.push({
            day: 12,
            title: "Slow-luxury day",
            paragraphs: [
                `A full slow-luxury day at the regional stay, palace hotel, heritage haveli, or backwater retreat depending on the region. The agenda is deliberately empty.`,
                `Wellness, a structured massage, a yoga session, or an Ayurvedic touchpoint, is integrated through our sanctuary wing where the location supports it.`,
            ],
        });
        days.push({
            day: 13,
            title: "Closing region day",
            paragraphs: [
                `Closing day in the region: a final morning experience, the favourite repeat or a market walk for closure, and a slow return toward the departure city.`,
                `Travellers extend further at this point, Rajasthan into Kerala, Kerala into the Himalayas, but for a 14-day mission anchored at ${dest.name} we hold the trip's geometry closed.`,
            ],
        });
        days.push({
            day: 14,
            title: "Departure",
            paragraphs: [
                `Final morning at the stay, airport handover by the chauffeured fleet, and onward international flight.`,
                `The 14-day plan is treated as a single coherent mission, not a chain of short trips, the debrief is held within the protocol so the return or referral inherits the learning.`,
            ],
        });
    }

    return days;
}

export function getItineraryContent(
    dest: Destination,
    duration: ItineraryDuration
): ItineraryContent {
    const days = buildDays(dest, duration);
    const pace = paceLabel(duration);

    return {
        duration,
        h1: `${duration}-Day ${dest.name} Itinerary`,
        answer: `A ${duration}-day ${dest.name}, ${dest.state} itinerary by MyTripMyTravel is a ${pace} sequenced from real city data, headline heritage at its best hour, deliberate rest, vetted dining, and the chauffeured Elite Fleet handling logistics. The ${dest.bestTime.window} window is optimal; pacing adjusts outside it. Recommended stay tier ${dest.whereToStay[0]?.tier ?? "as briefed"}. The plan is a starting architecture, refined to your party during planning.`,
        intro: [
            paceDescription(duration, dest),
            `The principle is the same across every length: one signature moment per day, not three; rest engineered in rather than apologised for; logistics invisible to the guest. Everything below is sequenced into a private, chauffeured, escorted mission, never a shared coach.`,
        ],
        days,
        closing: [
            {
                heading: "When to travel",
                paragraphs: [
                    `Optimal: ${dest.bestTime.window}. ${dest.bestTime.narrative}`,
                ],
            },
            {
                heading: "Where to stay across the trip",
                paragraphs: [
                    dest.whereToStay.map((s) => `${s.tier}: ${s.detail}`).join(" "),
                    `Tier is matched to the kind of trip rather than a price ladder. A celebration leans to the top tier; a recovery or wellness stay leans to the calmer tier; a city-base for regional extension prioritises practicality.`,
                ],
            },
            {
                heading: "Onward & continuity",
                paragraphs: [
                    `${dest.name} is rarely the whole trip, it is a node in the ${dest.region}. The same chauffeured fleet continues seamlessly into the wider circuit (${relatedCitySummary(dest)}). Inter-leg permits and timing are handled before you travel.`,
                ],
            },
        ],
        faqs: [
            { q: `Is a ${duration}-day ${dest.name} itinerary enough?`, a: duration <= 3 ? `Three days is a tight, headlines-only stay, enough for the essential experiences if you accept a compressed pace. Five to seven days is more comfortable for ${dest.name}.` : duration <= 7 ? `Yes, ${duration} days is a strong stay that covers the headlines at their best hour without compression and includes a deliberate slower day.` : `For ${duration} days, ${dest.name} sits as the base and the itinerary extends into the wider ${dest.region} as a coherent regional mission.` },
            { q: `When is the best time for a ${duration}-day ${dest.name} trip?`, a: `${dest.bestTime.window}. ${dest.bestTime.narrative}` },
            { q: `Can the ${duration}-day plan be customised?`, a: `Entirely. Every itinerary below is a starting architecture; we adjust days, hotels, and stops to your party while holding the ${duration}-day rhythm.` },
            { q: `Is the itinerary private?`, a: `Always, a single party with a dedicated chauffeur on the GPS-tracked Elite Fleet protocol, escorted access at monuments. Never a shared group departure.` },
        ],
    };
}

export function itineraryExists(citySlug: string, duration: number): boolean {
    return (
        Boolean(getDestination(citySlug)) &&
        (ITINERARY_DURATIONS as readonly number[]).includes(duration)
    );
}

export function parseDurationSlug(slug: string): ItineraryDuration | null {
    const m = slug.match(/^(\d+)-day$/);
    if (!m) return null;
    const n = Number.parseInt(m[1], 10);
    return (ITINERARY_DURATIONS as readonly number[]).includes(n) ? (n as ItineraryDuration) : null;
}

export function getAllItineraryParams(): { slug: string; duration: string }[] {
    const out: { slug: string; duration: string }[] = [];
    for (const d of destinations) {
        for (const n of ITINERARY_DURATIONS) {
            out.push({ slug: d.slug, duration: `${n}-day` });
        }
    }
    return out;
}

export function getCityItineraryIndexParams(): { slug: string }[] {
    return destinations.map((d) => ({ slug: d.slug }));
}
