import type { Metadata } from "next";
import { getAllServiceCityParams } from "@/data/services";
import { serviceCityMetadata, ServiceCityRoute } from "@/lib/serviceCityPage";

const LINE = "car-rental" as const;

export function generateStaticParams() {
    return [];
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    return serviceCityMetadata(LINE, city);
}

export default async function Page({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    return <ServiceCityRoute line={LINE} citySlug={city} />;
}
