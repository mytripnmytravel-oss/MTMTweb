import type { Metadata } from "next";
import { ORIGINS } from "@/data/wellnessOrigins";
import { wellnessOriginMetadata, WellnessOriginRoute } from "@/lib/wellnessOriginPage";

const PROGRAMME = "orthopedic";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ origin: string }>;
}): Promise<Metadata> {
    const { origin } = await params;
    return wellnessOriginMetadata(PROGRAMME, origin);
}

export default async function Page({
    params,
}: {
    params: Promise<{ origin: string }>;
}) {
    const { origin } = await params;
    return <WellnessOriginRoute programmeSlug={PROGRAMME} originSlug={origin} />;
}
