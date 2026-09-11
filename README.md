# bonus-time

Source for **ronbronson.com** — the front door for the four sites.

**This page is Ron's statement of what his work is, in his words, plus the personal
rail.** The main column carries his positioning copy: a deck line under the name, a
three-paragraph introduction, the five current lines of inquiry, a short critical stance
on service design, and a Practice paragraph that establishes the bonafides (Michigan,
18F, where the work has been presented). Then `Elsewhere`, the four onward links.

This replaced the earlier two-sentence front door, and before that **2026 So Far**. The
two-sentence version was rejected for being generic; the point of the page now is the
argument, not the routing. Two rules survive from the old version:

- **All copy is Ron's.** Nothing in the main column was drafted on his behalf. Edit the
  words only when he supplies new ones.
- **No Selected work / portfolio index.** `.dev` and `.design` carry the work. The
  Practice paragraph is as far as credentials go on this page.

Module order in `.main`:

1. **The introduction** — `.mod.lede`, no header bar. Keep it in sync with
   `<meta name="description">`, the OG/Twitter descriptions, and `assets/og.html`.
2. **Current lines of inquiry** — `.inq`, five titled entries in one module.
3. **A critical practice of service design** — `.blurb`.
4. **Practice** — `.blurb`. The one place titles and employers appear.
5. **Elsewhere** — `.doors`, the four sites labelled by their job.
6. **Ron's Top 8** — photos, uncaptioned, full width below the rail.

7. **Design as Repair** — the IxDA Oslo talk, embedded.
8. **Now Playing** — podcasts.

Only `My Sites` changed, and only its words: the same four links now carry Ron's
`Elsewhere` labels.

**The rail stays.** Contact, `Let's Talk About`, Listening, Reading, Watching, Favorites
and `Links` (formerly `Elsewhere`; renamed because the main column now owns that word).
It is the counterweight to the main column's register and the only place any of the
sites says what Ron is into rather than what he argues.

### The front door's actual test

**Does this exist anywhere else?** `.dev` catalogues what Ron has built; `.design` covers
how he works. If a module repeats either of them it is taking up room the front door
doesn't have. By that test the rail is the strongest part of the page — Favorites,
Listening, Reading, Watching, the Top 8 and the players exist nowhere else — and the
`Design as Repair` embed is the weakest, since `.design` already carries that talk.

**Lower the temperature.** `.dev` argues for the significance of every entry, which is
right for a catalogue of invented sports and simulation engines that nothing about the
names explains. It is wrong here. The front door states things; it doesn't make a case.
Anything that starts reaching for significance belongs on `.dev`.

**`Let's Talk About` is the module that passes that test outright.** Topics Ron is interested
in, at the top of Rail B. It's the only place on any of the sites that says what he's
interested in rather than what he's built — `Favorites` gestures at it but only as data.

Topics only: no sentence underneath and no links. A topic that needs explaining belongs on
the blog, and a link turns the module into a portfolio row. **The list changes with Ron's
mood** — that's the point of it, and why it's the cheapest module on the page to edit.
Rewrite it freely; nothing else depends on it.

### The introduction is not a résumé

Keep employers, titles, tenure, accomplishments, advisory roles, and individual projects
out of the opening. Those details already have better homes on the other sites. Broad
descriptors are useful orientation; a career history or case for expertise is not.

Cut and not to be reinstated: an "About Me" essay, a "Currently" card grid, board service
(a résumé grid of orgs and date ranges), community radio, and the four prose sections
(Currently / Experience / Working With Me / Recently) — that whole register read as a CV.

## Structure

Single hand-authored `index.html`. No framework, no bundler, no dependencies, and nothing
to run before deploying — the page is served as-is.

The one piece of machinery is `scripts/build-letterboxd.mjs`, run on a schedule by
`.github/workflows/refresh-letterboxd.yml`, which commits `data/letterboxd.json` for the
`Watching` grid. It is not a build step: the page works whether or not it has ever run,
and the module hides itself if the JSON is missing.

`.player--video` overrides the 152px audio-player height with a 16/9 ratio; without it the
video renders as a strip.

**The rail ends after Favorites.** Everything below it — the `Top 8` — sits in
`.main--wide`, which spans both columns. Three things make that work,
and breaking any one of them brings back a blue column running past its own content:

- `.railwrap` wraps both rail halves so they are **one** grid item. Placed in separate
  rows they got pushed apart, because a row-spanning `.main--top` inflates the
  `max-content` size of every row it crosses.
- `align-self: start` on the wrapper. Without it the rail's ground and its 3px border
  stretch to fill row 1, which is as tall as `.main--top`.
- The border-right lives on `.railwrap`, not on `.rail`, so it draws once and stops
  where the rail stops.

Rail B leads with `Let's Talk About`, then the live widgets, then `Favorites` and
`Links`.

