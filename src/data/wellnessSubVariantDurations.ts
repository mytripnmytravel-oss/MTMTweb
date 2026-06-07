// Wellness sub-variant × duration engine. 19 sub-variants × 5
// durations = 95 per-variant per-duration briefs combining sub-variant
// character with honest duration framing.

import { getVariant, programmes, type WellnessProgramme, type WellnessVariant } from "./wellness";
import type { FAQ } from "./destinations";
import { WELLNESS_DURATIONS, type WellnessDuration } from "./wellnessFacets";

export interface SubVariantDurationContent {
    programme: WellnessProgramme;
    variant: WellnessVariant;
    duration: WellnessDuration;
    h1: string;
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    faqs: FAQ[];
    crossLinks: { label: string; href: string }[];
}

function durationFraming(programme: WellnessProgramme, variant: WellnessVariant, d: WellnessDuration): { label: string; honest: string } {
    if (programme.slug === "ayurvedic" && variant.slug === "panchakarma") {
        switch (d) {
            case 3: return { label: "3-day Panchakarma introduction", honest: "3 days is too short for authentic Panchakarma — it serves as an introduction or assessment-only visit. The 5-phase classical protocol cannot complete in this window." };
            case 5: return { label: "5-day Panchakarma assessment + first treatments", honest: "5 days allows physician consultation, Purvakarma preparation, and the first elimination therapies. Still short of complete Panchakarma." };
            case 7: return { label: "7-day Panchakarma — partial protocol", honest: "7 days completes Purvakarma and meaningful Pradhanakarma (main elimination) but compresses the Paschatkarma (rejuvenation) phase." };
            case 10: return { label: "10-day Panchakarma — near-complete protocol", honest: "10 days approaches a complete protocol with all 5 phases representable, though lighter than the classical 14-21 day version." };
            case 14: return { label: "14-day classical Panchakarma minimum", honest: "14 days is the practical floor for authentic classical Panchakarma — Purvakarma preparation, Pradhanakarma elimination, Paschatkarma rejuvenation, all under Vaidya supervision." };
        }
    }
    if (programme.slug === "yoga-soul" && (variant.slug === "hatha" || variant.slug === "vinyasa")) {
        switch (d) {
            case 3: return { label: `3-day ${variant.name} intensive`, honest: `3 days is a strong weekend intensive — assessment, two full practice days, a personalised sequence to take home.` };
            case 5: return { label: `5-day ${variant.name} foundation`, honest: `5 days builds a foundation — daily practice, progression, and the embedded home-practice plan.` };
            case 7: return { label: `7-day ${variant.name} practice week`, honest: `The classic practice week — full daily practice, progression, rest days that support not dilute.` };
            case 10: return { label: `10-day ${variant.name} deepening`, honest: `10 days is the deepening band — sustained progression with optional silence and dietary alignment.` };
            case 14: return { label: `14-day ${variant.name} intensive`, honest: `A serious teacher-led practice block — depth that shorter stays cannot reach.` };
        }
    }
    if (programme.slug === "orthopedic") {
        switch (d) {
            case 3: return { label: `3-day post-procedure transit`, honest: `3 days covers controlled arrival, a recovery day, and onward transfer — engineered around the recovery, not a trip.` };
            case 5: return { label: `5-day orthopedic recovery stay`, honest: `5 days is the typical short post-procedure window — accessible stays, physiotherapy continuity, paced light movement.` };
            case 7: return { label: `7-day structured recovery`, honest: `A 7-day stay covers a meaningful recovery block — physiotherapy, integrated Ayurvedic support, supervised pacing.` };
            case 10: return { label: `10-day rehabilitation programme`, honest: `Supports a structured rehabilitation arc — daily physiotherapy, supportive bodywork, dietary protocol, graded mobility.` };
            case 14: return { label: `14-day full recovery programme`, honest: `A full recovery programme window — sustained physiotherapy, integrated support, measured return-to-activity plan.` };
        }
    }
    // massage / generic
    switch (d) {
        case 3: return { label: `3-day ${variant.name} stay`, honest: `A focused 3-day window — daily sessions, paced for restoration not coverage.` };
        case 5: return { label: `5-day ${variant.name} programme`, honest: `5 days enables a real recovery programme — structured progression, rest, and dietary alignment.` };
        case 7: return { label: `7-day ${variant.name} week`, honest: `A complete recovery week — sustained programme with a planned arc.` };
        case 10: return { label: `10-day ${variant.name} deep stay`, honest: `Reaches deep recovery — extended sessions, mobility work, dietary integration.` };
        case 14: return { label: `14-day ${variant.name} full reset`, honest: `A full physical reset — the programme integrated as a coherent arc.` };
    }
}

