import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import HomeView from "./HomeView";
import { pageTitle } from "@/lib/meta";

const title = pageTitle("Luxury India Travel: Golden Triangle & Rajasthan");
const description =
    "Golden Triangle tour packages from ₹24,800 per person, plus Rajasthan, Kerala and Himalayan journeys. Private, chauffeured, with your own guide.";

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
