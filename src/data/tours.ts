import { tourEnrichments } from "./tourEnrichments";

export interface ItineraryDay {
    day: number;
    /** One-line summary, kept for schema + back-compat. */
    plan: string;
    /** SEO-clean, human heading, e.g. "Delhi, Arrival & Old Delhi". */
    title?: string;
    /** Rich body: morning / afternoon / evening beats, monuments in context. */
    detail?: string[];
    /** City the traveller sleeps in that night. */
    overnight?: string;
    /** Meals provided, e.g. "Breakfast, Dinner". */
    meals?: string;
    /** Transfer note, e.g. "Delhi → Agra · ~3.5 hrs / 230 km". */
    drive?: string;
}

export interface TourQuickFact {
    label: string;
    value: string;
}

export interface TourFAQ {
    q: string;
    a: string;
}

export interface Package {
    id: number;
    title: string;
    duration: string;
    price: string;
    theme: string;
    highlight: string;
    img: string;
    location: string;
    itinerary: ItineraryDay[];
    /** Optional explicit slug; if absent, derived from the title. */
    slug?: string;

    // ── Optional depth fields (itinerary-led completion). Rendered only when present. ──
    /** Answer-first, citation-ready summary shown at the top of the page. */
    answer?: string;
    /** At-a-glance table: best time, start/end city, pace, hotels, group size. */
    quickFacts?: TourQuickFact[];
    /** What the price includes. */
    inclusions?: string[];
    /** What it does not, kills the #1 buyer objection honestly. */
    exclusions?: string[];
    /** Buyer questions → FAQPage schema + on-page block. */
    faqs?: TourFAQ[];
    /** Ideal months narrative, e.g. "October to March; Taj at sunrise year-round". */
    bestTime?: string;
    /** Hand-crafted <title> override (keyword front-loaded). Falls back to derived. */
    metaTitle?: string;
    /** Hand-crafted meta description override (150 to 160 chars). Falls back to derived. */
    metaDescription?: string;
}

