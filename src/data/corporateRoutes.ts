// Corporate city-to-destination routes (grid F4). Curated metro->
// destination corporate-offsite pages. Origin is a free-text Indian
// metro (we don't operate ground service in the origin city
// universally); destination is a real entry from destinations.ts.
// Categorical content — no fabricated specific flights, prices, or
// timings; flight booking is honestly scoped out.

import { getDestination, type Destination } from "./destinations";

export interface CorporateRoute {
    slug: string; // `<origin-slug>-to-<destination-slug>`
    originLabel: string;
    originSlug: string;
    originGateway: string; // primary airport code (factual, well-known)
    destinationSlug: string;
}

// Curated origin metros — Indian corporate hubs where teams are based.
export const ORIGINS: Record<string, { label: string; gateway: string }> = {
    mumbai: { label: "Mumbai", gateway: "BOM" },
    bengaluru: { label: "Bengaluru", gateway: "BLR" },
    delhi: { label: "Delhi", gateway: "DEL" },
    hyderabad: { label: "Hyderabad", gateway: "HYD" },
    chennai: { label: "Chennai", gateway: "MAA" },
    pune: { label: "Pune", gateway: "PNQ" },
    gurgaon: { label: "Gurgaon", gateway: "DEL" },
    kolkata: { label: "Kolkata", gateway: "CCU" },
    ahmedabad: { label: "Ahmedabad", gateway: "AMD" },
    noida: { label: "Noida", gateway: "DEL" },
    chandigarh: { label: "Chandigarh", gateway: "IXC" },
    kochi: { label: "Kochi", gateway: "COK" },
    coimbatore: { label: "Coimbatore", gateway: "CJB" },
    indore: { label: "Indore", gateway: "IDR" },
};

function make(origin: keyof typeof ORIGINS, destination: string): CorporateRoute {
    const o = ORIGINS[origin];
    return {
        slug: `${origin}-to-${destination}`,
        originLabel: o.label,
        originSlug: origin,
        originGateway: o.gateway,
        destinationSlug: destination,
    };
}

export const CORPORATE_ROUTES: CorporateRoute[] = [
    // Mumbai
    make("mumbai", "udaipur"),
    make("mumbai", "jaipur"),
    make("mumbai", "jodhpur"),
    make("mumbai", "agra"),
    make("mumbai", "rishikesh"),
    make("mumbai", "kochi"),
    make("mumbai", "mussoorie"),
    make("mumbai", "kumarakom"),
    make("mumbai", "bekal"),
    // Bengaluru
    make("bengaluru", "udaipur"),
    make("bengaluru", "jaipur"),
    make("bengaluru", "kochi"),
    make("bengaluru", "kumarakom"),
    make("bengaluru", "rishikesh"),
    make("bengaluru", "munnar"),
    make("bengaluru", "alleppey"),
    make("bengaluru", "wayanad"),
    // Delhi
    make("delhi", "udaipur"),
    make("delhi", "jodhpur"),
    make("delhi", "rishikesh"),
    make("delhi", "mussoorie"),
    make("delhi", "shimla"),
    make("delhi", "manali"),
    make("delhi", "agra"),
    make("delhi", "jaipur"),
    make("delhi", "nainital"),
    make("delhi", "dharamshala"),
    // Hyderabad
    make("hyderabad", "udaipur"),
    make("hyderabad", "jaipur"),
    make("hyderabad", "kochi"),
    make("hyderabad", "munnar"),
    make("hyderabad", "rishikesh"),
    make("hyderabad", "kumarakom"),
    // Chennai
    make("chennai", "udaipur"),
    make("chennai", "kochi"),
    make("chennai", "kumarakom"),
    make("chennai", "munnar"),
    make("chennai", "varkala"),
    make("chennai", "wayanad"),
    // Pune
    make("pune", "udaipur"),
    make("pune", "jaipur"),
    make("pune", "jodhpur"),
    make("pune", "kochi"),
    make("pune", "rishikesh"),
    make("pune", "mussoorie"),
    // Gurgaon
    make("gurgaon", "udaipur"),
    make("gurgaon", "jaipur"),
    make("gurgaon", "rishikesh"),
    make("gurgaon", "agra"),
    make("gurgaon", "mussoorie"),
    make("gurgaon", "shimla"),
    make("gurgaon", "manali"),
    // Kolkata
    make("kolkata", "udaipur"),
    make("kolkata", "jaipur"),
    make("kolkata", "rishikesh"),
    make("kolkata", "gangtok"),
    make("kolkata", "ravangla"),
    make("kolkata", "kochi"),
    // Ahmedabad
    make("ahmedabad", "udaipur"),
    make("ahmedabad", "jaipur"),
    make("ahmedabad", "jodhpur"),
    make("ahmedabad", "mount-abu"),
    make("ahmedabad", "agra"),
    make("ahmedabad", "rishikesh"),
    // Noida
    make("noida", "udaipur"),
    make("noida", "jaipur"),
    make("noida", "agra"),
    make("noida", "rishikesh"),
    make("noida", "mussoorie"),
    make("noida", "shimla"),
    // Chandigarh
    make("chandigarh", "shimla"),
    make("chandigarh", "manali"),
    make("chandigarh", "rishikesh"),
    make("chandigarh", "mussoorie"),
    make("chandigarh", "dharamshala"),
    make("chandigarh", "nainital"),
    make("chandigarh", "auli"),
    // Kochi (as origin — for South Indian corporate offsites going north)
    make("kochi", "udaipur"),
    make("kochi", "jaipur"),
    make("kochi", "rishikesh"),
    make("kochi", "munnar"),
    make("kochi", "kumarakom"),
    make("kochi", "varkala"),
    make("kochi", "alleppey"),
    make("kochi", "wayanad"),
    // Coimbatore
    make("coimbatore", "kochi"),
    make("coimbatore", "munnar"),
    make("coimbatore", "kumarakom"),
    make("coimbatore", "wayanad"),
    make("coimbatore", "udaipur"),
    // Indore
    make("indore", "udaipur"),
    make("indore", "jaipur"),
    make("indore", "agra"),
    make("indore", "rishikesh"),
    make("indore", "mussoorie"),
];

