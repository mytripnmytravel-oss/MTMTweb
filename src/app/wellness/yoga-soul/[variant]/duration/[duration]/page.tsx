import type { Metadata } from "next";
import { getAllSubVariantDurationParams } from "@/data/wellnessSubVariantDurations";
import {
    subVariantDurationMetadata,
    SubVariantDurationRoute,
} from "@/lib/wellnessSubVariantDurationPage";

const PROGRAMME = "yoga-soul";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ variant: string; duration: string }>;
}): Promise<Metadata> {
    const { variant, duration } = await params;
    return subVariantDurationMetadata(PROGRAMME, variant, duration);
}

export default async function Page({
    params,
}: {
    params: Promise<{ variant: string; duration: string }>;
}) {
    const { variant, duration } = await params;
    return (
        <SubVariantDurationRoute
            programmeSlug={PROGRAMME}
            variantSlug={variant}
            durationSlug={duration}
        />
    );
}
