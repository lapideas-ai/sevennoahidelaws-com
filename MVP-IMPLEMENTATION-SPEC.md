# MVP Implementation Specification
### 7NL Ecosystem — SevenNoahideLaws.com

Strategy is frozen. This document is the final, implementation-ready blueprint for replacing the current SevenNoahideLaws.com experience — six primary pages plus one Free Site system — while preserving existing search equity.

**Status:** Final — awaiting approval · No code written · No production files touched · No URLs changed · Netlify / GHL untouched

---

## Sections

- [A — Sitemap](#a-final-sitemap--six-primary-pages--one-system)
- [B — Job of each page](#b-job-of-each-page)
- [C — Homepage wireframe](#c-homepage-wireframe)
- [D — Free Site wireframe](#d-free-site-wireframe--one-reusable-system)
- [E — SEO spec](#e-seo-specification--every-mvp-page)
- [F — Navigation](#f-navigation--exact)
- [G — GHL connections](#g-ghl-connection-points)
- [H — Monetization](#h-monetization-placement)
- [I — SEO equity audit](#i-existing-seo-equity-audit--required-before-stage-1)
- [J — Now / Next / Later](#j-now--next--later)
- [K — Build order](#k-five-stage-build-order)
- [L — Acceptance test](#l-mvp-acceptance-test--10-conditions)

---

## Governing decisions

Two governing decisions resolve every scope question below. Everything in this spec follows from them.

> **Decision 1 — what "5–6 primary pages" means.** The cap governs the site's *navigation-level information architecture*, not its total URL count. Existing indexed long-tail URLs — individual-law explainers, FAQ posts, blog articles — are preserved and improved in place as supporting cluster content beneath the six primary hubs. This satisfies the page-count constraint and the SEO-preservation constraint at once.

> **Decision 2 — URLs are provisional until the audit runs.** No live crawl of the current site has been performed inside this session. Every URL below is a recommended slug, marked **existing** if a page of that name almost certainly already exists and must be preserved rather than recreated, or **new** if none is expected. Section I is the audit that confirms or corrects every **existing** assumption before Stage 1 of the build begins.

---

## A. Final sitemap — six primary pages + one system

| # | Page | Working URL | Status | Owns |
|---|------|-------------|--------|------|
| 1 | Home | `/` | existing | Seeking → Light → all routes out |
| 2 | The Seven Principles | `/seven-noahide-laws/` | existing | Core pillar — traditional Laws + beginner framing |
| 3 | Why Can't I Just Be a Good Person? | `/why-cant-i-just-be-a-good-person/` | new | Upstream seeker front door |
| 4 | Community | `/community/` | existing | Belonging, GHL entry point |
| 5 | About — Our Story & Sources | `/about/` | existing | Trust, Light doctrine, E-E-A-T |
| 6 | Donate | `/donate/` | existing | Support the mission |
| +1 | **Free Site (the system)** | `/free-site/` | new | Find your light → share it → find each other |

The current Declare-oriented page/flow is treated as an **existing** URL under Section I — it is not deleted, but it is demoted from primary-CTA status everywhere per the seeker-first doctrine, and its content folds into **The Seven Principles** as one honest section among several, not the site's front door.

---

## B. Job of each page

**Home** — Carry the full emotional and informational arc in one visit — seeking, origin, the seven principles, light, community, free site, support — for a visitor who may never click again. Every other page exists to go deeper on one beat of this page.

**The Seven Principles** — Answer the two biggest questions people actually type — "what are the Seven Noahide Laws" and "what is a Noahide" — completely and accurately, while clearly separating the traditional formulation from the simplified beginner framing.

**Why Can't I Just Be a Good Person?** — Catch the visitor who has never heard the word Noahide. Validate the question, answer it honestly, and bridge into the Seven Principles without requiring any prior religious vocabulary.

**Community** — Prove "I am not alone" is true, not just claimed. Show what's inside, who's welcome, and hand off cleanly to GHL-powered belonging.

**About — Our Story & Sources** — Carry the credibility load: who is behind this, what sources it draws on, how it distinguishes scripture from tradition from editorial opinion, and its relationship to Judaism and existing Noahide institutions.

**Donate** — Give mission-aligned, non-dominant, honestly-labeled support a real home, without turning the seeker experience into a fundraising pitch.

**Free Site** — Convert "I found something worth sharing" into an actual public artifact — and turn every published site into an organic referral loop that discovers the next seeker.

---

## C. Homepage wireframe

Eleven sections, in order. The homepage resolves nearly every concept in the brief in-page rather than punting it to a new page — each section links deeper only where genuine depth is warranted.

**1 — Hero: Seeking**
Headline direction: *"You Don't Have to Have It All Figured Out."* Validates the seeker immediately, no declaration required.
- **Purpose:** set non-declarative tone in five seconds
- **CTA:** Explore the Seven Principles (primary) / Join the Community (secondary)
- **Source:** Seeker + Community Strategy, CLAUDE.md

**2 — In the Beginning**
Headline: *"In the Beginning."* "Did the Almighty create humanity without a plan or directions?" Long before today's religions, the Bible describes principles given to all humanity, starting with Adam.
- **Purpose:** establish universal, pre-institutional framing
- **CTA:** none (informational beat)
- **Source:** "The Front Door" section, CLAUDE.md — language reused near-verbatim

**3 — Adam & Noah**
Headline: *"Adam Was Not Jewish. Neither Was Noah."* Two-to-three sentence timeline: Adam → Noah → a covenant "for all flesh," told plainly, with scripture and tradition kept visibly separate.
- **Purpose:** compress the pre-Abrahamic story doctrine into a homepage-safe beat
- **CTA:** "Learn the Full Story" → About
- **Source:** Pre-Abrahamic Story / Editorial Discipline sections, CLAUDE.md — condensed, full sourcing lives on About

**4 — The Seven Universal Principles**
Headline: *"Seven Principles for Every Human Being."* Seven-card grid, one line each: One Creator · Sacred Speech · Life · Family · Honesty & Property · Compassion for Living Creatures · Justice. Inline disclosure: "These are simplified, beginner-friendly expressions of the traditional Seven Noahide Laws."
- **Purpose:** teach the shape of the framework fast, without legal/doctrinal density
- **CTA:** "Explore in Depth" → The Seven Principles page
- **Source:** task brief's beginner-concept list, reconciled against accuracy doctrine

**5 — "You May Already Believe This"**
Short recognition list: life is sacred, honesty matters, cruelty is wrong, justice matters — framed as things the visitor likely already holds, not new rules to accept.
- **Purpose:** transition from teaching to recognition
- **CTA:** none — a bridge beat
- **Source:** new copy, direct implementation of the section's literal name in the brief

**6 — Why Can't I Just Be a Good Person?**
Headline as written. Answer: *"You can. Now let's explore what 'good' might mean."*
- **Purpose:** name the upstream audience's real question and answer it honestly
- **CTA:** "Keep Reading" → dedicated page
- **Source:** Core Positioning section, CLAUDE.md — near-verbatim

**7 — Light**
Headline: the core promise, verbatim — *"We help you find your light, and help you share it with the world."* Short paragraph on what light means here (hope, purpose, goodness), paired visually with the dove/peace motif.
- **Purpose:** deliver the brand's central emotional promise at its natural moment
- **CTA:** none — the emotional peak, not a conversion point
- **Source:** LIGHT doctrine, CLAUDE.md — promise line is fixed language, must not be paraphrased

**8 — Worldwide Community / You Are Not Alone**
Headline: *"You Are Not Alone."* Short description of the always-on, worldwide community; one real human story or pull-quote once available (placeholder, not fabricated, until a genuine member story exists).
- **Purpose:** answer belonging positively, never by naming loneliness
- **CTA:** "Join the Community — Free" (primary)
- **Source:** Loneliness/Belonging + Community sections, CLAUDE.md

**9 — Free Site / Share Your Light**
Headline: *"Find Your Light. Share It With the World."* One-paragraph explainer: a personal page for what you've discovered — no declaration required.
- **Purpose:** introduce the Free Site as an act of sharing, not converting
- **CTA:** "Create Your Free Site" (primary)
- **Source:** Free Site Giveaway doctrine, this spec Section D

**10 — Donate / Help Us Share More Light**
Headline: *"Help Us Share More Light."* One to two sentences, mission-framed, no tax-deductibility claim anywhere near this module.
- **Purpose:** give support a visible but non-dominant home
- **CTA:** "Support the Mission"
- **Source:** Living Lchaim / monetization sections, CLAUDE.md

**11 — Keep Exploring**
Closing card row before the footer: The Seven Principles · Why Can't I Just Be a Good Person? · Community · About — the homepage's last act is handing the visitor a clear next click, not another idea.
- **Purpose:** close every open thread with a route, not a summary
- **CTA:** four routing links
- **Source:** "clear routes to deeper learning" requirement, task brief

---

## D. Free Site wireframe — one reusable system

Qualification is recognition, not conversion. Nothing in this flow requires accepting the word "Noahide."

**1 — Landing**
*"Find Your Light. Share It With the World."* Explains the concept in one screen, shows a real example site, states plainly: free, no religious label required, takes about five minutes.

**2 — Qualification experience**
Not a quiz with a pass/fail. A "Do you recognize these?" reflective checklist against the seven positively-framed principles — e.g. *"I believe human life has sacred worth."* Any number may be checked, including zero; the answers personalize the generated starter content, they do not gate access.

**3 — Onboarding questions**
Display name · location (country, city optional) · photo (optional) · which principles resonated (from step 2) · "what brought you here" (optional free text) · preferred language · default visibility (public/private) · email.

**4 — Generated content**
The system drafts a starting point from the answers: a short personalized "My Light" intro, a suggested Psalm or verse matched to the principles selected, and one or two starter "Light I've Found" entries pulled from the existing Psalms and Universal Bible Themes library.

**5 — Customizable modules**
- **My Light** — personal statement, fully editable, no forced declaration language.
- **Light I've Found** — a curated, shareable list of quotes, verses, and principles that resonate, sourced from the existing content library.
- **My Journey** — optional freeform story or timeline entries; private by default.
- **Share the Light** — public share modules: social links, a favorite Psalm, a downloadable graphic, an invite link.
- **Community** — a live connection into the GHL community: recent activity, a "say hello" prompt, a join button.

**6 — Public / private controls**
Per-module visibility toggle. My Journey defaults private; My Light and Light I've Found default public. A single whole-site toggle (public / unlisted / private) sits above the per-module controls.

**7 — Visual system**
**Light treatment:** warm dawn palette, soft glow, generous whitespace, light emerging from darkness as a recurring compositional idea rather than a literal gradient cliché. **Dove / peace treatment:** restrained — a corner motif or section divider, never full-bleed decoration. Multicultural human imagery over stock-religious imagery. Explicitly avoided: church-site, synagogue-site, generic SaaS, and AI-gradient-hero aesthetics.

**8 — Branding & attribution**
Footer carries the SevenNoahideLaws.com wordmark/link and, set exactly as specified, `Made with ♡ by FreeSites` — the heart symbol used literally, the word "love" never spelled out.

**9 — Social sharing**
Every public module has a share action that generates a branded card (using the site's own Light visual system) for a quote, verse, or milestone — not a generic "check out my page" link.

**10 — Organic referral loop**
Every shared card links back to the Free Site landing page carrying the referring member's slug, so a new visitor lands on "Shared by [Name]" and can create their own site in the same flow — the discovery loop the brief specifies: find your light → share your light → find each other.

---

## E. SEO specification — every MVP page

### 1. Home
`/`

| Field | Value |
|---|---|
| Search intent | Mixed navigational + broad informational |
| Primary keyword | seven noahide laws |
| Secondary topics | what is a noahide, universal principles for humanity, spiritual but not religious |
| Title tag | Seven Noahide Laws — Ancient Principles for a Good Life \| SevenNoahideLaws.com |
| Meta description | Long before today's religions, the Bible describes universal principles for humanity. Explore the Seven Noahide Laws, find your light, and join a worldwide community of seekers — free. |
| H1 | You Don't Have to Have It All Figured Out. |
| Primary CTA | Explore the Seven Principles |
| Secondary CTA | Join the Community — Free |
| Internal links | Seven Principles · Why Can't I Just Be a Good Person? · Community · Free Site · About · Donate |
| Schema | Organization, WebSite |

### 2. The Seven Principles
`/seven-noahide-laws/`

| Field | Value |
|---|---|
| Search intent | Informational — Noahide-aware and upstream ("universal moral principles") |
| Primary keyword | seven noahide laws / what is a noahide |
| Secondary topics | how to become a noahide, noahide commandments, bnei noah, universal moral laws |
| Title tag | The Seven Noahide Laws Explained — What Is a Noahide? |
| Meta description | A clear, accurate guide to the Seven Noahide Laws and what it means to be a Noahide — from the traditional formulation to simple, beginner-friendly principles anyone can explore. |
| H1 | The Seven Noahide Laws — And What They Mean for You |
| Primary CTA | Join the Community — Free |
| Secondary CTA | Create Your Free Site |
| Internal links | Home · Why Can't I Just Be a Good Person? · Community · About · existing individual-law pages (preserved) |
| Schema | Article, FAQPage, BreadcrumbList |

### 3. Why Can't I Just Be a Good Person?
`/why-cant-i-just-be-a-good-person/`

| Field | Value |
|---|---|
| Search intent | Upstream informational — non-Noahide-aware |
| Primary keyword | why can't I just be a good person |
| Secondary topics | spiritual but not religious, morality without organized religion, universal moral principles |
| Title tag | Why Can't I Just Be a Good Person? — A Real Answer |
| Meta description | You can. Here's what "being good" might actually mean — and an ancient set of universal principles that may already match what you believe. |
| H1 | Why Can't I Just Be a Good Person? |
| Primary CTA | Explore the Seven Principles |
| Secondary CTA | Join the Community — Free |
| Internal links | Seven Principles · Home (Light section) · Community · About |
| Schema | Article, BreadcrumbList |

### 4. Community
`/community/`

| Field | Value |
|---|---|
| Search intent | Mixed — "noahide community," "noahide groups," plus branded return visits |
| Primary keyword | noahide community |
| Secondary topics | noahide community near me, online noahide community, spiritual community not religious |
| Title tag | Join the Noahide Community — Free, Worldwide, Always Open |
| Meta description | You are not alone. Connect with seekers, learners, and Noahides worldwide — ask questions, share Psalms, and belong to a community that welcomes exactly where you are. |
| H1 | You Are Not Alone. |
| Primary CTA | Join the Community — Free |
| Secondary CTA | Create Your Free Site |
| Internal links | Home · Seven Principles · Free Site · About |
| Schema | Organization (sameAs socials), BreadcrumbList |

### 5. About — Our Story & Sources
`/about/`

| Field | Value |
|---|---|
| Search intent | Branded / trust |
| Primary keyword | about sevennoahidelaws.com |
| Secondary topics | noahide world center, noahide academy, editorial standards, light |
| Title tag | About SevenNoahideLaws.com — Our Story, Sources & Light |
| Meta description | We help you find your light, and help you share it with the world. Learn our story, our editorial standards, and the sources and teachers we draw from. |
| H1 | We Help You Find Your Light — and Share It With the World. |
| Primary CTA | Join the Community — Free |
| Secondary CTA | Read Our Editorial Standards (anchor) |
| Internal links | Home · Seven Principles · Community · Donate · Noahide World Center (attribution) · Noahide Academy (affiliate, contextual) |
| Schema | AboutPage, Organization |

### 6. Donate
`/donate/`

| Field | Value |
|---|---|
| Search intent | Navigational / transactional, branded |
| Primary keyword | support sevennoahidelaws.com |
| Secondary topics | help build noahide community, support noahide education |
| Title tag | Help Us Share More Light — Support SevenNoahideLaws.com |
| Meta description | Support free Noahide education, a worldwide community, and free personal sites for seekers everywhere. Every contribution helps us share more light. |
| H1 | Help Us Share More Light |
| Primary CTA | Give Now |
| Secondary CTA | Join the Community — Free |
| Internal links | About · Home · Community |
| Schema | Organization only — no charity/nonprofit schema until legally established |

### +1. Free Site
`/free-site/`

| Field | Value |
|---|---|
| Search intent | Mixed branded + feature intent, plus organic referral traffic from shared cards |
| Primary keyword | free noahide site |
| Secondary topics | share your light, noahide profile page, personal noahide page |
| Title tag | Create Your Free Site — Find Your Light, Share It With the World |
| Meta description | Build a free personal page that shares what you've discovered — no declaration required. Join a worldwide community finding their light and sharing it with the world. |
| H1 | Find Your Light. Share It With the World. |
| Primary CTA | Create Your Free Site |
| Secondary CTA | See an Example |
| Internal links | Community · Seven Principles · Home |
| Schema | Service / SoftwareApplication, BreadcrumbList |

---

## F. Navigation — exact

### Top navigation
Home · The Seven Principles · Why Can't I Just Be Good? · Community · About · **Share Your Light →** (CTA button)

A small utility link — `Give` — sits top-right, outside the primary nav group, so support stays visible without competing with the seeker journey.

### Footer navigation

**Learn**
Home
The Seven Principles
Why Can't I Just Be a Good Person?
About & Our Sources

**Connect**
Community
Share Your Light (Free Site)
Donate

**Elsewhere**
7NL.org — Declare & Belong
NoahideTravel.com — Meet & Experience
X · @7noahidelaws
Facebook

**Bottom bar:** © [year] SevenNoahideLaws.com · Privacy · Terms · Contact. `Made with ♡ by FreeSites` appears on Free Sites themselves, not on the main marketing site's footer — it is a Free Site product mark, not a SevenNoahideLaws.com mark.

---

## G. GHL connection points

Architecture only — nothing below is configured in this phase.

**Forms**
- **Join Community** (Home + Community) — first name, email, country, preferred language.
- **Create Free Site** (qualification + onboarding) — name, email, country, language, principles selected, optional bio/photo/story.
- **Donate** — handled by Stripe directly; completion webhook tags the GHL contact for segmentation and thank-you email.
- **Content subscribe** (light micro-opt-in on Seven Principles / Why-Good-Person pages) — email only.

**Onboarding flow**
Registration → create/update CRM contact → tag `7NL-Member` → capture country / language / source → community access → welcome email → introduction prompt → Free Site invitation.

**Community**
GHL Community hosts the actual discussion space. Initial channels: Start Here · Introductions · The Seven Principles · Psalms · This Week in the Bible · Q&A · Events / Live Learning. The Community page embeds/links to join.

**Email**
Welcome sequence (community joiners) · Free Site welcome sequence (site published) · donor thank-you · optional weekly content digest for subscribers.

**Segmentation tags**
`7NL-Member` · `FreeSite-Created` · `Supporter` · `Content-Subscriber` · `Country:{value}` · `Language:{value}` · `PrinciplesResonated:{list}` · `Source:{referring page}`

---

## H. Monetization placement

| Rail | Where it lives | Rule |
|---|---|---|
| Donate | Dedicated page + homepage section 10 + top-right utility link | Never an interstitial or popup; never claims tax-deductibility |
| Noahide Academy affiliate | Contextual resource box on Seven Principles + About | Inline recommendation, never a banner ad |
| Noahide World Center | About page + relevant Seven Principles section | Attribution and their declaration pathway, not an affiliate claim |
| FreeSites upgrades | Inside the Free Site dashboard only | Never surfaces on public SevenNoahideLaws.com pages |
| GHL affiliate | Low-frequency mention on About / Community, for members who run businesses | Never placed near spiritual content |
| Travel / Israel (later) | One optional checkbox in Free Site onboarding: "Interested in a future Israel experience?" | Interest capture only — no travel content in MVP |
| Sponsorship / Events (later) | Not present in MVP | Explicitly out of scope until traction is proven |

---

## I. Existing SEO equity audit — required before Stage 1

This produces the DO-NOT-BREAK list. Nothing in Sections A–H should be built against until this is complete.

- Full crawl / export of every live indexed URL (GSC Pages report + sitemap.xml + `site:` operator cross-check)
- GSC performance export — queries, clicks, impressions, CTR, position — trailing 16 months, per page
- Top 25 pages by organic clicks, flagged as the DO-NOT-BREAK list
- Current rankings recorded for: seven noahide laws · noahide · what is a noahide · noahide laws · bnei noah · noahide declaration · noahide community · noahide prayer
- Current homepage URL, title tag, meta description, H1, canonical
- Full URL inventory: title, H1, meta description, canonical, word count, internal links in/out, structured data present, indexability / noindex status
- Locate the existing Declare-focused page or flow specifically — current URL, current traffic, current rank
- Backlink inventory via GSC Links report and any available third-party tool
- XML sitemap validated against actual indexed pages
- robots.txt review
- Any existing multilingual / hreflang setup
- Any existing schema / structured data markup
- Core Web Vitals / PageSpeed baseline for the top pages
- Confirm analytics (GA4 or equivalent) is tracking correctly, to compare pre/post migration
- Archive current top pages (Wayback Machine snapshot or manual save) before any change

---

## J. Now / Next / Later

**Now — this MVP**
Six primary pages + Free Site system · GHL architecture designed (not configured) · Donate page (non-deductible, Stripe) · SEO equity audit · Multilingual URL/hreflang architecture (English content only) · Noahide Academy affiliate placement · Free Site attribution

**Next**
GHL actually configured and live · Free Site self-service at scale · 2–3 language translations of the highest-value pages · "This Week in the Bible" community rhythm · Universal Biblical Response Database build-out · Individual-law cluster pages improved · YouTube curation embeds

**Later**
NoahideTravel.com · Virtual Summit · Sponsorship program · 501(c)(3) evaluation · SmartReply / other FreeSites upsells · Full multilingual parity · Local / country community groups

---

## K. Five-stage build order

**Stage 1 — SEO preservation baseline**
Complete the audit in Section I. Freeze the DO-NOT-BREAK URL list. No production changes.

**Stage 2 — Information architecture & content**
Finalize the existing-vs-new URL map from the audit, write final on-page copy for all six primary pages against this spec, prepare the structured-data plan and any redirect map for consolidated URLs.

**Stage 3 — Build the core pages**
Implement homepage + five supporting pages on staging, preserving or redirecting existing URLs per the audit; implement nav/footer; wire GHL-bound forms to a placeholder endpoint until GHL is actually configured.

**Stage 4 — Build the Free Site system**
Implement qualification, onboarding, the five modules (My Light, Light I've Found, My Journey, Share the Light, Community), visibility controls, the visual system, attribution, and social share cards.

**Stage 5 — Launch, connect, validate**
Configure GHL (forms, tags, automations, channels), connect Donate/Stripe, deploy with correct redirects, submit the updated sitemap to GSC, monitor rankings for two weeks, then run the acceptance test in Section L.

---

## L. MVP acceptance test — 10 conditions

1. Every URL in the GSC top-25 (Section I) returns 200 and either preserves its content/intent or 301-redirects to an equivalent-or-better page — zero orphaned high-value URLs.
2. The updated XML sitemap is submitted in GSC and all six primary pages plus the Free Site landing are indexed or submitted within 7 days of launch.
3. The homepage contains, in order, all eleven sections specified in Section C — verified by content audit.
4. Declare is not the primary homepage CTA anywhere on the page — verified by design review.
5. The Seven Principles page clearly and accurately distinguishes the simplified beginner framing from the traditional formulation of the Seven Noahide Laws — verified against the editorial-discipline standard.
6. A test user can complete qualification and onboarding, publish a Free Site with at least one customized module, and reach a live public URL — without selecting a religious label or making a declaration.
7. The Free Site footer displays `Made with ♡ by FreeSites` exactly — heart symbol, no spelled-out "love."
8. "Join the Community — Free" appears on Home, Seven Principles, and Community, and successfully creates/updates a tagged contact record (test mode acceptable).
9. The Donate flow completes a test transaction, and no page anywhere claims tax-deductibility.
10. Homepage and Free Site template Core Web Vitals meet or exceed the pre-migration baseline captured in Stage 1 — no regression.

---

Report complete. No files modified, no URLs changed, no infrastructure configured. Holding for approval before Stage 1 begins.
