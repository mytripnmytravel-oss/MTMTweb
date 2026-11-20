/**
 * Analytics plumbing.
 *
 * Until now the site had no measurement of any kind: no GA4, no GTM, no event
 * tracking anywhere in `src/`. With 8,140 indexable pages and no data, there
 * was no way to tell which pages earn impressions, which earn enquiries, or
 * whether any of the programmatic engines pay for themselves. That made every
 * other SEO decision guesswork, which is why this is wired before any further
 * content work.
 *
 * GA4 is loaded only when `NEXT_PUBLIC_GA_ID` is set at build time. The site is
 * a static export, so the value is inlined into the HTML at build -- changing
 * it needs a rebuild, not just an env change on the host.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

/** True when a measurement ID was present at build time. */
export const analyticsEnabled = GA_ID.length > 0;

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
    interface Window {
        gtag?: (command: string, ...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

/**
 * Send a GA4 event. Safe to call anywhere: it no-ops during SSG, when the tag
 * is absent, and when a visitor's blocker has stopped the script loading, so
 * callers never need to guard it.
 */
export function track(event: string, params: GtagParams = {}): void {
    if (typeof window === "undefined") return;
    try {
        window.gtag?.("event", event, params);
    } catch {
        // Never let measurement break a user action -- especially not a lead form.
    }
}

/**
 * A completed enquiry. `generate_lead` is GA4's standard lead event, so it maps
 * straight onto a conversion in the UI without custom configuration.
 */
export function trackLead(source: string, extra: GtagParams = {}): void {
    track("generate_lead", { lead_source: source, ...extra });
}

/** An outbound contact click: WhatsApp, phone or email. */
export function trackContact(
    channel: "whatsapp" | "phone" | "email",
    source: string,
): void {
    track("contact_click", { contact_channel: channel, lead_source: source });
}
