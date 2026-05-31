// Monument × month engine. 29 monuments × 12 months = 348 per-monument
// per-month briefs. Combines monument-specific access info with the
// destination city's seasonal grid (from destinationMonths.ts).

import { getDestination, type Destination, type FAQ } from "./destinations";
import { monuments, type Monument } from "./monuments";
import { MONTHS, getMonthContent, titleCase, type Month } from "./destinationMonths";
import type { MonthContent } from "./destinationMonths";

export interface MonumentMonthContent {
    monument: Monument;
    dest: Destination;
    month: Month;
    monthLabel: string;
    h1: string;
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    cityMonth: MonthContent;
    accessNote: string;
    faqs: FAQ[];
    crossLinks: { label: string; href: string }[];
}

function monumentAccessNote(m: Monument): string {
    const v = m.visitorInfo.find((x) => /hours|timing|entry|best time/i.test(x.label));
    if (v) return `${v.label}: ${v.value}`;
    return "Access timed to the prime viewing hours; private guide arranged.";
}

export function getMonumentMonthContent(
    monument: Monument,
    dest: Destination,
    month: Month
): MonumentMonthContent {
    const cityMonth = getMonthContent(dest, month);
    const accessNote = monumentAccessNote(monument);
    const monthLabel = titleCase(month);

    const answer = `Visiting the ${monument.name} in ${monthLabel} sits inside the ${cityMonth.headline.toLowerCase()} for ${dest.name}. ${cityMonth.climate.weather}; ${cityMonth.climate.light}. ${cityMonth.climate.crowd}. ${monument.tagline}. MyTripMyTravel sequences the visit at the prime hour with escorted access, a vetted guide, and the chauffeured Elite Fleet.`;

    return {
        monument,
        dest,
        month,
        monthLabel,
        h1: `${monument.name} in ${monthLabel}`,
        answer,
        intro: [
            `${monument.tagline} ${monument.answer.split(".").slice(0, 2).join(".")}.`,
            `${monthLabel} sits in the ${cityMonth.headline.toLowerCase()} for ${dest.name} — ${cityMonth.climate.weather}, with ${cityMonth.climate.light.toLowerCase()}. ${cityMonth.climate.crowd}. ${cityMonth.operationalNote}`,
            `For the ${monument.name} specifically, ${accessNote.toLowerCase()}. We sequence the visit for the prime hour and avoid the worst conditions ${monthLabel} brings to ${dest.name}.`,
            `Around the monument visit, the ${monthLabel} ${dest.name} circuit is built to the season — pacing, stays, dining, and contingency tuned to the conditions rather than fought against.`,
        ],
        points: [
            { label: `Visiting in ${monthLabel}`, detail: cityMonth.headline },
            { label: "Weather + light", detail: `${cityMonth.climate.weather} · ${cityMonth.climate.light}` },
            { label: "Crowd profile", detail: cityMonth.climate.crowd },
            { label: `${monument.name} access`, detail: accessNote },
            { label: `${monument.name} tip for ${monthLabel}`, detail: monument.tips[0] ?? "Sequence the visit for the prime hour with escorted access; we handle the queue and the timing." },
        ],
        cityMonth,
        accessNote,
        faqs: [
            { q: `Is ${monthLabel} a good time to visit the ${monument.name}?`, a: cityMonth.answer },
            { q: `What's the weather in ${monthLabel} for the ${monument.name}?`, a: `${cityMonth.climate.weather}. ${cityMonth.climate.light}.` },
            { q: `Are crowds heavy in ${monthLabel}?`, a: cityMonth.climate.crowd },
            { q: `What time should I visit in ${monthLabel}?`, a: accessNote + (monument.tips.length ? ` Tip: ${monument.tips[0]}` : "") },
            { q: `What should I avoid for a ${monthLabel} visit?`, a: cityMonth.avoidThisMonth[0] ?? "Standard heritage-site protocols apply; we manage the pacing and timing." },
            { q: `Is the visit private?`, a: `Always — single party, dedicated chauffeur, GPS-tracked Elite Fleet, escorted monument access.` },
        ],
        crossLinks: [
            { label: `Full ${monument.name} brief`, href: `/destinations/${dest.slug}/monuments/${monument.slug}` },
            { label: `${dest.name} in ${monthLabel}`, href: `/destinations/${dest.slug}/in/${month}` },
            { label: `${dest.name} city brief`, href: `/destinations/${dest.slug}` },
            { label: `${dest.region} destinations`, href: `/destinations/region/${dest.regionSlug}` },
        ],
    };
}

export function getAllMonumentMonthParams(): { slug: string; monument: string; month: string }[] {
    const out: { slug: string; monument: string; month: string }[] = [];
    for (const m of monuments) {
        for (const month of MONTHS) {
            out.push({ slug: m.citySlug, monument: m.slug, month });
        }
    }
    return out;
}

export function monumentMonthExists(citySlug: string, monumentSlug: string, monthSlug: string): boolean {
    const m = monuments.find((x) => x.slug === monumentSlug && x.citySlug === citySlug);
    if (!m) return false;
    if (!getDestination(citySlug)) return false;
    return (MONTHS as readonly string[]).includes(monthSlug);
}
