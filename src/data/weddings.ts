// Weddings cluster (grid F7–F9). Categorical sub-layers beneath the
// existing bespoke /weddings page (left untouched): venue types,
// guest-count tiers, and service lines. No fabricated people or venues —
// content is categorical and routes specifics to the weddings wing.

export interface WeddingItem {
    slug: string;
    name: string;
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    faqs: { q: string; a: string }[];
    links: { label: string; href: string }[];
}

export interface WeddingCategory {
    slug: "venues" | "by-guest-count" | "services";
    name: string;
    segment: string; // breadcrumb label
    blurb: string;
    items: WeddingItem[];
}

const UDAIPUR = { label: "Udaipur — lake palaces", href: "/destinations/udaipur" };
const JAIPUR = { label: "Jaipur — Rajput palaces", href: "/destinations/jaipur" };
const JODHPUR = { label: "Jodhpur — Mehrangarh", href: "/destinations/jodhpur" };
const FLEET = { label: "Convoy fleet", href: "/fleet" };
const DINING = { label: "Heritage dining", href: "/heritage-dining" };
const BOOK = { label: "Speak to the weddings wing", href: "/booking" };

export const weddingCategories: WeddingCategory[] = [
    {
        slug: "venues",
        name: "Wedding Venues",
        segment: "Venues",
        blurb: "The venue archetypes MyTripMyTravel operates royal weddings within.",
        items: [
            {
                slug: "lake-palace",
                name: "Lake Palace Weddings",
                answer:
                    "A lake palace wedding is hosted in or beside a historic island or lakefront palace — most iconically in Udaipur, the City of Lakes. MyTripMyTravel arranges the venue, private boat protocols for the baraat and guests, palace-suite room blocks, and full logistics. Capacities and exclusivity vary by property and are confirmed by the weddings wing.",
                intro: [
                    "The lake palace is the most requested royal-wedding setting in India — white marble on water, lit at night, with the ceremony staged against the lake.",
                    "Udaipur is the centre of gravity; we handle venue access, sunset boat protocols, palace-suite blocks, and the convoy and dining layers as one operation.",
                ],
                points: [
                    { label: "Signature location", detail: "Udaipur (Lake Pichola) — lake and island palace venues." },
                    { label: "Guest experience", detail: "Private boat transfers, lakefront ceremony, illuminated palace backdrop." },
                    { label: "Logistics", detail: "Palace-suite room blocks, convoy fleet, guest movement choreographed." },
                ],
                faqs: [
                    { q: "Where can I have a lake palace wedding in India?", a: "Primarily Udaipur, the City of Lakes, with island and lakefront palace venues. Our weddings wing secures the property and handles all logistics." },
                    { q: "Can guests be transferred by boat?", a: "Yes — private boat protocols for the baraat and guest movement are part of the lake-palace package, subject to lake levels and clearance." },
                ],
                links: [UDAIPUR, FLEET, DINING, BOOK],
            },
            {
                slug: "fort",
                name: "Fort & Citadel Weddings",
                answer:
                    "A fort wedding is hosted within a historic Rajput hill fort or citadel — settings such as Jaipur's Amer, Jodhpur's Mehrangarh environs, or comparable heritage forts. MyTripMyTravel arranges venue access, ramparts and courtyard staging, and the full guest-logistics and convoy layer.",
                intro: [
                    "A fort wedding trades water for grandeur — ramparts, courtyards, and floodlit sandstone on a scale nothing modern matches.",
                    "We arrange heritage-fort venue access and stage ceremonies in courtyards or on ramparts, with convoy and dining handled end to end.",
                ],
                points: [
                    { label: "Signature locations", detail: "Jaipur (Amer environs) and Jodhpur (Mehrangarh setting)." },
                    { label: "Staging", detail: "Courtyard or rampart ceremony with floodlit fort backdrop." },
                    { label: "Logistics", detail: "Heritage room blocks, fort access windows, convoy choreography." },
                ],
                faqs: [
                    { q: "Can I get married inside a Rajasthan fort?", a: "Select heritage forts permit private events in courtyards or rampart areas. Access windows and capacities vary; the weddings wing confirms per venue." },
                    { q: "Which forts are used for weddings?", a: "Jaipur and Jodhpur offer the strongest fort-wedding settings; we match the venue to guest count and dates." },
                ],
                links: [JAIPUR, JODHPUR, FLEET, BOOK],
            },
            {
                slug: "heritage-haveli",
                name: "Heritage Haveli Weddings",
                answer:
                    "A heritage haveli wedding is hosted in a restored courtyard mansion — intimate, ornate, and richly atmospheric. Found across Rajasthan's heritage towns, havelis suit smaller, design-led weddings. MyTripMyTravel curates the property, decor framework, and logistics.",
                intro: [
                    "Havelis are the intimate end of the royal spectrum — hand-painted courtyards and rooftop terraces, ideal for design-led weddings under ~150 guests.",
                    "We curate the haveli, the decor-mandap framework, and the heritage-dining and movement logistics.",
                ],
                points: [
                    { label: "Best for", detail: "Intimate to classic guest counts; design-forward celebrations." },
                    { label: "Atmosphere", detail: "Frescoed courtyards, rooftop terraces, candlelit intimacy." },
                    { label: "Locations", detail: "Jaipur, Jodhpur, Udaipur old-city heritage havelis." },
                ],
                faqs: [
                    { q: "Are havelis good for small weddings?", a: "Yes — havelis are ideal for intimate-to-classic guest counts where atmosphere and design matter more than scale." },
                    { q: "Where are wedding havelis located?", a: "Across Rajasthan's heritage cities — Jaipur, Jodhpur, and Udaipur old quarters. We match property to party size." },
                ],
                links: [JAIPUR, JODHPUR, DINING, BOOK],
            },
            {
                slug: "desert-camp",
                name: "Desert Camp Weddings",
                answer:
                    "A desert camp wedding is hosted in a luxury tented camp on the Thar dunes — most distinctively near Jaisalmer or Jodhpur. MyTripMyTravel arranges the camp build, dune ceremony staging, folk performance, and full guest logistics across the desert.",
                intro: [
                    "The desert camp is the most cinematic setting — dune ceremonies, fire-lit dinners, and folk performance under exceptionally dark skies.",
                    "We arrange the luxury camp build, dune staging, and the convoy and dining operations the remote setting requires.",
                ],
                points: [
                    { label: "Signature location", detail: "Thar dunes near Jaisalmer / Jodhpur." },
                    { label: "Experience", detail: "Dune ceremony, Manganiar folk performance, open-sky dinners." },
                    { label: "Logistics", detail: "Luxury camp build, desert-capable convoy, water/power planning." },
                ],
                faqs: [
                    { q: "Can I have a desert wedding in Rajasthan?", a: "Yes — luxury tented camps on the Thar dunes near Jaisalmer or Jodhpur. The weddings wing handles the full camp build and logistics." },
                    { q: "Is a desert camp wedding comfortable?", a: "Our luxury camps include en-suite comfort and climate provision; the remote setting is fully serviced." },
                ],
                links: [JODHPUR, FLEET, BOOK],
            },
        ],
    },
    {
        slug: "by-guest-count",
        name: "By Guest Count",
        segment: "By Guest Count",
        blurb: "How the operation scales to the size of the celebration.",
        items: [
            {
                slug: "intimate",
                name: "Intimate Weddings (under 50)",
                answer:
                    "An intimate wedding under 50 guests prioritises exclusivity and detail over scale. MyTripMyTravel pairs these with havelis or private palace wings, with concierge-level personalisation and tight, premium logistics.",
                intro: [
                    "Under 50 guests, the brief is intimacy and craft — a haveli or a private palace wing rather than a sprawling estate.",
                    "Logistics are light but premium: small convoy, private dining, deep personalisation.",
                ],
                points: [
                    { label: "Venues", detail: "Heritage havelis, private palace wings." },
                    { label: "Logistics", detail: "Compact premium convoy; concierge personalisation." },
                ],
                faqs: [
                    { q: "Do you handle small destination weddings?", a: "Yes — intimate weddings under 50 are a speciality, matched to havelis or private palace wings with concierge-level detail." },
                ],
                links: [UDAIPUR, DINING, BOOK],
            },
            {
                slug: "classic",
                name: "Classic Weddings (50–150)",
                answer:
                    "A classic wedding of 50–150 guests is the most common royal-wedding scale. MyTripMyTravel matches it to palace hotels or heritage estates with full multi-event choreography across the wedding days.",
                intro: [
                    "50–150 guests is the classic band — palace hotels and heritage estates with room to stage multiple events.",
                    "We choreograph the full sequence (mehndi, sangeet, ceremony, reception) with convoy and dining layers.",
                ],
                points: [
                    { label: "Venues", detail: "Palace hotels, heritage estates." },
                    { label: "Logistics", detail: "Multi-event choreography, guest room blocks, convoy." },
                ],
                faqs: [
                    { q: "What venue suits 100 wedding guests?", a: "A palace hotel or heritage estate — the classic 50–150 band — with multi-event staging handled by the weddings wing." },
                ],
                links: [JAIPUR, FLEET, BOOK],
            },
            {
                slug: "grand",
                name: "Grand Weddings (150–400)",
                answer:
                    "A grand wedding of 150–400 guests requires large palace or fort venues and serious logistics — multi-property room blocks, convoy fleets, and event-flow management. MyTripMyTravel operates these as full missions.",
                intro: [
                    "150–400 guests moves into fort and large-palace territory, with multi-property accommodation and convoy logistics.",
                    "This is mission-scale: room-block management across properties, fleet convoys, and tight event-flow control.",
                ],
                points: [
                    { label: "Venues", detail: "Large palaces, forts, estate grounds." },
                    { label: "Logistics", detail: "Multi-property blocks, convoy fleets, flow management." },
                ],
                faqs: [
                    { q: "Can you handle a 300-guest wedding in India?", a: "Yes — grand weddings (150–400) use large palace or fort venues with multi-property logistics, operated as a full mission." },
                ],
                links: [JODHPUR, FLEET, BOOK],
            },
            {
                slug: "royal",
                name: "Royal Weddings (400+)",
                answer:
                    "A royal wedding of 400+ guests is a full-scale production — exclusive palace/fort buyouts, large convoy fleets, encrypted logistics sync, and dedicated event command. MyTripMyTravel runs these as top-tier missions.",
                intro: [
                    "400+ guests means venue buyouts, large convoy fleets, and dedicated event command with encrypted logistics sync.",
                    "These are top-tier productions — every layer (venue, fleet, dining, guest movement) is run as a coordinated mission.",
                ],
                points: [
                    { label: "Venues", detail: "Exclusive palace / fort buyouts." },
                    { label: "Logistics", detail: "Large convoy fleets, encrypted sync, event command." },
                ],
                faqs: [
                    { q: "Do you handle 500+ guest royal weddings?", a: "Yes — royal-scale weddings (400+) with venue buyouts, large convoys, and dedicated event command are our top tier." },
                ],
                links: [UDAIPUR, JODHPUR, FLEET, BOOK],
            },
        ],
    },
    {
        slug: "services",
        name: "Wedding Services",
        segment: "Services",
        blurb: "The service lines that compose a MyTripMyTravel wedding mission.",
        items: [
            {
                slug: "planning-and-design",
                name: "Planning & Design",
                answer:
                    "End-to-end wedding planning and design — concept, timeline, vendor curation, and on-ground command — architected by the MyTripMyTravel weddings wing as a single accountable mission.",
                intro: [
                    "Planning is the spine: concept, multi-day timeline, vendor curation, and a single accountable command on the ground.",
                    "Everything else (venue, decor, fleet, dining) hangs off this layer.",
                ],
                points: [
                    { label: "Scope", detail: "Concept, timeline, vendor curation, on-ground command." },
                    { label: "Model", detail: "Single accountable mission lead, not fragmented vendors." },
                ],
                faqs: [
                    { q: "Do you offer full wedding planning?", a: "Yes — end-to-end planning, design, vendor curation, and on-ground command as one accountable mission." },
                ],
                links: [BOOK],
            },
            {
                slug: "decor-and-mandap",
                name: "Decor & Mandap",
                answer:
                    "Bespoke decor and mandap design tuned to the venue's heritage — florals, lighting, and staging that work with palace, fort, haveli, or desert settings rather than against them.",
                intro: [
                    "Decor is venue-led: the mandap and staging are designed to amplify a heritage setting, not overlay a generic theme.",
                    "Florals, lighting, and structural design are curated per venue archetype.",
                ],
                points: [
                    { label: "Approach", detail: "Heritage-led, venue-specific design." },
                    { label: "Scope", detail: "Mandap, florals, lighting, structural staging." },
                ],
                faqs: [
                    { q: "Is decor customised to the venue?", a: "Yes — decor and mandap are designed specifically to the heritage venue, not a generic template." },
                ],
                links: [DINING, BOOK],
            },
            {
                slug: "guest-logistics",
                name: "Guest Logistics & Convoy",
                answer:
                    "Full guest logistics — airport handovers, room-block management, and chauffeured convoy movement between events — run on the same GPS-tracked Elite Fleet protocol as the rest of MyTripMyTravel.",
                intro: [
                    "Guest logistics is where weddings succeed or fail: arrivals, room blocks, and choreographed movement between events.",
                    "We run it on the Elite Fleet protocol — GPS-tracked convoys, encrypted sync for large counts.",
                ],
                points: [
                    { label: "Scope", detail: "Airport handovers, room blocks, inter-event convoy." },
                    { label: "Protocol", detail: "GPS-tracked Elite Fleet; encrypted sync at scale." },
                ],
                faqs: [
                    { q: "Do you manage wedding guest transport?", a: "Yes — airport handovers, room-block coordination, and chauffeured convoy movement between events on the Elite Fleet protocol." },
                ],
                links: [FLEET, BOOK],
            },
            {
                slug: "catering-and-dining",
                name: "Catering & Heritage Dining",
                answer:
                    "Wedding catering curated through the MyTripMyTravel heritage-dining wing — royal-recipe menus, multi-cuisine scaling, and private tasting, matched to the venue and guest count.",
                intro: [
                    "Dining is curated, not outsourced blind — royal-recipe menus and multi-cuisine scaling via the heritage-dining wing.",
                    "Menus are matched to venue and count, with private tasting ahead of the event.",
                ],
                points: [
                    { label: "Source", detail: "Heritage-dining wing; royal-recipe and multi-cuisine." },
                    { label: "Process", detail: "Private tasting; venue- and count-matched menus." },
                ],
                faqs: [
                    { q: "Do you handle wedding catering?", a: "Yes — through our heritage-dining wing, with royal-recipe menus, multi-cuisine scaling, and private tasting." },
                ],
                links: [DINING, BOOK],
            },
        ],
    },
];

// ---- Accessors ----

export function getWeddingCategory(slug: string): WeddingCategory | undefined {
    return weddingCategories.find((c) => c.slug === slug);
}

export function getWeddingItem(
    categorySlug: string,
    itemSlug: string
): { category: WeddingCategory; item: WeddingItem } | null {
    const category = getWeddingCategory(categorySlug);
    if (!category) return null;
    const item = category.items.find((i) => i.slug === itemSlug);
    if (!item) return null;
    return { category, item };
}

export function getWeddingCategoryParams(categorySlug: string): { item: string }[] {
    const c = getWeddingCategory(categorySlug);
    return c ? c.items.map((i) => ({ item: i.slug })) : [];
}
