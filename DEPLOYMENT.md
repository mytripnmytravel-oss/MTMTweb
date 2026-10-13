# Deployment

The site is a **static export** (`output: "export"` in `next.config.ts`): no server
rendering, no ISR, no serverless functions. `npm run build` writes plain HTML to
`./out` and the host just serves files.

**Host: Cloudflare Workers static assets, free plan.**
Worker `mytripmytravel`, account `workajsal@gmail.com`.
Current URL: `https://mytripmytravel.workajsal.workers.dev`

Canonical hostname is **`https://www.mytripmytravel.com`** (`src/lib/site.ts`), so
the apex must redirect to `www`.

## Why the site is a static export

Every one of the 74 `generateStaticParams()` used to return `[]` with
`dynamicParams = true`, so all ~50,000 URLs rendered **on demand** — each cold URL
a crawler hit cost a serverless render. That exhausted the previous host's limits
(Vercel Hobby, the client's account), which pauses rather than bills, so the
project went `402 DEPLOYMENT_DISABLED` and the whole site went down.

Only 8,140 of those 50,118 pages were ever in the sitemap.

## Build and deploy

```bash
npm run build                                # 8,431 pages, ~20s of generation
find out -name '__next.*' -type f -delete    # REQUIRED, see below
find out -type d -empty -delete
npx wrangler deploy                          # uploads ./out (~4 min)
```

The prune step is **not optional on Cloudflare.** Next 16 emits ~10 per-page
`__next.*.txt` segment prefetch files, which takes the export to ~94,000 files.
The free plan allows **20,000 files** per Worker version. Pruning leaves ~17,000
and costs only client-side prefetch granularity; navigation still works via each
route's `.txt` payload.

### Free-plan file budget

| | |
|---|---|
| Free cap | **20,000 files** per Worker version (100,000 on Workers Paid) |
| Current build | 8,431 pages / **17,008 files** |
| Headroom | ~12% |
| Page ceiling | ~9,900 pages (2 files ship per page) |

The ~39,000 multilingual pages on the roadmap will **not** fit the free plan. That
is a Workers Paid ($5/mo) decision, not something to discover at deploy time.

## What gets built

`lib/seoFocus.ts` is the gate. Only the focus set is built — the 8,140 sitemap
URLs plus a small noindexed tail (city hubs, all region pages) that the nav and
prose link to. The deep combinatorial tails that were never in the sitemap are not
built: the corporate route matrix, non-core region tour variants, and the wellness
location/origin/month/duration combos.

Since nothing renders on demand any more, **any URL not built is a 404.** When
adding links, link only to pages that are built. The commit "Host as a static
export on Cloudflare free tier" verified 0 broken internal links across all 8,431
pages; re-run that audit after adding routes.

> **Do not add a blanket `X-Robots-Tag: noindex` to `public/_headers`.** An earlier
> revision had one, from when Cloudflare was only a standby copy behind Vercel.
> Cloudflare is now the primary host — that header would deindex the live site.

## Domain cutover (outstanding)

The domain still resolves to the old host, which serves `402`, so the site is down
on `mytripmytravel.com` until these are done. Nothing here is reversible by code.

**A partial/CNAME zone setup — which would let the website move while mail DNS
stayed at GoDaddy — is Business/Enterprise only, not available on free.** So the
nameserver move takes *all* DNS with it, mail included. That is the one real risk
in this cutover.

1. **Add `mytripmytravel.com` to Cloudflare** on the **Free** plan. Wrangler's
   OAuth token is scoped `zone:read` only, so it cannot create the zone or write
   DNS; use the dashboard, or issue a token with `Zone:Zone:Edit` + `Zone:DNS:Edit`.
2. **Verify every record below survived Cloudflare's import** before touching the
   registrar. Records can be staged safely — nothing takes effect until step 4.
3. **Add a Single Redirect rule** (included on Free): `mytripmytravel.com/*` →
   `https://www.mytripmytravel.com/$1`, status 301. The old host did this as a 308;
   without it the apex serves duplicate content against the `www` canonical.
4. **Change the nameservers at GoDaddy** (`ns75`/`ns76.domaincontrol.com` → the two
   Cloudflare assigns). Registrar action. Propagation is low-risk here: the old
   host is already returning 402, so any resolver that switches is an improvement.
5. **Bind the hostnames to the Worker**: Workers > `mytripmytravel` > Settings >
   Domains & Routes > add `www.mytripmytravel.com` (and the apex if you prefer
   binding over the redirect rule).
6. **Resubmit** `https://www.mytripmytravel.com/sitemap.xml` in Search Console.
   Expect Google to drop the ~42,000 URLs that are no longer built; they were
   already `noindex` and absent from the sitemap, so impact should be minimal.

### Records that MUST survive the move

Inventory taken from live DNS on 2026-10-08. Mail runs on **Hostinger**; losing
these breaks email on the domain.

| Type  | Name           | Value                                                        | Why |
|-------|----------------|--------------------------------------------------------------|-----|
| MX    | `@`            | `mx1.hostinger.com` (priority 5)                             | mail |
| MX    | `@`            | `mx2.hostinger.com` (priority 10)                            | mail |
| TXT   | `@`            | `v=spf1 include:_spf.mail.hostinger.com ~all`                | mail passes SPF |
| TXT   | `_dmarc`       | `v=DMARC1; p=none`                                           | DMARC policy |
| CNAME | `autoconfig`   | `autoconfig.mail.hostinger.com`                              | mail client setup |
| CNAME | `autodiscover` | `autodiscover.mail.hostinger.com`                            | mail client setup |
| TXT   | `@`            | `google-site-verification=WYUlUIEF4ExjfPt5fA5sSRy9GqL2FyeHwgZlRvfY4eM` | Search Console access |

**DKIM is the gap.** Nothing is published at the common selectors
(`default._domainkey`, `hostingermail._domainkey`) and selectors cannot be
enumerated from outside. Pull the DKIM record from Hostinger's email panel and
recreate it, or outbound mail may start landing in spam.

**Do NOT copy these** — they point at the old host and are replaced by the Worker
binding:

| Type  | Name  | Old value                      |
|-------|-------|--------------------------------|
| A     | `@`   | `76.76.21.21`, `216.198.79.1`  |
| CNAME | `www` | `cname.vercel-dns.com`         |

No AAAA and no CAA records exist.

### Post-cutover verification

```bash
dig +short MX mytripmytravel.com                    # Hostinger MX intact
dig +short TXT mytripmytravel.com                   # SPF + GSC verification intact
curl -sI https://www.mytripmytravel.com | head -1   # 200
curl -sI https://mytripmytravel.com | head -1       # 301 -> www
curl -s https://www.mytripmytravel.com/sitemap.xml | head -3
```

Send a test email to a mailbox on the domain, and from it to an external address,
before considering the cutover done.

## Cost

Static-asset requests are free and unlimited; there is no Worker script, no KV, R2
or D1, and a zone is on the Free Website plan. Note the account already carries
Workers Paid for Frameleads, so the *account* is not on the free Workers plan —
but this site adds **no incremental cost** and stays inside the free limits.

The remaining ceiling is **bandwidth-shaped, not compute-shaped**: pages are
~200 KB of HTML and `/destinations` was measured at ~2.7 MB/request. Cloudflare
does not meter egress, but trimming the three.js / gsap / framer-motion payload is
the highest-value optimisation left.
