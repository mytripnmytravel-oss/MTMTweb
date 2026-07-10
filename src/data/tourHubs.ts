// Regional tour hubs (grid B2). Per-region landing pages that list the
// tour packages relevant to each region, with honest counts (some
// regions have only a handful of packaged tours, bespoke planning
// covers the rest). No fabricated packages.

import { packages, type Package } from "./tours";

export interface RegionTourHub {
    slug: "rajasthan" | "kerala" | "himalayas" | "sikkim" | "andaman";
    name: string;
    tagline: string;
    /** Strings to match against package.location */
    locationKeys: string[];
    heroImg: string;
    /** Whether to also link the destinations-region page. */
    destinationsRegionSlug: string;
    blurb: string;
    intro: string[];
    /** At-a-glance planning facts (best time, ideal length, gateway, pace). */
    quickFacts?: { label: string; value: string }[];
    /** "How many days do I need" guidance, itinerary-led planning help. */
    durationGuide?: string;
    /** Region-specific FAQs, appended to the generated set. */
    extraFaqs?: { q: string; a: string }[];
}

export const REGIONAL_HUBS: RegionTourHub[] = [
    {
        slug: "rajasthan",
        name: "Rajasthan",
        tagline: "Lake palaces, desert forts, and the royal heartland.",
        locationKeys: ["Rajasthan"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg",
        destinationsRegionSlug: "rajasthan",
        blurb: "The Mewar lakes, the Marwar fort cities, and the Thar, chauffeured circuits across the state's marquee and quieter heritage layers.",
        intro: [
            "Rajasthan is the most complete heritage circuit in India, palace hotels in Udaipur, Mehrangarh's vertical cliff above Jodhpur, the living fort at Jaisalmer, the painted havelis of Bundi. The packages below are starting architectures; we routinely combine and extend them.",
            "The state rewards a deliberate pace: 10 to 14 days for the marquee loop, 7 for a focused leg, and a Golden Triangle add-on to bookend the trip. Every itinerary runs on the private GPS-tracked Elite Fleet protocol with escorted access at the forts and palaces.",
        ],
        quickFacts: [
            { label: "Best time", value: "October to March (cool desert days)" },
            { label: "Ideal length", value: "7 to 14 days" },
            { label: "Gateways", value: "Delhi / Jaipur / Udaipur / Jodhpur" },
            { label: "Pace", value: "1 to 2 nights per city, private car" },
            { label: "Signature", value: "Lake palaces, desert forts, Thar dunes" },
        ],
        durationGuide:
            "7 days covers a focused leg, Udaipur's lakes plus Jodhpur's Blue City, or the Shekhawati havelis. 10 to 12 days does the marquee loop (Udaipur → Jodhpur → Jaisalmer) with a Golden Triangle bookend. 14+ days adds Bundi, a Ranthambore tiger safari and slower palace-hotel stays.",
        extraFaqs: [
            { q: "How many days do I need for Rajasthan?", a: "A week covers a two-city focused leg; 10 to 12 days does the classic Udaipur to Jodhpur to Jaisalmer loop with a Taj Mahal add-on; 14+ days lets you slow down with palace stays, Bundi and a Ranthambore safari. We tailor the length to your dates." },
            { q: "Which Rajasthan cities are must-see?", a: "Udaipur (lakes and the City Palace), Jodhpur (Mehrangarh Fort and the Blue City) and Jaisalmer (the golden living fort and Thar dunes) are the marquee three; Jaipur, Pushkar, Bundi and Bikaner deepen the circuit." },
            { q: "Can I combine Rajasthan with the Taj Mahal?", a: "Yes, most travellers bookend Rajasthan with the Golden Triangle (Delhi, Agra's Taj Mahal and Jaipur), and the same chauffeured fleet continues seamlessly between them." },
            { q: "Are palace-hotel stays included?", a: "They can be. The base itineraries use hand-picked heritage and 4 to 5★ hotels; genuine palace stays such as a converted haveli or a lake-facing property are available on request and priced with your quote." },
        ],
    },
    {
        slug: "kerala",
        name: "Kerala",
        tagline: "Backwaters, tea estates, and the spice coast.",
        locationKeys: ["South India"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Backwaters_of_Alleppey.jpg",
        destinationsRegionSlug: "kerala",
        blurb: "Vembanad houseboats, Munnar tea, Fort Kochi heritage, and the south Kerala coast, slow-luxury and wellness-anchored circuits.",
        intro: [
            "Kerala is India's slow-luxury and wellness register, the houseboat night on Vembanad, the cool climb to Munnar's tea estates, Fort Kochi's spice-coast heritage, and the Ayurveda layer that runs the length of the coast. Tour packages here lean to multi-night base stays rather than fast multi-city rotation.",
            "Most of the listed packages are South-India circuits that anchor in Kerala; deeper Kerala-only missions (with Kumarakom, Bekal, Varkala) are typically built bespoke through the planning desk.",
        ],
        quickFacts: [
            { label: "Best time", value: "September to March (dry, green)" },
            { label: "Ideal length", value: "6 to 10 days" },
            { label: "Gateway", value: "Kochi (COK)" },
            { label: "Pace", value: "Multi-night base stays, scenic drives" },
            { label: "Signature", value: "Backwaters, tea hills, Ayurveda" },
        ],
        durationGuide:
            "6 to 7 days covers the classic arc, Fort Kochi, Munnar's tea hills, Periyar wildlife at Thekkady and an Alleppey houseboat night. 10 days adds a Kumarakom or Marari beach wind-down, or a supervised Ayurveda programme. 14 days pairs Kerala with the Golden Triangle up north.",
        extraFaqs: [
            { q: "How many days do I need for Kerala?", a: "The classic Kochi to Munnar to Thekkady to Alleppey loop needs about a week. Add a few days for a beach or Ayurveda wind-down at Marari or Kumarakom, or combine with the Golden Triangle for a 12 to 14 day trip." },
            { q: "Is a backwater houseboat night worth it?", a: "Yes, a private converted rice-barge with an en-suite cabin and onboard cook drifting the Alleppey canals is the signature Kerala experience, and it's included in most of our Kerala itineraries." },
            { q: "When should I avoid Kerala?", a: "June to August is the heavy south-west monsoon, lush and cheaper but wet, with hill roads and wildlife viewing affected. September to March is the reliable window, though the monsoon is traditionally valued for authentic Ayurveda." },
            { q: "Can I do a genuine Ayurveda programme here?", a: "Yes, Kerala is the home of Ayurveda. We use vetted centres with qualified physicians for supervised multi-day programmes, framed honestly as recuperative therapy rather than a medical cure." },
        ],
    },
    {
        slug: "himalayas",
        name: "Himalayas",
        tagline: "Hill stations, high passes, and Trans-Himalayan altitude.",
        locationKeys: ["Himalayas", "North India"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Leh_Palace_2011.jpg/3840px-Leh_Palace_2011.jpg",
        destinationsRegionSlug: "himalayas",
        blurb: "Colonial hill stations, the Garhwal-Kumaon belt, and the Ladakh altitude circuit, chauffeured and acclimatised end to end.",
        intro: [
            "The Himalayas span dramatically different missions, a paced Shimla to Manali colonial circuit, a Rishikesh wellness leg, the western Garhwal-Kumaon ridge, or the full Ladakh altitude programme with the obligatory acclimatisation buffer. The packages below open the range; the planning desk tailors the depth and pace per traveller.",
            "Ladakh is operated only with medically-aware pacing, oxygen-equipped fleet, and the Inner Line and protected-area permits handled. The other Himalayan circuits run on the standard Elite Fleet hill-protocol.",
        ],
        quickFacts: [
            { label: "Best time", value: "Shimla/Manali Mar to Jun & Dec snow; Ladakh Jun to Sep" },
            { label: "Ideal length", value: "7 to 10 days" },
            { label: "Gateways", value: "Chandigarh / Delhi / Leh (IXL)" },
            { label: "Pace", value: "Acclimatised, altitude buffer built in" },
            { label: "Note", value: "Ladakh needs inner-line permits & rest days" },
        ],
        durationGuide:
            "7 to 8 days suits a colonial hill circuit (Shimla, the Kullu valley and Manali) or a Rishikesh to Haridwar wellness leg. Ladakh needs 9 to 10 days minimum, two acclimatisation days in Leh before Nubra Valley and Pangong Lake, which is non-negotiable at altitude.",
        extraFaqs: [
            { q: "How many days do I need in the Himalayas?", a: "A Shimla to Manali circuit works in about a week; Ladakh needs 9 to 10 days including two mandatory acclimatisation days in Leh before the high passes. We never compress the Ladakh acclimatisation, it's what keeps the trip safe." },
            { q: "When is Ladakh open?", a: "Roughly June to September, when Khardung La, Chang La and the Pangong and Nubra roads are reliably clear of snow. Outside that window the high passes close and Ladakh is effectively cut off by road." },
            { q: "Is altitude a concern, and how do you manage it?", a: "Yes, Leh sits at 3,500 m and the passes exceed 5,300 m. We build in rest days, keep pass stops short, pace the whole trip gently and carry oxygen in the vehicles. Travellers with heart or lung conditions should consult a doctor first." },
            { q: "Do I need permits for the Himalayan circuits?", a: "The Shimla to Manali and Rishikesh circuits need none. Ladakh's Nubra and Pangong lie in protected border zones needing inner-line permits, which we arrange and handle for you." },
        ],
    },
    {
        slug: "sikkim",
        name: "Sikkim",
        tagline: "The eastern Himalaya, Buddhist monasteries, ridge towns, frontier altitude.",
        locationKeys: ["North East"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tsomgo_Lake%2C_Sikkim.jpg",
        destinationsRegionSlug: "sikkim",
        blurb: "Gangtok, Pelling, the Buddha Park at Rabong, and the permit-controlled North Sikkim ascent, small, focused circuits.",
        intro: [
            "Sikkim is small, contained, and intense, Kanchenjunga always visible on a clear morning, Buddhist culture intact, and a north-Sikkim altitude leg (Lachen / Lachung / Gurudongmar / Yumthang) that requires protected-area permits and acclimatised pacing. Packages are limited; most Sikkim missions are bespoke.",
            "Allow 5 to 8 days minimum for a real circuit: Gangtok base, west to Pelling for Kanchenjunga, and north to Lachung or Lachen for the high valleys. The South-Sikkim Ravangla ridge is the gentle, lower-altitude alternative.",
        ],
        quickFacts: [
            { label: "Best time", value: "March to May (blooms) & Oct to Dec (clear peaks)" },
            { label: "Ideal length", value: "5 to 8 days" },
            { label: "Gateway", value: "Bagdogra (IXB)" },
            { label: "Pace", value: "Acclimatised, winding mountain roads" },
            { label: "Note", value: "Inner-line & protected-area permits required" },
        ],
        durationGuide:
            "6 days covers Gangtok, its monasteries and the glacial Tsomgo Lake, then west to Pelling for Kanchenjunga. 8 days adds the north-Sikkim high valleys, Lachung and the rhododendron-lined Yumthang, which need extra permits and a slower, acclimatised pace.",
        extraFaqs: [
            { q: "How many days do I need for Sikkim?", a: "Five to six days covers Gangtok, Tsomgo Lake and Pelling's Kanchenjunga views; eight days adds the north-Sikkim valleys of Lachung and Yumthang. The mountain roads are slow, so we don't rush the circuit." },
            { q: "Do I need permits for Sikkim?", a: "Yes, foreign nationals need an inner-line permit to enter, plus protected-area permits for restricted zones like Tsomgo Lake and north Sikkim. We arrange all of them; we just need passport details in advance." },
            { q: "Will I see Kanchenjunga?", a: "Pelling gives one of India's best chances of a clear view of the world's third-highest peak, especially at dawn, but mountains make their own weather. October to December offers the crispest odds; we build in an early Pelling morning to maximise it." },
            { q: "When should I visit Sikkim?", a: "March to May for rhododendron blooms and generally clear skies, or October to December for the sharpest Kanchenjunga views. The June to September monsoon brings landslide risk on the mountain roads and is best avoided." },
        ],
    },
    {
        slug: "andaman",
        name: "Andaman Islands",
        tagline: "Bay of Bengal, beaches, reefs, and the heritage gateway.",
        locationKeys: ["Islands"],
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Radha_Nagar_beach%2C_Havelock_Island%2C_Andamn%2C_India-_Sun_set_view.jpg/3840px-Radha_Nagar_beach%2C_Havelock_Island%2C_Andamn%2C_India-_Sun_set_view.jpg",
        destinationsRegionSlug: "andaman",
        blurb: "Port Blair as the gateway, Havelock for diving and Radhanagar, Neil for stillness, small, sequenced island circuits.",
        intro: [
            "The Andamans run on a different calendar from the rest of India, October to May for calm seas and reliable ferries. Packages are limited; most Andaman missions are designed bespoke around the ferry schedule, dive plans, and the desired beach-versus-stillness mix.",
            "A standard architecture is one night at Port Blair (Cellular Jail + ferry staging), 3 to 4 nights at Havelock (Radhanagar, reefs, dives), and 1 to 2 nights at Neil (decompression close). The planning desk builds it.",
        ],
        quickFacts: [
            { label: "Best time", value: "October to May (calm seas, clear diving)" },
            { label: "Ideal length", value: "5 to 7 days" },
            { label: "Gateway", value: "Port Blair (IXZ)" },
            { label: "Pace", value: "Island-hopping by ferry, beach-led" },
            { label: "Note", value: "Ferries & flights are weather-dependent" },
        ],
        durationGuide:
            "5 days covers Port Blair's heritage, Havelock's Radhanagar Beach and a Neil Island close. 7 days adds diving or snorkelling days at Havelock and more unhurried beach time. Because ferries are weather-led, we always build a buffer before your onward flight.",
        extraFaqs: [
            { q: "How many days do I need in the Andamans?", a: "Five days covers the essentials, Port Blair, Havelock's Radhanagar Beach and Neil Island. Seven days lets you add diving or snorkelling and slower beach time. We always keep a buffer day before your mainland flight." },
            { q: "How do I get there and around?", a: "The islands are reached by air into Port Blair, usually from Chennai, Kolkata or Bengaluru. Inter-island travel is by fast catamaran ferry; we book premium reserved seats, but sailings depend on the sea state, so we plan buffers." },
            { q: "When should I visit, and do I need to dive?", a: "October to May offers calm seas and the clearest water; the June to September monsoon brings rough crossings. Diving is entirely optional, Havelock runs beginner and certified dives, and non-divers have snorkelling, glass-bottom boats and beaches." },
            { q: "Do I need a permit for the Andaman Islands?", a: "Indian nationals don't need a permit for the main tourist islands; foreign nationals register on arrival and some islands remain restricted. We handle the paperwork and advise on current rules." },
        ],
    },
];

export interface RegionalTourHubContent {
    hub: RegionTourHub;
    packages: Package[];
    h1: string;
    answer: string;
    faqs: { q: string; a: string }[];
}

export function getRegionalTourHub(slug: RegionTourHub["slug"]): RegionTourHub | undefined {
    return REGIONAL_HUBS.find((h) => h.slug === slug);
}

export function getRegionalTourHubContent(slug: RegionTourHub["slug"]): RegionalTourHubContent | null {
    const hub = getRegionalTourHub(slug);
    if (!hub) return null;
    const list = packages.filter((p) => hub.locationKeys.includes(p.location));
    const countWord = list.length === 0
        ? "Tour packages for this region are currently bespoke-led"
        : `${list.length} package${list.length === 1 ? "" : "s"} available`;
    return {
        hub,
        packages: list,
        h1: `${hub.name} Tours & Itineraries`,
        answer: `${hub.name} tours by MyTripMyTravel are private, chauffeured, escorted circuits across ${hub.tagline.toLowerCase().replace(/\.$/, "")}. ${countWord} as starting architectures; the planning desk customises duration, hotels, stops, and pace. Every itinerary runs on the GPS-tracked Elite Fleet protocol with monument and venue access handled end to end.`,
        faqs: [
            { q: `How many ${hub.name} tour packages are available?`, a: list.length === 0 ? `Packaged ${hub.name} tours are currently bespoke-led, the planning desk designs the itinerary to your party rather than picking from a fixed shelf.` : `${list.length} ${hub.name} package${list.length === 1 ? "" : "s"} are listed as starting architectures; each is fully customisable, and the planning desk routinely combines and extends them.` },
            { q: `Can I customise the ${hub.name} itinerary?`, a: `Entirely. Every package is a starting architecture; we adjust duration, hotels, stops, and pace to your party while keeping the regional character intact.` },
            { q: `Are ${hub.name} tours private?`, a: `Always, a single party with a dedicated chauffeur on the GPS-tracked Elite Fleet protocol. Never shared or pooled.` },
            { q: `Can I extend ${hub.name} into another region?`, a: `Yes, the same chauffeured fleet continues seamlessly. ${hub.name} routinely combines with the Golden Triangle (Delhi-Agra-Jaipur) and the wider Indian circuit.` },
            ...(hub.extraFaqs ?? []),
        ],
    };
}
