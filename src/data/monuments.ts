// Monument atom layer, Premium, high-intent landmark pages.
// Each monument belongs to a city (citySlug) in destinations.ts.

import type { QuickFact, FAQ } from "./destinations";
import { getDestination } from "./destinations";
import { extraMonuments } from "./monumentsExtra";

export interface Monument {
    slug: string;
    citySlug: string;
    name: string;
    type: "Mausoleum" | "Fort" | "Palace" | "Temple" | "Tomb" | "Observatory" | "Monument";
    era: string;
    tagline: string;
    heroImg: string;
    /** Citation-ready answer block, first screen. */
    answer: string;
    intro: string[];
    quickFacts: QuickFact[];
    highlights: { name: string; detail: string }[];
    visitorInfo: { label: string; value: string }[];
    tips: string[];
    faqs: FAQ[];
}

const coreMonuments: Monument[] = [
    // ---- Agra ----
    {
        slug: "taj-mahal",
        citySlug: "agra",
        name: "Taj Mahal",
        type: "Mausoleum",
        era: "Mughal · commissioned 1632, completed c. 1653",
        tagline: "The Eternal Teardrop in Marble",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Taj_Mahal_on_a_beautiful_sunrise.jpg",
        answer:
            "The Taj Mahal is a white-marble mausoleum on the south bank of the Yamuna river in Agra, India, commissioned in 1632 by the Mughal emperor Shah Jahan for his wife Mumtaz Mahal. Completed around 1653, it is a UNESCO World Heritage Site and widely regarded as the finest example of Mughal architecture and one of the New Seven Wonders of the World. It is closed every Friday. The optimal experience is an escorted sunrise entry, when the marble shifts from rose to gold to white. MyTripMyTravel arranges timed skip-the-line access and a chauffeured pre-dawn approach.",
        intro: [
            "The Taj Mahal is the building every other building is measured against. Photographs prepare you for the silhouette but not the scale, the symmetry, or the way the marble changes colour through the morning, which is precisely why how you visit it matters more than that you visit it.",
            "Shah Jahan built it as a tomb for Mumtaz Mahal, and the entire complex, the gateway, the charbagh garden, the mosque and its mirror jawab, the reflecting pool, is a single calibrated composition. The pietra dura inlay and the perfect calligraphic framing reward an unhurried, escorted reading rather than a queued glance.",
            "MyTripMyTravel runs the Taj as a controlled mission: a chauffeured pre-dawn approach, pre-purchased timed tickets, and an escort who manages security and the queue so you are inside near opening, before the crowd and in the best light.",
        ],
        quickFacts: [
            { label: "City", value: "Agra, Uttar Pradesh" },
            { label: "Built", value: "1632 to c. 1653" },
            { label: "Patron", value: "Shah Jahan (for Mumtaz Mahal)" },
            { label: "Status", value: "UNESCO World Heritage Site" },
            { label: "Closed", value: "Every Friday" },
            { label: "Best light", value: "Sunrise (escorted early entry)" },
            { label: "Material", value: "Makrana white marble, pietra dura inlay" },
            { label: "Ideal time on site", value: "2 to 3 hours" },
        ],
        highlights: [
            { name: "The main mausoleum", detail: "The central tomb chamber with the cenotaphs and the perfect dome, framed by four minarets that lean fractionally outward by design." },
            { name: "Pietra dura inlay", detail: "Semi-precious-stone floral inlay across the marble, read closely with an escort to see the craft." },
            { name: "The charbagh garden", detail: "The four-part Mughal paradise garden and the reflecting pool that produces the canonical view." },
            { name: "Mosque & jawab", detail: "The red-sandstone mosque and its mirror-image jawab that keep the complex symmetrical." },
            { name: "Mehtab Bagh at sunset", detail: "The moonlight garden across the river for the Taj's rear elevation at golden hour." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Sunrise to sunset; closed Fridays" },
            { label: "Entry", value: "Timed tickets, we pre-purchase and escort" },
            { label: "Approach", value: "Eastern gate recommended for the dawn entry" },
            { label: "Restrictions", value: "No tripods/large bags inside the mausoleum" },
        ],
        tips: [
            "Enter at opening, the 30 minutes after sunrise are uncrowded and the light is at its best.",
            "Plan around the Friday closure; our planners do this automatically.",
            "Pair a sunrise main visit with a Mehtab Bagh sunset for both elevations in one day.",
        ],
        faqs: [
            { q: "What day is the Taj Mahal closed?", a: "Every Friday, for prayers at the mosque. Our itineraries are built so a Friday is never spent on the Taj." },
            { q: "Is sunrise really worth it?", a: "Decisively. The marble's rose-to-white transition and the near-empty platform in the first half hour are the experience; we arrange escorted early entry." },
            { q: "Can you skip the queue?", a: "We pre-purchase timed tickets and provide an escort who manages security and the line so you enter close to opening with minimal waiting." },
            { q: "How long should I spend at the Taj?", a: "Two to three hours for an unhurried, escorted visit including the gardens, mosque, and inlay detail." },
        ],
    },
    {
        slug: "agra-fort",
        citySlug: "agra",
        name: "Agra Fort",
        type: "Fort",
        era: "Mughal · rebuilt from 1565 (Akbar)",
        tagline: "The Red Citadel of the Mughals",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Agra_Fort_India.jpg",
        answer:
            "Agra Fort is a 16th-century walled Mughal citadel in Agra, India, rebuilt in red sandstone by Emperor Akbar from 1565 and extended by Shah Jahan. A UNESCO World Heritage Site, it functioned as the main residence of the Mughal emperors until 1638 and contains palaces, audience halls, and mosques within a 2.5 km wall. Shah Jahan was later imprisoned here by his son Aurangzeb, with a view of the Taj Mahal he built. MyTripMyTravel pairs Agra Fort with the Taj on a single escorted Agra day.",
        intro: [
            "Agra Fort is the Taj's necessary counterpart, the seat of Mughal power from which the empire that built the Taj was actually run. It is large enough to be its own walled city, and most visitors give it a fraction of the time it deserves.",
            "Akbar rebuilt it in red sandstone; Shah Jahan layered marble palaces, the Diwan-i-Khas, and the Sheesh Mahal inside. The most resonant point is the Musamman Burj, the marble tower where Shah Jahan spent his final years imprisoned by Aurangzeb, looking downriver at the Taj.",
            "MyTripMyTravel sequences Agra Fort with the Taj on one escorted day, with the fort timed to avoid the harshest light and the most crowded hours.",
        ],
        quickFacts: [
            { label: "City", value: "Agra, Uttar Pradesh" },
            { label: "Rebuilt", value: "From 1565 (Akbar)" },
            { label: "Status", value: "UNESCO World Heritage Site" },
            { label: "Wall", value: "≈ 2.5 km, red sandstone" },
            { label: "Notable", value: "Musamman Burj, Diwan-i-Khas, Sheesh Mahal" },
            { label: "Pairs with", value: "Taj Mahal (same day)" },
            { label: "Ideal time on site", value: "1.5 to 2 hours" },
            { label: "Open", value: "Sunrise to sunset, daily" },
        ],
        highlights: [
            { name: "Musamman Burj", detail: "The marble octagonal tower where Shah Jahan was held, with the downriver Taj view." },
            { name: "Diwan-i-Khas", detail: "The hall of private audience where the emperor received dignitaries." },
            { name: "Jahangiri Mahal", detail: "Akbar-era palace blending Hindu and Central Asian architecture." },
            { name: "Sheesh Mahal", detail: "The mirror palace of the royal hammam quarters." },
            { name: "Amar Singh Gate", detail: "The angled defensive entrance that controls the approach into the fort." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Sunrise to sunset, daily" },
            { label: "Entry", value: "Ticketed, we pre-purchase and escort" },
            { label: "Sequence", value: "Best paired with a Taj sunrise the same day" },
            { label: "Access", value: "Some military zones remain closed to visitors" },
        ],
        tips: [
            "Visit after the Taj sunrise while the light is still soft.",
            "An expert guide turns the fort from a wall into a narrative, we provide one.",
            "Wear proper footwear; the fort involves significant walking on uneven stone.",
        ],
        faqs: [
            { q: "Is Agra Fort worth visiting with the Taj?", a: "Yes, it is the Mughal seat of power and the poignant counterpart to the Taj. We sequence both on one escorted day." },
            { q: "Can you see the Taj from Agra Fort?", a: "Yes, most famously from the Musamman Burj, where Shah Jahan was imprisoned looking at the Taj he built." },
            { q: "How long does Agra Fort take?", a: "About 1.5 to 2 hours with an expert guide for the palaces, halls, and the tower." },
            { q: "Is Agra Fort closed any day?", a: "No, unlike the Taj, it is open daily from sunrise to sunset." },
        ],
    },
    {
        slug: "fatehpur-sikri",
        citySlug: "agra",
        name: "Fatehpur Sikri",
        type: "Palace",
        era: "Mughal · built 1571 to 1585 (Akbar)",
        tagline: "Akbar's Perfect Ghost Capital",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Buland_Darwaza_Fatehpur_Sikri.jpg",
        answer:
            "Fatehpur Sikri is a fortified Mughal city about 40 km west of Agra, India, built by Emperor Akbar between 1571 and 1585 as his imperial capital, then largely abandoned within about 15 years. A UNESCO World Heritage Site, it preserves a complete Mughal court in red sandstone, the Buland Darwaza (one of the world's tallest gateways), the Jama Masjid, the tomb of Salim Chishti, and the palace complex. It is ideally visited as a stop on the Agra to Jaipur chauffeured leg. MyTripMyTravel sequences it directly into the Golden Triangle route.",
        intro: [
            "Fatehpur Sikri is the rarest thing in Indian heritage: a complete imperial capital, frozen at the moment it was vacated. Akbar built it, ruled from it, and then abandoned it, leaving an entire Mughal court intact and uncluttered by later additions.",
            "The Buland Darwaza is among the tallest gateways on earth; beyond it the Jama Masjid, the marble dargah of Salim Chishti, and the palace quarter (Panch Mahal, Diwan-i-Khas, the astrologer's seat) read like a textbook of Mughal planning because nothing overwrote them.",
            "MyTripMyTravel folds Fatehpur Sikri into the Agra to Jaipur leg, turning a four-hour transfer into a UNESCO sightseeing arc with an expert guide rather than a road to be endured.",
        ],
        quickFacts: [
            { label: "Near", value: "Agra (≈ 40 km west)" },
            { label: "Built", value: "1571 to 1585 (Akbar)" },
            { label: "Status", value: "UNESCO World Heritage Site" },
            { label: "Notable", value: "Buland Darwaza, Salim Chishti dargah" },
            { label: "Best as", value: "Agra → Jaipur en-route stop" },
            { label: "Ideal time on site", value: "1.5 to 2 hours" },
            { label: "Open", value: "Sunrise to sunset, daily" },
            { label: "Material", value: "Red sandstone" },
        ],
        highlights: [
            { name: "Buland Darwaza", detail: "The 54 m 'Gate of Magnificence', among the tallest gateways in the world." },
            { name: "Tomb of Salim Chishti", detail: "The exquisite white-marble Sufi dargah within the mosque courtyard." },
            { name: "Panch Mahal", detail: "The five-storey columned pleasure palace tapering to a single kiosk." },
            { name: "Diwan-i-Khas", detail: "The hall with its famous central carved pillar and radial bridges." },
            { name: "Jodha Bai's Palace", detail: "The largest residential quarter, blending Hindu and Mughal forms." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Sunrise to sunset, daily" },
            { label: "Entry", value: "Ticketed, we pre-purchase and escort" },
            { label: "Sequence", value: "Best on the Agra to Jaipur chauffeured leg" },
            { label: "Note", value: "The dargah is an active shrine, modest dress required" },
        ],
        tips: [
            "Build it into the Agra→Jaipur drive rather than as a separate return trip.",
            "Use an expert guide, the site is dense with meaning that is invisible without one.",
            "Decline unofficial 'guides' and shoe-minders at the dargah; our escort handles this.",
        ],
        faqs: [
            { q: "How do I visit Fatehpur Sikri?", a: "As a stop on the Agra to Jaipur chauffeured leg, it sits directly on the route and turns the transfer into a UNESCO sightseeing arc." },
            { q: "Why was Fatehpur Sikri abandoned?", a: "Largely within ~15 years of completion, commonly attributed to water-supply constraints, which is why it survives so intact." },
            { q: "How long do I need there?", a: "About 1.5 to 2 hours with an expert guide for the gateway, mosque, dargah, and palace quarter." },
            { q: "Is it worth stopping for?", a: "Yes, it is a complete, uncluttered Mughal capital and a UNESCO site, and it costs almost no extra time on the Jaipur leg." },
        ],
    },

    // ---- Delhi ----
    {
        slug: "humayuns-tomb",
        citySlug: "delhi",
        name: "Humayun's Tomb",
        type: "Tomb",
        era: "Mughal · completed 1572",
        tagline: "The Prototype of the Taj",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tomb_of_Humayun%2C_Delhi.jpg/3840px-Tomb_of_Humayun%2C_Delhi.jpg",
        answer:
            "Humayun's Tomb is a 16th-century Mughal garden-tomb in Delhi, India, completed in 1572 for the second Mughal emperor, Humayun, commissioned by his widow Bega Begum. A UNESCO World Heritage Site, it was the first garden-tomb on the Indian subcontinent and the architectural prototype that culminated in the Taj Mahal. Set in a charbagh garden, it is best visited in early-morning light. MyTripMyTravel includes it on the curated New Delhi heritage day.",
        intro: [
            "Humayun's Tomb is where the Taj Mahal begins. Built almost a century earlier, it established the template, the raised plinth, the double dome, the symmetrical charbagh garden, that Shah Jahan's architects would later perfect in Agra.",
            "It is also, simply, the calmest world-class monument in Delhi: red sandstone and white marble in a restored Mughal garden, with the surrounding necropolis of Isa Khan's tomb and the Arab Serai adding depth for an unhurried visit.",
            "MyTripMyTravel places it early on the New Delhi heritage day, in soft morning light before the day-tour groups arrive.",
        ],
        quickFacts: [
            { label: "City", value: "Delhi" },
            { label: "Completed", value: "1572" },
            { label: "Patron", value: "Bega Begum (for Humayun)" },
            { label: "Status", value: "UNESCO World Heritage Site" },
            { label: "Significance", value: "Prototype of the Taj Mahal" },
            { label: "Best light", value: "Early morning" },
            { label: "Ideal time on site", value: "1 to 1.5 hours" },
            { label: "Open", value: "Sunrise to sunset, daily" },
        ],
        highlights: [
            { name: "The main tomb", detail: "The red-sandstone-and-marble mausoleum on its high plinth under a double dome." },
            { name: "The charbagh", detail: "The four-quartered Persian paradise garden, restored with its water channels." },
            { name: "Isa Khan's tomb", detail: "The octagonal pre-Mughal tomb-garden within the same complex." },
            { name: "Arab Serai gateway", detail: "The monumental entrance to the craftsmen's quarter." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Sunrise to sunset, daily" },
            { label: "Entry", value: "Ticketed, we pre-purchase and escort" },
            { label: "Sequence", value: "Early on the New Delhi heritage day" },
            { label: "Pair with", value: "Nizamuddin / Lodhi Garden nearby" },
        ],
        tips: [
            "Go first thing, the light and the quiet are both best before mid-morning.",
            "Read it explicitly as the Taj prototype; the lineage is the point.",
            "Combine with nearby Lodhi-era tombs for a single Mughal-evolution morning.",
        ],
        faqs: [
            { q: "Why is Humayun's Tomb important?", a: "It is the first Mughal garden-tomb in India and the direct architectural prototype for the Taj Mahal, the lineage is the reason to see it." },
            { q: "How long does it take?", a: "About 1 to 1.5 hours including the garden and the adjacent tombs." },
            { q: "When is it best visited?", a: "Early morning, for the soft light and before the day-tour crowds arrive." },
            { q: "Is it open every day?", a: "Yes, daily from sunrise to sunset." },
        ],
    },
    {
        slug: "qutub-minar",
        citySlug: "delhi",
        name: "Qutub Minar",
        type: "Monument",
        era: "Delhi Sultanate · begun c. 1199",
        tagline: "The Victory Tower of Early Islamic India",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/0/06/Qutub_Minar_2011.jpg",
        answer:
            "The Qutub Minar is a 73-metre brick-and-sandstone victory tower in Delhi, India, begun around 1199 by Qutb-ud-din Aibak, founder of the Delhi Sultanate. A UNESCO World Heritage Site, it stands within the Qutub complex alongside the Quwwat-ul-Islam mosque and the 4th-century Iron Pillar of Delhi, famous for its rust resistance. It is the tallest brick minaret in the world. MyTripMyTravel includes it on the heritage-and-contrast Delhi day.",
        intro: [
            "The Qutub Minar marks the beginning of Islamic architecture in India, the moment, around 1199, when a new building language arrived on the subcontinent. The tapering, fluted tower is the headline, but the complex around it is the real lesson.",
            "The Quwwat-ul-Islam mosque was built from the remains of demolished temples, its carved columns still legible; and the 4th-century Iron Pillar in the courtyard has resisted rust for over 1,600 years, a metallurgical puzzle that still draws scientists.",
            "MyTripMyTravel sequences the Qutub complex into the Delhi day as the deep-history counterweight to the Mughal and colonial layers.",
        ],
        quickFacts: [
            { label: "City", value: "Delhi" },
            { label: "Begun", value: "c. 1199 (Qutb-ud-din Aibak)" },
            { label: "Height", value: "≈ 73 m (tallest brick minaret)" },
            { label: "Status", value: "UNESCO World Heritage Site" },
            { label: "Notable", value: "Iron Pillar, Quwwat-ul-Islam mosque" },
            { label: "Ideal time on site", value: "1 to 1.5 hours" },
            { label: "Open", value: "Sunrise to sunset, daily" },
            { label: "Layer", value: "Earliest Islamic Delhi" },
        ],
        highlights: [
            { name: "The minar", detail: "The five-storey fluted victory tower with bands of Quranic calligraphy." },
            { name: "Iron Pillar", detail: "The 4th-century rust-resistant iron column, a metallurgical wonder." },
            { name: "Quwwat-ul-Islam mosque", detail: "India's earliest extant mosque, built from reused temple carving." },
            { name: "Alai Darwaza", detail: "The 1311 gateway, an early masterpiece of true-arch construction." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Sunrise to sunset, daily" },
            { label: "Entry", value: "Ticketed, we pre-purchase and escort" },
            { label: "Access", value: "Tower interior is closed; viewed from grounds" },
            { label: "Sequence", value: "Part of the curated Delhi heritage day" },
        ],
        tips: [
            "An expert guide is essential, the temple-spoliation story is invisible otherwise.",
            "Go earlier in the day for light and lower crowds.",
            "Combine with Mehrauli Archaeological Park alongside for added depth.",
        ],
        faqs: [
            { q: "Can you climb the Qutub Minar?", a: "No, the tower interior has been closed to the public for decades; it is experienced from the complex grounds." },
            { q: "What is the Iron Pillar?", a: "A 4th-century iron column in the courtyard that has resisted corrosion for over 1,600 years, a metallurgical marvel." },
            { q: "How long does the Qutub complex take?", a: "About 1 to 1.5 hours with a guide for the minar, mosque, and pillar." },
            { q: "Why does it matter?", a: "It marks the arrival of Islamic architecture in India and is a UNESCO World Heritage Site." },
        ],
    },
    {
        slug: "red-fort",
        citySlug: "delhi",
        name: "Red Fort",
        type: "Fort",
        era: "Mughal · completed 1648 (Shah Jahan)",
        tagline: "The Sandstone Seat of Shahjahanabad",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_Fort_in_Delhi_03-2016.jpg",
        answer:
            "The Red Fort (Lal Qila) is a 17th-century Mughal fort in Old Delhi, India, completed in 1648 as the palace-fortress of Shah Jahan's new capital, Shahjahanabad. A UNESCO World Heritage Site, its massive red-sandstone walls enclose marble palaces, the Diwan-i-Aam and Diwan-i-Khas, and the Rang Mahal. It is where India's Prime Minister addresses the nation each Independence Day. MyTripMyTravel includes it on the escorted Old Delhi heritage walk.",
        intro: [
            "The Red Fort is the symbolic heart of Old Delhi and of modern India, the seat of late Mughal power and the stage from which the Indian flag is raised every 15 August.",
            "Behind the great Lahori Gate and the covered Chatta Chowk bazaar lie the marble audience halls, the Rang Mahal, and the riverside palaces, diminished by colonial demolition but still legible as the apex of Shah Jahan's city-building.",
            "MyTripMyTravel sequences the Red Fort into the Old Delhi walk with the Jama Masjid and Chandni Chowk for a single, controlled, high-contrast morning.",
        ],
        quickFacts: [
            { label: "City", value: "Old Delhi" },
            { label: "Completed", value: "1648 (Shah Jahan)" },
            { label: "Status", value: "UNESCO World Heritage Site" },
            { label: "Notable", value: "Lahori Gate, Diwan-i-Khas, Rang Mahal" },
            { label: "Closed", value: "Mondays" },
            { label: "Pairs with", value: "Jama Masjid, Chandni Chowk" },
            { label: "Ideal time on site", value: "1.5 to 2 hours" },
            { label: "Significance", value: "Independence Day address site" },
        ],
        highlights: [
            { name: "Lahori Gate & Chatta Chowk", detail: "The ceremonial gateway and the rare covered Mughal bazaar." },
            { name: "Diwan-i-Khas", detail: "The marble hall of private audience, once home to the Peacock Throne." },
            { name: "Rang Mahal", detail: "The 'Palace of Colours' of the imperial zenana." },
            { name: "Diwan-i-Aam", detail: "The hall of public audience with the emperor's marble canopy." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Sunrise to sunset; closed Mondays" },
            { label: "Entry", value: "Ticketed, we pre-purchase and escort" },
            { label: "Sequence", value: "Part of the Old Delhi heritage walk" },
            { label: "Security", value: "Tight screening, our escort manages it" },
        ],
        tips: [
            "Plan around the Monday closure, our planners handle this automatically.",
            "Pair with Jama Masjid and a Chandni Chowk food trail the same morning.",
            "An expert guide reconstructs what colonial demolition removed.",
        ],
        faqs: [
            { q: "Is the Red Fort closed any day?", a: "Yes, it is closed on Mondays. Our itineraries are built around this." },
            { q: "What is the Red Fort's modern significance?", a: "India's Prime Minister addresses the nation from its ramparts every Independence Day (15 August)." },
            { q: "How long does it take?", a: "About 1.5 to 2 hours with a guide for the gates, bazaar, and palace halls." },
            { q: "How does it fit a Delhi day?", a: "It anchors the escorted Old Delhi walk alongside the Jama Masjid and Chandni Chowk." },
        ],
    },

    // ---- Jaipur ----
    {
        slug: "amer-fort",
        citySlug: "jaipur",
        name: "Amer Fort",
        type: "Fort",
        era: "Rajput · begun 1592 (Raja Man Singh I)",
        tagline: "The Hilltop Palace of the Kachhwahas",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Amber_Fort_Jaipur.jpg",
        answer:
            "Amer Fort (Amber Fort) is a hilltop Rajput fort-palace 11 km from Jaipur, India, begun in 1592 by Raja Man Singh I and the seat of the Kachhwaha rulers before Jaipur was founded. A UNESCO World Heritage Site as part of the Hill Forts of Rajasthan, it is built in sandstone and marble around a series of courtyards, with the celebrated mirrored Sheesh Mahal. It overlooks Maota Lake and the old capital. MyTripMyTravel arranges an escorted early entry before the crowds and heat.",
        intro: [
            "Amer Fort is the spectacle of the Golden Triangle's finale, a sandstone-and-marble palace stacked up a ridge above a lake, the seat of the Kachhwaha Rajputs before Jaipur itself existed.",
            "The ascent leads through four courtyards: the Diwan-i-Aam, the Ganesh Pol, the mirror-lined Sheesh Mahal that ignites from a single flame, and the cooler Sukh Niwas. The scale and the layered defensive planning reward an early, escorted visit before the light hardens.",
            "MyTripMyTravel times Amer for opening, with an expert guide and a curated approach, avoiding the mid-morning crush that defines most visitors' experience of it.",
        ],
        quickFacts: [
            { label: "Near", value: "Jaipur (≈ 11 km)" },
            { label: "Begun", value: "1592 (Raja Man Singh I)" },
            { label: "Status", value: "UNESCO, Hill Forts of Rajasthan" },
            { label: "Notable", value: "Sheesh Mahal, Ganesh Pol" },
            { label: "Best time", value: "At opening (escorted)" },
            { label: "Ideal time on site", value: "2 hours" },
            { label: "Open", value: "Daily, morning to evening" },
            { label: "Overlooks", value: "Maota Lake" },
        ],
        highlights: [
            { name: "Sheesh Mahal", detail: "The mirror palace whose inlaid glass multiplies a single flame across the ceiling." },
            { name: "Ganesh Pol", detail: "The frescoed ceremonial gateway into the private palace courtyards." },
            { name: "Diwan-i-Aam", detail: "The pillared hall of public audience overlooking the valley." },
            { name: "Sukh Niwas", detail: "The cooled pleasure hall with its early channel air-conditioning." },
            { name: "Maota Lake & Kesar Kyari", detail: "The saffron garden on the lake below, framing the classic view." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Daily, morning to evening" },
            { label: "Entry", value: "Ticketed, we pre-purchase and escort" },
            { label: "Approach", value: "Curated vehicle ascent (we do not use elephants)" },
            { label: "Best time", value: "At opening, before crowds and heat" },
        ],
        tips: [
            "Arrive at opening, Amer is transformed by being there before the crush.",
            "We use a curated vehicle ascent on welfare grounds, not elephant rides.",
            "An expert guide is essential to read the four courtyards in sequence.",
        ],
        faqs: [
            { q: "When is the best time to visit Amer Fort?", a: "Right at opening. The fort is overwhelmed by mid-morning; an escorted early entry is how we run it." },
            { q: "Do you offer elephant rides at Amer?", a: "No. On animal-welfare grounds we use a curated vehicle ascent instead." },
            { q: "How long does Amer Fort take?", a: "About 2 hours with a guide for the four courtyards and the Sheesh Mahal." },
            { q: "Is Amer Fort a UNESCO site?", a: "Yes, it is inscribed as part of the Hill Forts of Rajasthan." },
        ],
    },
    {
        slug: "hawa-mahal",
        citySlug: "jaipur",
        name: "Hawa Mahal",
        type: "Palace",
        era: "Rajput · built 1799 (Sawai Pratap Singh)",
        tagline: "The Palace of Winds",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/9/95/Hawa_Mahal_2011.jpg",
        answer:
            "The Hawa Mahal ('Palace of Winds') is a five-storey palace façade in Jaipur, India, built in 1799 by Maharaja Sawai Pratap Singh. Its honeycomb of 953 small windows (jharokhas) allowed royal women to observe the street and festivals unseen, while channelling cooling air. Built of red and pink sandstone, it is the most photographed landmark of the Pink City and best shot in early-morning light. MyTripMyTravel times it for the dawn light and pairs it with the City Palace and Jantar Mantar.",
        intro: [
            "The Hawa Mahal is the single most recognisable image of Jaipur, a five-storey pink screen of 953 lattice windows that is essentially one extraordinary façade, built so the women of the court could watch the city without being seen.",
            "It is best understood from two sides: the iconic street elevation at sunrise, and the rear courtyard and ramps that reveal it is a screen, not a building. Both are quick but precisely light-dependent.",
            "MyTripMyTravel times the Hawa Mahal for the early sun on its east face and folds it into the walled-city circuit with the City Palace and Jantar Mantar.",
        ],
        quickFacts: [
            { label: "City", value: "Jaipur, Rajasthan" },
            { label: "Built", value: "1799 (Sawai Pratap Singh)" },
            { label: "Windows", value: "953 jharokhas, five storeys" },
            { label: "Best light", value: "Sunrise, east façade" },
            { label: "Pairs with", value: "City Palace, Jantar Mantar" },
            { label: "Ideal time on site", value: "30 to 45 minutes" },
            { label: "Open", value: "Daily, morning to evening" },
            { label: "Material", value: "Red and pink sandstone" },
        ],
        highlights: [
            { name: "The street façade", detail: "The honeycomb screen at sunrise, the canonical Jaipur photograph." },
            { name: "Interior ramps", detail: "The rampless ascent the palace used instead of stairs." },
            { name: "Jharokha windows", detail: "The latticed bays that cooled the palace and screened the zenana." },
            { name: "Rooftop view", detail: "The city-and-Nahargarh panorama from the upper storey." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Daily, morning to evening" },
            { label: "Entry", value: "Ticketed for interior, we arrange access" },
            { label: "Best photo", value: "From the café opposite at sunrise" },
            { label: "Sequence", value: "First stop on the walled-city circuit" },
        ],
        tips: [
            "Shoot the façade at sunrise from across the street before traffic builds.",
            "Go inside too, the screen reveals itself completely from behind.",
            "Bundle with City Palace and Jantar Mantar in one walled-city morning.",
        ],
        faqs: [
            { q: "When is the best time to photograph the Hawa Mahal?", a: "At sunrise, when the early sun lights the east-facing honeycomb façade and street traffic is minimal." },
            { q: "Can you go inside the Hawa Mahal?", a: "Yes, the interior ramps and jharokhas are open; we arrange access and pair it with the City Palace." },
            { q: "How long does it take?", a: "30 to 45 minutes, it is a façade-and-screen, quick but light-dependent." },
            { q: "Why was it built?", a: "So royal women could watch street life and festivals unseen, while the lattice cooled the palace." },
        ],
    },
    {
        slug: "jantar-mantar",
        citySlug: "jaipur",
        name: "Jantar Mantar",
        type: "Observatory",
        era: "Rajput · completed 1734 (Sawai Jai Singh II)",
        tagline: "The Stone Instruments That Still Tell Time",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/4/45/Jantar_Mantar_Jaipur.jpg",
        answer:
            "The Jantar Mantar in Jaipur, India, is an astronomical observatory completed in 1734 by Maharaja Sawai Jai Singh II, comprising 19 large masonry instruments for measuring time, predicting eclipses, and tracking celestial positions. A UNESCO World Heritage Site, it includes the Samrat Yantra, the world's largest stone sundial, accurate to about two seconds. It is best experienced with a guide who demonstrates the instruments in use. MyTripMyTravel pairs it with the adjacent City Palace.",
        intro: [
            "The Jantar Mantar looks like abstract sculpture and is in fact a working scientific instrument park, 19 monumental masonry devices that still measure time and track the heavens nearly three centuries on.",
            "Without explanation it is a curiosity; with a guide demonstrating the Samrat Yantra's two-second-accurate shadow or the zodiac instruments, it becomes one of the most intellectually rewarding stops in Jaipur.",
            "MyTripMyTravel always pairs it with an expert guide and the adjacent City Palace, since the two share a wall and a single ticketed circuit.",
        ],
        quickFacts: [
            { label: "City", value: "Jaipur, Rajasthan" },
            { label: "Completed", value: "1734 (Sawai Jai Singh II)" },
            { label: "Status", value: "UNESCO World Heritage Site" },
            { label: "Instruments", value: "19 masonry devices" },
            { label: "Notable", value: "Samrat Yantra (largest stone sundial)" },
            { label: "Needs", value: "An expert guide to come alive" },
            { label: "Ideal time on site", value: "45 to 60 minutes" },
            { label: "Pairs with", value: "City Palace (adjacent)" },
        ],
        highlights: [
            { name: "Samrat Yantra", detail: "The 27 m sundial accurate to about two seconds, the centrepiece." },
            { name: "Jai Prakash Yantra", detail: "The hemispherical bowls mapping the sky in mirror image." },
            { name: "Rashivalaya", detail: "Twelve instruments, one per zodiac sign, for ecliptic measurement." },
            { name: "Ram Yantra", detail: "The paired cylindrical structures for altitude and azimuth." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Daily, morning to evening" },
            { label: "Entry", value: "Ticketed, combined with City Palace circuit" },
            { label: "Guide", value: "Strongly recommended, we provide an expert" },
            { label: "Best time", value: "Mid-morning for clear shadow demonstrations" },
        ],
        tips: [
            "Never visit without a guide, the instruments are inert otherwise.",
            "Mid-morning sun gives the clearest sundial demonstration.",
            "Combine with the City Palace next door on one circuit.",
        ],
        faqs: [
            { q: "Do I need a guide for the Jantar Mantar?", a: "Effectively yes, the instruments are abstract without one. We provide an expert who demonstrates them in use." },
            { q: "Does the sundial actually work?", a: "Yes, the Samrat Yantra is accurate to roughly two seconds and is demonstrated live." },
            { q: "How long does it take?", a: "45 to 60 minutes with a guide for the principal instruments." },
            { q: "Is it near the City Palace?", a: "Adjacent, they share a circuit, and we sequence them together." },
        ],
    },

    // ---- Jodhpur ----
    {
        slug: "mehrangarh-fort",
        citySlug: "jodhpur",
        name: "Mehrangarh Fort",
        type: "Fort",
        era: "Rajput · founded 1459 (Rao Jodha)",
        tagline: "The Citadel Above the Blue City",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg",
        answer:
            "Mehrangarh is one of the largest forts in India, founded in 1459 by Rao Jodha in Jodhpur, Rajasthan, rising 120 metres on a sheer rock escarpment above the blue old city. It contains palaces, Moti Mahal, Phool Mahal, Sheesh Mahal, and one of the best-curated fort museums in the country, with the city of Jodhpur spread beneath its ramparts. MyTripMyTravel arranges an escorted early entry before the light hardens and the crowds arrive.",
        intro: [
            "Mehrangarh is the most commanding fort in Rajasthan, not the most ornate, but the most overwhelming, a wall of sandstone that seems to grow out of the cliff with the blue city pooled at its base.",
            "Inside, it is exceptionally well run: the museum, the palanquin and arms collections, the Moti and Phool Mahals, and ramparts with cannon still in place and a drop that explains five centuries of security. It is the rare fort where the curation matches the architecture.",
            "MyTripMyTravel times Mehrangarh for opening with an expert guide, then descends into the blue lanes while the morning light still holds.",
        ],
        quickFacts: [
            { label: "City", value: "Jodhpur, Rajasthan" },
            { label: "Founded", value: "1459 (Rao Jodha)" },
            { label: "Height", value: "≈ 120 m above the city" },
            { label: "Notable", value: "Moti Mahal, Phool Mahal, museum" },
            { label: "Best time", value: "At opening (escorted)" },
            { label: "Ideal time on site", value: "2 to 2.5 hours" },
            { label: "Open", value: "Daily, morning to evening" },
            { label: "Pairs with", value: "Blue City walk, Jaswant Thada" },
        ],
        highlights: [
            { name: "Moti Mahal", detail: "The 'Pearl Palace' hall of the Marwar throne and royal audiences." },
            { name: "Phool Mahal", detail: "The gilded 'Flower Palace' pleasure chamber." },
            { name: "The ramparts", detail: "Cannon-lined walls with the definitive blue-city panorama." },
            { name: "The museum", detail: "Palanquins, arms, miniatures, one of India's best fort collections." },
            { name: "Chamunda Mata temple", detail: "The 15th-century shrine at the fort's southern end." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Daily, morning to evening" },
            { label: "Entry", value: "Ticketed, we pre-purchase and escort" },
            { label: "Best time", value: "At opening, before crowds and heat" },
            { label: "Access", value: "Lift available; significant walking remains" },
        ],
        tips: [
            "Enter at opening, the fort and the blue-city light are both best early.",
            "Use the museum audio/guide; the curation is genuinely worth the time.",
            "Descend straight into the blue lanes afterward while the light holds.",
        ],
        faqs: [
            { q: "Is Mehrangarh worth a guided visit?", a: "Decisively, it is among India's finest fort museums. We arrange escorted early entry before crowds and heat." },
            { q: "How long does Mehrangarh take?", a: "About 2 to 2.5 hours for the palaces, ramparts, and museum with a guide." },
            { q: "Is there a lift to the top?", a: "Yes, a lift exists, but expect significant walking on uneven stone regardless." },
            { q: "What pairs well with the fort?", a: "The blue-city walk and Jaswant Thada, we sequence all three in one escorted morning." },
        ],
    },

    // ---- Udaipur ----
    {
        slug: "city-palace-udaipur",
        citySlug: "udaipur",
        name: "City Palace, Udaipur",
        type: "Palace",
        era: "Mewar · begun 1559 (Udai Singh II)",
        tagline: "The Lake-Edge Palace of Mewar",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/3/32/Udaipur_Lake_Palace.jpg",
        answer:
            "The City Palace of Udaipur, India, is the largest palace complex in Rajasthan, begun in 1559 by Maharana Udai Singh II and extended over nearly four centuries by successive Mewar rulers. Stretching almost a kilometre along the east bank of Lake Pichola, it is a stacked sequence of courtyards, balconies, and mirror rooms, parts of which remain the residence of the Mewar family. MyTripMyTravel arranges escorted access and a private Lake Pichola boat to see it from the water.",
        intro: [
            "The City Palace is Udaipur's spine, almost a kilometre of interconnected palaces along Lake Pichola, built up over four centuries so that it reads as a single, slightly improbable, cliff of architecture above the water.",
            "The route climbs through courtyards, the mirrored and tiled chambers, the Mor Chowk peacock mosaics, and balconies that frame the Lake Palace and Jag Mandir floating offshore. Part of it is still a working royal residence and part a museum.",
            "MyTripMyTravel sequences the palace with a private sunset boat on Lake Pichola so it is experienced both from within and from the water, the two halves of the same view.",
        ],
        quickFacts: [
            { label: "City", value: "Udaipur, Rajasthan" },
            { label: "Begun", value: "1559 (Udai Singh II)" },
            { label: "Scale", value: "Largest palace complex in Rajasthan" },
            { label: "On", value: "East bank of Lake Pichola" },
            { label: "Notable", value: "Mor Chowk, Sheesh Mahal, museum" },
            { label: "Pairs with", value: "Private Pichola sunset boat" },
            { label: "Ideal time on site", value: "2 to 2.5 hours" },
            { label: "Open", value: "Daily, morning to evening" },
        ],
        highlights: [
            { name: "Mor Chowk", detail: "The peacock courtyard with its glass-mosaic birds." },
            { name: "Sheesh Mahal", detail: "The mirrored chamber of the Mewar zenana." },
            { name: "Amar Vilas", detail: "The highest hanging-garden courtyard with lake views." },
            { name: "Lake Pichola panorama", detail: "Balconies framing the Lake Palace and Jag Mandir." },
            { name: "Crystal Gallery", detail: "The rare 19th-century royal crystal collection." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Daily, morning to evening" },
            { label: "Entry", value: "Ticketed, we pre-purchase and escort" },
            { label: "Pair with", value: "Private Lake Pichola sunset boat" },
            { label: "Note", value: "Parts remain a private royal residence" },
        ],
        tips: [
            "See it from the water too, the lake boat is half the experience.",
            "Time the boat for sunset over the Lake Palace.",
            "An expert guide untangles four centuries of additions.",
        ],
        faqs: [
            { q: "How long does the City Palace take?", a: "About 2 to 2.5 hours for the courtyards, mirror rooms, and museum with a guide." },
            { q: "Can you see it from Lake Pichola?", a: "Yes, we arrange a private sunset boat so you experience it from within and from the water." },
            { q: "Is it still a royal residence?", a: "Partly, sections remain the private residence of the Mewar family; the rest is a museum." },
            { q: "Is it the largest palace in Rajasthan?", a: "Yes, it is the largest palace complex in the state, built over nearly four centuries." },
        ],
    },

    // ---- Jaisalmer ----
    {
        slug: "jaisalmer-fort",
        citySlug: "jaisalmer",
        name: "Jaisalmer Fort",
        type: "Fort",
        era: "Bhati Rajput · founded 1156 (Rawal Jaisal)",
        tagline: "The Living Fort of the Thar",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/74/Jaisalmer_Fort.jpg",
        answer:
            "Jaisalmer Fort (Sonar Quila) is a yellow-sandstone fort in the Thar Desert of Rajasthan, India, founded in 1156 by Rawal Jaisal. A UNESCO World Heritage Site as part of the Hill Forts of Rajasthan, it is one of the very few 'living forts' in the world, with roughly a quarter of the old city's population still residing within its walls amid temples, havelis, and lanes. At sunrise and sunset the fort glows gold. MyTripMyTravel arranges escorted access through the inhabited quarters.",
        intro: [
            "Jaisalmer Fort is unlike any other fort in India because people still live in it. It is not a preserved ruin but an occupied medieval town inside ramparts, which makes the visit an act of moving through a community rather than a museum.",
            "Within the walls are the Jain temple cluster, the royal palace, and carved merchant havelis, all in the same honey sandstone that turns molten at the golden hours. That habitation is also its fragility, water stress threatens the fort, which shapes how it should be visited responsibly.",
            "MyTripMyTravel runs Jaisalmer Fort with an escorted route through the living quarters timed to the golden light, paired with the great havelis below.",
        ],
        quickFacts: [
            { label: "City", value: "Jaisalmer, Rajasthan" },
            { label: "Founded", value: "1156 (Rawal Jaisal)" },
            { label: "Status", value: "UNESCO, Hill Forts of Rajasthan" },
            { label: "Distinction", value: "One of the world's few living forts" },
            { label: "Best light", value: "Sunrise & sunset (golden glow)" },
            { label: "Notable", value: "Jain temples, royal palace, havelis" },
            { label: "Ideal time on site", value: "2 hours" },
            { label: "Material", value: "Yellow Thar sandstone" },
        ],
        highlights: [
            { name: "Jain temple cluster", detail: "Seven interconnected 12th to 15th-century temples, finely carved." },
            { name: "Raj Mahal", detail: "The royal palace overlooking the main fort square." },
            { name: "Living lanes", detail: "Inhabited streets of homes, shrines, and workshops within the walls." },
            { name: "Ramparts at golden hour", detail: "Bastion views over the Thar as the sandstone ignites." },
            { name: "Patwon ki Haveli (below)", detail: "The most elaborate of the merchant mansions, just outside the fort." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Accessible daily; temples have set hours" },
            { label: "Entry", value: "Fort free to enter; palace/temples ticketed" },
            { label: "Best time", value: "Sunrise or sunset for the golden glow" },
            { label: "Responsible", value: "Tread lightly, it is an inhabited, fragile site" },
        ],
        tips: [
            "Visit at sunrise or sunset for the sandstone glow and cooler lanes.",
            "Stay or dine within respectfully, it is a living community, not a set.",
            "Pair with Patwon ki Haveli immediately below the fort.",
        ],
        faqs: [
            { q: "What makes Jaisalmer Fort a 'living fort'?", a: "Roughly a quarter of the old city still lives inside the walls, amid temples, havelis, and working lanes, it is inhabited, not a ruin." },
            { q: "When does the fort look golden?", a: "At sunrise and sunset, when the Thar sandstone turns molten gold, the reason it is called Sonar Quila." },
            { q: "How long does it take?", a: "About 2 hours for the temples, palace, and living lanes with an escort." },
            { q: "Is it a UNESCO site?", a: "Yes, inscribed as part of the Hill Forts of Rajasthan." },
        ],
    },
    // ---- Ranthambore ----
    {
        slug: "ranthambore-fort",
        citySlug: "ranthambore",
        name: "Ranthambore Fort",
        type: "Fort",
        era: "Chauhan · 10th century",
        tagline: "The Tiger Fort in the Reserve",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Ranthambore_Tiger.jpg",
        answer:
            "Ranthambore Fort is a 10th-century hill fort inside the Ranthambore Tiger Reserve in Rajasthan, India, and a UNESCO World Heritage Site as part of the Hill Forts of Rajasthan. Sitting atop a 200 m rock surrounded by national-park forest, it contains palaces, temples, including the active Trinetra Ganesh temple, tanks, and gateways, with wildlife frequently seen on the approach. It is uniquely visited as a heritage stop within a safari itinerary. MyTripMyTravel sequences the fort as a counterpoint between game drives.",
        intro: [
            "Ranthambore Fort is the only place in the world where a thousand-year-old fort gate and a wild Bengal tiger can occupy the same photograph. It sits inside the reserve, so the visit blends heritage and wilderness in a way nothing else in India does.",
            "Within the ramparts are the Hammir Court, the Trinetra Ganesh temple that still draws pilgrims and posted letters, step tanks, and viewpoints over the park's lakes. Langur, deer, and occasionally larger predators are seen on the ascent.",
            "MyTripMyTravel sequences the fort as a midday heritage interlude between the morning and afternoon safaris, with an expert guide for the history and the wildlife context.",
        ],
        quickFacts: [
            { label: "In", value: "Ranthambore Tiger Reserve, Rajasthan" },
            { label: "Era", value: "10th century (Chauhan)" },
            { label: "Status", value: "UNESCO, Hill Forts of Rajasthan" },
            { label: "Notable", value: "Trinetra Ganesh temple, Hammir Court" },
            { label: "Best as", value: "Heritage stop between safaris" },
            { label: "Ideal time on site", value: "1.5 to 2 hours" },
            { label: "Open", value: "Daily, daylight hours" },
            { label: "Wildlife", value: "Often seen on the approach" },
        ],
        highlights: [
            { name: "Trinetra Ganesh temple", detail: "An active three-eyed Ganesh shrine that still receives postal pilgrim letters." },
            { name: "Hammir Court", detail: "The ruined palace court of the fort's most celebrated ruler." },
            { name: "Step tanks", detail: "Ancient water reservoirs that draw wildlife within the walls." },
            { name: "Lake viewpoints", detail: "Ramparts overlooking the reserve's tiger-bearing lake belt." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Daily during park daylight hours" },
            { label: "Entry", value: "Within reserve boundaries, escorted" },
            { label: "Sequence", value: "Between morning and afternoon game drives" },
            { label: "Note", value: "An active temple, modest dress required" },
        ],
        tips: [
            "Slot it between the two safaris rather than as a separate trip.",
            "Watch for langur and deer on the climb, the fort is inside the reserve.",
            "An expert guide ties the Chauhan history to the park landscape.",
        ],
        faqs: [
            { q: "Is Ranthambore Fort inside the tiger reserve?", a: "Yes, it sits within the national park, which is why heritage and wildlife overlap here uniquely. We escort the visit between safaris." },
            { q: "Can you see wildlife at the fort?", a: "Langur and deer are common on the approach; larger animals are occasionally seen. It is a genuine in-reserve monument." },
            { q: "How long does the fort take?", a: "About 1.5 to 2 hours with a guide for the temple, court, and viewpoints." },
            { q: "Is it a UNESCO site?", a: "Yes, inscribed as part of the Hill Forts of Rajasthan." },
        ],
    },

    // ---- Pushkar ----
    {
        slug: "brahma-temple",
        citySlug: "pushkar",
        name: "Jagatpita Brahma Mandir",
        type: "Temple",
        era: "Originally ancient · structure c. 14th century",
        tagline: "One of the World's Few Brahma Temples",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Pushkar_Lake.jpg",
        answer:
            "The Jagatpita Brahma Mandir in Pushkar, Rajasthan, India, is one of the very few temples in the world dedicated to Brahma, the Hindu creator deity. Marked by its distinctive red spire and a hamsa (goose) motif, the present structure dates to around the 14th century on a much older site. It overlooks the sacred Pushkar Lake and is the focal point of the town's intense pilgrim life, especially around Kartik Purnima. MyTripMyTravel arranges a respectful, escorted early-morning visit.",
        intro: [
            "The Brahma Temple is the reason Pushkar exists as a pilgrimage town. Temples to Brahma are extraordinarily rare anywhere in the world, which gives this modest red-spired shrine a significance far beyond its size.",
            "It sits a short walk from the ghats of Pushkar Lake, and the two function as one ritual landscape, bathing in the lake, then darshan at the temple. The atmosphere is devotional and dense rather than monumental.",
            "MyTripMyTravel arranges a respectful, escorted early-morning visit before the heat and the crowd, with context on why a Brahma temple is so unusual.",
        ],
        quickFacts: [
            { label: "City", value: "Pushkar, Rajasthan" },
            { label: "Dedicated to", value: "Brahma (rare worldwide)" },
            { label: "Structure", value: "c. 14th century, ancient origin" },
            { label: "Near", value: "Pushkar Lake & ghats" },
            { label: "Peak", value: "Kartik Purnima pilgrimage" },
            { label: "Ideal time on site", value: "45 minutes" },
            { label: "Dress", value: "Modest; shoes removed" },
            { label: "Best time", value: "Early morning" },
        ],
        highlights: [
            { name: "The red spire & hamsa", detail: "The temple's distinctive shikhara and the goose symbol of Brahma." },
            { name: "Silver turtle floor", detail: "The marble-and-silver inlaid floor before the sanctum." },
            { name: "Pushkar Lake link", detail: "The ghat-and-temple ritual sequence that defines the town." },
            { name: "Pilgrim atmosphere", detail: "One of Hinduism's most concentrated devotional environments." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Early morning to evening (midday break)" },
            { label: "Entry", value: "Free; no photography in sanctum" },
            { label: "Conduct", value: "Active shrine, escorted, respectful visit" },
            { label: "Pair with", value: "Pushkar Lake ghats at dawn" },
        ],
        tips: [
            "Go at dawn, cooler, calmer, and the ritual light is best.",
            "Phones/cameras are restricted at the sanctum; our escort advises.",
            "Combine with an escorted ghat visit for the full pilgrim sequence.",
        ],
        faqs: [
            { q: "Why is the Brahma Temple special?", a: "Temples dedicated to Brahma are extremely rare worldwide; this is the most prominent, which is why Pushkar is a major pilgrimage town." },
            { q: "Can you photograph inside?", a: "Photography is restricted in the sanctum. Our escort guides appropriate, respectful conduct." },
            { q: "When is it busiest?", a: "Around Kartik Purnima (the Camel Fair period), when pilgrim numbers peak. We time visits early to avoid crush." },
            { q: "How long does it take?", a: "About 45 minutes, ideally paired with a dawn visit to the lake ghats." },
        ],
    },

    // ---- Rishikesh ----
    {
        slug: "lakshman-jhula",
        citySlug: "rishikesh",
        name: "Lakshman Jhula",
        type: "Monument",
        era: "Iron suspension bridge · 1929",
        tagline: "The Iconic Ganga Footbridge",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/4/47/Lakshman_Jhula_Rishikesh.jpg",
        answer:
            "Lakshman Jhula is an iron suspension footbridge across the Ganga river in Rishikesh, India, originally built in 1929 and named for the legend that Lakshman crossed the river here. At about 137 m long, it links Tapovan and Jonk and is flanked by riverside temples, ashrams, and the multi-storey Tera Manzil temple. It is the visual signature of Rishikesh's spiritual riverfront. MyTripMyTravel includes it on the escorted Ganga-and-ghats route, timed around the aarti.",
        intro: [
            "Lakshman Jhula is the postcard of Rishikesh, a slender iron bridge slung across the green Ganga, with temples stacked up both banks and the Himalaya beginning just upstream.",
            "It is less a monument to enter than a vantage and a thoroughfare: the crossing, the riverside temple cluster, and the cafés and ashrams that define the spiritual-traveller belt all radiate from it. (Note: access can change with periodic safety works on the historic span.)",
            "MyTripMyTravel walks it as part of the escorted riverfront route, timed so the crossing and a Ganga Aarti vantage fall in the same evening.",
        ],
        quickFacts: [
            { label: "City", value: "Rishikesh, Uttarakhand" },
            { label: "Built", value: "1929 (iron suspension)" },
            { label: "Span", value: "≈ 137 m over the Ganga" },
            { label: "Links", value: "Tapovan ↔ Jonk" },
            { label: "Near", value: "Tera Manzil temple, ashrams" },
            { label: "Best time", value: "Late afternoon into aarti" },
            { label: "Ideal time on site", value: "45 to 60 minutes" },
            { label: "Note", value: "Access subject to safety works" },
        ],
        highlights: [
            { name: "The river crossing", detail: "The classic Ganga vantage with the foothills upstream." },
            { name: "Tera Manzil temple", detail: "The riverside multi-storey temple beside the bridge." },
            { name: "Ashram-and-café belt", detail: "The spiritual-traveller quarter radiating from both banks." },
            { name: "Aarti proximity", detail: "Walkable to the evening Ganga Aarti ghats." },
        ],
        visitorInfo: [
            { label: "Access", value: "Pedestrian; subject to periodic safety closures" },
            { label: "Entry", value: "Free" },
            { label: "Best time", value: "Late afternoon, then aarti" },
            { label: "Sequence", value: "Part of the escorted riverfront route" },
        ],
        tips: [
            "Cross in late afternoon, then move to a Ganga Aarti vantage for dusk.",
            "Check current access, the historic span periodically undergoes works.",
            "The café terraces above give the best elevated bridge view.",
        ],
        faqs: [
            { q: "What is Lakshman Jhula?", a: "A 1929 iron suspension footbridge over the Ganga in Rishikesh, the visual signature of the town's spiritual riverfront." },
            { q: "Can you walk across it?", a: "It is a pedestrian bridge, though access can be restricted during periodic safety works on the historic span; our escort confirms current status." },
            { q: "What is near Lakshman Jhula?", a: "The Tera Manzil temple, riverside ashrams, the café belt, and the Ganga Aarti ghats, all on the escorted route." },
            { q: "When should I visit?", a: "Late afternoon into the evening aarti for the best light and atmosphere." },
        ],
    },

    // ---- Kochi ----
    {
        slug: "chinese-fishing-nets",
        citySlug: "kochi",
        name: "Chinese Fishing Nets",
        type: "Monument",
        era: "Introduced c. 14th century",
        tagline: "The Cantilevered Icons of Fort Kochi",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Chinese_fishing_nets_Kochi.jpg",
        answer:
            "The Chinese fishing nets (cheena vala) of Fort Kochi, Kerala, India, are large shore-operated cantilevered lift nets, traditionally said to have been introduced by traders from the court of Kublai Khan around the 14th century. Lining the Fort Kochi waterfront at the harbour mouth, they are operated by teams using counterweights and remain the defining image of the spice port. They are best seen at sunset. MyTripMyTravel includes them on the escorted Fort Kochi heritage walk.",
        intro: [
            "The Chinese fishing nets are Fort Kochi's signature, a row of huge cantilevered net frames on the harbour mouth, worked by teams with stone counterweights exactly as they have been for centuries.",
            "They are a working monument: still fished, still photogenic, and a direct trace of the global trade contacts (Chinese, Arab, Portuguese, Dutch) that made Kochi. The waterfront around them, with its catch stalls and colonial backdrop, is the heart of the heritage quarter.",
            "MyTripMyTravel folds them into the escorted Fort Kochi walk, timed for the sunset operation when the silhouettes are at their best.",
        ],
        quickFacts: [
            { label: "City", value: "Fort Kochi, Kerala" },
            { label: "Introduced", value: "c. 14th century" },
            { label: "Type", value: "Shore-operated cantilever lift nets" },
            { label: "Where", value: "Fort Kochi harbour-mouth waterfront" },
            { label: "Best light", value: "Sunset" },
            { label: "Ideal time on site", value: "30 to 45 minutes" },
            { label: "Status", value: "Working, still fished daily" },
            { label: "Pairs with", value: "Fort Kochi heritage walk" },
        ],
        highlights: [
            { name: "The net operation", detail: "Teams lowering and raising the cantilevered frames by counterweight." },
            { name: "Sunset silhouettes", detail: "The canonical Fort Kochi photograph at golden hour." },
            { name: "Catch stalls", detail: "The waterfront market where the day's catch is sold and cooked." },
            { name: "Colonial backdrop", detail: "The Portuguese-Dutch streetscape behind the waterfront." },
        ],
        visitorInfo: [
            { label: "Access", value: "Public waterfront; free to view" },
            { label: "Best time", value: "Sunset operation" },
            { label: "Sequence", value: "Part of the Fort Kochi heritage walk" },
            { label: "Tip", value: "Operators may request a tip for a close demo" },
        ],
        tips: [
            "Time it for sunset, the silhouettes are the whole point.",
            "Pair with the catch stalls for a fresh seafood dinner nearby.",
            "Our escort manages the informal demo-tip expectations.",
        ],
        faqs: [
            { q: "What are the Chinese fishing nets?", a: "Large shore-operated cantilever lift nets in Fort Kochi, introduced via medieval Chinese trade contacts and still worked by hand today." },
            { q: "When is the best time to see them?", a: "At sunset, when the cantilevered frames silhouette against the harbour, the iconic Kochi image." },
            { q: "Are they still used?", a: "Yes, they remain a working fishery, not a static monument." },
            { q: "How long to spend there?", a: "30 to 45 minutes, ideally as the sunset segment of the Fort Kochi walk." },
        ],
    },
    {
        slug: "mattancherry-palace",
        citySlug: "kochi",
        name: "Mattancherry Palace",
        type: "Palace",
        era: "Portuguese-built c. 1555, Dutch-renovated",
        tagline: "The Dutch Palace & Its Murals",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Chinese_fishing_nets_Kochi.jpg",
        answer:
            "Mattancherry Palace, also called the Dutch Palace, is a 16th-century palace in Kochi, Kerala, India, built around 1555 by the Portuguese as a gift to the Raja of Kochi and later renovated by the Dutch. It is renowned for some of the finest and best-preserved Hindu mural cycles in India, depicting scenes from the Ramayana and Puranas, alongside royal portraits and palanquins. It sits in the Jew Town quarter near the Paradesi Synagogue. MyTripMyTravel includes it on the escorted Fort Kochi heritage day.",
        intro: [
            "Mattancherry Palace is modest outside and extraordinary inside. The exterior is a plain Kerala-style structure; the interior holds one of the greatest surviving mural traditions in India.",
            "The bedchamber and adjoining rooms carry dense Ramayana and Puranic cycles in the distinctive Kerala palette, plus Kochi royal portraits and regalia. It anchors the Jew Town quarter alongside the Paradesi Synagogue and the antique-and-spice lanes.",
            "MyTripMyTravel sequences it into the Fort Kochi heritage day with an expert guide, since the murals are unreadable without one.",
        ],
        quickFacts: [
            { label: "City", value: "Mattancherry, Kochi, Kerala" },
            { label: "Built", value: "c. 1555 (Portuguese), Dutch-renovated" },
            { label: "Famous for", value: "Kerala mural cycles (Ramayana)" },
            { label: "Quarter", value: "Jew Town" },
            { label: "Closed", value: "Fridays" },
            { label: "Ideal time on site", value: "45 to 60 minutes" },
            { label: "Pairs with", value: "Paradesi Synagogue, spice lanes" },
            { label: "Photography", value: "Not permitted inside" },
        ],
        highlights: [
            { name: "The mural cycles", detail: "Among India's finest Hindu murals, Ramayana and Puranic scenes." },
            { name: "Royal portrait gallery", detail: "Portraits and regalia of the Kochi royal line." },
            { name: "Palanquins & arms", detail: "Ceremonial conveyances and weaponry of the court." },
            { name: "Jew Town setting", detail: "The historic synagogue-and-antiques quarter around it." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Daytime; closed Fridays" },
            { label: "Entry", value: "Ticketed, we pre-purchase and escort" },
            { label: "Photography", value: "Not permitted in the mural rooms" },
            { label: "Pair with", value: "Paradesi Synagogue nearby" },
        ],
        tips: [
            "Plan around the Friday closure, our planners handle it.",
            "Use a guide; the mural iconography is invisible otherwise.",
            "Combine with the synagogue and antique lanes in one loop.",
        ],
        faqs: [
            { q: "Why is Mattancherry Palace called the Dutch Palace?", a: "The Portuguese built it around 1555; the Dutch later renovated it, and the latter name stuck." },
            { q: "What is it famous for?", a: "Some of the finest, best-preserved Hindu mural cycles in India, depicting the Ramayana and Puranas." },
            { q: "Is it closed any day?", a: "Yes, Fridays. Our itineraries are built around this." },
            { q: "Can I photograph the murals?", a: "No, interior photography is prohibited to protect the murals." },
        ],
    },

    // ---- Shimla ----
    {
        slug: "viceregal-lodge",
        citySlug: "shimla",
        name: "Viceregal Lodge",
        type: "Palace",
        era: "British Raj · completed 1888",
        tagline: "The Seat of Summer Empire",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Shimla_cityscape.jpg",
        answer:
            "The Viceregal Lodge (Rashtrapati Niwas) in Shimla, India, completed in 1888 on Observatory Hill, was the residence of the British Viceroy of India during the summer capital era. Built in Jacobethan style with a famous teak-panelled interior, it hosted decisions that shaped the subcontinent, including discussions leading to Partition. It now houses the Indian Institute of Advanced Study, with guided access to parts of the building and grounds. MyTripMyTravel includes it on the escorted Shimla colonial-heritage day.",
        intro: [
            "The Viceregal Lodge is the single most consequential building in Shimla, the place from which the British governed India for half of every year, and where some of the decisions that shaped modern South Asia were taken.",
            "The Jacobethan exterior, the manicured grounds, and the teak-panelled interior preserve the imperial summer-capital register more completely than anywhere else in the hill station. It now serves a scholarly institute, with guided visitor access to designated areas.",
            "MyTripMyTravel sequences it into the Shimla heritage day with the Ridge and Christ Church, with an expert guide for the political history.",
        ],
        quickFacts: [
            { label: "City", value: "Shimla, Himachal Pradesh" },
            { label: "Completed", value: "1888 (British Raj)" },
            { label: "Role", value: "Viceroy's summer residence" },
            { label: "Now", value: "Indian Institute of Advanced Study" },
            { label: "Style", value: "Jacobethan; teak interior" },
            { label: "Closed", value: "Typically Mondays" },
            { label: "Ideal time on site", value: "1 to 1.5 hours" },
            { label: "Pairs with", value: "The Ridge, Christ Church" },
        ],
        highlights: [
            { name: "The Jacobethan façade", detail: "The grey-stone imperial exterior on Observatory Hill." },
            { name: "Teak-panelled interior", detail: "The guided rooms preserving the Raj-era woodwork." },
            { name: "The grounds", detail: "Manicured lawns and rose gardens with valley views." },
            { name: "History rooms", detail: "Where late-Raj and Partition-era discussions took place." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Daytime; typically closed Mondays" },
            { label: "Entry", value: "Ticketed guided access to designated areas" },
            { label: "Sequence", value: "Part of the Shimla colonial-heritage day" },
            { label: "Note", value: "Working institute, interior access is limited" },
        ],
        tips: [
            "Confirm the weekly closure day, our planners handle it.",
            "The guided interior slot is limited; we pre-arrange timing.",
            "Pair with the Ridge and Christ Church for a full Raj morning.",
        ],
        faqs: [
            { q: "What was the Viceregal Lodge?", a: "The summer residence of the British Viceroy of India, completed in 1888, central to late-Raj governance and Partition-era talks." },
            { q: "Can you go inside?", a: "Yes, guided access to designated areas; it is now a working scholarly institute, so interior access is limited." },
            { q: "Is it closed any day?", a: "Typically Mondays; we confirm and build itineraries around it." },
            { q: "How long does it take?", a: "About 1 to 1.5 hours including the guided rooms and the grounds." },
        ],
    },

    // ---- Gangtok ----
    {
        slug: "rumtek-monastery",
        citySlug: "gangtok",
        name: "Rumtek Monastery",
        type: "Temple",
        era: "Present structure · 1960s",
        tagline: "The Seat of the Karmapa",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tsomgo_Lake%2C_Sikkim.jpg",
        answer:
            "Rumtek Monastery, near Gangtok in Sikkim, India, is the largest monastery in the state and the principal seat in exile of the Karmapa, head of the Karma Kagyu school of Tibetan Buddhism. The present complex, completed in the 1960s, is modelled on the original Tsurphu monastery in Tibet and houses rare relics, golden stupas, and the Karma Shri Nalanda Institute. It sits across a valley from Gangtok. MyTripMyTravel includes it on the escorted Gangtok monastery route.",
        intro: [
            "Rumtek is the spiritual centre of Sikkim, the exile seat of the Karmapa and the most important Karma Kagyu institution outside Tibet, built to mirror the lost Tsurphu monastery.",
            "The main shrine hall, the golden reliquary stupa, the monks' debating courtyard, and the Nalanda Institute give it a working, living gravity quite different from a museum monastery. The valley-facing approach is part of the experience.",
            "MyTripMyTravel sequences Rumtek into the Gangtok day with an expert guide for the Kagyu lineage context and, where the calendar allows, prayer or Cham observance.",
        ],
        quickFacts: [
            { label: "Near", value: "Gangtok, Sikkim (≈ 24 km)" },
            { label: "Seat of", value: "The Karmapa (Karma Kagyu)" },
            { label: "Built", value: "Present complex 1960s" },
            { label: "Modelled on", value: "Tsurphu Monastery, Tibet" },
            { label: "Houses", value: "Golden stupa, Nalanda Institute" },
            { label: "Ideal time on site", value: "1 to 1.5 hours" },
            { label: "Conduct", value: "Active monastery, respectful, escorted" },
            { label: "Pairs with", value: "Enchey Monastery, Gangtok ridge" },
        ],
        highlights: [
            { name: "The main shrine hall", detail: "The richly painted assembly hall with the central Buddha." },
            { name: "Golden reliquary stupa", detail: "The gold-and-jewel stupa of the 16th Karmapa." },
            { name: "Debating courtyard", detail: "The monks' philosophical debate ground." },
            { name: "Karma Shri Nalanda Institute", detail: "The monastic university of Buddhist studies." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Daytime; subject to ceremony schedule" },
            { label: "Entry", value: "Ticketed; security check at gate" },
            { label: "Conduct", value: "Active monastery, modest dress, silence in halls" },
            { label: "Pair with", value: "Enchey Monastery the same day" },
        ],
        tips: [
            "Check the ceremony calendar, prayer or Cham observance is worth timing.",
            "Carry ID; there is a security check at the gate.",
            "Pair with Enchey for a two-monastery Gangtok morning.",
        ],
        faqs: [
            { q: "Why is Rumtek important?", a: "It is the largest monastery in Sikkim and the principal exile seat of the Karmapa, head of the Karma Kagyu school of Tibetan Buddhism." },
            { q: "Can visitors enter the shrine hall?", a: "Yes, respectfully and with a security check; it is an active monastery, so conduct and dress matter. We escort the visit." },
            { q: "How far is Rumtek from Gangtok?", a: "About 24 km, a short chauffeured leg, sequenced into the Gangtok monastery day." },
            { q: "How long does it take?", a: "About 1 to 1.5 hours with a guide for the hall, stupa, and institute." },
        ],
    },
    // ---- Additional Agra ----
    {
        slug: "itimad-ud-daulah",
        citySlug: "agra",
        name: "Itimad-ud-Daulah",
        type: "Tomb",
        era: "Mughal · 1622 to 1628",
        tagline: "The 'Baby Taj', Mughal architecture's marble pivot",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Itmad-Ud-Daulah_Tomb.jpg",
        answer: "Itimad-ud-Daulah (often called the 'Baby Taj') is an early-17th-century mausoleum on the east bank of the Yamuna river in Agra, India, commissioned by Nur Jahan, queen of Jahangir, for her father Mirza Ghiyas Beg between 1622-1628. It is considered the architectural pivot between the red-sandstone style of Akbar and the marble of the Taj Mahal, the first Mughal building to use pietra dura inlay on a large scale. MyTripMyTravel pairs it with the Mehtab Bagh on the same east-bank circuit for a quieter alternative to the Taj-day crowds.",
        intro: [
            "Itimad-ud-Daulah is the building the Taj copied. Twenty-five years before Shah Jahan began the Taj, his stepmother Nur Jahan built this smaller, jewel-like mausoleum for her father, the first Mughal building to abandon red sandstone for white marble, and the first to use full pietra dura semi-precious stone inlay across its surfaces.",
            "It sits on the quieter east bank of the Yamuna, across the river from Agra's main city, and is overlooked by most Taj-day visitors. That is precisely its appeal, the Taj's design experiment, at a manageable scale, with no crowds.",
            "MyTripMyTravel includes it in the Mehtab Bagh sunset circuit on the east bank, a calmer counter-day to the Taj sunrise.",
        ],
        quickFacts: [
            { label: "City", value: "Agra, Uttar Pradesh (east bank)" },
            { label: "Built", value: "1622-1628" },
            { label: "Patron", value: "Nur Jahan (for Mirza Ghiyas Beg)" },
            { label: "Significance", value: "First Mughal marble + pietra dura building" },
            { label: "Pairs with", value: "Mehtab Bagh + Taj rear elevation" },
            { label: "Open", value: "Sunrise to sunset, daily" },
            { label: "Ideal time on site", value: "45-60 minutes" },
        ],
        highlights: [
            { name: "Marble + pietra dura facade", detail: "The first large-scale Mughal use of inlaid semi-precious stone, the precedent for the Taj." },
            { name: "Charbagh garden", detail: "Four-part Mughal paradise garden, smaller-scale version of the Taj's." },
            { name: "Octagonal tomb chamber", detail: "Intricately painted interior with the original cenotaphs." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Sunrise to sunset, daily" },
            { label: "Entry", value: "Standard ASI ticket; we pre-purchase" },
            { label: "Crowds", value: "Significantly lower than the Taj" },
        ],
        tips: [
            "Visit late afternoon en route to Mehtab Bagh for the Taj sunset elevation.",
            "Photography is permitted; the pietra dura close-ups are the reward.",
        ],
        faqs: [
            { q: "Why is it called the 'Baby Taj'?", a: "For its similar marble-and-pietra-dura aesthetic at a smaller scale, and because it pre-dates the Taj Mahal by 25 years, the Taj is, in important ways, an evolution of this building." },
            { q: "Is it worth visiting?", a: "For travellers interested in Mughal architecture's development, decisively. For a single-day Taj sprint, it is an optional secondary stop." },
            { q: "How long do I need?", a: "45 minutes to an hour for an unhurried visit including the garden." },
        ],
    },
    // ---- Delhi ----
    {
        slug: "india-gate",
        citySlug: "delhi",
        name: "India Gate",
        type: "Monument",
        era: "British India · 1921-1931",
        tagline: "The All-India War Memorial",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/9/9f/India_Gate_in_New_Delhi_03-2016.jpg",
        answer: "India Gate is a 42-metre triumphal arch in central New Delhi, India, designed by Sir Edwin Lutyens and built between 1921 and 1931 as the All-India War Memorial. The arch is inscribed with the names of 13,300 Indian and British soldiers killed in the First World War and the Third Anglo-Afghan War. The Amar Jawan Jyoti (Eternal Soldier Flame) was added in 1972 for unknown soldiers of the 1971 Indo-Pakistan war; in 2022 the flame was merged with the National War Memorial nearby. MyTripMyTravel includes India Gate on the Lutyens' Delhi heritage walk.",
        intro: [
            "India Gate sits at the eastern end of the Rajpath axis Lutyens designed for British New Delhi, the ceremonial heart of the new capital. The arch was unveiled in 1931 by Lord Irwin to commemorate the Indian war dead of the First World War.",
            "The inscription names 13,300 soldiers including British officers of the Indian Army; the design echoes the Arc de Triomphe at half-size with Indo-Saracenic restraint. The lawns around it have become a public park of substantial cultural meaning, Delhi's families gather here in the evenings.",
            "MyTripMyTravel includes India Gate on the Lutyens' Delhi heritage walk, the imperial axis from Rashtrapati Bhavan (the President's residence) through Vijay Chowk and the Secretariat buildings to India Gate and the modern National War Memorial beyond.",
        ],
        quickFacts: [
            { label: "City", value: "New Delhi" },
            { label: "Built", value: "1921-1931" },
            { label: "Architect", value: "Sir Edwin Lutyens" },
            { label: "Height", value: "42 m" },
            { label: "Inscribed", value: "13,300 soldier names" },
            { label: "Best time", value: "Sunset / early evening" },
            { label: "Ideal time on site", value: "30-45 minutes" },
        ],
        highlights: [
            { name: "The arch and inscriptions", detail: "The 42-metre triumphal arch with the 13,300 soldier names inscribed on its surface." },
            { name: "Amar Jawan Jyoti location", detail: "The eternal flame's original location (merged with National War Memorial in 2022)." },
            { name: "Rajpath axis", detail: "The 3 km ceremonial avenue from India Gate to Rashtrapati Bhavan, the imperial spine." },
            { name: "National War Memorial", detail: "The modern 2019 memorial behind India Gate, 25,000+ post-independence soldier names." },
        ],
        visitorInfo: [
            { label: "Opening", value: "24/7 (lit at night)" },
            { label: "Entry", value: "Free" },
            { label: "Best season", value: "October-March" },
        ],
        tips: [
            "Visit at sunset for the lit-arch experience; evening crowds peak after 7 pm.",
            "Pair with the National War Memorial (5 min walk) and Rashtrapati Bhavan circuit.",
        ],
        faqs: [
            { q: "What does India Gate commemorate?", a: "The All-India War Memorial commemorates the 13,300 Indian and British soldiers killed in the First World War and the Third Anglo-Afghan War. It was inaugurated in 1931 by Lord Irwin." },
            { q: "Where is the Amar Jawan Jyoti now?", a: "The eternal flame for unknown soldiers (added 1972 for 1971 war dead) was merged in 2022 with the National War Memorial flame, a short walk away. India Gate itself remains a memorial site." },
            { q: "Is it worth visiting at night?", a: "Yes, the arch is illuminated and the lawns become a public gathering space." },
        ],
    },
    {
        slug: "jama-masjid-delhi",
        citySlug: "delhi",
        name: "Jama Masjid",
        type: "Temple",
        era: "Mughal · 1644-1656",
        tagline: "Shah Jahan's congregational mosque, India's largest",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Jama_Masjid%2C_Delhi.jpg",
        answer: "Jama Masjid (formally Masjid-i Jehan-Numa) is the principal congregational mosque of Old Delhi, India, commissioned by the Mughal emperor Shah Jahan and completed in 1656. It is one of the largest mosques in India, capable of holding 25,000 worshippers in its courtyard. Built of red sandstone and white marble across from the Red Fort, it is approached by three monumental gates. MyTripMyTravel visits Jama Masjid as part of the Old Delhi heritage circuit, with respectful escorted access outside prayer hours.",
        intro: [
            "Jama Masjid is the Mughal capital project that pairs with the Red Fort across the street, Shah Jahan's twin construction marking Delhi (Shahjahanabad) as his new imperial centre. The mosque was completed in 1656 by 5,000 workers at a cost of 1 million rupees.",
            "The red-sandstone-and-marble courtyard holds 25,000 worshippers, the scale only registers from inside. The minarets (40 m each) are climbable (for a small fee) and give Delhi's best older-quarter rooftop view; the prayer hall holds three marble domes and the original mihrab.",
            "MyTripMyTravel sequences Jama Masjid with the Red Fort and Chandni Chowk on the Old Delhi heritage day, chauffeured arrival, modest dress (we provide scarves), respect for prayer times.",
        ],
        quickFacts: [
            { label: "City", value: "Old Delhi" },
            { label: "Built", value: "1644-1656" },
            { label: "Patron", value: "Shah Jahan" },
            { label: "Capacity", value: "25,000 worshippers" },
            { label: "Material", value: "Red sandstone, white marble" },
            { label: "Pairs with", value: "Red Fort, Chandni Chowk" },
            { label: "Ideal time on site", value: "45-60 minutes" },
            { label: "Closed", value: "During the 5 daily prayer times" },
        ],
        highlights: [
            { name: "The courtyard", detail: "Capable of 25,000 worshippers, the scale defines the visit." },
            { name: "Minaret climb", detail: "40 m minarets give Delhi's best Old City rooftop view." },
            { name: "Prayer hall", detail: "Three marble domes; the original mihrab; relics of the Prophet preserved in the small chamber." },
            { name: "Gates", detail: "Three monumental gates approached by long staircases, the southern gate is the principal entrance." },
        ],
        visitorInfo: [
            { label: "Opening", value: "7 am to 12 pm; 1.30 pm to 6.30 pm; closed during prayer" },
            { label: "Dress code", value: "Modest dress, heads covered (we provide scarves)" },
            { label: "Photography", value: "Permitted with camera fee" },
        ],
        tips: [
            "Avoid Fridays around midday prayer, the mosque is full.",
            "Climb the southern minaret for the older-quarter rooftop view.",
            "Visit before the mosque's late-morning closure or after 1.30 pm.",
        ],
        faqs: [
            { q: "Can non-Muslims visit Jama Masjid?", a: "Yes, outside prayer times. We escort guests with appropriate dress and brief the protocol before entry." },
            { q: "What is the dress code?", a: "Modest dress; shoulders and knees covered; heads covered (we provide scarves). Shoes removed at entry." },
            { q: "Is the minaret climb worth it?", a: "Yes for the rooftop view of Old Delhi, small fee, narrow staircase, a few minutes climb." },
            { q: "How does it pair with the Red Fort?", a: "They were built as a single Mughal capital complex by Shah Jahan and sit across the street. The standard Old Delhi heritage day covers both plus Chandni Chowk." },
        ],
    },
    {
        slug: "lotus-temple",
        citySlug: "delhi",
        name: "Lotus Temple",
        type: "Temple",
        era: "Modern · 1986",
        tagline: "The Bahá'í House of Worship, 27 marble petals",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/6/63/Lotus_Temple_-_Delhi.jpg",
        answer: "The Lotus Temple is a Bahá'í House of Worship in south Delhi, India, designed by Iranian-Canadian architect Fariborz Sahba and completed in 1986. Built in the form of a 27-petal lotus flower clad in Greek marble, it is one of seven Bahá'í Houses of Worship globally and is open to people of all religions for silent prayer. Surrounded by 26 acres of gardens and reflecting pools, it draws roughly 4 million visitors annually. MyTripMyTravel includes it on the modern-Delhi circuit, often paired with the Akshardham temple complex.",
        intro: [
            "The Lotus Temple is among the most-photographed pieces of modern architecture in India, Fariborz Sahba's 1986 design of nine reflecting pools around a 27-petal marble lotus, clad in Pentelic marble from the same Greek quarry that supplied the Parthenon.",
            "It is one of seven Bahá'í Houses of Worship globally, buildings open to all faiths for silent prayer, with no clergy, no sermons, and no ritual. The interior is a single 40-metre-tall hall under the marble lotus with no ornamentation. Visitors sit in silence; the only sound is the readings of sacred texts from various religions.",
            "Around the temple, 26 acres of gardens and reflecting pools complete the composition. The annual visitor count is around 4 million.",
            "MyTripMyTravel includes the Lotus Temple on the modern-Delhi circuit, often paired with the Akshardham temple complex 12 km away for two architecturally extraordinary modern religious buildings in a single day.",
        ],
        quickFacts: [
            { label: "City", value: "New Delhi (south)" },
            { label: "Built", value: "1976-1986" },
            { label: "Architect", value: "Fariborz Sahba" },
            { label: "Religion", value: "Bahá'í (open to all)" },
            { label: "Petals", value: "27 marble petals in 3 rings of 9" },
            { label: "Capacity", value: "2,500 seated" },
            { label: "Pairs with", value: "Akshardham, Humayun's Tomb" },
            { label: "Ideal time on site", value: "1 hour" },
        ],
        highlights: [
            { name: "The 27-petal lotus", detail: "Greek Pentelic marble in 27 petals arranged in 3 rings of 9, the principal sacred number in the Bahá'í tradition." },
            { name: "The central hall", detail: "40 m tall, unadorned, holds 2,500 in silence." },
            { name: "Nine reflecting pools", detail: "The lotus 'floats' on water, the surrounding pools double the architectural impact." },
            { name: "26-acre gardens", detail: "Quiet garden circuit for contemplation around the temple." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Tuesday-Sunday 9 am-5.30 pm (October-March); 9 am-7 pm (April-September); closed Monday" },
            { label: "Entry", value: "Free" },
            { label: "Photography", value: "Outside only, not inside the hall" },
        ],
        tips: [
            "Visit Tuesday-Friday for lower crowds; weekends are very busy.",
            "Silence inside the hall is strictly observed, phones off.",
            "Pair with Akshardham (12 km) for two modern temples in one day.",
        ],
        faqs: [
            { q: "What is the Bahá'í faith?", a: "A 19th-century religion founded by Bahá'u'lláh in Persia, teaching the unity of God, religion, and humanity. Bahá'í Houses of Worship are open to all faiths and have no clergy or ritual." },
            { q: "Why does it look like a lotus?", a: "The lotus is sacred in multiple Indian religious traditions (Hindu, Buddhist, Jain) and was chosen by the architect to make the building feel rooted in India's spiritual heritage." },
            { q: "Can I pray inside?", a: "Yes, silent prayer or meditation, open to people of all religions. There is no required ritual." },
            { q: "When is it closed?", a: "Mondays." },
        ],
    },
    // ---- Jaipur ----
    {
        slug: "city-palace-jaipur",
        citySlug: "jaipur",
        name: "City Palace, Jaipur",
        type: "Palace",
        era: "Rajput · 1729-1732",
        tagline: "The royal residence at the heart of the Pink City",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/c/c5/City_Palace_Jaipur.jpg",
        answer: "The City Palace of Jaipur is a sprawling royal complex in the centre of Jaipur, India, built between 1729-1732 by Maharaja Sawai Jai Singh II as the principal residence of the royal family of Amber when he founded the new walled city of Jaipur. It is still the residence of the Jaipur royal family, with sections opened to the public. The complex includes the Chandra Mahal (the seven-storey palace where the royal family lives), the Mubarak Mahal (now a textile museum), the Diwan-i-Khas (private audience hall), and four ornate gates representing the seasons. MyTripMyTravel arranges escorted visits with optional royal-resident access by prior arrangement.",
        intro: [
            "The City Palace of Jaipur sits at the heart of the Pink City, the symbolic and physical centre of Sawai Jai Singh II's 1727 founding of Jaipur as the new Rajput capital after Amber. Jai Singh commissioned the palace and the surrounding city simultaneously, with the architect Vidyadhar Bhattacharya designing both to a Vastu Shastra grid.",
            "It is a layered complex of courtyards, halls, gates, and residential blocks built across 200 years. The Chandra Mahal, the seven-storey central palace, is still the residence of the Jaipur royal family; the top floor offers public access by special tour. Around it, the Mubarak Mahal (now a textile museum), the Diwan-i-Khas (private audience hall with the world's two largest silver vessels), and four ornate Pritam Niwas Chowk gates (representing the four seasons) form the principal visitor circuit.",
            "MyTripMyTravel includes the City Palace on the standard Jaipur heritage day. For travellers interested in the royal-residence access, we arrange the additional tour with advance notice.",
        ],
        quickFacts: [
            { label: "City", value: "Jaipur, Rajasthan" },
            { label: "Built", value: "1729-1732 (initial), expanded over 200 years" },
            { label: "Patron", value: "Maharaja Sawai Jai Singh II" },
            { label: "Architect", value: "Vidyadhar Bhattacharya" },
            { label: "Status", value: "Royal residence + museum" },
            { label: "Pairs with", value: "Hawa Mahal, Jantar Mantar (same circuit)" },
            { label: "Ideal time on site", value: "2 hours" },
            { label: "Open", value: "Daily, 9.30 am-5 pm" },
        ],
        highlights: [
            { name: "Pritam Niwas Chowk", detail: "Four ornate gates representing the seasons, peacock (autumn), lotus (summer), green (spring), rose (winter)." },
            { name: "Diwan-i-Khas", detail: "Private audience hall with the world's two largest silver vessels (Guinness-recorded), made for Maharaja Sawai Madho Singh II's 1902 London journey to carry Ganga water." },
            { name: "Chandra Mahal", detail: "The seven-storey central palace, still the royal residence." },
            { name: "Mubarak Mahal", detail: "1900-built guest house, now the royal textile museum." },
            { name: "Sabha Niwas (Diwan-i-Aam)", detail: "Public audience hall with elaborate ceiling and Mughal-inspired decoration." },
        ],
        visitorInfo: [
            { label: "Opening", value: "9.30 am-5 pm daily" },
            { label: "Entry", value: "Standard + Royal Splendour (Chandra Mahal) tickets" },
            { label: "Photography", value: "Permitted" },
        ],
        tips: [
            "Combine with Hawa Mahal and Jantar Mantar, all within walking distance.",
            "The Royal Splendour ticket includes Chandra Mahal access, worthwhile for serious heritage travellers.",
            "Visit early to avoid crowds at Pritam Niwas Chowk.",
        ],
        faqs: [
            { q: "Is the royal family still in residence?", a: "Yes, the Chandra Mahal in the centre of the complex is still the residence of the Jaipur royal family. Most of the complex is open to the public; the inner residence requires the special Royal Splendour tour." },
            { q: "Why is Jaipur called the Pink City?", a: "Maharaja Sawai Ram Singh II had the entire walled city painted terracotta pink in 1876 to welcome the Prince of Wales (later Edward VII). The colour has been retained by law since." },
            { q: "How does it pair with Amber Fort?", a: "Amber was the royal residence before Jaipur was founded in 1727. The royals moved to the new City Palace in Jaipur but retained Amber as a fortified residence. Standard Jaipur day covers both." },
        ],
    },
    // ---- Udaipur ----
    {
        slug: "lake-pichola",
        citySlug: "udaipur",
        name: "Lake Pichola",
        type: "Monument",
        era: "Rajput · 1362 (lake), 1746 (Lake Palace)",
        tagline: "The mirror lake of the City of Lakes",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Udaipur_lake.jpg",
        answer: "Lake Pichola is an artificial freshwater lake in Udaipur, India, created in 1362 by a Banjara gypsy tribe and later enlarged by Maharana Udai Singh II in 1568. Four islands sit in the lake: Jag Niwas (the 1746 Lake Palace, now a hotel), Jag Mandir (the 17th-century pleasure palace), Mohan Mandir, and Arsi Vilas. The City Palace of Udaipur runs along the eastern shore. The Pichola sunset boat ride is the canonical Udaipur experience. MyTripMyTravel arranges private boat charters with escorted island access.",
        intro: [
            "Lake Pichola is the centerpiece of Udaipur, a 4-square-kilometre artificial lake created in 1362 and enlarged by Maharana Udai Singh II in 1568 when he founded Udaipur as a defensible new capital after the sack of Chittor.",
            "Four islands sit in the lake. Jag Niwas, the 1746 Lake Palace built by Maharana Jagat Singh II, is now the Taj Lake Palace hotel, the floating-marble image that defines Udaipur in international photography. Jag Mandir, the 17th-century pleasure palace, sheltered the Mughal prince Khurram (later Shah Jahan) during a revolt against his father.",
            "The City Palace of Udaipur runs 250 m along the eastern shore. The sunset boat ride, from the Bagore-ki-Haveli ghat, around Jag Niwas, with the City Palace lit on the eastern bank, is the canonical Udaipur experience.",
            "MyTripMyTravel arranges private boat charters at sunset with optional Jag Mandir landing (Jag Niwas/Lake Palace is hotel-guest-only). The City Palace circuit and the Bagore-ki-Haveli evening folk performance round out the lake-side day.",
        ],
        quickFacts: [
            { label: "City", value: "Udaipur, Rajasthan" },
            { label: "Created", value: "1362 (initial); enlarged 1568" },
            { label: "Patron", value: "Maharana Udai Singh II (enlargement)" },
            { label: "Area", value: "≈ 4 sq km" },
            { label: "Islands", value: "Jag Niwas (Lake Palace), Jag Mandir, Mohan Mandir, Arsi Vilas" },
            { label: "Signature", value: "Sunset boat ride" },
            { label: "Pairs with", value: "City Palace Udaipur, Jagdish Temple" },
            { label: "Ideal time on water", value: "1 hour" },
        ],
        highlights: [
            { name: "Sunset boat ride", detail: "The signature Udaipur experience, from the Bagore-ki-Haveli ghat at golden hour, around Jag Niwas with the City Palace lit on the eastern bank." },
            { name: "Jag Mandir landing", detail: "Optional landing at the 17th-century pleasure palace where Shah Jahan once sheltered." },
            { name: "City Palace shoreline", detail: "250 m of eastern-bank palace architecture viewed from the water, the canonical Udaipur image." },
            { name: "Bagore-ki-Haveli", detail: "18th-century mansion at the western ghat, now a heritage museum with evening folk performances." },
        ],
        visitorInfo: [
            { label: "Boat operation", value: "Sunrise to sunset; sunset ride is the marquee" },
            { label: "Access", value: "Public boat ride or private charter (we arrange)" },
            { label: "Jag Niwas (Lake Palace)", value: "Closed to non-hotel guests" },
        ],
        tips: [
            "Book the sunset boat for the best light; private charter for a slower pace.",
            "Lake levels drop in late summer, confirm before booking late in the dry season.",
            "Combine with the Bagore-ki-Haveli folk performance at 7 pm.",
        ],
        faqs: [
            { q: "Can I visit the Lake Palace (Jag Niwas)?", a: "Only as a hotel guest. The Taj Lake Palace is a working luxury hotel, not a public monument." },
            { q: "Is Lake Pichola natural?", a: "No, it was created in 1362 by damming a tributary and substantially enlarged in 1568 by Maharana Udai Singh II as part of the founding of Udaipur." },
            { q: "When is the sunset boat ride?", a: "The principal ride leaves about an hour before sunset; we time the booking for golden hour." },
            { q: "How does Lake Pichola pair with the City Palace?", a: "The City Palace runs 250 m along the eastern shore; viewing it from the water is the signature visual. The standard Udaipur day is City Palace in the afternoon, sunset boat, evening folk performance." },
        ],
    },
    // ---- Jodhpur ----
    {
        slug: "umaid-bhawan-palace",
        citySlug: "jodhpur",
        name: "Umaid Bhawan Palace",
        type: "Palace",
        era: "Princely India · 1929-1943",
        tagline: "The last great palace of the Indian princely era",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Umaid_Bhawan_Palace.jpg",
        answer: "Umaid Bhawan Palace is a 1929-1943 palace on the highest point of Jodhpur, India, commissioned by Maharaja Umaid Singh and designed by Edwardian architect Henry Vaughan Lanchester in the Indo-Saracenic style. With 347 rooms across 26 acres, it is one of the largest private residences in the world. The palace is now divided into three parts: the royal residence (still occupied by the Jodhpur royal family), a Taj-managed luxury hotel, and a museum. Commissioned during the Great Depression as a famine-relief employment scheme, its construction employed 3,000 workers for 14 years. MyTripMyTravel includes the museum on the Jodhpur heritage day; arranges hotel stays for travellers wanting to stay in the palace.",
        intro: [
            "Umaid Bhawan Palace is the largest private royal residence built anywhere in the 20th century, and the last great palace of the Indian princely era. Maharaja Umaid Singh commissioned it in 1929 partly to honour the centenary of Jodhpur's relations with the British Crown and partly, more practically, as a famine-relief employment scheme during a regional drought.",
            "Henry Vaughan Lanchester designed it in the Indo-Saracenic style, the same architect who designed the Council House in London. Construction took 14 years (1929-1943), employed 3,000 workers, and produced a palace of 347 rooms across 26 acres, crowned by a 33-metre dome. The hill it sits on (Chittar Hill) was selected partly for the views across Mehrangarh Fort to the Blue City.",
            "Today the palace is divided into three. The Jodhpur royal family, Maharaja Gaj Singh II, still occupies a residential wing. The Taj group runs a luxury hotel in another wing (regularly listed among the world's best). A museum covers the third, the construction story, the royal collection, and the magnificent original drawing rooms.",
            "MyTripMyTravel includes the museum on the Jodhpur heritage day; for travellers wanting the staying-in-a-palace experience, the Taj Umaid Bhawan is among our top luxury recommendations in Rajasthan.",
        ],
        quickFacts: [
            { label: "City", value: "Jodhpur, Rajasthan" },
            { label: "Built", value: "1929-1943" },
            { label: "Patron", value: "Maharaja Umaid Singh" },
            { label: "Architect", value: "Henry Vaughan Lanchester" },
            { label: "Rooms", value: "347" },
            { label: "Area", value: "26 acres" },
            { label: "Status", value: "Royal residence + Taj hotel + museum" },
            { label: "Pairs with", value: "Mehrangarh Fort, Jaswant Thada" },
            { label: "Ideal time on site", value: "1.5 hours (museum); overnight (hotel)" },
        ],
        highlights: [
            { name: "33-metre central dome", detail: "The architectural centerpiece, Indo-Saracenic with a Beaux-Arts dome." },
            { name: "Royal collection", detail: "Vintage cars (the Maharaja's Rolls-Royces, Cadillacs, Buicks), the royal clocks, and Art Deco interiors." },
            { name: "Original Art Deco drawing rooms", detail: "Stephen Norblin frescoes; the original Maharaja's bedroom suite." },
            { name: "Taj hotel access", detail: "Hotel guests can stay in the original royal suites, among the world's most-photographed hotel rooms." },
        ],
        visitorInfo: [
            { label: "Museum opening", value: "9 am-5 pm daily" },
            { label: "Hotel access", value: "Guests only beyond the museum sections" },
            { label: "Photography", value: "Permitted in museum; restricted in hotel" },
        ],
        tips: [
            "Sunset views from the palace grounds across to Mehrangarh are extraordinary.",
            "For the staying-here experience, book the Taj 60+ days ahead for peak season.",
            "Museum is enough for a half-day visit; hotel stay deepens the experience.",
        ],
        faqs: [
            { q: "Can I stay at Umaid Bhawan?", a: "Yes, the Taj group operates a luxury hotel in one wing. Among Rajasthan's most-renowned hotels; we book regularly." },
            { q: "Is the royal family still in residence?", a: "Yes, Maharaja Gaj Singh II and his family occupy a residential wing. They are typically present except when travelling." },
            { q: "Why was it built during the Depression?", a: "Partly to honour the Jodhpur-British centenary, but practically as a famine-relief employment scheme during a regional drought, 3,000 workers were employed for 14 years." },
            { q: "How does it compare to Mehrangarh?", a: "Mehrangarh is the medieval Rathore fortress (1459); Umaid Bhawan is the last princely-era palace (1929-1943). Different eras, complementary visits." },
        ],
    },
    // ---- Bikaner ----
    {
        slug: "junagarh-fort",
        citySlug: "bikaner",
        name: "Junagarh Fort",
        type: "Fort",
        era: "Rajput · 1589-1594",
        tagline: "The unconquered fort of Rao Bika's desert capital",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/7/70/Junagarh_Fort.jpg",
        answer: "Junagarh Fort is a 16th-century fort in the centre of Bikaner, India, built between 1589-1594 by Raja Rai Singh, a general in Akbar's army, on the site of an earlier 1478 fort. Uniquely among major Rajasthan forts, it sits on the plains rather than on a hill, its 986-metre wall (5.5 m thick, in places) compensates for the lack of elevation. The fort was never conquered. Its 37 palaces, courtyards, and temples preserve some of the finest stone-carving and miniature painting in Rajasthan. MyTripMyTravel includes Junagarh on the standard Bikaner day with vetted heritage-guide context.",
        intro: [
            "Junagarh Fort is unusual among the great forts of Rajasthan, it sits on flat ground in the middle of Bikaner, not perched on a hill. The 986-metre wall, 5.5 metres thick in places, compensates for the geographic disadvantage. In 400 years it was never conquered.",
            "Raja Rai Singh built it between 1589-1594 on the foundation of an earlier 1478 stone fort. Rai Singh was a senior general in Akbar's army; the fort reflects his Mughal exposure with later additions by his successors continuing through the 18th century.",
            "Inside the wall sit 37 palaces, temples, and pavilions. The Anup Mahal, gold-and-lacquer-worked walls, is among the finest small palatial spaces in Rajasthan. The Phool Mahal (Flower Palace), Karan Mahal, Badal Mahal (with rain-cloud frescoes), and the Ganga Mahal (with miniature paintings of the Bikaner school) round out the principal circuit.",
            "MyTripMyTravel includes Junagarh on the standard Bikaner day with a vetted local heritage guide, Bikaner's painting school and the Anup Mahal's lacquer work specifically deserve scholarly reading, not a generic walk-through.",
        ],
        quickFacts: [
            { label: "City", value: "Bikaner, Rajasthan" },
            { label: "Built", value: "1589-1594 (current fort)" },
            { label: "Patron", value: "Raja Rai Singh" },
            { label: "Status", value: "Never conquered; museum since 1961" },
            { label: "Wall", value: "986 m, 5.5 m thick" },
            { label: "Notable", value: "Anup Mahal, Phool Mahal, Karan Mahal, Bikaner-school miniature paintings" },
            { label: "Ideal time on site", value: "2 hours" },
            { label: "Open", value: "10 am-4.30 pm daily" },
        ],
        highlights: [
            { name: "Anup Mahal", detail: "Gold and lacquer-worked principal hall, among the finest small palatial spaces in Rajasthan." },
            { name: "Phool Mahal (Flower Palace)", detail: "Glass-mosaic and floral-painted interior, the queen's quarters." },
            { name: "Karan Mahal", detail: "Built in 1631 to commemorate a Mughal victory; rich red-and-gold interior." },
            { name: "Bikaner-school miniature paintings", detail: "The fort holds one of the most important collections of the distinctive Bikaner-school miniature tradition." },
            { name: "First World War aircraft", detail: "Curious museum exhibit, a complete WWI biplane gifted to Maharaja Ganga Singh by the British." },
        ],
        visitorInfo: [
            { label: "Opening", value: "10 am-4.30 pm daily" },
            { label: "Entry", value: "Standard ticket; audio-guide available" },
            { label: "Guide", value: "Recommended, the painting and Anup Mahal reward expert context" },
        ],
        tips: [
            "Allow 2 hours minimum for the principal circuit.",
            "Pair with Karni Mata Temple (30 km) and the Camel Research Centre on a full Bikaner day.",
            "Photography permitted with a camera fee.",
        ],
        faqs: [
            { q: "Why is Junagarh on flat ground?", a: "Bikaner sits on the open Thar desert without a hill suitable for the standard Rajasthan fort placement. Raja Rai Singh compensated with a 986-metre wall and a moat, and the fort was never conquered." },
            { q: "How does it compare to Mehrangarh Fort?", a: "Mehrangarh is the marquee Marwar fort, on a hill, monumental in scale. Junagarh is the desert-court counterpart, on flat ground, with arguably finer interior craftsmanship at the smaller scale." },
            { q: "Is the WWI aircraft real?", a: "Yes, a 1920 Sopwith biplane gifted to Maharaja Ganga Singh by the British, displayed inside the fort." },
            { q: "Best time to visit?", a: "October to March for desert weather. Mornings are quieter than afternoons." },
        ],
    },
    // ---- Jaisalmer ----
    {
        slug: "patwon-ki-haveli",
        citySlug: "jaisalmer",
        name: "Patwon Ki Haveli",
        type: "Palace",
        era: "Late Rajput · 1805-1860",
        tagline: "Jaisalmer's five-haveli merchant cluster",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/3/37/Patwon_ki_Haveli_-_Jaisalmer.jpg",
        answer: "Patwon Ki Haveli (literally 'mansion of the brocade-traders') is a cluster of five havelis built between 1805-1860 by Guman Chand Patwa, a Jain merchant of Jaisalmer, India, for his five sons. Carved from local yellow sandstone, the cluster is among the finest examples of Rajasthani haveli architecture and the largest such complex in Jaisalmer. The havelis sit in the heart of Jaisalmer city (separate from the famous Jaisalmer Fort). The first haveli, Kothari's Patwa Haveli, is now a museum. MyTripMyTravel includes Patwon Ki Haveli on the Jaisalmer city heritage walk with a vetted architectural escort.",
        intro: [
            "Patwon Ki Haveli is the most lavish of Jaisalmer's many merchant-house clusters, five havelis built between 1805-1860 by the Patwa family, who grew rich on the brocade and opium trade between Central Asia and the Indian peninsula. Guman Chand Patwa commissioned the cluster for his five sons; each haveli became a separate residence, but the facade reads as a single architectural composition along the street.",
            "Jaisalmer's local yellow sandstone is famously soft when fresh and hardens with exposure, making it perfect for the intricate jali (lattice) screens, balcony brackets, and figurative carving that define the city's vernacular architecture. Patwon Ki Haveli is the most technically accomplished example: every facade is covered, balconies project on multiple levels, and the inner courtyards (where they survive) preserve the original painted decoration.",
            "The first of the five, Kothari's Patwa Haveli, is now a privately operated museum. The remaining four are in various conditions of conservation, with the Archaeological Survey of India maintaining the most heritage-sensitive of them.",
            "MyTripMyTravel includes Patwon Ki Haveli on the Jaisalmer city heritage walk (separate from the Jaisalmer Fort day), with a vetted local architectural escort who can read the carving registers, identify the trade routes the family operated on, and contextualise the late-Rajput merchant economy.",
        ],
        quickFacts: [
            { label: "City", value: "Jaisalmer, Rajasthan" },
            { label: "Built", value: "1805-1860" },
            { label: "Patron", value: "Guman Chand Patwa (for his 5 sons)" },
            { label: "Material", value: "Jaisalmer yellow sandstone" },
            { label: "Status", value: "Museum (1st haveli); ASI-maintained others" },
            { label: "Pairs with", value: "Jaisalmer Fort, Salim Singh Haveli" },
            { label: "Ideal time on site", value: "1 hour" },
        ],
        highlights: [
            { name: "Multi-storey facade", detail: "Five haveli facades read as a single composition along the street, the most photographed haveli view in Jaisalmer." },
            { name: "Jali (lattice) screens", detail: "Intricate stone-lattice screens at every window, the marriage of climate control and decoration." },
            { name: "Balcony brackets", detail: "Heavily carved bracket figures and floral motifs, the local craft at its peak." },
            { name: "Kothari museum interior", detail: "The first haveli's interior survives largely intact; the museum holds period artefacts and original murals." },
        ],
        visitorInfo: [
            { label: "Opening", value: "9 am-6 pm daily (Kothari museum)" },
            { label: "Entry", value: "Standard ticket to the museum haveli" },
            { label: "Other havelis", value: "External viewing only" },
        ],
        tips: [
            "Visit at golden hour for the best sandstone glow.",
            "Pair with Salim Singh Haveli (the famously 38-balcony 'peacock haveli') 5 minutes away.",
            "The narrow approach lane is part of the experience, walk in.",
        ],
        faqs: [
            { q: "Are all 5 havelis open?", a: "Only the first (Kothari's Patwa Haveli) operates as a full museum. The others can be viewed from outside; some allow limited entry depending on conservation status." },
            { q: "How does it compare to Mandawa havelis?", a: "Mandawa havelis are smaller and known for their painted frescoes (Shekhawati style); Jaisalmer havelis are larger, sandstone, and carved. Different aesthetic, both important to the haveli architectural story." },
            { q: "Who were the Patwa family?", a: "Jain merchants who traded in brocade (zari work) and opium between Central Asia and the Indian peninsula in the 19th century. The family fortune funded the five-haveli cluster." },
            { q: "Is photography allowed?", a: "Outside yes; inside the museum sections, with a camera fee." },
        ],
    },
    // ---- Andaman ----
    {
        slug: "cellular-jail",
        citySlug: "port-blair",
        name: "Cellular Jail",
        type: "Monument",
        era: "British India · 1896-1906",
        tagline: "The 'Kala Pani' of Indian Independence",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/3/38/Cellular_Jail%2C_Port_Blair_1.jpg",
        answer: "The Cellular Jail (locally known as 'Kala Pani', 'the Black Waters') is a colonial-era prison in Port Blair, Andaman & Nicobar Islands, India, built between 1896-1906 by the British administration to hold political prisoners of the Indian Independence movement. The seven-winged radial design held 698 cells in solitary confinement; the isolation of the Andaman Islands (1,200 km from the mainland) made escape effectively impossible. Among its inmates were Veer Savarkar, Batukeshwar Dutt, and many other freedom fighters. Three of the seven wings survive and are now a National Memorial. MyTripMyTravel includes the Cellular Jail and the daily sound-and-light show on the Port Blair heritage day with respect for its weight.",
        intro: [
            "The Cellular Jail is the most-visited historic site in the Andamans and one of the most important sites of Indian Independence movement memory. The British built it explicitly as a holding facility for political prisoners, separating them from the mainland by 1,200 km of water made it the ultimate exile, hence the local name 'Kala Pani' ('the Black Waters'), shared with the colonial-era term for transportation overseas.",
            "Construction ran from 1896-1906. The seven-winged radial design (only three wings survive) held 698 single cells, each measuring 4.5 x 2.7 metres, designed for absolute solitary confinement, prisoners could not see or hear each other. Cells were arranged so each wing's cells faced the back of another wing's cells, preventing any visual contact.",
            "Among the prisoners held here were Vinayak Damodar Savarkar (transported in 1911 and held for 10 years), Batukeshwar Dutt (the Bhagat Singh-era revolutionary), and dozens of other freedom fighters. The work regime, extracting coconut oil with hand-presses, breaking stone, was punitive by design. Hunger strikes were brutally suppressed. Three prisoners died in a 1933 strike alone.",
            "The Cellular Jail was declared a National Memorial in 1979 by Prime Minister Morarji Desai. A daily sound-and-light show in the central courtyard narrates the history. MyTripMyTravel includes it on the Port Blair heritage day with a vetted historian guide who can frame the visit beyond the tourist register; the weight of the site rewards contextual reading.",
        ],
        quickFacts: [
            { label: "City", value: "Port Blair, Andaman & Nicobar Islands" },
            { label: "Built", value: "1896-1906" },
            { label: "Function", value: "Political prisoners of the Independence movement" },
            { label: "Design", value: "Seven-winged radial (3 surviving); 698 solitary cells" },
            { label: "Status", value: "National Memorial (1979)" },
            { label: "Notable prisoners", value: "Veer Savarkar, Batukeshwar Dutt, many others" },
            { label: "Best experience", value: "Day visit + evening sound-and-light show" },
            { label: "Ideal time on site", value: "2 hours (day); 1 hour (sound and light)" },
        ],
        highlights: [
            { name: "The three surviving wings", detail: "The radial cell arrangement and the gallery walks; the central tower from which guards monitored all wings." },
            { name: "Veer Savarkar's cell", detail: "Preserved as a memorial site within the jail." },
            { name: "The gallows", detail: "Triple-execution gallows that remained operational through the prison's life." },
            { name: "Sound-and-light show", detail: "Evening narration in the central courtyard, among the most moving such shows in India." },
            { name: "Memorial museum", detail: "Documents, prisoner accounts, and historical context across multiple galleries." },
        ],
        visitorInfo: [
            { label: "Opening", value: "Tuesday-Sunday 9 am-12.30 pm; 1.30 pm-4.45 pm; closed Monday" },
            { label: "Sound-and-light", value: "Daily 6 pm (Hindi) and 7.15 pm (English) when operating" },
            { label: "Entry", value: "Standard ticket" },
            { label: "Photography", value: "Permitted in most areas" },
        ],
        tips: [
            "Combine day visit with the evening sound-and-light show for the full experience.",
            "Closed Mondays, plan around.",
            "A historian guide deepens the visit significantly.",
        ],
        faqs: [
            { q: "Why was the Cellular Jail built in the Andamans?", a: "The British wanted a holding facility for Indian political prisoners that was completely isolated from the mainland and impossible to escape from. The Andamans, 1,200 km from the Indian coast, were the perfect site." },
            { q: "What does 'Kala Pani' mean?", a: "Literally 'the Black Waters', the term referred broadly to colonial-era transportation overseas, considered a particularly severe punishment because crossing the sea was believed in some Hindu traditions to cause loss of caste." },
            { q: "Did anyone escape?", a: "The complete isolation made escape from the Andamans effectively impossible. A small number of failed escape attempts are recorded. Most prisoners served their full terms or died inside." },
            { q: "Is the sound-and-light show worth attending?", a: "Yes, it is among the most respected such shows in India for the depth of its narration." },
            { q: "What other Port Blair heritage sites pair with this?", a: "The Anthropological Museum (Andaman tribes history), the Samudrika Naval Museum, and Ross Island (the British administrative capital ruins). A full Port Blair heritage day covers all four." },
        ],
    },
];

/** Full monument catalogue = original set + wave expansions. */
export const monuments: Monument[] = [...coreMonuments, ...extraMonuments];

// ---- Accessors ----

export function getMonumentsByCity(citySlug: string): Monument[] {
    return monuments.filter((m) => m.citySlug === citySlug);
}

export function getMonument(
    citySlug: string,
    monumentSlug: string
): Monument | undefined {
    return monuments.find(
        (m) => m.citySlug === citySlug && m.slug === monumentSlug
    );
}

export function getAllMonumentParams(): { slug: string; monument: string }[] {
    return monuments.map((m) => ({ slug: m.citySlug, monument: m.slug }));
}

export function citiesWithMonuments(): string[] {
    return Array.from(new Set(monuments.map((m) => m.citySlug)));
}

/** True if the city exists and has at least one monument. */
export function cityHasMonuments(citySlug: string): boolean {
    return (
        Boolean(getDestination(citySlug)) &&
        monuments.some((m) => m.citySlug === citySlug)
    );
}
