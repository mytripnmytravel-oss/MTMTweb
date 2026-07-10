import type { Metadata } from "next";
import { getAllSubVariantLocationParams } from "@/data/wellnessSubVariantLocations";
import {
    subVariantLocationMetadata,
    SubVariantLocationRoute,
} from "@/lib/wellnessSubVariantLocationPage";

const PROGRAMME = "orthopedic";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ variant: string; location: string }>;
}): Promise<Metadata> {
    const { variant, location } = await params;
    return subVariantLocationMetadata(PROGRAMME, variant, location);
}

export default async function Page({
    params,
}: {
    params: Promise<{ variant: string; location: string }>;
}) {
    const { variant, location } = await params;
    return (
        <SubVariantLocationRoute
            programmeSlug={PROGRAMME}
            variantSlug={variant}
            locationSlug={location}
        />
    );
}
