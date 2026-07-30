# bonus-time

Source for **ronbronson.com** — the front door for the four sites.

**This page answers "what's true right now?", not "who am I?"** That is a different
information architecture from a personal site, and it is the decision everything else
follows from. There is no About page here and no essay to read. The visitor is given
orientation — role, institution, context — and is trusted to assemble the picture
themselves. For people used to evaluating senior leaders, that assumption of competence
is a stronger signal than a well-written paragraph.

What carries it now is the work itself — named, dated, linked — plus the rail. Nothing on
the page characterizes Ron; the reader infers him from specifics. That inference is the
whole mechanism, and it's why summarizing blocks keep getting cut.

Its only job is to orient someone who has never met Ron and send them onward.
Four things, in this order, and nothing else:

1. **Photos** — evidence, not decoration, and **uncaptioned**. Each one carries an
   institution on its face: Design For The Public, 18F at GSA, Taubman College, AIGA
   Portland, the Oregon Athletic Coaches Association, a championship team. Pick images
   that show a room, a cohort, a banner, or a governing body — never a screenshot of
   software, and never a solo speaker shot. A photo of Ron presenting proves
   practitioner; a photo of the room proves institution. The image does the work, so
   don't label it; `alt` text carries the description for screen readers.
2. **2026 So Far** — the year's work as bullets, each carrying its link. Name the work
   (article titles, talk titles) rather than describing it. **No bio, no orientation
   block, no "currently" framing** — all three were tried and cut.
3. **Links to the other sites** — `.design`, `.dev`, `thinkingweapons.com`, the blog.
4. **Contact.**

The test: **can someone get the shape of this person in about fifteen seconds?** If a
change doesn't help that, it doesn't belong.

Deliberately *not* here: talks (`.design`), **projects, case studies, prototypes and
indices** (`.dev`, `.design`), event write-ups (`thinkingweapons.com`), a résumé, a
timeline, or a "side quests" section. The portfolio is not a front-door asset — routing to
it doesn't add anything a stranger needs in the first two minutes, and it turns the page
into an inventory. Send people onward to it instead.

**All copy is Ron's.** Descriptions, subtitles, and section text drafted on his behalf
get rejected — leave slots empty (or commented) until he supplies the words.

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

Module order in `.main`, and the reasoning behind it:

| Module | Why it sits there |
| --- | --- |
| 2026 So Far | `.ups` bullets. Rename per year. |
| Design as Repair | The IxDA Oslo talk, embedded. |
| My Sites | The four site links. Four doors, four `href`s. |
| Now Playing | Podcasts. |
| Ron's Top 8 | Photographic evidence, uncaptioned. |

**The Design as Repair embed is here only because `.design` doesn't have one** — that site
links the talk but never embeds it. If an embed lands there, delete this module rather than
running the same video in two places. The Throughline delivery of the same talk isn't
public, which is why the Oslo recording is the one worth showing.

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

Under 780px the wrapper becomes `display: contents` and the four pieces are placed by
explicit `grid-row`, so the widgets land at the bottom instead of following the portrait.

Rail B holds `Listening`, `Watching`, `Reading`, `Favorites` and `Elsewhere`. The rail is where the
page stops being a CV — the scrobble, the shelf, the favorites and the Are.na / PI.FYI /
Bluesky links are the counterweight to the institutions in the main column. If the page
starts reading corporate again, the fix is usually more here, not less there.

`Elsewhere` uses `.out`. The Bluesky butterfly is the official mark, inlined as an SVG
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

The card, `<meta name="description">`, and the OG/Twitter descriptions still carry the
State Capacity AI / Michigan framing from the deleted `Currently` section. The facts hold,
but they are now the only summarizing copy anywhere in the project — worth revisiting with
Ron's words when he has them.

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
