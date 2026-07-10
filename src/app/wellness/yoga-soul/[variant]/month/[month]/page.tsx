import type { Metadata } from "next";
import { getAllSubVariantMonthParams } from "@/data/wellnessSubVariantMonths";
import {
    subVariantMonthMetadata,
    SubVariantMonthRoute,
} from "@/lib/wellnessSubVariantMonthPage";

const PROGRAMME = "yoga-soul";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ variant: string; month: string }>;
}): Promise<Metadata> {
    const { variant, month } = await params;
    return subVariantMonthMetadata(PROGRAMME, variant, month);
}

export default async function Page({
    params,
}: {
    params: Promise<{ variant: string; month: string }>;
}) {
    const { variant, month } = await params;
    return (
        <SubVariantMonthRoute
            programmeSlug={PROGRAMME}
            variantSlug={variant}
            monthSlug={month}
        />
    );
}
