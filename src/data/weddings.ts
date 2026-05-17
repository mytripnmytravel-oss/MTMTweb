// Weddings cluster (grid F7–F9). Categorical sub-layers beneath the
// existing bespoke /weddings page (left untouched): venue types,
// guest-count tiers, and service lines. No fabricated people or venues —
// content is categorical and routes specifics to the weddings wing.
// Content depth tuned to clear the High DoD floor.

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
    segment: string;
    blurb: string;
    items: WeddingItem[];
}

const UDAIPUR = { label: "Udaipur — lake palaces", href: "/destinations/udaipur" };
const JAIPUR = { label: "Jaipur — Rajput palaces", href: "/destinations/jaipur" };
const JODHPUR = { label: "Jodhpur — Mehrangarh", href: "/destinations/jodhpur" };
const FLEET = { label: "Convoy fleet", href: "/fleet" };
const DINING = { label: "Heritage dining", href: "/heritage-dining" };
const CORP = { label: "Corporate & celebrations", href: "/corporate" };
const BOOK = { label: "Speak to the weddings wing", href: "/booking" };

export const weddingCategories: WeddingCategory[] = [
    {
        slug: "venues",
        name: "Wedding Venues",
        segment: "Venues",
        blurb: "The venue archetypes MyTripMyTravel operates royal weddings within — and how the production differs for each.",
        items: [
            {
                slug: "lake-palace",
                name: "Lake Palace Weddings",
                answer:
                    "A lake palace wedding is hosted in or beside a historic island or lakefront palace — most iconically in Udaipur, the City of Lakes. MyTripMyTravel arranges the venue, private boat protocols for the baraat and guests, palace-suite room blocks, decor, and full logistics as one accountable production. Capacities, exclusivity, and dates vary by property and are confirmed by the weddings wing.",
                intro: [
                    "The lake palace is the most requested royal-wedding setting in India, and for one reason: nothing else stages a ceremony on water against floodlit marble. The image is unrepeatable — which is exactly why the logistics behind it are unforgiving and must be engineered, not improvised.",
                    "Udaipur is the centre of gravity. Island and lakefront palace venues there are limited, exclusive, and booked far ahead, so the first move is securing the right property for the date and guest count — a step the weddings wing leads before anything else is designed.",
                    "The defining operational layer is water. Guests, the baraat, decor, catering, and contingency all move by boat, on a schedule, against lake conditions and authority clearances. We run private boat protocols with staged loading, timed crossings, and a weather fallback so the most beautiful part of the wedding is also the most controlled.",
                    "Accommodation is handled as palace-suite room blocks rather than scattered bookings, with arrival manifests, guest movement between the city and the venue, and a fleet convoy for road legs. Decor and the mandap are designed specifically to the palace — amplifying the heritage, not overlaying a generic theme.",
                    "Dining is curated through the heritage-dining wing at the scale the celebration needs, with royal-recipe menus and private settings. The entire production — venue, boats, fleet, decor, dining, contingency — sits under a single accountable mission lead, so the family experiences the wedding, not the operation.",
                ],
                points: [
                    { label: "Signature location", detail: "Udaipur (Lake Pichola) — limited island and lakefront palace venues, secured first." },
                    { label: "Water logistics", detail: "Private boat protocols: staged loading, timed crossings, authority clearances, weather fallback." },
                    { label: "Accommodation", detail: "Palace-suite room blocks with manifests and city↔venue guest movement." },
                    { label: "Decor & mandap", detail: "Designed specifically to the palace heritage, not a generic overlay." },
                    { label: "Dining", detail: "Heritage-dining wing — royal-recipe menus, private settings, at celebration scale." },
                    { label: "Accountability", detail: "Venue, boats, fleet, decor, dining, contingency under one mission lead." },
                ],
                faqs: [
                    { q: "Where can I have a lake palace wedding in India?", a: "Primarily Udaipur, the City of Lakes, with limited island and lakefront palace venues. The weddings wing secures the property first and then handles the full production." },
                    { q: "Can guests be transferred by boat?", a: "Yes — private boat protocols for the baraat and guest movement, with staged loading and timed crossings, subject to lake levels and authority clearance, with a weather fallback built in." },
                    { q: "How far ahead must a lake palace be booked?", a: "Well ahead — these venues are limited and exclusive, especially in peak wedding season. Securing the right property for the date and guest count is the first step we take." },
                    { q: "Who manages the whole production?", a: "A single accountable mission lead owns venue, boats, fleet, decor, dining, and contingency, so the family experiences the wedding rather than the logistics." },
                ],
                links: [UDAIPUR, FLEET, DINING, BOOK],
            },
            {
                slug: "fort",
                name: "Fort & Citadel Weddings",
                answer:
                    "A fort wedding is hosted within a historic Rajput hill fort or citadel — settings around Jaipur's Amer, Jodhpur's Mehrangarh, or comparable heritage forts. MyTripMyTravel arranges venue access, courtyard or rampart staging, decor, guest logistics, and convoy as one production. Access windows and capacities vary by venue and are confirmed by the weddings wing.",
                intro: [
                    "A fort wedding trades water for sheer scale — ramparts, courtyards, and floodlit sandstone at a magnitude no built venue can replicate. The grandeur is the point, and the constraints of a centuries-old protected structure are the job.",
                    "Jaipur and Jodhpur anchor the strongest fort settings. Each heritage fort has its own access windows, permissible event zones, and capacity ceilings, so the weddings wing confirms exactly what a given fort allows before a design is built around it.",
                    "Staging is engineered to the structure: ceremonies in courtyards or on defined rampart areas, with power, sound, and lighting installed within the limits of a protected monument and a weather fallback for open-air elements. The fort reads as pure spectacle because the constraints are handled invisibly.",
                    "Guest logistics is significant — forts are elevated and often approached by a single controlled route, so arrival sequencing, convoy choreography, and movement to and from heritage accommodation are planned as carefully as the ceremony itself.",
                    "Decor amplifies the sandstone rather than competing with it, dining is curated through the heritage-dining wing, and the whole production runs under one accountable lead with formal contingency — redundant power, alternate routing, medical-aware pacing.",
                ],
                points: [
                    { label: "Signature locations", detail: "Jaipur (Amer environs) and Jodhpur (Mehrangarh setting); other heritage forts on confirmation." },
                    { label: "Access reality", detail: "Per-fort access windows, permissible zones, and capacity ceilings confirmed before design." },
                    { label: "Staging", detail: "Courtyard / rampart ceremony with monument-safe power, sound, lighting, weather fallback." },
                    { label: "Guest logistics", detail: "Arrival sequencing and convoy choreography on controlled fort approaches." },
                    { label: "Decor & dining", detail: "Sandstone-amplifying decor; heritage-dining wing catering at scale." },
                    { label: "Contingency", detail: "Redundant power, alternate routing, medical-aware pacing, single accountable lead." },
                ],
                faqs: [
                    { q: "Can I get married inside a Rajasthan fort?", a: "Select heritage forts permit private events in courtyards or defined rampart areas. Access windows, permissible zones, and capacities vary; the weddings wing confirms exactly what each venue allows." },
                    { q: "Which forts are used for weddings?", a: "Jaipur and Jodhpur offer the strongest fort-wedding settings; we match the venue to guest count and dates, with other heritage forts available on confirmation." },
                    { q: "How is a protected monument staged safely?", a: "Power, sound, and lighting are installed within the monument's limits, with weather fallback for open-air elements — handled invisibly so the fort reads as pure spectacle." },
                    { q: "Is fort access difficult for guests?", a: "Forts are elevated with controlled approaches, so arrival sequencing and convoy choreography are planned as carefully as the ceremony, with redundant routing as contingency." },
                ],
                links: [JAIPUR, JODHPUR, FLEET, BOOK],
            },
            {
                slug: "heritage-haveli",
                name: "Heritage Haveli Weddings",
                answer:
                    "A heritage haveli wedding is hosted in a restored courtyard mansion — intimate, ornate, and atmospheric, found across Rajasthan's heritage cities. MyTripMyTravel curates the property, decor framework, dining, and logistics as one production. Best suited to intimate-to-classic guest counts; specifics confirmed by the weddings wing.",
                intro: [
                    "The haveli is the intimate end of the royal spectrum — hand-painted courtyards and rooftop terraces where the wedding's power comes from detail and closeness rather than scale. It is the right choice when the brief is design and atmosphere, not magnitude.",
                    "Havelis suit guest counts up to roughly 150. Above that, the intimacy that makes them special breaks down, so the weddings wing matches the property precisely to the party rather than forcing a venue beyond its natural capacity.",
                    "Because the canvas is smaller and more ornate, decor and the mandap are designed with restraint — working with frescoed courtyards and candlelit terraces rather than overwhelming them. The result reads as curated, not staged.",
                    "Logistics are lighter than a fort or lake palace but no less precise: old-city access for the fleet, guest movement through narrow heritage lanes, and room blocks within the haveli or a tight cluster of heritage properties.",
                    "Dining is curated through the heritage-dining wing as private courtyard or rooftop settings, and the production runs under one accountable lead — the same standard as the larger venue types, scaled to an intimate celebration.",
                ],
                points: [
                    { label: "Best for", detail: "Intimate-to-classic counts (up to ~150) where design and atmosphere outweigh scale." },
                    { label: "Atmosphere", detail: "Frescoed courtyards, rooftop terraces, candlelit intimacy." },
                    { label: "Locations", detail: "Restored havelis across Jaipur, Jodhpur, Udaipur old quarters." },
                    { label: "Decor approach", detail: "Restrained, working with the heritage canvas rather than overwhelming it." },
                    { label: "Logistics", detail: "Old-city fleet access, narrow-lane guest movement, haveli or tight-cluster room blocks." },
                    { label: "Dining", detail: "Private courtyard / rooftop heritage-dining settings." },
                ],
                faqs: [
                    { q: "Are havelis good for small weddings?", a: "Yes — havelis are ideal for intimate-to-classic counts (up to ~150) where atmosphere and design matter more than scale; above that the intimacy breaks down." },
                    { q: "Where are wedding havelis located?", a: "Across Rajasthan's heritage cities — Jaipur, Jodhpur, and Udaipur old quarters. We match property to party size precisely." },
                    { q: "How is decor handled in a haveli?", a: "With restraint — designed to work with frescoed courtyards and candlelit terraces rather than overwhelm them, so it reads as curated, not staged." },
                    { q: "Is haveli access difficult for guests?", a: "Heritage lanes are narrow, so fleet access and guest movement are planned carefully, with room blocks in the haveli or a tight cluster of heritage properties." },
                ],
                links: [JAIPUR, JODHPUR, DINING, BOOK],
            },
            {
                slug: "desert-camp",
                name: "Desert Camp Weddings",
                answer:
                    "A desert camp wedding is hosted in a luxury tented camp on the Thar dunes, most distinctively near Jaisalmer or Jodhpur. MyTripMyTravel arranges the camp build, dune ceremony staging, folk performance, dining, and the full desert logistics as one production. Specifics confirmed by the weddings wing.",
                intro: [
                    "The desert camp is the most cinematic wedding setting India offers — a dune ceremony, fire-lit dinners, Manganiar folk performance, and a ceremony under exceptionally dark skies. It is also the most logistically demanding, because the venue is essentially built from nothing in a remote place.",
                    "The Thar near Jaisalmer or Jodhpur is the setting. Unlike a palace or fort, there is no standing infrastructure: power, water, climate provision, sanitation, and en-suite luxury accommodation are all engineered into the camp build, then struck afterward.",
                    "Staging is designed around the desert's two great assets — the dunes at golden hour and the night sky — with the ceremony and dining timed to both, and a contingency plan for wind and temperature swings that the open desert guarantees.",
                    "Guest logistics is a desert operation: a desert-capable convoy, water and fuel planning, medical-aware support given the remoteness, and movement between the camp and the nearest city or airport handled end to end.",
                    "Folk performance, heritage-dining catering, and decor are curated to the setting rather than imported wholesale, and the entire build-to-strike production runs under one accountable lead with formal contingency for the remote environment.",
                ],
                points: [
                    { label: "Signature location", detail: "Thar dunes near Jaisalmer / Jodhpur — built from nothing, then struck." },
                    { label: "Camp build", detail: "Power, water, climate, sanitation, en-suite luxury tents all engineered in." },
                    { label: "Staging", detail: "Dune golden-hour ceremony + dark-sky dining, timed with wind/temperature contingency." },
                    { label: "Guest logistics", detail: "Desert-capable convoy, water/fuel planning, medical-aware support for the remoteness." },
                    { label: "Experience", detail: "Manganiar folk performance and heritage dining curated to the setting." },
                    { label: "Accountability", detail: "Build-to-strike production under one lead with formal remote-environment contingency." },
                ],
                faqs: [
                    { q: "Can I have a desert wedding in Rajasthan?", a: "Yes — luxury tented camps on the Thar dunes near Jaisalmer or Jodhpur. The weddings wing handles the full build-to-strike production and remote logistics." },
                    { q: "Is a desert camp wedding comfortable?", a: "Yes — power, water, climate provision, sanitation, and en-suite luxury tents are all engineered into the camp build; the remote setting is fully serviced." },
                    { q: "What about wind and temperature?", a: "The open desert guarantees swings, so the ceremony and dining are timed to golden hour and the night sky with a built-in contingency plan for wind and temperature." },
                    { q: "How do guests reach a desert camp?", a: "By a desert-capable convoy with water and fuel planning and medical-aware support, with movement from the nearest city or airport handled end to end." },
                ],
                links: [JODHPUR, FLEET, DINING, BOOK],
            },
        ],
    },
    {
        slug: "by-guest-count",
        name: "By Guest Count",
        segment: "By Guest Count",
        blurb: "How the wedding operation scales — venue type, logistics, and command structure — to the size of the celebration.",
        items: [
            {
                slug: "intimate",
                name: "Intimate Weddings (under 50)",
                answer:
                    "An intimate wedding under 50 guests prioritises exclusivity and detail over scale. MyTripMyTravel pairs these with havelis or private palace wings, with concierge-level personalisation, a single accountable lead, and tight premium logistics. Specifics confirmed by the weddings wing.",
                intro: [
                    "Under 50 guests, a wedding is not a scaled-down large wedding — it is a different product. The brief is intimacy and craft, and the venue, pacing, and personalisation all change to serve closeness rather than spectacle.",
                    "The natural settings are heritage havelis or a private wing of a palace, where the whole party occupies one atmospheric space rather than being distributed across a large estate. The weddings wing selects the property to the exact count.",
                    "Logistics are light but premium: a compact fleet, no large-convoy choreography, and a single accountable lead who can personalise at the level of the individual guest — dietary, schedule, surprise moments.",
                    "Because the group is small, the experience layer can be elevated — private dining, exclusive access, and bespoke detail that would be impossible to deliver uniformly at scale become the default.",
                    "Contingency is handled through depth of attention rather than redundancy of scale: pre-cleared venues, a backup vehicle, and a 24/7 desk, all invisible to a family focused on a close celebration.",
                ],
                points: [
                    { label: "Venues", detail: "Heritage havelis or private palace wings — one atmospheric space, selected to exact count." },
                    { label: "Logistics", detail: "Compact premium fleet; no large-convoy choreography." },
                    { label: "Personalisation", detail: "Individual-guest level — dietary, schedule, surprise moments." },
                    { label: "Experience", detail: "Elevated by default — private dining, exclusive access, bespoke detail." },
                    { label: "Best for", detail: "Close-family weddings, elopement-style celebrations, milestone vow renewals." },
                    { label: "Contingency", detail: "Pre-cleared venues, backup vehicle, 24/7 desk — invisible to the family." },
                ],
                faqs: [
                    { q: "Do you handle small destination weddings?", a: "Yes — intimate weddings under 50 are a speciality, matched to havelis or private palace wings with concierge-level, individual-guest personalisation." },
                    { q: "Is a small wedding just a scaled-down big one?", a: "No — it is a different product optimised for intimacy and craft; venue, pacing, and personalisation all change to serve closeness rather than spectacle." },
                    { q: "Can the experience be more exclusive at small scale?", a: "Yes — private dining, exclusive access, and bespoke per-guest detail that are impossible to deliver uniformly at scale become the default." },
                    { q: "How is contingency handled for a small wedding?", a: "Through depth of attention — pre-cleared venues, a backup vehicle, and a 24/7 desk — rather than the redundant scale a large wedding needs." },
                ],
                links: [UDAIPUR, DINING, BOOK],
            },
            {
                slug: "classic",
                name: "Classic Weddings (50–150)",
                answer:
                    "A classic wedding of 50–150 guests is the most common royal-wedding scale. MyTripMyTravel matches it to palace hotels or heritage estates with full multi-event choreography across the wedding days, room-block management, and convoy. Specifics confirmed by the weddings wing.",
                intro: [
                    "50–150 guests is the classic band — large enough for the full sequence of mehndi, sangeet, ceremony, and reception, small enough that a palace hotel or heritage estate can host it without buyout-scale complexity.",
                    "The defining work is multi-event choreography. Across two to four days, each function has its own setup, decor, timing, and guest flow, and the production sequences them so transitions are seamless and the venue resets invisibly between events.",
                    "Accommodation is a coordinated room block at a single property or tight cluster, with arrival manifests, key pre-allocation, and luggage operations so a 120-person check-in is not a bottleneck.",
                    "A fleet convoy handles guest movement between accommodation and event venues, and decor and dining are curated per function through the heritage-dining wing — different registers for the sangeet and the reception, not one repeated setup.",
                    "The whole multi-day production runs under a single accountable lead with a documented run-of-show and formal contingency, so the family moves through their own wedding rather than managing it.",
                ],
                points: [
                    { label: "Venues", detail: "Palace hotels or heritage estates — full sequence without buyout-scale complexity." },
                    { label: "Multi-event", detail: "Mehndi/sangeet/ceremony/reception choreographed with invisible venue resets." },
                    { label: "Accommodation", detail: "Coordinated room block, manifests, key pre-allocation, luggage operations." },
                    { label: "Logistics", detail: "Fleet convoy for accommodation↔venue guest movement." },
                    { label: "Decor & dining", detail: "Curated per function via heritage-dining wing — distinct registers, not one setup." },
                    { label: "Accountability", detail: "Single lead, documented run-of-show, formal contingency." },
                ],
                faqs: [
                    { q: "What venue suits 100 wedding guests?", a: "A palace hotel or heritage estate — the classic 50–150 band — which hosts the full mehndi-to-reception sequence without buyout-scale complexity." },
                    { q: "How are multiple wedding functions handled?", a: "Through multi-event choreography: each function has its own setup, decor, and timing, with the venue resetting invisibly between events across the wedding days." },
                    { q: "How is a 120-person check-in managed?", a: "Coordinated room blocks with arrival manifests, pre-allocated keys, and luggage operations so it is not a lobby bottleneck." },
                    { q: "Is dining the same across functions?", a: "No — decor and dining are curated per function (the sangeet and reception are distinct registers), not one repeated setup, through the heritage-dining wing." },
                ],
                links: [JAIPUR, FLEET, DINING, BOOK],
            },
            {
                slug: "grand",
                name: "Grand Weddings (150–400)",
                answer:
                    "A grand wedding of 150–400 guests requires large palace or fort venues and serious logistics — multi-property room blocks, convoy fleets, and dedicated on-ground coordination. MyTripMyTravel operates these as full managed missions. Specifics confirmed by the weddings wing.",
                intro: [
                    "150–400 guests moves a wedding into fort and large-palace territory, where the celebration's success is decided by logistics as much as design. At this scale, a wedding is an operation that happens to be beautiful.",
                    "Accommodation typically spans multiple properties, so the production manages a distributed room-block operation with manifests, staggered check-in waves, inter-property guest movement, and a guest desk so the family's people are not running reception.",
                    "Guest movement is a convoy operation: timed waves between accommodation and event venues, vehicle marshals, and a documented movement plan so 300 people flow through each function without waiting.",
                    "Multi-event choreography scales accordingly — each function staged at venue capacity, dining delivered at scale through the heritage-dining wing with private or buyout settings, and decor production sized to large heritage spaces.",
                    "Formal contingency is mandatory: redundant vehicles, alternate routing, medical-aware pacing, weather fallback, and a command structure with clear escalation, all under one accountable mission owner.",
                ],
                points: [
                    { label: "Venues", detail: "Large palaces, forts, estate grounds — capacity-led selection." },
                    { label: "Accommodation", detail: "Multi-property block operation: manifests, staggered waves, inter-property movement, guest desk." },
                    { label: "Guest movement", detail: "Timed convoy waves, vehicle marshals, documented movement plan." },
                    { label: "Multi-event", detail: "Functions staged at venue capacity; buyout/private dining at scale." },
                    { label: "Best for", detail: "Large family weddings, multi-community celebrations." },
                    { label: "Contingency", detail: "Redundant vehicles, alternate routing, medical-aware pacing, weather fallback, formal escalation." },
                ],
                faqs: [
                    { q: "Can you handle a 300-guest wedding in India?", a: "Yes — grand weddings (150–400) use large palace or fort venues with multi-property block operations and convoy logistics, run as a full managed mission." },
                    { q: "How is accommodation handled at this scale?", a: "As a distributed multi-property room-block operation with manifests, staggered check-in waves, inter-property movement, and a guest desk." },
                    { q: "How do 300 guests move without waiting?", a: "Through timed convoy waves, vehicle marshals, and a documented movement plan that respects each function's capacity and timing." },
                    { q: "What contingency is in place?", a: "Redundant vehicles, alternate routing, medical-aware pacing, weather fallback, and a command structure with clear escalation under one accountable owner." },
                ],
                links: [JODHPUR, FLEET, DINING, BOOK],
            },
            {
                slug: "royal",
                name: "Royal Weddings (400+)",
                answer:
                    "A royal wedding of 400+ guests is a full-scale production — exclusive palace or fort buyouts, large convoy fleets, encrypted logistics sync, and dedicated event command. MyTripMyTravel runs these as top-tier missions. Specifics confirmed by the weddings wing.",
                intro: [
                    "400+ guests is production scale. The wedding is, operationally, a multi-day event for a small town, and every layer — venue, accommodation, movement, dining, security — runs as a coordinated command operation.",
                    "Venues at this size mean buyouts: an exclusive palace or fort taken in full so the celebration controls the entire environment, with the weddings wing securing the property long ahead given the scarcity at this scale.",
                    "Accommodation is a large distributed operation across multiple premium properties, with a dedicated guest-services desk, manifests, and movement coordination so 400+ people are housed and moved without friction.",
                    "Movement runs on large convoy fleets with encrypted logistics sync for real-time coordination, timed waves, and event command — the same protocol MyTripMyTravel uses for its largest missions, applied to a celebration.",
                    "Dining, decor, performance, and contingency are all sized to production scale and run under a dedicated command structure with clear escalation, so the families experience a once-in-a-generation event while the operation stays invisible.",
                ],
                points: [
                    { label: "Venues", detail: "Exclusive palace / fort buyouts, secured long ahead given scarcity at scale." },
                    { label: "Accommodation", detail: "Large distributed operation across multiple premium properties + dedicated guest desk." },
                    { label: "Movement", detail: "Large convoy fleets, encrypted logistics sync, timed waves, event command." },
                    { label: "Production", detail: "Dining, decor, performance sized to production scale." },
                    { label: "Best for", detail: "Marquee family weddings, multi-day multi-community productions." },
                    { label: "Command", detail: "Dedicated command structure with clear escalation; operation kept invisible." },
                ],
                faqs: [
                    { q: "Do you handle 500+ guest royal weddings?", a: "Yes — royal-scale weddings (400+) with exclusive palace or fort buyouts, large convoys, encrypted logistics sync, and dedicated event command are our top tier." },
                    { q: "Why a venue buyout at this scale?", a: "400+ guests means controlling the entire environment; an exclusive palace or fort buyout is secured long ahead given the scarcity of venues at this scale." },
                    { q: "How are 400+ guests housed and moved?", a: "Through a large distributed accommodation operation across multiple premium properties with a guest desk, plus large convoy fleets with encrypted sync and timed waves." },
                    { q: "Is the operation visible to guests?", a: "No — it runs under a dedicated command structure with clear escalation, kept invisible so the families experience a once-in-a-generation event." },
                ],
                links: [UDAIPUR, JODHPUR, FLEET, BOOK],
            },
        ],
    },
    {
        slug: "services",
        name: "Wedding Services",
        segment: "Services",
        blurb: "The service lines that compose a MyTripMyTravel wedding mission — each one accountable, integrated, not outsourced blind.",
        items: [
            {
                slug: "planning-and-design",
                name: "Planning & Design",
                answer:
                    "End-to-end wedding planning and design — concept, multi-day timeline, vendor curation, and on-ground command — architected by the MyTripMyTravel weddings wing as a single accountable mission rather than a set of fragmented vendors.",
                intro: [
                    "Planning is the spine every other service hangs off. A destination wedding fails not on any single element but on the seams between them, so the planning layer exists to remove the seams.",
                    "It begins with concept and a multi-day timeline — the run-of-show across mehndi, sangeet, ceremony, and reception — from which venue, decor, fleet, and dining requirements are derived rather than assembled piecemeal.",
                    "Vendor curation is led, not delegated: the weddings wing selects and contracts the specialist layers and holds accountability for them, so the family has one point of ownership instead of a dozen contracts to chase.",
                    "On-ground command is the delivery half — a mission lead and structure who run the wedding days to the documented run-of-show, absorbing the inevitable changes without the family feeling them.",
                    "The model is deliberately single-accountable: one owner of concept-to-delivery, integrated with the family's own people and any external creative, so the wedding is experienced rather than managed.",
                ],
                points: [
                    { label: "Scope", detail: "Concept, multi-day timeline/run-of-show, vendor curation, on-ground command." },
                    { label: "Derivation", detail: "Venue/decor/fleet/dining derived from the timeline, not assembled piecemeal." },
                    { label: "Vendor model", detail: "Specialist layers selected, contracted, and held accountable by the weddings wing." },
                    { label: "Delivery", detail: "Mission lead runs wedding days to the run-of-show, absorbing change invisibly." },
                    { label: "Accountability", detail: "Single owner concept-to-delivery, integrated with family and external creative." },
                ],
                faqs: [
                    { q: "Do you offer full wedding planning?", a: "Yes — end-to-end planning, design, vendor curation, and on-ground command as one accountable mission, not fragmented vendors." },
                    { q: "Why single-accountable rather than multiple vendors?", a: "Destination weddings fail on the seams between elements; one owner of concept-to-delivery removes the seams and the family's coordination burden." },
                    { q: "Do you work with our own planner or creative?", a: "Yes — the model integrates with the family's people and any external creative; the weddings wing owns delivery accountability." },
                    { q: "How are changes handled on the day?", a: "An on-ground mission lead runs the documented run-of-show and absorbs the inevitable changes so the family does not feel them." },
                ],
                links: [DINING, CORP, BOOK],
            },
            {
                slug: "decor-and-mandap",
                name: "Decor & Mandap",
                answer:
                    "Bespoke decor and mandap design tuned to the venue's heritage — florals, lighting, and staging that amplify a palace, fort, haveli, or desert setting rather than overlay a generic theme.",
                intro: [
                    "Decor is venue-led at MyTripMyTravel, which is the opposite of the common approach of importing a theme and applying it anywhere. A heritage venue is already a design statement; the work is to amplify it, not compete with it.",
                    "Each venue archetype demands a different language — the restraint a frescoed haveli courtyard needs is the opposite of the scale a fort rampart can carry, and a desert dune or a lake palace are different again.",
                    "The mandap is designed as the focal structure within that logic, with florals, lighting, and staging built to the specific space, sightlines, and the time of day the ceremony is set for.",
                    "Production is sized to the venue's real constraints — power, rigging limits in protected monuments, weather fallback for open-air elements — so the design is deliverable, not just a render.",
                    "Decor is integrated with the planning and dining layers under the single accountable lead, so the visual language is coherent across every function rather than a series of disconnected setups.",
                ],
                points: [
                    { label: "Approach", detail: "Venue-led and heritage-amplifying, not a generic imported theme." },
                    { label: "Per-archetype", detail: "Distinct design language for haveli vs fort vs desert vs lake palace." },
                    { label: "Mandap", detail: "Focal structure built to the specific space, sightlines, and ceremony time." },
                    { label: "Deliverability", detail: "Sized to power, rigging, and weather constraints — not just a render." },
                    { label: "Integration", detail: "Coherent across functions, integrated with planning and dining under one lead." },
                ],
                faqs: [
                    { q: "Is decor customised to the venue?", a: "Yes — decor and mandap are designed specifically to amplify the heritage venue, not a generic imported theme applied anywhere." },
                    { q: "Does decor differ by venue type?", a: "Substantially — a frescoed haveli needs restraint, a fort rampart carries scale, and desert or lake settings are different again; each gets its own design language." },
                    { q: "Is the design actually deliverable?", a: "Yes — production is sized to real constraints (power, rigging limits in protected monuments, weather fallback), so it is deliverable, not just a render." },
                    { q: "Is the look coherent across functions?", a: "Yes — decor is integrated with planning and dining under one accountable lead, so the visual language is consistent, not disconnected setups." },
                ],
                links: [DINING, BOOK],
            },
            {
                slug: "guest-logistics",
                name: "Guest Logistics & Convoy",
                answer:
                    "Full guest logistics — airport handovers, room-block management, and chauffeured convoy movement between events — run on the GPS-tracked Elite Fleet protocol that underpins every MyTripMyTravel mission.",
                intro: [
                    "Guest logistics is where weddings are quietly won or lost. The ceremony is remembered; the two-hour wait for a bus is remembered longer. This layer exists so the guests only ever experience the celebration.",
                    "It starts at arrival: airport handovers with meet-and-greet, flight tracking, and onward transfer, so guests are absorbed into the wedding from the moment they land rather than left to find their own way.",
                    "Accommodation is a managed room-block operation — manifests, allocation, luggage, and (at scale) staggered check-in waves and a guest desk — so the family's relatives are not running a front office.",
                    "Inter-event movement is a convoy operation on the GPS-tracked Elite Fleet protocol: timed waves between accommodation and venues, marshals at scale, and encrypted logistics sync for large counts.",
                    "It is run by a dedicated coordinator within the single-accountable mission, with formal contingency (redundant vehicles, alternate routing) sized to the guest count.",
                ],
                points: [
                    { label: "Arrival", detail: "Airport handovers — meet-and-greet, flight tracking, onward transfer." },
                    { label: "Accommodation", detail: "Room-block operation: manifests, allocation, luggage, staggered waves + guest desk at scale." },
                    { label: "Movement", detail: "Convoy on Elite Fleet protocol — timed waves, marshals, encrypted sync at scale." },
                    { label: "Ownership", detail: "Dedicated coordinator within the single-accountable mission." },
                    { label: "Contingency", detail: "Redundant vehicles and alternate routing sized to guest count." },
                ],
                faqs: [
                    { q: "Do you manage wedding guest transport?", a: "Yes — airport handovers, room-block coordination, and chauffeured convoy movement between events on the GPS-tracked Elite Fleet protocol." },
                    { q: "Why does guest logistics matter so much?", a: "Guests remember a long transport wait longer than the ceremony; this layer exists so they only ever experience the celebration." },
                    { q: "How is it handled at large scale?", a: "Through staggered check-in waves, a guest desk, vehicle marshals, and encrypted logistics sync for real-time convoy coordination." },
                    { q: "Who owns guest logistics on the day?", a: "A dedicated coordinator within the single-accountable mission, with redundant vehicles and alternate routing as contingency." },
                ],
                links: [FLEET, BOOK],
            },
            {
                slug: "catering-and-dining",
                name: "Catering & Heritage Dining",
                answer:
                    "Wedding catering curated through the MyTripMyTravel heritage-dining wing — royal-recipe menus, multi-cuisine scaling, and private tasting, matched to the venue, the function, and the guest count.",
                intro: [
                    "Dining at a destination wedding is curated, not outsourced blind. Across multiple functions and hundreds of guests, food is one of the two things everyone judges — so it is treated as a designed element, not a contracted commodity.",
                    "Menus are built per function: the sangeet, the ceremony, and the reception each have a different register, and royal-recipe and regional menus are matched to the venue's heritage rather than a generic banquet template.",
                    "Scaling is the operational challenge — delivering a tasting-menu standard to 400 guests requires kitchen planning, not just a larger order — and this is engineered with the venue's real kitchen and power constraints in mind.",
                    "Private tasting ahead of the event lets the family lock the menus with confidence, and dietary requirements (vegetarian, allergy, religious, medical) are planned across the whole guest manifest in advance.",
                    "Catering is integrated with decor and the run-of-show under the single accountable lead, so service timing supports the event flow rather than interrupting it.",
                ],
                points: [
                    { label: "Source", detail: "Heritage-dining wing — royal-recipe and regional menus matched to venue heritage." },
                    { label: "Per-function", detail: "Distinct registers for sangeet / ceremony / reception, not one banquet template." },
                    { label: "Scaling", detail: "Tasting-menu standard at 400+ engineered against real kitchen/power constraints." },
                    { label: "Process", detail: "Private pre-event tasting; dietary planned across the whole manifest in advance." },
                    { label: "Integration", detail: "Service timing integrated with decor and run-of-show under one lead." },
                ],
                faqs: [
                    { q: "Do you handle wedding catering?", a: "Yes — through the heritage-dining wing, with royal-recipe and regional menus, multi-cuisine scaling, and private tasting, matched to venue, function, and count." },
                    { q: "Is the menu the same across functions?", a: "No — the sangeet, ceremony, and reception each get a distinct register matched to the venue's heritage, not one repeated banquet template." },
                    { q: "Can you maintain quality at 400+ guests?", a: "Yes — delivering a tasting-menu standard at scale is engineered through kitchen planning against the venue's real kitchen and power constraints." },
                    { q: "How are dietary needs handled?", a: "Planned across the entire guest manifest in advance (vegetarian, allergy, religious, medical), confirmed at a private pre-event tasting." },
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