export const packages: Package[] = [
    {
        id: 1,
        title: "3-Day Express Triangle",
        duration: "3 Days",
        price: "₹24,800",
        theme: "Short Tours",
        highlight: "For busy pulse-takers. Delhi, Agra, and Jaipur in a high-speed VIP sprint.",
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2670&auto=format&fit=crop",
        location: "Golden Triangle",
        metaTitle: "3-Day Golden Triangle Tour, Delhi, Agra & Jaipur | MyTripMyTravel",
        metaDescription: "Private 3-day Golden Triangle tour of Delhi, Agra & Jaipur with a sunrise Taj Mahal visit. Chauffeured, escorted, hotels, from ₹24,800pp. Enquire for dates.",
        bestTime: "October to March for clear skies and mild days; the Taj Mahal rewards a sunrise visit year-round.",
        answer: "The 3-Day Express Triangle is a private, chauffeured tour of Delhi, Agra and Jaipur, India's Golden Triangle, paced for travellers who are short on time but want the headline monuments done properly. Across three days you see the Taj Mahal at sunrise, Amber Fort, and Old & New Delhi, travelling by private air-conditioned car with a dedicated driver and licensed local guides at each city. It runs best October to March and starts from ₹24,800 per person.",
        quickFacts: [
            { label: "Duration", value: "3 days / 2 nights" },
            { label: "Route", value: "Delhi → Agra → Jaipur → Delhi" },
            { label: "Best time", value: "October to March" },
            { label: "Pace", value: "Fast, built for limited time" },
            { label: "Hotels", value: "4★ / 5★ options" },
            { label: "Group", value: "Private (1 to 9+)" },
            { label: "From", value: "₹24,800 per person" },
        ],
        itinerary: [
            {
                day: 1,
                plan: "Arrive in Delhi. Afternoon tour of Qutub Minar & Lotus Temple. Late night drive to Agra.",
                title: "Delhi, Arrival, Qutub Minar & Drive to Agra",
                detail: [
                    "Your chauffeur meets you at Delhi (DEL) arrivals and the tour begins the same afternoon. First stop is the Qutub Minar, the 73-metre 12th-century victory tower, followed by the serene lotus-shaped Bahá'í House of Worship, an open-air, low-energy start that beats jet lag without throwing you into crowds.",
                    "By late afternoon you transfer to Agra on the Yamuna Expressway, arriving in the evening. The night drive is deliberate: it puts you at the Taj Mahal gate for next morning's sunrise, when the marble is softest and the queues shortest.",
                ],
                overnight: "Agra",
                meals: "None (arrival day)",
                drive: "Delhi → Agra · ~3.5 hrs / 230 km",
            },
            {
                day: 2,
                plan: "Sunrise at Taj Mahal. Breakfast & drive to Jaipur via Fatehpur Sikri. Evening at Chokhi Dhani.",
                title: "Agra, Taj Mahal Sunrise, Fatehpur Sikri & Jaipur",
                detail: [
                    "You enter the Taj Mahal at first light with your guide, as the mausoleum shifts from pink to pearl-white, the single best hour to see and photograph it. Allow two unhurried hours inside the complex.",
                    "After breakfast you drive to Jaipur, pausing at the UNESCO ghost-city of Fatehpur Sikri, Akbar's abandoned red-sandstone capital, about an hour along the route.",
                    "You reach the Pink City by evening, in time for a Rajasthani thali dinner and folk performance at Chokhi Dhani if you wish.",
                ],
                overnight: "Jaipur",
                meals: "Breakfast",
                drive: "Agra → Jaipur (via Fatehpur Sikri) · ~4.5 hrs / 240 km",
            },
            {
                day: 3,
                plan: "Amber Fort elephant ride. Quick stop at Hawa Mahal and Jantar Mantar. Afternoon departure to Delhi.",
                title: "Jaipur, Amber Fort, Pink City & Return",
                detail: [
                    "The morning belongs to the honey-coloured Amber Fort above Maota Lake; inside, the Sheesh Mahal mirror hall is the highlight (jeep ascent included; elephant rides optional and seasonal).",
                    "Back in the old city you photograph the five-storey Hawa Mahal facade and visit Jantar Mantar, the 18th-century royal observatory, with time for a block-print or gemstone stop.",
                    "By early afternoon you begin the drive back to Delhi for your onward flight, your chauffeur delivers you to the airport or hotel.",
                ],
                overnight: "Departure",
                meals: "Breakfast",
                drive: "Jaipur → Delhi · ~5 hrs / 280 km",
            },
        ],
        inclusions: [
            "Private air-conditioned vehicle with professional chauffeur for the full circuit",
            "2 nights' hotel accommodation with daily breakfast",
            "Licensed local guides at Agra and Jaipur monuments",
            "All fuel, tolls, parking, driver allowance and inter-city transfers",
            "Airport pick-up and drop-off",
            "Bottled water and 24/7 on-trip support",
        ],
        exclusions: [
            "International and domestic flights",
            "Monument entrance fees (payable directly, or pre-arranged on request)",
            "Lunches and dinners",
            "Personal expenses, tips and camera fees",
            "Visa, travel insurance and anything not listed under inclusions",
        ],
        faqs: [
            { q: "Is 3 days enough for the Golden Triangle?", a: "Three days is enough to see the headline monuments, the Taj Mahal, Amber Fort and Old Delhi, at a brisk but comfortable pace. If you want slower mornings, shopping time or a heritage-hotel stay, the 4-Day Classic Circle or 5-Day Heritage Loop add breathing room on the same route." },
            { q: "Will I see the Taj Mahal at sunrise?", a: "Yes, the itinerary is built around a sunrise entry on Day 2, the least crowded and most photogenic hour. The Taj Mahal is closed on Fridays; if your dates include a Friday we re-sequence the days so you never miss it." },
            { q: "Is this a private tour or a group departure?", a: "Entirely private. The vehicle, chauffeur and guides are yours alone, so timings flex around you, there are no other travellers and no fixed group schedule." },
            { q: "How much walking is involved?", a: "Moderate, each monument means 1 to 2 hours on foot over uneven historic ground. Your chauffeur drops and collects you at every gate, and the pace can be softened for older travellers or families on request." },
            { q: "What is the best time of year for this tour?", a: "October to March gives the clearest skies and mildest temperatures across all three cities. April to June is hot but quieter and cheaper; the monsoon (July to September) is green and dramatic with occasional afternoon showers." },
            { q: "Can you customise the itinerary or add cities?", a: "Yes, this is a template, not a cage. We routinely add Udaipur, Ranthambore or Varanasi, upgrade hotels, or slow the pace. Send your dates and preferences and we'll return a tailored plan and quote." },
        ],
    },
    {
        id: 2,
        title: "4-Day Classic Circle",
        duration: "4 Days",
        price: "₹33,100",
        theme: "Short Tours",
        highlight: "The perfect introduction. Dedicated time for the 'Big Three' monuments.",
        img: "/tour_agra_fort.png",
        location: "Golden Triangle",
        metaTitle: "4-Day Golden Triangle Tour, Delhi, Agra & Jaipur | MyTripMyTravel",
        metaDescription: "Classic 4-day Golden Triangle tour: Old Delhi, the Taj Mahal at sunset, Agra Fort & Jaipur's forts. Private car, guides, hotels, from ₹33,100pp. Enquire now.",
        bestTime: "October to March for the clearest skies; a full day per city keeps the pace comfortable year-round.",
        answer: "The 4-Day Classic Circle is the definitive first-timer's Golden Triangle, a private, chauffeured loop through Delhi, Agra and Jaipur with a full, unhurried day in each. You'll walk Old Delhi, see the Taj Mahal at sunset and Agra Fort, cross to Jaipur via Fatehpur Sikri, and explore the Amber Fort and Pink City bazaars. Travel is by private air-conditioned car with licensed local guides; the tour runs best October to March and starts from ₹33,100 per person.",
        quickFacts: [
            { label: "Duration", value: "4 days / 3 nights" },
            { label: "Route", value: "Delhi → Agra → Jaipur → Delhi" },
            { label: "Best time", value: "October to March" },
            { label: "Pace", value: "Relaxed, a full day per city" },
            { label: "Hotels", value: "4★ / 5★ & heritage options" },
            { label: "Group", value: "Private (1 to 9+)" },
            { label: "From", value: "₹33,100 per person" },
        ],
        itinerary: [
            {
                day: 1,
                plan: "Delhi Arrival & Heritage Walk in Old Delhi (Chandni Chowk, Red Fort).",
                title: "Delhi, Old & New Delhi Heritage Day",
                detail: [
                    "After your airport welcome and check-in, you explore Old Delhi on foot: the Mughal-era Red Fort, the vast Jama Masjid, and a cycle-rickshaw ride through the spice-scented lanes of Chandni Chowk.",
                    "New Delhi's ceremonial axis follows, India Gate and the Rajpath, a drive past the colonial government buildings, and Humayun's Tomb, the architectural rehearsal for the Taj Mahal, if time allows.",
                ],
                overnight: "Delhi",
                meals: "None (arrival day)",
                drive: "Within Delhi",
            },
            {
                day: 2,
                plan: "Morning drive to Agra. Sunset visit to the Taj Mahal. Overnight in Agra.",
                title: "Agra, Drive to Agra & Taj Mahal at Sunset",
                detail: [
                    "A morning run down the Yamuna Expressway brings you to Agra by lunchtime and your hotel check-in.",
                    "In the late afternoon you visit the Taj Mahal at sunset, when the marble warms to amber and gold, a quieter, softer alternative to the sunrise crush, with your guide unpacking the love story and the flawless Mughal symmetry.",
                    "Optional evening: a rooftop dinner with a floodlit Taj view, or the 'Mohabbat the Taj' heritage show.",
                ],
                overnight: "Agra",
                meals: "Breakfast",
                drive: "Delhi → Agra · ~3.5 hrs / 230 km",
            },
            {
                day: 3,
                plan: "Agra Fort. Morning drive to Jaipur via Fatehpur Sikri. Afternoon at City Palace.",
                title: "Agra Fort, Fatehpur Sikri & Jaipur City Palace",
                detail: [
                    "The morning starts at the red-sandstone Agra Fort, the Mughal seat of power where Shah Jahan spent his final years gazing at the Taj across the Yamuna.",
                    "You then drive to Jaipur via UNESCO-listed Fatehpur Sikri, Akbar's perfectly preserved abandoned capital of red sandstone.",
                    "Reaching Jaipur by late afternoon, you visit the City Palace and its museums, still the residence of the erstwhile royal family.",
                ],
                overnight: "Jaipur",
                meals: "Breakfast",
                drive: "Agra → Jaipur (via Fatehpur Sikri) · ~4.5 hrs / 240 km",
            },
            {
                day: 4,
                plan: "Amer Fort & Hawa Mahal. Shopping in Pink City markets. Evening departure.",
                title: "Jaipur, Amber Fort, Hawa Mahal & Departure",
                detail: [
                    "Your final morning is the Amber Fort, with its Sheesh Mahal mirror hall and ramparts above Maota Lake (jeep ascent included).",
                    "Back in the Pink City you photograph the Hawa Mahal and browse the bazaars for block-print textiles, blue pottery and gemstones.",
                    "By afternoon your chauffeur drives you back to Delhi in time for your onward flight.",
                ],
                overnight: "Departure",
                meals: "Breakfast",
                drive: "Jaipur → Delhi · ~5 hrs / 280 km",
            },
        ],
        inclusions: [
            "Private air-conditioned vehicle with professional chauffeur for the full circuit",
            "3 nights' hotel accommodation with daily breakfast",
            "Licensed local guides in Delhi, Agra and Jaipur",
            "All fuel, tolls, parking, driver allowance and inter-city transfers",
            "Airport pick-up and drop-off",
            "Bottled water and 24/7 on-trip support",
        ],
        exclusions: [
            "International and domestic flights",
            "Monument entrance fees (payable directly, or pre-arranged on request)",
            "Lunches and dinners",
            "Personal expenses, tips and camera fees",
            "Visa, travel insurance and anything not listed under inclusions",
        ],
        faqs: [
            { q: "What's the difference between the 3-day and 4-day Golden Triangle?", a: "The 4-Day Classic gives each city a full, unhurried day, including a proper Old Delhi walk on Day 1 that the 3-day sprint skips, plus more time in Agra and Jaipur. If you can spare the extra day, it's the more comfortable and complete first trip." },
            { q: "Do we see the Taj Mahal at sunrise or sunset?", a: "This itinerary visits at sunset on Day 2, when the marble glows amber and the crowds thin. Prefer sunrise? We simply flip the Agra timings at no extra cost, just ask. The Taj is closed on Fridays, and we re-sequence the days around it." },
            { q: "Is it suitable for families with children?", a: "Yes, a day per city keeps the pace manageable for kids, and the private car allows flexible rest stops, snack breaks and no early group departures. We can add jeep rides and lighter museum time on request." },
            { q: "What kind of hotels are included?", a: "The base price uses hand-picked 4-star hotels with breakfast; 5-star and heritage-palace upgrades, a converted haveli in Jaipur, for example, are available. Ask for options with your quote." },
            { q: "Are guides and entrance fees included?", a: "Licensed local guides are included in all three cities. Monument entrance fees are payable directly or can be pre-arranged and added to your quote, so everything is prepaid before you arrive." },
            { q: "Can we extend the trip to Udaipur, Ranthambore or Varanasi?", a: "Absolutely, the Classic Circle is the spine our longer tours build on. Popular add-ons are a tiger safari at Ranthambore, the lakes of Udaipur, or the ghats of Varanasi. Share your dates and we'll design the extension and quote." },
        ],
    },
    {
        id: 11,
        title: "5-Day Heritage Loop",
        duration: "5 Days",
        price: "₹41,400",
        theme: "Short Tours",
        highlight: "A deeper dive into the Mughal history with evening sound & light shows.",
        img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2673&auto=format&fit=crop",
        location: "Golden Triangle",
        metaTitle: "5-Day Golden Triangle Tour, Delhi, Agra & Jaipur | MyTripMyTravel",
        metaDescription: "In-depth 5-day Golden Triangle tour: sunrise Taj Mahal, Agra's Baby Taj & Jaipur's three forts. Private car, guides, hotels, from ₹41,400pp. Enquire now.",
        bestTime: "October to March for clear light on the forts; two nights in Jaipur keep the pace unhurried.",
        answer: "The 5-Day Heritage Loop is a deeper Golden Triangle, a private, chauffeured circuit through Delhi, Agra and Jaipur with time to go beyond the headline monuments. You'll see the Taj Mahal at sunrise and from Mehtab Bagh, Agra's marble 'Baby Taj' and Agra Fort, and give Jaipur two full days across the Amber, Jaigarh and Nahargarh forts. Travel is by private air-conditioned car with licensed local guides; the tour runs best October to March and starts from ₹41,400 per person.",
        quickFacts: [
            { label: "Duration", value: "5 days / 4 nights" },
            { label: "Route", value: "Delhi → Agra → Jaipur → Delhi" },
            { label: "Best time", value: "October to March" },
            { label: "Pace", value: "Unhurried, 2 nights in Jaipur" },
            { label: "Hotels", value: "4★ / 5★ & heritage options" },
            { label: "Group", value: "Private (1 to 9+)" },
            { label: "From", value: "₹41,400 per person" },
        ],
        itinerary: [
            {
                day: 1,
                plan: "Delhi Sightseeing: Humayun's Tomb, India Gate, Parliament Street.",
                title: "Delhi, Imperial Delhi & Mughal Foundations",
                detail: [
                    "You open in New Delhi at Humayun's Tomb, the garden mausoleum that set the template the Taj Mahal would perfect a century later, then take in India Gate and the ceremonial vistas of the Lutyens core.",
                    "Old Delhi follows at your pace, the Jama Masjid and a cycle-rickshaw run through Chandni Chowk, with a first briefing from your guide on the Mughal thread that ties the whole loop together.",
                ],
                overnight: "Delhi",
                meals: "None (arrival day)",
                drive: "Within Delhi",
            },
            {
                day: 2,
                plan: "Drive to Agra. Itimad-ud-Daulah (Baby Taj). Sunset Agra Fort.",
                title: "Agra, Drive to Agra, Baby Taj & Agra Fort at Sunset",
                detail: [
                    "A morning transfer brings you to Agra. In the afternoon you visit Itimad-ud-Daulah, the exquisite 'Baby Taj', the first Mughal tomb built entirely in marble and the design bridge to the Taj itself.",
                    "As the day cools you climb the red-sandstone Agra Fort, ending near the octagonal tower where Shah Jahan spent his final years with a distant view of the Taj, the perfect prelude to tomorrow's sunrise.",
                ],
                overnight: "Agra",
                meals: "Breakfast",
                drive: "Delhi → Agra · ~3.5 hrs / 230 km",
            },
            {
                day: 3,
                plan: "Sunrise Taj Mahal. Mehtab Bagh. Drive to Jaipur. Overnight in Jaipur.",
                title: "Agra, Taj Mahal Sunrise, Mehtab Bagh & Jaipur",
                detail: [
                    "You enter the Taj Mahal at first light, then cross the river to Mehtab Bagh, the moonlight garden that frames the mausoleum in reflection, the photographer's angle most day-trippers never reach.",
                    "After breakfast you drive to Jaipur via UNESCO-listed Fatehpur Sikri, arriving in the Pink City by evening.",
                ],
                overnight: "Jaipur",
                meals: "Breakfast",
                drive: "Agra → Jaipur (via Fatehpur Sikri) · ~4.5 hrs / 240 km",
            },
            {
                day: 4,
                plan: "Full day Jaipur: Amer Fort, Jaigarh Fort, Nahargarh Fort sunset view.",
                title: "Jaipur, Amber, Jaigarh & Nahargarh Forts",
                detail: [
                    "A full day in the Rajput capital: the hilltop Amber Fort and its Sheesh Mahal mirror hall, then Jaigarh Fort above it, home to Jaivana, once the world's largest wheeled cannon.",
                    "You end at Nahargarh Fort for sunset over the city, with the City Palace and Jantar Mantar woven in if you wish.",
                ],
                overnight: "Jaipur",
                meals: "Breakfast",
                drive: "Within Jaipur",
            },
            {
                day: 5,
                plan: "Jantar Mantar & Hawa Mahal. Lunch at a Heritage Haveli. Drive back to Delhi.",
                title: "Jaipur, Pink City, Heritage Lunch & Return to Delhi",
                detail: [
                    "Your last morning takes in Jantar Mantar and the Hawa Mahal, with time in the bazaars for block-print textiles, blue pottery and gemstones.",
                    "After lunch at a heritage haveli, your chauffeur drives you back to Delhi in time for your onward flight.",
                ],
                overnight: "Departure",
                meals: "Breakfast, Lunch",
                drive: "Jaipur → Delhi · ~5 hrs / 280 km",
            },
        ],
        inclusions: [
            "Private air-conditioned vehicle with professional chauffeur for the full circuit",
            "4 nights' hotel accommodation with daily breakfast",
            "Licensed local guides in Delhi, Agra and Jaipur",
            "All fuel, tolls, parking, driver allowance and inter-city transfers",
            "Airport pick-up and drop-off",
            "Bottled water and 24/7 on-trip support",
        ],
        exclusions: [
            "International and domestic flights",
            "Monument entrance fees (payable directly, or pre-arranged on request)",
            "Lunches and dinners except where noted",
            "Personal expenses, tips and camera fees",
            "Visa, travel insurance and anything not listed under inclusions",
        ],
        faqs: [
            { q: "How is the 5-day tour different from the shorter Golden Triangle trips?", a: "The extra days go into depth, not just more monuments: Agra's Baby Taj and the Mehtab Bagh reflection view, and two full nights in Jaipur so you can add Jaigarh and Nahargarh forts rather than rushing the Amber Fort. It suits history lovers and photographers." },
            { q: "Do we see the Taj Mahal at both sunrise and sunset?", a: "You see Agra Fort at sunset on Day 2 (with a distant Taj view) and the Taj Mahal itself at sunrise on Day 3, plus the reflection view from Mehtab Bagh, the fullest Taj experience among our short tours. The Taj closes on Fridays and we re-sequence around it." },
            { q: "Is two nights in Jaipur worth it?", a: "Yes if you like forts, crafts or slower mornings. It lets you pair the Amber Fort with Jaigarh and Nahargarh, spend real time in the bazaars, and still catch a sunset, all of which the one-night versions compress." },
            { q: "What hotels and upgrades are available?", a: "The base uses 4-star hotels with breakfast; 5-star and heritage-palace stays, a Jaipur haveli, or an Agra property with Taj views, are available on request and added to your quote." },
            { q: "Are guides and entrance fees included?", a: "Licensed local guides are included across all three cities. Monument entrance fees are payable directly or pre-arranged and prepaid with your quote." },
            { q: "Can we add Ranthambore, Udaipur or Varanasi?", a: "Yes, the Heritage Loop extends naturally into a tiger safari at Ranthambore, the lakes of Udaipur, or the ghats of Varanasi. Tell us your dates and interests and we'll tailor the plan and quote." },
        ],
    },
    {
        id: 12,
        title: "5-Day Luxury Weekend",
        duration: "5 Days",
        price: "₹66,300",
        theme: "Luxury",
        highlight: "Stay at the Oberoi and Taj palaces with helicopter transfers available.",
        img: "https://images.unsplash.com/photo-1590393533632-6858220f8646?q=80&w=2574&auto=format&fit=crop",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Private flight to Delhi. VIP airport pickup and stay at The Oberoi New Delhi." },
            { day: 2, plan: "Helicopter transfer to Agra. Stay at Amarvilas with balcony view of Taj Mahal." },
            { day: 3, plan: "Private sunrise Taj Mahal tour. Private drive to Jaipur. Stay at Rambagh Palace." },
            { day: 4, plan: "Hot air balloon breakfast over Jaipur. Private palace tours and royal dining." },
            { day: 5, plan: "Spa morning at the palace. Afternoon private jet/charter flight to Delhi/Home." }
        ]
    },
    {
        id: 3,
        title: "GT + Udaipur Romance",
        duration: "9 Days",
        price: "₹74,600",
        theme: "Luxury",
        highlight: "Lakes and Palaces extension. The Venice of the East meets the Golden Triangle.",
        img: "https://images.unsplash.com/photo-1590393533632-6858220f8646?q=80&w=2574&auto=format&fit=crop",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Luxury Stay. Evening Rickshaw tour." },
            { day: 2, plan: "Full day Delhi history tour. Evening classical music concert." },
            { day: 3, plan: "Superfast train to Agra. Taj Mahal & Agra Fort. Overnight Agra." },
            { day: 4, plan: "Drive to Jaipur. Stop at Abhaneri Stepwells. Evening Jaipur Market." },
            { day: 5, plan: "Jaipur Forts tour. Royal Dinner at Jal Mahal. Overnight Jaipur." },
            { day: 6, plan: "Flight to Udaipur. Boat ride on Lake Pichola at sunset." },
            { day: 7, plan: "City Palace Udaipur tour. Stay at the Lake Palace (Jag Niwas)." },
            { day: 8, plan: "Jagdish Temple & Saheliyon ki bari. Cooking class with a Rajput family." },
            { day: 9, plan: "Morning at leisure by the lake. Afternoon flight back to Delhi." }
        ]
    },
    {
        id: 4,
        title: "GT + Rishikesh Yoga",
        duration: "9 Days",
        price: "₹66,300",
        theme: "Spiritual",
        highlight: "Ganges Aarti and private Yoga sessions at the foothills of the Himalayas.",
        img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2548&auto=format&fit=crop",
        location: "Himalayas",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Spiritual briefing. Evening at Birla Mandir." },
            { day: 2, plan: "Delhi to Haridwar by train. Evening Ganga Aarti at Har-ki-Pauri." },
            { day: 3, plan: "Haridwar to Rishikesh. Check-in at Ashrams. Evening Yoga by the bank." },
            { day: 4, plan: "Sunrise meditation. Visit Vashistha cave. Evening Aarti at Parmarth Niketan." },
            { day: 5, plan: "Nature trek & bridge crossing (Laxman Jhula). Forest meditation session." },
            { day: 6, plan: "Rishikesh to Delhi. Overnight in Delhi. Rest." },
            { day: 7, plan: "Drive to Agra. Taj Mahal sunset. Overnight in Agra." },
            { day: 8, plan: " Fatehpur Sikri & Drive to Jaipur. Chokhi Dhani evening." },
            { day: 9, plan: "Jaipur City Tour & Afternoon flight to Delhi/Home." }
        ]
    },
    {
        id: 5,
        title: "GT + Amritsar Heritage",
        duration: "8 Days",
        price: "₹58,000",
        theme: "Spiritual",
        highlight: "Visit the Golden Temple and the patriotic Wagah Border ceremony.",
        img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=2672&auto=format&fit=crop",
        location: "North India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Evening at Gurudwara Bangla Sahib." },
            { day: 2, plan: "Delhi to Amritsar by Shatabdi Express. Golden Temple night view." },
            { day: 3, plan: "Golden Temple at sunrise. Jallianwala Bagh. Wagah Border ceremony." },
            { day: 4, plan: "Amritsar to Delhi. Overnight in New Delhi." },
            { day: 5, plan: "Delhi to Agra. Afternoon Agra Fort. Sunset Taj Mahal view from Mehtab Bagh." },
            { day: 6, plan: "Taj Mahal tour. Drive to Jaipur via Fatehpur Sikri and Stepwells." },
            { day: 7, plan: "Jaipur City tour: Amber Fort, City Palace, Hawa Mahal." },
            { day: 8, plan: "Jaipur Markets & High tea at Nahargarh Fort. Evening departure." }
        ]
    },
    {
        id: 13,
        title: "GT + Jodhpur Sun City",
        duration: "8 Days",
        price: "₹70,500",
        theme: "Luxury",
        highlight: "Explore the Blue City and the mighty Mehrangarh Fort.",
        img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2574&auto=format&fit=crop",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Evening cultural walk." },
            { day: 2, plan: "Delhi City tour & evening drive to Agra." },
            { day: 3, plan: "Sunrise Taj Mahal. Agra Fort. Evening train to Jaipur." },
            { day: 4, plan: "Jaipur Pink City tour: Amer Fort & Hawa Mahal." },
            { day: 5, plan: "Jaipur to Jodhpur by road. Evening visit to Umaid Bhawan Palace." },
            { day: 6, plan: "Mehrangarh Fort & Jaswant Thada. Blue City walk." },
            { day: 7, plan: "Village Safari & Bishnoi community visit. Sunset desert tea." },
            { day: 8, plan: "Jodhpur to Delhi Flight. Afternoon departure." }
        ]
    },
    {
        id: 14,
        title: "GT + Khajuraho Art",
        duration: "8 Days",
        price: "₹62,200",
        theme: "Spiritual",
        highlight: "The UNESCO temples of Khajuraho mixed with the Golden Circuit.",
        img: "https://images.unsplash.com/photo-1622329388062-817cc67a2166?q=80&w=2574&auto=format&fit=crop",
        location: "Central India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & half day sightseeing." },
            { day: 2, plan: "Delhi to Khajuraho by flight. Western group of temples." },
            { day: 3, plan: "Eastern group of temples. Flight back to Delhi. Overnight in Delhi." },
            { day: 4, plan: "Delhi to Agra. Taj Mahal & evening Mughlai dinner." },
            { day: 5, plan: "Agra Fort. Drive to Jaipur. Abhaneri stopover." },
            { day: 6, plan: "Jaipur Heritage tour & elephant village visit." },
            { day: 7, plan: "Jantar Mantar & Hawa Mahal. Afternoon leisure/shopping." },
            { day: 8, plan: "Jaipur to Delhi. Final departure." }
        ]
    },
    {
        id: 15,
        title: "GT + Pushkar Culture",
        duration: "7 Days",
        price: "₹49,700",
        theme: "Spiritual",
        highlight: "The world's only Brahma temple and the sacred Pushkar lake.",
        img: "https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?q=80&w=2574&auto=format&fit=crop",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Visit Raj Ghat & India Gate." },
            { day: 2, plan: "Delhi to Agra. Sunset Taj Mahal visit." },
            { day: 3, plan: "Sunrise at Taj Mahal. Agra Fort. Drive to Jaipur." },
            { day: 4, plan: "Jaipur City Tour. Evening drive to Pushkar." },
            { day: 5, plan: "Brahma Temple visit & Pushkar Lake session. Evening camel safari." },
            { day: 6, plan: "Pushkar to Jaipur. Shopping in Pink City markets." },
            { day: 7, plan: "Jaipur to Delhi. Final departure." }
        ]
    },
    {
        id: 10,
        title: "Wildlife & Wonders",
        duration: "8 Days",
        price: "₹70,500",
        theme: "Wildlife",
        highlight: "Golden Triangle + Ranthambore Tiger Safari. Hunt for stripes.",
        img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2670&auto=format&fit=crop",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Full day heritage exploration." },
            { day: 2, plan: "Delhi to Agra. Taj Mahal in the afternoon." },
            { day: 3, plan: "Sunrise Agra Fort. Drive to Ranthambore Safari camp." },
            { day: 4, plan: "Early morning Jungle Safari in search of Tigers. Afternoon jungle trek." },
            { day: 5, plan: "Sunrise Jungle Safari. Morning drive to Jaipur." },
            { day: 6, plan: "Jaipur Heritage tour. Amer Fort & Jaigarh Fort." },
            { day: 7, plan: "City Palace & Hawa Mahal. Afternoon Jaipur artisan walk." },
            { day: 8, plan: "Jaipur to Delhi. Final departure." }
        ]
    },
    {
        id: 16,
        title: "GT + Lucknow Royal",
        duration: "8 Days",
        price: "₹66,300",
        theme: "Luxury",
        highlight: "The city of Nawabs, Awadhi cuisine, and sophisticated manners.",
        img: "https://images.unsplash.com/photo-1614713568397-b33b6680a656?q=80&w=2574&auto=format&fit=crop",
        location: "North India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Luxury Stay." },
            { day: 2, plan: "Delhi to Agra. Taj Mahal & Agra Fort." },
            { day: 3, plan: "Drive to Lucknow. Check-in at a Heritage Haveli. Evening kebab walk." },
            { day: 4, plan: "Bara Imambara, Chhota Imambara, and Residency ruins tour." },
            { day: 5, plan: "Lucknow to Delhi. Overnight stay." },
            { day: 6, plan: "Delhi to Jaipur. Pink City evening walk." },
            { day: 7, plan: "Amber Fort & City Palace tour." },
            { day: 8, plan: "Jaipur departure." }
        ]
    },
    {
        id: 17,
        title: "GT + Haridwar Sacred",
        duration: "7 Days",
        price: "₹45,600",
        theme: "Spiritual",
        highlight: "The gateway to the Gods. Witness the grand Ganga Aarti.",
        img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2548&auto=format&fit=crop",
        location: "Himalayas",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Half day tour of spiritual monuments." },
            { day: 2, plan: "Delhi to Haridwar by road. Evening Ganga Aarti at Har Ki Pauri." },
            { day: 3, plan: "Mansha Devi Temple visit & local ashram walk. Evening drive to Delhi." },
            { day: 4, plan: "Delhi to Agra. Sunset Taj Mahal visit." },
            { day: 5, plan: "Morning Agra Fort. Drive to Jaipur. Abhaneri stopover." },
            { day: 6, plan: "Jaipur Heritage tour including Hawa Mahal and Amber Fort." },
            { day: 7, plan: "Jaipur to Delhi departure." }
        ]
    },
    {
        id: 6,
        title: "GT + Goa Beach Holiday",
        duration: "12 Days",
        price: "₹1,07,800",
        theme: "Luxury",
        highlight: "Culture followed by white sands. The ultimate North-South India experience.",
        img: "https://images.unsplash.com/photo-1512757788165-66720562f146?q=80&w=2574&auto=format&fit=crop",
        location: "Goa",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & stay at 5-star hotel." },
            { day: 2, plan: "Full day Delhi history & food tour." },
            { day: 3, plan: "Morning superfast to Agra. Taj Mahal Afternoon visit." },
            { day: 4, plan: "Sunrise Agra Fort. Drive to Jaipur. evening at leisure." },
            { day: 5, plan: "Jaipur Heritage tour & boutique shopping." },
            { day: 6, plan: "Jaipur to Goa flight. Airport transfer to luxury resort." },
            { day: 7, plan: "North Goa Heritage: Churches & Fort Aguada." },
            { day: 8, plan: "Goa Beach Leisure Day. Private beach dinner." },
            { day: 9, plan: "South Goa: Palolem beach & spiritual temples." },
            { day: 10, plan: "Goa Spice Garden tour & Elephant swim." },
            { day: 11, plan: "Leisure day by the ocean. Spa treatments." },
            { day: 12, plan: "Goa to Home departure." }
        ]
    },
    {
        id: 7,
        title: "Medical Recovery Tour",
        duration: "15 Days",
        price: "₹1,32,700",
        theme: "Medical",
        highlight: "Slow-paced luxury transit with 24/7 wellness care and concierge.",
        img: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2671&auto=format&fit=crop",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Medical Concierge briefing. Hospital visit if needed." },
            { day: 2, plan: "Wellness consultation. Light garden walk in Lodhi Gardens." },
            { day: 3, plan: "Gentle pulse tour of Old Delhi. Rest periods included." },
            { day: 4, plan: "Rest day with physiotherapy session." },
            { day: 5, plan: "Delhi to Agra. Low-stress luxury vehicle transit. Evening Taj sunset from a private veranda." },
            { day: 6, plan: "Morning garden visit near Taj Mahal. Relaxed hotel stay." },
            { day: 7, plan: "Agra to Jaipur. Scenic drive with medical stopovers. Royal stay." },
            { day: 8, plan: "Jaipur City Palace & Hawa Mahal (accessible route). Afternoon Spa session." },
            { day: 9, plan: "Full day of luxury ayurvedic treatments & health diet plan." },
            { day: 10, plan: "Jaipur Amber fort (Jeep ride, no climb). Afternoon rest." },
            { day: 11, plan: "Cultural show in hotel gardens. Relaxation by pool." },
            { day: 12, plan: "Jaipur to Delhi slow transit. Overnight Delhi." },
            { day: 13, plan: "Final checkups & shopping for wellness products." },
            { day: 14, plan: "Leisure morning. Afternoon city light-walk." },
            { day: 15, plan: "Medical concierge airport escort. Final Departure." }
        ]
    },
    {
        id: 18,
        title: "GT + Munnar Nature",
        duration: "14 Days",
        price: "₹1,57,600",
        theme: "Wildlife",
        highlight: "From the dry forts of Rajasthan to the tea hills of Kerala.",
        img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2669&auto=format&fit=crop",
        location: "South India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Heritage intro." },
            { day: 2, plan: "Delhi City Tour. Evening food tour." },
            { day: 3, plan: "Delhi to Agra. Taj Mahal afternoon visit." },
            { day: 4, plan: "Sunrise Agra Fort. Drive to Jaipur." },
            { day: 5, plan: "Jaipur Heritage tour. Palace & Fort exploration." },
            { day: 6, plan: "Flight from Jaipur to Kochi. Check-in at Fort Kochi heritage hotel." },
            { day: 7, plan: "Kochi to Munnar drive (High range tea hills)." },
            { day: 8, plan: "Munnar tea garden visit & Eravikulam National Park." },
            { day: 9, plan: "Munnar to Thekkady. Elephant safari & Spice plantation." },
            { day: 10, plan: "Periyar Lake boat ride & forest trek." },
            { day: 11, plan: "Thekkady to Alleppey. Overnight luxury houseboat." },
            { day: 12, plan: "Backwater cruise & local village walk." },
            { day: 13, plan: "Alleppey to Kochi. Fort Kochi Chinese fishing nets." },
            { day: 14, plan: "Departure from Kochi." }
        ]
    },
    {
        id: 19,
        title: "GT + Varanasi Eternity",
        duration: "11 Days",
        price: "₹91,200",
        theme: "Spiritual",
        highlight: "The oldest living city. Experience the circle of life on the Ganges.",
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2676&auto=format&fit=crop",
        location: "North India",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & Spiritual Briefing. Akshardham Temple visit." },
            { day: 2, plan: "Delhi heritage walk. Evening train to Varanasi." },
            { day: 3, plan: "Varanasi Arrival. Evening Ganga Aarti on the Ghats." },
            { day: 4, plan: "Sunrise boat ride on Ganges. Sarnath visit (where Buddha gave his first sermon)." },
            { day: 5, plan: "Narrow alley tour of Old Kashi. Evening meditation session." },
            { day: 6, plan: "Varanasi to Delhi by Flight. Evening leisure." },
            { day: 7, plan: "Delhi to Agra. Afternoon Agr Fort. Sunset Taj Mahal." },
            { day: 8, plan: "Sunrise Taj Mahal (Inside tour). Drive to Jaipur via specialty stepwells." },
            { day: 9, plan: "Jaipur City Tour. Palace of Winds & Royal Observatory." },
            { day: 10, plan: "Amber Fort trek & afternoon heritage craft session." },
            { day: 11, plan: "Departure from Jaipur/Delhi Flight." }
        ]
    },
    {
        id: 20,
        title: "The Maharaja Circuit",
        duration: "16 Days",
        price: "₹2,07,400",
        theme: "Luxury",
        highlight: "The absolute gold standard. Cover 7 cities with private butler service.",
        img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2574&auto=format&fit=crop",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. VIP transfer to stay at Taj Mahal Hotel New Delhi." },
            { day: 2, plan: "Delhi Curated History Tour. Private dining at a royal residence." },
            { day: 3, plan: "Private drive to Agra. Stay at Oberoi Amarvilas. Taj Mahal Tour." },
            { day: 4, plan: "Sunrise Taj view. Private drive to Jaipur via Fatehpur Sikri. Stay at Rambagh Palace." },
            { day: 5, plan: "Full day Jaipur. Palace VIP tour & evening Polo match." },
            { day: 6, plan: "Private flight to Udaipur. Stay at Lake Palace Jag Niwas." },
            { day: 7, plan: "Udaipur Lakes & Palaces. Sunset boat with butler service." },
            { day: 8, plan: "Drive to Jodhpur via Ranakpur. Stay at Umaid Bhawan Palace." },
            { day: 9, plan: "Jodhpur Fort VIP exploration. Private desert safari." },
            { day: 10, plan: "Jodhpur to Jaisalmer drive. Stay in luxury tented camps." },
            { day: 11, plan: "Sam Sand Dunes sunset & Jaisalmer Fort tour." },
            { day: 12, plan: "Private drive to Bikaner. Stay at Junagarh Fort heritage hotel." },
            { day: 13, plan: "Rat Temple & Bikaner heritage walk. Private flight to Delhi." },
            { day: 14, plan: "Delhi Luxury Day. High-end shopping with a personal stylist." },
            { day: 15, plan: "Relaxed morning. Spa and final celebratory dinner." },
            { day: 16, plan: "Final Luxury departure escort." }
        ]
    },
    {
        id: 21,
        title: "Desert & Palaces",
        duration: "12 Days",
        price: "₹99,500",
        theme: "Spiritual",
        highlight: "Jaisalmer's golden dunes integrated into your Triangle tour.",
        img: "https://images.unsplash.com/photo-1591456285821-c614a298884a?q=80&w=2574&auto=format&fit=crop",
        location: "Rajasthan",
        itinerary: [
            { day: 1, plan: "Delhi Arrival & introduction to culture." },
            { day: 2, plan: "Delhi sightseeing and evening superfast to Jaisalmer." },
            { day: 3, plan: "Jaisalmer Arrival. Fort exploration & Gadsisar Lake." },
            { day: 4, plan: "Sam Sand Dunes Camel Safari & folk music around campfire." },
            { day: 5, plan: "Desert lifestyle tour. Evening train back to Jodhpur." },
            { day: 6, plan: "Jodhpur Mehrangarh Fort and Jaswant Thada visit." },
            { day: 7, plan: "Jodhpur to Jaipur drive. Pink City cultural intro." },
            { day: 8, plan: "Amer Fort, City Palace, and Jantar Mantar Jaipur." },
            { day: 9, plan: "Jaipur to Agra via Abhaneri. Evening at leisure." },
            { day: 10, plan: "Taj Mahal Sunrise. Agra Fort Afternoon." },
            { day: 11, plan: "Drive back to Delhi. Evening Farewell dinner." },
            { day: 12, plan: "Final transfer & Departure." }
        ]
    },
    {
        id: 8,
        title: "Royal Wedding Scout",
        duration: "6 Days",
        price: "₹49,700",
        theme: "Luxury",
        highlight: "Professional scouting of high-end palace venues in Jaipur & Agra.",
        img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Delhi Arrival. Consultation with wedding planner & luxury car preview." },
            { day: 2, plan: "Delhi to Agra. Visit Taj Khema & Jaypee Palace venues." },
            { day: 3, plan: "Sunrise Taj photoshoot venue checking. Drive to Jaipur. Jai Mahal Palace view." },
            { day: 4, plan: "Jaipur: Samode Palace, Fairmont, and City Palace venue meetings." },
            { day: 5, plan: "Nahargarh Fort & wedding backdrop sessions. Designer lehenga preview." },
            { day: 6, plan: "Drive back to Delhi. Final selection report & Departure." }
        ]
    },
    {
        id: 9,
        title: "Photography Expedition",
        duration: "7 Days",
        price: "₹62,200",
        theme: "Wildlife",
        highlight: "Guided by masters for the best 'Golden Hour' shots in India.",
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2671&auto=format&fit=crop",
        location: "Golden Triangle",
        itinerary: [
            { day: 1, plan: "Delhi: Street photography in Chandni Chowk & Jama Masjid." },
            { day: 2, plan: "Delhi to Agra. Sunset silhouette of Taj Mahal from Mehtab Bagh." },
            { day: 3, plan: "Sunrise inside Taj Mahal (No-crowd photography). Agra Fort light-play sessions." },
            { day: 4, plan: "Fatehpur Sikri red sandstone texture shots. Late night drive to Jaipur." },
            { day: 5, plan: "Sunrise at Hawa Mahal. Afternoon Jaipur stepwell (Panna Meena Kund) session." },
            { day: 6, plan: "Jaipur Forts at Golden Hour. Elephant village portraits. Review & editing session." },
            { day: 7, plan: "Pink City market life photography. Return drive to Delhi." }
        ]
    },
    {
        id: 22,
        title: "Kerala Backwater Bliss",
        duration: "7 Days",
        price: "₹53,900",
        theme: "Luxury",
        highlight: "Private houseboats and spice garden retreats in the heart of God's Own Country.",
        img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2669&auto=format&fit=crop",
        location: "South India",
        itinerary: [
            { day: 1, plan: "Kochi Arrival. Chinese Fishing Nets & Fort Kochi walking tour." },
            { day: 2, plan: "Kochi to Munnar. Scenic drive through tea plantations and waterfalls." },
            { day: 3, plan: "Munnar Sightseeing: Eravikulam National Park and Tea Museum." },
            { day: 4, plan: "Munnar to Thekkady. Periyar Wildlife Sanctuary visit and Spice plantation." },
            { day: 5, plan: "Thekkady to Alleppey. Boat check-in for a night in the backwaters." },
            { day: 6, plan: "Alleppey to Kochi. Evening Kathakali dance performance." },
            { day: 7, plan: "Kochi Departure." }
        ]
    },
    {
        id: 23,
        title: "Himachal Heights",
        duration: "8 Days",
        price: "₹45,600",
        theme: "Adventure",
        highlight: "Snow-capped peaks and valley treks through Manali and Shimla.",
        img: "https://images.unsplash.com/photo-1597041634447-062e245a499d?q=80&w=2548&auto=format&fit=crop",
        location: "Himalayas",
        itinerary: [
            { day: 1, plan: "Chandigarh Arrival. Drive to Shimla. Evening at The Mall Road." },
            { day: 2, plan: "Shimla Sightseeing: Kufri, Jakhoo Temple and Ridge." },
            { day: 3, plan: "Shimla to Manali via Kullu Valley. Riverside drive." },
            { day: 4, plan: "Manali City Tour: Hadimba Temple & Vashisht Springs." },
            { day: 5, plan: "Solang Valley adventure: Paragliding and snow activities." },
            { day: 6, plan: "Drive through Rohtang Pass (subject to permit) or Atal Tunnel." },
            { day: 7, plan: "Manali to Chandigarh. Evening at Rock Garden." },
            { day: 8, plan: "Chandigarh Departure." }
        ]
    },
    {
        id: 24,
        title: "Sikkim Silk Route",
        duration: "6 Days",
        price: "₹49,700",
        theme: "Adventure",
        highlight: "High-altitude lakes and ancient monasteries on the border of Tibet.",
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2574&auto=format&fit=crop",
        location: "North East",
        itinerary: [
            { day: 1, plan: "Bagdogra Arrival. Drive to Gangtok. Evening at MG Marg." },
            { day: 2, plan: "Gangtok Local: Rumtek Monastery & Enchey Monastery." },
            { day: 3, plan: "Tsomgo Lake & Baba Mandir. Scenic high-altitude drive." },
            { day: 4, plan: "Gangtok to Pelling. Views of Mt. Kanchenjunga." },
            { day: 5, plan: "Pelling Local: Skywalk and Rabdentse Ruins." },
            { day: 6, plan: "Pelling to Bagdogra Departure." }
        ]
    },
    {
        id: 25,
        title: "Tamil Nadu Temple Trail",
        duration: "9 Days",
        price: "₹74,600",
        theme: "Spiritual",
        highlight: "Dravidian architecture and 1000-year-old temples across Madurai and Tanjore.",
        img: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2574&auto=format&fit=crop",
        location: "South India",
        itinerary: [
            { day: 1, plan: "Chennai Arrival. Visit Kapaleeshwarar Temple." },
            { day: 2, plan: "Chennai to Mahabalipuram. Shore Temple & Five Rathas." },
            { day: 3, plan: "Mahabalipuram to Pondicherry. Auroville and French Quarter walk." },
            { day: 4, plan: "Pondicherry to Tanjore. Brihadisvara Temple (UNESCO)." },
            { day: 5, plan: "Tanjore to Madurai. Meenakshi Amman Temple evening ceremony." },
            { day: 6, plan: "Madurai to Rameshwaram. Pamban Bridge & Temple visit." },
            { day: 7, plan: "Rameshwaram to Kanyakumari. Sunset at the tip of India." },
            { day: 8, plan: "Vivekananda Rock Memorial & Thiruvalluvar Statue." },
            { day: 9, plan: "Drive to Trivandrum Departure." }
        ]
    },
    {
        id: 26,
        title: "Ladakh Leh Expedition",
        duration: "10 Days",
        price: "₹99,500",
        theme: "Adventure",
        highlight: "The land of high passes. Pangong Lake and Nubra Valley camel treks.",
        img: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=2574&auto=format&fit=crop",
        location: "Himalayas",
        itinerary: [
            { day: 1, plan: "Leh Arrival. Full day rest for acclimatization." },
            { day: 2, plan: "Leh Local: Shanti Stupa & Leh Palace." },
            { day: 3, plan: "Leh to Nubra Valley via Khardung La (Highest Motorable Road)." },
            { day: 4, plan: "Nubra Valley: Hunder Sand Dunes & Diskit Monastery." },
            { day: 5, plan: "Nubra to Pangong Lake via Shyok River. Sunset by the azure water." },
            { day: 6, plan: "Early morning at Pangong. Drive back to Leh via Chang La." },
            { day: 7, plan: "Leh to Sham Valley: Magnetic Hill & Confluence of Indus-Zanskar." },
            { day: 8, plan: "Monastery Tour: Hemis and Thiksey Monasteries." },
            { day: 9, plan: "Leh Market exploration & shopping." },
            { day: 10, plan: "Leh Departure." }
        ]
    },
    {
        id: 27,
        title: "Goa Coastal Escape",
        duration: "5 Days",
        price: "₹33,100",
        theme: "Short Tours",
        highlight: "Sun, sand, and Portuguese heritage in a compact tropical break.",
        img: "https://images.unsplash.com/photo-1512757788165-66720562f146?q=80&w=2574&auto=format&fit=crop",
        location: "Goa",
        itinerary: [
            { day: 1, plan: "Goa Arrival. Evening at Baga Beach." },
            { day: 2, plan: "North Goa: Fort Aguada and vagator Beach." },
            { day: 3, plan: "South Goa: Old Goa Churches and Mangueshi Temple." },
            { day: 4, plan: "Full day at Palolem Beach. Evening Sunset cruise." },
            { day: 5, plan: "Goa Departure." }
        ]
    },
    {
        id: 28,
        title: "Andaman Island Adventure",
        duration: "7 Days",
        price: "₹78,800",
        theme: "Luxury",
        highlight: "Pristine white beaches and world-class scuba diving in Havelock Island.",
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2574&auto=format&fit=crop",
        location: "Islands",
        itinerary: [
            { day: 1, plan: "Port Blair Arrival. Cellular Jail Sound & Light Show." },
            { day: 2, plan: "Port Blair to Havelock Island via Cruise. Radhanagar Beach sunset." },
            { day: 3, plan: "Elephanta Beach: Snorkeling and Water Sports." },
            { day: 4, plan: "Havelock to Neil Island. Bharatpur and Laxmanpur Beach." },
            { day: 5, plan: "Return to Port Blair. Visit Ross Island & North Bay." },
            { day: 6, plan: "Port Blair Local Sightseeing." },
            { day: 7, plan: "Port Blair Departure." }
        ]
    },
    {
        id: 29,
        title: "Meghalaya Monsoon Mist",
        duration: "6 Days",
        price: "₹41,400",
        theme: "Nature",
        highlight: "Living root bridges and the wettest places on earth.",
        img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2670&auto=format&fit=crop",
        location: "North East",
        itinerary: [
            { day: 1, plan: "Guwahati Arrival. Drive to Shillong. Umiam Lake." },
            { day: 2, plan: "Shillong to Cherrapunji. Nohkalikai Falls & Seven Sister Falls." },
            { day: 3, plan: "Double Decker living root bridge trek (Full day)." },
            { day: 4, plan: "Cherrapunji to Mawlynnong (Cleanest village) & Dawki Lake." },
            { day: 5, plan: "Drive back to Shillong. Laitlum Canyons." },
            { day: 6, plan: "Shillong to Guwahati Departure." }
        ]
    },
    {
        id: 30,
        title: "Gujarat Rann Utsav",
        duration: "5 Days",
        price: "₹58,000",
        theme: "Spiritual",
        highlight: "The Great White Desert under the moonlight. Hand-crafted culture.",
        img: "https://images.unsplash.com/photo-1627063462118-80e927c36a43?q=80&w=2574&auto=format&fit=crop",
        location: "West India",
        itinerary: [
            { day: 1, plan: "Bhuj Arrival. Visit Aina Mahal and Prag Mahal." },
            { day: 2, plan: "Bhuj to Dhordo (Rann of Kutch). Evening in the White Desert." },
            { day: 3, plan: "Kalo Dungar (Black Hill) and Gandhi ni Gam artisan village." },
            { day: 4, plan: "Mandvi Beach visit & Vijay Vilas Palace." },
            { day: 5, plan: "Bhuj Departure." }
        ]
    },
    {
        id: 31,
        title: "Karnataka Hampi Heritage",
        duration: "7 Days",
        price: "₹49,700",
        theme: "Spiritual",
        highlight: "The ruins of the Vijayanagara Empire and stone-carved wonders.",
        img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2574&auto=format&fit=crop",
        location: "South India",
        itinerary: [
            { day: 1, plan: "Bangalore Arrival. Visit Lalbagh and Palace." },
            { day: 2, plan: "Bangalore to Hampi by road. Evening at Hemakuta Hill." },
            { day: 3, plan: "Virupaksha Temple & Vitthala Temple stone chariot." },
            { day: 4, plan: "Royal Enclosure and Lotus Mahal exploration." },
            { day: 5, plan: "Hampi to Badami via Pattadakal and Aihole ruins." },
            { day: 6, plan: "Badami Cave Temples and Agastya Lake." },
            { day: 7, plan: "Badami to Hubli Departure." }
        ]
    },
    {
        id: 32,
        title: "Sikkim Silk Route Premium",
        duration: "8 Days",
        price: "₹68,500",
        theme: "Adventure",
        highlight: "Gangtok → North Sikkim → Pelling, Kanchenjunga views, Buddhist monasteries, Yumthang rhododendron.",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Yumthang_Valley.jpg",
        location: "North East",
        itinerary: [
            { day: 1, plan: "Bagdogra arrival. Chauffeured 4-hr ascent to Gangtok via the Teesta Valley." },
            { day: 2, plan: "Gangtok, Rumtek Monastery, Enchey Monastery, Hanuman Tok viewpoint." },
            { day: 3, plan: "Drive to Lachung (130 km, 7 hrs) via Mangan and Chungthang, north Sikkim entry." },
            { day: 4, plan: "Yumthang Valley day-trip, rhododendron bloom (Apr-May) or post-monsoon clarity. Optional Zero Point." },
            { day: 5, plan: "Return to Gangtok. Afternoon at Tsongmo Lake / Baba Mandir (weather permitting)." },
            { day: 6, plan: "Drive to Pelling (110 km, 4.5 hrs). Sunset at Singshore Bridge." },
            { day: 7, plan: "Pelling, Pemayangtse Monastery, Sky Walk, Kanchenjunga falls." },
            { day: 8, plan: "Pelling to Bagdogra departure." }
        ]
    },
    {
        id: 33,
        title: "Andaman Island Luxury",
        duration: "7 Days",
        price: "₹95,400",
        theme: "Luxury",
        highlight: "Port Blair → Havelock → Neil, Cellular Jail heritage, diving / snorkelling, beach luxury.",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Radhanagar_Beach%2C_Havelock_Island%2C_Andaman%2C_India.jpg",
        location: "Islands",
        itinerary: [
            { day: 1, plan: "Port Blair arrival. Afternoon at Cellular Jail heritage circuit. Evening sound-and-light show." },
            { day: 2, plan: "Ross Island and North Bay snorkelling. Anthropological Museum." },
            { day: 3, plan: "Ferry to Havelock (Swaraj Dweep), 1.5 hrs. Afternoon at Radhanagar Beach (Asia's 7th best beach)." },
            { day: 4, plan: "Havelock, diving / snorkelling at Elephant Beach. Sunset on Radhanagar." },
            { day: 5, plan: "Optional second dive day or beach rest. Evening Havelock luxury dining." },
            { day: 6, plan: "Ferry to Neil (Shaheed Dweep), 1 hr. Bharatpur Beach, Natural Bridge, Laxmanpur Beach sunset." },
            { day: 7, plan: "Ferry to Port Blair. Departure." }
        ]
    },
    {
        id: 34,
        title: "Himalayan Ladakh Expedition",
        duration: "10 Days",
        price: "₹89,200",
        theme: "Adventure",
        highlight: "Delhi → Leh fly-in → Nubra Valley → Pangong Lake, Trans-Himalayan high-altitude expedition.",
        img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Pangong_Lake.jpg",
        location: "Himalayas",
        itinerary: [
            { day: 1, plan: "Delhi arrival. Afternoon at Qutub Minar and Humayun's Tomb." },
            { day: 2, plan: "Delhi-Leh flight (1 hr). Mandatory 24-hr acclimatisation at 3,500 m." },
            { day: 3, plan: "Leh, Shanti Stupa, Leh Palace, Sankar Monastery. Continued acclimatisation." },
            { day: 4, plan: "Leh to Nubra Valley via Khardung La (18,380 ft). Diskit Monastery, Bactrian camel ride at Hunder dunes." },
            { day: 5, plan: "Nubra Valley, Turtuk village near Pakistan border, Panamik hot springs." },
            { day: 6, plan: "Drive back to Leh via Khardung La. Rest day." },
            { day: 7, plan: "Leh to Pangong Tso (4,350 m) via Chang La. Stay lakeside." },
            { day: 8, plan: "Pangong sunrise. Drive back to Leh via Chang La." },
            { day: 9, plan: "Leh, Hemis Monastery (largest in Ladakh), Thiksey Monastery, Shey Palace." },
            { day: 10, plan: "Leh-Delhi flight. Onward departure." }
        ]
    },
    {
        id: 35,
        title: "Kerala Backwater Ayurveda",
        duration: "10 Days",
        price: "₹74,300",
        theme: "Medical",
        highlight: "Kochi → Munnar → Alleppey houseboat → Marari beach, Kerala arc with embedded 7-day Ayurveda.",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Backwaters_of_Alleppey.jpg",
        location: "South India",
        itinerary: [
            { day: 1, plan: "Kochi arrival. Fort Kochi heritage walk, Chinese fishing nets, Mattancherry Palace, Jew Town." },
            { day: 2, plan: "Drive to Munnar (130 km, 4 hrs). Afternoon at the tea estates." },
            { day: 3, plan: "Munnar, Eravikulam National Park (Nilgiri tahr), Mattupetty Dam, tea museum." },
            { day: 4, plan: "Munnar to Thekkady (110 km). Periyar National Park boat ride." },
            { day: 5, plan: "Thekkady to Kumarakom (130 km). Begin 5-day embedded Ayurveda programme at vetted centre." },
            { day: 6, plan: "Ayurveda Day 2, full Abhyanga, Shirodhara, dietary supervision." },
            { day: 7, plan: "Ayurveda Day 3, sustained programme." },
            { day: 8, plan: "Ayurveda Day 4, programme continues. Optional evening backwater cruise." },
            { day: 9, plan: "Transfer to Marari Beach (35 km). Final Ayurveda day; beach rest." },
            { day: 10, plan: "Marari to Kochi airport (75 km). Departure." }
        ]
    }
];

