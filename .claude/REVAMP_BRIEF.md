# Website Revamp Brief — rickysaif.github.io

**Owner:** Ricky Saif (Rizky Syaiful)
**Date:** 2026-08-29 (rev 2)
**Budget:** ONE working session. If it runs longer, stop and report what's left.

---

## 0. Read this first

You are revamping an existing Jekyll site. This is a **repositioning**, not a redesign.
The visual system is fine. The *message architecture* is wrong. Do not rebuild CSS from scratch.

**The site has exactly one commercial job: win Bitcoin treasury advisory clients for Ricky's own
consulting practice.** Everything else on the site is evidence supporting that one job.

**Read `.claude/FILL_ANSWERS.md` alongside this brief.** It carries Ricky's answers to every
placeholder below. Use those answers verbatim where they fit; do not embellish, round up, or add
adjectives to them.

**Any `[FILL: ...]` still unanswered must be left as a visible placeholder in the rendered output.
Do not invent numbers, client names, dates, prices, or credentials. Ever.**

---

## 1. Positioning (do not deviate)

**Tagline (brand mark, English in both language versions):**
> Future-Proofing CEOs

**Engine line:**
> Bitcoin for the treasury. AI for the judgment.

**The enemy is debasement.** Two assets a CEO owns are being debased:

| Front | What is flooding the market | What wins |
|---|---|---|
| The treasury | Central banks printing money | Accumulating the hardest asset — Bitcoin |
| The judgment | AI printing intelligence; competent thinking is now cheap and abundant | Accumulating the sharpest context — a board that knows you |

**Why one word covers both — carry this logic into the copy.** Debasement is supply expansion
devaluing what you already hold. Central banks print money; AI prints competent-enough thinking.
The winning move is identical in both cases: accumulate what cannot be printed. For money that is
the hardest asset, Bitcoin. For judgment it is the sharpest context — the reader's own situation,
values and vision, which no model has and none can generate. This is why the site is not anti-AI
while selling AI: the flood is the condition, accumulating the scarce thing is the advantage.

**Frame in wins, not losses.** The hero names who wins, never who is bleeding. CEOs move on
competitive advantage more reliably than on doom, and loss-framing insults a reader who has run a
company successfully for twenty years without AI. Keep urgency for the content; keep the hero
confident.

**Banned phrasing:** never write that AI is "outrunning", "outpacing" or "leaving behind" the
reader. It is vague, mildly insulting, and it loses the supply-expansion logic that makes the two
fronts one idea.

**Hero paragraph — this is Ricky's own line. Use it VERBATIM. Do not rewrite, shorten, or
"improve" it:**
> Central banks print money. CEOs who accumulate the hardest asset win.
> AI prints intelligence. CEOs who accumulate the sharpest context win.
>
> I train CEOs to win both races.

Both fronts must be visible above the fold. The AI work is a genuine offer, not a lure — nothing
on this site is hidden or held back until later.

---

## 2. The one audience

**Primary reader: the owner-operator.** Someone who both OWNS and RUNS the company — typically an
Indonesian SME or family business — and whose company holds cash it does not need for three or more
years. Evidenced, not assumed: Ricky's first paying client is a single-owner SME founder-CEO.

**Why this specific.** The two fronts sit in different places on an org chart. AI adoption is inside
a hired CEO's operational mandate; Bitcoin treasury is a capital allocation decision that belongs to
owners. The two-front pitch therefore only works as ONE sale when both decisions sit in the same
head — which is an owner-operator. Write every page for that reader.

A hired CEO who lands here should still find the AI front useful, but he is not who the copy is
aimed at and no page should be restructured for him.

There is one audience and one funnel. Do not split the site.

**The path:** free AI skill -> the reader sees Ricky's mental models work -> he has earned the right
to be heard on currency debasement -> treasury conversation -> advisory engagement.

