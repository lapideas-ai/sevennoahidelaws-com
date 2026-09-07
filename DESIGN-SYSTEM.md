# Design System — SevenNoahideLaws.com

**Status:** Safe pre-build work — not blocked by GSC data. Governs visual implementation for all approved MVP pages and the Free Site system.
**Doctrine:** LIGHT + PEACE + HUMANITY

---

## 1. The feeling, stated plainly

Spiritual without looking religious. Ancient without looking old. Universal without looking generic. Hopeful, human, peaceful, multicultural, spacious, modern, credible, beginner-friendly.

**Avoid:** church-site aesthetic, synagogue-site aesthetic, rabbinic-institution aesthetic, generic SaaS template, generic AI-gradient look, visual clutter, excessive religious symbolism, autoplay hero video, particles, flying doves, parallax gimmicks, decorative animation without function.

**The governing test for every screen:** one primary job per section, generous whitespace, large clear typography, minimal copy, restrained color, restrained motion. If a decorative element doesn't help someone read, understand, or act faster, remove it.

Light is communicated through **composition, photography, whitespace, typography, and restrained color** — not through gradients, glow effects, or lens-flare graphics. Peace is communicated through the **dove**, used as a single, quiet mark — never a repeating pattern, never animated in flight.

---

## 2. Typography

| Role | Typeface | Weight | Notes |
|---|---|---|---|
| Headlines (H1/H2) | **Manrope** | 600–700 | Tight leading (1.05–1.15), `text-wrap: balance`. Never all-caps at large sizes. |
| Subheads (H3/H4) | **Manrope** | 600 | Slightly looser leading than H1/H2. |
| Body / UI / labels | **Source Sans 3** | 400 (body), 600 (UI/labels/buttons) | Body max-width ~65–70ch. UI labels may use small caps + slight letter-spacing; body copy never does. |
| Quotation accent | **Source Serif 4**, italic | 400–500 | Reserved *exclusively* for scripture excerpts, Psalms, and pull-quotes. Never used for headlines or UI. This is what signals "ancient" without looking dated. |

**Type scale (desktop / mobile):**

| Token | Desktop | Mobile | Use |
|---|---|---|---|
| `display` | 56–64px | 34–40px | Homepage hero headline only |
| `h1` | 42–48px | 30–34px | Page H1 |
| `h2` | 30–34px | 24–26px | Section headline |
| `h3` | 22–24px | 19–20px | Subsection / card headline |
| `body-lg` | 18–19px | 17px | Lede paragraphs |
| `body` | 16–17px | 16px | Standard copy |
| `label` | 13–14px | 13px | Eyebrows, form labels, tags |
| `quote` | 22–28px | 19–22px | Source Serif 4 italic, scripture/pull-quotes only |

Line height: 1.1 for display/H1, 1.25 for H2/H3, 1.6–1.7 for body. Never justify text.

---

## 3. Color

