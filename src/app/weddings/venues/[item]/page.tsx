import type { Metadata } from "next";
import { getWeddingCategoryParams } from "@/data/weddings";
import { weddingItemMetadata, WeddingItemRoute } from "@/lib/weddingPage";

const CATEGORY = "venues";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ item: string }>;
}): Promise<Metadata> {
    const { item } = await params;
    return weddingItemMetadata(CATEGORY, item);
}

export default async function Page({
    params,
}: {
    params: Promise<{ item: string }>;
}) {
    const { item } = await params;
    return <WeddingItemRoute categorySlug={CATEGORY} itemSlug={item} />;
}
