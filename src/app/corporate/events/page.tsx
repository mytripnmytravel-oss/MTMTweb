import type { Metadata } from "next";
import { corporateCategoryMetadata, CorporateCategoryRoute } from "@/lib/corporatePage";

export async function generateMetadata(): Promise<Metadata> {
    return corporateCategoryMetadata("events");
}

export default function Page() {
    return <CorporateCategoryRoute slug="events" />;
}
