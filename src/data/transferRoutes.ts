// Inter-city chauffeur route layer (grid E6). Curated, high-intent
// origin->destination routes between cities already in destinations.ts.
// Distances/times are factual where known (from destinations quickFacts)
// or marked approximate. No fabricated operators or specifics.

import { getDestination, type Destination } from "./destinations";
import { fleet, type Vehicle } from "./fleet";

export interface TransferRoute {
    slug: string; // `<origin>-to-<destination>`
    originSlug: string;
    destinationSlug: string;
    distanceKm: number;
    driveHrs: number;
    approximate?: boolean; // true if distance/time is an honest estimate
    via?: string;
    note?: string;
}

export const ROUTES: TransferRoute[] = [
    // Golden Triangle internals
    { slug: "delhi-to-agra", originSlug: "delhi", destinationSlug: "agra", distanceKm: 230, driveHrs: 3.5, via: "Yamuna Expressway" },
    { slug: "agra-to-delhi", originSlug: "agra", destinationSlug: "delhi", distanceKm: 230, driveHrs: 3.5, via: "Yamuna Expressway" },
    { slug: "delhi-to-jaipur", originSlug: "delhi", destinationSlug: "jaipur", distanceKm: 280, driveHrs: 5, via: "NH-48" },
    { slug: "jaipur-to-delhi", originSlug: "jaipur", destinationSlug: "delhi", distanceKm: 280, driveHrs: 5, via: "NH-48" },
    { slug: "agra-to-jaipur", originSlug: "agra", destinationSlug: "jaipur", distanceKm: 240, driveHrs: 4.5, via: "Fatehpur Sikri" },
    { slug: "jaipur-to-agra", originSlug: "jaipur", destinationSlug: "agra", distanceKm: 240, driveHrs: 4.5, via: "Fatehpur Sikri" },

    // Delhi outbound
    { slug: "delhi-to-rishikesh", originSlug: "delhi", destinationSlug: "rishikesh", distanceKm: 240, driveHrs: 5.5 },
    { slug: "delhi-to-mussoorie", originSlug: "delhi", destinationSlug: "mussoorie", distanceKm: 285, driveHrs: 6.5, approximate: true },
    { slug: "delhi-to-nainital", originSlug: "delhi", destinationSlug: "nainital", distanceKm: 300, driveHrs: 7 },
    { slug: "delhi-to-shimla", originSlug: "delhi", destinationSlug: "shimla", distanceKm: 340, driveHrs: 7.5, approximate: true, via: "Chandigarh" },

    // Himalayas links
    { slug: "rishikesh-to-mussoorie", originSlug: "rishikesh", destinationSlug: "mussoorie", distanceKm: 75, driveHrs: 2.5, via: "Dehradun" },
    { slug: "shimla-to-manali", originSlug: "shimla", destinationSlug: "manali", distanceKm: 250, driveHrs: 7 },

    // Rajasthan core
    { slug: "jaipur-to-pushkar", originSlug: "jaipur", destinationSlug: "pushkar", distanceKm: 145, driveHrs: 3 },
    { slug: "jaipur-to-ranthambore", originSlug: "jaipur", destinationSlug: "ranthambore", distanceKm: 180, driveHrs: 3.5 },
    { slug: "jaipur-to-udaipur", originSlug: "jaipur", destinationSlug: "udaipur", distanceKm: 390, driveHrs: 6.5 },
    { slug: "jaipur-to-jodhpur", originSlug: "jaipur", destinationSlug: "jodhpur", distanceKm: 335, driveHrs: 5.5, approximate: true },
    { slug: "pushkar-to-jodhpur", originSlug: "pushkar", destinationSlug: "jodhpur", distanceKm: 185, driveHrs: 3.5, approximate: true },
    { slug: "ranthambore-to-udaipur", originSlug: "ranthambore", destinationSlug: "udaipur", distanceKm: 390, driveHrs: 7, approximate: true },
    { slug: "udaipur-to-jodhpur", originSlug: "udaipur", destinationSlug: "jodhpur", distanceKm: 250, driveHrs: 4.5 },
    { slug: "udaipur-to-mount-abu", originSlug: "udaipur", destinationSlug: "mount-abu", distanceKm: 165, driveHrs: 3.5 },
    { slug: "udaipur-to-chittorgarh", originSlug: "udaipur", destinationSlug: "chittorgarh", distanceKm: 115, driveHrs: 2.5 },
    { slug: "udaipur-to-bundi", originSlug: "udaipur", destinationSlug: "bundi", distanceKm: 270, driveHrs: 5 },
    { slug: "chittorgarh-to-bundi", originSlug: "chittorgarh", destinationSlug: "bundi", distanceKm: 160, driveHrs: 3, approximate: true },
    { slug: "jodhpur-to-jaisalmer", originSlug: "jodhpur", destinationSlug: "jaisalmer", distanceKm: 290, driveHrs: 5 },
    { slug: "jodhpur-to-bikaner", originSlug: "jodhpur", destinationSlug: "bikaner", distanceKm: 250, driveHrs: 4.5 },

    // Kerala
    { slug: "kochi-to-munnar", originSlug: "kochi", destinationSlug: "munnar", distanceKm: 130, driveHrs: 4 },
    { slug: "kochi-to-alleppey", originSlug: "kochi", destinationSlug: "alleppey", distanceKm: 55, driveHrs: 1.5 },
    { slug: "kochi-to-kumarakom", originSlug: "kochi", destinationSlug: "kumarakom", distanceKm: 70, driveHrs: 2, approximate: true },
    { slug: "kochi-to-wayanad", originSlug: "kochi", destinationSlug: "wayanad", distanceKm: 290, driveHrs: 6 },
    { slug: "munnar-to-alleppey", originSlug: "munnar", destinationSlug: "alleppey", distanceKm: 165, driveHrs: 4.5, approximate: true },
    { slug: "munnar-to-thekkady", originSlug: "munnar", destinationSlug: "thekkady", distanceKm: 90, driveHrs: 3, approximate: true },
    { slug: "alleppey-to-kovalam", originSlug: "alleppey", destinationSlug: "kovalam", distanceKm: 160, driveHrs: 3.5, approximate: true },
    { slug: "kovalam-to-varkala", originSlug: "kovalam", destinationSlug: "varkala", distanceKm: 55, driveHrs: 1.5 },

    // Sikkim
    { slug: "gangtok-to-pelling", originSlug: "gangtok", destinationSlug: "pelling", distanceKm: 110, driveHrs: 4.5 },
    { slug: "gangtok-to-lachung", originSlug: "gangtok", destinationSlug: "lachung", distanceKm: 120, driveHrs: 6 },
    { slug: "gangtok-to-lachen", originSlug: "gangtok", destinationSlug: "lachen", distanceKm: 130, driveHrs: 6.5 },
    { slug: "gangtok-to-ravangla", originSlug: "gangtok", destinationSlug: "ravangla", distanceKm: 65, driveHrs: 3 },
    { slug: "pelling-to-ravangla", originSlug: "pelling", destinationSlug: "ravangla", distanceKm: 50, driveHrs: 2.5 },

    // ---- Reverse legs (return chauffeured journeys for symmetry) ----
    // Himalayas reverse
    { slug: "rishikesh-to-delhi", originSlug: "rishikesh", destinationSlug: "delhi", distanceKm: 240, driveHrs: 5.5 },
    { slug: "mussoorie-to-delhi", originSlug: "mussoorie", destinationSlug: "delhi", distanceKm: 285, driveHrs: 6.5, approximate: true },
    { slug: "nainital-to-delhi", originSlug: "nainital", destinationSlug: "delhi", distanceKm: 300, driveHrs: 7 },
    { slug: "shimla-to-delhi", originSlug: "shimla", destinationSlug: "delhi", distanceKm: 340, driveHrs: 7.5, approximate: true, via: "Chandigarh" },
    { slug: "manali-to-delhi", originSlug: "manali", destinationSlug: "delhi", distanceKm: 540, driveHrs: 12, approximate: true, via: "Chandigarh" },
    { slug: "manali-to-shimla", originSlug: "manali", destinationSlug: "shimla", distanceKm: 250, driveHrs: 7 },
    { slug: "mussoorie-to-rishikesh", originSlug: "mussoorie", destinationSlug: "rishikesh", distanceKm: 75, driveHrs: 2.5, via: "Dehradun" },
    { slug: "dharamshala-to-delhi", originSlug: "dharamshala", destinationSlug: "delhi", distanceKm: 475, driveHrs: 10, approximate: true },
    { slug: "delhi-to-dharamshala", originSlug: "delhi", destinationSlug: "dharamshala", distanceKm: 475, driveHrs: 10, approximate: true },
    { slug: "delhi-to-amritsar", originSlug: "delhi", destinationSlug: "amritsar", distanceKm: 450, driveHrs: 8, approximate: true },
    { slug: "amritsar-to-delhi", originSlug: "amritsar", destinationSlug: "delhi", distanceKm: 450, driveHrs: 8, approximate: true },

    // Rajasthan reverse + new pairs
    { slug: "pushkar-to-jaipur", originSlug: "pushkar", destinationSlug: "jaipur", distanceKm: 145, driveHrs: 3 },
    { slug: "ranthambore-to-jaipur", originSlug: "ranthambore", destinationSlug: "jaipur", distanceKm: 180, driveHrs: 3.5 },
    { slug: "udaipur-to-jaipur", originSlug: "udaipur", destinationSlug: "jaipur", distanceKm: 390, driveHrs: 6.5 },
    { slug: "jodhpur-to-jaipur", originSlug: "jodhpur", destinationSlug: "jaipur", distanceKm: 335, driveHrs: 5.5, approximate: true },
    { slug: "jodhpur-to-pushkar", originSlug: "jodhpur", destinationSlug: "pushkar", distanceKm: 185, driveHrs: 3.5, approximate: true },
    { slug: "udaipur-to-ranthambore", originSlug: "udaipur", destinationSlug: "ranthambore", distanceKm: 390, driveHrs: 7, approximate: true },
    { slug: "jodhpur-to-udaipur", originSlug: "jodhpur", destinationSlug: "udaipur", distanceKm: 250, driveHrs: 4.5 },
    { slug: "mount-abu-to-udaipur", originSlug: "mount-abu", destinationSlug: "udaipur", distanceKm: 165, driveHrs: 3.5 },
    { slug: "chittorgarh-to-udaipur", originSlug: "chittorgarh", destinationSlug: "udaipur", distanceKm: 115, driveHrs: 2.5 },
    { slug: "bundi-to-udaipur", originSlug: "bundi", destinationSlug: "udaipur", distanceKm: 270, driveHrs: 5 },
    { slug: "bundi-to-chittorgarh", originSlug: "bundi", destinationSlug: "chittorgarh", distanceKm: 160, driveHrs: 3, approximate: true },
    { slug: "jaisalmer-to-jodhpur", originSlug: "jaisalmer", destinationSlug: "jodhpur", distanceKm: 290, driveHrs: 5 },
    { slug: "bikaner-to-jodhpur", originSlug: "bikaner", destinationSlug: "jodhpur", distanceKm: 250, driveHrs: 4.5 },
    { slug: "jaisalmer-to-bikaner", originSlug: "jaisalmer", destinationSlug: "bikaner", distanceKm: 330, driveHrs: 6, approximate: true },
    { slug: "bikaner-to-jaisalmer", originSlug: "bikaner", destinationSlug: "jaisalmer", distanceKm: 330, driveHrs: 6, approximate: true },

    // GT extensions
    { slug: "agra-to-ranthambore", originSlug: "agra", destinationSlug: "ranthambore", distanceKm: 290, driveHrs: 5.5, approximate: true },
    { slug: "ranthambore-to-agra", originSlug: "ranthambore", destinationSlug: "agra", distanceKm: 290, driveHrs: 5.5, approximate: true },
    { slug: "agra-to-rishikesh", originSlug: "agra", destinationSlug: "rishikesh", distanceKm: 410, driveHrs: 8, approximate: true, via: "Delhi" },
    { slug: "delhi-to-pushkar", originSlug: "delhi", destinationSlug: "pushkar", distanceKm: 405, driveHrs: 7, approximate: true },
    { slug: "delhi-to-udaipur", originSlug: "delhi", destinationSlug: "udaipur", distanceKm: 660, driveHrs: 11, approximate: true, note: "We typically fly this leg; the chauffeured option is for travellers wanting a slower, scenic crossing." },

    // Kerala reverse
    { slug: "munnar-to-kochi", originSlug: "munnar", destinationSlug: "kochi", distanceKm: 130, driveHrs: 4 },
    { slug: "alleppey-to-kochi", originSlug: "alleppey", destinationSlug: "kochi", distanceKm: 55, driveHrs: 1.5 },
    { slug: "kumarakom-to-kochi", originSlug: "kumarakom", destinationSlug: "kochi", distanceKm: 70, driveHrs: 2, approximate: true },
    { slug: "wayanad-to-kochi", originSlug: "wayanad", destinationSlug: "kochi", distanceKm: 290, driveHrs: 6 },
    { slug: "alleppey-to-munnar", originSlug: "alleppey", destinationSlug: "munnar", distanceKm: 165, driveHrs: 4.5, approximate: true },
    { slug: "thekkady-to-munnar", originSlug: "thekkady", destinationSlug: "munnar", distanceKm: 90, driveHrs: 3, approximate: true },
    { slug: "thekkady-to-alleppey", originSlug: "thekkady", destinationSlug: "alleppey", distanceKm: 140, driveHrs: 4, approximate: true },
    { slug: "kovalam-to-alleppey", originSlug: "kovalam", destinationSlug: "alleppey", distanceKm: 160, driveHrs: 3.5, approximate: true },
    { slug: "varkala-to-kovalam", originSlug: "varkala", destinationSlug: "kovalam", distanceKm: 55, driveHrs: 1.5 },
    { slug: "kochi-to-varkala", originSlug: "kochi", destinationSlug: "varkala", distanceKm: 200, driveHrs: 4, approximate: true },
    { slug: "varkala-to-kochi", originSlug: "varkala", destinationSlug: "kochi", distanceKm: 200, driveHrs: 4, approximate: true },
    { slug: "kochi-to-bekal", originSlug: "kochi", destinationSlug: "bekal", distanceKm: 360, driveHrs: 7, approximate: true },
    { slug: "bekal-to-kochi", originSlug: "bekal", destinationSlug: "kochi", distanceKm: 360, driveHrs: 7, approximate: true },
    { slug: "kochi-to-thekkady", originSlug: "kochi", destinationSlug: "thekkady", distanceKm: 190, driveHrs: 4.5, approximate: true },
    { slug: "kochi-to-kovalam", originSlug: "kochi", destinationSlug: "kovalam", distanceKm: 220, driveHrs: 4.5, approximate: true },

    // Sikkim reverse
    { slug: "pelling-to-gangtok", originSlug: "pelling", destinationSlug: "gangtok", distanceKm: 110, driveHrs: 4.5 },
    { slug: "lachung-to-gangtok", originSlug: "lachung", destinationSlug: "gangtok", distanceKm: 120, driveHrs: 6 },
    { slug: "lachen-to-gangtok", originSlug: "lachen", destinationSlug: "gangtok", distanceKm: 130, driveHrs: 6.5 },
    { slug: "ravangla-to-gangtok", originSlug: "ravangla", destinationSlug: "gangtok", distanceKm: 65, driveHrs: 3 },
    { slug: "ravangla-to-pelling", originSlug: "ravangla", destinationSlug: "pelling", distanceKm: 50, driveHrs: 2.5 },
];