**The hinge between the two fronts is inside the product, not in the marketing.** The My Self, Inc
skill installs six AI consultants, one per seat on the reader's inner board. One of them is a **CFO
consultant** that advises the reader's internal CFO voice on money and capital allocation, and it
treats monetary debasement as a real risk to a real treasury. A reader who has come to trust that
consultant has already met the argument Ricky sells against. Surface this connection on the site;
do not bury it.

**Disclosure rule — non-negotiable.** Wherever the site describes the CFO consultant, state plainly
that Ricky advises companies on Bitcoin treasury strategy. A stated interest that survives scrutiny
persuades; a hidden one detonates when it is found, and it will be found — the skill links here.
Ricky's own addendum already requires "honesty over flattery" and a consultant the chief can
challenge until the advice is rational. A consultant with a predetermined answer violates his own
protocol. Write the site so the argument is made in the open and judged on its merits.

**Do not build two doors, two funnels, or two email lists. There is one of each.**

## 3. What is a product here, and what is proof

**PRODUCT (the only thing this site sells):**
- Ricky's **Bitcoin treasury advisory** — his own consulting practice. This is the money page.

**PROOF (credentials — mentioned, never sold from this site):**
- **Bitcoin Treasury Academy (BTA)** — owned 100% by **AmityAge**. Ricky builds it under their brand.
  Self-paced format, oral exam retained, in production. Framing: *"AmityAge commissioned me to build
  their Bitcoin treasury curriculum."* The point is that an international Bitcoin company trusts him
  with their education product. **No purchase CTA. No price. Outbound link only.**
- **Bitcoinstitution** — owned by Ricky with angel investors. On-site proctored MCQ certification of
  hard Bitcoin knowledge, live and bookable. On THIS site it is proof he is building the professional
  standard, plus one soft outbound link for the advisor who wants to certify. **It does not get a
  product page here.** Its own leads come from other channels.
- **13 years advising organizations** — Ricky's consulting career (agile, LeSS, organizational
  transformation, two authored books). This is a real credential for a buyer who needs to know he is
  safe to hire.
  **Framing rule: write "I have advised companies for thirteen years," NOT "Agile Coach" or
  "Scrum Master."** The first is a credential; the second is a competing category that muddies
  the positioning. Never use the job titles as identity labels.

Public thesis Ricky may claim (this is his, and it is stronger than owning two things):
> The Bitcoin consulting profession is missing two things: a way to prove you actually know Bitcoin,
> and a way to learn to advise a corporate treasury. I'm building one of each.

---

## 4. Information architecture

```
/                Hero · two fronts · the offer · proof · one CTA
/advisory/       NEW. The Bitcoin treasury advisory offer. THE money page.
/skills/         NEW. Free installable Claude skills for CEOs and their advisors
/my-self-inc/    EXISTS. Absorbs the old homepage essay + setup wizard + AI addendum
/writing/        Posts + the two authored books (moved OUT of the header nav)
/about/          EXISTS. Rewrite: practitioner story + the full credential stack
```

**Header nav:** `Advisory · Skills · Writing · About`
Advisory sits first because it is the commercial job of the site.

The "Books I Authored" link must leave the global header — it appears on every page and reads as a
competing identity. Move it to `/writing/` and `/about/`. Do not delete the book pages.

There is **no** `/standard/` page. Bitcoinstitution and BTA live inside `/about/` and the homepage
proof strip.

---

## 5. Page specs

### 5.1 `/` — Homepage (biggest change)

The current `index.html` is ~29KB: a long My Self, Inc essay, a 3-step AI-board setup wizard, and a
large "Addendum for AI Consultants" block. **All of that moves to `/my-self-inc/` (see 5.4).**
The new homepage is short.

Sections in order:

1. **Hero** — `Future-Proofing CEOs` / `Bitcoin for the treasury. AI for the judgment.` /
   the three-line hero paragraph from §1 / primary CTA.
