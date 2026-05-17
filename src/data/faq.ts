// FAQ atom layer (grid I). Each question is a direct, citation-ready
// answer — built for AI Overview / LLM citation as much as classic search.
// Answers are honest and general where specifics vary (visa, pricing);
// they route to the concierge rather than fabricate exact figures.

export interface FaqAtom {
    slug: string;
    q: string;
    a: string;
    /** Optional cross-cluster links surfaced on the atom page. */
    links?: { label: string; href: string }[];
}

export interface FaqTopic {
    slug: string;
    name: string;
    blurb: string;
    questions: FaqAtom[];
}

export const faqTopics: FaqTopic[] = [
    {
        slug: "golden-triangle",
        name: "The Golden Triangle",
        blurb: "Delhi, Agra, and Jaipur — the questions travellers ask most.",
        questions: [
            {
                slug: "what-is-the-golden-triangle",
                q: "What is the Golden Triangle in India?",
                a: "The Golden Triangle is India's most popular tourist circuit, connecting three cities — Delhi, Agra, and Jaipur — in a roughly triangular route of about 720 km. It covers the Mughal capital and its monuments (Delhi), the Taj Mahal (Agra), and the Rajput Pink City (Jaipur). MyTripMyTravel operates it as a private, chauffeured, escorted mission rather than a packaged group tour.",
                links: [
                    { label: "Golden Triangle tours", href: "/tours/golden-triangle" },
                    { label: "Golden Triangle destinations", href: "/destinations/region/golden-triangle" },
                ],
            },
            {
                slug: "how-many-days-for-golden-triangle",
                q: "How many days do you need for the Golden Triangle?",
                a: "A focused Golden Triangle takes 4–5 days; 6–7 days allows an unhurried pace with Fatehpur Sikri, a Taj sunrise, and a slower Jaipur. Three days is possible as a high-efficiency sprint. We tailor duration to your arrival fatigue and interests.",
                links: [
                    { label: "Tours by duration", href: "/tours/golden-triangle/by-duration/5-day" },
                    { label: "All tour packages", href: "/tours" },
                ],
            },
            {
                slug: "best-order-delhi-agra-jaipur",
                q: "What is the best order — Delhi, Agra, then Jaipur?",
                a: "Yes: Delhi → Agra → Jaipur → Delhi is the standard and most efficient sequence. It starts at the main international gateway (Delhi), routes the Agra–Jaipur leg via Fatehpur Sikri as a sightseeing drive, and returns to Delhi for departure. We sequence it around the Taj sunrise and the Friday Taj closure.",
                links: [
                    { label: "Agra brief", href: "/destinations/agra" },
                    { label: "Jaipur brief", href: "/destinations/jaipur" },
                ],
            },
            {
                slug: "is-the-taj-mahal-closed",
                q: "Is the Taj Mahal closed on any day?",
                a: "Yes — the Taj Mahal is closed every Friday for prayers. Our itineraries are built so a Friday is never spent on the Taj, and we arrange escorted near-opening entry for the best light and smallest crowds.",
                links: [{ label: "Taj Mahal guide", href: "/destinations/agra/monuments/taj-mahal" }],
            },
            {
                slug: "can-i-extend-the-golden-triangle",
                q: "Can the Golden Triangle be extended to other regions?",
                a: "Yes — it is the standard base for extensions into Rajasthan (Udaipur, Jodhpur, Jaisalmer), the Himalayas (Rishikesh, Shimla), Kerala, or wildlife (Ranthambore). Every itinerary we build is modular.",
                links: [
                    { label: "Rajasthan", href: "/destinations/region/rajasthan" },
                    { label: "Destination archive", href: "/destinations" },
                ],
            },
        ],
    },
    {
        slug: "planning-and-visa",
        name: "Planning & Entry",
        blurb: "Visas, gateways, and getting the trip set up.",
        questions: [
            {
                slug: "do-i-need-a-visa-for-india",
                q: "Do I need a visa to visit India?",
                a: "Most foreign nationals require a visa for India; many nationalities are eligible for the India e-Visa (tourist), applied for online before travel. Requirements and validity vary by passport and change periodically. Our concierge advises on the current process for your nationality during planning — we do not quote fixed figures here because they change.",
            },
            {
                slug: "which-airport-to-fly-into",
                q: "Which airport should I fly into for the Golden Triangle?",
                a: "Delhi (Indira Gandhi International, DEL) is the primary gateway and the northern vertex of the circuit. We stage the chauffeur-and-fleet handover at Delhi and run Delhi → Agra → Jaipur → Delhi.",
                links: [{ label: "Tours from your city", href: "/tours/golden-triangle" }],
            },
            {
                slug: "how-far-in-advance-to-book",
                q: "How far in advance should I book?",
                a: "For peak season (October–March) and palace hotels, Taj sunrise slots, or wedding venues, 2–4 months ahead is advisable. Bespoke itineraries can be assembled faster; the constraint is usually premium accommodation and festival dates rather than logistics.",
                links: [{ label: "Start planning", href: "/booking" }],
            },
            {
                slug: "is-it-private-or-group",
                q: "Are your tours private or group?",
                a: "Strictly private. Every MyTripMyTravel mission is a single party with a dedicated chauffeur and escort — never a shared coach or fixed group departure.",
            },
        ],
    },
    {
        slug: "best-time",
        name: "Best Time to Travel",
        blurb: "Seasons, weather, and when to go where.",
        questions: [
            {
                slug: "best-time-to-visit-india",
                q: "When is the best time to visit India for the Golden Triangle?",
                a: "October to March is the prime window for North India — soft light, comfortable days, clean photography air. November–February is peak (book early). April–June is severe heat (dawn-only sightseeing); July–September monsoon is quiet, green, and private but variable.",
                links: [{ label: "Golden Triangle by month", href: "/tours/golden-triangle/in-month/november" }],
            },
            {
                slug: "can-i-travel-in-monsoon",
                q: "Can I travel the Golden Triangle in the monsoon?",
                a: "Yes — July–September is the quietest, most private time, with dramatic skies and emerald gardens. Rain is intermittent rather than constant in the North. We keep the itinerary weather-flexible and time the Taj for clear windows.",
            },
            {
                slug: "best-time-for-rajasthan",
                q: "When is the best time for Rajasthan?",
                a: "October to March for the desert cities (Jodhpur, Jaisalmer); September–March for Udaipur's lakes. Summer is extreme desert heat; the Pushkar Camel Fair and Jaisalmer Desert Festival fall in this window.",
                links: [{ label: "Rajasthan destinations", href: "/destinations/region/rajasthan" }],
            },
        ],
    },
    {
        slug: "safety-and-health",
        name: "Safety & Health",
        blurb: "Travelling safely and comfortably in India.",
        questions: [
            {
                slug: "is-india-safe-for-tourists",
                q: "Is India safe for luxury travellers?",
                a: "Travelled with a vetted escort, chauffeur logistics, curated stays, and controlled itineraries, India is both safe and exceptional. MyTripMyTravel operates only where it can guarantee the standard; navigation, vehicle staging, and crowd management are handled for you throughout.",
            },
            {
                slug: "can-you-handle-post-surgery-travel",
                q: "Can you handle travel after surgery or with mobility needs?",
                a: "Yes — our medical-sanctuary pathway provides orthopedic-grade transport, paced itineraries, accessible stays, and physiotherapy continuity, coordinated with your care team and only with medical clearance.",
                links: [
                    { label: "Wellness & recovery", href: "/wellness" },
                    { label: "Post-op knee transit", href: "/wellness/orthopedic/post-op-knee" },
                ],
            },
            {
                slug: "is-the-food-safe",
                q: "Is the food safe on your itineraries?",
                a: "Dining is curated through our heritage-dining wing — vetted kitchens, private tables, and escorted trails rather than chance roadside stops. Dietary requirements (vegetarian, allergies, medical) are planned in advance.",
                links: [{ label: "Heritage dining", href: "/heritage-dining" }],
            },
        ],
    },
    {
        slug: "fleet-and-transport",
        name: "Fleet & Transport",
        blurb: "Vehicles, chauffeurs, and how transport works.",
        questions: [
            {
                slug: "are-cars-chauffeur-driven",
                q: "Are your cars chauffeur-driven or self-drive?",
                a: "Every vehicle is chauffeur-driven by a vetted performance-driver with live GPS telemetry. Self-drive is not offered — the chauffeur is integral to the security and logistics protocol.",
                links: [{ label: "The Elite Fleet", href: "/fleet" }],
            },
            {
                slug: "what-is-included-in-pricing",
                q: "What is included in the vehicle pricing?",
                a: "Fuel, tolls, permits, and the chauffeur are pre-calculated into transparent band pricing. There are no hidden 'gate fees'. Exact quotes are bespoke to the itinerary and confirmed during planning.",
            },
            {
                slug: "which-vehicle-for-a-family",
                q: "Which vehicle is best for a family tour?",
                a: "The Premium-tier Innova Crysta is the standard family vehicle for the Golden Triangle — robust, comfortable, seating up to 6 with luggage. Larger parties use the Urbania or a luxury coach; elite parties the BMW/Mercedes/Vellfire tiers.",
                links: [
                    { label: "Innova Crysta", href: "/fleet/innova-crysta" },
                    { label: "All vehicles", href: "/fleet" },
                ],
            },
        ],
    },
    {
        slug: "wellness",
        name: "Wellness & Sanctuary",
        blurb: "Yoga, Ayurveda, and recovery programmes.",
        questions: [
            {
                slug: "where-for-authentic-ayurveda",
                q: "Where do you arrange authentic Ayurveda?",
                a: "Primarily in Kerala, with credentialed Ayurvedic physicians at established centres — genuine physician-supervised Panchakarma and Rasayana, not spa imitations. Programmes are residential and run to clinically meaningful lengths.",
                links: [
                    { label: "Ayurvedic restoration", href: "/wellness/ayurvedic" },
                    { label: "Panchakarma", href: "/wellness/ayurvedic/panchakarma" },
                ],
            },
            {
                slug: "where-for-yoga-retreat",
                q: "Where is best for a yoga retreat in India?",
                a: "Rishikesh — the Himalayan-foothill yoga capital on the Ganga — or a private sanctuary, with vetted master teachers. We arrange Hatha, Vinyasa, meditation, and pranayama as paced programmes, not fitness classes.",
                links: [
                    { label: "Yoga & soul calibration", href: "/wellness/yoga-soul" },
                    { label: "Rishikesh", href: "/destinations/rishikesh" },
                ],
            },
        ],
    },
    {
        slug: "weddings-and-events",
        name: "Weddings & Events",
        blurb: "Royal weddings, celebrations, and corporate missions.",
        questions: [
            {
                slug: "where-for-a-palace-wedding",
                q: "Where can I host a royal palace wedding in India?",
                a: "Udaipur is the premier choice — lake palaces and Mewar heritage venues — with Jaipur and Jodhpur as strong alternatives. Our weddings wing handles venue, fleet convoys, and full guest logistics end to end.",
                links: [
                    { label: "Royal weddings", href: "/weddings" },
                    { label: "Udaipur", href: "/destinations/udaipur" },
                ],
            },
            {
                slug: "do-you-handle-corporate-offsites",
                q: "Do you handle corporate offsites and incentive trips?",
                a: "Yes — corporate missions with convoy logistics, vetted venues, and escorted programmes across the Golden Triangle and Rajasthan. Encrypted logistics sync is available for large groups.",
                links: [{ label: "Corporate", href: "/corporate" }],
            },
        ],
    },
    {
        slug: "booking-and-payments",
        name: "Booking & Payments",
        blurb: "How enquiries, customisation, and confirmation work.",
        questions: [
            {
                slug: "how-do-i-book",
                q: "How do I book a trip with MyTripMyTravel?",
                a: "Start with an enquiry via the booking page or WhatsApp. A master planner designs a bespoke itinerary, you refine it, and it is confirmed on agreement. Priority response is targeted within an hour during operating times.",
                links: [{ label: "Begin an enquiry", href: "/booking" }],
            },
            {
                slug: "can-itineraries-be-customised",
                q: "Can the itineraries be customised?",
                a: "Entirely. Every package shown on the site is a foundation — a mission architecture ready for bespoke modification of duration, stays, pace, dining, and routing. Nothing is a fixed group product.",
                links: [{ label: "Tour archive", href: "/tours" }],
            },
            {
                slug: "what-areas-do-you-cover",
                q: "What parts of India do you cover?",
                a: "The Golden Triangle, Rajasthan, Kerala, the Himalayas, Sikkim, and the Andaman Islands — the regions where we can guarantee absolute luxury and security. Coverage expands as standards can be assured.",
                links: [{ label: "Destination archive", href: "/destinations" }],
            },
        ],
    },
];

// ---- Accessors ----

export function getFaqTopic(slug: string): FaqTopic | undefined {
    return faqTopics.find((t) => t.slug === slug);
}

export function getFaqAtom(
    topicSlug: string,
    questionSlug: string
): { topic: FaqTopic; atom: FaqAtom } | null {
    const topic = getFaqTopic(topicSlug);
    if (!topic) return null;
    const atom = topic.questions.find((x) => x.slug === questionSlug);
    if (!atom) return null;
    return { topic, atom };
}

export function getAllFaqTopicParams(): { topic: string }[] {
    return faqTopics.map((t) => ({ topic: t.slug }));
}

export function getAllFaqAtomParams(): { topic: string; question: string }[] {
    return faqTopics.flatMap((t) =>
        t.questions.map((x) => ({ topic: t.slug, question: x.slug }))
    );
}
