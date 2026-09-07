# Page Content — Donate

**Status:** Implementation-ready draft. Confirmed greenfield by SEO-EQUITY-AUDIT.md — no existing donation mechanism of any kind currently exists on the live site. Not published.
**Working URL:** `/donate/`

---

## Hero

**H1:** Help Us Share More Light

**Subhead:** Free education. Free community. Free personal sites. Your support keeps it that way.

**Opening:**
> Everything on this site — the teaching, the community, the free personal sites — is free because we believe it should be. That only works with support from people who believe in it too.

---

## Section: What your support funds

> - **Free education** — keeping every page on this site free to read, for anyone, anywhere.
> - **A free worldwide community** — a place with no membership fee, open to anyone seeking or learning.
> - **Free personal sites** — every "Share Your Light" site stays free for its owner, forever, at the basic level.
> - **Translation** — helping these principles reach people who don't read English first.

## Section: Honest disclosure (required, always visible near any donation CTA)

> Contributions support our mission and are **not currently tax-deductible.** We'll update this page immediately if that status changes.

---

## CTA

**Primary:** Give Now

**Secondary:** Join the Community — Free

---

## Internal links
About · Home · Community

## Content notes
- No suggested-amount pressure tactics, no urgency countdowns, no popups or interstitials — donation should feel like an open door, not a solicitation. Per CLAUDE.md: "monetization is required but must remain mission-aligned" and must never damage trust.
- The tax-deductibility disclosure line is not optional copy — it must appear near every instance of a donate CTA across the site (homepage section 10, this page, footer if a donate link appears there).
- Payment processing is handled by Stripe (per MVP-IMPLEMENTATION-SPEC.md); this page does not require GHL configuration to function, though a completion webhook should tag the contact for segmentation — see GHL-INTEGRATION-SPEC.md.
