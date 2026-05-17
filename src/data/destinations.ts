// Destinations data layer — the canonical content source for the
// /destinations cluster. Hand-authored Premium-tier entries.
// Each Destination is rendered server-side with metadata + JSON-LD.

export interface QuickFact {
    label: string;
    value: string;
}

export interface ThingToDo {
    name: string;
    blurb: string;
    category: "Heritage" | "Nature" | "Culture" | "Cuisine" | "Adventure" | "Wellness";
}

export interface FAQ {
    q: string;
    a: string;
}

export interface TransitMode {
    mode: "Air" | "Rail" | "Road" | "Private Fleet";
    detail: string;
}

export interface StayTier {
    tier: string;
    detail: string;
}

export interface DiningPick {
    name: string;
    detail: string;
}

export interface RelatedLink {
    label: string;
    href: string;
}

export interface Region {
    slug: string;
    name: string;
    tagline: string;
    heroImg: string;
    blurb: string;
    citySlugs: string[];
}

export interface Destination {
    slug: string;
    name: string;
    region: string;
    regionSlug: string;
    state: string;
    tagline: string;
    heroImg: string;
    coordinates: { lat: number; lng: number };
    /** The Answer Block — a direct, citation-ready summary in the first 200 words. */
    answer: string;
    /** Editorial body. Each string is one paragraph. No length ceiling. */
    intro: string[];
    quickFacts: QuickFact[];
    bestTime: { window: string; narrative: string };
    thingsToDo: ThingToDo[];
    howToReach: TransitMode[];
    whereToStay: StayTier[];
    whereToEat: DiningPick[];
    faqs: FAQ[];
    /** Slugs of sibling destinations for interlinking. */
    relatedCities: string[];
    /** Cross-cluster links (tours, wellness, fleet). */
    relatedTours: RelatedLink[];
}

export const regions: Region[] = [
    {
        slug: "golden-triangle",
        name: "Golden Triangle",
        tagline: "Delhi · Agra · Jaipur",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg",
        blurb: "The definitive first circuit of India — three capitals of empire, art, and architecture connected by a single chauffeured arc.",
        citySlugs: ["delhi", "agra", "jaipur"],
    },
    {
        slug: "rajasthan",
        name: "Rajasthan Escapes",
        tagline: "Udaipur · Jodhpur · Jaisalmer",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jodhpur-Mehrangarh_Fort-06-Blue_city-20131011.jpg",
        blurb: "Deep immersions into the royal heartland — lake palaces, blue cities, and the last great desert forts of the Thar.",
        citySlugs: ["udaipur", "jodhpur", "jaisalmer", "pushkar", "ranthambore"],
    },
    {
        slug: "kerala",
        name: "Kerala Backwaters",
        tagline: "Alleppey · Munnar · Kochi",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Backwaters_of_Alleppey.jpg",
        blurb: "Lush, tropical ecosystems engineered for complete down-regulation — houseboats, tea estates, and spice-coast heritage.",
        citySlugs: ["alleppey", "munnar", "kochi", "kovalam", "thekkady"],
    },
    {
        slug: "himalayas",
        name: "Himalayan Peaks",
        tagline: "Shimla · Manali · Leh",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Sam_Sand_Dunes_Jaisalmer.jpg",
        blurb: "High-altitude missions for spiritual and physical clarity, staged through colonial hill stations and Trans-Himalayan passes.",
        citySlugs: ["shimla", "manali", "leh", "rishikesh", "dharamshala"],
    },
    {
        slug: "sikkim",
        name: "Sikkim Silk Route",
        tagline: "Gangtok · Pelling · Tsomgo",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tsomgo_Lake%2C_Sikkim.jpg",
        blurb: "Exclusive access to the ancient high-frequency trade paths of the eastern Himalaya, monasteries, and alpine lakes.",
        citySlugs: ["gangtok", "pelling", "lachung"],
    },
    {
        slug: "andaman",
        name: "Andaman Islands",
        tagline: "Port Blair · Havelock · Neil",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/71/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman%2C_India.jpg",
        blurb: "Private island sanctuaries and ultra-luxury marine operations across the Bay of Bengal archipelago.",
        citySlugs: ["port-blair", "havelock", "neil"],
    },
];