export function getSubVariantDurationContent(
    programme: WellnessProgramme,
    variant: WellnessVariant,
    duration: WellnessDuration
): SubVariantDurationContent {
    const framing = durationFraming(programme, variant, duration);
    const answer = `A ${duration}-day ${variant.name} programme — ${framing.honest} MyTripMyTravel runs the ${duration}-day ${variant.name} stay at vetted centres with the chauffeured Elite Fleet, dietary planning, and physician supervision where the programme requires it.`;

    return {
        programme,
        variant,
        duration,
        h1: `${duration}-Day ${variant.name}`,
        answer,
        intro: [
            `${variant.intro[0]}`,
            `For ${duration} days specifically: ${framing.honest}`,
            `${variant.name} at this length is matched to the right setting — ${variant.relatedDestinations.map(d => d.label).join(", ")} — with the surrounding logistics built around the programme rather than competing with it.`,
        ],
        points: [
            { label: `${duration}-day character`, detail: framing.honest },
            { label: `What this is`, detail: variant.answer.split(".").slice(0, 2).join(".") + "." },
            { label: "Ideal for", detail: variant.idealFor },
            { label: "Setting", detail: variant.relatedDestinations.map(d => d.label).join(", ") },
            { label: "Protocol", detail: variant.protocol[0]?.detail ?? "Standard variant protocol applies." },
        ],
        faqs: [
            { q: `Is a ${duration}-day ${variant.name} programme worth it?`, a: framing.honest },
            { q: `What is ${variant.name}?`, a: variant.answer.split(".").slice(0, 2).join(".") + "." },
            { q: `Where is the ${duration}-day programme delivered?`, a: `At vetted ${variant.relatedDestinations.map(d => d.label).join(", ")} centres matched to the programme's clinical and operational requirements.` },
            { q: `Can the ${duration}-day stay be customised?`, a: `Yes — the daily protocol is planned to your needs (assessment, dietary, allergies, medical history) and the surrounding logistics are built around the programme.` },
            { q: `Is the programme private?`, a: `Yes — single-party booking with private programme attention. Group sessions (where relevant) are scheduled to your party rather than shared.` },
        ],
        crossLinks: [
            { label: `${variant.name} overview`, href: `/wellness/${programme.slug}/${variant.slug}` },
            { label: `${programme.name} hub`, href: `/wellness/${programme.slug}` },
            { label: `${programme.name} by duration`, href: `/wellness/${programme.slug}/duration/${duration}-day` },
            { label: "Wellness sanctuary", href: "/wellness" },
        ],
    };
}

export function getAllSubVariantDurationParams(programmeSlug: string): { variant: string; duration: string }[] {
    const out: { variant: string; duration: string }[] = [];
    const p = programmes.find((x) => x.slug === programmeSlug);
    if (!p) return out;
    for (const v of p.variants) {
        for (const d of WELLNESS_DURATIONS) {
            out.push({ variant: v.slug, duration: `${d}-day` });
        }
    }
    return out;
}

export function subVariantDurationExists(
    programmeSlug: string,
    variantSlug: string,
    durationSlug: string
): boolean {
    const found = getVariant(programmeSlug, variantSlug);
    if (!found) return false;
    const m = durationSlug.match(/^(\d+)-day$/);
    if (!m) return false;
    const n = Number.parseInt(m[1], 10);
    return (WELLNESS_DURATIONS as readonly number[]).includes(n);
}

export function parseSubVariantDurationSlug(slug: string): WellnessDuration | null {
    const m = slug.match(/^(\d+)-day$/);
    if (!m) return null;
    const n = Number.parseInt(m[1], 10);
    return (WELLNESS_DURATIONS as readonly number[]).includes(n) ? (n as WellnessDuration) : null;
}
