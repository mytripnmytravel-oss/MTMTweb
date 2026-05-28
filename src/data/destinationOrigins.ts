// City × origin engine (grid C13). 37 destinations × 18 origins = 666
// per-city, per-origin briefs. Each page weaves the origin's flight
// context (band, jet-lag, gateway) with the destination's identity
// (region, signature, recommended sequencing) into one cohesive page.

import { destinations, getDestination, type Destination } from "./destinations";
import { ORIGINS, type Origin } from "./tourVariants";

export { ORIGINS };

export interface CityOriginContent {
    dest: Destination;
    origin: Origin;
    h1: string;
    answer: string;
    intro: string[];
    gateway: { code: string; label: string; routingNote: string };
    flightBand: string;
    arrivalNote: string;
    sequencingNote: string;
    facets: { heading: string; body: string }[];
    faqs: { q: string; a: string }[];
    crossLinks: { label: string; href: string }[];
}

function regionGateway(dest: Destination, origin: Origin): { code: string; label: string; routingNote: string } {
    const r = dest.regionSlug;
    if (r === "kerala") {
        const directKochi = new Set(["dubai", "abu-dhabi", "doha", "singapore"]);
        if (directKochi.has(origin.slug)) {
            return {
                code: "COK",
                label: "Kochi (COK)",
                routingNote: `${origin.city} offers direct non-stop service into Kochi (COK), Kerala's primary international gateway — onward to ${dest.name} by chauffeured leg.`,
            };
        }
        return {
            code: "COK",
            label: "Kochi (COK)",
            routingNote: `From ${origin.city}, travellers typically route via Delhi (DEL) or Mumbai (BOM) onwards to Kochi (COK) by a short domestic flight. We pre-arrange the onward leg and the chauffeured pickup at COK.`,
        };
    }
    if (r === "sikkim") {
        return {
            code: "IXB",
            label: "Bagdogra (IXB)",
            routingNote: `Sikkim's nearest commercial airport is Bagdogra (IXB) in West Bengal. From ${origin.city}, route via Delhi (DEL) or Kolkata (CCU) onwards to Bagdogra, then a chauffeured 4–5h ascent to ${dest.name}.`,
        };
    }
    if (r === "andaman") {
        return {
            code: "IXZ",
            label: "Port Blair (IXZ)",
            routingNote: `The Andamans are reached via Port Blair (IXZ), connected by domestic flight from Chennai (MAA), Kolkata (CCU), or Delhi (DEL). From ${origin.city}, we pre-arrange the onward connection.`,
        };
    }
    if (r === "himalayas") {
        if (dest.slug === "leh") {
            return {
                code: "IXL",
                label: "Leh (IXL)",
                routingNote: `Leh's airport (IXL) sits at 3,256m — flights are weather-dependent and operate primarily from Delhi (DEL). From ${origin.city}, route via Delhi with at least one acclimatisation night before flying up.`,
            };
        }
        if (dest.slug === "srinagar") {
            return {
                code: "SXR",
                label: "Srinagar (SXR)",
                routingNote: `Srinagar (SXR) is the Kashmir gateway. From ${origin.city}, route via Delhi (DEL) onwards by domestic flight. The chauffeured leg in the valley is on the Elite Fleet.`,
            };
        }
        return {
            code: "DEL",
            label: "Delhi (DEL)",
            routingNote: `Delhi (DEL) is the gateway for the Himalayan circuit. From ${origin.city}, onwards by escorted road or short domestic flight. For higher-altitude legs we build in a 24h low-altitude buffer before the ascent.`,
        };
    }
    if (r === "rajasthan") {
        if (dest.slug === "udaipur" || dest.slug === "jodhpur" || dest.slug === "jaipur") {
            return {
                code: dest.slug === "udaipur" ? "UDR" : dest.slug === "jodhpur" ? "JDH" : "JAI",
                label: dest.slug === "udaipur" ? "Udaipur (UDR)" : dest.slug === "jodhpur" ? "Jodhpur (JDH)" : "Jaipur (JAI)",
                routingNote: `${dest.name} has its own commercial airport. From ${origin.city}, route via Delhi (DEL) or Mumbai (BOM) onwards by short domestic flight, or chauffeured road from Delhi for the slower scenic option.`,
            };
        }
        return {
            code: "DEL",
            label: "Delhi (DEL)",
            routingNote: `Delhi (DEL) is the primary international gateway into Rajasthan, with a short chauffeured leg or domestic flight onward to ${dest.name}. Mumbai (BOM) is the alternative gateway, particularly for southern Rajasthan.`,
        };
    }
    // Golden Triangle (delhi, agra, jaipur)
    return {
        code: "DEL",
        label: "Delhi (DEL)",
        routingNote: `Delhi (DEL) is the gateway. From ${origin.city}, the chauffeured leg to ${dest.name} runs on the Elite Fleet — Delhi → Agra via the Yamuna Expressway (3h), Delhi → Jaipur via NH-48 (5h).`,
    };
}

