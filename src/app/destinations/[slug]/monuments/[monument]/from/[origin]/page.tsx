import type { Metadata } from "next";
import {
    getMonumentOriginStaticParams,
    monumentOriginMetadata,
    MonumentOriginRoute,
} from "@/lib/monumentOriginPage";

export function generateStaticParams() {
    return getMonumentOriginStaticParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; monument: string; origin: string }>;
}): Promise<Metadata> {
    const { slug, monument, origin } = await params;
    return monumentOriginMetadata(slug, monument, origin);
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string; monument: string; origin: string }>;
}) {
    const { slug, monument, origin } = await params;
    return <MonumentOriginRoute citySlug={slug} monumentSlug={monument} originSlug={origin} />;
}
