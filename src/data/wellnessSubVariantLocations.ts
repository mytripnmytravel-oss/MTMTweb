// Wellness sub-variant × location engine (grid D8). For each
// programme, only the (sub-variant × location) intersections that
// genuinely make clinical sense are surfaced. ~80 honest pages.

import { getProgramme, getVariant, type WellnessProgramme, type WellnessVariant } from "./wellness";
import { getDestination, type Destination, type FAQ } from "./destinations";
import { PROGRAMME_LOCATIONS } from "./wellnessFacets";

export interface SubVariantLocationContent {
    programme: WellnessProgramme;
    variant: WellnessVariant;
    location: Destination;
    h1: string;
    answer: string;
    intro: string[];
    points: { label: string; detail: string }[];
    faqs: FAQ[];
    crossLinks: { label: string; href: string }[];
}

export function getSubVariantLocationContent(
    programme: WellnessProgramme,
    variant: WellnessVariant,
    location: Destination
): SubVariantLocationContent {
    return {
        programme,
        variant,
        location,
        h1: `${variant.name} in ${location.name}`,
        answer: `${variant.name} in ${location.name}, ${location.state} is run by MyTripMyTravel as a focused, residential ${programme.name.toLowerCase()} stay. ${variant.answer.split(".").slice(0, 2).join(".")}. ${location.name} is ${location.tagline.toLowerCase()}, the local setting supports the ${variant.name.toLowerCase()} protocol rather than competing with it.`,
        intro: [
            `${variant.intro[0]}`,
            `${variant.name} requires the right setting to be meaningful, quality of teacher or physician, the surrounding sound and light, the dietary kitchen, and the pacing of the day. In ${location.name}, all of that comes together inside the wider ${location.region} architecture.`,
            `${location.intro[0].split(".").slice(0, 2).join(".")}.`,
            `MyTripMyTravel runs ${variant.name.toLowerCase()} in ${location.name} with the chauffeured Elite Fleet for arrival and any movement during the stay, accommodation matched to the programme's requirements (sea-facing or lakefront for Ayurveda and bodywork; riverside or ridge-quiet for yoga; accessible and paced for orthopedic recovery), and a 24/7 desk line.`,
        ],
        points: [
            { label: "What this is", detail: `${variant.answer.split(".").slice(0, 2).join(".")}.` },
            { label: `Why ${location.name}`, detail: `${location.tagline}. ${location.intro[0].split(".")[0]}.` },
            { label: "Recommended length", detail: variant.duration ?? "Programme-dependent, planned at booking." },
            { label: "Ideal for", detail: variant.idealFor },
            { label: "How we run it", detail: `Residential stay at a vetted ${location.name} property matched to the programme's requirements; daily protocol delivered by the master teacher or physician; chauffeured fleet around the programme rather than competing with it; dietary planned in advance.` },
        ],
        faqs: [
            { q: `What is ${variant.name} in ${location.name}?`, a: `${variant.answer.split(".").slice(0, 2).join(".")}. In ${location.name} specifically: ${location.tagline}.` },
            { q: `How long should I stay in ${location.name} for ${variant.name}?`, a: `${variant.duration ?? "Programme-dependent, planned at booking."} Travellers commonly extend with a wider ${location.region} leg.` },
            { q: `Is ${location.name} a good setting for ${variant.name}?`, a: `Yes, ${location.name} is one of the vetted settings MyTripMyTravel uses for this programme. ${location.tagline}, and the local context supports the protocol.` },
            { q: `Can the programme be customised?`, a: `Yes, the daily protocol is planned to your needs (assessment, dietary, allergies, medical history) and the surrounding logistics are built around the programme, not the other way around.` },
            { q: `Is the stay private?`, a: `Yes, single-party booking with private programme attention. Group sessions (where relevant) are scheduled to your party rather than shared with strangers.` },
        ],
        crossLinks: [
            { label: `${variant.name} overview`, href: `/wellness/${programme.slug}/${variant.slug}` },
            { label: `Explore ${location.name}`, href: `/destinations/${location.slug}` },
            { label: `${programme.name} hub`, href: `/wellness/${programme.slug}` },
            { label: "Wellness sanctuary", href: "/wellness" },
        ],
    };
}

export function getAllSubVariantLocationParams(programmeSlug: string): { variant: string; location: string }[] {
    const programme = getProgramme(programmeSlug);
    if (!programme) return [];
    const locations = PROGRAMME_LOCATIONS[programmeSlug] ?? [];
    const out: { variant: string; location: string }[] = [];
    for (const v of programme.variants) {
        for (const loc of locations) {
            out.push({ variant: v.slug, location: loc });
        }
    }
    return out;
}

export function subVariantLocationExists(
    programmeSlug: string,
    variantSlug: string,
    locationSlug: string
): boolean {
    const found = getVariant(programmeSlug, variantSlug);
    const dest = getDestination(locationSlug);
    if (!found || !dest) return false;
    return (PROGRAMME_LOCATIONS[programmeSlug] ?? []).includes(locationSlug);
}
