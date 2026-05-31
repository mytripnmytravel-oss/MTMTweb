import type { Metadata } from "next";
import { getAllSubVariantOriginParams } from "@/data/wellnessSubVariantOrigins";
import {
    subVariantOriginMetadata,
    SubVariantOriginRoute,
} from "@/lib/wellnessSubVariantOriginPage";

const PROGRAMME = "yoga-soul";

export function generateStaticParams() {
    return getAllSubVariantOriginParams(PROGRAMME);
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ variant: string; origin: string }>;
}): Promise<Metadata> {
    const { variant, origin } = await params;
    return subVariantOriginMetadata(PROGRAMME, variant, origin);
}

export default async function Page({
    params,
}: {
    params: Promise<{ variant: string; origin: string }>;
}) {
    const { variant, origin } = await params;
    return (
        <SubVariantOriginRoute
            programmeSlug={PROGRAMME}
            variantSlug={variant}
            originSlug={origin}
        />
    );
}
