# Pattern Inventory

Working document for the four-site revamp: **ronbronson.com (= masthead.ronbronson.com)**, **ronbronson.design**, **ronbronson.dev**, **thinkingweapons.com**.

Assembled 2026-10-20 from seven reference sites supplied by Ron. Analysis used REA browser inspection (live CDP), direct markup reads, and each site's One Page Love award entry where the original is offline. mattrothenberg.com is Ron's stated favorite and is weighted accordingly.

---

## 1. The reference set

| # | Site | Access | Register |
|---|------|--------|----------|
| 1 | specia1ne.com | live | austere, systematic |
| 2 | Elena Ryzhkovich (2022) | One Page Love SingleFile backup | playful, colorful |
| 3 | Kuldar Kalvik (2023) | One Page Love SingleFile backup | playful, modular |
| 4 | dillenverschoor.com | live | warm, illustrated |
| 5 | **mattrothenberg.com** ⭐ | live (Cloudflare-challenged for bots; content via archive) | deadpan, faceted |
| 6 | robbertlokhorst.nl | live | minimal, typographic |
| 7 | seanoshea.me | live | maximal, plain-spoken |
| 8 | brettbergeron.com | live (HTTP only) | near-zero |

---

## 2. Per-site findings

### 2.1 specia1ne.com — independent practice, Ukraine

