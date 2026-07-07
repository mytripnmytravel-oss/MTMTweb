// Wellness duration + location facets (grid D3 + D4). Categorical
// content per (programme × duration) and (programme × location).
// Locations are real cities from destinations.ts; durations follow the
// standard buckets. Honest about which durations are clinically
// meaningful (e.g., Panchakarma 14-day is the floor, not a 3-day version).

import { getDestination, type Destination } from "./destinations";
import { getProgramme, type WellnessProgramme } from "./wellness";

export const WELLNESS_DURATIONS = [3, 5, 7, 10, 14] as const;
export type WellnessDuration = (typeof WELLNESS_DURATIONS)[number];

// Curated, honest mapping, only locations where the programme genuinely runs.
export const PROGRAMME_LOCATIONS: Record<string, string[]> = {
    "yoga-soul": ["rishikesh", "dharamshala", "mussoorie"],
    ayurvedic: ["kochi", "kumarakom", "kovalam", "alleppey", "varkala", "thekkady"],
    orthopedic: ["kochi", "kovalam", "kumarakom"],
    massage: ["kochi", "kumarakom", "kovalam", "udaipur", "jaipur"],
};

// Per-programme honest framing of what each duration delivers.
function durationFraming(programmeSlug: string, d: WellnessDuration): { label: string; honest: string } {
    if (programmeSlug === "ayurvedic") {
        switch (d) {
            case 3: return { label: "3-day Ayurveda introduction", honest: "A 3-day Ayurveda stay is a spa-style introduction, a dosha consultation, an Abhyanga or Shirodhara session, and dietary guidance. It is not authentic Panchakarma, which requires far longer. Useful as a taster within a broader Kerala trip." };
            case 5: return { label: "5-day Ayurveda consultation programme", honest: "A 5-day Ayurveda programme deepens the spa introduction with a structured physician consultation, repeated bodywork, and dietary supervision. It is still short of Panchakarma but is a credible reset programme." };
            case 7: return { label: "7-day Ayurvedic restoration", honest: "A 7-day Ayurvedic stay is a meaningful restoration window, sustained Abhyanga, Shirodhara, dosha-aligned diet, and physician follow-through. Not classical Panchakarma, but a substantive programme." };
            case 10: return { label: "10-day Ayurvedic deep stay", honest: "A 10-day Ayurvedic programme approaches the Panchakarma threshold, Purvakarma preparation, lighter elimination therapies, and Rasayana phase, under physician supervision." };
            case 14: return { label: "14-day Panchakarma, minimum classical", honest: "14 days is the practical minimum for an authentic Panchakarma programme, Purvakarma preparation, Pradhanakarma elimination, and Paschatkarma rejuvenation, supervised by a Vaidya. Anything labelled 'Panchakarma' under this length is a spa adaptation." };
        }
    }
    if (programmeSlug === "yoga-soul") {
        switch (d) {
            case 3: return { label: "3-day yoga immersion", honest: "A 3-day yoga stay is a strong weekend immersion, a teacher assessment, structured morning and evening practice, and a sustainable home sequence to carry forward." };
            case 5: return { label: "5-day yoga foundation", honest: "A 5-day programme builds a foundation, daily asana and pranayama, meditation introduction, and a personalised practice plan." };
            case 7: return { label: "7-day yoga practice week", honest: "A 7-day stay is the classic practice week, Hatha, Vinyasa, or yin tracks with progression, meditation embedded, and rest days that support rather than dilute the practice." };
            case 10: return { label: "10-day deepening immersion", honest: "10 days is the deepening band, sustained progression across asana, pranayama, and meditation, with optional silence and dietary alignment." };
            case 14: return { label: "14-day teacher-led intensive", honest: "A 14-day intensive is a serious practice block, teacher-led, with the depth that shorter stays cannot reach. Suited to existing practitioners committing to a discipline reset." };
        }
    }
    if (programmeSlug === "orthopedic") {
        switch (d) {
            case 3: return { label: "3-day post-procedure transit", honest: "A 3-day stay covers a controlled arrival, a recovery day, and an onward transfer, engineered around the recovery rather than treated as a trip." };
            case 5: return { label: "5-day orthopedic recovery stay", honest: "5 days is the typical short post-procedure recovery window, accessible stays, physiotherapy continuity, paced light movement." };
            case 7: return { label: "7-day structured recovery", honest: "A 7-day stay covers a meaningful recovery block, physiotherapy, integrated Ayurvedic supportive therapy (Kati Basti), and supervised pacing." };
            case 10: return { label: "10-day rehabilitation programme", honest: "10 days supports a structured rehabilitation arc, physiotherapy daily, supportive bodywork, dietary protocol, and graded mobility." };
            case 14: return { label: "14-day full recovery programme", honest: "14 days is a full recovery programme window, sustained physiotherapy, integrated Ayurvedic and bodywork support, and a measured return-to-activity plan." };
        }
    }
    // massage
    switch (d) {
        case 3: return { label: "3-day bodywork stay", honest: "A 3-day stay is a focused bodywork window, daily sessions across complementary modalities, paced for restoration rather than coverage." };
        case 5: return { label: "5-day bodywork & recovery", honest: "5 days enables a real recovery programme, structured progression across modalities, rest, and dietary alignment." };
        case 7: return { label: "7-day recovery week", honest: "A 7-day stay covers a complete recovery week, sustained bodywork with a planned arc, recovery days, and integrated mobility." };
        case 10: return { label: "10-day deep recovery", honest: "10 days reaches deep recovery, extended bodywork, mobility work, and dietary integration." };
        case 14: return { label: "14-day full reset", honest: "14 days is a full physical reset, bodywork, mobility, dietary, and recovery integrated as a coherent programme." };
    }
}

