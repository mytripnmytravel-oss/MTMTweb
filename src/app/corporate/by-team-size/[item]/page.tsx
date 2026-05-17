import type { Metadata } from "next";
import { getCorporateCategoryParams } from "@/data/corporate";
import { corporateItemMetadata, CorporateItemRoute } from "@/lib/corporatePage";

const CATEGORY = "by-team-size";

export function generateStaticParams() {
    return getCorporateCategoryParams(CATEGORY);
}

export const dynamicParams = true;

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
