// Wellness × month engine (grid D5). Per-programme monthly framing, // every programme has 12 honest month pages. The framing is anchored
// to the programme's primary geography (Ayurveda → Kerala monsoon,
// Yoga → Rishikesh / Himalayan stations, Orthopedic → climate-controlled
// year-round, Massage → multi-anchor).

import type { WellnessFacetContent } from "./wellnessFacets";
import { PROGRAMME_LOCATIONS } from "./wellnessFacets";
import { getDestination } from "./destinations";
import { getProgramme, type WellnessProgramme } from "./wellness";

export const WELLNESS_MONTHS = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
] as const;

export type WellnessMonth = (typeof WELLNESS_MONTHS)[number];

function titleCase(s: string): string {
    return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

interface MonthFraming {
    verdict: "ideal" | "good" | "shoulder" | "monsoon-window" | "winter-clarity" | "year-round";
    season: string;
    answer: string;
    intro: string;
    points: { label: string; detail: string }[];
}

// Programme-aware month framing.
function framing(programmeSlug: string, month: WellnessMonth): MonthFraming {
    const m = titleCase(month);

    if (programmeSlug === "ayurvedic") {
        // Ayurveda is anchored to Kerala; the Karkidaka rains
        // (June to August, leaning July) are the classical treatment window.
        const isKarkidaka = month === "june" || month === "july" || month === "august";
        const isMonsoonTail = month === "september";
        const isPeak = month === "november" || month === "december" || month === "january" || month === "february";
        const isShoulder = month === "march" || month === "october";
        const isHot = month === "april" || month === "may";

        if (isKarkidaka) {
            return {
                verdict: "monsoon-window",
                season: "Karkidaka, the classical Ayurveda treatment window",
                answer: `${m} sits inside the Karkidaka window, the southwest monsoon weeks in Kerala that classical Ayurveda regards as the optimum time for Panchakarma and serious cleansing therapies. Cooler, humid air keeps the body receptive; pores remain open; therapies are not fighting the heat. MyTripMyTravel arranges the Kerala-based programmes in this window with the chauffeured arrival, accessible stays, and dietary planning sequenced around the protocol.`,
                intro: `${m} is the traditional Ayurveda treatment month in Kerala, practitioners specifically choose Karkidaka because the body absorbs treatments differently in monsoon humidity. Sightseeing is constrained; the stay is the point.`,
                points: [
                    { label: "Why ${m} for Ayurveda".replace("${m}", m), detail: "Karkidaka is the textbook Panchakarma window, cool, humid, body-receptive. Practitioners come specifically for this." },
                    { label: "Constraint", detail: "It rains heavily. The programme is residential; expeditions outside the centre are limited and seasonally re-planned around clear breaks." },
                    { label: "Length recommendation", detail: "Karkidaka programmes are rarely meaningful under 7 days. The 14-day classical Panchakarma is the right length for this window." },
                ],
            };
        }
        if (isMonsoonTail) {
            return {
                verdict: "monsoon-window",
                season: "monsoon tail, still inside the deeper Ayurveda window",
                answer: `${m} is the monsoon tail in Kerala, the Ayurveda treatment window is still open and the rain is easing. A good time to enter a programme that runs into the post-monsoon clarity weeks. MyTripMyTravel sequences the arrival into ${m} so the heaviest treatments fall in the receptive window and the lighter Rasayana phase coincides with the easing weather.`,
                intro: `${m} is a strong Ayurveda entry month, the monsoon character that classical treatment values is still present, and the programme runs into improving weather.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Captures the tail of Karkidaka receptivity while running into easing weather for the recovery and integration phase." },
                    { label: "Constraint", detail: "Still actively raining in early weeks. Travel within Kerala remains weather-aware." },
                    { label: "Length recommendation", detail: "7 to 14 days. Enter ${m} and exit into the clear October window.".replace("${m}", m) },
                ],
            };
        }
        if (isPeak) {
            return {
                verdict: "ideal",
                season: "peak Kerala season, cleanest air, calm seas, lowest humidity",
                answer: `${m} is peak season in Kerala, clean air, calm seas, mild days. The Ayurveda programme runs comfortably and the surrounding Kerala leg (backwaters, beaches) is at its most pleasant. This is the season for travellers combining a meaningful Ayurveda stay with leisure rather than choosing the harder Karkidaka window.`,
                intro: `${m} is when most travellers do their Kerala Ayurveda, cooperative weather, comfortable stays, easy onward travel.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Comfortable weather makes the surrounding Kerala leg pleasant; the Ayurveda programme runs without weather constraints." },
                    { label: "Constraint", detail: "Demand on the best Ayurveda centres is high in peak weeks; we secure them well ahead." },
                    { label: "Length recommendation", detail: "5 to 14 days. Combinable with backwater and beach legs without weather risk." },
                ],
            };
        }
        if (isShoulder) {
            return {
                verdict: "good",
                season: "shoulder, warm but workable",
                answer: `${m} is a shoulder month for Kerala Ayurveda, warmer than the peak weeks but still comfortable enough for the programme. Lower visitor numbers in the best Ayurveda centres, easier scheduling, and a less crowded surrounding Kerala leg. MyTripMyTravel runs ${m} programmes with the same protocol and slightly extended midday rest.`,
                intro: `${m} is a comfortable shoulder month, warmer than peak, less crowded, easier on availability.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Lower demand, easier scheduling, weather still in the workable band." },
                    { label: "Constraint", detail: "Warmer afternoons; treatment scheduling tilts toward morning and evening." },
                    { label: "Length recommendation", detail: "5 to 10 days." },
                ],
            };
        }
        // Apr/May
        return {
            verdict: "good",
            season: "hot pre-monsoon, programme-only window",
            answer: `${m} is the hot, humid, pre-monsoon window in Kerala. The Ayurveda programme remains the right reason to be here; the surrounding Kerala leg is constrained by heat and pre-monsoon humidity. MyTripMyTravel runs ${m} programmes with stays climate-tuned to the conditions and the schedule weighted to the cool hours.`,
            intro: `${m} is a programme-only window, the Ayurveda stay justifies the trip; sightseeing around it should be light.`,
            points: [
                { label: "Why ${m}".replace("${m}", m), detail: "Demand is low, the centres have capacity, and the rains have not started, programme runs without monsoon constraints." },
                { label: "Constraint", detail: "Hot and humid. Surrounding sightseeing is limited; the stay is the trip." },
                { label: "Length recommendation", detail: "5 to 10 days, programme-anchored." },
            ],
        };
    }

    if (programmeSlug === "yoga-soul") {
        // Yoga anchored to Rishikesh / lower Himalayan stations (Dharamshala, Mussoorie).
        const isClarity = month === "october" || month === "november" || month === "february" || month === "march";
        const isWinter = month === "december" || month === "january";
        const isSpring = month === "april";
        const isHotPreMonsoon = month === "may";
        const isMonsoon = month === "june" || month === "july" || month === "august" || month === "september";

        if (isClarity) {
            return {
                verdict: "ideal",
                season: "Himalayan clarity, the practitioner's peak window",
                answer: `${m} is one of the practitioner's preferred windows in Rishikesh and the lower Himalayan yoga stations, clear cold mornings, dry days, and the kind of light that defines an outdoor practice. MyTripMyTravel anchors ${m} yoga immersions in Rishikesh and the Himalayan retreat sanctuaries with vetted master teachers and quiet riverside or ridge stays.`,
                intro: `${m} is the textbook yoga month, Himalayan air, clean light, no monsoon constraint, full programme availability.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Clear cold dry weather in Rishikesh and lower stations; outdoor practice at sunrise is the experience." },
                    { label: "Constraint", detail: "Mornings cold, layers required. Rooms at the better sanctuaries fill ahead; we secure them in advance." },
                    { label: "Length recommendation", detail: "7 to 14 days for the right practice arc." },
                ],
            };
        }
        if (isWinter) {
            return {
                verdict: "winter-clarity",
                season: "deep winter, cold-clear practice, lower-altitude focus",
                answer: `${m} is deep winter in the Himalayan yoga stations, cold and dry with razor-clear skies. The practice is wonderful but the body needs warming up at length each session. MyTripMyTravel runs ${m} programmes with heated practice spaces, slower progression in early days, and dietary support oriented to the cold.`,
                intro: `${m} is a serious winter practice month, cold and clear, with a slower ramp into intensity.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Razor-clear winter Himalayan air, lower visitor numbers, more attention per practitioner." },
                    { label: "Constraint", detail: "Cold mornings. Sessions ramp slowly. Higher Himalayan retreats may be closed; focus on Rishikesh and lower stations." },
                    { label: "Length recommendation", detail: "7 to 14 days; the slower ramp benefits from a longer stay." },
                ],
            };
        }
        if (isSpring) {
            return {
                verdict: "ideal",
                season: "spring, warming days, full availability",
                answer: `${m} is spring in the Himalayan yoga belt, warming days, comfortable mornings, full programme availability. One of the best months for new practitioners to start, and for experienced practitioners to do an outdoor-led practice block.`,
                intro: `${m} is the spring window, warming days, comfortable practice conditions, no weather risk.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Comfortable temperatures from dawn through evening, outdoor practice viable for full sessions." },
                    { label: "Constraint", detail: "Demand rising into the season; best stays fill ahead." },
                    { label: "Length recommendation", detail: "5 to 14 days." },
                ],
            };
        }
        if (isHotPreMonsoon) {
            return {
                verdict: "good",
                season: "hot pre-monsoon, practice viable, early sessions",
                answer: `${m} is the hot pre-monsoon window, practice is viable but tilts to early mornings and evenings. The Himalayan stations are cooler than the plains but warmer than peak season. MyTripMyTravel runs ${m} programmes with the schedule weighted to the cool hours and midday rest built in.`,
                intro: `${m} is workable but warmer, practice in the cool hours, rest in the midday.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Pre-monsoon stillness, clear weather, lower demand, more attention." },
                    { label: "Constraint", detail: "Warm afternoons; sessions sit at the cool ends of the day." },
                    { label: "Length recommendation", detail: "5 to 10 days." },
                ],
            };
        }
        // Monsoon
        return {
            verdict: "monsoon-window",
            season: "monsoon, lush, atmospheric, weather-aware",
            answer: `${m} is monsoon season in Rishikesh and the lower Himalayan stations, lush, dramatic, atmospheric, and weather-aware. Outdoor practice happens between rain windows; indoor and covered practice spaces become the spine of the schedule. The Ganga is in spate, the air is washed clean, and the better sanctuaries are quieter. MyTripMyTravel runs ${m} programmes with weather-flexible scheduling and covered practice spaces.`,
            intro: `${m} is a quieter, moodier window, fewer travellers, atmospheric practice, weather-flexible schedule.`,
            points: [
                { label: "Why ${m}".replace("${m}", m), detail: "Lower visitor numbers, atmospheric setting, fully washed air after each rain window." },
                { label: "Constraint", detail: "Rainfall is heavy in spells. Schedule weather-flexes; outdoor sessions slot into clear windows." },
                { label: "Length recommendation", detail: "7 to 14 days, longer stays absorb the weather flex better." },
            ],
        };
    }

    if (programmeSlug === "orthopedic") {
        // Orthopedic / rehab, climate-controlled, year-round, Kerala / Kovalam / Kumarakom anchored.
        const isPeak = month === "november" || month === "december" || month === "january" || month === "february";
        const isShoulder = month === "march" || month === "october";
        const isHot = month === "april" || month === "may";
        const isMonsoon = month === "june" || month === "july" || month === "august" || month === "september";

        if (isPeak) {
            return {
                verdict: "ideal",
                season: "peak comfort, best surrounding weather",
                answer: `${m} is the most comfortable window for an orthopedic recovery stay in Kerala, calm seas, cool nights, dry days, and easy onward travel. The clinical programme is unchanged month to month; ${m} adds a comfortable surrounding environment, easy gardens, sea walks where mobility allows, and the most pleasant operating conditions for the medical team.`,
                intro: `${m} pairs the year-round clinical programme with the most comfortable surrounding weather in Kerala.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Comfortable temperatures support paced light movement; coastal and lakefront stays are at their best." },
                    { label: "Constraint", detail: "Peak demand on the best recovery stays; secured ahead." },
                    { label: "Length recommendation", detail: "7 to 14 days per the procedure and surgeon's protocol." },
                ],
            };
        }
        if (isShoulder) {
            return {
                verdict: "good",
                season: "shoulder, warm but workable",
                answer: `${m} is a comfortable shoulder month for an orthopedic recovery stay. Warmer than peak weeks but well within the workable band, with lower demand and easier scheduling. The clinical programme is unchanged.`,
                intro: `${m} is a quieter recovery window, slightly warmer, fewer travellers, more attention.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Lower demand on the best recovery centres, easier scheduling, comfortable enough weather." },
                    { label: "Constraint", detail: "Warmer afternoons; mobility work scheduled to cool hours." },
                    { label: "Length recommendation", detail: "7 to 14 days." },
                ],
            };
        }
        if (isHot) {
            return {
                verdict: "year-round",
                season: "hot pre-monsoon, climate-controlled programme",
                answer: `${m} is the hot pre-monsoon window in Kerala. The recovery programme is climate-controlled and runs as usual; outdoor mobility work tilts to the cool hours. MyTripMyTravel pairs ${m} recovery stays with fully climate-tuned stays and a schedule weighted to mornings and evenings.`,
                intro: `${m} is climate-controlled; the programme is unchanged, the schedule shifts to the cool hours.`,
                points: [
                    { label: "Why ${m}".replace("${m}", m), detail: "Lower demand, more attention, climate-controlled programme not affected by surrounding heat." },
                    { label: "Constraint", detail: "Outdoor mobility work scheduled to dawn and evening only." },
                    { label: "Length recommendation", detail: "7 to 14 days per the surgeon's protocol." },
                ],
            };
        }
        // Monsoon
        return {
            verdict: "year-round",
            season: "monsoon, interior recovery window",
            answer: `${m} is monsoon in Kerala. The recovery programme runs unchanged inside climate-controlled stays; the surrounding humidity is not a factor for the clinical schedule. Many recovering travellers actively choose ${m} for lower demand and more attention per guest.`,
            intro: `${m} is a recovery-window month, programme unaffected, lower demand, more attention per guest.`,
            points: [
                { label: "Why ${m}".replace("${m}", m), detail: "Programme is climate-controlled; lower demand means the best centres have capacity." },
                { label: "Constraint", detail: "Outdoor mobility around the recovery stay is rain-dependent; the clinical schedule is unaffected." },
                { label: "Length recommendation", detail: "7 to 14 days per the surgeon's protocol." },
            ],
        };
    }

    // Massage / bodywork, multi-anchor (Kerala + Rajasthan), broadly all-season.
    const isPeak = month === "october" || month === "november" || month === "december" || month === "january" || month === "february";
    const isShoulder = month === "march" || month === "september";
    const isHot = month === "april" || month === "may" || month === "june";
    const isMonsoon = month === "july" || month === "august";

    if (isPeak) {
        return {
            verdict: "ideal",
            season: "peak season across both Kerala and Rajasthan anchors",
            answer: `${m} is peak season for bodywork stays, both the Kerala coast and the Rajasthan palace-spas operate in their best weather. Cool nights, dry days, calm seas in Kerala and comfortable Rajasthan winter days in the palaces. MyTripMyTravel arranges ${m} bodywork stays at vetted centres in Kerala and across the Rajasthan luxury wing.`,
            intro: `${m} pairs the best surrounding weather with full availability across the bodywork anchors, Kerala coast and Rajasthan palaces.`,
            points: [
                { label: "Why ${m}".replace("${m}", m), detail: "Both anchors at their best, Kerala calm, Rajasthan cool, wide choice of stays." },
                { label: "Constraint", detail: "Peak demand on palace-spas and Kerala flagships; secured well ahead." },
                { label: "Length recommendation", detail: "5 to 10 days." },
            ],
        };
    }
    if (isShoulder) {
        return {
            verdict: "good",
            season: "shoulder, workable across both anchors",
            answer: `${m} is a shoulder month, workable across both Kerala and Rajasthan bodywork anchors. Slightly warmer or wetter than peak but well within the comfortable band. Lower demand and easier scheduling.`,
            intro: `${m} is a quieter shoulder window, comfortable enough across both anchors, fewer travellers.`,
            points: [
                { label: "Why ${m}".replace("${m}", m), detail: "Lower demand, easier scheduling at the best stays, weather in the comfortable band." },
                { label: "Constraint", detail: "Edge-of-season weather; we shift afternoons accordingly." },
                { label: "Length recommendation", detail: "5 to 10 days." },
            ],
        };
    }
    if (isHot) {
        return {
            verdict: "good",
            season: "hot months, Kerala-anchored or palace-interior bodywork",
            answer: `${m} is hot across India. Bodywork stays remain workable inside climate-tuned palace-spas in Rajasthan and Kerala interior centres, with sessions scheduled into the cool hours. The Rajasthan flagship palace-spas (Udaipur, Jaipur) run their famous interior treatment programmes year-round.`,
            intro: `${m} is hot, bodywork sits inside climate-tuned palace and Kerala stays, with sessions in the cool hours.`,
            points: [
                { label: "Why ${m}".replace("${m}", m), detail: "Lower demand on palace-spas and Kerala stays; more attention per guest." },
                { label: "Constraint", detail: "Outdoor or open-air sessions limited to mornings and evenings only." },
                { label: "Length recommendation", detail: "5 to 7 days." },
            ],
        };
    }
    // Monsoon
    return {
        verdict: "monsoon-window",
        season: "monsoon, Kerala-anchored bodywork window",
        answer: `${m} is monsoon. The Kerala coast bodywork window is open (and historically valued for the same reasons as Karkidaka Ayurveda, receptive humidity, cooler temperatures, traditional bodywork conditions). Rajasthan palace-spas remain a comfortable interior option. MyTripMyTravel runs ${m} bodywork stays with weather-flexible scheduling.`,
        intro: `${m} favours the Kerala anchor, receptive humidity, traditional conditions, atmospheric setting.`,
        points: [
            { label: "Why ${m}".replace("${m}", m), detail: "Kerala bodywork window aligned with traditional monsoon practices; lower demand across both anchors." },
            { label: "Constraint", detail: "Outdoor sessions weather-flex into clear windows; some onward travel weather-aware." },
            { label: "Length recommendation", detail: "5 to 10 days." },
        ],
    };
}

