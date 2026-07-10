import type { Metadata } from "next";
import { getCorporateCategoryParams } from "@/data/corporate";
import { corporateItemMetadata, CorporateItemRoute } from "@/lib/corporatePage";

const CATEGORY = "events";

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
    return corporateItemMetadata(CATEGORY, item);
}

export default async function Page({
    params,
}: {
    params: Promise<{ item: string }>;
}) {
    const { item } = await params;
    return <CorporateItemRoute categorySlug={CATEGORY} itemSlug={item} />;
}
