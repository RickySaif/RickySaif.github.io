# Site brief: Ricky Saif, AI Consultant for CEOs (rebrand, Oct 2026)

Replaces the 2026 "Future-Proofing CEOs / Bitcoin treasury" brief. Bitcoin is gone from the
positioning entirely. Old essays (`/money`, `/id/ed`) stay reachable but are `noindex`,
excluded from the sitemap, and linked from nowhere.

## Job of the site
Ricky's public face. Connect with as many CEOs and business owners as possible. Turn trust
from free tools into paid one-hour online sessions.

## Positioning
- Identity: **AI Consultant for CEOs** (ID: Konsultan AI untuk CEO).
- Tagline: "Free AI tools. More profit, less cost." / "Alat AI gratis. Untung naik, biaya turun."
- Every tool and case is tagged with one lever: **profit** or **cost**.
- Why Ricky: software developer + 13 years advising organizations + 2 books.
- Voice: `ricky-saif-voice` skill. Short paragraphs, plain words, problem first.

## Offer
1. Free tools: open source at https://github.com/orgs/RickySaif/repositories (`site.github_url`).
2. Paid: online session, from Rp 200.000 per hour (`site.session_price`). CEO session or team
   session. Booking via `site.booking_url`; payment details after booking. Online only for now.
3. WhatsApp channel for "new tool shipped" news (`_includes/whatsapp-cta.html`).

## Rules
- Competitor work is framed as "study what they have proven, build your own version". Never
  "copy their code, text, images or brand".
- Case studies are walkthroughs. No invented clients, numbers or testimonials. Put real
  outcomes in a case's `result` front matter only when they exist.

## How to add things
- **New case:** add `_cases/<slug>.md` (EN) and `_cases/id/<slug>.md` (ID). Front matter:
  `title, summary, lever, order, visual, steps, repo_url, result, lang`. It appears on home,
  `/cases/` and the sitemap automatically. `visual` picks a drawing in
  `_includes/visuals/case-icon.html` (unknown keys fall back to a neutral spark).
- **New tool:** append to `_data/tools.yml` (bilingual `summary`).
- **New page:** EN in `pages/`, ID twin in `id/` with the same `permalink` and `lang: id`.

## Structure
Nav: Consulting, Cases, Tools, Writing, About, plus the EN | ID switch and "Book a session".
`/advisory/` and `/skills/` are redirect stubs (`_layouts/redirect.html`).
OG images: `assets/images/og/og-en.png`, `og-id.png` (1200x630).
