# Hosting: static export on Cloudflare (free tier)

The site is a **static export** (`output: "export"` in `next.config.ts`) served as
Cloudflare Workers static assets. There is no server rendering and no Worker
script, so serving costs nothing: asset requests are free and unlimited.

## Why it moved

Every `generateStaticParams()` used to return `[]` with `dynamicParams = true`,
so all ~50,000 URLs rendered on demand. Each cold URL a crawler hit cost a
serverless render, which exhausted the previous host's quota; the project was
disabled (`402 DEPLOYMENT_DISABLED`) and the site went down.

## Build and deploy

```bash
npm run build                              # writes ./out
find out -name '__next.*' -type f -delete  # drop per-segment prefetch files
find out -type d -empty -delete
npx wrangler deploy                        # uploads ./out
```

The `find` step matters. Next 16 emits ~10 per-page `__next.*.txt` segment
prefetch files, which pushes the export to ~94,000 files. Deleting them leaves
~17,000 and costs only client-side prefetch granularity (navigation still works
via each route's `.txt` payload).

### Free-tier file budget

Cloudflare's free plan allows **20,000 files** per Worker version (100,000 on
paid). Current build: **8,431 pages / 17,008 files**, so there is ~17% headroom.
Two files ship per page (`.html` + `.txt`), so the ceiling is ~9,900 pages. If
you approach it, prune pages, do not switch plans silently.

### What gets built

`lib/seoFocus.ts` is the gate. Only the focus set is built, matching the 8,140
URLs in the sitemap, plus a small noindexed tail (city hubs, all region pages)
that the nav and prose link to. The deep combinatorial tails that were never in
the sitemap are not built at all: the corporate route matrix, non-core region
tour variants, and the wellness location/origin/month/duration combos.

Because nothing renders on demand any more, **any URL not built is a 404**. When
adding links, link only to pages that are built, or the static build will have
dead links. To check:

```bash
# every internal href must resolve to a file in ./out
```
See the link audit in git history (commit "Host as a static export on
Cloudflare free tier") — it verified 0 broken internal links across 8,431 pages.

## Live URL

https://mytripmytravel.workajsal.workers.dev

## Attaching mytripmytravel.com (NOT done yet)

The domain is still on **GoDaddy nameservers** (`ns75/ns76.domaincontrol.com`)
pointing at the old host, so it still serves the 402 error page. To attach it,
the zone has to move to Cloudflare:

1. Add `mytripmytravel.com` as a site in Cloudflare (Free plan).
2. **Recreate the records below before switching** — Cloudflare's scan usually
   imports them, but verify each one.
3. At GoDaddy, replace the nameservers with the two Cloudflare gives you.
4. Workers > `mytripmytravel` > Settings > Domains & Routes > add custom domain
   for both `mytripmytravel.com` and `www.mytripmytravel.com`.

### Records that MUST survive the move

Email is live on Hostinger. Losing these breaks mail on the domain.

| Type  | Name           | Value                                            |
|-------|----------------|--------------------------------------------------|
| MX    | @              | `mx1.hostinger.com` (priority 5)                 |
| MX    | @              | `mx2.hostinger.com` (priority 10)                |
| TXT   | @              | `v=spf1 include:_spf.mail.hostinger.com ~all`    |
| TXT   | @              | `google-site-verification=WYUlUIEF4ExjfPt5fA5sSRy9GqL2FyeHwgZlRvfY4eM` |
| CNAME | autodiscover   | `autodiscover.mail.hostinger.com`                |

Dropping the `google-site-verification` TXT also drops Search Console access.

After the cutover, resubmit `https://mytripmytravel.com/sitemap.xml` in Search
Console. Expect Google to drop the ~42,000 URLs that are no longer built; they
were already `noindex` and absent from the sitemap, so impact should be minimal.