export const destinations: Destination[] = [
    {
        slug: "agra",
        name: "Agra",
        region: "Golden Triangle",
        regionSlug: "golden-triangle",
        state: "Uttar Pradesh",
        tagline: "The Eternal City of the Taj",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg",
        coordinates: { lat: 27.1751, lng: 78.0421 },
        answer:
            "Agra is a city in Uttar Pradesh, India, on the banks of the Yamuna river, and the home of the Taj Mahal — the marble mausoleum commissioned by Mughal emperor Shah Jahan in 1632. Agra holds three UNESCO World Heritage Sites: the Taj Mahal, Agra Fort, and nearby Fatehpur Sikri. It sits roughly 230 km south of Delhi and 240 km east of Jaipur, forming the eastern vertex of India's Golden Triangle. The optimal visit is a chauffeured one- or two-night stay timed for a sunrise entry to the Taj, when the marble shifts through rose, gold, and white. MyTripMyTravel operates Agra as a precision mission: skip-the-line monument access, an orthopedic-grade fleet for the Delhi–Agra–Jaipur arc, and heritage dining inside restored havelis.",
        intro: [
            "Agra is not a stop. It is the reason the Golden Triangle exists. Every itinerary that matters in northern India bends toward this single bank of the Yamuna, where the Taj Mahal has stood for nearly four centuries as the most photographed building on earth — and still, in person, exceeds the photograph.",
            "The city was the Mughal capital under Akbar, Jahangir, and Shah Jahan, and that century of imperial ambition left it with a density of monumental architecture matched almost nowhere else. Agra Fort, a red-sandstone citadel large enough to be its own walled city, faces the Taj across a river bend. Forty kilometres west, the abandoned perfection of Fatehpur Sikri preserves an entire Mughal court frozen at the moment it was vacated.",
            "Most visitors mishandle Agra. They arrive late, queue in the midday glare, and leave underwhelmed. The architecture of the visit determines the experience. MyTripMyTravel runs Agra as a controlled operation: pre-dawn departure, escorted entry before the gates open to the general crowd, and a chauffeured exit that turns the onward leg to Jaipur — via Fatehpur Sikri — into part of the journey rather than a transfer to be endured.",
        ],
        quickFacts: [
            { label: "State", value: "Uttar Pradesh" },
            { label: "Best known for", value: "Taj Mahal, Agra Fort, Fatehpur Sikri" },
            { label: "UNESCO sites", value: "3" },
            { label: "Ideal stay", value: "1–2 nights" },
            { label: "From Delhi", value: "≈ 230 km · 3.5 hrs by Expressway" },
            { label: "From Jaipur", value: "≈ 240 km · 4.5 hrs via Fatehpur Sikri" },
            { label: "Airport", value: "Agra (AGR) · or fly Delhi (DEL)" },
            { label: "Language", value: "Hindi, Urdu, English" },
        ],
        bestTime: {
            window: "October – March",
            narrative:
                "The clear winter window from October to March delivers soft light, comfortable daytime temperatures, and the cleanest air for photography. November to February is peak — book Taj sunrise slots well ahead. April to June is severe heat above 40°C and is only advisable with an air-conditioned fleet and dawn-only sightseeing. The monsoon (July–September) brings dramatic skies and emerald gardens but variable visibility; it is the quietest and most private time to see the Taj.",
        },
        thingsToDo: [
            { name: "Taj Mahal at sunrise", blurb: "Enter at the eastern gate before opening for the marble's rose-to-white transition without the crowd.", category: "Heritage" },
            { name: "Agra Fort", blurb: "The red-sandstone Mughal citadel where Shah Jahan was imprisoned with a view of the Taj he built.", category: "Heritage" },
            { name: "Fatehpur Sikri", blurb: "Akbar's perfectly preserved ghost capital, 40 km west — ideal as a stop en route to Jaipur.", category: "Heritage" },
            { name: "Mehtab Bagh", blurb: "The moonlight garden across the river, framing the Taj's rear elevation at sunset.", category: "Nature" },
            { name: "Itimad-ud-Daulah", blurb: "The 'Baby Taj' — the inlay-marble tomb that prototyped the Taj Mahal's craft.", category: "Heritage" },
            { name: "Heritage haveli dining", blurb: "A private Mughlai tasting menu inside a restored courtyard mansion, arranged through our dining wing.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Road", detail: "The Yamuna Expressway connects Delhi to Agra in about 3.5 hours — the standard MyTripMyTravel chauffeured leg." },
            { mode: "Rail", detail: "The Gatimaan Express reaches Agra Cantt from Delhi in roughly 100 minutes; we handle station transfers either side." },
            { mode: "Air", detail: "Agra Airport (AGR) has limited service; most missions route through Delhi (DEL) with a fleet handover." },
            { mode: "Private Fleet", detail: "Our orthopedic-grade Innova Crysta and luxury sedans run the full Delhi–Agra–Jaipur arc with GPS telemetry." },
        ],
        whereToStay: [
            { tier: "Palace tier", detail: "Taj-view luxury resorts on the eastern bank with rooms framing the mausoleum at dawn." },
            { tier: "Heritage tier", detail: "Restored colonial and Mughal-era properties in the Cantonment with garden courtyards." },
            { tier: "Recovery tier", detail: "Quiet, low-noise medical-sanctuary stays for post-procedure transit guests with concierge care." },
        ],
        whereToEat: [
            { name: "Mughlai heritage table", detail: "Slow-cooked dum and tandoor courses in a private haveli setting, arranged by our heritage-dining wing." },
            { name: "Petha & chaat trail", detail: "An escorted tasting of Agra's signature ash-gourd sweet and the old-city street kitchens." },
            { name: "Riverside fine dining", detail: "Contemporary Indian tasting menus with Taj-facing terraces for the final evening." },
        ],
        faqs: [
            { q: "Is one day enough for Agra?", a: "One full day covers the Taj Mahal and Agra Fort if you start at sunrise. To include Fatehpur Sikri and Mehtab Bagh without compression, a single overnight is strongly recommended — which is how our Golden Triangle missions are architected." },
            { q: "Is the Taj Mahal closed on any day?", a: "Yes. The Taj Mahal is closed every Friday for prayers. Our planners build itineraries around this automatically so a Friday is never wasted on a closed monument." },
            { q: "Can you arrange skip-the-line entry?", a: "We pre-purchase timed tickets and provide an escort who manages the security and queue process, so guests enter close to opening with minimal waiting." },
            { q: "How far is Agra from Delhi by car?", a: "About 230 km, or roughly 3.5 hours on the Yamuna Expressway in our chauffeured fleet, including a comfort stop." },
        ],
        relatedCities: ["delhi", "jaipur"],
        relatedTours: [
            { label: "Golden Triangle — all variations", href: "/tours/golden-triangle-all" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Heritage dining wing", href: "/heritage-dining" },
        ],
    },
    {
        slug: "delhi",
        name: "Delhi",
        region: "Golden Triangle",
        regionSlug: "golden-triangle",
        state: "Delhi (NCT)",
        tagline: "Eight Cities, One Capital",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Humayun%27s_Tomb%2C_Delhi.jpg",
        coordinates: { lat: 28.6139, lng: 77.209 },
        answer:
            "Delhi is the capital territory of India and the northern gateway of the Golden Triangle. It is effectively two cities fused: Old Delhi, the walled Mughal capital of Shahjahanabad with the Red Fort and Jama Masjid; and New Delhi, the Lutyens-designed imperial and government quarter. Delhi holds three UNESCO World Heritage Sites — the Red Fort, Humayun's Tomb, and the Qutub Minar complex. It is the primary international air gateway (Indira Gandhi International, DEL) for almost every northern India itinerary. MyTripMyTravel uses Delhi as a mission staging point: airport-to-fleet handover, a curated heritage-and-contrast day across both cities, and the chauffeured launch onto the Yamuna Expressway toward Agra.",
        intro: [
            "Delhi is where the journey starts and where most travellers underestimate it. It is treated as a transit airport, when it is in fact eight historical cities stacked on the same plain — from the 12th-century Qutub complex to Lutyens' 20th-century imperial capital — each layer still legible if you know how to read it.",
            "Old Delhi is dense, sensory, and Mughal: the Red Fort's sandstone ramparts, the great courtyard of the Jama Masjid, and the compressed lanes of Chandni Chowk where the food is among the best in India. New Delhi is the opposite register — broad ceremonial avenues, the green calm of Lodhi Garden, and the world-class quiet of Humayun's Tomb, the prototype that the Taj Mahal would later perfect.",
            "Handled well, Delhi is a single, high-contrast day that primes everything that follows. MyTripMyTravel sequences it so the arrival fatigue is absorbed in comfort, the two cities are seen in the right light, and the onward leg to Agra is a chauffeured continuation rather than a scramble.",
        ],
        quickFacts: [
            { label: "Territory", value: "National Capital Territory" },
            { label: "Best known for", value: "Red Fort, Humayun's Tomb, Qutub Minar" },
            { label: "UNESCO sites", value: "3" },
            { label: "Ideal stay", value: "1–2 nights" },
            { label: "To Agra", value: "≈ 230 km · 3.5 hrs by Expressway" },
            { label: "Airport", value: "Indira Gandhi Intl (DEL) — primary gateway" },
            { label: "Language", value: "Hindi, English, Punjabi, Urdu" },
            { label: "Role", value: "Golden Triangle northern vertex" },
        ],
        bestTime: {
            window: "October – March",
            narrative:
                "Delhi's pleasant season runs October to March, with crisp, sightseeing-friendly days. December and January can bring morning fog that delays flights — our planners build buffer into arrival days. April to June is extreme heat; July to September is monsoon humidity with lush gardens. For the Golden Triangle, an October–March launch produces the best light across all three cities.",
        },
        thingsToDo: [
            { name: "Humayun's Tomb", blurb: "The garden-tomb that prototyped the Taj Mahal — best in early morning light.", category: "Heritage" },
            { name: "Qutub Minar complex", blurb: "The 73 m victory tower and the Iron Pillar within a 12th-century mosque ruin.", category: "Heritage" },
            { name: "Old Delhi heritage walk", blurb: "Red Fort, Jama Masjid, and a guided Chandni Chowk food and spice trail.", category: "Culture" },
            { name: "Lutyens' New Delhi drive", blurb: "India Gate, the ceremonial axis, and the colonnaded order of the imperial capital.", category: "Heritage" },
            { name: "Lodhi Garden", blurb: "Tombs of the Sayyid and Lodhi dynasties set in a 90-acre landscaped park.", category: "Nature" },
            { name: "Chandni Chowk culinary mission", blurb: "An escorted tasting of paranthe, kebabs, and jalebi in the old city's legendary kitchens.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Air", detail: "Indira Gandhi International (DEL) is the primary entry point for northern India, with direct long-haul service worldwide." },
            { mode: "Private Fleet", detail: "Airport-to-fleet handover with a chauffeur and orthopedic-grade vehicle on arrival, GPS-tracked." },
            { mode: "Rail", detail: "Delhi's stations connect the Gatimaan and Shatabdi expresses to Agra and Jaipur; we manage all transfers." },
            { mode: "Road", detail: "The Yamuna Expressway launches the Agra leg; NH-48 carries the Jaipur leg." },
        ],
        whereToStay: [
            { tier: "Imperial tier", detail: "Landmark luxury hotels in Lutyens' Delhi with garden wings and embassy-quarter calm." },
            { tier: "Heritage tier", detail: "Boutique restored havelis and design hotels near Hauz Khas and Lodhi." },
            { tier: "Aerotel tier", detail: "Premium airport-adjacent stays for tight arrival or red-eye departure windows." },
        ],
        whereToEat: [
            { name: "Old Delhi street legends", detail: "An escorted Chandni Chowk trail through century-old kebab and sweet houses." },
            { name: "Modern Indian fine dining", detail: "Tasting menus reinterpreting regional Indian cuisine in the capital's best rooms." },
            { name: "Embassy-quarter classics", detail: "Refined North Indian and Awadhi dining in landmark hotel restaurants." },
        ],
        faqs: [
            { q: "How many days do I need in Delhi?", a: "One full, well-sequenced day covers the essential Old and New Delhi contrast. Two nights allow a relaxed arrival buffer plus deeper exploration, which we recommend for long-haul arrivals." },
            { q: "Is Delhi the best airport to start the Golden Triangle?", a: "Yes. Delhi (DEL) is the primary international gateway and the natural northern vertex; our missions stage the fleet handover here and run Delhi → Agra → Jaipur → Delhi." },
            { q: "Is Old Delhi safe to explore?", a: "With an escorted MyTripMyTravel guide and chauffeur logistics, Old Delhi is both safe and one of the trip's highlights. We handle navigation, vehicle staging, and crowd management." },
            { q: "Can you manage a late-night or early arrival?", a: "Yes — we provide 24/7 airport handover, an aerotel-tier room option, and a flexible first day to absorb jet lag without losing sightseeing." },
        ],
        relatedCities: ["agra", "jaipur"],
        relatedTours: [
            { label: "Golden Triangle — all variations", href: "/tours/golden-triangle-all" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Expert heritage guides", href: "/expert-guides" },
        ],
    },
    {
        slug: "jaipur",
        name: "Jaipur",
        region: "Golden Triangle",
        regionSlug: "golden-triangle",
        state: "Rajasthan",
        tagline: "The Pink City of the Rajputs",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/9/95/Hawa_Mahal_2011.jpg",
        coordinates: { lat: 26.9124, lng: 75.7873 },
        answer:
            "Jaipur is the capital of Rajasthan and the third vertex of India's Golden Triangle, founded in 1727 by Maharaja Sawai Jai Singh II as one of the world's earliest planned cities. Its old quarter, painted terracotta-pink, is a UNESCO World Heritage Site and contains the Hawa Mahal, City Palace, and the Jantar Mantar astronomical observatory. Above the city, the hilltop Amer Fort commands the old Rajput capital. Jaipur lies about 240 km from Agra and 280 km from Delhi. MyTripMyTravel runs Jaipur as the cultural climax of the Golden Triangle — escorted fort access, artisan ateliers, and a royal-heritage dining and stay layer drawn from the Rajput courts.",
        intro: [
            "Jaipur is the payoff vertex of the Golden Triangle — where Mughal monumentality gives way to living Rajput colour. It was conceived whole, in 1727, on a nine-block Vedic grid, which is why the old city reads with a clarity most historic cities lack: a planned pink capital you can actually navigate.",
            "Amer Fort, on its ridge above a serpentine lake, is the spectacle — mirror halls, ramparts, and a sandstone-and-marble palace complex that rewards an early, escorted arrival. Down in the city, the Hawa Mahal's honeycomb façade, the working medieval instruments of the Jantar Mantar, and the still-royal City Palace form a dense, walkable core. Around it sits India's most concentrated craft economy: block printing, gem cutting, blue pottery, and miniature painting in working ateliers.",
            "MyTripMyTravel treats Jaipur as the trip's crescendo. The forts are timed against the light and the crowd, the shopping is curated to genuine workshops rather than commission showrooms, and the stay and dining are pulled from the Rajput heritage layer — palace hotels and royal-recipe tables that make the final nights the ones guests remember.",
        ],
        quickFacts: [
            { label: "State", value: "Rajasthan (capital)" },
            { label: "Best known for", value: "Amer Fort, Hawa Mahal, City Palace, Jantar Mantar" },
            { label: "UNESCO sites", value: "2 (Walled City, Jantar Mantar)" },
            { label: "Ideal stay", value: "2 nights" },
            { label: "From Agra", value: "≈ 240 km · 4.5 hrs via Fatehpur Sikri" },
            { label: "From Delhi", value: "≈ 280 km · 5 hrs by NH-48" },
            { label: "Airport", value: "Jaipur Intl (JAI)" },
            { label: "Language", value: "Hindi, Rajasthani, English" },
        ],
        bestTime: {
            window: "October – March",
            narrative:
                "Jaipur is best from October to March, with warm days and cool desert evenings ideal for fort climbs and rooftop dining. The Jaipur Literature Festival (January) and Teej and Gangaur festivals add cultural depth but raise demand — book early. April to June is harsh desert heat; the monsoon greens the Aravalli hills but is short and unpredictable. For the Golden Triangle finale, the winter window is optimal.",
        },
        thingsToDo: [
            { name: "Amer Fort", blurb: "The hilltop Rajput palace-fort with the mirrored Sheesh Mahal — best entered at opening.", category: "Heritage" },
            { name: "City Palace", blurb: "The still-royal residence with courtyards, the Mubarak Mahal, and textile and arms collections.", category: "Heritage" },
            { name: "Hawa Mahal", blurb: "The five-storey 'Palace of Winds' honeycomb façade — photographed best in early light.", category: "Heritage" },
            { name: "Jantar Mantar", blurb: "Jai Singh II's 18th-century stone astronomical instruments, a UNESCO site that still tells time.", category: "Culture" },
            { name: "Artisan atelier circuit", blurb: "Escorted visits to working block-print, blue-pottery, and gem-cutting workshops.", category: "Culture" },
            { name: "Royal Rajasthani dining", blurb: "A laal maas and dal-baati-churma table drawn from royal recipes via our heritage-dining wing.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Road", detail: "From Agra, the 4.5-hour chauffeured leg via Fatehpur Sikri is part of the itinerary, not a transfer." },
            { mode: "Air", detail: "Jaipur International (JAI) has domestic and select international service; we manage fleet handover on arrival." },
            { mode: "Rail", detail: "The Delhi–Jaipur Shatabdi and Vande Bharat services are fast; we handle station transfers." },
            { mode: "Private Fleet", detail: "The closing leg of the Golden Triangle arc returns to Delhi via NH-48 in our GPS-tracked fleet." },
        ],
        whereToStay: [
            { tier: "Palace tier", detail: "Working Rajput palace hotels with royal suites, stepwell pools, and courtyard durbars." },
            { tier: "Heritage tier", detail: "Restored havelis inside or near the walled Pink City with hand-painted interiors." },
            { tier: "Resort tier", detail: "Aravalli-foothill luxury resorts with spa wings for a slower final two nights." },
        ],
        whereToEat: [
            { name: "Royal Rajasthani thali", detail: "A multi-course laal maas, gatte, and churma table from royal kitchens, privately arranged." },
            { name: "Heritage rooftop dining", detail: "Pink City rooftop tables framed against Nahargarh Fort at sunset." },
            { name: "Artisan sweet trail", detail: "An escorted tasting of ghewar, pyaaz kachori, and the old city's confectioners." },
        ],
        faqs: [
            { q: "How many nights should I spend in Jaipur?", a: "Two nights is the standard for the Golden Triangle finale — one day for Amer Fort and the city palaces, one for the artisan circuit and a slower royal-dining evening." },
            { q: "What is the best route from Agra to Jaipur?", a: "Via Fatehpur Sikri. It adds a UNESCO Mughal capital to the drive and turns a 4.5-hour transfer into a sightseeing leg, which is how our missions are built." },
            { q: "Is Jaipur shopping worth it?", a: "Yes, if curated. We route guests to genuine working ateliers — block printing, gems, blue pottery — rather than commission-driven showrooms." },
            { q: "Can you arrange a palace hotel stay?", a: "Yes. Our Rajput heritage layer includes working palace hotels; we secure royal suites and arrange private durbar dining where available." },
        ],
        relatedCities: ["agra", "delhi", "udaipur"],
        relatedTours: [
            { label: "Golden Triangle — all variations", href: "/tours/golden-triangle-all" },
            { label: "Rajasthan Escapes", href: "/destinations/region/rajasthan" },
            { label: "Royal weddings & celebrations", href: "/weddings" },
        ],
    },
    {
        slug: "udaipur",
        name: "Udaipur",
        region: "Rajasthan Escapes",
        regionSlug: "rajasthan",
        state: "Rajasthan",
        tagline: "The City of Lakes",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Lake_Palace_Udaipur.jpg",
        coordinates: { lat: 24.5854, lng: 73.7125 },
        answer:
            "Udaipur is a city in southern Rajasthan, India, founded in 1559 by Maharana Udai Singh II as the capital of the Mewar kingdom. Built around a chain of artificial lakes — chiefly Lake Pichola and Fateh Sagar — it is known as the 'City of Lakes' and the 'Venice of the East'. Its landmarks include the City Palace (the largest palace complex in Rajasthan), the island Lake Palace, and Jagdish Temple. Udaipur is a natural extension of the Golden Triangle into Rajasthan and a leading destination for royal weddings. MyTripMyTravel operates Udaipur as a slow-luxury and celebration base — lake-palace stays, private boat protocols, and Mewar heritage dining.",
        intro: [
            "Udaipur is the romantic counter-argument to the rest of Rajasthan's desert intensity. Where Jodhpur and Jaisalmer are arid and fortress-hard, Udaipur is water, reflection, and Mewar refinement — a city the maharanas built around lakes precisely so it would feel like this.",
            "The City Palace runs for nearly a kilometre along Lake Pichola, a stacked complex of courtyards, balconies, and mirror rooms still partly inhabited by the Mewar family. On the water, the Lake Palace and Jag Mandir float as white marble islands. Around them, the Jagdish Temple, the Saheliyon ki Bari gardens, and the craft lanes of the old city give the place a density that rewards a slower stay than a single night.",
            "MyTripMyTravel uses Udaipur two ways: as the slow, restorative leg after the Golden Triangle's pace, and as the premier base for royal weddings and milestone celebrations. Private sunset boat protocols, palace-suite stays, and Mewar-recipe dining are arranged as a single curated layer.",
        ],
        quickFacts: [
            { label: "State", value: "Rajasthan" },
            { label: "Best known for", value: "City Palace, Lake Pichola, Lake Palace" },
            { label: "Founded", value: "1559 · Mewar capital" },
            { label: "Ideal stay", value: "2–3 nights" },
            { label: "From Jaipur", value: "≈ 390 km · 6.5 hrs, or 40-min flight" },
            { label: "Airport", value: "Maharana Pratap (UDR)" },
            { label: "Signature use", value: "Royal weddings, slow luxury" },
            { label: "Language", value: "Hindi, Mewari, English" },
        ],
        bestTime: {
            window: "September – March",
            narrative:
                "Udaipur is at its most photogenic from September to March, when post-monsoon lakes are full and the light is soft on the marble. October to February is peak wedding and celebration season — palace venues book months ahead. Summer (April–June) is hot and the lakes can recede; the monsoon is brief, dramatic, and refills the lakes for the prime season.",
        },
        thingsToDo: [
            { name: "City Palace complex", blurb: "Rajasthan's largest palace, a kilometre of courtyards and mirror halls above Lake Pichola.", category: "Heritage" },
            { name: "Lake Pichola sunset boat", blurb: "A private protocol boat past Jag Mandir and the Lake Palace at golden hour.", category: "Nature" },
            { name: "Jagdish Temple", blurb: "A 1651 Indo-Aryan temple in the heart of the old city, still in daily worship.", category: "Culture" },
            { name: "Saheliyon ki Bari", blurb: "The 'Garden of the Maidens' — fountains and lotus pools built for royal companions.", category: "Nature" },
            { name: "Monsoon Palace viewpoint", blurb: "The hilltop Sajjangarh palace for the full lake-city panorama at dusk.", category: "Heritage" },
            { name: "Mewar royal dining", blurb: "A laal maas and Mewari thali table arranged through our heritage-dining wing.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Air", detail: "Maharana Pratap Airport (UDR) connects Delhi, Mumbai, and Jaipur in under an hour; we manage fleet handover." },
            { mode: "Road", detail: "The Jaipur–Udaipur leg (≈ 6.5 hrs) can route via Pushkar or Chittorgarh as a chauffeured sightseeing arc." },
            { mode: "Private Fleet", detail: "Orthopedic-grade vehicles with GPS telemetry for the Rajasthan circuit and wedding logistics." },
            { mode: "Rail", detail: "Overnight services from Delhi and Jaipur reach Udaipur City; we handle station transfers." },
        ],
        whereToStay: [
            { tier: "Lake-palace tier", detail: "Island and lakefront palace hotels with marble suites and private boat access." },
            { tier: "Heritage tier", detail: "Restored haveli hotels in the old city with Pichola-facing terraces." },
            { tier: "Resort tier", detail: "Aravalli-set luxury resorts with spa and wellness wings for a restorative stay." },
        ],
        whereToEat: [
            { name: "Mewar royal table", detail: "A multi-course Mewari menu with laal maas and ker sangri, privately curated." },
            { name: "Lakefront fine dining", detail: "Pichola-facing rooftop restaurants timed for sunset over the Lake Palace." },
            { name: "Old-city heritage café trail", detail: "An escorted walk through Udaipur's courtyard cafés and sweet houses." },
        ],
        faqs: [
            { q: "Why is Udaipur popular for weddings?", a: "Its lake palaces, island venues, and Mewar heritage hotels provide a setting unmatched in India. Our weddings wing handles venue, fleet convoys, and guest logistics end to end." },
            { q: "How do I get from Jaipur to Udaipur?", a: "A 40-minute flight, or a 6.5-hour chauffeured drive that can be routed via Pushkar or Chittorgarh to add heritage stops along the way." },
            { q: "How many nights should I plan in Udaipur?", a: "Two to three. Udaipur is the slow-luxury leg of a Rajasthan itinerary — it rewards an unhurried stay rather than a single night." },
            { q: "Can you arrange a private boat on Lake Pichola?", a: "Yes. We arrange private sunset boat protocols past Jag Mandir and the Lake Palace, subject to lake levels and authority clearance." },
        ],
        relatedCities: ["jodhpur", "jaisalmer", "jaipur"],
        relatedTours: [
            { label: "Royal weddings & celebrations", href: "/weddings" },
            { label: "Rajasthan Escapes", href: "/destinations/region/rajasthan" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
        ],
    },
    {
        slug: "jodhpur",
        name: "Jodhpur",
        region: "Rajasthan Escapes",
        regionSlug: "rajasthan",
        state: "Rajasthan",
        tagline: "The Blue City Beneath Mehrangarh",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Jodhpur-Mehrangarh_Fort-06-Blue_city-20131011.jpg",
        coordinates: { lat: 26.2389, lng: 73.0243 },
        answer:
            "Jodhpur is the second-largest city in Rajasthan, India, founded in 1459 by Rao Jodha as the capital of the Marwar kingdom. It is called the 'Blue City' for the indigo-washed houses of its old quarter, which cluster beneath Mehrangarh — one of the largest and best-preserved forts in India, rising 120 metres on a sheer rock escarpment. Other landmarks include the marble Jaswant Thada cenotaph and the Umaid Bhawan Palace. Jodhpur is the gateway to the Thar Desert and a core stop on the Rajasthan circuit. MyTripMyTravel runs Jodhpur as a fort-and-desert mission with escorted access and heritage-palace stays.",
        intro: [
            "Jodhpur is dominated by a single, overwhelming object: Mehrangarh. Few forts in the world sit on their city the way this one does — 120 metres of vertical sandstone with the blue old town spilling down from its base. It is the reason to come and the experience that organises everything else.",
            "Inside, Mehrangarh is one of India's best-curated fort museums: palaces, courtyards, palanquins, and ramparts with cannon still in place and a drop that explains why the city below stayed safe for five centuries. Below it, the indigo lanes — originally Brahmin houses, the colour now citywide — make Jodhpur the most photogenic walking city in Rajasthan. The marble Jaswant Thada and the Art-Deco grandeur of Umaid Bhawan complete the set.",
            "MyTripMyTravel runs Jodhpur as a controlled fort-and-desert leg: escorted early entry to Mehrangarh before the light hardens, a curated blue-city walk, and the option to push west into the Thar for a desert-camp or Bishnoi-village extension before continuing to Jaisalmer or Udaipur.",
        ],
        quickFacts: [
            { label: "State", value: "Rajasthan" },
            { label: "Best known for", value: "Mehrangarh Fort, Blue City, Umaid Bhawan" },
            { label: "Founded", value: "1459 · Marwar capital" },
            { label: "Ideal stay", value: "1–2 nights" },
            { label: "From Udaipur", value: "≈ 250 km · 4.5 hrs" },
            { label: "From Jaisalmer", value: "≈ 290 km · 5 hrs" },
            { label: "Airport", value: "Jodhpur (JDH)" },
            { label: "Gateway to", value: "The Thar Desert" },
        ],
        bestTime: {
            window: "October – March",
            narrative:
                "Jodhpur is best from October to March, when desert days are warm but the fort climb and blue-city walk are comfortable and the evenings are cool. The Marwar and Rajasthan International Folk Festivals (October) at Mehrangarh are a cultural highlight. April to June brings severe Thar heat above 42°C, advisable only with an air-conditioned fleet and dawn sightseeing.",
        },
        thingsToDo: [
            { name: "Mehrangarh Fort", blurb: "One of India's great forts — palaces, ramparts, and a museum, best entered at opening.", category: "Heritage" },
            { name: "Blue City walk", blurb: "An escorted route through the indigo lanes beneath the fort for the city's signature views.", category: "Culture" },
            { name: "Jaswant Thada", blurb: "The white-marble royal cenotaph on the lake below Mehrangarh, glowing at sunrise.", category: "Heritage" },
            { name: "Umaid Bhawan Palace", blurb: "One of the world's largest private residences, part palace-hotel, part museum.", category: "Heritage" },
            { name: "Bishnoi village safari", blurb: "A guided visit to the desert conservation community west of the city.", category: "Culture" },
            { name: "Marwari heritage dining", blurb: "A Marwari thali table — bati, gatte, ker sangri — via our heritage-dining wing.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Air", detail: "Jodhpur Airport (JDH) connects Delhi and Mumbai daily; we manage fleet handover on arrival." },
            { mode: "Road", detail: "Chauffeured legs from Udaipur (4.5 hrs) and Jaisalmer (5 hrs) form the western Rajasthan arc." },
            { mode: "Private Fleet", detail: "GPS-tracked desert-capable vehicles for the Thar circuit and village safaris." },
            { mode: "Rail", detail: "Overnight trains from Delhi and Jaipur reach Jodhpur Junction; we handle station transfers." },
        ],
        whereToStay: [
            { tier: "Palace tier", detail: "Umaid Bhawan and other royal palace-hotel suites with fort views." },
            { tier: "Heritage tier", detail: "Restored blue-city havelis with rooftop terraces facing Mehrangarh." },
            { tier: "Desert-camp tier", detail: "Luxury tented camps on the Thar fringe for a one-night desert extension." },
        ],
        whereToEat: [
            { name: "Marwari royal thali", detail: "A traditional bati, gatte, and ker-sangri spread privately arranged." },
            { name: "Fort-view rooftop dining", detail: "Blue-city rooftop tables framed against floodlit Mehrangarh after dark." },
            { name: "Desert-camp dinner", detail: "Open-air Rajasthani folk dining under the Thar sky on the desert extension." },
        ],
        faqs: [
            { q: "Is Mehrangarh Fort worth a guided visit?", a: "Decisively. It is one of India's finest fort museums; an escorted early entry before crowds and heat is how our missions handle it." },
            { q: "How long do I need in Jodhpur?", a: "One full day covers Mehrangarh, the blue city, and Jaswant Thada. Add a night for an Umaid Bhawan stay or a Thar desert extension." },
            { q: "Can you arrange a Thar Desert extension?", a: "Yes — a Bishnoi village safari and a luxury desert-camp night can be added before continuing to Jaisalmer or Udaipur." },
            { q: "How far is Jodhpur from Jaisalmer?", a: "About 290 km, roughly 5 hours by chauffeured fleet across the desert highway." },
        ],
        relatedCities: ["jaisalmer", "udaipur", "jaipur"],
        relatedTours: [
            { label: "Rajasthan Escapes", href: "/destinations/region/rajasthan" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Heritage dining wing", href: "/heritage-dining" },
        ],
    },
    {
        slug: "jaisalmer",
        name: "Jaisalmer",
        region: "Rajasthan Escapes",
        regionSlug: "rajasthan",
        state: "Rajasthan",
        tagline: "The Golden Fort of the Thar",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/74/Jaisalmer_Fort.jpg",
        coordinates: { lat: 26.9157, lng: 70.9083 },
        answer:
            "Jaisalmer is a city in the Thar Desert of western Rajasthan, India, founded in 1156 by Rawal Jaisal. It is the 'Golden City', built almost entirely of yellow sandstone, and is dominated by Jaisalmer Fort — one of the very few 'living forts' in the world, with roughly a quarter of the old city's population still residing inside its walls. Its merchant havelis, Jain temples, and the surrounding Sam and Khuri sand dunes make it the definitive Indian desert destination. Jaisalmer is the westernmost stop on the Rajasthan circuit. MyTripMyTravel operates it as a living-fort and luxury-desert-camp mission with escorted heritage access.",
        intro: [
            "Jaisalmer is the end of the road, in the best sense — the last great city before the Pakistan frontier, raised entirely in golden sandstone out of the Thar. At sunrise and sunset the whole place ignites, which is why it is the desert destination every serious Rajasthan itinerary builds toward.",
            "Jaisalmer Fort is its defining feature and a genuine rarity: a living fort, with homes, temples, and havelis still occupied inside the ramparts. Below and around it, the carved Patwon ki Haveli and Salim Singh ki Haveli show the wealth of the old Silk Road trade, and the intricately carved Jain temples are among the finest in western India. West of the city, the Sam and Khuri dunes deliver the classic desert night.",
            "MyTripMyTravel runs Jaisalmer as the climactic desert leg: escorted fort and haveli access timed to the golden light, and a luxury tented-camp night on the dunes with private dining, folk performance, and stargazing — sequenced so the desert is the trip's final, defining memory.",
        ],
        quickFacts: [
            { label: "State", value: "Rajasthan" },
            { label: "Best known for", value: "Jaisalmer Fort (living fort), Sam dunes, havelis" },
            { label: "Founded", value: "1156 · Bhati Rajput" },
            { label: "Ideal stay", value: "2 nights (incl. desert camp)" },
            { label: "From Jodhpur", value: "≈ 290 km · 5 hrs" },
            { label: "Airport", value: "Jaisalmer (JSA), seasonal" },
            { label: "Signature", value: "Living fort + Thar dunes" },
            { label: "Language", value: "Hindi, Rajasthani, English" },
        ],
        bestTime: {
            window: "October – March",
            narrative:
                "Jaisalmer is only comfortably visited from October to March, when desert days are warm and nights are cool enough for dune camping. The Jaisalmer Desert Festival (February) is the cultural peak, with folk music, turban contests, and camel events. April to June is extreme Thar heat well above 45°C and is not advisable. Nights even in season can be cold — our desert-camp protocol provides for it.",
        },
        thingsToDo: [
            { name: "Jaisalmer Fort", blurb: "A rare living fort — escorted access through occupied lanes, temples, and ramparts.", category: "Heritage" },
            { name: "Patwon ki Haveli", blurb: "The most elaborate of the merchant mansions, a cluster of carved sandstone façades.", category: "Heritage" },
            { name: "Sam sand dunes", blurb: "Sunset on the classic Thar dunes with a camel or 4x4 protocol before camp.", category: "Adventure" },
            { name: "Luxury desert camp", blurb: "A private tented-camp night with folk performance, dining, and stargazing.", category: "Adventure" },
            { name: "Jain temples", blurb: "Seven interconnected 12th–15th-century temples inside the fort, finely carved.", category: "Culture" },
            { name: "Gadisar Lake", blurb: "A serene man-made reservoir ringed by shrines, best at sunrise.", category: "Nature" },
        ],
        howToReach: [
            { mode: "Road", detail: "The chauffeured Jodhpur–Jaisalmer leg (≈ 5 hrs) crosses the open Thar — a defining part of the route." },
            { mode: "Air", detail: "Jaisalmer Airport (JSA) runs seasonal service from Delhi and Jaipur; we manage handover when available." },
            { mode: "Private Fleet", detail: "Desert-capable, GPS-tracked vehicles for the Thar and dune-camp logistics." },
            { mode: "Rail", detail: "The overnight train from Jodhpur and the Delhi service reach Jaisalmer; we handle transfers." },
        ],
        whereToStay: [
            { tier: "Living-fort tier", detail: "Restored heritage havelis inside or directly beneath the fort walls." },
            { tier: "Luxury desert-camp tier", detail: "Private tented camps on the Sam dunes with en-suite comfort and butler service." },
            { tier: "Resort tier", detail: "Sandstone luxury resorts on the city edge with pools and spa for a softer base." },
        ],
        whereToEat: [
            { name: "Desert-camp folk dinner", detail: "Open-air Rajasthani dining with live Manganiar folk music under the dunes." },
            { name: "Haveli rooftop table", detail: "Sandstone rooftop dining framed against the floodlit fort." },
            { name: "Thar heritage thali", detail: "A ker-sangri and bajra-based desert thali via our heritage-dining wing." },
        ],
        faqs: [
            { q: "What makes Jaisalmer Fort special?", a: "It is one of the world's few 'living forts' — still inhabited, with homes, temples, and havelis inside the walls. We provide escorted access through the occupied quarters." },
            { q: "Is a desert camp night worth it?", a: "It is the point of Jaisalmer. Our luxury tented-camp protocol on the Sam dunes includes private dining, folk performance, and stargazing — the trip's defining night." },
            { q: "How do I reach Jaisalmer?", a: "Most missions arrive by the 5-hour chauffeured leg from Jodhpur across the Thar; seasonal flights also operate from Delhi and Jaipur." },
            { q: "How many nights in Jaisalmer?", a: "Two — one for the fort and havelis, one for the desert camp — is the standard for the western Rajasthan finale." },
        ],
        relatedCities: ["jodhpur", "udaipur", "jaipur"],
        relatedTours: [
            { label: "Rajasthan Escapes", href: "/destinations/region/rajasthan" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Golden Triangle — all variations", href: "/tours/golden-triangle-all" },
        ],
    },
    {
        slug: "alleppey",
        name: "Alleppey",
        region: "Kerala Backwaters",
        regionSlug: "kerala",
        state: "Kerala",
        tagline: "The Venice of the East",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Backwaters_of_Alleppey.jpg",
        coordinates: { lat: 9.4981, lng: 76.3388 },
        answer:
            "Alleppey (Alappuzha) is a coastal city in Kerala, India, and the heart of the Kerala backwaters — a 900 km network of lagoons, lakes, and canals fed by 38 rivers. It is famous for traditional kettuvallam houseboats, the Nehru Trophy snake-boat race, and Vembanad Lake, the longest lake in India. Alleppey is the standard base for a private overnight houseboat cruise and a core stop on any southern India slow-luxury itinerary. MyTripMyTravel operates Alleppey as a down-regulation leg — a chartered premium houseboat with a private crew, chef, and routed channels away from the tourist congestion.",
        intro: [
            "Alleppey is the engineered calm of any Kerala itinerary. After the density of the north or the heat of Rajasthan, the backwaters exist to slow the nervous system down — and Alleppey is where that happens most completely.",
            "The classic experience is the kettuvallam: a converted rice barge, now a private floating suite, that drifts through Vembanad Lake and the narrow village canals. The right cruise is not the crowded main channel; it is the quieter routed network where life on the water — toddy tappers, duck herders, Chinese nets — still runs as it has for centuries.",
            "MyTripMyTravel charters premium houseboats with a dedicated crew and chef, sequences the route away from the congestion points, and pairs the cruise with a lakeside heritage stay so the leg is genuine restoration rather than a packaged float.",
        ],
        quickFacts: [
            { label: "State", value: "Kerala" },
            { label: "Best known for", value: "Backwaters, kettuvallam houseboats, Vembanad Lake" },
            { label: "Ideal stay", value: "1 night houseboat + 1 lakeside" },
            { label: "From Kochi", value: "≈ 55 km · 1.5 hrs" },
            { label: "Nearest airport", value: "Cochin Intl (COK)" },
            { label: "Signature", value: "Private chartered houseboat" },
            { label: "Language", value: "Malayalam, English" },
            { label: "Use", value: "Slow-luxury / wellness leg" },
        ],
        bestTime: {
            window: "November – February",
            narrative:
                "The dry, mild months of November to February are ideal for backwater cruising, with calm water and pleasant humidity. The Nehru Trophy snake-boat race (typically August) is a spectacle but falls in the monsoon. June to September monsoon swells the backwaters and greens the paddy but brings heavy rain; March to May is hot and humid. For a restorative cruise, the winter window is optimal.",
        },
        thingsToDo: [
            { name: "Private houseboat cruise", blurb: "An overnight chartered kettuvallam with private crew and chef through routed channels.", category: "Nature" },
            { name: "Vembanad Lake", blurb: "India's longest lake — sunrise on the open water before the day boats launch.", category: "Nature" },
            { name: "Village canal walk", blurb: "An escorted walk through coir-making and toddy-tapping backwater hamlets.", category: "Culture" },
            { name: "Marari beach extension", blurb: "A quiet Arabian Sea beach stay 30 minutes from the backwaters.", category: "Nature" },
            { name: "Kerala Ayurvedic session", blurb: "A practitioner-led treatment paired through our wellness sanctuary wing.", category: "Wellness" },
            { name: "Kerala sadya lunch", blurb: "A traditional banana-leaf vegetarian feast aboard or lakeside.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Air", detail: "Cochin International (COK) is the gateway, about 75 minutes by chauffeured fleet to the jetty." },
            { mode: "Road", detail: "Chauffeured legs from Kochi (1.5 hrs) and Munnar (4 hrs) on the Kerala circuit." },
            { mode: "Private Fleet", detail: "GPS-tracked vehicles handle door-to-jetty transfers and luggage to the houseboat." },
            { mode: "Rail", detail: "Alappuzha station connects the Kerala coastal line; we manage transfers to the jetty." },
        ],
        whereToStay: [
            { tier: "Houseboat tier", detail: "Privately chartered premium kettuvallam with en-suite cabins and a dedicated chef." },
            { tier: "Lakeside tier", detail: "Vembanad-facing heritage resorts with infinity pools and Ayurveda wings." },
            { tier: "Beach tier", detail: "Marari beach luxury resorts for a sea-and-backwater combination stay." },
        ],
        whereToEat: [
            { name: "Onboard Keralan table", detail: "Karimeen fish and appam cooked fresh by the houseboat chef as you cruise." },
            { name: "Sadya feast", detail: "A traditional multi-dish vegetarian banana-leaf lunch, lakeside." },
            { name: "Spice-coast seafood", detail: "Coastal Keralan seafood at a curated lakefront restaurant." },
        ],
        faqs: [
            { q: "Is a houseboat overnight worth it?", a: "Yes — a private chartered overnight cruise is the definitive Alleppey experience. We route away from the congested main channel into the quieter village network." },
            { q: "How many days for the Kerala backwaters?", a: "One houseboat night plus a lakeside or beach night is the standard restorative leg; pair with Munnar and Kochi for a full Kerala circuit." },
            { q: "When is the snake-boat race?", a: "The Nehru Trophy race is usually in August, during the monsoon. We can plan around it, but the calm-water cruising season is November–February." },
            { q: "Can you combine Alleppey with Ayurveda?", a: "Yes. Our wellness wing arranges practitioner-led Ayurvedic treatment at a lakeside sanctuary as part of the leg." },
        ],
        relatedCities: ["munnar", "kochi"],
        relatedTours: [
            { label: "Wellness & sanctuary stays", href: "/wellness" },
            { label: "Kerala Backwaters", href: "/destinations/region/kerala" },
            { label: "Heritage dining wing", href: "/heritage-dining" },
        ],
    },
    {
        slug: "munnar",
        name: "Munnar",
        region: "Kerala Backwaters",
        regionSlug: "kerala",
        state: "Kerala",
        tagline: "The Tea Country of the Western Ghats",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Munnar_Hills.jpg",
        coordinates: { lat: 10.0889, lng: 77.0595 },
        answer:
            "Munnar is a hill station in the Idukki district of Kerala, India, set at roughly 1,600 m in the Western Ghats. It is defined by vast rolling tea estates first planted by the British in the 19th century, the Eravikulam National Park (home of the endangered Nilgiri tahr), and Anamudi, the highest peak in South India. Munnar is the cool-climate counterpart to the Kerala backwaters and a core stop on the southern India circuit. MyTripMyTravel operates Munnar as a tea-estate and high-altitude clarity leg with private plantation access and colonial-bungalow stays.",
        intro: [
            "Munnar is Kerala's altitude register — the green, cool, sharp-aired counter to the warm stillness of the backwaters. The drive up through tightening switchbacks and widening tea is part of the experience, not a transfer.",
            "The estates are the spectacle: corduroyed hillsides of clipped Camellia sinensis that the colonial planters laid out and that still run as working plantations. Eravikulam National Park protects the Nilgiri tahr and the shola grassland, and Anamudi rises above it as the highest point in peninsular India. A private factory visit and a high tea on an estate lawn are the difference between seeing Munnar and understanding it.",
            "MyTripMyTravel runs Munnar with private plantation access, a colonial-bungalow or estate-resort stay, and a route timed against the morning mist for the cleanest views before the day crowds arrive.",
        ],
        quickFacts: [
            { label: "State", value: "Kerala" },
            { label: "Altitude", value: "≈ 1,600 m" },
            { label: "Best known for", value: "Tea estates, Eravikulam NP, Anamudi" },
            { label: "Ideal stay", value: "2 nights" },
            { label: "From Kochi", value: "≈ 130 km · 4 hrs" },
            { label: "From Alleppey", value: "≈ 165 km · 4.5 hrs" },
            { label: "Nearest airport", value: "Cochin Intl (COK)" },
            { label: "Language", value: "Malayalam, Tamil, English" },
        ],
        bestTime: {
            window: "September – March",
            narrative:
                "September to March offers clear skies, lush post-monsoon estates, and comfortable cool days. The Neelakurinji bloom, which carpets the hills in blue, is a rare event roughly every 12 years. April–May is warmer but pleasant; June–August monsoon brings mist and heavy rain that obscures the views but maximises green. Winter is optimal for photography and estate walks.",
        },
        thingsToDo: [
            { name: "Private tea estate tour", blurb: "A working plantation and factory visit with a planter-led tasting.", category: "Culture" },
            { name: "Eravikulam National Park", blurb: "Shola grassland and the endangered Nilgiri tahr below Anamudi.", category: "Nature" },
            { name: "Top Station viewpoint", blurb: "The Kerala–Tamil Nadu ridge with valley panoramas at sunrise.", category: "Nature" },
            { name: "Estate lawn high tea", blurb: "A colonial-style high tea on a private plantation bungalow lawn.", category: "Cuisine" },
            { name: "Shola forest trek", blurb: "An escorted walk through the unique high-altitude rainforest pockets.", category: "Adventure" },
            { name: "Spice plantation visit", blurb: "Cardamom and pepper estates on the route, with a guided walk.", category: "Culture" },
        ],
        howToReach: [
            { mode: "Air", detail: "Cochin International (COK) is the gateway; the chauffeured climb to Munnar is about 4 hours." },
            { mode: "Road", detail: "Scenic chauffeured legs from Kochi (4 hrs) and Alleppey (4.5 hrs) through the Ghats." },
            { mode: "Private Fleet", detail: "Hill-capable, GPS-tracked vehicles for the switchback estate roads." },
            { mode: "Rail", detail: "The nearest railhead is Aluva/Ernakulam; we handle the onward mountain transfer." },
        ],
        whereToStay: [
            { tier: "Estate-bungalow tier", detail: "Restored colonial planter bungalows inside working tea estates." },
            { tier: "Cliff-resort tier", detail: "Valley-facing luxury resorts with infinity pools above the tea." },
            { tier: "Wellness tier", detail: "High-altitude spa retreats for a clarity-and-recovery stay." },
        ],
        whereToEat: [
            { name: "Planter's table", detail: "Colonial-Keralan estate dining with home-grown produce and estate tea." },
            { name: "Valley-view fine dining", detail: "Contemporary South Indian menus on a cliff-edge terrace." },
            { name: "Spice-trail lunch", detail: "A cardamom-estate lunch on the route up, freshly prepared." },
        ],
        faqs: [
            { q: "How many nights in Munnar?", a: "Two nights lets you cover an estate tour, Eravikulam, and a viewpoint sunrise without rushing the mountain roads." },
            { q: "Can you arrange a private tea estate visit?", a: "Yes — we arrange working-plantation and factory access with a planter-led tasting, not the generic tourist stop." },
            { q: "Is Munnar good in the monsoon?", a: "It is dramatically green but often mist-covered with heavy rain. For clear views and photography, September–March is best." },
            { q: "How does Munnar pair with the backwaters?", a: "Perfectly as contrast — cool altitude then warm stillness. The standard Kerala circuit is Kochi → Munnar → Alleppey." },
        ],
        relatedCities: ["alleppey", "kochi"],
        relatedTours: [
            { label: "Kerala Backwaters", href: "/destinations/region/kerala" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
        ],
    },
    {
        slug: "kochi",
        name: "Kochi",
        region: "Kerala Backwaters",
        regionSlug: "kerala",
        state: "Kerala",
        tagline: "The Spice-Coast Gateway",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Chinese_fishing_nets_Kochi.jpg",
        coordinates: { lat: 9.9312, lng: 76.2673 },
        answer:
            "Kochi (Cochin) is a port city on the southwest coast of Kerala, India, and the principal gateway to the Kerala circuit. It was a major spice-trade hub for over six centuries and carries layered Portuguese, Dutch, and British heritage in Fort Kochi — including the Chinese fishing nets, St Francis Church (the oldest European church in India), and the Mattancherry Palace and Paradesi Synagogue of Jew Town. Kochi hosts the Kochi-Muziris Biennale, India's largest contemporary art event. MyTripMyTravel uses Kochi as the arrival-and-heritage anchor for Kerala — Cochin airport handover, a curated Fort Kochi day, and the launch into Munnar or the backwaters.",
        intro: [
            "Kochi is where Kerala starts and where its history is most legible. Six centuries of spice trade left a port city layered with Portuguese, Dutch, British, Arab, Chinese, and Jewish heritage — all walkable in the Fort Kochi peninsula.",
            "The Chinese fishing nets on the waterfront, St Francis Church where Vasco da Gama was first buried, the Dutch-era Mattancherry Palace, and the Paradesi Synagogue in Jew Town form a dense heritage core. Layered over it is a serious contemporary art scene — the Kochi-Muziris Biennale — and a café culture that makes Fort Kochi the most relaxed urban day in South India.",
            "MyTripMyTravel uses Kochi as the heritage anchor and logistics hub: airport handover, a curated escorted Fort Kochi walk timed against the cruise-ship crowds, and a heritage-hotel stay before the fleet launches the Munnar or backwater leg.",
        ],
        quickFacts: [
            { label: "State", value: "Kerala" },
            { label: "Best known for", value: "Fort Kochi, Chinese nets, spice & art heritage" },
            { label: "Ideal stay", value: "1–2 nights" },
            { label: "Airport", value: "Cochin Intl (COK) — Kerala gateway" },
            { label: "To Munnar", value: "≈ 130 km · 4 hrs" },
            { label: "To Alleppey", value: "≈ 55 km · 1.5 hrs" },
            { label: "Signature", value: "Heritage + contemporary art" },
            { label: "Language", value: "Malayalam, English" },
        ],
        bestTime: {
            window: "October – March",
            narrative:
                "October to March is dry and comfortable for the Fort Kochi walk and waterfront. The Kochi-Muziris Biennale (December–April in its edition years) is a major draw. June–September monsoon is heavy on the coast; April–May is hot and humid. The winter window aligns with the rest of the Kerala circuit's prime season.",
        },
        thingsToDo: [
            { name: "Fort Kochi heritage walk", blurb: "An escorted route past the Chinese nets, St Francis Church, and colonial streets.", category: "Heritage" },
            { name: "Mattancherry Palace", blurb: "The Dutch Palace with its renowned Keralan mural cycle.", category: "Heritage" },
            { name: "Jew Town & Paradesi Synagogue", blurb: "The 1568 synagogue and the antique-and-spice lanes around it.", category: "Culture" },
            { name: "Kathakali performance", blurb: "A curated evening of Kerala's classical dance-theatre with a make-up preview.", category: "Culture" },
            { name: "Kochi-Muziris Biennale", blurb: "South Asia's largest contemporary art exhibition, in edition years.", category: "Culture" },
            { name: "Spice market trail", blurb: "An escorted tasting through the working pepper and cardamom warehouses.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Air", detail: "Cochin International (COK) has wide domestic and international service; we manage fleet handover on arrival." },
            { mode: "Private Fleet", detail: "GPS-tracked vehicles for the Fort Kochi day and the onward Munnar/backwater legs." },
            { mode: "Road", detail: "Kochi anchors the Kerala circuit — chauffeured arcs to Munnar, Alleppey, and beyond." },
            { mode: "Rail", detail: "Ernakulam Junction connects the coastal line; we handle station-to-hotel transfers." },
        ],
        whereToStay: [
            { tier: "Heritage tier", detail: "Restored Dutch and Portuguese mansions in Fort Kochi with courtyard pools." },
            { tier: "Waterfront tier", detail: "Luxury hotels facing the harbour mouth and the Chinese-net waterfront." },
            { tier: "Island tier", detail: "Private island resorts in the harbour for a quiet first or last night." },
        ],
        whereToEat: [
            { name: "Spice-coast seafood", detail: "Fresh harbour catch cooked Keralan-style at a curated Fort Kochi table." },
            { name: "Heritage-hotel dining", detail: "Refined Syrian-Christian and Malabar cuisine in a restored-mansion setting." },
            { name: "Café-culture trail", detail: "An escorted walk through Fort Kochi's art cafés and toddy-shop classics." },
        ],
        faqs: [
            { q: "Is Kochi the best place to start Kerala?", a: "Yes. Cochin (COK) is the principal gateway; we stage the fleet handover here and run Kochi → Munnar → backwaters." },
            { q: "How long do I need in Kochi?", a: "One full Fort Kochi day covers the heritage core; add a night for the art scene, Kathakali, and a relaxed start." },
            { q: "Is the Biennale worth timing for?", a: "If your dates fall in an edition year, yes — it transforms Fort Kochi into a major contemporary-art destination." },
            { q: "Can you arrange a private Kathakali experience?", a: "Yes — a curated performance with a backstage make-up and mudra explanation, rather than the generic tourist show." },
        ],
        relatedCities: ["munnar", "alleppey"],
        relatedTours: [
            { label: "Kerala Backwaters", href: "/destinations/region/kerala" },
            { label: "Heritage dining wing", href: "/heritage-dining" },
            { label: "Expert heritage guides", href: "/expert-guides" },
        ],
    },
    {
        slug: "shimla",
        name: "Shimla",
        region: "Himalayan Peaks",
        regionSlug: "himalayas",
        state: "Himachal Pradesh",
        tagline: "The Queen of Hill Stations",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Shimla_cityscape.jpg",
        coordinates: { lat: 31.1048, lng: 77.1734 },
        answer:
            "Shimla is the capital of Himachal Pradesh, India, set at roughly 2,200 m in the lower Himalaya. It was the summer capital of British India, and that legacy survives in the Ridge, the mock-Tudor Viceregal Lodge, Christ Church, and the pedestrian Mall Road. The UNESCO-listed Kalka–Shimla narrow-gauge railway, with 102 tunnels, is one of the great mountain rail journeys. Shimla is the gateway hill station of the western Himalayan circuit. MyTripMyTravel operates Shimla as a colonial-heritage and altitude-acclimatisation leg with heritage stays and the toy-train experience.",
        intro: [
            "Shimla is the Raj in the mountains — the city the British built to escape the plains, and still the most legible colonial hill station in India. It is also the natural acclimatisation step before pushing deeper toward Manali and Leh.",
            "The heritage spine is the Ridge and Mall Road: Christ Church, the Gaiety Theatre, and the half-timbered Viceregal Lodge from which the British governed a subcontinent each summer. The approach itself is the headline — the UNESCO Kalka–Shimla toy train climbing through 102 tunnels and a hundred curves is one of the world's classic narrow-gauge journeys.",
            "MyTripMyTravel runs Shimla as a heritage-and-acclimatisation leg: the toy-train experience on the scenic stretch, a restored colonial-hotel stay, and an escorted Ridge walk timed away from the domestic peak-hour crowds.",
        ],
        quickFacts: [
            { label: "State", value: "Himachal Pradesh (capital)" },
            { label: "Altitude", value: "≈ 2,200 m" },
            { label: "Best known for", value: "Colonial Raj heritage, Kalka–Shimla toy train" },
            { label: "Ideal stay", value: "2 nights" },
            { label: "From Chandigarh", value: "≈ 110 km · 3.5 hrs" },
            { label: "To Manali", value: "≈ 250 km · 7 hrs" },
            { label: "Nearest airport", value: "Chandigarh (IXC) / Shimla (SLV)" },
            { label: "UNESCO", value: "Kalka–Shimla Railway" },
        ],
        bestTime: {
            window: "March – June, September – November",
            narrative:
                "March to June brings pleasant spring-summer days ideal for heritage walks and the toy train. September to November offers crisp post-monsoon clarity. December to February brings snow — atmospheric but with road and rail disruption. The monsoon (July–August) risks landslides on the mountain roads. Spring and autumn are optimal.",
        },
        thingsToDo: [
            { name: "Kalka–Shimla toy train", blurb: "The UNESCO narrow-gauge climb through 102 tunnels — the scenic stretch curated.", category: "Heritage" },
            { name: "The Ridge & Mall Road", blurb: "An escorted colonial heritage walk past Christ Church and the Gaiety Theatre.", category: "Heritage" },
            { name: "Viceregal Lodge", blurb: "The half-timbered seat of British India's summer government, with grounds.", category: "Heritage" },
            { name: "Jakhoo Temple ridge", blurb: "The highest point above Shimla, with cedar forest and valley views.", category: "Nature" },
            { name: "Kufri & Mashobra", blurb: "Cedar-forest viewpoints and quiet hamlets on the Shimla ridge.", category: "Nature" },
            { name: "Heritage-hotel high tea", blurb: "A colonial-style afternoon tea in a restored Raj-era property.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Rail", detail: "The UNESCO Kalka–Shimla narrow-gauge railway is the iconic approach; we curate the most scenic stretch." },
            { mode: "Air", detail: "Chandigarh (IXC) is the practical airport with a 3.5-hour chauffeured climb; Shimla (SLV) has limited service." },
            { mode: "Road", detail: "Chauffeured legs from Chandigarh (3.5 hrs) and onward to Manali (7 hrs)." },
            { mode: "Private Fleet", detail: "Hill-capable, GPS-tracked vehicles for the western Himalayan circuit." },
        ],
        whereToStay: [
            { tier: "Raj-heritage tier", detail: "Restored colonial hotels on the Ridge with valley-facing verandahs." },
            { tier: "Forest-resort tier", detail: "Cedar-forest luxury resorts at Mashobra and Chharabra above the town." },
            { tier: "Boutique tier", detail: "Heritage cottages with fireplaces for a quiet two-night base." },
        ],
        whereToEat: [
            { name: "Colonial high tea", detail: "A Raj-era afternoon tea service in a restored heritage hotel." },
            { name: "Himachali table", detail: "A traditional dham thali — local lentils and slow-cooked mountain fare." },
            { name: "Mall Road classics", detail: "An escorted trail through Shimla's century-old bakeries and cafés." },
        ],
        faqs: [
            { q: "Is the toy train worth it?", a: "Decisively — the UNESCO Kalka–Shimla railway is one of the great mountain rail journeys. We curate the most scenic stretch with a fleet handover either side." },
            { q: "How many nights in Shimla?", a: "Two nights covers the heritage core, the toy train, and a ridge viewpoint without rushing — and acclimatises you for the deeper Himalaya." },
            { q: "Does it snow in Shimla?", a: "Yes, December–February, which is atmospheric but disrupts roads and rail. Spring and autumn are the smoothest windows." },
            { q: "How does Shimla connect to Manali and Leh?", a: "Shimla is the gateway; the western circuit runs Shimla → Manali → (seasonally) Leh by chauffeured fleet." },
        ],
        relatedCities: ["manali", "leh"],
        relatedTours: [
            { label: "Himalayan Peaks", href: "/destinations/region/himalayas" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Expert heritage guides", href: "/expert-guides" },
        ],
    },
    {
        slug: "manali",
        name: "Manali",
        region: "Himalayan Peaks",
        regionSlug: "himalayas",
        state: "Himachal Pradesh",
        tagline: "Gateway to the High Passes",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Manali_City.jpg",
        coordinates: { lat: 32.2432, lng: 77.1892 },
        answer:
            "Manali is a resort town in the Kullu Valley of Himachal Pradesh, India, at roughly 2,000 m on the Beas river. It is known for the cedar-forested Old Manali, the Hadimba Devi temple, the Solang Valley adventure belt, and as the southern gateway to the high Trans-Himalayan passes — Rohtang and the Atal Tunnel toward Lahaul and Leh. Manali is the adventure-and-staging hub of the western Himalayan circuit. MyTripMyTravel operates Manali as a high-passes launch leg with luxury riverside stays and curated mountain access.",
        intro: [
            "Manali is the western Himalaya's hinge: relaxed cedar-and-river resort town on one side, and the staging point for the high passes on the other. How you use it depends on which way you're facing.",
            "Old Manali and the Hadimba temple sit in deodar forest above the Beas; the Solang and Sissu belts deliver the adventure register; and the Atal Tunnel has transformed access to Lahaul, opening the Trans-Himalayan landscape that was once a seasonal gamble over the Rohtang pass.",
            "MyTripMyTravel runs Manali two ways: as a restful riverside luxury stay, and as the acclimatised launch point for the seasonal high-altitude drive toward Leh. Permits, vehicle capability, and pacing are handled as a single controlled operation.",
        ],
        quickFacts: [
            { label: "State", value: "Himachal Pradesh" },
            { label: "Altitude", value: "≈ 2,000 m" },
            { label: "Best known for", value: "Kullu Valley, Solang, Atal Tunnel, high passes" },
            { label: "Ideal stay", value: "2–3 nights" },
            { label: "From Shimla", value: "≈ 250 km · 7 hrs" },
            { label: "To Leh (seasonal)", value: "≈ 430 km · 2-day chauffeured drive" },
            { label: "Nearest airport", value: "Bhuntar/Kullu (KUU)" },
            { label: "Signature", value: "High-passes launch" },
        ],
        bestTime: {
            window: "March – June, September – November",
            narrative:
                "March to June is pleasant with the high passes opening progressively. September to November offers clear post-monsoon air. The Manali–Leh road is typically open only roughly June to September. December–February brings snow and adventure-sports season but limited high-altitude access. The monsoon risks landslides. For the Leh connection, plan June–September.",
        },
        thingsToDo: [
            { name: "Hadimba Devi temple", blurb: "The 1553 cedar-shingled shrine set in old-growth deodar forest.", category: "Heritage" },
            { name: "Solang & Sissu", blurb: "The adventure and snow belt, and the Lahaul side of the Atal Tunnel.", category: "Adventure" },
            { name: "Old Manali walk", blurb: "An escorted route through the riverside village cafés and orchards.", category: "Culture" },
            { name: "Atal Tunnel to Lahaul", blurb: "A day crossing into the stark Trans-Himalayan landscape and back.", category: "Adventure" },
            { name: "Naggar Castle", blurb: "The Kullu-era castle and Roerich estate down the valley.", category: "Heritage" },
            { name: "Riverside spa session", blurb: "A Himalayan wellness treatment paired through our sanctuary wing.", category: "Wellness" },
        ],
        howToReach: [
            { mode: "Air", detail: "Bhuntar/Kullu (KUU) is the nearest airport; most missions route via Chandigarh with a chauffeured climb." },
            { mode: "Road", detail: "Chauffeured legs from Shimla (7 hrs) and Chandigarh, plus the seasonal Leh drive." },
            { mode: "Private Fleet", detail: "High-altitude-capable, GPS-tracked vehicles for the passes and tunnel routes." },
            { mode: "Rail", detail: "The nearest railhead is Joginder Nagar/Chandigarh; we manage the onward mountain transfer." },
        ],
        whereToStay: [
            { tier: "Riverside-luxury tier", detail: "Beas-facing luxury resorts with spa wings and orchard grounds." },
            { tier: "Forest-villa tier", detail: "Private cedar-forest villas above Old Manali for a quiet base." },
            { tier: "Expedition tier", detail: "Acclimatisation-grade comfort stays for guests staging the Leh drive." },
        ],
        whereToEat: [
            { name: "Himachali trout table", detail: "Fresh Beas trout and local dham fare at a curated riverside restaurant." },
            { name: "Old Manali café trail", detail: "An escorted walk through the village's long-running orchard cafés." },
            { name: "Estate dining", detail: "Farm-to-table mountain cuisine at a forest-villa kitchen." },
        ],
        faqs: [
            { q: "Can you drive from Manali to Leh?", a: "Yes, seasonally — roughly June to September, as a controlled two-day chauffeured high-altitude drive with acclimatisation built in." },
            { q: "How many nights in Manali?", a: "Two to three — more if staging the Leh drive, which requires acclimatisation time." },
            { q: "Is the Atal Tunnel worth a day?", a: "Yes — it opens the stark Lahaul landscape on a comfortable day trip that previously required the difficult Rohtang crossing." },
            { q: "When are the high passes open?", a: "Roughly June to September. Outside that window, Manali is a riverside-luxury and adventure base rather than a Leh launch." },
        ],
        relatedCities: ["shimla", "leh"],
        relatedTours: [
            { label: "Himalayan Peaks", href: "/destinations/region/himalayas" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
        ],
    },
    {
        slug: "leh",
        name: "Leh",
        region: "Himalayan Peaks",
        regionSlug: "himalayas",
        state: "Ladakh",
        tagline: "The High-Altitude Desert Kingdom",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/0/03/Leh_Palace_Ladakh.jpg",
        coordinates: { lat: 34.1526, lng: 77.5771 },
        answer:
            "Leh is the principal town of Ladakh, India, set at roughly 3,500 m in a high-altitude cold desert in the Trans-Himalaya. It was the capital of the historic Kingdom of Ladakh and is dominated by the nine-storey Leh Palace. The region is known for Buddhist monasteries (Thiksey, Hemis, Diskit), the Pangong and Tso Moriri lakes, the Nubra Valley, and some of the highest motorable roads in the world. Leh requires acclimatisation. MyTripMyTravel operates Ladakh as a controlled high-altitude mission with medically aware pacing, oxygen-equipped fleet, and curated monastery and lake access.",
        intro: [
            "Leh is the most demanding and most rewarding destination in the Indian Himalaya — a 3,500 m cold desert where the air, the light, and the Buddhist culture are unlike anywhere else in the country. It is also the one place where the architecture of the visit is a medical matter, not just a logistical one.",
            "The headline is the landscape and the monasteries: the nine-storey Leh Palace over the old town, the great gompas of Thiksey and Hemis, the impossible blue of Pangong, and the dunes and double-humped camels of Nubra reached over some of the highest passes on earth.",
            "MyTripMyTravel runs Ladakh as a controlled mission: a deliberate acclimatisation day on arrival, oxygen-equipped and high-altitude-capable fleet, medically aware pacing, and curated monastery and lake access sequenced so the altitude is respected and the region is experienced at its best.",
        ],
        quickFacts: [
            { label: "Territory", value: "Ladakh (UT)" },
            { label: "Altitude", value: "≈ 3,500 m (acclimatisation required)" },
            { label: "Best known for", value: "Monasteries, Pangong, Nubra, high passes" },
            { label: "Ideal stay", value: "5–7 nights" },
            { label: "Access", value: "Fly Leh (IXL) — recommended over the road" },
            { label: "Season", value: "Roughly May – September" },
            { label: "Pacing", value: "Medically aware, oxygen-equipped" },
            { label: "Language", value: "Ladakhi, Hindi, English" },
        ],
        bestTime: {
            window: "May – September",
            narrative:
                "Leh is accessible roughly May to September. June to August is the reliable window with open passes and the Hemis festival; May and September are quieter with sharper light. Winter (October–April) seals most passes and drops temperatures far below freezing — only specialist winter itineraries operate. The first 24–36 hours must be a rest-and-acclimatise buffer regardless of season.",
        },
        thingsToDo: [
            { name: "Thiksey & Hemis monasteries", blurb: "The great Ladakhi gompas — Thiksey at dawn prayer, Hemis with its festival.", category: "Culture" },
            { name: "Pangong Tso", blurb: "The surreal high-altitude lake on the China frontier, over the Chang La pass.", category: "Nature" },
            { name: "Nubra Valley", blurb: "Dunes, double-humped camels, and Diskit monastery over Khardung La.", category: "Adventure" },
            { name: "Leh Palace & old town", blurb: "An escorted walk through the nine-storey palace and the historic bazaar.", category: "Heritage" },
            { name: "Indus & Zanskar confluence", blurb: "The dramatic river meeting point with optional gentle rafting.", category: "Nature" },
            { name: "Acclimatisation day", blurb: "A deliberate rest-and-light-walk first day — part of the medical protocol.", category: "Wellness" },
        ],
        howToReach: [
            { mode: "Air", detail: "Flying into Leh (IXL) is strongly recommended; we build a mandatory acclimatisation buffer on arrival." },
            { mode: "Road", detail: "The seasonal Manali–Leh and Srinagar–Leh drives are spectacular but demanding two-day high-altitude routes." },
            { mode: "Private Fleet", detail: "Oxygen-equipped, high-altitude-capable, GPS-tracked vehicles with inner-line permits handled." },
            { mode: "Private Fleet", detail: "Medically aware chauffeur-guides trained for altitude response and paced sightseeing." },
        ],
        whereToStay: [
            { tier: "Luxury-camp tier", detail: "Premium tented camps at Nubra and Pangong with heated en-suite comfort." },
            { tier: "Boutique-Ladakhi tier", detail: "Design hotels in Leh built in traditional style with oxygen support on call." },
            { tier: "Heritage tier", detail: "Restored Ladakhi houses with courtyards for the acclimatisation nights." },
        ],
        whereToEat: [
            { name: "Ladakhi table", detail: "Thukpa, momos, and apricot-based dishes at a curated traditional kitchen." },
            { name: "Camp dining", detail: "Heated-camp dinners under exceptionally dark skies at Nubra or Pangong." },
            { name: "Leh old-town café trail", detail: "An escorted walk through the bazaar's long-running cafés." },
        ],
        faqs: [
            { q: "Do I need to acclimatise in Leh?", a: "Yes — without exception. We build a 24–36 hour rest buffer on arrival and pace all sightseeing with medically aware chauffeur-guides and an oxygen-equipped fleet." },
            { q: "Should I fly or drive to Leh?", a: "We recommend flying in (IXL) and optionally driving out once acclimatised. The Manali/Srinagar drives are spectacular but demanding." },
            { q: "How many nights does Ladakh need?", a: "Five to seven — to acclimatise properly and reach Pangong and Nubra without altitude risk or rushing." },
            { q: "Is Ladakh open in winter?", a: "Most of it closes October–April. Only specialist winter itineraries operate; the standard season is May–September." },
        ],
        relatedCities: ["manali", "shimla"],
        relatedTours: [
            { label: "Himalayan Peaks", href: "/destinations/region/himalayas" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
        ],
    },
    {
        slug: "gangtok",
        name: "Gangtok",
        region: "Sikkim Silk Route",
        regionSlug: "sikkim",
        state: "Sikkim",
        tagline: "The Capital Beneath Kanchenjunga",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tsomgo_Lake%2C_Sikkim.jpg",
        coordinates: { lat: 27.3389, lng: 88.6065 },
        answer:
            "Gangtok is the capital of Sikkim, India, set on a ridge at roughly 1,650 m in the eastern Himalaya, with views toward Kanchenjunga, the world's third-highest peak. It is known for Buddhist monasteries (Rumtek, Enchey), the Tsomgo glacial lake and Baba Mandir on the old Silk Route toward Nathu La, and a clean, orderly hill-capital character. Gangtok is the gateway to the Sikkim circuit. MyTripMyTravel operates Gangtok as a monastery-and-Silk-Route leg with ridge-view stays and permit-managed high-altitude access.",
        intro: [
            "Gangtok is the most orderly hill capital in India and the natural base for Sikkim — a clean ridge city with the snow wall of Kanchenjunga on a clear morning and Buddhist Sikkim within easy reach.",
            "Rumtek, the seat of the Karmapa, and the older Enchey monastery anchor the spiritual register. East of the city, the old Silk Route climbs to the glacial Tsomgo Lake and Baba Mandir toward the Nathu La frontier — a permit-controlled high-altitude day that is the region's signature drive.",
            "MyTripMyTravel runs Gangtok with ridge-view stays, permit-managed Silk Route access, and a route timed for the Kanchenjunga dawn before the cloud builds.",
        ],
        quickFacts: [
            { label: "State", value: "Sikkim (capital)" },
            { label: "Altitude", value: "≈ 1,650 m" },
            { label: "Best known for", value: "Rumtek, Tsomgo Lake, old Silk Route" },
            { label: "Ideal stay", value: "2–3 nights" },
            { label: "Nearest airport", value: "Pakyong (PYG) / Bagdogra (IXB)" },
            { label: "Permits", value: "Required for Tsomgo / Nathu La" },
            { label: "Signature", value: "Silk Route high-altitude day" },
            { label: "Language", value: "Nepali, Sikkimese, English" },
        ],
        bestTime: {
            window: "March – May, October – December",
            narrative:
                "March to May brings rhododendron bloom and clear views; October to December offers the sharpest post-monsoon Kanchenjunga clarity. The monsoon (June–September) is heavy with landslide risk on the mountain roads. Winter is cold with possible snow on the Silk Route. Spring and autumn are optimal for both views and high-altitude access.",
        },
        thingsToDo: [
            { name: "Rumtek Monastery", blurb: "The seat of the Karmapa — Sikkim's most significant Buddhist institution.", category: "Culture" },
            { name: "Tsomgo Lake & Baba Mandir", blurb: "The permit-controlled glacial-lake and old Silk Route high-altitude day.", category: "Nature" },
            { name: "Enchey Monastery", blurb: "The 200-year-old monastery above the city with a Cham dance calendar.", category: "Culture" },
            { name: "Kanchenjunga viewpoint", blurb: "A dawn ridge viewpoint timed before the cloud builds on the peak.", category: "Nature" },
            { name: "MG Marg promenade", blurb: "The pedestrian heart of the clean hill capital, escorted in the evening.", category: "Culture" },
            { name: "Tea estate visit", blurb: "A Temi-estate visit on the southern Sikkim route, with a tasting.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Air", detail: "Pakyong (PYG) is the closest airport; Bagdogra (IXB) is the reliable hub with a 4-hour chauffeured climb." },
            { mode: "Road", detail: "Chauffeured legs from Bagdogra and onward to Pelling and north Sikkim." },
            { mode: "Private Fleet", detail: "Hill-capable, GPS-tracked vehicles with Silk Route permits managed." },
            { mode: "Rail", detail: "New Jalpaiguri (NJP) is the nearest railhead; we handle the onward mountain transfer." },
        ],
        whereToStay: [
            { tier: "Ridge-view tier", detail: "Kanchenjunga-facing luxury hotels on the Gangtok ridge." },
            { tier: "Boutique-monastery tier", detail: "Design retreats near Rumtek with valley quiet." },
            { tier: "Heritage tier", detail: "Restored Sikkimese houses for a culturally grounded stay." },
        ],
        whereToEat: [
            { name: "Sikkimese table", detail: "Phagshapa, gundruk, and momos at a curated traditional kitchen." },
            { name: "Ridge-view dining", detail: "Contemporary Himalayan menus with a Kanchenjunga-facing terrace." },
            { name: "MG Marg trail", detail: "An escorted evening tasting along the capital's promenade kitchens." },
        ],
        faqs: [
            { q: "Do I need a permit for the Silk Route?", a: "Yes — Tsomgo Lake, Baba Mandir, and Nathu La require permits, which we arrange and manage as part of the mission." },
            { q: "How many nights in Gangtok?", a: "Two to three — for the monasteries, the Silk Route high-altitude day, and a Kanchenjunga dawn without rushing." },
            { q: "When are Kanchenjunga views best?", a: "Clear post-monsoon mornings October–December, and spring March–May. Monsoon obscures the peak." },
            { q: "How does Gangtok connect to the rest of Sikkim?", a: "It is the gateway — the circuit runs Gangtok → Pelling → north Sikkim (Lachung) by permit-managed chauffeured fleet." },
        ],
        relatedCities: ["pelling", "lachung"],
        relatedTours: [
            { label: "Sikkim Silk Route", href: "/destinations/region/sikkim" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Expert heritage guides", href: "/expert-guides" },
        ],
    },
    {
        slug: "pelling",
        name: "Pelling",
        region: "Sikkim Silk Route",
        regionSlug: "sikkim",
        state: "Sikkim",
        tagline: "The Kanchenjunga Balcony",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/9/95/Kangchenjunga_from_Pelling.jpg",
        coordinates: { lat: 27.3009, lng: 88.2396 },
        answer:
            "Pelling is a hill town in West Sikkim, India, at roughly 2,150 m, known for the closest accessible panoramic views of Kanchenjunga, the world's third-highest peak. Its landmarks include the 17th-century Pemayangtse Monastery, the ruins of Rabdentse (the former Sikkimese capital), the Khecheopalri sacred lake, and the Sangachoeling Skywalk. Pelling is the western anchor of the Sikkim circuit. MyTripMyTravel operates Pelling as a Kanchenjunga-view and heritage-monastery leg with dawn-facing luxury stays.",
        intro: [
            "Pelling exists for one reason above all: it is the closest you can comfortably get to a full-frame view of Kanchenjunga. On a clear dawn the entire massif fills the horizon from a hotel balcony — which is why the leg is built around the morning, not the afternoon.",
            "Around the view sits real heritage: Pemayangtse, one of Sikkim's oldest and most important monasteries; the atmospheric ruins of Rabdentse, the former royal capital; and the sacred Khecheopalri Lake. The Sangachoeling Skywalk adds a dramatic modern viewpoint.",
            "MyTripMyTravel runs Pelling with east-facing luxury rooms, a dawn protocol for the Kanchenjunga window, and an escorted monastery-and-ruins circuit before the cloud closes the peak.",
        ],
        quickFacts: [
            { label: "State", value: "Sikkim (West)" },
            { label: "Altitude", value: "≈ 2,150 m" },
            { label: "Best known for", value: "Kanchenjunga views, Pemayangtse, Rabdentse" },
            { label: "Ideal stay", value: "2 nights" },
            { label: "From Gangtok", value: "≈ 110 km · 4.5 hrs" },
            { label: "Nearest airport", value: "Pakyong (PYG) / Bagdogra (IXB)" },
            { label: "Signature", value: "Dawn Kanchenjunga panorama" },
            { label: "Language", value: "Nepali, Sikkimese, English" },
        ],
        bestTime: {
            window: "March – May, October – December",
            narrative:
                "October to December gives the sharpest, most reliable Kanchenjunga views; March to May adds rhododendron bloom. The monsoon (June–September) usually curtains the peak and risks landslides on the West Sikkim roads. Winter is cold but clear. For the view that defines Pelling, autumn and spring are optimal.",
        },
        thingsToDo: [
            { name: "Kanchenjunga dawn", blurb: "An east-facing balcony protocol for the full massif before cloud build-up.", category: "Nature" },
            { name: "Pemayangtse Monastery", blurb: "One of Sikkim's oldest gompas, with a renowned wooden sculpture.", category: "Culture" },
            { name: "Rabdentse ruins", blurb: "The atmospheric former royal capital on a forest ridge.", category: "Heritage" },
            { name: "Khecheopalri Lake", blurb: "A sacred wish-fulfilling lake in pristine forest, escorted.", category: "Nature" },
            { name: "Sangachoeling Skywalk", blurb: "The glass skywalk and giant statue with a valley panorama.", category: "Adventure" },
            { name: "Rimbi & Kanchenjunga falls", blurb: "Forest waterfalls on the West Sikkim loop.", category: "Nature" },
        ],
        howToReach: [
            { mode: "Road", detail: "The chauffeured Gangtok–Pelling leg (≈ 4.5 hrs) is a scenic West Sikkim drive." },
            { mode: "Air", detail: "Pakyong (PYG) or Bagdogra (IXB) with a chauffeured mountain transfer." },
            { mode: "Private Fleet", detail: "Hill-capable, GPS-tracked vehicles for the West Sikkim loop." },
            { mode: "Rail", detail: "New Jalpaiguri (NJP) is the railhead; we manage the onward transfer." },
        ],
        whereToStay: [
            { tier: "Kanchenjunga-view tier", detail: "East-facing luxury hotels engineered around the dawn panorama." },
            { tier: "Forest-retreat tier", detail: "Quiet boutique lodges near Pemayangtse and the ruins." },
            { tier: "Heritage tier", detail: "Sikkimese-style stays for a culturally grounded base." },
        ],
        whereToEat: [
            { name: "Sikkimese table", detail: "Local gundruk, phagshapa, and momos at a curated mountain kitchen." },
            { name: "View-deck dining", detail: "Contemporary Himalayan menus with the Kanchenjunga balcony." },
            { name: "Forest-lodge dinner", detail: "Farm-to-table West Sikkim fare at a boutique retreat." },
        ],
        faqs: [
            { q: "Is Pelling worth it just for the view?", a: "Yes — it is the closest comfortable full-frame Kanchenjunga panorama in India, and it pairs with serious heritage at Pemayangtse and Rabdentse." },
            { q: "How many nights in Pelling?", a: "Two — one dawn for the peak window plus the monastery-and-ruins circuit, with a weather buffer." },
            { q: "When are views most reliable?", a: "October–December for the clearest post-monsoon mornings; spring also works. Monsoon usually obscures the peak." },
            { q: "How does Pelling fit the Sikkim circuit?", a: "It is the western anchor — the circuit runs Gangtok → Pelling, optionally extending to north Sikkim (Lachung)." },
        ],
        relatedCities: ["gangtok", "lachung"],
        relatedTours: [
            { label: "Sikkim Silk Route", href: "/destinations/region/sikkim" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
        ],
    },
    {
        slug: "lachung",
        name: "Lachung",
        region: "Sikkim Silk Route",
        regionSlug: "sikkim",
        state: "Sikkim",
        tagline: "Gateway to the Yumthang Valley",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Yumthang_Valley_Sikkim.jpg",
        coordinates: { lat: 27.6896, lng: 88.7436 },
        answer:
            "Lachung is a mountain village in North Sikkim, India, at roughly 2,700 m at the confluence of the Lachen and Lachung rivers. It is the base for the Yumthang Valley — the 'Valley of Flowers' — and the high-altitude Zero Point near the Tibet frontier, reached through a permit-controlled protected zone. Lachung is the deep-Himalaya extension of the Sikkim circuit. MyTripMyTravel operates Lachung as a permit-managed, acclimatised high-valley mission with curated stays and medically aware pacing.",
        intro: [
            "Lachung is where the Sikkim circuit goes deep — a North Sikkim village in a protected high zone that exists, for the traveller, as the base for the Yumthang Valley and the road toward Zero Point on the Tibetan frontier.",
            "Yumthang in spring is a genuine valley of rhododendron and primula; the higher reaches toward Zero Point are raw, snow-streaked, and permit-controlled. This is altitude and frontier country — the route, the permits, and the pacing matter as much as the scenery.",
            "MyTripMyTravel runs Lachung as a controlled extension: protected-area permits handled end to end, acclimatised pacing from a Gangtok base, and curated mountain-lodge stays in a region with limited infrastructure.",
        ],
        quickFacts: [
            { label: "State", value: "Sikkim (North)" },
            { label: "Altitude", value: "≈ 2,700 m (valley higher)" },
            { label: "Best known for", value: "Yumthang Valley, Zero Point, frontier zone" },
            { label: "Ideal stay", value: "1–2 nights (from Gangtok)" },
            { label: "From Gangtok", value: "≈ 120 km · 6 hrs" },
            { label: "Permits", value: "Protected-area permit required" },
            { label: "Season", value: "March – mid-June, October – December" },
            { label: "Pacing", value: "Acclimatised, permit-managed" },
        ],
        bestTime: {
            window: "March – mid-June, October – December",
            narrative:
                "Mid-March to mid-June is the rhododendron and primula bloom in Yumthang — the signature season. October to December offers clear, crisp high-valley views. The monsoon (late June–September) brings serious landslide risk on the North Sikkim road. Deep winter can close the route with snow. Spring is the iconic window.",
        },
        thingsToDo: [
            { name: "Yumthang Valley", blurb: "The 'Valley of Flowers' — rhododendron and primula in spring bloom.", category: "Nature" },
            { name: "Zero Point", blurb: "The permit-controlled high-altitude frontier viewpoint near Tibet.", category: "Adventure" },
            { name: "Yumthang hot springs", blurb: "Natural sulphur springs in the valley, escorted.", category: "Wellness" },
            { name: "Lachung Monastery", blurb: "The 1880 village gompa with Cham-dance heritage.", category: "Culture" },
            { name: "Lachen & Gurudongmar option", blurb: "An extended itinerary to one of the world's highest lakes (altitude permitting).", category: "Adventure" },
            { name: "Alpine village walk", blurb: "An escorted walk through the apple-and-rhododendron hamlet.", category: "Culture" },
        ],
        howToReach: [
            { mode: "Road", detail: "The chauffeured Gangtok–Lachung leg (≈ 6 hrs) through North Sikkim, permits managed." },
            { mode: "Private Fleet", detail: "High-altitude-capable, GPS-tracked vehicles with protected-area permits handled." },
            { mode: "Air", detail: "Access is via Gangtok; nearest airports are Pakyong (PYG) and Bagdogra (IXB)." },
            { mode: "Rail", detail: "New Jalpaiguri (NJP) railhead, then the staged chauffeured climb via Gangtok." },
        ],
        whereToStay: [
            { tier: "Mountain-lodge tier", detail: "The best available curated lodges in a limited-infrastructure village." },
            { tier: "Riverside tier", detail: "Lachen/Lachung river-confluence stays with valley quiet." },
            { tier: "Gangtok-base tier", detail: "A Gangtok luxury base with the high valley as a managed extension." },
        ],
        whereToEat: [
            { name: "Mountain-lodge table", detail: "Hearty Sikkimese thukpa and momos in the high village." },
            { name: "Valley packed dining", detail: "A curated warm meal on the Yumthang and Zero Point day." },
            { name: "Riverside dinner", detail: "Simple, fresh local fare at the river-confluence lodge." },
        ],
        faqs: [
            { q: "Do I need permits for Lachung and Yumthang?", a: "Yes — North Sikkim is a protected area requiring permits, which we arrange and manage end to end as part of the mission." },
            { q: "When is the Yumthang bloom?", a: "Roughly mid-March to mid-June for rhododendron and primula — the valley's signature season." },
            { q: "How is Lachung accessed?", a: "From a Gangtok base, as a permit-managed, acclimatised chauffeured extension of about 6 hours each way." },
            { q: "Is Zero Point always open?", a: "No — it is high, frontier-controlled, and weather-dependent. We confirm access and pace it with acclimatisation in mind." },
        ],
        relatedCities: ["gangtok", "pelling"],
        relatedTours: [
            { label: "Sikkim Silk Route", href: "/destinations/region/sikkim" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Expert heritage guides", href: "/expert-guides" },
        ],
    },
    {
        slug: "port-blair",
        name: "Port Blair",
        region: "Andaman Islands",
        regionSlug: "andaman",
        state: "Andaman & Nicobar Islands",
        tagline: "The Archipelago Gateway",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/71/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman%2C_India.jpg",
        coordinates: { lat: 11.6234, lng: 92.7265 },
        answer:
            "Port Blair is the capital of the Andaman & Nicobar Islands, India, on South Andaman in the Bay of Bengal. It is the entry point and logistics hub for the archipelago, known for the Cellular Jail National Memorial (the colonial-era prison and its sound-and-light show), Ross Island, and Corbyn's Cove. Port Blair is where every Andaman itinerary begins before the ferry to Havelock and Neil. MyTripMyTravel operates Port Blair as the arrival-and-heritage anchor with private transfers and curated ferry logistics to the island sanctuaries.",
        intro: [
            "Port Blair is the necessary first chapter of the Andamans — the only meaningful air gateway and the place where the islands' colonial history is told before you move on to the beaches.",
            "The Cellular Jail is the heavyweight: the colonial penal complex whose sound-and-light show is the canonical Andaman heritage experience. Ross Island, the ruined former administrative seat, and Corbyn's Cove fill out a single arrival day before the sea leg.",
            "MyTripMyTravel uses Port Blair as the logistics anchor: private airport handover, a curated heritage half-day, and managed premium-ferry transfers to Havelock and Neil so the island portion is seamless rather than a queue.",
        ],
        quickFacts: [
            { label: "Territory", value: "Andaman & Nicobar Islands (capital)" },
            { label: "Best known for", value: "Cellular Jail, Ross Island, ferry hub" },
            { label: "Ideal stay", value: "1–2 nights (arrival/departure)" },
            { label: "Airport", value: "Veer Savarkar Intl (IXZ)" },
            { label: "To Havelock", value: "≈ 1.5–2 hrs by premium ferry" },
            { label: "Signature", value: "Heritage + ferry logistics" },
            { label: "Language", value: "Hindi, Bengali, English, Tamil" },
            { label: "Role", value: "Archipelago gateway" },
        ],
        bestTime: {
            window: "October – May",
            narrative:
                "October to May is the dry, calm-sea season ideal for ferry transfers and water activities. December to March is peak with the best visibility. The southwest monsoon (June–September) brings rough seas that disrupt inter-island ferries and water sports. For seamless island logistics, plan within the October–May window.",
        },
        thingsToDo: [
            { name: "Cellular Jail Memorial", blurb: "The colonial penal complex and its evening sound-and-light show.", category: "Heritage" },
            { name: "Ross Island", blurb: "The ruined former British administrative capital, now reclaimed by forest.", category: "Heritage" },
            { name: "Corbyn's Cove", blurb: "The palm-fringed beach closest to the capital for a first afternoon.", category: "Nature" },
            { name: "Anthropological Museum", blurb: "Context on the indigenous Andamanese peoples before the islands.", category: "Culture" },
            { name: "Premium ferry transfer", blurb: "A managed fast-ferry crossing to Havelock or Neil, logistics handled.", category: "Adventure" },
            { name: "North Bay snorkelling", blurb: "An optional reef half-day from the capital's harbour.", category: "Adventure" },
        ],
        howToReach: [
            { mode: "Air", detail: "Veer Savarkar International (IXZ) connects Chennai, Kolkata, Delhi, and Bengaluru; we manage handover." },
            { mode: "Private Fleet", detail: "GPS-tracked island vehicles for the heritage day and jetty transfers." },
            { mode: "Private Fleet", detail: "Managed premium-ferry booking and luggage handling to Havelock and Neil." },
            { mode: "Road", detail: "Compact island road network for the Port Blair sights and the jetty." },
        ],
        whereToStay: [
            { tier: "Harbour-luxury tier", detail: "Sea-facing hotels near the jetty for seamless ferry mornings." },
            { tier: "Boutique tier", detail: "Quiet design hotels for the arrival or departure night." },
            { tier: "Transit tier", detail: "Airport-convenient comfort stays for tight flight windows." },
        ],
        whereToEat: [
            { name: "Andaman seafood", detail: "Fresh reef catch grilled island-style at a curated harbour table." },
            { name: "Bengali-Andaman fusion", detail: "The islands' distinctive settler cuisine at a heritage restaurant." },
            { name: "Jetty-side café", detail: "An escorted quick table aligned to the ferry schedule." },
        ],
        faqs: [
            { q: "Do I need to stay in Port Blair?", a: "At least one night on arrival — it is the only air gateway and the ferry hub. We keep it efficient with a curated heritage half-day before the island leg." },
            { q: "How do I get to Havelock?", a: "By premium fast ferry, roughly 1.5–2 hours, with booking and luggage logistics managed by us." },
            { q: "Is the Cellular Jail worth it?", a: "Yes — the memorial and its evening sound-and-light show are the canonical Andaman heritage experience." },
            { q: "When should I avoid the Andamans?", a: "The June–September monsoon brings rough seas that disrupt ferries. October–May is the reliable window." },
        ],
        relatedCities: ["havelock", "neil"],
        relatedTours: [
            { label: "Andaman Islands", href: "/destinations/region/andaman" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
            { label: "Expert heritage guides", href: "/expert-guides" },
        ],
    },
    {
        slug: "havelock",
        name: "Havelock",
        region: "Andaman Islands",
        regionSlug: "andaman",
        state: "Andaman & Nicobar Islands",
        tagline: "Radhanagar & the Diving Reefs",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/71/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman%2C_India.jpg",
        coordinates: { lat: 11.9735, lng: 93.0009 },
        answer:
            "Havelock Island (officially Swaraj Dweep) is the premier resort island of the Andamans, India, in the Bay of Bengal. It is known for Radhanagar Beach — regularly rated among Asia's best beaches — Elephant Beach, and some of the finest scuba diving and snorkelling reefs in the country. Havelock is the centrepiece of any Andaman luxury itinerary. MyTripMyTravel operates Havelock as the marine-sanctuary leg with beachfront luxury stays, private dive arrangements, and managed ferry logistics from Port Blair.",
        intro: [
            "Havelock is the reason most people go to the Andamans. Radhanagar's long arc of white sand and clear water is the signature image of Indian island travel, and the reefs around the island are the best accessible diving in the country.",
            "Beyond Radhanagar, Elephant Beach delivers easy snorkelling and the dive operators here run everything from first-time discovery dives to certified wreck and reef sites. The island has quietly built a genuine beachfront-luxury layer that did not exist a decade ago.",
            "MyTripMyTravel runs Havelock as the marine sanctuary: beachfront luxury stays, private and small-group dive arrangements with vetted operators, and a Radhanagar sunset protocol — sequenced so the island is restorative, not a packaged day trip.",
        ],
        quickFacts: [
            { label: "Territory", value: "Andaman & Nicobar Islands" },
            { label: "Best known for", value: "Radhanagar Beach, scuba diving, reefs" },
            { label: "Ideal stay", value: "3–4 nights" },
            { label: "From Port Blair", value: "≈ 1.5–2 hrs by premium ferry" },
            { label: "Signature", value: "Diving + beachfront luxury" },
            { label: "Activity", value: "Scuba, snorkelling, sea kayaking" },
            { label: "Season", value: "October – May" },
            { label: "Official name", value: "Swaraj Dweep" },
        ],
        bestTime: {
            window: "October – May",
            narrative:
                "October to May offers calm seas, excellent underwater visibility, and reliable ferries. December to April is peak dive season with the clearest water. The southwest monsoon (June–September) brings rough seas, reduced visibility, and ferry disruption. For diving and beach time, the dry window is essential.",
        },
        thingsToDo: [
            { name: "Radhanagar Beach", blurb: "Asia's celebrated white-sand arc, with a curated sunset protocol.", category: "Nature" },
            { name: "Scuba diving", blurb: "Private or small-group dives with vetted operators on the best reefs.", category: "Adventure" },
            { name: "Elephant Beach snorkelling", blurb: "Shallow, accessible coral and fish, reached by a short boat.", category: "Adventure" },
            { name: "Sea kayaking", blurb: "A guided mangrove or bioluminescence paddle, conditions permitting.", category: "Adventure" },
            { name: "Reef conservation briefing", blurb: "A responsible-marine session with a local dive school.", category: "Wellness" },
            { name: "Private beach dining", blurb: "A sandbar or beachfront table arranged through the resort.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Private Fleet", detail: "Managed premium fast-ferry from Port Blair (≈ 1.5–2 hrs) with luggage handled." },
            { mode: "Air", detail: "Access via Port Blair (IXZ); we sequence the flight-and-ferry connection." },
            { mode: "Private Fleet", detail: "Island vehicles for resort, Radhanagar, and dive-jetty transfers." },
            { mode: "Private Fleet", detail: "Inter-island ferry to Neil for a combined island itinerary." },
        ],
        whereToStay: [
            { tier: "Beachfront-luxury tier", detail: "Vijaynagar and Radhanagar-side luxury resorts with direct beach access." },
            { tier: "Eco-luxury tier", detail: "Design eco-resorts set in island forest near the dive scene." },
            { tier: "Villa tier", detail: "Private pool villas for a secluded marine-sanctuary stay." },
        ],
        whereToEat: [
            { name: "Beachfront seafood", detail: "Fresh-caught reef fish grilled at a curated Radhanagar-side table." },
            { name: "Resort fine dining", detail: "Contemporary coastal menus with an open-air ocean setting." },
            { name: "Dive-shack classics", detail: "An escorted casual trail through the island's long-running kitchens." },
        ],
        faqs: [
            { q: "How many nights on Havelock?", a: "Three to four — enough for Radhanagar, multiple dives or snorkelling, and genuine down-regulation rather than a rushed day." },
            { q: "Can you arrange private diving?", a: "Yes — private or small-group dives with vetted operators, suitable for first-timers through certified divers." },
            { q: "How do I reach Havelock?", a: "By managed premium fast ferry from Port Blair, around 1.5–2 hours; we handle booking and luggage." },
            { q: "Is Havelock good in the monsoon?", a: "No — June–September brings rough seas and poor visibility. October–May is the diving and beach window." },
        ],
        relatedCities: ["neil", "port-blair"],
        relatedTours: [
            { label: "Andaman Islands", href: "/destinations/region/andaman" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
            { label: "Royal weddings & celebrations", href: "/weddings" },
        ],
    },
    {
        slug: "neil",
        name: "Neil Island",
        region: "Andaman Islands",
        regionSlug: "andaman",
        state: "Andaman & Nicobar Islands",
        tagline: "The Quiet Island",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/71/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman%2C_India.jpg",
        coordinates: { lat: 11.8333, lng: 93.0333 },
        answer:
            "Neil Island (officially Shaheed Dweep) is a small, quiet island in the Andamans, India, near Havelock. It is known for its slow pace, the Natural Bridge rock formation, and the calm beaches of Bharatpur, Laxmanpur, and Sitapur — the last famous for sunrises. Neil is the decompression counterpoint to Havelock's activity. MyTripMyTravel operates Neil as the final stillness leg of an Andaman itinerary, with boutique stays and unhurried, escorted island time.",
        intro: [
            "Neil is what you add to an Andaman itinerary when the point is to stop. It is small, slow, and deliberately under-developed compared with Havelock — the island where the trip down-regulates completely before the journey home.",
            "The Natural Bridge (Howrah Bridge) is the one 'sight', best at low tide; otherwise Neil is about Sitapur for sunrise, Laxmanpur for sunset, and Bharatpur for easy water. The pleasure here is the absence of an agenda.",
            "MyTripMyTravel runs Neil as the closing stillness leg: a boutique or eco-luxury stay, escorted-but-unhurried island time, and a managed ferry back to Port Blair sequenced cleanly against the return flight.",
        ],
        quickFacts: [
            { label: "Territory", value: "Andaman & Nicobar Islands" },
            { label: "Best known for", value: "Natural Bridge, quiet beaches, slow pace" },
            { label: "Ideal stay", value: "2 nights" },
            { label: "From Havelock", value: "≈ 1 hr by ferry" },
            { label: "From Port Blair", value: "≈ 1–1.5 hrs by ferry" },
            { label: "Signature", value: "Decompression / stillness leg" },
            { label: "Season", value: "October – May" },
            { label: "Official name", value: "Shaheed Dweep" },
        ],
        bestTime: {
            window: "October – May",
            narrative:
                "October to May brings calm seas, clear water, and reliable ferries — ideal for Neil's slow beach rhythm. December to April is the clearest. The monsoon (June–September) brings rough crossings and is best avoided for the inter-island legs. Plan Neil within the dry season alongside the rest of the Andaman circuit.",
        },
        thingsToDo: [
            { name: "Natural Bridge", blurb: "The 'Howrah Bridge' rock arch and tide pools, best at low tide.", category: "Nature" },
            { name: "Sitapur sunrise", blurb: "The island's celebrated east-facing dawn beach, escorted.", category: "Nature" },
            { name: "Laxmanpur sunset", blurb: "A long, calm west beach for the evening light.", category: "Nature" },
            { name: "Bharatpur snorkelling", blurb: "Easy, shallow reef and a glass-bottom-boat option.", category: "Adventure" },
            { name: "Island cycle loop", blurb: "An unhurried escorted ride through the small farming village.", category: "Culture" },
            { name: "Private beach dining", blurb: "A quiet beachfront table arranged through the boutique stay.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Private Fleet", detail: "Managed ferry from Havelock (≈ 1 hr) or Port Blair (≈ 1–1.5 hrs), logistics handled." },
            { mode: "Air", detail: "Access via Port Blair (IXZ); we sequence the flight-and-ferry timing for the return." },
            { mode: "Private Fleet", detail: "Compact island vehicles for the beaches and the Natural Bridge." },
            { mode: "Private Fleet", detail: "Final managed ferry to Port Blair aligned to the departure flight." },
        ],
        whereToStay: [
            { tier: "Boutique tier", detail: "Small design properties suited to the island's deliberate quiet." },
            { tier: "Eco-luxury tier", detail: "Forest-and-beach eco-resorts for a low-impact stay." },
            { tier: "Beachfront tier", detail: "The best available sea-facing rooms for the stillness leg." },
        ],
        whereToEat: [
            { name: "Beach-shack seafood", detail: "Simple, fresh reef catch at a curated quiet beachfront table." },
            { name: "Farm-to-table island fare", detail: "Produce from Neil's small farms at an eco-resort kitchen." },
            { name: "Sunset table", detail: "An escorted Laxmanpur-side dinner timed to the evening light." },
        ],
        faqs: [
            { q: "Is Neil worth adding to Havelock?", a: "Yes, if the goal is to decompress. Neil is quieter and slower — the natural closing stillness leg before the return flight." },
            { q: "How many nights on Neil?", a: "Two — enough for sunrise at Sitapur, the Natural Bridge at low tide, and genuine rest." },
            { q: "How do I reach Neil?", a: "By managed ferry from Havelock (about an hour) or directly from Port Blair; we handle the booking and timing." },
            { q: "What is the Natural Bridge?", a: "A naturally formed coral-rock arch on Neil's coast, accessible and most photogenic at low tide — we time the visit accordingly." },
        ],
        relatedCities: ["havelock", "port-blair"],
        relatedTours: [
            { label: "Andaman Islands", href: "/destinations/region/andaman" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
            { label: "Heritage dining wing", href: "/heritage-dining" },
        ],
    },
    {
        slug: "pushkar",
        name: "Pushkar",
        region: "Rajasthan Escapes",
        regionSlug: "rajasthan",
        state: "Rajasthan",
        tagline: "The Sacred Lake & Camel Fair Town",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Pushkar_Lake.jpg",
        coordinates: { lat: 26.4899, lng: 74.5511 },
        answer:
            "Pushkar is a temple town in the Ajmer district of Rajasthan, India, set around the sacred Pushkar Lake and home to one of the world's few temples dedicated to Brahma. It is renowned for the annual Pushkar Camel Fair, one of the largest livestock and cultural fairs on earth, and for its 52 ghats and pilgrim ritual life. Pushkar lies about 145 km from Jaipur and is a natural spiritual extension on the Rajasthan circuit. MyTripMyTravel operates Pushkar as a sacred-lake and fair-season leg with curated ghat access and heritage-tent or haveli stays.",
        intro: [
            "Pushkar is the spiritual register of Rajasthan — a small, intense pilgrim town wrapped around a holy lake, a complete tonal shift from the fort cities around it.",
            "The Brahma Temple is one of very few in the world, and the 52 ghats give the lake a ritual density that rewards an escorted dawn visit. Once a year the desert beyond town fills with the Pushkar Camel Fair: tens of thousands of animals, traders, and pilgrims in one of the planet's great cultural spectacles.",
            "MyTripMyTravel runs Pushkar as a curated sacred-lake leg — a respectful, guided ghat-and-temple morning — and, in season, as a luxury-tented base for the Camel Fair with private vantage and logistics handled.",
        ],
        quickFacts: [
            { label: "State", value: "Rajasthan" },
            { label: "Best known for", value: "Pushkar Lake, Brahma Temple, Camel Fair" },
            { label: "Ideal stay", value: "1 night (2 in fair season)" },
            { label: "From Jaipur", value: "≈ 145 km · 3 hrs" },
            { label: "From Jodhpur", value: "≈ 185 km · 3.5 hrs" },
            { label: "Nearest airport", value: "Jaipur (JAI) / Kishangarh (KQH)" },
            { label: "Signature", value: "Sacred lake + Camel Fair" },
            { label: "Language", value: "Hindi, Rajasthani, English" },
        ],
        bestTime: {
            window: "October – March",
            narrative:
                "October to March is comfortable for the lake and ghats. The Pushkar Camel Fair (around Kartik Purnima, October–November) is the headline event — book luxury tents months ahead. Summer (April–June) is severe desert heat; the monsoon is brief. For the fair, plan precisely around the lunar date; otherwise the cool winter window is ideal.",
        },
        thingsToDo: [
            { name: "Pushkar Lake & ghats", blurb: "An escorted, respectful dawn visit to the sacred lake and its 52 ghats.", category: "Culture" },
            { name: "Brahma Temple", blurb: "One of the world's very few temples to Brahma, in the old bazaar.", category: "Heritage" },
            { name: "Pushkar Camel Fair", blurb: "In season — private vantage on one of earth's great livestock-and-culture fairs.", category: "Culture" },
            { name: "Savitri Temple sunrise", blurb: "A ropeway or escorted climb for the lake-and-desert panorama at dawn.", category: "Nature" },
            { name: "Old bazaar walk", blurb: "An escorted trail through the rose, textile, and silver lanes.", category: "Culture" },
            { name: "Desert sundowner", blurb: "A dune-edge sunset with folk performance on the fairground fringe.", category: "Adventure" },
        ],
        howToReach: [
            { mode: "Road", detail: "The chauffeured Jaipur–Pushkar leg (≈ 3 hrs) is a standard Rajasthan circuit extension." },
            { mode: "Air", detail: "Jaipur (JAI) is the practical airport; Kishangarh (KQH) is nearer with limited service." },
            { mode: "Private Fleet", detail: "GPS-tracked vehicles for the Rajasthan loop and fair-season logistics." },
            { mode: "Rail", detail: "Ajmer Junction is the railhead, ~30 minutes away; we handle the transfer." },
        ],
        whereToStay: [
            { tier: "Luxury-tent tier", detail: "Premium fair-season camps with en-suite comfort and private fairground access." },
            { tier: "Heritage tier", detail: "Restored lakeside havelis with ghat-facing terraces." },
            { tier: "Resort tier", detail: "Desert-edge luxury resorts with pools for a quieter base." },
        ],
        whereToEat: [
            { name: "Sattvic Pushkar table", detail: "The town is pure-vegetarian and alcohol-free — a curated sattvic thali experience." },
            { name: "Rooftop lake dining", detail: "Ghat-view rooftop tables timed for the aarti hour." },
            { name: "Bazaar sweet trail", detail: "An escorted tasting of malpua and Rajasthani sweets in the old lanes." },
        ],
        faqs: [
            { q: "When is the Pushkar Camel Fair?", a: "Around Kartik Purnima (October–November); the exact dates shift yearly with the lunar calendar. We plan precisely around it and secure luxury tents well ahead." },
            { q: "How many nights in Pushkar?", a: "One night is enough outside fair season; two during the fair to experience it without rushing." },
            { q: "Is Pushkar vegetarian only?", a: "Yes — it is a sacred town that is pure-vegetarian and alcohol-free. Our dining is curated accordingly." },
            { q: "How does Pushkar fit a Rajasthan trip?", a: "As the spiritual leg between Jaipur and Jodhpur — a 3-hour chauffeured extension that changes the trip's register." },
        ],
        relatedCities: ["jaipur", "jodhpur", "udaipur"],
        relatedTours: [
            { label: "Rajasthan Escapes", href: "/destinations/region/rajasthan" },
            { label: "Heritage dining wing", href: "/heritage-dining" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
        ],
    },
    {
        slug: "ranthambore",
        name: "Ranthambore",
        region: "Rajasthan Escapes",
        regionSlug: "rajasthan",
        state: "Rajasthan",
        tagline: "The Tiger Fort Wilderness",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Ranthambore_Tiger.jpg",
        coordinates: { lat: 26.0173, lng: 76.5026 },
        answer:
            "Ranthambore is a national park in the Sawai Madhopur district of Rajasthan, India, and one of the best places in the world to see wild Bengal tigers. It is uniquely set around the 10th-century Ranthambore Fort, a UNESCO World Heritage hill fort, with lakes, dry deciduous forest, and historic ruins inside the reserve. Ranthambore lies about 180 km from Jaipur and adds a wildlife dimension to the Rajasthan circuit. MyTripMyTravel operates Ranthambore as a tiger-safari and fort leg with luxury jungle lodges and privately arranged core-zone game drives.",
        intro: [
            "Ranthambore is where Rajasthan turns wild. It is the rare reserve where a tiger might be photographed in front of a thousand-year-old fort gate — history and apex predator in one frame — which is why it has become the marquee tiger destination for luxury India itineraries.",
            "The park is built around the UNESCO Ranthambore Fort and a chain of lakes that concentrate wildlife: tiger, leopard, sloth bear, marsh crocodile, and abundant birdlife across the safari zones. Sightings are never guaranteed — but the architecture of the visit (zone allocation, timing, guide quality) materially changes the odds.",
            "MyTripMyTravel runs Ranthambore with luxury jungle lodges, privately arranged game drives with vetted naturalists, and the fort visit sequenced as a heritage counterpoint to the safaris.",
        ],
        quickFacts: [
            { label: "State", value: "Rajasthan" },
            { label: "Best known for", value: "Wild Bengal tigers, Ranthambore Fort (UNESCO)" },
            { label: "Ideal stay", value: "2 nights (3–4 safaris)" },
            { label: "From Jaipur", value: "≈ 180 km · 3.5 hrs" },
            { label: "Nearest railhead", value: "Sawai Madhopur (10 km)" },
            { label: "Nearest airport", value: "Jaipur (JAI)" },
            { label: "Park closure", value: "Core zones closed July–September" },
            { label: "Signature", value: "Tiger safari + heritage fort" },
        ],
        bestTime: {
            window: "October – April",
            narrative:
                "The park is open roughly October to June; October to April offers pleasant weather and good cover, while April to June is hot but delivers the highest tiger-sighting probability as animals concentrate at water. Core zones close during the monsoon (July–September). For comfort plus strong sightings, the cooler window with an early-season buffer is optimal.",
        },
        thingsToDo: [
            { name: "Core-zone tiger safari", blurb: "Privately arranged morning and afternoon game drives with a vetted naturalist.", category: "Adventure" },
            { name: "Ranthambore Fort", blurb: "The UNESCO 10th-century hill fort inside the reserve, with temples and views.", category: "Heritage" },
            { name: "Padam Talao lakes", blurb: "The lake belt where tiger, deer, and crocodile concentrate.", category: "Nature" },
            { name: "Birding circuit", blurb: "An escorted session for the reserve's 270+ bird species.", category: "Nature" },
            { name: "Village & craft visit", blurb: "A Dastkar artisan-collective visit on the park fringe.", category: "Culture" },
            { name: "Lodge wilderness dining", blurb: "A bush dinner under the stars arranged by the jungle lodge.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Road", detail: "The chauffeured Jaipur–Ranthambore leg (≈ 3.5 hrs) is the standard wildlife extension." },
            { mode: "Rail", detail: "Sawai Madhopur is a major railhead 10 minutes from the lodges; we handle transfers." },
            { mode: "Air", detail: "Jaipur (JAI) is the nearest airport with a chauffeured onward leg." },
            { mode: "Private Fleet", detail: "GPS-tracked vehicles for transfers; in-park drives use authorised safari vehicles." },
        ],
        whereToStay: [
            { tier: "Jungle-lodge tier", detail: "Luxury wilderness lodges and tented camps near the park gates." },
            { tier: "Palace-resort tier", detail: "Heritage-style resorts with spa wings for a softer base between drives." },
            { tier: "Conservation tier", detail: "Naturalist-led eco-luxury lodges focused on responsible wildlife travel." },
        ],
        whereToEat: [
            { name: "Lodge bush dining", detail: "Open-air wilderness dinners with Rajasthani and continental menus." },
            { name: "Naturalist's table", detail: "A debrief dinner with the resident naturalist after the day's drives." },
            { name: "Heritage Rajasthani thali", detail: "A traditional laal maas and regional spread at the lodge." },
        ],
        faqs: [
            { q: "Are tiger sightings guaranteed at Ranthambore?", a: "No reserve can guarantee sightings, but Ranthambore has among the best odds in the world. We maximise probability with zone strategy, timing, multiple drives, and vetted naturalists." },
            { q: "How many safaris should I plan?", a: "Three to four drives across two nights materially improves the experience and sighting odds — that is our standard configuration." },
            { q: "When is the park closed?", a: "Core zones close during the monsoon, roughly July to September. The reserve is best October–April." },
            { q: "Can I combine the fort with safaris?", a: "Yes — the UNESCO Ranthambore Fort sits inside the reserve and is sequenced as a heritage counterpoint between game drives." },
        ],
        relatedCities: ["jaipur", "pushkar", "udaipur"],
        relatedTours: [
            { label: "Rajasthan Escapes", href: "/destinations/region/rajasthan" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Golden Triangle — all variations", href: "/tours/golden-triangle-all" },
        ],
    },
    {
        slug: "rishikesh",
        name: "Rishikesh",
        region: "Himalayan Peaks",
        regionSlug: "himalayas",
        state: "Uttarakhand",
        tagline: "The Yoga Capital on the Ganga",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/4/47/Lakshman_Jhula_Rishikesh.jpg",
        coordinates: { lat: 30.0869, lng: 78.2676 },
        answer:
            "Rishikesh is a city in the Dehradun district of Uttarakhand, India, in the Himalayan foothills where the Ganga river leaves the mountains. It is internationally known as the 'Yoga Capital of the World', famed for its ashrams, the evening Ganga Aarti at Triveni Ghat and Parmarth Niketan, the Lakshman Jhula and Ram Jhula suspension bridges, and white-water rafting. Rishikesh is the spiritual-and-wellness gateway of the western Himalaya. MyTripMyTravel operates Rishikesh as a wellness, yoga, and river leg with riverside luxury retreats and curated practitioner access.",
        intro: [
            "Rishikesh is where the Himalaya becomes spiritual rather than alpine — the foothill city where the Ganga arrives from the mountains and an entire global wellness culture has grown up around it.",
            "The riverfront defines it: the Ganga Aarti at dusk, the iconic Lakshman and Ram Jhula bridges, and a dense belt of ashrams that made Rishikesh the world's yoga capital. Above the spiritual register sits an adventure one — the Ganga here is India's premier white-water rafting river.",
            "MyTripMyTravel runs Rishikesh as a wellness-and-river leg: riverside luxury retreats, curated private yoga and Ayurveda with vetted practitioners, an escorted Aarti vantage, and rafting arranged with safety-vetted operators.",
        ],
        quickFacts: [
            { label: "State", value: "Uttarakhand" },
            { label: "Best known for", value: "Yoga capital, Ganga Aarti, rafting" },
            { label: "Ideal stay", value: "2–3 nights" },
            { label: "From Delhi", value: "≈ 240 km · 5.5 hrs" },
            { label: "Nearest airport", value: "Dehradun / Jolly Grant (DED)" },
            { label: "Nearest railhead", value: "Haridwar / Rishikesh" },
            { label: "Signature", value: "Wellness, yoga, white-water" },
            { label: "Status", value: "Vegetarian, alcohol-free city" },
        ],
        bestTime: {
            window: "September – April",
            narrative:
                "September to November and February to April are ideal — mild weather, a flowing river, and the prime rafting window (rafting typically runs roughly September to June, paused at monsoon peak). The International Yoga Festival is in March. Summer (May–June) is warm but viable for wellness; the monsoon (July–August) swells the Ganga and suspends rafting. Autumn and spring are optimal.",
        },
        thingsToDo: [
            { name: "Ganga Aarti", blurb: "An escorted dusk vantage for the river-fire ceremony at Parmarth or Triveni Ghat.", category: "Culture" },
            { name: "Private yoga & meditation", blurb: "Curated sessions with vetted practitioners at a riverside retreat.", category: "Wellness" },
            { name: "White-water rafting", blurb: "Graded Ganga rapids with safety-vetted operators, conditions permitting.", category: "Adventure" },
            { name: "Lakshman & Ram Jhula", blurb: "The iconic suspension bridges and the temple-and-cafe riverbank.", category: "Heritage" },
            { name: "Beatles Ashram", blurb: "The atmospheric abandoned Maharishi ashram with its painted domes.", category: "Culture" },
            { name: "Ayurveda consultation", blurb: "A practitioner-led Ayurvedic assessment via our wellness sanctuary wing.", category: "Wellness" },
        ],
        howToReach: [
            { mode: "Road", detail: "The chauffeured Delhi–Rishikesh leg (≈ 5.5 hrs) is the standard approach." },
            { mode: "Air", detail: "Dehradun/Jolly Grant (DED) is ~30 minutes away; we manage fleet handover." },
            { mode: "Rail", detail: "Haridwar and the Rishikesh stations connect Delhi; we handle station transfers." },
            { mode: "Private Fleet", detail: "GPS-tracked vehicles for the western Himalayan and Char Dham-gateway routes." },
        ],
        whereToStay: [
            { tier: "Riverside-retreat tier", detail: "Luxury wellness retreats above the Ganga with private yoga pavilions." },
            { tier: "Spa-resort tier", detail: "Forest-and-river spa resorts with full Ayurveda programmes." },
            { tier: "Boutique-ashram tier", detail: "Refined stays near the ghats for an immersive spiritual base." },
        ],
        whereToEat: [
            { name: "Sattvic riverside table", detail: "Pure-vegetarian, alcohol-free dining with Ganga-facing terraces." },
            { name: "Wellness cuisine", detail: "Ayurvedic, dosha-aligned menus at the retreat kitchen." },
            { name: "Café-belt trail", detail: "An escorted walk through the long-running riverbank health cafés." },
        ],
        faqs: [
            { q: "Is Rishikesh good for a wellness retreat?", a: "It is arguably India's premier wellness base. We arrange private yoga, meditation, and Ayurveda with vetted practitioners at riverside retreats via our sanctuary wing." },
            { q: "When can you raft the Ganga?", a: "Roughly September to June, paused at monsoon peak. We arrange graded runs with safety-vetted operators when conditions allow." },
            { q: "How many nights in Rishikesh?", a: "Two to three for a meaningful wellness-and-river leg; longer for a structured retreat programme." },
            { q: "Is alcohol available in Rishikesh?", a: "No — it is a sacred, vegetarian, alcohol-free city. Our dining and stays are curated accordingly." },
        ],
        relatedCities: ["shimla", "manali", "dharamshala"],
        relatedTours: [
            { label: "Wellness & sanctuary stays", href: "/wellness" },
            { label: "Himalayan Peaks", href: "/destinations/region/himalayas" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
        ],
    },
    {
        slug: "dharamshala",
        name: "Dharamshala",
        region: "Himalayan Peaks",
        regionSlug: "himalayas",
        state: "Himachal Pradesh",
        tagline: "Little Lhasa & the Dhauladhar",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/5/5e/McLeod_Ganj_Dharamshala.jpg",
        coordinates: { lat: 32.219, lng: 76.3234 },
        answer:
            "Dharamshala is a town in the Kangra district of Himachal Pradesh, India, set against the steep Dhauladhar range. Its upper suburb, McLeod Ganj, is the seat of the Dalai Lama and the Tibetan government-in-exile — earning it the name 'Little Lhasa' — centred on the Tsuglagkhang Complex. It is also known for the Triund trek, colonial St John in the Wilderness church, and the world's highest cricket stadium. Dharamshala is the Tibetan-Buddhist and trekking leg of the western Himalaya. MyTripMyTravel operates it with Dhauladhar-view stays and curated monastery and trail access.",
        intro: [
            "Dharamshala is the Tibetan chapter of the Indian Himalaya. McLeod Ganj, perched above the main town, is the home of the Dalai Lama and the centre of the Tibetan exile world — a culture, cuisine, and contemplative register found nowhere else in India.",
            "The Tsuglagkhang Complex is the spiritual core; around it the Dhauladhar wall rises almost vertically, putting the Triund ridge trek within a day's reach. Colonial traces (St John in the Wilderness), the Norbulingka Tibetan arts institute, and the HPCA stadium round out an unusually varied stop.",
            "MyTripMyTravel runs Dharamshala with Dhauladhar-facing luxury stays, escorted Tsuglagkhang and Norbulingka access, and a guided Triund option for those who want the ridge — paced and supported.",
        ],
        quickFacts: [
            { label: "State", value: "Himachal Pradesh" },
            { label: "Best known for", value: "Dalai Lama seat, McLeod Ganj, Triund" },
            { label: "Ideal stay", value: "2 nights" },
            { label: "From Shimla", value: "≈ 230 km · 7 hrs" },
            { label: "Nearest airport", value: "Gaggal / Kangra (DHM)" },
            { label: "Nearest railhead", value: "Pathankot (narrow-gauge to Kangra)" },
            { label: "Signature", value: "Tibetan Buddhism + Dhauladhar" },
            { label: "Language", value: "Hindi, Tibetan, English" },
        ],
        bestTime: {
            window: "March – June, September – November",
            narrative:
                "March to June brings clear Dhauladhar views and good trekking; September to November offers crisp post-monsoon air. The monsoon (July–August) is among the wettest in India with leech-prone trails and landslide risk. Winter is cold with occasional snow that closes upper trails. Spring and autumn are optimal for both views and the Triund trek.",
        },
        thingsToDo: [
            { name: "Tsuglagkhang Complex", blurb: "The Dalai Lama's temple, museum, and the heart of exile-Tibetan McLeod Ganj.", category: "Culture" },
            { name: "Triund trek", blurb: "A guided, supported day or overnight to the Dhauladhar ridge.", category: "Adventure" },
            { name: "Norbulingka Institute", blurb: "The Tibetan arts academy preserving thangka, woodcraft, and statue-making.", category: "Culture" },
            { name: "St John in the Wilderness", blurb: "The atmospheric colonial deodar-forest church near Forsyth Ganj.", category: "Heritage" },
            { name: "Bhagsu & waterfall walk", blurb: "An escorted village-and-cascade route above McLeod Ganj.", category: "Nature" },
            { name: "Tibetan cuisine trail", blurb: "A curated tasting of momos, thukpa, and exile-Tibetan kitchens.", category: "Cuisine" },
        ],
        howToReach: [
            { mode: "Air", detail: "Gaggal/Kangra (DHM) is ~45 minutes away with limited service; Chandigarh is the larger alternative." },
            { mode: "Road", detail: "Chauffeured legs from Shimla (7 hrs), Manali, and Amritsar form the western circuit." },
            { mode: "Rail", detail: "The Pathankot–Kangra narrow-gauge is scenic; we handle the onward mountain transfer." },
            { mode: "Private Fleet", detail: "Hill-capable, GPS-tracked vehicles for the Himachal circuit." },
        ],
        whereToStay: [
            { tier: "Dhauladhar-view tier", detail: "Luxury hotels facing the vertical Dhauladhar wall above McLeod Ganj." },
            { tier: "Forest-retreat tier", detail: "Deodar-forest boutique retreats near St John for quiet." },
            { tier: "Wellness tier", detail: "Mountain spa stays for a contemplative recovery base." },
        ],
        whereToEat: [
            { name: "Exile-Tibetan table", detail: "Authentic momos, thukpa, and tingmo at curated McLeod Ganj kitchens." },
            { name: "Dhauladhar-view dining", detail: "Contemporary Himalayan menus with a ridge-facing terrace." },
            { name: "Café-belt trail", detail: "An escorted walk through McLeod Ganj's long-running travellers' cafés." },
        ],
        faqs: [
            { q: "Can you see the Dalai Lama in Dharamshala?", a: "Public teachings occur periodically at the Tsuglagkhang Complex; schedules vary and are not guaranteed. We monitor the calendar and arrange respectful attendance when sessions align." },
            { q: "Is the Triund trek difficult?", a: "It is a moderate day trek to the Dhauladhar ridge — we run it guided and supported, with an overnight option for the sunrise." },
            { q: "How many nights in Dharamshala?", a: "Two — one for McLeod Ganj and the Tibetan core, one for Triund or Norbulingka and a slower pace." },
            { q: "When should I avoid Dharamshala?", a: "The July–August monsoon is extremely wet with leech-prone trails. Spring and autumn are best for views and trekking." },
        ],
        relatedCities: ["shimla", "manali", "rishikesh"],
        relatedTours: [
            { label: "Himalayan Peaks", href: "/destinations/region/himalayas" },
            { label: "Expert heritage guides", href: "/expert-guides" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
        ],
    },
    {
        slug: "kovalam",
        name: "Kovalam",
        region: "Kerala Backwaters",
        regionSlug: "kerala",
        state: "Kerala",
        tagline: "The Lighthouse Beach Coast",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Kovalam_Beach.jpg",
        coordinates: { lat: 8.4004, lng: 76.9787 },
        answer:
            "Kovalam is a beach town on the Arabian Sea coast of Kerala, India, near the state capital Thiruvananthapuram. It is known for its crescent-shaped beaches — chiefly Lighthouse, Hawah, and Samudra — backed by palm groves and laterite headlands, and for its long-established Ayurvedic resort culture. Kovalam is the coastal-and-wellness counterpoint to the Kerala backwaters circuit. MyTripMyTravel operates Kovalam as a sea-and-Ayurveda leg with clifftop luxury stays and curated practitioner-led wellness programmes.",
        intro: [
            "Kovalam is Kerala's sea register — the Arabian Sea coast that closes a southern India circuit with salt air rather than still backwater. It was one of India's earliest international beach destinations and the Ayurveda culture here is correspondingly deep.",
            "The three linked crescents — Lighthouse, Hawah, and Samudra — sit below laterite headlands and palm groves, with the red-and-white Vizhinjam lighthouse as the landmark. Nearby Thiruvananthapuram adds the Padmanabhaswamy temple and Napier Museum for a heritage half-day.",
            "MyTripMyTravel runs Kovalam as a sea-and-wellness close: clifftop luxury stays, structured practitioner-led Ayurveda via our sanctuary wing, and a sequenced finish before the Thiruvananthapuram (TRV) departure.",
        ],
        quickFacts: [
            { label: "State", value: "Kerala" },
            { label: "Best known for", value: "Lighthouse Beach, Ayurveda resorts" },
            { label: "Ideal stay", value: "2–3 nights" },
            { label: "Nearest airport", value: "Thiruvananthapuram (TRV) — 15 km" },
            { label: "From Alleppey", value: "≈ 160 km · 3.5 hrs" },
            { label: "Signature", value: "Sea + structured Ayurveda" },
            { label: "Season", value: "September – March" },
            { label: "Language", value: "Malayalam, English" },
        ],
        bestTime: {
            window: "September – March",
            narrative:
                "September to March offers calm seas and pleasant humidity ideal for the coast and Ayurveda programmes. December to February is peak. The monsoon (June–August) is heavy on the coast — though monsoon Ayurveda (Karkidaka chikitsa) is a traditional treatment season for serious wellness guests. April–May is hot and humid. Winter is optimal for a beach-and-wellness close.",
        },
        thingsToDo: [
            { name: "Lighthouse Beach", blurb: "The signature crescent below the Vizhinjam lighthouse, with a sunset protocol.", category: "Nature" },
            { name: "Structured Ayurveda", blurb: "A practitioner-led multi-day programme via our wellness sanctuary wing.", category: "Wellness" },
            { name: "Thiruvananthapuram heritage", blurb: "An escorted half-day — Padmanabhaswamy temple and Napier Museum.", category: "Heritage" },
            { name: "Vizhinjam & Poovar", blurb: "A fishing-harbour and backwater-estuary boat extension south of Kovalam.", category: "Nature" },
            { name: "Coastal village walk", blurb: "An escorted route through the palm groves and laterite headlands.", category: "Culture" },
            { name: "Sea-facing yoga", blurb: "Dawn practice on a clifftop deck, curated with a vetted instructor.", category: "Wellness" },
        ],
        howToReach: [
            { mode: "Air", detail: "Thiruvananthapuram International (TRV) is ~15 km / 30 minutes; we manage fleet handover." },
            { mode: "Road", detail: "Chauffeured legs from Alleppey (3.5 hrs) and the wider Kerala circuit." },
            { mode: "Private Fleet", detail: "GPS-tracked vehicles for transfers and the Thiruvananthapuram heritage day." },
            { mode: "Rail", detail: "Thiruvananthapuram Central connects the coastal line; we handle station transfers." },
        ],
        whereToStay: [
            { tier: "Clifftop-luxury tier", detail: "Headland resorts with sea-facing suites and infinity pools above the beach." },
            { tier: "Ayurveda-resort tier", detail: "Established wellness resorts with full practitioner-led programmes." },
            { tier: "Heritage tier", detail: "Restored coastal properties for a quieter sea base." },
        ],
        whereToEat: [
            { name: "Coastal seafood", detail: "Arabian Sea catch grilled Keralan-style at a curated clifftop table." },
            { name: "Ayurvedic cuisine", detail: "Dosha-aligned menus integrated with the wellness programme." },
            { name: "Beach-belt trail", detail: "An escorted walk through Lighthouse Beach's long-running kitchens." },
        ],
        faqs: [
            { q: "Is Kovalam good for an Ayurveda programme?", a: "Yes — it has one of India's deepest resort-Ayurveda cultures. We arrange structured, practitioner-led multi-day programmes through our sanctuary wing." },
            { q: "How does Kovalam fit a Kerala trip?", a: "As the sea-and-wellness close after Kochi, Munnar, and the backwaters, finishing near the Thiruvananthapuram (TRV) airport." },
            { q: "Is monsoon a bad time for Kovalam?", a: "For beach time, yes — but the monsoon is the traditional Karkidaka Ayurveda treatment season, which serious wellness guests deliberately choose." },
            { q: "How many nights in Kovalam?", a: "Two to three for a beach close; longer if following a structured Ayurveda programme." },
        ],
        relatedCities: ["alleppey", "kochi", "thekkady"],
        relatedTours: [
            { label: "Wellness & sanctuary stays", href: "/wellness" },
            { label: "Kerala Backwaters", href: "/destinations/region/kerala" },
            { label: "Heritage dining wing", href: "/heritage-dining" },
        ],
    },
    {
        slug: "thekkady",
        name: "Thekkady",
        region: "Kerala Backwaters",
        regionSlug: "kerala",
        state: "Kerala",
        tagline: "The Periyar Spice & Wildlife Reserve",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Periyar_Lake_Thekkady.jpg",
        coordinates: { lat: 9.6, lng: 77.1667 },
        answer:
            "Thekkady is a town in the Idukki district of Kerala, India, and the gateway to the Periyar Tiger Reserve — a 925 sq km forest around an artificial lake, known for elephant, gaur, and birdlife seen from boat and guided walks. The surrounding hills are a major cardamom, pepper, and tea growing belt. Thekkady is the wildlife-and-spice leg of the Kerala circuit, sitting between Munnar and the backwaters. MyTripMyTravel operates Thekkady with plantation-bungalow stays, private spice estate access, and guided Periyar experiences.",
        intro: [
            "Thekkady is Kerala's forest interior — the cardamom hills and the Periyar reserve, a green, cool, fragrant counterpoint that bridges the tea altitude of Munnar and the water-stillness of the backwaters.",
            "Periyar is unusual: a lake-centred reserve where wildlife is watched from a boat or on ranger-led walks rather than a jeep, which makes it quieter and more immersive. Around it, the spice estates — cardamom, pepper, clove, vanilla — are the economic and sensory signature of the region.",
            "MyTripMyTravel runs Thekkady with plantation-bungalow or forest-edge luxury stays, private working spice-estate access, and curated Periyar experiences — boat, guided walk, or bamboo raft — sequenced into the Kerala circuit.",
        ],
        quickFacts: [
            { label: "State", value: "Kerala" },
            { label: "Best known for", value: "Periyar Reserve, spice plantations" },
            { label: "Ideal stay", value: "2 nights" },
            { label: "From Munnar", value: "≈ 90 km · 3 hrs" },
            { label: "From Alleppey", value: "≈ 140 km · 4 hrs" },
            { label: "Nearest airport", value: "Madurai (IXM) / Cochin (COK)" },
            { label: "Signature", value: "Lake wildlife + spice estates" },
            { label: "Language", value: "Malayalam, Tamil, English" },
        ],
        bestTime: {
            window: "September – March",
            narrative:
                "September to March offers pleasant, clear weather ideal for Periyar boat trips, guided walks, and spice tours. The dry pre-summer months can concentrate wildlife near the lake. The monsoon (June–August) is heavy and lush but limits some activities. April–May is warmer but viable. The cool post-monsoon window is optimal.",
        },
        thingsToDo: [
            { name: "Periyar lake boat safari", blurb: "A reserve boat trip for elephant, gaur, and birdlife along the shoreline.", category: "Nature" },
            { name: "Guided jungle walk", blurb: "A ranger-led 'nature walk' or border hike inside the reserve.", category: "Adventure" },
            { name: "Private spice estate tour", blurb: "A working cardamom-and-pepper plantation visit with a planter-led tasting.", category: "Culture" },
            { name: "Bamboo rafting", blurb: "A full-day ranger-accompanied raft-and-trek combination on Periyar.", category: "Adventure" },
            { name: "Kathakali & Kalari evening", blurb: "A curated classical dance and martial-art performance in town.", category: "Culture" },
            { name: "Tribal heritage visit", blurb: "An escorted, responsible visit to a forest-fringe community project.", category: "Culture" },
        ],
        howToReach: [
            { mode: "Road", detail: "Scenic chauffeured legs from Munnar (3 hrs) and Alleppey (4 hrs) through the spice hills." },
            { mode: "Air", detail: "Madurai (IXM) and Cochin (COK) are the practical airports with a chauffeured climb." },
            { mode: "Private Fleet", detail: "Hill-capable, GPS-tracked vehicles for the Kerala interior circuit." },
            { mode: "Rail", detail: "Kottayam is the nearest major railhead; we handle the onward mountain transfer." },
        ],
        whereToStay: [
            { tier: "Plantation-bungalow tier", detail: "Restored estate bungalows inside working spice and cardamom plantations." },
            { tier: "Forest-edge-luxury tier", detail: "Reserve-boundary luxury resorts with spa wings and valley views." },
            { tier: "Eco-lodge tier", detail: "Naturalist-led eco-lodges focused on responsible Periyar experiences." },
        ],
        whereToEat: [
            { name: "Plantation table", detail: "Estate-grown spice-forward Keralan menus at a planter's bungalow." },
            { name: "Forest-resort dining", detail: "Contemporary Kerala cuisine with a reserve-boundary setting." },
            { name: "Spice-trail lunch", detail: "A cardamom-estate lunch on the route, freshly prepared." },
        ],
        faqs: [
            { q: "How is wildlife viewed at Periyar?", a: "Primarily by boat on the reserve lake, plus ranger-led walks and bamboo rafting — quieter and more immersive than jeep safaris. We arrange the curated options." },
            { q: "Is a spice plantation visit worth it?", a: "Yes — we arrange access to working cardamom and pepper estates with a planter-led tasting, not the generic tourist stop." },
            { q: "How does Thekkady fit the Kerala circuit?", a: "As the wildlife-and-spice bridge between Munnar's tea altitude and the backwaters — a 2-night interior leg." },
            { q: "How many nights in Thekkady?", a: "Two — one for Periyar (boat plus a walk or raft) and one for the spice estates and a slower pace." },
        ],
        relatedCities: ["munnar", "alleppey", "kovalam"],
        relatedTours: [
            { label: "Kerala Backwaters", href: "/destinations/region/kerala" },
            { label: "Elite chauffeured fleet", href: "/fleet" },
            { label: "Wellness & sanctuary stays", href: "/wellness" },
        ],
    },
];

// ---- Accessors ----

export function getAllDestinationSlugs(): string[] {
    return destinations.map((d) => d.slug);
}

export function getDestination(slug: string): Destination | undefined {
    return destinations.find((d) => d.slug === slug);
}

export function getRegion(slug: string): Region | undefined {
    return regions.find((r) => r.slug === slug);
}

export function getDestinationsByRegion(regionSlug: string): Destination[] {
    return destinations.filter((d) => d.regionSlug === regionSlug);
}

export function getRelatedCities(slug: string): Destination[] {
    const dest = getDestination(slug);
    if (!dest) return [];
    return dest.relatedCities
        .map((s) => getDestination(s))
        .filter((d): d is Destination => Boolean(d));
}
