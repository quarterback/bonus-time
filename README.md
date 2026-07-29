# bonus-time

Source for **ronbronson.com** — the front door for the four sites.

**This page answers "what's true right now?", not "who am I?"** That is a different
information architecture from a personal site, and it is the decision everything else
follows from. There is no About page here and no essay to read. The visitor is given
orientation — role, institution, context — and is trusted to assemble the picture
themselves. For people used to evaluating senior leaders, that assumption of competence
is a stronger signal than a well-written paragraph.

The scan it is built for: *"Oh, he teaches." → "Oh, federal leadership." → "Oh, AI." →
"Oh, Europe."* Each section adds a piece of context. None of them summarizes him.

Its only job is to orient someone who has never met Ron and send them onward.
Four things, in this order, and nothing else:

1. **Photos** — evidence, not decoration, and **uncaptioned**. Each one carries an
   institution on its face: Design For The Public, 18F at GSA, Taubman College, AIGA
   Portland, the Oregon Athletic Coaches Association, a championship team. Pick images
   that show a room, a cohort, a banner, or a governing body — never a screenshot of
   software, and never a solo speaker shot. A photo of Ron presenting proves
   practitioner; a photo of the room proves institution. The image does the work, so
   don't label it; `alt` text carries the description for screen readers.
2. **Now** — reality, not aspirations and not philosophy. Role, then the bare context
   under it. Five entries, no sentences.
3. **Experience** — context, not a CV. **Institution names only**: no titles, no dates,
   no durations, no "this taught me…". The restraint is the whole point; the moment
   dates appear it becomes a résumé grid, which is what board service was and why it
   was cut.
4. **Working Together** — the questions senior people actually have, answered as a bare
   list. Not "hire me", no pitch, no elaboration.
5. **Links to the other sites** — `.design`, `.dev`, `thinkingweapons.com`, the blog.
6. **Contact.**

The test: **can someone get the shape of this person in about fifteen seconds without
reading a paragraph?** If a change doesn't help that, it doesn't belong.

Deliberately *not* here: talks (`.design`), **projects, case studies, prototypes and
indices** (`.dev`, `.design`), event write-ups (`thinkingweapons.com`), a résumé, a
timeline, or a "side quests" section. The portfolio is not a front-door asset — routing to
it doesn't add anything a stranger needs in the first two minutes, and it turns the page
into an inventory. Send people onward to it instead.

**There is no prose on this page, and that is deliberate.** Every version before this one
was paragraph-led and buried everything in it. Content goes in `.now` (role + context),
`.exp` (institution names), `.work` (a tag row), or `.favs` in the rail. If you find
yourself writing a sentence, the material either belongs in one of those forms or belongs
on `.design`.

Cut and not to be reinstated: an "About Me" essay, a "Currently" card grid, board service
(a résumé grid of orgs and date ranges), and community radio.

## Structure

Single hand-authored `index.html`. No framework, no build step, no dependencies.

Module order in `.main`, and the reasoning behind it:

| Module | Why it sits there |
| --- | --- |
| Now | `.now` — role in the display face, bare context under it. The page opens with reality. |
| My Sites | The four site links. Four doors, four `href`s — sharpen the subtitles freely, don't add a fifth. |
| Now Playing | Podcasts. |
| Experience | `.exp` — a 2-up grid of institution names. Eight entries fill four rows exactly; an odd count leaves an empty cell showing the grid's ink ground. |
| Working Together | `.work` — a wrapping tag row, so any number of entries fits without that empty-cell problem. |
| Ron's Top 8 | Photographic evidence, uncaptioned. |

`Now` and `Now Playing` both start with the same word and sit three modules apart. If a
better name for the podcast module turns up, take it — "Listening" is already used by the
rail scrobble.

`Experience` sits in `.main--top` rather than the full-width section on purpose: it is
what balances the content column against the rail's height. Moving it down leaves a white
gap beside the rail.

**The rail ends after Favorites.** Everything below it — `Working Together` and the
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

Any new fill colour must be **opaque**. The 2px-gap grids show the ink gap colour behind
translucent fills, so an alpha value composites to near-black. Same trap the `.door`
hover comment describes.

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
