// Operational service items (grid E8). Categorical service offerings
// MyTripMyTravel runs across the existing clusters, group transport,
// wedding convoy, executive chauffeur, etc. No fabricated certifications,
// partner relationships, or operational claims beyond what the wider
// content already describes.

export interface ServiceItem {
    slug: string;
    name: string;
    category: "Logistics" | "Hospitality" | "Concierge" | "Specialist";
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    faqs: { q: string; a: string }[];
    links: { label: string; href: string }[];
}

const BOOK = { label: "Brief the operations desk", href: "/booking" };
const FLEET = { label: "Elite Fleet", href: "/fleet" };
const SERVICES = { label: "All Services", href: "/services" };

export const SERVICE_ITEMS: ServiceItem[] = [
    {
        slug: "group-transport",
        name: "Group Transport & Convoy",
        category: "Logistics",
        answer:
            "Group transport with MyTripMyTravel is a GPS-tracked convoy operation for parties from 15 up to MICE-scale, multiple Elite Fleet vehicles, vehicle marshals, and a documented timed-wave movement plan so the group flows through monuments, venues, and meals without bottlenecking. Same protocol as our weddings and corporate missions, available as a standalone service.",
        intro: [
            "At scale, transport is the trip. The difference between a smooth multi-day group experience and a series of frustrations is the documented movement plan running underneath, and that is the entire point of this service.",
            "We run group transport as a managed convoy on the GPS-tracked Elite Fleet protocol: vehicle marshals, timed arrival waves, and contingency vehicles held in reserve. Encrypted logistics sync is available for larger groups where real-time coordination matters.",
            "Vehicle classes are matched across the convoy to party preference, typically a mix of premium SUVs (Innova Crysta, Fortuner) for the core seats and elite executive sedans (BMW, Mercedes) for the VIP segment within the group.",
            "Standalone availability: this service runs as part of weddings, MICE conferences, incentive trips, and corporate offsites, and is bookable on its own for any group that needs the same operational discipline without the rest of the package.",
        ],
        points: [
            { label: "Scale", detail: "From 15 to MICE-scale (200+); vehicle marshals appear above ~50 guests." },
            { label: "Fleet", detail: "Mixed Elite Fleet convoy matched to party preference and segment." },
            { label: "Protocol", detail: "GPS-tracked, timed movement waves, documented run-of-show, encrypted sync at scale." },
            { label: "Contingency", detail: "Spare vehicle held in reserve, alternate routing, named on-ground coordinator, 24/7 desk." },
            { label: "Use cases", detail: "Weddings, MICE/conferences, incentive trips, large family / multi-generation travel." },
        ],
        faqs: [
            { q: "What group sizes do you handle?", a: "From 15 up to MICE-scale (200+ delegates). At ~50 we add vehicle marshals; above 100 we add encrypted logistics sync." },
            { q: "Is this the same as renting multiple cars?", a: "No, group transport is a managed convoy operation with a documented movement plan, marshals, and contingency. It is the operational layer that makes a multi-vehicle group work." },
            { q: "Can it be booked standalone?", a: "Yes, bookable on its own for any group that needs the convoy operation without the rest of a wedding or conference package." },
        ],
        links: [
            { label: "Royal weddings", href: "/weddings" },
            { label: "Corporate missions", href: "/corporate" },
            FLEET,
            BOOK,
        ],
    },
    {
        slug: "wedding-convoy",
        name: "Wedding Guest Convoy",
        category: "Logistics",
        answer:
            "Wedding guest convoy is full multi-day guest transport for destination weddings, airport handovers, choreographed inter-event movement between mehndi/sangeet/ceremony/reception, and inter-property transfers, run on the GPS-tracked Elite Fleet protocol with encrypted logistics sync. Sized from intimate to royal weddings.",
        intro: [
            "A wedding is logistics with a celebration on top. The convoy layer is what turns hundreds of guests, multiple events, multiple properties, and a fixed run-of-show into a guest experience that feels effortless.",
            "We choreograph inter-event movement so the gap between a morning sangeet and an evening ceremony is engineered, staged departures, pre-positioned vehicles, vehicle marshals at scale, and a guest-facing meet-and-greet protocol that absorbs the moments of friction.",
            "Airport handovers are the first touch, flight tracking, name-board meet, and onward transfer integrated with the room block. We are running for the guest, not for the chauffeur's convenience.",
            "Encrypted logistics sync is standard above ~150 guests; below that, the operation runs on the same protocol at smaller scale. Specifics are designed during planning.",
        ],
        points: [
            { label: "Scope", detail: "Airport handovers, inter-event convoy, inter-property transfers, departure handovers." },
            { label: "Scale", detail: "Intimate (under 50) through royal (400+); convoy size and marshal presence sized to count." },
            { label: "Protocol", detail: "GPS-tracked Elite Fleet, timed waves, encrypted sync above ~150 guests." },
            { label: "Integration", detail: "Coordinated with the weddings wing's venue, dining, and run-of-show layers, not bolted on." },
            { label: "Contingency", detail: "Redundant vehicles, alternate routing, medical-aware support where the guest list requires it." },
        ],
        faqs: [
            { q: "Is wedding convoy part of the weddings package?", a: "Yes, it is the logistics layer of the MyTripMyTravel weddings production. It is also bookable standalone for couples using another planner." },
            { q: "How is inter-event movement choreographed?", a: "Through staged departures, pre-positioned vehicles, vehicle marshals at scale, and a documented run-of-show shared with the event team." },
            { q: "Do you handle airport handovers for the whole guest list?", a: "Yes, flight tracking, name-board meet, and onward transfer integrated with the room block. We absorb the friction at first touch." },
        ],
        links: [
            { label: "Royal Weddings", href: "/weddings" },
            { label: "Wedding services", href: "/weddings/services" },
            { label: "Guest logistics", href: "/weddings/services/guest-logistics" },
            BOOK,
        ],
    },
    {
        slug: "airport-meet-and-greet",
        name: "Airport Meet & Greet",
        category: "Hospitality",
        answer:
            "Premium airport meet and greet from MyTripMyTravel: an attaché on the arrivals floor with a name board, flight tracking through any delay, luggage handling, and onward chauffeured transfer integrated into the rest of the mission. Available at all major Indian gateways (Delhi DEL, Mumbai BOM, Bengaluru BLR, Chennai MAA, Kochi COK, and more).",
        intro: [
            "The first touch sets the tone. A name on a board after a long-haul flight, the luggage handled by someone else, the chauffeur and vehicle staged outside, and the onward leg already moving, that is the standard.",
            "Flight tracking is live. If the flight is delayed, the attaché is still on the floor; if it arrives early, the vehicle is already in position. The pre-calculated fare does not change with delay.",
            "The same vehicle and chauffeur continue into the onward itinerary without a handover gap. The transfer is the first leg of the mission, not a separate booking.",
            "Available at all major Indian international and domestic gateways. Specifics confirmed at booking.",
        ],
        points: [
            { label: "On the floor", detail: "Attaché present with a name board; live flight tracking absorbs delays." },
            { label: "Luggage", detail: "Handled by the attaché and chauffeur to the vehicle; no guest carry." },
            { label: "Transfer", detail: "Onward chauffeured leg integrated into the itinerary; no handover gap." },
            { label: "Pricing", detail: "Pre-calculated and fixed, no surge for delays or traffic." },
            { label: "Coverage", detail: "All major Indian gateways (DEL / BOM / BLR / MAA / COK / others on confirmation)." },
        ],
        faqs: [
            { q: "What happens if my flight is delayed?", a: "The attaché stays on the floor and tracks the flight live; the vehicle is staged when you actually land. The fare is pre-calculated and fixed, no surge for delays." },
            { q: "Is meet and greet included in tour packages?", a: "Yes, for MyTripMyTravel missions it is standard. It is also bookable as a standalone transfer for trips where you are using another operator for the rest." },
            { q: "Which airports do you cover?", a: "All major Indian gateways including Delhi (DEL), Mumbai (BOM), Bengaluru (BLR), Chennai (MAA), and Cochin (COK). Others confirmed at booking." },
        ],
        links: [
            { label: "Inter-City Transfers", href: "/services/inter-city" },
            { label: "Airport transfer hub cities", href: "/services" },
            FLEET,
            BOOK,
        ],
    },
    {
        slug: "encrypted-logistics-sync",
        name: "Encrypted Logistics Sync",
        category: "Specialist",
        answer:
            "Encrypted logistics sync is the discreet real-time coordination layer for board, royal-wedding, and MICE-scale operations, secure channel between the on-ground command, chauffeur convoy, and guest desk so live movement decisions and contingency are coordinated without broadcast. Standard above ~150 guests or for confidentiality-led trips.",
        intro: [
            "At scale and at the top of the discretion register, the coordination layer matters as much as the vehicles. Encrypted sync replaces the radio-or-WhatsApp improvisation that breaks at volume.",
            "The protocol covers chauffeur dispatch, vehicle marshal coordination, guest-desk handovers, and contingency triggers, all on a secure channel, with clear roles and escalation.",
            "Standard above ~150 guests for weddings and MICE; standard regardless of size for board, executive, and confidentiality-led missions where movement details should not be visible to third parties.",
            "Operational layer only, not the experience layer. Guests experience seamless movement; the production team experiences explicit, recorded coordination.",
        ],
        points: [
            { label: "Channel", detail: "Secure encrypted operational channel between command, convoy, and guest desk." },
            { label: "Scope", detail: "Chauffeur dispatch, marshal coordination, guest handovers, contingency triggers." },
            { label: "When standard", detail: "Above ~150 guests for weddings/MICE; always for board / executive / confidentiality-led trips." },
            { label: "Discretion", detail: "Movement details not visible to third parties; itineraries held need-to-know." },
        ],
        faqs: [
            { q: "Why use encrypted logistics sync?", a: "At scale and at the top of the discretion register, coordination breaks if it relies on open channels. Encrypted sync gives the operational team a secure live coordination layer without the friction." },
            { q: "Is it for weddings or corporate?", a: "Both. Standard above ~150 guests for weddings and MICE; standard regardless of size for board and executive trips where confidentiality is the brief." },
            { q: "Do guests see this layer?", a: "No, it is operational. Guests experience seamless movement; the production team handles the coordination behind the scenes." },
        ],
        links: [
            { label: "Royal weddings", href: "/weddings/by-guest-count/royal" },
            { label: "Leadership & Board", href: "/corporate/by-team-size/leadership-board" },
            { label: "Conference / MICE", href: "/corporate/events/conference-mice" },
            BOOK,
        ],
    },
    {
        slug: "medical-aware-transit",
        name: "Medical-Aware Transit",
        category: "Specialist",
        answer:
            "Medical-aware transit is engineered chauffeured transport for post-procedure, mobility-supported, and recovery travellers, orthopedic-grade vehicles, posture support, paced routing, accessible accommodation, and physiotherapy continuity coordinated with the home care team. The clinical layer is your team's; the transit logistics is ours.",
        intro: [
            "When the recovery is real, the vehicle and the pacing are clinical variables, not comfort preferences. This service treats them that way.",
            "The fleet is orthopedic-grade, easier ingress, posture-supported seating, controlled vibration on the road. Vehicle and route are matched to the recovery, not to coverage.",
            "We coordinate with the home care team, clearance, physiotherapy continuity, dietary, medication storage, and design the trip around those constraints with built-in rest and contingency.",
            "We do not deliver medical care. The clinical layer stays with the care team; we own the transit logistics, accessible accommodation, and pacing so the recovery is not derailed by the trip.",
        ],
        points: [
            { label: "Fleet", detail: "Orthopedic-grade vehicles, easier ingress, supportive seating, vibration-managed routing." },
            { label: "Pacing", detail: "Strict, paced; built-in rest; minimal segments; medically-aware chauffeur-guides." },
            { label: "Coordination", detail: "With the home care team, clearance, physiotherapy continuity, dietary, medication storage." },
            { label: "Stays", detail: "Accessible accommodation, ground-floor where useful, quiet wings." },
            { label: "Scope boundary", detail: "Logistics layer only, clinical responsibility stays with the care team." },
        ],
        faqs: [
            { q: "Is medical-aware transit a medical service?", a: "No, it is the engineered transit and accommodation logistics around a medical situation. Clinical responsibility stays with the home care team; we coordinate with them, not replace them." },
            { q: "When do you recommend it?", a: "Post-procedure travel with medical clearance, mobility-supported guests, recovery itineraries, and any trip where the standard transit register would be a clinical risk." },
            { q: "What does 'orthopedic-grade' mean for a vehicle?", a: "Easier ingress, posture-supported seating, and vibration-managed routing, a clinical specification, not a comfort upgrade." },
        ],
        links: [
            { label: "Medical Sanctuary", href: "/wellness" },
            { label: "Orthopedic restoration", href: "/wellness/orthopedic" },
            { label: "Post-op knee transit", href: "/wellness/orthopedic/post-op-knee" },
            BOOK,
        ],
    },
    {
        slug: "executive-chauffeur",
        name: "Executive Chauffeur Service",
        category: "Hospitality",
        answer:
            "Executive chauffeur service is the discretion-first transport layer for board, C-suite, investor, and confidentiality-led travel: elite-tier vehicles (BMW, Mercedes, Vellfire), executive-cleared chauffeurs, controlled venue access, encrypted logistics sync, and tightly held itineraries. The brief is discretion and seamlessness, not size.",
        intro: [
            "Executive travel is defined by what must not happen: no exposure, no friction, no uncertainty. This service treats those constraints as the entire product.",
            "Vehicle tier is elite by default, BMW 5 / Mercedes S / Toyota Vellfire, with chauffeurs cleared for executive work and a vehicle environment engineered for working time on the move.",
            "Coordination runs on encrypted logistics sync; itineraries are need-to-know; venue access is pre-cleared rather than improvised at the door. Personalisation is per-principal, dietary, schedule, and security preferences captured in advance.",
            "Available standalone (single executive movements, board offsites) or as the elite-tier layer of a larger corporate mission.",
        ],
        points: [
            { label: "Fleet", detail: "Elite tier, BMW 5 / Mercedes S / Toyota Vellfire / Audi A6, with executive-cleared chauffeurs." },
            { label: "Protocol", detail: "Encrypted logistics sync; controlled venue access; need-to-know itinerary handling." },
            { label: "Personalisation", detail: "Per-principal dietary, schedule, and security preferences captured in advance." },
            { label: "Modes", detail: "Standalone single movements; full board / leadership offsites; elite-tier layer of corporate missions." },
        ],
        faqs: [
            { q: "What's the difference from standard chauffeur hire?", a: "Discretion, security, vehicle tier, and coordination, not just a higher-class car. Encrypted sync, controlled venue access, and need-to-know itineraries are the differentiators." },
            { q: "Is this only for board-level travel?", a: "No, it is the protocol for any confidentiality- or discretion-led travel, including investor visits, private client hosting, and protected family movements." },
            { q: "Can it run for a multi-day trip?", a: "Yes, single movements through multi-day missions, with the same vehicle / chauffeur held throughout for continuity." },
        ],
        links: [
            { label: "Leadership & Board", href: "/corporate/by-team-size/leadership-board" },
            { label: "Elite Fleet", href: "/fleet" },
            { label: "BMW 5 Series", href: "/fleet/bmw-5" },
            BOOK,
        ],
    },
    {
        slug: "photography-fleet",
        name: "Photography & Filming Fleet",
        category: "Specialist",
        answer:
            "Photography and filming fleet from MyTripMyTravel: chauffeured vehicles and logistics support sequenced around a photo or film schedule, golden-hour timing, pre-cleared monument access, vehicle staging for shots, and equipment-handling capacity. Used for wedding photography, brand shoots, magazine commissions, and film location scouting in India.",
        intro: [
            "Photography schedules do not run on tourist clocks. Golden hour, dawn light, and very specific monument access windows are the entire job, and standard tourist transport cannot serve them.",
            "We sequence the day around the shot: dawn departures, golden-hour positioning, pre-cleared monument timing where possible, and the chauffeur briefed for vehicle staging rather than driving.",
            "Vehicle and luggage capacity is matched to the equipment load, Innova or larger for crew + gear; smaller premium vehicles for talent and lifestyle pieces. Multiple vehicles for separate crew and talent.",
            "Used by wedding photographers, brand shoots, magazine commissions, and film location scouting across the Golden Triangle, Rajasthan, Kerala, and the Himalayas.",
        ],
        points: [
            { label: "Schedule", detail: "Sequenced around the shot, dawn, golden hour, monument access windows." },
            { label: "Access", detail: "Pre-cleared monument timing and vehicle staging where possible." },
            { label: "Capacity", detail: "Vehicle sized to equipment load; multi-vehicle splits for crew + talent." },
            { label: "Use cases", detail: "Wedding photography, brand shoots, magazine commissions, film location scouting." },
        ],
        faqs: [
            { q: "Can you handle golden-hour and dawn shoots?", a: "Yes, that's the entire point. Dawn departures and golden-hour positioning are built into the day's run-of-show with the chauffeur briefed for staging." },
            { q: "Do you handle filming permits?", a: "Major monument permits and protected-area filming permits are external processes that the production owns; we coordinate logistics around the permit-holder and advise on what is feasible at each location." },
            { q: "Is this for wedding photographers only?", a: "No, wedding photography is a common use case, but the service supports brand shoots, magazine commissions, and film location scouting equally." },
        ],
        links: [
            { label: "Royal Weddings", href: "/weddings" },
            { label: "Elite Fleet", href: "/fleet" },
            { label: "Destination archive", href: "/destinations" },
            BOOK,
        ],
    },
    {
        slug: "24-7-concierge-desk",
        name: "24/7 Concierge Desk",
        category: "Concierge",
        answer:
            "The MyTripMyTravel 24/7 concierge desk is the human backup behind every mission, a reachable team that handles in-trip changes, contingency, and the small things travellers actually call about (a forgotten item, a dietary adjustment, an itinerary tweak). Standard across every mission; bookable standalone as a travel-support layer for guests using another operator.",
        intro: [
            "Every itinerary, however well designed, runs into the unexpected. The desk exists for the moment something does, and is the difference between a small problem solved in 20 minutes and a problem that grows.",
            "It is not a call-centre script. Calls and messages reach a small, named team that knows the trip, the chauffeur, and the on-ground partners. Authority to make decisions sits in the team, not behind escalation tiers.",
            "Standard across every MyTripMyTravel mission. Also bookable standalone as a travel-support layer for guests using another operator who want an Indian on-ground human resource on call.",
        ],
        points: [
            { label: "Reachable", detail: "WhatsApp, phone, email, 24/7, to a named team that knows your trip." },
            { label: "Scope", detail: "In-trip changes, contingency, small things (forgotten items, dietary tweaks, schedule shifts)." },
            { label: "Authority", detail: "Decisions sit in the desk, not behind escalation tiers." },
            { label: "Modes", detail: "Standard across MyTripMyTravel missions; bookable standalone as a travel-support layer." },
        ],
        faqs: [
            { q: "Is the desk really 24/7?", a: "Yes, staffed continuously, with named team coverage. Calls and messages reach a human who knows your trip." },
            { q: "Can I use the desk if I'm using another operator?", a: "Yes, bookable standalone as a travel-support layer for guests who want an Indian on-ground human resource on call without the rest of the package." },
            { q: "What kinds of things should I call about?", a: "Anything, a forgotten item, a sudden dietary need, an itinerary shift, a logistical question, or a real emergency. We handle the small things in the same calm register as the large ones." },
        ],
        links: [
            { label: "Tours Master Packages", href: "/tours" },
            { label: "Destinations", href: "/destinations" },
            BOOK,
        ],
    },
    {
        slug: "multi-property-block-management",
        name: "Multi-Property Block Management",
        category: "Logistics",
        answer:
            "Multi-property block management is the accommodation operations layer for large weddings, MICE conferences, and corporate offsites, managing room blocks across multiple hotels, manifests, staggered check-in waves, inter-property guest movement, and an on-ground guest desk. Standard above ~50 guests where a single property cannot host the count.",
        intro: [
            "Above ~50 guests, a single property rarely holds the whole group; above ~150, multi-property is unavoidable. The accommodation layer then becomes operations, not booking.",
            "We run room blocks across the cluster of properties: contracted rates, manifests, allocation, key pre-assignment, luggage handling, and arrival-wave management so a 200-person check-in is not a lobby bottleneck.",
            "An on-ground guest desk handles in-stay queries so the family's or company's own people are not running reception. Inter-property guest movement is integrated with the convoy layer.",
            "Standard component of wedding and corporate-MICE missions; bookable standalone for groups using their own planner for the rest.",
        ],
        points: [
            { label: "Scope", detail: "Room blocks across multiple properties, manifests, allocation, luggage, staggered check-in waves." },
            { label: "Guest desk", detail: "On-ground in-stay desk so family / company people don't run reception." },
            { label: "Integration", detail: "Inter-property movement tied into the convoy layer for seamless flow." },
            { label: "Threshold", detail: "Standard above ~50 guests; unavoidable above ~150." },
        ],
        faqs: [
            { q: "When do I need multi-property block management?", a: "Above ~50 guests where a single property cannot host comfortably; above ~150 it is essentially unavoidable. Below that, single-property block management is simpler." },
            { q: "Do you negotiate rates with the hotels?", a: "Yes, contracted group rates as part of the block, with the rate structure transparent to the booking party." },
            { q: "Is the guest desk staffed by your people?", a: "Yes, on-ground MyTripMyTravel team during the stay, so the family / company's own people are not running reception." },
        ],
        links: [
            { label: "Royal weddings", href: "/weddings" },
            { label: "Conference / MICE", href: "/corporate/events/conference-mice" },
            { label: "Grand weddings (150 to 400)", href: "/weddings/by-guest-count/grand" },
            BOOK,
        ],
    },
    {
        slug: "bespoke-mission-planning",
        name: "Bespoke Mission Planning",
        category: "Concierge",
        answer:
            "Bespoke mission planning is the design and architecture layer that sits at the start of every MyTripMyTravel trip, intent analysis, route optimisation, hospitality mapping, and a written brief approved before anything is booked. This is the Phase 01 of The Mission Protocol; available standalone for travellers who want only the planning, not the execution.",
        intro: [
            "Every trip starts here. Planning is not 'picking hotels', it is reading the real objective, resolving it against season / monument windows / distances / pace, and producing a written brief that the rest of the operation executes against.",
            "The protocol step (Intelligent Curation) is documented in the methodology, assessment, optimisation, mapping, briefing, ending in a written protocol document you approve before commitments are made.",
            "Standard across MyTripMyTravel missions. Bookable standalone for travellers who want only the planning layer, for example, expert design for a trip they intend to execute themselves or with another operator.",
        ],
        points: [
            { label: "What it produces", detail: "A written protocol document, concept, sequence, stays, dining, fleet plan, contingency, approved before booking." },
            { label: "Inputs", detail: "Intent analysis (often what the traveller has not articulated), season fit, real distances, monument access windows." },
            { label: "Use case", detail: "Standard across MTMT missions; standalone for travellers who want only the planning layer." },
        ],
        faqs: [
            { q: "What's in the brief?", a: "Concept and intent reading; day-by-day sequence; stay placements; dining curation; fleet plan; contingency. Approved before anything is committed." },
            { q: "Can I get just the planning without booking the trip?", a: "Yes, the planning layer is bookable standalone for travellers who want expert design without execution by us." },
            { q: "How long does planning take?", a: "Most missions: 1 to 2 weeks of iterative briefing. Complex multi-region or wedding-scale trips: longer, with explicit milestone reviews." },
        ],
        links: [
            { label: "The Mission Protocol", href: "/methodology" },
            { label: "Intelligent Curation", href: "/methodology/intelligent-curation" },
            SERVICES,
            BOOK,
        ],
    },
];

export function getServiceItem(slug: string): ServiceItem | undefined {
    return SERVICE_ITEMS.find((s) => s.slug === slug);
}

export function getAllServiceItemSlugs(): string[] {
    return SERVICE_ITEMS.map((s) => s.slug);
}
