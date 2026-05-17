// Wellness sub-variant layer (grid D6). Sits beneath the existing
// bespoke programme pages (/wellness/yoga-soul etc.) — those are left
// untouched; these add deep, indexable therapy briefs under each.

import type { FAQ } from "./destinations";

export interface WellnessVariant {
    slug: string;
    name: string;
    /** Citation-ready answer block. */
    answer: string;
    intro: string[];
    benefits: string[];
    protocol: { phase: string; detail: string }[];
    idealFor: string;
    duration: string;
    faqs: FAQ[];
    relatedDestinations: { label: string; href: string }[];
}

export interface WellnessProgramme {
    slug: string;
    name: string;
    label: string;
    heroImg: string;
    blurb: string;
    variants: WellnessVariant[];
}

const RISHIKESH = { label: "Rishikesh — yoga & Ganga", href: "/destinations/rishikesh" };
const KERALA = { label: "Kerala Backwaters", href: "/destinations/region/kerala" };
const KOVALAM = { label: "Kovalam — Ayurveda coast", href: "/destinations/kovalam" };
const WELLNESS_HUB = { label: "Wellness & Sanctuary", href: "/wellness" };

export const programmes: WellnessProgramme[] = [
    {
        slug: "yoga-soul",
        name: "Yoga & Soul Calibration",
        label: "Soul Calibration",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Yoga_Meditation%2C_Rishikesh.jpg",
        blurb: "Master-led practice synchronised with the spiritual meridians of India.",
        variants: [
            {
                slug: "hatha",
                name: "Hatha Yoga Immersion",
                answer:
                    "Hatha yoga is the foundational physical branch of yoga, built on asana (posture) and pranayama (breath) to prepare the body and mind for stillness. A MyTripMyTravel Hatha immersion places you with a master teacher at the source — Rishikesh or a private Himalayan sanctuary — for a paced, alignment-first practice rather than a fitness class.",
                intro: [
                    "Hatha is where almost every modern yoga style originates. It is deliberate, slow, and precise — the opposite of a workout — which is exactly why it is the right entry point for a serious practitioner or a complete beginner.",
                    "We place guests with vetted master teachers in Rishikesh or a private sanctuary, with one-to-one or very small-group sessions calibrated to your body, not a timetable.",
                ],
                benefits: ["Structural alignment and joint mobility", "Breath capacity and nervous-system down-regulation", "A sustainable home practice you keep after the trip"],
                protocol: [
                    { phase: "Assessment", detail: "A teacher-led postural and breath assessment sets the baseline." },
                    { phase: "Daily practice", detail: "Morning asana and pranayama, evening restorative and meditation." },
                    { phase: "Integration", detail: "A personalised sequence you take home, with follow-up guidance." },
                ],
                idealFor: "Beginners through experienced practitioners seeking depth over intensity",
                duration: "3–14 days",
                faqs: [
                    { q: "Do I need yoga experience for a Hatha immersion?", a: "No — Hatha is alignment-first and is calibrated to your level, from absolute beginner to advanced." },
                    { q: "Where does the Hatha programme take place?", a: "Primarily Rishikesh or a private Himalayan sanctuary, with vetted master teachers, arranged through our wellness wing." },
                ],
                relatedDestinations: [RISHIKESH, WELLNESS_HUB],
            },
            {
                slug: "vinyasa",
                name: "Vinyasa Flow Intensive",
                answer:
                    "Vinyasa is a dynamic, breath-synchronised style of yoga where postures flow continuously. A MyTripMyTravel Vinyasa intensive pairs an experienced practitioner with a master teacher for a strong, creative, breath-led practice in a private Indian setting.",
                intro: [
                    "Vinyasa links breath to movement in a continuous flow — physically demanding, meditative in motion, and best taught by a teacher who can read and adjust a room of one.",
                    "Our intensives are for those who already move well and want to deepen flow, transitions, and breath under expert eyes, in Rishikesh or a private retreat.",
                ],
                benefits: ["Cardiovascular and core strength", "Breath-movement synchronisation", "Refined transitions and advanced asana"],
                protocol: [
                    { phase: "Calibration", detail: "Movement screening to set intensity and contraindications." },
                    { phase: "Daily flow", detail: "Morning strong flow, afternoon technique, evening yin to balance." },
                    { phase: "Progression", detail: "A structured progression plan to continue post-trip." },
                ],
                idealFor: "Intermediate and advanced practitioners",
                duration: "5–14 days",
                faqs: [
                    { q: "Is Vinyasa suitable for beginners?", a: "We recommend Hatha first for beginners; Vinyasa intensives assume an established practice. We assess and advise honestly." },
                    { q: "How intense is the practice?", a: "Strong but individually calibrated — daily flow balanced with yin and recovery so it is sustainable." },
                ],
                relatedDestinations: [RISHIKESH, WELLNESS_HUB],
            },
            {
                slug: "meditation",
                name: "Meditation & Stillness Retreat",
                answer:
                    "A meditation retreat trains sustained attention and nervous-system regulation through guided and silent practice. MyTripMyTravel arranges teacher-led meditation in contemplative Indian settings — Rishikesh, the Himalaya, or a private sanctuary — structured for genuine depth, not a wellness add-on.",
                intro: [
                    "Meditation is the core, not the cool-down. A dedicated retreat builds the conditions — environment, teacher, silence, schedule — that make real practice possible.",
                    "We structure days around technique instruction, sittings of increasing length, and contemplative walking, with optional periods of silence.",
                ],
                benefits: ["Attention regulation and stress resilience", "Sleep quality and recovery", "A durable, transferable practice"],
                protocol: [
                    { phase: "Foundation", detail: "Technique instruction (breath, body-scan, open-awareness)." },
                    { phase: "Deepening", detail: "Progressive sitting lengths with teacher check-ins." },
                    { phase: "Silence (optional)", detail: "A guided silent period for those ready for it." },
                ],
                idealFor: "Anyone from first-timers to experienced meditators",
                duration: "3–10 days",
                faqs: [
                    { q: "Is a silent retreat mandatory?", a: "No — silence is an optional, guided element. The programme is structured to your readiness." },
                    { q: "Do I need prior meditation experience?", a: "No. Technique is taught from the foundation and progressed at your pace." },
                ],
                relatedDestinations: [RISHIKESH, WELLNESS_HUB],
            },
            {
                slug: "pranayama",
                name: "Pranayama & Breathwork",
                answer:
                    "Pranayama is the yogic science of breath regulation, used to influence energy, focus, and the autonomic nervous system. A MyTripMyTravel pranayama programme provides expert, safe, progressive breathwork instruction in a controlled Indian sanctuary setting.",
                intro: [
                    "Breath is the most direct lever on the nervous system, and pranayama is its most refined discipline — powerful, and best learned under qualified supervision rather than from an app.",
                    "We pair guests with experienced teachers for graded techniques, contraindication screening, and integration with asana and meditation.",
                ],
                benefits: ["Autonomic regulation and stress control", "Lung capacity and breath efficiency", "Enhanced focus and energy management"],
                protocol: [
                    { phase: "Screening", detail: "Health screening for safe technique selection." },
                    { phase: "Graded practice", detail: "Progressive techniques from foundational to advanced." },
                    { phase: "Integration", detail: "A personalised daily protocol to retain." },
                ],
                idealFor: "Practitioners seeking nervous-system and focus benefits",
                duration: "3–10 days",
                faqs: [
                    { q: "Is advanced breathwork safe?", a: "When supervised and screened, yes. We use qualified teachers and health screening before progressing techniques." },
                    { q: "Can pranayama pair with meditation?", a: "Yes — they are complementary and we integrate them within the same programme." },
                ],
                relatedDestinations: [RISHIKESH, WELLNESS_HUB],
            },
            {
                slug: "yin-restorative",
                name: "Yin & Restorative Yoga",
                answer:
                    "Yin and restorative yoga use long-held, fully-supported passive postures to release deep connective tissue and activate the parasympathetic nervous system. MyTripMyTravel arranges it as a recovery-focused programme, ideal alongside travel or post-procedure transit.",
                intro: [
                    "Yin and restorative practice is the deliberate opposite of effort — long, supported holds that work fascia and the nervous system rather than muscle.",
                    "It is the right programme for deep recovery, jet-lag reset, or pairing with a medical-sanctuary itinerary.",
                ],
                benefits: ["Connective-tissue release and flexibility", "Deep parasympathetic recovery", "Sleep and stress normalisation"],
                protocol: [
                    { phase: "Assessment", detail: "Mobility and recovery-need assessment." },
                    { phase: "Supported practice", detail: "Daily long-hold yin and fully-propped restorative sessions." },
                    { phase: "Rest integration", detail: "Paced rest and breath to consolidate recovery." },
                ],
                idealFor: "Recovery, jet-lag reset, and medical-sanctuary pairing",
                duration: "3–10 days",
                faqs: [
                    { q: "Is restorative yoga suitable post-procedure?", a: "Often yes, with medical clearance — it pairs well with our medical-sanctuary transit. We coordinate with your care team." },
                    { q: "Is it physically demanding?", a: "No — it is passive and fully supported, focused on release and recovery." },
                ],
                relatedDestinations: [RISHIKESH, WELLNESS_HUB],
            },
        ],
    },
    {
        slug: "ayurvedic",
        name: "Ayurvedic Restoration",
        label: "Ayurvedic Sanctuary",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/c/c5/The_Backwaters_of_Alleppey.jpg",
        blurb: "Practitioner-led classical Ayurveda in its Keralan home.",
        variants: [
            {
                slug: "panchakarma",
                name: "Panchakarma Detoxification",
                answer:
                    "Panchakarma is the classical Ayurvedic five-action purification therapy, a physician-supervised programme of preparation, elimination, and rejuvenation. MyTripMyTravel arranges authentic Panchakarma with qualified Vaidyas at established Keralan centres, not spa imitations.",
                intro: [
                    "Panchakarma is the deep, medically-supervised core of Ayurveda — a multi-stage protocol, not a massage menu. Done properly it requires a qualified physician, a residential setting, and time.",
                    "We place guests at established Keralan Ayurveda centres with credentialed Vaidyas, with the itinerary built around the therapy rather than the therapy squeezed into a holiday.",
                ],
                benefits: ["Systemic detoxification under physician supervision", "Digestive and metabolic reset", "Deep rejuvenation (Rasayana) phase"],
                protocol: [
                    { phase: "Purvakarma", detail: "Preparation — oleation and fomentation to mobilise toxins." },
                    { phase: "Pradhanakarma", detail: "The main elimination therapies, physician-directed." },
                    { phase: "Paschatkarma", detail: "Diet, rejuvenation, and gradual reintegration." },
                ],
                idealFor: "Serious detox and reset under medical supervision",
                duration: "14–28 days (authentic minimum)",
                faqs: [
                    { q: "How long does authentic Panchakarma take?", a: "A genuine programme runs roughly 14–28 days minimum; shorter 'Panchakarma' offerings are spa adaptations. We arrange the real protocol." },
                    { q: "Is it medically supervised?", a: "Yes — credentialed Ayurvedic physicians (Vaidyas) direct the programme at established Keralan centres." },
                ],
                relatedDestinations: [KERALA, KOVALAM, WELLNESS_HUB],
            },
            {
                slug: "abhyanga",
                name: "Abhyanga Oil Therapy",
                answer:
                    "Abhyanga is the classical Ayurvedic full-body warm-oil massage, performed with dosha-specific medicated oils to nourish tissue, calm the nervous system, and support circulation and lymphatic flow. MyTripMyTravel arranges practitioner-led Abhyanga within a structured Ayurvedic stay.",
                intro: [
                    "Abhyanga is foundational Ayurvedic bodywork — synchronised warm medicated oil applied to read and rebalance the constitution, not a generic oil massage.",
                    "We arrange it with trained therapists under physician guidance, oils selected to your dosha assessment.",
                ],
                benefits: ["Circulatory and lymphatic support", "Nervous-system calming", "Skin and tissue nourishment"],
                protocol: [
                    { phase: "Dosha assessment", detail: "Physician assessment selects the medicated oils." },
                    { phase: "Daily Abhyanga", detail: "Synchronised warm-oil therapy by trained practitioners." },
                    { phase: "Svedana", detail: "Herbal steam to consolidate the therapy." },
                ],
                idealFor: "Restoration, stress, and as a Panchakarma component",
                duration: "3–14 days",
                faqs: [
                    { q: "Is Abhyanga just a massage?", a: "No — it is a constitution-specific medicated-oil therapy assessed and guided by an Ayurvedic physician." },
                    { q: "Can it stand alone?", a: "Yes, as a restorative programme, or as a component within Panchakarma." },
                ],
                relatedDestinations: [KERALA, KOVALAM, WELLNESS_HUB],
            },
            {
                slug: "shirodhara",
                name: "Shirodhara Therapy",
                answer:
                    "Shirodhara is the Ayurvedic therapy of pouring a continuous, steady stream of warm medicated oil over the forehead to profoundly calm the nervous system. MyTripMyTravel arranges physician-supervised Shirodhara within a structured Keralan Ayurvedic programme.",
                intro: [
                    "Shirodhara is among the most distinctive and effective Ayurvedic nervous-system therapies — a precise, continuous oil stream that induces deep parasympathetic states.",
                    "It is delivered by trained therapists under physician oversight, typically within a broader Ayurvedic or Panchakarma programme.",
                ],
                benefits: ["Profound nervous-system calming", "Sleep and anxiety support", "Mental clarity and stress reduction"],
                protocol: [
                    { phase: "Assessment", detail: "Physician assessment and oil selection." },
                    { phase: "Shirodhara sessions", detail: "Graded sessions of increasing depth." },
                    { phase: "Rest", detail: "Structured post-therapy rest for integration." },
                ],
                idealFor: "Stress, sleep, and nervous-system recovery",
                duration: "3–14 days (as a series)",
                faqs: [
                    { q: "What does Shirodhara feel like?", a: "Deeply calming — a sustained warm-oil stream that induces a profound parasympathetic, near-meditative state." },
                    { q: "Is it done alone or in a series?", a: "Typically as a graded series within a broader Ayurvedic programme, physician-supervised." },
                ],
                relatedDestinations: [KERALA, KOVALAM, WELLNESS_HUB],
            },
            {
                slug: "kati-basti",
                name: "Kati Basti — Spinal Care",
                answer:
                    "Kati Basti is a targeted Ayurvedic therapy in which warm medicated oil is retained over the lower back within a herbal-dough reservoir, used for lumbar pain and spinal stiffness. MyTripMyTravel arranges it under Ayurvedic physician supervision, often alongside orthopedic restoration.",
                intro: [
                    "Kati Basti is a precise, localised Ayurvedic treatment for the lower back — a warm medicated-oil pool held over the lumbar region.",
                    "We arrange it physician-supervised, frequently integrated with our orthopedic-restoration pathway for structured back-care.",
                ],
                benefits: ["Lumbar pain relief", "Spinal mobility and stiffness reduction", "Complementary to orthopedic rehab"],
                protocol: [
                    { phase: "Assessment", detail: "Physician evaluation of the lumbar complaint." },
                    { phase: "Kati Basti series", detail: "Graded localised oil-retention sessions." },
                    { phase: "Integration", detail: "Coordination with rehab and mobility work." },
                ],
                idealFor: "Lower-back pain and spinal stiffness",
                duration: "5–14 days (series)",
                faqs: [
                    { q: "Can Kati Basti pair with orthopedic care?", a: "Yes — we routinely integrate it with our orthopedic-restoration pathway under coordinated supervision." },
                    { q: "Is it supervised?", a: "Yes — by an Ayurvedic physician, with assessment before the series begins." },
                ],
                relatedDestinations: [KERALA, WELLNESS_HUB],
            },
            {
                slug: "rasayana",
                name: "Rasayana Rejuvenation",
                answer:
                    "Rasayana is the Ayurvedic science of rejuvenation and longevity — a physician-designed programme of diet, herbs, therapies, and lifestyle to restore vitality. MyTripMyTravel arranges Rasayana as a structured residential programme in Kerala.",
                intro: [
                    "Rasayana is Ayurveda's longevity discipline — the deliberate, supervised rebuilding of vitality after depletion, illness, or sustained stress.",
                    "We arrange it residentially in Kerala with physician design, integrating therapy, nutrition, and herbal protocols.",
                ],
                benefits: ["Restored vitality and immunity", "Post-illness or post-stress recovery", "Longevity-oriented lifestyle reset"],
                protocol: [
                    { phase: "Diagnosis", detail: "Detailed Ayurvedic assessment and programme design." },
                    { phase: "Rasayana therapies", detail: "Herbal, dietary, and bodywork protocols." },
                    { phase: "Lifestyle integration", detail: "A retained regimen for sustained benefit." },
                ],
                idealFor: "Post-illness recovery and longevity focus",
                duration: "14–28 days",
                faqs: [
                    { q: "Who is Rasayana for?", a: "Those recovering from illness or chronic stress, or seeking a supervised longevity-oriented reset." },
                    { q: "Is it residential?", a: "Yes — it is a structured residential programme in Kerala under physician design." },
                ],
                relatedDestinations: [KERALA, KOVALAM, WELLNESS_HUB],
            },
        ],
    },
    {
        slug: "orthopedic",
        name: "Orthopedic Restoration",
        label: "Structural Recovery",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Agra_Fort_India.jpg",
        blurb: "World-class structural recovery with luxury post-op transit.",
        variants: [
            {
                slug: "post-op-knee",
                name: "Post-Operative Knee Recovery",
                answer:
                    "Post-operative knee recovery transit is a medically-aware luxury programme for travellers recovering from knee replacement or arthroscopy, combining orthopedic-grade transport, paced itineraries, and coordinated physiotherapy. MyTripMyTravel designs the logistics around the recovery, not the sightseeing.",
                intro: [
                    "Recovering from knee surgery does not have to confine a trip — but it does have to be engineered around the joint. Vehicle ingress, seating, pacing, and rest are clinical variables, not comfort preferences.",
                    "We coordinate orthopedic-grade fleet, ground-floor and accessible stays, and physiotherapy touchpoints with your care team.",
                ],
                benefits: ["Safe, low-strain mobility during recovery", "Coordinated physiotherapy continuity", "Paced, rest-built itineraries"],
                protocol: [
                    { phase: "Clearance", detail: "Coordination with your surgeon/physio for travel clearance." },
                    { phase: "Engineered transit", detail: "Orthopedic-grade fleet, accessible stays, paced routing." },
                    { phase: "Continuity", detail: "Scheduled physiotherapy and rest checkpoints." },
                ],
                idealFor: "Knee replacement / arthroscopy recovery travellers",
                duration: "Itinerary-dependent",
                faqs: [
                    { q: "Is it safe to travel after knee surgery?", a: "With medical clearance and engineered logistics, often yes. We coordinate with your care team and design the trip around the recovery." },
                    { q: "What makes the fleet orthopedic-grade?", a: "Easier ingress, supportive seating, and routing/pacing that minimises strain — a clinical specification, not a comfort upgrade." },
                ],
                relatedDestinations: [WELLNESS_HUB],
            },
            {
                slug: "post-op-spine",
                name: "Post-Operative Spinal Transit",
                answer:
                    "Post-operative spinal transit is a specialised luxury programme for travellers recovering from spinal surgery, prioritising vibration control, posture support, and strictly paced movement. MyTripMyTravel engineers the entire itinerary to spinal-recovery constraints.",
                intro: [
                    "The spine is the least forgiving recovery context for travel — road quality, seating posture, and duration are clinical factors. This programme treats them as such.",
                    "We coordinate vibration-controlled transport, posture-supported seating, accessible accommodation, and physiotherapy continuity with your team.",
                ],
                benefits: ["Vibration- and posture-controlled transit", "Strictly paced, rest-heavy itineraries", "Physiotherapy continuity"],
                protocol: [
                    { phase: "Clearance", detail: "Surgeon/physio coordination and travel-risk review." },
                    { phase: "Engineered transit", detail: "Vibration-controlled fleet, posture support, minimal segments." },
                    { phase: "Continuity", detail: "Physiotherapy checkpoints and structured rest." },
                ],
                idealFor: "Spinal surgery recovery travellers (with clearance)",
                duration: "Itinerary-dependent",
                faqs: [
                    { q: "Is spinal-recovery travel advisable?", a: "Only with explicit medical clearance and engineered logistics. We coordinate closely with your care team and pace conservatively." },
                    { q: "How is transit controlled?", a: "Through vibration-managed vehicles, posture-supported seating, and strictly limited travel segments." },
                ],
                relatedDestinations: [WELLNESS_HUB],
            },
            {
                slug: "joint-rehab",
                name: "Joint Rehabilitation Programme",
                answer:
                    "The joint rehabilitation programme combines coordinated physiotherapy, Ayurvedic supportive therapies (such as Kati Basti), and paced itineraries for travellers managing chronic joint conditions. MyTripMyTravel integrates clinical and traditional care under coordination.",
                intro: [
                    "Chronic joint management while travelling is feasible when rehab continuity, supportive therapy, and pacing are designed together rather than improvised.",
                    "We integrate physiotherapy with Ayurvedic joint-support therapies and orthopedic-grade logistics.",
                ],
                benefits: ["Rehab continuity on the road", "Integrated Ayurvedic joint support", "Mobility-preserving pacing"],
                protocol: [
                    { phase: "Assessment", detail: "Joint-status review and programme design." },
                    { phase: "Integrated care", detail: "Physiotherapy plus Ayurvedic joint therapies." },
                    { phase: "Pacing", detail: "Mobility-preserving routing and rest." },
                ],
                idealFor: "Chronic joint conditions and managed mobility",
                duration: "7–21 days",
                faqs: [
                    { q: "Does this combine modern and Ayurvedic care?", a: "Yes — physiotherapy with Ayurvedic joint-support therapies such as Kati Basti, coordinated together." },
                    { q: "Is it suitable for chronic arthritis?", a: "Often, with assessment. The programme is designed around your joint status and clearance." },
                ],
                relatedDestinations: [KERALA, WELLNESS_HUB],
            },
            {
                slug: "sports-recovery",
                name: "Sports & Performance Recovery",
                answer:
                    "Sports and performance recovery is an active-recovery programme blending physiotherapy, deep-tissue and marma bodywork, mobility work, and structured rest for athletic travellers. MyTripMyTravel designs it for measurable recovery, not passive spa time.",
                intro: [
                    "Athletic recovery while travelling needs structure — load management, targeted bodywork, and mobility, not just a massage and a pool.",
                    "We combine physiotherapy, deep-tissue and marma therapy, and programmed mobility under coordinated guidance.",
                ],
                benefits: ["Faster, structured recovery", "Targeted soft-tissue and mobility work", "Load-managed active rest"],
                protocol: [
                    { phase: "Screening", detail: "Movement and load assessment." },
                    { phase: "Recovery block", detail: "Physiotherapy, deep-tissue/marma, mobility work." },
                    { phase: "Reload", detail: "Graded return-to-activity plan." },
                ],
                idealFor: "Athletes and high-performance travellers",
                duration: "5–14 days",
                faqs: [
                    { q: "Is this passive spa recovery?", a: "No — it is structured active recovery: assessment, targeted bodywork, mobility, and a graded reload plan." },
                    { q: "Can it fit around a competition schedule?", a: "Yes — we design the block and reload around your calendar and load needs." },
                ],
                relatedDestinations: [WELLNESS_HUB],
            },
        ],
    },
    {
        slug: "massage",
        name: "Therapeutic Massage",
        label: "Bodywork",
        heroImg: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Lake_Palace_Udaipur.jpg",
        blurb: "Master-therapist bodywork across Indian and global modalities.",
        variants: [
            {
                slug: "deep-tissue",
                name: "Deep-Tissue Therapy",
                answer:
                    "Deep-tissue therapy targets chronic muscular tension and adhesions in the deeper layers of muscle and fascia. MyTripMyTravel arranges master-therapist deep-tissue work integrated with travel recovery or athletic programmes.",
                intro: [
                    "Deep-tissue work is therapeutic, not indulgent — focused pressure on chronic tension patterns, best delivered by a skilled therapist who can work to tolerance.",
                    "We arrange it with vetted master therapists, standalone or within sports-recovery and travel-decompression programmes.",
                ],
                benefits: ["Chronic tension and adhesion release", "Improved range of motion", "Recovery support"],
                protocol: [
                    { phase: "Assessment", detail: "Tension-pattern and tolerance assessment." },
                    { phase: "Targeted work", detail: "Progressive deep-tissue sessions to tolerance." },
                    { phase: "Aftercare", detail: "Mobility and hydration guidance between sessions." },
                ],
                idealFor: "Chronic tension, desk-body, and athletic recovery",
                duration: "Single or series",
                faqs: [
                    { q: "Is deep-tissue painful?", a: "It works to tolerance, not beyond it — communicated and progressive with a skilled therapist." },
                    { q: "Can it pair with sports recovery?", a: "Yes — it is a core component of our sports-and-performance recovery programme." },
                ],
                relatedDestinations: [WELLNESS_HUB],
            },
            {
                slug: "swedish",
                name: "Swedish Relaxation Massage",
                answer:
                    "Swedish massage uses flowing, moderate-pressure strokes to promote circulation and parasympathetic relaxation. MyTripMyTravel arranges it as a travel-decompression and jet-lag-reset therapy with master therapists.",
                intro: [
                    "Swedish technique is the classical relaxation modality — circulatory, calming, and ideal as a reset after long-haul travel.",
                    "We arrange it within decompression and arrival-recovery itineraries with vetted therapists.",
                ],
                benefits: ["Circulatory and lymphatic stimulation", "Parasympathetic relaxation", "Jet-lag and travel reset"],
                protocol: [
                    { phase: "Intake", detail: "Preference and pressure consultation." },
                    { phase: "Session", detail: "Full-body Swedish technique." },
                    { phase: "Rest", detail: "Quiet integration period." },
                ],
                idealFor: "Travel decompression and relaxation",
                duration: "Single or series",
                faqs: [
                    { q: "Is Swedish good for jet lag?", a: "Yes — its circulatory and parasympathetic effects make it an effective arrival-recovery and reset therapy." },
                    { q: "Is it medical?", a: "It is relaxation-focused; for therapeutic needs we recommend deep-tissue or marma instead." },
                ],
                relatedDestinations: [WELLNESS_HUB],
            },
            {
                slug: "thai",
                name: "Thai Assisted Stretch",
                answer:
                    "Thai massage is an assisted-stretch and compression therapy performed on a mat, improving mobility and energy flow. MyTripMyTravel arranges master-therapist Thai work as a mobility and recovery modality.",
                intro: [
                    "Thai bodywork is active and dynamic — assisted stretching and rhythmic compression that restores mobility, not a passive oil massage.",
                    "We arrange it with skilled therapists, standalone or within mobility and recovery programmes.",
                ],
                benefits: ["Mobility and flexibility", "Energy-line release", "Active recovery"],
                protocol: [
                    { phase: "Screening", detail: "Mobility and contraindication check." },
                    { phase: "Assisted work", detail: "Guided stretch-and-compression sequence." },
                    { phase: "Integration", detail: "Mobility carry-over guidance." },
                ],
                idealFor: "Mobility, stiffness, and active recovery",
                duration: "Single or series",
                faqs: [
                    { q: "Is Thai massage relaxing or active?", a: "Active — it is assisted stretching and compression aimed at mobility, distinct from passive relaxation massage." },
                    { q: "Is it suitable with injuries?", a: "With screening — we check contraindications and adapt or recommend an alternative modality." },
                ],
                relatedDestinations: [WELLNESS_HUB],
            },
            {
                slug: "marma",
                name: "Marma Point Therapy",
                answer:
                    "Marma therapy is an Ayurvedic bodywork stimulating the body's 107 vital energy points (marma) to release blockages and rebalance the system. MyTripMyTravel arranges practitioner-led Marma within Ayurvedic and recovery programmes.",
                intro: [
                    "Marma is Ayurveda's energetic bodywork — precise stimulation of vital points, traditionally considered the meeting of body, mind, and prana.",
                    "We arrange it with trained Ayurvedic practitioners, integrated with Abhyanga, recovery, or sports programmes.",
                ],
                benefits: ["Energetic rebalancing", "Tension and pain modulation", "Complement to Ayurvedic therapy"],
                protocol: [
                    { phase: "Assessment", detail: "Practitioner assessment of marma and dosha." },
                    { phase: "Marma work", detail: "Targeted vital-point stimulation." },
                    { phase: "Integration", detail: "Pairing with Abhyanga or recovery work." },
                ],
                idealFor: "Ayurvedic integration and subtle recovery",
                duration: "Series within a programme",
                faqs: [
                    { q: "What is marma therapy?", a: "Ayurvedic stimulation of the body's 107 vital points to release blockages and rebalance — practitioner-led within a programme." },
                    { q: "Does it pair with Abhyanga?", a: "Yes — it is commonly integrated with Abhyanga and broader Ayurvedic care." },
                ],
                relatedDestinations: [KERALA, WELLNESS_HUB],
            },
            {
                slug: "hot-stone",
                name: "Hot-Stone Therapy",
                answer:
                    "Hot-stone therapy uses heated basalt stones with massage to deepen muscular release and circulation. MyTripMyTravel arranges it as a deep-relaxation and travel-recovery modality with master therapists in luxury sanctuary settings.",
                intro: [
                    "Heat extends what massage can reach — hot-stone work penetrates muscular tension more deeply with less surface pressure.",
                    "We arrange it in luxury sanctuary settings as a decompression or recovery therapy.",
                ],
                benefits: ["Deep muscular release via heat", "Circulatory support", "Profound relaxation"],
                protocol: [
                    { phase: "Intake", detail: "Heat-tolerance and preference consultation." },
                    { phase: "Session", detail: "Heated-stone integrated massage." },
                    { phase: "Rest", detail: "Hydration and quiet integration." },
                ],
                idealFor: "Deep relaxation and travel recovery",
                duration: "Single or series",
                faqs: [
                    { q: "Is hot-stone safe for everyone?", a: "We screen for heat-sensitive conditions and adapt; it is not recommended in certain medical situations, which we check first." },
                    { q: "How is it different from Swedish?", a: "Heat allows deeper muscular release with less mechanical pressure — a deeper relaxation effect." },
                ],
                relatedDestinations: [WELLNESS_HUB],
            },
        ],
    },
];

// ---- Accessors ----

export function getProgramme(slug: string): WellnessProgramme | undefined {
    return programmes.find((p) => p.slug === slug);
}

export function getVariant(
    programmeSlug: string,
    variantSlug: string
): { programme: WellnessProgramme; variant: WellnessVariant } | null {
    const programme = getProgramme(programmeSlug);
    if (!programme) return null;
    const variant = programme.variants.find((v) => v.slug === variantSlug);
    if (!variant) return null;
    return { programme, variant };
}

export function getProgrammeVariantParams(
    programmeSlug: string
): { variant: string }[] {
    const programme = getProgramme(programmeSlug);
    if (!programme) return [];
    return programme.variants.map((v) => ({ variant: v.slug }));
}

export function getAllWellnessPaths(): { programme: string; variant: string }[] {
    return programmes.flatMap((p) =>
        p.variants.map((v) => ({ programme: p.slug, variant: v.slug }))
    );
}
