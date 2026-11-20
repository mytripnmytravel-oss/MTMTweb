import Script from "next/script";
import { GA_ID, analyticsEnabled } from "@/lib/analytics";

/**
 * GA4 tag.
 *
 * Renders nothing unless `NEXT_PUBLIC_GA_ID` was set at build time, so local
 * builds and previews stay out of the property's data.
 *
 * `afterInteractive` keeps the tag off the critical path: it loads once the
 * page is usable, which matters here because the pages are content-heavy and
 * Core Web Vitals are a ranking input. No consent gate is wired yet -- if the
 * site starts serving EU traffic at volume, this is where a CMP would sit, and
 * `/legal/cookies` should be updated to match whatever is decided.
 */
export default function Analytics() {
    if (!analyticsEnabled) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
        </>
    );
}