// Merge itinerary-led enrichment content (authored separately in
// tourEnrichments.ts) into the base catalogue so every consumer, detail
// pages, listings, related-tour blocks, sees the completed content.
for (const p of packages) {
    const enrichment = tourEnrichments[p.id];
    if (enrichment) Object.assign(p, enrichment);
}

// ---- Slug layer + accessors ----

export function slugify(input: string): string {
    return input
        .toLowerCase()
        .replace(/\+/g, " plus ")
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/** Canonical slug for a package (explicit slug wins, else derived from title). */
export function packageSlug(pkg: Package): string {
    return pkg.slug ?? slugify(pkg.title);
}

export function getAllPackageSlugs(): string[] {
    return packages.map(packageSlug);
}

export function getPackageBySlug(slug: string): Package | undefined {
    return packages.find((p) => packageSlug(p) === slug);
}

/** Resolve by canonical slug first, then fall back to legacy numeric id. */
export function getPackageByIdOrSlug(param: string): Package | undefined {
    const bySlug = getPackageBySlug(param);
    if (bySlug) return bySlug;
    const n = Number.parseInt(param, 10);
    if (!Number.isNaN(n)) return packages.find((p) => p.id === n);
    return undefined;
}

/** Map a destination region slug to the package `location` values that serve it. */
const REGION_TO_LOCATIONS: Record<string, string[]> = {
    "golden-triangle": ["Golden Triangle"],
    rajasthan: ["Rajasthan"],
    kerala: ["South India"],
    himalayas: ["Himalayas", "North India"],
    sikkim: ["North East"],
    andaman: ["Islands"],
};

/**
 * Tour packages relevant to a destination city, used to surface real
 * itineraries on each city page. Primary match: the city name appears in the
 * package title or day-by-day itinerary. Fallback: packages whose location
 * serves the city's region. Returns up to `limit`, most-relevant first.
 */
export function getPackagesForDestination(
    dest: { name: string; region?: string; regionSlug?: string },
    limit = 6
): Package[] {
    const needle = dest.name.toLowerCase().trim();
    const byName = packages.filter((p) => {
        const hay = (
            p.title +
            " " +
            p.location +
            " " +
            p.itinerary
                .map((d) => `${d.title ?? ""} ${d.plan} ${(d.detail ?? []).join(" ")}`)
                .join(" ")
        ).toLowerCase();
        return hay.includes(needle);
    });

    const locations = dest.regionSlug ? REGION_TO_LOCATIONS[dest.regionSlug] ?? [] : [];
    const byRegion = packages.filter(
        (p) => locations.includes(p.location) && !byName.includes(p)
    );

    // Shorter itineraries first within each bucket, the "how many days" entry points.
    const days = (p: Package) => parseInt(p.duration, 10) || 99;
    byName.sort((a, b) => days(a) - days(b));
    byRegion.sort((a, b) => days(a) - days(b));

    return [...byName, ...byRegion].slice(0, limit);
}

export function getRelatedPackages(pkg: Package, limit = 3): Package[] {
    const sameLocation = packages.filter(
        (p) => p.id !== pkg.id && p.location === pkg.location
    );
    const sameTheme = packages.filter(
        (p) =>
            p.id !== pkg.id &&
            p.theme === pkg.theme &&
            p.location !== pkg.location
    );
    return [...sameLocation, ...sameTheme].slice(0, limit);
}
