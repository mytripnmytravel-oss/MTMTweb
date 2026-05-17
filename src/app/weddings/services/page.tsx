import type { Metadata } from "next";
import { weddingCategoryMetadata, WeddingCategoryRoute } from "@/lib/weddingPage";

export async function generateMetadata(): Promise<Metadata> {
    return weddingCategoryMetadata("services");
}

export default function Page() {
    return <WeddingCategoryRoute slug="services" />;
}
