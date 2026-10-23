# Agent Action Record: a Coaching page for masthead

**Review date:** 2026-10-22
**Reviewed by:** agent self-review
**Agent / system:** Claude Code (cloud session), branch `claude/happy-franklin-d63jgr` from `main` at `9269a7e`
**Accountable human:** Ron Bronson
**Trace:** this session's transcript; no separate trace available.

## 1. Intent
**Instruction (actual wording):** "Build a tennis coaching page for masthead since my coaching doesnt have a home anywhere currently invent a page type following the page style or likethe secondsry pages on dev or design"
**Standing rules:** masthead copy is Ron's; no arrows; plain underlined nav; small mono colophon; pinned theme dock; the TopBar links to sites, not to pages on them.

## 2. Action
Fetched and branched from `main` (with #29, masthead as a single page). Gathered every coaching fact already written across the four repos, then built `coaching.html` as a new page type modelled on `.design`'s secondary pages, in masthead's blocks: coral title block, cherry record strip, two split sections (text beside a photo, alternating sides), the front page's colophon. Added a Coaching module on the front page after Teaching. No new photos: both are already in `assets/`.

**Source of every sentence:**
- "I've coached high school tennis for ten years across 3 states." and the five numbers (91-33-4; 1 team state championship; 4 District/Regional titles; 5 Conference titles; 4 individual state champions): the `.design` colophon's rotating digression.
- "On the court", both paragraphs: `2026-site/legacy/src/content/work/18f-leadership.md`, verbatim except "In my tennis coaching, early on" → "Early on" (the page is already about coaching). The link is the blog post that essay links for the same passage.
- "As one of Oregon's two state tennis co-chairs, I led the redesign…": the Portfolio Demo board copy in `page-types/front-door.html`, third person turned to first.
- "Oregon adopted a dual team tennis championship… debuts in spring 2027: power-ranking-seeded brackets, 12 teams at 6A and 8 at 5A and 4A–1A, per gender…": `dev-site/projects/oregon-tennis.html`.
- "the first expansion of the state tournament since 1946": the canvas's "System test, index version" board ("Led the initiative to expand the Oregon high school tennis state tournament for the first time since 1946").
- Front-page tile: "High school tennis" / "Ten years across 3 states", from the digression.

## 3. Judgment
- **Where sources disagree, the newer wins.** The legacy case study says a pilot in 2026 starting with 4A–1A; the `.dev` project page (2026) says the format debuts in spring 2027 for every classification. The page uses the `.dev` version.
- **First person**, matching the front page, so the board's "he led" became "I led". Nothing else rewritten.
- **No link to `.dev`'s Oregon tennis project page**, per the rule against linking into other sites' pages; oregontennis.org is its own site and is linked.
- **Entry point:** a Coaching module after Teaching, using the same tile, so the page is reachable without changing the TopBar.

## 4. Deviation
None known against the instruction. The "most advanced high school tennis ranking system in the country" line is Ron's own board copy, carried as written; it is a claim, and his to keep or cut.

## 5. Consequence
Rendered at 1440px and on an emulated iPhone 13: one `h1`, zero arrows, theme dock fixed, mono colophon, no local 4xx, the record on one line at both sizes. `scrollWidth` reports the colour bands' 100vmax bleed (as on the front page), but wheel and touch scrolling sideways both stay at 0, so nothing scrolls sideways for a visitor.

## 6. Change
**Ron should read:** the record numbers and the 2027 format details, as claims about himself and Oregon.
**Keep doing:** source every sentence from Ron's existing words and say where it came from.

---

## Follow-up: the record by the numbers; a listening link

**Instruction (actual wording):** "Remove those blocks that looks terrible surely there is a better way to fo a by the numbers style treatment like thepudding.cool" · "Also listening.ronbronson.com should be linked somewhere on masthead not prominent"

**What changed:** the five bordered stat tiles are gone. The record is a hero figure (91–33–4), a one-line dek ("128 varsity matches, one mark each."), then a unit chart of 128 marks, one per match (filled = win, hollow = loss, dash = tie), with a key that names each count. The four honours follow as big numerals with small captions, no boxes. Marks are laid out on an explicit grid, 4 rows of 32 on wide screens and 8 of 16 below 900px, so every row is full; checked at eight widths from 320 to 1440. `listening.ronbronson.com` is a "Listening" chip in the front page rail's Links list, between Letterboxd and Bluesky.

**Judgment:** loaded the data-visualization guidance first. Part-to-whole with a headline number gave the form: a hero figure plus a unit chart, the Pudding's own idiom. Shape carries win/loss/tie, so meaning never rests on colour; the marks use the block's on-deep ink on deep, the pair DDR-013 already audits for contrast. **One deviation from that guidance:** no per-mark hover. There is no per-match data, so a tooltip could only say "Win" or "Loss"; an `aria-label` sentence gives the totals to screen readers instead. "128" is 91 + 33 + 4, nothing new. The dek is a new line of copy, the only one on the page; it states the chart's encoding.

---

## Follow-up: a narrative page instead

**Instruction (actual wording):** "Awful even worse / Give me 4 ideas I'll reject", then, after four rendered alternatives (a sentence, a box score, a bar with a leaderboard, a ledger): "I hate all of those get rid of it I don't want that at all … I'd rather just opt for more narrative driven single page no sections where I can just show a couple photos and tell a narrative story and maybe office a separate section that lets me narrate with some of the mess some of the honors and awards … accomplishments of my past"

**What changed:** every numbers treatment is gone: the coral title block, the cherry band, the unit chart, the honours numerals and their CSS. `coaching.html` is now a Story page: title, lead, then one prose column with the two photos set into it, and an "Honors" passage that is Ron's own digression line, verbatim ("My career varsity record apparently is 91–33–4. 1 team state championship, 4 District/Regional titles, 5 Conference titles. 4 individual state champions. So far…"). Photos are uncaptioned, in the front page portrait's frame. In-text links are underlined, matching masthead's other links.

**Judgment:** the page is laid out for Ron to narrate, so it carries only his existing words, in story order; the one line of new copy from the last round ("128 varsity matches, one mark each.") is gone with the chart.

**Deviation:** two rounds of numbers treatments went to Ron before he said what he wanted. The brief was a home for his coaching, and the first build turned the record into a dashboard nobody had asked for; the alternatives stayed inside the same assumption.

---

## Follow-up: Writing on coaching

**Instruction (actual wording):** "I've got a bunch of blog posts in other writing I've done over the years about coaching that could be worth excavating and sharing at the bottom of this page … is that something that could be added to this page"

**How the posts were found:** the three feeds `.design` already reads (blog.ronbronson.com, makingpublicwork.com, the game-design leaflet) carry only recent posts, so the full blog.ronbronson.com sitemap (112 posts) was read post by post and scored for coaching language. Fourteen are about coaching, June 2015 to October 2026. Making Public Work has nothing on coaching; the game-design blog's tennis posts are about the simulator, not coaching, and are left out.

**What changed:** a "Writing on coaching" list at the end of the story: title linked, month and year after it, newest first. Titles are as the blog publishes them (so "On Tennis Rpo" keeps the blog's casing). "Delivery Is a Visibility Problem" is in the list even though the story already links it inline, because it is about coaching.

**Not checked:** writing outside these three sites (old platforms, guest posts). If Ron has coaching writing elsewhere, it needs its own list of links.
