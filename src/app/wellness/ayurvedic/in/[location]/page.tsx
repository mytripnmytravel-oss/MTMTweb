import type { Metadata } from "next";
import { getLocationParams } from "@/data/wellnessFacets";
import { wellnessLocationMetadata, WellnessLocationRoute } from "@/lib/wellnessFacetPage";

const PROGRAMME = "ayurvedic";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ location: string }>;
}): Promise<Metadata> {
    const { location } = await params;
    return wellnessLocationMetadata(PROGRAMME, location);
}

export default async function Page({
    params,
}: {
    params: Promise<{ location: string }>;
}) {
    const { location } = await params;
    return <WellnessLocationRoute programmeSlug={PROGRAMME} citySlug={location} />;
}
