import type { Metadata } from "next";
import {
    getRegionVariantStaticParams,
    regionVariantMetadata,
    RegionVariantRoute,
} from "@/lib/regionVariantPage";

const REGION = "andaman";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ dimension: string; value: string }>;
}): Promise<Metadata> {
    const { dimension, value } = await params;
    return regionVariantMetadata(REGION, dimension, value);
}

export default async function Page({
    params,
}: {
    params: Promise<{ dimension: string; value: string }>;
}) {
    const { dimension, value } = await params;
    return <RegionVariantRoute regionSlug={REGION} dimension={dimension} value={value} />;
}
