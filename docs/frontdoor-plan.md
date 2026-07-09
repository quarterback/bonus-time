# Interactive "choose your own adventure" front door for ronbronson.com

> Status: **planned, not yet built.** Copy is being drafted first (by Ron); the build
> follows once the copy is in hand. See the copy deck at the end of this file.

## Context

Today `ronbronson.com` (this repo, `bonus-time`) is a single-screen **front door**:
masthead, a short bio + credentials, and **two doors out** (`ronbronson.design`,
`ronbronson.dev`), plus a Paik quote and one rotating "digression." Its whole job is to greet
a visitor and route them onward — but it routes everyone the same way.

The idea is to turn that greeting into an **interactive "choose your own adventure"**: when
someone lands, *they* decide how they want to engage, and the page serves the
content/experience that fits that choice. It's an evolution of the "two doors" idea from
*here are my two sites* into *how do you want to do this?*

> ⚠️ The git branch is `claude/ghana-interactive-intro-3b9m8o`. The name is a speech-to-text
> artifact ("Ghana" was a mistranscription) — **there is no Ghana content and none is
> planned.**

## The concept: "How do you want to do this?"

The masthead **"Ron Bronson"** holds. In place of the fixed intro + two static doors, the
visitor gets one framing question and a small set of **ways in**, each drawn in the existing
ruled-frame "door" language. Picking one animates the others away and reveals a short, paced
sequence (2–4 "beats" — copy + the right links) tuned to that choice. **Every path
reconverges** on the two real doors (`.design`, `.dev`) + a way to reach Ron, so nothing
dead-ends. A guided spine with a single real fork — the right amount of "adventure" for a
front door, not a deep branching tree.

**Proposed four ways in** (first-draft names — the axis is still open):

| Door | For whom | Reveals |
|---|---|---|
| **Just the facts** | recruiters, press, the busy | the 20-second version — who Ron is, what he's doing now (civic trust infra, Michigan/Taubman, State Capacity AI, ex-18F), then the doors out + contact |
| **Show me what you make** | the curious builder | the catalog side → `ronbronson.dev` projects, invented sports, ATProto experiments |
| **I might want to work with you** | collaborators, clients | the practice → tactics/talks + "how I work" on `ronbronson.design`, + contact |
| **I'm just poking around** | everyone else | the human path → the rotating digressions (Packers shareholder, tea sommelier, the 91-33-4 tennis record, Discogs, fragrances), Last.fm, the Paik line |

A persistent **"↺ start over"** returns to the chooser. The chosen path is reflected in the
URL hash (e.g. `#make`) so a path is shareable and restores on load.

## Decisions

1. **Stack — zero-build, GSAP vendored into `assets/`, NOT Astro.** The whole three-site
   ecosystem is deliberately zero-build hand-authored HTML; bonus-time is one screen; Astro
   would add a toolchain for a single page with no reuse payoff. GSAP is self-hosted (fonts
   are already self-hosted; the site advertises a no-dependencies ethos) rather than a
   runtime CDN. *Alternative, if standardizing on Astro later: stand up an Astro project for
   `.com` — bigger lift; the `.design` `legacy/` build is a reference.*
2. **Fallback — skippable by default.** Interactive on load, but with a "show me everything"
   escape, a return-visitor bypass (localStorage), a static all-content baseline when JS is
   off, and **no motion under `prefers-reduced-motion`**. Keeps the site's accessibility
   stance (the palette engine audits its own WCAG contrast).
3. **Copy — Ron drafts first**, then the build is assembled around the real words. (Updated
   from the original "draft a first pass for you" — see the copy deck below.)
4. **Format — hybrid:** one guided spine per choice, the choice is the only fork, all paths
   reconverge on the doors + contact.

⚠️ **Tension to hold:** the house register is a restrained "Bell Labs / IBM technical
memorandum" — the `.dev` redesign notes even *removed* a blinking cursor. An animated CYOA
pushes against that. Intent is **structural motion, not decoration**: the ruled frames
reconfiguring themselves (staggered reveals, cards receding) so it reads as *a technical
artifact that rearranges itself*, not a splashy microsite.

## Implementation (when copy is ready)

House pattern = one HTML file linking shared `assets/site.css` + `assets/palette.js`, with a
per-page `<style>` block and small vanilla JS. Keep that idiom.