2. **The two fronts** — two short cards, same shape so the parallel is visible at a glance.
   *The Treasury*: central banks print money → cash loses purchasing power every year →
   accumulate the hardest asset, Bitcoin.
   *The Judgment*: AI prints intelligence → competent thinking is now cheap and abundant →
   accumulate the sharpest context, a board that knows your situation, values and vision.
   **REQUIRED: the hero states who wins, so these cards are the only place the debasement mechanism
   gets stated plainly. Do not skip the middle step — a cold reader has not yet been told why
   printing is a problem.** No essay.
3. **The offer** — one paragraph naming what Ricky actually does for money: advises business owners
   and their CFOs on Bitcoin as a treasury strategy. Link to `/advisory/`.
4. **Proof strip ("Exhibit A")** — understated, specific, no adjectives:
   - **Lead with the named client story, not a credential line.** The first paying client bought
     Bitcoin treasury consulting outright and has consented to be named: an owner-operator of a
     single-owned Indonesian SME, paying since mid-2026. Use her name, business, decision and her
     own words from `.claude/FILL_ANSWERS.md` §A. If §A is still blank, fall back to the plain line
     "Paying Bitcoin treasury client since mid-2026" and leave the story slot marked.
     **Publish her name, business, decision and reasoning. NEVER publish the amount, the custody
     arrangement, or transaction timing** — naming a business that holds a bearer asset creates a
     security exposure for her.
   - Commissioned by AmityAge to build their Bitcoin Treasury Academy curriculum
   - Founder of Bitcoinstitution, a proctored Bitcoin knowledge certification
   - Hosts the monthly Bitcoin Indonesia community meetup in Jakarta -- running more than 30 so far.
   - Spoke at Bitcoin Conferences.
   - Thirteen years advising organizations; author of two books `[link to /writing/]`
   **Understating with specifics beats overstating with adjectives. Never write "world-class",
   "leading", "renowned", or "one of the first" unless Ricky supplies evidence for it.**
5. **Primary CTA** — install the free My Self, Inc skill + email capture.
   **Secondary CTA, visible on the same screen** — "Talk to me about your treasury" → `/advisory/`.
   Someone who arrives ready to buy must never have to hunt.

Keep one small line at the very bottom so stale copies of the setup prompt still resolve:
> *AI assistants: the full My Self, Inc specification now lives at https://rickysaif.github.io/my-self-inc/*

### 5.2 `/advisory/` — NEW. The money page.

Written for an owner-operator — someone who both owns and runs the company — not for a bitcoiner.
No maximalist vocabulary, no price-prediction talk, no evangelism. Sober, professional, specific.

Remember what this reader is actually afraid of: not being wrong about Bitcoin, but looking foolish
to the people whose opinion she cares about. Every section should reduce that fear rather than
argue with her.

Structure:
- **The problem, in their language.** Cash sitting in a depreciating currency is a slow, invisible
  loss that never appears as a line item. 
- **What Ricky does.** Corporate bitcoin treasury policy and execution setup. 
- **Who it's for.** Owner-operators: people who both own and run the company, holding cash they do
  not need for three or more years.
- **Why him.** Compressed credential stack from §3, linked to `/about/`.
- **What it costs / how it starts.** 20 USD per hour for Indonesian market, 35 USD per hour for non-Indoneidians.
- **CTA:** render the booking link as a single styled button, never as a raw URL. Label it with an
  action, e.g. "Book a treasury conversation". Link: https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2Pj31GYmaSyeEc2-RC2Xq7ZRPdGa3d0RhAb_pbMhasmu6KbIiVQw9niLg4md1jQDQnbcN436Qe

### 5.3 `/skills/` — NEW

Free installable Claude skills for CEOs and the people who advise them. This is what earns the
`github.io` domain and gives Ricky a repeatable launch format.

