# Agent Action Record: academic front door with personality

**Review date:** 1 November 2026
**Agent / system:** Claude Code (cloud session), on `claude/magical-faraday-uqz6vn`
**Accountable human:** Ron Bronson (owner)

## 1. Intent

> .com ronbronson.com, academic front door with personality as improvements to what's already out there … these are tweaks not massive redesigns but build section/page types as needed

The source is the canvas board "ronbronson.com, academic front door with personality".

## 2. Action

- `index.html`: the red name bar, headline and photo are kept. Below them, in board order:
  - the introduction, with the fields and a short record beside it
  - **Positions**: five claims, each with the record behind it and links to where it's documented
  - Watch / Listen, plus the board's speaking paragraph, "All talks" and "Invite me to speak"
  - **Teaching** (Michigan photo, three courses, the studio), **Writing** and **Research**
  - **Community** on ink with the Design For The Public photo and the rooms line
  - **Coaching** with its photo
  - reading, watching and elsewhere, as before
  - Now listening, which now also carries the radio show
- Nav: Research, Teaching, Writing, Talks, Community, Coaching, About, Design, Games & Models, Blog, in two columns. On About, Coaching and Events, the .dev link is now "Games & Models", replacing "Research & Teaching", to match .dev's new framing.
- Removed from the front page: the About text section (replaced by the introduction and Positions) and What I do (STAND-IN copy, replaced by Positions).
- `assets/tabloid.css`: new section types `.mi`, `.pos`, `.tk`, `.blk`, `.kl`, `.comm`, `.coach` and `.np__radio`.

## 3. Judgment

- **Left out from the board:** the two large door links to .design and .dev. Ron removed them on 30 October because they take people off the page; the nav carries both. Also left out: captions under the video and podcast, which Ron has ruled out site-wide.
- The board's bracketed Research note wasn't published; an HTML comment marks the spot STAND-IN.
- Positions copy is the board's, with "eight-week" hyphenated. Its placeholder links resolve to the real posts and pages. The W3C Agent-to-Web Framework Community Group appears in Ron's own earlier copy (`page-types/front-door.html`).
- "Invite me to speak" uses the existing click-to-email button, so the address is never written into the page.
- The README rule that the Practice paragraph is as far as credentials go is superseded by the board's Positions section.

## 4. Consequence

Rendered at 1440px and 390px in headless Chromium: no horizontal scroll and no script errors.
