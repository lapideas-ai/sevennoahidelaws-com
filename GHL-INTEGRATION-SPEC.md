# GHL Data & Integration Specification

**Status:** Specification only. GHL is NOT configured. This defines the minimum contact schema, forms, tags, and triggers needed for MVP — implementation-ready for whoever configures GHL in Stage 5.

---

## 1. Contact fields

| Field | Type | Set by | Notes |
|---|---|---|---|
| First name | Text | Any form | Standard GHL field |
| Email | Email | Any form | Required on every form; also serves as the dedupe key |
| Country | Select | Community form, Free Site onboarding | Free text acceptable if a select list isn't feasible at MVP |
| Preferred language | Select | Community form, Free Site onboarding | English only at MVP; field exists now so Next-phase multilingual work has somewhere to land |
| Seeker Stage | Single select (custom field) | Automation only, never directly by the visitor | See §3 |
| Principles Resonated | Multi-select (custom field) | Free Site qualification only | The 7 principles from HOMEPAGE-EXPERIENCE.md §4, stored as a list |
| Free Site Slug | Text (custom field) | Free Site publish | Blank until a site is published |
| Free Site Visibility | Select: Public / Unlisted / Private (custom field) | Free Site publish, editable later | Mirrors the site's own setting |
| Source | Text (custom field) | Any form, auto-captured | Referring page or campaign, e.g. `homepage-section-8`, `free-site-ref-{slug}` |
| Community Opt-in | Boolean (custom field) | Community form | Whether the contact should get community access/invites |
| Email Consent | Boolean (custom field) | Every form | Required for compliant email sending — no contact receives nurture email without this set true |
| Israel Travel Interest | Boolean (custom field) | Free Site onboarding, optional checkbox | Future NoahideTravel.com interest list only — no travel content ships in MVP |

---

## 2. Forms

### Form A — Join Community
Fields: First name · Email · Country · Preferred language · Email Consent (checkbox, required to submit)
Used on: Home (section 8 CTA), Community page
On submit → see §4 Trigger 1

### Form B — Free Site Qualification + Onboarding
Multi-step, matches FREE-SITE-SPEC.md §3–4:
- Step A (qualification): 7 checkboxes → written to `Principles Resonated`
- Step B (onboarding): Display name · Country · City (optional) · Photo (optional) · "What brought you here" (optional) · Preferred language · Default visibility · Email · Email Consent (required)
Used on: Free Site landing (`/free-site/`)
On submit → see §4 Trigger 2

### Form C — Content Subscribe
Fields: Email · Email Consent (required)
Used on: light micro-opt-in placement on Seven Principles and Why-Can't-I-Just-Be-Good pages
On submit → see §4 Trigger 4

### Form D — Donate
Not a GHL form — handled directly by Stripe Checkout. A Stripe webhook on successful payment calls into GHL to create/update the contact by email.
On success → see §4 Trigger 3

---

## 3. Seeker Stage (single select, highest stage reached — automation-set only)

| Value | Meaning | Set when |
|---|---|---|
| `Seeking` | Default/implicit — no form submitted yet | Never explicitly set; absence of the field means this |
| `Connected` | Joined the community | Form A submitted |
| `Sharing` | Published a Free Site | Form B completed and site published |
| `Supporting` | Has donated at least once | Stripe webhook success |

Seeker Stage only ever advances (never downgraded automatically), and does not replace the additive tags in §5 — a contact can be both `Sharing` and have the `Supporter` tag, for example.

---

## 4. Automation triggers (specification — not built)

**Trigger 1 — Join Community submitted**
Create/update contact → set `Community Opt-in = true` → advance Seeker Stage to at least `Connected` → tag `7NL-Member` → send Welcome email → send Introduction Prompt (delay 2–3 days) → present Free Site invitation (delay ~7 days, only if `Free Site Slug` is still blank).

**Trigger 2 — Free Site published**
Create/update contact → store `Principles Resonated`, `Free Site Slug`, `Free Site Visibility` → advance Seeker Stage to at least `Sharing` → tag `FreeSite-Created` → send Free Site Welcome sequence.

**Trigger 3 — Donation successful (Stripe webhook)**
Create/update contact by email → tag `Supporter` → advance Seeker Stage to `Supporting` → send donor thank-you email (must not claim tax-deductibility — see Page-Content/donate.md).

**Trigger 4 — Content Subscribe submitted**
Create/update contact → tag `Content-Subscriber` → add to future weekly-digest list (Next-phase content; tag exists now so no migration is needed later).

---

## 5. Tags (additive facts, independent of Seeker Stage)

`7NL-Member` · `FreeSite-Created` · `Supporter` · `Content-Subscriber` · `Country:{value}` · `Language:{value}` · `Source:{page or campaign}`

---

## 6. Privacy choices surfaced to the visitor

- **Community Opt-in** — explicit checkbox on Form A, not assumed by submitting the form.
- **Email Consent** — explicit checkbox, required on every form before any email is sent; unchecked = contact is stored but never emailed.
- **Free Site Visibility** — Public / Unlisted / Private, set at onboarding and editable anytime from the Free Site dashboard (not through GHL directly).
- **Israel Travel Interest** — optional, unchecked by default, used only to build a future interest list; no automation acts on it at MVP.

---

## 7. What this spec deliberately excludes at MVP

- No lead scoring beyond Seeker Stage.
- No SMS (email only for MVP; SMS field/consent can be added in Next-phase without restructuring this schema).
- No paid/gated content tier.
- No country/language-group community channels — Start Here / Introductions / Seven Principles / Psalms / This Week in the Bible / Q&A / Events remain the only channels (per MVP-IMPLEMENTATION-SPEC.md Section G).

This schema is intentionally small enough to configure in a single GHL session once Stage 5 begins — nothing here requires new fields to be invented at build time.
