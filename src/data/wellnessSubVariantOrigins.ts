// Wellness sub-variant × origin engine. 25 sub-variants × 18 origins =
// 450 per-sub-variant, per-origin briefs. Combines the sub-variant's
// clinical/practice character with each origin's flight context.

import { getVariant, programmes, type WellnessProgramme, type WellnessVariant } from "./wellness";
import { ORIGINS, type Origin } from "./tourVariants";
import { PROGRAMME_LOCATIONS } from "./wellnessFacets";
import { getDestination } from "./destinations";
import type { FAQ } from "./destinations";

export { ORIGINS };

export interface SubVariantOriginContent {
    programme: WellnessProgramme;
    variant: WellnessVariant;
    origin: Origin;
    h1: string;
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    faqs: FAQ[];
    crossLinks: { label: string; href: string }[];
}

function programmeGateway(programmeSlug: string, origin: Origin): { code: string; label: string; routingNote: string } {
    if (programmeSlug === "yoga-soul") {
        return {
            code: "DEL",
            label: "Delhi (DEL)",
            routingNote: `Delhi (DEL) is the gateway for the Rishikesh / Himalayan-station yoga circuit. From ${origin.city}, the route is into DEL, then a short chauffeured leg or domestic onward to the practice setting.`,
        };
    }
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
        routingNote: `From ${origin.city}, travellers typically route via Delhi (DEL) or Mumbai (BOM) onwards to Kochi (COK) by a short domestic flight.`,
    };
}

function isShortHop(o: Origin): boolean { return /\b(3\.5|4 hrs|5\.5|6 hrs)\b/.test(o.flightBand); }
function isEuropean(o: Origin): boolean { return /9.5|9 hrs|8.5|8 hrs|7.5/.test(o.flightBand); }

function arrivalProtocol(variant: WellnessVariant, programme: WellnessProgramme, origin: Origin): string {
    const short = isShortHop(origin);
    const euro = isEuropean(origin);
    if (programme.slug === "ayurvedic") {
        if (variant.slug === "panchakarma") {
            if (short) return `Panchakarma assessment is typically scheduled day two — the programme is too significant to begin in a jet-lagged state. We use day one for the consultation, dosha analysis, and dietary brief; day two is the formal entry into Purvakarma.`;
            if (euro) return `Panchakarma is residential, multi-week, and clinically serious — we build a one-night minimum recovery before the Vaidya consultation and a two-night recommended buffer for European travellers. Treatments begin once the body is on local time.`;
            return `Panchakarma is residential, multi-week, and clinically serious — for long-haul ${origin.city} travellers we recommend a 48-hour pre-programme rest before the Vaidya consultation. The treatments are too significant to start with a jet-lagged body.`;
        }
        if (short) return `Short-stay Ayurveda from ${origin.city} can begin within hours of arrival — the assessment and the first session on day one. The trip is the programme.`;
        if (euro) return `One-night arrival recovery is recommended; the assessment happens day two with a refreshed body.`;
        return `Two-night pre-programme rest for long-haul ${origin.city} travellers — the assessment is more accurate on a settled body.`;
    }
    if (programme.slug === "yoga-soul") {
        if (variant.slug === "vinyasa") {
            if (short) return `Vinyasa from ${origin.city} can begin day one with a light warm-up session. The teacher assessment happens immediately; the strong sequencing waits for day two.`;
            return `Vinyasa is physically demanding; for ${origin.city} long-haul travellers we recommend day one as gentle yin/yoga-nidra, with the formal Vinyasa programme beginning day two when the body is on local time.`;
        }
        if (variant.slug === "meditation") {
            return `Meditation begins immediately from any origin — the trip is itself part of the practice. The first 24-48h are silence and yoga-nidra, easing the body into the deeper sessions.`;
        }
        if (short) return `Yoga sessions from ${origin.city} begin day one with a light teacher assessment and gentle practice; full programme intensity from day two.`;
        if (euro) return `One night of recovery before formal practice begins. Day two starts with the teacher assessment and a calibrated first session.`;
        return `Long-haul travellers from ${origin.city} use day one for arrival recovery and a single light yoga-nidra session. Formal practice begins day two when the body has settled.`;
    }
    if (programme.slug === "orthopedic") {
        return `Orthopedic recovery stays are climate-controlled and the clinical programme runs unchanged from any origin. The first 24h after a ${origin.flightBand} crossing is treated as continued recovery; active therapies are scheduled from day two.`;
    }
    // massage
    if (short) return `Bodywork from ${origin.city} can begin day one with a light recovery session.`;
    if (euro) return `One-night recovery is recommended; the first full bodywork session begins day two.`;
    return `${origin.city} long-haul travellers use day one as recovery with a single light bodywork session; the structured programme begins day two.`;
}

