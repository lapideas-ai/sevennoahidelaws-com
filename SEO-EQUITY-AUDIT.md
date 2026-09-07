# SEO Equity Audit — SevenNoahideLaws.com

**Stage:** 1 of 5 — SEO Preservation Baseline
**Date:** 2026-08-20
**Scope:** Public, unauthenticated audit only. No GSC/GA4 access used. No production changes made.
**Live-page snapshots archived at:** `SEO-Data/live-site-snapshot-2026-08-20/` (raw HTML + sitemap.xml, saved before any change, per Section I of the approved MVP spec)

---

## A. Executive summary

The live site is far smaller than the MVP specification assumed. It is **one long-scroll homepage plus four blog-style articles — five URLs total.** There are no existing pages for Seven Principles, Declaration, Community, About, FAQ, Psalms, or Donate; none of those are separate URLs today. That is a significant, favorable correction: four of the six approved primary pages (Why Can't I Just Be a Good Person?, Community, About, Donate) plus the Free Site system are **completely greenfield** — zero risk of breaking anything that exists.

The one open question that matters is **The Seven Principles hub.** The current homepage's `<title>` is literally "Seven Noahide Laws" and its body text is saturated with that exact keyword cluster. It is plausible the homepage — not a future subpage — currently holds whatever ranking equity exists for "seven noahide laws" and "what is a noahide." Creating a brand-new `/seven-noahide-laws/` page without knowing this could split that equity instead of protecting it. This is the one place Stage 1 must **hold for data**, not guess.

Everything else observed is either a safe preserve-and-improve item or a zero-risk new build.

---

## B. Existing URL inventory

Discovered via `sitemap.xml` + homepage crawl + public `site:sevennoahidelaws.com` search. No other URLs were discoverable by these methods.

| URL | Status | Title tag | Meta description | H1 | Canonical | Schema | Words |
|---|---|---|---|---|---|---|---|
| `/` | 200 | "Seven Noahide Laws" | "Form the Bedrock of all Civilized Society For a Better World of Wisdom and Universal Peace" | **6 H1s** (no single primary) | `https://sevennoahidelaws.com/` (correct) | none | ~2,889 |
| `/For%20a%20Beautiful%20Planet` | 200 | "Seven Noahide Laws for a Beautiful Planet" | *(missing)* | "Make the World a Better Place" (mismatched to title) | `https://sevennoahidelaws.com/For a Beautiful Planet` (⚠ unencoded space) | none | ~4,557 |
| `/Success-New-Year-2022` | 200 | "Success New Year 2022" | *(missing)* | *(none present — no H1 or H2)* | `https://sevennoahidelaws.com/Success-New-Year-2022` (correct) | none | ~2,139 |
| `/new-year-sweetness-of-systemic-civility` | 200 | *(missing — blank `<title>`)* | "Design beautiful responsive minimal agency website with Dorik" (⚠ unedited template default) | *(none — H2 only)* | correct | none | ~881 |
| `/buffalo%20pilgrimage` | 200 | *(missing — blank `<title>`)* | "Design beautiful responsive minimal agency website with Dorik" (⚠ unedited template default) | *(none — H2 only)* | `https://sevennoahidelaws.com//buffalo pilgrimage` (⚠ double slash + unencoded space; also how it's written in `sitemap.xml` itself) | none | ~852 |

**OBSERVED FACT:** these five URLs are the entirety of what is publicly discoverable.
**SEO INFERENCE:** the two undertitled pages are very likely near-invisible in search and social sharing despite having real, substantial content — their metadata was never edited from the Dorik "Minimal Agency Template" default.
**DATA REQUIRED:** whether Google has indexed any URL not in this table (only GSC's Pages/Indexing report can confirm this with certainty).

Platform: **Dorik** (hosted website builder, `cdn.dorik.com` assets, `Server: Caddy`). This affects what's directly editable vs. what requires Dorik's own settings panels — relevant for Stage 2/3 planning, not for this audit.

---

## C. DO-NOT-BREAK list (based on currently available public evidence)

| URL | Classification |
|---|---|
| `/` | **PRESERVE AS-IS** (URL). Content evolution is approved per MVP Section C, *except* see Section K below re: the Seven Principles keyword question. |
| `/For%20a%20Beautiful%20Planet` | **PRESERVE + IMPROVE** — fix canonical URL-encoding; add meta description; feed content into the Seven Principles hub via internal links. |
| `/new-year-sweetness-of-systemic-civility` | **PRESERVE + IMPROVE** — replace blank title and boilerplate meta/og description; substantial real content (881 words) is currently unlabeled. |
| `/Success-New-Year-2022` | **PRESERVE + IMPROVE** — add a proper H1; verify/add meta description. |
| `/buffalo%20pilgrimage` | **NEEDS HUMAN REVIEW** — real content (grave-pilgrimage directions), but thematically tangential to the core mission, and its canonical/sitemap URL is malformed (double slash) in a way that may already be causing indexing confusion. Confirm with Jeff whether this page should stay, and confirm via GSC which URL variant (if either) Google actually indexed, before touching it. |
| `/seven-noahide-laws/` (proposed new hub) | **NEEDS GSC DATA BEFORE DECISION** — see Section K. |
| `/why-cant-i-just-be-a-good-person/`, `/community/`, `/about/`, `/donate/`, `/free-site/` | **NEW / DOES NOT CURRENTLY EXIST** — confirmed via direct 404 checks and public search; zero conflict, safe to build exactly as specified. |

---

## D. Homepage preservation analysis

**What should be PRESERVED for SEO:**
- The URL itself (`/`), and its correct self-referencing canonical.
- The `<title>` leading with "Seven Noahide Laws" — this exact phrase should remain the lead phrase of the title tag (the approved spec's proposed title, "Seven Noahide Laws — Ancient Principles for a Good Life," already does this correctly).
- The core keyword cluster present in the body copy today: *seven noahide laws, noahide, bnei noah, noahide code, 7 mitzvahs, 7 laws of light.*
- The existing self-branding **"7 Laws of Light"** and the live @7noahidelaws X handle reference — this is a genuine existing asset that already bridges into the approved LIGHT doctrine; it should be reinforced, not reinvented.
- The outbound citation to Sefaria (`sefaria.org/sheets/175691.3`) — an existing credible-source link supporting the trust/E-E-A-T strategy.
- The existing long-form theological content (the Adam/Eve "laws broken on day one" narrative, the "7 Ancient Paths to Peace" essay, the civilization/justice argument) as *source material* — it should be mined and redistributed into the new homepage sections and the Seven Principles / About pages, not deleted outright.

**What can be REWRITTEN / REDESIGNED for the seeker-first experience:**
- The six-H1 structure (should become one primary H1 matching the approved Section C hero headline).
- The specific homepage narrative sequence and framing — the current copy is Noahide-aware-first and fairly dense; the approved wireframe's seeker-first sequencing (Seeking → In the Beginning → Adam & Noah → Seven Principles → "You may already believe this" → Why can't I just be good → Light → Community → Free Site → Donate → Keep exploring) can fully replace the current layout.
- The current homepage has **zero forms and zero lead capture** — the "Join the Community — Free" CTA introduces the site's first-ever conversion mechanism, not a change to an existing one. There is nothing to protect there.

---

## E. Declare / declaration analysis

**Finding: no Noahide-declaration page or flow exists anywhere on this domain.**

The only match for "Declaration" on the homepage is the phrase *"The Declaration of Independence"* (in a list of historical documents the Seven Laws are said to predate) — unrelated to a Noahide declaration. "Bnei Noah" appears once, inside a list of alternate names for the Noahide movement ("Noahide Academy, Bnei Noah, Sons of Noah, Brit [O]lam, Noahide Code, 7 Noahide Laws, 7 Mitzvahs, and 7 Laws of Light"), not as a declaration mechanism.

**Consequence:** the approved MVP's instruction to "demote Declare from the primary homepage CTA" has nothing to structurally demote on this domain — there is no existing declare URL, button, or flow to preserve, redirect, or fold into The Seven Principles page. That instruction remains correct as forward-looking brand doctrine (Declare properly belongs to 7NL.org per the three-property model in CLAUDE.md), but no migration risk attaches to it here.

---

## F. Existing content mapped to the six MVP hubs + Free Site

| MVP hub | Existing content that feeds it |
|---|---|
| Home | Current homepage's Adam/Eve narrative, civilization/justice argument, "7 Laws of Light" branding |
| The Seven Principles | Current homepage's core Seven-Laws explanation; `/For%20a%20Beautiful%20Planet` (4,557 words, deepest existing content) |
| Why Can't I Just Be a Good Person? | No direct existing source; `/new-year-sweetness-of-systemic-civility`'s "civility... given to all mankind starting with Adam and Eve" framing is a usable precedent |
| Community | No existing content; live X (@7noahidelaws) and Facebook links are the only current community touchpoints |
| About — Our Story & Sources | Homepage's "worldwide Noahide communities are known by various names..." paragraph; Sefaria citation |
| Donate | No existing content — fully new |
| Free Site | No existing content, but `freesites.com` is already linked from the current homepage — an existing live brand association to build on |
| (Rosh Hashanah / New Year cluster — Next, not MVP) | `/Success-New-Year-2022`, `/new-year-sweetness-of-systemic-civility` |
| (Unclear fit) | `/buffalo%20pilgrimage` — see Section C |

---

## G. Technical SEO findings

1. **`robots.txt` returns 404** — does not exist. No crawl directives, no sitemap declaration for bots. Not urgent, but should be created in Stage 2/3.
2. **`sitemap.xml` exists and is valid XML** (`urlset`, 5 `<loc>` entries), but is nearly a year stale (`Last-Modified: 2025-09-18`) and contains a malformed entry (double slash in the Buffalo Pilgrimage URL).
3. **Homepage has six `<h1>` tags**, not one — no single clear primary heading signal.
4. **Two pages have unencoded spaces in their canonical tags**; one of those also has a double-slash inconsistency between its canonical and its own sitemap entry.
5. **Two pages carry unedited Dorik template metadata** (blank title, generic "Minimal Agency Template" og:title, boilerplate meta description) despite having substantial real content — a pure-upside, zero-URL-change fix opportunity.
6. **No structured data (JSON-LD/schema.org) anywhere on the site.**
7. **No forms, no email capture, anywhere on the site today.**
8. **`www` → non-www redirects correctly to the canonical host, but via a 302 (temporary) rather than a 301 (permanent) redirect.** Minor; worth fixing later, not urgent.
9. **All images carry an `alt` attribute** (though several are empty strings) — better than typical baseline.
10. **A single shared `og:image` is reused across every page** — no page-specific social preview images.
11. **No GA4/GTM/analytics script detected in the static HTML.** This needs Jeff to confirm directly — Dorik may provide its own analytics dashboard outside the page source, or nothing may be installed at all. See Section J.

---

## H. Existing-vs-new URL map

| Approved MVP page | Live equivalent | Treatment |
|---|---|---|
| Home (`/`) | `/` — exists, is the canonical homepage | Preserve URL; evolve content per Section D above |
| The Seven Principles (`/seven-noahide-laws/`) | **Does not exist as a separate URL — this content currently lives on the homepage itself** | **Hold — see Section K** |
| Why Can't I Just Be a Good Person? | Does not exist | Build as planned, no conflict |
| Community | Does not exist | Build as planned, no conflict |
| About — Our Story & Sources | Does not exist | Build as planned, no conflict |
| Donate | Does not exist | Build as planned, no conflict |
| Free Site | Does not exist | Build as planned, no conflict |

---

## I. SEO opportunities discovered

*Observations only — no new pages are being created from this list.*

- The homepage already self-brands as **"7 Laws of Light"** and uses that phrase on its live X/Twitter presence — this is existing, not proposed, evidence that the LIGHT doctrine has real precedent on this exact property.
- The existing "civility... given to all mankind starting with Adam and Eve" framing on `/new-year-sweetness-of-systemic-civility` is a direct, already-published precedent for the approved "Adam was not Jewish, neither was Noah" positioning — this lowers the risk that the new framing will feel invented or off-brand to returning readers.
- `/For%20a%20Beautiful%20Planet` is the single deepest existing page (4,557 words) and is a strong candidate as raw source material for both the Seven Principles hub and upstream "good person" framing once mined.
- Zero existing donate/community/about presence confirms these three hubs carry no cannibalization risk — the SEO opportunity is entirely additive.
- The existing outbound Sefaria citation is a small but real existing trust signal worth preserving and potentially expanding (additional citations to Noahide World Center / Noahide Academy per the approved About page).

No net-new page targets beyond the six approved hubs are being proposed here, consistent with the instruction not to begin generating a long list of new SEO pages at this stage.

---

## J. DATA I NEED FROM JEFF

Everything obtainable without private access has been completed. Three items remain, and they specifically affect the one open migration decision (Section K) and the pre-migration baseline. Nothing else is being requested, because nothing else would change an MVP or migration decision at this stage.

### 1. Google Search Console — Performance report (Pages + Queries)
**This is the one that resolves the Seven Principles hub question.**
- **Where:** Go to [search.google.com/search-console](https://search.google.com/search-console), select the `sevennoahidelaws.com` property.
- **What to open:** left sidebar → **Performance** → **Search results**.
- **Settings:** click the date-range selector at the top and choose the longest available range (Search Console keeps up to 16 months — pick "16 months" or the closest option offered, ending today).
- **What to export:** with the report open, click **Export** (top right) → **Download CSV**. This produces one file (or a small zip containing `Queries.csv`, `Pages.csv`, `Countries.csv`, `Devices.csv`, `Dates.csv`). Export all of them if given the option.
- **Where to save it:** drop the file(s) into `7NL/SEO-Data/GSC/` — I've already created that folder. Any filename is fine (e.g. `gsc-performance-2026-08-20.csv`).

### 2. Google Search Console — Pages / Indexing report
**This confirms whether Google has indexed anything beyond the five URLs found in this audit.**
- **Where:** same property → left sidebar → **Indexing** → **Pages**.
- **What to export:** click **Export** on that page's table → **Download CSV**.
- **Where to save it:** `7NL/SEO-Data/GSC/gsc-page-indexing-2026-08-20.csv`.

### 3. Confirm whether analytics is installed at all
- No GA4/Google Tag Manager script was found in the site's raw HTML during this audit.
- **What to check:** log into [analytics.google.com](https://analytics.google.com) — is there a property for sevennoahidelaws.com with any recorded traffic in the last 90 days? Just a yes/no answer is enough for now.
- **If yes:** left sidebar → **Reports** → **Engagement** → **Landing page**, filter **Session default channel group = Organic Search**, date range = last 12 months, export via the share icon (top right) → **Download file** → CSV. Save to `7NL/SEO-Data/GA4/`.
- **If no:** no export needed — just let me know, since it means we have no existing organic-traffic baseline to protect, which actually simplifies Stage 5's acceptance testing (we'd be establishing a first baseline rather than comparing against history).

*(A Core Web Vitals / PageSpeed baseline was also planned, but Google's public PageSpeed API returned a quota error when I tried it directly, and this number doesn't change any Stage 1–4 decision — it only matters at Stage 5 acceptance testing. I'll capture it then rather than asking you for it now.)*

---

## K. Required changes to the approved MVP specification

Only one substantive change is indicated by this audit; everything else in the approved spec still holds.

> **Hold on `/seven-noahide-laws/` as a new, separate URL until GSC data (Section J, item 1) is in hand.** The current homepage's `<title>` is literally "Seven Noahide Laws," and its body copy is saturated with that keyword cluster — it is plausible the homepage itself currently holds whatever ranking equity exists for "seven noahide laws" and "what is a noahide" queries, not a future subpage. Two outcomes are possible once the data arrives:
> - **If GSC shows the homepage already earns meaningful impressions/clicks for these queries:** keep the deep Seven-Laws explanation content living primarily on the homepage (as the approved Section C wireframe already does, in section 4), and make "The Seven Principles" a same-page anchor link in navigation rather than forking a separate URL — at least until the new content has time to earn its own authority.
> - **If GSC shows negligible existing impressions for these terms:** proceed with `/seven-noahide-laws/` exactly as specified in the approved MVP — there is little existing equity to protect, and a dedicated pillar page is the stronger long-term structure.
>
> Everything else in the approved sitemap (Why Can't I Just Be a Good Person?, Community, About, Donate, Free Site) is confirmed net-new with zero conflict and requires no change.

Two small, non-blocking observations worth folding into Stage 2 planning (not changes to the approved architecture):
- Fix the two boilerplate-metadata pages (`/new-year-sweetness-of-systemic-civility`, `/buffalo%20pilgrimage`) and the two malformed canonicals — pure upside, no URL change, can happen any time.
- Confirm analytics status (Section J, item 3) before Stage 2 content work ships, so a real pre-migration baseline exists for Stage 5's acceptance test.

---

## L. GO / HOLD recommendation for Stage 2

# HOLD — WAITING FOR SPECIFIC DATA

Specifically: **hold on the Seven Principles hub URL decision** until the GSC Performance and Indexing exports (Section J, items 1–2) are provided.

This is a **narrow hold, not a full stop.** Everything that doesn't touch that one question is unblocked and carries no identified risk:
- Content and design work for **Why Can't I Just Be a Good Person?, Community, About, Donate, and the Free Site system** can proceed into Stage 2 planning immediately — all five are confirmed net-new with zero existing equity to protect.
- The metadata fixes on the two boilerplate pages can happen at any time.
- Homepage content restructuring per the approved Section C wireframe can be drafted now; only the final decision of *where the deep Seven-Laws explanation ultimately lives* (homepage section vs. dedicated new URL) waits on data.

No page has been written. No code has been written. No production file, URL, or redirect has been touched. No Netlify, GHL, or Stripe configuration has occurred.
