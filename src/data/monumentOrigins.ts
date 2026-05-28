// Monument × origin engine (grid C16). 19 monuments × 18 origins =
// 342 per-monument, per-origin briefs. Highest-intent landmark SEO:
// "How to visit the Taj Mahal from London".

import { getDestination, type Destination } from "./destinations";
import { monuments, type Monument } from "./monuments";
import { ORIGINS, type Origin } from "./tourVariants";
import { getCityOriginContent } from "./destinationOrigins";

export interface MonumentOriginContent {
    monument: Monument;
    dest: Destination;
    origin: Origin;
    h1: string;
    answer: string;
    intro: string[];
    flightBand: string;
    gateway: { code: string; label: string; routingNote: string };
    accessNote: string;
    facets: { heading: string; body: string }[];
    faqs: { q: string; a: string }[];
    crossLinks: { label: string; href: string }[];
}

function monumentAccessNote(m: Monument): string {
    const visitInfo = m.visitorInfo.find((v) => /hours|timing|entry|best time/i.test(v.label));
    if (visitInfo) return `${visitInfo.label}: ${visitInfo.value}`;
    return "Access timed to the prime viewing hours; private guide arranged.";
}

export function getMonumentOriginContent(
    monument: Monument,
    dest: Destination,
    origin: Origin
): MonumentOriginContent {
    const cityOrigin = getCityOriginContent(dest, origin);
    const accessNote = monumentAccessNote(monument);

    const answer = `Visiting the ${monument.name} from ${origin.city}, ${origin.country} is a single managed mission with MyTripMyTravel. Flight: ${origin.flightBand}. Gateway: ${cityOrigin.gateway.label}. On-ground in ${dest.name}: escorted access to the ${monument.name}, pre-arranged at the prime viewing hour, with a vetted guide and the chauffeured Elite Fleet from arrival.`;

    const intro: string[] = [
        `${monument.tagline} ${monument.answer.split(".").slice(0, 2).join(".")}.`,
        `From ${origin.city}, the routing is the first decision: ${cityOrigin.gateway.routingNote}`,
        `${cityOrigin.arrivalNote} On the ground, the ${monument.name} is sequenced for the prime viewing window — ${accessNote.toLowerCase()} — rather than dropped into a generic city sightseeing block.`,
        `Beyond the ${monument.name}, ${dest.name} sits inside the wider ${dest.region}; we plan the trip end to end on a single chauffeured architecture.`,
    ];

    return {
        monument,
        dest,
        origin,
        h1: `Visit the ${monument.name} from ${origin.city}`,
        answer,
        intro,
        flightBand: origin.flightBand,
        gateway: cityOrigin.gateway,
        accessNote,
        facets: [
            { heading: `The ${monument.name} — what you're visiting`, body: `${monument.intro[0]} ${monument.tagline}` },
            { heading: "Gateway and routing from " + origin.city, body: cityOrigin.gateway.routingNote },
            { heading: "Arrival day pacing", body: cityOrigin.arrivalNote },
            { heading: "Monument access", body: `${monument.name} is sequenced for the prime viewing hour with escorted access and a vetted guide. ${accessNote}. ${monument.tips[0] ?? ""}` },
            { heading: "How we run the visit", body: `From ${origin.city}, the on-ground operation is: chauffeured Elite Fleet, escorted entry, the prime hour at the ${monument.name}, and a sequenced day around it — not a checklist sprint. We pre-arrange access where access requires arrangement.` },
        ],
        faqs: [
            { q: `How do I visit the ${monument.name} from ${origin.city}?`, a: answer },
            { q: `How long is the flight from ${origin.city}?`, a: `${origin.flightBand}. Gateway: ${cityOrigin.gateway.label}; ${cityOrigin.gateway.routingNote}` },
            { q: `When is the best time to visit the ${monument.name}?`, a: accessNote + (monument.tips.length ? ` Tip from our planning desk: ${monument.tips[0]}` : "") },
            { q: `Do I need a visa to travel from ${origin.country}?`, a: `India offers an e-Visa to travellers of many nationalities; our concierge advises on the current process for ${origin.country} passport holders as part of planning.` },
            { q: `Is the visit private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted monument access. Never a shared group departure.` },
        ],
        crossLinks: [
            { label: `Full ${monument.name} brief`, href: `/destinations/${dest.slug}/monuments/${monument.slug}` },
            { label: `${dest.name} city brief`, href: `/destinations/${dest.slug}` },
            { label: `${dest.name} from ${origin.city}`, href: `/destinations/${dest.slug}/from/${origin.slug}` },
            { label: `${dest.region} destinations`, href: `/destinations/region/${dest.regionSlug}` },
        ],
    };
}

export function getAllMonumentOriginParams(): { slug: string; monument: string; origin: string }[] {
    const out: { slug: string; monument: string; origin: string }[] = [];
    for (const m of monuments) {
        for (const o of ORIGINS) {
            out.push({ slug: m.citySlug, monument: m.slug, origin: o.slug });
        }
    }
    return out;
}

export function monumentOriginExists(citySlug: string, monumentSlug: string, originSlug: string): boolean {
    const m = monuments.find((x) => x.slug === monumentSlug && x.citySlug === citySlug);
    if (!m) return false;
    if (!getDestination(citySlug)) return false;
    return Boolean(ORIGINS.find((o) => o.slug === originSlug));
}

export function findOrigin(slug: string): Origin | undefined {
    return ORIGINS.find((o) => o.slug === slug);
}
