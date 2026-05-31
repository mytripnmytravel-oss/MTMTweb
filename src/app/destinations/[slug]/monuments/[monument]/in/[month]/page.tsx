import type { Metadata } from "next";
import {
    getMonumentMonthStaticParams,
    monumentMonthMetadata,
    MonumentMonthRoute,
} from "@/lib/monumentMonthPage";

export function generateStaticParams() {
    return getMonumentMonthStaticParams();
}

export const dynamicParams = true;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string; monument: string; month: string }>;
}): Promise<Metadata> {
    const { slug, monument, month } = await params;
    return monumentMonthMetadata(slug, monument, month);
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string; monument: string; month: string }>;
}) {
    const { slug, monument, month } = await params;
    return <MonumentMonthRoute citySlug={slug} monumentSlug={monument} monthSlug={month} />;
}
