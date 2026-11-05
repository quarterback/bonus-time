# Agent Action Record: field practitioner of public life

**Review date:** 5 November 2026
**Agent / system:** Claude Code (cloud session), on `claude/field-practitioner-front-door`
**Accountable human:** Ron Bronson (owner)

## 1. Intent

> build the field practitioner of public life version on bonus-site, it's already there but update it

The source is the canvas board "ronbronson.com, field practitioner of public life", read again just before the build so it includes Ron's latest edits to the introduction. He also asked to "open a pr after".

## 2. Action

`index.html`, in board order:

- **Nav:** Research, Teaching, Writing, Talks, Community, Coaching, Blog and the mail button. About, Design and Games & Models come out of the nav. The two other sites now get the doors instead.
- **Opening:** the headline and the rule under the bar are gone. The photo now runs full width under the bar.
- **Introduction:** one column. It uses Ron's two sentences from the board, followed by the research interests line in red.
- **Research:** four claims with no heading, replacing Positions:
  - Platforms spend trust they never built.
  - The local intermediary was civic infrastructure.
  - Coordination was the civic life.
  - Hype moves money before it moves outcomes.

  The old Research block, which held only a list of fields, is removed; the fields now sit in the introduction.
- **Removed:** the invitations section and the speaking paragraph under Watch and Listen. Neither is on the board.
- **Writing:** Dark Patterns Won replaces the Piccalilli piece.
- **Community:** now in third person, as on the board, and the "Everything I've founded" link is gone. The heading still links to the events page.
- **Doors:** "Public Delivery Leadership" goes to ronbronson.design and "Deployment" goes to ronbronson.dev. They are titles only, sitting after Community on solid red and pink blocks.
- **Coaching:** now in third person.
- **Metadata:** the meta, Open Graph and Twitter descriptions now use the new introduction. Vloora is no longer named there.
- **Colophon:** last updated 5 November 2026.

`assets/tabloid.css` adds three things: `.lead--bleed` for the full-width photo, `.fi` for the introduction, and `.fdoors` for the doors.

## 3. Judgment

- **Unpublished sources left out:** the board cites "The rails of trust", "Platform extraction and urban life" and "Destruction as a Service". I couldn't find any of them published on blog.ronbronson.com, so they don't appear. An HTML comment marks where they go.
- **Substitute link:** "The local intermediary" claim links to the published "Service Design for AI: The Disintermediation Problem" (February 2025). Ron should confirm that pairing.
- **Writing format:** The Hidden Cost of Everything stays labelled "Zine", which is what the repo has documented. The board says "Book", and only Ron can settle which is right.
- **Doors reversed:** Ron removed door links on 30 October. His 5 November note on the board asks for them again, titles only, and the latest instruction wins.
- **Social card:** `assets/og.png` and `assets/og.html` still show the old headline, so the social card no longer matches the page. A new card is a design decision for Ron.

## 4. Consequence

- **Rendering:** checked at 1440px and 390px in headless Chromium. There was no horizontal scroll and there were no script errors.
- **Editorial check:** `prosekeep@0.3.0 check --changed --base origin/main` found 0 mechanical findings. The words still need Ron's own editorial review.

## 5. Deviations

- Three of the board's links are left out (see Judgment).
- One of the board's links is swapped for a published post.
- One of the board's format labels stays at its documented value.

## 6. Next run

- Get URLs for the three unpublished pieces, or have Ron confirm they stay out.
- Decide on a new social card.
- Decide whether About needs a link somewhere on the page now that it has left the nav.
