import type { Metadata } from "next";
import { getDiningCategoryParams } from "@/data/heritageDining";
import { diningItemMetadata, DiningItemRoute } from "@/lib/heritageDiningPage";

const CATEGORY = "cuisines";

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
    return diningItemMetadata(CATEGORY, item);
}

export default async function Page({
    params,
}: {
    params: Promise<{ item: string }>;
}) {
    const { item } = await params;
    return <DiningItemRoute categorySlug={CATEGORY} itemSlug={item} />;
}
