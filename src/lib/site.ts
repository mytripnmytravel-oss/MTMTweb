// Single source of truth for site identity. Matches the live canonical
// host (www) used across all per-page canonicals and JSON-LD.

export const SITE_URL = "https://www.mytripmytravel.com";

export const SITE_NAME = "MyTripMyTravel";

export const ORGANIZATION = {
    name: "MyTripMyTravel",
    legalName: "MyTripMyTravel",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
        "Luxury inbound India travel architect — Golden Triangle, Rajasthan, Kerala, Himalayas, Sikkim and the Andamans. Chauffeured, escorted, sequenced for the light.",
    telephone: "+91-99978-12237",
    email: "info@mytripmytravel.com",
    address: {
        street: "House Number 80, Ansal Town, Block C",
        locality: "Agra",
        region: "Uttar Pradesh",
        postalCode: "283125",
        country: "IN",
    },
    sameAs: [
        "https://instagram.com/mytripmytravel",
        "https://facebook.com/mytripmytravel.worldtouradvisor",
    ],
};
