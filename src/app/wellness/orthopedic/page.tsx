import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramme } from "@/data/wellness";
import { wellnessProgrammeMetadata, wellnessProgrammeJsonLd } from "@/lib/wellnessProgrammePage";
import OrthopedicView from "./OrthopedicView";

export function generateMetadata(): Metadata {
    return wellnessProgrammeMetadata("orthopedic");
}

export default function OrthopedicPage() {
    const programme = getProgramme("orthopedic");
    if (!programme) notFound();
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(wellnessProgrammeJsonLd("orthopedic")) }}
            />
            <OrthopedicView programme={programme} />
        </>
    );
}
