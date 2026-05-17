// Expert Guides city × language cluster (grid G5). Categorical service
// pages — "[language]-speaking expert guide in [city]". No fabricated
// guide identities or credentials; content describes the service offer.
// City facts pulled from destinations data for accuracy + interlinking.

import { getDestination, type Destination } from "./destinations";
import { getMonumentsByCity } from "./monuments";

export interface GuideLanguage {
    slug: string;
    name: string;
    note: string;
}

export const GUIDE_LANGUAGES: GuideLanguage[] = [
    { slug: "english", name: "English", note: "the default working language across all MyTripMyTravel missions" },
    { slug: "hindi", name: "Hindi", note: "native-level cultural and historical depth for the North Indian heartland" },
    { slug: "french", name: "French", note: "for French-speaking travellers wanting nuance, not translation" },
    { slug: "german", name: "German", note: "precise, detail-oriented guiding for German-speaking guests" },
    { slug: "spanish", name: "Spanish", note: "for Spanish and Latin American travellers" },
    { slug: "italian", name: "Italian", note: "for Italian-speaking guests" },
    { slug: "japanese", name: "Japanese", note: "culturally-attuned guiding for Japanese travellers (Phase-2 market)" },
];

// Guide cities — must exist in destinations.ts.
export const GUIDE_CITY_SLUGS = [
    "delhi",
    "agra",
    "jaipur",
    "udaipur",
    "jodhpur",
    "jaisalmer",
    "rishikesh",
    "kochi",
];

export interface GuideContent {
    h1: string;
    answer: string;
    intro: string[];
    covers: string[];
    faqs: { q: string; a: string }[];
}

export function getGuideContent(
    lang: GuideLanguage,
    dest: Destination
): GuideContent {
    const monuments = getMonumentsByCity(dest.slug).slice(0, 3).map((m) => m.name);
    const coversBase = monuments.length
        ? monuments.join(", ")
        : `${dest.name}'s principal heritage sites`;

    return {
        h1: `${lang.name}-Speaking Expert Guide in ${dest.name}`,
        answer: `MyTripMyTravel provides ${lang.name}-speaking expert guides in ${dest.name}, ${dest.state} — vetted, licensed heritage specialists who lead escorted visits in ${lang.name}, not translated tours. ${dest.name} guiding covers ${coversBase} and the wider ${dest.region} context, ${lang.note}. Guides are matched to the party during planning and operate within the private, chauffeured mission.`,
        intro: [
            `A ${lang.name}-speaking guide in ${dest.name} is the difference between seeing a monument and understanding it. We provide vetted, licensed heritage specialists who work directly in ${lang.name}.`,
            `${dest.name} is ${dest.region === "Golden Triangle" ? "a Golden Triangle vertex" : `a ${dest.region} destination`}; guiding here is sequenced into the escorted, chauffeured itinerary so language, access, and pacing are one continuous experience.`,
            `Guides are matched to the party's interests and depth during planning — history, architecture, photography, or family-paced — and coordinate with the chauffeur for seamless monument access.`,
        ],
        covers: monuments.length
            ? monuments.map((m) => `${m} — guided in ${lang.name}`)
            : [`${dest.name} heritage core — guided in ${lang.name}`],
        faqs: [
            { q: `Can I get a ${lang.name}-speaking guide in ${dest.name}?`, a: `Yes — MyTripMyTravel provides vetted, licensed ${lang.name}-speaking expert guides in ${dest.name}, matched to your party during planning.` },
            { q: `Are ${dest.name} guides licensed?`, a: `Yes — guides are vetted heritage specialists, not freelance solicitors. They operate within the private mission alongside the chauffeur.` },
            { q: `What does a ${dest.name} guide cover?`, a: `${coversBase}, plus the cultural and historical context of the wider ${dest.region}.` },
            { q: `Is the guide private?`, a: `Always — a dedicated guide for your party only, never a shared group, coordinated with monument-access logistics.` },
        ],
    };
}

export function guideExists(citySlug: string, langSlug: string): boolean {
    return (
        GUIDE_CITY_SLUGS.includes(citySlug) &&
        Boolean(getDestination(citySlug)) &&
        GUIDE_LANGUAGES.some((l) => l.slug === langSlug)
    );
}

export function getGuideLanguage(slug: string): GuideLanguage | undefined {
    return GUIDE_LANGUAGES.find((l) => l.slug === slug);
}

export function getAllGuideCityParams(): { city: string }[] {
    return GUIDE_CITY_SLUGS.map((city) => ({ city }));
}

export function getAllGuideParams(): { city: string; language: string }[] {
    const out: { city: string; language: string }[] = [];
    for (const c of GUIDE_CITY_SLUGS) {
        for (const l of GUIDE_LANGUAGES) {
            out.push({ city: c, language: l.slug });
        }
    }
    return out;
}

export function guideCitiesResolved(): { slug: string; name: string }[] {
    return GUIDE_CITY_SLUGS.map((slug) => {
        const d = getDestination(slug);
        return { slug, name: d ? d.name : slug };
    });
}
