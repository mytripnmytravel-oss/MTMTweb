// Wellness sub-variant × month engine. 19 sub-variants × 12 months =
// 228 per-sub-variant per-month briefs. Combines sub-variant
// character with programme-aware monthly framing.

import { getVariant, programmes, type WellnessProgramme, type WellnessVariant } from "./wellness";
import type { FAQ } from "./destinations";
import { WELLNESS_MONTHS, getMonthContent, type WellnessMonth } from "./wellnessMonths";

export interface SubVariantMonthContent {
    programme: WellnessProgramme;
    variant: WellnessVariant;
    month: WellnessMonth;
    monthLabel: string;
    h1: string;
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    faqs: FAQ[];
    crossLinks: { label: string; href: string }[];
}

function titleCase(s: string): string { return s.replace(/\b\w/g, (c) => c.toUpperCase()); }

export function getSubVariantMonthContent(
    programme: WellnessProgramme,
    variant: WellnessVariant,
    month: WellnessMonth
): SubVariantMonthContent {
    const monthLabel = titleCase(month);
    const programmeMonth = getMonthContent(programme, month);
    const answer = `${variant.name} in ${monthLabel} sits inside the ${programme.name} ${monthLabel} window — ${programmeMonth.answer.split(".").slice(0, 2).join(".")}. ${variant.answer.split(".")[0]}. MyTripMyTravel runs the programme at vetted centres with the chauffeured Elite Fleet, dietary planning, and a 24/7 desk line.`;

    return {
        programme,
        variant,
        month,
        monthLabel,
        h1: `${variant.name} in ${monthLabel}`,
        answer,
        intro: [
            `${variant.intro[0]}`,
            `For ${monthLabel} specifically: ${programmeMonth.intro[0]}`,
            `The ${variant.name.toLowerCase()} programme runs through the month with the climate-appropriate protocol — pacing, dietary, and access tuned to the conditions rather than fought against.`,
        ],
        points: [
            { label: `${variant.name} — what it actually is`, detail: variant.answer.split(".").slice(0, 2).join(".") + "." },
            { label: `${monthLabel} for ${programme.name}`, detail: programmeMonth.answer.split(".").slice(0, 2).join(".") + "." },
            { label: "Recommended length", detail: variant.duration ?? "Programme-dependent — planned at booking." },
            { label: "Ideal for", detail: variant.idealFor },
            { label: `Protocol in ${monthLabel}`, detail: variant.protocol[0]?.detail ?? "Standard variant protocol applies; climate-tuning is built in." },
        ],
        faqs: [
            { q: `Is ${monthLabel} a good time for ${variant.name}?`, a: programmeMonth.answer },
            { q: `What is ${variant.name}?`, a: variant.answer.split(".").slice(0, 2).join(".") + "." },
            { q: `How long should I stay in ${monthLabel}?`, a: variant.duration ?? "Programme-dependent — planned at booking." },
            { q: `What conditions should I expect in ${monthLabel}?`, a: programmeMonth.points[0]?.detail ?? "Standard seasonal conditions apply for this region." },
            { q: `Is the programme private?`, a: `Yes — single-party booking with private programme attention. Group sessions (where relevant) are scheduled to your party rather than shared with strangers.` },
        ],
        crossLinks: [
            { label: `${variant.name} overview`, href: `/wellness/${programme.slug}/${variant.slug}` },
            { label: `${programme.name} in ${monthLabel}`, href: `/wellness/${programme.slug}/month/${month}` },
            { label: `${programme.name} hub`, href: `/wellness/${programme.slug}` },
            { label: "Wellness sanctuary", href: "/wellness" },
        ],
    };
}

export function getAllSubVariantMonthParams(programmeSlug: string): { variant: string; month: string }[] {
    const out: { variant: string; month: string }[] = [];
    const p = programmes.find((x) => x.slug === programmeSlug);
    if (!p) return out;
    for (const v of p.variants) {
        for (const m of WELLNESS_MONTHS) {
            out.push({ variant: v.slug, month: m });
        }
    }
    return out;
}

export function subVariantMonthExists(
    programmeSlug: string,
    variantSlug: string,
    monthSlug: string
): boolean {
    const found = getVariant(programmeSlug, variantSlug);
    if (!found) return false;
    return (WELLNESS_MONTHS as readonly string[]).includes(monthSlug);
}
