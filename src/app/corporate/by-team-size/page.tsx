import type { Metadata } from "next";
import { corporateCategoryMetadata, CorporateCategoryRoute } from "@/lib/corporatePage";

export async function generateMetadata(): Promise<Metadata> {
    return corporateCategoryMetadata("by-team-size");
}

export default function Page() {
    return <CorporateCategoryRoute slug="by-team-size" />;
}
