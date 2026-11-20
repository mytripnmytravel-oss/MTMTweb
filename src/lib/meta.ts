/**
 * Meta description helper.
 *
 * Google renders roughly 155-160 characters of a description on desktop and
 * less on mobile; AI surfaces (AI Overview, Perplexity, ChatGPT search) also
 * prefer a tight, self-contained summary. Every programmatic route used to do
 * `content.answer.slice(0, 300)`, which produced 8,041 pages with descriptions
 * that were truncated mid-sentence in the SERP.
 *
 * `metaDescription` trims to a clean boundary under the limit:
 *  1. if a sentence ends inside the window, cut there (best: a complete thought)
 *  2. otherwise cut at the last word boundary and add an ellipsis
 *
 * It never cuts mid-word and never emits a dangling separator.
 */

const MAX = 155;
/** Don't accept a sentence break shorter than this -- too terse to be useful. */
const MIN_SENTENCE = 90;

export function metaDescription(text: string, max: number = MAX): string {
    const clean = text.replace(/\s+/g, " ").trim();
    if (clean.length <= max) return clean;

    const window = clean.slice(0, max + 1);

    // 1. Prefer a complete sentence.
    const sentenceEnd = Math.max(
        window.lastIndexOf(". "),
        window.lastIndexOf("? "),
        window.lastIndexOf("! "),
    );
    if (sentenceEnd >= MIN_SENTENCE) return clean.slice(0, sentenceEnd + 1);

    // A sentence that ends exactly at the limit has no trailing space.
    if (/[.?!]$/.test(window.slice(0, max)) && max >= MIN_SENTENCE) {
        return clean.slice(0, max);
    }

    // 2. Fall back to a word boundary. Use a window one char shorter than the
    // limit so the appended ellipsis still leaves the result within `max`.
    const lastSpace = clean.slice(0, max).lastIndexOf(" ");
    const cut = lastSpace > 0 ? lastSpace : max;
    return clean.slice(0, cut).replace(/[\s,;:\u2014\u2013-]+$/, "") + "…";
}

/** The brand suffix every page title carries when there is room for it. */
const BRAND = "MyTripMyTravel";
/** Google truncates desktop titles at roughly this width. */
const TITLE_MAX = 60;

/**
 * Build a page title, keeping the brand suffix only when it fits.
 *
 * Every route used to hardcode `` `${h1} | MyTripMyTravel` ``, which pushed
 * 1,435 pages past the ~60-character SERP limit -- so the brand was cut off
 * anyway, and on the worst pages (96 characters) real keywords went with it.
 *
 * Titles are never truncated here: a title cut mid-phrase reads as broken, and
 * Google rewrites over-long titles rather than hard-truncating them. When the
 * subject alone needs the whole budget, the subject wins and the brand is
 * dropped -- Google already shows the site name beside the result.
 */
export function pageTitle(core: string, brand: string = BRAND): string {
    // Strip a brand suffix the caller already added, so wrapping an existing
    // title is idempotent and never yields "... | Brand | Brand".
    const clean = core
        .replace(/\s+/g, " ")
        .trim()
        .replace(new RegExp(`\\s*[|\u00b7\u2013\u2014-]\\s*${brand}\\s*$`), "")
        .trim();
    const withBrand = `${clean} | ${brand}`;
    return withBrand.length <= TITLE_MAX ? withBrand : clean;
}
