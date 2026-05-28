import type { Metadata } from "next";
import { getMonthParams } from "@/data/wellnessMonths";
import { wellnessMonthMetadata, WellnessMonthRoute } from "@/lib/wellnessFacetPage";

const PROGRAMME = "orthopedic";

export function generateStaticParams() {
    return getMonthParams(PROGRAMME);
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ month: string }>;
}): Promise<Metadata> {
    const { month } = await params;
    return wellnessMonthMetadata(PROGRAMME, month);
}

export default async function Page({
    params,
}: {
    params: Promise<{ month: string }>;
}) {
    const { month } = await params;
    return <WellnessMonthRoute programmeSlug={PROGRAMME} monthSlug={month} />;
}
