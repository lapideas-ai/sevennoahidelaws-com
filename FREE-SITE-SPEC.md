# Free Site Giveaway — Implementation Specification

**Status:** Implementation-ready prototype spec. Not built. Confirmed greenfield by SEO-EQUITY-AUDIT.md — `freesites.com` is already linked from the live homepage, so this builds on an existing brand association, not a cold introduction.
**Working URL:** `/free-site/`
**Journey:** BELIEVE → DISCOVER → FIND YOUR LIGHT → SHARE YOUR LIGHT → FIND EACH OTHER

---

## 1. Journey → UI mapping

| Journey stage | What it means | Concrete UI moment |
|---|---|---|
| **BELIEVE** | The visitor already holds some of these principles, even without a label for them | The qualification checklist (Step 2) — recognition, not a test |
| **DISCOVER** | The visitor sees their answers reflected back as something coherent | The "Here's what we found" moment immediately after qualification (Step 3) |
| **FIND YOUR LIGHT** | The visitor gets a personalized starting point | Generated content (Step 4) |
| **SHARE YOUR LIGHT** | The visitor makes it their own and publishes | Customizable modules + publish (Steps 5–7) |
| **FIND EACH OTHER** | The published site connects back into community and discovery | Community module + social sharing + referral loop (Steps 8–10) |

No step requires the words "Noahide," "declaration," or "convert." Those words may appear later, optionally, inside "My Light" if the person chooses to use them themselves.

---

## 2. Step 1 — Landing

**Headline:** Find Your Light. Share It With the World.

**Body:** Build a free personal page for what you've discovered — no religious label required, about five minutes.

**Visual:** One real example site shown as a preview card (once available); until then, a single stylized representative frame — never a fabricated "member" screenshot presented as real.

**CTA:** Start — It's Free

---

## 3. Step 2 — Qualification (BELIEVE)

Not a quiz. No pass/fail. No minimum required. A "do you recognize these?" checklist mirroring the homepage's Seven Universal Principles (see HOMEPAGE-EXPERIENCE.md §4), written in first person:

- [ ] I believe there is one Creator.
- [ ] I try to speak about G-d — and to others — with respect.
- [ ] I believe human life is sacred.
- [ ] I try to protect my family and honor real boundaries.
- [ ] I believe honesty matters, and what's someone else's stays theirs.
- [ ] I believe cruelty toward living creatures is wrong.
- [ ] I believe in real justice, even when it's inconvenient.

**Microcopy beneath the list:** Check what's true for you. There's no wrong number — even zero.

---

## 4. Step 3 — Discovery moment

Immediately after qualification, before onboarding fields, a short reflective screen:

**Headline (dynamic based on count checked):**
- 0 checked: "That's alright. Keep exploring — you can always come back to this."
- 1–3 checked: "You already hold part of this. Let's help you find the rest."
- 4–6 checked: "You already believe most of this."
- 7 checked: "You already believe all seven. There may already be a name for what you believe."

**CTA:** Continue to build your site.

---

## 5. Step 4 — Onboarding questions

| Field | Type | Required |
|---|---|---|
| Display name | Text | Yes |
| Country | Select | Yes |
| City | Text | No |
| Photo | Image upload | No |
| What brought you here? | Free text | No |
| Preferred language | Select | Yes |
| Default site visibility | Public / Unlisted / Private | Yes (default: Public) |
| Email | Email | Yes |

---

## 6. Step 5 — Generated content (FIND YOUR LIGHT)

System-drafted starting point, editable before publish:
- A short "My Light" intro paragraph, templated from the principles checked in Step 2 and the "what brought you here" text if provided.
- One suggested Psalm or verse, matched to the principles selected (drawn from the existing Psalms/Universal Bible Themes content library — see CLAUDE.md's "Universal Biblical Response Database" concept).
- One or two starter "Light I've Found" entries, pre-populated but fully replaceable.

**Editorial guardrail:** generated text must never assert a religious identity or declaration on the person's behalf ("I am a Noahide" must never be auto-inserted) — it may only ever reflect what they explicitly selected or wrote.

---

## 7. Step 6 — Customizable modules (SHARE YOUR LIGHT)

| Module | Purpose | Default visibility |
|---|---|---|
| **My Light** | Personal statement, fully editable, no forced declaration language | Public |
| **Light I've Found** | Curated, shareable quotes/verses/principles from the content library | Public |
| **My Journey** | Optional freeform story or timeline entries | Private |
| **Share the Light** | Social links, a favorite Psalm, a downloadable graphic, an invite link | Public |
| **Community** | Recent GHL community activity, a "say hello" prompt, a join button | Public |

Each module can be hidden entirely (not just made private) if the member doesn't want to use it.

---

## 8. Step 7 — Public / private controls

- One whole-site toggle: **Public** (indexable, shareable) / **Unlisted** (link-only) / **Private** (member-only, requires login).
- Per-module visibility toggle beneath the whole-site setting, defaults per the table above.
- Visibility changes take effect immediately, no publish delay.

---

## 9. Visual system

Follows DESIGN-SYSTEM.md exactly — the Free Site is a family member of SevenNoahideLaws.com, not a separate product skin:
- `--ivory` base, `--teal-deep` for the one emotional section (typically "My Light"), `--gold` reserved for the single primary action on the page (e.g. "Publish" or "Share").
- One restrained dove mark, used at most once per site (e.g. near the Community module), never repeated.
- Manrope for the member's name/headline, Source Sans 3 for body content, Source Serif 4 italic reserved for quoted Psalms/scripture only.
- No autoplay, no particle effects, no flying-dove animation — same motion restraint as the main site.

---

## 10. Branding & attribution

Site footer carries, exactly as specified:

```
Made with ♡ by FreeSites
```

The ♡ sits between "with" and "by." The word "love" is never spelled out. This appears once, in the footer, small — not as a watermark across the page.

---

## 11. Social sharing (FIND EACH OTHER)

Each public module has a share action generating a branded card using the site's own visual system (a quote, a verse, or a milestone) — not a generic "check out my page" link. Cards are rendered server-side at share time so they always reflect current content.

## 12. Organic referral loop

Every shared card links back to `/free-site/?ref={member-slug}`. A visitor arriving via that link sees "Shared by {Name}" on the Step 1 landing screen before starting their own qualification flow — closing the loop: find your light → share your light → find each other.

---

## 13. GHL connection points (architecture only — see GHL-INTEGRATION-SPEC.md for full field/tag schema)

- Step 4 submission creates/updates a GHL contact, tags `FreeSite-Created`, stores `PrinciplesResonated` from Step 2.
- Community module (Step 6) reads live activity from the GHL community and links to the join flow.
- Publishing a site triggers the Free-Site-Welcome email sequence.

---

## 14. What this spec does not decide

- Final visual layout/grid of the published site template (a follow-on design task, not blocked by anything above).
- Whether Free Sites live at `username.7nl.org` or a `sevennoahidelaws.com/free-site/{slug}` path — this is a 7NL.org/SevenNoahideLaws.com domain-ownership question, not an SEO-equity question, and is unaffected by the pending GSC hold. Flag for a separate decision before Stage 3.


Every 7NL Free Site is simultaneously (1) a personal LIGHT site, (2) a node in the worldwide 7NL community, (3) optionally monetizable by its owner through Support/Donate, and (4) a potential FreeSites affiliate/distribution point. The three initial visual choices are Minimal, Serene, and Warm, with LIGHT as the shared visual motif.

