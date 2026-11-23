import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import {
    GT_THEMES,
    GT_DURATIONS,
    MONTHS,
    ORIGINS,
    variantHref,
    comboValue,
    gtPackages,
    fromPrice,
} from "@/data/tourVariants";
import { slugify } from "@/data/tours";
import GoldenTriangleHubView from "@/components/tours/GoldenTriangleHubView";

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

export const metadata: Metadata = {
    title: "Golden Triangle Tour Packages: Price, Duration & Dates",
    description:
        `Golden Triangle tour packages from ${fromPrice(gtPackages())} per person. Compare by nights, theme, month and departure city, India or overseas.`,
    alternates: { canonical: `${SITE_URL}/tours/golden-triangle` },
    openGraph: {
        title: "Golden Triangle Tour Packages | MyTripMyTravel",
        description: "Delhi, Agra and Jaipur packages by nights, theme, month and departure city.",
        url: `${SITE_URL}/tours/golden-triangle`,
        type: "website",
    },
};

export default function GoldenTriangleHubPage() {
    const byTheme = GT_THEMES.map((t) => ({
        label: t,
        href: variantHref("by-theme", slugify(t)),
    }));
    const byDuration = GT_DURATIONS.map((d) => ({
        label: d.replace("-day", "-Day"),
        href: variantHref("by-duration", d),
    }));
    const byMonth = MONTHS.map((m) => ({
        label: titleCase(m),
        href: variantHref("in-month", m),
    }));
    const byOrigin = ORIGINS.map((o) => ({
        label: o.city,
        href: variantHref("from-origin", o.slug),
    }));
    const gt = gtPackages();
    const dayCount = (s: string) => Number.parseInt(s, 10) || 0;
    const byCombo: { label: string; href: string }[] = [];
    for (const t of GT_THEMES) {
        for (const d of GT_DURATIONS) {
            const days = Number.parseInt(d, 10);
            if (gt.some((p) => dayCount(p.duration) === days && p.theme === t)) {
                byCombo.push({
                    label: `${days}-Day ${t}`,
                    href: variantHref("combo", comboValue(days, t)),
                });
            }
        }
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "CollectionPage", name: "Golden Triangle Tour Packages", url: `${SITE_URL}/tours/golden-triangle` },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tours` },
                    { "@type": "ListItem", position: 3, name: "Golden Triangle", item: `${SITE_URL}/tours/golden-triangle` },
                ],
            },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <GoldenTriangleHubView byTheme={byTheme} byDuration={byDuration} byMonth={byMonth} byOrigin={byOrigin} byCombo={byCombo} />
        </>
    );
}
