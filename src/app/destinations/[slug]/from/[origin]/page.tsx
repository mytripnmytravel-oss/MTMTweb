import type { Metadata } from "next";
import { coreParams } from "@/lib/seoFocus";
import {
    getDestinationOriginStaticParams,
    destinationOriginMetadata,
    DestinationOriginRoute,
} from "@/lib/destinationOriginPage";

export function generateStaticParams() {
    return coreParams(getDestinationOriginStaticParams(), "slug");
}

export const dynamicParams = false;
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
