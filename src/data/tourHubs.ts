// Regional tour hubs (grid B2). Per-region landing pages that list the
// tour packages relevant to each region, with honest counts (some
// regions have only a handful of packaged tours — bespoke planning
// covers the rest). No fabricated packages.

import { packages, type Package } from "./tours";

export interface RegionTourHub {
    slug: "rajasthan" | "kerala" | "himalayas" | "sikkim" | "andaman";
    name: string;
    tagline: string;
    /** Strings to match against package.location */
    locationKeys: string[];
    heroImg: string;
    /** Whether to also link the destinations-region page. */
    destinationsRegionSlug: string;
    blurb: string;
    intro: string[];
}

export const REGIONAL_HUBS: RegionTourHub[] = [
    {
        slug: "rajasthan",
        name: "Rajasthan",
        tagline: "Lake palaces, desert forts, and the royal heartland.",
        locationKeys: ["Rajasthan"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jodhpur-Mehrangarh_Fort-06-Blue_city-20131011.jpg",
        destinationsRegionSlug: "rajasthan",
        blurb: "The Mewar lakes, the Marwar fort cities, and the Thar — chauffeured circuits across the state's marquee and quieter heritage layers.",
        intro: [
            "Rajasthan is the most complete heritage circuit in India — palace hotels in Udaipur, Mehrangarh's vertical cliff above Jodhpur, the living fort at Jaisalmer, the painted havelis of Bundi. The packages below are starting architectures; we routinely combine and extend them.",
            "The state rewards a deliberate pace: 10–14 days for the marquee loop, 7 for a focused leg, and a Golden Triangle add-on to bookend the trip. Every itinerary runs on the private GPS-tracked Elite Fleet protocol with escorted access at the forts and palaces.",
        ],
    },
    {
        slug: "kerala",
        name: "Kerala",
        tagline: "Backwaters, tea estates, and the spice coast.",
        locationKeys: ["South India"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Backwaters_of_Alleppey.jpg",
        destinationsRegionSlug: "kerala",
        blurb: "Vembanad houseboats, Munnar tea, Fort Kochi heritage, and the south Kerala coast — slow-luxury and wellness-anchored circuits.",
        intro: [
            "Kerala is India's slow-luxury and wellness register — the houseboat night on Vembanad, the cool climb to Munnar's tea estates, Fort Kochi's spice-coast heritage, and the Ayurveda layer that runs the length of the coast. Tour packages here lean to multi-night base stays rather than fast multi-city rotation.",
            "Most of the listed packages are South-India circuits that anchor in Kerala; deeper Kerala-only missions (with Kumarakom, Bekal, Varkala) are typically built bespoke through the planning desk.",
        ],
    },
    {
        slug: "himalayas",
        name: "Himalayas",
        tagline: "Hill stations, high passes, and Trans-Himalayan altitude.",
        locationKeys: ["Himalayas", "North India"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/0/03/Leh_Palace_Ladakh.jpg",
        destinationsRegionSlug: "himalayas",
        blurb: "Colonial hill stations, the Garhwal-Kumaon belt, and the Ladakh altitude circuit — chauffeured and acclimatised end to end.",
        intro: [
            "The Himalayas span dramatically different missions — a paced Shimla–Manali colonial circuit, a Rishikesh wellness leg, the western Garhwal-Kumaon ridge, or the full Ladakh altitude programme with the obligatory acclimatisation buffer. The packages below open the range; the planning desk tailors the depth and pace per traveller.",
            "Ladakh is operated only with medically-aware pacing, oxygen-equipped fleet, and the Inner Line and protected-area permits handled. The other Himalayan circuits run on the standard Elite Fleet hill-protocol.",
        ],
    },
    {
        slug: "sikkim",
        name: "Sikkim",
        tagline: "The eastern Himalaya — Buddhist monasteries, ridge towns, frontier altitude.",
        locationKeys: ["North East"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tsomgo_Lake%2C_Sikkim.jpg",
        destinationsRegionSlug: "sikkim",
        blurb: "Gangtok, Pelling, the Buddha Park at Rabong, and the permit-controlled North Sikkim ascent — small, focused circuits.",
        intro: [
            "Sikkim is small, contained, and intense — Kanchenjunga always visible on a clear morning, Buddhist culture intact, and a north-Sikkim altitude leg (Lachen / Lachung / Gurudongmar / Yumthang) that requires protected-area permits and acclimatised pacing. Packages are limited; most Sikkim missions are bespoke.",
            "Allow 5–8 days minimum for a real circuit: Gangtok base, west to Pelling for Kanchenjunga, and north to Lachung or Lachen for the high valleys. The South-Sikkim Ravangla ridge is the gentle, lower-altitude alternative.",
        ],
    },
    {
        slug: "andaman",
        name: "Andaman Islands",
        tagline: "Bay of Bengal — beaches, reefs, and the heritage gateway.",
        locationKeys: ["Islands"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/71/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman%2C_India.jpg",
        destinationsRegionSlug: "andaman",
        blurb: "Port Blair as the gateway, Havelock for diving and Radhanagar, Neil for stillness — small, sequenced island circuits.",
        intro: [
            "The Andamans run on a different calendar from the rest of India — October–May for calm seas and reliable ferries. Packages are limited; most Andaman missions are designed bespoke around the ferry schedule, dive plans, and the desired beach-versus-stillness mix.",
            "A standard architecture is one night at Port Blair (Cellular Jail + ferry staging), 3–4 nights at Havelock (Radhanagar, reefs, dives), and 1–2 nights at Neil (decompression close). The planning desk builds it.",
        ],
    },
];

export interface RegionalTourHubContent {
    hub: RegionTourHub;
    packages: Package[];
    h1: string;
    answer: string;
    faqs: { q: string; a: string }[];
}

export function getRegionalTourHub(slug: RegionTourHub["slug"]): RegionTourHub | undefined {
    return REGIONAL_HUBS.find((h) => h.slug === slug);
}

export function getRegionalTourHubContent(slug: RegionTourHub["slug"]): RegionalTourHubContent | null {
    const hub = getRegionalTourHub(slug);
    if (!hub) return null;
    const list = packages.filter((p) => hub.locationKeys.includes(p.location));
    const countWord = list.length === 0
        ? "Tour packages for this region are currently bespoke-led"
        : `${list.length} package${list.length === 1 ? "" : "s"} available`;
    return {
        hub,
        packages: list,
        h1: `${hub.name} Tours & Itineraries`,
        answer: `${hub.name} tours by MyTripMyTravel are private, chauffeured, escorted circuits across ${hub.tagline.toLowerCase().replace(/\.$/, "")}. ${countWord} as starting architectures; the planning desk customises duration, hotels, stops, and pace. Every itinerary runs on the GPS-tracked Elite Fleet protocol with monument and venue access handled end to end.`,
        faqs: [
            { q: `How many ${hub.name} tour packages are available?`, a: list.length === 0 ? `Packaged ${hub.name} tours are currently bespoke-led — the planning desk designs the itinerary to your party rather than picking from a fixed shelf.` : `${list.length} ${hub.name} package${list.length === 1 ? "" : "s"} are listed as starting architectures; each is fully customisable, and the planning desk routinely combines and extends them.` },
            { q: `Can I customise the ${hub.name} itinerary?`, a: `Entirely. Every package is a starting architecture; we adjust duration, hotels, stops, and pace to your party while keeping the regional character intact.` },
            { q: `Are ${hub.name} tours private?`, a: `Always — a single party with a dedicated chauffeur on the GPS-tracked Elite Fleet protocol. Never shared or pooled.` },
            { q: `Can I extend ${hub.name} into another region?`, a: `Yes — the same chauffeured fleet continues seamlessly. ${hub.name} routinely combines with the Golden Triangle (Delhi-Agra-Jaipur) and the wider Indian circuit.` },
        ],
    };
}
