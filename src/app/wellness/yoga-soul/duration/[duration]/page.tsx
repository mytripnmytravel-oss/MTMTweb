import type { Metadata } from "next";
import { getDurationParams } from "@/data/wellnessFacets";
import { wellnessDurationMetadata, WellnessDurationRoute } from "@/lib/wellnessFacetPage";

const PROGRAMME = "yoga-soul";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ duration: string }>;
}): Promise<Metadata> {
    const { duration } = await params;
    return wellnessDurationMetadata(PROGRAMME, duration);
}

export default async function Page({
    params,
}: {
    params: Promise<{ duration: string }>;
}) {
    const { duration } = await params;
    return <WellnessDurationRoute programmeSlug={PROGRAMME} durationSlug={duration} />;
}
