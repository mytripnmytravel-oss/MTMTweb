import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import HomeView from "./HomeView";

const title = "MyTripMyTravel, Luxury India Travel: Golden Triangle, Rajasthan, Kerala";
const description =
    "Bespoke luxury India travel, chauffeured Golden Triangle tours plus Rajasthan, Kerala and Himalayan journeys with private guides and elite fleet. Enquire now.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: SITE_URL },
    openGraph: {
        title,
        description,
        url: SITE_URL,
        type: "website",
        images: [{ url: "/hero-taj.png" }],
    },
};

export default function HomePage() {
    return <HomeView />;
}