- **`index.html`** — rewrite the `<body>` and the page `<style>` block. Keep the `<head>`,
  palette/fonts, `.wrap`/`.masthead` shell untouched. Structure the body as progressive
  enhancement: **all path content is real HTML in the DOM**; JS only governs which beat is
  shown and animates the transitions. Reuse the existing `.door` frame language for the
  chooser cards. Keep the colophon + Paik quote as the "poking around" path's payload and
  the footer convergence. Update `<title>`/`meta description`.
- **`assets/frontdoor.js`** (new) — the experience controller, mirroring the `palette.js`
  convention: a small state machine for choose → reveal beats → start over, hash sync,
  return-visitor bypass, and a hard `prefers-reduced-motion` branch that swaps GSAP
  animations for instant `.set()`. Choices are real focusable `<button>`/`<a>` elements
  (Enter/Space), with a "show everything" skip control for assistive tech.
- **`assets/gsap.min.js`** (new) — vendored GSAP core (~70KB), loaded before `frontdoor.js`.
  Core timeline/tween API only; no plugins.
- No `site.css` change required (per-page `<style>` block carries the new classes);
  `palette.js` / the theme dock keep working unchanged.

## Verification (end-to-end, in the browser)

The site is static, so drive the real file with the pre-installed Chromium + Playwright
(`PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`, no install needed), loading
`file:///.../bonus-time/index.html`:

1. Each choice reveals the right beats and correct outbound links; every path ends on the
   `.design`/`.dev` doors + contact.
2. "↺ start over" returns to the chooser; deep-link `#make` restores that path on load.
3. Emulate `prefers-reduced-motion: reduce` → content appears with no motion; all choices
   still work.
4. Keyboard-only: Tab to a choice, activate with Enter; the "show everything" skip control
   exposes all content.
5. Palette/theme dock still switches themes; no console errors; layout holds at <680px and
   at desktop width.
6. JS-off degradation: with scripts disabled the page shows all content as plain stacked
   sections (≈ today's front-door experience).

## Out of scope (for now)

- The "overlay that intercepts *any* of the sites" idea — this lands on `.com` only (the
  natural front door, and easiest). If it works, the same `frontdoor.js` pattern can be
  ported to `.design`/`.dev` later.
- Any Astro migration, unless the Astro stack option is chosen.

---

## Copy deck (Ron drafts this first)

Every text slot the experience needs, in order, seeded with copy that already lives on the
site so it's not a blank page.

### 0 · Page meta
- `<title>` (currently "Ron Bronson") → …
- meta description (currently "Ron Bronson — front door. Work and a working catalog of
  projects.") → …

### 1 · The framing question (the line under the name that asks how they want to engage)
- … *(working idea: "How do you want to do this?")*

### 2 · The four doors (button label + one-line caption each)
- A · label "Just the facts" → … · caption → …
- B · label "Show me what you make" → … · caption → …
- C · label "I might want to work with you" → … · caption → …
- D · label "I'm just poking around" → … · caption → …

*(Rename/re-scope any door, or change how many there are — the axis is still open.)*

### 3 · The beats behind each door (2–4 short blocks per path — a heading + a sentence or two)
- **A · Just the facts** — seed: the current creds line ("Over twenty years of experience in
  public tech deployment and delivery … Currently working on civil trust infra. Assistant
  Professor of Practice in Urban Technology at Michigan (Taubman). Advisor to State Capacity
  AI. Previously led a 40+ person design unit at 18F.gov."). Beats → …
- **B · Show me what you make** — beats → …
- **C · I might want to work with you** — beats → …
- **D · I'm just poking around** — seed: the Paik line + existing digressions. Beats → …

### 4 · The reconvergence (where every path lands — the two real doors + contact)
- → ronbronson.design caption (currently "Tactics, talks & other work-related topics.") → …
- → ronbronson.dev caption (currently "Realized I needed somewhere for things I'm
  building.") → …
- Contact line (net-new — the front door has no email today; decide whether a path can
  *reach* Ron or only route onward) → …

### 5 · The small controls
- "Start over" label (working: "↺ start over") → …
- "Show me everything / skip" label → …

**Drafting notes:** each *beat* wants to be short — a heading plus a sentence or two — since
they animate in as discrete moments; and the *contact line* is genuinely net-new.
