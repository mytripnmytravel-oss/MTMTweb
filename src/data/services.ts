// Services cluster (grid E4–E7). Local-SEO operational pages for
// chauffeured car rental and airport transfer, per hub city. Content is
// factual/operational and derived from existing destinations + fleet
// data — no fabricated identities or specifics.

import { getDestination, type Destination } from "./destinations";
import { fleet, type Vehicle } from "./fleet";
import { FLEET_CITY_SLUGS } from "./fleetCities";

export type ServiceLine = "car-rental" | "airport-transfer";

export const SERVICE_LINES: {
    slug: ServiceLine;
    name: string;
    blurb: string;
}[] = [
    {
        slug: "car-rental",
        name: "Chauffeured Car Rental",
        blurb: "Private, GPS-tracked vehicles with a vetted performance-chauffeur — by the day, the route, or the full circuit.",
    },
    {
        slug: "airport-transfer",
        name: "Airport Transfer",
        blurb: "Meet-and-greet arrival and departure transfers with luggage handling and flexible-wait on delays.",
    },
];

// Airport context per hub city (factual; gateway role only — no invented codes beyond well-known ones).
const CITY_AIRPORT: Record<string, string> = {
    delhi: "Indira Gandhi International (DEL) — India's primary gateway",
    agra: "Agra (AGR), with most arrivals routed via Delhi (DEL)",
    jaipur: "Jaipur International (JAI)",
    udaipur: "Maharana Pratap (UDR)",
    jodhpur: "Jodhpur (JDH)",
    jaisalmer: "Jaisalmer (JSA, seasonal), or via Jodhpur (JDH)",
    rishikesh: "Dehradun / Jolly Grant (DED)",
    kochi: "Cochin International (COK)",
    shimla: "Chandigarh (IXC), or Shimla (SLV, limited)",
    gangtok: "Pakyong (PYG) / Bagdogra (IXB)",
};

export const SERVICE_CITY_SLUGS = FLEET_CITY_SLUGS;

export interface ServiceCityContent {
    h1: string;
    answer: string;
    intro: string[];
    inclusions: string[];
    faqs: { q: string; a: string }[];
}

function topVehicles(): Vehicle[] {
    // Representative spread across tiers for the "vehicle classes" section.
    const byCat = (c: Vehicle["category"]) => fleet.find((v) => v.category === c);
    return [byCat("Standard"), byCat("Premium"), byCat("Elite")].filter(
        (v): v is Vehicle => Boolean(v)
    );
}

export function getServiceCityContent(
    line: ServiceLine,
    dest: Destination
): ServiceCityContent {
    const airport = CITY_AIRPORT[dest.slug] ?? "the nearest airport";
    const classes = topVehicles()
        .map((v) => `${v.name} (${v.category})`)
        .join(", ");

    if (line === "airport-transfer") {
        return {
            h1: `Airport Transfer in ${dest.name}`,
            answer: `MyTripMyTravel provides private chauffeured airport transfers in ${dest.name}, ${dest.state}, serving ${airport}. Transfers include meet-and-greet, luggage handling, live flight tracking, and flexible wait on delays, in a GPS-tracked Elite Fleet vehicle with a vetted chauffeur. Pricing is transparent and pre-calculated — no surge or hidden gate fees.`,
            intro: [
                `An airport transfer in ${dest.name} is a fixed, pre-arranged protocol, not a hailed ride. Your chauffeur tracks the inbound flight, waits through delays, and handles luggage to the vehicle.`,
                `${dest.name} is served by ${airport}. The same vehicle and chauffeur can continue directly into your ${dest.region} itinerary, so the transfer is the first leg of the mission rather than a separate booking.`,
                `Vehicle classes available for ${dest.name} transfers span ${classes} — selected to party size, luggage, and tier.`,
            ],
            inclusions: [
                "Meet-and-greet at arrivals with a name board",
                "Live flight tracking + flexible wait on delays",
                "Luggage handling to and from the vehicle",
                "GPS-tracked vehicle, vetted chauffeur",
                "Pre-calculated fare — no surge, no gate fees",
                "Seamless continuation into the onward itinerary",
            ],
            faqs: [
                { q: `Which airport does ${dest.name} airport transfer serve?`, a: `${dest.name} is served by ${airport}. We confirm the exact terminal and meeting point on booking.` },
                { q: `What if my flight is delayed into ${dest.name}?`, a: `The chauffeur tracks your flight live and waits through delays at no surge — the fare is pre-calculated and fixed.` },
                { q: `Can the ${dest.name} transfer continue into my tour?`, a: `Yes — the same chauffeur and vehicle can roll straight into your ${dest.region} itinerary; the transfer becomes the first mission leg.` },
                { q: `Is the ${dest.name} transfer private?`, a: `Always — a single party, dedicated chauffeur, GPS-tracked. Never shared or pooled.` },
            ],
        };
    }

    return {
        h1: `Chauffeured Car Rental in ${dest.name}`,
        answer: `MyTripMyTravel offers private chauffeured car rental in ${dest.name}, ${dest.state} — by the day, by the route, or for the full ${dest.region} circuit. Every rental is a GPS-tracked Elite Fleet vehicle with a vetted performance-chauffeur; fuel, tolls, and permits are pre-calculated into transparent pricing. Self-drive is not offered.`,
        intro: [
            `Car rental in ${dest.name} with MyTripMyTravel is a chauffeured service, not a self-drive hire. The chauffeur is integral to the security, navigation, and logistics protocol.`,
            `${dest.name} is ${dest.region === "Golden Triangle" ? "a core Golden Triangle base — rentals here typically run the Delhi–Agra–Jaipur arc and monument days" : `a ${dest.region} base — rentals here cover transfers, exploration, and onward circuit travel`}. The vehicle can extend seamlessly beyond ${dest.state}.`,
            `Available classes range across ${classes}, matched to party size and tier.`,
        ],
        inclusions: [
            "Vetted performance-chauffeur, GPS telemetry",
            "Fuel, tolls, and permits pre-calculated",
            "Flexible daily / route / full-circuit hire",
            "Seamless onward continuity beyond the city",
            "Transparent banded pricing — no hidden gate fees",
            "24/7 human desk backup",
        ],
        faqs: [
            { q: `Is car rental in ${dest.name} self-drive or chauffeured?`, a: `Chauffeured only — every ${dest.name} rental includes a vetted performance-chauffeur with GPS telemetry. Self-drive is not offered.` },
            { q: `What is included in ${dest.name} car rental pricing?`, a: `Fuel, tolls, permits, and the chauffeur are pre-calculated into transparent banded pricing. No hidden gate fees.` },
            { q: `Can I rent for a single day in ${dest.name}?`, a: `Yes — hire is flexible: a single day, a specific route, or the full ${dest.region} circuit.` },
            { q: `Can the ${dest.name} rental travel onward?`, a: `Yes — the vehicle provides seamless continuity from ${dest.name} into the wider ${dest.region} circuit or across India.` },
        ],
    };
}

export function serviceCityExists(line: string, citySlug: string): boolean {
    return (
        SERVICE_LINES.some((s) => s.slug === line) &&
        SERVICE_CITY_SLUGS.includes(citySlug) &&
        Boolean(getDestination(citySlug))
    );
}

export function getAllServiceCityParams(): { city: string }[] {
    return SERVICE_CITY_SLUGS.map((city) => ({ city }));
}

export function serviceCitiesResolved(): { slug: string; name: string }[] {
    return SERVICE_CITY_SLUGS.map((slug) => {
        const d = getDestination(slug);
        return { slug, name: d ? d.name : slug };
    });
}