export function getSubVariantOriginContent(
    programme: WellnessProgramme,
    variant: WellnessVariant,
    origin: Origin
): SubVariantOriginContent {
    const gw = programmeGateway(programme.slug, origin);
    const protocol = arrivalProtocol(variant, programme, origin);
    const locations = (PROGRAMME_LOCATIONS[programme.slug] ?? []).slice(0, 3).map(
        (s) => getDestination(s)?.name ?? s
    );
    const locStr = locations.length ? locations.join(", ") : "vetted MyTripMyTravel sanctuary centres";

    const answer = `Travelling for ${variant.name} from ${origin.city}, ${origin.country} is a single managed mission with MyTripMyTravel. ${variant.answer.split(".").slice(0, 2).join(".")}. Flight: ${origin.flightBand}; gateway: ${gw.label}; ${origin.note} The programme runs at ${locStr} on the vetted MyTripMyTravel architecture.`;

    return {
        programme,
        variant,
        origin,
        h1: `${variant.name} from ${origin.city}`,
        answer,
        intro: [
            `${variant.intro[0]}`,
            `For ${origin.city}-based travellers, the trip is engineered as a single sequenced operation — the flight, the gateway pickup, the chauffeured leg to ${locStr}, the programme itself, and the return — not as three disconnected bookings.`,
            `${gw.routingNote} ${protocol}`,
            `The programme runs at ${locStr} on the vetted MyTripMyTravel architecture: chauffeured Elite Fleet from arrival, accommodation matched to the programme's requirements, dietary planning briefed in advance, physician handover where the programme requires it, and a 24/7 desk line throughout.`,
        ],
        points: [
            { label: `${variant.name} — what it actually is`, detail: variant.answer.split(".").slice(0, 2).join(".") + "." },
            { label: "Gateway and routing", detail: gw.routingNote },
            { label: "Arrival protocol", detail: protocol },
            { label: "Recommended length", detail: variant.duration ?? "Programme-dependent — planned at booking." },
            { label: "Ideal for", detail: variant.idealFor },
            { label: "Visa and travel basics", detail: `India offers an e-Visa to travellers of many nationalities; requirements vary by passport. Our concierge advises on the current process for ${origin.country} passport holders. For longer wellness stays (14+ days), we confirm the visa window fits the programme length.` },
        ],
        faqs: [
            { q: `How does ${variant.name} from ${origin.city} work?`, a: answer },
            { q: `What is ${variant.name}?`, a: variant.answer.split(".").slice(0, 2).join(".") + "." },
            { q: `How long is the flight from ${origin.city}?`, a: `${origin.flightBand}. Gateway: ${gw.label}; ${gw.routingNote}` },
            { q: `What about jet lag and the programme?`, a: protocol },
            { q: `What is the recommended length?`, a: `${variant.duration ?? "Programme-dependent — planned at booking."} The ${origin.flightBand} crossing should be factored into total trip length.` },
            { q: `Do I need a visa from ${origin.country}?`, a: `India offers an e-Visa to travellers of many nationalities; our concierge advises on the current process for ${origin.country} passport holders as part of planning.` },
            { q: `Is the programme private?`, a: `Yes — single-party booking with private programme attention. Group sessions (where relevant) are scheduled to your party rather than shared with strangers.` },
        ],
        crossLinks: [
            { label: `${variant.name} overview`, href: `/wellness/${programme.slug}/${variant.slug}` },
            { label: `${programme.name} hub`, href: `/wellness/${programme.slug}` },
            { label: `${programme.name} from ${origin.city}`, href: `/wellness/${programme.slug}/from/${origin.slug}` },
            { label: "Wellness sanctuary", href: "/wellness" },
        ],
    };
}

export function getAllSubVariantOriginParams(programmeSlug: string): { variant: string; origin: string }[] {
    const out: { variant: string; origin: string }[] = [];
    const p = programmes.find((x) => x.slug === programmeSlug);
    if (!p) return out;
    for (const v of p.variants) {
        for (const o of ORIGINS) {
            out.push({ variant: v.slug, origin: o.slug });
        }
    }
    return out;
}

export function subVariantOriginExists(programmeSlug: string, variantSlug: string, originSlug: string): boolean {
    const found = getVariant(programmeSlug, variantSlug);
    if (!found) return false;
    return Boolean(ORIGINS.find((o) => o.slug === originSlug));
}

export function findOrigin(slug: string): Origin | undefined {
    return ORIGINS.find((o) => o.slug === slug);
}
