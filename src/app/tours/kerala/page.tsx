import type { Metadata } from "next";
import { regionalTourHubMetadata, RegionalTourHubRoute } from "@/lib/regionTourHubPage";

export async function generateMetadata(): Promise<Metadata> {
    return regionalTourHubMetadata("kerala");
}

export default function Page() {
    return <RegionalTourHubRoute slug="kerala" />;
}