- **Stack:** hand-built. No framework signatures. Own scripts, date-versioned (`reveal.js`, `hero-time.js`, `contact-form.js`, `site-overlay.js`, `site-buttons.js`, all `?v=2026-07-06-2`).
- **Type:** Geist + Geist Mono (Vercel's faces), self-hosted.
- **Palette:** warm off-white ground `#f2f1eb`, single electric-blue accent `#1d39f5`.
- **Structure:** five numbered sections — 01 Signal / 02 Selected Work / 03 Practice·System / 04 About / 05 Contact. Work list is indexed `01–05`, each entry carrying year-range + discipline tags (`Product · interface · build`).
- **Interactions:** scroll reveals, live Lviv local time in the header, nothing else. Restraint as the statement.
- **Copy register:** declarative, systems vocabulary — "Surface is what people see. System is what makes it work." Split-line headlines. Single mailto CTA, repeated once.

### 2.2 Elena Ryzhkovich (2022, Tilda)

- **Stack:** Tilda Zero Block; links out to Behance for case studies.
- **Type:** Hauora.
- **Palette:** black-dominant, signature yellow `#fff492` (20 uses), white, accents `#df607a` pink, `#60aadf` blue.
- **Interactions:** spinning elements throughout (33 rotate references in markup), smiley motif.
- **Register:** personality-forward portfolio as mood board. The site is a feeling, not an argument.

### 2.3 Kuldar Kalvik (2023, Tailwind)

- **Stack:** Tailwind per OPL; Satoshi embedded as base64 woff2 in the preserved file.
- **Palette:** dark-first — `#050608` / `#13171d` grounds, `#f2f6fa` text.
- **Structure:** modular bento grid on a visible grid.
- **Interactions (one-delight-per-module):** signature page-load animation, scribble-over-photo easter egg, live Spotify widget, time-aware greeting.
- **Register:** personal dashboard. The site as a desk with objects on it.

### 2.4 dillenverschoor.com

- **Stack:** hand-rolled; jQuery 3.6 + **p5.js** (the line-drawn "somewhat tall" figure is generative), own `carousel.js`.
- **Structure:** Now / Then career split. Work list with discipline tags (`branding`, `ux/ui`). Articles. Gumroad downloads (mockups/wallpapers — the site also sells).
- **Copy register:** gentle self-deprecation — "a — somewhat tall — digital designer." Collaboration credits in the footer.
- **Register:** approachable practitioner.

### 2.5 mattrothenberg.com ⭐ (the north star)

- **Stack:** Astro with islands — the component names are the feature list: `AutopilotToggle`, `LoopToggle`, `MobileNavSelect`, `ClientRouter`. Body starts `opacity: 0` and fades in.
- **Type:** **PP Editorial Sans** (Ultralight + Medium) + **PP Neue York Narrow Medium**, self-hosted. Same foundry (Pangram Pangram) as the Bronson sites' PP Neue Montreal / PP Pangram Sans.
- **Structure:** the page is a set of first-person facets, each an `h2`:
  - *I'm very employable* — job history, plain
  - *I code for fun* — open-source list with live GitHub star counts
  - *I freelance* — client name wall, no case studies
  - *I write words* — writing list tagged with per-venue favicons, year-stamped
  - *I am on the internet* — email + social links
- **The delight:** infinite loop scroll. The page loops its own content; a footer line reads "Stop it between the arrows." It's a joke you can operate, with an actual toggle (Autopilot).
- **Copy register:** deadpan first person. "I'm very employable" as a section header is the whole tone — confident, funny, zero adjectives about craft.
- **Why it works:** structure = personality. The facet list IS the argument; nothing editorializes.

### 2.6 robbertlokhorst.nl

- **Stack:** JS-rendered (GSAP history in project credits). REA inspection: 684 DOM nodes, **236 `<span>` elements — the name splits per-letter for animation**; 5 buttons including the theme "Switch."
- **Semantic standout:** freelance projects are marked up as **`<dl>/<dt>/<dd>`** — project name as term, year + stack as definitions (`WordPress, GSAP`, `Nuxt.js`, `Micr.io`). The list has real document semantics, not div soup.
- **Structure:** one screen of intro (name, discipline, city, current employer — Zendesk), then the project list, then email. Six responsive `<picture>` images.
- **Register:** minimal typographic; the animation does the talking.

### 2.7 seanoshea.me

- **Stack:** hand-rolled, minified own assets (`styles.min.css`, `main.min.js`), multi-page, no framework tells.
- **Structure:** the maximalist of the set — About (Background / Motivators / Philosophy / Education), four Hard Skills grids, Work (password-protected portfolio, Writing, Side Projects), Other Details (**Seeking** status, Most Recent Role, Time Zone), Elsewhere.
- **Notable:** "Transparency is important: All of the content on this page was written by a human, not AI."
- **Register:** plain-spoken completeness. Useful as a ceiling — this is what "spelling out bonafides" looks like when you say everything; the cost is it reads as a résumé.

### 2.8 brettbergeron.com

- **Stack:** 2.2 KB of HTML. A preloader with progress bar, a 13-image work slideshow, name, "Designer," email, LinkedIn. Nothing else.
- **Register:** near-zero. The floor of the set — proof that a portfolio can be thirteen pictures and two links.

---

## 3. Cross-site patterns

**P1 — Lists are the content.** Every site reduces to lists: work with year/stack/index (specia1ne, robbertlokhorst, dillen), writing with venue + year (mattrothenberg), clients as bare names (mattrothenberg), skills as grids (seanoshea). Prose is rare and short. Paragraphs appear only where someone is making an argument (specia1ne) or a joke (mattrothenberg).

**P2 — Section headers carry voice.** The header is where personality lives: "I'm very employable" / "I code for fun" (mattrothenberg), "Now / Then" (dillen), "01 Signal" (specia1ne). Same structure underneath; the header text sets register.

**P3 — One delight per site.** Signature load animation (Kuldar), scribble-on-photo (Kuldar), infinite-loop scroll with a working toggle (mattrothenberg), per-letter name (robbertlokhorst), p5 generative figure (dillen), preloader + progress bar (brettbergeron). Never two big ones.

**P4 — Live personal data as proof of life.** Spotify (Kuldar), local time (specia1ne), GitHub stars (mattrothenberg). → Ron's rail already does this better than all of them: last.fm, Letterboxd, Literal.

**P5 — Location + availability as factual furniture.** "Based in Ukraine 10:10 Lviv" (specia1ne), "Utrecht, the Netherlands" (robbertlokhorst), "Eastern Time," "Seeking: Lead UX roles" (seanoshea). Stated flat, in headers or rails.

**P6 — The register spectrum is a choice, not a gradient.** Austere (specia1ne, brettbergeron) and playful (Elena, Kuldar) both work; the failures would be in-between mush. mattrothenberg threads it by keeping structure strict and putting the humor in the copy.

**P7 — Self-hosted type, one foundry voice.** Satoshi (Kuldar), Geist (specia1ne), Hauora (Elena), PP Editorial Sans + PP Neue York (mattrothenberg). Nobody uses system fonts; nobody loads Google Fonts. Ron's PP Neue Montreal + PP Pangram Sans already fit this pattern exactly.

**P8 — Contact is a mailto, once.** No forms except specia1ne's. Email + 3–5 elsewhere links.

---

## 4. Current state: the four properties

| Property | Repo | Stack | What it is now |
|---|---|---|---|
| ronbronson.com = masthead.ronbronson.com | `bonus-time` | hand-authored HTML | the argument + the rail (Listening/Watching/Reading/Favorites/Links, Top 8, Design as Repair embed). Intro/Practice/Let's Talk About currently removed, slots marked. |
| ronbronson.design | `2026-site` | hand-authored HTML (Astro is in `legacy/`) | lede ("Finds messy systems…") + The Feed + Selected interviews/talks/writing + Teaching + Host & Events + Elsewhere; pages: about, how-i-work, reading, talks |
| ronbronson.dev | `dev-site` | hand-authored HTML | "Working Catalog of Complex Systems" — 14 named projects (Beachwave, Mallo, Viperball, Cap Buffet…) + Concepts & Experiments + colophon |
| thinkingweapons.com | `think` | hand-authored HTML | studio one-pager: Capabilities, About, Selected work (PDX Futures Bureau, Consequence Design, Death to UX…), colophon |

**Shared infrastructure already in place:** `site.css`/`palette.js` copied verbatim (front door); the "Colophon, with Digressions" idiom appears on .dev, .design, and think; standard.site AT-Protocol publishing wired into dev-site and 2026-site via GitHub Actions.

## 5. What a search surfaces vs. what the sites say

A stranger searching "Ron Bronson" finds: **Head of Design at 18F** (Digital.gov training, interviews), **Taubman College / University of Michigan faculty**, **Consequence Design** (the named practice, since 2017), IxDA Oslo "Design as Repair," podcast episodes (Outcome Conf, Spotify), this site family, and the sports/simulation projects.

Gap analysis:

- **18F Head of Design** — the single most-cited fact online; currently confined to the front door's (removed) Practice paragraph and .design's about page. Under-owned.
- **Michigan faculty** — surfaces via Taubman directory; front door links courses but the faculty standing is implicit.
- **Consequence Design** — the most search-visible *idea*; lives properly on think's selected work and .design, but no property owns the definitive page for it.
- **The catalog** (.dev) — strong on what things are, light on why they matter; README already flags "lower the temperature" as a front-door rule, but .dev argues significance per-entry with no skimmable index idiom (no years, no stack tags — the P1 patterns from every reference site).
- **Talks/interviews** — collected on .design; the set is bigger and more legible elsewhere (YouTube/Spotify) than the sites admit.

## 6. Differentiation proposal

One register per property, drawn from the reference spectrum:

| Property | Register | Reference anchor | Its job in the family |
|---|---|---|---|
| **ronbronson.com** (front door / masthead) | deadpan faceted — strict structure, humor in the copy | **mattrothenberg** | the argument; personality; rail stays the counterweight |
| **ronbronson.design** | the practice, stated plainly — how the work works | specia1ne | owns talks, teaching, interviews, writing — the *how* bonafides |
| **ronbronson.dev** | the catalog — indexed, tagged, skim-able | robbertlokhorst + specia1ne list idioms | owns what got built — the *made* bonafides |
| **thinkingweapons.com** | the studio — license for the playful end | Kuldar/Elena, one delight only | owns Consequence Design as a practice with a history since 2014 |

Bonafides get spelled out by **distribution, not duplication**: each property states the credentials native to its register, and the Elsewhere/doors links make the full set one click from anywhere. The front door keeps its no-CV rule; the CV-register material lives where it has context (.design for talks/teaching, .dev for shipped things, think for the studio's exhibition history).

## 7. Pattern → property mapping

| Pattern | Where it lands |
|---|---|
| First-person facet headers ("I X") (mattrothenberg) | front door — candidate structure for the main column |
| Infinite-loop scroll gag | front door, maybe — risks gimmick; decide in sketch phase |
| Indexed work list, year + stack tags (specia1ne/robbertlokhorst) | **.dev** — its project index currently has neither |
| `<dl>/<dt>/<dd>` semantic lists (robbertlokhorst) | .dev and front door list modules |
| Local time / location furniture (specia1ne/seanoshea) | front door rail (Contact module) |
| Live data widgets (Kuldar's Spotify) | already have better: Listening/Watching/Reading |
| One-delight rule | every property gets exactly one new interaction, no more |
| Venue-favicon writing list (mattrothenberg) | .design's Selected writing / interviews |
| "Written by a human" transparency note (seanoshea) | family-wide colophon candidate — fits the existing "Colophon, with Digressions" idiom |
| Skills grids (seanoshea) | nowhere — wrong register for all four |

## 8. Constraints carried into sketches

- `site.css` / `palette.js` are verbatim-shared across the four repos — never edited; site-specific CSS goes in `front.css` or `<style>` blocks.
- Hand-authored HTML; no build step (2026-site's Astro is legacy only). New machinery must degrade like the letterboxd module: page works if it never runs.
- All fills opaque (the 2px-gap grid trap). `RBPalette.audit()` after any color change; `--ink-soft` fails AA on Pollen.
- Email never enters the DOM raw — `data-contact` pattern only.
- Accessibility habits from think: skip nav, visible focus, reduced-motion support.
- Copy: Ron drafts, agent rewrites. Sketches carry `<!-- DRAFT -->` markers on any proposed words.
- READMEs get updated in the same change that alters anything they document.

## 9. Next

Phase 3: HTML sketches, 1–2 directions per property, on branches. Suggested order: **.dev first** (clearest gap, most list-idiom payoff), then **front door** (facet-structure experiment against the removed-copy slots), then **.design**, then **think**.
