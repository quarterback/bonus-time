# bonus-time

Source for **ronbronson.com** — the front door for the four sites.

Its only job is to orient someone who has never met Ron and send them onward.
Four things, in this order, and nothing else:

1. **Photos** — evidence, not decoration, and **uncaptioned**. Each one carries an
   institution on its face: Design For The Public, 18F at GSA, Taubman College, AIGA
   Portland, the Oregon Athletic Coaches Association, a championship team. Pick images
   that show a room, a cohort, a banner, or a governing body — never a screenshot of
   software, and never a solo speaker shot. A photo of Ron presenting proves
   practitioner; a photo of the room proves institution. The image does the work, so
   don't label it; `alt` text carries the description for screen readers.
2. **A few orientation grafs** — written in the grammar of appointment: *hired me,
   asked me, made me president, appointed me*. The career is a sequence of people
   trusting Ron to build capability that didn't exist yet, in unrelated domains. That
   is the signal, and it is the thing every previous version of this page buried.
   Not an inventory of events, not a career timeline, not proof he still does the work.

   The test: **if someone spends two minutes here, do they realize this person has
   repeatedly been entrusted to build organizations, professions, communities, and
   public institutions?** If a change doesn't help that, it doesn't belong.
3. **Links to the other sites** — `.design`, `.dev`, `thinkingweapons.com`, the blog.
4. **Contact.**

Deliberately *not* here: talks (`.design`), **projects, case studies, prototypes and
indices** (`.dev`, `.design`), event write-ups (`thinkingweapons.com`), a résumé, a
timeline, or a "side quests" section. The portfolio is not a front-door asset — routing to
it doesn't add anything a stranger needs in the first two minutes, and it turns the page
into an inventory. Send people onward to it instead.

Coaching, boards, and the commission belong in the same prose as 18F — splitting them out
into their own narrative sections is what buried them last time. Card grids are not an
exception to this: a "Currently" module of teaching/coaching/radio/writing cards was tried
and cut, because the grid form flattened four unlike things into one shape and said less
than the grafs already do.

## Structure

Single hand-authored `index.html`. No framework, no build step, no dependencies.

Module order in `.main`, and the reasoning behind it:

| Module | Why it sits there |
| --- | --- |
| About Me | Two short grafs, in the grammar of appointment. **Keep it brief** — this is the authoritative intro, not the whole story. Depth belongs in the claim lists below, not in more `<p>`. |
| My Sites | The four site links, directly under the bio. Four doors, four `href`s — sharpen the subtitles freely, don't add a fifth. |
| Now Playing | Podcasts. |
| What I Believe | The philosophical register. Claims drawn from the Design as Repair and public mechanics talk abstracts on `.design`. |
| Who I'd Like to Meet | The MySpace field, used straight. The only forward-looking block on the page. |
| Ron's Top 8 | Photographic evidence, uncaptioned. |

**The rail ends after Favorites.** Everything below it — `Who I'd Like to Meet` and the
`Top 8` — sits in `.main--wide`, which spans both columns. Three things make that work,
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

Rail B holds `Listening`, `Reading` and `Favorites`. `Favorites` uses `.favs`, not the
2px-gap grid the main column uses — the rail is ~200–290px, so a label column would leave
nothing for the value. It mirrors the `.np` idiom (micro uppercase label, value in the
display face) so the rail reads as one thing.

**The page is deliberately not paragraph-led.** A wall of `<p>` is what the previous
version was, and it buried everything. In-depth content goes in `.claims` (one assertion
per row) or `.info` (label/value), both of which a stranger can skim. If you're reaching
for a third paragraph in About Me, the material belongs in a list instead.

`--tint` must stay an **opaque** colour. The 2px-gap grids show the ink gap colour behind
translucent fills, so any alpha value composites to near-black. Same trap the `.door`
hover comment describes.

Board service is gone on purpose — it's a résumé grid. The appointments worth keeping are
in the opening grafs. Don't bring it back.

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
