// Spoke-page derivation layer. Each city expands into 5 standalone,
// indexable facet pages, built entirely from existing Destination data.

import type { Destination, FAQ } from "./destinations";
import { destinations, getDestination } from "./destinations";

export type FacetSlug =
    | "best-time-to-visit"
    | "things-to-do"
    | "how-to-reach"
    | "where-to-stay"
    | "where-to-eat";

export const FACET_SLUGS: FacetSlug[] = [
    "best-time-to-visit",
    "things-to-do",
    "how-to-reach",
    "where-to-stay",
    "where-to-eat",
];

export const FACET_LABELS: Record<FacetSlug, string> = {
    "best-time-to-visit": "Best Time to Visit",
    "things-to-do": "Things to Do",
    "how-to-reach": "How to Reach",
    "where-to-stay": "Where to Stay",
    "where-to-eat": "Where to Eat",
};

export interface FacetBlock {
    heading: string;
    sub?: string;
    body: string;
}

export interface FacetContent {
    facet: FacetSlug;
    label: string;
    h1: string;
    /** Citation-ready answer block, first screen. */
    answer: string;
    intro: string;
    blocks: FacetBlock[];
    faqs: FAQ[];
}

export function getFacetContent(
    dest: Destination,
    facet: FacetSlug
): FacetContent {
    const label = FACET_LABELS[facet];
    const cityState = `${dest.name}, ${dest.state}`;

    switch (facet) {
        case "best-time-to-visit":
            return {
                facet,
                label,
                h1: `Best Time to Visit ${dest.name}`,
                answer: `The best time to visit ${cityState} is ${dest.bestTime.window}. ${dest.bestTime.narrative}`,
                intro: `Timing is the single biggest lever on the ${dest.name} experience. MyTripMyTravel architects every mission around the light, the crowd, and the season — here is exactly how the ${dest.name} calendar works and how we work it.`,
                blocks: [
                    {
                        heading: "Optimal window",
                        sub: dest.bestTime.window,
                        body: dest.bestTime.narrative,
                    },
                    {
                        heading: "How we sequence it",
                        body: `For ${dest.name} we recommend an ideal stay of ${factOf(dest, "Ideal stay") ?? "the curated duration"}, sequenced with our chauffeured fleet and escorted access so the prime hours are spent at the highlights, not in queues. Off-peak missions are still operated when the conditions and your schedule warrant it — with the pacing adjusted accordingly.`,
                    },
                ],
                faqs: pickFaqs(dest.faqs, ["time", "season", "month", "monsoon", "winter", "best"]),
            };

        case "things-to-do": {
            const list = dest.thingsToDo
                .map((t) => `${t.name} (${t.category}) — ${t.blurb}`)
                .join(" ");
            return {
                facet,
                label,
                h1: `Things to Do in ${dest.name}`,
                answer: `The essential things to do in ${cityState} include ${dest.thingsToDo
                    .slice(0, 4)
                    .map((t) => t.name)
                    .join(", ")}, and more. ${dest.tagline}. ${list}`,
                intro: `These are the itinerary atoms MyTripMyTravel operates in ${dest.name} — each one escorted, access-managed, and timed against the crowd and the light rather than left to chance.`,
                blocks: dest.thingsToDo.map((t) => ({
                    heading: t.name,
                    sub: t.category,
                    body: t.blurb,
                })),
                faqs: pickFaqs(dest.faqs, ["do", "see", "visit", "worth", "enough", "day"]),
            };
        }

        case "how-to-reach": {
            const list = dest.howToReach
                .map((m) => `By ${m.mode}: ${m.detail}`)
                .join(" ");
            return {
                facet,
                label,
                h1: `How to Reach ${dest.name}`,
                answer: `To reach ${cityState}: ${list}`,
                intro: `Access to ${dest.name} is a logistics problem we solve end to end — permits, transfers, and a GPS-tracked chauffeured fleet so the journey is part of the mission, not friction before it.`,
                blocks: dest.howToReach.map((m) => ({
                    heading: `By ${m.mode}`,
                    body: m.detail,
                })),
                faqs: pickFaqs(dest.faqs, ["reach", "drive", "far", "fly", "road", "train", "airport", "from"]),
            };
        }

        case "where-to-stay": {
            const list = dest.whereToStay
                .map((s) => `${s.tier}: ${s.detail}`)
                .join(" ");
            return {
                facet,
                label,
                h1: `Where to Stay in ${dest.name}`,
                answer: `Where to stay in ${cityState}: MyTripMyTravel curates accommodation across distinct tiers. ${list}`,
                intro: `We do not book a room; we place you in the right property for the mission. These are the ${dest.name} stay tiers we operate and how each one is used.`,
                blocks: dest.whereToStay.map((s) => ({
                    heading: s.tier,
                    body: s.detail,
                })),
                faqs: pickFaqs(dest.faqs, ["stay", "hotel", "palace", "camp", "resort", "night"]),
            };
        }

        case "where-to-eat":
        default: {
            const list = dest.whereToEat
                .map((e) => `${e.name}: ${e.detail}`)
                .join(" ");
            return {
                facet: "where-to-eat",
                label,
                h1: `Where to Eat in ${dest.name}`,
                answer: `Where to eat in ${cityState}: MyTripMyTravel arranges curated dining across the city's signature registers. ${list}`,
                intro: `Dining in ${dest.name} is curated through our heritage-dining wing — private tables, escorted trails, and the genuine kitchens rather than the tourist ones. These are the ${dest.name} dining experiences we operate.`,
                blocks: dest.whereToEat.map((e) => ({
                    heading: e.name,
                    body: e.detail,
                })),
                faqs: pickFaqs(dest.faqs, ["eat", "food", "dining", "cuisine", "thali", "table"]),
            };
        }
    }
}

function factOf(dest: Destination, label: string): string | undefined {
    return dest.quickFacts.find((f) => f.label === label)?.value;
}

function pickFaqs(faqs: FAQ[], keywords: string[]): FAQ[] {
    const matched = faqs.filter((f) =>
        keywords.some((k) => f.q.toLowerCase().includes(k))
    );
    return (matched.length ? matched : faqs).slice(0, 3);
}

export function getAllFacetParams(): { slug: string; facet: string }[] {
    const params: { slug: string; facet: string }[] = [];
    for (const d of destinations) {
        for (const f of FACET_SLUGS) {
            params.push({ slug: d.slug, facet: f });
        }
    }
    return params;
}

export function resolveFacet(
    slug: string,
    facet: string
): { dest: Destination; content: FacetContent } | null {
    const dest = getDestination(slug);
    if (!dest) return null;
    if (!FACET_SLUGS.includes(facet as FacetSlug)) return null;
    return { dest, content: getFacetContent(dest, facet as FacetSlug) };
}