export interface RouteContent {
    h1: string;
    answer: string;
    intro: string[];
    inclusions: string[];
    vehicleClasses: { name: string; tier: string; passengers: number; luggage: string }[];
    faqs: { q: string; a: string }[];
}

function classes(): { name: string; tier: string; passengers: number; luggage: string }[] {
    const pick = (cat: Vehicle["category"]) =>
        fleet.filter((v) => v.category === cat).slice(0, 1);
    return [...pick("Standard"), ...pick("Premium"), ...pick("Elite")].map((v) => ({
        name: v.name,
        tier: v.category,
        passengers: v.passengers,
        luggage: v.luggage,
    }));
}

function approxQualifier(route: TransferRoute): string {
    return route.approximate ? "approximately " : "about ";
}

export function getRouteContent(
    route: TransferRoute,
    origin: Destination,
    destination: Destination
): RouteContent {
    const km = route.distanceKm;
    const hrs = route.driveHrs;
    const via = route.via ? ` via ${route.via}` : "";
    const approx = approxQualifier(route);

    return {
        h1: `${origin.name} to ${destination.name} Chauffeured Transfer`,
        answer: `A chauffeured transfer from ${origin.name}, ${origin.state} to ${destination.name}, ${destination.state} with MyTripMyTravel covers ${approx}${km} km in ${approx}${hrs} hours${via}, in a private GPS-tracked Elite Fleet vehicle with a vetted performance-chauffeur. Fuel, tolls, and permits are pre-calculated; the same vehicle can continue into the onward itinerary in ${destination.name} without a handover. This is a private, single-party transfer — never shared.`,
        intro: [
            `The ${origin.name}→${destination.name} leg is one of the standard chauffeured routes MyTripMyTravel operates. ${via ? `The route is normally driven ${via}, which adds context to the drive rather than treating it as a transfer to endure.` : `It is a single chauffeured drive, planned end-to-end so the journey is part of the mission rather than friction before it.`}`,
            `${origin.name} is ${origin.tagline.toLowerCase()}; ${destination.name} is ${destination.tagline.toLowerCase()}. The transfer is sequenced so arrival at ${destination.name} lands at a usable hour — not late afternoon when the day's experiences have already closed.`,
            `Vehicle class is matched to party size and tier. The chauffeur is performance-trained and GPS-tracked; the 24/7 desk is reachable throughout. Fuel, tolls, and any permits are pre-calculated into transparent pricing — no surprise gate fees on the route.`,
            `If the trip extends beyond ${destination.name}, the same vehicle and chauffeur continue seamlessly — no re-booking, no handover gap. The transfer is treated as a leg of the wider mission, not a standalone job.`,
        ],
        inclusions: [
            "Vetted performance-chauffeur, GPS-tracked",
            "Fuel, tolls, and permits pre-calculated",
            `${approx}${km} km · ${approx}${hrs} hours${via}`,
            "Optional sightseeing stop(s) on the route, where logical",
            "Single-party private vehicle — never shared",
            "Onward continuity into the destination itinerary",
            "24/7 human desk backup",
        ],
        vehicleClasses: classes(),
        faqs: [
            { q: `How far is ${origin.name} from ${destination.name}?`, a: `${approx.charAt(0).toUpperCase() + approx.slice(1)}${km} km${via}, with a drive time of ${approx}${hrs} hours by chauffeured car.` },
            { q: `How long does the ${origin.name} to ${destination.name} drive take?`, a: `${approx.charAt(0).toUpperCase() + approx.slice(1)}${hrs} hours${via}, depending on traffic and any sightseeing stops we build in on the route.` },
            { q: `Is the ${origin.name} to ${destination.name} transfer private?`, a: `Always — a single party, dedicated chauffeur, GPS-tracked. Never shared or pooled.` },
            { q: `Can the chauffeur continue beyond ${destination.name}?`, a: `Yes — the same vehicle and chauffeur continue seamlessly into your ${destination.name} itinerary and onward across India.` },
            { q: `What is included in the ${origin.name}→${destination.name} price?`, a: `Fuel, tolls, permits, and the chauffeur — all pre-calculated. There are no hidden gate fees, and the price does not surge with traffic.` },
        ],
    };
}

export function getRoute(slug: string): TransferRoute | undefined {
    return ROUTES.find((r) => r.slug === slug);
}

export function getAllRouteParams(): { route: string }[] {
    return ROUTES.map((r) => ({ route: r.slug }));
}

export function routeExists(slug: string): boolean {
    const r = getRoute(slug);
    if (!r) return false;
    return Boolean(getDestination(r.originSlug)) && Boolean(getDestination(r.destinationSlug));
}
