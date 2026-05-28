import type { Metadata } from "next";
import {
    getDestinationMonthStaticParams,
    destinationMonthMetadata,
    DestinationMonthRoute,
} from "@/lib/destinationMonthPage";

export function generateStaticParams() {
    return getDestinationMonthStaticParams();
}

export const dynamicParams = true;

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
