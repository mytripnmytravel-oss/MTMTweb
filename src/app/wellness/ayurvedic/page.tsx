import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramme } from "@/data/wellness";
import { wellnessProgrammeMetadata, wellnessProgrammeJsonLd } from "@/lib/wellnessProgrammePage";
import AyurvedicView from "./AyurvedicView";

export function generateMetadata(): Metadata {
    return wellnessProgrammeMetadata("ayurvedic");
}

export default function AyurvedicPage() {
    const programme = getProgramme("ayurvedic");
    if (!programme) notFound();
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(wellnessProgrammeJsonLd("ayurvedic")) }}
            />
            <AyurvedicView programme={programme} />
        </>
    );
}
