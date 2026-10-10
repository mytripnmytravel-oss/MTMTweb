# Deployment

The site is a **static export** (`output: "export"` in `next.config.ts`). There is
no server rendering, no ISR and no serverless functions: `npm run build` writes
plain HTML to `./out` and the host just serves files.

**Primary host: Vercel** — project `mtm-tweb` on the client's account, Git-connected
to `mytripnmytravel-oss/MTMTweb`, production branch `main`. Pushing `main`
deploys. The domain already points here, so no DNS work is needed.

**Standby: Cloudflare** — `https://mytripmytravel.workajsal.workers.dev`, a free
static copy, noindexed via `public/_headers`. Useful if Vercel pauses again.

## Why the site is a static export

Every one of the 74 `generateStaticParams()` used to return `[]` with
`dynamicParams = true`, so all ~50,000 URLs rendered **on demand** — each cold URL
a crawler hit cost a serverless render. That exhausted the client's Hobby limits;
Vercel pauses rather than bills on Hobby, so the project went
`402 DEPLOYMENT_DISABLED` and the whole site went down, `*.vercel.app` included.

Only 8,140 of those 50,118 pages were ever in the sitemap.

## Build

```bash
npm run build          # writes ./out  (8,431 pages, ~20s of page generation)
```

On Vercel this runs on the builder, so the output file count is not a constraint:
Vercel documents **no upper limit on build output files** (the 15,000-file cap
applies only to CLI *source* uploads), and the 45-minute build ceiling is far away.

### Deploying to Cloudflare instead (standby)

```bash
npm run build
find out -name '__next.*' -type f -delete   # see note below
find out -type d -empty -delete
npx wrangler deploy
```

Next 16 emits ~10 per-page `__next.*.txt` segment prefetch files, which takes the
export to ~94,000 files. Cloudflare's free plan allows **20,000 files** per Worker
version, so they must be pruned; that leaves ~17,000 and costs only prefetch
granularity. Deleting them is **not** needed on Vercel.

## What gets built

`lib/seoFocus.ts` is the gate. Only the focus set is built — the 8,140 sitemap
URLs plus a small noindexed tail (city hubs, all region pages) that the nav and
prose link to. The deep combinatorial tails that were never in the sitemap are
not built: the corporate route matrix, non-core region tour variants, and the
wellness location/origin/month/duration combos.

Since nothing renders on demand any more, **any URL not built is a 404.** When
adding links, link only to pages that are built. The commit
"Host as a static export on Cloudflare free tier" verified 0 broken internal
links across all 8,431 pages; re-run that audit after adding routes.

## Usage, and whether Hobby is enough

A static export uses no function invocations and ~no CPU, which is what blew the
limit before. Hobby allows 100 GB bandwidth, 1M edge requests, 4 CPU-hours and
100 build minutes per month; this build uses roughly 2 build minutes and no
compute, so the site may now fit Hobby.

Two caveats:
- Pages are heavy (~200 KB of HTML each, and `/destinations` was measured at
  ~2.7 MB/request), so **bandwidth** is the remaining ceiling. Trimming the
  three.js / gsap / framer-motion payload is the highest-value optimisation left.
- Vercel's Hobby plan is for non-commercial use. This is a client's commercial
  site, so Pro is the correct plan regardless of whether Hobby would technically
  hold.

Upgrading to Pro unpauses a disabled project immediately; on Hobby it unpauses at
the usage-cycle reset.

## If the domain ever moves to Cloudflare

Not needed while Vercel is the host — the domain already resolves there. Kept only
in case it is ever required. The domain is on GoDaddy nameservers
(`ns75`/`ns76.domaincontrol.com`) and moving the zone to Cloudflare moves **all**
DNS, including live Hostinger email.

### Records that MUST survive the move

Full inventory taken from live DNS on 2026-10-08, before any change. Mail runs on
**Hostinger**; losing these breaks email on the domain.

| Type  | Name           | Value                                                        | Why |
|-------|----------------|--------------------------------------------------------------|-----|
| MX    | `@`            | `mx1.hostinger.com` (priority 5)                             | mail |
| MX    | `@`            | `mx2.hostinger.com` (priority 10)                            | mail |
| TXT   | `@`            | `v=spf1 include:_spf.mail.hostinger.com ~all`                | mail passes SPF |
| TXT   | `_dmarc`       | `v=DMARC1; p=none`                                           | DMARC policy |
| CNAME | `autoconfig`   | `autoconfig.mail.hostinger.com`                              | mail client setup |
| CNAME | `autodiscover` | `autodiscover.mail.hostinger.com`                            | mail client setup |
| TXT   | `@`            | `google-site-verification=WYUlUIEF4ExjfPt5fA5sSRy9GqL2FyeHwgZlRvfY4eM` | Search Console access |

**Do NOT copy these** — they point at the old host and are replaced by the
Worker custom domain:

| Type  | Name  | Current value                        |
|-------|-------|--------------------------------------|
| A     | `@`   | `76.76.21.21`, `216.198.79.1`        |
| CNAME | `www` | `cname.vercel-dns.com`               |

No AAAA and no CAA records exist. **DKIM:** no record was found at the common
selectors (`default._domainkey`, `hostingermail._domainkey`), but DKIM selectors
cannot be enumerated from outside — check Hostinger's email panel for the DKIM
record it publishes and recreate it, or mail may start landing in spam.

Dropping the `google-site-verification` TXT also drops Search Console access.

Also note: no AAAA or CAA records exist, and DKIM selectors cannot be enumerated
from outside — check Hostinger's email panel for the DKIM record it publishes.

Wrangler's OAuth token is scoped `zone:read` only, so it cannot create the zone or
write DNS; that needs the Cloudflare dashboard or a token with
`Zone:Zone:Edit` + `Zone:DNS:Edit`. The nameserver switch itself is a registrar
action at GoDaddy.
