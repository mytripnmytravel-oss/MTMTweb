import type { Metadata } from "next";
import { getProgrammeVariantParams } from "@/data/wellness";
import { wellnessMetadata, WellnessVariantRoute } from "@/lib/wellnessPage";

const PROGRAMME = "yoga-soul";

export function generateStaticParams() {
    return getProgrammeVariantParams(PROGRAMME);
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ variant: string }>;
}): Promise<Metadata> {
    const { variant } = await params;
    return wellnessMetadata(PROGRAMME, variant);
}

export default async function Page({
    params,
}: {
    params: Promise<{ variant: string }>;
}) {
    const { variant } = await params;
    return <WellnessVariantRoute programmeSlug={PROGRAMME} variantSlug={variant} />;
}