export function getMonthContent(
    programme: WellnessProgramme,
    month: WellnessMonth
): WellnessFacetContent {
    const f = framing(programme.slug, month);
    const m = titleCase(month);
    const locations = (PROGRAMME_LOCATIONS[programme.slug] ?? []).slice(0, 3).map(
        (s) => getDestination(s)?.name ?? s
    );
    const locStr = locations.length ? locations.join(", ") : "vetted MyTripMyTravel sanctuary centres";

    return {
        h1: `${programme.name} in ${m}`,
        answer: f.answer,
        intro: [
            f.intro,
            `${programme.blurb} For ${m} specifically, the programme is run from ${locStr}, with the chauffeured arrival, accessible stays, and dietary planning sequenced around the season rather than against it.`,
            `What ${m} adds, and what it asks of you, is laid out below, honestly, so the booking decision is informed.`,
        ],
        points: f.points,
        faqs: [
            { q: `Is ${m} a good time for ${programme.name}?`, a: f.answer },
            { q: `Where is the ${m} ${programme.name} programme delivered?`, a: `At vetted centres in ${locStr}, matched to the programme's clinical and operational needs and to the seasonal conditions of ${m}.` },
            { q: `Should I avoid ${m} for ${programme.name}?`, a: f.verdict === "ideal" || f.verdict === "monsoon-window" || f.verdict === "year-round" ? `No, ${m} is one of the recommended windows. Specific reasons and constraints are detailed above.` : `${m} is a workable window with the constraints set out above. The planning desk will tell you honestly if a different month suits your goals better.` },
            { q: `Is the ${m} programme private?`, a: `Yes, single-party booking with private programme attention. Group classes (where relevant) are scheduled to your party rather than shared with strangers.` },
        ],
        crossLinks: [
            { label: `${programme.name} overview`, href: `/wellness/${programme.slug}` },
            { label: "Wellness sanctuary hub", href: "/wellness" },
        ],
    };
}

export function parseMonthSlug(slug: string): WellnessMonth | null {
    return (WELLNESS_MONTHS as readonly string[]).includes(slug) ? (slug as WellnessMonth) : null;
}

export function getMonthParams(programmeSlug: string): { month: string }[] {
    if (!getProgramme(programmeSlug)) return [];
    return WELLNESS_MONTHS.map((m) => ({ month: m }));
}

export function getAllWellnessMonthPaths(): { programme: string; month: string }[] {
    const programmeSlugs = Object.keys(PROGRAMME_LOCATIONS);
    const out: { programme: string; month: string }[] = [];
    for (const p of programmeSlugs) {
        for (const m of WELLNESS_MONTHS) out.push({ programme: p, month: m });
    }
    return out;
}
