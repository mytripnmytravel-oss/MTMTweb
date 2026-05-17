import type { Metadata } from "next";
import { getAllGuideCityParams } from "@/data/expertGuides";
import { guideCityMetadata, GuideCityRoute } from "@/lib/expertGuidePage";

export function generateStaticParams() {
    return getAllGuideCityParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    return guideCityMetadata(city);
}

export default async function Page({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    return <GuideCityRoute citySlug={city} />;
}
