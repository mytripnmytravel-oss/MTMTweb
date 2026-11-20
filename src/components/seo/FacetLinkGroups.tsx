import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { VariantLinkGroup } from "@/lib/variantLinks";

/**
 * Grouped internal-link block, rendered as headed rows of pill links.
 *
 * Replaces the old single flat `siblings` row. The flat row had two problems:
 * it was unlabelled (a wall of 696 city names on a `month-from` page told a
 * reader nothing), and it only ever pointed sideways, never up or down the
 * facet tree -- which is what left 6,851 pages unreachable from the homepage.
 *
 * Headings double as useful on-page text: "From London, by month" is a real
 * sub-topic label, so the block reads as navigation rather than a link dump.
 * Renders plain anchors with no interactivity, so every link lands in the
 * static HTML where a crawler can follow it.
 */
export default function FacetLinkGroups({
    groups,
    eyebrow,
    trailing,
}: {
    groups: VariantLinkGroup[];
    eyebrow: string;
    /** Optional extra link appended to the last group, e.g. a hub cross-link. */
    trailing?: { label: string; href: string };
}) {
    if (!groups.length && !trailing) return null;

    return (
        <section className="section">
            <div className="container-x">
                <p className="eyebrow eyebrow-accent">{eyebrow}</p>

                <div className="mt-8 space-y-9">
                    {groups.map((g) => (
                        <div key={g.heading}>
                            <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-stone">
                                {g.heading}
                            </h2>
                            <div className="mt-3.5 flex flex-wrap gap-2.5">
                                {g.links.map((l) => (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink hover:text-clay"
                                    >
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {trailing && (
                    <div className="mt-9">
                        <Link href={trailing.href} className="btn-outline btn-sm">
                            {trailing.label} <ArrowRight size={14} />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
