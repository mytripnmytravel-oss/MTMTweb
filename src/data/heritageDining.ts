// Heritage Dining sub-cluster (grid G adjacent). Categorical layers
// beneath the existing bespoke /heritage-dining page (left untouched):
// experience types and regional cuisines. No fabricated partners,
// restaurants, or named chefs — content is categorical only. Depth
// tuned to clear the High DoD floor.

export interface DiningItem {
    slug: string;
    name: string;
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    faqs: { q: string; a: string }[];
    links: { label: string; href: string }[];
}

export interface DiningCategory {
    slug: "experiences" | "cuisines";
    name: string;
    segment: string;
    blurb: string;
    items: DiningItem[];
}

const AGRA = { label: "Agra", href: "/destinations/agra" };
const JAIPUR = { label: "Jaipur", href: "/destinations/jaipur" };
const UDAIPUR = { label: "Udaipur", href: "/destinations/udaipur" };
const KOCHI = { label: "Kochi", href: "/destinations/kochi" };
const DEST = { label: "Destination archive", href: "/destinations" };
const WED = { label: "Wedding catering", href: "/weddings/services/catering-and-dining" };
const BOOK = { label: "Brief the dining wing", href: "/booking" };

export const diningCategories: DiningCategory[] = [
    {
        slug: "experiences",
        name: "Dining Experiences",
        segment: "Experiences",
        blurb: "The heritage-dining formats MyTripMyTravel curates — and how each is staged.",
        items: [
            {
                slug: "royal-thali",
                name: "Royal Thali Table",
                answer:
                    "A royal thali table is a curated multi-course tasting of a region's royal-kitchen repertoire, served in sequence on a single platter — Rajasthani, Mughlai, Awadhi, or Mewari depending on the city. MyTripMyTravel arranges it through vetted heritage kitchens in private or semi-private settings, matched to the leg and any dietary requirements.",
                intro: [
                    "The thali is the most complete expression of a regional royal kitchen — not a sampler, but a deliberately sequenced progression that shows how a court actually ate, balanced across textures, temperatures, and the order of service.",
                    "The register changes by city: a Rajasthani thali in Jodhpur is a different proposition from an Awadhi one in the north or a Mewari spread in Udaipur, and the curation matches the table to where you are rather than serving a generic 'Indian thali'.",
                    "MyTripMyTravel arranges this through vetted heritage kitchens — private or semi-private settings, not a buffet hall — with the courses paced to the evening and the rest of the day's itinerary rather than rushed.",
                    "Dietary requirements (vegetarian, Jain, allergy, religious) are planned ahead across the whole party, and where a city is pure-vegetarian or alcohol-free the menu is curated accordingly without it feeling like a compromise.",
                    "It integrates with the wider mission: timed into the itinerary, reachable by the chauffeured fleet, and available as a private wedding or celebration format at scale through the dining wing.",
                ],
                points: [
                    { label: "Format", detail: "Sequenced multi-course royal-kitchen tasting, region-specific (Rajasthani / Mughlai / Awadhi / Mewari)." },
                    { label: "Setting", detail: "Vetted heritage kitchens, private or semi-private — not a buffet hall." },
                    { label: "Pacing", detail: "Courses paced to the evening and the day's itinerary." },
                    { label: "Dietary", detail: "Vegetarian / Jain / allergy / religious planned ahead for the whole party." },
                    { label: "Integration", detail: "Timed into the mission, fleet-reachable, scalable for celebrations." },
                ],
                faqs: [
                    { q: "What is a royal thali table?", a: "A sequenced multi-course tasting of a region's royal-kitchen repertoire on a single platter — Rajasthani, Mughlai, Awadhi, or Mewari depending on the city — in a private heritage setting." },
                    { q: "Is it the same everywhere?", a: "No — the register is region-specific; the curation matches the thali to the city you are in rather than serving a generic version." },
                    { q: "Can dietary needs be accommodated?", a: "Yes — vegetarian, Jain, allergy, and religious requirements are planned ahead across the whole party." },
                    { q: "Can this be done for a wedding?", a: "Yes — it scales as a private celebration format through the dining wing, integrated with the wedding catering layer." },
                ],
                links: [JAIPUR, UDAIPUR, WED, BOOK],
            },
            {
                slug: "private-haveli-dining",
                name: "Private Haveli Dining",
                answer:
                    "Private haveli dining is an exclusive meal staged in a restored courtyard or rooftop of a heritage mansion, closed to other guests. MyTripMyTravel curates the setting, menu, and service through vetted heritage properties, timed to the itinerary and the light.",
                intro: [
                    "A private haveli dinner is as much about the room as the food — a frescoed courtyard or a rooftop over the old city, taken exclusively so the evening belongs only to your party.",
                    "The appeal is intimacy and atmosphere: candlelight, heritage architecture, and a menu built to the property's regional context rather than a hotel banquet template.",
                    "MyTripMyTravel curates the setting and the kitchen together through vetted heritage properties, with service paced for a long, unhurried evening rather than a turned table.",
                    "It is timed to the light — a rooftop set for sunset over a fort or old city — and sequenced into the day so it lands as the evening's centrepiece, not a rushed stop.",
                    "Dietary planning and the chauffeured arrival/return are handled within the mission, and the format scales privately for milestone celebrations and small weddings.",
                ],
                points: [
                    { label: "Setting", detail: "Restored courtyard or rooftop of a heritage mansion, taken exclusively." },
                    { label: "Menu", detail: "Built to the property's regional context, not a banquet template." },
                    { label: "Timing", detail: "Set to the light (rooftop sunset) and sequenced as the evening centrepiece." },
                    { label: "Service", detail: "Paced for a long, unhurried private evening." },
                    { label: "Scales", detail: "Privately for milestone celebrations and small weddings." },
                ],
                faqs: [
                    { q: "Is the haveli taken exclusively?", a: "Yes — private haveli dining means the courtyard or rooftop is closed to other guests for your party." },
                    { q: "What makes the menu different?", a: "It is built to the heritage property's regional context rather than a generic hotel banquet template." },
                    { q: "When is it best staged?", a: "Timed to the light — a rooftop set for sunset over a fort or old city — and sequenced as the evening's centrepiece." },
                    { q: "Can it host a small celebration?", a: "Yes — it scales privately for milestone celebrations and small weddings through the dining wing." },
                ],
                links: [UDAIPUR, JAIPUR, WED, BOOK],
            },
            {
                slug: "chefs-table",
                name: "Chef's Table & Tasting Menu",
                answer:
                    "A chef's table is a close, multi-course tasting led from the kitchen pass, walking the party through technique and regional provenance. MyTripMyTravel arranges it with vetted heritage and contemporary-Indian kitchens as a private or small-group format.",
                intro: [
                    "The chef's table is the most engaged dining format — a small party at the pass, a tasting menu narrated course by course, with technique and provenance explained rather than implied.",
                    "It suits travellers who want to understand the cuisine, not just eat it: regional ingredients, the logic of a sequence, and the difference between a court recipe and its restaurant adaptation.",
                    "MyTripMyTravel arranges it with vetted kitchens — heritage or serious contemporary-Indian — as a private or small-group experience, not a public seating.",
                    "The menu is built to the region and the season, with dietary constraints designed into the sequence in advance rather than substituted on the night.",
                    "It is timed into the itinerary and reachable by the chauffeured fleet, and works as a high-impact incentive or leadership-dinner format for corporate missions.",
                ],
                points: [
                    { label: "Format", detail: "Narrated multi-course tasting from the pass; technique + provenance explained." },
                    { label: "Audience", detail: "Travellers who want to understand the cuisine, not just sample it." },
                    { label: "Setting", detail: "Vetted heritage or contemporary-Indian kitchens, private/small-group." },
                    { label: "Menu", detail: "Region- and season-built; dietary designed into the sequence ahead." },
                    { label: "Also for", detail: "High-impact corporate incentive / leadership dinners." },
                ],
                faqs: [
                    { q: "What is a chef's table experience?", a: "A close, narrated multi-course tasting led from the kitchen pass, walking the party through technique and regional provenance — private or small-group." },
                    { q: "Is it public seating?", a: "No — it is arranged as a private or small-group format with vetted kitchens, not a public restaurant seating." },
                    { q: "Can dietary needs be handled at a tasting menu?", a: "Yes — constraints are designed into the sequence in advance rather than substituted on the night." },
                    { q: "Does it work for corporate dinners?", a: "Yes — it is a strong high-impact incentive or leadership-dinner format, sequenced into the mission." },
                ],
                links: [DEST, CORP_LINK(), BOOK],
            },
            {
                slug: "street-food-trail",
                name: "Escorted Street-Food Trail",
                answer:
                    "An escorted street-food trail is a guided tasting walk through a city's legendary kitchens — old-Delhi, Jaipur, or Kochi — vetted for hygiene and standing, led by a specialist, with the chauffeur shadowing for logistics.",
                intro: [
                    "Street food is where a city's real culinary identity lives, but it is also where most travellers get it wrong — wrong stalls, wrong order, hygiene roulette. The escorted trail removes the risk while keeping the authenticity.",
                    "A specialist leads the route through genuinely legendary, vetted establishments — the century-old kebab house, the specific sweet shop — in the order a local would actually eat them.",
                    "Hygiene and standing are pre-vetted, portions are paced so the trail is a progression rather than an overload, and the chauffeur shadows the walk so there is no logistics friction.",
                    "It is tuned to the city: an old-Delhi paratha-and-kebab trail is a different route and sequence from a Jaipur sweets-and-kachori one or a Kochi spice-coast walk.",
                    "Dietary constraints are routed around in advance, and the trail is timed into the day so it complements rather than collides with the main dining plan.",
                ],
                points: [
                    { label: "Route", detail: "Vetted legendary establishments in the order a local would eat them." },
                    { label: "Safety", detail: "Hygiene and standing pre-vetted; specialist-led, chauffeur-shadowed." },
                    { label: "Pacing", detail: "Portioned as a progression, not an overload." },
                    { label: "City-specific", detail: "Old-Delhi vs Jaipur vs Kochi — distinct routes and sequences." },
                    { label: "Integration", detail: "Dietary routed around ahead; timed into the day's plan." },
                ],
                faqs: [
                    { q: "Is a street-food trail safe?", a: "Yes — establishments are pre-vetted for hygiene and standing, the route is specialist-led, and the chauffeur shadows the walk for logistics." },
                    { q: "Is it the same in every city?", a: "No — an old-Delhi trail is a different route and sequence from Jaipur or Kochi; each is tuned to the city's real culinary identity." },
                    { q: "Can dietary needs be accommodated?", a: "Yes — constraints are routed around in advance when the trail is planned." },
                    { q: "How is it paced?", a: "Portions are sequenced as a progression so the trail is a tasting walk, not an overload." },
                ],
                links: [AGRA, JAIPUR, KOCHI, BOOK],
            },
            {
                slug: "sundowner-and-folk",
                name: "Sundowner & Folk Dining",
                answer:
                    "A sundowner-and-folk dinner pairs a heritage or desert setting with regional folk performance and a curated regional menu, timed to sunset. MyTripMyTravel stages it privately — lake, fort, rooftop, or dune — as an evening centrepiece.",
                intro: [
                    "This is dining as a staged experience: a setting chosen for the light, regional folk performance (Manganiar, Kalbeliya, or coastal) and a menu of the place, sequenced so the sunset, the music, and the food land together.",
                    "The setting is the variable — a lake terrace in Udaipur, a fort rampart, a desert dune near Jaisalmer, or an old-city rooftop — and the curation matches performance and menu to it rather than importing a generic 'cultural night'.",
                    "MyTripMyTravel stages it privately for the party, with the performance briefed and the timing built around the exact sunset and the rest of the itinerary.",
                    "It scales cleanly: an intimate couple's sundowner and a 200-guest wedding sangeet are the same format at different magnitudes, both handled by the dining wing.",
                    "Logistics — chauffeured arrival to a remote dune or rooftop, dietary planning, weather fallback for open-air settings — are handled within the mission so the evening reads only as spectacle.",
                ],
                points: [
                    { label: "Format", detail: "Setting + regional folk performance + regional menu, timed to sunset." },
                    { label: "Settings", detail: "Lake terrace, fort rampart, desert dune, or old-city rooftop." },
                    { label: "Curation", detail: "Performance and menu matched to the setting, not a generic show." },
                    { label: "Scales", detail: "Intimate sundowner to large wedding sangeet — same format, different magnitude." },
                    { label: "Logistics", detail: "Chauffeured arrival, dietary, weather fallback handled within the mission." },
                ],
                faqs: [
                    { q: "What is a sundowner-and-folk dinner?", a: "A heritage or desert setting paired with regional folk performance and a regional menu, timed to sunset and staged privately for your party." },
                    { q: "Where can it be staged?", a: "A lake terrace, fort rampart, desert dune, or old-city rooftop — with performance and menu matched to the setting." },
                    { q: "Does it scale for weddings?", a: "Yes — it is the same format as a wedding sangeet at larger magnitude, handled by the dining wing." },
                    { q: "What about open-air weather?", a: "Open-air settings carry a weather fallback, with chauffeured arrival and dietary planning handled within the mission." },
                ],
                links: [UDAIPUR, WED, BOOK],
            },
        ],
    },
    {
        slug: "cuisines",
        name: "Regional Cuisines",
        segment: "Cuisines",
        blurb: "The regional kitchens MyTripMyTravel curates against — matched to where you actually are.",
        items: [
            {
                slug: "mughlai",
                name: "Mughlai Cuisine",
                answer:
                    "Mughlai cuisine is the rich, slow-cooked court tradition of the Mughal empire — dum technique, layered gravies, kebabs, and breads — at its heart around Delhi and Agra. MyTripMyTravel curates it through vetted heritage kitchens, matched to the Golden Triangle leg.",
                intro: [
                    "Mughlai is the cuisine the Golden Triangle is built on — the court kitchen of Delhi and Agra, defined by slow dum cooking, layered gravies, and a kebab-and-bread repertoire refined over centuries of imperial patronage.",
                    "Eaten well, it is precise and restrained, not the heavy caricature most travellers encounter; the curation routes you to kitchens that still cook it properly rather than for a tour bus.",
                    "MyTripMyTravel matches the Mughlai table to the Golden Triangle leg — an Agra or old-Delhi setting — in private or semi-private form, paced into the evening.",
                    "Dietary constraints are handled within the tradition (it has a strong vegetarian register), planned across the party in advance.",
                    "It integrates with the itinerary and the chauffeured fleet, and is a natural wedding and celebration cuisine through the dining wing.",
                ],
                points: [
                    { label: "Character", detail: "Slow dum cooking, layered gravies, kebabs and breads — precise, not heavy." },
                    { label: "Heartland", detail: "Delhi and Agra — the Golden Triangle core." },
                    { label: "Curation", detail: "Kitchens that still cook it properly, not for a tour bus." },
                    { label: "Dietary", detail: "Strong vegetarian register; planned across the party ahead." },
                    { label: "Also for", detail: "Wedding and celebration catering via the dining wing." },
                ],
                faqs: [
                    { q: "Where is Mughlai cuisine best experienced?", a: "Around Delhi and Agra — the Golden Triangle core — through vetted heritage kitchens that still cook it properly." },
                    { q: "Is Mughlai food heavy?", a: "Eaten well it is precise and restrained, not the heavy caricature most travellers encounter; the curation routes you to the real thing." },
                    { q: "Are there vegetarian options?", a: "Yes — Mughlai has a strong vegetarian register; dietary needs are planned across the party in advance." },
                    { q: "Can it cater a wedding?", a: "Yes — it is a natural celebration cuisine, scaled through the dining wing." },
                ],
                links: [AGRA, JAIPUR, WED, BOOK],
            },
            {
                slug: "rajasthani",
                name: "Rajasthani Cuisine",
                answer:
                    "Rajasthani cuisine is the desert-state tradition — laal maas, dal-baati-churma, ker sangri, gatte — shaped by aridity and royal Marwari and Mewari kitchens. MyTripMyTravel curates it through vetted heritage tables across the Rajasthan circuit.",
                intro: [
                    "Rajasthani food is a direct expression of its environment — techniques and ingredients shaped by a desert where water and fresh produce were scarce, refined in the royal kitchens of Marwar and Mewar.",
                    "It splits by sub-region: the fiery Marwari laal maas of Jodhpur, the Mewari register of Udaipur, the bajra-and-ker-sangri desert food of Jaisalmer — and the curation matches the table to the city.",
                    "MyTripMyTravel arranges it through vetted heritage kitchens and palace tables, private or semi-private, sequenced into the Rajasthan leg.",
                    "It carries a deep vegetarian tradition (dal-baati-churma, gatte, ker sangri); where a city is pure-vegetarian the menu is curated to it without compromise.",
                    "Dietary planning, chauffeured logistics, and celebration scaling are handled within the mission and the dining wing.",
                ],
                points: [
                    { label: "Character", detail: "Desert-shaped: laal maas, dal-baati-churma, ker sangri, gatte." },
                    { label: "Sub-regions", detail: "Marwari (Jodhpur) vs Mewari (Udaipur) vs Thar (Jaisalmer) — matched to city." },
                    { label: "Setting", detail: "Vetted heritage kitchens and palace tables, private/semi-private." },
                    { label: "Dietary", detail: "Deep vegetarian tradition; curated without compromise where required." },
                    { label: "Integration", detail: "Sequenced into the Rajasthan leg; scales for celebrations." },
                ],
                faqs: [
                    { q: "What defines Rajasthani cuisine?", a: "Desert-shaped technique and ingredients — laal maas, dal-baati-churma, ker sangri, gatte — refined in royal Marwari and Mewari kitchens." },
                    { q: "Is it the same across Rajasthan?", a: "No — Marwari (Jodhpur), Mewari (Udaipur), and Thar (Jaisalmer) registers differ; the curation matches the table to the city." },
                    { q: "Is there a strong vegetarian tradition?", a: "Yes — much of the canon is vegetarian; menus are curated without compromise where a city is pure-vegetarian." },
                    { q: "Can it cater a Rajasthan wedding?", a: "Yes — it scales through the dining wing as a celebration cuisine." },
                ],
                links: [UDAIPUR, JAIPUR, WED, BOOK],
            },
            {
                slug: "awadhi",
                name: "Awadhi Cuisine",
                answer:
                    "Awadhi cuisine is the refined Nawabi tradition of Lucknow and the north — dum pukht slow-cooking, delicate kebabs (galouti), and fragrant biryani. MyTripMyTravel curates it through vetted heritage kitchens on north-India extensions.",
                intro: [
                    "Awadhi is the cuisine of subtlety — the Nawabi kitchens of Lucknow perfected dum pukht (sealed slow-cooking) and a delicacy of spicing that is the counterpoint to robust Mughlai or fiery Rajasthani food.",
                    "Its signatures — galouti and other melt-texture kebabs, layered biryani, fragrant kormas — reward a curated table that understands restraint over heat.",
                    "MyTripMyTravel arranges Awadhi dining through vetted heritage kitchens on north-India extensions of the core circuit, in private or semi-private settings.",
                    "Dietary constraints are designed in ahead; the tradition has a refined vegetarian register beyond the famous kebabs.",
                    "It is sequenced into the itinerary and scales through the dining wing for celebrations seeking a more delicate register.",
                ],
                points: [
                    { label: "Character", detail: "Dum pukht slow-cooking, melt-texture kebabs (galouti), fragrant biryani — subtle, not fiery." },
                    { label: "Heartland", detail: "Lucknow and the north — a circuit extension." },
                    { label: "Curation", detail: "Kitchens that understand restraint over heat." },
                    { label: "Dietary", detail: "Refined vegetarian register beyond the kebabs; planned ahead." },
                    { label: "Also for", detail: "Celebrations seeking a delicate register, via the dining wing." },
                ],
                faqs: [
                    { q: "How is Awadhi different from Mughlai?", a: "Awadhi is more delicate — dum pukht slow-cooking and subtle spicing — a counterpoint to robust Mughlai; the curation routes to kitchens that respect that restraint." },
                    { q: "Where is it experienced?", a: "Around Lucknow and the north, as an extension of the core circuit, through vetted heritage kitchens." },
                    { q: "Is there vegetarian Awadhi food?", a: "Yes — a refined vegetarian register beyond the famous kebabs; dietary needs are designed in ahead." },
                    { q: "Can it cater a celebration?", a: "Yes — it scales through the dining wing for events wanting a more delicate register." },
                ],
                links: [DEST, WED, BOOK],
            },
            {
                slug: "malabar",
                name: "Malabar / Kerala Cuisine",
                answer:
                    "Malabar and Kerala cuisine is the spice-coast tradition — coconut, curry leaf, fresh seafood, appam, and Syrian-Christian and Moplah influences. MyTripMyTravel curates it through vetted kitchens across the Kerala circuit.",
                intro: [
                    "Kerala's table is a direct product of the spice coast — coconut in every register, curry leaf, tamarind, and centuries of Arab, Syrian-Christian, and Moplah trade influence layered over a base of fresh seafood and rice.",
                    "It is distinct from the north in technique and ingredient entirely; the curation routes to kitchens — backwater, coastal, plantation — that cook the genuine regional repertoire, not a hotel pan-Indian menu.",
                    "MyTripMyTravel matches the Kerala table to the leg: a backwater houseboat sadya, a Fort Kochi seafood table, a plantation-estate spread in the highlands.",
                    "It has one of India's strongest vegetarian traditions (the banana-leaf sadya) alongside its seafood; dietary needs are planned across the party.",
                    "It is sequenced into the Kerala circuit, reachable by the chauffeured fleet, and scales through the dining wing.",
                ],
                points: [
                    { label: "Character", detail: "Coconut, curry leaf, seafood, appam; Syrian-Christian and Moplah influence." },
                    { label: "Setting", detail: "Backwater houseboat sadya, Fort Kochi seafood, plantation-estate table." },
                    { label: "Curation", detail: "Genuine regional kitchens, not hotel pan-Indian." },
                    { label: "Dietary", detail: "Strong vegetarian sadya tradition alongside seafood; planned ahead." },
                    { label: "Integration", detail: "Sequenced into the Kerala circuit; scales via the dining wing." },
                ],
                faqs: [
                    { q: "What defines Kerala / Malabar cuisine?", a: "A spice-coast base — coconut, curry leaf, fresh seafood, appam — layered with Arab, Syrian-Christian, and Moplah trade influence." },
                    { q: "Where is it best experienced?", a: "Matched to the leg — a backwater houseboat sadya, Fort Kochi seafood, or a plantation-estate table — through vetted regional kitchens." },
                    { q: "Is there a strong vegetarian option?", a: "Yes — the banana-leaf sadya is one of India's great vegetarian traditions, alongside the seafood; dietary needs are planned across the party." },
                    { q: "Can it cater a Kerala celebration?", a: "Yes — it scales through the dining wing, sequenced into the Kerala circuit." },
                ],
                links: [KOCHI, DEST, BOOK],
            },
        ],
    },
];

function CORP_LINK() {
    return { label: "Corporate dinners", href: "/corporate/events/incentive-trip" };
}

// ---- Accessors ----

export function getDiningCategory(slug: string): DiningCategory | undefined {
    return diningCategories.find((c) => c.slug === slug);
}

export function getDiningItem(
    categorySlug: string,
    itemSlug: string
): { category: DiningCategory; item: DiningItem } | null {
    const category = getDiningCategory(categorySlug);
    if (!category) return null;
    const item = category.items.find((i) => i.slug === itemSlug);
    if (!item) return null;
    return { category, item };
}

export function getDiningCategoryParams(categorySlug: string): { item: string }[] {
    const c = getDiningCategory(categorySlug);
    return c ? c.items.map((i) => ({ item: i.slug })) : [];
}
