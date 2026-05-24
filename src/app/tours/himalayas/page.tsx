import type { Metadata } from "next";
import { regionalTourHubMetadata, RegionalTourHubRoute } from "@/lib/regionTourHubPage";

export async function generateMetadata(): Promise<Metadata> {
    return regionalTourHubMetadata("himalayas");
}

export default function Page() {
    return <RegionalTourHubRoute slug="himalayas" />;
}
