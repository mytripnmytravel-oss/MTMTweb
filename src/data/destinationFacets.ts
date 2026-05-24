// Spoke-page derivation layer. Each city expands into 5 standalone,
// indexable facet pages, built entirely from existing Destination data.

import type { Destination, FAQ } from "./destinations";
import { destinations, getDestination } from "./destinations";

export type FacetSlug =
    | "best-time-to-visit"
    | "things-to-do"
    | "how-to-reach"
    | "where-to-stay"
    | "where-to-eat"
    | "with-kids"
    | "for-couples";

export const FACET_SLUGS: FacetSlug[] = [
    "best-time-to-visit",
    "things-to-do",
    "how-to-reach",
    "where-to-stay",
    "where-to-eat",
    "with-kids",
    "for-couples",
];

export const FACET_LABELS: Record<FacetSlug, string> = {
    "best-time-to-visit": "Best Time to Visit",
    "things-to-do": "Things to Do",
    "how-to-reach": "How to Reach",
    "where-to-stay": "Where to Stay",
    "where-to-eat": "Where to Eat",
    "with-kids": "With Kids",
    "for-couples": "For Couples",
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
    const idealStay = factOf(dest, "Ideal stay") ?? "the curated duration";
    const relatedLabels = dest.relatedTours.map((r) => r.label).join(", ");

    // Shared closing block — cross-references the wider mission so every
    // facet page carries genuine context, not just the raw data list.
    const standardBlock: FacetBlock = {
        heading: `Architecting ${label} with MyTripMyTravel`,
        body: `${dest.name} is operated as part of the wider ${dest.region}, not in isolation. Whatever the ${label.toLowerCase()} decision, it is sequenced into a private, chauffeured, escorted itinerary — recommended stay ${idealStay} — with monument access, pacing, and contingency handled end to end. It connects naturally to ${relatedLabels || "the wider circuit"}, so this leg is one part of a coherent mission rather than a standalone booking. Every choice here is a starting architecture, refined to your party during planning.`,
    };

    switch (facet) {
        case "best-time-to-visit":
            return {
                facet,
                label,
                h1: `Best Time to Visit ${dest.name}`,
                answer: `The best time to visit ${cityState} is ${dest.bestTime.window}. ${dest.bestTime.narrative}`,
                intro: `Timing is the single biggest lever on the ${dest.name} experience — it shifts the light, the crowd, the temperature, and the availability of the best stays and access slots all at once. MyTripMyTravel architects every mission around it; here is exactly how the ${dest.name} calendar works, what each season trades off, and how we work it for you.`,
                blocks: [
                    {
                        heading: "Optimal window",
                        sub: dest.bestTime.window,
                        body: dest.bestTime.narrative,
                    },
                    {
                        heading: "How we sequence it",
                        body: `For ${dest.name} we recommend an ideal stay of ${idealStay}, sequenced with our chauffeured fleet and escorted access so the prime hours are spent at the highlights, not in queues. In peak season we pre-secure monument slots and premium stays well ahead; off-peak missions are still operated when the conditions and your schedule warrant it, with the pacing, routing, and expectations adjusted accordingly rather than pretending the season is something it is not.`,
                    },
                    standardBlock,
                ],
                faqs: pickFaqs(dest.faqs, ["time", "season", "month", "monsoon", "winter", "best"], facet, dest),
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
                intro: `These are the itinerary atoms MyTripMyTravel operates in ${dest.name} — each one escorted, access-managed, and timed against the crowd and the light rather than left to chance. They are not a checklist to rush; they are sequenced into a paced day so each lands at its best moment.`,
                blocks: [
                    ...dest.thingsToDo.map((t) => ({
                        heading: t.name,
                        sub: t.category,
                        body: t.blurb,
                    })),
                    standardBlock,
                ],
                faqs: pickFaqs(dest.faqs, ["do", "see", "visit", "worth", "enough", "day"], facet, dest),
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
                intro: `Access to ${dest.name} is a logistics problem MyTripMyTravel solves end to end — gateway selection, permits, transfers, and a GPS-tracked chauffeured fleet — so the journey is part of the mission rather than friction before it begins. Below is every viable route into ${dest.name}, the one we recommend, and how it connects onward.`,
                blocks: [
                    ...dest.howToReach.map((m) => ({
                        heading: `By ${m.mode}`,
                        body: m.detail,
                    })),
                    {
                        heading: "The recommended approach",
                        body: `For most ${dest.name} missions we route via ${dest.howToReach[0]?.mode ?? "the primary gateway"} — ${dest.howToReach[0]?.detail ?? "the standard chauffeured approach"} Arrival is timed against the ${dest.bestTime.window} window and a recommended stay of ${idealStay}, so the first day absorbs travel fatigue without losing prime sightseeing hours. The chauffeur and vehicle are pre-positioned; there is no transfer scramble on arrival.`,
                    },
                    {
                        heading: "Onward continuity",
                        body: `Reaching ${dest.name} is rarely the end point — it is a node in the ${dest.region}. The same GPS-tracked vehicle and chauffeur continue seamlessly into the wider circuit (${relatedLabels || "the onward route"}), so there is no re-booking, no handover gap, and no renegotiating logistics mid-trip. Inter-leg permits and timing are handled before you travel.`,
                    },
                    standardBlock,
                ],
                faqs: pickFaqs(dest.faqs, ["reach", "drive", "far", "fly", "road", "train", "airport", "from"], facet, dest),
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
                intro: `We do not simply book a room; we place you in the right property for the kind of mission you are running. These are the ${dest.name} stay tiers we operate, what each is for, and how we choose between them.`,
                blocks: [
                    ...dest.whereToStay.map((s) => ({
                        heading: s.tier,
                        body: s.detail,
                    })),
                    {
                        heading: "Matching tier to the mission",
                        body: `The right ${dest.name} tier is a function of the trip, not a price ladder. A short heritage leg, a slow-luxury stay, a celebration, or a recovery-paced visit each point to a different property — and the ${dest.bestTime.window} season affects availability of the best of them, which is why a recommended stay of ${idealStay} is pre-secured well ahead in peak months.`,
                    },
                    {
                        heading: "How we place you",
                        body: `Placement is handled by the planning desk against your party, pace, and the rest of the ${dest.region} itinerary, so the ${dest.name} stay sits coherently within the wider mission rather than as an isolated booking. Room blocks, suite categories, and arrival logistics are managed end to end.`,
                    },
                    standardBlock,
                ],
                faqs: pickFaqs(dest.faqs, ["stay", "hotel", "palace", "camp", "resort", "night"], facet, dest),
            };
        }

        case "with-kids": {
            // Family-friendly things to do: exclude pure-adventure items
            // that may have age/altitude restrictions.
            const familyItems = dest.thingsToDo.filter((t) => t.category !== "Adventure");
            const items = familyItems.length ? familyItems : dest.thingsToDo;
            return {
                facet,
                label,
                h1: `${dest.name} With Kids`,
                answer: `${dest.name}, ${dest.state} can be done well with kids when the itinerary is paced for them rather than against them. The family-suited highlights are ${items.slice(0, 4).map((t) => t.name).join(", ")}, sequenced into shorter monument blocks, midday rest, and dining vetted for dietary and pace. The ${dest.bestTime.window} window is optimal for family pacing in ${dest.name}. MyTripMyTravel runs a family ${dest.name} mission with kid-appropriate timing, ground-floor accessible stays where useful, and escorted access that removes queue stress.`,
                intro: `Travelling ${dest.name} with kids is a pacing problem more than a content problem. The monuments are real, the heat or altitude can be a real challenge, and the difference between a brilliant family day and a meltdown is timing — early starts, midday rest, vetted dining, and one big experience per day rather than three rushed ones. We design for that, not against it.`,
                blocks: [
                    {
                        heading: "Family-suited highlights",
                        body: items.map((t) => `${t.name}: ${t.blurb}`).join(" "),
                    },
                    {
                        heading: "Pacing the day for kids",
                        body: `In ${dest.name} we typically run one major sightseeing block in the cool morning hours, a midday rest at the stay (lunch + downtime + pool / read), and a softer afternoon stop or escorted walk before an early dinner. The ${dest.bestTime.window} window keeps temperatures workable; outside it the pacing tightens further. We do not run families on adult-circuit schedules.`,
                    },
                    {
                        heading: "Stays, dining, and logistics",
                        body: `Accommodation is chosen for connecting / family rooms, pool or garden, and ground-floor access where useful. Dining is vetted for hygiene and dietary needs (vegetarian, Jain, allergy) and planned in advance — no chance roadside stops. The chauffeured Elite Fleet seats parties comfortably, the chauffeur shadows movements, and the 24/7 desk is reachable for the inevitable small things.`,
                    },
                    {
                        heading: "Safety, health, and what we plan around",
                        body: `${dest.name} is safe with a vetted private operator handling navigation, vehicle staging, and crowd management. Bottled water, climate control, sunscreen, and basic first-aid are standard in the vehicle. For long-haul arrivals, the first day is treated as a recovery buffer rather than a sightseeing day.`,
                    },
                    standardBlock,
                ],
                faqs: pickFaqs(dest.faqs, ["kid", "famil", "child", "safe", "stay", "eat"], facet, dest),
            };
        }

        case "for-couples": {
            // Romantic / atmospheric register: lean on Heritage, Nature,
            // Culture, Cuisine, Wellness over pure Adventure.
            const romanticItems = dest.thingsToDo.filter((t) =>
                ["Heritage", "Nature", "Culture", "Cuisine", "Wellness"].includes(t.category)
            );
            const items = romanticItems.length ? romanticItems : dest.thingsToDo;
            return {
                facet,
                label,
                h1: `${dest.name} For Couples`,
                answer: `${dest.name}, ${dest.state} is a strong couples destination when the itinerary leans into the romantic register the city actually has — ${dest.tagline.toLowerCase()}. The signature couples moments are ${items.slice(0, 4).map((t) => t.name).join(", ")}, paired with intimate heritage dining and a slower pace than a family or sightseeing-heavy trip. The ${dest.bestTime.window} window is optimal. MyTripMyTravel curates ${dest.name} for couples with private vantages, sunset timing, and quiet luxury stays.`,
                intro: `Travelling ${dest.name} as a couple is about what to skip as much as what to see. The signature moments — a dawn monument, a sunset rooftop, a private dinner — are what land; a third fort in a single day rarely does. We slow the itinerary deliberately, place you somewhere intimate rather than just expensive, and time the day around two or three real moments.`,
                blocks: [
                    {
                        heading: "Signature couples moments",
                        body: items.map((t) => `${t.name}: ${t.blurb}`).join(" "),
                    },
                    {
                        heading: "Intimate stays",
                        body: dest.whereToStay.map((s) => `${s.tier}: ${s.detail}`).join(" "),
                    },
                    {
                        heading: "Private dining & the evening",
                        body: `Dining for two in ${dest.name} is curated through our heritage-dining wing — private rooftop tables, courtyard settings, or palace-hotel rooms with the city framed against the evening. ${dest.whereToEat[0]?.detail ?? "Region-specific menus matched to the city's tradition."} The night is treated as the centrepiece, not a logistics afterthought.`,
                    },
                    {
                        heading: "Pace and timing",
                        body: `Couples trips reward slowness. We pace ${dest.name} with one major heritage block in the morning, a long lunch and downtime at the stay, and a curated evening — a sunset vantage and a private table. The ${dest.bestTime.window} window gives the cleanest light. ${factOf(dest, "Ideal stay") ?? "An unhurried multi-night stay"} sits more comfortably than a single-night sprint.`,
                    },
                    standardBlock,
                ],
                faqs: pickFaqs(dest.faqs, ["couple", "romantic", "honeymoon", "evening", "sunset", "stay", "private"], facet, dest),
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
                intro: `Dining in ${dest.name} is curated through our heritage-dining wing — private tables, escorted trails, and the genuine kitchens rather than the tourist ones. ${dest.tagline}. These are the ${dest.name} dining experiences we operate and how we curate them.`,
                blocks: [
                    ...dest.whereToEat.map((e) => ({
                        heading: e.name,
                        body: e.detail,
                    })),
                    {
                        heading: "The dining context",
                        body: `${dest.name} sits within the ${dest.region}, and its table reflects that — regional ingredients, technique, and heritage recipes specific to this place rather than a generic pan-Indian menu. We treat dining as part of the itinerary, not an afterthought: it is timed into the day and matched to the pace of the leg.`,
                    },
                    {
                        heading: "How we curate it",
                        body: `Curation means vetted kitchens, private or semi-private settings, escorted access to the genuine establishments, and dietary requirements (vegetarian, allergies, medical, religious) planned in advance — not navigated on the spot. The same standard runs across the wider ${dest.region} circuit.`,
                    },
                    standardBlock,
                ],
                faqs: pickFaqs(dest.faqs, ["eat", "food", "dining", "cuisine", "thali", "table"], facet, dest),
            };
        }
    }
}

function factOf(dest: Destination, label: string): string | undefined {
    return dest.quickFacts.find((f) => f.label === label)?.value;
}

function pickFaqs(
    faqs: FAQ[],
    keywords: string[],
    facet: FacetSlug,
    dest: Destination
): FAQ[] {
    const matched = faqs.filter((f) =>
        keywords.some((k) => f.q.toLowerCase().includes(k))
    );
    const base = (matched.length ? matched : faqs).slice(0, 3);

    // Always-present, facet-specific synthesized Q&A so every spoke
    // carries a substantive FAQ block even when the city's hand-authored
    // FAQs skew to other topics.
    const label = FACET_LABELS[facet].toLowerCase();
    const synth: FAQ = {
        q: `How does MyTripMyTravel handle ${label} for ${dest.name}?`,
        a: `${dest.name} ${label} is planned as part of a single private, chauffeured, escorted mission across the ${dest.region}, with a recommended stay of ${factOf(dest, "Ideal stay") ?? "the curated duration"}. It is not a standalone booking — it is sequenced with monument access, pacing, and contingency, and refined to your party during planning.`,
    };
    return [...base, synth].slice(0, 4);
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
