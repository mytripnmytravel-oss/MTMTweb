import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramme } from "@/data/wellness";
import { wellnessProgrammeMetadata, wellnessProgrammeJsonLd } from "@/lib/wellnessProgrammePage";
import MassageView from "./MassageView";

export function generateMetadata(): Metadata {
    return wellnessProgrammeMetadata("massage");
}

export default function MassagePage() {
    const programme = getProgramme("massage");
    if (!programme) notFound();
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(wellnessProgrammeJsonLd("massage")) }}
            />
            <MassageView programme={programme} />
        </>
    );
}