Under 780px the wrapper becomes `display: contents` and the four pieces are placed by
explicit `grid-row`, so the widgets land at the bottom instead of following Contact.

**There is no portrait on the page.** Rail A is Contact and nothing else. `assets/profile.jpg`
stays in the repo because `assets/og.html` still uses it for the social card — don't delete
the file, and don't put it back on the page.

Rail B holds `Listening`, `Watching`, `Reading`, `Favorites` and `Links`. The rail is where the
page stops being a CV — the scrobble, the shelf, the favorites and the Are.na / PI.FYI /
Bluesky links are the counterweight to the institutions in the main column. If the page
starts reading corporate again, the fix is usually more here, not less there.

`Links` uses `.out`. The Bluesky butterfly is the official mark, inlined as an SVG
path: nothing on this page loads from a third party, so no icon font and no remote asset.
Any further social marks go the same way.

### Watching

Posters come from `data/letterboxd.json`, committed by the scheduled workflow — **not**
fetched live. `letterboxd.com/<user>/rss/` sends no `access-control-allow-origin`, so a
browser fetch is blocked; `Listening` and `Reading` can go direct only because last.fm and
Literal do send it. The page reads the committed JSON same-origin instead, the same
arrangement `2026-site` uses for `data/stream.json`.

**It is recently-watched, not favourites.** Letterboxd publishes no favourites feed —
`/favorites/rss/`, `/favourites/rss/` and `/likes/rss/` all 403 — so favourites aren't
obtainable. If the module ever needs to be genuinely four faves, they have to be hand-kept.

The builder exits non-zero on a failed or empty fetch, which leaves the last good JSON
committed rather than blanking the grid. The module reuses the `.books` classes, so posters
and book covers share one 2:3 grid; don't fork the styles.

`Favorites` uses `.favs`, not the
2px-gap grid the main column uses — the rail is ~200–290px, so a label column would leave
nothing for the value. It mirrors the `.np` idiom (micro uppercase label, value in the
display face) so the rail reads as one thing.

Any new fill colour must be **opaque**. The 2px-gap grids show the ink gap colour behind
translucent fills, so an alpha value composites to near-black. Same trap the `.door`
hover comment describes.

## Social card

`assets/og.png` is 1200×630 and is generated from `assets/og.html`, which carries the
regeneration command in a comment at the top. **Regenerate it when the framing changes** —
the card carries its own one-line summary and nothing enforces a match with the page.

The card, `<meta name="description">`, and the OG/Twitter descriptions carry the deck
line, "Systems design for the world after service design", and the four fields from the
introduction. That is
four copies of one paragraph, and **the card is the copy that goes stale silently**,
because its text is baked into a PNG: it read "Advisor at State Capacity AI" for as long
as it took someone to notice. Change one, change all four, and regenerate.

The command in `og.html` carried a `deviceScaleFactor:2` that wrote a 2400×1260 file while
`og:image:width` / `og:image:height` still declared 1200×630. It's been dropped. If you
want the 2× card, update those two meta tags in the same commit.

Don't point `og:image` at `profile.jpg`. It's 4:5, and `summary_large_image` crops to
1.91:1 straight through Ron's forehead — which is what the card previously did.

- `assets/site.css` and `assets/palette.js` are **copied verbatim across all four
  repos** — do not edit them here, it silently desyncs the other three sites. Anything
  site-specific goes in the `<style>` block in `index.html`.
- Body copy is **PP Neue Montreal Text** (`assets/fonts/MTL/`); captions, card
  subtitles, and the footer are **PP Pangram Sans Medium** (`assets/fonts/`). Both are
  self-hosted and declared in `index.html`. Display is Author from `site.css`. Nothing
  monospace is left on the page, and no fonts load from a third party.
  Note: the Pangram Sans upload has no Regular in the standard width — upright runs
  Thin / Medium / Semibold / Bold, and "Regular" exists only as an italic — and ships
  no woff2. Medium at 500 is the text weight.
- The email address is **never written into the DOM**. It's assembled from char codes
  at click time behind an "Email me" button, so there's no raw address or `mailto:`
  href in the source. Any new contact control just needs `data-contact`.
- Colour comes from `palette.js`, which writes the `:root` tokens before first paint.
  Run `RBPalette.audit()` in the console after any colour change — `--ink-soft` measures
  3.85:1 on the Pollen ground and **fails AA for small text**, so label and note text
  uses `--ink`.
- Photos are pre-sized to ~1400px and under 260K each. Don't commit camera-resolution
  images; there is no build step to shrink them.

## Facts

Sourced from the other three repos and from Ron directly. The long versions of the
18F, Portland Digital Corps, Michigan, and Oregon tennis entries live in
`2026-site/legacy/src/content/work/`.
