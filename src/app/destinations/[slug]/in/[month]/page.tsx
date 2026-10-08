import type { Metadata } from "next";
import { coreParams } from "@/lib/seoFocus";
import {
    getDestinationMonthStaticParams,
    destinationMonthMetadata,
    DestinationMonthRoute,
} from "@/lib/destinationMonthPage";

export function generateStaticParams() {
    return coreParams(getDestinationMonthStaticParams(), "slug");
}

export const dynamicParams = false;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; month: string }>;
}): Promise<Metadata> {
    const { slug, month } = await params;
    return destinationMonthMetadata(slug, month);
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string; month: string }>;
}) {
    const { slug, month } = await params;
    return <DestinationMonthRoute citySlug={slug} monthSlug={month} />;
}
