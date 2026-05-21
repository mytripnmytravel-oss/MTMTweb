// Blog cluster (grid H). Long-form pillar pieces — categorical and
// factual; no fabricated authors, quotes, or statistics. The 4 slugs
// matching the existing /blog hub are preserved; new pillars cover
// the highest-intent searches (best-time, visa, Ayurveda, comparison).
//
// Publisher = MyTripMyTravel Editorial Desk (the company is the named
// publisher — honest, not a fake personal byline).

export interface BlogSection {
    heading: string;
    paragraphs: string[];
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    /** Citation-ready answer block — first 200 words, direct. */
    answer: string;
    heroImg: string;
    category: string;
    datePublished: string; // ISO date
    dateModified: string; // ISO date
    readingMinutes: number;
    sections: BlogSection[];
    faqs: { q: string; a: string }[];
    related: { label: string; href: string }[];
    relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "golden-triangle-protocol",
        title: "The Golden Triangle Protocol: Executing the Perfect Route",
        excerpt:
            "Delhi → Agra → Jaipur reads simple on paper. Done well, it is a logistics problem most travellers underestimate. This is how MyTripMyTravel sequences it.",
        answer:
            "The Golden Triangle — Delhi, Agra, and Jaipur — is India's most popular tourist circuit, a roughly 720 km route connecting three cities of empire, art, and architecture. The optimal sequence is Delhi → Agra → Jaipur → Delhi: it starts at the main international gateway, routes the Agra–Jaipur leg via Fatehpur Sikri as a sightseeing drive rather than a transfer, and returns to Delhi for departure. Five to seven days is the sweet spot. The Taj Mahal is closed every Friday; itineraries must be built around it. October to March is the prime window; April to June is severe heat that requires dawn-only sightseeing. MyTripMyTravel runs the Triangle as a private, chauffeured, escorted mission — never a shared coach.",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg",
        category: "Itinerary Architecture",
        datePublished: "2026-05-21",
        dateModified: "2026-05-21",
        readingMinutes: 9,
        sections: [
            {
                heading: "Why the Golden Triangle in the first place",
                paragraphs: [
                    "The Golden Triangle is the most-travelled circuit in India for a reason: in roughly 720 km it spans three of the great chapters of the subcontinent's history — the layered Delhi of eight stacked capitals, the Mughal apex at Agra, and the Rajput Pink City of Jaipur. Compressing that range of architecture and culture into a single, drivable route is unusual anywhere in the world.",
                    "It is also a circuit that punishes a casual approach. The monuments are subject to opening hours, prayer closures, and crowd flows that materially change what you actually experience. The drive distances are forgiving on paper but unforgiving when timed against checkout, lunch, and a Taj sunrise window. The whole thing is engineered or it is endured.",
                ],
            },
            {
                heading: "The correct sequence: Delhi → Agra → Jaipur → Delhi",
                paragraphs: [
                    "Delhi is the entry point because it is the main international gateway (Indira Gandhi International, DEL); doing the Triangle in any other order forces an extra transfer and squanders the first day to logistics. From Delhi the route runs south to Agra on the Yamuna Expressway in about three and a half hours, west from Agra to Jaipur in about four and a half hours via Fatehpur Sikri (so the transfer becomes a UNESCO sightseeing leg), and back from Jaipur to Delhi for departure on NH-48 in around five hours.",
                    "Both the Friday Taj Mahal closure and the Monday Red Fort closure must be designed around. The Taj is the gravitational centre of the trip; a Friday lost to a closed Taj is a Friday wasted. Our itineraries treat these closures as fixed constraints, not surprises.",
                ],
            },
            {
                heading: "How many days is enough?",
                paragraphs: [
                    "Three days is possible as a high-efficiency sprint — essential Delhi, a sunrise Taj, and a fast Jaipur — but it leaves no recovery from the international flight and no margin for the surprises that always appear.",
                    "Five days is the balanced classic: one day in Delhi (Old + New, sequenced for the Friday/Monday closures), one and a half in Agra (sunrise Taj, Agra Fort, Fatehpur Sikri on the drive to Jaipur), and one and a half in Jaipur (Amer Fort early, the walled-city circuit, plus a slower afternoon).",
                    "Seven days adds room for an unhurried Delhi, a Mehtab Bagh sunset Taj counter-view, and either a Pushkar or Ranthambore extension off the Jaipur end. We rarely recommend ten days for the Triangle alone — at that length, extension into Rajasthan or the Himalayas is the better trip.",
                ],
            },
            {
                heading: "Timing — the season, the day, the hour",
                paragraphs: [
                    "October to March is the prime window: clear light, comfortable temperatures, and the cleanest air for photography. November to February is peak; book Taj sunrise slots and palace hotels well ahead. April to June is severe North India heat, frequently above 40°C, and is only advisable with an air-conditioned fleet and a strict dawn-only sightseeing protocol. July to September is the monsoon — quieter, greener, but variable visibility, with intermittent rather than constant rain.",
                    "Within the day, the prime hours are sunrise and the first 90 minutes after monument opening. Crowds at the Taj are decisively a function of how close to opening you arrive, not which day of the week — first light at the east gate is materially different from 10am at the same gate.",
                ],
            },
            {
                heading: "The vehicle question",
                paragraphs: [
                    "A private chauffeured vehicle is non-negotiable on the Triangle. Self-drive is uncommon for foreign travellers, the road etiquette is unforgiving, and the cumulative driving time across five days is real. The standard MyTripMyTravel deployment is an orthopedic-grade Innova Crysta for families and small parties, with elite-tier (BMW, Mercedes, Vellfire) on request — each GPS-tracked with a vetted chauffeur. Fuel, tolls, and permits are pre-calculated into the price; there are no surprise gate fees.",
                ],
            },
            {
                heading: "Where to extend",
                paragraphs: [
                    "The Triangle is naturally modular. From Agra, Khajuraho and Varanasi are reachable as eastern extensions. From Jaipur, Pushkar and Ranthambore are short southern extensions, with Udaipur and Jodhpur as deeper Rajasthan additions. From Delhi, Rishikesh and Amritsar are the obvious northern extensions. Modularity is the point: the Triangle is not the trip — it is the chassis of the trip.",
                ],
            },
        ],
        faqs: [
            { q: "Is the Golden Triangle worth doing as a first India trip?", a: "Yes — it covers more architectural and historical ground per kilometre than any other circuit in the country, and the logistics are mature. Done in 5–7 days with a private chauffeured operator, it is the highest-density introduction to North India." },
            { q: "Is the Taj Mahal closed any day?", a: "Yes — every Friday, for prayers. Plan around it; we do this automatically." },
            { q: "Should I tip the chauffeur and guides?", a: "It is customary but never obligatory. Service charges are not built into the trip; tipping is your discretion." },
            { q: "Is the Golden Triangle safe?", a: "Travelled with a vetted private operator — escort, chauffeur, curated stays — it is both safe and very well trodden. Navigation, vehicle staging, and crowd management are handled for you." },
        ],
        related: [
            { label: "Golden Triangle tours", href: "/tours/golden-triangle" },
            { label: "Agra brief", href: "/destinations/agra" },
            { label: "Taj Mahal guide", href: "/destinations/agra/monuments/taj-mahal" },
        ],
        relatedSlugs: ["best-time-to-visit-india", "golden-triangle-vs-rajasthan", "india-visa-and-entry-guide"],
    },
    {
        slug: "best-time-to-visit-india",
        title: "Best Time to Visit India: A Region-by-Region Calendar",
        excerpt:
            "There is no single best time for India — only the right time for the region you are travelling to. A real seasonal guide, not a generic one.",
        answer:
            "There is no single best time to visit India because the country spans climates from Himalayan altitude to tropical coast. As a rule, October to March is the prime window for North and Central India (Delhi, Agra, Jaipur, Rajasthan) and for the Kerala coast. April to June is high summer — punishing in the plains, but the peak window for the Himalaya (Shimla, Manali, Leh open progressively). July to September is the monsoon: heavy on the southwest coast and in the Western Ghats, lighter and intermittent in the North. The Andamans run on a slightly different calendar — October to May is reliable; June–September brings rough seas. Travelling deliberately to the right region in the right month is the actual answer.",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jodhpur-Mehrangarh_Fort-06-Blue_city-20131011.jpg",
        category: "Planning",
        datePublished: "2026-05-21",
        dateModified: "2026-05-21",
        readingMinutes: 8,
        sections: [
            {
                heading: "Why a single 'best time' answer is wrong",
                paragraphs: [
                    "India is not one climate. It is a subcontinent — Himalayan high country, the Indo-Gangetic plain, the desert states of the west, the spice-coast of the southwest, the tropical coast of Goa, and the equatorial Andamans. Any answer that says 'visit India in November' is hiding the question of which India.",
                    "The right approach is to choose the region you are travelling and read the calendar against it.",
                ],
            },
            {
                heading: "North India plains — Delhi, Agra, Jaipur, Rajasthan",
                paragraphs: [
                    "October to March is the prime window. November to February is peak: clear light, cool to comfortable days, the cleanest air of the year for photography. Demand on Taj sunrise slots and palace hotels is highest in these months; book well ahead.",
                    "April to June is severe heat that frequently exceeds 40°C. The circuit is still operable but requires dawn-only sightseeing and a strict climate-controlled fleet protocol. July to September is the monsoon — intermittent rather than constant rain in the North, with quieter monuments and dramatic light against the gardens. It is the lowest-crowd, lowest-price window with a real upside if you accept some weather flexibility.",
                ],
            },
            {
                heading: "The Himalaya — Shimla, Manali, Leh, Sikkim",
                paragraphs: [
                    "The lower hill stations (Shimla, Manali, Dharamshala, Mussoorie, Nainital) are at their best from March to June and September to November — comfortable spring and autumn windows that bookend the rainy and cold seasons.",
                    "Ladakh (Leh) is essentially a May-to-September destination. Outside that window the high passes close, the Manali–Leh and Srinagar–Leh roads seal, and only specialist winter itineraries operate. The first 24–36 hours in Leh must be a rest-and-acclimatise buffer regardless of season.",
                    "Sikkim — Gangtok, Pelling — is at its best from March to May and October to December. The monsoon carries landslide risk on the mountain roads, particularly into North Sikkim (Lachen, Lachung).",
                ],
            },
            {
                heading: "Kerala and the southwest coast",
                paragraphs: [
                    "October to March is the prime window for Kerala — calm backwaters for houseboat cruising, comfortable humidity, clear seas at Kovalam and Varkala. December to February is peak. The southwest monsoon (June to August) is heavy on the Kerala coast, and the conventional read is to avoid it.",
                    "There is an exception: the monsoon is the traditional Karkidaka Ayurveda treatment season. Serious wellness travellers deliberately choose July–August Kerala specifically for the rains.",
                ],
            },
            {
                heading: "The Andamans",
                paragraphs: [
                    "The Andamans run on their own calendar. October to May is the reliable window: calm seas, strong ferry frequency, excellent dive visibility. December to April is peak. The southwest monsoon (June–September) brings rough seas that disrupt inter-island transfers and water activities; we generally do not run Andaman missions in that window.",
                ],
            },
            {
                heading: "Festival timing",
                paragraphs: [
                    "Major festivals follow the lunar calendar and shift by year — Diwali (October/November), Holi (March), the Pushkar Camel Fair (around Kartik Purnima, October/November), the Jaisalmer Desert Festival (February). If a festival is the reason for the trip, work backwards from its date for that year rather than choosing the month first.",
                ],
            },
        ],
        faqs: [
            { q: "What is the single best month to visit India?", a: "There isn't one. November and February are strong general defaults for North India and Kerala, but the Himalaya and Andamans run on different calendars." },
            { q: "Is the monsoon a bad time to visit India?", a: "Not uniformly. The southwest coast is heavy; the North is intermittent and quietly beautiful. Pick the region to the season, not the season to a wishlist." },
            { q: "When is the Taj Mahal best?", a: "Clear winter mornings, October through February, at sunrise. The marble's rose-to-white transition is the experience; arriving at opening is the difference between seeing the Taj and being processed past it." },
            { q: "Can I visit Ladakh in winter?", a: "Specialist winter itineraries operate (frozen-river treks, monastic stays), but the standard travel season is May to September. The first 24–36 hours in Leh must be a rest buffer regardless of season." },
        ],
        related: [
            { label: "Destination archive", href: "/destinations" },
            { label: "Golden Triangle by month", href: "/tours/golden-triangle/in-month/november" },
            { label: "FAQ — best time", href: "/faq/best-time" },
        ],
        relatedSlugs: ["golden-triangle-protocol", "india-visa-and-entry-guide"],
    },
    {
        slug: "india-visa-and-entry-guide",
        title: "India Visa & Entry: A Plain-English Practical Guide",
        excerpt:
            "What the India e-Visa actually is, who can use it, and the practical entry steps. Plain language, no false specifics — and where to verify before you travel.",
        answer:
            "Most foreign nationals require a visa to enter India. The most common option for travellers is the India e-Visa (electronic tourist visa), applied for online before departure on the official Government of India indianvisaonline portal. Eligibility, the validity bands (typically 30-day, one-year, or five-year tourist e-Visas), and the fee vary by passport — and they change. The official portal is the only authoritative source for current rules; agents are not. On arrival, you present the e-Visa printout and passport at the immigration desk at major airports (DEL, BOM, MAA, BLR, COK, HYD and others). Visa-on-arrival exists for very few nationalities. MyTripMyTravel's concierge advises on the current process for your specific passport during planning but does not file the visa for you.",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Humayun%27s_Tomb%2C_Delhi.jpg",
        category: "Planning",
        datePublished: "2026-05-21",
        dateModified: "2026-05-21",
        readingMinutes: 7,
        sections: [
            {
                heading: "What is the India e-Visa?",
                paragraphs: [
                    "The India e-Visa is an electronic visa applied for online before travel via the official Government of India portal. It is the route most foreign tourists use to enter the country.",
                    "There are several e-Visa categories — tourist, business, medical, conference — and within tourist there are typically several validity bands (commonly 30-day, one-year, and five-year). What you are eligible for, and what each band allows in terms of stay length and number of entries, depends on your nationality and the current rules. Those rules change. The official portal — indianvisaonline.gov.in — is the only authoritative source.",
                ],
            },
            {
                heading: "Who can apply",
                paragraphs: [
                    "Citizens of most major travel-market countries are eligible for the India e-Visa, including most of the EU, the UK, the US, Canada, Australia, New Zealand, the GCC, Japan, Singapore, and many others. A small list of nationalities is ineligible and must apply for a paper visa at an Indian mission. Visa-on-arrival exists but is restricted to very few passport types.",
                    "This article is not an eligibility ruling. Confirm your eligibility on the official portal before booking flights.",
                ],
            },
            {
                heading: "Practical steps and timing",
                paragraphs: [
                    "Apply at least a week before travel, longer if possible. The portal asks for passport details, recent travel history, your Indian address (typically your first night's hotel), and a digital passport photo and biographic-page scan to its current spec.",
                    "Print the e-Visa approval and carry it with you. On arrival at the immigration desk, present passport and the printed e-Visa. Approval emails are not a substitute. Biometric capture happens at the desk.",
                ],
            },
            {
                heading: "What an e-Visa permits",
                paragraphs: [
                    "An e-Visa is generally for tourism, certain types of business meetings, short medical visits, or specified conferences. It is not work authorisation. Stay limits per visit, and total stay-in-year limits, vary by visa band and nationality — read your specific approval, do not assume.",
                    "Protected and restricted area permits (PAP/RAP) — for North Sikkim, the Andamans, parts of Arunachal Pradesh, Nubra/Pangong in Ladakh, and others — are separate and additional. We arrange them where applicable.",
                ],
            },
            {
                heading: "Common mistakes",
                paragraphs: [
                    "The most frequent mistakes we see: applying through a third-party agent site rather than the official portal (paying more, sometimes getting incorrect filings); leaving the application too late and trying to push it through; uploading a photo that fails the portal's spec and getting a delay; assuming a passport with less than six months' validity will be accepted (it usually will not).",
                    "If anything is unclear, ask the concierge during planning. We do not file your visa for you — that step is yours — but we will tell you straightforwardly what the current process looks like for your passport.",
                ],
            },
        ],
        faqs: [
            { q: "Do I need a visa to visit India?", a: "Most foreign nationals do. The India e-Visa, applied for online before departure on the official Government of India portal, is the most common route for tourists." },
            { q: "How long does the India e-Visa take?", a: "Often a few business days; apply at least a week ahead to be safe." },
            { q: "Is the India e-Visa applied through MyTripMyTravel?", a: "No — you apply yourself on the official portal. Our concierge advises on the current process for your passport during planning." },
            { q: "Do I need a separate permit for the Andamans or North Sikkim?", a: "Yes — those regions require Protected/Restricted Area Permits in addition to your visa. We arrange those where applicable." },
        ],
        related: [
            { label: "FAQ — Planning & Visa", href: "/faq/planning-and-visa" },
            { label: "Begin a mission brief", href: "/booking" },
        ],
        relatedSlugs: ["golden-triangle-protocol", "best-time-to-visit-india"],
    },
    {
        slug: "silent-havelis-reset",
        title: "Silent Havelis: A Slower Approach to Recovery Travel",
        excerpt:
            "What \"recovery travel\" actually means when designed properly — paced itineraries, controlled environments, and the difference from a spa weekend.",
        answer:
            "Recovery travel is a deliberate, paced itinerary structured around restoration rather than sightseeing — controlled environments (heritage havelis, sea-facing or backwater wellness resorts, Himalayan retreats), reduced daily movement, integration of practitioner-led Ayurveda or yoga, and a fleet/logistics layer that absorbs friction. It is distinct from a spa weekend in that it is multi-day, supervised where appropriate, and architected. MyTripMyTravel's Medical Sanctuary pathway runs recovery, post-procedure, and decompression travel with paced logistics, accessible stays, dietary planning, and coordination with care teams. The standard is invisible logistics and a remembered experience — the opposite of a 'tour'.",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Yoga_Meditation%2C_Rishikesh.jpg",
        category: "Wellness",
        datePublished: "2026-05-21",
        dateModified: "2026-05-21",
        readingMinutes: 7,
        sections: [
            {
                heading: "What recovery travel actually is",
                paragraphs: [
                    "Recovery travel is a multi-day trip whose primary objective is restoration — physical, mental, or both — rather than coverage. The itinerary is architected backward from that objective: fewer destinations, slower transitions, controlled environments, and a supporting wellness layer.",
                    "It is not a spa weekend. A spa weekend is a treatment trip; recovery travel is a recovery-shaped itinerary, often paired with treatments but not defined by them.",
                ],
            },
            {
                heading: "Who it is for",
                paragraphs: [
                    "Three traveller profiles regularly choose this register: post-procedure travellers with clearance from their care team who want India's hospitality without the burden of normal logistics; long-haul exhausted leaders and creatives who need an enforced down-regulation rather than another optimisation; and serious wellness travellers who treat Ayurveda or yoga as a discipline rather than an amenity.",
                    "Each gets a different itinerary architecture, but they share the same principle: pace over coverage.",
                ],
            },
            {
                heading: "The environments that work",
                paragraphs: [
                    "Heritage havelis in Rajasthan offer the silent-courtyard register — intimate, deeply quiet, contained — that suits decompression. Lakefront and clifftop resorts in Kerala (Kumarakom on Vembanad, Varkala on the Arabian Sea) anchor structured Ayurveda programmes with serious physician-led delivery. Rishikesh and the Garhwal foothills provide the contemplative end with vetted yoga and meditation teachers.",
                    "What these have in common is that the environment does the work the itinerary cannot. Recovery is not driven by activities; it is permitted by surroundings.",
                ],
            },
            {
                heading: "Logistics that matter (more than usual)",
                paragraphs: [
                    "Recovery itineraries are unusually sensitive to friction. The transitions between legs, the loading and unloading of luggage, the seating ergonomics of the vehicle, the arrival check-in, the dietary expectations — each of these compounds if mishandled and can erase a day of progress.",
                    "We handle the logistics layer pre-emptively rather than reactively: vehicle ingress and posture support engineered to the traveller (notably for post-op cases), accessible accommodation, pre-arranged dietary, and pacing that builds in real rest rather than tokenistic free time.",
                ],
            },
            {
                heading: "What this category does not do",
                paragraphs: [
                    "It does not deliver medical care. The wellness layer is wellness — Ayurveda, yoga, supportive bodywork; not a substitute for the home care team that holds clinical responsibility. For post-procedure travel we coordinate with that team but do not replace it.",
                    "It also does not promise outcomes. The honest claim is environment, pacing, and removal of friction. The rest is biology.",
                ],
            },
        ],
        faqs: [
            { q: "Is recovery travel safe after surgery?", a: "It can be, with explicit medical clearance from your home care team and a logistics layer engineered for the recovery. We coordinate with your team but do not provide medical care." },
            { q: "How is this different from a spa retreat?", a: "It is a multi-day, itinerary-level architecture rather than a treatment package. The environments, pacing, and logistics are designed for recovery; treatments support that, but they are not the product." },
            { q: "Which destinations are best?", a: "Heritage havelis in Rajasthan for decompression, Kerala (Kumarakom, Varkala, Kovalam) for structured Ayurveda, Rishikesh for yoga and meditation." },
        ],
        related: [
            { label: "Medical Sanctuary", href: "/wellness" },
            { label: "Ayurvedic restoration", href: "/wellness/ayurvedic" },
            { label: "Rishikesh", href: "/destinations/rishikesh" },
        ],
        relatedSlugs: ["ayurveda-in-india-real-vs-spa", "golden-triangle-protocol"],
    },
    {
        slug: "architecting-royal-wedding",
        title: "Architecting a Royal Wedding in India: The 6-Month Lead Time",
        excerpt:
            "How a destination wedding in a palace, fort, or lake-palace setting actually gets built — venue first, then design, then logistics. Read this six months out.",
        answer:
            "A royal destination wedding in India — palace, fort, lake-palace, or desert-camp setting — typically requires a six-month lead time minimum, and longer for the largest venues. The order of operations matters: venue securing comes first (heritage palaces and lake-palaces are limited and exclusive), then design and run-of-show, then guest logistics. Operationally a royal wedding is a multi-day production with multi-property room blocks, a GPS-tracked convoy, choreographed event flow across mehndi/sangeet/ceremony/reception, and a single accountable mission lead. MyTripMyTravel's weddings wing runs this end to end — venue, decor, dining, fleet, contingency — under one production owner.",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Lake_Palace_Udaipur.jpg",
        category: "Weddings",
        datePublished: "2026-05-21",
        dateModified: "2026-05-21",
        readingMinutes: 9,
        sections: [
            {
                heading: "Why six months is the floor",
                paragraphs: [
                    "Royal-venue weddings in India are limited supply meeting unlimited demand. The Udaipur lake palaces, the headline Rajasthan palace hotels, the major fort venues — none are bookable on a normal hotel timeline. Add a multi-day event spec (mehndi, sangeet, ceremony, reception) and the venue calendar tightens further.",
                    "Six months is the practical floor for a classic 50–150 guest wedding at a strong venue. Larger productions or marquee venue buyouts are commonly committed twelve to eighteen months ahead. Smaller, intimate weddings at havelis can compress to three or four months when the dates are flexible.",
                ],
            },
            {
                heading: "Order of operations: venue, design, logistics",
                paragraphs: [
                    "Venue is the first move. Everything else — decor, dining, fleet, guest logistics — is designed against the venue's real constraints (capacity ceilings, permissible event zones, access windows, weather fallback for open-air staging). Designing first and venue-hunting after is the most common cause of last-minute compromises.",
                    "Design follows: the multi-day run-of-show, decor and mandap framework, dining per function, performance and entertainment. The principle is heritage-led — amplify the venue, do not overlay a generic theme.",
                    "Logistics is third in order but first in failure-risk: room blocks, arrival sequencing, the convoy fleet, encrypted coordination at scale, and a contingency plan that has redundancy in it rather than aspiration.",
                ],
            },
            {
                heading: "Venue archetypes",
                paragraphs: [
                    "Lake palace — Udaipur. The most-requested setting, the most logistically demanding because everything moves by boat. Limited venues, the highest lead time.",
                    "Fort — Jaipur (Amer environs) and Jodhpur (Mehrangarh setting). Grandeur on a scale modern venues cannot match; constrained by protected-monument access and capacity ceilings.",
                    "Heritage haveli — the intimate end of the spectrum, ideal for up to ~150 guests, where atmosphere and design outweigh scale. Found across Rajasthan's heritage cities.",
                    "Desert camp — the Thar near Jaisalmer or Jodhpur. The most cinematic and the most operationally complex — the venue is built from nothing, then struck.",
                ],
            },
            {
                heading: "Scale changes the production",
                paragraphs: [
                    "An intimate wedding under 50 guests is not a scaled-down large wedding; it is a different product, optimised for closeness and craft. A classic 50–150 is the most common band, with full multi-event choreography at a single property. A grand 150–400 is full convoy and multi-property operation; a royal 400+ is venue buyouts and encrypted logistics sync, run as a production with dedicated event command.",
                ],
            },
            {
                heading: "What sits under one owner",
                paragraphs: [
                    "Single-accountable production matters because destination weddings fail on the seams between elements, not on any single element. The MyTripMyTravel weddings wing owns the full layer cake — venue, decor, dining, fleet, contingency — and integrates with the family's people and any external creative.",
                    "The objective is that the family experiences the wedding rather than running it.",
                ],
            },
        ],
        faqs: [
            { q: "How far in advance should I plan a destination wedding in India?", a: "Six months minimum for a classic 50–150 guest wedding at a strong venue; 12–18 months for large productions or marquee venue buyouts; 3–4 months can work for intimate havelis with flexible dates." },
            { q: "Which is the best place for a destination wedding in India?", a: "Udaipur for lake palaces, Jaipur and Jodhpur for forts, the Thar near Jaisalmer for desert camps. We match the venue to guest count and dates." },
            { q: "Do you handle the entire production?", a: "Yes — venue, decor, dining, fleet, and contingency under one accountable mission lead, integrated with the family's own people and any external creative." },
            { q: "Can you accommodate dietary needs across hundreds of guests?", a: "Yes — vegetarian, Jain, allergy, and religious requirements are planned across the whole guest manifest in advance and confirmed at a private tasting." },
        ],
        related: [
            { label: "Royal Weddings", href: "/weddings" },
            { label: "Wedding venues", href: "/weddings/venues" },
            { label: "Udaipur", href: "/destinations/udaipur" },
        ],
        relatedSlugs: ["golden-triangle-protocol", "best-time-to-visit-india"],
    },
    {
        slug: "panthera-safari-mission",
        title: "The Panthera Mission: Tiger Safaris That Earn Their Sightings",
        excerpt:
            "How a real tiger-safari itinerary at Ranthambore is engineered — multiple drives, vetted naturalists, zone strategy, and the honest read on sightings.",
        answer:
            "Tiger sightings at Ranthambore National Park in Rajasthan — one of the best places in the world to see wild Bengal tigers — are never guaranteed by any operator. They are made more likely by the right approach: multiple drives across multiple days (three to four is the standard), zone allocation strategy, vetted naturalist guides, and timing that respects the seasonal concentration of wildlife near water. MyTripMyTravel operates Ranthambore as a 2-night minimum mission with luxury jungle-lodge stays, privately arranged game drives, and a heritage counterpoint at the UNESCO Ranthambore Fort. The honest claim is that we maximise probability, not that we deliver sightings.",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Ranthambore_Tiger.jpg",
        category: "Wildlife",
        datePublished: "2026-05-21",
        dateModified: "2026-05-21",
        readingMinutes: 8,
        sections: [
            {
                heading: "What an operator can and cannot promise",
                paragraphs: [
                    "No operator anywhere in the world can guarantee a wild tiger sighting. Anyone who promises one is misleading you. What can be promised is probability — and at Ranthambore, with the right approach, the probability is among the highest of any wild-tiger reserve on the planet.",
                    "The honest framing matters because it sets expectations correctly. A trip designed around 'we will see a tiger' carries disappointment risk. A trip designed around 'we will give ourselves the best possible chance, in a beautiful reserve, with serious history alongside it' is a trip that succeeds even when the cat does not appear.",
                ],
            },
            {
                heading: "How sightings are made more likely",
                paragraphs: [
                    "Multiple drives. One safari is a coin flip. Three or four drives over two or three days materially shift the odds, because each drive samples a different time of day and (with zone strategy) a different part of the reserve.",
                    "Zone allocation. Ranthambore is divided into safari zones, allocated in a partly random system. A good operator plays the zone permutations across the drives to cover the reserve, rather than gambling on a single 'best' zone.",
                    "Vetted naturalists. The difference between a generalist guide and a serious naturalist who reads alarm calls, knows individual tigers, and recognises the moisture patterns wildlife concentrates around is the difference between a missed sighting and a witnessed one.",
                    "Timing. April to June is hot but is the highest-sighting window because animals concentrate at water. October to April is the comfort-and-cover compromise. The park closes its core zones during the monsoon (July–September).",
                ],
            },
            {
                heading: "The heritage counterpoint",
                paragraphs: [
                    "Ranthambore is unusual in that the reserve contains a great fort. The UNESCO-listed Ranthambore Fort — a 10th-century hill fort inside the national park — is a serious heritage site in its own right and shifts the trip from 'wildlife only' to 'wildlife and history'. We sequence the fort visit as a midday heritage interlude between the morning and afternoon drives, with an expert guide for the Chauhan history.",
                    "This is the structural difference between Ranthambore and most other wild-tiger reserves: even when the tiger does not appear, the trip has more than one reason for being.",
                ],
            },
            {
                heading: "Where to stay and how long",
                paragraphs: [
                    "Two nights is the minimum that delivers a real four-drive plan; three nights is the unhurried version. The accommodation layer ranges from luxury jungle lodges and tented camps near the park gates to palace-resort heritage stays with spa wings — the right choice depends on whether you want the wildlife immersion deeper or the comfort base softer.",
                    "Either way, the lodge is part of the mission. A naturalist debrief over dinner, a bush-dining evening, and the dawn briefing all happen there.",
                ],
            },
            {
                heading: "How it fits an itinerary",
                paragraphs: [
                    "Ranthambore is roughly 180 km from Jaipur — about three and a half hours by chauffeured fleet. It slots cleanly into a Golden Triangle extension as the wildlife leg, or as a southern Rajasthan link between Jaipur and Udaipur with a Bundi heritage stop along the way.",
                ],
            },
        ],
        faqs: [
            { q: "Are tiger sightings guaranteed at Ranthambore?", a: "No — no operator anywhere can guarantee a wild tiger sighting. Ranthambore has among the highest probabilities in the world, but probability is the honest claim, not guarantee." },
            { q: "How many safaris should I do?", a: "Three to four drives across two to three days is the standard. One safari is a coin flip; multiple drives materially shift the odds." },
            { q: "When is the park closed?", a: "Core zones close during the monsoon, roughly July through September. The reserve is best October to April for comfort, with April–June being the highest-sighting window but the hottest." },
            { q: "Can the fort be combined with safaris?", a: "Yes — the UNESCO Ranthambore Fort sits inside the reserve and is sequenced as a midday heritage interlude between morning and afternoon drives." },
        ],
        related: [
            { label: "Ranthambore brief", href: "/destinations/ranthambore" },
            { label: "Ranthambore Fort", href: "/destinations/ranthambore/monuments/ranthambore-fort" },
            { label: "Rajasthan Escapes", href: "/destinations/region/rajasthan" },
        ],
        relatedSlugs: ["golden-triangle-protocol", "best-time-to-visit-india"],
    },
    {
        slug: "ayurveda-in-india-real-vs-spa",
        title: "Ayurveda in India: Real, Physician-Led vs Spa-Style — How to Tell the Difference",
        excerpt:
            "The honest distinction between authentic, physician-led Ayurveda and the spa-branded version that uses the word. How to tell, where it actually exists.",
        answer:
            "Authentic Ayurveda is a physician-led, classical Indian medical system, delivered by qualified Vaidyas at established centres — most credibly in Kerala — with assessment, dosha-specific oils, supervised therapy, and treatment programmes that run for clinically meaningful lengths (Panchakarma minimum ~14 days, Rasayana 14–28). Spa-style 'Ayurveda' is a different product: a single oil massage labelled with a Sanskrit name, often unsupervised, in 60-minute formats — restful, not medical. The distinction matters because the real version requires time, residential commitment, and physician contact; the marketing version requires a credit card. Both have a place, but conflating them does the tradition a disservice.",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Backwaters_of_Alleppey.jpg",
        category: "Wellness",
        datePublished: "2026-05-21",
        dateModified: "2026-05-21",
        readingMinutes: 8,
        sections: [
            {
                heading: "What Ayurveda actually is",
                paragraphs: [
                    "Ayurveda is a classical Indian medical system with thousands of years of textual tradition. In its authentic form it is delivered by qualified physicians (Vaidyas) trained at recognised institutions, who assess each patient — Prakriti (constitution), Vikriti (current imbalance), Agni (digestive fire), and other parameters — and prescribe therapies based on that assessment.",
                    "It is a system in the technical sense: assessment, diagnosis, prescription, supervision, follow-up. The hour-long 'Ayurvedic massage' menu in a hotel spa is not that system. It may borrow language and oils from Ayurveda; it does not contain its medical structure.",
                ],
            },
            {
                heading: "Authentic markers — how to tell",
                paragraphs: [
                    "First, there is an actual physician. You meet them, they assess you, they prescribe. If there is no Vaidya — only a therapist — it is bodywork, not Ayurveda.",
                    "Second, the programme has a meaningful length. Authentic Panchakarma (the classical five-action purification) runs a minimum of around 14 days and more commonly 21–28. Rasayana rejuvenation runs 14–28. A '3-day Panchakarma' is a spa adaptation; the real therapy does not fit in three days.",
                    "Third, it is residential and supervised. The centres that deliver classical Ayurveda are residential by design; they require dietary control, daily contact, and progression. They cannot be delivered alongside a normal sightseeing itinerary.",
                    "Fourth, the centre has credentials. In India, recognised hospital-grade Ayurveda centres are typically registered under the AYUSH ministry framework. Reputable centres make their physicians' qualifications visible.",
                ],
            },
            {
                heading: "Where it credibly exists",
                paragraphs: [
                    "Kerala is the heart of credible Ayurveda in India. The tradition is intact in family lineages, the established centres around Kochi, Kumarakom, Kovalam, and Trivandrum run physician-led residential programmes, and the climate — particularly during the monsoon — is traditionally considered favourable for Karkidaka treatment.",
                    "Outside Kerala, credible centres exist (parts of Rishikesh, dedicated centres in Karnataka, some Himalayan retreats) but they are exceptions to vet individually. The default assumption for a Western traveller seeking real Ayurveda should be Kerala.",
                ],
            },
            {
                heading: "What spa-style Ayurveda is for",
                paragraphs: [
                    "Spa-style Ayurveda — Abhyanga oil massages on a luxury-hotel menu, an hour-long Shirodhara as part of a stay — is not bad; it is just not medical. Done by a competent therapist with quality oils, it is restorative bodywork that uses Ayurvedic ingredients. As a relaxation amenity within a normal trip, it has a clear place.",
                    "The mistake is expecting medical outcomes from it. The mistake on the other side is dismissing classical Ayurveda because the spa version felt thin.",
                ],
            },
            {
                heading: "How MyTripMyTravel handles it",
                paragraphs: [
                    "Our wellness sanctuary wing distinguishes the two registers explicitly. For travellers wanting classical Ayurveda we place them in physician-led Kerala centres at clinically meaningful durations. For travellers wanting Ayurveda-flavoured spa work as part of a broader trip we arrange that separately and call it what it is.",
                    "Honest naming protects both: the tradition stays serious, and the spa version stays useful.",
                ],
            },
        ],
        faqs: [
            { q: "Where is authentic Ayurveda found in India?", a: "Kerala is the credible heart — Kochi, Kumarakom, Kovalam, and Trivandrum host established physician-led residential centres. Credible centres exist elsewhere but are exceptions to vet." },
            { q: "How long does authentic Panchakarma take?", a: "A minimum of around 14 days, more commonly 21–28. Shorter offerings labelled 'Panchakarma' are spa adaptations of the term." },
            { q: "Can I do real Ayurveda alongside a Golden Triangle trip?", a: "Not really — classical programmes are residential, supervised, and require dietary control. They displace a sightseeing itinerary, not sit alongside one." },
            { q: "Is spa-style Ayurveda worthless?", a: "No — as relaxation bodywork it has a clear place. The mistake is expecting medical outcomes from it." },
        ],
        related: [
            { label: "Ayurvedic restoration", href: "/wellness/ayurvedic" },
            { label: "Panchakarma", href: "/wellness/ayurvedic/panchakarma" },
            { label: "Kumarakom", href: "/destinations/kumarakom" },
        ],
        relatedSlugs: ["silent-havelis-reset", "best-time-to-visit-india"],
    },
    {
        slug: "golden-triangle-vs-rajasthan",
        title: "Golden Triangle vs Full Rajasthan: How to Choose",
        excerpt:
            "When the Triangle is enough, when Rajasthan is what you actually want, and how to combine them. The honest framework for a first or second India trip.",
        answer:
            "The Golden Triangle (Delhi, Agra, Jaipur) is the right choice for a first India trip of 5–7 days, where the priority is the iconic monuments and high-density introduction. Full Rajasthan (which typically includes Udaipur, Jodhpur, Jaisalmer, and Pushkar or Ranthambore) is the right choice for 10–14 days where the priority is depth and texture over coverage of the most-photographed sites. The two overlap at Jaipur; Rajasthan is the Triangle plus four to five more cities. Most travellers benefit from doing the Triangle on the first trip and full Rajasthan on the second — the contrast is sharper that way. MyTripMyTravel routinely combines them into single 10–14 day missions when the dates allow.",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jodhpur-Mehrangarh_Fort-06-Blue_city-20131011.jpg",
        category: "Comparison",
        datePublished: "2026-05-21",
        dateModified: "2026-05-21",
        readingMinutes: 7,
        sections: [
            {
                heading: "The honest difference between the two trips",
                paragraphs: [
                    "The Golden Triangle is dense. In 5–7 days it covers more iconic architecture — the Taj Mahal, Agra Fort, Fatehpur Sikri, the Red Fort and Humayun's Tomb in Delhi, Amer Fort and the Jaipur palaces — than most circuits anywhere in the world deliver in the same window.",
                    "Full Rajasthan trades density for texture. The same 7 days inside Rajasthan would cover Udaipur (lake palaces) and Jodhpur (Mehrangarh Fort) deeply, with Jaisalmer's desert and a Pushkar or Ranthambore extension to spare. The trip is less about the most-photographed sites and more about the lived texture of the state — palace hotels, royal kitchens, the colour of the cities, the desert.",
                ],
            },
            {
                heading: "When the Triangle is enough",
                paragraphs: [
                    "First India trip with 5–7 days. The priority is the iconic experience — a sunrise Taj, the Red Fort, Amer Fort — and a sense of the country's range. A 5-day Golden Triangle plus an arrival night and a departure day is a complete trip.",
                    "Time-constrained, but want headline sites. The Triangle is the highest density of headline India per kilometre.",
                ],
            },
            {
                heading: "When Rajasthan is what you actually want",
                paragraphs: [
                    "Second India trip — you have done the Triangle and want depth rather than coverage. Rajasthan rewards a slower itinerary and the texture is layered (Marwari Jodhpur is genuinely different from Mewari Udaipur is genuinely different from Thar Jaisalmer).",
                    "Specific interest in palace hotels, royal weddings, Indian luxury at scale. Rajasthan is where India's heritage-hotel layer is deepest and most distinctive.",
                    "10–14 days with a preference for fewer cities, more time per city. Rajasthan rewards that pacing; the Triangle compressed into the same time becomes a tour-bus pace at half-day intervals.",
                ],
            },
            {
                heading: "How to combine them in one trip",
                paragraphs: [
                    "A 10–14 day mission can comfortably hold the Triangle plus Udaipur and Jodhpur. The route runs Delhi → Agra → Jaipur (Triangle core), then onward to Pushkar, Jodhpur, and Udaipur, with the option of a Ranthambore wildlife leg from Jaipur en route to Jodhpur.",
                    "We rarely recommend doing the Triangle plus full Rajasthan (including Jaisalmer) in under 14 days — at that length, fatigue accumulates and the depth that makes Rajasthan worthwhile starts to thin.",
                ],
            },
            {
                heading: "Where Rajasthan extends beyond the obvious",
                paragraphs: [
                    "The marquee circuit (Udaipur, Jodhpur, Jaisalmer) is paired with quieter but real heritage: Bundi (painted palaces and stepwells), Chittorgarh (the largest fort in India), Bikaner (the never-conquered fort and the Camel Fair). These are the trips where Rajasthan stops being a list of fort cities and becomes a region.",
                ],
            },
        ],
        faqs: [
            { q: "Is the Golden Triangle enough for a first India trip?", a: "Often yes — 5–7 days of Delhi, Agra, and Jaipur covers more iconic ground per kilometre than any other route, and arrival fatigue is real. Save Rajasthan for a second trip, or combine in 10–14 days." },
            { q: "How long for full Rajasthan?", a: "10–14 days for the marquee circuit (Udaipur, Jodhpur, Jaisalmer with Pushkar and either Ranthambore or Bundi). The Triangle plus full Rajasthan fits in 14 days; less and depth thins." },
            { q: "What's the route order?", a: "Delhi → Agra → Jaipur → Pushkar → Jodhpur → Udaipur is the standard chained order, returning to Delhi for departure (or flying out of Udaipur)." },
        ],
        related: [
            { label: "Rajasthan Escapes", href: "/destinations/region/rajasthan" },
            { label: "Udaipur", href: "/destinations/udaipur" },
            { label: "Golden Triangle hub", href: "/tours/golden-triangle" },
        ],
        relatedSlugs: ["golden-triangle-protocol", "best-time-to-visit-india"],
    },
];

// ---- Accessors ----

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return blogPosts.map((p) => p.slug);
}

export function getRelatedBlogPosts(slug: string): BlogPost[] {
    const post = getBlogPost(slug);
    if (!post) return [];
    return post.relatedSlugs
        .map((s) => getBlogPost(s))
        .filter((p): p is BlogPost => Boolean(p));
}
