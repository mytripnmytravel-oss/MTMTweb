// Fleet × city local-SEO matrix (grid E3). Curated to high-hire-intent
// hub cities so each page carries genuine local context, not thin
// permutations. City facts are pulled from the destinations data so
// content stays accurate and cross-linkable.

import { fleet, getVehicle, type Vehicle } from "./fleet";
import { getDestination, type Destination } from "./destinations";

// Major arrival / operating hubs where "chauffeur hire in X" has real
// local intent. Every slug must exist in destinations.ts.
export const FLEET_CITY_SLUGS = [
    "delhi",
    "agra",
    "jaipur",
    "udaipur",
    "jodhpur",
    "jaisalmer",
    "rishikesh",
    "kochi",
    "shimla",
    "gangtok",
];

const CITY_ROLE: Record<string, string> = {
    delhi: "the primary international gateway and northern launch point of the Golden Triangle",
    agra: "the Taj Mahal city and the eastern vertex of the Golden Triangle",
    jaipur: "the Pink City and the Rajasthan gateway of the Golden Triangle",
    udaipur: "the City of Lakes and Rajasthan's slow-luxury and wedding base",
    jodhpur: "the Blue City beneath Mehrangarh and the gateway to the Thar",
    jaisalmer: "the golden living-fort city on the edge of the Thar Desert",
    rishikesh: "the yoga-and-Ganga gateway in the Himalayan foothills",
    kochi: "the spice-coast gateway to the Kerala circuit",
    shimla: "the colonial hill-station capital and western-Himalaya gateway",
    gangtok: "the orderly capital of Sikkim and its Silk Route base",
};

export interface FleetCityContent {
    answer: string;
    intro: string[];
    localNote: string;
    faqs: { q: string; a: string }[];
}

export function getFleetCityContent(
    v: Vehicle,
    dest: Destination
): FleetCityContent {
    const role = CITY_ROLE[dest.slug] ?? `a key MyTripMyTravel operating base`;
    const answer = `Chauffeured ${v.name} hire in ${dest.name}, ${dest.state} is available from MyTripMyTravel as part of a private, GPS-tracked Elite Fleet service. ${dest.name} is ${role}. The ${v.name} — a ${v.category.toLowerCase()}-tier ${v.type.toLowerCase()} seating up to ${v.passengers} with ${v.luggage} — is deployed here with a vetted performance-chauffeur, pre-calculated fuel, tolls and permits, and transparent ${v.priceRange}-band pricing.`;
    const intro = [
        `Hiring the ${v.name} in ${dest.name} is not a car-rental transaction — it is a chauffeured mission. ${v.description}`,
        `Because ${dest.name} is ${role}, the ${v.name} here is typically used for ${dest.region === "Golden Triangle" ? "the Delhi–Agra–Jaipur circuit, airport handovers, and monument days" : `the ${dest.region} circuit, transfers, and exploration from ${dest.name}`} — always with a chauffeur, never self-drive.`,
        `Every ${v.name} deployment in ${dest.name} includes live telemetry, zero-surprise pricing, and seamless onward continuity if the itinerary extends beyond ${dest.state}.`,
    ];
    const localNote = `In ${dest.name}, the ${v.name} pairs naturally with our ${dest.name} destination programme and the wider ${dest.region} circuit.`;
    const faqs = [
        { q: `Can I hire a chauffeured ${v.name} in ${dest.name}?`, a: `Yes — MyTripMyTravel deploys the ${v.name} in ${dest.name}, ${dest.state} with a vetted chauffeur, GPS telemetry, and transparent ${v.priceRange}-band pricing. Self-drive is not offered.` },
        { q: `What is the ${v.name} used for in ${dest.name}?`, a: `${dest.name} is ${role}, so the ${v.name} is typically used for circuit travel, airport handovers, and monument days from here, seating up to ${v.passengers}.` },
        { q: `Does ${dest.name} ${v.name} hire include fuel and tolls?`, a: `Yes — fuel, tolls, permits, and the chauffeur are pre-calculated into the ${v.priceRange}-band price. There are no hidden gate fees.` },
        { q: `Can the ${v.name} continue beyond ${dest.name}?`, a: `Yes — the ${v.name} provides seamless onward continuity from ${dest.name} into the wider ${dest.region} circuit or across India.` },
    ];
    return { answer, intro, localNote, faqs };
}

export function fleetCityExists(vehicleId: string, citySlug: string): boolean {
    return (
        Boolean(getVehicle(vehicleId)) &&
        FLEET_CITY_SLUGS.includes(citySlug) &&
        Boolean(getDestination(citySlug))
    );
}

export function getAllFleetCityParams(): { vehicle: string; city: string }[] {
    const params: { vehicle: string; city: string }[] = [];
    for (const v of fleet) {
        for (const c of FLEET_CITY_SLUGS) {
            params.push({ vehicle: v.id, city: c });
        }
    }
    return params;
}

export function fleetCitiesForVehicle(): { slug: string; name: string }[] {
    return FLEET_CITY_SLUGS.map((slug) => {
        const d = getDestination(slug);
        return { slug, name: d ? d.name : slug };
    });
}

export function vehiclesForCity(): Vehicle[] {
    return fleet;
}