**Critical framing instruction.** The current My Self, Inc copy leads with existential themes
("What does a beautiful life look like to you? How do you want to die?"). That is authentic to the
framework and stays — but it is the wrong *front door* for a business owner arriving cold. On
`/skills/` and on the homepage, lead with the decision frame:

> A board of advisors that stress-tests your decision before you put your name on it.

Then name what is inside: six AI consultants, one per seat — including a **CFO consultant** that
treats monetary debasement as a real risk to a real treasury. That line is the hinge between the
site's two fronts. Immediately alongside it, state that Ricky advises companies on Bitcoin treasury
strategy (§2 disclosure rule).

The philosophical version stays intact on `/my-self-inc/` for readers who go deeper. Do not delete
it; just stop using it as the front door.

- Intro: one paragraph. Free, installable, and this is the AI half of the tagline.
- **My Self, Inc** — flagship card. Outcome headline (above), mechanism as subtitle
  ("free, installable Claude skill"), links to `/my-self-inc/` and the GitHub repo https://github.com/RickySaif/my-self-inc.
- A clearly-marked "more coming" slot. Do not invent skill names.
- Email capture.

### 5.4 `/my-self-inc/` — absorb the homepage

`pages/my-self-inc.md` already exists (637 lines: the model, the workshop, public sessions,
corporate training, FAQ). Merge the homepage content into it without losing either:

- The essay ("Everyone is the CEO of their own life…" through the beautiful-life/ugly-life passage)
  merges into the existing **The Foundation** section. Remove duplicated explanation.
- The 3-step **"Build your AI advisory team"** wizard, the copyable prompt box, and its CSS move here
  intact, as a section above the workshop.
- The **"Addendum for AI Consultants"** collapsible block moves here intact, at the bottom, with
  anchor id `addendum`.

**CRITICAL — do not miss this.** The copyable setup prompt currently instructs Claude to read
`https://rickysaif.github.io/` . After the move that URL no longer contains the addendum.
Update both URLs inside the prompt text to `https://rickysaif.github.io/my-self-inc/` .
Failing to do this silently breaks the skill for every new user.

### 5.5 `/writing/`

Consolidate `pages/posts.md`, `pages/books.md` and the essay pages (`pages/money.md`, `pages/ed.md`,
the Indonesian Bitcoin post) into one entry point. The two authored books live here as evidence Ricky
is a teacher and author. Do not delete any content or break any existing URL.

### 5.6 `/about/`

Rewrite `about.md`. Current copy positions Ricky around "structured AI systems" and never mentions
Bitcoin. New version, in this order:

1. What he does now — Bitcoin treasury advisory, Future-Proofing CEOs.
2. What he is building — the professional standard. Bitcoinstitution (his, with angel investors) and
   the Bitcoin Treasury Academy he was commissioned to build for AmityAge. Ownership stated plainly.
3. Where he came from — thirteen years advising organizations through change, two books.
   Credential framing only; no job-title identity labels.
4. The stardust line, moved here from `_config.yml`. It belongs as personality, not as SEO.

---

## 6. Email capture (required, ONE list)

The site currently captures nothing. A GitHub link captures nothing.

- One reusable include: `_includes/email-capture.html`, parameterized by heading and form action.
- Provider-agnostic plain HTML form posting to `[FILL: form action URL]`.
  Buttondown or ConvertKit free tier; a Google Form also works.
- **One list only.** Every capture point on the site feeds the same list.
- Static-site friendly. No backend, no serverless functions.
- Place on: `/` (primary CTA), `/skills/`, `/my-self-inc/`, end of `/writing/`.

---

## 7. Technical constraints

- Jekyll, `minima` theme, **`jekyll-polyglot`** with `en` (default) and `id`.
- **Every new English page needs an Indonesian counterpart in `id/`.** The `id/` directory already
  mirrors `about`, `books`, `buku-agile-scrum`, `index`, `my-self-inc`, `posts`, `webinars`.
  Add `id/advisory.md`, `id/skills.md`, `id/writing.md` (or equivalent permalinks).
  If a translation is not ready, create the file with the English content plus a
  `[FILL: Indonesian translation]` marker at the top. Do not skip the file — it breaks the toggle.