function arrivalNoteFor(origin: Origin): string {
    if (/\b(3\.5|4 hrs|5\.5|6 hrs)\b/.test(origin.flightBand)) {
        return `${origin.city} is a short crossing — the chauffeured leg and the first activity can run the same day with a refreshed arrival. No mandatory recovery buffer beyond the airport handover.`;
    }
    if (/9.5|9 hrs|8.5|8 hrs|7.5/.test(origin.flightBand)) {
        return `${origin.city} is a manageable European-shift crossing — we recommend a single arrival-day recovery night before the first major site, with a light evening only.`;
    }
    return `${origin.city} is a long crossing with a significant time shift. We build a firm first-night recovery into the architecture — orientation only, no marquee sites on arrival day. Sleep, light evening, breakfast at the stay, monuments from day two.`;
}

function sequencingNoteFor(dest: Destination, origin: Origin): string {
    if (dest.regionSlug === "golden-triangle") {
        return `From ${origin.city}, the standard sequencing is Delhi (arrival recovery) → Agra (Taj at sunrise) → Jaipur (forts and palace) → return. Total 5–7 days for the canonical Triangle, extendable into Rajasthan, the Himalayas, or Kerala on the same chauffeured architecture.`;
    }
    if (dest.regionSlug === "rajasthan") {
        return `From ${origin.city}, ${dest.name} sits naturally within a Rajasthan circuit — typically paired with Jaipur or Udaipur as the entry city, plus 2–4 onward stops. 7–10 days is the standard Rajasthan length; extend with the Golden Triangle for a 10–14 day mission.`;
    }
    if (dest.regionSlug === "kerala") {
        return `From ${origin.city}, ${dest.name} sits inside the Kerala arc — typically a Kochi entry, the backwaters (Alleppey / Kumarakom), Munnar tea estates, and the southern beaches (Kovalam / Varkala). 7–10 days for the core circuit, 14+ for an integrated Ayurveda programme.`;
    }
    if (dest.regionSlug === "himalayas") {
        return `From ${origin.city}, ${dest.name} typically forms part of a wider Himalayan circuit. Pacing is built around altitude — slow ascents, acclimatisation nights, and weather-flex buffer days. 7+ days for a meaningful Himalayan leg; longer for high-altitude routes.`;
    }
    if (dest.regionSlug === "sikkim") {
        return `From ${origin.city}, ${dest.name} sits within the Sikkim circuit. The standard arc is Bagdogra → Gangtok → high-altitude valleys (Lachen, Lachung) → Pelling. 6–8 days for the core; longer if including Darjeeling.`;
    }
    if (dest.regionSlug === "andaman") {
        return `From ${origin.city}, ${dest.name} is part of an Andaman island arc — typically Port Blair (arrival) → Havelock → Neil. 5–7 days minimum to factor the ferry transit and one-island-per-3-nights pacing.`;
    }
    return `From ${origin.city}, ${dest.name} sits within the wider ${dest.region} circuit and pairs naturally with adjacent destinations on the same chauffeured architecture.`;
}

