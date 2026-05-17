import type { Metadata } from "next";
import { getAllGuideParams } from "@/data/expertGuides";
import { guideMetadata, GuideRoute } from "@/lib/expertGuidePage";

export function generateStaticParams() {
    return getAllGuideParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string; language: string }>;
}): Promise<Metadata> {
    const { city, language } = await params;
    return guideMetadata(city, language);
}

export default async function Page({
    params,
}: {
    params: Promise<{ city: string; language: string }>;
}) {
    const { city, language } = await params;
    return <GuideRoute citySlug={city} langSlug={language} />;
}