export interface CorporateRouteContent {
    h1: string;
    answer: string;
    intro: string[];
    inclusions: string[];
    faqs: { q: string; a: string }[];
}

export function getCorporateRouteContent(
    route: CorporateRoute,
    destination: Destination
): CorporateRouteContent {
    const useCases = [
        "department offsites and quarterly planning",
        "incentive trips for top performers",
        "leadership / board retreats",
        "product launches and brand activations",
        "MICE conferences with excursion programmes",
    ];

    return {
        h1: `Corporate Offsite from ${route.originLabel} to ${destination.name}`,
        answer: `A corporate offsite from ${route.originLabel} to ${destination.name}, ${destination.state} with MyTripMyTravel is run as a single managed mission — flights to ${destination.name}'s gateway (typically routed by the company), then a full on-ground operation in ${destination.name}: convoy, accommodation block, dining, sessions venue, contingency. ${destination.tagline}. We do not book flights from ${route.originLabel}; we own the ground operation end to end.`,
        intro: [
            `${route.originLabel}-based teams travelling to ${destination.name} for an offsite face two distinct problems: flights from ${route.originGateway} to the destination gateway (a flight desk job — typically owned by the company's travel team), and the on-ground operation in ${destination.name}. We do not duplicate the first; we own the second, end to end.`,
            `${destination.name} is ${destination.tagline.toLowerCase()} — and that suits ${useCases[0]}, ${useCases[1]}, ${useCases[2]}, and ${useCases[3]}. We match the venue and accommodation to the offsite's purpose rather than treating it as a generic destination.`,
            `On the ground in ${destination.name}, the mission runs on the GPS-tracked Elite Fleet protocol — convoy logistics for the group, room-block management at a single property or tight cluster, choreographed event flow between working sessions and offsite activity, and a 24/7 desk through the trip.`,
            `Scale-sensitive: under 15 guests we run a compact mission; 15–50 is small-convoy; 50–200 is full multi-property block operation; 200+ runs on the encrypted-logistics-sync MICE protocol. The team size in ${route.originLabel} dictates the operation, not the destination.`,
        ],
        inclusions: [
            "On-ground mission planning (concept, run-of-show, vendor curation)",
            "Airport handover at the destination + onward convoy",
            `Convoy transport in ${destination.name} on the GPS-tracked Elite Fleet`,
            "Accommodation block at a single property or tight cluster, with manifests",
            "Working-sessions venue with confirmed connectivity, AV, and privacy",
            "Heritage / curated dining matched to the offsite's register",
            "Documented contingency: redundant vehicles, alternate routing, on-ground coordinator, 24/7 desk",
        ],
        faqs: [
            { q: `Do you book flights from ${route.originLabel}?`, a: `No — flights from ${route.originGateway} to ${destination.name}'s gateway are typically owned by the company's travel team. We own the on-ground operation end to end and integrate with your flight schedule.` },
            { q: `Why ${destination.name} for a corporate offsite?`, a: `${destination.tagline} The destination suits ${useCases.slice(0, 3).join(", ")} — and the on-ground experience layer (venues, dining, fleet) is in our standard operating set.` },
            { q: `What group sizes do you handle?`, a: `From under 15 (compact mission) through 200+ MICE-scale (encrypted logistics sync). The team size dictates the operation; under 50 needs no marshals, above 150 needs full multi-property block management.` },
            { q: `Can sessions, sightseeing, and dining run in the same trip?`, a: `Yes — that is the design. Working sessions are venue-confirmed; sightseeing is timed against the agenda (not the other way round); dining is curated per function. Event flow is choreographed rather than improvised.` },
        ],
    };
}

export function getCorporateRoute(slug: string): CorporateRoute | undefined {
    return CORPORATE_ROUTES.find((r) => r.slug === slug);
}

export function getAllCorporateRouteParams(): { route: string }[] {
    return CORPORATE_ROUTES.map((r) => ({ route: r.slug }));
}

export function corporateRouteExists(slug: string): boolean {
    const r = getCorporateRoute(slug);
    return Boolean(r && getDestination(r.destinationSlug));
}