export interface WellnessFacetContent {
    h1: string;
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    faqs: { q: string; a: string }[];
    crossLinks: { label: string; href: string }[];
}

export function getDurationContent(
    programme: WellnessProgramme,
    duration: WellnessDuration
): WellnessFacetContent {
    const framing = durationFraming(programme.slug, duration);
    const locations = (PROGRAMME_LOCATIONS[programme.slug] ?? []).slice(0, 3).map(
        (s) => getDestination(s)?.name ?? s
    );
    const locStr = locations.length ? locations.join(", ") : "vetted MyTripMyTravel sanctuary centres";

    return {
        h1: `${duration}-Day ${programme.name} Programme`,
        answer: `${framing.honest} MyTripMyTravel runs the ${duration}-day ${programme.name} programme at vetted centres in ${locStr}, with logistics, accessible stays, dietary planning, and the chauffeured Elite Fleet, handled around the programme rather than competing with it.`,
        intro: [
            `${framing.label}, what it actually delivers, and what it does not. ${framing.honest}`,
            `${programme.blurb} For a ${duration}-day stay specifically, the architecture is built backward from what is meaningful at this length rather than padding a shorter programme to fill the calendar.`,
            `Recommended setting: ${locStr}. The chauffeured arrival, accessible accommodation, dietary planning, and 24/7 desk are pre-arranged so the programme itself is the only thing the guest engages with.`,
        ],
        points: [
            { label: "Length & character", detail: framing.honest },
            { label: "Best matched to", detail: programme.variants[0]?.idealFor ?? "guests seeking a paced, supervised wellness window." },
            { label: "Setting", detail: locStr },
            { label: "Logistics", detail: "Accessible stays, dietary planning, chauffeured Elite Fleet around the programme; 24/7 desk; medical-aware support where the programme requires it." },
        ],
        faqs: [
            { q: `Is a ${duration}-day ${programme.name} programme worth it?`, a: framing.honest },
            { q: `Where is the ${duration}-day ${programme.name} programme delivered?`, a: `Primarily at ${locStr}, vetted centres matched to the programme's clinical and operational requirements.` },
            { q: `Can the ${duration}-day stay be customised?`, a: `Yes, the schedule is built to your party within the constraints of the programme's clinical structure. Dietary, accessibility, and pacing are individualised in advance.` },
            { q: `Is the programme physician-led?`, a: programme.slug === "ayurvedic" || programme.slug === "orthopedic" ? `Yes, the medical layer is physician-led (Ayurvedic Vaidya or orthopedic/rehab specialist as relevant). The travel layer is MyTripMyTravel's.` : `Programmes are teacher / practitioner-led with a clear protocol; medical supervision is integrated where the programme requires it.` },
        ],
        crossLinks: [
            { label: `${programme.name} overview`, href: `/wellness/${programme.slug}` },
            { label: "Wellness sanctuary hub", href: "/wellness" },
        ],
    };
}

