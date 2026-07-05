// Wellness programme × origin engine (grid D5, per spec). 4 programmes
// × 18 origins = 72 per-programme, per-origin briefs. Combines the
// programme's geography (Kerala for Ayurveda; Rishikesh/Himalayan for
// yoga; Kerala-anchored climate-controlled for orthopedic; multi-
// anchor for massage) with each origin's flight context.

import { getProgramme, type WellnessProgramme } from "./wellness";
// Domestic origins are GT-tour-only; wellness ×origin uses international origins.
import { INTL_ORIGINS as ORIGINS, type Origin } from "./tourVariants";
import { PROGRAMME_LOCATIONS } from "./wellnessFacets";
import { getDestination } from "./destinations";

export { ORIGINS };

export interface WellnessOriginContent {
    programme: WellnessProgramme;
    origin: Origin;
    h1: string;
    answer: string;
    intro: string[];
    flightBand: string;
    gateway: { code: string; label: string; routingNote: string };
    arrivalNote: string;
    facets: { heading: string; body: string }[];
    faqs: { q: string; a: string }[];
    crossLinks: { label: string; href: string }[];
}

function programmeGateway(programmeSlug: string, origin: Origin): { code: string; label: string; routingNote: string } {
    // Ayurveda + orthopedic + massage are Kerala-anchored (massage
    // multi-anchor but the wellness anchor is Kerala). Yoga-soul is
    // Rishikesh / Himalayan-station anchored via Delhi.
    if (programmeSlug === "yoga-soul") {
        return {
            code: "DEL",
            label: "Delhi (DEL)",
            routingNote: `Delhi (DEL) is the gateway for the Rishikesh / Himalayan-station yoga circuit. From ${origin.city}, the route is into DEL, then a short chauffeured leg or domestic onward to the practice setting.`,
        };
    }
    // Kerala-anchored programmes
    const directKochi = new Set(["dubai", "abu-dhabi", "doha", "singapore"]);
    if (directKochi.has(origin.slug)) {
        return {
            code: "COK",
            label: "Kochi (COK)",
            routingNote: `${origin.city} offers direct non-stop service into Kochi (COK), Kerala's primary international gateway. The chauffeured leg to the programme centre runs from arrival.`,
        };
    }
    return {
        code: "COK",
        label: "Kochi (COK)",
        routingNote: `From ${origin.city}, travellers typically route via Delhi (DEL) or Mumbai (BOM) onwards to Kochi (COK) by a short domestic flight. We pre-arrange the onward leg and the chauffeured pickup at COK.`,
    };
}

function arrivalNoteFor(programmeSlug: string, origin: Origin): string {
    const isShortHop = /\b(3\.5|4 hrs|5\.5|6 hrs)\b/.test(origin.flightBand);
    const isEuropean = /9.5|9 hrs|8.5|8 hrs|7.5/.test(origin.flightBand);

    if (programmeSlug === "ayurvedic") {
        if (isShortHop) {
            return `From ${origin.city} the crossing is short — Panchakarma and Ayurvedic stays often begin within 24h of arrival; the programme physician completes the dosha assessment on day one.`;
        }
        if (isEuropean) {
            return `${origin.city} is a manageable European-shift crossing — a single arrival-day recovery night before the programme begins is recommended; the dosha assessment happens with a fresh body on day two.`;
        }
        return `${origin.city} is a long crossing — for serious Panchakarma we recommend a 24-48h pre-programme rest day so the assessment and therapies start with the body settled, not jet-lagged.`;
    }
    if (programmeSlug === "yoga-soul") {
        if (isShortHop) {
            return `From ${origin.city} the crossing is short — practice can begin day one with a light morning session and the teacher assessment.`;
        }
        if (isEuropean) {
            return `${origin.city} is a manageable European-shift crossing — practice begins day two; day one is arrival, settle, evening pranayama only.`;
        }
        return `${origin.city} is a long crossing — practice begins day two or three depending on jet-lag tolerance; the first 24-48h is gentle yoga-nidra and walks, not full practice.`;
    }
    if (programmeSlug === "orthopedic") {
        return `Orthopedic recovery stays are climate-controlled and the clinical programme runs unchanged from any origin. The first 24h after a ${origin.flightBand} crossing is treated as continued recovery before active therapies begin.`;
    }
    // massage
    if (isShortHop) return `${origin.city} is a short crossing — bodywork sessions can begin day one with a light recovery session and consultation.`;
    if (isEuropean) return `${origin.city} is a manageable crossing — bodywork programme begins day two with the first full session.`;
    return `${origin.city} is a long crossing — the first 24h is a rest day with one light recovery session; the structured bodywork sequence begins day two.`;
}