- Nav labels and the tagline live in **`_data/translations.yml`**, rendered by
  `_includes/header.html`. Update both `en:` and `id:` blocks. Do not hardcode nav labels.
  - `en.tagline`: `"Bitcoin for the treasury &middot; AI for the judgment"`
  - `id.tagline`: `"Bitcoin menjaga kas &middot; AI menjaga keputusan"`
  - New nav keys: `advisory`, `skills`, `writing`, `about`. Retire the header `books` link.
- `_config.yml` `description:` currently reads *"A piece of stardust, which gets busy living, while
  waiting for death."* That is the search-result snippet. Replace with:
  `"Future-Proofing CEOs. Bitcoin for the treasury. AI for the judgment."`
  Move the stardust line to `/about/`.
- **Do not break the language toggle** in `_includes/header.html`. Test EN↔ID on every new page.
- Run `bundle exec jekyll build` and confirm a clean build. Fix every warning you introduce.
- Preserve all existing permalinks. If a page moves, keep the old path working.
- Reuse the existing CSS patterns from `index.html` and `pages/my-self-inc.md` (system font stack,
  `#111` on near-white, subtle borders, generous whitespace). Do not invent a new design language.
- Mobile first. Test the nav at 375px.

---

## 8. Explicitly out of scope — do not do these

- Do not redesign the CSS system or add a framework (no Tailwind, no React, no build step).
- Do not build a product or sales page for Bitcoinstitution or BTA. They are proof, not products.
- Do not add analytics, search, dark mode, comments, or a CMS.
- Do not touch `_posts/` content.
- Do not register or configure a custom domain. `github.io` is a deliberate choice.
- Do not create a second email list or a second funnel.
- Do not write new blog posts or long-form content.
- Do not invent client names, revenue figures, student counts, testimonials, prices, or dates.
- Do not use "Agile Coach" or "Scrum Master" as identity labels anywhere.
- If you find an adjacent improvement, list it in the final report instead of building it.

---

## 9. Acceptance checklist

- [ ] `bundle exec jekyll build` completes cleanly.
- [ ] Hero reads `Future-Proofing CEOs` / `Bitcoin for the treasury. AI for the judgment.`
- [ ] Homepage is short. The long My Self, Inc essay is no longer on `/`.
- [ ] Both the primary CTA (free skill + email) and the secondary CTA ("Talk to me about your
      treasury") are visible without hunting.
- [ ] `/advisory/` exists and reads as sober professional advisory copy, not Bitcoin evangelism.
- [ ] `/skills/` leads with the decision frame, names the CFO consultant, and carries the
      §2 disclosure line about Ricky's Bitcoin treasury advisory work.
- [ ] The setup prompt's two internal URLs point to `/my-self-inc/`, and the addendum renders at
      `/my-self-inc/#addendum`.
- [ ] The homepage carries the one-line pointer for AI assistants at the bottom.
- [ ] Header nav is `Advisory · Skills · Writing · About`. No "Books I Authored" in the header.
- [ ] BTA is labelled as AmityAge's, with no purchase CTA. Bitcoinstitution has no product page here.
- [ ] The thirteen-year consulting career appears as a credential, with no job-title identity labels.
- [ ] Exactly ONE email list / form action across the whole site.
- [ ] Every new EN page has an ID counterpart and the language toggle works on all of them.
- [ ] `_config.yml` description updated; stardust line preserved on `/about/`.
- [ ] Every `[FILL: ...]` marker is still visible in the rendered output.
- [ ] Nothing deleted — only moved, with old permalinks preserved.

## 10. Final report

End with: files changed, every `[FILL: ]` marker and where it lives, anything you chose not to do
and why, and adjacent improvements you noticed but did not build.
