import type { Metadata } from "next";
import {
    getDestinationOriginStaticParams,
    destinationOriginMetadata,
    DestinationOriginRoute,
} from "@/lib/destinationOriginPage";

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; origin: string }>;
}): Promise<Metadata> {
    const { slug, origin } = await params;
    return destinationOriginMetadata(slug, origin);
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string; origin: string }>;
}) {
    const { slug, origin } = await params;
    return <DestinationOriginRoute citySlug={slug} originSlug={origin} />;
}
