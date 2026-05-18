import type { Metadata } from "next";
import { diningCategoryMetadata, DiningCategoryRoute } from "@/lib/heritageDiningPage";

export async function generateMetadata(): Promise<Metadata> {
    return diningCategoryMetadata("experiences");
}

export default function Page() {
    return <DiningCategoryRoute slug="experiences" />;
}
