// Corporate cluster (grid F2–F3). Categorical sub-layers beneath the
// existing bespoke /corporate page (left untouched): by team size and
// by event type. No fabricated clients/case studies — categorical only.

export interface CorporateItem {
    slug: string;
    name: string;
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    faqs: { q: string; a: string }[];
    links: { label: string; href: string }[];
}

export interface CorporateCategory {
    slug: "by-team-size" | "events";
    name: string;
    segment: string;
    blurb: string;
    items: CorporateItem[];
}

const GT = { label: "Golden Triangle circuit", href: "/tours/golden-triangle" };
const FLEET = { label: "Convoy fleet", href: "/fleet" };
const DINING = { label: "Heritage dining", href: "/heritage-dining" };
const DEST = { label: "Destination archive", href: "/destinations" };
const BOOK = { label: "Brief the corporate desk", href: "/booking" };

export const corporateCategories: CorporateCategory[] = [
    {
        slug: "by-team-size",
        name: "By Team Size",
        segment: "By Team Size",
        blurb: "How a corporate mission scales to the size of the team.",
        items: [
            {
                slug: "small-team",
                name: "Small Team (under 15)",
                answer:
                    "A small-team corporate trip under 15 people prioritises agility and depth — a single premium vehicle or two, bespoke routing, and high-touch concierge. MyTripMyTravel runs these as compact, fully-private missions.",
                intro: [
                    "Under 15, the brief is agility: one or two premium vehicles, flexible routing, and concierge-level attention.",
                    "Ideal for leadership pods, founder retreats, or a close client group.",
                ],
                points: [
                    { label: "Fleet", detail: "One or two premium SUVs / executive sedans." },
                    { label: "Pace", detail: "Agile, fully customisable day-by-day." },
                    { label: "Best for", detail: "Leadership pods, founder retreats, key-client trips." },
                ],
                faqs: [
                    { q: "Do you handle small corporate groups?", a: "Yes — under-15 teams are run as compact, fully-private missions with one or two premium vehicles and concierge attention." },
                ],
                links: [GT, FLEET, BOOK],
            },
            {
                slug: "mid-team",
                name: "Mid Team (15–50)",
                answer:
                    "A mid-size corporate trip of 15–50 requires a small convoy, coordinated room blocks, and event-flow management across the itinerary. MyTripMyTravel operates these with GPS-tracked convoy logistics.",
                intro: [
                    "15–50 moves into convoy territory — multiple vehicles, room blocks, and coordinated movement.",
                    "Event flow (sessions, offsite activity, dining) is choreographed end to end.",
                ],
                points: [
                    { label: "Fleet", detail: "Small GPS-tracked convoy." },
                    { label: "Logistics", detail: "Room blocks + coordinated event flow." },
                    { label: "Best for", detail: "Department offsites, incentive pods." },
                ],
                faqs: [
                    { q: "What about a 30-person company offsite?", a: "A 15–50 mission uses a small convoy with room-block coordination and choreographed event flow, GPS-tracked throughout." },
                ],
                links: [GT, FLEET, DINING, BOOK],
            },
            {
                slug: "large-team",
                name: "Large Team (50–200)",
                answer:
                    "A large corporate mission of 50–200 is full convoy-scale: multi-property accommodation, large fleet logistics, and dedicated on-ground coordination. MyTripMyTravel runs these as managed operations.",
                intro: [
                    "50–200 is full operation scale — multi-property blocks, large convoys, dedicated coordination.",
                    "This is logistics-led: movement, timing, and contingency are the product.",
                ],
                points: [
                    { label: "Fleet", detail: "Large convoy with staged movement." },
                    { label: "Logistics", detail: "Multi-property blocks, on-ground command." },
                    { label: "Best for", detail: "Company-wide offsites, large incentive groups." },
                ],
                faqs: [
                    { q: "Can you run a 150-person corporate trip?", a: "Yes — large missions (50–200) use multi-property accommodation and large convoy logistics with dedicated on-ground command." },
                ],
                links: [FLEET, DEST, BOOK],
            },
            {
                slug: "leadership-board",
                name: "Leadership & Board",
                answer:
                    "A leadership or board mission prioritises discretion, security, and seamless logistics over scale — elite vehicles, private dining, and tightly controlled itineraries. MyTripMyTravel runs these at top-tier confidentiality.",
                intro: [
                    "Board and leadership trips are about discretion and seamlessness, not size.",
                    "Elite fleet, private dining, controlled access, encrypted logistics sync.",
                ],
                points: [
                    { label: "Fleet", detail: "Elite tier (BMW / Mercedes / Vellfire)." },
                    { label: "Protocol", detail: "Discretion, security, encrypted sync." },
                    { label: "Best for", detail: "Board offsites, executive retreats." },
                ],
                faqs: [
                    { q: "Do you handle confidential executive trips?", a: "Yes — leadership and board missions run on the elite fleet with discretion, security protocol, and encrypted logistics sync." },
                ],
                links: [FLEET, DINING, BOOK],
            },
        ],
    },
    {
        slug: "events",
        name: "Event Types",
        segment: "Events",
        blurb: "The corporate event formats MyTripMyTravel architects.",
        items: [
            {
                slug: "offsite",
                name: "Corporate Offsite",
                answer:
                    "A corporate offsite combines working sessions with a curated India experience — the Golden Triangle or a Rajasthan circuit as the backdrop, with logistics, venues, and dining handled so the team focuses on the agenda.",
                intro: [
                    "An offsite is work plus place — sessions framed by a curated circuit, logistics invisible.",
                    "We handle venue, movement, and dining so the agenda runs uninterrupted.",
                ],
                points: [
                    { label: "Format", detail: "Working sessions + curated circuit." },
                    { label: "Scope", detail: "Venue, convoy, dining, contingency." },
                ],
                faqs: [
                    { q: "Can you organise a company offsite in India?", a: "Yes — working sessions framed by a curated Golden Triangle or Rajasthan circuit, with all logistics, venues, and dining managed." },
                ],
                links: [GT, FLEET, BOOK],
            },
            {
                slug: "incentive-trip",
                name: "Incentive Trip",
                answer:
                    "An incentive trip rewards performers with a high-impact, fully-hosted India experience — elite vehicles, signature monuments, and heritage dining, engineered to feel exclusive at any group size.",
                intro: [
                    "Incentive travel is about reward and impact — the experience must feel exclusive.",
                    "We weight it toward signature moments: Taj sunrise, palace dining, elite fleet.",
                ],
                points: [
                    { label: "Emphasis", detail: "Signature, high-impact moments." },
                    { label: "Scope", detail: "Elite fleet, monuments, heritage dining." },
                ],
                faqs: [
                    { q: "Do you run incentive travel programmes?", a: "Yes — fully-hosted, high-impact India incentive trips weighted toward signature experiences and the elite fleet." },
                ],
                links: [DINING, FLEET, BOOK],
            },
            {
                slug: "conference-mice",
                name: "Conference & MICE",
                answer:
                    "Conference and MICE support covers delegate logistics, airport handovers, venue transfers, and excursion programmes around a corporate event — run on the GPS-tracked Elite Fleet protocol.",
                intro: [
                    "MICE is logistics at volume — delegates, transfers, excursions, timing.",
                    "We run the ground layer so the conference organiser owns the agenda, not the buses.",
                ],
                points: [
                    { label: "Scope", detail: "Delegate handovers, venue transfers, excursions." },
                    { label: "Protocol", detail: "GPS-tracked convoy, staged movement." },
                ],
                faqs: [
                    { q: "Do you support conference delegate logistics?", a: "Yes — airport handovers, venue transfers, and excursion programmes for conferences and MICE on the Elite Fleet protocol." },
                ],
                links: [FLEET, DEST, BOOK],
            },
            {
                slug: "product-launch",
                name: "Product Launch & Brand Event",
                answer:
                    "A product launch or brand event in a heritage Indian setting — a fort, palace, or lake venue as the backdrop — with full venue, guest-logistics, and dining production by MyTripMyTravel.",
                intro: [
                    "A launch in a heritage venue turns a brand moment into an experience.",
                    "We produce venue, guest movement, and dining; the brand owns the narrative.",
                ],
                points: [
                    { label: "Venues", detail: "Fort, palace, or lake heritage settings." },
                    { label: "Scope", detail: "Venue production, guest logistics, dining." },
                ],
                faqs: [
                    { q: "Can you host a brand launch in a palace?", a: "Yes — product launches and brand events staged in heritage forts, palaces, or lake venues with full production and logistics." },
                ],
                links: [DINING, BOOK],
            },
        ],
    },
];

// ---- Accessors ----

export function getCorporateCategory(slug: string): CorporateCategory | undefined {
    return corporateCategories.find((c) => c.slug === slug);
}

export function getCorporateItem(
    categorySlug: string,
    itemSlug: string
): { category: CorporateCategory; item: CorporateItem } | null {
    const category = getCorporateCategory(categorySlug);
    if (!category) return null;
    const item = category.items.find((i) => i.slug === itemSlug);
    if (!item) return null;
    return { category, item };
}

export function getCorporateCategoryParams(categorySlug: string): { item: string }[] {
    const c = getCorporateCategory(categorySlug);
    return c ? c.items.map((i) => ({ item: i.slug })) : [];
}
