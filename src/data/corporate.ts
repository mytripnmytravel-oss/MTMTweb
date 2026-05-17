// Corporate cluster (grid F2–F3). Categorical sub-layers beneath the
// existing bespoke /corporate page (left untouched): by team size and
// by event type. No fabricated clients/case studies — categorical only.
// Content depth tuned to clear the High DoD floor.

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
const WED = { label: "Celebrations & weddings", href: "/weddings" };
const BOOK = { label: "Brief the corporate desk", href: "/booking" };

export const corporateCategories: CorporateCategory[] = [
    {
        slug: "by-team-size",
        name: "By Team Size",
        segment: "By Team Size",
        blurb: "How a MyTripMyTravel corporate mission scales — fleet, accommodation, command structure, and contingency — to the size of the team.",
        items: [
            {
                slug: "small-team",
                name: "Small Team (under 15)",
                answer:
                    "A small-team corporate trip under 15 people is run by MyTripMyTravel as a compact, fully-private mission — one or two premium vehicles, a single accountable mission lead, bespoke routing, and concierge-level personalisation. It suits leadership pods, founder retreats, and key-client trips where agility and depth matter more than scale.",
                intro: [
                    "Under 15 travellers, the entire logic of the trip changes. There is no convoy to choreograph and no room-block to manage at volume, so the mission optimises for agility and depth instead of coordination. The itinerary can flex day to day without cascading through dozens of dependencies.",
                    "MyTripMyTravel staffs a small team with a single accountable mission lead who travels with the group or is reachable in real time, plus one or two vetted performance-chauffeurs. Decisions — a later start, an added stop, a change of restaurant — are made and executed within the hour rather than re-planned.",
                    "This tier is the natural fit for founder offsites, board pods, investor or key-client hosting, and senior leadership retreats. The emphasis is on signal moments and uninterrupted working time: a private Taj sunrise, a closed-door heritage-haveli dinner for a strategy session, or a quiet lake-palace afternoon for an offsite that needs to feel rare.",
                    "Because the group is small, the vehicle tier can be elevated without the cost multiplying across a fleet — elite sedans or premium SUVs become viable as standard. Dining is curated through the heritage-dining wing as private tables, and accommodation is placed in palace wings or havelis rather than block-booked.",
                    "Contingency for a small team is handled by redundancy of attention rather than scale: a backup vehicle on call, the mission lead pre-clearing every venue, and a 24/7 human desk. The result is a trip that feels personal and unhurried while remaining tightly controlled underneath.",
                ],
                points: [
                    { label: "Fleet", detail: "One or two premium SUVs or elite executive sedans — tier elevated because cost does not multiply across a convoy." },
                    { label: "Command", detail: "A single accountable mission lead, travelling with or on-call to the group; hour-level decision turnaround." },
                    { label: "Accommodation", detail: "Palace wings, suites, or heritage havelis — placed, not block-booked." },
                    { label: "Dining", detail: "Private heritage-dining tables; closed-door settings for working meals." },
                    { label: "Best for", detail: "Founder retreats, board pods, investor and key-client hosting, senior leadership offsites." },
                    { label: "Contingency", detail: "Backup vehicle on call, pre-cleared venues, 24/7 human desk." },
                ],
                faqs: [
                    { q: "Do you handle small corporate groups?", a: "Yes — under-15 teams are a speciality, run as compact, fully-private missions with one or two premium vehicles, an accountable mission lead, and concierge-level attention rather than scaled convoy logistics." },
                    { q: "Can a small team get a higher vehicle tier?", a: "Yes — with a small group the elite tier (BMW, Mercedes, Vellfire) is viable as standard because the cost does not multiply across a fleet, unlike larger missions." },
                    { q: "Is the itinerary flexible for a small group?", a: "Highly — with no convoy to choreograph, changes (a later start, an added stop, a venue swap) are decided and executed within the hour by the mission lead." },
                    { q: "What kind of corporate trips suit this tier?", a: "Founder and leadership retreats, board pods, investor or key-client hosting — trips where depth, discretion, and uninterrupted working time outweigh scale." },
                ],
                links: [GT, FLEET, DINING, BOOK],
            },
            {
                slug: "mid-team",
                name: "Mid Team (15–50)",
                answer:
                    "A mid-size corporate trip of 15–50 is run as a small GPS-tracked convoy with coordinated room blocks and choreographed event flow across the wedding-style sequence of arrivals, sessions, offsite activity, and dining. MyTripMyTravel manages the ground layer so the organiser owns the agenda, not the logistics.",
                intro: [
                    "Between 15 and 50 travellers, a trip crosses from 'managed party' into 'managed operation'. Multiple vehicles must move in sequence, accommodation must be blocked and allocated, and the day's events must flow without the group waiting on transport or each other.",
                    "MyTripMyTravel runs this tier as a small convoy on the same GPS-tracked Elite Fleet protocol used across the company, with a mission lead coordinating movement and a vehicle-level structure so sub-groups can split and recombine (sessions for some, sightseeing for others) without losing control.",
                    "The defining work at this size is event-flow choreography: the gap between a morning working session and an afternoon offsite is where mid-size trips fail, and it is engineered here — staged departures, pre-positioned vehicles, and dining timed so 40 people are not waiting on a kitchen.",
                    "Accommodation moves to coordinated room blocks at a single property or a tight cluster, with arrival manifests, key pre-allocation, and luggage handled so a 40-person check-in is not 90 minutes of lobby. Dining is curated through the heritage-dining wing at the scale the group needs, with private or semi-private settings.",
                    "Contingency at this tier is procedural: a documented movement plan, a spare vehicle in the convoy, a named on-ground coordinator, and the 24/7 desk. The organiser receives a single point of accountability rather than a set of vendors to chase.",
                ],
                points: [
                    { label: "Fleet", detail: "Small GPS-tracked convoy; vehicle-level structure so sub-groups split and recombine cleanly." },
                    { label: "Logistics", detail: "Coordinated room blocks, arrival manifests, key pre-allocation, luggage handling." },
                    { label: "Event flow", detail: "Choreographed session→offsite→dining transitions with staged departures and pre-positioned vehicles." },
                    { label: "Dining", detail: "Heritage-dining wing at group scale; private or semi-private settings." },
                    { label: "Best for", detail: "Department offsites, incentive pods, sales-team trips, mid-size leadership programmes." },
                    { label: "Contingency", detail: "Documented movement plan, spare convoy vehicle, named on-ground coordinator, 24/7 desk." },
                ],
                faqs: [
                    { q: "What about a 30-person company offsite?", a: "A 15–50 mission uses a small GPS-tracked convoy with room-block coordination and choreographed session-to-offsite-to-dining flow, run with a named on-ground coordinator and single-point accountability." },
                    { q: "Can sub-groups do different things?", a: "Yes — the convoy is structured at vehicle level so part of the group can be in sessions while others sightsee, then recombine, without losing logistical control." },
                    { q: "How is check-in handled for a mid-size group?", a: "Through coordinated room blocks with arrival manifests, pre-allocated keys, and managed luggage, so a 40-person arrival is not an hour-plus in the lobby." },
                    { q: "Who is accountable on the ground?", a: "A named mission lead / on-ground coordinator with a documented movement plan, a spare convoy vehicle, and the 24/7 human desk behind them." },
                ],
                links: [GT, FLEET, DINING, BOOK],
            },
            {
                slug: "large-team",
                name: "Large Team (50–200)",
                answer:
                    "A large corporate mission of 50–200 is a full managed operation: multi-property accommodation, a large GPS-tracked convoy, dedicated on-ground command, staged movement, and documented contingency. MyTripMyTravel runs it as a logistics-led mission where movement, timing, and fallback are the deliverable.",
                intro: [
                    "Above 50 travellers, logistics is the product. The experience matters, but at this scale a trip succeeds or fails on whether 150 people move on time, eat on time, and never wait — and that is an operations problem, not a hospitality one.",
                    "MyTripMyTravel runs large missions with a large convoy under dedicated on-ground command: a mission lead, vehicle marshals, and a documented movement plan with timed waves so the group flows through monuments, venues, and meals without bottlenecking. Encrypted logistics sync is available for real-time coordination across the convoy.",
                    "Accommodation typically spans multiple properties or a large single venue with block management — manifests, staggered check-in waves, luggage operations, and a guest-desk presence so the company's own people are not running reception.",
                    "Sightseeing and offsite activity are sequenced in waves rather than moved as one impossible block: monuments have entry windows, restaurants have capacity, and the plan respects both. Heritage dining is delivered at scale with private or buyout settings where the group size justifies it.",
                    "Contingency is formal at this tier: redundant vehicles, alternate routing, medical-aware pacing, weather fallbacks, and a command structure with clear escalation. The company receives an operation, not a booking — and a single accountable owner of it.",
                ],
                points: [
                    { label: "Fleet", detail: "Large GPS-tracked convoy with vehicle marshals and timed movement waves." },
                    { label: "Command", detail: "Dedicated on-ground command + documented movement plan; encrypted logistics sync available." },
                    { label: "Accommodation", detail: "Multi-property or large-venue block management — manifests, staggered check-in waves, luggage ops, guest desk." },
                    { label: "Event flow", detail: "Wave-sequenced sightseeing and dining that respects monument entry windows and venue capacity." },
                    { label: "Best for", detail: "Company-wide offsites, large incentive groups, conference excursion programmes." },
                    { label: "Contingency", detail: "Redundant vehicles, alternate routing, medical-aware pacing, weather fallbacks, formal escalation." },
                ],
                faqs: [
                    { q: "Can you run a 150-person corporate trip?", a: "Yes — large missions (50–200) are full managed operations with a large convoy, dedicated on-ground command, multi-property block management, and wave-sequenced movement." },
                    { q: "How do you move 150 people without bottlenecks?", a: "Through a documented movement plan with timed waves, vehicle marshals, and respect for monument entry windows and venue capacity — the group never moves as one impossible block." },
                    { q: "What contingency exists at this scale?", a: "Redundant vehicles, alternate routing, medical-aware pacing, weather fallbacks, and a formal command structure with clear escalation." },
                    { q: "Is there a single point of accountability?", a: "Yes — the company receives one accountable mission owner over the whole operation, not a set of vendors to coordinate." },
                ],
                links: [FLEET, DEST, DINING, BOOK],
            },
            {
                slug: "leadership-board",
                name: "Leadership & Board",
                answer:
                    "A leadership or board mission is run by MyTripMyTravel at top-tier discretion and security rather than scale — elite vehicles, private and closed-door dining, controlled access, encrypted logistics sync, and tightly held itineraries. It suits board offsites, executive retreats, and confidential strategy sessions.",
                intro: [
                    "Board and C-suite travel is defined by what must not happen: no exposure, no friction, no uncertainty. Size is irrelevant; discretion, security, and seamlessness are the entire brief.",
                    "MyTripMyTravel runs this tier on the elite fleet with vetted chauffeurs cleared for executive work, controlled and pre-arranged venue access, and encrypted logistics coordination so movements are not broadcast. Itineraries are held tightly and shared on a need-to-know basis.",
                    "Working environments are engineered for confidentiality: closed-door heritage-haveli or palace-wing settings for strategy sessions, private dining with no shared space, and quiet, unhurried pacing so the agenda — not logistics — owns the day.",
                    "Personalisation is high-touch and individual: dietary, schedule, and security preferences captured per principal, with a mission lead who manages the experience invisibly. The objective is that the leadership group thinks about the decisions in front of them and nothing else.",
                    "Contingency is discreet but absolute: redundant vehicles held off-stage, pre-cleared alternates, medical-aware support, and a 24/7 desk with direct escalation — all delivered without the principals ever seeing the machinery.",
                ],
                points: [
                    { label: "Fleet", detail: "Elite tier (BMW / Mercedes S / Vellfire) with executive-cleared vetted chauffeurs." },
                    { label: "Protocol", detail: "Controlled venue access, encrypted logistics sync, need-to-know itinerary handling." },
                    { label: "Environment", detail: "Closed-door haveli / palace-wing strategy settings; private dining, no shared space." },
                    { label: "Personalisation", detail: "Per-principal dietary, schedule, and security preferences; invisible mission management." },
                    { label: "Best for", detail: "Board offsites, executive retreats, confidential strategy and M&A sessions." },
                    { label: "Contingency", detail: "Off-stage redundant vehicles, pre-cleared alternates, medical-aware support, direct 24/7 escalation." },
                ],
                faqs: [
                    { q: "Do you handle confidential executive trips?", a: "Yes — leadership and board missions run on the elite fleet with controlled access, encrypted logistics sync, need-to-know itineraries, and closed-door working environments." },
                    { q: "How is confidentiality protected?", a: "Tightly-held itineraries, encrypted coordination, private no-shared-space dining and meeting settings, and chauffeurs cleared for executive work." },
                    { q: "Is this tier about group size?", a: "No — it is defined by discretion, security, and seamlessness, not scale; a three-person board trip and a twelve-person leadership offsite both run on this protocol." },
                    { q: "What does contingency look like for a board trip?", a: "Discreet but absolute: off-stage redundant vehicles, pre-cleared alternates, medical-aware support, and direct 24/7 escalation the principals never see." },
                ],
                links: [FLEET, DINING, WED, BOOK],
            },
        ],
    },
    {
        slug: "events",
        name: "Event Types",
        segment: "Events",
        blurb: "The corporate event formats MyTripMyTravel architects — and how the ground operation differs for each.",
        items: [
            {
                slug: "offsite",
                name: "Corporate Offsite",
                answer:
                    "A corporate offsite combines working sessions with a curated India experience — a Golden Triangle or Rajasthan circuit as the backdrop — with venue, movement, and dining handled by MyTripMyTravel so the team focuses on the agenda, not the logistics.",
                intro: [
                    "An offsite is work plus place. Its purpose is to remove a team from the office so the thinking changes — which only works if the logistics are invisible. The moment the group is waiting on a bus or hunting for lunch, the offsite has failed at its one job.",
                    "MyTripMyTravel frames the working agenda inside a curated circuit: sessions in a closed-door heritage venue, the Golden Triangle or a Rajasthan loop as the experiential spine, and every transition between work and place pre-engineered.",
                    "The work environment itself is curated — a haveli courtyard, a palace conference wing, or a lake-facing setting — chosen for the kind of thinking the offsite needs, with connectivity, AV, and privacy confirmed in advance rather than assumed.",
                    "Around the sessions, the experience is sequenced for impact and recovery: a Taj sunrise or fort visit timed so it energises rather than exhausts, heritage dining that doubles as informal team time, and deliberate downtime so an offsite does not become a forced march.",
                    "The deliverable is a single accountable operation: venue, convoy, dining, AV, and contingency under one mission lead, so the organiser runs the agenda and nothing else.",
                ],
                points: [
                    { label: "Format", detail: "Closed-door working sessions framed by a curated Golden Triangle or Rajasthan circuit." },
                    { label: "Work environment", detail: "Haveli / palace conference settings with confirmed connectivity, AV, and privacy." },
                    { label: "Experience", detail: "Energising sightseeing timed against the agenda; heritage dining as informal team time." },
                    { label: "Scope", detail: "Venue, convoy, dining, AV, contingency under one accountable mission lead." },
                    { label: "Best for", detail: "Team offsites, planning retreats, culture and strategy programmes." },
                ],
                faqs: [
                    { q: "Can you organise a company offsite in India?", a: "Yes — working sessions framed by a curated Golden Triangle or Rajasthan circuit, with venue, AV, movement, dining, and contingency under one accountable mission lead." },
                    { q: "Do offsite venues have proper AV and connectivity?", a: "Yes — the working environment (haveli courtyard, palace conference wing, lake-facing setting) is chosen and pre-confirmed for connectivity, AV, and privacy, not assumed." },
                    { q: "How do you stop an offsite becoming exhausting?", a: "Sightseeing is timed to energise rather than drain, with deliberate downtime built in, so the trip supports the agenda instead of competing with it." },
                    { q: "Who owns the logistics during an offsite?", a: "A single mission lead owns venue, convoy, dining, AV, and contingency, so the organiser focuses purely on the agenda." },
                ],
                links: [GT, FLEET, DINING, BOOK],
            },
            {
                slug: "incentive-trip",
                name: "Incentive Trip",
                answer:
                    "An incentive trip rewards performers with a high-impact, fully-hosted India experience — elite vehicles, signature monuments, and heritage dining — engineered by MyTripMyTravel to feel exclusive and effortless at any group size.",
                intro: [
                    "An incentive trip has one job: to feel like a reward. Every logistical seam the winners see erodes the very thing the company is paying for. The bar is not 'a good trip' — it is 'the trip they talk about for years'.",
                    "MyTripMyTravel weights an incentive programme toward signature moments — a private Taj sunrise, a fort or lake-palace dinner, an elite-fleet arrival — and sequences the itinerary so the high points land and the transitions disappear.",
                    "Exclusivity is engineered regardless of group size: private or buyout dining, escorted skip-the-queue monument access, and an elite vehicle tier so the experience feels individual even when the group is large.",
                    "The hosting layer is total — meet-and-greet, luggage never touched by the guest, a mission lead anticipating needs, and surprise-and-delight moments seeded through the itinerary so the reward keeps revealing itself.",
                    "Underneath the effortlessness sits the same rigorous operation as every MyTripMyTravel mission: GPS-tracked convoy, contingency, and a single accountable owner — invisible to the winners, absolute for the company.",
                ],
                points: [
                    { label: "Emphasis", detail: "Signature, high-impact moments — private Taj sunrise, palace/fort dining, elite-fleet arrivals." },
                    { label: "Exclusivity", detail: "Private/buyout dining, escorted skip-the-queue access, elite vehicle tier at any group size." },
                    { label: "Hosting", detail: "Total: meet-and-greet, luggage never guest-handled, anticipatory mission lead, seeded surprise-and-delight." },
                    { label: "Operation", detail: "Rigorous GPS-tracked convoy and contingency underneath — invisible to winners." },
                    { label: "Best for", detail: "Sales incentives, top-performer rewards, channel-partner programmes." },
                ],
                faqs: [
                    { q: "Do you run incentive travel programmes?", a: "Yes — fully-hosted, high-impact India incentive trips weighted toward signature experiences and the elite fleet, engineered to feel exclusive and effortless." },
                    { q: "How do you make a large incentive group still feel exclusive?", a: "Through private or buyout dining, escorted skip-the-queue access, and an elite vehicle tier, so the experience feels individual even at scale." },
                    { q: "What 'wow' moments do you build in?", a: "Private Taj sunrise, fort or lake-palace dinners, elite-fleet arrivals, and seeded surprise-and-delight moments through the itinerary." },
                    { q: "Is the logistics rigour the same as other trips?", a: "Yes — the same GPS-tracked convoy, contingency, and single accountable owner sit underneath; they are simply made invisible to the winners." },
                ],
                links: [DINING, FLEET, DEST, BOOK],
            },
            {
                slug: "conference-mice",
                name: "Conference & MICE",
                answer:
                    "Conference and MICE support from MyTripMyTravel covers delegate logistics — airport handovers, venue transfers, and excursion programmes — on the GPS-tracked Elite Fleet protocol, so the conference organiser owns the agenda and not the ground operation.",
                intro: [
                    "MICE is logistics at volume under a fixed clock. Hundreds of delegates must be moved between airport, venue, hotel, and excursion on a schedule that cannot slip, because a delayed transfer cascades into a delayed session for everyone.",
                    "MyTripMyTravel runs the ground layer of conferences and MICE programmes as a timed operation: arrival waves from the airport, marshalled venue transfers, and excursion logistics that respect both the conference schedule and monument/venue capacity.",
                    "Delegate handling is operationalised — manifests, name-board meet-and-greet, wave allocation, and a guest desk so the organiser's team is freed from running transport and can focus on the programme.",
                    "Excursion and partner-programme tracks (the spouse programme, the post-conference circuit) are sequenced as their own missions running in parallel, so the main event is never disrupted by the add-ons.",
                    "Contingency is built for the clock: redundant vehicles, alternate routing, and live coordination, because in MICE the cost of a fault is measured in hundreds of delegate-hours, not one.",
                ],
                points: [
                    { label: "Scope", detail: "Airport arrival waves, marshalled venue transfers, excursion and partner-programme logistics." },
                    { label: "Protocol", detail: "GPS-tracked convoy, timed movement, live coordination against a fixed conference clock." },
                    { label: "Delegate handling", detail: "Manifests, name-board meet-and-greet, wave allocation, guest desk." },
                    { label: "Parallel tracks", detail: "Spouse / post-conference circuits run as separate parallel missions." },
                    { label: "Best for", detail: "Conferences, conventions, dealer meets, large MICE programmes." },
                    { label: "Contingency", detail: "Redundant vehicles, alternate routing, live coordination tuned to delegate-hour cost." },
                ],
                faqs: [
                    { q: "Do you support conference delegate logistics?", a: "Yes — airport arrival waves, marshalled venue transfers, and excursion programmes on the GPS-tracked Elite Fleet protocol, run as a timed operation against the conference clock." },
                    { q: "Can you run the spouse / post-conference programme separately?", a: "Yes — partner and post-conference tracks are sequenced as their own parallel missions so the main event is never disrupted." },
                    { q: "How is delegate movement kept on schedule?", a: "Through arrival waves, vehicle marshals, manifests, and live coordination that respects both the conference schedule and venue capacity." },
                    { q: "What happens if a transfer faults at scale?", a: "Redundant vehicles, alternate routing, and live coordination absorb it — contingency is tuned to the delegate-hour cost of a MICE fault, not a single traveller's." },
                ],
                links: [FLEET, DEST, BOOK],
            },
            {
                slug: "product-launch",
                name: "Product Launch & Brand Event",
                answer:
                    "A product launch or brand event in a heritage Indian setting — a fort, palace, or lake venue as the backdrop — is produced end to end by MyTripMyTravel: venue, guest logistics, and dining, so the brand owns the narrative and not the operation.",
                intro: [
                    "A launch in a heritage venue converts a brand moment into an experience the audience cannot get anywhere else. But the venue that makes it unforgettable — a fort, a lake palace — is also operationally unforgiving, and that tension is the entire job.",
                    "MyTripMyTravel produces the event around the brand: venue access and staging in a heritage setting, guest movement and arrival choreography, and dining that carries the brand's tone, while the company controls the creative and the message.",
                    "Guest logistics is treated as part of the show — arrival sequencing so VIPs are not in a queue, fleet that matches the brand tier, and movement timed to the run-of-show so the reveal lands on cue.",
                    "The heritage setting is managed for its real constraints: access windows, power and AV in a protected monument, weather fallback for open-air staging, and capacity — handled invisibly so the venue reads only as spectacle.",
                    "Delivery is a single accountable production: venue, logistics, dining, and contingency under one mission lead, integrated with the brand's event and creative teams rather than bolted on.",
                ],
                points: [
                    { label: "Venues", detail: "Fort, palace, or lake heritage settings staged to the brand." },
                    { label: "Guest logistics", detail: "Arrival sequencing, brand-tier fleet, movement timed to the run-of-show." },
                    { label: "Heritage constraints", detail: "Access windows, AV/power in protected venues, weather fallback, capacity — handled invisibly." },
                    { label: "Scope", detail: "Venue, logistics, dining, contingency as one production integrated with brand/creative teams." },
                    { label: "Best for", detail: "Product launches, brand activations, dealer/partner reveals, milestone events." },
                ],
                faqs: [
                    { q: "Can you host a brand launch in a palace or fort?", a: "Yes — product launches and brand events are produced end to end in heritage forts, palaces, or lake venues, with venue, guest logistics, dining, and contingency under one production lead." },
                    { q: "How are heritage-venue constraints handled?", a: "Access windows, AV and power in protected monuments, weather fallback for open-air staging, and capacity are all managed invisibly so the venue reads only as spectacle." },
                    { q: "Do you work with our event and creative agency?", a: "Yes — the production integrates with the brand's event and creative teams; we own venue and logistics, the brand owns the narrative and creative." },
                    { q: "Is guest movement part of the show?", a: "Yes — arrival sequencing, brand-tier fleet, and movement timed to the run-of-show are treated as part of the experience, not background logistics." },
                ],
                links: [DINING, WED, BOOK],
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