| Token | Hex | Role |
|---|---|---|
| `--ivory` | `#FFFDF7` | Primary page background. The default ground for nearly every section. |
| `--ink` | `#18232A` | Primary text on light backgrounds. Also the default headline color. |
| `--teal-deep` | `#173B43` | Dark section backgrounds (Light, Community), primary button fill (default case), headline emphasis. |
| `--gold` | `#F2C14E` | **Sparing accent only** — the page's single most important CTA, a small icon, an underline, a light-motif mark. Never a large fill, never a background field, never repeated more than once per screen. |
| `--gold-soft` | `#FFF1BE` | Tinted wash for one warm-emphasis moment per page (e.g. behind the Light section's promise line) or a hover state. Not a general-purpose background. |
| `--peace-teal` | `#7FAEA8` | Dove/peace accent, secondary buttons, links, Community section accents. |
| `--stone` | `#F3F0E8` | Secondary neutral background for alternating sections, cards, footer. |

**Gold discipline:** every screen gets at most one prominent gold moment. If a page already used gold for its primary CTA, the next accent need — an icon, a divider, a highlighted word — uses `--peace-teal` or `--teal-deep` instead. Gold sprayed across multiple elements on one screen reads as decoration, not light; used once, it reads as illumination.

**Dark sections:** `--teal-deep` background pairs with `--ivory` text and `--gold` (single accent only) or `--peace-teal` (secondary elements). Reserve dark sections for genuine emotional peaks — the Light section and, optionally, Community — not for routine content blocks.

---

## 4. Layout & spacing

- 8px base unit. Section vertical padding: 96–140px desktop, 56–72px mobile.
- Content shell max-width 1200px; running text column max-width ~680px (65–70ch).
- Layout via flex/grid with `gap`, not stacked margins.
- Mobile-first: design the single-column phone layout first, then expand.
- One primary job per section — a section that both explains a concept *and* asks for three different actions has lost its job.

---

## 5. Motion

Restrained and functional only:
- Simple fade/slide-in on scroll is acceptable if it helps sequence a long page like the homepage — never required, never used to hide poor pacing.
- No autoplay video, no particle effects, no parallax, no animated/flying doves.
- Respect `prefers-reduced-motion` — every animated transition has a static equivalent.
- Hover and focus states should be immediate and clear (no elaborate hover choreography).

---

## 6. Imagery

- Multicultural, human, real-feeling photography — people, not stock-religious iconography.
- Light expressed through natural directional light in photography (dawn, window light, open sky) rather than digital glow/gradient overlays.
- Existing 7NL LIGHT/dove graphics (Psalm graphics, "7 Laws of Light" material referenced in the SEO audit) are legitimate brand assets — reuse and extend their visual language rather than replacing it wholesale.
- No decorative stock imagery that doesn't carry meaning specific to the section it sits in.

---

## 7. The dove

The dove is the established symbol of **peace**, not a decorative motif. Rules:
- A simple, single-line/line-art mark — not a photorealistic or animated dove.
- Appears **at most once per page** — typically as a section divider near Community or Peace-themed content, or a small corner mark.
- Never repeated as a pattern, background texture, or wallpaper.
- Never mid-flight/animated — stillness is part of what makes it read as peace rather than decoration.

---

## 8. Components

**Buttons**
- *Primary (default):* `--teal-deep` fill, `--ivory` text.
- *Primary (page's #1 action only):* `--gold` fill, `--ink` text — reserved for the single most important CTA on a page (e.g. "Create Your Free Site" on the Free Site landing, "Join the Community — Free" on Home). Not used for every primary button on every page.
- *Secondary:* outline/ghost — `--teal-deep` border and text on light backgrounds, `--ivory` border and text on dark backgrounds.
- Generous padding (min 44px tap target), 6–8px corner radius (soft, not pill-shaped, not sharp).

**Cards**
- `--stone` or `--ivory` background, 1px hairline border (`rgba(23,59,67,0.12)`), no heavy drop shadows — a faint, close shadow at most.

**Section dividers**
- A hairline rule or a single restrained dove mark — never a decorative graphic band.

**Tags / pills** (e.g. principle labels, community tags)
- `--stone` background, `--teal-deep` text, small label type, pill-shaped — the one place a rounded/pill shape is appropriate, since it's functioning as a UI chip, not a content container.

---

## 9. Do / Don't summary

| Do | Don't |
|---|---|
| One gold accent per screen | Gold buttons, gold text, and gold backgrounds on the same screen |
| Light through whitespace + typography | Light through gradients or glow filters |
| A single still dove mark | Repeating dove pattern or animated flight |
| Real multicultural photography | Generic stock-religious imagery |
| Functional scroll reveal, used sparingly | Parallax, particles, autoplay video |
| Manrope for structure, Source Serif 4 for scripture only | Serif headlines, or Source Serif 4 used for UI/body copy |
| Generous whitespace, one job per section | Dense stacked CTAs, competing calls to action |

This system applies identically to the six MVP pages and the Free Site templates — the Free Site should feel like a family member of SevenNoahideLaws.com, not a different product wearing the same logo.
