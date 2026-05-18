// Methodology stages (grid A4). The three real phases of MyTripMyTravel's
// published "Mission Protocol" — taken from the live /methodology page
// (Intelligent Curation, Kinetic Activation, Memory Archiving) and their
// actual feature lists, elaborated categorically. No invented framework.

export interface MethodologyStage {
    slug: string;
    order: number;
    name: string;
    phase: string;
    answer: string;
    intro: string[];
    features: { name: string; detail: string }[];
    faqs: { q: string; a: string }[];
}

export const methodologyStages: MethodologyStage[] = [
    {
        slug: "intelligent-curation",
        order: 1,
        name: "Intelligent Curation",
        phase: "Phase 01 — The Brief",
        answer:
            "Intelligent Curation is the first phase of MyTripMyTravel's Mission Protocol — the briefing stage where a traveller's intent is analysed and translated into a sequenced private architecture before anything is booked. It covers intent analysis, route optimisation, hospitality mapping, and briefing generation. It is the reason a MyTripMyTravel itinerary is engineered rather than assembled.",
        intro: [
            "Every mission begins here, and most travel fails here. Curation is not 'picking hotels' — it is reading what the traveller actually wants (often unstated), then resolving it against the realities of season, access windows, distances, and pace into a single coherent architecture.",
            "The phase is deliberately front-loaded: the time spent reading intent and optimising the route is what makes the rest of the trip feel effortless. A weak brief cannot be recovered later by good driving.",
            "It ends in a written brief — the protocol document the rest of the operation executes against — so the traveller approves an architecture, not a vague promise.",
        ],
        features: [
            { name: "Intent Analysis", detail: "Reading the real objective behind the request — celebration, recovery, first-India, deep-culture — including the parts the traveller has not articulated." },
            { name: "Route Optimisation", detail: "Resolving the wish-list against season, monument access windows, distances, and the Friday Taj closure into a sequence that wastes no prime hours." },
            { name: "Hospitality Mapping", detail: "Matching stays, dining, and access to the mission rather than to a price tier — the right property for the trip, not the most expensive one." },
            { name: "Briefing Generation", detail: "A written protocol document the whole operation executes against, approved by the traveller before anything is committed." },
        ],
        faqs: [
            { q: "What is the Intelligent Curation phase?", a: "The briefing stage of the Mission Protocol — intent analysis, route optimisation, hospitality mapping, and a written brief — completed before anything is booked." },
            { q: "Why so much work before booking?", a: "A weak brief cannot be fixed later by good logistics. Front-loading the architecture is what makes the executed trip feel effortless." },
            { q: "Do I see the brief before committing?", a: "Yes — the phase ends in a written protocol document you approve; you sign off on an architecture, not a vague promise." },
        ],
    },
    {
        slug: "kinetic-activation",
        order: 2,
        name: "Kinetic Activation",
        phase: "Phase 02 — Execute",
        answer:
            "Kinetic Activation is the execution phase of the Mission Protocol — where the approved brief becomes a live, running operation. It covers fleet diagnostics, attaché briefing, sanitisation protocol, and tech sync. This is the phase the traveller experiences: invisible logistics, escorted access, and a chauffeured mission that runs to plan.",
        intro: [
            "Activation is the phase guests actually see, which is precisely why none of its machinery should be visible. The vehicle is checked before it ever reaches you; the chauffeur and attaché are briefed on the specific mission, not handed a generic job.",
            "The standard is pre-emptive, not reactive: diagnostics, sanitisation, and tech sync happen ahead of the guest, so the experience is continuity rather than a series of fixes.",
            "Everything traces back to the brief from Phase 01 — activation does not improvise the trip, it executes the approved architecture, adjusting only within its intent.",
        ],
        features: [
            { name: "Fleet Diagnostics", detail: "Every vehicle checked and prepared before it reaches the guest — mechanical, comfort, and GPS-telemetry verified, not assumed." },
            { name: "Attaché Briefing", detail: "Chauffeur and on-ground attaché briefed on the specific mission and its brief, not handed a generic assignment." },
            { name: "Sanitisation Protocol", detail: "A pre-emptive cleanliness and readiness standard applied ahead of the guest, important for medical-sanctuary and family missions." },
            { name: "Tech Sync", detail: "Live GPS telemetry and coordination so the mission is tracked and adjustable in real time without the guest managing anything." },
        ],
        faqs: [
            { q: "What happens in Kinetic Activation?", a: "The approved brief becomes a live operation — fleet diagnostics, attaché briefing, sanitisation, and tech sync — executed so the logistics stay invisible to the guest." },
            { q: "Is the trip improvised at this stage?", a: "No — activation executes the Phase 01 brief, adjusting only within its intent; it does not invent the trip on the move." },
            { q: "Why is the fleet checked beforehand?", a: "The standard is pre-emptive, not reactive — diagnostics and readiness happen ahead of the guest so the experience is continuity, not visible fixes." },
        ],
    },
    {
        slug: "memory-archiving",
        order: 3,
        name: "Memory Archiving",
        phase: "Phase 03 — Debrief",
        answer:
            "Memory Archiving is the closing phase of the Mission Protocol — the debrief that turns one mission into a better next one. It covers post-mission debrief, preference logging, feedback loop, and network cleanup. It is why a returning MyTripMyTravel traveller is met with memory, not a blank form.",
        intro: [
            "Most operators end at drop-off. The protocol does not — the debrief is treated as part of the mission, because the value of what was learned is lost if it is not captured.",
            "Preferences, what worked, what would change, and relationship context are logged so a returning traveller is recognised and a referred one inherits the learning rather than starting from zero.",
            "Network cleanup closes the loop with the vetted partners and chauffeurs who delivered the mission, so quality is reinforced rather than assumed for next time.",
        ],
        features: [
            { name: "Post-Mission Debrief", detail: "A structured review of what worked and what would change — treated as part of the mission, not an afterthought." },
            { name: "Preference Logging", detail: "Traveller preferences and context recorded so a return or referral is met with memory, not a blank form." },
            { name: "Feedback Loop", detail: "Learnings fed back into curation so the next brief for this traveller (or profile) starts ahead." },
            { name: "Network Cleanup", detail: "Closing the loop with the chauffeurs and vetted partners who delivered, so quality is reinforced for the next mission." },
        ],
        faqs: [
            { q: "What is Memory Archiving?", a: "The debrief phase of the Mission Protocol — post-mission review, preference logging, feedback loop, and network cleanup — so each mission improves the next." },
            { q: "Why does the debrief matter to me as a traveller?", a: "Because a return or referral is met with memory, not a blank form — your preferences and context carry forward." },
            { q: "Does the protocol end at drop-off?", a: "No — the debrief is treated as part of the mission; ending at drop-off would lose everything the mission taught." },
        ],
    },
];

// ---- Accessors ----

export function getMethodologyStage(slug: string): MethodologyStage | undefined {
    return methodologyStages.find((s) => s.slug === slug);
}

export function getAllMethodologyParams(): { stage: string }[] {
    return methodologyStages.map((s) => ({ stage: s.slug }));
}
