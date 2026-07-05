import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramme } from "@/data/wellness";
import { wellnessProgrammeMetadata, wellnessProgrammeJsonLd } from "@/lib/wellnessProgrammePage";
import YogaSoulView from "./YogaSoulView";

export function generateMetadata(): Metadata {
    return wellnessProgrammeMetadata("yoga-soul");
}

export default function YogaSoulPage() {
    const programme = getProgramme("yoga-soul");
    if (!programme) notFound();
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(wellnessProgrammeJsonLd("yoga-soul")) }}
            />
            <YogaSoulView programme={programme} />
        </>
    );
}
