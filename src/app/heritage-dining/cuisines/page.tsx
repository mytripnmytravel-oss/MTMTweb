import type { Metadata } from "next";
import { diningCategoryMetadata, DiningCategoryRoute } from "@/lib/heritageDiningPage";

export async function generateMetadata(): Promise<Metadata> {
    return diningCategoryMetadata("cuisines");
}

export default function Page() {
    return <DiningCategoryRoute slug="cuisines" />;
}