export function getCityOriginContent(dest: Destination, origin: Origin): CityOriginContent {
    const gw = regionGateway(dest, origin);
    const arrivalNote = arrivalNoteFor(origin);
    const sequencingNote = sequencingNoteFor(dest, origin);

    const answer = `Travelling to ${dest.name}, ${dest.state} from ${origin.city}, ${origin.country} is a managed mission with MyTripMyTravel — flight context: ${origin.flightBand}; arrival gateway: ${gw.label}; ${origin.note} The on-ground operation in ${dest.name} runs on the GPS-tracked Elite Fleet protocol with escorted access, vetted stays, and a 24/7 desk.`;

    const intro: string[] = [
        `Travel from ${origin.city} to ${dest.name} is a single sequenced operation, not three disconnected bookings. We do not duplicate the flight desk — that is typically the company's or your own — but we own everything from the gateway handover onward, including airport pickup, chauffeured leg to ${dest.name}, accommodation, daily sequencing, and contingency.`,
        `${dest.tagline} — and the way ${origin.city}-based travellers experience that is shaped as much by how the arrival is engineered as by what is seen on the ground. ${arrivalNote}`,
        `${gw.routingNote}`,
        `${sequencingNote}`,
        `Every architecture from ${origin.city} is paced around your ${origin.flightBand} crossing rather than against it.`,
    ];

    return {
        dest,
        origin,
        h1: `${dest.name} from ${origin.city}`,
        answer,
        intro,
        gateway: gw,
        flightBand: origin.flightBand,
        arrivalNote,
        sequencingNote,
        facets: [
            { heading: "Gateway and routing", body: gw.routingNote },
            { heading: "Arrival day pacing", body: arrivalNote },
            { heading: `Sequencing into ${dest.region}`, body: sequencingNote },
            {
                heading: "Visa and travel basics",
                body: `India offers an e-Visa to travellers of many nationalities; requirements vary by passport. Our concierge advises on the current process for ${origin.country} passport holders as part of planning — we do not duplicate the visa service, but we confirm timing windows fit your arrival.`,
            },
            {
                heading: `What we own on the ground in ${dest.name}`,
                body: `${dest.tagline} On the ground we own: chauffeured Elite Fleet, escorted access at the heritage sites, vetted stays matched to your party, dietary planning, accommodation manifests, 24/7 desk line, and a contingency plan documented before departure.`,
            },
        ],
        faqs: [
            { q: `How long is the flight from ${origin.city} to ${dest.name}?`, a: `${origin.flightBand}. The arrival gateway is ${gw.label}; ${gw.routingNote}` },
            { q: `Do I need a visa to travel from ${origin.country}?`, a: `India offers an e-Visa to travellers of many nationalities; our concierge advises on the current process for ${origin.country} passport holders as part of planning.` },
            { q: `How many days should I plan for ${dest.name} from ${origin.city}?`, a: `${sequencingNote}` },
            { q: `What's the arrival day like coming from ${origin.city}?`, a: `${arrivalNote}` },
            { q: `Is the trip private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted access at the major sites, 24/7 desk line. Never a shared group departure.` },
        ],
        crossLinks: [
            { label: `Explore ${dest.name}`, href: `/destinations/${dest.slug}` },
            { label: `${dest.name} itineraries`, href: `/destinations/${dest.slug}/itinerary` },
            { label: `${dest.region} destinations`, href: `/destinations/region/${dest.regionSlug}` },
            { label: "All destinations", href: "/destinations" },
        ],
    };
}

export function getAllCityOriginParams(): { slug: string; origin: string }[] {
    const out: { slug: string; origin: string }[] = [];
    for (const d of destinations) {
        for (const o of ORIGINS) {
            out.push({ slug: d.slug, origin: o.slug });
        }
    }
    return out;
}

export function cityOriginExists(citySlug: string, originSlug: string): boolean {
    return Boolean(getDestination(citySlug)) && Boolean(ORIGINS.find((o) => o.slug === originSlug));
}

export function findOrigin(slug: string): Origin | undefined {
    return ORIGINS.find((o) => o.slug === slug);
}