export function getLocationContent(
    programme: WellnessProgramme,
    location: Destination
): WellnessFacetContent {
    return {
        h1: `${programme.name} in ${location.name}`,
        answer: `${programme.name} in ${location.name}, ${location.state}, is one of the established settings MyTripMyTravel arranges this programme in. ${programme.blurb} ${location.name} is ${location.tagline.toLowerCase()}, the local context supports the programme: ${location.intro[0].split(".")[0]}.`,
        intro: [
            `${programme.blurb} ${location.name} sits within the ${location.region}; its character supports the programme rather than competing with it.`,
            `Stays are matched to the programme's clinical and operational needs, sea-facing or lakefront for Ayurveda and bodywork, riverside or ridge-quiet for yoga, accessible and paced for orthopedic recovery. The chauffeured Elite Fleet handles arrival, onward, and any movement within the leg.`,
            `The recommended programme length in ${location.name} depends on the discipline: classical Ayurveda requires the longer durations to be meaningful; yoga and bodywork stays scale meaningfully from a long weekend up.`,
        ],
        points: [
            { label: "Location", detail: `${location.name}, ${location.state} (${location.region})` },
            { label: "Why here", detail: `${location.tagline}. The local context, ${location.intro[0].split(".")[0]}, supports the programme rather than competing with it.` },
            { label: "Best programmes here", detail: programme.variants.slice(0, 3).map((v) => v.name).join(", ") },
            { label: "Recommended length", detail: programme.slug === "ayurvedic" ? "14+ days for classical Panchakarma; 7 to 10 for substantive Ayurveda; 3 to 5 for an introduction within a broader Kerala trip." : programme.slug === "yoga-soul" ? "7 to 14 days for a real practice arc; 3 to 5 for a foundational introduction." : "Programme-dependent, recommended at booking based on your needs." },
        ],
        faqs: [
            { q: `Is ${location.name} a good place for ${programme.name}?`, a: `Yes, ${location.name} is one of the established settings MyTripMyTravel uses for ${programme.name}. ${location.tagline}, and the local context supports the programme.` },
            { q: `How long should I stay for ${programme.name} in ${location.name}?`, a: programme.slug === "ayurvedic" ? "For classical Panchakarma, 14 days minimum (commonly 21 to 28). For a shorter Ayurvedic restoration, 7 to 10 days is meaningful. 3 to 5 days is an introduction within a broader trip." : "Programme-dependent. The planning desk recommends a length based on your goals and the discipline's real requirements rather than the calendar." },
            { q: `Where do I stay for ${programme.name} in ${location.name}?`, a: `At vetted ${location.name} properties matched to the programme, sea-facing or lakefront for Ayurveda and bodywork, riverside / ridge-quiet for yoga, accessible for orthopedic recovery.` },
            { q: `Is the ${location.name} programme private?`, a: `Yes, single-party booking with private programme attention. Group classes (where relevant) are scheduled to your party rather than shared with strangers.` },
        ],
        crossLinks: [
            { label: `${programme.name} overview`, href: `/wellness/${programme.slug}` },
            { label: `Explore ${location.name}`, href: `/destinations/${location.slug}` },
            { label: "Wellness sanctuary hub", href: "/wellness" },
        ],
    };
}

export function getProgrammeLocations(programmeSlug: string): Destination[] {
    return (PROGRAMME_LOCATIONS[programmeSlug] ?? [])
        .map((s) => getDestination(s))
        .filter((d): d is Destination => Boolean(d));
}

export function parseDurationSlug(slug: string): WellnessDuration | null {
    const m = slug.match(/^(\d+)-day$/);
    if (!m) return null;
    const n = Number.parseInt(m[1], 10);
    return (WELLNESS_DURATIONS as readonly number[]).includes(n) ? (n as WellnessDuration) : null;
}

export function getDurationParams(programmeSlug: string): { duration: string }[] {
    if (!getProgramme(programmeSlug)) return [];
    return WELLNESS_DURATIONS.map((n) => ({ duration: `${n}-day` }));
}

export function getLocationParams(programmeSlug: string): { location: string }[] {
    return (PROGRAMME_LOCATIONS[programmeSlug] ?? []).map((location) => ({ location }));
}

export function locationExists(programmeSlug: string, citySlug: string): boolean {
    return (PROGRAMME_LOCATIONS[programmeSlug] ?? []).includes(citySlug);
}