export function getWellnessOriginContent(programme: WellnessProgramme, origin: Origin): WellnessOriginContent {
    const gw = programmeGateway(programme.slug, origin);
    const arrivalNote = arrivalNoteFor(programme.slug, origin);
    const locations = (PROGRAMME_LOCATIONS[programme.slug] ?? []).slice(0, 3).map(
        (s) => getDestination(s)?.name ?? s
    );
    const locStr = locations.length ? locations.join(", ") : "vetted MyTripMyTravel sanctuary centres";

    const answer = `Travelling to India for ${programme.name} from ${origin.city}, ${origin.country} is a single managed mission. Flight: ${origin.flightBand}; gateway: ${gw.label}; ${origin.note} On the ground, the programme runs at ${locStr} on the vetted MyTripMyTravel architecture — accessible stays, chauffeured Elite Fleet, dietary planning, and physician-led supervision where the programme requires it.`;

    return {
        programme,
        origin,
        h1: `${programme.name} from ${origin.city}`,
        answer,
        intro: [
            `${programme.blurb} For ${origin.city}-based travellers, the trip is engineered as a single sequenced operation — the flight, the gateway pickup, the chauffeured leg to ${locStr}, the programme itself, and the return — not as three disconnected bookings.`,
            `${gw.routingNote} ${arrivalNote}`,
            `The programme is anchored to ${locStr}, where MyTripMyTravel runs vetted centres matched to the clinical and operational requirements of ${programme.name}. The pacing is built around the programme's real requirements rather than retrofitted to a flight schedule.`,
        ],
        flightBand: origin.flightBand,
        gateway: gw,
        arrivalNote,
        facets: [
            { heading: "Gateway and routing", body: gw.routingNote },
            { heading: "Arrival and the first 24-48h", body: arrivalNote },
            { heading: `${programme.name} at ${locStr}`, body: `${programme.blurb} The centres we operate at have been vetted for clinical capability, physician quality (where applicable), accommodation standards, and dietary capability for international travellers.` },
            { heading: "Visa and travel basics", body: `India offers an e-Visa to travellers of many nationalities; requirements vary by passport. Our concierge advises on the current process for ${origin.country} passport holders as part of planning. For longer wellness stays (14+ days), we confirm the e-Visa or tourist-visa window fits the programme length.` },
            { heading: "What we own on the ground", body: `Chauffeured Elite Fleet from gateway to centre and back; accommodation booking and manifest; dietary planning briefed to the kitchen in advance; physician handover where the programme requires it; 24/7 desk line throughout the stay.` },
        ],
        faqs: [
            { q: `How long is the flight from ${origin.city} to begin ${programme.name}?`, a: `${origin.flightBand}. Gateway: ${gw.label}; ${gw.routingNote}` },
            { q: `What about jet lag and starting ${programme.name}?`, a: arrivalNote },
            { q: `How long should the ${programme.name} stay be from ${origin.city}?`, a: programme.slug === "ayurvedic" ? `For classical Panchakarma, 14 days minimum (commonly 21-28). For substantive Ayurveda, 7-10 days. Less than 7 is a spa-style introduction, not authentic Panchakarma. The ${origin.flightBand} crossing both ways should also be factored into total trip length.` : programme.slug === "yoga-soul" ? `For a real practice arc, 7-14 days. The ${origin.flightBand} crossing makes shorter stays less efficient — most ${origin.city} travellers do 10-14 days minimum.` : `Programme-dependent, planned at booking against your goals and the ${origin.flightBand} crossing.` },
            { q: `Do I need a visa from ${origin.country}?`, a: `India offers an e-Visa to travellers of many nationalities; our concierge advises on the current process for ${origin.country} passport holders as part of planning.` },
            { q: `Is the programme private?`, a: `Yes — single-party booking with private programme attention. Group classes (where relevant) are scheduled to your party rather than shared with strangers.` },
        ],
        crossLinks: [
            { label: `${programme.name} overview`, href: `/wellness/${programme.slug}` },
            { label: "Wellness sanctuary hub", href: "/wellness" },
            { label: `${programme.name} by duration`, href: `/wellness/${programme.slug}/duration/7-day` },
            { label: `${programme.name} by location`, href: `/wellness/${programme.slug}/in/${(PROGRAMME_LOCATIONS[programme.slug] ?? ["kochi"])[0]}` },
        ],
    };
}

export function getAllWellnessOriginParams(): { programme: string; origin: string }[] {
    const out: { programme: string; origin: string }[] = [];
    const programmeSlugs = Object.keys(PROGRAMME_LOCATIONS);
    for (const p of programmeSlugs) {
        for (const o of ORIGINS) {
            out.push({ programme: p, origin: o.slug });
        }
    }
    return out;
}

export function wellnessOriginExists(programmeSlug: string, originSlug: string): boolean {
    return Boolean(getProgramme(programmeSlug)) && Boolean(ORIGINS.find((o) => o.slug === originSlug));
}

export function findOrigin(slug: string): Origin | undefined {
    return ORIGINS.find((o) => o.slug === slug);
}
